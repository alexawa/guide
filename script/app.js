;

$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': ($target.offset().top - 80)
	    }, 900, 'swing', function () {
	        window.location.hash = (target - 80);
	    });
	});

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

$(window).scroll(function() {    
	var scroll = $(window).scrollTop();
	if (scroll >= 200) {
		$("header").addClass("toggled");
	} else if(scroll < 200) {
		$("header").removeClass("toggled");
	}

	var navbar = $('ul li:nth-child(1)'),
		sd = $('.js-scroll-wrap');

		var $section = $('.pg-sect').outerHeight(true);

	if (scroll >= $section - 190 && scroll <= ($section + $section - 155)) {
		if (!navbar.hasClass('currant')) {
			navbar.addClass('currant');
		} 
	} else {
		if (navbar.hasClass('currant')) {
			navbar.removeClass('currant');
		} 
	}
});