import {Router, Context} from './deps.ts';
import siteController from './controllers/SiteController.ts';
// import websocketController from './controllers/WebsocketController.ts';

const router = new Router();

router
    .get('/', async (ctx) => {
            ctx.response.redirect('/index.html');
        })
    // .get('/ws', websocketController)
    // .get('/login', siteController.login)
    // .post('/login', async (ctx) => {

        // const form = await ctx.request.body();
        // console.log(form.value.get('username'));
    // })

export default router;