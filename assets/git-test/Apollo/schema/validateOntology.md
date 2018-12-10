---
post_title: 'Validate object against schema and rules'
layout: api_doc
published: true
---
# Validate ontology for relationshipType

Input JSON is validated against schema type  and the ontology rules.

## URL

`https://{{HOST}}/apollo/schema/relationshiptypes/validate/ontology`

## Method

<div class="post">POST</div>

## Required IMS Scopes

* apollo_read

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**v** <br>*optional*|Service Version|/relationshiptypes/validate/ontology/?v=1.0|Number|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|IMS access token|
|**schemaVer** <br>*optional*|{ver}|Header to specify the version of schema against which the object needs to be validated|
|**Content-Type** <br>*required*|application/json|Request content type|


## Request Body Parameters

|Name|Description|Type|
|---|---|---|
| **Json Object** <br>*required*|Object body to be validated|JSON|
| **relationshipObj** <br>*required*|Object body to be validated|JSON|
| **sourceEntityObj** <br>*optionally required*|Object body to be validated if rule present for that relationshipType|JSON|
| **destinationEntityObj** <br>*optionally required*|Object body to be validated if rule present for that relationshipType|JSON|
| **entityType** <br>*optionally required*|field to be validated|JSON|


## Example

### Request

```shell
curl -X POST \
  https://{{HOST}}/apollo/schema/relationshiptypes/validate/ontology \
  -H 'Authorization: Bearer {access_token}' \
  -H 'Content-Type: application/json' \
  -d '{
	"relationshipObj":{
		"relationshipType": "BRICK_0_4__isPointOf_Point_Equipment",
		"id":"sample_id",
		"sourceEntityId":"source_id",
		"destinationEntityId":"dest_id", 
		"relationshipName":"sample_name"
	},
	"sourceEntityObj": {
	   "entityType": "BRICK_0_4__Building"
	},
	"destinationEntityObj": {
	    "entityType": "BRICK_0_4__Floor"
	}
}'
```

### Response

```json
{
    "status": {
        "message": "Operation completed",
        "code": "200"
    },
    "transactionId": "48B6B8210F4B40F8B14E3FA8837C91F9",
    "paging": null,
    "data": {
        "validationId": "67d9f03c-c332-43fe-b80d-69568d2958d1",
        "reason": [
            "Validation successful"
        ],
        "version": "4",
        "schema": {
            "$schema": "http://json-schema.org/draft-06/schema#",
            "description": "Schema for Relation BRICK_0_4__hasPart_Location_Location",
            "additionalProperties": false,
            "title": "BRICK_0_4__hasPart_Location_Location",
            "type": "object",
            "required": [
                "id",
                "sourceEntityId",
                "destinationEntityId",
                "relationshipType",
                "relationshipName"
            ],
            "properties": {
                "relationshipName": {
                    "description": "relationshipName",
                    "type": "string"
                },
                "brickSourceEntityType": {
                    "description": "brickSourceEntityType",
                    "type": "string"
                },
                "destinationEntityId": {
                    "description": "destination entity id",
                    "type": "string"
                },
                "relationshipType": {
                    "description": "relationshipType",
                    "type": "string"
                },
                "brickRelationshipType": {
                    "default": "BRICK_0_4__feeds",
                    "description": "brickRelationshipType",
                    "type": "string"
                },
                "sourceEntityId": {
                    "description": "source entity id",
                    "type": "string"
                },
                "brickDestinationEntityType": {
                    "description": "brickSourceEntityType",
                    "type": "string"
                },
                "brickDestinationEntitySubType": {
                    "description": "brickSourceEntityType",
                    "type": "string"
                },
                "brickRelationshipName": {
                    "default": "feeds",
                    "description": "brickRelationshipName",
                    "type": "string"
                },
                "customData": {
                    "description": "Dictionary where Customer can add any custom data",
                    "type": "object"
                },
                "id": {
                    "description": "The unique identifier for the relation",
                    "type": "string"
                },
                "brickSourceEntitySubType": {
                    "description": "brickSourceEntityType",
                    "type": "string"
                }
            }
        },
        "valid": true
    }
}
```

## Errors

|Error|Description|
|---|---|
|403|Unauthorized – token expired / invalid  |
|404|Active schema not found for given id	 |
|412|If schema is not active				 |
|500|Any other error e.g. DB operation failed|
|400|If mandatory field missing				 |

## Response Body Parameters

|Name|Description|Schema|
|---|---|---|
|schema          |Schema body|Json |
|validationId     |Unique transaction id|String|
|reason     |Remarks / Error message|String|
|version     |Schema version|String|
|valid     |Validation result|String|
