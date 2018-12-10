---
post_title: 'Get Hierarchy'
layout: api_doc
published: true
---
# Get Hierarchy

List schema hierarchy for the given schema collection id

## URL

`https://{{HOST}}/apollo/schema/entitytypes/schemacollections/{id}/hierarchy`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read

## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**id** <br>*required*|Unique id of schema|/entitytypes/id|string|

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**v** <br>*optional*|Service Version|/entitytypes/id?v=1.0|Number|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|IMS access token|

## Example

### Request

```shell
curl -X GET \
  https://{{HOST}}/entitytypes/schemacollections/BRICK_0_4/hierarchy \
  -H 'Authorization: Bearer {access_token}'
```

### Response

```json
{
    "status": {
        "message": "Operation completed",
        "code": "200"
    },
    "transactionId": "707B8943C9B9495AB041D8B890310128",
    "paging": null,
    "data": [
        {
            "children": [
                {
                    "children": [
                        {
                            "children": [
                                {
                                    "children": [],
                                    "id": "BRICK_0_4__HWS_Medium_Temperature_Hot_Water_Differential_Pressure_Sensor"
                                }
                            ],
                            "id": "BRICK_0_4__Medium_Temperature_Hot_Water_Differential_Pressure_Sensor"
                        },
                        {
                            "children": [],
                            "id": "BRICK_0_4__HWS_Hot_Water_Differential_Pressure_Sensor"
                        }
                    ],
                    "id": "BRICK_0_4__Hot_Water_Differential_Pressure_Sensor"
                },
                {
                    "children": [],
                    "id": "BRICK_0_4__Chilled_Water_Differential_Pressure_Sensor"
                },
                {
                    "children": [],
                    "id": "BRICK_0_4__Supply_Fan_Differential_Pressure_Sensor"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "id": "BRICK_0_4__AHU_Heat_Wheel_Differential_Pressure_Sensor"
                        }
                    ],
                    "id": "BRICK_0_4__Heat_Wheel_Differential_Pressure_Sensor"
                },
                {
                    "children": [],
                    "id": "BRICK_0_4__Filter_Differential_Pressure_Sensor"
                },
                {
                    "children": [],
                    "id": "BRICK_0_4__CWS_Chilled_Water_Differential_Pressure_Sensor"
                },
                {
                    "children": [],
                    "id": "BRICK_0_4__AHU_Differential_Pressure_Sensor"
                }
            ],
            "id": "BRICK_0_4__Differential_Pressure_Sensor"
        },
        {
            "children": [
                {
                    "children": [],
                    "id": "BRICK_0_4__AHU_Mixed_Air_Damper_Position_Sensor"
                },
                {
                    "children": [
                        {
                            "children": [],
                            "id": "BRICK_0_4__AHU_Outside_Air_Damper_Position_Sensor"
                        }
                    ],
                    "id": "BRICK_0_4__Outside_Air_Damper_Position_Sensor"
                },
                {
                    "children": [],
                    "id": "BRICK_0_4__AHU_Bypass_Damper_Position_Sensor"
                },
                {
                    "children": [],
                    "id": "BRICK_0_4__Mixed_Air_Damper_Position_Sensor"
                },
                {
                    "children": [],
                    "id": "BRICK_0_4__Bypass_Damper_Position_Sensor"
                },
                {
                    "children": [],
                    "id": "BRICK_0_4__Fume_Hood_Sash_Position_Sensor"
                },
                {
                    "children": [],
                    "id": "BRICK_0_4__VAV_Damper_Position_Sensor"
                }
            ],
            "id": "BRICK_0_4__Damper_Position_Sensor"
        },
        {
            "children": [
                {
                    "children": [
                        {
                            "children": [],
                            "id": "BRICK_0_4__Weather_Wind_Direction_Sensor"
                        }
                    ],
                    "id": "BRICK_0_4__Wind_Direction_Sensor"
                }
            ],
            "id": "BRICK_0_4__Direction_Sensor"
        }
    ]
}
```

## Errors

|Error|Description|
|---|---|
|403|Unauthorized – token expired / invalid  |
|500|Any other error e.g. DB operation failed|

## Response Body Parameters

|Name|Description|Schema|
|---|---|---|
|id         |Unique Schema id|Json |
|children     |Child schema element|Json|
