---
uid: getAllSchema.md
post_title: 'Get All schema for given type
---
# Get schema All schema for given type

Returns a list of all active schema types, for given schema type

## URL

`https://{{HOST}}/apollo/schema/entitytypes`
`https://{{HOST}}/apollo/schema/relationshiptypes`
`https://{{HOST}}/apollo/schema/messagetypes`
`https://{{HOST}}/apollo/schema/eventtypes`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**v** <br>*optional*|Service Version|/entitytypes/id?v=1.0|Number|
|**size** <br>*optional*|Page size (default to 100 if not sent)|/entitytypes/id?size=100|Number|
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
  'https://{{HOST}}/apollo/schema/entitytypes?includeSystemData=false' \
  -H 'Authorization: Bearer {access_token}'
```

### Response

```json
{
    "status": {
        "message": "Operation completed",
        "code": "200"
    },
    "transactionId": "5299E0C3F213469DA6A0B41D113DB4F2",
    "data": [
        {
            "schema": {
                "$schema": "http://json-schema.org/draft-06/schema#",
                "description": "Schema for Entity BIM_0_1__Space",
                "additionalProperties": false,
                "type": "object",
                "title": "BIM_0_1__Space",
                "required": [
                    "id",
                    "entityName",
                    "externalEntity",
                    "externalId",
                    "entityType"
                ],
                "properties": {
                    "plane": {
                        "description": "plane of the space",
                        "type": "object"
                    },
                    "entityType": {
                        "description": "Entity Type",
                        "type": "string"
                    },
                    "externalId": {
                        "description": "ifc reference id",
                        "type": "string"
                    },
                    "internalorexternalboundary": {
                        "description": "internalorexternalboundary of the space",
                        "type": "string"
                    },
                    "customData": {
                        "description": "Dictionary to hold any data that you want",
                        "type": "object"
                    },
                    "interiororexteriorspace": {
                        "description": "interiororexteriorspace of the space",
                        "type": "string"
                    },
                    "handicapaccessible": {
                        "description": "handicapaccessible of the space",
                        "type": "string"
                    },
                    "spacetype": {
                        "description": "spacetype of the space",
                        "type": "string"
                    },
                    "entityName": {
                        "description": "Space name",
                        "type": "string"
                    },
                    "altExternalId": {
                        "description": "alternate ifc id",
                        "type": "string"
                    },
                    "netfloorarea": {
                        "description": "netfloorarea of the space",
                        "type": "number"
                    },
                    "externalEntity": {
                        "description": "Space mapped ifc tag",
                        "type": "string"
                    },
                    "artificallighting": {
                        "description": "artificallighting of the space",
                        "type": "string"
                    },
                    "id": {
                        "description": "entity unique identifier",
                        "type": "string"
                    },
                    "category": {
                        "description": "category of the space",
                        "type": "string"
                    },
                    "physicalorvirtualboundary": {
                        "description": "physicalorvirtualboundary of the space",
                        "type": "string"
                    },
                    "polyline": {
                        "description": "polyline of the space",
                        "type": "object"
                    },
                    "grossfloorarea": {
                        "description": "grossfloorarea of the space",
                        "type": "number"
                    }
                }
            }
        },
        {
            "schema": {
                "$schema": "http://json-schema.org/draft-06/schema#",
                "description": "Schema for Entity BIM_0_1__Building",
                "additionalProperties": false,
                "type": "object",
                "title": "BIM_0_1__Building",
                "required": [
                    "id",
                    "entityName",
                    "externalEntity",
                    "externalId",
                    "entityType"
                ],
                "properties": {
                    "area": {
                        "description": "area of the building",
                        "type": "number"
                    },
                    "owner": {
                        "description": "owner of the building",
                        "type": "object"
                    },
                    "address": {
                        "description": "owner of the building",
                        "type": "object"
                    },
                    "entityType": {
                        "description": "Entity Type",
                        "type": "string"
                    },
                    "numberOfStoreys": {
                        "description": "number Of Storeys of the building",
                        "type": "number"
                    },
                    "latitude": {
                        "description": "Latitude of the building",
                        "type": "number"
                    },
                    "externalId": {
                        "description": "ifc reference id",
                        "type": "string"
                    },
                    "customData": {
                        "description": "Dictionary to hold any data that you want",
                        "type": "object"
                    },
                    "netvolume": {
                        "description": "net volume of the building",
                        "type": "number"
                    },
                    "isLandmarked": {
                        "description": "is Landmarked of the building",
                        "type": "boolean"
                    },
                    "areaunits": {
                        "description": "area units of the building",
                        "type": "string"
                    },
                    "entityName": {
                        "description": "building name",
                        "type": "string"
                    },
                    "altExternalId": {
                        "description": "alternate ifc id",
                        "type": "string"
                    },
                    "netfloorarea": {
                        "description": "net floor area of the building",
                        "type": "number"
                    },
                    "externalEntity": {
                        "description": "building mapped ifc tag",
                        "type": "string"
                    },
                    "id": {
                        "description": "entity unique identifier",
                        "type": "string"
                    },
                    "yearofconstruction": {
                        "description": "year of construction of the building",
                        "type": "number"
                    },
                    "height": {
                        "description": "height of the building",
                        "type": "number"
                    },
                    "grossfloorarea": {
                        "description": "gross floor area of the building",
                        "type": "number"
                    },
                    "marketcategory": {
                        "description": "market category of the building",
                        "type": "string"
                    },
                    "longitude": {
                        "description": "Longitude of the building",
                        "type": "number"
                    }
                }
            }
        }
    ],
    "paging": {
        "totalCount": 2,
        "continuationToken": "+RID:d0kIAOkLJQIGAAAAAAAAAA==#RT:1#TRC:2#FPC:AgEAAAAQAgfBQFVVVVVVVVVVVVVVVVVUBAECgqrIyAA=="
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
