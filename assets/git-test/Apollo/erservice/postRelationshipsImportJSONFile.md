---
post_title: 'Post Relationships using Import JSON File'
layout: api_doc
published: true
---
# Post Relationships using Import JSON File

This endpoint is used to create and update relationships to ER Service API based on existing entity type schema. 

Structure of JSON file:
	It consists JObjects of the relationships.

This request consists one additional required parameter named ‘fileName’ in request header. It means if request has ‘fileName’ parameter, ERService application will import and read relationship data from JSON file instead from request body. In this request, we do not need to specify any relationship object details in request body. Request body should be null/empty.
Once ERService imports data from JSON file, after that it validates the data from it and process for upsert operation in document DB.


## URL

`https://{{HOST}}/apollo/er/relationships`

## Method

<div class="post">POST</div>

## Required IMS Scopes

* apollo_write

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|String|
|**Content-Type** <br>*required*|application/json|String|
|**ercollectionid** <br>*required*|{ercollectionid}|String|
|**async** <br>*required*|false|String|
|**fileName** <br>*required*|file_name.json|String|

## Example

### Request

```shell
curl -X POST \
  'https://{{HOST}}/apollo/er/relationships' \
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
        "message": "Total number of Relationships Upserted:  1.",
        "code": "207"
    },
    "transactionId": "ab04efad-7f5d-4043-8a0a-22d980209f42",
    "data": {
        "responses": {
            "success": [
                {
                    "id": "5091e806-39b1-11e8-ae2c-c8e0eb18b031",
                    "message": "Relationship upserted successfully",
                    "tracker": "http://ctp-api.digitalvault.cloud/apollo/status/logs?relationshipid=5091e806-39b1-11e8-ae2c-c8e0eb18b031&transactionid=ab04efad-7f5d-4043-8a0a-22d980209f42"
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
