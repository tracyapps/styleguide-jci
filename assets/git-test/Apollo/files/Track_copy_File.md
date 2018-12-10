---
post_title: 'Track File using correlation Id'
layout: api_doc
published: true
---
# Track File 

Track the status of a copy request using the correlation ID

## URL

`https://{{HOST}}/apollo/files/track/{correlation_id}`

## Method

<div class="get">get</div>

## Required IMS Scopes

* apollo_read


## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**correlation_id** <br>*required*|correlationId generated during a file copy request|string|


## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Content-Type** <br>*required*|application/json|Content type|
|**Authorization** <br>*required*|Bearer {{access_token}}|Access token|
|**ercollectionid** <br>*required*|{{ercollectionid}}|The er collection to query against|


## Example

### Request

```shell
curl -X Get \
  'https://{{HOST}}/apollo/files/track' \
  -H 'Authorization: Bearer {access_token}' \
  -H 'Content-Type: application/json'\
  -H 'ercollectionid: {ercollectionid}'
```

### Response

```json
{
    "status": {
        "message": "Track copied files",
        "code": "200"
    },
    "data": {
        "Summary": {
            "FilesRequestedToBeCopied": "1",
            "Succeeded": "1",
            "Failed": "0"
        },
        "Detail": [
            {
                "FileName": "example_image.jpg",
                "SourceCollectionId": "example-collection-original",
                "DestinationCollectionId": "example-collection-copy",
                "SourceEntityId": "59a7631f-6f17-44b0-93c6-9a0b34ef71ab",
                "DestinationEntityId": "6c4aa243-c22f-4de0-81b9-655eb9929886",
                "Status": 1
            }
        ]
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
|**Summary.FilesRequestedToBeCopied**|Number of File requested for copying |string|
|**Summary.Succeeded**|Copy succeded|string|
|**Summary.Failed**|Copy failed |string|
|**Detail.FileName**|File Name to be copied from source |string|
|**Detail.SourceCollectionId**|Er Source Collection Id |string|
|**Detail.DestinationCollectionId**|ER Destination collection Id |string|
|**Detail.SourceEntityId**|Source Entity Id |string|
|**Detail.DestinationEntityId**|Destination Entity Id |string|
|**Detail.Status**|Status of the one complete flow|string|
|**Detail.ReasonOfFailure**|If copy failed, reason for it|string|
