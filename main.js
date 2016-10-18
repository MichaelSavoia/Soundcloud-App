$('#search').on("submit", function(i){
	i.preventDefault();
	var title = $('#title').val();
	console.log(title);
	writeData(title)
});

$('body').on('click','play','.song img',function(){
	var id = $(this).parent().data('id');
	console.log(id);
	$('audio').attr('src','http://api.soundcloud.com/tracks/${id}/stream?client_id=03e4633e2d85874a921380e47cac705d')
})

function writeData(title){
	$.ajax({
		url: `http://api.soundcloud.com/tracks/?q=${title}&client_id=03e4633e2d85874a921380e47cac705d`,
		success: function(result){
			console.log(result);

			$('#musicHere').empty();

			result.forEach(function(song){

				if(song.artwork_url == null){
					song.artwork_url = "http://truenorthinc.com/wp-content/uploads/2013/05/album_art_09.jpg";
				}

				$('#musicHere').append(`
					<div data-id=${"song.id"} class="col-md-3 songInfo">
						<img src=${song.artwork_url}
						<h3>${song.title}</h3>
						<h3>${song.user.username}</h3>
						<button>Play</button>
					</div>
				`)
			})
		}
	})
}