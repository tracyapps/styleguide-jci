---
post_title: 'Post Relationships (Asynchronously)'
layout: api_doc
published: true
---
# End Point Name
Post Relationships (Asynchronously)

This endpoint is used to create and update relationships to ER Service API in asynchronous fashion. List of relationships are provided in the body of the POST request and partition key - ercollectionid should be provided as part of header body. As a response application user will get url to track the status of the request.

### Note
Once relationships created when update relationships(full object update), it restricts some below properties to change.
relationshipType, brickDestinationEntitySubType,brickDestinationEntityType, brickRelationshipName, brickRelationshipType, brickSourceEntitySubType, brickSourceEntityType.

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

### Example

### Request

```json
[
  {
    "id": "27eb950c-7933-44fd-8329-dd1dfd416b81",
    "sourceEntityId": "f5d74bda-0900-4980-8ba9-dbb1a4479de4",
    "destinationEntityId": "Device:Frictionless1",
    "relationshipName": "GooglePlex contains Middle Door",
    "relationshipType": "facdemo_contains"
  }
]

```

### Response

```json
{
    "result": 1,
    "message": "Request a5ee4c6c-02ca-4f3b-8e73-fbc9e0b7b247 is processed and can be tracked by URL https://datad-erservice-api.azurewebsites.net/relationships/erstatus?RequestId=a5ee4c6c-02ca-4f3b-8e73-fbc9e0b7b247",
    "version": null,
    "errorInfo": []
}
```

## Errors

|Error|Description|
|---|---|
|400|Bad Request – The request could not be understood by the server due to malformed syntax.|
|403|The request can not proceed if ercollectionid is not registered or does not have any logs in ACL library.|
|413|Payload too large - If number of relationships supplied exceeds maximum allowed limit of 10000|
