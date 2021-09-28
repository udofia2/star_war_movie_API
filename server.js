import express from 'express'
import { config } from 'dotenv'
import film from './route/filmRouter.js'

config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', film)

app.listen(process.env.PORT, () => console.log(`Server is runing, \nvisit http://${process.env.HOST_LOCAL}:${process.env.PORT}`))