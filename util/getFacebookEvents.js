var rp = require('request-promise');
var fs = require('fs');

function update_server() {
  var page_id = 1776675752608125;
  var access_token = `EAACEdEose0cBAIgyWCUSD8IrXieKZBdQfN58KmiOIYp49HnTdmpwbbRdALZCZAPY6ZAv2fABWHfgsJpZAEu2LdNjFXZCTngWnD5i3ZAnIZAGuRLSLtLXiRenTuqmOAD3NdZCIfpZC8tAja2OTcvwXPEpREOmAjfgzeJkzRbLobjc1PTHXZBzTMe8t2wvrzA34MfXjo715uKXDaE9QZDZD`;

  var options = {
      uri: `https://graph.facebook.com/v2.3/${page_id}`,
      qs: {
        access_token: access_token,
        fields: 'events'
      },
      json: true
  };
  console.log("options = ", options);

  rp(options).then(function (body) {
        let events = [];
        console.log("body events length = ", Object.keys(body.events).length );
        for(let i = 0; i < Object.keys(body.events).length; i++){
          console.log("EVENTS HERE ___________ " , body.events.data[i]);
          let tempEvent = {
            name: body.events.data[i].name,
            description: body.events.data[i].description,
            start_time: body.events.data[i].start_time,
            end_time: body.events.data[i].end_time,
            location: body.events.data[i].place.name
          };
          // console.log("pushing tempevent_____________________________________________ = " , tempEvent);
          events.push(tempEvent);
        }
        fs.writeFileSync('../public/jsons/events.json', JSON.stringify(events), function(err){
          console.log("error when writing: errror");
        } );
      })
      .catch(function (err) {
          console.log("failed post", err);
      });
}

update_server();
