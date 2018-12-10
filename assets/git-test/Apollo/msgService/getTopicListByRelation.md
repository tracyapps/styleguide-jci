---
post_title: 'Get list of topics having relationship'
layout: api_doc
published: true
---
# Get list of topics having relationship

This endpoint is used to get list of topics having relationship.

## URL

`https://{{HOST}}/udp/topic/relation/{relation}`


## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read


## URL Path Variable

|Name|Description|Example|Type|
|---|---|---|---|
|**relation** <br>*required*|publisher or subscriber|/udp/topic/relation/subscriber|String|


## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authentication** <br>*required*|Bearer {access_token}|IMS access token |

## Example

### Request

```shell
curl -X GET \
  'https://{{HOST}}/udp/topic/relation/subscriber' \
  -H 'Authorization: Bearer {access_token}'
```


### Response

```json
[
    {
        "userId": "Apollo.testUser1",
        "principle": "Apollo.testUser1",
        "topicRelation": "SUBSCRIBER",
        "topicName": "temperature"
    },
    {
        "userId": "Apollo.testUser1",
        "principle": "Apollo.testUser1",
        "topicRelation": "SUBSCRIBER",
        "topicName": "fire"
    }
]	
```

## Errors
|Code|Description|
|---|---|
|403| The request can not be processed if token is not valid or expired. |
|500|Any other error e.g. DB operation failed	| 


## Response Body Parameters

|Name           |Description                              |Schema|
|---|---|---|
|userId         |user id for which the relation is present|String|
|principle    	|App or user or Device 			          |String|
|topicRelation  |publisher or subscriber				  |String|
|topicName    	|topic for which relation is present 	  |String|


