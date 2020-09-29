var window = self;

importScripts("https://cdn.jsdelivr.net/npm/luxon@1.25.0/build/global/luxon.min.js");

function getStartEndDates(start, end, day){
  const DateTime = luxon.DateTime;

  let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
  
  let date = DateTime.local().setZone('Africa/Nairobi'),
    diff = days.findIndex((d)=>(d === day)) - date.weekday;
    
  if(diff > 0){//Move to the day in this week
    date = date.plus({days:diff}).set({minute:0, second:0, millisecond:0});
  }else{//Move to next week
    date = date.plus({days:(7 + diff)}).set({minute:0, second:0, millisecond:0});
  }
    
  let startDate = date.set({hour:parseInt(start)}),
      endDate = date.set({hour:parseInt(end)});
    
  return [startDate, endDate];
}

function sendEventToCalendar(eventData, description, email){
  
  return new Promise(function(resolve, reject){
    let [startDate, endDate] = getStartEndDates(eventData.start, eventData.end, eventData.day);
    
    let event = {
      summary: eventData.subject,
      location: eventData.class,
      description: description,
      start: {
        dateTime: startDate,
        timeZone: 'Africa/Nairobi'
      },
      end: {
        dateTime: endDate,
        timeZone: 'Africa/Nairobi'
      },
      recurrence: [
        'RRULE:FREQ=WEEKLY'
      ]
    };
    
    let eventPayload = JSON.stringify(event);
    
    var request = window.gapi.client.calendar.events.insert({
      'calendarId': email,
      'resource': eventPayload
    });

    request.execute(function(event) {
      
      resolve(event);
      
    }, function(error){
      
      reject(error);
      
    });
  })

}


self.addEventListener("message", async function(e){
  try{
    
    const data = JSON.parse(e.data);
    
    const response = await sendEventToCalendar(data.event, data.description, data.email);
  
    self.postMessage(JSON.stringify(response));
    
  }catch(error){
    console.log(error);
    const data = {error:true, message:"Error adding event"};
    
    self.postMessage(JSON.stringify(data));
    
  }
})