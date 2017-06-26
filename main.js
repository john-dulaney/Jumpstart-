<!DOCTYPE html>
$(document).ready(function() {
//Console echoes contact
   var inputName = $("#nameTextField").val();
  console.log(inputName);

    var inputEmail = $("#emailTextField").val();
  console.log(inputEmail);

   var inputMessage = $("#messageTextField").val();
  console.log(inputMessage);

  $("contactForm").append("<p>" + inputName + ",thanks for reaching out! </p>")

//hide form / DOM user's name MESSSSSSSSS

  $("#hide").click(function(){
    $("#submit").hide();
  //this is wrong
  $("#submit").on('click')
    $("#submit").append(inputName + " " + ",thanks for reaching out!");
  //$("#nameTextField").val(", thanks for reaching out!");

    //Resume button (doesnt work because im bad)
    $("#resSubmit").click(function(){

      console.log("I have worked as a" + " " +jobs[i] + " " + "at" + " " + companies[x] + ".")

    }


})


//resume ======== this is a mess and doesnt work
var jobs = ["Produce Clerk", "11A Infantry Officer 1/138", "Facebook Extraordinaire"];
var companies = ["The Fresh Market", "Army", "Home"];

for (var i = 0; i < jobs.length; i = i + 1);
for (var x = 0; x < companies.length; x = x + 1) ;
