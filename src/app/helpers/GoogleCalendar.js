import config from "./config.json";

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
  
  static testCalendar(){
    var event = {
      'summary': 'Google I/O 2015',
      'location': '800 Howard St., San Francisco, CA 94103',
      'description': 'A chance to hear more about Google\'s developer products.',
      'start': {
        'dateTime': '2020-09-27T09:00:00-07:00',
        'timeZone': 'America/Los_Angeles'
      },
      'end': {
        'dateTime': '2020-09-27T17:00:00-07:00',
        'timeZone': 'America/Los_Angeles'
      },
      'recurrence': [
        'RRULE:FREQ=DAILY;COUNT=2'
      ],
      'attendees': [
        {'email': 'lpage@example.com'},
        {'email': 'sbrin@example.com'}
      ],
      'reminders': {
        'useDefault': false,
        'overrides': [
          {'method': 'email', 'minutes': 24 * 60},
          {'method': 'popup', 'minutes': 10}
        ]
      }
    };

    var request = window.gapi.client.calendar.events.insert({
      'calendarId': 'stevenndegwa4@gmail.com',
      'resource': event
    });

    request.execute(function(event) {
      console.log(event)
    });

  }
  
  addLesson(email, start, end){
    
  }
}

export default GoogleCalendar;