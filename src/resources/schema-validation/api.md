# SchemaValidation

## Schemas

Types:

- <code><a href="./src/resources/schema-validation/schemas.ts">PublicSchema</a></code>
- <code><a href="./src/resources/schema-validation/schemas.ts">SchemaDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/schema_validation/schemas">client.schemaValidation.schemas.<a href="./src/resources/schema-validation/schemas.ts">create</a>({ ...params }) -> PublicSchema</code>
- <code title="get /zones/{zone_id}/schema_validation/schemas">client.schemaValidation.schemas.<a href="./src/resources/schema-validation/schemas.ts">list</a>({ ...params }) -> PublicSchemasV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/schema_validation/schemas/{schema_id}">client.schemaValidation.schemas.<a href="./src/resources/schema-validation/schemas.ts">delete</a>(schemaId, { ...params }) -> SchemaDeleteResponse</code>
- <code title="patch /zones/{zone_id}/schema_validation/schemas/{schema_id}">client.schemaValidation.schemas.<a href="./src/resources/schema-validation/schemas.ts">edit</a>(schemaId, { ...params }) -> PublicSchema</code>
- <code title="get /zones/{zone_id}/schema_validation/schemas/{schema_id}">client.schemaValidation.schemas.<a href="./src/resources/schema-validation/schemas.ts">get</a>(schemaId, { ...params }) -> PublicSchema</code>

## Settings

Types:

- <code><a href="./src/resources/schema-validation/settings/settings.ts">SettingUpdateResponse</a></code>
- <code><a href="./src/resources/schema-validation/settings/settings.ts">SettingEditResponse</a></code>
- <code><a href="./src/resources/schema-validation/settings/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/schema_validation/settings">client.schemaValidation.settings.<a href="./src/resources/schema-validation/settings/settings.ts">update</a>({ ...params }) -> SettingUpdateResponse</code>
- <code title="patch /zones/{zone_id}/schema_validation/settings">client.schemaValidation.settings.<a href="./src/resources/schema-validation/settings/settings.ts">edit</a>({ ...params }) -> SettingEditResponse</code>
- <code title="get /zones/{zone_id}/schema_validation/settings">client.schemaValidation.settings.<a href="./src/resources/schema-validation/settings/settings.ts">get</a>({ ...params }) -> SettingGetResponse</code>

### Operations

Types:

- <code><a href="./src/resources/schema-validation/settings/operations.ts">OperationUpdateResponse</a></code>
- <code><a href="./src/resources/schema-validation/settings/operations.ts">OperationListResponse</a></code>
- <code><a href="./src/resources/schema-validation/settings/operations.ts">OperationDeleteResponse</a></code>
- <code><a href="./src/resources/schema-validation/settings/operations.ts">OperationBulkEditResponse</a></code>
- <code><a href="./src/resources/schema-validation/settings/operations.ts">OperationGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/schema_validation/settings/operations/{operation_id}">client.schemaValidation.settings.operations.<a href="./src/resources/schema-validation/settings/operations.ts">update</a>(operationId, { ...params }) -> OperationUpdateResponse</code>
- <code title="get /zones/{zone_id}/schema_validation/settings/operations">client.schemaValidation.settings.operations.<a href="./src/resources/schema-validation/settings/operations.ts">list</a>({ ...params }) -> OperationListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/schema_validation/settings/operations/{operation_id}">client.schemaValidation.settings.operations.<a href="./src/resources/schema-validation/settings/operations.ts">delete</a>(operationId, { ...params }) -> OperationDeleteResponse</code>
- <code title="patch /zones/{zone_id}/schema_validation/settings/operations">client.schemaValidation.settings.operations.<a href="./src/resources/schema-validation/settings/operations.ts">bulkEdit</a>({ ...params }) -> OperationBulkEditResponse</code>
- <code title="get /zones/{zone_id}/schema_validation/settings/operations/{operation_id}">client.schemaValidation.settings.operations.<a href="./src/resources/schema-validation/settings/operations.ts">get</a>(operationId, { ...params }) -> OperationGetResponse</code>
