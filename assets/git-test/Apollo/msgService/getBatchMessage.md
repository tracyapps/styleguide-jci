---
post_title: 'Get batch of messages'
layout: api_doc
 published: true
---
# Get Batch of Messages

## URL

`https://{{HOST}}/udp/topic/message?topicName={topicName}&batchSize=10&page=1&size=1`


## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
| **topicName** <br>*required*|Topic from which messages are to be read|/udp/topic/message?topicName=Streaming|String|
| **batchSize** <br>*required*|Max number of messages to be read |/udp/topic/message?batchSize=1|String|
| **page** <br>*required*|Page number|/udp/topic/message?page=1|String|
| **size** <br>*required*|Page size|/udp/topic/message?size=1|String|


## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Content-Type** <br>*required*|application/json|Content Type|
|**Authentication** <br>*required*|Bearer {access_token}|IMS access token |

## Example

### Request

```shell
curl -X GET \
  'https://{{HOST}}/udp/topic/message?topicName=temperature&batchSize=1&page=1&size=1' \
  -H 'Authorization: Bearer {access_token}' \
  -H 'Content-Type: application/json'
```



### Response

```json
[
    "{\r\n  \"messageType\" : \"Fire_Alarm\",\r\n  \"id\" : \"sample_id\"\r\n}",
    "{\r\n  \"messageType\" : \"Fire_Alarm\",\r\n  \"id\" : \"sample_id\"\r\n}",
    "{\r\n  \"messageType\" : \"Fire_Alarm\",\r\n  \"id\" : \"sample_id\"\r\n}"
] 
```

## Errors

|Code |Description|
|---|---|
|403| The request can not be processed if token is not valid or expired. |
|500|Any other error e.g. DB operation failed	| 

## Response Body Parameters

|Name|Description|Schema|
|---|---|---|
|message         |completed or bad request message|String |
|status    		 |success 			  |String|


