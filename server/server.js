const jsonServer = require('json-server')
const path = require('path')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.get('/signin',(req, res) => {
    const email = req.query.email;
    const password = req.query.password;
    const user = router.db.get('users').getById(email).value();
    const posts = router.db.get('posts').value().filter((data)=>data.user_id==email);
    if(user == null) {
        res.status(404).send({error: "User does not found"});
    }
    else {
        if(user.password != password) {
            res.status(400).send({error:"Password is incorrect!"});
        }
        const responseData = {};
        responseData.email = user.email;
        responseData.profile = user.profile;
        responseData.posts=posts;
        res.send(responseData);
    }
})
server.post('/createpost',(req, res) => {
    const email = req.query.email;
    const password = req.query.password;
    const user = router.db.get('users').getById(email).value();
    const posts = router.db.get('posts').value().filter((data)=>data.user_id==email);
    if(user == null) {
        res.status(404).send({error: "User not found"});
    }
    else {
        if(user.password != password) {
            res.status(400).send({error:"Password is incorrect!"});
        }
        const responseData = {};
        responseData.email = user.email;
        responseData.profile = user.profile;
        responseData.posts=posts;
        res.send(responseData);
    }
})
server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
    if (req.method === 'POST'|| req.method === 'PUT') {
        req.body.createdAt = Date.now()
    }
    next()
})

server.use(router)
server.listen(3004, () => {
    console.log('JSON Server is running')
})