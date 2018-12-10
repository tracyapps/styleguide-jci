---
post_title: 'Post Entities (Synchronously)'
layout: api_doc
published: true
---
# Post Entities (Synchronously)

This endpoint is used to create and update entities to ER API based on existing entity type schema. List of entities are provided in the body of the POST request and partition key - ercollectionid should be provided as part of header.

## Note
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
|**Authorization** <br>*required*|Bearer {access_token}| String|
|**Content-Type** <br>*required*|application/json| String|
|**async** <br>*required*|false|Boolean|
|**ercollectionid** <br>*required*|{ercollectionid}|String|

## Example

### Request

```shell
curl -X POST \
  'https://{{HOST}}/apollo/er/entities?v=1.1' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -H 'ercollectionid: TestER-DVDocs' \
  -H 'async: false'\
  -d '{"entityType": "BRICK_0_4__Building", "entityName": "JCI 507 Michigan Street Milwaukee Building B6", "id": "JCI-507-B6"}'

```
### Response

```json
{
    "status": {
        "message": "Total number of Entities Upserted:  1.",
        "code": "207"
    },
    "transactionId": "64572d07-fbbf-4315-b24f-4dd49b8b6c1f",
    "data": {
        "responses": {
            "success": [
                {
                    "id": "JCI-507-B6",
                    "message": "success",
                    "tracker": "http://{{HOST}}/apollo/status/logs?entityid=JCI-507-B6&transactionid=64572d07-fbbf-4315-b24f-4dd49b8b6c1f"
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
|413|Payload too large - If number of entities supplied exceeds maximum allowed limit of 100|
