---
post_title: 'Post message'
layout: api_doc
published: true
---
# Post message

This endpoint is used to post message(s).

## URL

`https://{{HOST}}/udp/topic/message`


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

|Name|Description|Type|
|---|---|---|
| **messageType** <br>*required*|id of the messageType against which it is being posted| String|

## Example

### Request

```shell
curl -X POST \
  'https://{{HOST}}/udp/topic/message' \
  -H 'Authorization: Bearer {access_token}' \
  -H 'Content-Type: application/json' \
  -H 'topic: temperature' \
  -d '[
  {
    "messageType": "Fire_Alarm",
    "id": "sample_id"
  },
  {
    "messageType": "Fire_Alarm",
    "id": "sample_id"
  },
  {
    "messageType": "Fire_Alarm",
    "id": "sample_id"
  }
]'

```

### Response

```json
{
    "status": "Send message completed",
    "message": "Total message(s): 3, success: 3 , failed: 0",
    "failed": []
} 
```

## Errors


|Code|Description|
|---|---|
|400| The request could not be understood by the server due to malformed syntax.|
|422| Invalid input|
|403| The request can not be processed if token is not valid or expired.|
|500| Any other error e.g. DB operation failed| 
|206| In case of partial failure| 



## Response Body Parameters

|Name|Description|Schema|
|---|---|---|
|message         |completed or bad request message|String |
|status    		 |success 			  |String|


