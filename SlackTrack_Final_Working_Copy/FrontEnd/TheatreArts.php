<!--Fornt page template was written by Jarvis Dong & Will Lin. 
Reponsibiliies:
Jarvis Dong: Initial table creation and css classes for table. 
Will Lin: Buttons creation and functions implementation, table optimization, page decoration.
Tyler Millan uses page generator (input page template) to generate other course tables with same funcionalities. -->



<!-- HTML file for TheatreArts major page
This page was originally created using the page_generator python function written for
the SlackTrack Application by group member Tyler Millan. Page was initially created on 2019-03-11-->



<html>
<head>
		<meta charset="utf-8" />
		<!--browser compatibility-->
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>Theatre Arts</title>
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
		<h1 style="margin-left: 7%">Theatre Arts</h1>

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
				<td style="font-size: 17px">Core Required Courses</td>
				<td></td>
				<td style="font-size: 17px"></td>
				<td style="font-size: 17px">Credits</td>
			</tr>

	
			<tr role="button" id="BtnTA210" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 210</td>
				<td style="text-align:left">Introduction to Design</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA211" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 211</td>
				<td style="text-align:left">Theater Production I</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA212" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 212</td>
				<td style="text-align:left">Theater Production II</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA250" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 250</td>
				<td style="text-align:left">Acting I</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA271" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 271</td>
				<td style="text-align:left">Introduction to Theater Arts</td>
				<td></td>
				<td>4</td>
			</tr>


			<tr role="button" id="BtnTA367" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 367</td>
				<td style="text-align:left">History of the Theater I</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA368" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 368</td>
				<td style="text-align:left">History of the Theater II</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA369" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 369</td>
				<td style="text-align:left">History of the Theater III</td>
				<td></td>
				<td>4</td>
			</tr>


			<tr role="button" id="BtnTA470" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 470</td>
				<td style="text-align:left">Majors Seminar</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA490" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 490</td>
				<td style="text-align:left">Theater Capstone: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td style="font-size: 17px">Three of the Following Courses</td>
				<td></td>
				<td style="font-size: 17px"></td>
				<td style="font-size: 17px">Credits</td>
			</tr>


			<tr role="button" id="BtnTA321" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 321</td>
				<td style="text-align:left">Scenery Production</td>
				<td></td>
				<td>1-3</td>
			</tr>

			<tr role="button" id="BtnTA322" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 322</td>
				<td style="text-align:left">Costume Production</td>
				<td></td>
				<td>1-3</td>
			</tr>

			<tr role="button" id="BtnTA323" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 323</td>
				<td style="text-align:left">Lighting Production</td>
				<td></td>
				<td>1-3</td>
			</tr>

			<tr role="button" id="BtnTA324" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 324</td>
				<td style="text-align:left">Production</td>
				<td></td>
				<td>1-3</td>
			</tr>
			<tr>
				<td style="font-size: 17px">Upper-Division Electives</td>
				<td></td>
				<td style="font-size: 17px"></td>
				<td style="font-size: 17px">Credits</td>
			</tr>

			<tr>
				<td>Select three of the following upper-division courses in acting, directing, design, technical production, or playwriting:</td>
				<td></td>
				<td></td>
				<td>12</td>
			</tr>

			<tr>
				<td>Select three of the following upper-division courses in history, literature, criticism, or dramaturgy:</td>
				<td></td>
				<td></td>
				<td>12</td>
			</tr>


			<tr role="button" id="BtnTA325" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 325</td>
				<td style="text-align:left">Performance</td>
				<td></td>
				<td>1-3</td>
			</tr>

			<tr role="button" id="BtnTA399" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 399</td>
				<td style="text-align:left">Special Studies: [Topic]</td>
				<td></td>
				<td>1-5</td>
			</tr>

			<tr role="button" id="BtnTA401" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 401</td>
				<td style="text-align:left">Research: [Topic]</td>
				<td></td>
				<td>1-4</td>
			</tr>

			<tr role="button" id="BtnTA405" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 405</td>
				<td style="text-align:left">Reading and Conference: [Topic]</td>
				<td></td>
				<td>1-4</td>
			</tr>

			<tr role="button" id="BtnTA406" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 406</td>
				<td style="text-align:left">Field Studies: [Topic]</td>
				<td></td>
				<td>1-16</td>
			</tr>

			<tr role="button" id="BtnTA407" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 407</td>
				<td style="text-align:left">Seminar: [Topic]</td>
				<td></td>
				<td>1-5</td>
			</tr>

			<tr role="button" id="BtnTA408" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 408</td>
				<td style="text-align:left">Workshop: [Topic]</td>
				<td></td>
				<td>1-21</td>
			</tr>

			<tr role="button" id="BtnTA409" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 409</td>
				<td style="text-align:left">Practicum: [Topic]</td>
				<td></td>
				<td>1-3</td>
			</tr>

			<tr role="button" id="BtnTA410" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 410</td>
				<td style="text-align:left">Experimental Course: [Topic]</td>
				<td></td>
				<td>1-4</td>
			</tr>

			<tr role="button" id="BtnTA411" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 411</td>
				<td style="text-align:left">Costume History I</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA412" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 412</td>
				<td style="text-align:left">Costume History II</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA413" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 413</td>
				<td style="text-align:left">Costume History III</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA416" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 416</td>
				<td style="text-align:left">Costume Design</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA417" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 417</td>
				<td style="text-align:left">Advanced Costume Design</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA418" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 418</td>
				<td style="text-align:left">Costume Pattern Drafting</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA419" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 419</td>
				<td style="text-align:left">Costume Construction</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA420" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 420</td>
				<td style="text-align:left">Return and Review for Actors</td>
				<td></td>
				<td>1</td>
			</tr>

			<tr role="button" id="BtnTA441" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 441</td>
				<td style="text-align:left">Scene Design: Single Set</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA445" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 445</td>
				<td style="text-align:left">Advanced Projects in Theater Technology: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA452" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 452</td>
				<td style="text-align:left">Advanced Acting: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA467" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 467</td>
				<td style="text-align:left">Lighting for the Stage</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA470" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 470</td>
				<td style="text-align:left">Majors Seminar</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA471" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 471</td>
				<td style="text-align:left">Studies in Theater and Culture: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA472" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 472</td>
				<td style="text-align:left">Multicultural Theater: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td span style="font-weight:bold;font-size: 17px">Total Credits Required for Major</td>
				<td></td>
				<td></td>
				<td span style="font-weight:bold;font-size: 17px">67</td>
			</tr>

			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			<tr>

			<tr>
				<td style="font-size: 17px">Other Lower-Division Theatre Arts Courses Offered</td>
				<td></td>
				<td style="font-size: 17px"></td>
				<td style="font-size: 17px">Credits</td>
			</tr>

			<tr role="button" id="BtnTA121" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 121</td>
				<td style="text-align:left">Scenery and Lighting Laboratory</td>
				<td></td>
				<td>1-2</td>
			</tr>

			<tr role="button" id="BtnTA122" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 122</td>
				<td style="text-align:left">Costume Laboratory</td>
				<td></td>
				<td>1-2</td>
			</tr>

			<tr role="button" id="BtnTA124" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 124</td>
				<td style="text-align:left">Production</td>
				<td></td>
				<td>1-2</td>
			</tr>

			<tr role="button" id="BtnTA196" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 196</td>
				<td style="text-align:left">Field Studies: [Topic]</td>
				<td></td>
				<td>1-2</td>
			</tr>

			<tr role="button" id="BtnTA198" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 198</td>
				<td style="text-align:left">Workshop: [Topic]</td>
				<td></td>
				<td>1-2</td>
			</tr>

			<tr role="button" id="BtnTA199" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 199</td>
				<td style="text-align:left">Special Studies: [Topic]</td>
				<td></td>
				<td>1-5</td>
			</tr>

			<tr role="button" id="BtnTA251" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 251</td>
				<td style="text-align:left">Acting II</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA252" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 252</td>
				<td style="text-align:left">Acting III</td>
				<td></td>
				<td>4</td>
			</tr>



			<tr>
				<td style="font-size: 17px">Theatre Arts Graduate Courses</td>
				<td></td>
				<td style="font-size: 17px"></td>
				<td style="font-size: 17px">Credits</td>
			</tr>
						<tr role="button" id="BtnTA503" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 503</td>
				<td style="text-align:left">Thesis</td>
				<td></td>
				<td>1-16</td>
			</tr>

			<tr role="button" id="BtnTA507" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 507</td>
				<td style="text-align:left">Seminar: [Topic]</td>
				<td></td>
				<td>1-5</td>
			</tr>

			<tr role="button" id="BtnTA508" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 508</td>
				<td style="text-align:left">Workshop: [Topic]</td>
				<td></td>
				<td>1-21</td>
			</tr>

			<tr role="button" id="BtnTA510" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 510</td>
				<td style="text-align:left">Experimental Course: [Topic]</td>
				<td></td>
				<td>1-4</td>
			</tr>

			<tr role="button" id="BtnTA511" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 511</td>
				<td style="text-align:left">Costume History I</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA512" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 512</td>
				<td style="text-align:left">Costume History II</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA513" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 513</td>
				<td style="text-align:left">Costume History III</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA516" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 516</td>
				<td style="text-align:left">Costume Design</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA517" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 517</td>
				<td style="text-align:left">Advanced Costume Design</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA518" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 518</td>
				<td style="text-align:left">Costume Pattern Drafting</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA519" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 519</td>
				<td style="text-align:left">Costume Construction</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA541" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 541</td>
				<td style="text-align:left">Scene Design: Single Set</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA545" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 545</td>
				<td style="text-align:left">Advanced Projects in Theater Technology: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA552" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 552</td>
				<td style="text-align:left">Advanced Acting: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA567" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 567</td>
				<td style="text-align:left">Lighting for the Stage</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA571" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 571</td>
				<td style="text-align:left">Studies in Theater and Culture: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA572" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 572</td>
				<td style="text-align:left">Multicultural Theater: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnTA601" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 601</td>
				<td style="text-align:left">Research: [Topic]</td>
				<td></td>
				<td>1-16</td>
			</tr>

			<tr role="button" id="BtnTA602" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 602</td>
				<td style="text-align:left">Supervised College Teaching</td>
				<td></td>
				<td>1-16</td>
			</tr>

			<tr role="button" id="BtnTA603" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 603</td>
				<td style="text-align:left">Dissertation</td>
				<td></td>
				<td>1-16</td>
			</tr>

			<tr role="button" id="BtnTA605" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 605</td>
				<td style="text-align:left">Reading and Conference: [Topic]</td>
				<td></td>
				<td>1-16</td>
			</tr>

			<tr role="button" id="BtnTA606" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 606</td>
				<td style="text-align:left">Field Studies: [Topic]</td>
				<td></td>
				<td>1-16</td>
			</tr>

			<tr role="button" id="BtnTA607" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 607</td>
				<td style="text-align:left">Seminar: [Topic]</td>
				<td></td>
				<td>1-5</td>
			</tr>

			<tr role="button" id="BtnTA608" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 608</td>
				<td style="text-align:left">Workshop: [Topic]</td>
				<td></td>
				<td>1-16</td>
			</tr>

			<tr role="button" id="BtnTA609" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 609</td>
				<td style="text-align:left">Practicum: [Topic]</td>
				<td></td>
				<td>1-3</td>
			</tr>

			<tr role="button" id="BtnTA610" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 610</td>
				<td style="text-align:left">Experimental Course: [Topic]</td>
				<td></td>
				<td>1-5</td>
			</tr>

			<tr role="button" id="BtnTA651" class="u" style="cursor: pointer">
				<td style="text-align:left">TA 651</td>
				<td style="text-align:left">Theory of Dramatic Production</td>
				<td></td>
				<td>4</td>
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
			<script type="text/javascript" src="../js/TheatreArtsPopup.js" ></script>
</body>
</html>

			