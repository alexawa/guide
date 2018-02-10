;

/*		Фиксированная-верхняя полоса прокрутки		*/
$(window).scroll(function(){
	var ratio = $(document).scrollTop() / (($(document).height() - $(window).height()) / 100);
	$('#scrollBar-progress').width(ratio + '%');
});
/*		Фиксированная-верхняя полоса прокрутки		*/



/*		Подключаем стилизацию для блоков кода		*/
hljs.initHighlightingOnLoad();
/*		Подключаем стилизацию для блоков кода		*/



/*		Блоки кода в буфер обмена		*/
function copyDivToClipboard() {
	var range = window.getSelection().getRangeAt(0);
	range.selectNode(document.getElementById("codeToClipboard"));
	window.getSelection().addRange(range);
	document.execCommand("copy");
}
/*		Блоки кода в буфер обмена		*/