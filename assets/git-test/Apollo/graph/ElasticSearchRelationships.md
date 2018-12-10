---
post_title: 'Search relationships using elastic search queries'
layout: api_doc
published: true
---
# Search relationships on elastic search server  

This endpoint is used to search entites from elastic search server. Application user has to provide the ercollectionid as part of header and search query in request body to fetch the entities from elastic search server. User can also provide comma seperated multiple er collection Id. 

## URL

`https://{{HOST}}/apollo/graph/relationships/search/query`

## Method
<div class="post">POST</div>

## Required IMS Scopes

* apollo_read

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|Authorization token|
|**ercollectionid** <br>*required*|{ercollectionid}|Partition Key|
|**first** <br>*Optional*|0 to max limit record|Number of relationships per page|
|**after** <br>*Optional*|{{after}}|Current Index

## Note

{{after}} is the environment variable that is blank at the first time of request.
first and {{after}} parameter is used for the pagination. {{after}} parameter is automatically get set from response object after completing first request. Response object has object with name "paging" which has "continuationToken" attribute. "continuationToken" attribute needs to extract and set it to {{after}} variable.

## Example 1

### Request

```shell
curl -X POST \
  'https://{{HOST}}/apollo/graph/relationships/search/query' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -H 'Content-Type: text/plain' \
  -H 'ercollectionid: TestER-DVDocs' 
  -d '{"query": { "match": { "id": "JCI-507-B1-hasPart-JCI-507-B1-F1"} }}'
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
            "id": "JCI-507-B1-hasPart-JCI-507-B1-F1",
            "relationshipName": "JCI-507-B1 hasPart JCI-507-B1-F1",
            "relationshipType": "BRICK_0_4__hasPart_Location_Location",
            "sourceEntityId": "JCI-507-B1",
            "destinationEntityId": "JCI-507-B1-F1",
            "sourceERCollectionId": "TestER-DVDocs",
            "destinationERCollectionId": "TestER-DVDocs",
            "sysData": {
                "sysSchemaVersion": 1,
                "sysERCollectionId": "TestER-DVDocs",
                "sysCorrelationId": "949106a0-51b6-4e1e-a98b-c31dab19fbbe",
                "sysTimestamp": "20181026T18:52:41.748",
                "sysRequestorId": "apollo.testuser1",
                "sysRelationshipVersion": 1,
                "sysRelationshipType": "BRICK_0_4__hasPart_Location_Location"
            },
            "brickRelationshipName": "hasPart",
            "brickRelationshipType": "BRICK_0_4__hasPart",
            "ercollectionid": "TestER-DVDocs"
        }
    ],
    "paging": {
        "totalCount": 1,
        "continuationToken": null
    }
}
```

## Example 2

### Request

```shell
curl -X POST \
  'https://{{HOST}}/apollo/graph/relationships/search/query' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -H 'Content-Type: text/plain' \
  -H 'ercollectionid: TestER-DVDocs' 
  -d '{
	"query": {
		"bool": {
		  "should": [
			{ "match": { "relationshipType": "BRICK_0_4__contains_Location_Device"  }},
			{ "match": { "id": "JCI-507-B1-contains-JCI-507-Dev-1"}}
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
            "id": "JCI-507-B1-contains-JCI-507-Dev-1",
            "relationshipName": "JCI-507-B1 contains JCI-507-Dev-1",
            "relationshipType": "BRICK_0_4__contains_Location_Device",
            "sourceEntityId": "JCI-507-B1",
            "destinationEntityId": "JCI-507-Dev-1",
            "sourceERCollectionId": "TestER-DVDocs",
            "destinationERCollectionId": "TestER-DVDocs",
            "sysData": {
                "sysSchemaVersion": 1,
                "sysERCollectionId": "TestER-DVDocs",
                "sysCorrelationId": "949106a0-51b6-4e1e-a98b-c31dab19fbbe",
                "sysTimestamp": "20181026T18:52:41.748",
                "sysRequestorId": "apollo.testuser1",
                "sysRelationshipVersion": 1,
                "sysRelationshipType": "BRICK_0_4__contains_Location_Device"
            },
            "brickRelationshipName": "isSameAs",
            "brickRelationshipType": "BRICK_0_4__contains_Location_Device",
            "ercollectionid": "TestER-DVDocs"
        },
        {
            "id": "JCI-507-B1-F1-ETeam1-contains-JCI-507-Dev-1",
            "relationshipName": "JCI-507-B1-F1-ETeam1 contains JCI-507-Dev-1",
            "relationshipType": "BRICK_0_4__contains_Location_Device",
            "sourceEntityId": "JCI-507-B1-F1-ETeam1",
            "destinationEntityId": "JCI-507-Dev-1",
            "sourceERCollectionId": "TestER-DVDocs",
            "destinationERCollectionId": "TestER-DVDocs",
            "sysData": {
                "sysSchemaVersion": 1,
                "sysERCollectionId": "TestER-DVDocs",
                "sysCorrelationId": "949106a0-51b6-4e1e-a98b-c31dab19fbbe",
                "sysTimestamp": "20181026T18:52:41.748",
                "sysRequestorId": "apollo.testuser1",
                "sysRelationshipVersion": 1,
                "sysRelationshipType": "BRICK_0_4__contains_Location_Device"
            },
            "brickRelationshipName": "isSameAs",
            "brickRelationshipType": "BRICK_0_4__contains_Location_Device",
            "ercollectionid": "TestER-DVDocs"
        },
        {
            "id": "JCI-507-B1-F1-contains-JCI-507-Dev-1",
            "relationshipName": "JCI-507-B1-F1 contains JCI-507-Dev-1",
            "relationshipType": "BRICK_0_4__contains_Location_Device",
            "sourceEntityId": "JCI-507-B1-F1",
            "destinationEntityId": "JCI-507-Dev-1",
            "sourceERCollectionId": "TestER-DVDocs",
            "destinationERCollectionId": "TestER-DVDocs",
            "sysData": {
                "sysSchemaVersion": 1,
                "sysERCollectionId": "TestER-DVDocs",
                "sysCorrelationId": "949106a0-51b6-4e1e-a98b-c31dab19fbbe",
                "sysTimestamp": "20181026T18:52:41.748",
                "sysRequestorId": "apollo.testuser1",
                "sysRelationshipVersion": 1,
                "sysRelationshipType": "BRICK_0_4__contains_Location_Device"
            },
            "brickRelationshipName": "isSameAs",
            "brickRelationshipType": "BRICK_0_4__contains_Location_Device",
            "ercollectionid": "TestER-DVDocs"
        }
    ],
    "paging": {
        "totalCount": 3,
        "continuationToken": null
    }
}
```

## Example 3

### Request

```shell
curl -X POST \
  'https://{{HOST}}/apollo/graph/relationships/search/query' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -H 'Content-Type: text/plain' \
  -H 'ercollectionid: TestER-DVDocs' 
  -d '{
	"query": {
		"bool": {
		  "should": [
			{ "match": { "relationshipType": "BRICK_0_4__contains_Location_Device"  }},
			{ "match": { "id": "JCI-507-B1-contains-JCI-507-Dev-1"}}
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
            "id": "JCI-507-B1-contains-JCI-507-Dev-1",
            "relationshipName": "JCI-507-B1 contains JCI-507-Dev-1",
            "relationshipType": "BRICK_0_4__contains_Location_Device",
            "sourceEntityId": "JCI-507-B1",
            "destinationEntityId": "JCI-507-Dev-1",
            "sourceERCollectionId": "TestER-DVDocs",
            "destinationERCollectionId": "TestER-DVDocs",
            "sysData": {
                "sysSchemaVersion": 1,
                "sysERCollectionId": "TestER-DVDocs",
                "sysCorrelationId": "949106a0-51b6-4e1e-a98b-c31dab19fbbe",
                "sysTimestamp": "20181026T18:52:41.748",
                "sysRequestorId": "apollo.testuser1",
                "sysRelationshipVersion": 1,
                "sysRelationshipType": "BRICK_0_4__contains_Location_Device"
            },
            "brickRelationshipName": "isSameAs",
            "brickRelationshipType": "BRICK_0_4__contains_Location_Device",
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
