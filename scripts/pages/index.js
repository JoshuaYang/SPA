define(['jquery',
		'joshua/interact/smooth_mousewheel',
		'bootstrap',
		'scrollReveal',
		'domReady!'],
	function($, SmoothMouseWheel){

		$('.scrollReveal').attr('data-scroll-reveal', '');

		window.scrollReveal = new scrollReveal({
			reset: true,
			after: '0s',
			enter: 'bottom',
			move: '60px',
			over: '0.8s',
			easing: 'ease'
		});

		SmoothMouseWheel.enable({
			spring: .4,
	        duration: 900,
	        maxDetail: 40
		});
});

function a(){
	var d =2;
	var g =2;
}


function dd(){
}
