<!--Fornt page template was written by Jarvis Dong & Will Lin. 
Reponsibiliies:
Jarvis Dong: Initial table creation and css classes for table. 
Will Lin: Buttons creation and functions implementation, table optimization, page decoration.
Tyler Millan uses page generator (input page template) to generate other course tables with same funcionalities. -->




<!-- HTML file for Journalism major page
This page was originally created using the page_generator python function written for
the SlackTrack Application by group member Tyler Millan. Page was initially created on 2019-03-11-->



<html>
<head>
		<meta charset="utf-8" />
		<!--browser compatibility-->
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>Journalism</title>
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
		<h1 style="margin-left: 7%">Journalism</h1>

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
				<td style="font-size: 17px">Journalism Premajor Requirements</td>
				<td></td>
				<td style="font-size: 17px"></td>
				<td style="font-size: 17px">Credits</td>
			</tr>
	
			<tr role="button" id="BtnJ100" class="u" style="cursor: pointer">
				<td style="text-align:left">J 100</td>
				<td style="text-align:left">Media Professions</td>
				<td></td>
				<td>2</td>
			</tr>

			<tr role="button" id="BtnJ101" class="u" style="cursor: pointer">
				<td style="text-align:left">J 101</td>
				<td style="text-align:left">Grammar for Communicators</td>
				<td></td>
				<td>2</td>
			</tr>	
			<tr role="button" id="BtnJ201" class="u" style="cursor: pointer">
				<td style="text-align:left">J 201</td>
				<td style="text-align:left">Media and Society</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td style="font-size: 17px">Journalism Major Requirements</td>
				<td></td>
				<td style="font-size: 17px"></td>
				<td style="font-size: 17px">Credits</td>
			</tr>

			<tr role="button" id="BtnJ211" class="u" style="cursor: pointer">
				<td style="text-align:left">J 211</td>
				<td style="text-align:left">Gateway to Media</td>
				<td></td>
				<td>8</td>
			</tr>

			<tr role="button" id="BtnJ212" class="u" style="cursor: pointer">
				<td style="text-align:left">J 212</td>
				<td style="text-align:left">Writing for Communicators</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ213" class="u" style="cursor: pointer">
				<td style="text-align:left">J 213</td>
				<td style="text-align:left">Fact or Fiction</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ361" class="u" style="cursor: pointer">
				<td style="text-align:left">J 361</td>
				<td style="text-align:left">Reporting I</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ462" class="u" style="cursor: pointer">
				<td style="text-align:left">J 462</td>
				<td style="text-align:left">Reporting II</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td style="font-size: 17px">Select three of the following:</td>
				<td></td>
				<td style="font-size: 17px"></td>
				<td style="font-size: 17px">Credits</td>
			</tr>
			<tr role="button" id="BtnJ331" class="u" style="cursor: pointer">
				<td style="text-align:left">J 331</td>
				<td style="text-align:left">Digital Video Production</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ333" class="u" style="cursor: pointer">
				<td style="text-align:left">J 333</td>
				<td style="text-align:left">Writing for Multimedia</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ365" class="u" style="cursor: pointer">
				<td style="text-align:left">J 365</td>
				<td style="text-align:left">Photojournalism</td>
				<td></td>
				<td>4</td>
			</tr>
			<tr role="button" id="BtnJ371" class="u" style="cursor: pointer">
				<td style="text-align:left">J 371</td>
				<td style="text-align:left">Feature Writing I</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ421" class="u" style="cursor: pointer">
				<td style="text-align:left">J 421</td>
				<td style="text-align:left">Documentary Production</td>
				<td></td>
				<td>4</td>
			</tr>
			<tr role="button" id="BtnJ432" class="u" style="cursor: pointer">
				<td style="text-align:left">J 432</td>
				<td style="text-align:left">Reporting for Electronic Media</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ434" class="u" style="cursor: pointer">
				<td style="text-align:left">J 434</td>
				<td style="text-align:left">Advanced Television News</td>
				<td></td>
				<td>4</td>
			</tr>
			<tr role="button" id="BtnJ461" class="u" style="cursor: pointer">
				<td style="text-align:left">J 461</td>
				<td style="text-align:left">Newspaper Editing</td>
				<td></td>
				<td>4</td>
			</tr>
			<tr role="button" id="BtnJ463" class="u" style="cursor: pointer">
				<td style="text-align:left">J 463</td>
				<td style="text-align:left">Specialized Reporting: [Topic]</td>
				<td></td>
				<td>1-4</td>
			</tr>

			<tr role="button" id="BtnJ466" class="u" style="cursor: pointer">
				<td style="text-align:left">J 466</td>
				<td style="text-align:left">Advanced Photojournalism: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ468" class="u" style="cursor: pointer">
				<td style="text-align:left">J 468</td>
				<td style="text-align:left">Advanced News Editing</td>
				<td></td>
				<td>4</td>
			</tr>
			<tr role="button" id="BtnJ472" class="u" style="cursor: pointer">
				<td style="text-align:left">J 472</td>
				<td style="text-align:left">Feature Writing II</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ473" class="u" style="cursor: pointer">
				<td style="text-align:left">J 473</td>
				<td style="text-align:left">Feature Editing</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ474" class="u" style="cursor: pointer">
				<td style="text-align:left">J 474</td>
				<td style="text-align:left">Magazine Industry and Strategies</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ475" class="u" style="cursor: pointer">
				<td style="text-align:left">J 475</td>
				<td style="text-align:left">Flux Production</td>
				<td></td>
				<td>1-5</td>
			</tr>
			<tr role="button" id="BtnJ483" class="u" style="cursor: pointer">
				<td style="text-align:left">J 483</td>
				<td style="text-align:left">The Journalistic Interview</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td style="font-size: 17px">Select two of the following:</td>
				<td></td>
				<td style="font-size: 17px"></td>
				<td style="font-size: 17px">Credits</td>
			</tr>
			<tr role="button" id="BtnJ320" class="u" style="cursor: pointer">
				<td style="text-align:left">J 320</td>
				<td style="text-align:left">Gender, Media, and Diversity</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ385" class="u" style="cursor: pointer">
				<td style="text-align:left">J 385</td>
				<td style="text-align:left">Communication Law</td>
				<td></td>
				<td>4</td>
			</tr>


			<tr role="button" id="BtnJ387" class="u" style="cursor: pointer">
				<td style="text-align:left">J 387</td>
				<td style="text-align:left">Media History</td>
				<td></td>
				<td>4</td>
			</tr>
			<tr role="button" id="BtnJ396" class="u" style="cursor: pointer">
				<td style="text-align:left">J 396</td>
				<td style="text-align:left">International Communication</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ397" class="u" style="cursor: pointer">
				<td style="text-align:left">J 397</td>
				<td style="text-align:left">Media Ethics</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td style="font-size: 17px">Select two of the following:</td>
				<td></td>
				<td style="font-size: 17px"></td>
				<td style="font-size: 17px">Credits</td>
			</tr>
			<tr role="button" id="BtnJ412" class="u" style="cursor: pointer">
				<td style="text-align:left">J 412</td>
				<td style="text-align:left">Issues in Communication Studies: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>
			<tr role="button" id="BtnJ467" class="u" style="cursor: pointer">
				<td style="text-align:left">J 467</td>
				<td style="text-align:left">Issues in International Communication: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>
			<tr role="button" id="BtnJ495" class="u" style="cursor: pointer">
				<td style="text-align:left">J 495</td>
				<td style="text-align:left">Research Methods: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>


			<tr role="button" id="BtnJ496" class="u" style="cursor: pointer">
				<td style="text-align:left">J 496</td>
				<td style="text-align:left">Communication Ethics and Law: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td style="font-weight:bold;font-size: 17px">General Studies Requirements:</td>
				<td></td>
				<td style="font-size: 17px"></td>
				<td style="font-size: 17px">Credits</td>
			</tr>

			<tr>
				<td>Literature courses</td>
				<td></td>
				<td></td>
				<td>16</td>
			</tr>

			<tr>
				<td>History courses</td>
				<td></td>
				<td></td>
				<td>8</td>
			</tr>
			<tr>
				<td>Economics courses</td>
				<td></td>
				<td></td>
				<td>8</td>
			</tr>
			<tr>
				<td>General studies courses in three other subject codes within the College of Arts and Sciences</td>
				<td></td>
				<td></td>
				<td>24</td>
			</tr>
			<tr>
				<td span style="font-weight:bold;font-size: 17px">Total Credits Required for Major</td>
				<td></td>
				<td></td>
				<td span style="font-weight:bold;font-size: 17px">116</td>
			</tr>
			<tr>
				<td></td>
				<td></td>
				<td></td>
				<td></td>
			<tr>
			<tr>
				<td style="font-size: 17px">Lower-division Journalism Courses Offered</td>
				<td></td>
				<td style="font-size: 17px"></td>
				<td style="font-size: 17px">Credits</td>
			</tr>


			<tr role="button" id="BtnJ196" class="u" style="cursor: pointer">
				<td style="text-align:left">J 196</td>
				<td style="text-align:left">Field Studies: [Topic]</td>
				<td></td>
				<td>1-2</td>
			</tr>

			<tr role="button" id="BtnJ198" class="u" style="cursor: pointer">
				<td style="text-align:left">J 198</td>
				<td style="text-align:left">Colloquium: [Topic]</td>
				<td></td>
				<td>1-2</td>
			</tr>

			<tr role="button" id="BtnJ199" class="u" style="cursor: pointer">
				<td style="text-align:left">J 199</td>
				<td style="text-align:left">Special Studies: [Topic]</td>
				<td></td>
				<td>1-5</td>
			</tr>

			<tr role="button" id="BtnJ208" class="u" style="cursor: pointer">
				<td style="text-align:left">J 208</td>
				<td style="text-align:left">Introduction to Documentary Production</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ209" class="u" style="cursor: pointer">
				<td style="text-align:left">J 209</td>
				<td style="text-align:left">Understanding Media</td>
				<td></td>
				<td>4</td>
			</tr>
			<tr>
				<td style="font-size: 17px">Upper-division Journalism Courses Offered</td>
				<td></td>
				<td style="font-size: 17px"></td>
				<td style="font-size: 17px">Credits</td>
			</tr>

			<tr role="button" id="BtnJ314" class="u" style="cursor: pointer">
				<td style="text-align:left">J 314</td>
				<td style="text-align:left">Introduction to Media Studies</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ315H" class="u" style="cursor: pointer">
				<td style="text-align:left">J 315H</td>
				<td style="text-align:left">Honors Media Theory and Research</td>
				<td></td>
				<td>4</td>
			</tr>


			<tr role="button" id="BtnJ340" class="u" style="cursor: pointer">
				<td style="text-align:left">J 340</td>
				<td style="text-align:left">Principles of Advertising</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ342" class="u" style="cursor: pointer">
				<td style="text-align:left">J 342</td>
				<td style="text-align:left">The Creative Strategist</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ350" class="u" style="cursor: pointer">
				<td style="text-align:left">J 350</td>
				<td style="text-align:left">Principles of Public Relations</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ352" class="u" style="cursor: pointer">
				<td style="text-align:left">J 352</td>
				<td style="text-align:left">Strategic Writing and Media Relations</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ365" class="u" style="cursor: pointer">
				<td style="text-align:left">J 365</td>
				<td style="text-align:left">Photojournalism</td>
				<td></td>
				<td>4</td>
			</tr>


			<tr role="button" id="BtnJ387" class="u" style="cursor: pointer">
				<td style="text-align:left">J 387</td>
				<td style="text-align:left">Media History</td>
				<td></td>
				<td>4</td>
			</tr>



			<tr role="button" id="BtnJ399" class="u" style="cursor: pointer">
				<td style="text-align:left">J 399</td>
				<td style="text-align:left">Special Studies: [Topic]</td>
				<td></td>
				<td>1-5</td>
			</tr>

			<tr role="button" id="BtnJ400M" class="u" style="cursor: pointer">
				<td style="text-align:left">J 400M</td>
				<td style="text-align:left">Temporary Multilisted Course</td>
				<td></td>
				<td>1-5</td>
			</tr>

			<tr role="button" id="BtnJ401" class="u" style="cursor: pointer">
				<td style="text-align:left">J 401</td>
				<td style="text-align:left">Research: [Topic]</td>
				<td></td>
				<td>1-9</td>
			</tr>

			<tr role="button" id="BtnJ403" class="u" style="cursor: pointer">
				<td style="text-align:left">J 403</td>
				<td style="text-align:left">Thesis</td>
				<td></td>
				<td>1-9</td>
			</tr>

			<tr role="button" id="BtnJ404" class="u" style="cursor: pointer">
				<td style="text-align:left">J 404</td>
				<td style="text-align:left">Internship: [Topic]</td>
				<td></td>
				<td>1-9</td>
			</tr>

			<tr role="button" id="BtnJ405" class="u" style="cursor: pointer">
				<td style="text-align:left">J 405</td>
				<td style="text-align:left">Reading and Conference: [Topic]</td>
				<td></td>
				<td>1-9</td>
			</tr>

			<tr role="button" id="BtnJ406" class="u" style="cursor: pointer">
				<td style="text-align:left">J 406</td>
				<td style="text-align:left">Special Problems: [Topic]</td>
				<td></td>
				<td>1-9</td>
			</tr>

			<tr role="button" id="BtnJ407" class="u" style="cursor: pointer">
				<td style="text-align:left">J 407</td>
				<td style="text-align:left">Seminar: [Topic]</td>
				<td></td>
				<td>1-4</td>
			</tr>

			<tr role="button" id="BtnJ408" class="u" style="cursor: pointer">
				<td style="text-align:left">J 408</td>
				<td style="text-align:left">Workshop: [Topic]</td>
				<td></td>
				<td>1-6</td>
			</tr>

			<tr role="button" id="BtnJ409" class="u" style="cursor: pointer">
				<td style="text-align:left">J 409</td>
				<td style="text-align:left">Practicum: [Topic]</td>
				<td></td>
				<td>1-4</td>
			</tr>

			<tr role="button" id="BtnJ410" class="u" style="cursor: pointer">
				<td style="text-align:left">J 410</td>
				<td style="text-align:left">Experimental Course: [Topic]</td>
				<td></td>
				<td>1-4</td>
			</tr>

			<tr role="button" id="BtnJ411M" class="u" style="cursor: pointer">
				<td style="text-align:left">J 411M</td>
				<td style="text-align:left">US Film Industry</td>
				<td></td>
				<td>4</td>
			</tr>


			<tr role="button" id="BtnJ413" class="u" style="cursor: pointer">
				<td style="text-align:left">J 413</td>
				<td style="text-align:left">Communication Studies Capstone</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ416" class="u" style="cursor: pointer">
				<td style="text-align:left">J 416</td>
				<td style="text-align:left">Survey of the Documentary</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ424H" class="u" style="cursor: pointer">
				<td style="text-align:left">J 424H</td>
				<td style="text-align:left">Honors Theory and Research: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ427M" class="u" style="cursor: pointer">
				<td style="text-align:left">J 427M</td>
				<td style="text-align:left">Latino Roots I</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ428M" class="u" style="cursor: pointer">
				<td style="text-align:left">J 428M</td>
				<td style="text-align:left">Latino Roots II</td>
				<td></td>
				<td>4</td>
			</tr>


			<tr role="button" id="BtnJ436" class="u" style="cursor: pointer">
				<td style="text-align:left">J 436</td>
				<td style="text-align:left">Media Design: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ443" class="u" style="cursor: pointer">
				<td style="text-align:left">J 443</td>
				<td style="text-align:left">Advertising Media Planning</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ444" class="u" style="cursor: pointer">
				<td style="text-align:left">J 444</td>
				<td style="text-align:left">Agency Account Management</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ448" class="u" style="cursor: pointer">
				<td style="text-align:left">J 448</td>
				<td style="text-align:left">Advertising Campaigns</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ449" class="u" style="cursor: pointer">
				<td style="text-align:left">J 449</td>
				<td style="text-align:left">Advanced Advertising Campaigns</td>
				<td></td>
				<td>5</td>
			</tr>

			<tr role="button" id="BtnJ452" class="u" style="cursor: pointer">
				<td style="text-align:left">J 452</td>
				<td style="text-align:left">Strategic Public Relations Communication</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ453" class="u" style="cursor: pointer">
				<td style="text-align:left">J 453</td>
				<td style="text-align:left">Strategic Planning and Cases</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ454" class="u" style="cursor: pointer">
				<td style="text-align:left">J 454</td>
				<td style="text-align:left">Public Relations Campaigns</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ457" class="u" style="cursor: pointer">
				<td style="text-align:left">J 457</td>
				<td style="text-align:left">Curiosity for Strategists</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ458" class="u" style="cursor: pointer">
				<td style="text-align:left">J 458</td>
				<td style="text-align:left">Writing Design Concepts</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ459" class="u" style="cursor: pointer">
				<td style="text-align:left">J 459</td>
				<td style="text-align:left">Branding and Content</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ460" class="u" style="cursor: pointer">
				<td style="text-align:left">J 460</td>
				<td style="text-align:left">Brand Development: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>


			<tr role="button" id="BtnJ466" class="u" style="cursor: pointer">
				<td style="text-align:left">J 466</td>
				<td style="text-align:left">Advanced Photojournalism: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>




			<tr role="button" id="BtnJ469" class="u" style="cursor: pointer">
				<td style="text-align:left">J 469</td>
				<td style="text-align:left">OR Magazine</td>
				<td></td>
				<td>4</td>
			</tr>


			<tr role="button" id="BtnJ480" class="u" style="cursor: pointer">
				<td style="text-align:left">J 480</td>
				<td style="text-align:left">Public Relations: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ483" class="u" style="cursor: pointer">
				<td style="text-align:left">J 483</td>
				<td style="text-align:left">The Journalistic Interview</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ494" class="u" style="cursor: pointer">
				<td style="text-align:left">J 494</td>
				<td style="text-align:left">Strategic Communications Research</td>
				<td></td>
				<td>4</td>
			</tr>
			<tr>
				<td style="font-size: 17px">Journalism Graduate Courses</td>
				<td></td>
				<td style="font-size: 17px"></td>
				<td style="font-size: 17px">Credits</td>
			</tr>

			<tr role="button" id="BtnJ503" class="u" style="cursor: pointer">
				<td style="text-align:left">J 503</td>
				<td style="text-align:left">Thesis</td>
				<td></td>
				<td>1-9</td>
			</tr>

			<tr role="button" id="BtnJ507" class="u" style="cursor: pointer">
				<td style="text-align:left">J 507</td>
				<td style="text-align:left">Seminar: [Topic]</td>
				<td></td>
				<td>1-4</td>
			</tr>

			<tr role="button" id="BtnJ508" class="u" style="cursor: pointer">
				<td style="text-align:left">J 508</td>
				<td style="text-align:left">Workshop: [Topic]</td>
				<td></td>
				<td>1-6</td>
			</tr>

			<tr role="button" id="BtnJ510" class="u" style="cursor: pointer">
				<td style="text-align:left">J 510</td>
				<td style="text-align:left">Experimental Course: [Topic]</td>
				<td></td>
				<td>1-4</td>
			</tr>

			<tr role="button" id="BtnJ511M" class="u" style="cursor: pointer">
				<td style="text-align:left">J 511M</td>
				<td style="text-align:left">US Film Industry</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ512" class="u" style="cursor: pointer">
				<td style="text-align:left">J 512</td>
				<td style="text-align:left">Issues in Communication Studies: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ516" class="u" style="cursor: pointer">
				<td style="text-align:left">J 516</td>
				<td style="text-align:left">Survey of the Documentary</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ521" class="u" style="cursor: pointer">
				<td style="text-align:left">J 521</td>
				<td style="text-align:left">Documentary Production</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ527M" class="u" style="cursor: pointer">
				<td style="text-align:left">J 527M</td>
				<td style="text-align:left">Latino Roots I</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ528M" class="u" style="cursor: pointer">
				<td style="text-align:left">J 528M</td>
				<td style="text-align:left">Latino Roots II</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ532" class="u" style="cursor: pointer">
				<td style="text-align:left">J 532</td>
				<td style="text-align:left">Reporting for Electronic Media</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ534" class="u" style="cursor: pointer">
				<td style="text-align:left">J 534</td>
				<td style="text-align:left">Advanced Television News</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ536" class="u" style="cursor: pointer">
				<td style="text-align:left">J 536</td>
				<td style="text-align:left">Media Design: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ543" class="u" style="cursor: pointer">
				<td style="text-align:left">J 543</td>
				<td style="text-align:left">Advertising Media Planning</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ544" class="u" style="cursor: pointer">
				<td style="text-align:left">J 544</td>
				<td style="text-align:left">Agency Account Management</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ548" class="u" style="cursor: pointer">
				<td style="text-align:left">J 548</td>
				<td style="text-align:left">Advertising Campaigns</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ549" class="u" style="cursor: pointer">
				<td style="text-align:left">J 549</td>
				<td style="text-align:left">Advanced Advertising Campaigns</td>
				<td></td>
				<td>5</td>
			</tr>

			<tr role="button" id="BtnJ552" class="u" style="cursor: pointer">
				<td style="text-align:left">J 552</td>
				<td style="text-align:left">Strategic Public Relations Communication</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ553" class="u" style="cursor: pointer">
				<td style="text-align:left">J 553</td>
				<td style="text-align:left">Strategic Planning and Cases</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ554" class="u" style="cursor: pointer">
				<td style="text-align:left">J 554</td>
				<td style="text-align:left">Public Relations Campaigns</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ557" class="u" style="cursor: pointer">
				<td style="text-align:left">J 557</td>
				<td style="text-align:left">Curiosity for Strategists</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ558" class="u" style="cursor: pointer">
				<td style="text-align:left">J 558</td>
				<td style="text-align:left">Writing Design Concepts</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ559" class="u" style="cursor: pointer">
				<td style="text-align:left">J 559</td>
				<td style="text-align:left">Branding and Content</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ560" class="u" style="cursor: pointer">
				<td style="text-align:left">J 560</td>
				<td style="text-align:left">Brand Development: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ561" class="u" style="cursor: pointer">
				<td style="text-align:left">J 561</td>
				<td style="text-align:left">Newspaper Editing</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ562" class="u" style="cursor: pointer">
				<td style="text-align:left">J 562</td>
				<td style="text-align:left">Reporting II</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ563" class="u" style="cursor: pointer">
				<td style="text-align:left">J 563</td>
				<td style="text-align:left">Specialized Reporting</td>
				<td></td>
				<td>1-4</td>
			</tr>

			<tr role="button" id="BtnJ566" class="u" style="cursor: pointer">
				<td style="text-align:left">J 566</td>
				<td style="text-align:left">Advanced Photojournalism: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ567" class="u" style="cursor: pointer">
				<td style="text-align:left">J 567</td>
				<td style="text-align:left">Issues in International Communication: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ568" class="u" style="cursor: pointer">
				<td style="text-align:left">J 568</td>
				<td style="text-align:left">Advanced News Editing</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ569" class="u" style="cursor: pointer">
				<td style="text-align:left">J 569</td>
				<td style="text-align:left">OR Magazine</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ572" class="u" style="cursor: pointer">
				<td style="text-align:left">J 572</td>
				<td style="text-align:left">Feature Writing II</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ573" class="u" style="cursor: pointer">
				<td style="text-align:left">J 573</td>
				<td style="text-align:left">Feature Editing</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ574" class="u" style="cursor: pointer">
				<td style="text-align:left">J 574</td>
				<td style="text-align:left">Magazine Industry and Strategies</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ575" class="u" style="cursor: pointer">
				<td style="text-align:left">J 575</td>
				<td style="text-align:left">Flux Production</td>
				<td></td>
				<td>1-5</td>
			</tr>

			<tr role="button" id="BtnJ580" class="u" style="cursor: pointer">
				<td style="text-align:left">J 580</td>
				<td style="text-align:left">Public Relations: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ583" class="u" style="cursor: pointer">
				<td style="text-align:left">J 583</td>
				<td style="text-align:left">The Journalistic Interview</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ594" class="u" style="cursor: pointer">
				<td style="text-align:left">J 594</td>
				<td style="text-align:left">Strategic Communications Research</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ595" class="u" style="cursor: pointer">
				<td style="text-align:left">J 595</td>
				<td style="text-align:left">Research Methods: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ596" class="u" style="cursor: pointer">
				<td style="text-align:left">J 596</td>
				<td style="text-align:left">Communication Ethics and Law: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ601" class="u" style="cursor: pointer">
				<td style="text-align:left">J 601</td>
				<td style="text-align:left">Research: [Topic]</td>
				<td></td>
				<td>1-6</td>
			</tr>

			<tr role="button" id="BtnJ602" class="u" style="cursor: pointer">
				<td style="text-align:left">J 602</td>
				<td style="text-align:left">Supervised College Teaching</td>
				<td></td>
				<td>1-5</td>
			</tr>

			<tr role="button" id="BtnJ603" class="u" style="cursor: pointer">
				<td style="text-align:left">J 603</td>
				<td style="text-align:left">Dissertation</td>
				<td></td>
				<td>1-16</td>
			</tr>

			<tr role="button" id="BtnJ604" class="u" style="cursor: pointer">
				<td style="text-align:left">J 604</td>
				<td style="text-align:left">Internship: [Topic]</td>
				<td></td>
				<td>1-6</td>
			</tr>

			<tr role="button" id="BtnJ605" class="u" style="cursor: pointer">
				<td style="text-align:left">J 605</td>
				<td style="text-align:left">Reading and Conference: [Topic]</td>
				<td></td>
				<td>1-6</td>
			</tr>

			<tr role="button" id="BtnJ606" class="u" style="cursor: pointer">
				<td style="text-align:left">J 606</td>
				<td style="text-align:left">Special Problems: [Topic]</td>
				<td></td>
				<td>1-6</td>
			</tr>

			<tr role="button" id="BtnJ607" class="u" style="cursor: pointer">
				<td style="text-align:left">J 607</td>
				<td style="text-align:left">Seminar: [Topic]</td>
				<td></td>
				<td>1-5</td>
			</tr>

			<tr role="button" id="BtnJ608" class="u" style="cursor: pointer">
				<td style="text-align:left">J 608</td>
				<td style="text-align:left">Workshop: [Topic]</td>
				<td></td>
				<td>1-6</td>
			</tr>

			<tr role="button" id="BtnJ609" class="u" style="cursor: pointer">
				<td style="text-align:left">J 609</td>
				<td style="text-align:left">Terminal Project</td>
				<td></td>
				<td>1-6</td>
			</tr>

			<tr role="button" id="BtnJ610" class="u" style="cursor: pointer">
				<td style="text-align:left">J 610</td>
				<td style="text-align:left">Experimental Course: [Topic]</td>
				<td></td>
				<td>1-5</td>
			</tr>

			<tr role="button" id="BtnJ611" class="u" style="cursor: pointer">
				<td style="text-align:left">J 611</td>
				<td style="text-align:left">Mass Communication and Society</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ612" class="u" style="cursor: pointer">
				<td style="text-align:left">J 612</td>
				<td style="text-align:left">Media Theory I</td>
				<td></td>
				<td>5</td>
			</tr>

			<tr role="button" id="BtnJ613" class="u" style="cursor: pointer">
				<td style="text-align:left">J 613</td>
				<td style="text-align:left">Media Theory II</td>
				<td></td>
				<td>5</td>
			</tr>

			<tr role="button" id="BtnJ614" class="u" style="cursor: pointer">
				<td style="text-align:left">J 614</td>
				<td style="text-align:left">Media Theory III</td>
				<td></td>
				<td>5</td>
			</tr>

			<tr role="button" id="BtnJ616" class="u" style="cursor: pointer">
				<td style="text-align:left">J 616</td>
				<td style="text-align:left">Introduction to Strategic Communication Marketing</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ617" class="u" style="cursor: pointer">
				<td style="text-align:left">J 617</td>
				<td style="text-align:left">Strategic Communication Theory and Research: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ618" class="u" style="cursor: pointer">
				<td style="text-align:left">J 618</td>
				<td style="text-align:left">Strategic Communication Management</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ619" class="u" style="cursor: pointer">
				<td style="text-align:left">J 619</td>
				<td style="text-align:left">Teaching and the Professional Life</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ621" class="u" style="cursor: pointer">
				<td style="text-align:left">J 621</td>
				<td style="text-align:left">Foundations of Strategic Communication</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ623" class="u" style="cursor: pointer">
				<td style="text-align:left">J 623</td>
				<td style="text-align:left">Creativity in Strategic Communication</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ624" class="u" style="cursor: pointer">
				<td style="text-align:left">J 624</td>
				<td style="text-align:left">Strategic Communication: [Topic]</td>
				<td></td>
				<td>2</td>
			</tr>

			<tr role="button" id="BtnJ626" class="u" style="cursor: pointer">
				<td style="text-align:left">J 626</td>
				<td style="text-align:left">Strategic Marketing Communication</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ627" class="u" style="cursor: pointer">
				<td style="text-align:left">J 627</td>
				<td style="text-align:left">Foundations of Multimedia Journalism</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ628" class="u" style="cursor: pointer">
				<td style="text-align:left">J 628</td>
				<td style="text-align:left">Multimedia Journalism Practices</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ638" class="u" style="cursor: pointer">
				<td style="text-align:left">J 638</td>
				<td style="text-align:left">Story and Commerce</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ641" class="u" style="cursor: pointer">
				<td style="text-align:left">J 641</td>
				<td style="text-align:left">Qualitative Research Methods</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ642" class="u" style="cursor: pointer">
				<td style="text-align:left">J 642</td>
				<td style="text-align:left">Quantitative Research Methods</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ643" class="u" style="cursor: pointer">
				<td style="text-align:left">J 643</td>
				<td style="text-align:left">Proseminar II</td>
				<td></td>
				<td>5</td>
			</tr>

			<tr role="button" id="BtnJ644" class="u" style="cursor: pointer">
				<td style="text-align:left">J 644</td>
				<td style="text-align:left">Philosophy of Communication</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ646" class="u" style="cursor: pointer">
				<td style="text-align:left">J 646</td>
				<td style="text-align:left">Political Economy of Communication</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ648" class="u" style="cursor: pointer">
				<td style="text-align:left">J 648</td>
				<td style="text-align:left">Cultural Approaches to Communication</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ649" class="u" style="cursor: pointer">
				<td style="text-align:left">J 649</td>
				<td style="text-align:left">International Communication</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ654" class="u" style="cursor: pointer">
				<td style="text-align:left">J 654</td>
				<td style="text-align:left">Reporting within Communities</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ656" class="u" style="cursor: pointer">
				<td style="text-align:left">J 656</td>
				<td style="text-align:left">Producing the Story</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnJ660" class="u" style="cursor: pointer">
				<td style="text-align:left">J 660</td>
				<td style="text-align:left">Advanced Research Methods: [Topic]</td>
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
			<script type="text/javascript" src="../js/JournalismPopup.js" ></script>
</body>
</html>

			