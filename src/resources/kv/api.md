# KV

## Namespaces

Types:

- <code><a href="./src/resources/kv/namespaces/namespaces.ts">Namespace</a></code>
- <code><a href="./src/resources/kv/namespaces/namespaces.ts">NamespaceDeleteResponse</a></code>
- <code><a href="./src/resources/kv/namespaces/namespaces.ts">NamespaceBulkDeleteResponse</a></code>
- <code><a href="./src/resources/kv/namespaces/namespaces.ts">NamespaceBulkGetResponse</a></code>
- <code><a href="./src/resources/kv/namespaces/namespaces.ts">NamespaceBulkUpdateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/storage/kv/namespaces">client.kv.namespaces.<a href="./src/resources/kv/namespaces/namespaces.ts">create</a>({ ...params }) -> Namespace</code>
- <code title="put /accounts/{account_id}/storage/kv/namespaces/{namespace_id}">client.kv.namespaces.<a href="./src/resources/kv/namespaces/namespaces.ts">update</a>(namespaceId, { ...params }) -> Namespace</code>
- <code title="get /accounts/{account_id}/storage/kv/namespaces">client.kv.namespaces.<a href="./src/resources/kv/namespaces/namespaces.ts">list</a>({ ...params }) -> NamespacesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/storage/kv/namespaces/{namespace_id}">client.kv.namespaces.<a href="./src/resources/kv/namespaces/namespaces.ts">delete</a>(namespaceId, { ...params }) -> NamespaceDeleteResponse | null</code>
- <code title="post /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk/delete">client.kv.namespaces.<a href="./src/resources/kv/namespaces/namespaces.ts">bulkDelete</a>(namespaceId, [ ...body ]) -> NamespaceBulkDeleteResponse | null</code>
- <code title="post /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk/get">client.kv.namespaces.<a href="./src/resources/kv/namespaces/namespaces.ts">bulkGet</a>(namespaceId, { ...params }) -> NamespaceBulkGetResponse | null</code>
- <code title="put /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk">client.kv.namespaces.<a href="./src/resources/kv/namespaces/namespaces.ts">bulkUpdate</a>(namespaceId, [ ...body ]) -> NamespaceBulkUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/storage/kv/namespaces/{namespace_id}">client.kv.namespaces.<a href="./src/resources/kv/namespaces/namespaces.ts">get</a>(namespaceId, { ...params }) -> Namespace</code>

### Keys

Types:

- <code><a href="./src/resources/kv/namespaces/keys.ts">Key</a></code>
- <code><a href="./src/resources/kv/namespaces/keys.ts">KeyBulkDeleteResponse</a></code>
- <code><a href="./src/resources/kv/namespaces/keys.ts">KeyBulkGetResponse</a></code>
- <code><a href="./src/resources/kv/namespaces/keys.ts">KeyBulkUpdateResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/keys">client.kv.namespaces.keys.<a href="./src/resources/kv/namespaces/keys.ts">list</a>(namespaceId, { ...params }) -> KeysCursorLimitPagination</code>
- <code title="post /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk/delete">client.kv.namespaces.keys.<a href="./src/resources/kv/namespaces/keys.ts">bulkDelete</a>(namespaceId, [ ...body ]) -> KeyBulkDeleteResponse | null</code>
- <code title="post /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk/get">client.kv.namespaces.keys.<a href="./src/resources/kv/namespaces/keys.ts">bulkGet</a>(namespaceId, { ...params }) -> KeyBulkGetResponse | null</code>
- <code title="put /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk">client.kv.namespaces.keys.<a href="./src/resources/kv/namespaces/keys.ts">bulkUpdate</a>(namespaceId, [ ...body ]) -> KeyBulkUpdateResponse | null</code>

### Metadata

Types:

- <code><a href="./src/resources/kv/namespaces/metadata.ts">MetadataGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/metadata/{key_name}">client.kv.namespaces.metadata.<a href="./src/resources/kv/namespaces/metadata.ts">get</a>(namespaceId, keyName, { ...params }) -> MetadataGetResponse</code>

### Values

Types:

- <code><a href="./src/resources/kv/namespaces/values.ts">ValueUpdateResponse</a></code>
- <code><a href="./src/resources/kv/namespaces/values.ts">ValueDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values/{key_name}">client.kv.namespaces.values.<a href="./src/resources/kv/namespaces/values.ts">update</a>(namespaceId, keyName, { ...params }) -> ValueUpdateResponse | null</code>
- <code title="delete /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values/{key_name}">client.kv.namespaces.values.<a href="./src/resources/kv/namespaces/values.ts">delete</a>(namespaceId, keyName, { ...params }) -> ValueDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values/{key_name}">client.kv.namespaces.values.<a href="./src/resources/kv/namespaces/values.ts">get</a>(namespaceId, keyName, { ...params }) -> Response</code>
