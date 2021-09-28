import starwarsFilms from "../util/fetch.js"
import Sort from '../util/sort.js'
const {
  sortByName,
  sortByGender,
  sortByHeight
} = Sort()

const FilmsHandler = (req, res) => {
  console.log(req)
}
export default FilmsHandler