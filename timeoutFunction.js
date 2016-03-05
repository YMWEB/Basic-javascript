//output the array one by one

var array = [1,2,3,4,5];
var length = array.length;
var t=0;
function test(){
	var timer = window.setTimeout(function(){		
	if (t>length-1){return false}
		else{
			console.log(array[t]);
			++t;
		}
		test(array,t,length);

},2000);
}
