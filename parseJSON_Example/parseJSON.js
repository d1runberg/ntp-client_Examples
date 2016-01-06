var ntpClient = require('ntp-client');

ntpClient.getNetworkTime("pool.ntp.org", 123, function(err, date) {
    if(err) {
        console.error(err);
        return;
    }
   var str = String(date);

   var dateObj = {
      weekDay: str.substr(0,3),
      month: str.substr(4,3),
      day: str.substr(8,2),
      year: str.substr(11,4),
      time: str.substr(17,8),
      timeZone: str.substr(25,str.length-25)
   }


    console.log("Current time : ");
    console.log(dateObj); // Mon Jul 08 2013 21:31:31 GMT+0200 (Paris, Madrid (heure d’été))
});
