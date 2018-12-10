---
post_title: 'Get ER Stats by ER Collection ID'
layout: api_doc
published: true
---
# Get ER Stats by ER Collection ID

This endpoint provides Summary statistics on Entities, Relationships, Assets and Spaces in an ER Collection.

## URL

`https://{{HOST}}/apollo/er/ercollections/{ercollectionid}/stats?v={version}`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read

## Versions Supported
1.0 (Default)
1.1

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**ercollectionId** |{ercollectionid}|ercollectionid to be passed |String|
|**v** <br>*optional*|Service Version|/entitytypes/{entitytype}/entities?v=1.1|String|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|IMS access token|

## Example

### Request

```shell

 curl -X GET \
  https://{{HOST}}/apollo/er/ercollections/TestER-DVDocs/stats?v=1.1 \
  -H 'Authorization: Bearer {{access_token}}'
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
            "Summary": {
                "Entities": 11,
                "Relationships": 10,
				"Assets": 3,
                "Spaces": 2
            },
            "Entities": {
                "BRICK_0_4__Building": 1,
                "BRICK_0_4__Floor": 2,
                "BRICK_0_4__Room": 1,
                "BRICK_0_4__Device": 1,
                "JCI_EXT__File": 1,
				"Brick__Equipment": 3,
				"Brick__Location": 2
                
            },
            "Relationships": {
                "BRICK_0_4__hasPart_Location_Location": 2,
                "BRICK_0_4__isPartOf_Location_Location": 2,
                "BRICK_0_4__contains_Location_Device": 3,
                "BRICK_0_4__isLocatedIn_Device_Location": 3
            }
        }
    ]
}
```

## Errors

|Error|Description|
|---|---|
|400|Bad Request – The request could not be understood by the server due to malformed syntax.|
|403|The request can not proceed if ercollectionid is not registered or does not have any logs in ACL library.|
