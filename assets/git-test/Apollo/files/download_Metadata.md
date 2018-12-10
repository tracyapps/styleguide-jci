---
post_title: 'Download a metadata file'
layout: api_doc
published: true
---

# Download Metadata

This endpoint is used for downloading a metadata file.


## URL

`https://{{HOST}}/files/{filename}?alt=metadata`

## Method

<div class="get">get</div>

## Required IMS Scopes

* apollo_read


## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**filename**<br>*required*|File name of the file to download|example.png|string|


## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**alt**<br>*required*|Set to "metadata" to get the files metadata|alt=metadata|string|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|Authorization token|
|**Content-Type** <br>*required*|application/json|Description|
|**ercollectionid** <br>*required*|ercollectionid|ercolelction to query against|
|**If-Match** <br>*optional*|file version|Specifies the file version to retrieve. If the file metadata contains a "max-age", the response will contain a Cache-Control header|


## Example

### Request

```shell
curl -X get \
  'https://{{HOST}}/files/example.png?alt=metadata' \
  -H 'Authorization: Bearer {access_token}' \
  -H 'Content-Type: application/json' ,\
  -H 'erCollectionID: {ercollectionid}'
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
        "file_description": "Mango image from sample photos",
        "file_size": 2179072,
        "file_type": "image/png",
        "file_rating": "5",
        "file_version": "1"    
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
|500 Internal Server Error|Error while processing the request|

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
