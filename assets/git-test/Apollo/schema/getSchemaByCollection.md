---
uid: getSchemaByCollection.md
post_title: 'Get schema by collection id
---
# Get schema by collection id

Returns a list of active schema types, from respective collection, for given collection id (all versions)

## URL

`https://{{HOST}}/apollo/schema/entitytypes/schemacollections/{id}`
`https://{{HOST}}/apollo/schema/relationshiptypes/schemacollections/{id}`
`https://{{HOST}}/apollo/schema/messagetypes/schemacollections/{id}`
`https://{{HOST}}/apollo/schema/eventtypes/schemacollections/{id}`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read

## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**id** <br>*optional*|Collection id of schema|/entitytypes/schemacollections/id|string|

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**v** <br>*optional*|Service Version|/entitytypes/id?v=1.0|Number|
|**size** <br>*optional*|Page size (default to 100 if not sent)|/entitytypes/id?size=100|Number|
|**state** <br>*optional*|State of schema (not available for message and event)|/entitytypes/id?state=published|String|
|**includeSystemData** <br>*optional*|Flag to indicate if result should have system data field  (default false)|/entitytypes/id?includeSystemData=true|Boolean|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|IMS access token|
|**continuationToken** <br>*optional*|{continuation_token}|Not required for first query. For subsequent queries, it should be picked from earlier response.|


## Example

### Request

```shell
curl -X GET \
 'https://{HOST}/entitytypes/schemacollections/{id}?size=10&includeSystemData=false' \
  -H 'Authorization: Bearer {access_token}' 
```
### Response

```json
{
    "status": {
        "message": "Operation completed",
        "code": "200"
    },
    "transactionId": "B303308D676C47E59F8176499F648A10",
    "data": [
        {
            "schema": {
                "$schema": "http://json-schema.org/draft-06/schema#",
                "description": "Schema for Entity BRICK_0_4__AHU_Static_Pressure_Sensor",
                "additionalProperties": false,
                "type": "object",
                "title": "BRICK_0_4__AHU_Static_Pressure_Sensor",
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
                        "default": "BRICK_0_4__AHU_Static_Pressure_Sensor",
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
                        "default": "AHU Static Pressure Sensor",
                        "description": "entity name",
                        "type": "string"
                    }
                }
            }
        },
        {
            "schema": {
                "$schema": "http://json-schema.org/draft-06/schema#",
                "description": "Schema for Entity BRICK_0_4__AHU_Heating_Discharge_Air_Temperature_Proportional_Band_Setpoint",
                "additionalProperties": false,
                "type": "object",
                "title": "BRICK_0_4__AHU_Heating_Discharge_Air_Temperature_Proportional_Band_Setpoint",
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
                        "default": "BRICK_0_4__AHU_Heating_Discharge_Air_Temperature_Proportional_Band_Setpoint",
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
                        "default": "AHU Heating Discharge Air Temperature Proportional Band Setpoint",
                        "description": "entity name",
                        "type": "string"
                    }
                }
            }
        }
    ],
    "paging": {
        "totalCount": 2,
        "continuationToken": "+RID:d0kIAOkLJQINAAAAAAAAAA==#RT:1#TRC:2#FPC:AgEAAAAKAgPBAKCqqqqqqqqqqqqqqioZgA=="
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
