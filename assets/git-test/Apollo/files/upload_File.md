---
post_title: 'Upload a File'
layout: api_doc
published: true
---
# Upload File

This endpoint is used for uploading a file.

Create a New File:
If-None-Match: Setting this header to "*" will create a new file only if one doe not already exist with the same name.

Update Existing:
If-Match: The API will check the version specified in this header against version of the latest file. If the version specified matches the latest version, then a new verion of the file will be created. 

Dangerous Upsert:
If "If-Match" and "If-None-Match" both are not provided on a request, the API will create a new version of a file.

## URL

`https://{{HOST}}/files/upload/{filename}`

## Method

<div class="put">UploadFile</div>

## Required IMS Scopes

* apollo_read
* apollo_write

## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**filename**<br>*required*|File name which user wants to Upload|Pencil.jpg|string|


## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|Authorization token|
|**Content-Type** <br>*required*|multipart/related; boundary=foo_bar_baz|Content type|
|**ercollectionid** <br>*required*|string|The ER collection to where the file will be uploaded|
|**If-Match** <br>*optional*|Version|Specifies the version number|
|**If-None-Match** <br>*optional*|*|Set to "*" to create a new file if one doe not already exist|
|**X-Metadata-Only**<br>*required*|boolean|True: Update only the metadata. False: Update the media and the metadata|


## Example

### Request

```shell
curl -X PUT \
  'https://{{HOST}}/apollo/files/upload/example_image.png' \
  -H 'Content-Type: multipart/related; boundary=example_boundary' \
  -H 'If-None-Match: *' \
  -H 'X-Metadata-Only: false' \
  -H 'ercollectionid: {ercollectionid}' \
  -d '--example_boundary
Content-Type: application/json; charset=UTF-8;

{
                "file_name": "example_image.png",
                "file_description": "Example image file",
                "file_size": 2179072,
                "file_type": "image/png",
                "file_rating": "5",
                "max-age": 3600
}
--example_boundary
Content-Type: image/png

{base64 encoded file}

--example_boundary--'
```

### Response

```json
{
    "status": {
        "message": "OK",
        "code": "200"
    },
    "data": {
        "message": "New Entity Created with Media and Metadata",
        "entityId": "9e0efa0e-c6d7-4958-bf62-b05d9aee4c14",
        "version": "1",
        "fileName": "example_image.png",
        "fileSize": 2179072,
        "fileType": "image/png"
    }
}  
```

## Errors

|Error|Description|
|---|---|
|403 Forbidden|The request is understood, but it has been refused or access is not allowed|
|400 Bad Request|The Filename is invalid|
|400 Bad Request|Metadata file is either empty or invalid.|
|400 Bad Request|You must specify a ER Collection Id|
|400 Bad Request|The Filename is not matching with Metadata Filename.|
|400 Bad Request|The request is invalid|


## Response Body Parameters

|Name|Description|Schema|
|---|---|---|
| **status**|Status of upload files|string|
| **status.message**|Message corresponding to the HTTP status code |string|
| **status.code**|HTTP status code |string|
| **data.message**|Data message|string|
| **data.entityId**|Entity ID of request|string|
| **data.version**|File version|string|
| **data.fileName**|File Name which system upload|string|
| **data.fileSize**|File Size|Long|
| **data.fileType**|File Type|string|
