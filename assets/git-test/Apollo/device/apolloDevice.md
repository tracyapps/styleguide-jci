---
post_title: 'Post Device'
layout: api_doc
published: true
---
# Post Device

Used to register the device with the platform. This endpoint creates a device identity and stores the entity in the graph asynchronously. The status can be checked via the Status Api
## URL

`https://{{HOST}}/apollo/devices`

## Method

<div class="post">POST</div>

## Required IMS Scopes

* device_write

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authentication** <br>*required*|Bearer {access_token}|Description|
|**Content-Type** <br>*required*|application/json|Description|

## Request Body Parameters

|Name|Description|Type|
|---|---|---|
| **Object Name** <br>*required*|Description|object definition|

## Example

### Request

```shell 
curl -X POST \
  'https://{{HOST}}/apollo/devices' \
  -H 'authorization: Bearer {access_token}' \
  -H 'content-type: application/json' \
  -d '{
         "id": "4218aaaaaaaaaaaassaaa",
         "deviceType":"sbh"
      }'
```

### Response

```json
{
    "status" : {
        "message": "",
        "code": "202"
    },
    "data" : {
        "id": "<id>",
        "password": "<password>",
        "deviceType": "<deviceType>",
    }
}
```

## Errors

|Error|Description|
|---|---|
|400| Request is missing data|
|403| Not Authorized|
|409| The device already exitsts|

## Response Body Parameters

|Name|Description|Schema|
|---|---|---|
| **id**|Id of the new Device|string|
| **password**|Password for the device to use|string|
| **deviceType**|Device Type|string|
