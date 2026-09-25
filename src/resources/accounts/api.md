# Accounts

Types:

- <code><a href="./src/resources/accounts/accounts.ts">Account</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">AccountDeleteResponse</a></code>

Methods:

- <code title="post /accounts">client.accounts.<a href="./src/resources/accounts/accounts.ts">create</a>({ ...params }) -> Account</code>
- <code title="put /accounts/{account_id}">client.accounts.<a href="./src/resources/accounts/accounts.ts">update</a>({ ...params }) -> Account</code>
- <code title="get /accounts">client.accounts.<a href="./src/resources/accounts/accounts.ts">list</a>({ ...params }) -> AccountsV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}">client.accounts.<a href="./src/resources/accounts/accounts.ts">delete</a>({ ...params }) -> AccountDeleteResponse | null</code>
- <code title="get /accounts/{account_id}">client.accounts.<a href="./src/resources/accounts/accounts.ts">get</a>({ ...params }) -> Account</code>

## Members

Types:

- <code><a href="./src/resources/accounts/members.ts">Status</a></code>
- <code><a href="./src/resources/accounts/members.ts">MemberDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/members">client.accounts.members.<a href="./src/resources/accounts/members.ts">create</a>({ ...params }) -> Member</code>
- <code title="put /accounts/{account_id}/members/{member_id}">client.accounts.members.<a href="./src/resources/accounts/members.ts">update</a>(memberID, { ...params }) -> Member</code>
- <code title="get /accounts/{account_id}/members">client.accounts.members.<a href="./src/resources/accounts/members.ts">list</a>({ ...params }) -> MembersV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/members/{member_id}">client.accounts.members.<a href="./src/resources/accounts/members.ts">delete</a>(memberID, { ...params }) -> MemberDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/members/{member_id}">client.accounts.members.<a href="./src/resources/accounts/members.ts">get</a>(memberID, { ...params }) -> Member</code>

## Roles

Methods:

- <code title="get /accounts/{account_id}/roles">client.accounts.roles.<a href="./src/resources/accounts/roles.ts">list</a>({ ...params }) -> RolesV4PagePaginationArray</code>
- <code title="get /accounts/{account_id}/roles/{role_id}">client.accounts.roles.<a href="./src/resources/accounts/roles.ts">get</a>(roleID, { ...params }) -> Role</code>

## Subscriptions

Types:

- <code><a href="./src/resources/accounts/subscriptions/subscriptions.ts">SubscriptionDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/subscriptions/subscriptions.ts">SubscriptionCancelDowngradeResponse</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/subscriptions">client.accounts.subscriptions.<a href="./src/resources/accounts/subscriptions/subscriptions.ts">create</a>({ ...params }) -> Subscription</code>
- <code title="put /accounts/{account_id}/subscriptions/{subscription_identifier}">client.accounts.subscriptions.<a href="./src/resources/accounts/subscriptions/subscriptions.ts">update</a>(subscriptionIdentifier, { ...params }) -> Subscription</code>
- <code title="delete /accounts/{account_id}/subscriptions/{subscription_identifier}">client.accounts.subscriptions.<a href="./src/resources/accounts/subscriptions/subscriptions.ts">delete</a>(subscriptionIdentifier, { ...params }) -> SubscriptionDeleteResponse</code>
- <code title="post /accounts/{account_id}/subscriptions/cancel-downgrade">client.accounts.subscriptions.<a href="./src/resources/accounts/subscriptions/subscriptions.ts">cancelDowngrade</a>({ ...params }) -> SubscriptionCancelDowngradeResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/subscriptions">client.accounts.subscriptions.<a href="./src/resources/accounts/subscriptions/subscriptions.ts">get</a>({ ...params }) -> SubscriptionsSinglePage</code>
- <code title="get /accounts/{account_id}/subscriptions/{subscription_identifier}">client.accounts.subscriptions.<a href="./src/resources/accounts/subscriptions/subscriptions.ts">getByIdentifier</a>(subscriptionIdentifier, { ...params }) -> Subscription</code>

### CancelReason

Types:

- <code><a href="./src/resources/accounts/subscriptions/cancel-reason.ts">CancelReasonCreateResponse</a></code>
- <code><a href="./src/resources/accounts/subscriptions/cancel-reason.ts">CancelReasonGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/subscriptions/{subscription_identifier}/cancel-reason">client.accounts.subscriptions.cancelReason.<a href="./src/resources/accounts/subscriptions/cancel-reason.ts">create</a>(subscriptionIdentifier, { ...params }) -> CancelReasonCreateResponse</code>
- <code title="get /accounts/{account_id}/subscriptions/{subscription_identifier}/cancel-reason">client.accounts.subscriptions.cancelReason.<a href="./src/resources/accounts/subscriptions/cancel-reason.ts">get</a>(subscriptionIdentifier, { ...params }) -> CancelReasonGetResponse</code>

### Actions

Methods:

- <code title="post /accounts/{account_id}/subscriptions/{subscription_identifier}/action/append">client.accounts.subscriptions.actions.<a href="./src/resources/accounts/subscriptions/actions.ts">append</a>(subscriptionIdentifier, { ...params }) -> Subscription</code>

### Bulk

Types:

- <code><a href="./src/resources/accounts/subscriptions/bulk.ts">BulkCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/bulk/subscriptions">client.accounts.subscriptions.bulk.<a href="./src/resources/accounts/subscriptions/bulk.ts">create</a>({ ...params }) -> BulkCreateResponse | null</code>

## Tokens

Types:

- <code><a href="./src/resources/accounts/tokens/tokens.ts">TokenCreateResponse</a></code>
- <code><a href="./src/resources/accounts/tokens/tokens.ts">TokenDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/tokens/tokens.ts">TokenVerifyResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/tokens">client.accounts.tokens.<a href="./src/resources/accounts/tokens/tokens.ts">create</a>({ ...params }) -> TokenCreateResponse</code>
- <code title="put /accounts/{account_id}/tokens/{token_id}">client.accounts.tokens.<a href="./src/resources/accounts/tokens/tokens.ts">update</a>(tokenID, { ...params }) -> Token</code>
- <code title="get /accounts/{account_id}/tokens">client.accounts.tokens.<a href="./src/resources/accounts/tokens/tokens.ts">list</a>({ ...params }) -> TokensV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/tokens/{token_id}">client.accounts.tokens.<a href="./src/resources/accounts/tokens/tokens.ts">delete</a>(tokenID, { ...params }) -> TokenDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/tokens/{token_id}">client.accounts.tokens.<a href="./src/resources/accounts/tokens/tokens.ts">get</a>(tokenID, { ...params }) -> Token</code>
- <code title="get /accounts/{account_id}/tokens/verify">client.accounts.tokens.<a href="./src/resources/accounts/tokens/tokens.ts">verify</a>({ ...params }) -> TokenVerifyResponse</code>

### PermissionGroups

Types:

- <code><a href="./src/resources/accounts/tokens/permission-groups.ts">PermissionGroupListResponse</a></code>
- <code><a href="./src/resources/accounts/tokens/permission-groups.ts">PermissionGroupGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/tokens/permission_groups">client.accounts.tokens.permissionGroups.<a href="./src/resources/accounts/tokens/permission-groups.ts">list</a>({ ...params }) -> PermissionGroupListResponsesSinglePage</code>
- <code title="get /accounts/{account_id}/tokens/permission_groups">client.accounts.tokens.permissionGroups.<a href="./src/resources/accounts/tokens/permission-groups.ts">get</a>({ ...params }) -> PermissionGroupGetResponse</code>

### Value

Methods:

- <code title="put /accounts/{account_id}/tokens/{token_id}/value">client.accounts.tokens.value.<a href="./src/resources/accounts/tokens/value.ts">update</a>(tokenID, { ...params }) -> TokenValue</code>

## Logs

### Audit

Types:

- <code><a href="./src/resources/accounts/logs/audit.ts">AuditListResponse</a></code>
- <code><a href="./src/resources/accounts/logs/audit.ts">AuditHistoryResponse</a></code>
- <code><a href="./src/resources/accounts/logs/audit.ts">AuditProductCategoriesResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/logs/audit">client.accounts.logs.audit.<a href="./src/resources/accounts/logs/audit.ts">list</a>({ ...params }) -> AuditListResponsesCursorPaginationAfter</code>
- <code title="get /accounts/{account_id}/logs/audit/{id}/history">client.accounts.logs.audit.<a href="./src/resources/accounts/logs/audit.ts">history</a>(id, { ...params }) -> AuditHistoryResponse</code>
- <code title="get /accounts/{account_id}/logs/audit/product_categories">client.accounts.logs.audit.<a href="./src/resources/accounts/logs/audit.ts">productCategories</a>({ ...params }) -> AuditProductCategoriesResponsesSinglePage</code>

## Entitlements

Types:

- <code><a href="./src/resources/accounts/entitlements.ts">EntitlementListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/entitlements">client.accounts.entitlements.<a href="./src/resources/accounts/entitlements.ts">list</a>({ ...params }) -> EntitlementListResponsesSinglePage</code>

## SpeedSettings

### Transformations

Types:

- <code><a href="./src/resources/accounts/speed-settings/transformations.ts">TransformationsConfig</a></code>

Methods:

- <code title="get /accounts/{account_id}/settings/transformations">client.accounts.speedSettings.transformations.<a href="./src/resources/accounts/speed-settings/transformations.ts">get</a>({ ...params }) -> TransformationsConfigsSinglePage</code>

## PaymentMethods

Types:

- <code><a href="./src/resources/accounts/payment-methods.ts">PaymentMethodCreateResponse</a></code>
- <code><a href="./src/resources/accounts/payment-methods.ts">PaymentMethodUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/payment-methods.ts">PaymentMethodListResponse</a></code>
- <code><a href="./src/resources/accounts/payment-methods.ts">PaymentMethodDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/payment-methods.ts">PaymentMethodGetResponse</a></code>
- <code><a href="./src/resources/accounts/payment-methods.ts">PaymentMethodSetAsDefaultResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/payment-methods">client.accounts.paymentMethods.<a href="./src/resources/accounts/payment-methods.ts">create</a>({ ...params }) -> PaymentMethodCreateResponse</code>
- <code title="put /accounts/{account_id}/payment-methods/{payment_method_id}">client.accounts.paymentMethods.<a href="./src/resources/accounts/payment-methods.ts">update</a>(paymentMethodID, { ...params }) -> PaymentMethodUpdateResponse</code>
- <code title="get /accounts/{account_id}/payment-methods">client.accounts.paymentMethods.<a href="./src/resources/accounts/payment-methods.ts">list</a>({ ...params }) -> PaymentMethodListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/payment-methods/{payment_method_id}">client.accounts.paymentMethods.<a href="./src/resources/accounts/payment-methods.ts">delete</a>(paymentMethodID, { ...params }) -> PaymentMethodDeleteResponse</code>
- <code title="get /accounts/{account_id}/payment-methods/{payment_method_id}">client.accounts.paymentMethods.<a href="./src/resources/accounts/payment-methods.ts">get</a>(paymentMethodID, { ...params }) -> PaymentMethodGetResponse</code>
- <code title="post /accounts/{account_id}/payment-methods/{payment_method_id}/set-as-default">client.accounts.paymentMethods.<a href="./src/resources/accounts/payment-methods.ts">setAsDefault</a>(paymentMethodID, { ...params }) -> PaymentMethodSetAsDefaultResponse</code>

## PayInvoice

Types:

- <code><a href="./src/resources/accounts/pay-invoice.ts">PayInvoiceCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pay-invoice">client.accounts.payInvoice.<a href="./src/resources/accounts/pay-invoice.ts">create</a>({ ...params }) -> PayInvoiceCreateResponse</code>

## PayBadDebt

Types:

- <code><a href="./src/resources/accounts/pay-bad-debt.ts">PayBadDebtCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pay-bad-debt">client.accounts.payBadDebt.<a href="./src/resources/accounts/pay-bad-debt.ts">create</a>({ ...params }) -> PayBadDebtCreateResponse</code>

## Receipts

Methods:

- <code title="get /accounts/{account_id}/receipts/{receipt_id}/pdf">client.accounts.receipts.<a href="./src/resources/accounts/receipts.ts">pdf</a>(receiptID, { ...params }) -> Response</code>

## Invoices

Types:

- <code><a href="./src/resources/accounts/invoices.ts">InvoiceEditResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/invoices">client.accounts.invoices.<a href="./src/resources/accounts/invoices.ts">edit</a>({ ...params }) -> InvoiceEditResponse</code>

## ClientSecret

Types:

- <code><a href="./src/resources/accounts/client-secret.ts">ClientSecretCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/client-secret">client.accounts.clientSecret.<a href="./src/resources/accounts/client-secret.ts">create</a>({ ...params }) -> ClientSecretCreateResponse</code>
