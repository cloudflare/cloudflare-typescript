# Logs

## LogExplorer

### Query

Types:

- <code><a href="./src/resources/logs/log-explorer/query.ts">QuerySqlResponse</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/logs/explorer/query/sql">client.logs.logExplorer.query.<a href="./src/resources/logs/log-explorer/query.ts">sql</a>(body, { ...params }) -> QuerySqlResponsesSinglePage</code>

### Datasets

Types:

- <code><a href="./src/resources/logs/log-explorer/datasets/datasets.ts">CreateRequest</a></code>
- <code><a href="./src/resources/logs/log-explorer/datasets/datasets.ts">Dataset</a></code>
- <code><a href="./src/resources/logs/log-explorer/datasets/datasets.ts">DatasetSummary</a></code>
- <code><a href="./src/resources/logs/log-explorer/datasets/datasets.ts">UpdateRequest</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/logs/explorer/datasets">client.logs.logExplorer.datasets.<a href="./src/resources/logs/log-explorer/datasets/datasets.ts">create</a>({ ...params }) -> Dataset</code>
- <code title="put /{accounts_or_zones}/{account_or_zone_id}/logs/explorer/datasets/{dataset_id}">client.logs.logExplorer.datasets.<a href="./src/resources/logs/log-explorer/datasets/datasets.ts">update</a>(datasetId, { ...params }) -> Dataset</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/logs/explorer/datasets">client.logs.logExplorer.datasets.<a href="./src/resources/logs/log-explorer/datasets/datasets.ts">list</a>({ ...params }) -> DatasetSummariesSinglePage</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/logs/explorer/datasets/{dataset_id}">client.logs.logExplorer.datasets.<a href="./src/resources/logs/log-explorer/datasets/datasets.ts">get</a>(datasetId, { ...params }) -> Dataset</code>

#### Available

Types:

- <code><a href="./src/resources/logs/log-explorer/datasets/available.ts">AvailableDataset</a></code>
- <code><a href="./src/resources/logs/log-explorer/datasets/available.ts">AvailableList</a></code>

Methods:

- <code title="get /{accounts_or_zones}/{account_or_zone_id}/logs/explorer/datasets/available">client.logs.logExplorer.datasets.available.<a href="./src/resources/logs/log-explorer/datasets/available.ts">list</a>({ ...params }) -> AvailableDatasetsSinglePage</code>

## Control

### Retention

Types:

- <code><a href="./src/resources/logs/control/retention.ts">RetentionCreateResponse</a></code>
- <code><a href="./src/resources/logs/control/retention.ts">RetentionGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/logs/control/retention/flag">client.logs.control.retention.<a href="./src/resources/logs/control/retention.ts">create</a>({ ...params }) -> RetentionCreateResponse | null</code>
- <code title="get /zones/{zone_id}/logs/control/retention/flag">client.logs.control.retention.<a href="./src/resources/logs/control/retention.ts">get</a>({ ...params }) -> RetentionGetResponse | null</code>

### Cmb

#### Config

Types:

- <code><a href="./src/resources/logs/control/cmb/config.ts">CmbConfig</a></code>
- <code><a href="./src/resources/logs/control/cmb/config.ts">ConfigDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/logs/control/cmb/config">client.logs.control.cmb.config.<a href="./src/resources/logs/control/cmb/config.ts">create</a>({ ...params }) -> CmbConfig | null</code>
- <code title="delete /accounts/{account_id}/logs/control/cmb/config">client.logs.control.cmb.config.<a href="./src/resources/logs/control/cmb/config.ts">delete</a>({ ...params }) -> ConfigDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/logs/control/cmb/config">client.logs.control.cmb.config.<a href="./src/resources/logs/control/cmb/config.ts">get</a>({ ...params }) -> CmbConfig | null</code>

## RayID

Types:

- <code><a href="./src/resources/logs/rayid.ts">RayIDGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/logs/rayids/{ray_id}">client.logs.RayID.<a href="./src/resources/logs/rayid.ts">get</a>(RayID, { ...params }) -> RayIDGetResponse</code>

## Received

Types:

- <code><a href="./src/resources/logs/received/received.ts">ReceivedGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/logs/received">client.logs.received.<a href="./src/resources/logs/received/received.ts">get</a>({ ...params }) -> ReceivedGetResponse</code>

### Fields

Types:

- <code><a href="./src/resources/logs/received/fields.ts">FieldGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/logs/received/fields">client.logs.received.fields.<a href="./src/resources/logs/received/fields.ts">get</a>({ ...params }) -> FieldGetResponse</code>
