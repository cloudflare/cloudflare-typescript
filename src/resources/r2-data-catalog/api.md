# R2DataCatalog

Types:

- <code><a href="./src/resources/r2-data-catalog/r2-data-catalog.ts">R2DataCatalogListResponse</a></code>
- <code><a href="./src/resources/r2-data-catalog/r2-data-catalog.ts">R2DataCatalogEnableResponse</a></code>
- <code><a href="./src/resources/r2-data-catalog/r2-data-catalog.ts">R2DataCatalogGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/r2-catalog">client.r2DataCatalog.<a href="./src/resources/r2-data-catalog/r2-data-catalog.ts">list</a>({ ...params }) -> R2DataCatalogListResponse</code>
- <code title="post /accounts/{account_id}/r2-catalog/{bucket_name}/disable">client.r2DataCatalog.<a href="./src/resources/r2-data-catalog/r2-data-catalog.ts">disable</a>(bucketName, { ...params }) -> void</code>
- <code title="post /accounts/{account_id}/r2-catalog/{bucket_name}/enable">client.r2DataCatalog.<a href="./src/resources/r2-data-catalog/r2-data-catalog.ts">enable</a>(bucketName, { ...params }) -> R2DataCatalogEnableResponse</code>
- <code title="get /accounts/{account_id}/r2-catalog/{bucket_name}">client.r2DataCatalog.<a href="./src/resources/r2-data-catalog/r2-data-catalog.ts">get</a>(bucketName, { ...params }) -> R2DataCatalogGetResponse</code>

## MaintenanceConfigs

Types:

- <code><a href="./src/resources/r2-data-catalog/maintenance-configs.ts">MaintenanceConfigUpdateResponse</a></code>
- <code><a href="./src/resources/r2-data-catalog/maintenance-configs.ts">MaintenanceConfigGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/r2-catalog/{bucket_name}/maintenance-configs">client.r2DataCatalog.maintenanceConfigs.<a href="./src/resources/r2-data-catalog/maintenance-configs.ts">update</a>(bucketName, { ...params }) -> MaintenanceConfigUpdateResponse</code>
- <code title="get /accounts/{account_id}/r2-catalog/{bucket_name}/maintenance-configs">client.r2DataCatalog.maintenanceConfigs.<a href="./src/resources/r2-data-catalog/maintenance-configs.ts">get</a>(bucketName, { ...params }) -> MaintenanceConfigGetResponse</code>

## Credentials

Types:

- <code><a href="./src/resources/r2-data-catalog/credentials.ts">CredentialCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/r2-catalog/{bucket_name}/credential">client.r2DataCatalog.credentials.<a href="./src/resources/r2-data-catalog/credentials.ts">create</a>(bucketName, { ...params }) -> CredentialCreateResponse | null</code>

## Namespaces

Types:

- <code><a href="./src/resources/r2-data-catalog/namespaces/namespaces.ts">NamespaceListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/r2-catalog/{bucket_name}/namespaces">client.r2DataCatalog.namespaces.<a href="./src/resources/r2-data-catalog/namespaces/namespaces.ts">list</a>(bucketName, { ...params }) -> NamespaceListResponse</code>

### Tables

Types:

- <code><a href="./src/resources/r2-data-catalog/namespaces/tables/tables.ts">TableListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/r2-catalog/{bucket_name}/namespaces/{namespace}/tables">client.r2DataCatalog.namespaces.tables.<a href="./src/resources/r2-data-catalog/namespaces/tables/tables.ts">list</a>(bucketName, namespace, { ...params }) -> TableListResponse</code>

#### MaintenanceConfigs

Types:

- <code><a href="./src/resources/r2-data-catalog/namespaces/tables/maintenance-configs.ts">MaintenanceConfigUpdateResponse</a></code>
- <code><a href="./src/resources/r2-data-catalog/namespaces/tables/maintenance-configs.ts">MaintenanceConfigGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/r2-catalog/{bucket_name}/namespaces/{namespace}/tables/{table_name}/maintenance-configs">client.r2DataCatalog.namespaces.tables.maintenanceConfigs.<a href="./src/resources/r2-data-catalog/namespaces/tables/maintenance-configs.ts">update</a>(bucketName, namespace, tableName, { ...params }) -> MaintenanceConfigUpdateResponse</code>
- <code title="get /accounts/{account_id}/r2-catalog/{bucket_name}/namespaces/{namespace}/tables/{table_name}/maintenance-configs">client.r2DataCatalog.namespaces.tables.maintenanceConfigs.<a href="./src/resources/r2-data-catalog/namespaces/tables/maintenance-configs.ts">get</a>(bucketName, namespace, tableName, { ...params }) -> MaintenanceConfigGetResponse</code>
