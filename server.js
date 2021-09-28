import express from 'express'
import { config } from 'dotenv'
import film from './route/filmRouter.js'

config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/v1', film)

app.get('/', (req, res) => {

  res.status(200).json({
    status: "success",
    msg: `Please use the endpoints /api/v1/films or /api/v1/ilm/:filmID or /api/v1/film/character/?sort=value to have access to the movies`,
    data: "sorry no movie here"
  })
})


app.listen(process.env.PORT, () => console.log(`Server is runing, \nvisit http://${process.env.HOST_LOCAL}:${process.env.PORT}`))