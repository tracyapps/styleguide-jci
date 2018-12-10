---
uid: apolloCreateSample.md
post_title: 'Create a sample object
---
# Create a sample Object

Sample objects will be created only if the schema type is present.


## URL

`https://{{HOST}}/apollo/schema/entitytypes/{entitytypes}/sample`
`https://{{HOST}}/apollo/schema/messagetypes/{messagetypes}/sample`
`https://{{HOST}}/apollo/schema/relationtypes/{relationtypes}/sample`
`https://{{HOST}}/apollo/schema/eventtypes/{eventtypes}/sample`

## Method

<div class="post">POST</div>

## Required IMS Scopes

* apollo_admin

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

## Example

### Request

```shell
curl -X POST \
  https://{{HOST}}/apollo/schema/entitytypes/{entitytypes}/sample \
  -H 'Authorization: Bearer {access_token}' \
  -H 'Content-Type: application/json' \
  -d '{
  "entityType": "BRICK_0_4__Timeseries",
  "timeseriesId": "03-003 _ UC3212",
  "id": "ac4d98e8-3798-11e8-9b2f-c8e0eb18b031"
}'

```

### Response

```json
{
    "status": {
        "message": "Operation completed",
        "code": "200"
    },
    "transactionId": "F8ADB1E018BD4CF08A63A5348E7A7E75",
    "paging": null,
    "data": Sample entity successfully created for [BRICK_0_4__Equipment] against version [2]
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
|data    		 |JSON schema created			  |String|
