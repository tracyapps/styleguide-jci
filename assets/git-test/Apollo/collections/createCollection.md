---
post_title: 'Create Collection'
layout: api_doc
published: true
---
# Create Collection
Use this endpoint to create a new collection to use in Apollo. When posting a new collection, you must provide the account Id, vault Id, and desired collection name for your collection. When a collection is created, a unique collection id is associated for the collection name provided. The collection name is simply a human readable value and multiple collections can have the same name. 

## URL

`https://{{HOST}}/apollo/collections`

## Method

<div class="post">POST</div>

## Required IMS Scopes

* apollo_write

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|Authorization|
|**Content-Type** <br>*required*|application/json|Specifies the type of data|
|**vaultId** <br>*required*|vaultId|Id of the vault|
|**accountId** <br>*required*|accountId|Id of the account|

## Request Body Parameters

|Name|Description|Type|
|---|---|---|
| **collectionName** <br>*required*|Name of the collection|string|

## Example

### Request

```shell
curl -X POST \
  'https://{{HOST}}/apollo/collections/' \
  -H 'Authorization: Bearer {access_token}' \
  -H 'Content-Type: application/json' \
  -H 'accountId: {accountId}' \
  -H 'vaultId: {vaultId}' \
  -d  '{
	"collectionName": "example-collection"
}'
```

### Response

```json
{
    "status": {
        "message": "Collection created",
        "code": "OK"
    },
    "data": {
        "id": "15ff8433-f3cd-4a3a-b0bb-9296c2c1011a",
        "collectionId": "15ff8433-f3cd-4a3a-b0bb-9296c2c1011a",
        "collectionName": "example-collection",
        "vaultId": "example-vault-id",
        "vaultName": null,
        "accountId": "example-account-id",
        "accountName": null
    }
}
```

## Errors

|Error|Description|
|---|---|
|Error Name| Description of Error|
|400 Bad Request|Body does not contain collection name|
|400 Bad Request|Header does not contain AccountId and/or VaultId|
|500 Internal Server Error|An error has occurred|

## Response Body Parameters

|Name|Description|Schema|
|---|---|---|
| **id**|The Id of the collection|string|
| **collectionId**|The Id of the collection|string|
| **collectionName**|The name of the collection|string|
| **vaultId**|The associated vault Id|string|
| **vaultName**|The associated vault name|string|
| **accountId**|The associated account Id|string|
| **accountName**|The associated account name|string|
