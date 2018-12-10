---
post_title: 'GET all version of specific Entity by EntityId'
layout: api_doc
published: true
---
# GET all version of specific Entity by EntityId

This endpoint is used to get all versions of entity from ER API. Application user has to provide the ercollectionid as part of header body and entityId as part of url.

## URL

`https://{{HOST}}/api/entities/{entityId}/versions`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read

## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**entityId** <br>*required*|Entity id|/entities/entityId/|string|

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**v** <br>*optional*|Service Version|/entitytypes/{entityType}/entities/{entityId}/versions?v=1.0|String|
|**includeSystemData** <br>*optional*|Flag to include system data (default false)|/entities?includeSystemData=true|Boolean|

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
```

### Response

```json
[
    {
            "entityType": "BRICK_0_4__Room",
            "entityName": "Basement 1 Plant room",
            "id": "deabd63e-36bd-11e8-9b16-c8e0eb18b031",
            "sysData": {
                "sysSchemaVersion": 1,
                "sysERCollectionId": "Cork-ADX-Landing",
                "sysCorrelationId": "3970799e-9031-4632-9dd4-c0408dc3201f",
                "sysTimestamp": "20180403T13:17:57.637",
                "sysClientId": "infosys.dev.ro",
                "sysRequestorId": "infosys.user1",
                "sysEntityVersion": 1
            },
            "brickEntityName": "Room",
            "brickEntitySubType": "BRICK_0_4__Room",
            "brickEntityType": "BRICK_0_4__Location",
            "isActive": true
        }
]
```

## Errors

|Error|Description|
|---|---|
|400|Bad Request – The request could not be understood by the server due to malformed syntax.|
|403|The request can not proceed if ercollectionid is not registered or does not have any logs in ACL library.|
