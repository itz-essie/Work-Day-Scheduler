// To grab current date 
let currentTime = luxon.DateTime.local();
  $("#currentDay").text(luxon.DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }));

function checkTime(){
  var timeNow= currentTime.hour
  console.log(timeNow)

  $(".time-block").each(function(){
  var blockHour = parseInt($(this).attr("id"))
  
  // console.log(blockHour)
  if(blockHour < timeNow){
    $(this).addClass("past")
  }else if (blockHour === timeNow){
    $(this).removeClass("past")
    $(this).removeClass("future")
    $(this).addClass("present")
  } else {
    $(this).removeClass("past")
    $(this).removeClass("present")
    $(this).addClass("future")
  }
})
  
}

checkTime()

// click saved button to store in local storage

var saveBtn = $(".saveBtn")
$(".saveBtn").on("click", function(){
  console.log("I cliked the button!")
  
  let timeTable = $(this).siblings(".hour").text();
  let text= $(this).siblings("#textarea").val();

  localStorage.setItem(timeTable, text)
})



/*WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```*/



