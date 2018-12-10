---
post_title: 'Get All Entities'
layout: api_doc
published: true
---
# Get All Entities

This endpoint is used to get all entities on the graph. Application user has to provide the ercollectionid as part of header body to fetch all entities from specific partition.

## URL

`https://{{HOST}}/apollo/graph/entities?v={version}`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|Authorization token|
|**Content-Type** <br>*required*|application/json|Content Type|
|**ercollectionid** <br>*required*|{ercollectionid}|Partition Key|
|**first** |0 to max limit record|Number of entities per page|
|**after** |{{after}}|Current Index

## URL Query Parameter

|Name|Description|Example|
|---|---|---|
|**v** <br>*optional*|Service Version|?v=1.1|String|
|**includeSystemData** <br>*optional*|Flag to indicate if result should have system data field (default false)|/entities?includeSystemData=false|


## Note
 
{{after}} is the environment variable that is blank at the first time of request.
first and {{after}} parameter is used for the pagination. {{after}} parameter is automatically get set from response object after completing first request. Response object has object with name "paging" which has "continuationToken" attribute. "continuationToken" attribute needs to extract and set it to {{after}} variable.

## Example

## Request

```shell 

  curl -X GET \
'https://{{HOST}}/apollo/graph/entities?v=1.2' \
  -H 'Authorization: Bearer {{access_token}}' \
  -H 'Content-Type: application/json' \
  -H 'ercollectionid: testcollection' \
  -H 'first: 100' \
  -H 'after: 0' 
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
            "id": "JCI-507-B1",
            "entityType": "BRICK_0_4__Building",
            "entityName": "JCI 507 Michigan Street Milwaukee Building B1",
            "brickEntityType": "BRICK_0_4__Location",
            "brickEntitySubType": "BRICK_0_4__Building"
        },
        {
            "id": "JCI-507-B1-F1",
            "entityType": "BRICK_0_4__Floor",
            "brickEntityType": "BRICK_0_4__Location",
            "entityName": "JCI 507 Michigan Street Milwaukee Building B1 Floor F1",
            "brickEntitySubType": "BRICK_0_4__Floor"
        },
        {
            "id": "JCI-507-B1-F1-ETeam1",
            "entityType": "BRICK_0_4__Room",
            "entityName": "JCI 507 Michigan Street Milwaukee Building B1 Floor F1 E Team 1",
            "brickEntityType": "BRICK_0_4__Location",
            "brickEntitySubType": "BRICK_0_4__Room",
            "brickEntityName": "Room"
        },
        {
            "id": "JCI-507-Dev-1",
            "entityType": "BRICK_0_4__Device",
            "entityName": "JCI 507 Device 1",
            "brickEntityType": "BRICK_0_4__Device",
            "brickEntitySubType": "BRICK_0_4__Device",
            "brickEntityName": "Device"
        }
    ],
    "paging": {
        "totalCount": 4,
        "continuationToken": null
    }
}
```

## Errors

|Error|Code|Description|
|---|---|---|
|Bad Request | 400| The request could not be understood by the server due to malformed syntax. |
|Unauthorized | 401| The request can not be processed if token is not valid or expired. |
|Forbidden | 403| The request can not proceed if ercollectionid is not registered or does not have any logs in ACL library. |
