// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

window.onload = function() {
	ts();
}

function ts(){
	console.log(new Date().getTime())
	console.log($('body').length);
	$('.button').on('click',function(){
		alert('click button')
	})
}


