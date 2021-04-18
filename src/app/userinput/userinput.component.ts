import { Component, OnInit } from '@angular/core';
//import userinput from './userinput.js';
//import * as AWS from 'aws-sdk';
//import AWS from 'aws-sdk';

//var addr = new userinput()

declare function sendMail(userinput:string):any;


@Component({
  selector: 'app-userinput',
  templateUrl: './userinput.component.html',
  styleUrls: ['./userinput.component.css']
})

export class UserinputComponent implements OnInit {

  constructor(
  ) {}

  ngOnInit(): void {
  }

  onSubmit(inputEmail: string): void {
    // Process checkout data here
    console.log('email: ', inputEmail);
    sendMail(inputEmail);
    //sendMail(inputEmail);
  }

  // sendMail(inputEmail: string): void{
  //   console.log('email: ', inputEmail);
  //   // Load the AWS SDK for Node.js
  //   //var AWS = require('aws-sdk');
  //   // Set region
  //   const credentials = new AWS.SharedIniFileCredentials({profile: 'sns_profile'});
  //   const sns = new AWS.SNS({credentials: credentials});

  //   AWS.config.update({ credentials: credentials, region: 'us-east-2'});

  //   // Create subscribe/email parameters
  //   var params = {
  //     Protocol: 'EMAIL', /* required */
  //     TopicArn: 'arn:aws:sns:us-east-2:051354140850:CoronaVirusApp', /* required */
  //     Endpoint: inputEmail
  //     //Endpoint: "nhbamemberaccess@gmail.com"
  //   };

  //   // Create promise and SNS service object
  //   var subscribePromise = new AWS.SNS({apiVersion: '2010-03-31'}).subscribe(params).promise();

  //   // Handle promise's fulfilled/rejected states
  //   subscribePromise.then(
  //     function(data) {
  //       console.log("Subscription ARN is " + data.SubscriptionArn);
  //     }).catch(
  //       function(err) {
  //       console.error(err, err.stack);
  //     });
  // }

}
