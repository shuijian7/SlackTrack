<!-- HTML file for CIS major page
Author: Jarvis Dong 
Initial Created on Feb 25th 00:30 AM

This page include 8 tables that indicates all required courses
if a student plan to graduate in major Computer&Information Science
whether as a bechelor of Art or a bechelor of Science

Last Updated: Jarvis Dong March 6th 2019, Wed 15:26 -->






<html>
<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>Computer & Information Science</title>
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
		<img  height= 60px; src="../image/mainLOGO.svg" alt="mainLOGO">
		<div align="right" style="margin-right: 2%; margin-bottom: 10px;">
			<b style="color:#fee123">Designed by CIS422 Group 7</b></div>
		</div>
		<h1 style="margin-left: 7%">Computer and Information Science</h1>











		<!--Modal-->
		<!-- The Modal -->
		<div id="myModal" class="modal">
		<div class="modal-content">
			<span class="close">&times;</span>
			<h1 id="cid" style="color: white">    </h1>
			

			<div id="txtHint"><b>Table info will be listed here...</b></div>
			<!-- <select id= "myMajor" style= "width:30%;" >
				<option value='NNN' disabled selected>Select  professor</option>
				<option value='Hank'>Hank Childs</option>
				<option value='Lei'>Lei Jiao</option>
				<option value='Anthony'>Anthony Hornof</option>
				<option value='Joe'>Joe Sventek</option>
			</select> -->
			<br>
			<br>
			<br>
			<!-- <canvas id="my_canvas" width= "1000" style="border:2px solid #ffffff;
			 height: 200px; border-radius: 6px; "></canvas> -->
			<br>
			<br>
			<br>
			<br>
			


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
				<!-- Core Courses: Lower Division -->
			<tr>
				<td style="font-size: 17px">Core Courses: Lower Division</td>
				<td></td>
				<td style="font-size: 17px"></td>
				<td style="font-size: 17px">Credits</td>
			</tr>
			<tr role="button" id="Btn210" class="u" style="cursor: pointer">
				<td style="text-align:left;">CIS 210</td>
				<td style="text-align:left">Computer Science I<br>
					Solving</td>
				<td></td>
				<td>4</td>
			</tr>
			<tr role="button" id="Btn211" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 211</td>
				<td style="text-align:left">Computer Science II	</td>
				<td></td>
				<td>4</td>
			</tr>
			<tr role="button" id="Btn212" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 212</td>
				<td style="text-align:left">Computer Science III</td>
				<td></td>
				<td>4</td>
			</tr>
			<tr>
				<td style="text-align:left">MATH 231</td>
				<td style="text-align:left">Elements of Discrete Mathematics I</td>
				<td></td>
				<td>4</td>
			</tr>
			<tr>
				<td style="text-align:left">MATH 232</td>
				<td style="text-align:left">Elements of Discrete Mathematics II</td>
				<td></td>
				<td>4</td>
			</tr>
				<!-- Core Courses: Upper Division	 -->
			<tr>
			<td style="font-size: 17px">Core Courses: Upper Division</td>
			<td></td>
			<td style="font-size: 17px"></td>
			<td style="font-size: 17px">Credits</td>
			</tr>
			<tr role="button" id="Btn313" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 313</td>
				<td style="text-align:left">Intermediate Data Structures</td>
				<td style="text-align:left"></td>
				<td>4</td>
			</tr>
			<tr role="button" id="Btn314" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 314</td>
				<td style="text-align:left">Computer Organization</td>
				<td style="text-align:left"></td>
				<td>4</td>
			</tr>
			<tr role="button" id="Btn315" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 315</td>
				<td style="text-align:left">Intermediate Algorithms</td>
				<td></td>
				<td>4</td>
			</tr>
			<tr role="button" id="Btn330" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 330</td>
				<td style="text-align:left">C/C++ and Unix</td>
				<td></td>
				<td>4</td>
			</tr>
			<tr role="button" id="Btn415" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 415</td>
				<td style="text-align:left">Operating Systems</td>
				<td></td>
				<td>4</td>
			</tr>
			<tr role="button" id="Btn422" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 422</td>
				<td style="text-align:left">Software Methodology I</td>
				<td></td>
				<td>4</td>
			</tr>
			<tr role="button" id="Btn425" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 425</td>
				<td style="text-align:left">Principles of Programming Languages</td>
				<td></td>
				<td>4</td>
			</tr>

				<!-- Core Courses: Mathematics	 -->
			<tr>
			<td style="font-size: 17px">Core Courses: Mathematics</td>
			<td></td>
			<td></td>
			<td style="font-size: 17px">Credits</td>
			</tr>

			<tr>
				<td>Select one consecutive of the following:</td>
				<td></td>
				<td></td>
				<td>8</td>
			</tr>

			<tr>
				<td style="text-align:left">Math 251-252</td>
				<td style="text-align:left">Calculus I-II</td>
				<td style="text-align:left"></td>
				<td>4</td>
			</tr>


			<tr>
				<td style="text-align:left">MATH 261-262</td>
				<td style="text-align:left">Calculus with Theory I-II</td>
				<td></td>
				<td>4</td>
			</tr>

			
			<tr>
				<td style="text-align:left">MATH 246-247</td>
				<td style="text-align:left">Calculus for the Biological Sciences I-II</td>
				<td></td>
				<td>4</td>
			</tr>


			<tr>
				<td>Select two of the following:</td>
				<td></td>
				<td></td>
				<td>8</td>
			</tr>

			<tr>
				<td style="text-align:left">MATH 347 <br>
											or MATH 352 <br>
											or MATH 381
				</td>
				<td style="text-align:left">Fundamentals of Number Theory I<br>
					Elementary Numerical Analysis II<br>
					Fundamentals of Abstract Algebra I<br></td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td style="text-align:left">MATH 253 <br>
											or MATH 263
				</td>
				<td style="text-align:left">Calculus III<br>
					Calculus with Theory III</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td style="text-align:left">MATH 341</td>
				<td style="text-align:left">Elementary Linear Algebra</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td style="text-align:left">MATH 343 <br>
											or MATH 425</td>
				<td style="text-align:left">Statistical Models and Methods<br>
					Statistical Methods I
				</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td style="font-size: 17px">Core Courses: Science</td>
				<td></td>
				<td></td>
				<td style="font-size: 17px">Credits</td>
			</tr>
			
			<tr>
				<td>Select 12 credits from the following:</td>
				<td></td>
				<td></td>
				<td>12</td>
			</tr>

			<tr>
				<td style="text-align:left">Biology</td>
				<td></td>
				<td></td>
				<td></td>
			</tr>

			<tr>
				<td style="text-align:left">CH 111 <br>
											or CH 113 <br>
											or CH 221 <br>
											or CH 224H
				</td>
				<td style="text-align:left">Introduction to Chemical Principles<br>
					The Chemistry of Sustainability<br>
					General Chemistry I
					Honors General Chemistry
				</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td style="text-align:left">BI 211,213 <br>
											or BI 211-212
				</td>
				<td style="text-align:left">General Biology I,III<br>
					General Biology I-II</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td style="text-align:left">Chemistry</td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td style="text-align:left">CH 221-223 <br>
											or CH 224H-226H</td>
				<td style="text-align:left">General Chemistry<br>
					Honors General Chemistry
				</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td style="text-align:left">Earth Sciences</td>
				<td></td>
				<td></td>
				<td></td>
			</tr>
			<tr>
				<td style="text-align:left">GEOL 201</td>
				<td style="text-align:left">Dynamic Planet Earth</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td style="text-align:left">GEOL 202</td>
				<td style="text-align:left">Earth's Surface and Environment</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td style="text-align:left">GEOL 203</td>
				<td style="text-align:left">History of Life</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td style="text-align:left">Geography</td>
				<td></td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td style="text-align:left">GEOG 141</td>
				<td style="text-align:left">The Natural Environment</td>
				<td></td>
				<td>4</td>
			</tr>	

			<tr>
				<td>Select two of the following:</td>
			</tr>

			<tr>
				<td style="text-align:left">GEOG 321</td>
				<td style="text-align:left">Climatology</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td style="text-align:left">GEOG 322</td>
				<td style="text-align:left">Geomorphology</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td style="text-align:left">GEOG 323</td>
				<td style="text-align:left">Biogeography</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td style="text-align:left">Physics</td>
				<td></td>
				<td></td>
				<td></td>
			</tr>

			<tr>
				<td style="text-align:left">PHYS 201-203 <br>
											or PHYS 251-253</td>
				<td style="text-align:left">General Physics<br>
					Foundations of Physics I
				</td>
				<td></td>
				<td>4</td>
			</tr>	

			<tr>
				<td style="text-align:left">Psychology</td>
				<td></td>
				<td></td>
				<td></td>
			</tr>

			<tr>
				<td style="text-align:left">PSY 201</td>
				<td style="text-align:left">Mind and Brain</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td style="text-align:left">PSY 202</td>
				<td style="text-align:left">Mind and Society</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td>Select one of the following:</td>
			</tr>

			<tr>
				<td style="text-align:left">PSY 304</td>
				<td style="text-align:left">Biopsychology</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td style="text-align:left">PSY 348</td>
				<td style="text-align:left">Music and the Brain</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td style="font-size: 17px">Core Course: Writing</td>
				<td></td>
				<td></td>
				<td style="font-size: 17px">Credits</td>
			</tr>

			<tr>
				<td style="text-align:left">WR 320<br>
											or WR 321</td>
				<td style="text-align:left">Scientific and Technical Writing <br>
					Business Communications
				</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td>Electives: Upper Divison</td>
			</tr>

			<tr>
				<td style="text-align:left">Upper-division CIS courses in student's chosen track (track information below)</td>
				<td></td>
				<td></td>
				<td>12</td>
			</tr>

			<tr>
				<td style="text-align:left">Upper-division CIS courses in student's chosen track,<br>
											honors thesis, capstone project,<br>
											or other upper-division courses</td>
				<td></td>
				<td></td>
				<td>8</td>
			</tr>

			<tr>
				<td style="text-align:left">Upper-division mathematics or theoretical computer science course</td>
				<td></td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td span style="font-weight:bold">Total Credits</td>
				<td></td>
				<td></td>
				<td>104</td>
			</tr>

			</tbody>
				</table>

            <br>
			<br>
			<br>

            <button onclick="topFunction()" id="myBtntop" title="Go to top">Top</button>
			<script type="text/javascript" src="../js/jquery.js"></script>
			<script type="text/javascript" src="../js/Popup.js" ></script>
</body>
</html>
