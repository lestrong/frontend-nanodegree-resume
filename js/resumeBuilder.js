//Work in progress

//Header
var name = "LoRae Strong";
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").prepend(formattedName);

var role = "Web Knight";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedRole);

/*var email = "lstrong@chi.yearup.org";
var formattedEmail = HTMLemail.replace("%data%", email);
$("#header").append(formattedEmail); */



var school = "Year Up (Chicago)";
var formattedSchool = HTMLschoolName.replace("%data%", school);
$("#education").append(formattedSchool);
