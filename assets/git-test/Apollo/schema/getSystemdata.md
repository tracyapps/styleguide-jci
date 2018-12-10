---
uid: getSystemdata.md
post_title: 'Get Systemdata
---
# Get Systemdata

Returns Systemdata for the given schematype

## URL

`https://{{HOST}}/apollo/schema/entitytypes/{entityType}/systemdata`
`https://{{HOST}}/apollo/schema/relationshiptypes/{relationshipType}/systemdata`
`https://{{HOST}}/apollo/schema/messagetypes/{messageType}/systemdata`
`https://{{HOST}}/apollo/schema/eventtypes/{eventType}/systemdata`

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
  https://{{HOST}}/apollo/schema/entitytypes/{entityTypes}/systemdata \
  -H 'Authorization: Bearer {access_token}' 
```

### Response

```json
{
    "status": {
        "message": "Operation completed",
        "code": "200"
    },
    "transactionId": "7844BCBCB7FC44E7BAD858DA26C8FAA4",
    "data": {
        "sysData": {
            "sysCorrelationId": "f7b54ce6-5fdf-414c-9adf-4abfd9185ae4",
            "sysClientId": "apollo.client",
            "sysSchemaCollectionId": "JCI_EXT",
            "sysTimestamp": "2018-05-23T11:11:58.031",
            "sysSchemaVersion": 4,
            "sysState": "new",
            "sysActive": "true",
            "sysRequestorId": "apollo.client",
            "sysIsMaster": "true",
            "sysEntityType": "JCI_EXT__FloorPlan"
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

## Response Body Parameters

|Name|Description|Schema|
|---|---|---|
|status         |success or partial_success or failed|String |
|sysData    	|list of sys fields for the given schematype|String|
