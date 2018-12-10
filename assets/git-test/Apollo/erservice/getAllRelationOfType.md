---
post_title: 'GET all Relations of a specific RelationshipType'
layout: api_doc
published: true
---
# GET all Relations of a specific RelationshipType

This endpoint is used to get all relationships of a specific relationshiptype from ER API. Application user has to provide the ercollectionid, continuationToken and PageSize as part of header body and relationshipType as part of url.

## URL

`https://{{HOST}}/apollo/er/relationshiptypes/{relationshipType}/relationships?v={version}`

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
|**relationshipType** <br>*required*|Relationship schema type id|/relationshiptypes/{relationshipType}/relationships|string|

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**v** <br>*optional*|Service Version|/relationshiptypes/{relationshipType}/relationships?v=1.1|string|
|**includeSystemData** <br>*optional*|Flag to include system data (default false)|/relationshiptypes/{relationshipType}/relationships?includeSystemData=true|Boolean|

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
  'https://{{HOST}}/apollo/er/relationshiptypes/BRICK_0_4__hasPart_Location_Location/relationships?v=1.1' \
  -H 'Authorization: Bearer {{access_token}}' \
  -H 'Content-Type: application/json' \
  -H 'ercollectionid: TestER-DVDocs' \
  -H 'PageSize: 100'
  
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
            "id": "JCI-507-B1-hasPart-JCI-507-B1-F1",
            "relationshipName": "JCI-507-B1 hasPart JCI-507-B1-F1",
            "relationshipType": "BRICK_0_4__hasPart_Location_Location",
            "sourceEntityId": "JCI-507-B1",
            "destinationEntityId": "JCI-507-B1-F1",
            "sourceERCollectionId": "TestER-DVDocs",
            "destinationERCollectionId": "TestER-DVDocs",
            "brickRelationshipName": "hasPart",
            "brickRelationshipType": "BRICK_0_4__hasPart",
            "isActive": true
        },
        {
            "id": "JCI-507-B1-F1-hasPart-JCI-507-B1-F1-ETeam1",
            "relationshipName": "JCI-507-B1-F1 hasPart JCI-507-B1-F1-ETeam1",
            "relationshipType": "BRICK_0_4__hasPart_Location_Location",
            "sourceEntityId": "JCI-507-B1-F1",
            "destinationEntityId": "JCI-507-B1-F1-ETeam1",
            "sourceERCollectionId": "TestER-DVDocs",
            "destinationERCollectionId": "TestER-DVDocs",
            "brickRelationshipName": "hasPart",
            "brickRelationshipType": "BRICK_0_4__hasPart",
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
