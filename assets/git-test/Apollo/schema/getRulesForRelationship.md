---
uid: getRulesForRelationship.md
post_title: 'Get rules for Relationship type
---
# Get rules for given Relationship type

Returns a list of active rules for given Relationship type

## URL

`https://{{HOST}}/apollo/schema/relationshiptypes/{relationshipType}/entitytypes`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read

## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**relationshipType** <br>*required*|valid relationshipType|/relationshiptypes/Brick:isPartOf/entitytypes|String|

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**v** <br>*optional*|Service Version|/entitytypes/id/versions?v=1.0|Number|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|IMS access token|

## Example

### Request

```shell
curl -X GET \
  https://{{HOST}}/apollo/schema/relationshiptypes/{id}/entitytypes \
  -H 'Authorization: Bearer {access_token}'   
```
   
### Response

```json
{
    "status": {
        "message": "Operation completed",
        "code": "200"
    },
    "transactionId": "2577D9C259CF43EBAB71960932A89123",
    "paging": null,
    "data": [
        {
            "destination": "Brick:Location:Building",
            "source": "Brick:Location:Floor"
        },
        {
            "destination": "Brick:Location:Floor",
            "source": "Brick:Location:Zone"
        }
    ]
}
```

## Errors

|Error|Description|
|---|---|
|403|Unauthorized – token expired / invalid  |
|404|Active rules not found for given relationshipType|
|500|Any other error e.g. DB operation failed|

## Response Body Parameters

|Name|Description|Schema|
|---|---|---|
|data          |list of rules|Json |
