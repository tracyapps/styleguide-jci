---
post_title: 'Get the topic details'
layout: api_doc
published: true
---
# Get the topic details 

This endpoint is used to get the topic details.


## URL

`https://{{HOST}}/udp/topic/{topicName}`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read


## URL Path Variable

|Name|Description|Example|Type|
|---|---|---|---|
|**topicName** <br>*required*|topic name|/topic/temperature|string|


## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authentication** <br>*required*|Bearer {access_token}|IMS access token |

## Example

### Request

```shell
curl -X GET \
  'https://{{HOST}}/udp/topic/temperature' \
  -H 'Authorization: Bearer {access_token}'
```


### Response

```json
{
    "topicName": "temperature",
    "partitions": 1,
    "replications": 1,
    "messagetypeIds": [
        "temperature_sensor",
		"high_temperature_alarm"
    ],
    "createdBy": "Apollo.testUser1",
    "updatedBy": "Apollo.testUser1",
    "isActive": "true"
}
```

## Errors

|Code|Description|
|---|---|
| 400| The request could not be understood by the server due to malformed syntax. |
| 403| The request can not be processed if token is not valid or expired. |

