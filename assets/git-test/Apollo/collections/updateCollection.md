---
post_title: 'Update Collection'
layout: api_doc
published: true
---
# Update Collection
Use this endpoint to update an existing collection.

## URL

`https://{{HOST}}/apollo/collections/{collection_id}`

## Method

<div class="put">PUT</div>

## Required IMS Scopes

* apollo_write

## Required ACL Permissions

* owner
* admin
* readwrite

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|Authorization|
|**Content-Type** <br>*required*|application/json|Specifies the type of data|
|**vaultId** <br>*required*|vaultId|Id of the vault|
|**accountId** <br>*accountId*|vaultId|Id of the account|

## Request Body Parameters

|Name|Description|Type|
|---|---|---|
| **collectionName** <br>*required*|Name of the collection|string|

## Example

### Request

```shell
curl -X PUT \
  'https://ctp-api.digitalvault.cloud/apollo/collections/8bedc737-3462-4845-9848-22d4f49d50de' \
  -H 'Authorization: Bearer {access_token}' \
  -H 'Content-Type: application/json' \
  -d '{
	"collectionName": "example-collection-updated"
}'
```

### Response

```json
{
    "status": {
        "message": "Collection updated",
        "code": "OK"
    },
    "data": {
        "id": "15ff8433-f3cd-4a3a-b0bb-9296c2c1011a",
        "collectionId": "15ff8433-f3cd-4a3a-b0bb-9296c2c1011a",
        "collectionName": "example-collection-updated",
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
|403 Forbidden|You do not have access to this resource|
|404 Not Found|No collection found|
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
