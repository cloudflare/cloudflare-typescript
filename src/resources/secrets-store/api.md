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
- <code title="delete /accounts/{account_id}/secrets_store/stores/{store_id}">client.secretsStore.stores.<a href="./src/resources/secrets-store/stores/stores.ts">delete</a>(storeId, { ...params }) -> StoreDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/secrets_store/stores/{store_id}">client.secretsStore.stores.<a href="./src/resources/secrets-store/stores/stores.ts">get</a>(storeId, { ...params }) -> StoreGetResponse</code>

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

- <code title="post /accounts/{account_id}/secrets_store/stores/{store_id}/secrets">client.secretsStore.stores.secrets.<a href="./src/resources/secrets-store/stores/secrets.ts">create</a>(storeId, [ ...body ]) -> SecretCreateResponsesSinglePage</code>
- <code title="get /accounts/{account_id}/secrets_store/stores/{store_id}/secrets">client.secretsStore.stores.secrets.<a href="./src/resources/secrets-store/stores/secrets.ts">list</a>(storeId, { ...params }) -> SecretListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}">client.secretsStore.stores.secrets.<a href="./src/resources/secrets-store/stores/secrets.ts">delete</a>(storeId, secretId, { ...params }) -> SecretDeleteResponse | null</code>
- <code title="delete /accounts/{account_id}/secrets_store/stores/{store_id}/secrets">client.secretsStore.stores.secrets.<a href="./src/resources/secrets-store/stores/secrets.ts">bulkDelete</a>(storeId, { ...params }) -> SecretBulkDeleteResponse | null</code>
- <code title="post /accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}/duplicate">client.secretsStore.stores.secrets.<a href="./src/resources/secrets-store/stores/secrets.ts">duplicate</a>(storeId, secretId, { ...params }) -> SecretDuplicateResponse</code>
- <code title="patch /accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}">client.secretsStore.stores.secrets.<a href="./src/resources/secrets-store/stores/secrets.ts">edit</a>(storeId, secretId, { ...params }) -> SecretEditResponse</code>
- <code title="get /accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}">client.secretsStore.stores.secrets.<a href="./src/resources/secrets-store/stores/secrets.ts">get</a>(storeId, secretId, { ...params }) -> SecretGetResponse</code>

## Quota

Types:

- <code><a href="./src/resources/secrets-store/quota.ts">QuotaGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/secrets_store/quota">client.secretsStore.quota.<a href="./src/resources/secrets-store/quota.ts">get</a>({ ...params }) -> QuotaGetResponse</code>
