---
post_title: 'GET all version of specific relationship by RelationshipId'
layout: api_doc
published: true
---
# GET all version of specific relationship by RelationshipId

This endpoint is used to get all versions of relationships from ER API. Application user has to provide the ercollectionid as part of header body and relationshipid as part of url.

## URL

`https://{{HOST}}/api/relationships/{relationshipId}/versions`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read

## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**relationshipId** <br>*required*|Relation id|/relationships/relationshipId/versions|string|

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**v** <br>*optional*|Service Version|/relationships/{relationshipId}/versions?v=1.0|String|
|**includeSystemData** <br>*optional*|Flag to include system data (default false)|relationships/{relationshipId}/versions?includeSystemData=true|Boolean|

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
            "relationshipType": "BRICK_0_4__contains_Location_Point",
            "sourceEntityId": "e16bbe22-36bd-11e8-8078-c8e0eb18b031",
            "destinationEntityId": "e16bc7e4-36bd-11e8-97bb-c8e0eb18b031",
            "relationshipName": "equipment.AQ-NAE-04.BACnet IP1.ODU-002-001_equipment.AQ-NAE-04.BACnet IP1.L3-FCU-11",
            "id": "f25ccea4-36bd-11e8-bc2c-c8e0eb18b031",
            "sysData": {
                "sysERCollectionId": "Cork-ADX-Landing",
                "sysCorrelationId": "3529eb64-6aef-461b-9832-b9e50455e868",
                "sysTimestamp": "20180403T14:21:42.657",
                "sysClientId": null,
                "sysRequestorId": "infosys.user1",
                "sysRelationshipVersion": 5,
                "sysRelationshipType": "BRICK_0_4__contains_Location_Point"
            },
            "isActive": true
        }
]

```

## Errors

|Error|Description|
|---|---|
|400|Bad Request – The request could not be understood by the server due to malformed syntax.|
|403|The request can not proceed if ercollectionid is not registered or does not have any logs in ACL library.|
