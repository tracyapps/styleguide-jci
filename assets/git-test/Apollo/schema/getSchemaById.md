---
uid: getSchemaById.md
post_title: 'Get schema by Id
---
# Get schema by Id

Returns an unique active schema type, from respective collection, for given id with latest version
Format is as specified in http://json-schema.org/documentation.html (draft 6)
Sample – refer here http://json-schema.org/examples.html

## URL

`https://{{HOST}}/apollo/schema/entitytypes/{id}`
`https://{{HOST}}/apollo/schema/relationshiptypes/{id}`
`https://{{HOST}}/apollo/schema/messagetypes/{id}`
`https://{{HOST}}/apollo/schema/eventtypes/{id}`

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
|**v** <br>*optional*|Service Version|/entitytypes/id?v=1.0|Number|
|**includeSystemData** <br>*optional*|Flag to indicate if result should have system data field  (default false)|/entitytypes/id?includeSystemData=true|Boolean|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|IMS access token|

## Example

### Request

```shell
curl -X GET \
  'https://{{HOST}}/apollo/schema/entitytypes/{entityTypes}?includeSystemData=false' \
  -H 'Authorization: Bearer {access_token}'
```

### Response

```json
{
    "status": {
        "message": "Operation completed",
        "code": "200"
    },
    "transactionId": "86D40C1260E442EA890B1F1DDF44060F",
    "data": {
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
    },
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
|sysData|System fields|String|
