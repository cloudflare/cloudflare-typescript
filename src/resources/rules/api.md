# Rules

## Lists

Types:

- <code><a href="./src/resources/rules/lists/lists.ts">Hostname</a></code>
- <code><a href="./src/resources/rules/lists/lists.ts">ListsList</a></code>
- <code><a href="./src/resources/rules/lists/lists.ts">Redirect</a></code>
- <code><a href="./src/resources/rules/lists/lists.ts">ListCreateResponse</a></code>
- <code><a href="./src/resources/rules/lists/lists.ts">ListUpdateResponse</a></code>
- <code><a href="./src/resources/rules/lists/lists.ts">ListDeleteResponse</a></code>
- <code><a href="./src/resources/rules/lists/lists.ts">ListGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/rules/lists">client.rules.lists.<a href="./src/resources/rules/lists/lists.ts">create</a>({ ...params }) -> ListCreateResponse</code>
- <code title="put /accounts/{account_id}/rules/lists/{list_id}">client.rules.lists.<a href="./src/resources/rules/lists/lists.ts">update</a>(listID, { ...params }) -> ListUpdateResponse</code>
- <code title="get /accounts/{account_id}/rules/lists">client.rules.lists.<a href="./src/resources/rules/lists/lists.ts">list</a>({ ...params }) -> ListsListsSinglePage</code>
- <code title="delete /accounts/{account_id}/rules/lists/{list_id}">client.rules.lists.<a href="./src/resources/rules/lists/lists.ts">delete</a>(listID, { ...params }) -> ListDeleteResponse</code>
- <code title="get /accounts/{account_id}/rules/lists/{list_id}">client.rules.lists.<a href="./src/resources/rules/lists/lists.ts">get</a>(listID, { ...params }) -> ListGetResponse</code>

### BulkOperations

Types:

- <code><a href="./src/resources/rules/lists/bulk-operations.ts">BulkOperationGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/rules/lists/bulk_operations/{operation_id}">client.rules.lists.bulkOperations.<a href="./src/resources/rules/lists/bulk-operations.ts">get</a>(operationID, { ...params }) -> BulkOperationGetResponse</code>

### Items

Types:

- <code><a href="./src/resources/rules/lists/items.ts">ListCursor</a></code>
- <code><a href="./src/resources/rules/lists/items.ts">ListItem</a></code>
- <code><a href="./src/resources/rules/lists/items.ts">ItemCreateResponse</a></code>
- <code><a href="./src/resources/rules/lists/items.ts">ItemUpdateResponse</a></code>
- <code><a href="./src/resources/rules/lists/items.ts">ItemListResponse</a></code>
- <code><a href="./src/resources/rules/lists/items.ts">ItemDeleteResponse</a></code>
- <code><a href="./src/resources/rules/lists/items.ts">ItemGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/rules/lists/{list_id}/items">client.rules.lists.items.<a href="./src/resources/rules/lists/items.ts">create</a>(listID, [ ...body ]) -> ItemCreateResponse</code>
- <code title="put /accounts/{account_id}/rules/lists/{list_id}/items">client.rules.lists.items.<a href="./src/resources/rules/lists/items.ts">update</a>(listID, [ ...body ]) -> ItemUpdateResponse</code>
- <code title="get /accounts/{account_id}/rules/lists/{list_id}/items">client.rules.lists.items.<a href="./src/resources/rules/lists/items.ts">list</a>(listID, { ...params }) -> ItemListResponsesCursorPaginationAfter</code>
- <code title="delete /accounts/{account_id}/rules/lists/{list_id}/items">client.rules.lists.items.<a href="./src/resources/rules/lists/items.ts">delete</a>(listID, { ...params }) -> ItemDeleteResponse</code>
- <code title="get /accounts/{account_id}/rules/lists/{list_id}/items/{item_id}">client.rules.lists.items.<a href="./src/resources/rules/lists/items.ts">get</a>(itemID, { ...params }) -> ItemGetResponse</code>
