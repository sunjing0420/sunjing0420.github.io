var holidays=["<br />Thanksgiving!","<br />Christmas!","<br />New Year!","<br />President's Day!","<br />Easter!","<br />Summer!"];
console.log(holidays);
var count=0;
  
// students.push("d");
console.log(holidays.length);

  

var show=["Labor Day"];
	
	function myFunction(){
		if(count==0){
			document.getElementById("block").innerHTML=show;	
			
		}
		if(count==1){
			show.push(holidays[0]);
            document.getElementById("block").innerHTML=show;	
            
		}
			if(count==2){
			show.push(holidays[1]);
            document.getElementById("block").innerHTML=show;	
            
        }	
        if(count==3){
			show.push(holidays[2]);
            document.getElementById("block").innerHTML=show;	
            
        }
if(count==4){
			show.push(holidays[3]);
            document.getElementById("block").innerHTML=show;	
            
        }
        if(count==5){
			show.push(holidays[4]);
            document.getElementById("block").innerHTML=show;	
            
        }
        if(count==6){
			show.push(holidays[5]);
            document.getElementById("block").innerHTML=show;	
            
        }
        count=count+1;

   //   for(var i=0;i<holidays.length;i++){
   //  show.push(holidays[i]);
   //  document.getElementById("block").innerHTML=show;	
  
 
  	// }
  
  }

console.log(show.length);


document.addEventListener("DOMContentLoaded", function(){
		console.log("1111111");
	var colorPool = ["#ffffff","#ffffff","#ffffff"];
	var seconds = 0;
	var size1 = 45;
	var size2 = 100;
	var state = 0;
	var increment = 0;
	var direction = 0;
	var numOfColors = colorPool.length;
	var rotateIncrement = 0;

	var parentDiv= document.getElementsByClassName("blockContainer");
	var div1 = document.getElementById("div1");
	var div2 = document.getElementById("div2");
	var div3 = document.getElementById("div3");

	function timer(){
		setInterval(function(){
			console.log("timer setInterval");
			seconds += 1;
			console.log("seconds:" + seconds);

			if(seconds == 100){
				clearInterval(timer);
			}

			state = mod(seconds);
			rotateIncrement = seconds * 90;
			console.log("state: "+state);
			loadingScreen();
			console.log(parentDiv);

			parentDiv[0].style.transform = "rotate(" +rotateIncrement + "deg)";
			parentDiv[0].style.webkitTransform = "rotate(" +rotateIncrement + "deg)";

		},1000);
	}

	function mod(num){
		return num%numOfColors;
	}

	function loadingScreen(){
		div1.style.backgroundColor= colorPool[mod(state)];
		div2.style.backgroundColor= colorPool[mod(state+1)];
		div3.style.backgroundColor= colorPool[mod(state+2)];
	}

	timer();
	console.log("timer setInterval");


});


// var angel=[3];
// angel[0]="image/angel1.jpg";
// angel[1]="image/angel2.jpg";
// angel[2]="image/angel3.jpg";
// angel[3]="image/angel4.jpg";
// var images = [];
//     for(var i =0;i<4;i++){
//         var img = new Image();
//             img.src = 'image/angel1';
//          images.push(img)
//      }

// var imageObj;
// function preloader() 
// { 
// // counter 
// // var i = 0; 
// // create object 
// imageObj = new Image(); 
// // set image list 
// images = new Array(); 
// images[0]="image/angel1.jpg" 
// images[1]="image/angel2.jpg" 
// images[2]="image/angel3.jpg" 
// images[3]="image/angel4.jpg" 
// }

  
// // students.push("d");
// // console.log(students.length);
//    // document.getElementById("container").innerHTML=angel;
// var selectedangel=new Array(0);


// function myFunction(){
//   // selectedangel.push("angel[random(0,1,2,3)]");
//   // document.getElementById("container").innerHTML=angel;
//   electedangel.push("images[random(0,1,2,3)]"); 
// }




// function preloader() 
// { 
// // counter 
// var i = 0; 
// // create object 
// imageObj = new Image(); 
// // set image list 
// images = new Array(); 
// images[0]="image/angel1.jpg" 
// images[1]="image/angel2.jpg" 
// images[2]="image/angel3.jpg" 
// images[3]="image/angel4.jpg" 
// // start preloading 
// for(i=0; i<=3; i++) 
// { 
// imageObj.src=images[i]; 
// } 
// } 