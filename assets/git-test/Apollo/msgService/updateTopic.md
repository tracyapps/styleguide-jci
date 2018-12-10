---
post_title: 'Update details of a specific topic'
layout: api_doc
published: true
---
# Update details of a specific topic

This endpoint is used to update details of a specific topic.

## URL

`https://{{HOST}}/udp/topic/{topicName}`

## Method

<div class="put">PUT</div>

## Required IMS Scopes

* apollo_admin


## URL Path Variable

|Name|Description|Example|Type|
|---|---|---|---|
|**topicName** <br>*required*|topic name|/topic/temperature|string|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Content-Type** <br>*required*|application/json|Content Type|
|**Authentication** <br>*required*|Bearer {access_token}|IMS access token|

## Example

###  Request

```shell
curl -X PUT \
  'https://{{HOST}}/udp/topic/temperature' \
  -H 'Authorization: Bearer {access_token}' \
  -H 'Content-Type: application/json' \
  -d '{
    "topicName":"temperature",
    "partitions":4,
    "replications":1,
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
    "message": "Topic successfully updated"
}
```
## Errors

|Code|Description|
|---|---|
| 400| The request could not be understood by the server due to malformed syntax. |
| 403| The request can not be processed if token is not valid or expired. |

