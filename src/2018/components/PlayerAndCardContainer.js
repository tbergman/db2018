import React from 'react';
import Player from './Player';
import SongCard from './SongCard';

const PlayerAndCardContainer = (props: { inViewport: boolean }) => {
	const { inViewport, innerRef, songData } = props;
	const songs = props.songData;
	const selectedGenres = this.state.selectedGenres;

	return (
		<div class="PlayerAndCardContainer">
			<Player />

			{songs.map((song) => {
					const songGenres = song.genres;
					const songIsSelected = (selectedGenres.some(v => songGenres.indexOf(v) !== -1));
					const songTitle = song.title;
					return (
						
						<SongCard 
							song={song} 
							width={width}
							id={song._id} 
							key={song._id} 
							playing={this.state.playing}
							muted={muted} 
							songIsSelected={songIsSelected} />
					)
				})}

		</div>
	)
}

export default PlayerAndCardContainer;