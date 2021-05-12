import React, { forwardRef } from 'react';
import './VideoCard.css';
import TextTruncate from 'react-text-truncate';
import ThumbUpSharpIcon from '@material-ui/icons/ThumbUpSharp';

const base_url = "https://image.tmdb.org/t/p/original/";

const VideoCard = forwardRef(({ movie }, ref) => {
    return (
        <div ref={ref} className="videoCard">
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
            alt={movie.title}/>
            <h2>{movie.title}</h2>
            <TextTruncate
                line={1}
                element="p"
                truncateText="..."
                text={movie.overview}/>
            <ThumbUpSharpIcon/>
            {movie.vote_count}
        </div>
    )
})

export default VideoCard;
