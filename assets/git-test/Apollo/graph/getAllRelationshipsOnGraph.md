---
post_title: 'Get All Relationships'
layout: api_doc
published: true
---
# Get All Relationships

This endpoint is used to get all relationships on the graph. Application user has to provide the ercollectionid as part of header to fetch all relationships from specific partition.

## URL

`https://{{HOST}}/apollo/graph/relationships?v={version}`

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
|**first** <br>*Optional* |0 to max limit record|Number of entities per page|
|**after** <br>*Optional* |{{after}}|Current Index

## URL  query  Parameter

|Name|Description|Example|
|---|---|---|
|**v** <br>*optional*|Service Version|/relationships?v=1.1|String|
|**includeSystemData** <br>*optional*|Flag to indicate if result should have system data field (default false)|/relationships?includeSystemData=true


## Note
{{after}} is the environment variable that is blank at the first time of request.
first and {{after}} parameter is used for the pagination. {{after}} parameter is automatically get set from response object after completing first request. Response object has object with name "paging" which has "continuationToken" attribute. "continuationToken" attribute needs to extract and set it to {{after}} variable.

### Request

```shell

  curl -X GET \
  'https://{{HOST}}/apollo/graph/relationships?v=1.2' \
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
            "id": "JCI-507-B1-hasPart-JCI-507-B1-F1",
            "destinationEntityId": "JCI-507-B1-F1",
            "relationshipType": "BRICK_0_4__hasPart_Location_Location",
            "brickRelationshipName": "hasPart",
            "sourceERCollectionId": "TestER-DVDocs",
            "relationshipName": "JCI-507-B1 hasPart JCI-507-B1-F1",
            "brickRelationshipType": "BRICK_0_4__hasPart",
            "sourceEntityId": "JCI-507-B1",
            "destinationERCollectionId": "TestER-DVDocs"
        },
        {
            "id": "JCI-507-B1-contains-JCI-507-Dev-1",
            "destinationEntityId": "JCI-507-Dev-1",
            "relationshipType": "BRICK_0_4__contains_Location_Device",
            "brickRelationshipName": "isSameAs",
            "sourceERCollectionId": "TestER-DVDocs",
            "relationshipName": "JCI-507-B1 contains JCI-507-Dev-1",
            "brickRelationshipType": "BRICK_0_4__contains_Location_Device",
            "sourceEntityId": "JCI-507-B1",
            "destinationERCollectionId": "TestER-DVDocs"
        },
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
        },
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
        },
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
        },
        {
            "id": "JCI-507-B1-F1-ETeam1-isPartOf-JCI-507-B1-F1",
            "destinationEntityId": "JCI-507-B1-F1",
            "relationshipType": "BRICK_0_4__isPartOf_Location_Location",
            "brickRelationshipName": "",
            "sourceERCollectionId": "TestER-DVDocs",
            "relationshipName": "JCI-507-B1-F1-ETeam1 isPartOf JCI-507-B1-F1",
            "brickRelationshipType": "BRICK_0_4__isPartOf",
            "sourceEntityId": "JCI-507-B1-F1-ETeam1",
            "destinationERCollectionId": "TestER-DVDocs"
        },
        {
            "id": "JCI-507-B1-F1-ETeam1-contains-JCI-507-Dev-1",
            "destinationEntityId": "JCI-507-Dev-1",
            "relationshipType": "BRICK_0_4__contains_Location_Device",
            "brickRelationshipName": "isSameAs",
            "sourceERCollectionId": "TestER-DVDocs",
            "relationshipName": "JCI-507-B1-F1-ETeam1 contains JCI-507-Dev-1",
            "brickRelationshipType": "BRICK_0_4__contains_Location_Device",
            "sourceEntityId": "JCI-507-B1-F1-ETeam1",
            "destinationERCollectionId": "TestER-DVDocs"
        },
        {
            "id": "JCI-507-Dev-1-isLocatedIn-JCI-507-B1-F1-ETeam1",
            "destinationEntityId": "JCI-507-B1-F1-ETeam1",
            "relationshipType": "BRICK_0_4__isLocatedIn_Device_Location",
            "brickRelationshipName": "isSameAs",
            "sourceERCollectionId": "TestER-DVDocs",
            "relationshipName": "JCI-507-Dev-1 isLocatedIn JCI-507-B1-F1-ETeam1",
            "brickRelationshipType": "BRICK_0_4__isLocatedIn_Device_Location",
            "sourceEntityId": "JCI-507-Dev-1",
            "destinationERCollectionId": "TestER-DVDocs"
        },
        {
            "id": "JCI-507-Dev-1-isLocatedIn-JCI-507-B1-F1",
            "destinationEntityId": "JCI-507-B1-F1",
            "relationshipType": "BRICK_0_4__isLocatedIn_Device_Location",
            "brickRelationshipName": "isSameAs",
            "sourceERCollectionId": "TestER-DVDocs",
            "relationshipName": "JCI-507-Dev-1 isLocatedIn JCI-507-B1-F1",
            "brickRelationshipType": "BRICK_0_4__isLocatedIn_Device_Location",
            "sourceEntityId": "JCI-507-Dev-1",
            "destinationERCollectionId": "TestER-DVDocs"
        },
        {
            "id": "JCI-507-Dev-1-isLocatedIn-JCI-507-B1",
            "destinationEntityId": "JCI-507-B1",
            "relationshipType": "BRICK_0_4__isLocatedIn_Device_Location",
            "brickRelationshipName": "isSameAs",
            "sourceERCollectionId": "TestER-DVDocs",
            "relationshipName": "JCI-507-Dev-1 isLocatedIn JCI-507-B1",
            "brickRelationshipType": "BRICK_0_4__isLocatedIn_Device_Location",
            "sourceEntityId": "JCI-507-Dev-1",
            "destinationERCollectionId": "TestER-DVDocs"
        }
    ],
    "paging": {
        "totalCount": 10,
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
