---
post_title: 'Get Status'
layout: api_doc
published: true
---
# Get Status

This endpoint allows you to track request/transaction status

## URL

`https://api.digitalvault.cloud/apollo/status/{transactionId}`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read
* apollo_write
* apollo_admin

## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**transactionId** <br>*optional*|ID the Transaction|/status/{{transactionId}}|string|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authentication** <br>*required*|Bearer {access_token}|Authorization|
|**Content-Type** <br>*required*|application/json|Specifies the type of Application|
|**x-correlation-id** <br>*optional*||User specified correlationid that can be used in tracing all the logs in subsequent calls in the API|


## Example

### Request

```curl

curl -X GET \
  'https://api.digitalvault.cloud/apollo/status/{transactionId}' \
  -H 'Authorization: Bearer {{access_token}}' \
  -H 'Content-Type: application/json' \
  -H 'x-correlation-id: 9b713010-fb3c-4bee-bbfc-68a0088198aa'
```

### Response

```json
{
    "status": {
        "message": "",
        "code": "200"
    },
    "data": {
        "id": "test-5dfbc750-4564-4e8d-9261-130bdf6dd01d",
        "enqueuedTimestamp": "2018-04-23T19:20:01.9582139+00:00",
        "receivedTimestamp": "2018-04-23T19:20:08.0098212+00:00",
        "messageType": "Request",
        "requestAction": "Upsert",
        "state": "Created",
        "requestObject": "TS",
        "transactionIDList": [
            "cacaa7d4-12a5-4bb8-83a5-158d5e34efe9",
            "e3bc49b4-c80c-4a2a-923e-1b80735ee6f8"
        ],
        "payload": {
            "Id": "testId-123",
            "TimeseriesId": "testId-123",
            "OrgId": "test",
            "TimeseriesType": "None",
            "status": "active"
        },
        "retryCount": 0,
        "message": null,
        "sender": "sub:app:ts.nano",
        "recipient": "sub:app:er.nano",
        "correlationId": "3820eb67-dda0-4df4-9a23-4aed2f4d79ff",
        "timeout": 0,
        "topic": null
    }
}
```

## Errors

|Error|Description|
|---|---|
|403| On an privileged access error|
|404| If the transaction ID doesn't exist|