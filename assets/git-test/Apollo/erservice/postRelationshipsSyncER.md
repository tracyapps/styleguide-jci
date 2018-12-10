---
post_title: 'Post Relationships (Synchronously)'
layout: api_doc
published: true
---
# Post Relationships (Synchronously)

This endpoint is used to create and update relationships to ER Service API based on existing relationship type schema. List of relationship are provided in the body of the POST request and partition key - ercollectionid should be provided as part of header body.

### Note
Once relationships created when update relationships(full object update), it restricts some below properties to change.
relationshipType, brickDestinationEntitySubType,brickDestinationEntityType, brickRelationshipName, brickRelationshipType, brickSourceEntitySubType, brickSourceEntityType.

## URL

`https://{{HOST}}/apollo/er/relationships?v={version}`

## Method

<div class="post">POST</div>

## Required IMS Scopes

* apollo_write

## Versions Supported
1.0 (Default)
1.1

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**v** <br>*optional*|Service Version|/entitytypes/{entitytype}/entities?v=1.1|String|
|**includeSystemData** <br>*optional*|Flag to include system data (default false)|/entitytypes/{entityType}/entities?includeSystemData=true|Boolean|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|String|
|**Content-Type** <br>*required*|application/json|String|
|**ercollectionid** <br>*required*|{ercollectionid}|String|
|**async** <br>*required*|false|String|

## Example

### Request

```json

curl -X POST \
  'https://{{HOST}}/apollo/er/relationships?v=1.1' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -H 'ercollectionid: TestER-DVDocs' \
  -H 'async: false'\
  -d '{ 
		"id": "JCI-507-B1-hasPart-JCI-507-B1-F2", "relationshipName": "JCI-507-B1 hasPart JCI-507-B1-F2", 
		"relationshipType": "BRICK_0_4__hasPart_Location_Location", "sourceEntityId": "JCI-507-B1", "destinationEntityId": "JCI-507-B1-F2" 
	}'

```

### Response

```json
{
    "status": {
        "message": "Total number of Relationships Upserted:  1.",
        "code": "201"
    },
    "transactionId": "e82b6bd8-c2e1-44b0-9c68-7aa245cd0d17",
    "data": {}
}

```

## Errors

|Error|Description|
|---|---|
|400|Bad Request – The request could not be understood by the server due to malformed syntax.|
|403|The request can not proceed if ercollectionid is not registered or does not have any logs in ACL library.|
|413|Payload too large - If number of relationship supplied exceeds maximum allowed limit of 100|
