//CHAPTER NO 17-20

//Task#1:

/*
var array = [ [], [], []] ;
*/



//Task#2:

/*
var array = [  [0,1,1,3], [1,0,1,2], [2,1,0,1] ];
for (let i=0; i<=3;i++){
	for(let j=0;j<=3;j++){
		document.write(array[i] [j]+ "   ");
	}
	document.write("<br>");
}*
/


//Task#2:

/*var a = 10;
for(i=1;i<=a;i++){
	document.write(i+ "<br>");
}*/


//Task#3:

/*var a = +prompt("Enter a number to show its multiplication table");
var b = +prompt("Enter the length multiplication ");
document.write("Multiplication table of "+a+ " <br> Length " +b+ "<br>");
for (var i=1;i<=b;i++){
	
	document.write(b+  +a+ "x" + i + "=" + (a*i) + "<br>");}
}*/




//Task#4:
/*var fruits = ["apple","banana","mango","strawberry"];
document.write(fruits+ " <br> <br>");
var position = fruits.indexOf("apple");
document.write("Element at index ",position, " is apple<br>");
var position = fruits.indexOf("banana");
document.write("Element at index ",position, " is banana<br>");
var position = fruits.indexOf("mango");
document.write("Element at index ",position, " is mango<br>");
var position = fruits.indexOf("strawberry");
document.write("Element at index ",position, " is strawberry<br>");
*/




//Task#6:


/*var a = 15;
document.write("Counting : <br> ");
for(var i=1;i<=a;i++){
	document.write(i+ ", ");
}


var a = 10;
document.write(" <br> Reverse counting : <br> ");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
for( var i=10;i>=1;i--){
	document.write(i+ ",  ");

}

var a =20;
document.write(" <br> Even : <br> ");

for( var i=0;i<=a;i++){
	if(i%2==0){
	document.write(i+ ",  ");

}}

var a =20;
document.write(" <br> Odd : <br> ");

for( var i=0;i<=a;i++){
	if(i%2!=0){
	document.write(i+ ",  ");

}}


	var a = 20;
document.write("<br> Series : <br> ");
for(var i=2;i<=a;i=i+2){
	document.write(i+ "k,  ");
}

*/



//Task#7:


/*
var A =["cake","apple pie", "cookies", "chips", "patties"];
var B = prompt("Welcome to ABC Bakery. What do you want to orser sir/,ma\'maam?");
if(A.indexOf(B)!== -1){
	alert("Cookies is available at index " +B+ "in our Bakery");
}
else{
	alert("We are soorry.pastry is not available in our Bakery");
}
*/



//Task#8:


/*
var A = [24,53,78,91,12]
document.write("Arrays items : <br> "+A+ "<br>");
document.write("The largest number is : <br> "+Math.max(24,53,78,91,12))
;*/





//Task#9:


/*
var A = [24,53,78,91,12]
document.write("Arrays items : <br> "+A+ "<br>");
document.write("The smallest number is : <br> "+Math.min(24,53,78,91,12));
*/






//Task#9:

/*
var a = 5;
document.write(" <br> Odd : <br> ");
for (var i=1;i<=20;i++){
	
	document.write( (a*i),",  ");}
	*/












//CHAPTER#14-16


//Task#1, 2, 3,4,5,6,7:

/*
var google = [];
var stringArray = ["one", "two", "three"];
var numberArray = [11, 2, 144,0.9];
var booleanArray = [true, false];
var mixedArray = [1, "two", "three", 4, true];
document.write("<h3>Qualifications</h3>");
var qualification =["SSC","HSC","BCS","BS","BCOM","MS","MPhil","PhD"];
for(i=0;i<qualification.length;i++){

	document.write(qualification[i]+"<br>");
}
*/





//Task#8:


/*
var student_name = ["Michael", "John", "Tony"];
var score =[320,230,480];
var total_marks = 500;

for(i=0;i<student_name.length;i++){
	var Per = (score[i]/total_marks)*100;

document.write("Score of "+student_name[i]+ " is " +score[i]+ " Percentage " +Per+ " % <br>");


}*/






//Task#9:

/*
var col_arr = ['Blue', 'Red', 'Blue', 'Purple', 'Green'];
document.write("<b>Default Colors in Array : </b>" + col_arr + "<br><br>");

var addColorInBeginning = prompt("Which color do you like to add to the beginning?");
col_arr.unshift(addColorInBeginning);
document.write("<b>Color Added to the Beginning : </b>" + col_arr + "<br><br>");

var addColorInEnd = prompt("Which color do you like to add to the End?");
col_arr.push(addColorInEnd);
document.write("<b>Color Added to the End : </b>" + col_arr + "<br><br>");

var addTwoMoreColors1 = prompt("Enter two more colors to the beginning? Enter your first color?");
col_arr.unshift(addTwoMoreColors1);

var addTwoMoreColors2 = prompt("Enter two more colors to the beginning? Enter your second color?");
col_arr.unshift(addTwoMoreColors2);
document.write("<b>Two more colors added to the Beginning : </b>" + col_arr + "<br><br>");

col_arr.shift();
document.write("<b>First color deleted : </b>" + col_arr + "<br><br>");

col_arr.pop();
document.write("<b>Last color deleted : </b>" + col_arr + "<br><br>");

var addColoronSpecficIndex = +prompt("Enter the index at which you want to add the color?");
var colorstobeAdded = prompt("Enter the name of color which you want to add on specific index");
var change = colorstobeAdded.toString();
col_arr.splice(addColoronSpecficIndex, 0, change);
document.write("<b>The color " + change +  " is added on specified index : </b>" + col_arr + "<br><br>");


var deleteColoronSpecficIndex = +prompt("Enter the index at which you want to delete the color?");
var colorstobeDeleted = +prompt("How many colors do you want to delete?");
col_arr.splice(deleteColoronSpecficIndex, colorstobeDeleted);
document.write("<b>The color is deleted from specified index : </b>" + col_arr + "<br><br>");
*/




//task10:

/*
var a = [320,230,480,120];
document.write("Scores of Students : "+a+"<br>");
a.sort();
document.write("Ordered Scores of Students : "+a);
*/





//task11:

/*
var cities = ["karachi","Lohare","Islamabad","Quetta","Peshawar"];
document.write("Cities list : <br> "+cities+ "<br>");
var selected_cities = cities.slice(2,4);
document.write("<br> Selected cities list : <br>"+selected_cities);
*/


//task12:

/*
var array = ["This","is","my","cat"];
document.write("Array : <br>"+array+ "<br>");
var animal = array.join(" ");
document.write("<br>String : <br> " +animal );
*/



//Task 13:

/*var array =["keyboard","mouse","printer","monitor"];
document.write("Devices : <br> " +array+ "<br> <br>");
var fifo = array.shift();
document.write("Out : <br> "+fifo+ "<br>");
var fifo = array.shift();
document.write("Out : <br> "+fifo+ "<br>");
var fifo = array.shift();
document.write("Out : <br> "+fifo+ "<br>");
var fifo = array.shift();
document.write("Out : <br> "+fifo+ "<br>");

*/



//Task 14:
/*
var array =["keyboard","mouse","printer","monitor"];
document.write("Devices : <br> " +array+ "<br> <br>");
var lifo = array.pop();
document.write("Out : <br> "+lifo+ "<br>");
var lifo = array.pop();
document.write("Out : <br> "+lifo+ "<br>");
var lifo = array.pop();
document.write("Out : <br> "+lifo+ "<br>");
var lifo = array.pop();
document.write("Out : <br> "+lifo+ "<br>");
*/










//CHAPTER NO 12-13

//Task#1:


/*
var a = prompt("Enter a number or string");
if(a.charCodeAt(0)>=65 && a.charCodeAt(0)<=90)
{
	alert("Input Upper case letter");
}
else if(a.charCodeAt(0)>=97 && a.charCodeAt(0)<=122){
	alert("Input Lower case letter");
}
else{
	alert("its a number");
}
*/



//Task#2:

/*
var a = +prompt("enter a first number");
var b = +prompt("enter a second number");
if (a>b){
	alert(a+ " this is a greater number than " +b);
}
else if(b>a){
	document.write(b+ " this is a greater number than " +a);
}

else if(a==b && b==a){
	document.write(+a+ " and" +b+ " both are equal ");
}
*/




//Task#3:

/*
var a = +prompt("enter a number");
if (a==0){
	document.write("Number is zero");
}
else if (a>0){
	document.write("Number is positive");
}
else{
	document.write("Number is negative");
}
*/



//Task#4:

/*
var a = prompt("Enter an alphabet");
if (a == "a" || a == "a" || a == "e" || a == "i" || a == "0" || a == "u" || a == "A" || a == "E" || a == "I" || a == "O" || a == "U" ){
	alert("true");
}
else{
	alert("false");
}
*/


//Task#5:


/*var JS = "Limelight";
var PW = prompt("Enter a passward");
if (PW != JS){
	alert("Incorrect passward");
}
else if (PW == JS){
	alert("Correct! The passward you enter matches the original passward");
}
else if (PW == " "){
	confirm("Please enter your passward");
}*/






//Task#6:


/*var hour = 13;
 var greeting;
 if(hour < 18){
 	greeting = "Good day";
 	document.write(greeting);
 }
 else{
 	greeting = "Good evening";
 	document.write(greeting);
 }*/
 


//Task#7:

/*
var t = +prompt("Enter a time");
if(t>=0000 && t <1200){
	alert("Good morning");
}
else if(t>=1200 && t <1700){
	alert("Good afternoon");
}

else if(t>=1700 && t <2100){
	alert("Good evening");
}

else if(t>=2100 && t <2359){
	alert("Good night");
}
else{
	alert("");
}*/








//CHAPTER #9-11:


//Task#1:

/*
var a = prompt("enter city name");
 var b = "karachi";
 if (a == b) {
 	alert(" \"Welcome to city of lights\" ");
 }
 */



//Task#2:

/*
var a = prompt("Enter your gender");
 var b = "male";
 var c = "female";
 if (a==b){
 	alert("Good Morning Sir");
 }
 else (a==c)
 	alert("Good Morning Maam");
 */



//Task#3:

 /*
 var a = prompt("Enter the color");
 var b = "red";
 var c = "yellow";
 var d = "green";

 if (a == b){
 	document.write("<table><tr><th>Signalcolor<th><th>Message</th></tr></table>");
 	document.write("<table><tr><td>Red<td>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;<td>Must stop</td></tr></table>");
 }
 	

 else if (a == c){
 	document.write("<table><tr><th>Signalcolor<th><th>Message</th></tr></table>");
 	document.write("<table><tr><td>Yellow<td>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;<td>Ready to move</td></tr></table>");
 }

 else if (a == d){
 	document.write("<table><tr><th>Signalcolor<th><th>Message</th></tr></table>");
 	document.write("<table><tr><td>Green<td>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;<td>Move now</td></tr></table>");
 }

 else{
 	document.write("");
 }
 */



//Task#5:

 /*
  var a = 4;
  if (++a === 5){ alert("given condition for variable a is true"); } 

  var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); } 
 
 var c = 12; 
 if (c++ === 13){ alert("condition 1 is true"); }
  if (c === 13){ alert("condition 2 is true"); } 
  if (++c < 14){ alert("condition 3 is true"); } 
  if(c === 14){ alert("condition 4 is true"); } 

  var materialCost = 20000; var laborCost = 2000; 
  var totalCost = materialCost + laborCost;
   if (totalCost === laborCost + materialCost){ alert("The cost equals"); }  
if (true){ alert("True"); } 
if (false){ alert("False"); } 

 if("car" < "cat"){ alert("car is smaller than cat"); } 
 

 */


//Task6:

/*var a = prompt("enter total marks");
var b = prompt("enter marks obtained");
var c;
c=(b/a)*100;
if(c>=80){
	document.write("Total marks : " ,a, "<br>Marks obtained : ",b, " <br> Percentage : " ,c, "% <br>Grade : A-one <br> Remarks : Excellent" );
}
else if (c>70){
	document.write("Total marks : " ,a, "<br>Marks obtained : ",b, " <br> Percentage : " ,c, "% <br>Grade :  A <br> Remarks : Good");
}
else if (c>=60){
	document.write("Total marks : " ,a, "<br>Marks obtained : ",b, " <br> Percentage : " ,c, "% <br>Grade : B <br> Remarks : You need to improve" );
}
else{
	document.write("Total marks : " ,a, "<br>Marks obtained : ",b, " <br> Percentage : " ,c, "% <br>Grade : Fail <br> Remarks : Sorry");
}
*/




//Task 7:

/*
var a = 9;
var b = prompt("Guess the secret number");
if(b==a){
	document.write(" \"Bingo! correct answer\" ");
}
else(b>7)
	document.write("Close enough to the correct answer");
*/



//Task 8:

/*var b = prompt("Enter a number");
if(b%3==0){
	alert("The number is divisable by 3");
}*/






//Task 9:

/*var a = prompt("Enter an number");
if(a%2==0)
	document.write("Even Number");
else
	document.write("Odd Number");
*/





//TasK !0:
/*var T = prompt("Enter the temperature");
if(T>40){
	alert(" \"It is too hot outside.\" ");
}
else if (T>30){
	alert("\"The weather today is Normal.\"");
}
else if(T>20){
	alert("\"Today\'Weather is cool.\"");
}
else if (T>10){
	alert("\"OMG! Today/' weather is so Cool\"");
}
else{
	alert("");
}*/






//Tak11:

/*
var a = +prompt("Enter a first number");
var b = +prompt("Enter a second number");
var c = prompt("Enter a opreator");

if(c === "+"){
	document.write(a+b);
}
else if(c === "*"){
	document.write(a*b);
}
else if(c === "-"){
	document.write(a-b);
}
else if(c === "/"){
	document.write(a/b);
}
else{
	document.write(a%b);
}*/







//CHAPTER #5:

//Task#1:

/*
var a = 3;
var b= 5;
var c = a+b;
document.write(" sum of 3 and 5 is "+c);
*/



//Task#2:

/*var a = 5;
var b= 3;
var c = a-b;
document.write(" subtraction of 5 and  3 "+c);*/

/*var a = 3;
var b= 5;
var c = a*b;
document.write(" multiplication of 3 and 5 is "+c);*/


/*var a = 3;
var b= 5;
var c = a%b;
document.write(" modules of 3 and 5 is "+c);*/


/*var a = 3;
var b= 5;
var c = a/b;
document.write(" division of 3 and 5 is "+c);*/




//Task#3;

/*var a ;
document.write("Value after variable declearation is " + a+ "<br>");

var a =5;
document.write("Initial value :" +a+ "<br>");


document.write("Value after increment is : "  + ++a + "<br>");
 

a=a+7;
document.write("Value after addition is : " +a+ "<br>");


document.write("Value after increment is : "  + --a + "<br>");

a=a%3;
document.write("The remainder  is : "  + a );*/





//Task#4:

/*var a = 600;
a = a*5;
document.write("Total cost to buy 5 tickets to a movie is " + a + "PKR");*/




//Task#5:

/*var a = 4;
document.write("Table of 4 <br>");

for(var i=1; i<=10; i++){
	
	document.write(+a+ "x" + i + "=" + (i*a) + "<br>");
}*/


//Task#6:

/*var F=77;
var C=(F-32)*5/9;
document.write(+C+ " C is " +F+ " F <br>" );


var f =70;
var c = (f-32)*5/9;
document.write(+f+ " F is " +c+ " C " );*/



//Task#7:

/*var a = 650 , b= 3 , c=100 , d=7 , e=100;
document.write("Price of item 1 is " +a+ " <br>");
document.write("Quantity of item 1 is " +b+ " <br>");
document.write("Price of item 2 is " +c+ " <br>");
document.write("Quantity of item 2 is " +d+ " <br>");
document.write("Shipping charges  is " +e);
sum=(a*b)+(c*d)+e;

document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("Total cost of your order is " +sum);*/



//Task#8:


/*var a = 980;
var b = 804;
var c;
c = (b / a)*100;
document.write("Total marks: " +a+ "<br>");
document.write("Marks obtained: " +b+ "<br>");
document.write("Percentage: "+c+ "<br>");
*/



//Task#9:

/*var us = 10;
var saudi = 25;
var sum;
sum = (us*104.80) + (saudi*28);
document.write("Total currency in PKR: " +sum);*/



//Task#10:

/*var a =9, b = 10, c=11;
a=a+5;
b=b*10;
c=c/2;
document.write("Add by 5 is : "+a+ "<br> Multiply by 2 is : " +b+ " <br> Divided the result by 2 :" +c);*/



//Task#11:

/*var cy = 2016;
var by = 1992;
var age;
age =cy-by;
document.write("Current year : "+cy+"<br>");
document.write("Birth year : "+by+ "<br>");
document.write("Your age is :" +age);*/



//Task#12:

/*var a  = 20;
var b;
b=2*3.142*a;
document.write("Radius of circle : "+a+ "<br>  The circumference is :" +b );*/



//Task#13:

/*var a = "chocolate chip" , b = 15 , c = 65 , d = 3 , e;
e = (c-b)*3;
document.write("<h1>The Life times Supply calculator</h1> <br>");
document.write("Favourite Snake : "+a+ "<br>");
document.write("Current age : " +b+ "<br>");
document.write("Estimated Maximum Age : "+c+ "<br>");
document.write("You will need " +e+ "chocolate chip to last you until the ripe old age of " +c);*/












//CHAPTER#4:



//Task#1:

/*var one = 1, two ="2", three = 3;
document.write(one,two,three);*/

//Task#2:
//Var  first_name,  first_name ,first-name,   firstName ,  firstname99; /*legal variable(*/
//var  first name, 99firstname, first@name, first))name, fn maje; /*illegal variable*/



//Task#3:
/*document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variable name van only contain,numbers,$ or_.For example : $my_firstVariable <br>");
document.write("Variable must begib writh a letter, $ or _ , For example : $name, _name or name <br>");
document.write("Variable name are case sensitive <br>");
document.write("Variable name should not be JS keywords");*/





//CHAPTER#3:



//Task#1:

/*var age = 15;
alert("I am  "+ age + " year old");*/




//Task#2:
/*var N = 14;
alert("You have visited this site "+ N + " times");*/




//Task#3:

/*var  birthYear =1996;
document.write("My birth year is " + birthYear + "<br>  Data type of my declared variable is number");*/




//Task#4:

/*var Visitorname ="John Doe";
var Quantity = "5 T-shirt";
var producttitle = " XYZ Clothing store";
document.write("<b>"+ Visitorname + "</b> ordered <b>"+ Quantity + "</b> (s) on " + producttitle);*/




//CHAPTER#2:



//Task#1:

/*var username = "developer";
console.log(username);*/



//Task#2:

/*var myName = "FaryalIkram";
document.write(myName);*/



//Task#3:

/*var JS;
JS = "Hello World";
alert(JS);*/

//Task#4:

/*
var a = alert("John Doe");

var a = alert("15 year old");


var a = alert("Certificated Mobile Development");
*/


//Task#5:

//alert("PIZZA \nPIZZ \nPIZ \nPI \nP");




//Task#6:

/*var email = ("example@example.com");
alert("My email address is " + email);*/




//Task#7:
/*var book = ("A smarter way to learn JavaScript");
alert("I am trying to learn from the book " + book);*/




//Task#8:

/*document.write("Yah! I can write HTML content through javaScript");*/



//Task#9:
//alert(▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬);


//Task#4:

/*
var a = alert("John Doe");

var a = alert("15 year old");


var a = alert("Certificated Mobile Development");
*/








//CHAPTER#1:

//Task#1:

//alert("Error! Please enter a valid passward");



//Task#2:

//alert("Welcom to JS Land... \n Happy Coding! ");




//Task#3:

//alert("Welcom to JS Land... \n Happy Coding! ");



//Task#4:

//alert("Welcom to JS Land...");




//Task#5:

//alert("Happy Coding!... \n Prevent this page for creating additional dialogs.");





//Task#6:
/*<!DOCTYPE html>
<html>
<head>
	<title>javascript</title>
	<script type="text/javascript" src="app1.js"></script>
	<script type="text/javascript" src="app.js"></script>
</head>
<body>
	<script type="text/javascript">
		alert("hello world");
	</script>
	
</body>
</html>*/

//Task#7:
/*<!DOCTYPE html>
<html>
<head>
	<title>javascript</title>
	<script type="text/javascript" src="app1.js"></script>
	<script type="text/javascript" src="app.js"></script>

	<script type="text/javascript">
		
	</script>
</head>
<body>
	<script type="text/javascript">
		alert("hello world");
	</script>
	
</body>
<script type="text/javascript"></script>
</html>*/

