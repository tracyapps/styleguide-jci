---
post_title: 'Un-register an user to topic'
layout: api_doc
published: true
---
# Un-register an user to topic

This endpoint is used to un-register an user to topic.

## URL

`https://{{HOST}}/udp/unregister/topic`


## Method

<div class="post">POST</div>

## Required IMS Scopes

* apollo_admin

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Content-Type** <br>*required*|application/json|Content Type|
|**Authentication** <br>*required*|Bearer {access_token}|IMS access token |

## Request Body Parameters

|Name|Description|Type|
|---|---|---|
| **userId** <br>*required*|user id |String|
| **principle** <br>*required*|App, User or Device|String|
| **userRelation** <br>*required*|list of type of relation between topic and user|String|
| **topicRelation** <br>*required*|relation type|String|
| **topicName** <br>*required*|topic name to which relation is created|String|

## Example

### Request

```shell
curl -X POST \
  'https://{{HOST}}/udp/unregister/topic' \
  -H 'Authorization: Bearer {access_token}' \
  -H 'Content-Type: application/json' \
  -d '
{
    "userId":"Apollo.testUser1",
    "principle": "User",
    "userRelation": [
        {
            "topicRelation": "subscriber",
            "topicName": "temperature"
        }
    ]
}'

```

### Response

```json
{
    "status": "Success",
    "message": "User Un-Registered Successfully"
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

|Name|Description|Schema|
|---|---|---|
|message         |completed or bad request message|String |
|status    		 |success 			  |String|


