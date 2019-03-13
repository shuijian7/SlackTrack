<!--Fornt page template was written by Jarvis Dong & Will Lin. 
Reponsibiliies:
Jarvis Dong: Initial table creation and css classes for table. 
Will Lin: Buttons creation and functions implementation, table optimization, page decoration.
Tyler Millan uses page generator (input page template) to generate other course tables with same funcionalities. -->


<!-- HTML file for CIS major page
This page was originally created using the page_generator python function written for
the SlackTrack Application by group member Tyler Millan. Page was initially created on 2019-03-11-->





<html>
<head>  
	<!--browser compatibility-->
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>Computer and Information Science</title>

		<!--JS file references for poupup window and table-->
		<link rel="stylesheet" type="text/css" href="../CSS/CIS_style.css">
		<link rel="stylesheet" type="text/css" href="../CSS/Popup.css">
		<style>
			/*decoration for green bar on the page top*/
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
        <!--Logo comes from https://communications.uoregon.edu/brand/logo-system-->
		<a href="../Index.html"><img src="../image/mainLOGO.svg" height= 60px; title="Logo" alt="mainLOGO"></a>
		<div align="right" style="margin-right: 2%; margin-bottom: 10px;">
			<b style="color:#fee123">Designed by CIS422 Group 7</b></div>
		</div>
		<h1 style="margin-left: 7%">Computer and Information Science</h1>

		<!--Modal template shared by each course-->
		<div id="myModal" class="modal">
		<div class="modal-content">
			<span class="close">&times;</span>
			<h1 id="cid" style="color: white">    </h1>
			

			<div id="txtHint"><b>Table info loading...</b></div>
		</div>
		</div>

		<!--notice sentence-->
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
				<td style="font-size: 17px">Core Courses: Lower Division</td>
				<td></td>
				<td style="font-size: 17px"></td>
				<td style="font-size: 17px">Credits</td>
			</tr>

            
			<tr role="button" id="BtnCIS210" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 210</td>
				<td style="text-align:left">Computer Science I</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS211" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 211</td>
				<td style="text-align:left">Computer Science II</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS212" class="u" style="cursor: pointer">
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

			</tr>
			<tr role="button" id="BtnCIS313" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 313</td>
				<td style="text-align:left">Intermediate Data Structures</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS314" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 314</td>
				<td style="text-align:left">Computer Organization</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS315" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 315</td>
				<td style="text-align:left">Intermediate Algorithms</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS330" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 330</td>
				<td style="text-align:left">C/C++ and Unix</td>
				<td></td>
				<td>4</td>
			</tr>


			<tr role="button" id="BtnCIS415" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 415</td>
				<td style="text-align:left">Operating Systems</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS422" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 422</td>
				<td style="text-align:left">Software Methodology I</td>
				<td></td>
				<td>4</td>
			</tr>


			<tr role="button" id="BtnCIS425" class="u" style="cursor: pointer">
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
				<td style="font-size: 17px">CIS Upper Division Electives</td>
				<td></td>
				<td style="font-size: 17px"></td>
				<td style="font-size: 17px">Credits</td>
			</tr>


			<tr>
				<td style="text-align:left">Upper-division CIS courses(410 and above)</td>
				<td></td>
				<td></td>
				<td>12</td>
			<tr>

			<tr role="button" id="BtnCIS410" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 410</td>
				<td style="text-align:left">Experimental Course: [Topic]</td>
				<td></td>
				<td>1-5</td>
			</tr>

			<tr role="button" id="BtnCIS413" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 413</td>
				<td style="text-align:left">Advanced Data Structures</td>
				<td></td>
				<td>4</td>
			</tr>


			<tr role="button" id="BtnCIS420" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 420</td>
				<td style="text-align:left">Automata Theory</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS423" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 423</td>
				<td style="text-align:left">Software Methodology II</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS427" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 427</td>
				<td style="text-align:left">Introduction to Logic</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS429" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 429</td>
				<td style="text-align:left">Computer Architecture</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS431" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 431</td>
				<td style="text-align:left">Introduction to Parallel Computing</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS432" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 432</td>
				<td style="text-align:left">Introduction to Networks</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS433" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 433</td>
				<td style="text-align:left">Computer and Network Security</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS441" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 441</td>
				<td style="text-align:left">Introduction to Computer Graphics</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS443" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 443</td>
				<td style="text-align:left">User Interfaces</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS445" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 445</td>
				<td style="text-align:left">Modeling and Simulation</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS451" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 451</td>
				<td style="text-align:left">Database Processing</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS452" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 452</td>
				<td style="text-align:left">Database Issues</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS453" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 453</td>
				<td style="text-align:left">Data Mining</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS454" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 454</td>
				<td style="text-align:left">Bioinformatics</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS461" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 461</td>
				<td style="text-align:left">Introduction to Compilers</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS471" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 471</td>
				<td style="text-align:left">Introduction to Artificial Intelligence</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS472" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 472</td>
				<td style="text-align:left">Machine Learning</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS473" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 473</td>
				<td style="text-align:left">Probabilistic Methods for Artificial Intelligence</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS490" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 490</td>
				<td style="text-align:left">Computer Ethics</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td style="text-align:left">Upper-division CIS courses 399-409 (maximum number of 8 credits)</td>
				<td></td>
				<td></td>
				<td>8</td>
			</tr>

						</tr>

						<tr role="button" id="BtnCIS322" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 322</td>
				<td style="text-align:left">Introduction to Software Engineering</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS399" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 399</td>
				<td style="text-align:left">Special Studies: [Topic]</td>
				<td></td>
				<td>1-5</td>
			</tr>

			<tr role="button" id="BtnCIS401" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 401</td>
				<td style="text-align:left">Research: [Topic]</td>
				<td></td>
				<td>1-21</td>
			</tr>

			<tr role="button" id="BtnCIS403" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 403</td>
				<td style="text-align:left">Thesis</td>
				<td></td>
				<td>1-12</td>
			</tr>

			<tr role="button" id="BtnCIS404" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 404</td>
				<td style="text-align:left">Internship; [Topic]</td>
				<td></td>
				<td>1-4</td>
			</tr>

			<tr role="button" id="BtnCIS405" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 405</td>
				<td style="text-align:left">Reading and Conference: [Topic]</td>
				<td></td>
				<td>1-12</td>
			</tr>

			<tr role="button" id="BtnCIS406" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 406</td>
				<td style="text-align:left">Field Studies: [Topic]</td>
				<td></td>
				<td>1-21</td>
			</tr>

			<tr role="button" id="BtnCIS407" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 407</td>
				<td style="text-align:left">Seminar: [Topic]</td>
				<td></td>
				<td>1-5</td>
			</tr>

			<tr role="button" id="BtnCIS408" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 408</td>
				<td style="text-align:left">Workshop: [Topic]</td>
				<td></td>
				<td>1-21</td>
			</tr>

			<tr role="button" id="BtnCIS409" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 409</td>
				<td style="text-align:left">Practicum: [Topic]</td>
				<td></td>
				<td>1-2</td>
			</tr>

			<tr>
				<td span style="font-weight:bold;font-size: 17px">Total Credits Required for Major</td>
				<td></td>
				<td></td>
				<td span style="font-weight:bold;font-size: 17px">104</td>
			</tr>

			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			<tr>



			<tr>
				<td style="font-size: 17px">Other lower-division CIS Courses Offered</td>
				<td></td>
				<td style="font-size: 17px"></td>
				<td style="font-size: 17px">Credits</td>
			</tr>

	
			<tr role="button" id="BtnCIS105" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 105</td>
				<td style="text-align:left">Explorations in Computing</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS110" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 110</td>
				<td style="text-align:left">Fluency with Information Technology</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS111" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 111</td>
				<td style="text-align:left">Introduction to Web Programming</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS115" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 115</td>
				<td style="text-align:left">Multimedia Web Programming</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS122" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 122</td>
				<td style="text-align:left">Introduction to Programming and Problem Solving</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS196" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 196</td>
				<td style="text-align:left">Field Studies: [Topic]</td>
				<td></td>
				<td>1-2</td>
			</tr>

			<tr role="button" id="BtnCIS198" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 198</td>
				<td style="text-align:left">Workshop: [Topic]</td>
				<td></td>
				<td>1-2</td>
			</tr>

			<tr role="button" id="BtnCIS199" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 199</td>
				<td style="text-align:left">Special Studies in Computer Science: [Topic]</td>
				<td></td>
				<td>1-5</td>


			<tr>
				<td style="font-size: 17px">CIS Graduate Courses</td>
				<td></td>
				<td style="font-size: 17px"></td>
				<td style="font-size: 17px">Credits</td>
			</tr>


			<tr role="button" id="BtnCIS503" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 503</td>
				<td style="text-align:left">Thesis</td>
				<td></td>
				<td>1-16</td>
			</tr>

			<tr role="button" id="BtnCIS507" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 507</td>
				<td style="text-align:left">Seminar: [Topic]</td>
				<td></td>
				<td>1-5</td>
			</tr>

			<tr role="button" id="BtnCIS508" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 508</td>
				<td style="text-align:left">Workshop: [Topic]</td>
				<td></td>
				<td>1-21</td>
			</tr>

			<tr role="button" id="BtnCIS510" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 510</td>
				<td style="text-align:left">Experimental Course: [Topic]</td>
				<td></td>
				<td>1-5</td>
			</tr>

			<tr role="button" id="BtnCIS513" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 513</td>
				<td style="text-align:left">Advanced Data Structures</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS520" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 520</td>
				<td style="text-align:left">Automata Theory</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS522" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 522</td>
				<td style="text-align:left">Software Methodology I</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS523" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 523</td>
				<td style="text-align:left">Software Methodology II</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS527" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 527</td>
				<td style="text-align:left">Introduction to Logic</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS529" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 529</td>
				<td style="text-align:left">Computer Architecture</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS531" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 531</td>
				<td style="text-align:left">Introduction to Parallel Computing</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS532" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 532</td>
				<td style="text-align:left">Introduction to Networks</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS533" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 533</td>
				<td style="text-align:left">Computer and Network Security</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS541" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 541</td>
				<td style="text-align:left">Introduction to Computer Graphics</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS543" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 543</td>
				<td style="text-align:left">User Interfaces</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS545" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 545</td>
				<td style="text-align:left">Modeling and Simulation</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS551" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 551</td>
				<td style="text-align:left">Database Processing</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS552" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 552</td>
				<td style="text-align:left">Database Issues</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS553" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 553</td>
				<td style="text-align:left">Data Mining</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS554" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 554</td>
				<td style="text-align:left">Bioinformatics</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS561" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 561</td>
				<td style="text-align:left">Introduction to Compilers</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS571" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 571</td>
				<td style="text-align:left">Introduction to Artificial Intelligence</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS572" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 572</td>
				<td style="text-align:left">Machine Learning</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS573" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 573</td>
				<td style="text-align:left">Probabilistic Methods for Artificial Intelligence</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS590" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 590</td>
				<td style="text-align:left">Computer Ethics</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS601" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 601</td>
				<td style="text-align:left">Research: [Topic]</td>
				<td></td>
				<td>1-16</td>
			</tr>

			<tr role="button" id="BtnCIS602" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 602</td>
				<td style="text-align:left">Supervised College Teaching</td>
				<td></td>
				<td>1-5</td>
			</tr>

			<tr role="button" id="BtnCIS603" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 603</td>
				<td style="text-align:left">Dissertation</td>
				<td></td>
				<td>1-16</td>
			</tr>

			<tr role="button" id="BtnCIS604" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 604</td>
				<td style="text-align:left">Internship: [Topic]</td>
				<td></td>
				<td>1-4</td>
			</tr>

			<tr role="button" id="BtnCIS605" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 605</td>
				<td style="text-align:left">Reading and Conference: [Topic]</td>
				<td></td>
				<td>1-16</td>
			</tr>

			<tr role="button" id="BtnCIS606" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 606</td>
				<td style="text-align:left">Field Studies: [Topic]</td>
				<td></td>
				<td>1-16</td>
			</tr>

			<tr role="button" id="BtnCIS607" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 607</td>
				<td style="text-align:left">Seminar: [Topic]</td>
				<td></td>
				<td>1-5</td>
			</tr>

			<tr role="button" id="BtnCIS608" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 608</td>
				<td style="text-align:left">Colloquium: [Topic]</td>
				<td></td>
				<td>1 Credit.</td>
			</tr>

			<tr role="button" id="BtnCIS609" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 609</td>
				<td style="text-align:left">Final Project</td>
				<td></td>
				<td>1-16</td>
			</tr>

			<tr role="button" id="BtnCIS610" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 610</td>
				<td style="text-align:left">Experimental Course: [Topic]</td>
				<td></td>
				<td>1-5</td>
			</tr>

			<tr role="button" id="BtnCIS621" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 621</td>
				<td style="text-align:left">Algorithms and Complexity</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS624" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 624</td>
				<td style="text-align:left">Structure of Programming Languages</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS630" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 630</td>
				<td style="text-align:left">Distributed Systems</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS631" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 631</td>
				<td style="text-align:left">Parallel Processing</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS632" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 632</td>
				<td style="text-align:left">Computer Networks</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS633" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 633</td>
				<td style="text-align:left">Advanced Network Security</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIS650" class="u" style="cursor: pointer">
				<td style="text-align:left">CIS 650</td>
				<td style="text-align:left">Software Engineering</td>
				<td></td>
				<td>4</td>
			</tr>


			<tr>
				<td style="font-size: 17px">CIT courses offered</td>
				<td></td>
				<td style="font-size: 17px"></td>
				<td style="font-size: 17px">Credits</td>
			</tr>

			<tr role="button" id="BtnCIT281" class="u" style="cursor: pointer">
				<td style="text-align:left">CIT 281</td>
				<td style="text-align:left">Web Applications Development I</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIT381" class="u" style="cursor: pointer">
				<td style="text-align:left">CIT 381</td>
				<td style="text-align:left">Database Systems</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIT382" class="u" style="cursor: pointer">
				<td style="text-align:left">CIT 382</td>
				<td style="text-align:left">Web Applications Development II</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIT383" class="u" style="cursor: pointer">
				<td style="text-align:left">CIT 383</td>
				<td style="text-align:left">Networking Fundamentals</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnCIT405" class="u" style="cursor: pointer">
				<td style="text-align:left">CIT 405</td>
				<td style="text-align:left">Reading and Conference: [Topic]</td>
				<td></td>
				<td>1-4</td>
			</tr>

			</tbody>
				</table>

            <br>
			<br>
			<br>
			
			<!--Backtotop button-->
			<button onclick="topFunction()" id="myBtntop" title="Go to top">Top</button>
			<!--Reference of JQuery, comes from: https://jquery.com/download/-->
			<script type="text/javascript" src="../js/jquery.js"></script>
			<script type="text/javascript" src="../js/CISPopup.js" ></script>
</body>
</html>

			