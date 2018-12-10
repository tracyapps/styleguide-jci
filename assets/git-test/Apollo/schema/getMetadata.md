---
uid: getMetadata.md
post_title: 'Get Metadata
---
# Get Metadata

Returns metadata object for the given schemaType

## URL

`https://{{HOST}}/apollo/schema/entitytypes/{entityType}/metadata`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read

## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**entityType** <br>*required*|Unique id of schema|entitytypes/entityType|string|

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**v** <br>*optional*|Service Version|/entitytypes/id?v=1.0|Number|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|IMS access token|

## Example


### Request

```shell
curl -X GET \
  https://{{HOST}}/apollo/schema/entitytypes/{id}/metadata \
  -H 'Authorization: Bearer {access_token}' \
```

### Response

```json
{
    "status": {
        "message": "Operation completed",
        "code": "200"
    },
    "transactionId": "292FCD6003A34616B4E9B96504B1F2E8",
    "data": {
        "brickMetadata": {
            "brickDescendantEntityTypes": [],
            "brickAncestorEntityTypes": [
                "BRICK_0_4__Location"
            ],
            "brickEntityType": "BRICK_0_4__Location",
            "brickEntitySubType": "BRICK_0_4__Building",
            "brickTags": [
                "Building"
            ],
            "brickEntityName": "Building"
        }
    },
    "paging": null
}
```

## Errors

|Error|Description|
|---|---|
|403|Unauthorized – token expired / invalid  |
|404|Not Found e.g. Schema not found|
|404|Not Found e.g. BRICK metadata not found for [entityType]|

## Response Body Parameters

|Name|Description|Schema|
|---|---|---|
|status         |success or failed|String |
|data    		|brick metadata for the given schemaType if present|String|
