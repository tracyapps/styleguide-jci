---
post_title: 'Get all Relations of a specific RelationshipType'
layout: api_doc
published: true
---
# Get all Relations of a specific RelationshipType

This endpoint is used to get Ontology objects with sourceEntityType as EntityType. EntityType can be passed as route parameter.


## URL
`http://{{HOST}}/apollo/ontologygraph/relationshipTypes/{relationshipTypes}`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read

## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**relationshipTypes**<br>*required*|Relationship type for which ontology objects are requested.||Route|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|IMS token|
|**Content-Type** <br>*required*|application/json|Content Type|
|**ercollectionid ** <br>*required*|{ercollectionid}|ER Collection id|

## Example

### Request

```shell
curl -X GET \
'http://{{HOST}}/apollo/ontologygraph/relationshipTypes/BRICK_0_4__hasPart_Equipment_Equipment' \
  -H 'Authorization: Bearer {{access_token}}' \
  -H 'Content-Type: application/json' \
  -H 'ercollectionid: testcollection' 
```

### Response

```json
{
  "status": {
    "message": "OK",
    "code": "200"
  },
  "data": [
    {
      "id": "BRICK_0_4__Equipment",
      "brickMetadata": {
        "brickEntityType": "BRICK_0_4__Equipment",
        "brickEntitySubType": "BRICK_0_4__Equipment",
        "brickEntityName": "Equipment"
      },
      "BRICK_0_4__hasPart_Equipment_Equipment": {
        "id": "BRICK_0_4__hasPart_Equipment_Equipment",
        "brickMetadata": {
          "brickInverseRelationshipType": "BRICK_0_4__isPartOf",
          "inverseRelationshipType": "BRICK_0_4__isPartOf_Equipment_Equipment",
          "brickSourceEntityType": "BRICK_0_4__Equipment",
          "brickRelationshipType": "BRICK_0_4__hasPart",
          "brickDestinationEntityType": "BRICK_0_4__Equipment",
          "brickRelationshipName": "hasPart",
          "brickInverseRelationshipName": "isPartOf"
        },
        "brickRelationshipType": "BRICK_0_4__hasPart",
        "BRICK_0_4__Equipment": {
          "id": "BRICK_0_4__Equipment",
          "brickMetadata": {
            "brickEntityType": "BRICK_0_4__Equipment",
            "brickEntitySubType": "BRICK_0_4__Equipment",
            "brickEntityName": "Equipment"
          }
        }
      }
    },
    {
      "id": "BRICK_0_4__Equipment",
      "brickMetadata": {
        "brickEntityType": "BRICK_0_4__Equipment",
        "brickEntitySubType": "BRICK_0_4__Equipment",
        "brickEntityName": "Equipment"
      },
      "BRICK_0_4__hasPart_Equipment_Point": {
        "id": "BRICK_0_4__hasPart_Equipment_Point",
        "brickMetadata": {
          "brickInverseRelationshipType": "BRICK_0_4__isPartOf",
          "inverseRelationshipType": "BRICK_0_4__isPartOf_Point_Equipment",
          "brickSourceEntityType": "BRICK_0_4__Equipment",
          "brickRelationshipType": "BRICK_0_4__hasPart",
          "brickDestinationEntityType": "BRICK_0_4__Point",
          "brickRelationshipName": "hasPart",
          "brickInverseRelationshipName": "isPartOf"
        },
        "brickRelationshipType": "BRICK_0_4__hasPart",
        "BRICK_0_4__Point": {
          "id": "BRICK_0_4__Point",
          "brickMetadata": {
            "brickEntityType": "BRICK_0_4__Point",
            "brickEntitySubType": "BRICK_0_4__Point",
            "brickEntityName": "Point"
          }
        }
      }
    },
    {
      "id": "BRICK_0_4__Location",
      "brickMetadata": {
        "brickEntityType": "BRICK_0_4__Location",
        "brickEntitySubType": "BRICK_0_4__Location",
        "brickEntityName": "Location"
      },
      "BRICK_0_4__hasPart_Location_Location": {
        "id": "BRICK_0_4__hasPart_Location_Location",
        "brickMetadata": {
          "brickInverseRelationshipType": "BRICK_0_4__isPartOf",
          "inverseRelationshipType": "BRICK_0_4__isPartOf_Location_Location",
          "brickSourceEntityType": "BRICK_0_4__Location",
          "brickRelationshipType": "BRICK_0_4__hasPart",
          "brickDestinationEntityType": "BRICK_0_4__Location",
          "brickRelationshipName": "hasPart",
          "brickInverseRelationshipName": "isPartOf"
        },
        "brickRelationshipType": "BRICK_0_4__hasPart",
        "BRICK_0_4__Location": {
          "id": "BRICK_0_4__Location",
          "brickMetadata": {
            "brickEntityType": "BRICK_0_4__Location",
            "brickEntitySubType": "BRICK_0_4__Location",
            "brickEntityName": "Location"
          }
        }
      }
    }
  ]
}
```

## Errors

|Error|Code|Description|
|---|---|---|
|Bad Request | 400| The request could not be understood by the server due to malformed syntax. |
|Unauthorized | 401| The request can not be processed if token is not valid or expired. |
|Forbidden | 403| The request can not proceed if ercollectionid is not registered or does not have any logs in ACL library. |
