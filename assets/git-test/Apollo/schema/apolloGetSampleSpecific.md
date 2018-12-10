---
post_title: 'get a sample object'
layout: api_doc
published: true
---
# Get a sample Object

Sample objects will be fetched only if the sample object of a schema type is present.


## URL

`https://{{HOST}}/apollo/schema/entitytypes/{entitytypes}/versions/{ver}/sample`
`https://{{HOST}}/apollo/schema/messagetypes/{messagetypes}/versions/{ver}/sample`
`https://{{HOST}}/apollo/schema/relationtypes/{relationtypes}/versions/{ver}/sample`
`https://{{HOST}}/apollo/schema/eventtypes/{eventtypes}/versions/{ver}/sample`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**v** <br>*optional*|Service Version|/entitytypes/?v=1.0|Number|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|IMS access token|
|**Content-Type** <br>*required*|application/json|Content Type|

## Request Body Parameters

|Name|Description|Type|
|---|---|---|
| **entitytypes** <br>*required*|entitytypes against which object is being created|String|
| **ver** <br>*required*|entitytypes versions against which object is being created|String|

## Example

### Request

```shell
curl -X GET \
  https://{{HOST}}/apollo/schema/entitytypes/{entitytypes}/versions/{ver}/sample \
  -H 'Authorization: Bearer {access_token}'
```

### Response

```json
{
    "status": {
        "message": "Operation completed",
        "code": "200"
    },
    "transactionId": "DF20A607B3EE41E782B2EF8C3D536EEE",
    "paging": null,
    "data": {
        "brickEntitySubType": "BRICK_0_4__Building",
        "brickEntityType": "BRICK_0_4__Building",
        "entityName": "03-003 _ UC3212",
        "entityType": "BRICK_0_4__Building"
    }
}
```

## Errors

|Error|Description|
|---|---|
|400|If any mandatory field is missing      	   |
|422|Not processable entity – Invalid input   	   |
|403|Unauthorized – token expired / invalid 	   |
|500|Any other error e.g. DB operation failed	   |


## Response Body Parameters

|Name|Description|Schema|
|---|---|---|
|message         |completed or bad request message|String |
|data    		 |sample object			  |String|
