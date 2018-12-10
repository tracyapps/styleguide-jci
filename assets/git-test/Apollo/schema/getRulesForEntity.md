---
post_title: 'Get rules that contains given entityType'
layout: api_doc
published: true
---
# Get rules for given entity type

Returns a list of active rules for given entity type

## URL

`https://{{HOST}}/apollo/schema/entitytypes/{entityType}/relationshiptypes?includeSource={boolean}&includeDestination={boolean}`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**v** <br>*optional*|Service Version|/entitytypes/id/versions?v=1.0|Number|
|**entityType** <br>*required*|valid entityType|/entitytypes/BRICK:Location/relationshiptypes|String|
|**includeSource** <br>*optional*|Flag to indicate if result contain entityType in source (default true)|/entitytypes/BRICK:Location/relationshiptypes?includeSource=true|Boolean|
|**includeDestination** <br>*optional*|Flag to indicate if result contain entityType in Destination (default true)|/entitytypes/BRICK:Location/relationshiptypes?includeDestination=true|Boolean|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|IMS access token|

## Example

### Request

```shell
curl -X GET \
  'https://{{HOST}}/apollo/schema/entitytypes/{id}/relationshiptypes?includeSource=true&includeDestination=true' \
  -H 'Authorization: Bearer {access_token}' \
```
   
### Response

```json
{
    "status": {
        "message": "Operation completed",
        "code": "200"
    },
    "transactionId": "25E8C00A65E64CDA8BC5660406694E01",
    "paging": null,
    "data": [
        {
            "relationshipType": "Brick:isPartOf",
            "sourceDestinationPairs": [
                {
                    "source": "Brick:Location:Floor",
                    "destination": "Brick:Location:Building"
                }
            ]
        }
    ]
}
```

## Errors

|Error|Description|
|---|---|
|403|Unauthorized – token expired / invalid  |
|404|Active rules not found for given entityType	 |
|500|Any other error e.g. DB operation failed|
|400|includeSource OR includeDestination are set false|

## Response Body Parameters

|Name|Description|Schema|
|---|---|---|
|data          |list of rules|Json |
