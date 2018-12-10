---
post_title: 'GET all Events'
layout: api_doc
published: true
---
# Get all Events

This endpoint is used to get all Events from Event API. Application user has to provide the ercollectionid , continuationToken (optional) and PageSize (optional) as part of header body. This endpoint has limited support of Odata v4 styled queries and will return results in a standard platform response. 

## URL

`https://{{HOST}}/apollo/events`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read (minimum)

## URL Query Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**OdataQueryOptions** <br>*optional*|Currently supported query clauses are $top,$count,$filter,$select,$orderby|/apollo/events?$top=1&$filter=id eq 'someValue'&$orderby=createdat|string|

## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {{access_token}}|IMS access token (User should have apollo_read scope)|
|**ercollectionid** <br>*required*|{{ercollectionid}}|ER Collection id|
|**continuationToken** <br>*optional*|{{continuationToken}}|Token for pagination. (**Note**: Not required for first page but required for subsequent pages)|
|**PageSize** <br>*optional*|{{PageSize}}|Page size (default:100, min:1, max:1000)|

## Example

### Request

```shell
curl -X GET \
    'https://{{HOST}}/apollo/events?$filter=buildingId%20eq%20%27EnrichedBuildingName-294%27' \  
    -H 'Authorization: Bearer {{access_token}}' \
    -H 'ercollectionid: {{ercollectionid}}'
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
            "id": "someID",
            "altitude": 0,
            "panelId": "EnrichedPanelId-294",
            "vParentDeviceId": "someParentid",
            "latitude": 0,
            "regionName": "EnrichedRegionName-294",
            "isUserEvent": false,
            "clusterId": "ClusterID8-",
            "cityId": "EnrichedCityId-294",
            "type": "someType",
            "countryId": "EnrichedCountryId-294",
            "panelName": "EnrichedPanelName-294",
            "floorId": "EnrichedFloorId-294",
            "cityName": "EnrichedCityName-294",
            "segmentId": "EnrichedSegmentId-294",
            "checksum": "9a2a71833c300f97ba6b86a8341bcd24",
            "floorName": "EnrichedFloorName-294",
            "longitude": 0,
            "severity": "Critical",
            "occurredAt": "2018-09-11T20:24:08.1106925Z",
            "vDeviceId": "someParentid",
            "segmentName": "EnrichedSegmentName-294",
            "buildingId": "EnrichedBuildingName-294",
            "descr": "Communications Lost",
            "eventTypeId": "Q2x1c3RlcklEOC1MZW5lbE9uR3VhcmQtQ29tbXVuaWNhdGlvbnNMb3N0",
            "eventDetails": {
		"property":"someValue"
            },
            "regionId": "EnrichedRegionId-294",
            "name": "name",
            "sourceEvent": {
                "Type": "SomeSourceEventType",
                "Event": {
            },
            "ercollectionid": "someErCollection",
            "countryName": "EnrichedCountryName-294",
            "status": "Open"
        },
        {
            "id": "someID2",
            "altitude": 0,
            "panelId": "EnrichedPanelId-294",
            "vParentDeviceId": "someParentid",
            "latitude": 0,
            "regionName": "EnrichedRegionName-294",
            "isUserEvent": false,
            "clusterId": "ClusterID8-",
            "cityId": "EnrichedCityId-294",
            "type": "someType",
            "countryId": "EnrichedCountryId-294",
            "panelName": "EnrichedPanelName-294",
            "floorId": "EnrichedFloorId-294",
            "cityName": "EnrichedCityName-294",
            "segmentId": "EnrichedSegmentId-294",
            "checksum": "9a2a71833c300f97ba6b86a8341bcd24",
            "floorName": "EnrichedFloorName-294",
            "longitude": 0,
            "severity": "Critical",
            "occurredAt": "2018-09-11T20:24:08.1106925Z",
            "vDeviceId": "someParentid",
            "segmentName": "EnrichedSegmentName-294",
            "buildingId": "EnrichedBuildingName-294",
            "descr": "Communications Lost",
            "eventTypeId": "Q2x1c3RlcklEOC1MZW5lbE9uR3VhcmQtQ29tbXVuaWNhdGlvbnNMb3N0",
            "eventDetails": {
		"property":"someValue"
            },
            "regionId": "EnrichedRegionId-294",
            "name": "name",
            "sourceEvent": {
                "Type": "SomeSourceEventType",
                "Event": {
            },
            "ercollectionid": "someErCollection",
            "countryName": "EnrichedCountryName-294",
            "status": "Open"
        }
    ],
    "paging": {
        "totalCount": 2,
        "continuationToken": "+RID:If4xAN5TNQCrUAAAAAAADA==#RT:1#TRC:1#FPC:"
    }
}
```
## Non Error Reponses

|Success code|Description|
|---|---|
|200|OK – Request was understood and events based on your search criteria and supplied er collection id were found.|
|204|No Content - No events were found that matched your search criteria and er collection id.|


## Errors

|Error code|Description|
|---|---|
|400|Bad Request – The request could not be understood by the server.|
|401|Unauthorized - Invalid token.|
|403|Forbidden - Any of the following:<br>&nbsp;&nbsp;-Incorrect scope (minimum of apollo_read required).<br>&nbsp;&nbsp;-User does not have access to supplied er collection id.<br>&nbsp;&nbsp;-Er collection id does not exist.|
|429|Too Many Requests - User is sending too many requests. Requests are now being throttled.|
|500|Internal Server Error - Something went wrong while processing the request.|
|503|Service Unavailable - Service is temporarily unavailable. Please, try your request again later|