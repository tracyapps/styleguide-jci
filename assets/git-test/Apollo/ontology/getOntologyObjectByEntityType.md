---
post_title: 'Get Ontology Object by EntityType'
layout: api_doc
published: true
---
# Get Ontology Object by EntityType

## URL

`http://{{HOST}}/apollo/ontologygraph/entityTypes/{entityType}($filter={{filter}})`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read

## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**entityType**<br>*required*|entity type||Route|

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**$filter** <br>*optional*|Filter to specify|ontologygraph/entityTypes/{entityType}($filter=sourceEntityType) or ontologygraph/entityTypes/{entityType}($filter=destEntityType)|String|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|Description|
|**Content-Type** <br>*required*|application/json|Description|

## Example

### Request

```shell
curl -X GET \
'http://{{HOST}}/apollo/ontologygraph/entityTypes/BRICK_0_4__AHU_Discharge_Fan_Air_Flow_Sensor($filter=destEntityType)' \
  -H 'Authorization: Bearer {{access_token}}' \
  -H 'Content-Type: application/json'  
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
      "id": "BRICK_0_4__Point",
      "brickMetadata": {
        "brickEntityType": "BRICK_0_4__Point",
        "brickEntitySubType": "BRICK_0_4__Point",
        "brickEntityName": "Point"
      },
      "BRICK_0_4__isLocatedIn_Point_Location": {
        "id": "BRICK_0_4__isLocatedIn_Point_Location",
        "brickMetadata": {
          "brickInverseRelationshipType": "BRICK_0_4__contains",
          "inverseRelationshipType": "BRICK_0_4__contains_Location_Point",
          "brickSourceEntityType": "BRICK_0_4__Point",
          "brickRelationshipType": "BRICK_0_4__isLocatedIn",
          "brickDestinationEntityType": "BRICK_0_4__Location",
          "brickRelationshipName": "isLocatedIn",
          "brickInverseRelationshipName": "contains"
        },
        "brickRelationshipType": "BRICK_0_4__isLocatedIn",
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
