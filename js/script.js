function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
$(function()
 {
  $("#category span").click(function()
                           {
    var cat=$(this).html();
    var filter_to=$("[data-category]");
    $.each(filter_to,function()
    {
        $(this).hide();
        var this_cat=$(this) .data('category');
      if(this_cat==cat)
        $(this).show();
    });
  });
  $("body").find(".char").click(function()
                                {
    //var entity=$(this).data("entity");
    //if(entity=="N/A")
    entity=$(this).text();
    entity=$.trim(entity);
    insertText(entity);
    var ta=$("<textarea />");
    ta.val($("#text").val());
    $("body").append(ta);
    ta.select();
    var successful = document.execCommand('copy'); 
    ta.remove();
  });
});
var lastFocused=$("#text")[0];
$("#text").focus(function() {
  lastFocused = document.activeElement;
});
function insertText(text) {
  var input = lastFocused;  
  if (input == undefined) { return; }
  var scrollPos = input.scrollTop;
  var pos = 0;
  var browser = ((input.selectionStart || input.selectionStart == "0") ? 
                 "ff" : (document.selection ? "ie" : false ) );
  if (browser == "ie") { 
    input.focus();
    var range = document.selection.createRange();
    range.moveStart ("character", -input.value.length);
    pos = range.text.length;
  }
  else if (browser == "ff") { pos = input.selectionStart };

  var front = (input.value).substring(0, pos);  
  var back = (input.value).substring(pos, input.value.length); 
  input.value = front+text+back;
  pos = pos + text.length;
  if (browser == "ie") { 
    input.focus();
    var range = document.selection.createRange();
    range.moveStart ("character", -input.value.length);
    range.moveStart ("character", pos);
    range.moveEnd ("character", 0);
    range.select();
  }
  else if (browser == "ff") {
    input.selectionStart = pos;
    input.selectionEnd = pos;
    input.focus();
  }
  input.scrollTop = scrollPos;
}