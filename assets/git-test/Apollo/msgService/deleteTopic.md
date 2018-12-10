---
post_title: 'Delete a topic'
layout: api_doc
published: true
---
# Delete a topic 

This endpoint is used to delete a topic.


## URL

`https://{{HOST}}/udp/topic/{topicName}`

## Method

<div class="delete">DELETE</div>

## Required IMS Scopes

* apollo_admin


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
curl -X DELETE \
  'https://{{HOST}}/udp/topic/temperature' \
  -H 'Authorization: Bearer {access_token}' \
  -H 'Content-Type: application/json'
```


### Response

```json
{
  "message": "Topic deleted successfully",
  "status": "Success"
}
```

## Errors

|Code|Description|
|---|---|
| 400| The request could not be understood by the server due to malformed syntax. |
| 403| The request can not be processed if token is not valid or expired. |

