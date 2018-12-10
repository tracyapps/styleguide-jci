---
post_title: 'Post Entities From CSV OR JSON File (Synchronously)'
layout: api_doc
published: true
---
# Post Entities From CSV OR JSON File (Synchronously)

This endpoint is used to create and update entities to ER Service API based on existing entity type schema.
This request consists one additional required parameter named ‘fileName’ in request header. It means if request has ‘fileName’ parameter, ERService application will import and read entity data from CSV OR JSON file instead from request body. In this request, we do not need to specify any entity object details in request body. Request body should be null/empty. Once ERService imports data from CSV OR JSON file, after that it validates the data from it and process for upsert operation in document DB. 

Structure of CSV file :
First Row : It consists all columns with entity JSON property names
Second Row : It consists data types of each JSON property.
Third Row : It is used to specify the column/JSON property value is ‘required/optional’ field.
Forth Row : From forth row onwards, it consists all entity objects.

Structure of JSON file: 
It consists JObjects of the entities.

## URL

`https://{{HOST}}/apollo/er/entities?v={version}`

## Method
<div class="post">POST</div>

## Required IMS Scopes

* apollo_write

## Versions Supported
1.0 (Default) (For JSON)
1.1 (For CSV)

## URL Query Parameters
|Name|Description|Example|Type|
|---|---|---|---|
|**v**  <br>*optional*|Version of the API to use|v=1.1|string|


## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}| String|
|**Content-Type** <br>*required*|application/json| String|
|**async** <br>*required*|false|Boolean|
|**ercollectionid** <br>*required*|{ercollectionid}|String|
|**fileName** <br>*required*|{fileName}|String|

## Example

### Request

```shell
curl -X POST \
  'https://{{HOST}}/apollo/er/entities?v=1.1' \
  -H 'Authorization: Bearer {access_token}' \
  -H 'Content-Type: application/json' \
  -H 'ercollectionid: TestER-DVDocs-Files' \
  -H 'async: false' \
  -H 'fileName: Import_Entities.csv'

```
### Response

```json
{
    "status": {
        "message": "Total number of Entities Upserted:  2.",
        "code": "207"
    },
    "transactionId": "11fe0143-66c2-48ab-82f3-42c3d669adff",
    "data": {
        "responses": {
            "success": [
                {
                    "id": "JCI-507-B1",
                    "message": "success",
                    "tracker": "http://{{HOST}}/apollo/status/logs?entityid=JCI-507-B1&transactionid=11fe0143-66c2-48ab-82f3-42c3d669adff"
                },
                {
                    "id": "JCI-507-B1-F1",
                    "message": "success",
                    "tracker": "http://{{HOST}}/apollo/status/logs?entityid=JCI-507-B1-F1&transactionid=11fe0143-66c2-48ab-82f3-42c3d669adff"
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