var x = y = id = 0;
var interval = 0;

interact(".draggable").draggable({
	onmove: function(event) {
		x += event.dx;
		y += event.dy;

		event.target.style.webkitTransform =
		event.target.style.transform =
			'translate(' + x + 'px, ' + y + 'px)';
	}
})
.restrict({
    drag: "parent",
    endOnly: true
}).autoScroll(true);

$('.add-room').on('click', function(event) {
	id++;
	var e = '<div id=' + id + ' class="draggable"><h1 class="name" contenteditable>name</h1></div>';
	$('.container').append(e);
});

$('#scroll-up').on('mousedown', function(event) {
	// interval = setInterval(function () {
	// 	$('.draggable').
	// }, 100);
	console.log($('.draggable').css('transform'));
});

$('#scroll-up').on('mouseup', function(event) {
	clearInterval(interval);
});
