---
post_title: 'Get Samples'
layout: api_doc
published: true
---
# Get Samples

## URL

`https://{{HOST}}/apollo/devices/{deviceId}/timeseries/samples`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read
* apollo_write
* read
* write

## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**deviceId* <br>*requrired*|ID of the device|.../devices/{deviceId}/timeseries/samples|string|

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**timeseries_ids** <br>*required*|List of timeseries to read samples from|?timeseries_ids=ts1&timeseries_ids=ts2|timeseries list|
|**startTime* <br>*optional*|Starting time of the target period|?startTime=2018-4-10T19%3A05%3A50%2B00%3A00|string(date-time)
|**endTime* <br>*optional*|Ending time of the target period|?endTime=2018-4-15T14%3A46%3A35%2B00%3A00|string(date-time)|
|**orderby* <br>*optional*|Order the samples by type and in ascending or descending order|?orderby=timestamp desc|string asc/desc|
|**limit* <br>*optional*|The number of samples returned|?limit=100|number|
|**paginated* <br>*optional*|If you want the results paginated or not|?paginated=true/timeseries|boolean|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authentication** <br>*required*|Bearer {access_token}|Authorization|
|**Content-Type** <br>*required*|application/json|Specifies the type of Application|
|**ContinuationToken** <br>*optional*||When paging is used for a GET, the continuation token will allow you to paginate across the results|
|**x-correlation-id** <br>*optional*||User specified correlationid that can be used in tracing all the logs in subsequent calls in the API|
|**erCollectionId** <br>*optional*||Collection Id that specifies the security group the object either belongs or will be inserted int|

## Example

### Request

```curl
curl -X GET \
  'https://{{HOST}}/apollo/devices/TestDevice/timeseries/samples?timeseries_ids=5cdc7382-27d8-4e75-bade-38ea58cde171&limit=100' \
  -H 'Authorization: Bearer {{access_token}}' \
  -H 'Content-Type: application/json' \
  -H 'ercollectionid: testcollection' \
  -H 'x-correlation-id: 764ff302-7ba1-42dc-bd4e-e1e883e9a76b' \
```

### Response

```json
{
    "status": {
        "message": "",
        "code": "200"
    },
    "data": [
        {
            "unixTimestamp": 1515842400000,
            "ingestUnixTimestamp": 1522275493176,
            "timestamp": "2018-01-13T11:20:00+00:00",
            "timeOffset": "+00:00",
            "val": 10,
            "timeseriesId": "5cdc7382-27d8-4e75-bade-38ea58cde171",
            "metric": "Raw"
        },
        {
            "unixTimestamp": 1515842100000,
            "ingestUnixTimestamp": 1522275493176,
            "timestamp": "2018-01-13T11:15:00+00:00",
            "timeOffset": "+00:00",
            "val": 9,
            "timeseriesId": "5cdc7382-27d8-4e75-bade-38ea58cde171",
            "metric": "Raw"
        },
        {
            "unixTimestamp": 1515841800000,
            "ingestUnixTimestamp": 1522275493176,
            "timestamp": "2018-01-13T11:10:00+00:00",
            "timeOffset": "+00:00",
            "val": 8,
            "timeseriesId": "5cdc7382-27d8-4e75-bade-38ea58cde171",
            "metric": "Raw"
        }
    ],
    "paging": {
        "totalCount": 3,
        "continuationToken": "+RID:qUB+AI4+DQDW8QEAAAAAAA==#RT:1#TRC:3#RTD:GGrCdg7zGzY=#FPC:AdXxAQAAAAAA2fEBAAAAAAA="
    }
}
```

## Errors

|Error|Description|
|---|---|
|400| No timeseries ids provided|
|403| User does not have access to device|

## Response Body Parameters

|Name|Description|Schema|
|---|---|---|
| **Object Name**|Description|object definition|
