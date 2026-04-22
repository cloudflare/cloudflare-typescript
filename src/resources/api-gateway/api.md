# APIGateway

## Configurations

Types:

- <code><a href="./src/resources/api-gateway/configurations.ts">Configuration</a></code>

Methods:

- <code title="put /zones/{zone_id}/api_gateway/configuration">client.apiGateway.configurations.<a href="./src/resources/api-gateway/configurations.ts">update</a>({ ...params }) -> Configuration</code>
- <code title="get /zones/{zone_id}/api_gateway/configuration">client.apiGateway.configurations.<a href="./src/resources/api-gateway/configurations.ts">get</a>({ ...params }) -> Configuration</code>

## Discovery

Types:

- <code><a href="./src/resources/api-gateway/discovery/discovery.ts">DiscoveryOperation</a></code>
- <code><a href="./src/resources/api-gateway/discovery/discovery.ts">DiscoveryGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/api_gateway/discovery">client.apiGateway.discovery.<a href="./src/resources/api-gateway/discovery/discovery.ts">get</a>({ ...params }) -> DiscoveryGetResponse</code>

### Operations

Types:

- <code><a href="./src/resources/api-gateway/discovery/operations.ts">OperationBulkEditResponse</a></code>
- <code><a href="./src/resources/api-gateway/discovery/operations.ts">OperationEditResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/api_gateway/discovery/operations">client.apiGateway.discovery.operations.<a href="./src/resources/api-gateway/discovery/operations.ts">list</a>({ ...params }) -> DiscoveryOperationsV4PagePaginationArray</code>
- <code title="patch /zones/{zone_id}/api_gateway/discovery/operations">client.apiGateway.discovery.operations.<a href="./src/resources/api-gateway/discovery/operations.ts">bulkEdit</a>({ ...params }) -> OperationBulkEditResponse</code>
- <code title="patch /zones/{zone_id}/api_gateway/discovery/operations/{operation_id}">client.apiGateway.discovery.operations.<a href="./src/resources/api-gateway/discovery/operations.ts">edit</a>(operationId, { ...params }) -> OperationEditResponse</code>

## Operations

Types:

- <code><a href="./src/resources/api-gateway/operations/operations.ts">APIShield</a></code>
- <code><a href="./src/resources/api-gateway/operations/operations.ts">OperationCreateResponse</a></code>
- <code><a href="./src/resources/api-gateway/operations/operations.ts">OperationListResponse</a></code>
- <code><a href="./src/resources/api-gateway/operations/operations.ts">OperationDeleteResponse</a></code>
- <code><a href="./src/resources/api-gateway/operations/operations.ts">OperationBulkCreateResponse</a></code>
- <code><a href="./src/resources/api-gateway/operations/operations.ts">OperationBulkDeleteResponse</a></code>
- <code><a href="./src/resources/api-gateway/operations/operations.ts">OperationGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/api_gateway/operations/item">client.apiGateway.operations.<a href="./src/resources/api-gateway/operations/operations.ts">create</a>({ ...params }) -> OperationCreateResponse</code>
- <code title="get /zones/{zone_id}/api_gateway/operations">client.apiGateway.operations.<a href="./src/resources/api-gateway/operations/operations.ts">list</a>({ ...params }) -> OperationListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/api_gateway/operations/{operation_id}">client.apiGateway.operations.<a href="./src/resources/api-gateway/operations/operations.ts">delete</a>(operationId, { ...params }) -> OperationDeleteResponse</code>
- <code title="post /zones/{zone_id}/api_gateway/operations">client.apiGateway.operations.<a href="./src/resources/api-gateway/operations/operations.ts">bulkCreate</a>([ ...body ]) -> OperationBulkCreateResponsesSinglePage</code>
- <code title="delete /zones/{zone_id}/api_gateway/operations">client.apiGateway.operations.<a href="./src/resources/api-gateway/operations/operations.ts">bulkDelete</a>({ ...params }) -> OperationBulkDeleteResponse</code>
- <code title="get /zones/{zone_id}/api_gateway/operations/{operation_id}">client.apiGateway.operations.<a href="./src/resources/api-gateway/operations/operations.ts">get</a>(operationId, { ...params }) -> OperationGetResponse</code>

### SchemaValidation

Types:

- <code><a href="./src/resources/api-gateway/operations/schema-validation.ts">SchemaValidationUpdateResponse</a></code>
- <code><a href="./src/resources/api-gateway/operations/schema-validation.ts">SchemaValidationEditResponse</a></code>
- <code><a href="./src/resources/api-gateway/operations/schema-validation.ts">SchemaValidationGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/api_gateway/operations/{operation_id}/schema_validation">client.apiGateway.operations.schemaValidation.<a href="./src/resources/api-gateway/operations/schema-validation.ts">update</a>(operationId, { ...params }) -> SchemaValidationUpdateResponse</code>
- <code title="patch /zones/{zone_id}/api_gateway/operations/schema_validation">client.apiGateway.operations.schemaValidation.<a href="./src/resources/api-gateway/operations/schema-validation.ts">edit</a>({ ...params }) -> SchemaValidationEditResponse</code>
- <code title="get /zones/{zone_id}/api_gateway/operations/{operation_id}/schema_validation">client.apiGateway.operations.schemaValidation.<a href="./src/resources/api-gateway/operations/schema-validation.ts">get</a>(operationId, { ...params }) -> SchemaValidationGetResponse</code>

## Schemas

Types:

- <code><a href="./src/resources/api-gateway/schemas.ts">SchemaListResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/api_gateway/schemas">client.apiGateway.schemas.<a href="./src/resources/api-gateway/schemas.ts">list</a>({ ...params }) -> SchemaListResponse</code>

## Settings

### SchemaValidation

Types:

- <code><a href="./src/resources/api-gateway/settings/schema-validation.ts">SchemaValidationUpdateResponse</a></code>
- <code><a href="./src/resources/api-gateway/settings/schema-validation.ts">SchemaValidationEditResponse</a></code>
- <code><a href="./src/resources/api-gateway/settings/schema-validation.ts">SchemaValidationGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/api_gateway/settings/schema_validation">client.apiGateway.settings.schemaValidation.<a href="./src/resources/api-gateway/settings/schema-validation.ts">update</a>({ ...params }) -> SchemaValidationUpdateResponse</code>
- <code title="patch /zones/{zone_id}/api_gateway/settings/schema_validation">client.apiGateway.settings.schemaValidation.<a href="./src/resources/api-gateway/settings/schema-validation.ts">edit</a>({ ...params }) -> SchemaValidationEditResponse</code>
- <code title="get /zones/{zone_id}/api_gateway/settings/schema_validation">client.apiGateway.settings.schemaValidation.<a href="./src/resources/api-gateway/settings/schema-validation.ts">get</a>({ ...params }) -> SchemaValidationGetResponse</code>

## UserSchemas

Types:

- <code><a href="./src/resources/api-gateway/user-schemas/user-schemas.ts">Message</a></code>
- <code><a href="./src/resources/api-gateway/user-schemas/user-schemas.ts">PublicSchema</a></code>
- <code><a href="./src/resources/api-gateway/user-schemas/user-schemas.ts">UserSchemaCreateResponse</a></code>
- <code><a href="./src/resources/api-gateway/user-schemas/user-schemas.ts">UserSchemaListResponse</a></code>
- <code><a href="./src/resources/api-gateway/user-schemas/user-schemas.ts">UserSchemaDeleteResponse</a></code>
- <code><a href="./src/resources/api-gateway/user-schemas/user-schemas.ts">UserSchemaEditResponse</a></code>
- <code><a href="./src/resources/api-gateway/user-schemas/user-schemas.ts">UserSchemaGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/api_gateway/user_schemas">client.apiGateway.userSchemas.<a href="./src/resources/api-gateway/user-schemas/user-schemas.ts">create</a>({ ...params }) -> UserSchemaCreateResponse</code>
- <code title="get /zones/{zone_id}/api_gateway/user_schemas">client.apiGateway.userSchemas.<a href="./src/resources/api-gateway/user-schemas/user-schemas.ts">list</a>({ ...params }) -> UserSchemaListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/api_gateway/user_schemas/{schema_id}">client.apiGateway.userSchemas.<a href="./src/resources/api-gateway/user-schemas/user-schemas.ts">delete</a>(schemaId, { ...params }) -> UserSchemaDeleteResponse</code>
- <code title="patch /zones/{zone_id}/api_gateway/user_schemas/{schema_id}">client.apiGateway.userSchemas.<a href="./src/resources/api-gateway/user-schemas/user-schemas.ts">edit</a>(schemaId, { ...params }) -> UserSchemaEditResponse</code>
- <code title="get /zones/{zone_id}/api_gateway/user_schemas/{schema_id}">client.apiGateway.userSchemas.<a href="./src/resources/api-gateway/user-schemas/user-schemas.ts">get</a>(schemaId, { ...params }) -> UserSchemaGetResponse</code>

### Operations

Types:

- <code><a href="./src/resources/api-gateway/user-schemas/operations.ts">OperationListResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/api_gateway/user_schemas/{schema_id}/operations">client.apiGateway.userSchemas.operations.<a href="./src/resources/api-gateway/user-schemas/operations.ts">list</a>(schemaId, { ...params }) -> OperationListResponsesV4PagePaginationArray</code>

### Hosts

Types:

- <code><a href="./src/resources/api-gateway/user-schemas/hosts.ts">HostListResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/api_gateway/user_schemas/hosts">client.apiGateway.userSchemas.hosts.<a href="./src/resources/api-gateway/user-schemas/hosts.ts">list</a>({ ...params }) -> HostListResponsesV4PagePaginationArray</code>

## ExpressionTemplate

### Fallthrough

Types:

- <code><a href="./src/resources/api-gateway/expression-template/fallthrough.ts">FallthroughCreateResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/api_gateway/expression-template/fallthrough">client.apiGateway.expressionTemplate.fallthrough.<a href="./src/resources/api-gateway/expression-template/fallthrough.ts">create</a>({ ...params }) -> FallthroughCreateResponse</code>
