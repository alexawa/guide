var $getData = $('.key'),
	$getChildren = $getData.children();

	$getChildren.on({
		click: function() {
			$(this).toggleClass('toggled', 500);
		}
	});