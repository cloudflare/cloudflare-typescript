# Vectorize

## Indexes

Types:

- <code><a href="./src/resources/vectorize/indexes/indexes.ts">CreateIndex</a></code>
- <code><a href="./src/resources/vectorize/indexes/indexes.ts">IndexDeleteVectorsByID</a></code>
- <code><a href="./src/resources/vectorize/indexes/indexes.ts">IndexDimensionConfiguration</a></code>
- <code><a href="./src/resources/vectorize/indexes/indexes.ts">IndexInsert</a></code>
- <code><a href="./src/resources/vectorize/indexes/indexes.ts">IndexQuery</a></code>
- <code><a href="./src/resources/vectorize/indexes/indexes.ts">IndexUpsert</a></code>
- <code><a href="./src/resources/vectorize/indexes/indexes.ts">IndexDeleteResponse</a></code>
- <code><a href="./src/resources/vectorize/indexes/indexes.ts">IndexDeleteByIDsResponse</a></code>
- <code><a href="./src/resources/vectorize/indexes/indexes.ts">IndexGetByIDsResponse</a></code>
- <code><a href="./src/resources/vectorize/indexes/indexes.ts">IndexInfoResponse</a></code>
- <code><a href="./src/resources/vectorize/indexes/indexes.ts">IndexInsertResponse</a></code>
- <code><a href="./src/resources/vectorize/indexes/indexes.ts">IndexListVectorsResponse</a></code>
- <code><a href="./src/resources/vectorize/indexes/indexes.ts">IndexQueryResponse</a></code>
- <code><a href="./src/resources/vectorize/indexes/indexes.ts">IndexUpsertResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/vectorize/v2/indexes">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes/indexes.ts">create</a>({ ...params }) -> CreateIndex | null</code>
- <code title="get /accounts/{account_id}/vectorize/v2/indexes">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes/indexes.ts">list</a>({ ...params }) -> CreateIndicesSinglePage</code>
- <code title="delete /accounts/{account_id}/vectorize/v2/indexes/{index_name}">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes/indexes.ts">delete</a>(indexName, { ...params }) -> IndexDeleteResponse | null</code>
- <code title="post /accounts/{account_id}/vectorize/v2/indexes/{index_name}/delete_by_ids">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes/indexes.ts">deleteByIds</a>(indexName, { ...params }) -> IndexDeleteByIDsResponse | null</code>
- <code title="get /accounts/{account_id}/vectorize/v2/indexes/{index_name}">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes/indexes.ts">get</a>(indexName, { ...params }) -> CreateIndex | null</code>
- <code title="post /accounts/{account_id}/vectorize/v2/indexes/{index_name}/get_by_ids">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes/indexes.ts">getByIds</a>(indexName, { ...params }) -> IndexGetByIDsResponse | null</code>
- <code title="get /accounts/{account_id}/vectorize/v2/indexes/{index_name}/info">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes/indexes.ts">info</a>(indexName, { ...params }) -> IndexInfoResponse | null</code>
- <code title="post /accounts/{account_id}/vectorize/v2/indexes/{index_name}/insert">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes/indexes.ts">insert</a>(indexName, { ...params }) -> IndexInsertResponse | null</code>
- <code title="get /accounts/{account_id}/vectorize/v2/indexes/{index_name}/list">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes/indexes.ts">listVectors</a>(indexName, { ...params }) -> IndexListVectorsResponse | null</code>
- <code title="post /accounts/{account_id}/vectorize/v2/indexes/{index_name}/query">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes/indexes.ts">query</a>(indexName, { ...params }) -> IndexQueryResponse | null</code>
- <code title="post /accounts/{account_id}/vectorize/v2/indexes/{index_name}/upsert">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes/indexes.ts">upsert</a>(indexName, { ...params }) -> IndexUpsertResponse | null</code>

### MetadataIndex

Types:

- <code><a href="./src/resources/vectorize/indexes/metadata-index.ts">MetadataIndexCreateResponse</a></code>
- <code><a href="./src/resources/vectorize/indexes/metadata-index.ts">MetadataIndexListResponse</a></code>
- <code><a href="./src/resources/vectorize/indexes/metadata-index.ts">MetadataIndexDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/vectorize/v2/indexes/{index_name}/metadata_index/create">client.vectorize.indexes.metadataIndex.<a href="./src/resources/vectorize/indexes/metadata-index.ts">create</a>(indexName, { ...params }) -> MetadataIndexCreateResponse | null</code>
- <code title="get /accounts/{account_id}/vectorize/v2/indexes/{index_name}/metadata_index/list">client.vectorize.indexes.metadataIndex.<a href="./src/resources/vectorize/indexes/metadata-index.ts">list</a>(indexName, { ...params }) -> MetadataIndexListResponse | null</code>
- <code title="post /accounts/{account_id}/vectorize/v2/indexes/{index_name}/metadata_index/delete">client.vectorize.indexes.metadataIndex.<a href="./src/resources/vectorize/indexes/metadata-index.ts">delete</a>(indexName, { ...params }) -> MetadataIndexDeleteResponse | null</code>
