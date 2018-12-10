---
uid: apolloDeleteSchemaCollection.md
post_title: 'Delete a schema collection
---
# Delete a schema collection

## URL

`https://{{HOST}}/apollo/schema/schemacollections/{id}`

## Method

<div class="delete">DELETE</div>

## Required IMS Scopes

* apollo_admin

## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**id** <br>*required*|Schema collection id|/schemacollections/BRICK_0_4|String|

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**v** <br>*optional*|Service Version|/schemacollections?v=1.0|Number|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|IMS access token|
|**key** <br>*required*|{key}|key to authenticate user|


## Example

### Request

```shell
curl -X DELETE \
  https://{{HOST}}/schemacollections/{id} \
  -H 'Authorization: Bearer {access_token}' \
  -H 'Content-Type: application/json' \
  -H 'key: {key}'
```

### Response

```json
{
    "status": {
        "message": "Operation completed",
        "code": "200"
    },
    "transactionId": "9A3247FC9B0541E0AA1FCF4D27E961E7",
    "paging": null,
    "data": {
        "sysTimestamp": "2018-10-08T06:00:36.767",
        "sysCorrelationId": "9A3247FC9B0541E0AA1FCF4D27E961E7",
        "sysRequestorId": "apollo_admin_development",
        "sysClientId": "apollo_schema_ro",
        "sysActive": false
    }
}
```

## Errors

|Error|Description|
|---|---|
|404|Schema collection not exists				   |
|412|Schema collection has active schema(s)		   |
|403|Unauthorized – token expired / invalid 	   |
|500|Any other error e.g. DB operation failed	   |


## Response Body Parameters

|Name|Description|Schema|
|---|---|---|
|status         |success or failed|String |
|data    		|success message for deletion |String|
