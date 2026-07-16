# Billing

## Profiles

Types:

- <code><a href="./src/resources/billing/profiles.ts">ProfileGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/billing/profile">client.billing.profiles.<a href="./src/resources/billing/profiles.ts">get</a>({ ...params }) -> ProfileGetResponse</code>

## Usage

Types:

- <code><a href="./src/resources/billing/usage.ts">UsageGetResponse</a></code>
- <code><a href="./src/resources/billing/usage.ts">UsagePaygoResponse</a></code>
- <code><a href="./src/resources/billing/usage.ts">UsagePaygoInfoResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/billable/usage">client.billing.usage.<a href="./src/resources/billing/usage.ts">get</a>({ ...params }) -> UsageGetResponse</code>
- <code title="get /accounts/{account_id}/paygo-usage">client.billing.usage.<a href="./src/resources/billing/usage.ts">paygo</a>({ ...params }) -> UsagePaygoResponse</code>
- <code title="get /accounts/{account_id}/paygo-usage-info">client.billing.usage.<a href="./src/resources/billing/usage.ts">paygoInfo</a>({ ...params }) -> UsagePaygoInfoResponse</code>
