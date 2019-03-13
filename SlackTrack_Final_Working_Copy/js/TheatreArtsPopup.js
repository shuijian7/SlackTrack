//All the written by Will Lin.
//This file is used for opening the corresponding course modal of CIS major
//and implementing button function

// Get the modal
var modal = document.getElementById('myModal');


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

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


//Backtotop Button functions 
window.onscroll = function() {scrollFunction()};
            
function scrollFunction() {
    //show the button on the web page
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtntop").style.display = "block";
    //make button disappear
    } else {
    document.getElementById("myBtntop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    // var elmnt = document.getElementById("123abc");
    // elmnt.scrollIntoView();
}


//when users click the highlighted row, the following function would be executed.
//The fucntion is to pass data to php files of backend, end pull the table data to the modal by using Ajax(supported by JQuery)		
BtnTA121.onclick = function() {
  //show the modal to screen

  modal.style.display = "block";
 //get the element id of modal and replace the course title and number
  document.getElementById('cid').innerHTML="TA121";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        //get the table data of corresonding course from backend
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=121",true);
        xmlhttp.send();
  //forbid scroll down and up on document body 
  document.body.style.overflow = 'hidden';

}


//IMPORTANT:
//Rest course functions are repeating. All of them are using ajax to pass the particualr 
//course title and numebr to backend and pull up letter grade data. so the comments are same.


BtnTA122.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA122";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=122",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA124.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA124";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=124",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA196.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA196";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=196",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA198.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA198";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=198",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA199.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA199";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=199",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA210.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA210";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=210",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA211.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA211";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=211",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA212.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA212";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=212",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA250.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA250";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=250",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA251.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA251";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=251",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA252.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA252";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=252",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA271.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA271";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=271",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA321.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA321";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=321",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA322.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA322";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=322",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA323.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA323";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=323",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA324.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA324";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=324",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA325.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA325";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=325",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA367.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA367";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=367",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA368.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA368";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=368",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA369.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA369";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=369",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA399.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA399";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=399",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA401.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA401";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=401",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA405.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA405";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=405",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA406.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA406";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=406",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA407.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA407";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=407",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA408.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA408";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=408",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA409.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA409";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=409",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA410.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA410";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=410",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA411.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA411";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=411",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA412.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA412";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=412",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA413.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA413";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=413",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA416.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA416";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=416",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA417.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA417";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=417",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA418.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA418";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=418",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA419.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA419";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=419",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA420.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA420";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=420",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA441.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA441";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=441",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA445.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA445";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=445",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA452.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA452";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=452",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA467.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA467";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=467",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA470.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA470";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=470",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA471.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA471";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=471",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA472.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA472";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=472",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA490.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA490";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=490",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA503.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA503";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=503",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA507.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA507";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=507",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA508.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA508";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=508",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA510.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA510";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=510",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA511.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA511";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=511",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA512.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA512";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=512",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA513.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA513";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=513",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA516.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA516";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=516",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA517.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA517";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=517",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA518.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA518";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=518",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA519.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA519";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=519",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA541.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA541";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=541",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA545.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA545";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=545",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA552.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA552";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=552",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA567.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA567";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=567",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA571.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA571";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=571",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA572.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA572";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=572",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA601.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA601";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=601",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA602.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA602";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=602",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA603.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA603";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=603",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA605.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA605";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=605",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA606.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA606";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=606",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA607.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA607";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=607",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA608.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA608";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=608",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA609.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA609";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=609",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA610.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA610";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=610",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnTA651.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="TA651";
        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("txtHint").innerHTML = this.responseText;
            }
        };
        xmlhttp.open("GET","../BackEnd/TheatreArtsBackEnd.php?data=651",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}
