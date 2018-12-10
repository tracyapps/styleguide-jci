---
post_title: 'Post All RelationshipTypes (Async)'
layout: api_doc
published: true
---
# Post All RelationshipTypes (Async)

This endpoint is used to post entity types into ontology graph for specific schemaCollection. schemaCollection can be provided as part of header body. System will delete the current RelationshipTypes from graph if any for mentioned schemaCollection then recreate it.

## URL

`http://{{HOST}}/apollo/ontology/relationshiptypes`

## Method

<div class="post">POST</div>

## Required IMS Scopes

* apollo_write

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|Token to validate any user|
|**schemaCollection** <br>*required*|{schemaCollection}|schemaCollection ID for which ontology graph is to be created or recreated|

## Example 

### Request

```json
[
  {
    "id": "6Dec-customer1",
    "name": "6Dec-customer1",
    "address": "milwaukee",
    "entitytype": "customer",
    "entitytypeversion": "1"
  }
]
```

### Response

```json
{
    "result": 1,
    "message": "Total number of Ontologies Posted:  33.",
    "errorInfo": []
}
```

## Errors

|Error|Code|Description|
|---|---|---|
|Bad Request | 400| The request could not be understood by the server due to malformed syntax. |
|Unauthorized | 401| The request can not be processed if token is not valid or expired. |
|Forbidden | 403| The request can not proceed if ercollectionid is not registered or does not have any logs in ACL library. |
