import starwarsFilms from "../util/fetch.js"
import Sort from '../util/sort.js'
import filterHandler from "../util/filer.js"
import heightHandler from "../util/heightCalculator.js"

const CharacterHandler = async (req, res) => {

  const {
    sortByGender,
    sortByHeight,
    sortByName
  } = Sort()

  try {

    const result = await starwarsFilms(`https://swapi.dev/api/films/${req.params.filmID}`)

    let characterFetch = await Promise.all(result.characters.map(async c => await starwarsFilms(c)))

    const sortParam = req.query.sort
    const filterParam = req.query.gender

    const printResult = () => {
      if(sortParam){
        return (sortParam === "name") ? sortByName(characterFetch) : (sortParam === "gender") ? sortByGender(characterFetch) : (sortParam === 'height') ? sortByHeight(characterFetch) : 'wrong sort param'
      }

      if(filterParam){
        return filterHandler(characterFetch, filterParam)
      }

    }

    res.status(200).json({
      status: 'success',
      "ip address": req.ips.length > 0 ? req.ips : req.ip,
      total_characters: characterFetch.length,
      total_height: heightHandler(characterFetch),
      data: (filterParam || sortParam)? printResult() : characterFetch
    })

  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}


export default CharacterHandler