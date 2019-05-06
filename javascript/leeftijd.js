/*
  Class:    4A7B 
  Name:     Romy Huzen
  Purpose:  Calculate Age and day of birth periode 03 exercise 02
            working with: Date object and functions

  dd-mm-yyyy  Description
  ==========  ==========================================
  06-03-2018  Initial
*/
	
function showAge() {

  //ATTENTION: 
  //at date object the month starts at number 0 (january)
  //the day of week starts at sunday (0)

  var myDay   = parseInt(document.getElementById("myDay").value);
  var myMonth = parseInt(document.getElementById("myMonth").value);
  var myYear  = parseInt(document.getElementById("myYear").value);
  
  var myBirhDay = new Date(myYear,myMonth-1,myDay);
  var dayToday  = new Date();
  
  var curday   = dayToday.getDate();
  var curmonth = dayToday.getMonth()+1;
  var curyear  = dayToday.getFullYear();
  
  var daysOfTheWeek = ["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"];
  var myAge = curyear - myYear;


  //if((curmonth < myMonth) || ((curmonth == myMonth) && (myDay < curday))){
  //		if(myAge>0) myAge--;
  //}
  console.log("test2");
  if(myMonth > curmonth) {
   console.log("test3");
	myAge--;
	console.log("test4");
   }
   
  if (myMonth == curmonth) { 
    console.log("test6");
	if (myDay > curday) {
	  myAge--;
	  console.log("test5");
	
	}

  }
  if(myAge < 0) myAge = 0;

  document.getElementById("result").style.display = "block";
  document.getElementById("result").innerHTML  = "Je bent geboren op een " + daysOfTheWeek[myBirhDay.getDay()]
											   + "<br>Jouw leeftijd is " + myAge;
}
