---
uid: getCountOfSchemaPerCollection.md
post_title: 'Get count of schemas per collection id
---
# Get count of schemas per collection id

Returns count of entity and relationship schemas per collection id.

## URL

`https://{{HOST}}/apollo/schema/schemacollections/{schemaCollectionId}/stats`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**v** <br>*optional*|Service Version|/entitytypes/id?v=1.0|Number|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|IMS access token|


## Example

## Request

```shell
curl -X GET \
  https://{HOST}/schema/schemacollections/BRICK_0_4/stats \
  -H 'Authorization: Bearer {access_token}'
 
```

### Response

```json
{
    "status": {
        "message": "Operation completed",
        "code": "200"
    },
    "transactionId": "D878F2DA8729417AA4E306603E658E90",
    "paging": null,
    "data": {
        "entityTypeSchemaCount": 31,
        "relationshipTypeSchemaCount": 8,
        "messageTypeSchemaCount": 2,
        "eventTypeSchemaCount": 1
    }
}
```

## Errors

|Error|Description|
|---|---|
|403|Unauthorized – token expired / invalid  |
|404|Active schema not found for given id	 |
|500|Any other error e.g. DB operation failed|
