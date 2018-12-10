---
post_title: 'Post Entities using Import JSON File'
layout: api_doc
published: true
---
# Post Entities using Import JSON File

This endpoint is used to create and update entities to ER Service API based on existing entity type schema. 

Structure of JSON file:
	It consists JObjects of the entities.
	
This request consists one additional required parameter named ‘fileName’ in request header. It means if request has ‘fileName’ parameter, ERService application will import and read entity data from JSON file instead from request body. In this request, we do not need to specify any entity object details in request body. Request body should be null/empty.
Once ERService imports data from JSON file, after that it validates the data from it and process for upsert operation in document DB.


## URL

`https://{{HOST}}/apollo/er/entities`

## Method
<div class="post">POST</div>

## Required IMS Scopes

* apollo_write

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}| String|
|**Content-Type** <br>*required*|application/json| String|
|**async** <br>*required*|false|Boolean|
|**ercollectionid** <br>*required*|{ercollectionid}|String|
|**fileName** <br>*required*|file_name.json|String|

## Example

### Request

```shell
curl -X POST \
  'https://{{HOST}}/apollo/er/entities' \
  -H 'Authorization: Bearer {access_token}' \
  -H 'Content-Type: application/json' \
  -H 'ercollectionid: {ercollectionid}' \
  -H 'async: false' \
  -H 'fileName: file_name.json'
```

### Response

```json
{
    "status": {
        "message": "Total number of Entities Upserted:  2.",
        "code": "207"
    },
    "transactionId": "45d1e074-f622-47df-bff1-e8ef79c4edbf",
    "data": {
        "responses": {
            "success": [
                {
                    "id": "ac4d8cd8-3798-11e8-a527-c8e0eb18b031",
                    "message": "success",
                    "tracker": "http://dev-api.digitalvault.cloud/apollo/status/logs?entityid=ac4d8cd8-3798-11e8-a527-c8e0eb18b031&transactionid=45d1e074-f622-47df-bff1-e8ef79c4edbf"
                },
                {
                    "id": "aa230fd2-3798-11e8-8f2c-c8e0eb18b031",
                    "message": "success",
                    "tracker": "http://dev-api.digitalvault.cloud/apollo/status/logs?entityid=aa230fd2-3798-11e8-8f2c-c8e0eb18b031&transactionid=45d1e074-f622-47df-bff1-e8ef79c4edbf"
                }
            ]
        }
    }
}
```

## Errors

|Error|Description|
|---|---|
|400|Bad Request – The request could not be understood by the server due to malformed syntax.|
|403|The request can not proceed if ercollectionid is not registered or does not have any logs in ACL library.|