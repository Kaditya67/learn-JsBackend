require('dotenv').config() 
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const jsonData={
    "login": "Kaditya67",
    "id": 140485509,
    "node_id": "U_kgDOCF-jhQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/140485509?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Kaditya67",
    "html_url": "https://github.com/Kaditya67",
    "followers_url": "https://api.github.com/users/Kaditya67/followers",
    "following_url": "https://api.github.com/users/Kaditya67/following{/other_user}",
    "gists_url": "https://api.github.com/users/Kaditya67/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Kaditya67/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Kaditya67/subscriptions",
    "organizations_url": "https://api.github.com/users/Kaditya67/orgs",
    "repos_url": "https://api.github.com/users/Kaditya67/repos",
    "events_url": "https://api.github.com/users/Kaditya67/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Kaditya67/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": "Aditya_Ojha__",
    "public_repos": 21,
    "public_gists": 0,
    "followers": 7,
    "following": 8,
    "created_at": "2023-07-25T06:39:57Z",
    "updated_at": "2024-07-06T08:15:38Z"
}

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/twitter', (req, res) => res.send('Hello Twitter!'))
app.get('/insta', (req, res) => res.send('Hello Insta!'))

// app.get('/github', (req, res) => res.send(jsonData))
app.get('/github', (req, res) => res.json(jsonData))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))