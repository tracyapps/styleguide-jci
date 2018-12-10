---
post_title: 'Post Samples'
layout: api_doc
published: true
---
# Post Samples

## URL

`https://{{HOST}}/apollo/devices/{deviceId}/timeseries/samples`

## Method

<div class="post">POST</div>

## Required IMS Scopes

* apollo_read
* apollo_write
* read
* write

## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**deviceId* <br>*requrired*|ID of the device|.../devices/{deviceId}/timeseries/samples|string|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authentication** <br>*required*|Bearer {access_token}|Authorization|
|**Content-Type** <br>*required*|application/json|Specifies the type of Application|
|**ContinuationToken** <br>*optional*||When paging is used for a GET, the continuation token will allow you to paginate across the results|
|**x-correlation-id** <br>*optional*||User specified correlationid that can be used in tracing all the logs in subsequent calls in the API|
|**erCollectionId** <br>*optional*||Collection Id that specifies the security group the object either belongs or will be inserted int|

## Request Body Parameters

|Name|Description|Type|
|---|---|---|
| **List of Samples** <br>*required*||List of Samples to be posted|samples list|
|| **timeseriesId** <br>*required*|Id of the timeseries|string|
|| **val** <br>*required*|Value of the sample|string|
|| **timestamp** <br>*required*|Timestamp of the sample|string|
|| **metric** <br>*required*|Metric of the sample|string|

## Example

### Request

```curl
curl -X POST \
  'https://{{HOST}}/apollo/devices/TestDevice/timeseries/samples' \
  -H 'Authorization: Bearer {{access_token}}' \
  -H 'Content-Type: application/json' \
  -H 'ercollectionid: testcollection' \
  -H 'x-correlation-id: 764ff302-7ba1-42dc-bd4e-e1e883e9a76b' \
  -d '[ 
           {
                "timeseriesId" : "51922b39-8cd3-9ae3-d42f-6c8fde777e9c",
                "val" : 6,
                "timestamp" : "2018-01-27T00:00:00+00:00",
                "mertic" : "Raw"
           },
       {
                "timeseriesId" : "51922b39-8cd3-9ae3-d42f-6c8fde777e9c",
                "val" : 7,
                "timestamp" : "2018-01-27T00:15:00+00:00",
                "mertic" : "Raw"
           }
      ]'
```

### Response

```json
{
    "status" : {
        "Message": "",
        "Code": "202"
    },
    "data" : {}
}
```

## Errors

|Error|Description|
|---|---|
|400| No samples provided|
|403| User does not have access to device|

## Response Body Parameters

|Name|Description|Schema|
|---|---|---|
| **Object Name**|Description|object definition|
