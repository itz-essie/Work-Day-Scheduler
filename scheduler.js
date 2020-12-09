$("#currentDay").text(luxon.DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }));

let currentTime = luxon.DateTime.local({
    hour: "2-digit",
  });
  $("#currentDay").text(luxon.DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }));



function timeNow(){
    let fixedHour = parseInt(moment().format("H"));
    //add color to each time block depending on the time
$(".time-block").each(function(){
    let presentHour = parseInt($(this).attr("id"));
  
    if(fixedHour > presentHour){
      $(this).addClass("past");
    } else if (presentHour === fixedHour){
      $(this).addClass("present");
    } else { (presentHour < fixedHour)
      $(this).addClass("future");
    }
    });
    }; 



/*WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```*/



