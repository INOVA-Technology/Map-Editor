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

function getTransform(x, y) {
	return 'translate(' + x + ', ' + y + ')';
}

$('.add-room').on('click', function(event) {
	id++;
	var e = '<div id=' + id + ' class="draggable"><h1 class="name" contenteditable>name</h1></div>';
	$('.container').append(e);
});

$('#scroll-up').on('mousedown', function(event) {
	var e = $('.draggable'),
		increment = 10;
	e.each(function(index) {
		this.transform("transform", getTransform(0, 0));
		var m = new WebKitCSSMatrix(e.get().style.transform),
			x = m.e,
			y = m.f
	});
	interval = setInterval(function () {
		y -= increment;
		e.css("transform", getTransform(x, y));
	}, 100);
});

$('#scroll-up').on('mouseup', function(event) {
	clearInterval(interval);
});
