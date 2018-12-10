---
post_title: 'Subscribe to Change Feed Messages'
layout: api_doc
published: true
---
# Subscribe to Change Feed Messages

Subscribe to change feed messages for a given ER collection

## Setup a Subscription for an ER Collection

1. Ensure you have a subscription connection set up (See: <xref:subscriptionConnectionAdd.md>)
2. Subscribe to the ER collection that you would like to see messages for where the subscription source type is "ErCollection" and the source id is the ER collection (See: <xref:subscriptionAdd.md>)

Once you are subscribed to the ER collection, you will start seeing messages in your message queue in the format below

## Change Feed Event Message Format
|Name|Schema|Description|
|---|---|---|
| **id**|string|Message ID|
| **timestamp**|ISO 8601 string(date-time + offset)|Message timestamp in milliseconds|
| **timeout**|TimeSpan|Message timeout|
| **correlationId**|string|Correlation ID|
| **sender**|string|ER collection that sent the message in the format "ErCollection:{ErCollectionId}"|
| **recipient**|string|Message recipient, null if broadcast|
| **checksum**|string|Checksum value of the message to prevent message tampering|
| **sequenceContainer**|string|Sequence container is set to the ER collection|
| **sequenceId**|long|Sequential unique identifier for the ER collection. Every change within the collection get's assigned a sequence ID, which increments by 1 for each change|
| **data.version**|string|Entity or Relationship version|
| **data.notificationId**|string|Notification ID|
| **data.timestamp**|ISO 8601 string(date-time + offset)|Message timestamp in milliseconds|
| **data.notificationType**|string|Created, Updated, or Deleted|
| **data.entityId**|string|Empty if data.relationshipId is defined|
| **data.entityType**|string|Entity type, empty if data.relationshipType is defined|
| **data.relationshipId**|string|Empty if data.entityId is defined|
| **data.relationshipType**|string|Relationship type, empty if data.entityType is defined|
| **data.ercollectionid**|string|ER Collection|
| **sequence.container** <br>*deprecated*|string|ER Collection|
| **sequence.sequenceid** <br>*deprecated*|string|Sequential unique identifier for the ER collection. Every change within the collection get's assigned a sequence ID, which increments by 1 for each change|
| **sequence.wrap** <br>*deprecated*|boolean|Denotes whether the sequenceId has been reset|

### Example
```json
{
  "id": "fec98c0d-bd14-4244-9025-d3182cc69944",
  "timestamp": "2018-09-15T02:58:59.7339982+00:00",
  "correlationid": "78ccf688-abc5-4dcf-9db1-80e07e2685a1",
  "sender": "ErCollection:ExampleCollectionID",
  "recipient":null,
  "checksum": "d627949370e6dcb6d567d7138015350f", 
  "sequenceContainer": "ExampleCollectionID",
  "sequenceId": 1,
  "data": {
    "version": "1",
    "notificationId": "fec98c0d-bd14-4244-9025-d3182cc69944",
    "timestamp":"2018-09-15T02:58:59.7339982+00:00",    
    "notificationType": "Updated",
    "entityType": "BRICK_0_4__Point",
    "entityId": "947a5bbb-9abc-e523-0d54-a522280f568a",
    "ercollectionid": "ExampleCollectionID",
    "relationshipId": null,
    "relationshipType": null
  }
}
```