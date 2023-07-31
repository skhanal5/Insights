# App Tracker (Project)

An intuitive job application dashboard that keeps track of all of the jobs that you have applied for. Each application contains metrics and information like the date you have applied, the link to the application, the application status, etc. The underlying backend will be using AWS serverless and cloud technology (TBD which specific services).

## Features
- Query job applications by company, title
- Filter job applications by date applied, status, company
- Add job applications
- Update job status (applied, ghosted, rejected, interview, offer)
- Delete job applications

# AWS Building Blocks

The integrations below are different AWS integrations/architectures that will be the building blocks for the backend of the application

## Lambda-SQS

An introduction to SQS Standard Queues using a Python based Lambda function to populate the queue using boto3 SDK. The lambda function is connected to the SQS queue with basic permissions in its resource policy that allow for CRUD message operations.

## Lambda-API Gateway REST API

Constructed a REST-API using API Gateway and a Lambda function as a trigger. This is a proxied integration meaning all requests to the designated endpoint in API Gateway will be forwarded to one Lambda function and the Lambda function is responsible for parsing the event contents to output the desired behavior. Utilizes Python to produce the responses.

## DynamoDB-Lambda-API Gateway CRUD REST API

Designed a REST-API using API Gateway and a Lambda function as a trigger like the example above. However, this time I used the boto3 SDK to perform various CRUD operations on a DynamoDB table. 
