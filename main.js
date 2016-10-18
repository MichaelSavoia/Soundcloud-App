$('#search').on("submit", function(i){
	i.preventDefault();
	var title = $('#title').val();
	console.log(title);
	writeData(title)
});

function writeData(title){
	$.ajax({
		url: `http://api.soundcloud.com/tracks/?q=${title}&client_id=03e4633e2d85874a921380e47cac705d`,
		success: function(result){
			console.log(result);

			result.forEach(function(song){
				$('#musicHere').append(`
					<div class="col-md-3 songInfo">
						<img src=${song.artwork_url}
						<h3>${song.title}</h3>
						<h3>${song.user.username}</h3>
					</div>
				`)
			})
		}
	})
}