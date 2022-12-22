var FCM = require('fcm-node');

var serverKey = '';

var fcm = new FCM(serverKey);

var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
    to:'',
     
   notification: {
        title: 'Msg',
        body: 'test de prueba'
    },
     data: {  
       'priotity': 1,
         'title': 'test',
         'message': 'test',
         'messagePopup': '',
      'messagetext': 'test',
         "ledColor": [0, 0, 0, 255],
      "summaryText": "Tiene %n% notificaciones",
         "badge": 1,
         "vibrationPattern": [1000, 500]
      } 

};


fcm.send(message, function(err, response){
    if (err) {
        console.log("Something has gone wrong!", err);
    } else {
        console.log("Successfully sent with response: ", response);
    }
});