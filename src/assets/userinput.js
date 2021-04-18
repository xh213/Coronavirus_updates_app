import * as AWS from 'aws-sdk';

//function sendMail(userinput){
  // Load the AWS SDK for Node.js
  //var AWS = require('aws-sdk');
  // Set region
  const credentials = new AWS.SharedIniFileCredentials({profile: 'sns_profile'});
  const sns = new AWS.SNS({credentials: credentials});

  AWS.config.update({ credentials: credentials, region: 'us-east-2'});

  // Create subscribe/email parameters
  var params = {
    Protocol: 'EMAIL', /* required */
    TopicArn: 'arn:aws:sns:us-east-2:051354140850:CoronaVirusApp', /* required */
    //Endpoint: userinput
    Endpoint: "nhbamemberaccess@gmail.com"
  };

  // Create promise and SNS service object
  var subscribePromise = new AWS.SNS({apiVersion: '2010-03-31'}).subscribe(params).promise();

  // Handle promise's fulfilled/rejected states
  subscribePromise.then(
    function(data) {
      console.log("Subscription ARN is " + data.SubscriptionArn);
    }).catch(
      function(err) {
      console.error(err, err.stack);
    });
//}
