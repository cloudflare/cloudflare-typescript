# User

Types:

- <code><a href="./src/resources/user/user.ts">UserEditResponse</a></code>
- <code><a href="./src/resources/user/user.ts">UserGetResponse</a></code>

Methods:

- <code title="patch /user">client.user.<a href="./src/resources/user/user.ts">edit</a>({ ...params }) -> UserEditResponse</code>
- <code title="get /user">client.user.<a href="./src/resources/user/user.ts">get</a>() -> UserGetResponse</code>

## AuditLogs

Methods:

- <code title="get /user/audit_logs">client.user.auditLogs.<a href="./src/resources/user/audit-logs.ts">list</a>({ ...params }) -> AuditLogsV4PagePaginationArray</code>

## Billing

### History

Types:

- <code><a href="./src/resources/user/billing/history.ts">BillingHistory</a></code>

Methods:

- <code title="get /user/billing/history">client.user.billing.history.<a href="./src/resources/user/billing/history.ts">list</a>({ ...params }) -> BillingHistoriesV4PagePaginationArray</code>

### Profile

Types:

- <code><a href="./src/resources/user/billing/profile.ts">ProfileGetResponse</a></code>

Methods:

- <code title="get /user/billing/profile">client.user.billing.profile.<a href="./src/resources/user/billing/profile.ts">get</a>() -> ProfileGetResponse</code>

## Invites

Types:

- <code><a href="./src/resources/user/invites.ts">Invite</a></code>

Methods:

- <code title="get /user/invites">client.user.invites.<a href="./src/resources/user/invites.ts">list</a>() -> InvitesSinglePage</code>
- <code title="patch /user/invites/{invite_id}">client.user.invites.<a href="./src/resources/user/invites.ts">edit</a>(inviteId, { ...params }) -> Invite</code>
- <code title="get /user/invites/{invite_id}">client.user.invites.<a href="./src/resources/user/invites.ts">get</a>(inviteId) -> Invite</code>

## Organizations

Types:

- <code><a href="./src/resources/user/organizations.ts">Organization</a></code>
- <code><a href="./src/resources/user/organizations.ts">OrganizationDeleteResponse</a></code>
- <code><a href="./src/resources/user/organizations.ts">OrganizationGetResponse</a></code>

Methods:

- <code title="get /user/organizations">client.user.organizations.<a href="./src/resources/user/organizations.ts">list</a>({ ...params }) -> OrganizationsV4PagePaginationArray</code>
- <code title="delete /user/organizations/{organization_id}">client.user.organizations.<a href="./src/resources/user/organizations.ts">delete</a>(organizationId) -> OrganizationDeleteResponse</code>
- <code title="get /user/organizations/{organization_id}">client.user.organizations.<a href="./src/resources/user/organizations.ts">get</a>(organizationId) -> OrganizationGetResponse</code>

## Subscriptions

Types:

- <code><a href="./src/resources/user/subscriptions.ts">SubscriptionUpdateResponse</a></code>
- <code><a href="./src/resources/user/subscriptions.ts">SubscriptionDeleteResponse</a></code>

Methods:

- <code title="put /user/subscriptions/{identifier}">client.user.subscriptions.<a href="./src/resources/user/subscriptions.ts">update</a>(identifier, { ...params }) -> SubscriptionUpdateResponse</code>
- <code title="delete /user/subscriptions/{identifier}">client.user.subscriptions.<a href="./src/resources/user/subscriptions.ts">delete</a>(identifier) -> SubscriptionDeleteResponse</code>
- <code title="get /user/subscriptions">client.user.subscriptions.<a href="./src/resources/user/subscriptions.ts">get</a>() -> SubscriptionsSinglePage</code>

## Tokens

Types:

- <code><a href="./src/resources/user/tokens/tokens.ts">TokenCreateResponse</a></code>
- <code><a href="./src/resources/user/tokens/tokens.ts">TokenDeleteResponse</a></code>
- <code><a href="./src/resources/user/tokens/tokens.ts">TokenVerifyResponse</a></code>

Methods:

- <code title="post /user/tokens">client.user.tokens.<a href="./src/resources/user/tokens/tokens.ts">create</a>({ ...params }) -> TokenCreateResponse</code>
- <code title="put /user/tokens/{token_id}">client.user.tokens.<a href="./src/resources/user/tokens/tokens.ts">update</a>(tokenId, { ...params }) -> Token</code>
- <code title="get /user/tokens">client.user.tokens.<a href="./src/resources/user/tokens/tokens.ts">list</a>({ ...params }) -> TokensV4PagePaginationArray</code>
- <code title="delete /user/tokens/{token_id}">client.user.tokens.<a href="./src/resources/user/tokens/tokens.ts">delete</a>(tokenId) -> TokenDeleteResponse | null</code>
- <code title="get /user/tokens/{token_id}">client.user.tokens.<a href="./src/resources/user/tokens/tokens.ts">get</a>(tokenId) -> Token</code>
- <code title="get /user/tokens/verify">client.user.tokens.<a href="./src/resources/user/tokens/tokens.ts">verify</a>() -> TokenVerifyResponse</code>

### PermissionGroups

Types:

- <code><a href="./src/resources/user/tokens/permission-groups.ts">PermissionGroupListResponse</a></code>

Methods:

- <code title="get /user/tokens/permission_groups">client.user.tokens.permissionGroups.<a href="./src/resources/user/tokens/permission-groups.ts">list</a>({ ...params }) -> PermissionGroupListResponsesSinglePage</code>

### Value

Methods:

- <code title="put /user/tokens/{token_id}/value">client.user.tokens.value.<a href="./src/resources/user/tokens/value.ts">update</a>(tokenId, { ...params }) -> TokenValue</code>
