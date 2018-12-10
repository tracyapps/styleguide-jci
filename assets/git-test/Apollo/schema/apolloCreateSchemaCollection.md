---
post_title: 'Create Schema Collection'
layout: api_doc
published: true
---
# Create Schema Collection

Create schema collection id.

## URL

`https://{{HOST}}/apollo/schema/schemacollections/`

## Method

<div class="post">POST</div>

## Required IMS Scopes

* apollo_admin

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**v** <br>*optional*|Service Version|/schemacollections?v=1.0|Number|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|IMS access token|

## Example

### Request

```shell
curl -X POST \
  https://{HOST}/schemacollections/ \
  -H 'Authorization: Bearer {access_token}' \
  -H 'Content-Type: application/json' \
  -d '{
	"schemaCollectionId":"BRICK_0_4"
}'
```

### Response

```json
{
    "status": {
        "message": "Operation completed",
        "code": "200"
    },
    "transactionId": "A9C131B97123463AB7471CC551955966",
    "paging": null,
    "data": {
        "sysTimestamp": "2018-10-08T05:50:13.573",
        "sysCorrelationId": "A9C131B97123463AB7471CC551955966",
        "sysRequestorId": "apollo_admin_development",
        "sysClientId": "apollo_schema_ro",
        "sysActive": true
    }
}
```

## Errors

|Error|Description|
|---|---|
|403|Unauthorized – token expired / invalid  |
|409|If schema collection already exist or is now deleted|
|500|Any other error e.g. DB operation failed|