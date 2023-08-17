import {Button, Card, CardActionArea, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import { useMovieContext } from './contextapi/Context';
import * as actions from '../Components/contextapi/ActionTypes'

export type item =  {
    Poster:string,
    Title:string,
    Year:string,
    imdbID:string
  };
export const MovieItem = (props: item) => {
  const moviecontext = useMovieContext();
  const storedmovie = moviecontext.watchList.find((Movie:any) => Movie === props);
  const storedmoviewatched = moviecontext.watched.find((Movie:any) => Movie === props);
  const watchListdisabled = storedmovie ? true : storedmoviewatched ? true: false;
  const watcheddisabled =storedmoviewatched ? true: false;
  return (
    <Card key={props.imdbID} sx={{m:1,maxWidth:'250px'}} className='d-flex flex-column justify-content-between'>
                  <CardActionArea>
                  <CardMedia sx={{Width:'100%'}} component={'img'} height={250} image={props.Poster} alt={props.Poster}/>
                  </CardActionArea>
                  <CardContent>
                    <Typography variant='h5' gutterBottom component={'div'}>
                      Year: {props.Year}
                    </Typography>
                    <Typography variant='h6' color={'text.secondary'}>
                    {props.Title}
                    </Typography>
                    <Stack direction='row'className='d-flex justify-content-between' >
                    <Button onClick={() => moviecontext.moviedispatch({
                      type :actions.ADD_MOVIE_TO_WATCHLIST,
                      movie:props
                    })} disabled={watchListdisabled} variant='contained' sx={{bgcolor:'primary.light',mr:'4px'}}>WatchList</Button>
                    <Button onClick={() => moviecontext.moviedispatch({
                      type :actions.ADD_MOVIE_TO_WATCHED,
                      movie:props
                    })}disabled={watcheddisabled} variant='contained' sx={{bgcolor:'primary.light'}}>Watched</Button>
                    </Stack>
                  </CardContent>
                </Card>
  )
}
