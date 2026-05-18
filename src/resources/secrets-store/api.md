# SecretsStore

## Stores

Types:

- <code><a href="./src/resources/secrets-store/stores/stores.ts">StoreCreateResponse</a></code>
- <code><a href="./src/resources/secrets-store/stores/stores.ts">StoreListResponse</a></code>
- <code><a href="./src/resources/secrets-store/stores/stores.ts">StoreDeleteResponse</a></code>
- <code><a href="./src/resources/secrets-store/stores/stores.ts">StoreGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/secrets_store/stores">client.secretsStore.stores.<a href="./src/resources/secrets-store/stores/stores.ts">create</a>({ ...params }) -> StoreCreateResponse</code>
- <code title="get /accounts/{account_id}/secrets_store/stores">client.secretsStore.stores.<a href="./src/resources/secrets-store/stores/stores.ts">list</a>({ ...params }) -> StoreListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/secrets_store/stores/{store_id}">client.secretsStore.stores.<a href="./src/resources/secrets-store/stores/stores.ts">delete</a>(storeID, { ...params }) -> StoreDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/secrets_store/stores/{store_id}">client.secretsStore.stores.<a href="./src/resources/secrets-store/stores/stores.ts">get</a>(storeID, { ...params }) -> StoreGetResponse</code>

### Secrets

Types:

- <code><a href="./src/resources/secrets-store/stores/secrets.ts">SecretCreateResponse</a></code>
- <code><a href="./src/resources/secrets-store/stores/secrets.ts">SecretListResponse</a></code>
- <code><a href="./src/resources/secrets-store/stores/secrets.ts">SecretDeleteResponse</a></code>
- <code><a href="./src/resources/secrets-store/stores/secrets.ts">SecretBulkDeleteResponse</a></code>
- <code><a href="./src/resources/secrets-store/stores/secrets.ts">SecretDuplicateResponse</a></code>
- <code><a href="./src/resources/secrets-store/stores/secrets.ts">SecretEditResponse</a></code>
- <code><a href="./src/resources/secrets-store/stores/secrets.ts">SecretGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/secrets_store/stores/{store_id}/secrets">client.secretsStore.stores.secrets.<a href="./src/resources/secrets-store/stores/secrets.ts">create</a>(storeID, [ ...body ]) -> SecretCreateResponsesSinglePage</code>
- <code title="get /accounts/{account_id}/secrets_store/stores/{store_id}/secrets">client.secretsStore.stores.secrets.<a href="./src/resources/secrets-store/stores/secrets.ts">list</a>(storeID, { ...params }) -> SecretListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}">client.secretsStore.stores.secrets.<a href="./src/resources/secrets-store/stores/secrets.ts">delete</a>(secretID, { ...params }) -> SecretDeleteResponse | null</code>
- <code title="delete /accounts/{account_id}/secrets_store/stores/{store_id}/secrets">client.secretsStore.stores.secrets.<a href="./src/resources/secrets-store/stores/secrets.ts">bulkDelete</a>(storeID, { ...params }) -> SecretBulkDeleteResponse | null</code>
- <code title="post /accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}/duplicate">client.secretsStore.stores.secrets.<a href="./src/resources/secrets-store/stores/secrets.ts">duplicate</a>(secretID, { ...params }) -> SecretDuplicateResponse</code>
- <code title="patch /accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}">client.secretsStore.stores.secrets.<a href="./src/resources/secrets-store/stores/secrets.ts">edit</a>(secretID, { ...params }) -> SecretEditResponse</code>
- <code title="get /accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}">client.secretsStore.stores.secrets.<a href="./src/resources/secrets-store/stores/secrets.ts">get</a>(secretID, { ...params }) -> SecretGetResponse</code>

## Quota

Types:

- <code><a href="./src/resources/secrets-store/quota.ts">QuotaGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/secrets_store/quota">client.secretsStore.quota.<a href="./src/resources/secrets-store/quota.ts">get</a>({ ...params }) -> QuotaGetResponse</code>
