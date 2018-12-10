---
post_title: 'Get All Entities and Relationships By Source EntityID'
layout: api_doc
published: true
---
# Get All Entities and Relationships By Source EntityId

This endpoint is used to get all entities and relationships based on the source entity ID. Application user has to provide the ercollectionid as part of header body to fetch  entity from specific partition.

## URL

`https://{{HOST}}/apollo/graph/entities($filter={entityID})?$expand=rType:ALL&v={version}`

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
|**v** <br>*optional*|Service Version|?v=1.1|String|
|**includeSystemData** <br>*optional*|Flag to indicate if result should have system data field (default false)|/entities?includeSystemData=false|

## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**entityID** <br>*required*|Entity  id|eType:{entityID}|string|

## Example

## Request

```shell

curl -X GET \
'https://{{HOST}}/apollo/graph/entities($filter=JCI-507-B1-F1)?$expand=rType:ALL&v=1.2' \
  -H 'Authorization: Bearer {{access_token}}' \
  -H 'Content-Type: application/json' \
  -H 'ercollectionid: TestER-DVDocs' 

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
            "id": "JCI-507-B1-F1",
            "entityType": "BRICK_0_4__Floor",
            "brickEntityType": "BRICK_0_4__Location",
            "entityName": "JCI 507 Michigan Street Milwaukee Building B1 Floor F1",
            "brickEntitySubType": "BRICK_0_4__Floor",
            "BRICK_0_4__hasPart_Location_Location": [
                {
                    "id": "JCI-507-B1-F1-hasPart-JCI-507-B1-F1-ETeam1",
                    "destinationEntityId": "JCI-507-B1-F1-ETeam1",
                    "relationshipType": "BRICK_0_4__hasPart_Location_Location",
                    "brickRelationshipName": "hasPart",
                    "sourceERCollectionId": "TestER-DVDocs",
                    "relationshipName": "JCI-507-B1-F1 hasPart JCI-507-B1-F1-ETeam1",
                    "brickRelationshipType": "BRICK_0_4__hasPart",
                    "sourceEntityId": "JCI-507-B1-F1",
                    "destinationERCollectionId": "TestER-DVDocs"
                }
            ],
            "BRICK_0_4__isPartOf_Location_Location": [
                {
                    "id": "JCI-507-B1-F1-isPartOf-JCI-507-B1",
                    "destinationEntityId": "JCI-507-B1",
                    "relationshipType": "BRICK_0_4__isPartOf_Location_Location",
                    "brickRelationshipName": "",
                    "sourceERCollectionId": "TestER-DVDocs",
                    "relationshipName": "JCI-507-B1-F1 isPartOf JCI-507-B1",
                    "brickRelationshipType": "BRICK_0_4__isPartOf",
                    "sourceEntityId": "JCI-507-B1-F1",
                    "destinationERCollectionId": "TestER-DVDocs"
                }
            ],
            "BRICK_0_4__contains_Location_Device": [
                {
                    "id": "JCI-507-B1-F1-contains-JCI-507-Dev-1",
                    "destinationEntityId": "JCI-507-Dev-1",
                    "relationshipType": "BRICK_0_4__contains_Location_Device",
                    "brickRelationshipName": "isSameAs",
                    "sourceERCollectionId": "TestER-DVDocs",
                    "relationshipName": "JCI-507-B1-F1 contains JCI-507-Dev-1",
                    "brickRelationshipType": "BRICK_0_4__contains_Location_Device",
                    "sourceEntityId": "JCI-507-B1-F1",
                    "destinationERCollectionId": "TestER-DVDocs"
                }
            ]
        }
    ],
    "paging": {
        "totalCount": 3,
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
