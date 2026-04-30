# Queues

Types:

- <code><a href="./src/resources/queues/queues.ts">Queue</a></code>
- <code><a href="./src/resources/queues/queues.ts">QueueDeleteResponse</a></code>
- <code><a href="./src/resources/queues/queues.ts">QueueGetMetricsResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/queues">client.queues.<a href="./src/resources/queues/queues.ts">create</a>({ ...params }) -> Queue</code>
- <code title="put /accounts/{account_id}/queues/{queue_id}">client.queues.<a href="./src/resources/queues/queues.ts">update</a>(queueId, { ...params }) -> Queue</code>
- <code title="get /accounts/{account_id}/queues">client.queues.<a href="./src/resources/queues/queues.ts">list</a>({ ...params }) -> QueuesSinglePage</code>
- <code title="delete /accounts/{account_id}/queues/{queue_id}">client.queues.<a href="./src/resources/queues/queues.ts">delete</a>(queueId, { ...params }) -> QueueDeleteResponse</code>
- <code title="patch /accounts/{account_id}/queues/{queue_id}">client.queues.<a href="./src/resources/queues/queues.ts">edit</a>(queueId, { ...params }) -> Queue</code>
- <code title="get /accounts/{account_id}/queues/{queue_id}">client.queues.<a href="./src/resources/queues/queues.ts">get</a>(queueId, { ...params }) -> Queue</code>
- <code title="get /accounts/{account_id}/queues/{queue_id}/metrics">client.queues.<a href="./src/resources/queues/queues.ts">getMetrics</a>(queueId, { ...params }) -> QueueGetMetricsResponse</code>

## Messages

Types:

- <code><a href="./src/resources/queues/messages.ts">MessageAckResponse</a></code>
- <code><a href="./src/resources/queues/messages.ts">MessageBulkPushResponse</a></code>
- <code><a href="./src/resources/queues/messages.ts">MessagePullResponse</a></code>
- <code><a href="./src/resources/queues/messages.ts">MessagePushResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/queues/{queue_id}/messages/ack">client.queues.messages.<a href="./src/resources/queues/messages.ts">ack</a>(queueId, { ...params }) -> MessageAckResponse</code>
- <code title="post /accounts/{account_id}/queues/{queue_id}/messages/batch">client.queues.messages.<a href="./src/resources/queues/messages.ts">bulkPush</a>(queueId, { ...params }) -> MessageBulkPushResponse</code>
- <code title="post /accounts/{account_id}/queues/{queue_id}/messages/pull">client.queues.messages.<a href="./src/resources/queues/messages.ts">pull</a>(queueId, { ...params }) -> MessagePullResponse</code>
- <code title="post /accounts/{account_id}/queues/{queue_id}/messages">client.queues.messages.<a href="./src/resources/queues/messages.ts">push</a>(queueId, { ...params }) -> MessagePushResponse</code>

## Purge

Types:

- <code><a href="./src/resources/queues/purge.ts">PurgeStatusResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/queues/{queue_id}/purge">client.queues.purge.<a href="./src/resources/queues/purge.ts">start</a>(queueId, { ...params }) -> Queue</code>
- <code title="get /accounts/{account_id}/queues/{queue_id}/purge">client.queues.purge.<a href="./src/resources/queues/purge.ts">status</a>(queueId, { ...params }) -> PurgeStatusResponse</code>

## Consumers

Types:

- <code><a href="./src/resources/queues/consumers.ts">Consumer</a></code>
- <code><a href="./src/resources/queues/consumers.ts">ConsumerDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/queues/{queue_id}/consumers">client.queues.consumers.<a href="./src/resources/queues/consumers.ts">create</a>(queueId, { ...params }) -> Consumer</code>
- <code title="put /accounts/{account_id}/queues/{queue_id}/consumers/{consumer_id}">client.queues.consumers.<a href="./src/resources/queues/consumers.ts">update</a>(queueId, consumerId, { ...params }) -> Consumer</code>
- <code title="get /accounts/{account_id}/queues/{queue_id}/consumers">client.queues.consumers.<a href="./src/resources/queues/consumers.ts">list</a>(queueId, { ...params }) -> ConsumersSinglePage</code>
- <code title="delete /accounts/{account_id}/queues/{queue_id}/consumers/{consumer_id}">client.queues.consumers.<a href="./src/resources/queues/consumers.ts">delete</a>(queueId, consumerId, { ...params }) -> ConsumerDeleteResponse</code>
- <code title="get /accounts/{account_id}/queues/{queue_id}/consumers/{consumer_id}">client.queues.consumers.<a href="./src/resources/queues/consumers.ts">get</a>(queueId, consumerId, { ...params }) -> Consumer</code>

## Subscriptions

Types:

- <code><a href="./src/resources/queues/subscriptions.ts">SubscriptionCreateResponse</a></code>
- <code><a href="./src/resources/queues/subscriptions.ts">SubscriptionUpdateResponse</a></code>
- <code><a href="./src/resources/queues/subscriptions.ts">SubscriptionListResponse</a></code>
- <code><a href="./src/resources/queues/subscriptions.ts">SubscriptionDeleteResponse</a></code>
- <code><a href="./src/resources/queues/subscriptions.ts">SubscriptionGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/event_subscriptions/subscriptions">client.queues.subscriptions.<a href="./src/resources/queues/subscriptions.ts">create</a>({ ...params }) -> SubscriptionCreateResponse</code>
- <code title="patch /accounts/{account_id}/event_subscriptions/subscriptions/{subscription_id}">client.queues.subscriptions.<a href="./src/resources/queues/subscriptions.ts">update</a>(subscriptionId, { ...params }) -> SubscriptionUpdateResponse</code>
- <code title="get /accounts/{account_id}/event_subscriptions/subscriptions">client.queues.subscriptions.<a href="./src/resources/queues/subscriptions.ts">list</a>({ ...params }) -> SubscriptionListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/event_subscriptions/subscriptions/{subscription_id}">client.queues.subscriptions.<a href="./src/resources/queues/subscriptions.ts">delete</a>(subscriptionId, { ...params }) -> SubscriptionDeleteResponse</code>
- <code title="get /accounts/{account_id}/event_subscriptions/subscriptions/{subscription_id}">client.queues.subscriptions.<a href="./src/resources/queues/subscriptions.ts">get</a>(subscriptionId, { ...params }) -> SubscriptionGetResponse</code>
