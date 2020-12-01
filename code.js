/*
When the form is submitted, create an object that contains the data.
Then, use the object's properties to output the following:

    first name
    last name
    percentage <-- calculated from points earned / points possible
    letter grade <-- A, B, C, etc. based on percent

 */

$(document).ready(function () {

$( "#target" ).submit(function( event ) {
  //alert( "Handler for .submit() called." );
    event.preventDefault();



     var firstName, lastName, pointEarned, pointPossible;

    firstName = $("#fname").text();
    lastName = $("#lname").text();
    pointEarned = $("#pointsEarned").val();
    pointPossible = $("#pointsPossible").val();

    pointEarned =  parseFloat(pointEarned);
    pointPossible = parseFloat(pointPossible);


    var dataObject = {
     fName: ''  ,
      lName: ''  ,
      pEarn:    0,
      pPossible:  0};

    dataObject.fName= firstName;
    dataObject.lName= lastName;
    dataObject.pEarn=pointEarned;
    dataObject.pPossible=pointPossible;



    var gradeFind= parseFloat(dataObject.pPossible / dataObject.pEarn);
   // var gradeFind = parseFloat(pointPossible / pointEarned);
    $("#fNameYours").text(dataObject.fName);
    $("#lNameYours").text(dataObject.lName);
    $("#grade").text(gradeFind);


 });

});