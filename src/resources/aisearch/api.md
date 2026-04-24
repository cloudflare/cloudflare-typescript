# AISearch

## Namespaces

Types:

- <code><a href="./src/resources/aisearch/namespaces/namespaces.ts">NamespaceCreateResponse</a></code>
- <code><a href="./src/resources/aisearch/namespaces/namespaces.ts">NamespaceUpdateResponse</a></code>
- <code><a href="./src/resources/aisearch/namespaces/namespaces.ts">NamespaceListResponse</a></code>
- <code><a href="./src/resources/aisearch/namespaces/namespaces.ts">NamespaceDeleteResponse</a></code>
- <code><a href="./src/resources/aisearch/namespaces/namespaces.ts">NamespaceChatCompletionsResponse</a></code>
- <code><a href="./src/resources/aisearch/namespaces/namespaces.ts">NamespaceReadResponse</a></code>
- <code><a href="./src/resources/aisearch/namespaces/namespaces.ts">NamespaceSearchResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/ai-search/namespaces">client.aiSearch.namespaces.<a href="./src/resources/aisearch/namespaces/namespaces.ts">create</a>({ ...params }) -> NamespaceCreateResponse</code>
- <code title="put /accounts/{account_id}/ai-search/namespaces/{name}">client.aiSearch.namespaces.<a href="./src/resources/aisearch/namespaces/namespaces.ts">update</a>(name, { ...params }) -> NamespaceUpdateResponse</code>
- <code title="get /accounts/{account_id}/ai-search/namespaces">client.aiSearch.namespaces.<a href="./src/resources/aisearch/namespaces/namespaces.ts">list</a>({ ...params }) -> NamespaceListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/ai-search/namespaces/{name}">client.aiSearch.namespaces.<a href="./src/resources/aisearch/namespaces/namespaces.ts">delete</a>(name, { ...params }) -> NamespaceDeleteResponse</code>
- <code title="post /accounts/{account_id}/ai-search/namespaces/{name}/chat/completions">client.aiSearch.namespaces.<a href="./src/resources/aisearch/namespaces/namespaces.ts">chatCompletions</a>(name, { ...params }) -> NamespaceChatCompletionsResponse</code>
- <code title="get /accounts/{account_id}/ai-search/namespaces/{name}">client.aiSearch.namespaces.<a href="./src/resources/aisearch/namespaces/namespaces.ts">read</a>(name, { ...params }) -> NamespaceReadResponse</code>
- <code title="post /accounts/{account_id}/ai-search/namespaces/{name}/search">client.aiSearch.namespaces.<a href="./src/resources/aisearch/namespaces/namespaces.ts">search</a>(name, { ...params }) -> NamespaceSearchResponse</code>

### Instances

Types:

- <code><a href="./src/resources/aisearch/namespaces/instances/instances.ts">InstanceCreateResponse</a></code>
- <code><a href="./src/resources/aisearch/namespaces/instances/instances.ts">InstanceUpdateResponse</a></code>
- <code><a href="./src/resources/aisearch/namespaces/instances/instances.ts">InstanceListResponse</a></code>
- <code><a href="./src/resources/aisearch/namespaces/instances/instances.ts">InstanceDeleteResponse</a></code>
- <code><a href="./src/resources/aisearch/namespaces/instances/instances.ts">InstanceChatCompletionsResponse</a></code>
- <code><a href="./src/resources/aisearch/namespaces/instances/instances.ts">InstanceReadResponse</a></code>
- <code><a href="./src/resources/aisearch/namespaces/instances/instances.ts">InstanceSearchResponse</a></code>
- <code><a href="./src/resources/aisearch/namespaces/instances/instances.ts">InstanceStatsResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/ai-search/namespaces/{name}/instances">client.aiSearch.namespaces.instances.<a href="./src/resources/aisearch/namespaces/instances/instances.ts">create</a>(name, { ...params }) -> InstanceCreateResponse</code>
- <code title="put /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}">client.aiSearch.namespaces.instances.<a href="./src/resources/aisearch/namespaces/instances/instances.ts">update</a>(name, id, { ...params }) -> InstanceUpdateResponse</code>
- <code title="get /accounts/{account_id}/ai-search/namespaces/{name}/instances">client.aiSearch.namespaces.instances.<a href="./src/resources/aisearch/namespaces/instances/instances.ts">list</a>(name, { ...params }) -> InstanceListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}">client.aiSearch.namespaces.instances.<a href="./src/resources/aisearch/namespaces/instances/instances.ts">delete</a>(name, id, { ...params }) -> InstanceDeleteResponse</code>
- <code title="post /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/chat/completions">client.aiSearch.namespaces.instances.<a href="./src/resources/aisearch/namespaces/instances/instances.ts">chatCompletions</a>(name, id, { ...params }) -> InstanceChatCompletionsResponse</code>
- <code title="get /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}">client.aiSearch.namespaces.instances.<a href="./src/resources/aisearch/namespaces/instances/instances.ts">read</a>(name, id, { ...params }) -> InstanceReadResponse</code>
- <code title="post /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/search">client.aiSearch.namespaces.instances.<a href="./src/resources/aisearch/namespaces/instances/instances.ts">search</a>(name, id, { ...params }) -> InstanceSearchResponse</code>
- <code title="get /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/stats">client.aiSearch.namespaces.instances.<a href="./src/resources/aisearch/namespaces/instances/instances.ts">stats</a>(name, id, { ...params }) -> InstanceStatsResponse</code>

#### Jobs

Types:

- <code><a href="./src/resources/aisearch/namespaces/instances/jobs.ts">JobCreateResponse</a></code>
- <code><a href="./src/resources/aisearch/namespaces/instances/jobs.ts">JobUpdateResponse</a></code>
- <code><a href="./src/resources/aisearch/namespaces/instances/jobs.ts">JobListResponse</a></code>
- <code><a href="./src/resources/aisearch/namespaces/instances/jobs.ts">JobGetResponse</a></code>
- <code><a href="./src/resources/aisearch/namespaces/instances/jobs.ts">JobLogsResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs">client.aiSearch.namespaces.instances.jobs.<a href="./src/resources/aisearch/namespaces/instances/jobs.ts">create</a>(name, id, { ...params }) -> JobCreateResponse</code>
- <code title="patch /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs/{job_id}">client.aiSearch.namespaces.instances.jobs.<a href="./src/resources/aisearch/namespaces/instances/jobs.ts">update</a>(name, id, jobId, { ...params }) -> JobUpdateResponse</code>
- <code title="get /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs">client.aiSearch.namespaces.instances.jobs.<a href="./src/resources/aisearch/namespaces/instances/jobs.ts">list</a>(name, id, { ...params }) -> JobListResponsesV4PagePaginationArray</code>
- <code title="get /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs/{job_id}">client.aiSearch.namespaces.instances.jobs.<a href="./src/resources/aisearch/namespaces/instances/jobs.ts">get</a>(name, id, jobId, { ...params }) -> JobGetResponse</code>
- <code title="get /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/jobs/{job_id}/logs">client.aiSearch.namespaces.instances.jobs.<a href="./src/resources/aisearch/namespaces/instances/jobs.ts">logs</a>(name, id, jobId, { ...params }) -> JobLogsResponse</code>

#### Items

Types:

- <code><a href="./src/resources/aisearch/namespaces/instances/items.ts">ItemListResponse</a></code>
- <code><a href="./src/resources/aisearch/namespaces/instances/items.ts">ItemDeleteResponse</a></code>
- <code><a href="./src/resources/aisearch/namespaces/instances/items.ts">ItemChunksResponse</a></code>
- <code><a href="./src/resources/aisearch/namespaces/instances/items.ts">ItemCreateOrUpdateResponse</a></code>
- <code><a href="./src/resources/aisearch/namespaces/instances/items.ts">ItemGetResponse</a></code>
- <code><a href="./src/resources/aisearch/namespaces/instances/items.ts">ItemLogsResponse</a></code>
- <code><a href="./src/resources/aisearch/namespaces/instances/items.ts">ItemSyncResponse</a></code>
- <code><a href="./src/resources/aisearch/namespaces/instances/items.ts">ItemUploadResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items">client.aiSearch.namespaces.instances.items.<a href="./src/resources/aisearch/namespaces/instances/items.ts">list</a>(name, id, { ...params }) -> ItemListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}">client.aiSearch.namespaces.instances.items.<a href="./src/resources/aisearch/namespaces/instances/items.ts">delete</a>(name, id, itemId, { ...params }) -> ItemDeleteResponse</code>
- <code title="get /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}/chunks">client.aiSearch.namespaces.instances.items.<a href="./src/resources/aisearch/namespaces/instances/items.ts">chunks</a>(name, id, itemId, { ...params }) -> ItemChunksResponse</code>
- <code title="put /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items">client.aiSearch.namespaces.instances.items.<a href="./src/resources/aisearch/namespaces/instances/items.ts">createOrUpdate</a>(name, id, { ...params }) -> ItemCreateOrUpdateResponse</code>
- <code title="get /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}/download">client.aiSearch.namespaces.instances.items.<a href="./src/resources/aisearch/namespaces/instances/items.ts">download</a>(name, id, itemId, { ...params }) -> Response</code>
- <code title="get /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}">client.aiSearch.namespaces.instances.items.<a href="./src/resources/aisearch/namespaces/instances/items.ts">get</a>(name, id, itemId, { ...params }) -> ItemGetResponse</code>
- <code title="get /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}/logs">client.aiSearch.namespaces.instances.items.<a href="./src/resources/aisearch/namespaces/instances/items.ts">logs</a>(name, id, itemId, { ...params }) -> ItemLogsResponse</code>
- <code title="patch /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items/{item_id}">client.aiSearch.namespaces.instances.items.<a href="./src/resources/aisearch/namespaces/instances/items.ts">sync</a>(name, id, itemId, { ...params }) -> ItemSyncResponse</code>
- <code title="post /accounts/{account_id}/ai-search/namespaces/{name}/instances/{id}/items">client.aiSearch.namespaces.instances.items.<a href="./src/resources/aisearch/namespaces/instances/items.ts">upload</a>(name, id, { ...params }) -> ItemUploadResponse</code>

## Instances

Types:

- <code><a href="./src/resources/aisearch/instances/instances.ts">InstanceCreateResponse</a></code>
- <code><a href="./src/resources/aisearch/instances/instances.ts">InstanceUpdateResponse</a></code>
- <code><a href="./src/resources/aisearch/instances/instances.ts">InstanceListResponse</a></code>
- <code><a href="./src/resources/aisearch/instances/instances.ts">InstanceDeleteResponse</a></code>
- <code><a href="./src/resources/aisearch/instances/instances.ts">InstanceChatCompletionsResponse</a></code>
- <code><a href="./src/resources/aisearch/instances/instances.ts">InstanceReadResponse</a></code>
- <code><a href="./src/resources/aisearch/instances/instances.ts">InstanceSearchResponse</a></code>
- <code><a href="./src/resources/aisearch/instances/instances.ts">InstanceStatsResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/ai-search/instances">client.aiSearch.instances.<a href="./src/resources/aisearch/instances/instances.ts">create</a>({ ...params }) -> InstanceCreateResponse</code>
- <code title="put /accounts/{account_id}/ai-search/instances/{id}">client.aiSearch.instances.<a href="./src/resources/aisearch/instances/instances.ts">update</a>(id, { ...params }) -> InstanceUpdateResponse</code>
- <code title="get /accounts/{account_id}/ai-search/instances">client.aiSearch.instances.<a href="./src/resources/aisearch/instances/instances.ts">list</a>({ ...params }) -> InstanceListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/ai-search/instances/{id}">client.aiSearch.instances.<a href="./src/resources/aisearch/instances/instances.ts">delete</a>(id, { ...params }) -> InstanceDeleteResponse</code>
- <code title="post /accounts/{account_id}/ai-search/instances/{id}/chat/completions">client.aiSearch.instances.<a href="./src/resources/aisearch/instances/instances.ts">chatCompletions</a>(id, { ...params }) -> InstanceChatCompletionsResponse</code>
- <code title="get /accounts/{account_id}/ai-search/instances/{id}">client.aiSearch.instances.<a href="./src/resources/aisearch/instances/instances.ts">read</a>(id, { ...params }) -> InstanceReadResponse</code>
- <code title="post /accounts/{account_id}/ai-search/instances/{id}/search">client.aiSearch.instances.<a href="./src/resources/aisearch/instances/instances.ts">search</a>(id, { ...params }) -> InstanceSearchResponse</code>
- <code title="get /accounts/{account_id}/ai-search/instances/{id}/stats">client.aiSearch.instances.<a href="./src/resources/aisearch/instances/instances.ts">stats</a>(id, { ...params }) -> InstanceStatsResponse</code>

### Jobs

Types:

- <code><a href="./src/resources/aisearch/instances/jobs.ts">JobCreateResponse</a></code>
- <code><a href="./src/resources/aisearch/instances/jobs.ts">JobListResponse</a></code>
- <code><a href="./src/resources/aisearch/instances/jobs.ts">JobGetResponse</a></code>
- <code><a href="./src/resources/aisearch/instances/jobs.ts">JobLogsResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/ai-search/instances/{id}/jobs">client.aiSearch.instances.jobs.<a href="./src/resources/aisearch/instances/jobs.ts">create</a>(id, { ...params }) -> JobCreateResponse</code>
- <code title="get /accounts/{account_id}/ai-search/instances/{id}/jobs">client.aiSearch.instances.jobs.<a href="./src/resources/aisearch/instances/jobs.ts">list</a>(id, { ...params }) -> JobListResponsesV4PagePaginationArray</code>
- <code title="get /accounts/{account_id}/ai-search/instances/{id}/jobs/{job_id}">client.aiSearch.instances.jobs.<a href="./src/resources/aisearch/instances/jobs.ts">get</a>(id, jobId, { ...params }) -> JobGetResponse</code>
- <code title="get /accounts/{account_id}/ai-search/instances/{id}/jobs/{job_id}/logs">client.aiSearch.instances.jobs.<a href="./src/resources/aisearch/instances/jobs.ts">logs</a>(id, jobId, { ...params }) -> JobLogsResponse</code>

## Tokens

Types:

- <code><a href="./src/resources/aisearch/tokens.ts">TokenCreateResponse</a></code>
- <code><a href="./src/resources/aisearch/tokens.ts">TokenUpdateResponse</a></code>
- <code><a href="./src/resources/aisearch/tokens.ts">TokenListResponse</a></code>
- <code><a href="./src/resources/aisearch/tokens.ts">TokenDeleteResponse</a></code>
- <code><a href="./src/resources/aisearch/tokens.ts">TokenReadResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/ai-search/tokens">client.aiSearch.tokens.<a href="./src/resources/aisearch/tokens.ts">create</a>({ ...params }) -> TokenCreateResponse</code>
- <code title="put /accounts/{account_id}/ai-search/tokens/{id}">client.aiSearch.tokens.<a href="./src/resources/aisearch/tokens.ts">update</a>(id, { ...params }) -> TokenUpdateResponse</code>
- <code title="get /accounts/{account_id}/ai-search/tokens">client.aiSearch.tokens.<a href="./src/resources/aisearch/tokens.ts">list</a>({ ...params }) -> TokenListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/ai-search/tokens/{id}">client.aiSearch.tokens.<a href="./src/resources/aisearch/tokens.ts">delete</a>(id, { ...params }) -> TokenDeleteResponse</code>
- <code title="get /accounts/{account_id}/ai-search/tokens/{id}">client.aiSearch.tokens.<a href="./src/resources/aisearch/tokens.ts">read</a>(id, { ...params }) -> TokenReadResponse</code>
