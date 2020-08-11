const jsonServer = require('json-server')
const path = require('path')
const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
const cors = require('cors')
const { v4: uuidv4 } = require('uuid');

server.use(cors())
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

server.get('/posts',(req, res) => {
    const email = req.query.id;
    if(email) {
        const user = router.db.get('users').getById(email).value();
        const posts = router.db.get('posts').value().filter((data)=>data.user_id==email);
        if(user == null) {
            res.status(404).send({error: "User not found"});
        }
        else {
            const _user = {
                given_name: user.given_name,
                family_name: user.family_name,
                picture:user.picture,
                uuid:user.uuid,
                id:user.id
            }
            posts.map(data=>{
                data['user'] = _user;
            })
            res.send(posts);
        }
    }else {
        const posts = router.db.get('posts').value();
        posts.map(data=> {
            const user = router.db.get('users').getById(data.user_id).value();
            data.user = user;
        })
        res.send(posts);
    }
})

server.use(jsonServer.bodyParser)
server.post('/users',(req, res) => {
    const user_email = req.body.id;
    const responseData = {};
    if(user_email == null) {
        res.status(404).send({error: "Email id is missing in your body"});
    }
    let user = router.db.get('users').getById(user_email).value();
    if(user == null) {
        req.body.createdAt = Date.now();
        req.body.uuid = uuidv4();
        router.db.get('users').insert(req.body).value();
        router.db.write();
    }
    // else {
    //     router.db.get('users').updateById(email, req.body).value();
    // }
    user = router.db.get('users').getById(user_email).value();
    res.status(200).send(user);

})
// server.use(jsonServer.bodyParser)

server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now();
        req.body.id = uuidv4();
    }
    next()
})

server.use(router)
server.listen(3004, () => {
    console.log('JSON Server is running')
})