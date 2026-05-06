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

## DynamicRouting

Types:

- <code><a href="./src/resources/ai-gateway/dynamic-routing.ts">DynamicRoutingCreateResponse</a></code>
- <code><a href="./src/resources/ai-gateway/dynamic-routing.ts">DynamicRoutingUpdateResponse</a></code>
- <code><a href="./src/resources/ai-gateway/dynamic-routing.ts">DynamicRoutingListResponse</a></code>
- <code><a href="./src/resources/ai-gateway/dynamic-routing.ts">DynamicRoutingDeleteResponse</a></code>
- <code><a href="./src/resources/ai-gateway/dynamic-routing.ts">DynamicRoutingCreateDeploymentResponse</a></code>
- <code><a href="./src/resources/ai-gateway/dynamic-routing.ts">DynamicRoutingCreateVersionResponse</a></code>
- <code><a href="./src/resources/ai-gateway/dynamic-routing.ts">DynamicRoutingGetResponse</a></code>
- <code><a href="./src/resources/ai-gateway/dynamic-routing.ts">DynamicRoutingGetVersionResponse</a></code>
- <code><a href="./src/resources/ai-gateway/dynamic-routing.ts">DynamicRoutingListDeploymentsResponse</a></code>
- <code><a href="./src/resources/ai-gateway/dynamic-routing.ts">DynamicRoutingListVersionsResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes">client.aiGateway.dynamicRouting.<a href="./src/resources/ai-gateway/dynamic-routing.ts">create</a>(gatewayId, { ...params }) -> DynamicRoutingCreateResponse</code>
- <code title="patch /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}">client.aiGateway.dynamicRouting.<a href="./src/resources/ai-gateway/dynamic-routing.ts">update</a>(gatewayId, id, { ...params }) -> DynamicRoutingUpdateResponse</code>
- <code title="get /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes">client.aiGateway.dynamicRouting.<a href="./src/resources/ai-gateway/dynamic-routing.ts">list</a>(gatewayId, { ...params }) -> DynamicRoutingListResponse</code>
- <code title="delete /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}">client.aiGateway.dynamicRouting.<a href="./src/resources/ai-gateway/dynamic-routing.ts">delete</a>(gatewayId, id, { ...params }) -> DynamicRoutingDeleteResponse</code>
- <code title="post /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/deployments">client.aiGateway.dynamicRouting.<a href="./src/resources/ai-gateway/dynamic-routing.ts">createDeployment</a>(gatewayId, id, { ...params }) -> DynamicRoutingCreateDeploymentResponse</code>
- <code title="post /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/versions">client.aiGateway.dynamicRouting.<a href="./src/resources/ai-gateway/dynamic-routing.ts">createVersion</a>(gatewayId, id, { ...params }) -> DynamicRoutingCreateVersionResponse</code>
- <code title="get /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}">client.aiGateway.dynamicRouting.<a href="./src/resources/ai-gateway/dynamic-routing.ts">get</a>(gatewayId, id, { ...params }) -> DynamicRoutingGetResponse</code>
- <code title="get /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/versions/{version_id}">client.aiGateway.dynamicRouting.<a href="./src/resources/ai-gateway/dynamic-routing.ts">getVersion</a>(gatewayId, id, versionId, { ...params }) -> DynamicRoutingGetVersionResponse</code>
- <code title="get /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/deployments">client.aiGateway.dynamicRouting.<a href="./src/resources/ai-gateway/dynamic-routing.ts">listDeployments</a>(gatewayId, id, { ...params }) -> DynamicRoutingListDeploymentsResponse</code>
- <code title="get /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/versions">client.aiGateway.dynamicRouting.<a href="./src/resources/ai-gateway/dynamic-routing.ts">listVersions</a>(gatewayId, id, { ...params }) -> DynamicRoutingListVersionsResponse</code>

## ProviderConfigs

Types:

- <code><a href="./src/resources/ai-gateway/provider-configs.ts">ProviderConfigCreateResponse</a></code>
- <code><a href="./src/resources/ai-gateway/provider-configs.ts">ProviderConfigListResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/provider_configs">client.aiGateway.providerConfigs.<a href="./src/resources/ai-gateway/provider-configs.ts">create</a>(gatewayId, { ...params }) -> ProviderConfigCreateResponse</code>
- <code title="get /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/provider_configs">client.aiGateway.providerConfigs.<a href="./src/resources/ai-gateway/provider-configs.ts">list</a>(gatewayId, { ...params }) -> ProviderConfigListResponsesV4PagePaginationArray</code>

## URLs

Types:

- <code><a href="./src/resources/ai-gateway/urls.ts">URLGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/url/{provider}">client.aiGateway.urls.<a href="./src/resources/ai-gateway/urls.ts">get</a>(gatewayId, provider, { ...params }) -> URLGetResponse</code>

## Billing

Types:

- <code><a href="./src/resources/ai-gateway/billing/billing.ts">BillingCreditBalanceResponse</a></code>
- <code><a href="./src/resources/ai-gateway/billing/billing.ts">BillingInvoiceHistoryResponse</a></code>
- <code><a href="./src/resources/ai-gateway/billing/billing.ts">BillingInvoicePreviewResponse</a></code>
- <code><a href="./src/resources/ai-gateway/billing/billing.ts">BillingUsageHistoryResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/ai-gateway/billing/credit-balance">client.aiGateway.billing.<a href="./src/resources/ai-gateway/billing/billing.ts">creditBalance</a>({ ...params }) -> BillingCreditBalanceResponse</code>
- <code title="get /accounts/{account_id}/ai-gateway/billing/invoice-history">client.aiGateway.billing.<a href="./src/resources/ai-gateway/billing/billing.ts">invoiceHistory</a>({ ...params }) -> BillingInvoiceHistoryResponse</code>
- <code title="get /accounts/{account_id}/ai-gateway/billing/invoice-preview">client.aiGateway.billing.<a href="./src/resources/ai-gateway/billing/billing.ts">invoicePreview</a>({ ...params }) -> BillingInvoicePreviewResponse</code>
- <code title="get /accounts/{account_id}/ai-gateway/billing/usage-history">client.aiGateway.billing.<a href="./src/resources/ai-gateway/billing/billing.ts">usageHistory</a>({ ...params }) -> BillingUsageHistoryResponse</code>

### Topup

Types:

- <code><a href="./src/resources/ai-gateway/billing/topup/topup.ts">TopupCreateResponse</a></code>
- <code><a href="./src/resources/ai-gateway/billing/topup/topup.ts">TopupStatusResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/ai-gateway/billing/topup">client.aiGateway.billing.topup.<a href="./src/resources/ai-gateway/billing/topup/topup.ts">create</a>({ ...params }) -> TopupCreateResponse</code>
- <code title="post /accounts/{account_id}/ai-gateway/billing/topup/status">client.aiGateway.billing.topup.<a href="./src/resources/ai-gateway/billing/topup/topup.ts">status</a>({ ...params }) -> TopupStatusResponse</code>

#### Config

Types:

- <code><a href="./src/resources/ai-gateway/billing/topup/config.ts">ConfigCreateResponse</a></code>
- <code><a href="./src/resources/ai-gateway/billing/topup/config.ts">ConfigDeleteResponse</a></code>
- <code><a href="./src/resources/ai-gateway/billing/topup/config.ts">ConfigGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/ai-gateway/billing/topup/config">client.aiGateway.billing.topup.config.<a href="./src/resources/ai-gateway/billing/topup/config.ts">create</a>({ ...params }) -> ConfigCreateResponse</code>
- <code title="delete /accounts/{account_id}/ai-gateway/billing/topup/config">client.aiGateway.billing.topup.config.<a href="./src/resources/ai-gateway/billing/topup/config.ts">delete</a>({ ...params }) -> ConfigDeleteResponse</code>
- <code title="get /accounts/{account_id}/ai-gateway/billing/topup/config">client.aiGateway.billing.topup.config.<a href="./src/resources/ai-gateway/billing/topup/config.ts">get</a>({ ...params }) -> ConfigGetResponse</code>

### SpendingLimit

Types:

- <code><a href="./src/resources/ai-gateway/billing/spending-limit.ts">SpendingLimitCreateResponse</a></code>
- <code><a href="./src/resources/ai-gateway/billing/spending-limit.ts">SpendingLimitDeleteResponse</a></code>
- <code><a href="./src/resources/ai-gateway/billing/spending-limit.ts">SpendingLimitGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/ai-gateway/billing/spending-limit">client.aiGateway.billing.spendingLimit.<a href="./src/resources/ai-gateway/billing/spending-limit.ts">create</a>({ ...params }) -> SpendingLimitCreateResponse</code>
- <code title="delete /accounts/{account_id}/ai-gateway/billing/spending-limit">client.aiGateway.billing.spendingLimit.<a href="./src/resources/ai-gateway/billing/spending-limit.ts">delete</a>({ ...params }) -> SpendingLimitDeleteResponse</code>
- <code title="get /accounts/{account_id}/ai-gateway/billing/spending-limit">client.aiGateway.billing.spendingLimit.<a href="./src/resources/ai-gateway/billing/spending-limit.ts">get</a>({ ...params }) -> SpendingLimitGetResponse</code>
