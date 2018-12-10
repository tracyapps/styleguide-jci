---
post_title: 'Search entities using elastic search queries'
layout: api_doc
published: true
---
# Search entities on elastic search server  

This endpoint is used to search entites from elastic search server. Application user has to provide the ercollectionid as part of header and search query in request body to fetch the entities from elastic search server. User can also provide comma seperated multiple er collection Id. 

## URL

`https://{{HOST}}/apollo/graph/entities/search/query`

## Method
<div class="post">POST</div>

## Required IMS Scopes

* apollo_read

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|Authorization token|
|**ercollectionid** <br>*required*|{ercollectionid}|Partition Key|
|**first** <br>*Optional*|0 to max limit record|Number of entities per page|
|**after** <br>*Optional*|{{after}}|Current Index

## Note

{{after}} is the environment variable that is blank at the first time of request.
first and {{after}} parameter is used for the pagination. {{after}} parameter is automatically get set from response object after completing first request. Response object has object with name "paging" which has "continuationToken" attribute. "continuationToken" attribute needs to extract and set it to {{after}} variable.

## Example 1

### Request

```shell
curl -X POST \
  'https://{{HOST}}/apollo/graph/entities/search/query' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -H 'Content-Type: text/plain' \
  -H 'ercollectionid: TestER-DVDocs'
  -d '{"query": { "match": { "id": "JCI-507-B1-F1"} }}'
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
            "entityType": "BRICK_0_4__Floor",
            "entityName": "JCI 507 Michigan Street Milwaukee Building B1 Floor F1",
            "id": "JCI-507-B1-F1",
            "sysData": {
                "sysSchemaVersion": 1,
                "sysERCollectionId": "TestER-DVDocs",
                "sysCorrelationId": "973ad67c-58d3-429d-bb90-ed0f13a12241",
                "sysTimestamp": "20181026T18:42:26.937",
                "sysClientId": "apollo.ro.client",
                "sysRequestorId": "apollo.testuser1",
                "sysEntityVersion": 1,
                "sysEntityType": "BRICK_0_4__Floor"
            },
            "brickEntitySubType": "BRICK_0_4__Floor",
            "brickEntityType": "BRICK_0_4__Location",
            "ercollectionid": "TestER-DVDocs"
        },
        {
            "entityType": "BRICK_0_4__Room",
            "entityName": "JCI 507 Michigan Street Milwaukee Building B1 Floor F1 E Team 1",
            "id": "JCI-507-B1-F1-ETeam1",
            "sysData": {
                "sysSchemaVersion": 1,
                "sysERCollectionId": "TestER-DVDocs",
                "sysCorrelationId": "973ad67c-58d3-429d-bb90-ed0f13a12241",
                "sysTimestamp": "20181026T18:42:26.937",
                "sysClientId": "apollo.ro.client",
                "sysRequestorId": "apollo.testuser1",
                "sysEntityVersion": 1,
                "sysEntityType": "BRICK_0_4__Room"
            },
            "brickEntityName": "Room",
            "brickEntitySubType": "BRICK_0_4__Room",
            "brickEntityType": "BRICK_0_4__Location",
            "ercollectionid": "TestER-DVDocs"
        }
    ],
    "paging": {
        "totalCount": 2,
        "continuationToken": null
    }
}
```

## Example 2

### Request

```shell
curl -X POST \
  'https://{{HOST}}/apollo/graph/entities/search/query' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -H 'Content-Type: text/plain' \
  -H 'ercollectionid: TestER-DVDocs' 
  -d '{
	"query": {
		"bool": {
		  "should": [
			   { "match": { "entityType":"BRICK_0_4__Building" }}, 
               { "match": {"id":"JCI-507-B1-F1-ETeam1" }}
		  ]
		}
	  }
	}'
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
            "entityType": "BRICK_0_4__Room",
            "entityName": "JCI 507 Michigan Street Milwaukee Building B1 Floor F1 E Team 1",
            "id": "JCI-507-B1-F1-ETeam1",
            "sysData": {
                "sysSchemaVersion": 1,
                "sysERCollectionId": "TestER-DVDocs",
                "sysCorrelationId": "973ad67c-58d3-429d-bb90-ed0f13a12241",
                "sysTimestamp": "20181026T18:42:26.937",
                "sysClientId": "apollo.ro.client",
                "sysRequestorId": "apollo.testuser1",
                "sysEntityVersion": 1,
                "sysEntityType": "BRICK_0_4__Room"
            },
            "brickEntityName": "Room",
            "brickEntitySubType": "BRICK_0_4__Room",
            "brickEntityType": "BRICK_0_4__Location",
            "ercollectionid": "TestER-DVDocs"
        },
        {
            "entityType": "BRICK_0_4__Building",
            "entityName": "JCI 507 Michigan Street Milwaukee Building B1",
            "id": "JCI-507-B1",
            "sysData": {
                "sysSchemaVersion": 1,
                "sysERCollectionId": "TestER-DVDocs",
                "sysCorrelationId": "973ad67c-58d3-429d-bb90-ed0f13a12241",
                "sysTimestamp": "20181026T18:42:26.937",
                "sysClientId": "apollo.ro.client",
                "sysRequestorId": "apollo.testuser1",
                "sysEntityVersion": 1,
                "sysEntityType": "BRICK_0_4__Building"
            },
            "brickEntitySubType": "BRICK_0_4__Building",
            "brickEntityType": "BRICK_0_4__Location",
            "ercollectionid": "TestER-DVDocs"
        }
    ],
    "paging": {
        "totalCount": 2,
        "continuationToken": null
    }
}
```
## Example 3

### Request

```shell
curl -X POST \
  'https://{{HOST}}/apollo/graph/entities/search/query' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -H 'Content-Type: text/plain' \
  -H 'ercollectionid: TestER-DVDocs' 
  -d '{
	"query": {
		"bool": {
		  "must": [
			{ "match": { "entityType": "BRICK_0_4__Room"  }}
		  ]
		}
	  }
	}'
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
            "entityType": "BRICK_0_4__Room",
            "entityName": "JCI 507 Michigan Street Milwaukee Building B1 Floor F1 E Team 1",
            "id": "JCI-507-B1-F1-ETeam1",
            "sysData": {
                "sysSchemaVersion": 1,
                "sysERCollectionId": "TestER-DVDocs",
                "sysCorrelationId": "973ad67c-58d3-429d-bb90-ed0f13a12241",
                "sysTimestamp": "20181026T18:42:26.937",
                "sysClientId": "apollo.ro.client",
                "sysRequestorId": "apollo.testuser1",
                "sysEntityVersion": 1,
                "sysEntityType": "BRICK_0_4__Room"
            },
            "brickEntityName": "Room",
            "brickEntitySubType": "BRICK_0_4__Room",
            "brickEntityType": "BRICK_0_4__Location",
            "ercollectionid": "TestER-DVDocs"
        }
    ],
    "paging": {
        "totalCount": 1,
        "continuationToken": null
    }
}
```


## Errors

|Error|Code|Description|
|---|---|---|
|Bad Request | 400| The request could not be understood by the server due to malformed syntax. |
|Unauthorized | 401| The request can not be processed if token is not valid or expired. |
|Forbidden | 403| The request can not proceed if ercollectionid is not registered or does not have any logs in ACL library. |
