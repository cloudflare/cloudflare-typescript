# D1

Types:

- <code><a href="./src/resources/d1/d1.ts">D1</a></code>

## Database

Types:

- <code><a href="./src/resources/d1/database.ts">QueryResult</a></code>
- <code><a href="./src/resources/d1/database.ts">DatabaseListResponse</a></code>
- <code><a href="./src/resources/d1/database.ts">DatabaseDeleteResponse</a></code>
- <code><a href="./src/resources/d1/database.ts">DatabaseExportResponse</a></code>
- <code><a href="./src/resources/d1/database.ts">DatabaseImportResponse</a></code>
- <code><a href="./src/resources/d1/database.ts">DatabaseRawResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/d1/database">client.d1.database.<a href="./src/resources/d1/database.ts">create</a>({ ...params }) -> D1</code>
- <code title="put /accounts/{account_id}/d1/database/{database_id}">client.d1.database.<a href="./src/resources/d1/database.ts">update</a>(databaseId, { ...params }) -> D1</code>
- <code title="get /accounts/{account_id}/d1/database">client.d1.database.<a href="./src/resources/d1/database.ts">list</a>({ ...params }) -> DatabaseListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/d1/database/{database_id}">client.d1.database.<a href="./src/resources/d1/database.ts">delete</a>(databaseId, { ...params }) -> DatabaseDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/d1/database/{database_id}">client.d1.database.<a href="./src/resources/d1/database.ts">edit</a>(databaseId, { ...params }) -> D1</code>
- <code title="post /accounts/{account_id}/d1/database/{database_id}/export">client.d1.database.<a href="./src/resources/d1/database.ts">export</a>(databaseId, { ...params }) -> DatabaseExportResponse</code>
- <code title="get /accounts/{account_id}/d1/database/{database_id}">client.d1.database.<a href="./src/resources/d1/database.ts">get</a>(databaseId, { ...params }) -> D1</code>
- <code title="post /accounts/{account_id}/d1/database/{database_id}/import">client.d1.database.<a href="./src/resources/d1/database.ts">import</a>(databaseId, { ...params }) -> DatabaseImportResponse</code>
- <code title="post /accounts/{account_id}/d1/database/{database_id}/query">client.d1.database.<a href="./src/resources/d1/database.ts">query</a>(databaseId, { ...params }) -> QueryResultsSinglePage</code>
- <code title="post /accounts/{account_id}/d1/database/{database_id}/raw">client.d1.database.<a href="./src/resources/d1/database.ts">raw</a>(databaseId, { ...params }) -> DatabaseRawResponsesSinglePage</code>
