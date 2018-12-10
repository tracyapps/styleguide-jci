---
post_title: 'Download a metadata file based on the File version'
layout: api_doc
published: true
---

# Download Metadata by version

This endpoint is used for downloading a metadata file based on the file version.


## URL

`https://{{HOST}}/files/{filename}/version/{version}?alt=metadata`

## Method

<div class="get">get</div>

## Required IMS Scopes

* apollo_read


## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**filename**<br>*required*|File name which user wants to download|abc.png|string|
|**version** <br>*required*|File version which user wants to download|2|string|


## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**alt**<br>*required*|alt is used for response|alt=metadata|string|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|Description|
|**Content-Type** <br>*required*|application/json|Description|
|**ercollectionid** <br>*required*|application/json|Description|

## Example

### Request

```shell
curl -X get \
  'https://{{HOST}}/files/example.png/version/2?alt=metadata' \
  -H 'Authorization: Bearer {access_token}' \
  -H 'Content-Type: application/json' ,\
  -H 'ercollectionid: {{ercollectionid}}'
  \
```

### Response

```json

   {
    "status": {
        "message": "",
        "code": "200"
    },
    "data": {
        "file_name": "example.png",
        "file_description": "Image from sample photos",
        "file_size": 2179072,
        "file_type": "image/png",
        "file_rating": "5",
        "file_version": "2"
    }
}

```
## Errors

|Error|Description|
|---|---|
|400 Bad Request|ER Collection ID not provided|
|400 Bad Request|Invalid filename|
|403 Forbidden|The request is understood, but it has been refused or access is not allowed|
|404 Not Found|File not found|

## Response Body Parameters

|Name|Description|Schema|
|---|---|---|
| **status**|Status of downloaded file|string|
| **status.message**|Message corresponding to the HTTP status code |string|
| **status.code**|HTTP status code |string|
| **data.fileName**|File Name which system downloaded|string|
| **data.description**|Description of File|string|
| **data.size**|Size of downloaded Files|string|
| **data.type**|File Type|string|
| **data.rating**|File rating|string|
| **data.version**|File version|string|
