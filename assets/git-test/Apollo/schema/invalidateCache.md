---
uid: invalidateCache.md
post_title: 'Invalidate Cache
---
# post_title: 'Invalidate Cache

Invalidate all cache entries for the given type else clear all caches.

## URL

`https://{{HOST}}/apollo/schema/invalidate`

## Method

<div class="put">PUT</div>

## Required IMS Scopes

* apollo_admin

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**v** <br>*optional*|Service Version|/entitytypes/id?v=1.0|Number|
|**type** <br>*optional*|Type to invalidate|/invalidate?type=[entitytypes, relationshiptypes, messagetypes, relationshiptypesrule, eventtypes, schemacollections]|String|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|IMS access token|

## Example

### Request

```shell
curl -X PUT \
  https://{{HOST}}/apollo/schema/invalidate \
  -H 'Authorization: Bearer {access_token}' \
```

### Response

```json
{
    "status": {
        "message": "Operation completed",
        "code": "200"
    },
    "transactionId": "E7C8CBFB1E2B47699D8F1DF70B8EA90A",
    "paging": null,
    "data": true
}
```

## Errors

|Error|Description|
|---|---|
|400|Invalid cache type specified|
|403|Unauthorized – token expired / invalid  |

## Response Body Parameters

|Name|Description|Schema|
|---|---|---|
|status         |success or failed|String |
|data    		|true , if invalidated successfully|Boolean|
