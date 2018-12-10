---
post_title: 'GET a specific Event by EntityId'
layout: api_doc
published: true
---
# GET a specific Event by EventId
This endpoint is used to get specific event from Events API. Application user has to provide the ercollectionid as part of header body and eventid as part of url.
## URL

`https://{{HOST}}/apollo/events/{EventId}`

## Method

<div class="get">GET</div>

## Required IMS Scopes

* apollo_read (minimum)

## URL Path Parameters

|Name|Description|Example|Type|
|---|---|---|---|
|**eventid** <br>*required*|Event id|/apollo/events/eventid|string|


## Request Header Parameters

|Type|Value|Description|
|---|---|---|
|**Authorization** <br>*required*|Bearer {{access_token}}|IMS access token (User should have minimum of apollo_read scope)|
|**ercollectionid** <br>*required*|{{ercollectionid}}|ER Collection id|

## Example

### Request

```shell
curl -X GET \
  'https://{{HOST}}/apollo/events/someID' \
  -H 'authorization: Bearer {access_token}' \
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
        }
    ],
    "paging": {
        "totalCount": 1,
        "continuationToken": null
    }
}
```

## Non Error Reponses
|Success code|Description|
|---|---|
|200|OK – An event was found that matched the supplied event id and er collection id.|


## Errors

|Error code|Description|
|---|---|
|400|Bad Request – The request could not be understood by the server.|
|401|Unauthorized - Invalid token.|
|403|Forbidden - Any of the following:<br>&nbsp;&nbsp;-Incorrect scope (minimum of apollo_read required).<br>&nbsp;&nbsp;-User does not have access to supplied er collection id.<br>&nbsp;&nbsp;-Er collection id does not exist.|
|404|Not found - No event was found that matched the supplied event id and er collection id.|
|429|Too Many Requests - User is sending too many requests. Requests are now being throttled.|
|500|Internal Server Error - Something went wrong while processing the request.|
|503|Service Unavailable - Service is temporarily unavailable. Please, try your request again later|
