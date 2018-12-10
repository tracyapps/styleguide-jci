---
post_title: 'Search Audit Logs'
layout: api_doc
published: true
---
# Search Audit Logs

Retrieve a list of audit logs based on supplied criteria

## URL

`https://{{HOST}}/apollo/audit/logs`

## Method

<div class="delete">GET</div>

## Required IMS Scopes

* apollo_read

## Versions Supported
* 1.0

|Name|Description|Example|Type|
|---|---|---|---|
|**startTime** <br>*required*|Starting time of the target period|startTime=11/14/2018 8:00 AM|datetime|
|**endTime** <br>*required*|Ending time of the target period|endTime=11/14/2018 9:00 AM|datetime|
|**clientId** <br>*optional*|The client Id of the token that was passed as part of the request|clientId=apollo.ro.client|string|
|**correlationId** <br>*optional*|The correlation Id of the request|correlationId=93ff008ab58e122245c8d4b509ce1348|string|
|**host** <br>*optional*|The host name used for the request|host=api.digitalvault.cloud|string|
|**method** <br>*optional*|The HTTP verb used for the request|method=POST|string|
|**org** <br>*optional*|The Org Id from the token that was passed as part of the request|org=jci&#46;com|string|
|**resultCode** <br>*optional*|The HTTP status code for the request|resultCode=200|int|
|**transactionId** <br>*optional*|The transaction Id of the request|transactionId=93ff008ab58e122245c8d4b509ce1348|string|
|**userId** <br>*optional*|The User Id of from the token that was passed as part of the request|userId=myUsername|string|
|**v**  <br>*optional*|Version of the API to use|v=1.0|string|
|**vaultId** <br>*optional*|The Id of the Vault|vaultId=93ff008ab58e122245c8d4b509ce1348|string|
|**vaultInstanceId** <br>*optional*|The Id of the Vault Instance|vaultInstanceId=93ff008ab58e122245c8d4b509ce1348|string|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization**<br>*required*|Bearer {access_token}|Retrieve access token|

## Example

### Request

```shell
curl -X GET \
  'https://{{HOST}}/apollo/audit/logs?startTime=11/14/2018 8:00 AM&endTime=11/14/2018 9:00 AM' \
  -H 'Authorization: Bearer {access_token} \
```

## Errors

|Error|Description|
|---|---|
|**400**| Bad Request |
|**500**| Internal Server Error |