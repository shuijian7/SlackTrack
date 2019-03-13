<!--Fornt page template was written by Jarvis Dong & Will Lin. 
Reponsibiliies:
Jarvis Dong: Initial table creation and css classes for table. 
Will Lin: Buttons creation and functions implementation, table optimization, page decoration.
Tyler Millan uses page generator (input page template) to generate other course tables with same funcionalities. -->




<!-- HTML file for Philosophy major page
This page was originally created using the page_generator python function written for
the SlackTrack Application by group member Tyler Millan. Page was initially created on 2019-03-11-->



<html>
<head>
		<meta charset="utf-8" />
		<!--browser compatibility-->
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>Philosophy</title>
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
		<h1 style="margin-left: 7%">Philosophy</h1>

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
				<td style="font-size: 17px">Core Courses</td>
				<td></td>
				<td style="font-size: 17px"></td>
				<td style="font-size: 17px">Credits</td>
			</tr>
			<tr role="button" id="BtnPHIL310" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 310</td>
				<td style="text-align:left">History of Philosophy: Ancient and Medieval</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL311" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 311</td>
				<td style="text-align:left">History of Philosophy: Modern</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL312" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 312</td>
				<td style="text-align:left">History of Philosophy: 19th Century</td>
				<td></td>
				<td>4</td>
			</tr>
			<tr role="button" id="BtnPHIL325" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 325</td>
				<td style="text-align:left">Logic, Inquiry, and Argumentation</td>
				<td></td>
				<td>4</td>
			</tr>
			<tr>
				<td style="font-size: 17px">Select Two of the following</td>
				<td></td>
				<td style="font-size: 17px"></td>
				<td style="font-size: 17px">Credits</td>
			</tr>
			<tr role="button" id="BtnPHIL421" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 421</td>
				<td style="text-align:left">Ancient Philosophers: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>
			<tr role="button" id="BtnPHIL433" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 433</td>
				<td style="text-align:left">17th- and 18th-Century Philosophers: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>


			<tr role="button" id="BtnPHIL453" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 453</td>
				<td style="text-align:left">19th-Century Philosophers: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>
			<tr role="button" id="BtnPHIL463" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 463</td>
				<td style="text-align:left">20th-Century Philosophers: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>
			<tr>
				<td style="font-size: 17px">Select One of the following</td>
				<td></td>
				<td style="font-size: 17px"></td>
				<td style="font-size: 17px">Credits</td>
			</tr>

			<tr role="button" id="BtnPHIL213" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 213</td>
				<td style="text-align:left">Asian Philosophy</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL216" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 216</td>
				<td style="text-align:left">Philosophy and Cultural Diversity</td>
				<td></td>
				<td>4</td>
			</tr>


			<tr role="button" id="BtnPHIL315" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 315</td>
				<td style="text-align:left">Introduction to Feminist Philosophy</td>
				<td></td>
				<td>4</td>
			</tr>
			<tr role="button" id="BtnPHIL342" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 342</td>
				<td style="text-align:left">Introduction to Latin American Philosophy</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL443" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 443</td>
				<td style="text-align:left">Feminist Philosophy: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL451" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 451</td>
				<td style="text-align:left">Native American Philosophy</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL452" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 452</td>
				<td style="text-align:left">Philosophy and Race</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td style="font-size: 17px">Additional upper-division philosophy courses</td>
				<td></td>
				<td style="font-size: 17px"></td>
				<td style="font-size: 17px">24</td>
			</tr>
			<tr role="button" id="BtnPHIL307" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 307</td>
				<td style="text-align:left">Social and Political Philosophy</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL308" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 308</td>
				<td style="text-align:left">Social and Political Philosophy</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL309" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 309</td>
				<td style="text-align:left">Global Justice</td>
				<td></td>
				<td>1-4</td>
			</tr>

			<tr role="button" id="BtnPHIL320" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 320</td>
				<td style="text-align:left">Philosophy of Religion</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL322" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 322</td>
				<td style="text-align:left">Philosophy of the Arts</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL323" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 323</td>
				<td style="text-align:left">Moral Theory</td>
				<td></td>
				<td>4</td>
			</tr>


			<tr role="button" id="BtnPHIL330" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 330</td>
				<td style="text-align:left">Philosophy and Disaster</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL331" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 331</td>
				<td style="text-align:left">Philosophy in Literature</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL332" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 332</td>
				<td style="text-align:left">Philosophy of Film</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL335" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 335</td>
				<td style="text-align:left">Medical Ethics</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL339" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 339</td>
				<td style="text-align:left">Introduction to Philosophy of Science</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL340" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 340</td>
				<td style="text-align:left">Environmental Philosophy</td>
				<td></td>
				<td>4</td>
			</tr>



			<tr role="button" id="BtnPHIL343" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 343</td>
				<td style="text-align:left">Critical Theory</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL344" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 344</td>
				<td style="text-align:left">Introduction to Philosophy of Law</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL345" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 345</td>
				<td style="text-align:left">Place in the Cosmos</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL350" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 350</td>
				<td style="text-align:left">Metaphysics</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL372" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 372</td>
				<td style="text-align:left">Teaching Children Philosophical Inquiry</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL399" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 399</td>
				<td style="text-align:left">Special Studies: [Topic]</td>
				<td></td>
				<td>1-5</td>
			</tr>

			<tr role="button" id="BtnPHIL401" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 401</td>
				<td style="text-align:left">Research: [Topic]</td>
				<td></td>
				<td>1-21</td>
			</tr>

			<tr role="button" id="BtnPHIL403" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 403</td>
				<td style="text-align:left">Thesis</td>
				<td></td>
				<td>1-12</td>
			</tr>

			<tr role="button" id="BtnPHIL405" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 405</td>
				<td style="text-align:left">Reading and Conference: [Topic]</td>
				<td></td>
				<td>1-21</td>
			</tr>

			<tr role="button" id="BtnPHIL407" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 407</td>
				<td style="text-align:left">Seminar: [Topic]</td>
				<td></td>
				<td>1-5</td>
			</tr>

			<tr role="button" id="BtnPHIL410" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 410</td>
				<td style="text-align:left">Experimental Course: [Topic]</td>
				<td></td>
				<td>1-5</td>
			</tr>

			<tr role="button" id="BtnPHIL415" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 415</td>
				<td style="text-align:left">Continental Philosophy: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL420" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 420</td>
				<td style="text-align:left">American Philosophy: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL421" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 421</td>
				<td style="text-align:left">Ancient Philosophers: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL423" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 423</td>
				<td style="text-align:left">Technology Ethics: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL425" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 425</td>
				<td style="text-align:left">Philosophy of Language</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td span style="font-weight:bold;font-size: 17px">Total Credits Required for Major</td>
				<td></td>
				<td></td>
				<td span style="font-weight:bold;font-size: 17px">52</td>
			</tr>

			<tr>
				<td style="font-size: 17px">Other lower-division Philosophy Courses Offered</td>
				<td></td>
				<td style="font-size: 17px"></td>
				<td style="font-size: 17px">Credits</td>
			</tr>

			<tr role="button" id="BtnPHIL101" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 101</td>
				<td style="text-align:left">Philosophical Problems</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL102" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 102</td>
				<td style="text-align:left">Ethics</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL103" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 103</td>
				<td style="text-align:left">Critical Reasoning</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL110" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 110</td>
				<td style="text-align:left">Human Nature</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL120" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 120</td>
				<td style="text-align:left">Ethics of Enterprise and Exchange</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL123" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 123</td>
				<td style="text-align:left">Internet, Society, and Philosophy</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL130" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 130</td>
				<td style="text-align:left">Philosophy and Popular Culture</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL170" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 170</td>
				<td style="text-align:left">Love and Sex</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL199" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 199</td>
				<td style="text-align:left">Special Studies: [Topic]</td>
				<td></td>
				<td>1-5</td>
			</tr>

			<tr role="button" id="BtnPHIL211" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 211</td>
				<td style="text-align:left">Existentialism</td>
				<td></td>
				<td>4</td>
			</tr>


			<tr role="button" id="BtnPHIL220" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 220</td>
				<td style="text-align:left">Food Ethics</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr>
				<td style="font-size: 17px">Philosophy Graduate Courses</td>
				<td></td>
				<td style="font-size: 17px"></td>
				<td style="font-size: 17px">Credits</td>
			</tr>

			<tr role="button" id="BtnPHIL503" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 503</td>
				<td style="text-align:left">Thesis</td>
				<td></td>
				<td>1-16</td>
			</tr>

			<tr role="button" id="BtnPHIL507" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 507</td>
				<td style="text-align:left">Seminar: [Topic]</td>
				<td></td>
				<td>1-5</td>
			</tr>

			<tr role="button" id="BtnPHIL510" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 510</td>
				<td style="text-align:left">Experimental Course: [Topic]</td>
				<td></td>
				<td>1-5</td>
			</tr>

			<tr role="button" id="BtnPHIL521" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 521</td>
				<td style="text-align:left">Ancient Philosophers: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL533" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 533</td>
				<td style="text-align:left">17th- and 18th-Century Philosophers: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL551" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 551</td>
				<td style="text-align:left">Native American Philosophy</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL553" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 553</td>
				<td style="text-align:left">19th-Century Philosophers: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL563" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 563</td>
				<td style="text-align:left">20th-Century Philosophers: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL601" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 601</td>
				<td style="text-align:left">Research: [Topic]</td>
				<td></td>
				<td>1-16</td>
			</tr>

			<tr role="button" id="BtnPHIL602" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 602</td>
				<td style="text-align:left">Supervised College Teaching</td>
				<td></td>
				<td>1-16</td>
			</tr>

			<tr role="button" id="BtnPHIL603" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 603</td>
				<td style="text-align:left">Dissertation</td>
				<td></td>
				<td>1-16</td>
			</tr>

			<tr role="button" id="BtnPHIL605" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 605</td>
				<td style="text-align:left">Reading and Conference: [Topic]</td>
				<td></td>
				<td>1-16</td>
			</tr>

			<tr role="button" id="BtnPHIL607" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 607</td>
				<td style="text-align:left">Seminar: [Topic]</td>
				<td></td>
				<td>1-5</td>
			</tr>

			<tr role="button" id="BtnPHIL610" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 610</td>
				<td style="text-align:left">Experimental Course: [Topic]</td>
				<td></td>
				<td>1-5</td>
			</tr>

			<tr role="button" id="BtnPHIL614" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 614</td>
				<td style="text-align:left">Issues in Ethics</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL615" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 615</td>
				<td style="text-align:left">Continental Philosophy: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL620" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 620</td>
				<td style="text-align:left">American Philosophy: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL625" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 625</td>
				<td style="text-align:left">Philosophy of Language</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL641" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 641</td>
				<td style="text-align:left">Social and Political Philosophy: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL643" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 643</td>
				<td style="text-align:left">Feminist Philosophy: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL645" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 645</td>
				<td style="text-align:left">Environmental Philosophy: [Topic]</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL657" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 657</td>
				<td style="text-align:left">Philosophy and Race: Contemporary Issues</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL658" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 658</td>
				<td style="text-align:left">Philosophy of Mind</td>
				<td></td>
				<td>4</td>
			</tr>

			<tr role="button" id="BtnPHIL670" class="u" style="cursor: pointer">
				<td style="text-align:left">PHIL 670</td>
				<td style="text-align:left">Issues in Metaphysics</td>
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
			<script type="text/javascript" src="../js/PhilosophyPopup.js" ></script>
</body>
</html>

			