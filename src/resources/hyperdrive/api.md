# Hyperdrive

Types:

- <code><a href="./src/resources/hyperdrive/hyperdrive.ts">Hyperdrive</a></code>

## Configs

Types:

- <code><a href="./src/resources/hyperdrive/configs.ts">ConfigCreateResponse</a></code>
- <code><a href="./src/resources/hyperdrive/configs.ts">ConfigUpdateResponse</a></code>
- <code><a href="./src/resources/hyperdrive/configs.ts">ConfigListResponse</a></code>
- <code><a href="./src/resources/hyperdrive/configs.ts">ConfigDeleteResponse</a></code>
- <code><a href="./src/resources/hyperdrive/configs.ts">ConfigEditResponse</a></code>
- <code><a href="./src/resources/hyperdrive/configs.ts">ConfigGetResponse</a></code>
- <code><a href="./src/resources/hyperdrive/configs.ts">ConfigRestartResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/hyperdrive/configs">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">create</a>({ ...params }) -> ConfigCreateResponse</code>
- <code title="put /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">update</a>(hyperdriveID, { ...params }) -> ConfigUpdateResponse</code>
- <code title="get /accounts/{account_id}/hyperdrive/configs">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">list</a>({ ...params }) -> ConfigListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">delete</a>(hyperdriveID, { ...params }) -> ConfigDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">edit</a>(hyperdriveID, { ...params }) -> ConfigEditResponse</code>
- <code title="get /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">get</a>(hyperdriveID, { ...params }) -> ConfigGetResponse</code>
- <code title="post /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}/restart">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">restart</a>(hyperdriveID, { ...params }) -> ConfigRestartResponse</code>
