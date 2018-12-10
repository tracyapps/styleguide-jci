---
post_title: 'Get schema by state'
layout: api_doc
published: true
---
# Get schema by state

Returns a list of active schema types (entityType or relationshipType), from respective collection, for given state (latest version)

## URL

`https://{{HOST}}/apollo/schema/entitytypes/state/{state}`
`https://{{HOST}}/apollo/schema/relationshiptypes/state/{state}`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read

## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**state** <br>*required*|State of schema|/entitytypes/state/published|string|

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**v** <br>*optional*|Service Version|/entitytypes/state/published?v=1.0|Number|
|**size** <br>*optional*|Page size (default to 100 if not sent)|/entitytypes/state/published?size=100|Number|
|**includeSystemData** <br>*optional*|Flag to indicate if result should have system data field  (default false)|/entitytypes/state/published?includeSystemData=true|Boolean|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|IMS access token|
|**continuationToken** <br>*optional*|{continuation_token}|Not required for first query. For subsequent queries, it should be picked from earlier response.|

## Example

### Request

```shell
curl -X GET \
  https://{{HOST}}/entitytypes/state/{state} \
  -H 'Authorization: Bearer {access_token}' \
```

### Response

```json
{
    "status": {
        "message": "Operation completed",
        "code": "200"
    },
    "transactionId": "9F6F9E2C5FBF4825B8D083CC0F40BF77",
    "data": [
        "BRICK_0_4__Building",
        "BRICK_0_4__TimeseriesTest"
    ],
    "paging": {
        "totalCount": 2,
        "continuationToken": null
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
|data          |List of Schema id|Json |
|continuationToken     |Pagination token|Json|
|totalCount| no. of schemas exist for given state |
