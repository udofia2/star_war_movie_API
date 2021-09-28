  import starwarsFilms from '../util/fetch.js'

  const AllFilmsHandler = async (req, res) => {
    /**
     * Fetches films from starwar api
     */
    try {
      const result = await starwarsFilms('https://swapi.dev/api/films')

      // let characterFetch = await Promise.all(result.results.map(async r => await Promise.all(
      //   r.characters.map(async c =>
      //     await starwarsFilms(c)))))

      // const options = {
      //   movie_total_numbers: result.total,
      //   movie_name: result.results.title,
      //   release_date: result.results.release_date,
      //   character_total_number: result.results.characters.length,
      //   character_total_heights: result.results.characters.heights.length,
      // opening_crawl: result.results.opening_crawl.replace(/\r\n/gi, ' '),
      // // characterFetch,
      // }

      res.status(200).json({
        films: await Promise.all(result.results.map(async r => {
          return {
            status: 'success',
            data: {
              movie_name: r.title,
              release_date: r.release_date,
              character_total_number: r.characters.length,
              opening_crawl: r.opening_crawl.replace(/\r\n/gi, ' '),
              characters: await Promise.all(r.characters.map(async c => await starwarsFilms(c)))
            }
          }
        }))
      })

      console.log(result.results.map(r => r.title))
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
  }

  export default AllFilmsHandler