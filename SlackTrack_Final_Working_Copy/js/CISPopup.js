

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


		
BtnCIS105.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS105";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=105",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS110.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS110";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=110",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS111.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS111";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=111",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS115.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS115";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=115",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS122.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS122";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=122",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS196.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS196";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=196",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS198.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS198";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=198",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS199.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS199";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=199",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS210.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS210";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=210",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS211.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS211";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=211",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS212.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS212";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=212",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS313.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS313";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=313",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS314.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS314";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=314",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS315.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS315";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=315",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS322.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS322";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=322",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS330.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS330";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=330",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS399.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS399";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=399",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS401.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS401";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=401",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS403.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS403";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=403",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS404.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS404";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=404",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS405.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS405";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=405",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS406.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS406";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=406",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS407.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS407";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=407",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS408.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS408";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=408",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS409.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS409";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=409",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS410.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS410";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=410",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS413.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS413";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=413",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS415.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS415";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=415",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS420.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS420";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=420",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS422.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS422";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=422",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS423.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS423";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=423",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS425.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS425";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=425",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS427.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS427";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=427",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS429.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS429";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=429",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS431.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS431";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=431",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS432.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS432";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=432",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS433.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS433";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=433",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS441.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS441";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=441",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS443.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS443";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=443",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS445.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS445";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=445",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS451.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS451";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=451",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS452.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS452";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=452",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS453.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS453";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=453",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS454.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS454";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=454",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS461.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS461";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=461",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS471.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS471";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=471",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS472.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS472";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=472",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS473.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS473";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=473",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS490.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS490";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=490",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS503.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS503";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=503",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS507.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS507";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=507",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS508.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS508";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=508",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS510.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS510";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=510",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS513.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS513";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=513",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS520.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS520";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=520",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS522.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS522";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=522",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS523.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS523";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=523",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS527.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS527";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=527",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS529.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS529";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=529",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS531.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS531";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=531",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS532.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS532";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=532",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS533.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS533";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=533",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS541.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS541";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=541",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS543.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS543";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=543",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS545.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS545";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=545",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS551.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS551";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=551",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS552.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS552";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=552",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS553.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS553";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=553",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS554.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS554";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=554",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS561.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS561";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=561",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS571.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS571";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=571",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS572.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS572";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=572",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS573.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS573";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=573",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS590.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS590";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=590",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS601.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS601";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=601",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS602.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS602";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=602",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS603.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS603";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=603",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS604.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS604";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=604",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS605.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS605";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=605",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS606.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS606";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=606",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS607.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS607";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=607",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS608.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS608";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=608",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS609.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS609";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=609",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS610.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS610";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=610",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS621.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS621";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=621",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS624.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS624";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=624",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS630.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS630";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=630",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS631.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS631";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=631",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS632.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS632";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=632",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS633.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS633";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=633",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIS650.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIS650";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=650",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIT281.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIT281";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=281",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIT381.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIT381";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=381",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIT382.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIT382";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=382",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIT383.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIT383";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=383",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}

BtnCIT405.onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="CIT405";
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
        xmlhttp.open("GET","../BackEnd/CISBackEnd.php?data=405",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}
