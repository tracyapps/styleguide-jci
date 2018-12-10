---
post_title: 'Post Entities (Asynchronously)'
layout: api_doc
published: true
---
# Post Entities (Asynchronously)

This endpoint is used to create and update entities to ER API in asynchronous fashion. List of entities are provided in the body of the POST request and partition key - ercollectionid should be provided as part of header. As a response application user will get url to track the status of the request along with tracking id.

### Note
Once entities created when update entities(full object update), it restricts some below properties to change.
entityType,brickEntityName, brickEntitySubType, brickEntityType.

## URL

`https://{{HOST}}/apollo/er/entities?v={version}`

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
|**Authorization** <br>*required*|Bearer {access_token}|String |
|**Content-Type** <br>*required*|application/json| String|
|**ercollectionid** <br>*required*|{ercollectionid}| String|
|**async** <br>*required*|true|String|

## Example

### Request

```shell
curl -X POST \
  'https://{{HOST}}/apollo/er/entities?v=1.1' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -H 'ercollectionid: TestER-DVDocs' \
  -H 'async: true'\
  -d '{"entityType": "BRICK_0_4__Building", "entityName": "JCI 507 Michigan Street Milwaukee Building B2", "id": "JCI-507-B2"}'
```

### Response

```json
{
    "status": {
        "message": "Request 794973ad-9486-4b46-bb31-93f0fe8b2e8e is processed and can be tracked by URL https://{{HOST}}/apollo/status/logs?transactionid=9b73820e-47ec-4c05-956f-ed674d4798a7",
        "code": "202"
    },
    "transactionId": "9b73820e-47ec-4c05-956f-ed674d4798a7",
    "data": {}
}

```
## Errors

|Error|Description|
|---|---|
|400|Bad Request – The request could not be understood by the server due to malformed syntax.|
|403|The request can not proceed if ercollectionid is not registered or does not have any logs in ACL library.|
|413|Payload too large - If number of entities supplied exceeds maximum allowed limit of 10000|
