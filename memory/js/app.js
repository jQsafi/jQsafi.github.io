Array.prototype.shuffle = function() 
{
  var i = this.length, j, temp;
  if ( i == 0 ) return this;
  while ( --i ) {
     j = Math.floor( Math.random() * ( i + 1 ) );
     temp = this[i];
     this[i] = this[j];
     this[j] = temp;
  }
  return this;
}

	var level=1;
	var point=0;
	var timer_fn;
	var clicked=0;
	$(document).on('click',"#btn",function(e)
	{
		clearTimeout(timer_fn);
		arrange_game(level);
	});
function arrange_game(level=1)
{
	no_of_alphatbet=level*2;
	container=$("#memory");
	$("#memory").html("");
	var main_contents=new Array;
	var element_array=new Array;
	for(i=0;i<no_of_alphatbet;i++)
	{
			main_contents[i]=(i+10).toString(36);
	}
	number_of_element=no_of_alphatbet*2;
	for(i=0;i<number_of_element;i++)
	{
		element_array[i]=i;
		li=$('<li class="game-grid-item object"></li>');
		container.append(li);
	}
	element_array.shuffle();
	main_contents.forEach(function(val,index) 
	{ 
		next_index=index+main_contents.length;
   		container.find('.object').eq(element_array[index]).attr('data-match',element_array[next_index]).html(val);
   		container.find('.object').eq(element_array[next_index]).attr('data-match',element_array[index]).html(val);
	});
	timing_ms=2000*level;
	close_the_btn(timing_ms);
	clicked=0;
}
function close_the_btn(timing_ms)
{
	clearTimeout(timer_fn);
	timer_fn=setTimeout(function()
	{
		$(".object").not("[matched]").addClass('closed');
		
		//play_the_game();
	},timing_ms);
}
		$(document).on('click',".closed",function(e)
	{
		e.preventDefault();
		clicked++;
		$(this).removeClass("closed");
		if(clicked==1)
		{
			$that=$(this);
		}
		else if(clicked==2)
		{
			$this=$(this);
		}
		if(clicked==2)
		{
			if($this.data('match')==$that.index())
			{
				$this.attr('matched','matched');
				$that.attr('matched','matched');
				point++;
			}
			else
			{
				point-=.25;
			}
			clicked=0;
			close_the_btn(100);
		}
		$("#point").html("Your Point is "+point);
		if($(".closed").length==0)
		{
			if(level==13)
			{
				alert("Congratulation!!! All level cleared.");
				return;
			}
			level++;
			$("#btn").html("Start Level "+level);
			setTimeout(function()
			{
				if(confirm("Level-"+level-1+" is cleared.Want to play next level?"))
				{
					arrange_game(level);
				}
			},2000);
		}
	});