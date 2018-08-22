$(function() {
    //Simple filter controls
    $('.simplefilter li').click(function() {
        $('.simplefilter li').removeClass('active');
        $(this).addClass('active');
    });
    //Multifilter controls
    $('.multifilter li').click(function() {
        $(this).toggleClass('active');
    });
    //Shuffle control
    $('.shuffle-btn').click(function() {
        $('.sort-btn').removeClass('active');
    });
    //Sort controls
    $('.sort-btn').click(function() {
        $('.sort-btn').removeClass('active');
        $(this).addClass('active');
    });
});

var theForm = document.forms["pa"];
function getRate()
{
	var rate=0;
    
    var theForm = document.forms["pa"];
	
	rate = parseFloat(a.value);   
	
	return rate;
}

function getYear()
{
	var year=0;
    
    var theForm = document.forms["pa"];
	
	year = parseFloat(b.value);   
	
	return year;
}

function pacalc()
{
	if (getYear.value < 2)
		{
			var result = (1 + getYear()/100) ^ getRate() - 1;
		}
	
	else if (getYear().value >= 2)
		{
			var result = ((1 + getYear()/100) ^ getRate() - 1) / (getYear()/100);
		}
			document.getElementById('x').innerHTML = result;
}