---
post_title: 'Get All Entities and Relationships'
layout: api_doc
published: true
---
# Get All Entities and Relationships

This endpoint is used to get all entities and relationships from GraphQL API using GraphQL query. Application user has to provide the ercollectionid as part of header body and GraphQL query in request body to fetch the graph from specific partition.

## URL

`https://{{HOST}}/apollo/graphql`

## Method
<div class="post">POST</div>

## Required IMS Scopes

* apollo_read

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|Authorization token|
|**Content-Type** <br>*required*|text/plain| String|
|**ercollectionid** <br>*required*|{ercollectionid}|Partition Key|
|**first** <br>*Optional*|0 to max limit record|Number of entities per page|
|**after** <br>*Optional*|{{after}}|Current Index

## Note

{{after}} is the environment variable that is blank at the first time of request.
first and {{after}} parameter is used for the pagination. {{after}} parameter is automatically get set from response object after completing first request. Response object has object with name "paging" which has "continuationToken" attribute. "continuationToken" attribute needs to extract and set it to {{after}} variable.

## Example

### Request

```shell
curl -X POST \
  'https://{{HOST}}/apollo/graphql' \
  -H 'Authorization: Bearer ACCESS_TOKEN' \
  -H 'Content-Type: application/json' \
  -H 'ercollectionid: testercollectionid' \
  -H 'first: 100' \
  -H 'after: 0' \
  -d 'query sampleQuery{
	brickEntityList(brickEntitySubType : "BRICK_0_4__Floor"){
	id
	entityName
	entityType
	brickEntityType
	brickEntitySubType
	entityProperties{
		key
		value
	}
	relationships(brickRelationshipType: "BRICK_0_4__hasPart", relationshipType: "BRICK_0_4__hasPart_Location_Location"){
			id
			relationshipType
			brickRelationshipType
			relationshipProperties{
				key
				value
			}
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
            "id": "a7c55d1c-3798-11e8-ac5b-c8e0eb18b031",
            "entityName": "Building",
            "entityType": "brick_entity",
            "brickEntityType": "BRICK_0_4__Location",
            "relationships": [
                {
                    "id": "4fc87a34-39b1-11e8-a156-c8e0eb18b031",
                    "relationshipType": "BRICK_0_4__hasPart_Location_Location",
                    "brickRelationshipType": "BRICK_0_4__hasPart",
                    "destinationEntity": {
                        "id": "a7c556b6-3798-11e8-bd3e-c8e0eb18b031",
                        "entityName": "Common",
                        "entityType": "brick_entity"
                    }
                }
            ]
        }
    ],
    "paging": {
        "totalCount": 10,
        "continuationToken": "10"
    }
}
```

## Errors

|Error|Code|Description|
|---|---|---|
|Bad Request | 400| The request could not be understood by the server due to malformed syntax. |
|Unauthorized | 401| The request can not be processed if token is not valid or expired. |
|Forbidden | 403| The request can not proceed if ercollectionid is not registered or does not have any logs in ACL library. |
