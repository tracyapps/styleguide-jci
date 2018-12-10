---
post_title: 'Copy a file from one collection to another'
layout: api_doc
published: true
---
# Copy File

Copy a file from a source collection to destination collection. In order to copy a file, the requestor must have access to both the source and destination ER collections.

## URL

`https://{{HOST}}/apollo/files/copy`

## Method

<div class="post">post</div>

## Required IMS Scopes

* apollo_read
* apollo_write


## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Content-Type** <br>*required*|application/json|Content type|
|**Authorization** <br>*required*|Bearer {access_token}|string|

## Example

### Request

```shell
curl -X POST \
  'https://{{HOST}}/apollo/files/copy' \
  -H 'Authorization: Bearer {access_token}' \
  -H 'Content-Type: application/json'

{
    "copyFileCollectionData":
    [ 
        {
  		    "sourceCollectionId":"example-collection-original",
  		    "destinationCollectionId":"example-collection-copy",
  		    "fileName":"example_image.jpg"
        },
        {
  		    "sourceCollectionId":"example-collection-original",
  		    "destinationCollectionId":"example-collection-copy",
  		    "fileName":"example_json.json"
        }
    ]
}

```

### Response

```json
{
    "status": {
        "message": "Files copying completed",
        "code": "200"
    },
    "data": {
        "Result": "Please check the status of your request at statusURL: https://{{HOST}}/apollo/status/logs?correlationId=c7164076-9224-401c-a6bd-21908563abf8",
        "Message": "Number of file copy requests:2",
        "CorrelationId": "c7164076-9224-401c-a6bd-21908563abf8"
    }
}
```

## Errors

|Error|Description|
|---|---|
|403 Forbidden|The request is understood, but it has been refused or access is not allowed|
|423 Request Locked|File already Locked|
|400 Bad Request|You must specify a  co-relation Id|


## Response Body Parameters

|Name|Description|Schema|
|---|---|---|
|**status.message**|status message |string|
|**status.code**|Status code |string|
|**data.Result**|URL with correlation id for tracking the copied files in destination collection id |string|
|**data.Message**|count of files requested for copying |string|
|**data.CorrelationId**|generated correlationId |string|
