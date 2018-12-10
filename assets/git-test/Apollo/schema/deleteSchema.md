---
post_title: 'Delete a schema'
layout: api_doc
published: true
---
# Delete a schema

## URL

`https://{{HOST}}/apollo/schema/entitytypes/{entitytypes}`
`https://{{HOST}}/apollo/schema/relationshiptypes/{relationshiptypes}`
`https://{{HOST}}/apollo/schema/messagetypes/{messagetypes}`
`https://{{HOST}}/apollo/schema/eventtypes/{eventtypes}`

## Method

<div class="delete">DELETE</div>

## Required IMS Scopes

* apollo_admin

## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**entitytypes** <br>*required*|entityType|/entitytypes/BRICK_0_4__AccessTerminal|String|

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**v** <br>*optional*|Service Version|/entitytypes/id?v=1.0|Number|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|IMS access token|
|**key** <br>*required*|{key}|key to authenticate user|


## Example

### Request

```shell
curl -X DELETE \
  https://{{HOST}}/apollo/schema/eventtypes/{eventTypes} \
  -H 'Authorization: Bearer {access_token}' \
  -H 'Content-Type: application/json' \
  -H 'key: xyzzyspoon!'
```

### Response

```json
{
    "status": {
        "message": "Operation completed",
        "code": "200"
    },
    "transactionId": "D99D8CF92E94495EBAAD079CADA8BC8E",
    "paging": null,
    "data": "relationshipType [aka_test] successfully deleted"
}
```

## Errors

|Error|Description|
|---|---|
|400|If any mandatory field is missing      	   |
|404|Schema not exists					    	   |
|403|Unauthorized – token expired / invalid 	   |
|500|Any other error e.g. DB operation failed	   |


## Response Body Parameters

|Name|Description|Schema|
|---|---|---|
|status         |success or failed|String |
|data    		|success message for deletion |String|
