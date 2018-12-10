---
post_title: 'Get Change Feed Logs'
layout: api_doc
published: true
---
# Get Change Feed Logs

Get the change feed logs for a given ER collection

## URL

`https://{{HOST}}/apollo/changefeed/logs`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read
* apollo_write

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**startSequenceId** <br>*optional*|Beginning sequence ID to query against|138|long|
|**endSequenceId** <br>*optional*|Ending sequence ID to query against|205|long|
|**startTime** <br>*optional*| Beginning of time range to query|2018-01-01T00:00:00+00:00|ISO 8601 string(date-time + offset)|
|**endTime** <br>*optional*| End of time range to query|2018-01-01T00:00:00+00:00|ISO 8601 string(date-time + offset)|
|**limit** <br>*optional*| Page size of Response (Default: 100)|20|int|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|Autorization token|
|**Content-Type** <br>*required*|application/json|Description|
|**erCollectionId** <br>*required*|ercollectionid|The ER collection to search for change feed notifications|
|**continuationToken** <br>*optional*| contiuationToken |Token to the next page of results|

 
## Example

### Request

```shell
curl -X GET \
  'https://{{HOST}}/apollo/changefeed/logs?limit=1' \
  -H 'Authorization: Bearer {access_token}' \
  -H 'Cache-Control: no-cache' \
  -H 'erCollectionId: test-collection'
```

### Response

```json
{
    "status": {
        "message": "",
        "code": "OK"
    },
    "data": [
        {
            "unixTimestamp": 1537219606231,
            "version": "1",
            "notificationId": "cc703175-581b-4819-9ec1-87cbef7c036b",
            "notificationType": "Updated",
            "entityType": "BRICK_0_4__Point",
            "relationshipType": null,
            "ercollectionid": "test-collection",
            "entityId": "7326d478-6ea5-96a5-ccd1-05f3fabf0eb3",
            "relationshipId": null,
            "id": "cc703175-581b-4819-9ec1-87cbef7c036b",
            "transactionId": "081cd33b-8037-450d-8a7b-dc153315e003",
            "timestamp": "2018-09-17T21:26:46.2311774+00:00",
            "type": "Updated",
            "topic": null,
            "correlationid": "691ad6a1-216c-43cb-aff1-bb1f4fcc2856",
            "timeout": 0,
            "sender": "ErCollection:test-collection",
            "recipient": null,
            "data": null,
            "checksum": "d2a8bbe41771a75a7fe552a777c15578",
            "sequenceContainer": "test-collection",
            "sequenceId": 9,
            "sequence": {
                "container": "test-collection",
                "sequenceid": 9,
                "wrap": false
            }
        },
        {
            "unixTimestamp": 1537221075544,
            "version": "1",
            "notificationId": "8d3c8e1f-a49b-42e7-81cb-abe3ab949adf",
            "notificationType": "Updated",
            "entityType": "BRICK_0_4__Point",
            "relationshipType": null,
            "ercollectionid": "test-collection",
            "entityId": "bd71ff0c-04ae-1f2e-1e0a-fdb88c34b305",
            "relationshipId": null,
            "id": "8d3c8e1f-a49b-42e7-81cb-abe3ab949adf",
            "transactionId": "63500f32-5e26-415c-abd2-8b3912acd037",
            "timestamp": "2018-09-17T21:51:15.5449217+00:00",
            "type": "Updated",
            "topic": null,
            "correlationid": "5f83fd58-dfdd-44aa-9c26-d3e8d1479072",
            "timeout": 0,
            "sender": "ErCollection:test-collection",
            "recipient": null,
            "data": null,
            "checksum": "0d24fd4c37ac4a366b6dae64548f02fe",
            "sequenceContainer": "test-collection",
            "sequenceId": 10,
            "sequence": {
                "container": "test-collection",
                "sequenceid": 10,
                "wrap": false
            }
        }
    ],
    "paging": {
        "totalCount": 2,
        "continuationToken": "+RID:oW1XAMAvvwAyAAAAAAAACg==#RT:1#TRC:1#FPC:ATIAAAAAAAAKMgAAAAAAAAo="
    }
}
```

## Errors

|Error|Description|
|---|---|
|400 Bad Request|erCollectionId header is required|
|404 Not Found|No records found|
|500 Internal Server Error|Error occured while retrieving records|

## Response Body Parameters

|Name|Description|Schema|
|---|---|---|
| **status**|Status|string|
