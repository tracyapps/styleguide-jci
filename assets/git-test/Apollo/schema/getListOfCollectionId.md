---
uid: getListOfCollectionId.md
post_title: 'Get list of collection id
---
# Get list of collection id

Returns a list of schemaCollectionId.

## URL

`https://{{HOST}}/apollo/schema/schemacollections`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**v** <br>*optional*|Service Version|/entitytypes/id?v=1.0|Number|
|**size** <br>*optional*|Page size (default to 100 if not sent)|/entitytypes/id?size=100|Number|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|IMS access token|

## Example

### Request

```shell
curl -X GET \
  https://{{HOST}}/schemacollections \
  -H 'Authorization: Bearer {access_token}' \
```

### Response

```json
{
    "status": {
        "message": "Operation completed",
        "code": "200"
    },
    "transactionId": "8BBD20915C4D4E5DB785DA47515DBF67",
    "data": [
        "BIM_0_1",
        "BRICK_0_4"
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
