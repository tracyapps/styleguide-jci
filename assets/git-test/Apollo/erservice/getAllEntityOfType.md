---
post_title: 'GET all Entities of a specific EntityType'
layout: api_doc
published: true
---
# GET all Entities of a specific EntityType

This endpoint is used to get all entities of a specific entitytype from ER API. Application user has to provide the ercollectionid , continuationToken and PageSize as part of header body and entityType as part of url

## URL

`https://{{HOST}}/apollo/er/entitytypes/{entitytype}/entities?v={version}`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read

## Versions Supported
1.0 (Default)
1.1

## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**entityType** <br>*required*|Entity schema type id|/entitytypes/{entityType}/entities|string|


## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**v** <br>*optional*|Service Version|/entitytypes/{entitytype}/entities?v=1.1|String|
|**includeSystemData** <br>*optional*|Flag to include system data (default false)|/entitytypes/{entityType}/entities?includeSystemData=true|Boolean|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|IMS access token (User should have apollo_read scope)|
|**ercollectionid** <br>*required*|{ercollectionid}|ER Collection id|
|**continuationToken** <br>*optional*|{continuationToken}|Token for pagination, not required for first page but required for subsequent page|
|**PageSize** <br>*optional*|{PageSize}|Page size|

## Example

### Request

```shell

 curl -X GET \
'https://{{HOST}}/apollo/er/entitytypes/BRICK_0_4__Floor/entities?v=1.1' \
  -H 'Authorization: Bearer {{access_token}}' \
  -H 'Content-Type: application/json' \
  -H 'ercollectionid: TestER-DVDocs'\
  -H 'PageSize:100' 

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
            "entityType": "BRICK_0_4__Floor",
            "entityName": "JCI 507 Michigan Street Milwaukee Building B1 Floor F1",
            "id": "JCI-507-B1-F1",
            "brickEntitySubType": "BRICK_0_4__Floor",
            "brickEntityType": "BRICK_0_4__Location",
            "isActive": true
        },
        {
            "entityType": "BRICK_0_4__Floor",
            "entityName": "JCI 507 Michigan Street Milwaukee Building B1 Floor F2",
            "id": "JCI-507-B1-F2",
            "brickEntitySubType": "BRICK_0_4__Floor",
            "brickEntityType": "BRICK_0_4__Location",
            "isActive": true
        }
    ],
    "paging": {
        "totalCount": 2,
        "continuationToken": null
    }
}

```

## Errors

|Error|Description|
|---|---|
|400|Bad Request – The request could not be understood by the server due to malformed syntax.|
|403|The request can not proceed if ercollectionid is not registered or does not have any logs in ACL library.|
