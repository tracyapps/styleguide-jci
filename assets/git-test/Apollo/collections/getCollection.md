---
post_post_title: 'Get Collection'
layout: api_doc
published: true
---
# Get Collection
Use this endpoint to get a collection's details.

## URL

`https://{{HOST}}/apollo/collections/{collection_id}`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read

## Required ACL Permissions

* owner
* admin
* readwrite
* readonly

## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**collection_id** <br>*required*|Id of the collection to get|/endpoint/example-collection-id|string|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|Authorization|

## Example

### Request

```shell
curl -X GET \
  'https://ctp-api.digitalvault.cloud/apollo/collections/{collection_id}' \
  -H 'Authorization: Bearer {access_token}' \
```

### Response

```json
{
    "status": {
        "message": "OK",
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
|400 Bad Request|No parameters passed|
|403 Forbidden|You do not have access to this resource|
|404 Not Found|Collection not found|
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
