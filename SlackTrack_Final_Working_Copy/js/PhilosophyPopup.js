

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


//jump Button functions 
window.onscroll = function() {scrollFunction()};
            
function scrollFunction() {
  
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtntop").style.display = "block";
    
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
		
BtnPHIL101.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL101";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=101",true);
        xmlhttp.send();

  
  document.body.style.overflow = 'hidden';

}

BtnPHIL102.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL102";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=102",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL103.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL103";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=103",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL110.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL110";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=110",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL120.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL120";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=120",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL123.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL123";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=123",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL130.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL130";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=130",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL170.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL170";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=170",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL199.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL199";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=199",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL211.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL211";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=211",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL213.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL213";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=213",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL216.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL216";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=216",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL220.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL220";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=220",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL307.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL307";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=307",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL308.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL308";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=308",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL309.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL309";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=309",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL310.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL310";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=310",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL311.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL311";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=311",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL312.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL312";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=312",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL315.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL315";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=315",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL320.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL320";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=320",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL322.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL322";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=322",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL323.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL323";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=323",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL325.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL325";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=325",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL330.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL330";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=330",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL331.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL331";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=331",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL332.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL332";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=332",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL335.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL335";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=335",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL339.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL339";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=339",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL340.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL340";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=340",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL342.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL342";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=342",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL343.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL343";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=343",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL344.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL344";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=344",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL345.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL345";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=345",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL350.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL350";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=350",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL372.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL372";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=372",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL399.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL399";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=399",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL401.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL401";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=401",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL403.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL403";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=403",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL405.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL405";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=405",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL407.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL407";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=407",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL410.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL410";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=410",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL415.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL415";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=415",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL420.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL420";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=420",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL421.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL421";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=421",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL423.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL423";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=423",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL425.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL425";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=425",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL433.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL433";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=433",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL443.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL443";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=443",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL451.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL451";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=451",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL452.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL452";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=452",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL453.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL453";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=453",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL463.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL463";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=463",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL503.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL503";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=503",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL507.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL507";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=507",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL510.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL510";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=510",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL521.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL521";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=521",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL533.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL533";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=533",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL551.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL551";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=551",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL553.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL553";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=553",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL563.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL563";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=563",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL601.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL601";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=601",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL602.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL602";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=602",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL603.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL603";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=603",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL605.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL605";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=605",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL607.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL607";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=607",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL610.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL610";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=610",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL614.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL614";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=614",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL615.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL615";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=615",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL620.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL620";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=620",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL625.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL625";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=625",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL641.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL641";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=641",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL643.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL643";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=643",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL645.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL645";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=645",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL657.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL657";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=657",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL658.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL658";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=658",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnPHIL670.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="PHIL670";
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
        xmlhttp.open("GET","../BackEnd/PhilosophyBackEnd.php?data=670",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}
