---
post_title: 'Provides status history based on transactionid, correlationid, ercollectionid, startTime, endTime, entityId, relationshipId'
layout: api_doc
published: true
---
# Get Status By Logs

This endpoint returns all status messages related to a combination of transactionid, correlationid, ercollectionid, startTime, endTime, entityId, or relationshipId.
At least one of the above must be part of the query.

## URL

`https://{{HOST}}//apollo/status/logs`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read
* apollo_write

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**transactionId** <br>*optional*| Transaction ID of the request|4304b58a-5c33-48e2-87cf-548c45d1bf72|string|
|**correlationId** <br>*optional*| Correlation ID of the request|GUID|string|
|**startTime** <br>*optional*| Beginning of time range to query|2018-01-01T00:00:00+00:00|ISO 8601 string(date-time + offset)|
|**endTime** <br>*optional*| End of time range to query|2018-01-01T00:00:00+00:00|ISO 8601 string(date-time + offset)|
|**entityId** <br>*optional*| Entity ID of the request|GUID|string|
|**relationshipId** <br>*optional*| Relationship ID of the request|GUID|string|
|**limit** <br>*optional*| Page size of Response|100|int|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|Authorization token|
|**ercollectionid** <br>*required*|{ErCollectionId}|The ER Collection Id|


## Example

### Request

```shell
curl -X GET \
  'https://{{HOST}}/apollo/status/logs?transactionId=4304b58a-5c33-48e2-87cf-548c45d1bf72\
  -H 'Authorization: Bearer {access_token}' \
  -H 'ercollectionid: example-er-collection-id'
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
            "serviceData": {
                "entityId": "E70b1df82-a5c2-44c2-bebe-7f5903358ba2",
                "erCollectionId": "ER86c78613-fad6-40fc-8aa1-90f4c11d6c42",
                "relationshipId": "R7a36adb0-68c6-4763-a2de-4bbea963cdf2"
            },
            "id": "test-6486ce8d-1001-4377-9eb7-bb10a8ea46e1",
            "enqueuedTimestamp": "2018-07-31T15:12:37.3131852+00:00",
            "receivedTimestamp": "2018-07-31T15:12:42.3131859+00:00",
            "unixReceievedTimestamp": 1533049962313,
            "unixEnqueuedTimestamp": 1533049957313,
            "messageType": "Request",
            "requestAction": "Upsert",
            "state": "Completed",
            "requestObject": "TS",
            "transactionId": "4304b58a-5c33-48e2-87cf-548c45d1bf72",
            "payload": null,
            "retryCount": 0,
            "message": null,
            "sender": "sub:app:er.nano",
            "recipient": "sub:app:er.nano",
            "correlationId": "25695061-206a-48aa-adcf-483358909953",
            "timeout": 0,
            "topic": null,
            "stateHistory": [
                {
                    "timestamp": "2018-07-31T15:12:42.3131859+00:00",
                    "unixTimestamp": 1533049962313,
                    "state": "Requested"
                },
                {
                    "timestamp": "2018-07-31T15:12:42.8131859+00:00",
                    "unixTimestamp": 1533049962813,
                    "state": "Completed"
                }
            ]
        }
    ],
    "paging": {
        "totalCount": 1,
        "continuationToken": "+RID:6CIpANiSLA+pawAAAAAAAA==#RT:1#TRC:1#FPC:AalrAAAAAAAAqWsAAAAAAAA="
    }
}
```

## Errors

|Error|Description|
|---|---|
|404 Not Found|No records found|
|400 Bad Request|No parameter passed|
|500 Internal Server Error|Error occured while reading status|

## Response Body Parameters

|Name|Description|Schema|
|---|---|---|
| **status**|Status|string|
| **status.message**|Message corresponding to the HTTP status code |string|
| **status.code**|HTTP status code |string|
| **data**|Details|string|
| **data.transactionId**|The transaction id originated from the request|string|
| **data.id**|Unique identifier of this specific request|string|
| **data.enqueuedTimestamp**|Datetime of this specific request sent to Event Hub|ISO 8601 string(date-time + offset)|
| **data.receivedTimestamp**|Datetime of this specific request picked up by status processor|ISO 8601 string(date-time + offset)|
|**data.messageType**|The type of transaction such as Status or Request|string|
|**data.requestAction**|This describes the action that is being taken such as Upsert or Delete|string|
|**data.state**|This describes the state of the message such as Processing or Created|string|
| **data.requestObject**|The type of object we are trying to create, such as Device, Point, TS, Etc|string|
| **data.payload**|This is where the body of the resource is being requested, such as the properties that go into a new device entity|JObject|
| **data.payload.Id**|||
| **data.payload.TimeseriesId**|||
| **data.payload.OrgId**|||
| **data.payload.TimeseriesType**|||
| **data.payload.status**|||
| **data.retryCount**|Describes the total number of tries that have been attempted after recieving a failure|Int|
| **data.message**|A message field to describe the state the object has gotten into such as an error state|string|
| **data.sender**|The principal that is sending the message: ie: sub:app:ts.nano|string|
| **data.recipient**|The principal that is intended to recieve the message: ie: sub:app:er.nano|string|
| **data.correlationId**|The correlation id of the stack of calls|string|
| **data.timeout**|TImeout|int|
| **data.topic**|Topic|string|
| **data.serviceData**|The Service Data from the request|string|
| **data.serviceData.erCollectionId**|ER Collection Id of this specific request|string|
| **data.serviceData.entityId**|Entity Id of this specific request|string|
| **data.serviceData.relationshipId**|Relationship Id of this specific request|string|
| **data.stateHistory.timestamp**|State history timestamp |string|
| **data.stateHistory.unixTimestamp**|State history unixtimestamp |string|
| **data.stateHistory.state**|State of stateHistory|string|
| **paging.totalCount**|Total count of messages return|string|
| **paging.continuationToken**|Next page continuation token|string|
