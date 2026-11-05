# K2

## Streams

Types:

- <code><a href="./src/resources/k2/streams/streams.ts">StreamCreateResponse</a></code>
- <code><a href="./src/resources/k2/streams/streams.ts">StreamUpdateResponse</a></code>
- <code><a href="./src/resources/k2/streams/streams.ts">StreamListResponse</a></code>
- <code><a href="./src/resources/k2/streams/streams.ts">StreamDeleteResponse</a></code>
- <code><a href="./src/resources/k2/streams/streams.ts">StreamGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/k2/streams">client.k2.streams.<a href="./src/resources/k2/streams/streams.ts">create</a>({ ...params }) -> StreamCreateResponse</code>
- <code title="patch /accounts/{account_id}/k2/streams/{stream_id}">client.k2.streams.<a href="./src/resources/k2/streams/streams.ts">update</a>(streamID, { ...params }) -> StreamUpdateResponse</code>
- <code title="get /accounts/{account_id}/k2/streams">client.k2.streams.<a href="./src/resources/k2/streams/streams.ts">list</a>({ ...params }) -> StreamListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/k2/streams/{stream_id}">client.k2.streams.<a href="./src/resources/k2/streams/streams.ts">delete</a>(streamID, { ...params }) -> StreamDeleteResponse</code>
- <code title="get /accounts/{account_id}/k2/streams/{stream_id}">client.k2.streams.<a href="./src/resources/k2/streams/streams.ts">get</a>(streamID, { ...params }) -> StreamGetResponse</code>

### Subscriptions

Types:

- <code><a href="./src/resources/k2/streams/subscriptions.ts">SubscriptionListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/k2/streams/{stream_id}/subscriptions">client.k2.streams.subscriptions.<a href="./src/resources/k2/streams/subscriptions.ts">list</a>(streamID, { ...params }) -> SubscriptionListResponsesSinglePage</code>
