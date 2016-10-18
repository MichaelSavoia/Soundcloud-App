$('#search').on("submit", function(i){
	i.preventDefault();
	var title = $('#title').val();
	console.log(title);
	writeData(title)
});

$('body').on('click','play',function(){
	var id = $(this).parent().data('id');
	console.log(id);
	$('audio').attr('src','http://api.soundcloud.com/tracks/${id}/stream?client_id=03e4633e2d85874a921380e47cac705d')
})

function writeData(title){
	$.ajax({
		url: `http://api.soundcloud.com/tracks/?q=${title}&client_id=03e4633e2d85874a921380e47cac705d`,
		success: function(result){
			console.log(result);

			result.forEach(function(song){

				if(song.artwork_url == null){
					song.artwork_url = "http://orig01.deviantart.net/26aa/f/2011/185/f/9/no_cover_itunes_by_stainless2-d3kxnbe.png/300/300";
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