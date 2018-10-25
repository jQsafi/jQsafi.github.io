var $_GET=[];
window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(a,name,value){$_GET[name]=value;});
if($_GET['page'])
{
	$("#container").attr("w3-include-html",$_GET['page']+"/index.html");
	w3.includeHTML();
}