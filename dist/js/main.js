(function ($) {

	$('.toggle-input').focus(function(){
		var id = $(this).attr('id');
		$('ul[data-id="' + id + '"]').show();
	})
	$('.toggle-input').blur(function(){
		var id = $(this).attr('id');
		setTimeout(function(){
			$('ul[data-id="' + id + '"]').hide();  
		}, 200);
		
	})
	$('.toggle-list li').click(function(){
		var content = $(this).html(),
			id = $(this).parent().attr('data-id');
		
		$('#' + id).val(content);

		
		
	})

}(jQuery));