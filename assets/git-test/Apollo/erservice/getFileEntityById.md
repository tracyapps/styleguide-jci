---
post_title: 'GET a specific file Entity by EntityId'
layout: api_doc
published: true
---
# GET a specific File Entity by EntityId
This endpoint is used to get specific file entity from ER API. Application user has to provide the ercollectionid as part of header body and entityId as part of url.
## URL

`https://{{HOST}}/apollo/entities/filename/{entityId}`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read

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
curl -X POST \
  'https://{{HOST}}/apollo/entities/filename/testId' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -H 'ercollectionid: testercollectionid' 
```

### Response

```json
[
    {
            "entityType": "JCI_EXT__File",
            "entityName": "FileEntity",
            "id": "testId",
            "sysData": {
                file_name = file.txt,
                file_description = "Mango image from sample photos 11",
                file_size = 2179072,
                file_type = "image/png",
                file_rating = "5",
                file_version = "1",
                version = version
            },
            "brickEntityName": "Room",
            "brickEntitySubType": "JCI_EXT__File",
            "brickEntityType": "JCI_EXT__File",
            "isActive": true
        }
]
```

## Errors

|Error|Description|
|---|---|
|400|Bad Request – The request could not be understood by the server due to malformed syntax.|
|403|The request can not proceed if ercollectionid is not registered or does not have any logs in ACL library.|
