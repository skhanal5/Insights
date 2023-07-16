# aws-playground
An assortment of things that I have built using various AWS services for learning purposes

# Lambda-SQS
A basic introduction to SQS. 
So far it does the following:
- Uses Lambda to connect to an existing SQS client via boto3
- Invokes SendMessage, DeleteMessage, RetrieveMessage, and ChangeVisibilityTimeout API calls to SQS client and responds with those call's respective responses

Note: for Lambda to connect to SQS and invoke these API calls, it will need the proper IAM policies. I'll leave this up to you to configure.

Events must be formatted in the following manner for the handler to work as intended:
- SendMessage event:
```
  {
    "event": "send"
    "message": <String formatted message>
  }
```
- DeleteMessage event:
```
  {
    "event": "delete"
    "receiptHandle": <String formatted handle>
  }
```
- ReceiveMessage event:
```
  {
    "event": "receive"
  }
```
- ChangeVisibilityTimeout event:
```
  {
    "event": "change"
    "receiptHandle":  <String formatted handle>
    "timeout": <int corresponding to timeout duration>
  }
```
