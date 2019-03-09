<!-- HTML file for CIS major page
Author: Jarvis Dong 
Initial Created on Feb 25th 00:30 AM

This page include 8 tables that indicates all required courses
if a student plan to graduate in major Computer&Information Science
whether as a bechelor of Art or a bechelor of Science

Last Updated: Jarvis Dong Feb 25th 9:14 AM -->


<?php

include(connectdata.txt);

$db = mysqli_connect($server, $user, $pass , $dbname , $port)
or die('Error connecting to Mysql server.');

$query = "Select INSTRUCTOR from CIS;";

$result = mysqli_query($db,$query) or die(mysqli_error($db));


?>

<html>
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>Computer & Informatiomn Science</title>
		<link rel="stylesheet" type="text/css" href="../CSS/CIS_Page_style.css">
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
		<img  height= 60px; src="../image/mainLOGO.svg" alt="mainLOGO">
		<div align="right" style="margin-right: 2%; margin-bottom: 10px;">
			<b style="color:#fee123">Designed by CIS422 Group 7</b></div>
		</div>

		<h1 style="margin-left: 7%">Computer and Information Science</h1>
		<h2 style="margin-left: 7%">Four-Year Degree Plan</h2>
		<h3 style="text-align:center">Bachelor of Science in Computer and Information Science</h3>
		
		
		
		<!--Modal CIS122-->
		<!-- The Modal -->
		<div id="myModal" class="modal">
		<div class="modal-content">
			<span class="close">&times;</span>
			<p style="color: white">Hello CIS 122!</p>
			<select id= "myMajor" style= "width:30%;" >
			<option value='NNN' disabled selected>Select  professor</option>
			<?php while($row = mysqli_fetch_array($result)){?>
				<option value=<?php echo $row[INSTRUCTOR];?><?php echo $row[INSTRUCTOR];?></option>
			<?php
			}
			mysqli_free_result($result);
			?>
			</select>
			<br>
			<br>
			<br>
			<canvas id="my_canvas" width= "1000"    style="border:2px solid #ffffff; height: 200px; border-radius: 6px; "></canvas>
			<!-- <div id="chartContainer" style="height: 370px; width: 100%;"></div> -->
			<br>
			<!-- <canvas id="a_canvas" width="1000" height="700"></canvas> -->
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
			<p style="color: white">Hello CIS 122!</p>
		</div>
		</div>

		

		<!-- BS First Year Table -->
		<table id="s1" class="greenTable" >
			<thead>
				<tr>
				<th>First Year</th>
				<th></th>
				<th></th>
				<th></th>
				</tr>
			</thead>
			<tbody>
				<!-- 1st Year Fall -->
			<tr>
			<td style="font-size: 17px">Fall</td>
			<td></td>
			<td style="font-size: 17px">Milestone</td>
			<td style="font-size: 17px">Credits</td>
			</tr>
			<tr>
			<td role="button" id="Btn122" class="u" style="text-align:left; cursor: pointer">CIS 122</td>
			<td style="text-align:left">Introduction to Programming and Problem<br>
				Solving</td>
			<td></td>
			<td>4</td>
			</tr>
			<tr>
			<td style="text-align:left">Math 112</td>
			<td style="text-align:left">Elementary Functions</td>
			<td></td>
			<td>4</td>
			</tr>
			<tr>
			<td style="text-align:left">General-education course in arts and letters	</td>
			<td></td>
			<td></td>
			<td>4</td>
			</tr>
			<tr>
			<td style="text-align:left">General-education course in arts and letters	</td>
			<td></td>
			<td></td>
			<td>4</td>
			</tr>
			<td><span style="font-weight:bold">Credits</span></td>
			<td></td>
			<td></td>
			<td><span style="font-weight:bold">16</span></td>
				<!-- 1st Year Winter -->
			<tr>
			<td style="font-size: 17px">Winter</td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
			<tr>
			<td role="button" id="Btn210" class="u" style="text-align:left; cursor: pointer" style="text-align:left">CIS 210</td>
			<td style="text-align:left">Computer Science I	</td>
			<td style="text-align:left">Need grade of B- or better for majors	</td>
			<td>4</td>
			</tr>
			<tr>
			<td style="text-align:left">CIS 231</td>
			<td style="text-align:left">Elements of Discrete Mathematics I	</td>
			<td style="text-align:left">Need grade of B- or better for majors	</td>
			<td>4</td>
			</tr>
			<tr>
			<td style="text-align:left">WR 121</td>
			<td style="text-align:left">College Composition I	</td>
			<td></td>
			<td>4</td>
			</tr>
			<tr>
			<td style="text-align:left">General-education course in arts and letters	</td>
			<td></td>
			<td></td>
			<td>4</td>
			</tr>
			<td><span style="font-weight:bold">Credits</span></td>
			<td></td>
			<td></td>
			<td><span style="font-weight:bold">16</span></td>
				<!-- 1st Year Spring -->
			<tr>
			<td style="font-size: 17px">Spring</td>
			<td></td>
			<td></td>
			<td></td>
			</tr>
			<tr>
			<td style="text-align:left">CIS 211</td>
			<td style="text-align:left">Computer Science II	</td>
			<td style="text-align:left">Need grade of B- or better for majors</td>
			<td>4</td>
			</tr>
			<tr>
			<td style="text-align:left">MATH 232</td>
			<td style="text-align:left">Elements of Discrete Mathematics II	</td>
			<td style="text-align:left">Need grade of B- or better for majors</td>
			<td>4</td>
			</tr>
			</tr>
			<tr>
			<td style="text-align:left">WR 122 <br>
				or WR 123<br></td>
			<td style="text-align:left">College Composition II <br>
				or College Composition III<br>
				</td>
			<td></td>
			<td>4</td>
			</tr>
			</tr>
			<tr>
			<td style="text-align:left">General-education course in social science	</td>
			<td></td>
			<td></td>
			<td>4</td>
			</tr>
			</tr>
			<tr>
			<td><span style="font-weight:bold">Credits</span></td>
			<td></td>
			<td></td>
			<td><span style="font-weight:bold">16</span></td>
			
			</tr>
			</tr>
			<tr>
			<td style="font-size: 17px"><span style="font-weight:bold">Total Credits</span></td>
			<td></td>
			<td></td>
			<td><span style="font-weight:bold">48</span></td>
			</tr>
			</tbody>
				</table>

		<br>


		<!-- BS Second Year Table -->
		<table id="s2" class="greenTable">
				<thead>
				<tr>
				<th>Second Year</th>
				<th></th>
				<th></th>
				<th></th>
				</tr>
				</thead>
				<tbody>
				<tr>
				<td style="font-size: 17px">Fall</td>
				<td></td>
				<td style="font-size: 17px">Milestone</td>
				<td style="font-size: 17px">Credits</td>
				</tr>
				<tr>
				<td style="text-align:left">CIS 212	</td>
				<td style="text-align:left">Computer Science III	</td>
				<td style="text-align:left">Need grade of B- or better for majors	</td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">MATH 251<br>
					or MATH 246<br>
					or MATH 261<br>
				</td>
				<td style="text-align:left">Calculus I<br>
						or Calculus for the Biological Sciences I<br>
						or Calculus with Theory I<br></td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">General-education course in arts and letters	</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">General-education course in arts and letters	</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				<td><span style="font-weight:bold">Credits</span></td>
				<td></td>
				<td></td>
				<td><span style="font-weight:bold">16</span></td>		
				<tr>	
				<td style="font-size: 17px">Winter</td>
				<td></td>
				<td></td>
				<td></td>
				</tr>
				<tr>
				<td style="text-align:left">CIS 313</td>
				<td style="text-align:left">Intermediate Data Structures</td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">CIS 314</td>
				<td style="text-align:left">Computer Organization</td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">MATH 252<br>
						or MATH 247<br>
						or MATH 262<br></td>
				<td style="text-align:left">Calculus II<br> 
						or Calculus for the Biological Sciences II<br>
						or Calculus with Theory II<br></td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">General-education course in arts and letters that also satisfies<br>
					multicultural requirement</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				<td><span style="font-weight:bold">Credits</span></td>
				<td></td>
				<td></td>
				<td><span style="font-weight:bold">16</span></td>
				<tr>
				<td style="font-size: 17px">Spring</td>
				<td></td>
				<td></td>
				<td></td>
				</tr>
				<tr>
				<td style="text-align:left">CIS 315</td>
				<td style="text-align:left">Intermediate Algorithms</td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">CIS 330</td>
				<td style="text-align:left">C/C++ and Unix</td>
				<td></td>
				<td>4</td>
				</tr>
				</tr>
				<tr>
				<td style="text-align:left">MATH 253 <br>
						or MATH 263<br>
						or MATH 341<br>
						or MATH 343<br>
						or MATH 425<br></td>
				<td style="text-align:left">Calculus III <br>
						or Calculus with Theory III<br>
						or Elementary Linear Algebra<br>
						or Statistical Models and Methods<br>
						or Statistical Methods I<br></td>
				<td></td>
				<td>4</td>
				</tr>
				</tr>
				<tr>
				<td style="text-align:left">General-education course in social science that also satisfies a<br>
					multicultural requirement</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				</tr>
				<tr>
				<td><span style="font-weight:bold">Credits</span></td>
				<td></td>
				<td></td>
				<td><span style="font-weight:bold">16</span></td>
				</tr>
				</tr>
				<tr>
				<td style="font-size: 17px"><span style="font-weight:bold">Total Credits</span></td>
				<td></td>
				<td></td>
				<td><span style="font-weight:bold">48</span></td>
				</tr>
				</tbody>
				</table>

		<br>
		<!-- BS Third Year Table -->
		<table id="s3" class="greenTable">
				<thead>
				<tr>
				<th>Third Year</th>
				<th></th>
				<th></th>
				<th></th>
				</tr>
				</thead>
				<tbody>
				<tr>
				<td style="font-size: 17px">Fall</td>
				<td></td>
				<td style="font-size: 17px">Milestone</td>
				<td style="font-size: 17px">Credits</td>
				</tr>
				<tr>
				<td style="text-align:left">CIS 415	</td>
				<td style="text-align:left">Operating Systems</td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">Upper-division elective course<br>
					with CIS subject code</td>
				<td></td>
				<td style="text-align:left">Maximum of 8 upper-division elective credits in courses<br>
					with numbers less than 410</td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">First course of additional science sequence</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">Elective course</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				<td><span style="font-weight:bold">Credits</span></td>
				<td></td>
				<td></td>
				<td><span style="font-weight:bold">16</span></td>		
				<tr>	
				<td style="font-size: 17px">Winter</td>
				<td></td>
				<td></td>
				<td></td>
				</tr>
				<tr>
				<td style="text-align:left">CIS 422</td>
				<td style="text-align:left">Software Methodology I	</td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">Upper-division elective course<br>
					with CIS subject code</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">Second course of additional science sequence</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">Elective course	</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				<td><span style="font-weight:bold">Credits</span></td>
				<td></td>
				<td></td>
				<td><span style="font-weight:bold">16</span></td>
				<tr>
				<td style="font-size: 17px">Spring</td>
				<td></td>
				<td></td>
				<td></td>
				</tr>
				<tr>
				<td style="text-align:left">CIS 425</td>
				<td style="text-align:left">Principles of Programming Languages	</td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">Upper-division elective course<br>
					with CIS subject code</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				</tr>
				<tr>
				<td style="text-align:left">Third course of additional science sequence</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				</tr>
				<tr>
				<td style="text-align:left">Elective course	</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				</tr>
				<tr>
				<td><span style="font-weight:bold">Credits</span></td>
				<td></td>
				<td></td>
				<td><span style="font-weight:bold">16</span></td>
				</tr>
				</tr>
				<tr>
				<td style="font-size: 17px"><span style="font-weight:bold">Total Credits</span></td>
				<td></td>
				<td></td>
				<td><span style="font-weight:bold">48</span></td>
				</tr>
				</tbody>
				</table>

		<br>
		<!-- BS Forth Year Table-->
		<table id="s4" class="greenTable">
				<thead>
				<tr>
				<th>Forth Year</th>
				<th></th>
				<th></th>
				<th></th>
				</tr>
				</thead>
				<tbody>
				<tr>
				<td style="font-size: 17px">Fall</td>
				<td></td>
				<td style="font-size: 17px">Milestone</td>
				<td style="font-size: 17px">Credits</td>
				</tr>
				<tr>
				<td style="text-align:left">Upper-division elective course<br>
					with CIS subject code	</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">Upper-division mathematics elective	</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">Elective course</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				<td><span style="font-weight:bold">Credits</span></td>
				<td></td>
				<td></td>
				<td><span style="font-weight:bold">12</span></td>		
				<tr>	
				<td style="font-size: 17px">Winter</td>
				<td></td>
				<td></td>
				<td></td>
				</tr>
				<tr>
				<td style="text-align:left">Upper-division elective course<br>
					with CIS subject code	</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">Upper-division mathematics elective	</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">Elective course	</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				<td><span style="font-weight:bold">Credits</span></td>
				<td></td>
				<td></td>
				<td><span style="font-weight:bold">12</span></td>
				<tr>
				<td style="font-size: 17px">Spring</td>
				<td></td>
				<td></td>
				<td></td>
				</tr>
				</tr>
				<tr>
				<td style="text-align:left">WR 320<br>
					or WR 321<br>
				</td>
				<td style="text-align:left">Scientific and Technical Writing<br>
						or Business Communications<br></td>
				<td></td>
				<td>4</td>
				</tr>
				</tr>
				<tr>
				<td style="text-align:left">Elective course	</td>
				<td></td>
				<td></td>
				<td>8</td>
				</tr>
				</tr>
				<tr>
				<td><span style="font-weight:bold">Credits</span></td>
				<td></td>
				<td></td>
				<td><span style="font-weight:bold">12</span></td>
				</tr>
				</tr>
				<tr>
				<td style="font-size: 17px"><span style="font-weight:bold">Total Credits</span></td>
				<td></td>
				<td></td>
				<td><span style="font-weight:bold">36</span></td>
				</tr>
				</tbody>
				</table>

		<br>

		<h3 style="text-align:center">Bachelor of Arts in Computer and Information Science</h3>

		<!-- BA First Year Table -->
		<table id="a1" class="greenTable">
				<thead>
					<tr>
					<th>First Year</th>
					<th></th>
					<th></th>
					<th></th>
					</tr>
				</thead>
				<tbody>
					<!-- 1st Year Fall -->
				<tr>
				<td style="font-size: 17px">Fall</td>
				<td></td>
				<td style="font-size: 17px">Milestone</td>
				<td style="font-size: 17px">Credits</td>
				</tr>
				<tr>
				<td style="text-align:left">CIS 122	</td>
				<td style="text-align:left">Introduction to Programming and Problem Solving</td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">Math 112</td>
				<td style="text-align:left">Elementary Functions</td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">First term of second-language sequence	</td>
				<td></td>
				<td></td>
				<td>5</td>
				</tr>
				<tr>
				<td style="text-align:left">General-education course in social science	</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				<td><span style="font-weight:bold">Credits</span></td>
				<td></td>
				<td></td>
				<td><span style="font-weight:bold">17</span></td>
					<!-- 1st Year Winter -->
				<tr>
				<td style="font-size: 17px">Winter</td>
				<td></td>
				<td></td>
				<td></td>
				</tr>
				<tr>
				<td style="text-align:left">CIS 210</td>
				<td style="text-align:left">Computer Science I</td>
				<td style="text-align:left">Need grade of B- or better for majors	</td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">CIS 231</td>
				<td style="text-align:left">Elements of Discrete Mathematics I</td>
				<td style="text-align:left">Need grade of B- or better for majors	</td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">WR 121</td>
				<td style="text-align:left">College Composition I</td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">Second term of second-language sequence	</td>
				<td></td>
				<td></td>
				<td>5</td>
				</tr>
				<td><span style="font-weight:bold">Credits</span></td>
				<td></td>
				<td></td>
				<td><span style="font-weight:bold">17</span></td>
					<!-- 1st Year Spring -->
				<tr>
				<td style="font-size: 17px">Spring</td>
				<td></td>
				<td></td>
				<td></td>
				</tr>
				<tr>
				<td style="text-align:left">CIS 211</td>
				<td style="text-align:left">Computer Science II</td>
				<td style="text-align:left">Need grade of B- or better for majors</td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">MATH 232</td>
				<td style="text-align:left">Elements of Discrete Mathematics II</td>
				<td style="text-align:left">Need grade of B- or better for majors</td>
				<td>4</td>
				</tr>
				</tr>
				<tr>
				<td style="text-align:left">WR 122 <br>
					or <br>
					WR 123<br></td>
				<td style="text-align:left">College Composition II<br>
						or College Composition III<br></td>
				<td></td>
				<td>4</td>
				</tr>
				</tr>
				<tr>
				<td style="text-align:left">Third term of second-language sequence</td>
				<td></td>
				<td></td>
				<td>5</td>
				</tr>
				</tr>
				<tr>
				<td><span style="font-weight:bold">Credits</span></td>
				<td></td>
				<td></td>
				<td><span style="font-weight:bold">17</span></td>
				</tr>
				</tr>
				<tr>
				<td style="font-size: 17px"><span style="font-weight:bold">Total Credits</span></td>
				<td></td>
				<td></td>
				<td><span style="font-weight:bold">51</span></td>
				</tr>
				</tbody>
					</table>
	
		<br>
		<!-- BA Second Year Table -->
		<table id="a2" class="greenTable">
				<thead>
				<tr>
				<th>Second Year</th>
				<th></th>
				<th></th>
				<th></th>
				</tr>
				</thead>
				<tbody>
					<!-- 2nd Year Fall -->
				<tr>
				<td style="font-size: 17px">Fall</td>
				<td></td>
				<td style="font-size: 17px">Milestone</td>
				<td style="font-size: 17px">Credits</td>
				</tr>

				<tr>
				<td style="text-align:left">CIS 212	</td>
				<td style="text-align:left">Computer Science III	</td>
				<td style="text-align:left">Need grade of B- or better for majors	</td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">MATH 251<br>
					or MATH 246<br>
					or MATH 261<br>
				</td>
				<td style="text-align:left">Calculus I<br> 
						or Calculus for the Biological Sciences I<br>
						or Calculus with Theory I<br></td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">General-education course in arts and letters</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">General-education course in social science</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				<td><span style="font-weight:bold">Credits</span></td>
				<td></td>
				<td></td>
				<td><span style="font-weight:bold">16</span></td>
					<!-- 2nd Year Winter	 -->
				<tr>	
				<td style="font-size: 17px">Winter</td>
				<td></td>
				<td></td>
				<td></td>
				</tr>
				<tr>
				<td style="text-align:left">CIS 313</td>
				<td style="text-align:left">Intermediate Data Structures</td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">CIS 314</td>
				<td style="text-align:left">Computer Organization</td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">MATH 252<br>
						or MATH 247<br>
						or MATH 262<br></td>
				<td style="text-align:left">Calculus II<br> 
						or Calculus for the Biological Sciences II<br>
						or Calculus with Theory II<br></td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">General-education course in arts and letters	</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				<td><span style="font-weight:bold">Credits</span></td>
				<td></td>
				<td></td>
				<td><span style="font-weight:bold">16</span></td>
					<!-- 2nd Year Spring -->
				<tr>
				<td style="font-size: 17px">Spring</td>
				<td></td>
				<td></td>
				<td></td>
				</tr>
				<tr>
				<td style="text-align:left">CIS 315</td>
				<td style="text-align:left">Intermediate Algorithms</td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">CIS 330</td>
				<td style="text-align:left">C/C++ and Unix</td>
				<td></td>
				<td>4</td>
				</tr>
				</tr>
				<tr>
				<td style="text-align:left">MATH 253 <br>
						or MATH 263<br>
						or MATH 341<br>
						or MATH 343<br>
						or MATH 425<br></td>
				<td style="text-align:left">Calculus III<br> 
						or Calculus with Theory III<br>
						or Elementary Linear Algebra<br>
						or Statistical Models and Methods<br>
						or Statistical Methods I<br></td>
				<td></td>
				<td>4</td>
				</tr>
				</tr>
				<tr>
				<td style="text-align:left">General-education course in social science</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				</tr>
				<tr>
				<td><span style="font-weight:bold">Credits</span></td>
				<td></td>
				<td></td>
				<td><span style="font-weight:bold">16</span></td>
				</tr>
				</tr>
				<tr>
				<td style="font-size: 17px"><span style="font-weight:bold">Total Credits</span></td>
				<td></td>
				<td></td>
				<td><span style="font-weight:bold">48</span></td>
				</tr>
				</tbody>
				</table>

		<br>
		<!-- BA Third Year Table -->
		<table id="a3" class="greenTable">
				<thead>
				<tr>
				<th>Third Year</th>
				<th></th>
				<th></th>
				<th></th>
				</tr>
				</thead>
				<tbody>
					<!-- 3rd Year Fall -->
				<tr>
				<td style="font-size: 17px">Fall</td>
				<td></td>
				<td style="font-size: 17px">Milestone</td>
				<td style="font-size: 17px">Credits</td>
				</tr>

				<tr>
				<td style="text-align:left">CIS 415	</td>
				<td style="text-align:left">Operating Systems</td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">Upper-division elective course<br>
					with CIS subject code</td>
				<td style="text-align:left">Maximum of 8 upper-division elective credits in<br>
					courses with numbers less than 410</td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">First course of additional science sequence</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">General-education course in arts and letters	</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				<td><span style="font-weight:bold">Credits</span></td>
				<td></td>
				<td></td>
				<td><span style="font-weight:bold">16</span></td>		
					<!-- 3rd Year Winter -->
				<tr>	
				<td style="font-size: 17px">Winter</td>
				<td></td>
				<td></td>
				<td></td>
				</tr>
				<tr>
				<td style="text-align:left">CIS 422</td>
				<td style="text-align:left">Software Methodology I</td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">Upper-division elective course<br>
					with CIS subject code</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">Second course of additional science sequence</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">General-education course in social science that<br>
					also meets multicultural requirement</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				<td><span style="font-weight:bold">Credits</span></td>
				<td></td>
				<td></td>
				<td><span style="font-weight:bold">16</span></td>
					<!-- 3rd Year Spring -->
				<tr>
				<td style="font-size: 17px">Spring</td>
				<td></td>
				<td></td>
				<td></td>
				</tr>
				<tr>
				<td style="text-align:left">CIS 425</td>
				<td style="text-align:left">Principles of Programming Languages</td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">Upper-division elective course<br>
					with CIS subject code</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				</tr>
				<tr>
				<td style="text-align:left">Third course of additional science sequence</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				</tr>
				<tr>
				<td style="text-align:left">General-education course in social science that<br>
					also meets multicultural requirement</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				</tr>
				<tr>
				<td><span style="font-weight:bold">Credits</span></td>
				<td></td>
				<td></td>
				<td><span style="font-weight:bold">16</span></td>
				</tr>
				</tr>
				<tr>
				<td style="font-size: 17px"><span style="font-weight:bold">Total Credits</span></td>
				<td></td>
				<td></td>
				<td><span style="font-weight:bold">48</span></td>
				</tr>
				</tbody>
				</table>

		<br>
		<!-- BA Forth Year Table-->
		<table id="a4" class="greenTable">
				<thead>
				<tr>
				<th>Forth Year</th>
				<th></th>
				<th></th>
				<th></th>
				</tr>
				</thead>
				<tbody>
					<!-- 4th Year Fall -->
				<tr>
					<td style="font-size: 17px">Fall</td>
					<td></td>
					<td style="font-size: 17px">Milestone</td>
					<td style="font-size: 17px">Credits</td>
				</tr>

				<tr>
				<td style="text-align:left">MATH 253<br>
						or MATH 263<br>
						or MATH 341<br>
						or MATH 343<br>
						or MATH 425<br></td>
				<td style="text-align:left">Calculus III<br> 
						or Calculus with Theory III<br>
						or Elementary Linear Algebra<br>
						or Statistical Models and Methods<br>
						or Statistical Methods I<br></td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">Upper-division elective course<br>
					with CIS subject code	</td>
				<td style="text-align:left"></td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">Elective course</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				<td><span style="font-weight:bold">Credits</span></td>
				<td></td>
				<td></td>
				<td><span style="font-weight:bold">12</span></td>	
					<!-- 4th Year Winter -->
				<tr>	
				<td style="font-size: 17px">Winter</td>
				<td></td>
				<td></td>
				<td></td>
				</tr>
				<tr>
				<td style="text-align:left">Upper-division elective course<br>
					with CIS subject code	</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">Upper-division mathematics elective	</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				<tr>
				<td style="text-align:left">Elective course	</td>
				<td></td>
				<td></td>
				<td>4</td>
				</tr>
				<td><span style="font-weight:bold">Credits</span></td>
				<td></td>
				<td></td>
				<td><span style="font-weight:bold">12</span></td>
				<tr>
				<td style="font-size: 17px">Spring</td>
				<td></td>
				<td></td>
				<td></td>
				</tr>
				</tr>
				<tr>
				<td style="text-align:left">WR 320<br>
					or WR 321<br>
				</td>
				<td style="text-align:left">Scientific and Technical Writing<br>
						or Business Communications<br></td>
				<td></td>
				<td>4</td>
				</tr>
				</tr>
				<tr>
				<td style="text-align:left">Elective course	</td>
				<td></td>
				<td></td>
				<td>8</td>
				</tr>
				</tr>
				<tr>
				<td><span style="font-weight:bold">Credits</span></td>
				<td></td>
				<td></td>
				<td><span style="font-weight:bold">12</span></td>
				</tr>

				<tr>
				<td style="font-size: 17px"><span style="font-weight:bold">Total Credits</span></td>
				<td></td>
				<td></td>
				<td><span style="font-weight:bold">36</span></td>
				</tr>
				</tbody>
				</table>

				<br>
				<br>
				<br>

				<script type="text/javascript" src="../js/jquery.js"></script>
				<script type="text/javascript" src="../js/Popup.js" ></script>

				<!-- <script src="http://code.jquery.com/jquery-1.10.2.js"></script> -->
				<!-- <script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script> -->
				<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>

				<button onclick="topFunction()" id="myBtn2" title="Go to top">Top</button>
				<button onclick="Function1()" id="Btn1y" >S1st</button>
				<button onclick="Function2()" id="Btn2y" >S2nd</button>
				<button onclick="Function3()" id="Btn3y" >S3rd</button>
				<button onclick="Function4()" id="Btn4y" >S4th</button>

				<button onclick="Function5()" id="Btn5y" >A1st</button>
				<button onclick="Function6()" id="Btn6y" >A2nd</button>
				<button onclick="Function7()" id="Btn7y" >A3rd</button>
				<button onclick="Function8()" id="Btn8y" >A4th</button>		

				<!-- <script>
						var modal = document.getElementById('myModal');
			
			
						// Get the button that opens the modal
						var Btn122 = document.getElementById("Btn122");
						var Btn210 = document.getElementById("Btn210");
						
						
						// Get the <span> element that closes the modal
						var span = document.getElementsByClassName("close")[0];
						
						// When the user clicks the button, open the modal 
						Btn122.onclick = function() {
						modal.style.display = "block";
						document.getElementById('myMajor').innerHTML= "";
						document.getElementById('myMajor').innerHTML = "<option value='NNN' disabled selected>Select  professor</option>"
						+ "<option value='Hank'>Hank Childs</option>"
						+ "<option value='Lei'>Lei Jiao</option>"
						+ "<option value='Anthony'>Anthony Hornof</option>"
						+ "<option value='Joe'>Joe Sventek</option>";

						document.body.style.overflow = 'hidden';
						
						}
				</script> -->
		
	</body>





</html>