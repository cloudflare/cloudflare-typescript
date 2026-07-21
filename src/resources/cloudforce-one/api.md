# CloudforceOne

## Scans

### Results

Types:

- <code><a href="./src/resources/cloudforce-one/scans/results.ts">ScanResult</a></code>
- <code><a href="./src/resources/cloudforce-one/scans/results.ts">ResultGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cloudforce-one/scans/results/{config_id}">client.cloudforceOne.scans.results.<a href="./src/resources/cloudforce-one/scans/results.ts">get</a>(configID, { ...params }) -> ResultGetResponse</code>

### Config

Types:

- <code><a href="./src/resources/cloudforce-one/scans/config.ts">ConfigCreateResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/scans/config.ts">ConfigListResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/scans/config.ts">ConfigDeleteResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/scans/config.ts">ConfigEditResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cloudforce-one/scans/config">client.cloudforceOne.scans.config.<a href="./src/resources/cloudforce-one/scans/config.ts">create</a>({ ...params }) -> ConfigCreateResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/scans/config">client.cloudforceOne.scans.config.<a href="./src/resources/cloudforce-one/scans/config.ts">list</a>({ ...params }) -> ConfigListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/cloudforce-one/scans/config/{config_id}">client.cloudforceOne.scans.config.<a href="./src/resources/cloudforce-one/scans/config.ts">delete</a>(configID, { ...params }) -> ConfigDeleteResponse</code>
- <code title="patch /accounts/{account_id}/cloudforce-one/scans/config/{config_id}">client.cloudforceOne.scans.config.<a href="./src/resources/cloudforce-one/scans/config.ts">edit</a>(configID, { ...params }) -> ConfigEditResponse</code>

## BinaryStorage

Types:

- <code><a href="./src/resources/cloudforce-one/binary-storage.ts">BinaryStorageCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cloudforce-one/binary">client.cloudforceOne.binaryStorage.<a href="./src/resources/cloudforce-one/binary-storage.ts">create</a>({ ...params }) -> BinaryStorageCreateResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/binary/{hash}">client.cloudforceOne.binaryStorage.<a href="./src/resources/cloudforce-one/binary-storage.ts">get</a>(hash, { ...params }) -> void</code>

## Requests

Types:

- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">Item</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">ListItem</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">Quota</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">RequestConstants</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">RequestTypes</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">RequestDeleteResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">RequestTypesResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cloudforce-one/requests/new">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">create</a>({ ...params }) -> Item</code>
- <code title="put /accounts/{account_id}/cloudforce-one/requests/{request_id}">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">update</a>(requestID, { ...params }) -> Item</code>
- <code title="post /accounts/{account_id}/cloudforce-one/requests">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">list</a>({ ...params }) -> ListItemsSinglePage</code>
- <code title="delete /accounts/{account_id}/cloudforce-one/requests/{request_id}">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">delete</a>(requestID, { ...params }) -> RequestDeleteResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/requests/constants">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">constants</a>({ ...params }) -> RequestConstants</code>
- <code title="get /accounts/{account_id}/cloudforce-one/requests/{request_id}">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">get</a>(requestID, { ...params }) -> Item</code>
- <code title="get /accounts/{account_id}/cloudforce-one/requests/quota">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">quota</a>({ ...params }) -> Quota</code>
- <code title="get /accounts/{account_id}/cloudforce-one/requests/types">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">types</a>({ ...params }) -> RequestTypesResponsesSinglePage</code>

### Message

Types:

- <code><a href="./src/resources/cloudforce-one/requests/message.ts">Message</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/message.ts">MessageDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cloudforce-one/requests/{request_id}/message/new">client.cloudforceOne.requests.message.<a href="./src/resources/cloudforce-one/requests/message.ts">create</a>(requestID, { ...params }) -> Message</code>
- <code title="put /accounts/{account_id}/cloudforce-one/requests/{request_id}/message/{message_id}">client.cloudforceOne.requests.message.<a href="./src/resources/cloudforce-one/requests/message.ts">update</a>(messageID, { ...params }) -> Message</code>
- <code title="delete /accounts/{account_id}/cloudforce-one/requests/{request_id}/message/{message_id}">client.cloudforceOne.requests.message.<a href="./src/resources/cloudforce-one/requests/message.ts">delete</a>(messageID, { ...params }) -> MessageDeleteResponse</code>
- <code title="post /accounts/{account_id}/cloudforce-one/requests/{request_id}/message">client.cloudforceOne.requests.message.<a href="./src/resources/cloudforce-one/requests/message.ts">get</a>(requestID, { ...params }) -> MessagesSinglePage</code>

### Priority

Types:

- <code><a href="./src/resources/cloudforce-one/requests/priority.ts">Label</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/priority.ts">Priority</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/priority.ts">PriorityEdit</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/priority.ts">PriorityDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cloudforce-one/requests/priority/new">client.cloudforceOne.requests.priority.<a href="./src/resources/cloudforce-one/requests/priority.ts">create</a>({ ...params }) -> Priority</code>
- <code title="put /accounts/{account_id}/cloudforce-one/requests/priority/{priority_id}">client.cloudforceOne.requests.priority.<a href="./src/resources/cloudforce-one/requests/priority.ts">update</a>(priorityID, { ...params }) -> Item</code>
- <code title="delete /accounts/{account_id}/cloudforce-one/requests/priority/{priority_id}">client.cloudforceOne.requests.priority.<a href="./src/resources/cloudforce-one/requests/priority.ts">delete</a>(priorityID, { ...params }) -> PriorityDeleteResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/requests/priority/{priority_id}">client.cloudforceOne.requests.priority.<a href="./src/resources/cloudforce-one/requests/priority.ts">get</a>(priorityID, { ...params }) -> Item</code>
- <code title="get /accounts/{account_id}/cloudforce-one/requests/priority/quota">client.cloudforceOne.requests.priority.<a href="./src/resources/cloudforce-one/requests/priority.ts">quota</a>({ ...params }) -> Quota</code>

### Assets

Types:

- <code><a href="./src/resources/cloudforce-one/requests/assets.ts">AssetCreateResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/assets.ts">AssetUpdateResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/assets.ts">AssetDeleteResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/assets.ts">AssetGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cloudforce-one/requests/{request_id}/asset">client.cloudforceOne.requests.assets.<a href="./src/resources/cloudforce-one/requests/assets.ts">create</a>(requestID, { ...params }) -> AssetCreateResponsesSinglePage</code>
- <code title="put /accounts/{account_id}/cloudforce-one/requests/{request_id}/asset/{asset_id}">client.cloudforceOne.requests.assets.<a href="./src/resources/cloudforce-one/requests/assets.ts">update</a>(assetID, { ...params }) -> AssetUpdateResponse</code>
- <code title="delete /accounts/{account_id}/cloudforce-one/requests/{request_id}/asset/{asset_id}">client.cloudforceOne.requests.assets.<a href="./src/resources/cloudforce-one/requests/assets.ts">delete</a>(assetID, { ...params }) -> AssetDeleteResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/requests/{request_id}/asset/{asset_id}">client.cloudforceOne.requests.assets.<a href="./src/resources/cloudforce-one/requests/assets.ts">get</a>(assetID, { ...params }) -> AssetGetResponsesSinglePage</code>

## ThreatEvents

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/threat-events.ts">ThreatEventCreateResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/threat-events.ts">ThreatEventListResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/threat-events.ts">ThreatEventBulkCreateResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/threat-events.ts">ThreatEventBulkCreateRelationshipsResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/threat-events.ts">ThreatEventEditResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/threat-events.ts">ThreatEventGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cloudforce-one/events/create">client.cloudforceOne.threatEvents.<a href="./src/resources/cloudforce-one/threat-events/threat-events.ts">create</a>({ ...params }) -> ThreatEventCreateResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/events">client.cloudforceOne.threatEvents.<a href="./src/resources/cloudforce-one/threat-events/threat-events.ts">list</a>({ ...params }) -> ThreatEventListResponse</code>
- <code title="post /accounts/{account_id}/cloudforce-one/events/create/bulk">client.cloudforceOne.threatEvents.<a href="./src/resources/cloudforce-one/threat-events/threat-events.ts">bulkCreate</a>({ ...params }) -> ThreatEventBulkCreateResponse</code>
- <code title="post /accounts/{account_id}/cloudforce-one/events/create/bulk/relationships">client.cloudforceOne.threatEvents.<a href="./src/resources/cloudforce-one/threat-events/threat-events.ts">bulkCreateRelationships</a>({ ...params }) -> ThreatEventBulkCreateRelationshipsResponse</code>
- <code title="patch /accounts/{account_id}/cloudforce-one/events/{event_id}">client.cloudforceOne.threatEvents.<a href="./src/resources/cloudforce-one/threat-events/threat-events.ts">edit</a>(eventID, { ...params }) -> ThreatEventEditResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/events/{event_id}">client.cloudforceOne.threatEvents.<a href="./src/resources/cloudforce-one/threat-events/threat-events.ts">get</a>(eventID, { ...params }) -> ThreatEventGetResponse</code>

### Aggregate

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/aggregate.ts">AggregateListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cloudforce-one/events/aggregate">client.cloudforceOne.threatEvents.aggregate.<a href="./src/resources/cloudforce-one/threat-events/aggregate.ts">list</a>({ ...params }) -> AggregateListResponse</code>

### Graphql

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/graphql.ts">GraphqlCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cloudforce-one/events/graphql">client.cloudforceOne.threatEvents.graphql.<a href="./src/resources/cloudforce-one/threat-events/graphql.ts">create</a>({ ...params }) -> GraphqlCreateResponse</code>

### Graph

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/graph.ts">GraphListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cloudforce-one/events/graph">client.cloudforceOne.threatEvents.graph.<a href="./src/resources/cloudforce-one/threat-events/graph.ts">list</a>({ ...params }) -> GraphListResponse</code>

### Queries

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/queries.ts">QueryCreateResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/queries.ts">QueryListResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/queries.ts">QueryEditResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/queries.ts">QueryGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cloudforce-one/events/queries/create">client.cloudforceOne.threatEvents.queries.<a href="./src/resources/cloudforce-one/threat-events/queries.ts">create</a>({ ...params }) -> QueryCreateResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/events/queries">client.cloudforceOne.threatEvents.queries.<a href="./src/resources/cloudforce-one/threat-events/queries.ts">list</a>({ ...params }) -> QueryListResponse</code>
- <code title="delete /accounts/{account_id}/cloudforce-one/events/queries/{query_id}">client.cloudforceOne.threatEvents.queries.<a href="./src/resources/cloudforce-one/threat-events/queries.ts">delete</a>(queryID, { ...params }) -> void</code>
- <code title="patch /accounts/{account_id}/cloudforce-one/events/queries/{query_id}">client.cloudforceOne.threatEvents.queries.<a href="./src/resources/cloudforce-one/threat-events/queries.ts">edit</a>(queryID, { ...params }) -> QueryEditResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/events/queries/{query_id}">client.cloudforceOne.threatEvents.queries.<a href="./src/resources/cloudforce-one/threat-events/queries.ts">get</a>(queryID, { ...params }) -> QueryGetResponse</code>

### Relationships

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/relationships.ts">RelationshipListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cloudforce-one/events/{event_id}/relationships">client.cloudforceOne.threatEvents.relationships.<a href="./src/resources/cloudforce-one/threat-events/relationships.ts">list</a>(eventID, { ...params }) -> RelationshipListResponse</code>

### Indicators

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/indicators/indicators.ts">IndicatorListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cloudforce-one/events/indicators">client.cloudforceOne.threatEvents.indicators.<a href="./src/resources/cloudforce-one/threat-events/indicators/indicators.ts">list</a>({ ...params }) -> IndicatorListResponse</code>

#### Aggregate

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/indicators/aggregate.ts">AggregateListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cloudforce-one/events/indicators/aggregate">client.cloudforceOne.threatEvents.indicators.aggregate.<a href="./src/resources/cloudforce-one/threat-events/indicators/aggregate.ts">list</a>({ ...params }) -> AggregateListResponse</code>

#### Types

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/indicators/types.ts">TypeListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cloudforce-one/events/indicator-types">client.cloudforceOne.threatEvents.indicators.types.<a href="./src/resources/cloudforce-one/threat-events/indicators/types.ts">list</a>({ ...params }) -> TypeListResponse</code>

#### ByDataset

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/indicators/by-dataset/by-dataset.ts">ByDatasetListResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/indicators/by-dataset/by-dataset.ts">ByDatasetGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators">client.cloudforceOne.threatEvents.indicators.byDataset.<a href="./src/resources/cloudforce-one/threat-events/indicators/by-dataset/by-dataset.ts">list</a>(datasetID, { ...params }) -> ByDatasetListResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/{indicator_id}">client.cloudforceOne.threatEvents.indicators.byDataset.<a href="./src/resources/cloudforce-one/threat-events/indicators/by-dataset/by-dataset.ts">get</a>(indicatorID, { ...params }) -> ByDatasetGetResponse</code>

##### Tags

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/indicators/by-dataset/tags.ts">TagListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/tags">client.cloudforceOne.threatEvents.indicators.byDataset.tags.<a href="./src/resources/cloudforce-one/threat-events/indicators/by-dataset/tags.ts">list</a>(datasetID, { ...params }) -> TagListResponse</code>

### Attackers

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/attackers.ts">AttackerListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cloudforce-one/events/attackers">client.cloudforceOne.threatEvents.attackers.<a href="./src/resources/cloudforce-one/threat-events/attackers.ts">list</a>({ ...params }) -> AttackerListResponse</code>

### Categories

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/categories/categories.ts">CategoryCreateResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/categories/categories.ts">CategoryListResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/categories/categories.ts">CategoryDeleteResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/categories/categories.ts">CategoryEditResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/categories/categories.ts">CategoryGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cloudforce-one/events/categories/create">client.cloudforceOne.threatEvents.categories.<a href="./src/resources/cloudforce-one/threat-events/categories/categories.ts">create</a>({ ...params }) -> CategoryCreateResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/events/categories">client.cloudforceOne.threatEvents.categories.<a href="./src/resources/cloudforce-one/threat-events/categories/categories.ts">list</a>({ ...params }) -> CategoryListResponse</code>
- <code title="delete /accounts/{account_id}/cloudforce-one/events/categories/{category_id}">client.cloudforceOne.threatEvents.categories.<a href="./src/resources/cloudforce-one/threat-events/categories/categories.ts">delete</a>(categoryID, { ...params }) -> CategoryDeleteResponse</code>
- <code title="patch /accounts/{account_id}/cloudforce-one/events/categories/{category_id}">client.cloudforceOne.threatEvents.categories.<a href="./src/resources/cloudforce-one/threat-events/categories/categories.ts">edit</a>(categoryID, { ...params }) -> CategoryEditResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/events/categories/{category_id}">client.cloudforceOne.threatEvents.categories.<a href="./src/resources/cloudforce-one/threat-events/categories/categories.ts">get</a>(categoryID, { ...params }) -> CategoryGetResponse</code>

#### Catalog

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/categories/catalog.ts">CatalogListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cloudforce-one/events/categories/catalog">client.cloudforceOne.threatEvents.categories.catalog.<a href="./src/resources/cloudforce-one/threat-events/categories/catalog.ts">list</a>({ ...params }) -> CatalogListResponse</code>

### Countries

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/countries.ts">CountryListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cloudforce-one/events/countries">client.cloudforceOne.threatEvents.countries.<a href="./src/resources/cloudforce-one/threat-events/countries.ts">list</a>({ ...params }) -> CountryListResponse</code>

### Crons

### Datasets

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/datasets/datasets.ts">DatasetCreateResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/datasets/datasets.ts">DatasetListResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/datasets/datasets.ts">DatasetDeleteResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/datasets/datasets.ts">DatasetEditResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/datasets/datasets.ts">DatasetGetResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/datasets/datasets.ts">DatasetRawResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cloudforce-one/events/dataset/create">client.cloudforceOne.threatEvents.datasets.<a href="./src/resources/cloudforce-one/threat-events/datasets/datasets.ts">create</a>({ ...params }) -> DatasetCreateResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/events/dataset">client.cloudforceOne.threatEvents.datasets.<a href="./src/resources/cloudforce-one/threat-events/datasets/datasets.ts">list</a>({ ...params }) -> DatasetListResponse</code>
- <code title="delete /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}">client.cloudforceOne.threatEvents.datasets.<a href="./src/resources/cloudforce-one/threat-events/datasets/datasets.ts">delete</a>(datasetID, { ...params }) -> DatasetDeleteResponse</code>
- <code title="patch /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}">client.cloudforceOne.threatEvents.datasets.<a href="./src/resources/cloudforce-one/threat-events/datasets/datasets.ts">edit</a>(datasetID, { ...params }) -> DatasetEditResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}">client.cloudforceOne.threatEvents.datasets.<a href="./src/resources/cloudforce-one/threat-events/datasets/datasets.ts">get</a>(datasetID, { ...params }) -> DatasetGetResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/events/raw/{dataset_id}/{event_id}">client.cloudforceOne.threatEvents.datasets.<a href="./src/resources/cloudforce-one/threat-events/datasets/datasets.ts">raw</a>(eventID, { ...params }) -> DatasetRawResponse</code>

#### Health

#### Events

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/datasets/events.ts">EventGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/events/{event_id}">client.cloudforceOne.threatEvents.datasets.events.<a href="./src/resources/cloudforce-one/threat-events/datasets/events.ts">get</a>(eventID, { ...params }) -> EventGetResponse</code>

### Raw

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/raw.ts">RawEditResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/raw.ts">RawGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/cloudforce-one/events/{event_id}/raw/{raw_id}">client.cloudforceOne.threatEvents.raw.<a href="./src/resources/cloudforce-one/threat-events/raw.ts">edit</a>(rawID, { ...params }) -> RawEditResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/events/{event_id}/raw/{raw_id}">client.cloudforceOne.threatEvents.raw.<a href="./src/resources/cloudforce-one/threat-events/raw.ts">get</a>(rawID, { ...params }) -> RawGetResponse</code>

### Relate

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/relate.ts">RelateDeleteResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/cloudforce-one/events/relate/{event_id}">client.cloudforceOne.threatEvents.relate.<a href="./src/resources/cloudforce-one/threat-events/relate.ts">delete</a>(eventID, { ...params }) -> RelateDeleteResponse</code>

### Tags

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/tags/tags.ts">TagCreateResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/tags/tags.ts">TagListResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/tags/tags.ts">TagDeleteResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/tags/tags.ts">TagEditResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cloudforce-one/events/tags/create">client.cloudforceOne.threatEvents.tags.<a href="./src/resources/cloudforce-one/threat-events/tags/tags.ts">create</a>({ ...params }) -> TagCreateResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/events/tags">client.cloudforceOne.threatEvents.tags.<a href="./src/resources/cloudforce-one/threat-events/tags/tags.ts">list</a>({ ...params }) -> TagListResponse</code>
- <code title="delete /accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}">client.cloudforceOne.threatEvents.tags.<a href="./src/resources/cloudforce-one/threat-events/tags/tags.ts">delete</a>(tagUUID, { ...params }) -> TagDeleteResponse</code>
- <code title="patch /accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}">client.cloudforceOne.threatEvents.tags.<a href="./src/resources/cloudforce-one/threat-events/tags/tags.ts">edit</a>(tagUUID, { ...params }) -> TagEditResponse</code>

#### Categories

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/tags/categories.ts">CategoryCreateResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/tags/categories.ts">CategoryListResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/tags/categories.ts">CategoryDeleteResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/tags/categories.ts">CategoryEditResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cloudforce-one/events/tags/categories/create">client.cloudforceOne.threatEvents.tags.categories.<a href="./src/resources/cloudforce-one/threat-events/tags/categories.ts">create</a>({ ...params }) -> CategoryCreateResponse</code>
- <code title="get /accounts/{account_id}/cloudforce-one/events/tags/categories">client.cloudforceOne.threatEvents.tags.categories.<a href="./src/resources/cloudforce-one/threat-events/tags/categories.ts">list</a>({ ...params }) -> CategoryListResponse</code>
- <code title="delete /accounts/{account_id}/cloudforce-one/events/tags/categories/{category_uuid}">client.cloudforceOne.threatEvents.tags.categories.<a href="./src/resources/cloudforce-one/threat-events/tags/categories.ts">delete</a>(categoryUUID, { ...params }) -> CategoryDeleteResponse</code>
- <code title="patch /accounts/{account_id}/cloudforce-one/events/tags/categories/{category_uuid}">client.cloudforceOne.threatEvents.tags.categories.<a href="./src/resources/cloudforce-one/threat-events/tags/categories.ts">edit</a>(categoryUUID, { ...params }) -> CategoryEditResponse</code>

#### Indicators

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/tags/indicators/indicators.ts">IndicatorListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}/indicators">client.cloudforceOne.threatEvents.tags.indicators.<a href="./src/resources/cloudforce-one/threat-events/tags/indicators/indicators.ts">list</a>(tagUUID, { ...params }) -> IndicatorListResponse</code>

##### ByDataset

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/tags/indicators/by-dataset.ts">ByDatasetListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/tags/{tag_uuid}/indicators">client.cloudforceOne.threatEvents.tags.indicators.byDataset.<a href="./src/resources/cloudforce-one/threat-events/tags/indicators/by-dataset.ts">list</a>(tagUUID, { ...params }) -> ByDatasetListResponse</code>

### EventTags

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/event-tags.ts">EventTagCreateResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/threat-events/event-tags.ts">EventTagDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cloudforce-one/events/event_tag/{event_id}/create">client.cloudforceOne.threatEvents.eventTags.<a href="./src/resources/cloudforce-one/threat-events/event-tags.ts">create</a>(eventID, { ...params }) -> EventTagCreateResponse</code>
- <code title="delete /accounts/{account_id}/cloudforce-one/events/event_tag/{event_id}">client.cloudforceOne.threatEvents.eventTags.<a href="./src/resources/cloudforce-one/threat-events/event-tags.ts">delete</a>(eventID, { ...params }) -> EventTagDeleteResponse</code>

### TargetIndustries

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/target-industries/target-industries.ts">TargetIndustryListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cloudforce-one/events/targetIndustries">client.cloudforceOne.threatEvents.targetIndustries.<a href="./src/resources/cloudforce-one/threat-events/target-industries/target-industries.ts">list</a>({ ...params }) -> TargetIndustryListResponse</code>

#### ByDataset

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/target-industries/by-dataset.ts">ByDatasetListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/targetIndustries">client.cloudforceOne.threatEvents.targetIndustries.byDataset.<a href="./src/resources/cloudforce-one/threat-events/target-industries/by-dataset.ts">list</a>(datasetID, { ...params }) -> ByDatasetListResponse</code>

#### Catalog

Types:

- <code><a href="./src/resources/cloudforce-one/threat-events/target-industries/catalog.ts">CatalogListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cloudforce-one/events/targetIndustries/catalog">client.cloudforceOne.threatEvents.targetIndustries.catalog.<a href="./src/resources/cloudforce-one/threat-events/target-industries/catalog.ts">list</a>({ ...params }) -> CatalogListResponse</code>

### Insights
