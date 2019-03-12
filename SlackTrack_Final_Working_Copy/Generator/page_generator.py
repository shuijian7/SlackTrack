import os
import ast
from datetime import date
# def page_generator(inputfilepath), outputHTMLfile = "default_generator_ouput.HTML", outputPHPfile = "default_generator_ouput.PHP",db_table_name):
def page_generator(inputfile, db_table_name, major_name,FrontEndFolderPath, BackEndFolderPath, jsFolderPath):

	Date= str(date.today())
	runjs = 0
	TopOfFrontEnd="""
<!-- HTML file for """+major_name+""" major page
This page was originally created using the page_generator python function written for
the SlackTrack Application by group member Tyler Millan. Page was initially created on """+Date+"""-->



<html>
<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>"""+major_name+"""</title>
		<link rel="stylesheet" type="text/css" href="../CSS/CIS_style.css">
		<link rel="stylesheet" type="text/css" href="../CSS/Popup.css">
		<style>
			body {margin:0;}
			.navbar{
				overflow: hidden;
				background-color: #124734;
				/* position: fixed; */
				top: 0;
				margin:0;
				width: 100%;
				height: 81px;
				padding-top: 10px;
				padding-left: 1%;
			}

			
		</style>

		
</head>

<body>
		<div class = "navbar">
		<a href="../Index.html"><img src="../image/mainLOGO.svg" height= 60px; title="Logo" alt="mainLOGO"></a>
		<div align="right" style="margin-right: 2%; margin-bottom: 10px;">
			<b style="color:#fee123">Designed by CIS422 Group 7</b></div>
		</div>
		<h1 style="margin-left: 7%">"""+major_name+"""</h1>

		<!--Modal-->
		<!-- The Modal -->
		<div id="myModal" class="modal">
		<div class="modal-content">
			<span class="close">&times;</span>
			<h1 id="cid" style="color: white">    </h1>
			

			<div id="txtHint"><b>Table info loading...</b></div>
		</div>
		</div>

		
        <span style="margin: 7%"> * Highlighted row is clickable </span>
		<!-- BS First Year Table -->
		<table class="greenTable">
			<thead>
				<tr>
				<th></th>
				<th></th>
				<th></th>
				<th></th>
				</tr>
			</thead>
			<tbody>

			<tr>
				<td style="font-size: 17px">Class Name</td>
				<td></td>
				<td style="font-size: 17px"></td>
				<td style="font-size: 17px">Credits</td>
			</tr>
	"""
	if os.path.exists(jsFolderPath+major_name+"Popup.js"):
		print("ERROR: Javascript file already exists for the specified major")
	else:	
		runjs=1

		print("Javascript file created at "+jsFolderPath+major_name+"Popup.js")
		TopOfjsfile = """

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


		"""
		jsFileLocation = open(jsFolderPath+major_name+"Popup.js",'w+')
		jsFileLocation.write(TopOfjsfile)
		jsFileLocation.close




	if os.path.exists(FrontEndFolderPath+major_name+".php"):
		print("ERROR: Front End file already exists for the specified major")
	else:
		FrontEndFileLocation = open(FrontEndFolderPath+major_name+".php", 'w+')
		FrontEndFileLocation.write(TopOfFrontEnd)
		FrontEndFileLocation.close()

		print("Front End file created at "+FrontEndFolderPath+major_name+".php")



		with open(inputfile) as fp:

			for line in fp:
				line = line.replace("][",",")
				line = ast.literal_eval(line)
				table_element ="""
			<tr role="button" id="""+'"Btn'+line[0]+line[1].strip(".")+'"'+""" class="u" style="cursor: pointer">
				<td style="text-align:left">"""+line[0]+" "+line[1].strip(".")+"""</td>
				<td style="text-align:left">"""+line[2]+"""</td>
				<td></td>
				<td>"""+line[3].strip()+"""</td>
			</tr>
"""
				FrontEndFileLocation = open(FrontEndFolderPath+major_name+".php", 'a')
				FrontEndFileLocation.write(table_element)
				FrontEndFileLocation.close()

				jsButton = """
Btn"""+line[0]+line[1]+"""onclick = function() {

  modal.style.display = "block";
  document.getElementById('cid').innerHTML="""+'"'+line[0]+line[1].strip(".")+'"'+""";
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
        xmlhttp.open("GET","../BackEnd/"""+major_name+"""BackEnd.php?data="""+line[1].strip(".")+"""",true);
        xmlhttp.send();
  
  document.body.style.overflow = 'hidden';

}
"""

				if (runjs==1):
					jsFileLocation = open(jsFolderPath+major_name+"Popup.js", 'a')
					jsFileLocation.write(jsButton)
					jsFileLocation.close()


			BottomOfFrontEnd = """
			</tbody>
				</table>

            <br>
			<br>
			<br>

            <button onclick="topFunction()" id="myBtntop" title="Go to top">Top</button>
			<script type="text/javascript" src="../js/jquery.js"></script>
			<script type="text/javascript" src="../js/"""+major_name+"""Popup.js" ></script>
</body>
</html>

			"""

			FrontEndFileLocation = open(FrontEndFolderPath+major_name+".php", 'a')
			FrontEndFileLocation.write(BottomOfFrontEnd)
			FrontEndFileLocation.close()


	BackEnd= """<!doctype html>

<?php
require "config.php";
require "common.php";

$connection = new PDO($dsn, $username, $password, $options);

if (isset($_GET['data'])){
 try {
    $course = $_GET['data'];
 }catch(PDOException $error) {
    echo $sql . "<br>" . $error->getMessage();
}
}

 try{
  $sql = "SELECT * FROM """+db_table_name+""" where NUMBER= $course ORDER BY A DESC;";

  $statement = $connection->prepare($sql);
  $statement->execute();

  $events = $statement->fetchAll();

 } catch(PDOException $error) {
  echo $sql . "<br>" . $error->getMessage();
 }

function percent($number){
    return $number * 100 . '%';
}
?>
<html lang="en">

<head>
    <!-- <link rel="stylesheet" type="text/css" href="style.css"> -->
    <script src="sorttable.js"></script>

    <title>Database Test</title>
    <style>
        /* table.newtable td, table.newtable th {
        border: 2px solid white;
        border-radius: 4px;
        
        background-color: #FFFFFF;
        font-family: Arial, serif;
            
        } */
        table.newtable{
            width: 100%;

            border: 2px solid white;
        border-radius: 4px;
        
        background-color: #FFFFFF;
        font-family: Arial, serif;
        font-size: 15px;
            
        }
        table.newtable td, table.newtable th {
    /* border: 1px solid #24943A; */
        padding: 6px 10px 10px;
        }

        

    </style>
</head>

<body>

<table class="sortable, newtable">
        <thead>
            <tr>
                <th>Instructor</th>
                <th>Percentage of A's</th>
                <th>Percentage of B's</th>
                <th>Percentage of C's</th>
                <th>Percentage of D's</th>
                <th>Percentage of F's</th>
                <th>Withdrawal Percentage</th>
                <th>Total Number of Students</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach($events as $value){ ?>
            <tr>
                <td><?php echo escape($value['INSTRUCTOR']); ?></td>
                <td><?php echo escape(percent(round(($value["AP"]+$value["A"]+$value["AM"])/($value["TOT_NON_W"]),2))); ?></td>
                <td><?php echo escape(percent(round(($value["BP"]+$value["B"]+$value["BM"])/($value["TOT_NON_W"]),2))); ?></td>
                <td><?php echo escape(percent(round(($value["CP"]+$value["C"]+$value["CM"])/($value["TOT_NON_W"]),2))); ?></td>
                <td><?php echo escape(percent(round(($value["DP"]+$value["D"]+$value["DM"])/($value["TOT_NON_W"]),2))); ?></td>
                <td><?php echo escape(percent(round(($value["F"])/($value["TOT_NON_W"]),2))); ?></td>
                <td><?php echo escape(percent(round(($value["W"])/($value["TOT_NON_W"]),2))); ?></td>
                <td><?php echo escape($value["W"]+$value["TOT_NON_W"]); ?></td>


            </tr>
<?php } ?>
        </tbody>
    </table>


</body>
</html>
	"""
	if os.path.exists(BackEndFolderPath+major_name+"BackEnd"+".php"):
		print("ERROR: Back End file already exists enter, enter a Back End file name that does not already exist")
	else:
		BackEndFileLocation = open(BackEndFolderPath+major_name+"BackEnd"+".php", 'w+')
		BackEndFileLocation.write(BackEnd)
		BackEndFileLocation.close

		print("Back End file created at "+BackEndFolderPath+major_name+"BackEnd"+".php")
	return None


def main():
	filepath = "../final_webscrape/final_j_courses.txt"
	db_table_name = "Journalism"
	major_name = "Journalism"
	FrontEndFolderPath = "../FrontEnd/"
	jsFolderPath = "../js/"
	BackEndFolderPath = "../BackEnd/"

	if not os.path.isfile(filepath):
		print("File path {} does not exist. Exiting...".format(filepath))
		sys.exit()

	page_generator(filepath,db_table_name, major_name,FrontEndFolderPath, BackEndFolderPath,jsFolderPath)


if __name__=="__main__":
    main()
