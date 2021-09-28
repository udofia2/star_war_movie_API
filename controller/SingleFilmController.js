import starwarsFilms from "../util/fetch.js"

const singleFilmHandler = async (req, res) => {

  try {
    /**
     * Fetches single film from starwar api
     */
    const result = await starwarsFilms(`https://swapi.dev/api/films/${req.params.id}`)

    const options = {
      movie_name: result.title,
      release_date: result.release_date,
      opening_crawl: result.opening_crawl.replace(/\r\n/gi, ' '),
      characters: result.characters,
    }

    res.json(options)

  } catch (error) {
    let BgWhite = "\x1b[47m",
      FgMixed = '\x1b[36m%s\x1b[0m',
      FgRed = "\x1b[31m"
    if (error.code === "ERR_INVALID_URL") {
      console.log(FgRed +
        'Wrong url input. ' + BgWhite +
        FgMixed, '{ url_format_example: https://swapi.dev/films/1 }')

      res.status(500).json({
        status: fail,
        msg: error.stack
      })
    }

    // if (error.code === "FetchError") {
    //   console.log('error')
    //   return
    // }
    if (error.message.errno === "EAI_AGAIN") {
      console.error('\nAn ERROR occured \nPlease check your internet connection...\nThank you')
      return
    }
    console.log(error.TypeError);
    res.status(500).json(error)
  }
}

export default singleFilmHandler