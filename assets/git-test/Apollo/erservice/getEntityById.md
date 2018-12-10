---
post_title: 'GET a specific Entity by EntityId'
layout: api_doc
published: true
---
# GET a specific Entity by EntityId
This endpoint is used to get specific entity from ER API. Application user has to provide the ercollectionid as part of header body and entityId as part of url.
## URL

`https://{{HOST}}/apollo/er/entities/{entityId}?v={version}`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read

## Versions Supported
1.0 (Default)
1.1

## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**entityId** <br>*required*|Entity id|/entities/entityId|string|

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**v** <br>*optional*|Service Version|/entities?v=1.0|String|
|**includeSystemData** <br>*optional*|Flag to include system data (default false)|/entities?includeSystemData=true|Boolean|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|IMS access token (User should have apollo_read scope)|
|**ercollectionid** <br>*required*|{ercollectionid}|ER Collection id|

## Example

### Request

```shell

curl -X GET \
'https://{{HOST}}/apollo/er/entities/JCI-507-B1-F1?v=1.1' \
  -H 'Authorization: Bearer {{access_token}}' \
  -H 'Content-Type: application/json' \
  -H 'ercollectionid: TestER-DVDocs'  
```

### Response

```json
{
    "status": {
        "message": "",
        "code": "200"
    },
    "data": [
        {
            "entityType": "BRICK_0_4__Floor",
            "entityName": "JCI 507 Michigan Street Milwaukee Building B1 Floor F1",
            "id": "JCI-507-B1-F1",
            "brickEntitySubType": "BRICK_0_4__Floor",
            "brickEntityType": "BRICK_0_4__Location",
            "isActive": true
        }
    ]
}
```

## Errors

|Error|Description|
|---|---|
|400|Bad Request – The request could not be understood by the server due to malformed syntax.|
|403|The request can not proceed if ercollectionid is not registered or does not have any logs in ACL library.|
