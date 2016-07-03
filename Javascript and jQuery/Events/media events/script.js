//adding the event listener to the list for click
var jukebox = document.querySelector('ul.player');
jukebox.addEventListener('click', function(e) {
	
	var audioPlayer = document.querySelector('#player');
	var songName = e.target.getAttribute('data-src');
	
	if(audioPlayer){

		if(songName === audioPlayer.getAttribute('src')){
			if(audioPlayer.paused){
				audioPlayer.play();
				e.target.id = 'playing';
			}//if the player has been paused play it
			else{
				audioPlayer.pause();
				e.target.id = 'paused';
			}//if it is playing then pause it
		}//if the current song and the song that has been clicked are equal toggle pause and play accordingly.
		else{
			audioPlayer.src = songName;//playing the other song instead of the current one instead of simultaneously playing both.
			audioPlayer.play();

			//if-else pair to set the id of the clicked element to none (UI!!)
			if(document.querySelector('#playing'))
				document.querySelector('#playing').id = '';
			else
				document.querySelector('#paused').id = '';

			e.target.id = 'playing';//set the id of the clicked song to playing (UI!!)
		}//if another song has been clicked

	}//if audioplayer already exists that is the initial trigger/play/click has been done and an audioplayer was created
	else{
		
		var audioPlayer = document.createElement('audio');
		audioPlayer.id = 'player';
		e.target.id = 'playing';
		audioPlayer.src = songName;
		document.body.appendChild(audioPlayer);
		audioPlayer.play();//creating and playing the audioplayer
	

		audioPlayer.addEventListener('ended', function() {
			audioPlayer.parentNode.removeChild(audioPlayer);
			e.target.id = '';
		}, false);//remove the audioplayer if the song has ended

	}//else create audioplayer 

}, false);