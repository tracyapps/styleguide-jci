---
post_title: 'Get schema by collection id and tag'
layout: api_doc
published: true
---
# Get schema by collection id and tag

Returns a list of all active schema types (all versions) , for given collection id and tag.

The tag will be validated against the predefined values, before querying.

## URL

`https://{{HOST}}/apollo/schema/entitytypes/schemacollections/{id}/tags/{tag}`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read

## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**id** <br>*required*|Collection id of schema|/entitytypes/schemacollections/id|string|
|**tag** <br>*required*|Brick Tag |/entitytypes/schemacollections/id/tags/tag|string|

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**v** <br>*optional*|Service Version|/entitytypes/schemacollections/id/tags/tag?v=1.0|Number|
|**size** <br>*optional*|Page size (default to 100 if not sent)|/entitytypes/schemacollections/id/tags/tag?size=100|Number|
|**includeSystemData** <br>*optional*|Flag to indicate if result should have system data field  (default false)|/entitytypes/schemacollections/id/tags/tag?includeSystemData=true|Boolean|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|IMS access token |
|**continuationToken** <br>*optional*|{continuation_token}|Not required for first query. For subsequent queries, it should be picked from earlier response.|


## Example

### Request

```shell
curl -X GET \
  'https://{{HOST}}/entitytypes/schemacollections/{id}/tags/Building?includeSystemData=false' \
  -H 'Authorization: Bearer {access_token}' \
```

### Response

```json
{
    "status": {
        "message": "Operation completed",
        "code": "200"
    },
    "transactionId": "C3BF6D0A594A4CDE88AAB8AE8E7D0231",
    "data": [
        {
            "schema": {
                "$schema": "http://json-schema.org/draft-06/schema#",
                "description": "Schema for Entity BRICK_0_4__AHU_Building_Static_Pressure_Setpoint",
                "additionalProperties": false,
                "type": "object",
                "title": "BRICK_0_4__AHU_Building_Static_Pressure_Setpoint",
                "required": [
                    "id",
                    "entityType",
                    "entityName"
                ],
                "properties": {
                    "entityName": {
                        "description": "entity name",
                        "type": "string"
                    },
                    "entityType": {
                        "description": "entity type",
                        "type": "string"
                    },
                    "brickEntityType": {
                        "default": "BRICK_0_4__Point",
                        "description": "entity type",
                        "type": "string"
                    },
                    "brickEntitySubType": {
                        "default": "BRICK_0_4__AHU_Building_Static_Pressure_Setpoint",
                        "description": "entity subtype",
                        "type": "string"
                    },
                    "customData": {
                        "description": "Dictionary where Customer can add any custom data",
                        "type": "object"
                    },
                    "id": {
                        "description": "The unique identifier for the entity",
                        "type": "string"
                    },
                    "brickEntityName": {
                        "default": "AHU Building Static Pressure Setpoint",
                        "description": "entity name",
                        "type": "string"
                    }
                }
            }
        },
        {
            "schema": {
                "$schema": "http://json-schema.org/draft-06/schema#",
                "description": "Schema for Entity BRICK_0_4__AHU_Building_Exhaust_Fans_Stage_Command",
                "additionalProperties": false,
                "type": "object",
                "title": "BRICK_0_4__AHU_Building_Exhaust_Fans_Stage_Command",
                "required": [
                    "id",
                    "entityType",
                    "entityName"
                ],
                "properties": {
                    "entityName": {
                        "description": "entity name",
                        "type": "string"
                    },
                    "entityType": {
                        "description": "entity type",
                        "type": "string"
                    },
                    "brickEntityType": {
                        "default": "BRICK_0_4__Point",
                        "description": "entity type",
                        "type": "string"
                    },
                    "brickEntitySubType": {
                        "default": "BRICK_0_4__AHU_Building_Exhaust_Fans_Stage_Command",
                        "description": "entity subtype",
                        "type": "string"
                    },
                    "customData": {
                        "description": "Dictionary where Customer can add any custom data",
                        "type": "object"
                    },
                    "id": {
                        "description": "The unique identifier for the entity",
                        "type": "string"
                    },
                    "brickEntityName": {
                        "default": "AHU Building Exhaust Fans Stage Command",
                        "description": "entity name",
                        "type": "string"
                    }
                }
            }
        }
    ],
    "paging": {
        "totalCount": 2,
        "continuationToken": "+RID:d0kIAOkLJQJtBQAAAAAAAA==#RT:1#TRC:2#FPC:AgEAAAAOAG2FzYFvgWEABgBfgcmF"
    }
}
```

## Errors

|Error|Description|
|---|---|
|403|Unauthorized – token expired / invalid  |
|404|Active schema not found for given id	 |
|500|Any other error e.g. DB operation failed|

## Response Body Parameters

|Name|Description|Schema|
|---|---|---|
|schemas          |Schema body|Json |
|continuationToken     |Pagination token|Json|
