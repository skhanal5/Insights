import json
import boto3

def lambda_handler(event, context):
    
    dynamodb = boto3.resource('dynamodb')
    table = dynamodb.Table('inventory')
    body = ""
       
    method = event['requestContext']['http']['method']
    route = event['requestContext']['http']['path']
    id = event['pathParameters']['id']
    price = event['queryStringParameters']['price']
    quantity = event['queryStringParameters']['quantity']
    
    if method == "GET":
        
        response = table.get_item(
            Key={
                'id': id
            }
        )
        body = response['item']
        
    elif method == "POST":
        
        table.put_item(
            Item={
                'id': id,
                'price': price,
                'quantity': quantity,
            }   
        )
        body = f"Added {id} with price: {price} and quantity: {quantity} to the table."

    elif method == "PUT":
        
        table.update_item(
            Item={
                'id': id,
                'price': price,
                'quantity': quantity
            }
        )
        body = f"Updated {id} with price: {price} and quantity: {quantity} to the table."
        
    elif method == "DELETE":
        
        table.delete_item(
            Key={
                'id': id
            }
        )
        body = f"Deleted {id} from the table"
        
   
    # TODO implement
    return {
        'statusCode': 200,
        'body': json.dumps(body)
    }
