 * Tool Used In This Project HTML, CSS ,JS
-------------------<HTML>--------------------------------
!- Use In vs code it will help you to get boiler plate of html 

<H1>- For making text Big 

<div class="clock">-div tag work like a container and by assigning a class to that 
     we are giving it unique id.
     it we basicly used when we are dividing section in that particular page


<div> _ you can have mulitple div inside one div tag
     

<span id="hour">-Span tag is kind of inline container used 
                 to mark up a part of a text.


<span class="text">- Here we are assigning class to span tag

fieldset:- is used for making category & legend for titling that 

((for adding vedio in web page simply vist that vedio : click on share vedio: then choose embed share
copy the link : paste in your html file ))

<script src="file name">- here we are ading  java script  file that must be 
             present in same folder 


-------------------<Css>---------------------------------

*********************************************************
Selector{ property:value; property:value;}
Selcetor could be _ ID  Element Tag (html)

Property _ like what you wana do background, color etc

value_ like background-color:red; text-color, font-size etc

*********************************************************

<link rel="stylesheet" href="filename.css>- here we are linking our css file to html file 
                                             file must stay in same folder 

body{} _______ before designing anything its  good to asign  height to your body of html 

. classname _____To Style  Class we  need to add dot then class name that we have used in html file

.clock div ______ to style div  that are under class  we need to mention first classname and after that div

display: flex;__________ to bring everything to center 

justify-content :center ____  it will bring content to the center


background: url(http://-------);__ add 

background-size:cover; _ it will remove scroll bar

h1{} _____ here we are designing a h1 tag

text- transform: uppercase; __ it will transfrom  all small letter into  uppercase. 

letter- spacing: 4px;___ it will give space between each letter 

margin:5px;__ here we are creating space around elements, outside of any defined borders

opacity: 0.7___ this property is used for transparency the hardness of color 

.class .text___ when we are style two class at the same time

 position: absolute;_____is positioned relative to the nearest positioned ancestor


-------------------<java script>---------------------------------------------------
there are four  section that we want to change static  to dynamic in our html page 

* HOURS 
* MINUTES
* SECONDS
*  AM/PM
***********************************************************************************

<script src="js file name">_ that js file must be located in a same directory


constant  hourE1 = document .getelementbyid("hour")______ in order to change static
       to dynamic  we need to get acess  html element by using getelementbyid method 


*we repeat same for (minute,seconds and AM/PM)


function updateClock() {_____ Here we are creating function.

let h = new Date().getHours()___ Date constructor

*same for Minutes & Second

let ampm = "AM"_ we cant get this from computer so we are  keeping Am here for default
           & going to apply logic to get pm 

 hourE1.innerText = h_____ with the help of inner text method 
                           we are writing the dynamic text on the html document


updateClock()___ at last we are calling function.



************************************ Thanks for visting **********************************

