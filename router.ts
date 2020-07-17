import {Router, Context} from './deps.ts';

const router = new Router();

router
    .get('/', async (ctx) => {
            ctx.response.redirect('/index.html');
        })
    .post('/api', async (ctx) => {
        const {value} = await ctx.request.body();
        const formData: URLSearchParams = value as URLSearchParams;
        let username: string | string[] | null = formData.get('username');
        console.log(username);
        
        // const form = await ctx.request.body();
        // console.log(form.value.get('username'));
    })

export default router;