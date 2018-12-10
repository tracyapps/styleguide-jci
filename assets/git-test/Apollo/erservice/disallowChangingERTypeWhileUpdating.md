---
post_title: 'POST ER service (full object update)'
layout: api_doc
published: true
---
# POST ER service (full object update)
When update entities/relationships, it restricts some below properties to change.
entityType,brickEntityName, brickEntitySubType, brickEntityType,relationshipType, brickDestinationEntitySubType,brickDestinationEntityType, brickRelationshipName, brickRelationshipType, brickSourceEntitySubType, brickSourceEntityType.
## URL

https://{{HOST}}/apollo/entities?v=1.1
https://{{HOST}}/apollo/relationships?v=1.1

## Method

<div class="post">POST</div>

## Required IMS Scopes

* apollo_write

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}| String|
|**Content-Type** <br>*required*|application/json| String|
|**async** <br>*required*|false|Boolean|
|**ercollectionid** <br>*required*|{ercollectionid}|String|

## Example

### Request Entities

```shell

curl -XPOST -H 'Authorization: Bearer {access_token}' -H 'Content-Type: application/json' -H 'async: false' -H 'ercollectionid: {ercollectionid}' -H "Content-type: application/json" -d '[
	{
        "entityType":"BRICK_0_4__Floor",
	    "entityName":"Building1",
	    "id":"test"
	}
]' 'https://{{HOST}}/apollo/entities?v=1.1'

```
```json

[
	{
        "entityType":"BRICK_0_4__Floor",
	    "entityName":"Building1",
	    "id":"test"
	}
]

```
### Response Entities

```json
{
    "status": {
        "message": "Total number of Entities Upserted:  0.",
        "code": "207"
    },
    "transactionId": "229e55fa-7947-4d74-be9f-3d0c5d8176a6",
    "data": {
        "responses": {
            "failure": [
                {
                    "id": "test",
                    "message": "Restricted property entityType is not allowed to change",
                    "tracker": "http://localhost:44338/apollo/status/logs?entityid=test&transactionid=229e55fa-7947-4d74-be9f-3d0c5d8176a6"
                }
            ]
        }
    }
}

```
### Request Relationship

```shell
curl -XPOST -H 'Authorization: Bearer {access_token}' -H 'Content-Type: application/json' -H 'async: false' -H 'ercollectionid: {ercollectionid}' -H "Content-type: application/json" -d '[
  {
 "id":"SampleNotAllowedToChange",
 "relationshipName":"Relationship between Building SampleTest1 and Floor SampleTest2",
 "relationshipType":"BRICK_0_4__feeds",
 "sourceEntityId":"SampleTest1",
 "destinationEntityId":"SampleTest2"
  }
]' 'https://{{HOST}}/apollo/relationships?v=1.1'

```
```json
[
  {
 "id":"SampleNotAllowedToChange",
 "relationshipName":"Relationship between Building SampleTest1 and Floor SampleTest2",
 "relationshipType":"BRICK_0_4__feeds",
 "sourceEntityId":"SampleTest1",
 "destinationEntityId":"SampleTest2"
  }
]

```
### Response Relationships

```json
{
    "status": {
        "message": "Total number of Relationships Upserted:  0.",
        "code": "207"
    },
    "transactionId": "3f248bf5-8885-4786-b909-25ca12828805",
    "data": {
        "responses": {
            "failure": [
                {
                    "id": "SampleNotAllowedToChange",
                    "message": "Restricted property relationshipType is not allowed to change",
                    "tracker": "http://localhost:44338/apollo/status/logs?relationshipid=SampleNotAllowedToChange&transactionid=3f248bf5-8885-4786-b909-25ca12828805"
                }
            ]
        }
    }
}


```

## Errors

|Error|Description|
|---|---|
|400|Bad Request – The request could not be understood by the server due to malformed syntax.|
|403|The request can not proceed if ercollectionid is not registered or does not have any logs in ACL library|