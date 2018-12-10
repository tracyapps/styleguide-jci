---
post_title: 'Download a file (Media) based on file version'
layout: api_doc
published: true
---
# Download Media by Version

This endpoint is used for Downloading a media file based on file version.

## URL

`https://{{HOST}}/files/{filename}/version/{version}`

## Method

<div class="get">get</div>

## Required IMS Scopes

* apollo_read


## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**filename** <br>*required*|File name which user wants to download|abc.png|string|
|**version** <br>*required*|File version which user wants to download|2|string|


## Request Header Parameters

|Type|Value|Description|ostman
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|Description|
|**Content-Type** <br>*required*|application/json|Description|
|**ercollectionid** <br>*required*|application/json|Description|

## Example

### Request

```shell
curl -X get \
  'https://{{HOST}}/files/example.png/version/2' \
  -H 'Authorization: Bearer {access_token}' \
  -H 'Content-Type: application/json' ,\
  -H 'ercollectionid: {ercollectionid}'
  \

```

### Response

```json

    Media Stream

```
## Errors

|Error|Description|
|---|---|
|400 Bad Request|ER Collection ID not provided|
|400 Bad Request|Invalid filename|
|403 Forbidden|The request is understood, but it has been refused or access is not allowed|
|404 Not Found|File not found|
|500 Internal Server Error|Error while processing the request|