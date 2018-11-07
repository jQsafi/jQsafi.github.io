clock();
setInterval(function() {
	clock();
}, 1000);

function clock() {
	var date = new Date;
	var seconds = date.getSeconds();
	var minutes = date.getMinutes();
	var hour = date.getHours();
	hour = (hour > 12 ? hour - 12 : hour);
	hour = (hour == 0 ? 12 : hour);
	var hour_fill = Math.round(hour * 100 / 12);
	var min_fill = Math.round(minutes * 100 / 60);
	var sec_fill = Math.round(seconds * 100 / 60);
	$(".hour").attr('fill', hour_fill);
	$(".minute").attr('fill', min_fill);
	$(".seconds").attr('fill', sec_fill);
	hour = hour < 10 ? '0' + hour : hour;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	seconds = seconds < 10 ? '0' + seconds : seconds;
	$(".text").text(hour + ":" + minutes + ":" + seconds);
}