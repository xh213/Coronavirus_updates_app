//import * as AWS from 'aws-sdk';

//function sendMail(userinput){
  // Load the AWS SDK for Node.js
  var AWS = require('aws-sdk');
  // Set region
  //const credentials = new AWS.SharedIniFileCredentials({profile: 'sns_profile'});
  AWS.config.update({
    accessKeyId: 'AKIAQX5HSACZOJEC6OXC',
    secretAccessKey: '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',
    region: 'us-east-2'
  });
  const sns = new AWS.SNS();

  // AWS.config.update({ aws_access_key_id: 'AKIAQX5HSACZOJEC6OXC', aws_secret_access_key: '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', region: 'us-east-2'});

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
