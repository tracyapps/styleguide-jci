---
uid: getAllSchemaTitles.md
post_title: 'Get All schema titles for given schema collection 
---
# Get All schema titles for given schema collection 

Returns a list of all active schema types titles , for given schema collection id.

## URL

`https://{{HOST}}/apollo/schema/entitytypes/schemacollections/{schemaCollId}/titles`
`https://{{HOST}}/apollo/schema/relationshiptypes/schemacollections/{schemaCollId}/titles`


## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**v** <br>*optional*|Service Version|/entitytypes/schemacollections/{schemaCollId}/titles?v=1.0|Number|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|IMS access token|

## Example

### Request

```shell
curl -X GET \
  https://{{HOST}}/apollo/schema/relationshiptypes/schemacollections/{schemaCollId}/titles \
  -H 'Authorization: Bearer {access_token}' 
```

### Response

```json
{
    "status": {
        "message": "Operation completed",
        "code": "200"
    },
    "transactionId": "331C7328B2C34664AEB17980B046D9A8",
    "paging": null,
    "data": [
        "Brick:hasPart",
        "Brick:isPartOf",
        "Brick:contains",
        "Brick:isLocatedIn"
    ]
}
```

## Errors

|Error|Description|
|---|---|
|403|Unauthorized – token expired / invalid  |
|404|Active schema not found for given schema collection id	 |
|500|Any other error e.g. DB operation failed|

## Response Body Parameters

|Name|Description|Schema|
|---|---|---|
|data         |List of schema titles|Json |

