---
post_title: 'Get All Relationships By Relationship Type'
layout: api_doc
published: true
---
# Get All Relationships By Relationship Type

This endpoint is used to get all relationships of a specific relationshipType on the graph. Application user has to provide the ercollectionid as part of header body and relationshipType as part of URL to fetch all relationships of a specific relationshipType from specific partition.

## URL

`https://{{HOST}}/apollo/graph/relationships/{relationshipType}?v={version}`
`https://{{HOST}}/apollo/graph/relationships($select=rType:{relationshipType})?v={version}`


## Method

<div class="get">GET</div>

## Required IMS Scopes
* apollo_read

## Versions Supported
1.0 (Default)
1.1
1.2

## URL Query Parameter

|Name|Description|Example|
|---|---|---|
|**v** <br>*optional*|Service Version|/relationshipType/{relationshipType}?v=1.1|String|
|**includeSystemData** <br>*optional*|Flag to indicate if result should have system data field (default false)|/entities({entityID})?includeSystemData=false|


## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**{RelationshipType}**|Relationship type|BRICK_0_4__hasPart_Location_Location|String|
|**{brickRelationshipType}**|Relationship type|BRICK_0_4__hasPart|String|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|Authorization token|
|**Content-Type** <br>*required*|application/json|Content Type|
|**ercollectionid** <br>*required*|{ercollectionid}|Partition Key|
|**first** <br>*Optional*|0 to max limit record|Number of entities per page|
|**after** <br>*Optional*|{{after}}|Current Index


## Note

{{after}} is the environment variable that is blank at the first time of request.
first and {{after}} parameter is used for the pagination. {{after}} parameter is automatically get set from response object after completing first request. Response object has object with name "paging" which has "continuationToken" attribute. "continuationToken" attribute needs to extract and set it to {{after}} variable.

## Example

### Request

```shell
  
curl -X GET \
'https://{{HOST}}/apollo/graph/relationships/BRICK_0_4__hasPart_Location_Location?v=1.1' \
  -H 'Authorization: Bearer {{access_token}}' \
  -H 'Content-Type: application/json' \
  -H 'ercollectionid: testcollection' \
  -H 'first: 100' \
  -H 'after: 0' 
  
curl -X GET \
  'https://{{HOST}}/apollo/graph/relationships($select=rType:{BRICK_0_4__hasPart_Location_Location})?v=1.1' \
  -H 'Authorization: Bearer {{access_token}}' \
  -H 'Content-Type: application/json' \
  -H 'ercollectionid: testcollection' \
  -H 'first: 100' \
  -H 'after: 0'
    
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
            "id": "d13572a4-37ca-11e8-9b33-c8e0eb18b031",
            "brickDestinationEntitySubType": "BRICK_0_4__Floor",
            "brickDestinationEntityType": "BRICK_0_4__Location",
            "brickRelationshipName": "hasPart",
            "brickRelationshipType": "BRICK_0_4__hasPart",
            "brickSourceEntitySubType": "BRICK_0_4__Building",
            "brickSourceEntityType": "BRICK_0_4__Location",
            "customData": {
                "ParentSpaceID": "Johnson_Controls.5757.B1_Corp_Center",
                "SpaceID": "Johnson_Controls.5757.B1_Corp_Center.Floor1"
            },
            "destinationEntityId": "c516921e-37ca-11e8-b14c-c8e0eb18b031",
            "relationshipName": "Johnson_Controls.5757.B1_Corp_Center_Johnson_Controls.5757.B1_Corp_Center.Floor1",
            "relationshipType": "BRICK_0_4__hasPart_Location_Location",
            "sourceEntityId": "c526f6de-37ca-11e8-a9b2-c8e0eb18b031",
            "ercollectionid": "LoadTest-G01",
            "timeStamp": "05/03/2018 13:52:17 +00:00"
        }
    ],
    "paging": {
        "totalCount": 1,
        "continuationToken": "2"
    }
}
```

## Errors

|Error|Code|Description|
|---|---|---|
|Bad Request | 400| The request could not be understood by the server due to malformed syntax. |
|Unauthorized | 401| The request can not be processed if token is not valid or expired. |
|Forbidden | 403| The request can not proceed if ercollectionid is not registered or does not have any logs in ACL library. |
