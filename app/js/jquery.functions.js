$(function () {
	$('form').submit(function(event){
		event.preventDefault();

		var form = $(event.target);

		$.ajax({
				type: form.attr('method'),
				url:  form.attr('action'),
				headers: {
					'Access-Control-Allow-Origin': '*'
				},
				data: form.serialize(),
				crossOrigin: true,
				crossDomain: true,
				dataType : 'json',
				success: function(data){
					$('.success').show();
					$('.error').hide();
				},
				error: function(data){
					$('.error').show();
					$('.success').hide();
				}
			});
	});

    $('.slider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
	});
});