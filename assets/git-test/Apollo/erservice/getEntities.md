---
post_title: 'GET all entities'
layout: api_doc
published: true
---
# GET all entities

This endpoint is used to get all entities from ER API. Application user has to provide the ercollectionid , continuationToken and PageSize as part of header body.

## URL

`https://{{HOST}}/apollo/er/entities?v={versoin}`


## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read

## Versions Supported
1.0 (Default)
1.1

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**v** <br>*optional*|Service Version|/entities?v=1.0|String|
|**includeSystemData** <br>*optional*|Flag to include system data (default false)|/entities?includeSystemData=true|Boolean|
|**filter** <br>*optional*|OData filter query|1) To get the list of Entities that have a specific label <br>*/entities?$filter=labels/any(d:d eq 'BRICK_0_4__Building') or labels/any(d:d eq 'Test Label2')* <br>2) Given a Query Point, Get all Entities whose GeoLocation (Point) matches exactly with the Query Point <br>*/entities?$filter=geolocation eq Point((32, -4.7))&v=1.2* <br>3) Given a Query Point, Get all Entities whose GeoBoundary contain that Query Point <br>*/entities?$filter=intersects(geoBoundary, Point((31.9, -4.8)))&v=1.2*<br>4) Given a Query Polygon, Get all Entities whose GeoLocation is contained within that Query Polygon <br>*/entities?$filter=intersects(geoLocation, Polygon((31.8,-5),( 32,-5),(32,-4.7),(31.8,-4.7),(31.8,-5)))&v=1.2*<br>5) Given a Query Point, Get all Entities near to the point with closest one first<br>*/entities?$orderby= distanceto (geoLocation, Point((31.8,-5)))&v=1.2*|String|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {access_token}|IMS access token (User should have apollo_read scope)|
|**ercollectionid** <br>*required*|{ercollectionid}|ER Collection id|
|**continuationToken** <br>*optional*|{continuationToken}|Token for pagination, not required for first page but required for subsequent page|
|**PageSize** <br>*optional*|{PageSize}|Page size|

## Example 1

### Request

```shell

curl -X GET \
'https://{{HOST}}/apollo/er/entities?v=1.1' \
  -H 'Authorization: Bearer {{access_token}}' \
  -H 'Content-Type: application/json' \
  -H 'ercollectionid: TestER-DVDocs' \
  -H 'PageSize: 100'  
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
            "entityType": "BRICK_0_4__Building",
            "entityName": "JCI 507 Michigan Street Milwaukee Building B1",
            "id": "JCI-507-B1",
            "brickEntitySubType": "BRICK_0_4__Building",
            "brickEntityType": "BRICK_0_4__Location",
            "isActive": true
        },
        {
            "entityType": "BRICK_0_4__Floor",
            "entityName": "JCI 507 Michigan Street Milwaukee Building B1 Floor F1",
            "id": "JCI-507-B1-F1",
            "brickEntitySubType": "BRICK_0_4__Floor",
            "brickEntityType": "BRICK_0_4__Location",
            "isActive": true
        },
        {
            "entityType": "BRICK_0_4__Room",
            "entityName": "JCI 507 Michigan Street Milwaukee Building B1 Floor F1 E Team 1",
            "id": "JCI-507-B1-F1-ETeam1",
            "brickEntityName": "Room",
            "brickEntitySubType": "BRICK_0_4__Room",
            "brickEntityType": "BRICK_0_4__Location",
            "isActive": true
        },
        {
            "entityType": "BRICK_0_4__Device",
            "entityName": "JCI 507 Device 1",
            "id": "JCI-507-Dev-1",
            "brickEntityName": "Device",
            "brickEntitySubType": "BRICK_0_4__Device",
            "brickEntityType": "BRICK_0_4__Device",
            "isActive": true
        }  
    ],
    "paging": {
        "totalCount": 4,
        "continuationToken": null
    }
}
```
## Example 2

### Request 

```shell

curl -X GET \
'https://{{HOST}}/apollo/er/entities?$filter=labels/any(d:d eq 'BRICK_0_4__Building') or labels/any(d:d eq 'BRICK_0_4__Point')&v=1.2' \
  -H 'Authorization: Bearer {{access_token}}' \
  -H 'Content-Type: application/json' \
  -H 'ercollectionid: TestER-DVDocs' \
  -H 'PageSize: 100'  
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
            "entityType": "BRICK_0_4__Building",
            "entityName": "TestEntity1123 - JCI 5072",
            "id": "TestEntity_8990",
            "labels": [
                "BRICK_0_4__Building",
                "BRICK_0_4__Building_TestEntity1123"
            ],
            "geoBoundary": {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [[[31.8,-5 ],[32,-5],[32,-4.7],[31.8,-4.7],[31.8,-5]]]
                        }
                    }
                ]
            },
            "geoLocation": {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                32,
                                -4.7
                            ]
                        }
                    }
                ]
            },
            "schemaMetadata": {
                "entityType": "BRICK_0_4__Building",
                "rootEntityType": "BRICK_0_4__Location",
                "schemaCollectionId": "BRICK_0_4",
                "entityIsSubClassOf": [
                    "BRICK_0_4__Location"
                ],
                "tags": [
                    "Building"
                ]
            },
            "brickEntitySubType": "BRICK_0_4__Building",
            "brickEntityType": "BRICK_0_4__Location",
            "isActive": true,
            "version": 1
        }
    ],
    "paging": {
        "totalCount": 1,
        "continuationToken": null
    }
}
```

## Example 3

### Request 

```shell

curl -X GET \
'https://{{HOST}}/apollo/er/entities?$filter=geolocation eq Point((32, -4.7))&v=1.2 \
  -H 'Authorization: Bearer {{access_token}}' \
  -H 'Content-Type: application/json' \
  -H 'ercollectionid: TestER-DVDocs' \
  -H 'PageSize: 100'  
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
            "entityType": "BRICK_0_4__Building",
            "entityName": "TestEntity1 - JCI 507",
            "id": "TestEntity_8989",
            "labels": [
                "BRICK_0_4__Building",
                "BRICK_0_4__Building_TestEntity1"
            ],
            "geoBoundary": {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [[[31.8,-5 ],[32,-5],[32,-4.7],[31.8,-4.7],[31.8,-5]]]
                        }
                    }
                ]
            },
            "geoLocation": {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                32,
                                -4.7
                            ]
                        }
                    }
                ]
            },
            "schemaMetadata": {
                "entityType": "BRICK_0_4__Building",
                "rootEntityType": "BRICK_0_4__Location",
                "schemaCollectionId": "BRICK_0_4",
                "entityIsSubClassOf": [
                    "BRICK_0_4__Location"
                ],
                "tags": [
                    "Building"
                ]
            },
            "brickEntitySubType": "BRICK_0_4__Building",
            "brickEntityType": "BRICK_0_4__Location",
            "isActive": true,
            "version": 1
        }
    ],
    "paging": {
        "totalCount": 1,
        "continuationToken": null
    }
}
```

## Example 4

### Request 

```shell

curl -X GET \
'https://{{HOST}}/apollo/er/entities?$filter=intersects(geoBoundary, Point((31.9, -4.8)))&v=1.2 \
  -H 'Authorization: Bearer {{access_token}}' \
  -H 'Content-Type: application/json' \
  -H 'ercollectionid: TestER-DVDocs' \
  -H 'PageSize: 100'  
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
            "entityType": "BRICK_0_4__Building",
            "entityName": "TestEntity1 - JCI 507",
            "id": "TestEntity_8989",
            "labels": [
                "BRICK_0_4__Building",
                "BRICK_0_4__Building_TestEntity1"
            ],
            "geoBoundary": {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [[[31.8,-5 ],[32,-5],[32,-4.7],[31.8,-4.7],[31.8,-5]]]
                        }
                    }
                ]
            },
            "geoLocation": {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Point",
                            "coordinates": [32,-4.7]
                        }
                    }
                ]
            },
            "schemaMetadata": {
                "entityType": "BRICK_0_4__Building",
                "rootEntityType": "BRICK_0_4__Location",
                "schemaCollectionId": "BRICK_0_4",
                "entityIsSubClassOf": [
                    "BRICK_0_4__Location"
                ],
                "tags": [
                    "Building"
                ]
            },
            "brickEntitySubType": "BRICK_0_4__Building",
            "brickEntityType": "BRICK_0_4__Location",
            "isActive": true,
            "version": 1
        },
        {
            "entityType": "BRICK_0_4__Building",
            "entityName": "TestEntity1123 - JCI 5072",
            "id": "TestEntity_8990",
            "labels": [
                "BRICK_0_4__Building_5072",
                "BRICK_0_4__Building_TestEntity1123"
            ],
            "geoBoundary": {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [[  [31.8,-5 ],[32,-5],[32,-4.7],[31.8,-4.7],[31.8,-5]]]
                        }
                    }
                ]
            },
            "geoLocation": {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Point",
                            "coordinates": [ 32,-4.7]
                        }
                    }
                ]
            },
            "schemaMetadata": {
                "entityType": "BRICK_0_4__Building",
                "rootEntityType": "BRICK_0_4__Location",
                "schemaCollectionId": "BRICK_0_4",
                "entityIsSubClassOf": [
                    "BRICK_0_4__Location"
                ],
                "tags": [
                    "Building"
                ]
            },
            "brickEntitySubType": "BRICK_0_4__Building",
            "brickEntityType": "BRICK_0_4__Location",
            "isActive": true,
            "version": 1
        },
        {
            "entityType": "BRICK_0_4__Building",
            "entityName": "TestEntity1 - JCI 5079",
            "id": "TestEntity_8991",
            "labels": [
                "BRICK_0_4__Building_5079",
                "BRICK_0_4__Building_TestEntity_8991"
            ],
            "geoBoundary": {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [ [[-109.05,41],[-102.06,40.99],[-102.03,36.99],[-109.04,36.99],[-109.05,41]]]
                        }
                    }
                ]
            },
            "geoLocation": {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-102.03,36.99]
                        }
                    }
                ]
            },
            "schemaMetadata": {
                "entityType": "BRICK_0_4__Building",
                "rootEntityType": "BRICK_0_4__Location",
                "schemaCollectionId": "BRICK_0_4",
                "entityIsSubClassOf": [
                    "BRICK_0_4__Location"
                ],
                "tags": [
                    "Building"
                ]
            },
            "brickEntitySubType": "BRICK_0_4__Building",
            "brickEntityType": "BRICK_0_4__Location",
            "isActive": true,
            "version": 1
        },
        {
            "entityType": "BRICK_0_4__Building",
            "entityName": "TestEntity1 - JCI 50723",
            "id": "TestEntity_8992",
            "labels": [
                "BRICK_0_4__Building_50723",
                "BRICK_0_4__Building_TestEntity_8992"
            ],
            "geoBoundary": {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": "coordinates": [ [[-109.05,41],[-102.06,40.99],[-102.03,36.99],[-109.04,36.99],[-109.05,41]]]
                        }
                    }
                ]
            },
            "geoLocation": {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -102.06,
                                40.99
                            ]
                        }
                    }
                ]
            },
            "schemaMetadata": {
                "entityType": "BRICK_0_4__Building",
                "rootEntityType": "BRICK_0_4__Location",
                "schemaCollectionId": "BRICK_0_4",
                "entityIsSubClassOf": [
                    "BRICK_0_4__Location"
                ],
                "tags": [
                    "Building"
                ]
            },
            "brickEntitySubType": "BRICK_0_4__Building",
            "brickEntityType": "BRICK_0_4__Location",
            "isActive": true,
            "version": 1
        }
    ],
    "paging": {
        "totalCount": 4,
        "continuationToken": null
    }
}
```
## Example 5

### Request 

```shell

curl -X GET \
'https://{{HOST}}/apollo/er/entities?$filter=intersects(geoLocation, Polygon((31.8,-5),( 32,-5),(32,-4.7),(31.8,-4.7),(31.8,-5)))&v=1.2 \
  -H 'Authorization: Bearer {{access_token}}' \
  -H 'Content-Type: application/json' \
  -H 'ercollectionid: TestER-DVDocs' \
  -H 'PageSize: 100'  
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
            "entityType": "BRICK_0_4__Building",
            "entityName": "TestEntity1 - JCI 507",
            "id": "TestEntity_8994",
            "labels": [
                "BRICK_0_4__Building",
                "BRICK_0_4__Building_TestEntity94"
            ],
            "geoBoundary": {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Polygon",
                            "coordinates": [[[31.8,-5 ],[32,-5],[32,-4.7],[31.8,-4.7],[31.8,-5]]]
                        }
                    }
                ]
            },
            "geoLocation": {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                31.9,
                                -4.8
                            ]
                        }
                    }
                ]
            },
            "schemaMetadata": {
                "entityType": "BRICK_0_4__Building",
                "rootEntityType": "BRICK_0_4__Location",
                "schemaCollectionId": "BRICK_0_4",
                "entityIsSubClassOf": [
                    "BRICK_0_4__Location"
                ],
                "tags": [
                    "Building"
                ]
            },
            "brickEntitySubType": "BRICK_0_4__Building",
            "brickEntityType": "BRICK_0_4__Location",
            "isActive": true,
            "version": 1
        }
    ],
    "paging": {
        "totalCount": 1,
        "continuationToken": null
    }
}
```

## Errors

|Error|Description|
|---|---|
|400|Bad Request – The request could not be understood by the server due to malformed syntax.|
|403|The request can not proceed if ercollectionid is not registered or does not have any logs in ACL library.|
