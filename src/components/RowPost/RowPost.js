import React from 'react'
import './RowPost.css'
import { useState,useEffect } from 'react'
import axios from '../../axios'
import {imageUrl} from '../../constants/constants'
import YouTube from 'react-youtube'
import { API_KEY } from '../../constants/constants'

function RowPost(props) {

  const [movies,setMovies]=useState([]);
  const [urlId,setUrlId]=useState();

useEffect(()=>{
  axios.get(props.url).then((response)=>{
    console.log(response.data);
    setMovies(response.data.results)
  })

},[])

const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

const getVideoId = (id) =>{
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
    if(response.data.results.length!==0){
      console.log(response.data.results[0]);
    setUrlId(response.data.results[0])
    }else{
      console.log('empty array')
      
    }

   
    
  })

}

  return (
    <div className='row'>
        <h2>{props.title}</h2>
       
        <div className='posters'>
        {movies.map((obj)=>{
          return(<img onClick={()=>getVideoId(obj.id)} className={props.isLarge ? 'large-poster' : 'small-poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
          )
        })}
            
            
        </div>
        { urlId && <YouTube videoId={urlId.key} opts={opts} />}
       
      
    </div>
  )
}

export default RowPost
