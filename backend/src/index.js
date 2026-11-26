import dotenv from 'dotenv'

dotenv.config()

console.log('DATABASE_URL:', process.env.DATABASE_URL)

import { initDatabase } from './db/init.js'
import { app } from './app.js'

const PORT = process.env.PORT || 3000

await initDatabase()

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})