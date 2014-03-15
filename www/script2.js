

function detect(){

   var Age=parseInt(document.massIndex.age.value),
         e = document.getElementById("he"),
         strUser = e.options[e.selectedIndex].value,
		 f=document.getElementById("we"),
		str=f.options[f.selectedIndex].value;
   
   var height,weight,Bmi;
   
	if(strUser=="ft" && str=="pds")
	{
		var heightFeet=parseInt(document.massIndex.heitFeet.value),
		heightInches=parseInt(document.massIndex.heitInches.value),
		weightSt=parseInt(document.massIndex.weight_ls.value),
		weightPs=parse(document.massIndex.weight_ps.value);
   
				heightFeet=heightFeet*12;
				
				height=heightFeet+heightInches;
				
				weightSt=weightLs*14;
				
				weight=weightSt+weightPs;
		
		 Bmi=(weight/(height*height))*703;
   }
   if(strUser=="mt")
   {
   if(str="kilo")
   {	
		if(document.massIndex.heitFeet.value!="")
				height=parseInt(document.massIndex.heitFeet.value);
		if(document.massIndex.heitInches.value!="")
				height=parseInt(document.massIndex.heitInches.value);
				
		if(document.massIndex.weight_ls.value!="")
				weight=parseInt(document.massIndex.weight_ls.value);
		if(document.massIndex.weight_ps.value!="")
				weight=parseInt(document.massIndex.weight_ps.value);		
   }
       
	   Bmi=(weight/(height*height));
	}

     if(strUser=="cm" )
   {
   if(str="kilo")
   {	
		if(document.massIndex.heitFeet.value!="")
				height=parseInt(document.massIndex.heitFeet.value);
		if(document.massIndex.heitInches.value!="")
				height=parseInt(document.massIndex.heitInches.value);
				
		if(document.massIndex.weight_ls.value!="")
				weight=parseInt(document.massIndex.weight_ls.value);
		if(document.massIndex.weight_ps.value!="")
				weight=parseInt(document.massIndex.weight_ps.value);		
   }
       
	   Bmi=(weight/(height*height))*10000;
	}

		var re=document.getElementById("result").innerHTML=Bmi;
        me=document.getElementById("click").innerHTML="Result";
		
}

function back(){
		var me=document.getElementById("click").innerHTML="Click";

}

function slide() {

var speed = 0.000001,
    moveBox = function(moveBy) {
        var el = document.getElementById("box"),
            left = el.offsetLeft;
            
        
        if (left < -1250) {
            clearTimeout(timer);
			console.log("done");
			load_home(); 
			
        }
        
        el.style.left = left + moveBy + "px";
 
    };

var timer = setInterval(function () {
        moveBox(-3);
    }, speed);
}

function shift() {

var speed = 1,
    moveBox = function(moveBy) {
        var el = document.getElementById("helm"),
            top = el.offsetTop;
            
        
        if (top < -150) {
            clearTimeout(timer);
			console.log("done up");
			
        }
        
        el.style.top = top + moveBy + "px";
 
    };

var timer = setInterval(function () {
        moveBox(-3);
    }, speed);
}
 function load_home(){
							
							window.location.href="test1.htm";
}

