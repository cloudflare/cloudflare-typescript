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
- <code title="put /accounts/{account_id}/members/{member_id}">client.accounts.members.<a href="./src/resources/accounts/members.ts">update</a>(memberId, { ...params }) -> Member</code>
- <code title="get /accounts/{account_id}/members">client.accounts.members.<a href="./src/resources/accounts/members.ts">list</a>({ ...params }) -> MembersV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/members/{member_id}">client.accounts.members.<a href="./src/resources/accounts/members.ts">delete</a>(memberId, { ...params }) -> MemberDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/members/{member_id}">client.accounts.members.<a href="./src/resources/accounts/members.ts">get</a>(memberId, { ...params }) -> Member</code>

## Roles

Methods:

- <code title="get /accounts/{account_id}/roles">client.accounts.roles.<a href="./src/resources/accounts/roles.ts">list</a>({ ...params }) -> RolesV4PagePaginationArray</code>
- <code title="get /accounts/{account_id}/roles/{role_id}">client.accounts.roles.<a href="./src/resources/accounts/roles.ts">get</a>(roleId, { ...params }) -> Role</code>

## Subscriptions

Types:

- <code><a href="./src/resources/accounts/subscriptions.ts">SubscriptionDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/subscriptions">client.accounts.subscriptions.<a href="./src/resources/accounts/subscriptions.ts">create</a>({ ...params }) -> Subscription</code>
- <code title="put /accounts/{account_id}/subscriptions/{subscription_identifier}">client.accounts.subscriptions.<a href="./src/resources/accounts/subscriptions.ts">update</a>(subscriptionIdentifier, { ...params }) -> Subscription</code>
- <code title="delete /accounts/{account_id}/subscriptions/{subscription_identifier}">client.accounts.subscriptions.<a href="./src/resources/accounts/subscriptions.ts">delete</a>(subscriptionIdentifier, { ...params }) -> SubscriptionDeleteResponse</code>
- <code title="get /accounts/{account_id}/subscriptions">client.accounts.subscriptions.<a href="./src/resources/accounts/subscriptions.ts">get</a>({ ...params }) -> SubscriptionsSinglePage</code>

## Tokens

Types:

- <code><a href="./src/resources/accounts/tokens/tokens.ts">TokenCreateResponse</a></code>
- <code><a href="./src/resources/accounts/tokens/tokens.ts">TokenDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/tokens/tokens.ts">TokenVerifyResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/tokens">client.accounts.tokens.<a href="./src/resources/accounts/tokens/tokens.ts">create</a>({ ...params }) -> TokenCreateResponse</code>
- <code title="put /accounts/{account_id}/tokens/{token_id}">client.accounts.tokens.<a href="./src/resources/accounts/tokens/tokens.ts">update</a>(tokenId, { ...params }) -> Token</code>
- <code title="get /accounts/{account_id}/tokens">client.accounts.tokens.<a href="./src/resources/accounts/tokens/tokens.ts">list</a>({ ...params }) -> TokensV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/tokens/{token_id}">client.accounts.tokens.<a href="./src/resources/accounts/tokens/tokens.ts">delete</a>(tokenId, { ...params }) -> TokenDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/tokens/{token_id}">client.accounts.tokens.<a href="./src/resources/accounts/tokens/tokens.ts">get</a>(tokenId, { ...params }) -> Token</code>
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

- <code title="put /accounts/{account_id}/tokens/{token_id}/value">client.accounts.tokens.value.<a href="./src/resources/accounts/tokens/value.ts">update</a>(tokenId, { ...params }) -> TokenValue</code>

## Logs

### Audit

Types:

- <code><a href="./src/resources/accounts/logs/audit.ts">AuditListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/logs/audit">client.accounts.logs.audit.<a href="./src/resources/accounts/logs/audit.ts">list</a>({ ...params }) -> AuditListResponsesCursorPaginationAfter</code>
