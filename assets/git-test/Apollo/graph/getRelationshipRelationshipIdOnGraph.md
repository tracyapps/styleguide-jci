---
post_title: 'Get Relationship By RelationshipID'
layout: api_doc
published: true
---
# Get Relationship By RelationshipID

This endpoint is used to get relationship of a specific relationshipID on the graph. Application user has to provide the ercollectionid as part of header body and relationshipType as part of URL to fetch all relationships of a specific relationshipType from specific partition.

## URL

`https://{{HOST}}/apollo/graph/relationships({relationshipID})?v={version}`
`https://{{HOST}}/apollo/graph/relationships($filter={relationshipID})?v={version}`


## Method

<div class="get">GET</div>

## Required IMS Scopes
* apollo_read

## Versions Supported
1.0 (Default)
1.1
1.2

## URL Query Parameter
|Name|Description|Example|type|
|---|---|---|---|
|**v** <br>*optional*|Service Version|/entitytypes/{entitytype}/entities?v=1.1|String|

## URL Path Parameters
|Name|Description|Example|Type|
|---|---|---|---|
|**{RelationshipID}**|Relationship type|JCI-507-B1-F1-isPartOf-JCI-507-B1|String|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|Authorization token|
|**Content-Type** <br>*required*|application/json|Content Type|
|**ercollectionid** <br>*required*|{ercollectionid}|Partition Key|

## Example

### Request

```shell

curl -X GET \
'https://{{HOST}}/apollo/graph/relationships(JCI-507-B1-F1-isPartOf-JCI-507-B1)?v=1.1' \
  -H 'Authorization: Bearer {{access_token}}' \
  -H 'Content-Type: application/json' \
  -H 'ercollectionid: TestER-DVDocs' \
  -H 'first: 100' \
  -H 'after: 0' 

 
curl -X GET \
'https://{{HOST}}/apollo/graph/relationships($filter=JCI-507-B1-F1-isPartOf-JCI-507-B1)?v=1.1' \
  -H 'Authorization: Bearer {{access_token}}' \
  -H 'Content-Type: application/json' \
  -H 'ercollectionid: TestER-DVDocs' \
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
