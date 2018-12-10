---
post_title: 'Publish schema'
layout: api_doc
published: true
---
# Publish schema

Change state of schema from new to published.

## URL

`https://{{HOST}}/apollo/schema/entitytypes/{id}/state/publish`
`https://{{HOST}}/apollo/schema/relationshiptypes/{id}/state/publish`

## Method

<div class="put">PUT</div>

## Required IMS Scopes

* apollo_admin

## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**id** <br>*required*|Unique id of schema|/entitytypes/schemacollections/id|string|

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
curl -X PUT \
  https://{{HOST}}/apollo/schema/entitytypes/{id}/state/publish \
  -H 'Authorization: Bearer {access_token}' \
  -H 'Content-Type: application/schema+json' \
```

### Response

```json
{
    "status": {
        "message": "Operation completed",
        "code": "200"
    },
    "transactionId": "1EF2DC7806C74C09A1C5EAFDEB68EAC0",
    "data": {
        "sysTimestamp": "2018-05-17T19:18:24.910",
        "sysSchemaVersion": 2,
        "sysCorrelationId": "972dd7e3-c554-4956-909a-9e6ca3831c4a",
        "sysClientId": "apollo.client",
        "sysRequestorId": "apollo.client",
        "sysState": "published",
        "sysEntityType": "BRICK_0_4__Building"
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
|schemas          |Schema body|Json |
|continuationToken     |Pagination token|Json|
