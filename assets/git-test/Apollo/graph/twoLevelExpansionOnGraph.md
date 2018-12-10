---
post_title: 'Get Two Level Expansion of ER'
layout: api_doc
published: true
---
# Get Two Level Expansion of ER

This endpoint is used to get Two level expansion of entities and relationships based on a entity type. Application user has to provide the ercollectionid as part of header body to fetch entities from specific partition.

## URL

`https://{{HOST}}/apollo/graph/entities($select=eType:{entityType})?$expand=rType:{relationshipType}($expand=eType:{entityType}($expand=rType:{relationshipType}($expand=eType:{entityType})))&v={version}`


## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read

## Versions Supported
1.0 (Default)
1.1

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|Authorization token|
|**Content-Type** <br>*required*|application/json|Content Type|
|**ercollectionid** <br>*required*|{ercollectionid}|Partition Key|

## URL Query Parameter

|Name|Description|Example|type|
|---|---|---|---|
|**v** <br>*optional*|Service Version|/entitytypes/{entitytype}/entities?v=1.1|String|
|**includeSystemData** <br>*optional*|Flag to indicate if result should have system data field (default false)|/entities($select=eType:{entityType})?$expand=rType:{relationshipType}($expand=eType:{entityType}($expand=rType:{relationshipType}($expand=eType:{entityType})))&includeSystemData=true|

## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**entityType** <br>*required*|Entity schema type id|eType:{entityType}|string|
|**relationshipType** <br>*required*|Relationship schema type id|rType:{relationshipType}|string|


## Example

## Request

```shell

curl -X GET \
'https://{{HOST}}/apollo/graph/entities($select=eType:BRICK_0_4__Building)?$expand=rType:BRICK_0_4__hasPart_Location_Location($expand=eType:BRICK_0_4__Floor($expand=rType:BRICK_0_4__hasPart_Location_Location($expand=eType:BRICK_0_4__Room)))&v=1.1' \
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
            "id": "JCI-507-B1",
            "entityType": "BRICK_0_4__Building",
            "entityName": "JCI 507 Michigan Street Milwaukee Building B1",
            "brickEntityType": "BRICK_0_4__Location",
            "brickEntitySubType": "BRICK_0_4__Building",
            "BRICK_0_4__hasPart_Location_Location": [
                {
                    "id": "JCI-507-B1-hasPart-JCI-507-B1-F1",
                    "destinationEntityId": "JCI-507-B1-F1",
                    "relationshipType": "BRICK_0_4__hasPart_Location_Location",
                    "brickRelationshipName": "hasPart",
                    "sourceERCollectionId": "TestER-DVDocs",
                    "relationshipName": "JCI-507-B1 hasPart JCI-507-B1-F1",
                    "brickRelationshipType": "BRICK_0_4__hasPart",
                    "sourceEntityId": "JCI-507-B1",
                    "destinationERCollectionId": "TestER-DVDocs",
                    "BRICK_0_4__Floor": {
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
                                "destinationERCollectionId": "TestER-DVDocs",
                                "BRICK_0_4__Room": {
                                    "id": "JCI-507-B1-F1-ETeam1",
                                    "entityType": "BRICK_0_4__Room",
                                    "entityName": "JCI 507 Michigan Street Milwaukee Building B1 Floor F1 E Team 1",
                                    "brickEntityType": "BRICK_0_4__Location",
                                    "brickEntitySubType": "BRICK_0_4__Room",
                                    "brickEntityName": "Room"
                                }
                            }
                        ]
                    }
                }
            ]
        }
    ],
    "paging": {
        "totalCount": 1,
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
