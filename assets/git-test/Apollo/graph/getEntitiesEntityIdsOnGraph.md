---
post_title: 'Get Entities By EntityIDs'
layout: api_doc
published: true
---
# Get Entities By EntityIDs

This endpoint is used to get multiple entities based on the entity IDs. Application user has to provide the ercollectionid as part of header body to fetch entities from specific partition.

## URL

`https://{{HOST}}/apollo/graph/entities({entityID},{entityID})?v={version}`


## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read

## Versions Supported
1.0 (Default)
1.1
1.2

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|Authorization token|
|**Content-Type** <br>*required*|application/json|Content Type|
|**ercollectionid** <br>*required*|{ercollectionid}|Partition Key|


## URL Query Parameter

|Name|Description|Example|
|---|---|---|
|**v** <br>*optional*|Service Version|/entitytypes/{entitytype}/entities?v=1.1|String|
|**includeSystemData** <br>*optional*|Flag to indicate if result should have system data field (default false)|/entities({entityID},{entityID})?includeSystemData=false|

## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**entityID** <br>*required*|Entity  id|eType:{entityID}|string|

## Example

## Request

```shell

curl -X GET \
'https://{{HOST}}/apollo/graph/entities(JCI-507-B1-F1,JCI-507-B1)?v=1.2' \
  -H 'Authorization: Bearer {{access_token}}' \
  -H 'Content-Type: application/json' \
  -H 'ercollectionid: testcollection' 

```

### Response

```json
{
    "status": {
        "message": "",
        "code": "200"
    },
    "data": [
        {
            "id": "JCI-507-B1",
            "entityType": "BRICK_0_4__Building",
            "entityName": "JCI 507 Michigan Street Milwaukee Building B1",
            "brickEntityType": "BRICK_0_4__Location",
            "brickEntitySubType": "BRICK_0_4__Building"
        },
        {
            "id": "JCI-507-B1-F1",
            "entityType": "BRICK_0_4__Floor",
            "brickEntityType": "BRICK_0_4__Location",
            "entityName": "JCI 507 Michigan Street Milwaukee Building B1 Floor F1",
            "brickEntitySubType": "BRICK_0_4__Floor"
        }
    ],
    "paging": {
        "totalCount": 2,
        "continuationToken": null
    }
}
```

## Errors

|Error|Code|Description|
|---|---|---|
|Bad Request | 400| The request could not be understood by the server due to malformed syntax. |
|Unauthorized | 401| The request can not be processed if token is not valid or expired. |
|Forbidden | 403| The request can not proceed if ercollectionid is not registered or does not have any logs in ACL library. |
