# AIGateway

Types:

- <code><a href="./src/resources/ai-gateway/ai-gateway.ts">AIGatewayCreateResponse</a></code>
- <code><a href="./src/resources/ai-gateway/ai-gateway.ts">AIGatewayUpdateResponse</a></code>
- <code><a href="./src/resources/ai-gateway/ai-gateway.ts">AIGatewayListResponse</a></code>
- <code><a href="./src/resources/ai-gateway/ai-gateway.ts">AIGatewayDeleteResponse</a></code>
- <code><a href="./src/resources/ai-gateway/ai-gateway.ts">AIGatewayGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/ai-gateway/gateways">client.aiGateway.<a href="./src/resources/ai-gateway/ai-gateway.ts">create</a>({ ...params }) -> AIGatewayCreateResponse</code>
- <code title="put /accounts/{account_id}/ai-gateway/gateways/{id}">client.aiGateway.<a href="./src/resources/ai-gateway/ai-gateway.ts">update</a>(id, { ...params }) -> AIGatewayUpdateResponse</code>
- <code title="get /accounts/{account_id}/ai-gateway/gateways">client.aiGateway.<a href="./src/resources/ai-gateway/ai-gateway.ts">list</a>({ ...params }) -> AIGatewayListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/ai-gateway/gateways/{id}">client.aiGateway.<a href="./src/resources/ai-gateway/ai-gateway.ts">delete</a>(id, { ...params }) -> AIGatewayDeleteResponse</code>
- <code title="get /accounts/{account_id}/ai-gateway/gateways/{id}">client.aiGateway.<a href="./src/resources/ai-gateway/ai-gateway.ts">get</a>(id, { ...params }) -> AIGatewayGetResponse</code>

## EvaluationTypes

Types:

- <code><a href="./src/resources/ai-gateway/evaluation-types.ts">EvaluationTypeListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/ai-gateway/evaluation-types">client.aiGateway.evaluationTypes.<a href="./src/resources/ai-gateway/evaluation-types.ts">list</a>({ ...params }) -> EvaluationTypeListResponsesV4PagePaginationArray</code>

## Logs

Types:

- <code><a href="./src/resources/ai-gateway/logs.ts">LogListResponse</a></code>
- <code><a href="./src/resources/ai-gateway/logs.ts">LogDeleteResponse</a></code>
- <code><a href="./src/resources/ai-gateway/logs.ts">LogEditResponse</a></code>
- <code><a href="./src/resources/ai-gateway/logs.ts">LogGetResponse</a></code>
- <code><a href="./src/resources/ai-gateway/logs.ts">LogRequestResponse</a></code>
- <code><a href="./src/resources/ai-gateway/logs.ts">LogResponseResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs">client.aiGateway.logs.<a href="./src/resources/ai-gateway/logs.ts">list</a>(gatewayId, { ...params }) -> LogListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs">client.aiGateway.logs.<a href="./src/resources/ai-gateway/logs.ts">delete</a>(gatewayId, { ...params }) -> LogDeleteResponse</code>
- <code title="patch /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}">client.aiGateway.logs.<a href="./src/resources/ai-gateway/logs.ts">edit</a>(gatewayId, id, { ...params }) -> LogEditResponse</code>
- <code title="get /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}">client.aiGateway.logs.<a href="./src/resources/ai-gateway/logs.ts">get</a>(gatewayId, id, { ...params }) -> LogGetResponse</code>
- <code title="get /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}/request">client.aiGateway.logs.<a href="./src/resources/ai-gateway/logs.ts">request</a>(gatewayId, id, { ...params }) -> unknown</code>
- <code title="get /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}/response">client.aiGateway.logs.<a href="./src/resources/ai-gateway/logs.ts">response</a>(gatewayId, id, { ...params }) -> unknown</code>

## Datasets

Types:

- <code><a href="./src/resources/ai-gateway/datasets.ts">DatasetCreateResponse</a></code>
- <code><a href="./src/resources/ai-gateway/datasets.ts">DatasetUpdateResponse</a></code>
- <code><a href="./src/resources/ai-gateway/datasets.ts">DatasetListResponse</a></code>
- <code><a href="./src/resources/ai-gateway/datasets.ts">DatasetDeleteResponse</a></code>
- <code><a href="./src/resources/ai-gateway/datasets.ts">DatasetGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets">client.aiGateway.datasets.<a href="./src/resources/ai-gateway/datasets.ts">create</a>(gatewayId, { ...params }) -> DatasetCreateResponse</code>
- <code title="put /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets/{id}">client.aiGateway.datasets.<a href="./src/resources/ai-gateway/datasets.ts">update</a>(gatewayId, id, { ...params }) -> DatasetUpdateResponse</code>
- <code title="get /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets">client.aiGateway.datasets.<a href="./src/resources/ai-gateway/datasets.ts">list</a>(gatewayId, { ...params }) -> DatasetListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets/{id}">client.aiGateway.datasets.<a href="./src/resources/ai-gateway/datasets.ts">delete</a>(gatewayId, id, { ...params }) -> DatasetDeleteResponse</code>
- <code title="get /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets/{id}">client.aiGateway.datasets.<a href="./src/resources/ai-gateway/datasets.ts">get</a>(gatewayId, id, { ...params }) -> DatasetGetResponse</code>

## Evaluations

Types:

- <code><a href="./src/resources/ai-gateway/evaluations.ts">EvaluationCreateResponse</a></code>
- <code><a href="./src/resources/ai-gateway/evaluations.ts">EvaluationListResponse</a></code>
- <code><a href="./src/resources/ai-gateway/evaluations.ts">EvaluationDeleteResponse</a></code>
- <code><a href="./src/resources/ai-gateway/evaluations.ts">EvaluationGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations">client.aiGateway.evaluations.<a href="./src/resources/ai-gateway/evaluations.ts">create</a>(gatewayId, { ...params }) -> EvaluationCreateResponse</code>
- <code title="get /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations">client.aiGateway.evaluations.<a href="./src/resources/ai-gateway/evaluations.ts">list</a>(gatewayId, { ...params }) -> EvaluationListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations/{id}">client.aiGateway.evaluations.<a href="./src/resources/ai-gateway/evaluations.ts">delete</a>(gatewayId, id, { ...params }) -> EvaluationDeleteResponse</code>
- <code title="get /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations/{id}">client.aiGateway.evaluations.<a href="./src/resources/ai-gateway/evaluations.ts">get</a>(gatewayId, id, { ...params }) -> EvaluationGetResponse</code>

## URLs

Types:

- <code><a href="./src/resources/ai-gateway/urls.ts">URLGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/url/{provider}">client.aiGateway.urls.<a href="./src/resources/ai-gateway/urls.ts">get</a>(gatewayId, provider, { ...params }) -> URLGetResponse</code>
