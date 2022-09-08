import homeRoute from './home.routes.js';
import authRoute from './auth/auth.routes.js';
import postRoute from './post/post.routes.js';



const routers = (app) => { 
    app.use('/home', homeRoute)
    app.use('/api/v1/auth', authRoute);
    app.use('/api/v1/post', postRoute)
}


export default routers;