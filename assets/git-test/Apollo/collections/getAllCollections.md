---
post_title: 'Get All Collections'
layout: api_doc
published: true
---
# Get All Collections
Use this endpoint to get all collections the client has access to. 

## URL

`https://{{HOST}}/apollo/collections`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read

## Required ACL Permissions

* owner
* admin
* readwrite
* readonly

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|Authorization|

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**minPermission** <br>*optional*|Minimum permission set to return default: readonly, options: readonly, readwrite, admin, owner|/?minPermission=admin|none|

## Example

### Request

```shell
curl -X GET \
  'https://dev-api.digitalvault.cloud/apollo/collections?minPermission=readonly' \
  -H 'Authorization: Bearer {access_token}'
```

### Response

```json
{
    "status": {
        "message": "OK",
        "code": "OK"
    },
    "data": [
    	{
	        "id": "aca56f13-ea9f-870a-c57c-8dd57162b674",
            "collectionId": "aca56f13-ea9f-870a-c57c-8dd57162b674",
	        "collectionName": "example-collection-1",
	        "vaultId": "7337975c-bc1e-9edc-4121-3fba6e098fad",
	        "vaultName": "jci.vault",
	        "accountId": "0c18a215-01cf-fa66-1683-a80042270020",
	        "accountName": "jci"
	    },
	    {
	        "id": "0db837c6-ba67-504a-23ab-a6c4bb59f844",
            "collectionId": "0db837c6-ba67-504a-23ab-a6c4bb59f844",
	        "collectionName": "example-collection-2",
	        "vaultId": "7337975c-bc1e-9edc-4121-3fba6e098fad",
	        "vaultName": "jci.vault",
	        "accountId": "0c18a215-01cf-fa66-1683-a80042270020",
	        "accountName": "jci"
	    }
    ]     
}
```

## Errors

|Error|Description|
|---|---|
|Error Name| Description of Error|
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
