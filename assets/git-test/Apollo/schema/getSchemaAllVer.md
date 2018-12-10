---
uid: getSchemaAllVer.md
post_title: 'Get schema, all versions
---
# Get schema, all versions

Returns list of all active schema type for given id

## URL

`https://{{HOST}}/apollo/schema/entitytypes/{id}/versions`
`https://{{HOST}}/apollo/schema/relationshiptypes/{id}/versions`
`https://{{HOST}}/apollo/schema/messagetypes/{id}/versions`
`https://{{HOST}}/apollo/schema/eventtypes/{id}/versions`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read

## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**id** <br>*required*|Unique id of schema|/entitytypes/id|string|

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**v** <br>*optional*|Service Version|/entitytypes/id/versions?v=1.0|Number|
|**includeSystemData** <br>*optional*|Flag to indicate if result should have system data field  (default false)|/entitytypes/id/versions?includeSystemData=true|Boolean|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|IMS access token|

## Example

### Request

```shell
curl -X GET \
  'https://{{HOST}}/apollo/schema/entitytypes/{entityTypes}/versions?includeSystemData=false' \
  -H 'Authorization: Bearer {access_token}' 
```

### Response

```json
{
    "status": {
        "message": "Operation completed",
        "code": "200"
    },
    "transactionId": "73E3185E85B147AFB91F05B90A56E329",
    "data": [
        {
            "schema": {
                "$schema": "http://json-schema.org/draft-06/schema#",
                "description": "Schema for Entity BRICK_0_4__Building",
                "additionalProperties": false,
                "type": "object",
                "title": "BRICK_0_4__Building",
                "required": [
                    "id",
                    "entityType",
                    "entityName"
                ],
                "properties": {
                    "owner": {
                        "description": "owner",
                        "type": "object"
                    },
                    "area": {
                        "description": "The width of the building",
                        "type": "number"
                    }
                    "category": {
                        "description": "operationStyle",
                        "type": "string",
                        "enum": [
                            "Resdiential",
                            "Commercial",
                            "Recreation",
                            "Corporate"
                        ]
                    },
                    "longitude": {
                        "description": "longitude",
                        "type": "number"
                    },
                    "height": {
                        "description": "The height of the building",
                        "type": "number"
                    }
                }
            }
        },
        {
            "schema": {
                "$schema": "http://json-schema.org/draft-06/schema#",
                "description": "Schema for Entity BRICK_0_4__Building",
                "additionalProperties": false,
                "type": "object",
                "title": "BRICK_0_4__Building",
                "required": [
                    "id",
                    "name"
                ],
                "properties": {
                    "name": {
                        "description": "source entity id",
                        "type": "string"
                    },
                    "id": {
                        "description": "The unique identifier for the relation",
                        "type": "string"
                    }
                }
            }
        }
    ],
    "paging": null
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
|schema         |Schema body|Json |
|sysData	|System fields|String|
