# Udacity's Responsive Web Design Fundamentals - ud893

##Course Summary
In this course I learned the fundamentals of responsive web design with Google's Pete LePage! I created my own responsive web page that works well on any device - phone, tablet, desktop or anything in between.

I started by exploring what makes a site responsive and how some common responsive design patterns work across different devices. From there, I learned how to create my own responsive layout using the viewport tag and CSS media queries. Finally, I experimented with major and minor breakpoints, and optimizing text for reading.
  
##Why I took this course
The way people browse the web is changing quickly - fewer and fewer users access the web at a desk in front of a large monitor with a keyboard and mouse. The web is increasingly being enjoyed on phones, tablets, wearables, TVs and everything in between. By designing a site to be responsive, it will look good and work well no matter what device my users have in front of them.

Throughout this course, I worked through a project. I created a home town website that works well on phones, tablets and desktop displays.

## Course Final Proect 
###Making the Hometown website responsive 
  Here are some of the tings I did:  
1. [X] Added a <meta> viewport to the page with initial scale set.
2. [X] Adjusted CSS and markup so that everything displays in a single column. Used relative widths so that things stretch to fit across any viewport width.
3. [X] Picked a set of breakpoints and a design pattern that I learned to style the page so that it works across different devices.
4. [X] Tested on multiple phones, tablets, and browser window sizes and adjusted my breakpoints.
5. [X] Updated sports score taable with responsive design.
6. [X] Adjusted text size / length. 
7. [X] Added minor breakpoints.
8. [] Replaced images with responsive images.

###Original Site
As you can see it doesn't look good on mobile. Also, it doesn't respond to fit the window/browser size.
![Alt text](https://github.com/IanSkyles/ud893/blob/master/5_Optimizations/screenShots/start.jpg?raw=true "Original Picture 1")
![Alt text](https://github.com/IanSkyles/ud893/blob/master/5_Optimizations/screenShots/start1.jpg?raw=true "Original Picture 2")

###Final Site Pictures
![Alt text](https://github.com/IanSkyles/ud893/blob/master/5_Optimizations/screenShots/complete1.jpg?raw=true "Final Picture 1")
![Alt text](https://github.com/IanSkyles/ud893/blob/master/5_Optimizations/screenShots/complete2.jpg?raw=true "Final Picture 2")
![Alt text](https://github.com/IanSkyles/ud893/blob/master/5_Optimizations/screenShots/complete3.jpg?raw=true "Final Picture 3")
![Alt text](https://github.com/IanSkyles/ud893/blob/master/5_Optimizations/screenShots/complete4.jpg?raw=true "Final Picture 4")
![Alt text](https://github.com/IanSkyles/ud893/blob/master/5_Optimizations/screenShots/complete5.jpg?raw=true "Final Picture 5")
![Alt text](https://github.com/IanSkyles/ud893/blob/master/5_Optimizations/screenShots/complete6.jpg?raw=true "Final Picture 6")
![Alt text](https://github.com/IanSkyles/ud893/blob/master/5_Optimizations/screenShots/complete7.jpg?raw=true "Final Picture 7")
![Alt text](https://github.com/IanSkyles/ud893/blob/master/5_Optimizations/screenShots/complete8.jpg?raw=true "Final Picture 8")

##Course Syllabus
###Lesson 1 - Why Responsive?

What is responsive web design and why is it important? What kinds of devices should we be targeting with our design? How can we best leverage the different capabilities of each device to provide great experiences to users? It also made sure that my development environment was ready to go.

**Topics covered:**
* What is responsive design?
* Why does responsive design work for any device?
* Remote debugging and emulation in the browser

**Other Takeaways**
* How to set up debugging in the browser on desktop and android devices.

###Lesson 2 - Starting Small

The best way to get started is to start small and build up. In this lesson, we covered the key components that make a site great on a small screen, including setting the viewport, adding content and sizing the content to the viewport. I started the home town site project, by making sure that it looks good on a small screen.

**Topics covered:**
* Why start small and build up?
* What is the viewport?
* Sizing the content to the viewport
  * avoiding static sized items
* Touch target, and why they should be large

**Other Takeaways**
* Device independent pixels vs Hardware pixels
* Device pixel ratios (hardware pixels over dip)
* width=device-width allows the page to reflow  content to match the device
* initial-scale=1 tells the browser to match the DIP and CSS pixels to a 1:1 ratio
* **Dont forget to set the viewport** using
`<meta name="viewport" content="width=device-width, initial-scale=1.0">`
* Make sure pictures don't overflow the viewport by putting this code in your css

```
img, embed, object, video {
	max-width: 100%
}
```
* Tap targets should be 48px by 48px minimum so they are bigger than people's thumbs with fat fingers.
```
nav a, button {
	min-width: 48px;
	min-height: 48px;
}
```
* Design from the ground up: wearble to phone to tablet to desktop to tv (or however far you need to go)

####L2 Assignment
- [X] Add a <meta> viewport to the page with initial scale set.
- [X] Adjust CSS and markup so that everything displays in a single column. Use relative widths so that things stretch to fit across any viewport width.
- [X] Make sure your touch targets are easy to hit
- [X] Test your site across different viewports. Try it on different phones, tablets, and desktops.

###Lesson 3 - Building Up

Since I had gotten the page optimized for small screens, it was now time to start thinking about how they’ll look on larger screens. I learned how to use CSS media queries to add breakpoints that change the layout depending on the screen size or other device characteristics.

**Topics covered:**
* CSS media queries
* What is a breakpoint, and how to choose one
* Using the CSS flexbox to modify layout

**Other Takeaways**
* Media queries.
 * Linked style sheet: mini small http requests
   * ```<link rel="stylesheet" media="screen and (min-width: 500px)" href="green.css">```
 * @media tag: few big http requests
   * ```@media screen and (min-width:500px) { body {background-color: green; }}```
 * Two media tags at once
```
   	@media screen and (min-width:500px) { body {color: #F79420; }}  
        @media screen and (min-width:800px) { body {background-color: blue; }}
```
 * Media Query Quiz
![Alt text](https://github.com/IanSkyles/ud893/blob/master/3_Building_Up/screenShots/mediaQueryPractice.jpg?raw=true "Media Query Quiz")
 * Between 0 and 400 pixels, set the background color to red:
```
@media screen and (min-width: 0px) and (max-width: 400px) {
        body {
          background-color: red;
        }
}
```
 * Between 401 and 599 pixels, set the background color to green:
```
@media screen and (min-width: 401px) and (max-width: 599px) {
        body {
          background-color: green;
        }
}
```
 * For 600 and above pixels, set the background color to blue:
```
@media screen and (min-width: 600px) {
        body {
          background-color: blue;
        }
}
```
* `display:flex;` turns divs into a row.
* `flex-wrap:wrap;` turns divs into a row but resizes by popping a div into the column below.
* `order` lets you have unique display orders based on pixel size.
* Design Tools/Patterns: 
  * Flex Box
![Alt text](https://github.com/IanSkyles/ud893/blob/master/3_Building_Up/screenShots/flexBoxQuiz.jpg?raw=true "Flex Box Example")
  * Flex Grid
  * Breakpoints
  * Media Queries



###Lesson 4 - Common Responsive Patterns

With the basics of responsive design down, I went on to learn about and practice some of the common layout design patterns used across sites. Also, I iterated on the home town site project, creating breakpoints for tablet and desktop layouts using the patterns from this lesson.

**Topics covered:**
* Mostly fluid pattern
![Alt text](https://github.com/IanSkyles/ud893/blob/master/4_Common_Responsive_Patterns/screenShots/mostlyFluid.jpg?raw=true "Mostly fluid")
* Column drop pattern
![Alt text](https://github.com/IanSkyles/ud893/blob/master/4_Common_Responsive_Patterns/screenShots/columnDrop.jpg?raw=true "Column drop")
* Layout shifter pattern
![Alt text](https://github.com/IanSkyles/ud893/blob/master/4_Common_Responsive_Patterns/screenShots/layoutShifter.jpg?raw=true "Layout shifter")
* Off canvas pattern
  *An example is a hamburger menu  
![Alt text](https://github.com/IanSkyles/ud893/blob/master/4_Common_Responsive_Patterns/screenShots/offCanvas1.jpg?raw=true "Burger menu 1") ![Alt text](https://github.com/IanSkyles/ud893/blob/master/4_Common_Responsive_Patterns/screenShots/offCanvas2.jpg?raw=true "Burger menu 2")  

####Project progress
* Added hamburger menu
* Added media queries to organize page at 3 different sizes (used 2 breakpoints)

###Lesson 5 - Optimizations

I learned strategies for minor breakpoints used to adjust the margins or padding on an element, or increase the font size to make it feel more natural in the layout. Also, I learned about strategies for dealing with tables and optimal text readability. At the end of the lesson, I iterated for the last time on the home town site, adding minor breakpoints to really make the experience stand out.

**Topics covered:**
* Minor break points
* Optimizing text layout
  * font size
  * optimal line length
* Responsive tables, and strategies for dealing with them
w
**Other Takeaways**
* Responsive Tables
  * *Hidden Columns* - Use with caution, try and use abreviated data instead.
    * use `display:none;`
 ![Alt text](https://github.com/IanSkyles/ud893/blob/master/5_Optimizations/screenShots/hidingTableCol.jpg?raw=true "Hidden Columns")
  * *No More Tables*
 ![Alt text](https://github.com/IanSkyles/ud893/blob/master/5_Optimizations/screenShots/noMoreTables1.jpg?raw=true "No more tables")![Alt text](https://github.com/IanSkyles/ud893/blob/master/5_Optimizations/screenShots/noMoreTables2.jpg?raw=true "No more tables")![Alt text](https://github.com/IanSkyles/ud893/blob/master/5_Optimizations/screenShots/noMoreTables3.jpg?raw=true "No more tables")
  * *Contained Tables*
 ![Alt text](https://github.com/IanSkyles/ud893/blob/master/5_Optimizations/screenShots/containedTables.jpg?raw=true "Contained Tables")
* Optimal Text Line length is about 65. But, can be 45-90 depending on whether it is projected, text on a computer, font size, font style.
* It is good practice to see `font-size:18px;` and `line-height:1.25em;`
* Minor break points - increasing font size or adjusting text arrangement at a certain px. 
```
@media screen and (min-width:450px) and (max-width:550px) {
	body { font-size: 1em; }
	.seven-day-fc .temp-low, .seven-day-fc .temp-high {
		display: inline-block;
		width: 30%;
	}
	.seven-day-fc .icon {
		width:60px;
		height:60px;
	}
}
```
```
@media screen and (min-width:700px) {
	width: 700px;
	margin-left:auto;
	margin-right:auto;
	display:block;
```
@
##Instructors
###Pete LePage
Pete is a developer advocate at Google and works to make the lives of web developers easier. Working on projects like Web Fundamentals and Google web developer videos, he's focused on ensuring that developers have the tools and skills they need to build great responsive sites and apps with awesome user experiences.

###Cameron Pittman
A passionate educator and programmer, Cameron lives and breathes web development as he creates programming courses at Udacity. Before coming here, Cameron was a combination Director of Content and web developer at Seattle startup LearnBIG. He taught four years of high school physics and chemistry in Nashville, TN, during which time he pioneered teaching physics with the video game Portal 2. Cameron graduated with a degree in physics and astronomy from Vanderbilt University and earned his master's in teaching from Belmont University.
