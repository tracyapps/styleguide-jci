---
post_title: 'Get the list of all topics'
layout: api_doc
published: true
---
# Get the list of all topics

This endpoint is used to get the list of all topics.


## URL

`https://{{HOST}}/udp/topic`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read


## Request Header Parameters
|Type|Value|Description|
|---|---|---|
|**Authentication** <br>*required*|Bearer {access_token}|IMS access token |

## Example

### Request

```shell
curl -X GET \
  'https://{{HOST}}/udp/topic' \
  -H 'Authorization: Bearer {access_token}' 
```

### Response

```json
[
    {
        "topicName": "temperature",
        "partitions": 2,
        "replications": 1,
        "messagetypeIds": [],
        "lastUpdate": "2018-07-27T04:06:36.280",
        "createdBy": "Apollo.testUser1",
        "updatedBy": "Apollo.testUser1",
        "isActive": "true"
    },
    {
        "topicName": "light",
        "partitions": 1,
        "replications": 1,
        "messagetypeIds": [
            "87f4da69-0733-4a17-a74b-81555bd70a5a"
        ],
        "lastUpdate": "2018-07-31T06:45:08.353",
        "createdBy": "Apollo.testUser1",
        "updatedBy": "Apollo.testUser1",
        "isActive": "true"
    }
]

```
## Errors

|Code|Description|
|---|---|
| 400| The request could not be understood by the server due to malformed syntax. |
| 403| The request can not be processed if token is not valid or expired. |

