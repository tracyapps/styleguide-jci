---
post_title: 'Post Timeseries'
layout: api_doc
published: true
---
# Post Timeseries

## URL

`https://{{HOST}}/apollo/devices/{deviceId}/timeseries`

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
|**deviceId* <br>*requrired*|ID of the device|.../devices/{deviceId}/timeseries|string|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authentication** <br>*required*|Bearer {access_token}|Authorization|
|**Content-Type** <br>*required*|application/json|Specifies the type of Application|
|**ContinuationToken** <br>*optional*||When paging is used for a GET, the continuation token will allow you to paginate across the results|
|**x-correlation-id** <br>*optional*||User specified correlationid that can be used in tracing all the logs in subsequent calls in the API|
|**erCollectionId** <br>*optional*||Collection Id that specifies the security group the object either belongs or will be inserted int|

## Request Body Parameters

|Name|Name|Description|Type|
|---||---|---|
| **List of Points** <br>*required*||List of Points that are on the Device|point list|
|| **id** <br>*required*|Id of the point|string|
|| **pointType** <br>*required*|Type of Point|string|

## Example

### Request

```curl
curl -X POST \
  'http://{{HOST}}/apollo/devices/TestDevice/timeseries' \
  -H 'Authorization: Bearer {{access_token}}' \
  -H 'Content-Type: application/json' \
  -H 'ercollectionid: testcollection' \
  -H 'x-correlation-id: 764ff302-7ba1-42dc-bd4e-e1e883e9a76b' \
  -d '[
    {
        "id": "PointId1",
		"pointType": "temperature"
    },
    {
        "id": "PointId2",
		"pointType": "humidity"
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
    "data" : {
        "deviceId" : "DeviceId1",
        "relationships" : [
            {
                "pointId": "PointId1",
                "pointType": "temperature",
                "timeseriesId": "tsId1"
            },
            {
                "pointId": "PointId2",
                "pointType": "humidity",
                "timeseriesId": "tsId2"
            }
        ]
    }
}
```

## Errors

|Error|Description|
|---|---|
|400| No points provided|
|403| User does not have access to device|

## Response Body Parameters

|Name|Description|Schema|
|---|---|---|
| **deviceId**|Id of the device points were added to|string|
| **relationshiops**|List of points on the device|list|
| **pointId**|Id of the point|list|
| **pointType**|Type of the point|list|
| **timeseriesId**|Id of the timeseries on the point|list|