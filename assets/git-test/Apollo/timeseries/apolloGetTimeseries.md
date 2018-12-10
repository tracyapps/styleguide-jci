---
post_title: 'Get Timeseries'
layout: api_doc
published: true
---
# Get Timeseries

## URL

`https://{{HOST}}/apollo/devices/{deviceId}/timeseries/{timeseriesId}`

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
|**deviceId* <br>*requrired*|ID of the device|.../devices/{deviceId}/...|string|
|**timeseriesId* <br>*requrired*|ID of the timeseries|.../timeseries/{timeseriesId}|string|

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
  'https://{{HOST}}/apollo/devices/TestDevice/timeseries/51922b39-8cd3-9ae3-d42f-6c8fde777e9c' \
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
    "data": {
        "timeseriesId": "9c810c2d-0f6f-4e46-ab9f-e06a1ea1427b",
        "orgId": "marvel",
        "timeseriesType": "None",
        "dag": [
            {
                "metric": "Raw",
                "processingType": "raw",
                "dataType": "double",
                "validateInputData": false
            }
        ],
        "status": "active"
    }
}
```

## Errors

|Error|Description|
|---|---|
|403|User does not have access to device|

## Response Body Parameters

|Name|Description|Schema|
|---|---|---|
| **timeseriesId**|Id of the Timeseries|guid|
| **orgId**|Id of the org the timeseries is in|string|
| **timeseriesType**|Type of Timeseries|string|
| **dag**|List of Metrics on the Timeseries|List of Dags|
| **status**|Status of the Timeseries|Boolean|



