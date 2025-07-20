//This javascript file contains the logo, navigation and footer html content. All pages on this website will insert the contents of this file when loaded, by running this script.

//Checks that html contents are fully loaded and runs the following functions.
document.addEventListener('DOMContentLoaded' , () => {
	
	//variable to store the html content for logo
	const logoContent = `
		<a href="index.html">
			<div class="logo">
				<p>MARC B</p>
			</div>
		</a>
	`;
	
	//variable to store the html content for the navigation buttons
	const navContent = `
		<!--container for the nav buttons in unorder list format, style references the nav class. A tag wraps the li elements making the entire section a link.-->
		<ul>
			<a href="index.html"><li>Home</li></a>
			<a href="resume.html"><li>Resume</li></a>
			<a href="projects.html"><li>Projects</li></a>
			<a href="blog.html"><li>Blog</li></a>
			<a href="about.html"><li>About</li></a>
			<a href="contact.html"><li>Contact</li></a>
			<a href="javascript:lightdark()"><li id="light-dark-button">Light Mode</li></a>
		</ul>
	`;
	
	//variable to store html content for the footer
	const footerContent = `
			<div class="footrow1">

				<div class= "footrowhome">
					<a href="index.html">Marc Bissessar</a>
				</div>
				<div class= "footrowabout">
					<a href="about.html">About</a>
				</div>
				<div class= "footrowresume">
					<a href="resume.html">Resume</a>
				</div>
				<div class= "footrowprojects">
					<a href="projects.html">Projects</a>
				</div>
				<div class= "footrowblog">
					<a href="contact.html">Contact</a>
				</div>
			</div>

			<div class="footrow2"></div>

			<div class="footrow3">
				<p>Marc Bissessar. All Rights Reserved</p>
			</div>
	`;
	
	//use getElementById within the html document to find the ID for logo and insert the content of logoContent
	document.getElementById('logo').innerHTML = logoContent;
	
	//use getElementById within the html document to find the ID for navi and insert the content of navContent
	document.getElementById('navi').innerHTML = navContent;
	
	//use getElementById within the html document to find the ID for foot and insert the content of footerContent
	document.getElementById('foot').innerHTML = footerContent;
		
});
