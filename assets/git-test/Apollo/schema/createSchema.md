---
uid: createSchema.md
post_title: 'Create a new schema
---
# Create a new schema

Request format should be as specified in <a target="\_blank" href="http://json-schema.org/documentation.html"> http://json-schema.org/documentation.html</a> (draft 6)
Sample – refer here <a target="\_blank" href="http://json-schema.org/examples.html">http://json-schema.org/examples.html</a>
Below additional system fields will be included while persisting in database
* sysCorrelationId – unique id to identify transaction which created the schema
* sysClientId – client id which user, which updated schema, belong to
* sysSchemaCollectionId – id to logical group various schema
* sysEntityType / sysRelationType / sysMessageType / sysEventType  – unique identifier for schema to be updated (part of request URI)
* sysTimestamp – time at which schema was updated
* sysSchemaVersion – new version of schema
* sysState – state of schema viz. new / published; default to new when updated
* sysActive – default to true
* sysRequestorId – id of user who updated schema
* schema – the json schema body sent as part of request


## URL

`https://{{HOST}}/apollo/schema/entitytypes`
`https://{{HOST}}/apollo/schema/relationshiptypes`
`https://{{HOST}}/apollo/schema/messagetypes`
`https://{{HOST}}/apollo/schema/eventtypes`

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
|**Authorization** <br>*required*|Bearer {access_token}|IMS access token |
|**Content-Type** <br>*required*|application/schema+json|Content Type|
|**schemaCollectionId** <br>*required*|{schemaCollectionId}|Collection id for schema|

## Request Body Parameters

|Name|Description|Type|
|---|---|---|
| **sysEntityType** <br>*required*|Unique schema identifier|String value e.g. BRICK:Timeseries|

## Example

### Request

```shell
curl -X POST \
  'https://{{HOST}}/apollo/schema/entitytypes '\
  -H 'Authorization: Bearer {access_token}' \
  -H 'Content-Type: application/schema+json' \
  -H 'schemaCollectionId: Brick:Draft' \
  -d '[{
  "type": "object",
  "title": "Brick:Timeseries",
  "sysEntityType": "Brick:Timeseries",
  "required": [
    "id",
    "timeseriesId"
  ],
  "$schema": "http://json-schema.org/draft-06/schema#",
  "description": "Schema for Entity Brick:Timeseries",
   "schemaMetadata": {
      "entityTypeTags": [
        "Timeseries"
      ],
      "entityType": "Brick:Timeseries",
      "schemaCollectionId": "Brick:Draft",
      "entityIsSubClassOf": [
        
      ]
    },
  "properties": {
    "id": {
      "type": "string",
      "description": "Same as timeseriesId"
    },
    "entityType": {
      "type": "string",
      "description": "Name of the Timeseries"
    },
    "timeseriesId": {
      "type": "string",
      "description": "Id of Timeseries in TS API"
    },
    "customData": {
      "type": "object",
      "description": "Dictionary to hold any data that you want"
    }
  }
}]'
```

### Response

```json
{
    "status": {
        "message": "success",
        "code": "201"
    },
    "transactionId": "22083F068363470197991E885D21E6E9",
    "data": {
        "status": "success",
        "reason": "attempted '1' schemas: inserted '0' schemas, updated '1' schemas, '0' failed",
        "success": [
            "Brick:Timeseries"
        ],
        "failed": []
    },
    "paging": null
}
```

## Errors

|Error|Description|
|---|---|
|400|If any mandatory field is missing      	   |
|422|Unprocessable entity – Invalid input   	   |
|403|Unauthorized – token expired / invalid 	   |
|206|Partial Content - few succeded and few failed |
|500|Any other error e.g. DB operation failed	   |


## Response Body Parameters

|Name|Description|Schema|
|---|---|---|
|status         |success or partial_success or failed|String |
|reason    		|count of inserted , updated and failed schema|String|
|success		|list of successfully inserted or updated sysEntityType|List|
|failed 	    |list of failed sysEntityType|List|
