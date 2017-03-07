var AWS = require('aws-sdk');
var config = {apiVersion: '2016-11-15', region: 'ap-northeast-1'};
var ec2 = new AWS.EC2(config);

var fs = require('fs');
var shell = fs.readFileSync('./target_install.sh').toString();

var params = {
  ImageId: 'ami-1bfdb67c', /* required */
  MaxCount: 1, /* required */
  MinCount: 1, /* required */
  AdditionalInfo: 'AdditionalInfo here',
  InstanceInitiatedShutdownBehavior: 'stop',
  InstanceType: 't2.micro',
  KeyName: 'my_mac_public',
  SecurityGroupIds: [
    'sg-e2cb5885',
    /* more items */
  ],
  UserData: new Buffer(shell).toString('base64'),

  Monitoring: {
    Enabled: false/* required */
  },
};
ec2.runInstances(params, function(err, data) {
  if (err) {
    console.log(err, err.stack); // an error occurred
  } else {
    console.log(JSON.stringify(data));   
  }
});