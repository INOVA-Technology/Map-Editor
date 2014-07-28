var x = y = id = interval = 0,
	increment = 10;

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

function getTransform(x, y) {
	return 'translate(' + x + ', ' + y + ')';
}

$('.add-room').on('click', function(event) {
	id++;
	var e = '<div id=' + id + ' class="draggable"><h1 class="name" contenteditable>name</h1></div>';
	$('.container').append(e);
});

$('#scroll-up').on('mousedown', function(event) {
	$('.draggable').css("top",  "+=" + increment + "px");
	// e.each(function(index) {
	// 	var m = new WebKitCSSMatrix(this.get(0).style.transform),
	// 		x = m.e,
	// 		y = m.f;
	// 	this.css("transform", getTransform(x, y - increment));
	// });
});

$('#scroll-up').on('mouseup', function(event) {
	clearInterval(interval);
});
