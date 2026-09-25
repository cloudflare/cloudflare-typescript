# Billing

Types:

- <code><a href="./src/resources/billing/billing.ts">BillingAddressValidationResponse</a></code>

Methods:

- <code title="post /billing/address-validation">client.billing.<a href="./src/resources/billing/billing.ts">addressValidation</a>({ ...params }) -> BillingAddressValidationResponse</code>

## Profiles

Types:

- <code><a href="./src/resources/billing/profiles/profiles.ts">ProfileCreateResponse</a></code>
- <code><a href="./src/resources/billing/profiles/profiles.ts">ProfileUpdateResponse</a></code>
- <code><a href="./src/resources/billing/profiles/profiles.ts">ProfileGetResponse</a></code>
- <code><a href="./src/resources/billing/profiles/profiles.ts">ProfileUpdateBillingEmailResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/billing/profile">client.billing.profiles.<a href="./src/resources/billing/profiles/profiles.ts">create</a>({ ...params }) -> ProfileCreateResponse</code>
- <code title="put /accounts/{account_id}/billing/profile">client.billing.profiles.<a href="./src/resources/billing/profiles/profiles.ts">update</a>({ ...params }) -> ProfileUpdateResponse</code>
- <code title="delete /accounts/{account_id}/billing/profile">client.billing.profiles.<a href="./src/resources/billing/profiles/profiles.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /accounts/{account_id}/billing/profile">client.billing.profiles.<a href="./src/resources/billing/profiles/profiles.ts">get</a>({ ...params }) -> ProfileGetResponse</code>
- <code title="patch /accounts/{account_id}/billing/profile">client.billing.profiles.<a href="./src/resources/billing/profiles/profiles.ts">updateBillingEmail</a>({ ...params }) -> ProfileUpdateBillingEmailResponse</code>

### PaymentMethod

Types:

- <code><a href="./src/resources/billing/profiles/payment-method.ts">PaymentMethodCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/billing/profile/payment-method">client.billing.profiles.paymentMethod.<a href="./src/resources/billing/profiles/payment-method.ts">create</a>({ ...params }) -> PaymentMethodCreateResponse</code>

## Usage

Types:

- <code><a href="./src/resources/billing/usage.ts">UsageGetResponse</a></code>
- <code><a href="./src/resources/billing/usage.ts">UsageGetAccountUsageInfoV1Response</a></code>
- <code><a href="./src/resources/billing/usage.ts">UsageGetAccountUsageV1Response</a></code>
- <code><a href="./src/resources/billing/usage.ts">UsageGetAccountUsageV2Response</a></code>
- <code><a href="./src/resources/billing/usage.ts">UsagePaygoResponse</a></code>
- <code><a href="./src/resources/billing/usage.ts">UsagePaygoInfoResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/billable/usage">client.billing.usage.<a href="./src/resources/billing/usage.ts">get</a>({ ...params }) -> UsageGetResponse</code>
- <code title="get /accounts/{account_id}/billable-usage/info">client.billing.usage.<a href="./src/resources/billing/usage.ts">getAccountUsageInfoV1</a>({ ...params }) -> UsageGetAccountUsageInfoV1Response</code>
- <code title="get /accounts/{account_id}/billable-usage">client.billing.usage.<a href="./src/resources/billing/usage.ts">getAccountUsageV1</a>({ ...params }) -> UsageGetAccountUsageV1Response</code>
- <code title="get /accounts/{account_id}/billable/usage">client.billing.usage.<a href="./src/resources/billing/usage.ts">getAccountUsageV2</a>({ ...params }) -> UsageGetAccountUsageV2Response</code>
- <code title="get /accounts/{account_id}/billable-usage">client.billing.usage.<a href="./src/resources/billing/usage.ts">paygo</a>({ ...params }) -> UsagePaygoResponse</code>
- <code title="get /accounts/{account_id}/billable-usage/info">client.billing.usage.<a href="./src/resources/billing/usage.ts">paygoInfo</a>({ ...params }) -> UsagePaygoInfoResponse</code>

## Credits

Types:

- <code><a href="./src/resources/billing/credits.ts">CreditGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/billing/credits">client.billing.credits.<a href="./src/resources/billing/credits.ts">get</a>({ ...params }) -> CreditGetResponse</code>

## History

Types:

- <code><a href="./src/resources/billing/history.ts">HistoryListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/billing/history">client.billing.history.<a href="./src/resources/billing/history.ts">list</a>({ ...params }) -> HistoryListResponsesV4PagePaginationArray</code>

## BadDebt

Types:

- <code><a href="./src/resources/billing/bad-debt.ts">BadDebtGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/billing/bad-debt">client.billing.badDebt.<a href="./src/resources/billing/bad-debt.ts">get</a>({ ...params }) -> BadDebtGetResponse</code>

## UnpaidInvoice

Types:

- <code><a href="./src/resources/billing/unpaid-invoice.ts">UnpaidInvoiceGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/billing/unpaid-invoice">client.billing.unpaidInvoice.<a href="./src/resources/billing/unpaid-invoice.ts">get</a>({ ...params }) -> UnpaidInvoiceGetResponse</code>

## RatePlans

Types:

- <code><a href="./src/resources/billing/rate-plans.ts">RatePlanGetResponse</a></code>

Methods:

- <code title="get /billing/rate_plans/{public_key}">client.billing.ratePlans.<a href="./src/resources/billing/rate-plans.ts">get</a>(publicKey) -> RatePlanGetResponse</code>
