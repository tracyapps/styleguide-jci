---
post_title: 'Create topic'
layout: api_doc
published: true
---
# Create topic

## URL

`https://{{HOST}}/udp/topic`

## Method

<div class="post">POST</div>

## Required IMS Scopes

* apollo_admin


## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Content-Type** <br>*required*|application/json|Content Type|
|**Authentication** <br>*required*|Bearer {access_token}|IMS access token|

## Request Body Parameters

|Name				                |Description					  		 		 |Type    |
|---|---|---|
| **topicName** <br>*required*   	|topic name 									 |String  |
| **partitions** <br>*required*  	|Number of partitions required for topic			 |Integer |
| **replications** <br>*required*   |Number of partitions required for topic			 |Integer |
| **messagetypeIds** <br>*required* |List of message types to which topic should be associated with    |Array   |

## Example

### Request

```shell
curl -X POST \
  https://{{HOST}}/udp/topic \
  -H 'Authorization: Bearer {access_token}' \
  -H 'Content-Type: application/json' \
  -d '{
  "topicName": "temperature",
  "partitions": 2,
  "replications": 1,
  "messagetypeIds": [
		"temperature_sensor",
		"high_temperature_alarm"
    ]
}'

```

### Response

```json
{
    "status": "Success",
    "message": "Topic successfully created"
}
```

## Errors
|Code|Description|
|---|---|
|400|The request could not be understood by the server due to malformed syntax. |
|422| Invalid input   	   |
|403| The request can not be processed if token is not valid or expired. |
|500|Any other error e.g. DB operation failed	| 


## Response Body Parameters

|Name|Description|Type|
|---|---|---|
|message         |completed or bad request message|String |
|status    		 |success 			  |String|


