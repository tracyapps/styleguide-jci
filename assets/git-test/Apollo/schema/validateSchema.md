---
uid: validateSchema.md
post_title: 'Validate object against schema
---
# Validate object against schema

Input JSON is validated against schema type id specified.

## URL

`https://{{HOST}}/apollo/schema/entitytypes/validate`
`https://{{HOST}}/apollo/schema/messagetypes/validate`
`https://{{HOST}}/apollo/schema/relationshiptypes/validate`
`https://{{HOST}}/apollo/schema/eventtypes/validate`

## Method

<div class="post">POST</div>

## Required IMS Scopes

* apollo_read

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**v** <br>*optional*|Service Version|/entitytypes/id?v=1.0|Number|

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

## Example

### Request

```shell
curl -X POST \
  https://{{HOST}}/apollo/schema/entitytypes/validate \
  -H 'Authorization: Bearer {access_token}' \
  -H 'Content-Type: application/json' \
  -d '{
	"id":"test",
    "timeseriesId":"asdfwer451asf54a5s4f",
    "entityType":"BRICK_0_4__Timeseries"
}'
```

### Response

```json
{
    "status": {
        "message": "Operation completed",
        "code": "200"
    },
    "transactionId": "330727C4F7094D53A2A4D09F5A8EE2DC",
    "data": {
        "validationId": "cc7dec4f-c442-4dec-b0db-0c0307af611e",
        "reason": "[Validation successful]",
        "version": "1",
        "schema": {
            "$schema": "http://json-schema.org/draft-06/schema#",
            "description": "Schema for Entity BRICK_0_4__Door",
            "additionalProperties": false,
            "type": "object",
            "title": "BRICK_0_4__Door",
            "required": [
                "id",
                "entityType",
                "entityName"
            ],
            "properties": {
                "acousticRating": {
                    "description": "acousticRating",
                    "type": "string"
                },
                "selfClosing": {
                    "description": "fireExit",
                    "type": "boolean"
                },
                "isExternal": {
                    "description": "isExternal",
                    "type": "boolean"
                },
                "entityType": {
                    "description": "entity type",
                    "type": "string"
                },
                "operationStyle": {
                    "description": "operationStyle",
                    "type": "string",
                    "enum": [
                        "swingLeft",
                        "swingRight"
                    ]
                }
            }
        },
        "valid": true
    },
    "paging": null
}
```

## Errors

|Error|Description|
|---|---|
|403|Unauthorized – token expired / invalid  |
|404|Active schema not found for given id	 |
|412|If schema is not active				 |
|500|Any other error e.g. DB operation failed|

## Response Body Parameters

|Name|Description|Schema|
|---|---|---|
|schema          |Schema body|Json |
|validationId     |Unique transaction id|String|
|reason     |Remarks / Error message|String|
|version     |Schema version|String|
|valid     |Validation result|String|
