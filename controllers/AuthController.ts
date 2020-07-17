import { RouterContext, Payload, setExpiration, makeJwt, compareSync, Jose, hashSync } from "../deps.ts";
import User from '../models/User.ts';

const header: Jose = {
    alg: "HS256",
    typ: "JWT",
}

class AuthController {
    async postLogin(ctx: RouterContext) {
        const {value} = await ctx.request.body();
        const formData: URLSearchParams = value as URLSearchParams;
        let username: string | string[] | null = formData.get('username');
        console.log(username);

        const user = await User.findUser({username});
        console.log(user);

        if (!user) {
            ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/login.ejs`, {
                error: "Invalid Email Address",
                inputs: {
                    password
                },
                errorType: 'email',
                // changeButton: changeButton
            });
        } else if (!compareSync(password, user.password)) {
            ctx.response.body = await renderFileToString(`${Deno.cwd()}/views/login.ejs`, {
                error: "Incorrect Password", 
                inputs: {
                    email
                }, 
                errorType: 'password',
                // changeButton: changeButton
            });
        } else {
            console.log('Success');
            const payload: Payload = {
                iss: user.email,
                exp: setExpiration(Date.now() + 1000*60*60),
            };
            const jwt = makeJwt({key: Deno.env.get('JWT_KEY') || '', header, payload});
            ctx.cookies.set("jwt", jwt);
            ctx.response.redirect('/');
            ctx.state.currentUser = user;
            console.log(`Layk ${ctx.state.currentUser.email}`)
        }
    }
}

const authController = new AuthController();
export default authController;