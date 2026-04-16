# Alerting

## AvailableAlerts

Types:

- <code><a href="./src/resources/alerting/available-alerts.ts">AvailableAlertListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/alerting/v3/available_alerts">client.alerting.availableAlerts.<a href="./src/resources/alerting/available-alerts.ts">list</a>({ ...params }) -> AvailableAlertListResponse</code>

## Destinations

### Eligible

Types:

- <code><a href="./src/resources/alerting/destinations/eligible.ts">EligibleGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/alerting/v3/destinations/eligible">client.alerting.destinations.eligible.<a href="./src/resources/alerting/destinations/eligible.ts">get</a>({ ...params }) -> EligibleGetResponse</code>

### Pagerduty

Types:

- <code><a href="./src/resources/alerting/destinations/pagerduty.ts">Pagerduty</a></code>
- <code><a href="./src/resources/alerting/destinations/pagerduty.ts">PagerdutyCreateResponse</a></code>
- <code><a href="./src/resources/alerting/destinations/pagerduty.ts">PagerdutyDeleteResponse</a></code>
- <code><a href="./src/resources/alerting/destinations/pagerduty.ts">PagerdutyLinkResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/alerting/v3/destinations/pagerduty/connect">client.alerting.destinations.pagerduty.<a href="./src/resources/alerting/destinations/pagerduty.ts">create</a>({ ...params }) -> PagerdutyCreateResponse</code>
- <code title="delete /accounts/{account_id}/alerting/v3/destinations/pagerduty">client.alerting.destinations.pagerduty.<a href="./src/resources/alerting/destinations/pagerduty.ts">delete</a>({ ...params }) -> PagerdutyDeleteResponse</code>
- <code title="get /accounts/{account_id}/alerting/v3/destinations/pagerduty">client.alerting.destinations.pagerduty.<a href="./src/resources/alerting/destinations/pagerduty.ts">get</a>({ ...params }) -> PagerdutiesSinglePage</code>
- <code title="get /accounts/{account_id}/alerting/v3/destinations/pagerduty/connect/{token_id}">client.alerting.destinations.pagerduty.<a href="./src/resources/alerting/destinations/pagerduty.ts">link</a>(tokenId, { ...params }) -> PagerdutyLinkResponse</code>

### Webhooks

Types:

- <code><a href="./src/resources/alerting/destinations/webhooks.ts">Webhooks</a></code>
- <code><a href="./src/resources/alerting/destinations/webhooks.ts">WebhookCreateResponse</a></code>
- <code><a href="./src/resources/alerting/destinations/webhooks.ts">WebhookUpdateResponse</a></code>
- <code><a href="./src/resources/alerting/destinations/webhooks.ts">WebhookDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/alerting/v3/destinations/webhooks">client.alerting.destinations.webhooks.<a href="./src/resources/alerting/destinations/webhooks.ts">create</a>({ ...params }) -> WebhookCreateResponse</code>
- <code title="put /accounts/{account_id}/alerting/v3/destinations/webhooks/{webhook_id}">client.alerting.destinations.webhooks.<a href="./src/resources/alerting/destinations/webhooks.ts">update</a>(webhookId, { ...params }) -> WebhookUpdateResponse</code>
- <code title="get /accounts/{account_id}/alerting/v3/destinations/webhooks">client.alerting.destinations.webhooks.<a href="./src/resources/alerting/destinations/webhooks.ts">list</a>({ ...params }) -> WebhooksSinglePage</code>
- <code title="delete /accounts/{account_id}/alerting/v3/destinations/webhooks/{webhook_id}">client.alerting.destinations.webhooks.<a href="./src/resources/alerting/destinations/webhooks.ts">delete</a>(webhookId, { ...params }) -> WebhookDeleteResponse</code>
- <code title="get /accounts/{account_id}/alerting/v3/destinations/webhooks/{webhook_id}">client.alerting.destinations.webhooks.<a href="./src/resources/alerting/destinations/webhooks.ts">get</a>(webhookId, { ...params }) -> Webhooks</code>

## History

Types:

- <code><a href="./src/resources/alerting/history.ts">History</a></code>

Methods:

- <code title="get /accounts/{account_id}/alerting/v3/history">client.alerting.history.<a href="./src/resources/alerting/history.ts">list</a>({ ...params }) -> HistoriesV4PagePaginationArray</code>

## Policies

Types:

- <code><a href="./src/resources/alerting/policies.ts">Mechanism</a></code>
- <code><a href="./src/resources/alerting/policies.ts">Policy</a></code>
- <code><a href="./src/resources/alerting/policies.ts">PolicyFilter</a></code>
- <code><a href="./src/resources/alerting/policies.ts">PolicyCreateResponse</a></code>
- <code><a href="./src/resources/alerting/policies.ts">PolicyUpdateResponse</a></code>
- <code><a href="./src/resources/alerting/policies.ts">PolicyDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/alerting/v3/policies">client.alerting.policies.<a href="./src/resources/alerting/policies.ts">create</a>({ ...params }) -> PolicyCreateResponse</code>
- <code title="put /accounts/{account_id}/alerting/v3/policies/{policy_id}">client.alerting.policies.<a href="./src/resources/alerting/policies.ts">update</a>(policyId, { ...params }) -> PolicyUpdateResponse</code>
- <code title="get /accounts/{account_id}/alerting/v3/policies">client.alerting.policies.<a href="./src/resources/alerting/policies.ts">list</a>({ ...params }) -> PoliciesSinglePage</code>
- <code title="delete /accounts/{account_id}/alerting/v3/policies/{policy_id}">client.alerting.policies.<a href="./src/resources/alerting/policies.ts">delete</a>(policyId, { ...params }) -> PolicyDeleteResponse</code>
- <code title="get /accounts/{account_id}/alerting/v3/policies/{policy_id}">client.alerting.policies.<a href="./src/resources/alerting/policies.ts">get</a>(policyId, { ...params }) -> Policy</code>

## Silences

Types:

- <code><a href="./src/resources/alerting/silences.ts">SilenceCreateResponse</a></code>
- <code><a href="./src/resources/alerting/silences.ts">SilenceUpdateResponse</a></code>
- <code><a href="./src/resources/alerting/silences.ts">SilenceListResponse</a></code>
- <code><a href="./src/resources/alerting/silences.ts">SilenceDeleteResponse</a></code>
- <code><a href="./src/resources/alerting/silences.ts">SilenceGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/alerting/v3/silences">client.alerting.silences.<a href="./src/resources/alerting/silences.ts">create</a>([ ...body ]) -> SilenceCreateResponse</code>
- <code title="put /accounts/{account_id}/alerting/v3/silences">client.alerting.silences.<a href="./src/resources/alerting/silences.ts">update</a>([ ...body ]) -> SilenceUpdateResponsesSinglePage</code>
- <code title="get /accounts/{account_id}/alerting/v3/silences">client.alerting.silences.<a href="./src/resources/alerting/silences.ts">list</a>({ ...params }) -> SilenceListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/alerting/v3/silences/{silence_id}">client.alerting.silences.<a href="./src/resources/alerting/silences.ts">delete</a>(silenceId, { ...params }) -> SilenceDeleteResponse</code>
- <code title="get /accounts/{account_id}/alerting/v3/silences/{silence_id}">client.alerting.silences.<a href="./src/resources/alerting/silences.ts">get</a>(silenceId, { ...params }) -> SilenceGetResponse</code>
