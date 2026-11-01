import { initDatabase } from './db/init.js'
import { Post } from './db/models/post.js'
import dotenv from 'dotenv'
dotenv.config()
await initDatabase()
const post = new Post({
  title: 'Hello from the outside!',
  author: 'Deepak Janke',
  contents: 'This is new exciting Front end connecting database using Mongoose.',
  tags: ['other'],
})
await post.save()
const posts = await Post.find()
console.log(posts)
