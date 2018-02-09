$(window).scroll(function(){
	var ratio = $(document).scrollTop() / (($(document).height() - $(window).height()) / 100);
	$('#scrollBar-progress').width(ratio + '%');
});

function copyDivToClipboard() {
	var range = window.getSelection().getRangeAt(0);
	range.selectNode(document.getElementById("codeToClipboard"));
	window.getSelection().addRange(range);
	document.execCommand("copy")
}