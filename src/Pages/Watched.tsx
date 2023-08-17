import { Layout } from '../Components/Layout'
import { Chip,Button,Card,CardActionArea,CardMedia,CardContent } from '@mui/material'
import { useMovieContext } from '../Components/contextapi/Context';
import * as actions from '../Components/contextapi/ActionTypes'

export const Watched = () => {
  const moviecontext = useMovieContext();
  return (
    <Layout>
      <div className='container'>
        <div className='mt-3 p-2 d-flex justify-content-between'>
          <h1>My Watched List :</h1>
          <span>
          <Chip sx={{width:'150px',height:'45px',fontSize:'25px'}} label={`${moviecontext.watched.length} Movie`} color='primary'/>
          </span>
        </div>
        <div className='d-flex flex-wrap' >
          {
            moviecontext.watched.map((movie: any) => (
              <Card key={movie.imdbID} sx={{m:1,maxWidth:'250px'}} className='d-flex flex-column justify-content-between'>
                  <CardActionArea>
                  <CardMedia sx={{Width:'100%'}} component={'img'} height={250} image={movie.Poster} alt={movie.Poster}/>
                  </CardActionArea>
                  <CardContent>
                    <Button onClick={() => moviecontext.moviedispatch({
                      type : actions.REMOVE_MOVIE_FROM_WATCHED,
                      movie : movie
                    })} variant='contained' color='error'>Delete</Button>
                  </CardContent>
                </Card>
          ))
          }
        </div>
      </div>
    </Layout>
  )
}
