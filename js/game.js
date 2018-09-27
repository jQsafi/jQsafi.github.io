$(function()
{
	puzzle(3,3);
});
function puzzle(x,y)
{
	var box=$("#puzzle_box");
	var pieces='';
	var counter=0;
	for(i=1;i<=x;i++)
	{
		for(j=1;j<=y;j++)
		{
			counter++;
			if(i!=x || j!=y)
			{
				pieces+='<div class="pieces" original_position="'+i+','+j+'"></div>';
			}
		}
	}
	box.html(pieces);
	shuffle_puzzle();
	box.append('<div class="pieces" original_position="'+x+','+y+'" current_position="'+x+','+y+'" empty="true">&nbsp;</div>');
	swap();
}
function shuffle_puzzle()
{
	var axis=[];
	var r_axis=[];
	var pieces=$("[original_position]");
	var i=0;
	$.each(pieces,function()
	{
		if(!$(this).attr("empty"))
		{
			var original_position=$(this).attr("original_position");
			axis[i]=original_position;
			r_axis[i]=original_position;
			i++;
		}
	});

	shuffle(r_axis);
	for(i=0;i<axis.length;i++)
	{
		var current=$("[original_position='"+axis[i]+"']");
		current.attr("current_position",r_axis[i]);
		var ind=axis.indexOf(r_axis[i]);
		current.html('<img src="assets/'+(ind+1)+'.jpeg" height="170px">');
	}
	swap();
}
function swap()
{
	var pieces=$("[original_position]");
	var selected_spice="";
	pieces.click(function()
	{
		var $this=$(this);
		var original_position=$this.attr("original_position");
		var empty_piece=$("[empty]");
		var empty_position=empty_piece.attr("original_position").split(",");
		emptyX=parseInt(empty_position[0]);
		emptyY=parseInt(empty_position[1]);
		var p1=(emptyX-1)+","+emptyY;
		var p2=(emptyX+1)+","+emptyY;
		var p3=emptyX+","+(emptyY-1);
		var p4=emptyX+","+(emptyY+1);
		if(original_position==p1)
		{
			selected_spice=$this;
			swap_content(selected_spice,empty_piece);
		}
		else if(original_position==p2)
		{
			selected_spice=$this;
			swap_content(selected_spice,empty_piece);
		}
		else if(original_position==p3)
		{
			selected_spice=$this;
			swap_content(selected_spice,empty_piece);
		}
		else if(original_position==p4)
		{
			selected_spice=$this;
			swap_content(selected_spice,empty_piece);
		}
		else
		{
			return;
		}
	});
}
function swap_content(s,t)
{
	empty_cp=t.attr("current_position");
	cp=s.attr("current_position");
	s.attr("current_position",empty_cp);
	t.attr("current_position",cp);
	t.removeAttr("empty");
	s.attr("empty",true);
	var ec=t.html();
	var sc=s.html();
	t.html(sc);
	s.html(ec);
	swap();
	if(check())
	alert("Success");
}
function check()
{
	var pieces=$("[original_position]");
	var game_over=false;
	$.each(pieces,function()
	{
		var original_position=$(this).attr("original_position");
		var current_position=$(this).attr("current_position");
		if(original_position==current_position)
			game_over=true;
		else
		{
				return game_over=false;
		}
	});
		return game_over
}
function shuffle(array) {
  var random = array.map(Math.random);
  array.sort(function(a, b) {
    return random[array.indexOf(a)] - random[array.indexOf(b)];
  });
}
$(document).ready(function() {

  var i = 0, timeOut = 0;

  $('[show_image]').on('mousedown touchstart', function(e) {
    $('.pieces').hide();
    timeOut = setInterval(function(){
    }, 100);
  }).bind('mouseup mouseleave touchend', function() {
    $('.pieces').show();
    clearInterval(timeOut);
  });

});
