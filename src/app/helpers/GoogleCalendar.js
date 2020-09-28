import config from "./config.json";
import {DateTime} from "luxon";

class GoogleCalendar{
  static load(){
    return new Promise(function(resolve, reject){
      window.gapi.load('client:auth2', function(){
        window.gapi.client.init({
          apiKey: config.API_KEY,
          clientId: config.CLIENT_ID,
          discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
          scope:"https://www.googleapis.com/auth/calendar"
        }).then(()=>{
          resolve(true);
        }).catch(()=>{
          reject(false);
        })
      })
    })
  }
  
  static getStartEndDates(start, end, day){
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
  
  static sendEventToCalendar(eventData, description, email){
    
    return new Promise(function(resolve, reject){
      
      let [startDate, endDate] = GoogleCalendar.getStartEndDates(eventData.start, eventData.end, eventData.day);
      
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
}

export default GoogleCalendar;