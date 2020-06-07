
var degree = 2520;
var clicks = 0;

$(document).ready(function(){

	$('#spin').click(function(){

		clicks ++;
		var newDegree = degree*clicks;
		var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
		totalDegree = newDegree+extraDegree;
		

		$('#wheel .sec').each(function(){
			var t = $(this);
			var noY = 0;
			
			var c = 0;
			var n = 700;	
			var interval = setInterval(function () {
				c++;				
				if (c === n) { 
					clearInterval(interval);
									
				}						
				var aoY = t.offset().top;	 
			}, 10);
			
			$('#inner-wheel').css({
				'transform' : 'rotate(' + totalDegree + 'deg) '
			});
			$('.fa').css({
				'transform': 'perspective(1px) scale(1) translateZ(0)',
				'backface-visibility': 'hidden',    
				'-webkit-filter': 'blur(0)',
				'-webkit-font-smoothing': 'subpixel-antialiased'
			});			 
			noY = t.offset().top;			
		});
	});
	
	
	
});