import mongoose, { Schema } from 'mongoose'

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    contents: String,
    content: String,
    tags: [String],
  },
  { timestamps: true },
)

export const Post = mongoose.model('Post', postSchema)
export default Post
