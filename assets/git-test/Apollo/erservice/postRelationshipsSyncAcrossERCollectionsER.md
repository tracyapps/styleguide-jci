---
post_title: 'POST Relationships Sync to ERService API across ERCollections (Synchronously)'
layout: api_doc
published: true
---
# POST Relationships Sync to ERService API across ERCollections (Synchronously)

This endpoint is used to create and update relationships to ER Service API across ERCollection ids based on existing relationship type schema. List of relationship are provided in the body of the POST request and partition key - ercollectionid can be provided as part of header body.
In relationship object, user needs to add 2 additional properties (sourceERCollectionId, destinationERCollectionId). In this, sourceERCollectionId and the header’s ercollectionid are same and destinationERCollectionId is different.

## URL

`https://{{HOST}}/apollo/er/relationships`

## Method

<div class="post">POST</div>

## Required IMS Scopes

* apollo_write

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|String|
|**Content-Type** <br>*required*|application/json|String|
|**ercollectionid** <br>*required*|{ercollectionid}|String|
|**async** <br>*required*|false|String|

## Example

### Request

```shell
curl -X POST \
  'https://{{HOST}}/apollo/er/relationships' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -H 'ercollectionid: {ercollectionid}' \
  -H 'async: false' \
  -d '[
	  {
		"id": "5091e806-39b1-11e8-ae2c-c8e0eb18b031",
		"sourceEntityId": "ac4d999e-3798-11e8-a1af-c8e0eb18b031",
		"destinationEntityId": "ac4d8cd8-3798-11e8-a527-c8e0eb18b031",    
		"relationshipName": "test",
		"relationshipType": "BRICK_0_4__isFedBy_Equipment_Equipment",
		"sourceERCollectionId": "august_14_81",
		"destinationERCollectionId": "august_14_8"
	  }
	]'
```	

### Response

```json
{
    "status": {
        "message": "Total number of Relationships Upserted:  1.",
        "code": "207"
    },
    "transactionId": "ab04efad-7f5d-4043-8a0a-22d980209f42",
    "data": {
        "responses": {
            "success": [
                {
                    "id": "5091e806-39b1-11e8-ae2c-c8e0eb18b031",
                    "message": "Relationship upserted successfully",
                    "tracker": "http://ctp-api.digitalvault.cloud/apollo/status/logs?relationshipid=5091e806-39b1-11e8-ae2c-c8e0eb18b031&transactionid=ab04efad-7f5d-4043-8a0a-22d980209f42"
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
|403|The request can not proceed if ercollectionid is not registered or does not have any logs in ACL library.|
|413|Payload too large - If number of relationship supplied exceeds maximum allowed limit of 100|
