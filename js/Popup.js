// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn3 = document.getElementById("myBtn3");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
  document.getElementById('myMajor').innerHTML= "";
  document.getElementById('myMajor').innerHTML = "<option value='NNN' disabled selected>Select  professor</option>"
  + "<option value='Hank'>Hank Childs</option>"
  + "<option value='Lei'>Lei Jiao</option>"
  + "<option value='Anthony'>Anthony Hornof</option>"
  + "<option value='Joe'>Joe Sventek</option>";
  document.body.style.overflow = 'hidden';

}


btn3.onclick = function() {
  modal.style.display = "block";
  document.getElementById('myMajor').innerHTML= "";
  document.getElementById('myMajor').innerHTML = "<option value='Hank'>WHAT? Hank Childs</option>";
  document.body.style.overflow = 'hidden'
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = 'scroll'
}




// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.style.overflow = 'scroll'
  }
}


//jump Button functions 
window.onscroll = function() {scrollFunction()};
						
function scrollFunction() {
  
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn2").style.display = "block";
    // document.getElementById("Btn1y").style.display = "block";
    
    } else {
    document.getElementById("myBtn2").style.display = "none";
    // document.getElementById("Btn1y").style.display = "block";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    // var elmnt = document.getElementById("123abc");
    // elmnt.scrollIntoView();
}
function Function1() {
  document.getElementById("s1").scrollIntoView();
}
function Function2() {
  document.getElementById("s2").scrollIntoView();
}
function Function3() {
  document.getElementById("s3").scrollIntoView();
}
function Function4() {
  document.getElementById("s4").scrollIntoView();
}
function Function5() {
  document.getElementById("a1").scrollIntoView();
}
function Function6() {
  document.getElementById("a2").scrollIntoView();
}
function Function7() {
  document.getElementById("a3").scrollIntoView();
}
function Function8() {
  document.getElementById("a4").scrollIntoView();
}



//canvas functions 
var my_canvas=document.getElementById("my_canvas");
var gctx=my_canvas.getContext("2d");


var data = [['A',10],['B',25],['C',3],['D',8],['F',2]];


var bar_width=50;
var y_gap=30;  // Gap below the graph 
var bar_gap=100; // Gap between Bars including width of the bar
var x= 20; // Margin of graph from left  

y= my_canvas.height -y_gap ;

my_canvas.width=data.length * (  bar_gap)  + x  ;
////////////end of settings ////
gctx.moveTo(x-5,y);
gctx.lineTo(my_canvas.width,y); // Base line of graph 
gctx.stroke();

/////////// Draw the graph ////////

for (i=0;i<data.length;i++){
// gctx.shadowColor = '#ffffff'; // remove this line if you shadow on text is required
gctx.font = '45px'; // font for base label showing classes 
gctx.textAlign='left';
gctx.textBaseline='top';
gctx.fillStyle= '#FFFFFF';
gctx.fillText(data[i][0], x,y+5); // Write base text for classes 

gctx.beginPath();
gctx.lineWidth=2;
y1=y-data[i][1]; // Coordinate for top of the Bar 
x1 = x;    
// gctx.font = '25px '; // font at top of the bar 
gctx.fillStyle= '#FFFFFF';
gctx.fillText(data[i][1], x1,y1-20); // text at top of the bar 

gctx.fillStyle= '#fee123'; // fill Colur of bar  
// gctx.shadowColor = '#FFFFFF'; // shadow color for bars 
gctx.fillRect(x1,y1,bar_width,data[i][1]);// Filled bar 

x=x+bar_gap

}// end of for loop 