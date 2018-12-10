---
post_title: 'Delete a File'
layout: api_doc
published: true
---
# Delete File

Use this endpoint to delete a file. There is only soft delete and no hard delete for files and metadata.
ERCollectionID should be passed by user itself. If-Match OR If-None-Match should be filed with FileVersion and * respectively. Only one at a time will be required.

## URL

`https://{{HOST}}/apollo/files/{filename}`

## Method

<div class="delete">delete</div>

## Required IMS Scopes

* apollo_read
* apollo_write



## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**filename**<br>*required*|File name which user wants to delete|abc.png|string|


## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|Description|
|**ercollectionid** <br>*required*|application/json|Description|
|**If-Match** <br>*required*|Version number|Only required if "If-None-Match" is not specified. Set to the version number of the latest known version to delete the file.|
|**If-None-Match** <br>*required*|*|Only required if "If-Match" is not specified. Set to '*' to delete the latest version.|


## Example

### Request

```shell
curl -X delete \
  'https://{{HOST}}/apollo/files/example.png' \
  -H 'Authorization: Bearer {access_token}' \
  -H 'erCollectionID: {ercollectionid}' , \
 -H 'If-None-Match: *' \
```

### Response

```json
{
    "status": {
        "message": "OK",
        "code": "200"
    },
    "data": {
        "message": "File Deleted.",
        "fileName": "example.png"
    }
}
```

## Errors

|Error|Description|
|---|---|
|403 Forbidden|The request is understood, but it has been refused or access is not allowed|
|400 Bad Request|The Filename is invalid|
|400 Bad Request|You must specify a ER Collection Id|
|400 Bad Request|If-Match and If-None-Match both are not expected together. Only one of them is required|
|400 Bad REquest|Either If-Match or If-None-Match is expected|
|400 Bad Request|The request is invalid|




## Response Body Parameters

|Name|Description|Schema|
|---|---|---|
| **status**|Status of delete files|string|
| **status.message**|Message corresponding to the HTTP status code |string|
| **status.code**|HTTP status code |string|
| **data.message**|Data message|string|
| **data.fileName**|File Name which system deleted|string|
