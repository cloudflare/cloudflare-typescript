# Filters

Types:

- <code><a href="./src/resources/filters.ts">FirewallFilter</a></code>
- <code><a href="./src/resources/filters.ts">FilterDeleteResponse</a></code>
- <code><a href="./src/resources/filters.ts">FilterBulkDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/filters">client.filters.<a href="./src/resources/filters.ts">create</a>([ ...body ]) -> FirewallFiltersSinglePage</code>
- <code title="put /zones/{zone_id}/filters/{filter_id}">client.filters.<a href="./src/resources/filters.ts">update</a>(filterId, { ...params }) -> FirewallFilter</code>
- <code title="get /zones/{zone_id}/filters">client.filters.<a href="./src/resources/filters.ts">list</a>({ ...params }) -> FirewallFiltersV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/filters/{filter_id}">client.filters.<a href="./src/resources/filters.ts">delete</a>(filterId, { ...params }) -> FilterDeleteResponse</code>
- <code title="delete /zones/{zone_id}/filters">client.filters.<a href="./src/resources/filters.ts">bulkDelete</a>({ ...params }) -> FilterBulkDeleteResponse | null</code>
- <code title="put /zones/{zone_id}/filters">client.filters.<a href="./src/resources/filters.ts">bulkUpdate</a>([ ...body ]) -> FirewallFiltersSinglePage</code>
- <code title="get /zones/{zone_id}/filters/{filter_id}">client.filters.<a href="./src/resources/filters.ts">get</a>(filterId, { ...params }) -> FirewallFilter</code>
