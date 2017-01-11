// JavaScript Document
theimage = new Array();

// You can replace the picture names with the names of your actual pictures. If you don't need all of the images, you can delete the extra lines.
// Format: theimage[...]=[image URL, link URL, name/description]
theimage[0]=["images/index_1.jpg", "", "Industrious"];
theimage[1]=["images/index_2.jpg", "", "Nice laboratory"];
theimage[2]=["images/index_3.jpg", "", "ICT equipped"];
theimage[3]=["images/index_4.jpg", "", "Conducive environment"];
theimage[4]=["images/index_5.jpg", "", "Conducive environment"];
theimage[5]=["images/index_6.jpg", "", "Conducive environment"];
theimage[6]=["images/index_7.jpg", "", "Conducive environment"];
theimage[7]=["images/index_8.jpg", "", "Conducive environment"];
theimage[8]=["images/index_9.jpg", "", "Conducive environment"];
theimage[9]=["images/index_10.jpg", "", "Industrious"];

///// Plugin variables

playspeed=3000;// You can increase the playspeed to make the pictures move faster. You can decrease the playspeed to make the pictures move slower ms
//#####
//key that holds where in the array currently are
i=0;

//###########################################
window.onload=function(){

//preload images into browser
preloadSlide();

//set the first slide
SetSlide(0);

//autoplay
PlaySlide();
}

//###########################################
function SetSlide(num) {
//too big
i=num%theimage.length;
//too small
if(i<0)i=theimage.length-1;

//switch the image
document.images.imgslide.src=theimage[i][0];

//if they want name of current slide
document.getElementById('slidebox').innerHTML=theimage[i][2];

}


//###########################################
function PlaySlide() {
if (!window.playing) {
PlayingSlide(i+1);
if(document.slideshow.play){
document.slideshow.play.value=" Stop ";
}
}
else {
playing=clearTimeout(playing);
if(document.slideshow.play){
document.slideshow.play.value=" Play ";
}
}
// if you have to change the image for the "playing" slide
if(document.images.imgPlay){
setTimeout('document.images.imgPlay.src="'+imgStop+'"',1);
imgStop=document.images.imgPlay.src
}
}


//###########################################
function PlayingSlide(num) {
playing=setTimeout('PlayingSlide(i+1);SetSlide(i+1);', playspeed);
}


//###########################################
function preloadSlide() {
for(k=0;k<theimage.length;k++) {
theimage[k][0]=new Image().src=theimage[k][0];
}
}

//############################################
function buildCal(m, y, cM, cH, cDW, cD, brdr){
var mn=['January','February','March','April','May','June','July','August','September','October','November','December'];
var dim=[31,0,31,30,31,30,31,31,30,31,30,31];

var oD = new Date(y, m-1, 1); //DD replaced line to fix date bug when current day is 31st
oD.od=oD.getDay()+1; //DD replaced line to fix date bug when current day is 31st

var todaydate=new Date() //DD added
var scanfortoday=(y==todaydate.getFullYear() && m==todaydate.getMonth()+1)? todaydate.getDate() : 0 //DD added

dim[1]=(((oD.getFullYear()%100!=0)&&(oD.getFullYear()%4==0))||(oD.getFullYear()%400==0))?29:28;
var t='<div class="'+cM+'"><table class="'+cM+'" cols="7" cellpadding="0" border="'+brdr+'" cellspacing="0"><tr align="center">';
t+='<td colspan="7" align="center" class="'+cH+'">'+mn[m-1]+' - '+y+'</td></tr><tr align="center">';
for(s=0;s<7;s++)t+='<td class="'+cDW+'">'+"SMTWTFS".substr(s,1)+'</td>';
t+='</tr><tr align="center">';
for(i=1;i<=42;i++){
var x=((i-oD.od>=0)&&(i-oD.od<dim[m-1]))? i-oD.od+1 : '&nbsp;';
if (x==scanfortoday) //DD added
x='<span id="today">'+x+'</span>' //DD added
t+='<td class="'+cD+'">'+x+'</td>';
if(((i)%7==0)&&(i<36))t+='</tr><tr align="center">';
}
return t+='</tr></table></div>';
}

function updateClock ( )
{
  var currentTime = new Date ( );

  var currentHours = currentTime.getHours ( );
  var currentMinutes = currentTime.getMinutes ( );
  var currentSeconds = currentTime.getSeconds ( );

  // Pad the minutes and seconds with leading zeros, if required
  currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  // Choose either "AM" or "PM" as appropriate
  var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  // Convert the hours component to 12-hour format if needed
  currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  // Convert an hours component of "0" to "12"
  currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  // Compose the string for display
  var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

  // Update the time display
  document.getElementById("clock").firstChild.nodeValue = currentTimeString;
}

