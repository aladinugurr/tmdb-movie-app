import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { FaRegBookmark } from "react-icons/fa";
import YouTube from 'react-youtube';

const Movie = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();
  let videoUrl = '';

  const getMovieDetailsById = async (id) => {
		const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_URL}`);
		const data = await response.json();
		console.log(data);
		setMovie(data)
  }

  const getVideo = async(id) => {
	const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_URL}&append_to_response=videos&language=en-US`)
	const data = await res.json();
	console.log(data);
	videoUrl =  data.results.filter(vid => vid.name === 'Official Trailer')
	return;
  }

  useEffect(() => {
		getMovieDetailsById(params.id)
		getVideo(params.id);
  }, [])

  return (
    <div className='p-5'>
		<div className="flex justify-between p-4">
			<div>
		<h2 className='text-lg font-bold mb-3'>{movie.original_title}</h2>
				<div className='flex gap-4'>
				<img className='w-[196px] h-[291px] rounded-[1.5rem]' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.original_title} />
					<div className='flex flex-col justify-evenly'>
						<div className='flex'>
						{movie.genres?.map((genre) => (
							<span className='rounded-[20px] cursor-pointer border-2 border-black p-2 m-1 w-max'>{genre.name}</span>
						))}
						</div>
						<p className='w-[30vw] m-4'>{movie.overview}</p>
						<div className='m-4 flex gap-5 text-center items-center'>
							<div className='flex flex-col pl-4'>
								<span>IMDB Ratings</span>
								<span>⭐️ {movie.vote_average} <span className='text-gray-600 text-xs'>/ 10</span></span>
							</div>
							<p className='text-gray-600 text-xs'>{(movie.vote_count / 1000)}k Reviews</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<button className='items-center gap-2 flex p-3 w-[250px] h-[50px] bg-gray-300 rounded-full'><FaRegBookmark />
				Add Watchlist</button>
				<YouTube videoId={videoUrl.key} />
				</div>
		</div>
    </div>
  )
}

export default Movie
