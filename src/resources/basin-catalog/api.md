# BasinCatalog

Types:

- <code><a href="./src/resources/basin-catalog/basin-catalog.ts">BasinCatalogListResponse</a></code>
- <code><a href="./src/resources/basin-catalog/basin-catalog.ts">BasinCatalogEnableResponse</a></code>
- <code><a href="./src/resources/basin-catalog/basin-catalog.ts">BasinCatalogGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/basin-catalog">client.basinCatalog.<a href="./src/resources/basin-catalog/basin-catalog.ts">list</a>({ ...params }) -> BasinCatalogListResponse</code>
- <code title="post /accounts/{account_id}/basin-catalog/{bucket_name}/delete">client.basinCatalog.<a href="./src/resources/basin-catalog/basin-catalog.ts">delete</a>(bucketName, { ...params }) -> void</code>
- <code title="post /accounts/{account_id}/basin-catalog/{bucket_name}/disable">client.basinCatalog.<a href="./src/resources/basin-catalog/basin-catalog.ts">disable</a>(bucketName, { ...params }) -> void</code>
- <code title="post /accounts/{account_id}/basin-catalog/{bucket_name}/enable">client.basinCatalog.<a href="./src/resources/basin-catalog/basin-catalog.ts">enable</a>(bucketName, { ...params }) -> BasinCatalogEnableResponse</code>
- <code title="get /accounts/{account_id}/basin-catalog/{bucket_name}">client.basinCatalog.<a href="./src/resources/basin-catalog/basin-catalog.ts">get</a>(bucketName, { ...params }) -> BasinCatalogGetResponse</code>

## MaintenanceConfigs

Types:

- <code><a href="./src/resources/basin-catalog/maintenance-configs.ts">MaintenanceConfigUpdateResponse</a></code>
- <code><a href="./src/resources/basin-catalog/maintenance-configs.ts">MaintenanceConfigGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/basin-catalog/{bucket_name}/maintenance-configs">client.basinCatalog.maintenanceConfigs.<a href="./src/resources/basin-catalog/maintenance-configs.ts">update</a>(bucketName, { ...params }) -> MaintenanceConfigUpdateResponse</code>
- <code title="get /accounts/{account_id}/basin-catalog/{bucket_name}/maintenance-configs">client.basinCatalog.maintenanceConfigs.<a href="./src/resources/basin-catalog/maintenance-configs.ts">get</a>(bucketName, { ...params }) -> MaintenanceConfigGetResponse</code>

## Credentials

Types:

- <code><a href="./src/resources/basin-catalog/credentials.ts">CredentialCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/basin-catalog/{bucket_name}/credential">client.basinCatalog.credentials.<a href="./src/resources/basin-catalog/credentials.ts">create</a>(bucketName, { ...params }) -> CredentialCreateResponse | null</code>

## Namespaces

Types:

- <code><a href="./src/resources/basin-catalog/namespaces/namespaces.ts">NamespaceListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/basin-catalog/{bucket_name}/namespaces">client.basinCatalog.namespaces.<a href="./src/resources/basin-catalog/namespaces/namespaces.ts">list</a>(bucketName, { ...params }) -> NamespaceListResponse</code>

### Tables

Types:

- <code><a href="./src/resources/basin-catalog/namespaces/tables/tables.ts">TableListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/basin-catalog/{bucket_name}/namespaces/{namespace}/tables">client.basinCatalog.namespaces.tables.<a href="./src/resources/basin-catalog/namespaces/tables/tables.ts">list</a>(namespace, { ...params }) -> TableListResponse</code>

#### MaintenanceConfigs

Types:

- <code><a href="./src/resources/basin-catalog/namespaces/tables/maintenance-configs.ts">MaintenanceConfigUpdateResponse</a></code>
- <code><a href="./src/resources/basin-catalog/namespaces/tables/maintenance-configs.ts">MaintenanceConfigGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/basin-catalog/{bucket_name}/namespaces/{namespace}/tables/{table_name}/maintenance-configs">client.basinCatalog.namespaces.tables.maintenanceConfigs.<a href="./src/resources/basin-catalog/namespaces/tables/maintenance-configs.ts">update</a>(tableName, { ...params }) -> MaintenanceConfigUpdateResponse</code>
- <code title="get /accounts/{account_id}/basin-catalog/{bucket_name}/namespaces/{namespace}/tables/{table_name}/maintenance-configs">client.basinCatalog.namespaces.tables.maintenanceConfigs.<a href="./src/resources/basin-catalog/namespaces/tables/maintenance-configs.ts">get</a>(tableName, { ...params }) -> MaintenanceConfigGetResponse</code>
