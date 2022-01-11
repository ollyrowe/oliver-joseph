// Define Extensions
$.fn.reverse = [].reverse;
$.fn.toFront = function()
{
	var d = 0, c = 0;

	$(this).siblings().each(function(i)
	{
		c = $(this).css('z-index');
		d = Math.max(d, c);
	});

	this.css('z-index', d);

	$(this).siblings().reverse().each(function(i)
	{
		$(this).css('z-index', d - i - 1);
	});

	return this;
}