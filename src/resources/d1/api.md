# D1

Types:

- <code><a href="./src/resources/d1/d1.ts">D1</a></code>

## Database

Types:

- <code><a href="./src/resources/d1/database/database.ts">QueryResult</a></code>
- <code><a href="./src/resources/d1/database/database.ts">DatabaseListResponse</a></code>
- <code><a href="./src/resources/d1/database/database.ts">DatabaseDeleteResponse</a></code>
- <code><a href="./src/resources/d1/database/database.ts">DatabaseExportResponse</a></code>
- <code><a href="./src/resources/d1/database/database.ts">DatabaseImportResponse</a></code>
- <code><a href="./src/resources/d1/database/database.ts">DatabaseRawResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/d1/database">client.d1.database.<a href="./src/resources/d1/database/database.ts">create</a>({ ...params }) -> D1</code>
- <code title="put /accounts/{account_id}/d1/database/{database_id}">client.d1.database.<a href="./src/resources/d1/database/database.ts">update</a>(databaseID, { ...params }) -> D1</code>
- <code title="get /accounts/{account_id}/d1/database">client.d1.database.<a href="./src/resources/d1/database/database.ts">list</a>({ ...params }) -> DatabaseListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/d1/database/{database_id}">client.d1.database.<a href="./src/resources/d1/database/database.ts">delete</a>(databaseID, { ...params }) -> DatabaseDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/d1/database/{database_id}">client.d1.database.<a href="./src/resources/d1/database/database.ts">edit</a>(databaseID, { ...params }) -> D1</code>
- <code title="post /accounts/{account_id}/d1/database/{database_id}/export">client.d1.database.<a href="./src/resources/d1/database/database.ts">export</a>(databaseID, { ...params }) -> DatabaseExportResponse</code>
- <code title="get /accounts/{account_id}/d1/database/{database_id}">client.d1.database.<a href="./src/resources/d1/database/database.ts">get</a>(databaseID, { ...params }) -> D1</code>
- <code title="post /accounts/{account_id}/d1/database/{database_id}/import">client.d1.database.<a href="./src/resources/d1/database/database.ts">import</a>(databaseID, { ...params }) -> DatabaseImportResponse</code>
- <code title="post /accounts/{account_id}/d1/database/{database_id}/query">client.d1.database.<a href="./src/resources/d1/database/database.ts">query</a>(databaseID, { ...params }) -> QueryResultsSinglePage</code>
- <code title="post /accounts/{account_id}/d1/database/{database_id}/raw">client.d1.database.<a href="./src/resources/d1/database/database.ts">raw</a>(databaseID, { ...params }) -> DatabaseRawResponsesSinglePage</code>

### TimeTravel

Types:

- <code><a href="./src/resources/d1/database/time-travel.ts">TimeTravelGetBookmarkResponse</a></code>
- <code><a href="./src/resources/d1/database/time-travel.ts">TimeTravelRestoreResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/d1/database/{database_id}/time_travel/bookmark">client.d1.database.timeTravel.<a href="./src/resources/d1/database/time-travel.ts">getBookmark</a>(databaseID, { ...params }) -> TimeTravelGetBookmarkResponse</code>
- <code title="post /accounts/{account_id}/d1/database/{database_id}/time_travel/restore">client.d1.database.timeTravel.<a href="./src/resources/d1/database/time-travel.ts">restore</a>(databaseID, { ...params }) -> TimeTravelRestoreResponse</code>
