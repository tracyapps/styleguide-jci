---
post_title: 'Download a media file'
layout: api_doc
published: true
---
# Download a Media File

This endpoint is used for Downloading a media file.

## URL

`https://{{HOST}}/files/{file_entity_filename}`

## Method

<div class="get">get</div>

## Required IMS Scopes

* apollo_read


## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**fileName**<br>*required*|File name which user wants to download|abc.png|string|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|Description|
|**Content-Type** <br>*required*|application/json|Description|
|**ercollectionid** <br>*required*|application/json|Description|
|**If-Match** <br>*optional*|file version|Specifies the file version to retrieve. If the file metadata contains a "max-age", the response will contain a Cache-Control header|

## Example

### Request

```shell
curl -X get \
  'https://{{HOST}}/files/example.png' \
  -H 'Authorization: Bearer {access_token}' \
  -H 'Content-Type: application/json' ,\
  -H 'ercollectionid: {{ercollectionid}}'
  \

```

### Response

```json

    Media Stream OR No Content

```
## Errors

|Error|Description|
|---|---|
|400 Bad Request|ER Collection ID not provided|
|400 Bad Request|Invalid filename|
|403 Forbidden|The request is understood, but it has been refused or access is not allowed|
|404 Not Found|File not found|
|500 Internal Server Error|Error while processing the request|
