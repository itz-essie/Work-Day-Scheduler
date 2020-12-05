$("#currentDay").text(luxon.DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }));
