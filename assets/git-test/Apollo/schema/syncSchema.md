---
post_title: 'Sync schemas with Schema API release versions'
layout: api_doc
published: true
---
# Sync schemas with Schema API release versions

Schemas is to be synced with the latest version of Schema API release version


## URL

`https://{{HOST}}/apollo/schema/sync`


## Method

<div class="post">POST</div>

## Required IMS Scopes

* apollo_admin

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**v** <br>*optional*|Service Version|/entitytypes/?v=1.0|Number|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|IMS access token|
|**Content-Type** <br>*required*|application/json|Content Type|

## Request Body Parameters

|Name|Description|Type|
|---|---|---|
| **schemaType** <br>*required*|schemaTypes for which schemas to be synced|String|
| **schemaCollectionId** <br>*required*|schemaCollectionId for which schemas to be synced|String|

## Example

### Request

```shell
curl -X POST \
  https://{{HOST}}/apollo/schema/sync \
  -H 'Authorization: Bearer {access_token}' \
  -H 'Content-Type: application/json' \
  -d '{	
	"schemaType":"",
	"schemaCollectionId":""
}'


```

### Response

```json
{
  "status": {
    "message": "Operation completed",
    "code": "200"
  },
  "transactionId": "6735AF830BFA41939F6AFB6593C4F1C3",
  "paging": null,
  "data": {
    "relationshiptypes": [
      {
        "collId": "Brick_0_4",
        "response": {
          "reason": "Attempted '2' schemas: inserted '0' schemas, updated '2' schemas, '0' failed",
          "success": [
            "Brick:Timeseries",
            "Brick:Timeseries1"
          ]
        }
      }
    ]
  }
}
```

## Errors

|Error|Description|
|---|---|
|400|If any mandatory field is missing      	   |
|412|Pre Condition Fail – No schemas present for sync	   |
|403|Unauthorized – token expired / invalid 	   |
|500|Any other error e.g. DB operation failed	   |


## Response Body Parameters

|Name|Description|Schema|
|---|---|---|
|message         |completed or bad request message|String |
|data    		 |JSON schema inserted/updated/failed|String|
