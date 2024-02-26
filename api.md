# Accounts

Types:

- <code><a href="./src/resources/accounts.ts">AccountUpdateResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountListResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}">client.accounts.<a href="./src/resources/accounts.ts">update</a>(accountId, { ...params }) -> AccountUpdateResponse</code>
- <code title="get /accounts">client.accounts.<a href="./src/resources/accounts.ts">list</a>({ ...params }) -> AccountListResponsesV4PagePaginationArray</code>
- <code title="get /accounts/{account_id}">client.accounts.<a href="./src/resources/accounts.ts">get</a>(accountId) -> AccountGetResponse</code>

# Certificates

Types:

- <code><a href="./src/resources/certificates.ts">CertificateCreateResponse</a></code>
- <code><a href="./src/resources/certificates.ts">CertificateListResponse</a></code>
- <code><a href="./src/resources/certificates.ts">CertificateDeleteResponse</a></code>
- <code><a href="./src/resources/certificates.ts">CertificateGetResponse</a></code>

Methods:

- <code title="post /certificates">client.certificates.<a href="./src/resources/certificates.ts">create</a>({ ...params }) -> CertificateCreateResponse</code>
- <code title="get /certificates">client.certificates.<a href="./src/resources/certificates.ts">list</a>() -> CertificateListResponse | null</code>
- <code title="delete /certificates/{certificate_id}">client.certificates.<a href="./src/resources/certificates.ts">delete</a>(certificateId) -> CertificateDeleteResponse</code>
- <code title="get /certificates/{certificate_id}">client.certificates.<a href="./src/resources/certificates.ts">get</a>(certificateId) -> CertificateGetResponse</code>

# IPs

Types:

- <code><a href="./src/resources/ips.ts">IPListResponse</a></code>

Methods:

- <code title="get /ips">client.ips.<a href="./src/resources/ips.ts">list</a>({ ...params }) -> IPListResponse</code>

# Memberships

Types:

- <code><a href="./src/resources/memberships.ts">MembershipUpdateResponse</a></code>
- <code><a href="./src/resources/memberships.ts">MembershipListResponse</a></code>
- <code><a href="./src/resources/memberships.ts">MembershipDeleteResponse</a></code>
- <code><a href="./src/resources/memberships.ts">MembershipGetResponse</a></code>

Methods:

- <code title="put /memberships/{membership_id}">client.memberships.<a href="./src/resources/memberships.ts">update</a>(membershipId, { ...params }) -> MembershipUpdateResponse</code>
- <code title="get /memberships">client.memberships.<a href="./src/resources/memberships.ts">list</a>({ ...params }) -> MembershipListResponsesV4PagePaginationArray</code>
- <code title="delete /memberships/{membership_id}">client.memberships.<a href="./src/resources/memberships.ts">delete</a>(membershipId) -> MembershipDeleteResponse</code>
- <code title="get /memberships/{membership_id}">client.memberships.<a href="./src/resources/memberships.ts">get</a>(membershipId) -> MembershipGetResponse</code>

# User

Types:

- <code><a href="./src/resources/user/user.ts">UserListResponse</a></code>
- <code><a href="./src/resources/user/user.ts">UserEditResponse</a></code>

Methods:

- <code title="get /user">client.user.<a href="./src/resources/user/user.ts">list</a>() -> UserListResponse</code>
- <code title="patch /user">client.user.<a href="./src/resources/user/user.ts">edit</a>({ ...params }) -> UserEditResponse</code>

## AuditLogs

Types:

- <code><a href="./src/resources/user/audit-logs.ts">AuditLogListResponse</a></code>

Methods:

- <code title="get /user/audit_logs">client.user.auditLogs.<a href="./src/resources/user/audit-logs.ts">list</a>({ ...params }) -> AuditLogListResponsesV4PagePaginationArray</code>

## Billing

### History

Types:

- <code><a href="./src/resources/user/billing/history.ts">HistoryListResponse</a></code>

Methods:

- <code title="get /user/billing/history">client.user.billing.history.<a href="./src/resources/user/billing/history.ts">list</a>({ ...params }) -> HistoryListResponsesV4PagePaginationArray</code>

### Profiles

Types:

- <code><a href="./src/resources/user/billing/profiles.ts">ProfileListResponse</a></code>

Methods:

- <code title="get /user/billing/profile">client.user.billing.profiles.<a href="./src/resources/user/billing/profiles.ts">list</a>() -> ProfileListResponse</code>

## Firewall

### AccessRules

#### Rules

Types:

- <code><a href="./src/resources/user/firewall/access-rules/rules.ts">RuleCreateResponse</a></code>
- <code><a href="./src/resources/user/firewall/access-rules/rules.ts">RuleListResponse</a></code>
- <code><a href="./src/resources/user/firewall/access-rules/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/user/firewall/access-rules/rules.ts">RuleEditResponse</a></code>

Methods:

- <code title="post /user/firewall/access_rules/rules">client.user.firewall.accessRules.rules.<a href="./src/resources/user/firewall/access-rules/rules.ts">create</a>({ ...params }) -> RuleCreateResponse | null</code>
- <code title="get /user/firewall/access_rules/rules">client.user.firewall.accessRules.rules.<a href="./src/resources/user/firewall/access-rules/rules.ts">list</a>({ ...params }) -> RuleListResponsesV4PagePaginationArray</code>
- <code title="delete /user/firewall/access_rules/rules/{identifier}">client.user.firewall.accessRules.rules.<a href="./src/resources/user/firewall/access-rules/rules.ts">delete</a>(identifier) -> RuleDeleteResponse | null</code>
- <code title="patch /user/firewall/access_rules/rules/{identifier}">client.user.firewall.accessRules.rules.<a href="./src/resources/user/firewall/access-rules/rules.ts">edit</a>(identifier, { ...params }) -> RuleEditResponse | null</code>

## Invites

Types:

- <code><a href="./src/resources/user/invites.ts">InviteListResponse</a></code>
- <code><a href="./src/resources/user/invites.ts">InviteEditResponse</a></code>
- <code><a href="./src/resources/user/invites.ts">InviteGetResponse</a></code>

Methods:

- <code title="get /user/invites">client.user.invites.<a href="./src/resources/user/invites.ts">list</a>() -> InviteListResponse | null</code>
- <code title="patch /user/invites/{invite_id}">client.user.invites.<a href="./src/resources/user/invites.ts">edit</a>(inviteId, { ...params }) -> InviteEditResponse</code>
- <code title="get /user/invites/{invite_id}">client.user.invites.<a href="./src/resources/user/invites.ts">get</a>(inviteId) -> InviteGetResponse</code>

## LoadBalancers

### Monitors

Types:

- <code><a href="./src/resources/user/load-balancers/monitors.ts">MonitorCreateResponse</a></code>
- <code><a href="./src/resources/user/load-balancers/monitors.ts">MonitorUpdateResponse</a></code>
- <code><a href="./src/resources/user/load-balancers/monitors.ts">MonitorListResponse</a></code>
- <code><a href="./src/resources/user/load-balancers/monitors.ts">MonitorDeleteResponse</a></code>
- <code><a href="./src/resources/user/load-balancers/monitors.ts">MonitorEditResponse</a></code>
- <code><a href="./src/resources/user/load-balancers/monitors.ts">MonitorGetResponse</a></code>
- <code><a href="./src/resources/user/load-balancers/monitors.ts">MonitorPreviewResponse</a></code>
- <code><a href="./src/resources/user/load-balancers/monitors.ts">MonitorReferencesResponse</a></code>

Methods:

- <code title="post /user/load_balancers/monitors">client.user.loadBalancers.monitors.<a href="./src/resources/user/load-balancers/monitors.ts">create</a>({ ...params }) -> MonitorCreateResponse</code>
- <code title="put /user/load_balancers/monitors/{monitor_id}">client.user.loadBalancers.monitors.<a href="./src/resources/user/load-balancers/monitors.ts">update</a>(monitorId, { ...params }) -> MonitorUpdateResponse</code>
- <code title="get /user/load_balancers/monitors">client.user.loadBalancers.monitors.<a href="./src/resources/user/load-balancers/monitors.ts">list</a>() -> MonitorListResponse | null</code>
- <code title="delete /user/load_balancers/monitors/{monitor_id}">client.user.loadBalancers.monitors.<a href="./src/resources/user/load-balancers/monitors.ts">delete</a>(monitorId) -> MonitorDeleteResponse</code>
- <code title="patch /user/load_balancers/monitors/{monitor_id}">client.user.loadBalancers.monitors.<a href="./src/resources/user/load-balancers/monitors.ts">edit</a>(monitorId, { ...params }) -> MonitorEditResponse</code>
- <code title="get /user/load_balancers/monitors/{monitor_id}">client.user.loadBalancers.monitors.<a href="./src/resources/user/load-balancers/monitors.ts">get</a>(monitorId) -> MonitorGetResponse</code>
- <code title="post /user/load_balancers/monitors/{monitor_id}/preview">client.user.loadBalancers.monitors.<a href="./src/resources/user/load-balancers/monitors.ts">preview</a>(monitorId, { ...params }) -> MonitorPreviewResponse</code>
- <code title="get /user/load_balancers/monitors/{monitor_id}/references">client.user.loadBalancers.monitors.<a href="./src/resources/user/load-balancers/monitors.ts">references</a>(monitorId) -> MonitorReferencesResponse | null</code>

### Pools

Types:

- <code><a href="./src/resources/user/load-balancers/pools.ts">PoolCreateResponse</a></code>
- <code><a href="./src/resources/user/load-balancers/pools.ts">PoolUpdateResponse</a></code>
- <code><a href="./src/resources/user/load-balancers/pools.ts">PoolListResponse</a></code>
- <code><a href="./src/resources/user/load-balancers/pools.ts">PoolDeleteResponse</a></code>
- <code><a href="./src/resources/user/load-balancers/pools.ts">PoolEditResponse</a></code>
- <code><a href="./src/resources/user/load-balancers/pools.ts">PoolGetResponse</a></code>
- <code><a href="./src/resources/user/load-balancers/pools.ts">PoolHealthResponse</a></code>
- <code><a href="./src/resources/user/load-balancers/pools.ts">PoolPreviewResponse</a></code>
- <code><a href="./src/resources/user/load-balancers/pools.ts">PoolReferencesResponse</a></code>

Methods:

- <code title="post /user/load_balancers/pools">client.user.loadBalancers.pools.<a href="./src/resources/user/load-balancers/pools.ts">create</a>({ ...params }) -> PoolCreateResponse</code>
- <code title="put /user/load_balancers/pools/{pool_id}">client.user.loadBalancers.pools.<a href="./src/resources/user/load-balancers/pools.ts">update</a>(poolId, { ...params }) -> PoolUpdateResponse</code>
- <code title="get /user/load_balancers/pools">client.user.loadBalancers.pools.<a href="./src/resources/user/load-balancers/pools.ts">list</a>({ ...params }) -> PoolListResponse | null</code>
- <code title="delete /user/load_balancers/pools/{pool_id}">client.user.loadBalancers.pools.<a href="./src/resources/user/load-balancers/pools.ts">delete</a>(poolId) -> PoolDeleteResponse</code>
- <code title="patch /user/load_balancers/pools/{pool_id}">client.user.loadBalancers.pools.<a href="./src/resources/user/load-balancers/pools.ts">edit</a>(poolId, { ...params }) -> PoolEditResponse</code>
- <code title="get /user/load_balancers/pools/{pool_id}">client.user.loadBalancers.pools.<a href="./src/resources/user/load-balancers/pools.ts">get</a>(poolId) -> PoolGetResponse</code>
- <code title="get /user/load_balancers/pools/{pool_id}/health">client.user.loadBalancers.pools.<a href="./src/resources/user/load-balancers/pools.ts">health</a>(poolId) -> PoolHealthResponse</code>
- <code title="post /user/load_balancers/pools/{pool_id}/preview">client.user.loadBalancers.pools.<a href="./src/resources/user/load-balancers/pools.ts">preview</a>(poolId, { ...params }) -> PoolPreviewResponse</code>
- <code title="get /user/load_balancers/pools/{pool_id}/references">client.user.loadBalancers.pools.<a href="./src/resources/user/load-balancers/pools.ts">references</a>(poolId) -> PoolReferencesResponse | null</code>

### Preview

Types:

- <code><a href="./src/resources/user/load-balancers/preview.ts">PreviewGetResponse</a></code>

Methods:

- <code title="get /user/load_balancers/preview/{preview_id}">client.user.loadBalancers.preview.<a href="./src/resources/user/load-balancers/preview.ts">get</a>(previewId) -> PreviewGetResponse</code>

## LoadBalancingAnalytics

### Events

Types:

- <code><a href="./src/resources/user/load-balancing-analytics/events.ts">EventListResponse</a></code>

Methods:

- <code title="get /user/load_balancing_analytics/events">client.user.loadBalancingAnalytics.events.<a href="./src/resources/user/load-balancing-analytics/events.ts">list</a>({ ...params }) -> EventListResponse | null</code>

## Organizations

Types:

- <code><a href="./src/resources/user/organizations.ts">OrganizationListResponse</a></code>
- <code><a href="./src/resources/user/organizations.ts">OrganizationDeleteResponse</a></code>
- <code><a href="./src/resources/user/organizations.ts">OrganizationGetResponse</a></code>

Methods:

- <code title="get /user/organizations">client.user.organizations.<a href="./src/resources/user/organizations.ts">list</a>({ ...params }) -> OrganizationListResponsesV4PagePaginationArray</code>
- <code title="delete /user/organizations/{organization_id}">client.user.organizations.<a href="./src/resources/user/organizations.ts">delete</a>(organizationId) -> OrganizationDeleteResponse</code>
- <code title="get /user/organizations/{organization_id}">client.user.organizations.<a href="./src/resources/user/organizations.ts">get</a>(organizationId) -> OrganizationGetResponse</code>

## Subscriptions

Types:

- <code><a href="./src/resources/user/subscriptions.ts">SubscriptionUpdateResponse</a></code>
- <code><a href="./src/resources/user/subscriptions.ts">SubscriptionListResponse</a></code>
- <code><a href="./src/resources/user/subscriptions.ts">SubscriptionDeleteResponse</a></code>
- <code><a href="./src/resources/user/subscriptions.ts">SubscriptionEditResponse</a></code>

Methods:

- <code title="put /user/subscriptions/{identifier}">client.user.subscriptions.<a href="./src/resources/user/subscriptions.ts">update</a>(identifier, { ...params }) -> SubscriptionUpdateResponse</code>
- <code title="get /user/subscriptions">client.user.subscriptions.<a href="./src/resources/user/subscriptions.ts">list</a>() -> SubscriptionListResponse | null</code>
- <code title="delete /user/subscriptions/{identifier}">client.user.subscriptions.<a href="./src/resources/user/subscriptions.ts">delete</a>(identifier) -> SubscriptionDeleteResponse</code>
- <code title="put /zones/{identifier}/subscription">client.user.subscriptions.<a href="./src/resources/user/subscriptions.ts">edit</a>(identifier, { ...params }) -> SubscriptionEditResponse</code>

## Tokens

Types:

- <code><a href="./src/resources/user/tokens/tokens.ts">TokenCreateResponse</a></code>
- <code><a href="./src/resources/user/tokens/tokens.ts">TokenUpdateResponse</a></code>
- <code><a href="./src/resources/user/tokens/tokens.ts">TokenListResponse</a></code>
- <code><a href="./src/resources/user/tokens/tokens.ts">TokenDeleteResponse</a></code>
- <code><a href="./src/resources/user/tokens/tokens.ts">TokenGetResponse</a></code>
- <code><a href="./src/resources/user/tokens/tokens.ts">TokenVerifyResponse</a></code>

Methods:

- <code title="post /user/tokens">client.user.tokens.<a href="./src/resources/user/tokens/tokens.ts">create</a>({ ...params }) -> TokenCreateResponse</code>
- <code title="put /user/tokens/{token_id}">client.user.tokens.<a href="./src/resources/user/tokens/tokens.ts">update</a>(tokenId, { ...params }) -> TokenUpdateResponse</code>
- <code title="get /user/tokens">client.user.tokens.<a href="./src/resources/user/tokens/tokens.ts">list</a>({ ...params }) -> TokenListResponsesV4PagePaginationArray</code>
- <code title="delete /user/tokens/{token_id}">client.user.tokens.<a href="./src/resources/user/tokens/tokens.ts">delete</a>(tokenId) -> TokenDeleteResponse | null</code>
- <code title="get /user/tokens/{token_id}">client.user.tokens.<a href="./src/resources/user/tokens/tokens.ts">get</a>(tokenId) -> TokenGetResponse</code>
- <code title="get /user/tokens/verify">client.user.tokens.<a href="./src/resources/user/tokens/tokens.ts">verify</a>() -> TokenVerifyResponse</code>

### PermissionGroups

Types:

- <code><a href="./src/resources/user/tokens/permission-groups.ts">PermissionGroupListResponse</a></code>

Methods:

- <code title="get /user/tokens/permission_groups">client.user.tokens.permissionGroups.<a href="./src/resources/user/tokens/permission-groups.ts">list</a>() -> PermissionGroupListResponse | null</code>

### Values

Types:

- <code><a href="./src/resources/user/tokens/values.ts">ValueUpdateResponse</a></code>

Methods:

- <code title="put /user/tokens/{token_id}/value">client.user.tokens.values.<a href="./src/resources/user/tokens/values.ts">update</a>(tokenId, { ...params }) -> ValueUpdateResponse</code>

# Zones

Types:

- <code><a href="./src/resources/zones/zones.ts">ZoneCreateResponse</a></code>
- <code><a href="./src/resources/zones/zones.ts">ZoneListResponse</a></code>
- <code><a href="./src/resources/zones/zones.ts">ZoneDeleteResponse</a></code>
- <code><a href="./src/resources/zones/zones.ts">ZoneEditResponse</a></code>
- <code><a href="./src/resources/zones/zones.ts">ZoneGetResponse</a></code>

Methods:

- <code title="post /zones">client.zones.<a href="./src/resources/zones/zones.ts">create</a>({ ...params }) -> ZoneCreateResponse</code>
- <code title="get /zones">client.zones.<a href="./src/resources/zones/zones.ts">list</a>({ ...params }) -> ZoneListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}">client.zones.<a href="./src/resources/zones/zones.ts">delete</a>(zoneId) -> ZoneDeleteResponse | null</code>
- <code title="patch /zones/{zone_id}">client.zones.<a href="./src/resources/zones/zones.ts">edit</a>(zoneId, { ...params }) -> ZoneEditResponse</code>
- <code title="get /zones/{zone_id}">client.zones.<a href="./src/resources/zones/zones.ts">get</a>(zoneId) -> ZoneGetResponse</code>

## CustomNameservers

Types:

- <code><a href="./src/resources/zones/custom-nameservers.ts">CustomNameserverUpdateResponse</a></code>
- <code><a href="./src/resources/zones/custom-nameservers.ts">CustomNameserverGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/custom_ns">client.zones.customNameservers.<a href="./src/resources/zones/custom-nameservers.ts">update</a>(zoneId, { ...params }) -> CustomNameserverUpdateResponse | null</code>
- <code title="get /zones/{zone_id}/custom_ns">client.zones.customNameservers.<a href="./src/resources/zones/custom-nameservers.ts">get</a>(zoneId) -> CustomNameserverGetResponse | null</code>

## Holds

Types:

- <code><a href="./src/resources/zones/holds.ts">HoldCreateResponse</a></code>
- <code><a href="./src/resources/zones/holds.ts">HoldDeleteResponse</a></code>
- <code><a href="./src/resources/zones/holds.ts">HoldGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/hold">client.zones.holds.<a href="./src/resources/zones/holds.ts">create</a>(zoneId, { ...params }) -> HoldCreateResponse</code>
- <code title="delete /zones/{zone_id}/hold">client.zones.holds.<a href="./src/resources/zones/holds.ts">delete</a>(zoneId, { ...params }) -> HoldDeleteResponse</code>
- <code title="get /zones/{zone_id}/hold">client.zones.holds.<a href="./src/resources/zones/holds.ts">get</a>(zoneId) -> HoldGetResponse</code>

# LoadBalancers

Types:

- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancerCreateResponse</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancerUpdateResponse</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancerListResponse</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancerDeleteResponse</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancerEditResponse</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancerGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/load_balancers">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">create</a>(zoneId, { ...params }) -> LoadBalancerCreateResponse</code>
- <code title="put /zones/{zone_id}/load_balancers/{load_balancer_id}">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">update</a>(zoneId, loadBalancerId, { ...params }) -> LoadBalancerUpdateResponse</code>
- <code title="get /zones/{zone_id}/load_balancers">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">list</a>(zoneId) -> LoadBalancerListResponse | null</code>
- <code title="delete /zones/{zone_id}/load_balancers/{load_balancer_id}">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">delete</a>(zoneId, loadBalancerId) -> LoadBalancerDeleteResponse</code>
- <code title="patch /zones/{zone_id}/load_balancers/{load_balancer_id}">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">edit</a>(zoneId, loadBalancerId, { ...params }) -> LoadBalancerEditResponse</code>
- <code title="get /zones/{zone_id}/load_balancers/{load_balancer_id}">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">get</a>(zoneId, loadBalancerId) -> LoadBalancerGetResponse</code>

## Monitors

Types:

- <code><a href="./src/resources/load-balancers/monitors/monitors.ts">MonitorCreateResponse</a></code>
- <code><a href="./src/resources/load-balancers/monitors/monitors.ts">MonitorUpdateResponse</a></code>
- <code><a href="./src/resources/load-balancers/monitors/monitors.ts">MonitorListResponse</a></code>
- <code><a href="./src/resources/load-balancers/monitors/monitors.ts">MonitorDeleteResponse</a></code>
- <code><a href="./src/resources/load-balancers/monitors/monitors.ts">MonitorEditResponse</a></code>
- <code><a href="./src/resources/load-balancers/monitors/monitors.ts">MonitorGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/load_balancers/monitors">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">create</a>(accountId, { ...params }) -> MonitorCreateResponse</code>
- <code title="put /accounts/{account_id}/load_balancers/monitors/{monitor_id}">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">update</a>(accountId, monitorId, { ...params }) -> MonitorUpdateResponse</code>
- <code title="get /accounts/{account_id}/load_balancers/monitors">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">list</a>(accountId) -> MonitorListResponse | null</code>
- <code title="delete /accounts/{account_id}/load_balancers/monitors/{monitor_id}">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">delete</a>(accountId, monitorId) -> MonitorDeleteResponse</code>
- <code title="patch /accounts/{account_id}/load_balancers/monitors/{monitor_id}">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">edit</a>(accountId, monitorId, { ...params }) -> MonitorEditResponse</code>
- <code title="get /accounts/{account_id}/load_balancers/monitors/{monitor_id}">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">get</a>(accountId, monitorId) -> MonitorGetResponse</code>

### Previews

Types:

- <code><a href="./src/resources/load-balancers/monitors/previews.ts">PreviewCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/load_balancers/monitors/{monitor_id}/preview">client.loadBalancers.monitors.previews.<a href="./src/resources/load-balancers/monitors/previews.ts">create</a>(accountId, monitorId, { ...params }) -> PreviewCreateResponse</code>

### References

Types:

- <code><a href="./src/resources/load-balancers/monitors/references.ts">ReferenceListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/load_balancers/monitors/{monitor_id}/references">client.loadBalancers.monitors.references.<a href="./src/resources/load-balancers/monitors/references.ts">list</a>(accountId, monitorId) -> ReferenceListResponse | null</code>

## Pools

Types:

- <code><a href="./src/resources/load-balancers/pools/pools.ts">PoolCreateResponse</a></code>
- <code><a href="./src/resources/load-balancers/pools/pools.ts">PoolUpdateResponse</a></code>
- <code><a href="./src/resources/load-balancers/pools/pools.ts">PoolListResponse</a></code>
- <code><a href="./src/resources/load-balancers/pools/pools.ts">PoolDeleteResponse</a></code>
- <code><a href="./src/resources/load-balancers/pools/pools.ts">PoolEditResponse</a></code>
- <code><a href="./src/resources/load-balancers/pools/pools.ts">PoolGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/load_balancers/pools">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">create</a>(accountId, { ...params }) -> PoolCreateResponse</code>
- <code title="put /accounts/{account_id}/load_balancers/pools/{pool_id}">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">update</a>(accountId, poolId, { ...params }) -> PoolUpdateResponse</code>
- <code title="get /accounts/{account_id}/load_balancers/pools">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">list</a>(accountId, { ...params }) -> PoolListResponse | null</code>
- <code title="delete /accounts/{account_id}/load_balancers/pools/{pool_id}">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">delete</a>(accountId, poolId) -> PoolDeleteResponse</code>
- <code title="patch /accounts/{account_id}/load_balancers/pools/{pool_id}">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">edit</a>(accountId, poolId, { ...params }) -> PoolEditResponse</code>
- <code title="get /accounts/{account_id}/load_balancers/pools/{pool_id}">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">get</a>(accountId, poolId) -> PoolGetResponse</code>

### Health

Types:

- <code><a href="./src/resources/load-balancers/pools/health.ts">HealthCreateResponse</a></code>
- <code><a href="./src/resources/load-balancers/pools/health.ts">HealthGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/load_balancers/pools/{pool_id}/preview">client.loadBalancers.pools.health.<a href="./src/resources/load-balancers/pools/health.ts">create</a>(accountId, poolId, { ...params }) -> HealthCreateResponse</code>
- <code title="get /accounts/{account_id}/load_balancers/pools/{pool_id}/health">client.loadBalancers.pools.health.<a href="./src/resources/load-balancers/pools/health.ts">get</a>(accountId, poolId) -> HealthGetResponse</code>

### References

Types:

- <code><a href="./src/resources/load-balancers/pools/references.ts">ReferenceListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/load_balancers/pools/{pool_id}/references">client.loadBalancers.pools.references.<a href="./src/resources/load-balancers/pools/references.ts">list</a>(accountId, poolId) -> ReferenceListResponse | null</code>

## Previews

Types:

- <code><a href="./src/resources/load-balancers/previews.ts">PreviewGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/load_balancers/preview/{preview_id}">client.loadBalancers.previews.<a href="./src/resources/load-balancers/previews.ts">get</a>(accountId, previewId) -> PreviewGetResponse</code>

## Regions

Types:

- <code><a href="./src/resources/load-balancers/regions.ts">RegionListResponse</a></code>
- <code><a href="./src/resources/load-balancers/regions.ts">RegionGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/load_balancers/regions">client.loadBalancers.regions.<a href="./src/resources/load-balancers/regions.ts">list</a>(accountId, { ...params }) -> RegionListResponse</code>
- <code title="get /accounts/{account_id}/load_balancers/regions/{region_id}">client.loadBalancers.regions.<a href="./src/resources/load-balancers/regions.ts">get</a>(accountId, regionId) -> RegionGetResponse</code>

## Searches

Types:

- <code><a href="./src/resources/load-balancers/searches.ts">SearchListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/load_balancers/search">client.loadBalancers.searches.<a href="./src/resources/load-balancers/searches.ts">list</a>(accountId, { ...params }) -> SearchListResponse | null</code>

# Access

## Applications

Types:

- <code><a href="./src/resources/access/applications/applications.ts">ApplicationCreateResponse</a></code>
- <code><a href="./src/resources/access/applications/applications.ts">ApplicationUpdateResponse</a></code>
- <code><a href="./src/resources/access/applications/applications.ts">ApplicationListResponse</a></code>
- <code><a href="./src/resources/access/applications/applications.ts">ApplicationDeleteResponse</a></code>
- <code><a href="./src/resources/access/applications/applications.ts">ApplicationGetResponse</a></code>
- <code><a href="./src/resources/access/applications/applications.ts">ApplicationRevokeTokensResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/apps">client.access.applications.<a href="./src/resources/access/applications/applications.ts">create</a>({ ...params }) -> ApplicationCreateResponse</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}">client.access.applications.<a href="./src/resources/access/applications/applications.ts">update</a>(appId, { ...params }) -> ApplicationUpdateResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps">client.access.applications.<a href="./src/resources/access/applications/applications.ts">list</a>({ ...params }) -> ApplicationListResponse | null</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}">client.access.applications.<a href="./src/resources/access/applications/applications.ts">delete</a>(appId, { ...params }) -> ApplicationDeleteResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}">client.access.applications.<a href="./src/resources/access/applications/applications.ts">get</a>(appId, { ...params }) -> ApplicationGetResponse</code>
- <code title="post /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}/revoke_tokens">client.access.applications.<a href="./src/resources/access/applications/applications.ts">revokeTokens</a>(appId, { ...params }) -> ApplicationRevokeTokensResponse | null</code>

### CAs

Types:

- <code><a href="./src/resources/access/applications/cas.ts">CACreateResponse</a></code>
- <code><a href="./src/resources/access/applications/cas.ts">CAListResponse</a></code>
- <code><a href="./src/resources/access/applications/cas.ts">CADeleteResponse</a></code>
- <code><a href="./src/resources/access/applications/cas.ts">CAGetResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid}/ca">client.access.applications.cas.<a href="./src/resources/access/applications/cas.ts">create</a>(uuid, { ...params }) -> CACreateResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps/ca">client.access.applications.cas.<a href="./src/resources/access/applications/cas.ts">list</a>({ ...params }) -> CAListResponse | null</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid}/ca">client.access.applications.cas.<a href="./src/resources/access/applications/cas.ts">delete</a>(uuid, { ...params }) -> CADeleteResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid}/ca">client.access.applications.cas.<a href="./src/resources/access/applications/cas.ts">get</a>(uuid, { ...params }) -> CAGetResponse</code>

### UserPolicyChecks

Types:

- <code><a href="./src/resources/access/applications/user-policy-checks.ts">UserPolicyCheckListResponse</a></code>

Methods:

- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}/user_policy_checks">client.access.applications.userPolicyChecks.<a href="./src/resources/access/applications/user-policy-checks.ts">list</a>(appId, { ...params }) -> UserPolicyCheckListResponse</code>

### Policies

Types:

- <code><a href="./src/resources/access/applications/policies.ts">PolicyCreateResponse</a></code>
- <code><a href="./src/resources/access/applications/policies.ts">PolicyUpdateResponse</a></code>
- <code><a href="./src/resources/access/applications/policies.ts">PolicyListResponse</a></code>
- <code><a href="./src/resources/access/applications/policies.ts">PolicyDeleteResponse</a></code>
- <code><a href="./src/resources/access/applications/policies.ts">PolicyGetResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid}/policies">client.access.applications.policies.<a href="./src/resources/access/applications/policies.ts">create</a>(uuid, { ...params }) -> PolicyCreateResponse</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid1}/policies/{uuid}">client.access.applications.policies.<a href="./src/resources/access/applications/policies.ts">update</a>(uuid1, uuid, { ...params }) -> PolicyUpdateResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid}/policies">client.access.applications.policies.<a href="./src/resources/access/applications/policies.ts">list</a>(uuid, { ...params }) -> PolicyListResponse | null</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid1}/policies/{uuid}">client.access.applications.policies.<a href="./src/resources/access/applications/policies.ts">delete</a>(uuid1, uuid, { ...params }) -> PolicyDeleteResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid1}/policies/{uuid}">client.access.applications.policies.<a href="./src/resources/access/applications/policies.ts">get</a>(uuid1, uuid, { ...params }) -> PolicyGetResponse</code>

## Certificates

Types:

- <code><a href="./src/resources/access/certificates/certificates.ts">CertificateCreateResponse</a></code>
- <code><a href="./src/resources/access/certificates/certificates.ts">CertificateUpdateResponse</a></code>
- <code><a href="./src/resources/access/certificates/certificates.ts">CertificateListResponse</a></code>
- <code><a href="./src/resources/access/certificates/certificates.ts">CertificateDeleteResponse</a></code>
- <code><a href="./src/resources/access/certificates/certificates.ts">CertificateGetResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/certificates">client.access.certificates.<a href="./src/resources/access/certificates/certificates.ts">create</a>({ ...params }) -> CertificateCreateResponse</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/access/certificates/{uuid}">client.access.certificates.<a href="./src/resources/access/certificates/certificates.ts">update</a>(uuid, { ...params }) -> CertificateUpdateResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/certificates">client.access.certificates.<a href="./src/resources/access/certificates/certificates.ts">list</a>({ ...params }) -> CertificateListResponse | null</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/certificates/{uuid}">client.access.certificates.<a href="./src/resources/access/certificates/certificates.ts">delete</a>(uuid, { ...params }) -> CertificateDeleteResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/certificates/{uuid}">client.access.certificates.<a href="./src/resources/access/certificates/certificates.ts">get</a>(uuid, { ...params }) -> CertificateGetResponse</code>

### Settings

Types:

- <code><a href="./src/resources/access/certificates/settings.ts">SettingUpdateResponse</a></code>
- <code><a href="./src/resources/access/certificates/settings.ts">SettingListResponse</a></code>

Methods:

- <code title="put /{account_or_zone}/{account_or_zone_id}/access/certificates/settings">client.access.certificates.settings.<a href="./src/resources/access/certificates/settings.ts">update</a>({ ...params }) -> SettingUpdateResponse | null</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/certificates/settings">client.access.certificates.settings.<a href="./src/resources/access/certificates/settings.ts">list</a>({ ...params }) -> SettingListResponse | null</code>

## Groups

Types:

- <code><a href="./src/resources/access/groups.ts">GroupCreateResponse</a></code>
- <code><a href="./src/resources/access/groups.ts">GroupUpdateResponse</a></code>
- <code><a href="./src/resources/access/groups.ts">GroupListResponse</a></code>
- <code><a href="./src/resources/access/groups.ts">GroupDeleteResponse</a></code>
- <code><a href="./src/resources/access/groups.ts">GroupGetResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/groups">client.access.groups.<a href="./src/resources/access/groups.ts">create</a>({ ...params }) -> GroupCreateResponse</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/access/groups/{uuid}">client.access.groups.<a href="./src/resources/access/groups.ts">update</a>(uuid, { ...params }) -> GroupUpdateResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/groups">client.access.groups.<a href="./src/resources/access/groups.ts">list</a>({ ...params }) -> GroupListResponse | null</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/groups/{uuid}">client.access.groups.<a href="./src/resources/access/groups.ts">delete</a>(uuid, { ...params }) -> GroupDeleteResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/groups/{uuid}">client.access.groups.<a href="./src/resources/access/groups.ts">get</a>(uuid, { ...params }) -> GroupGetResponse</code>

## IdentityProviders

Types:

- <code><a href="./src/resources/access/identity-providers.ts">IdentityProviderCreateResponse</a></code>
- <code><a href="./src/resources/access/identity-providers.ts">IdentityProviderUpdateResponse</a></code>
- <code><a href="./src/resources/access/identity-providers.ts">IdentityProviderListResponse</a></code>
- <code><a href="./src/resources/access/identity-providers.ts">IdentityProviderDeleteResponse</a></code>
- <code><a href="./src/resources/access/identity-providers.ts">IdentityProviderGetResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/identity_providers">client.access.identityProviders.<a href="./src/resources/access/identity-providers.ts">create</a>({ ...params }) -> IdentityProviderCreateResponse</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/access/identity_providers/{uuid}">client.access.identityProviders.<a href="./src/resources/access/identity-providers.ts">update</a>(uuid, { ...params }) -> IdentityProviderUpdateResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/identity_providers">client.access.identityProviders.<a href="./src/resources/access/identity-providers.ts">list</a>({ ...params }) -> IdentityProviderListResponse | null</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/identity_providers/{uuid}">client.access.identityProviders.<a href="./src/resources/access/identity-providers.ts">delete</a>(uuid, { ...params }) -> IdentityProviderDeleteResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/identity_providers/{uuid}">client.access.identityProviders.<a href="./src/resources/access/identity-providers.ts">get</a>(uuid, { ...params }) -> IdentityProviderGetResponse</code>

## Organizations

Types:

- <code><a href="./src/resources/access/organizations.ts">OrganizationCreateResponse</a></code>
- <code><a href="./src/resources/access/organizations.ts">OrganizationUpdateResponse</a></code>
- <code><a href="./src/resources/access/organizations.ts">OrganizationListResponse</a></code>
- <code><a href="./src/resources/access/organizations.ts">OrganizationRevokeUsersResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/organizations">client.access.organizations.<a href="./src/resources/access/organizations.ts">create</a>({ ...params }) -> OrganizationCreateResponse</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/access/organizations">client.access.organizations.<a href="./src/resources/access/organizations.ts">update</a>({ ...params }) -> OrganizationUpdateResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/organizations">client.access.organizations.<a href="./src/resources/access/organizations.ts">list</a>({ ...params }) -> OrganizationListResponse</code>
- <code title="post /{account_or_zone}/{account_or_zone_id}/access/organizations/revoke_user">client.access.organizations.<a href="./src/resources/access/organizations.ts">revokeUsers</a>({ ...params }) -> OrganizationRevokeUsersResponse</code>

## ServiceTokens

Types:

- <code><a href="./src/resources/access/service-tokens.ts">ServiceTokenCreateResponse</a></code>
- <code><a href="./src/resources/access/service-tokens.ts">ServiceTokenUpdateResponse</a></code>
- <code><a href="./src/resources/access/service-tokens.ts">ServiceTokenListResponse</a></code>
- <code><a href="./src/resources/access/service-tokens.ts">ServiceTokenDeleteResponse</a></code>
- <code><a href="./src/resources/access/service-tokens.ts">ServiceTokenRefreshResponse</a></code>
- <code><a href="./src/resources/access/service-tokens.ts">ServiceTokenRotateResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/service_tokens">client.access.serviceTokens.<a href="./src/resources/access/service-tokens.ts">create</a>({ ...params }) -> ServiceTokenCreateResponse</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/access/service_tokens/{uuid}">client.access.serviceTokens.<a href="./src/resources/access/service-tokens.ts">update</a>(uuid, { ...params }) -> ServiceTokenUpdateResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/service_tokens">client.access.serviceTokens.<a href="./src/resources/access/service-tokens.ts">list</a>({ ...params }) -> ServiceTokenListResponse | null</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/service_tokens/{uuid}">client.access.serviceTokens.<a href="./src/resources/access/service-tokens.ts">delete</a>(uuid, { ...params }) -> ServiceTokenDeleteResponse</code>
- <code title="post /accounts/{identifier}/access/service_tokens/{uuid}/refresh">client.access.serviceTokens.<a href="./src/resources/access/service-tokens.ts">refresh</a>(identifier, uuid) -> ServiceTokenRefreshResponse</code>
- <code title="post /accounts/{identifier}/access/service_tokens/{uuid}/rotate">client.access.serviceTokens.<a href="./src/resources/access/service-tokens.ts">rotate</a>(identifier, uuid) -> ServiceTokenRotateResponse</code>

## Bookmarks

Types:

- <code><a href="./src/resources/access/bookmarks.ts">BookmarkCreateResponse</a></code>
- <code><a href="./src/resources/access/bookmarks.ts">BookmarkUpdateResponse</a></code>
- <code><a href="./src/resources/access/bookmarks.ts">BookmarkListResponse</a></code>
- <code><a href="./src/resources/access/bookmarks.ts">BookmarkDeleteResponse</a></code>
- <code><a href="./src/resources/access/bookmarks.ts">BookmarkGetResponse</a></code>

Methods:

- <code title="post /accounts/{identifier}/access/bookmarks/{uuid}">client.access.bookmarks.<a href="./src/resources/access/bookmarks.ts">create</a>(identifier, uuid) -> BookmarkCreateResponse</code>
- <code title="put /accounts/{identifier}/access/bookmarks/{uuid}">client.access.bookmarks.<a href="./src/resources/access/bookmarks.ts">update</a>(identifier, uuid) -> BookmarkUpdateResponse</code>
- <code title="get /accounts/{identifier}/access/bookmarks">client.access.bookmarks.<a href="./src/resources/access/bookmarks.ts">list</a>(identifier) -> BookmarkListResponse | null</code>
- <code title="delete /accounts/{identifier}/access/bookmarks/{uuid}">client.access.bookmarks.<a href="./src/resources/access/bookmarks.ts">delete</a>(identifier, uuid) -> BookmarkDeleteResponse</code>
- <code title="get /accounts/{identifier}/access/bookmarks/{uuid}">client.access.bookmarks.<a href="./src/resources/access/bookmarks.ts">get</a>(identifier, uuid) -> BookmarkGetResponse</code>

## Keys

Types:

- <code><a href="./src/resources/access/keys.ts">KeyUpdateResponse</a></code>
- <code><a href="./src/resources/access/keys.ts">KeyListResponse</a></code>
- <code><a href="./src/resources/access/keys.ts">KeyRotateResponse</a></code>

Methods:

- <code title="put /accounts/{identifier}/access/keys">client.access.keys.<a href="./src/resources/access/keys.ts">update</a>(identifier, { ...params }) -> KeyUpdateResponse</code>
- <code title="get /accounts/{identifier}/access/keys">client.access.keys.<a href="./src/resources/access/keys.ts">list</a>(identifier) -> KeyListResponse</code>
- <code title="post /accounts/{identifier}/access/keys/rotate">client.access.keys.<a href="./src/resources/access/keys.ts">rotate</a>(identifier) -> KeyRotateResponse</code>

## Logs

### AccessRequests

Types:

- <code><a href="./src/resources/access/logs/access-requests.ts">AccessRequestListResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/access/logs/access_requests">client.access.logs.accessRequests.<a href="./src/resources/access/logs/access-requests.ts">list</a>(identifier) -> AccessRequestListResponse | null</code>

## Seats

Types:

- <code><a href="./src/resources/access/seats.ts">SeatEditResponse</a></code>

Methods:

- <code title="patch /accounts/{identifier}/access/seats">client.access.seats.<a href="./src/resources/access/seats.ts">edit</a>(identifier, [ ...body ]) -> SeatEditResponse | null</code>

## Users

Types:

- <code><a href="./src/resources/access/users/users.ts">UserListResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/access/users">client.access.users.<a href="./src/resources/access/users/users.ts">list</a>(identifier) -> UserListResponse | null</code>

### ActiveSessions

Types:

- <code><a href="./src/resources/access/users/active-sessions.ts">ActiveSessionListResponse</a></code>
- <code><a href="./src/resources/access/users/active-sessions.ts">ActiveSessionGetResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/access/users/{id}/active_sessions">client.access.users.activeSessions.<a href="./src/resources/access/users/active-sessions.ts">list</a>(identifier, id) -> ActiveSessionListResponse | null</code>
- <code title="get /accounts/{identifier}/access/users/{id}/active_sessions/{nonce}">client.access.users.activeSessions.<a href="./src/resources/access/users/active-sessions.ts">get</a>(identifier, id, nonce) -> ActiveSessionGetResponse</code>

### LastSeenIdentity

Types:

- <code><a href="./src/resources/access/users/last-seen-identity.ts">LastSeenIdentityListResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/access/users/{id}/last_seen_identity">client.access.users.lastSeenIdentity.<a href="./src/resources/access/users/last-seen-identity.ts">list</a>(identifier, id) -> LastSeenIdentityListResponse</code>

### FailedLogins

Types:

- <code><a href="./src/resources/access/users/failed-logins.ts">FailedLoginListResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/access/users/{id}/failed_logins">client.access.users.failedLogins.<a href="./src/resources/access/users/failed-logins.ts">list</a>(identifier, id) -> FailedLoginListResponse | null</code>

## CustomPages

Types:

- <code><a href="./src/resources/access/custom-pages.ts">CustomPageCreateResponse</a></code>
- <code><a href="./src/resources/access/custom-pages.ts">CustomPageUpdateResponse</a></code>
- <code><a href="./src/resources/access/custom-pages.ts">CustomPageListResponse</a></code>
- <code><a href="./src/resources/access/custom-pages.ts">CustomPageDeleteResponse</a></code>
- <code><a href="./src/resources/access/custom-pages.ts">CustomPageGetResponse</a></code>

Methods:

- <code title="post /accounts/{identifier}/access/custom_pages">client.access.customPages.<a href="./src/resources/access/custom-pages.ts">create</a>(identifier, { ...params }) -> CustomPageCreateResponse</code>
- <code title="put /accounts/{identifier}/access/custom_pages/{uuid}">client.access.customPages.<a href="./src/resources/access/custom-pages.ts">update</a>(identifier, uuid, { ...params }) -> CustomPageUpdateResponse</code>
- <code title="get /accounts/{identifier}/access/custom_pages">client.access.customPages.<a href="./src/resources/access/custom-pages.ts">list</a>(identifier) -> CustomPageListResponse | null</code>
- <code title="delete /accounts/{identifier}/access/custom_pages/{uuid}">client.access.customPages.<a href="./src/resources/access/custom-pages.ts">delete</a>(identifier, uuid) -> CustomPageDeleteResponse</code>
- <code title="get /accounts/{identifier}/access/custom_pages/{uuid}">client.access.customPages.<a href="./src/resources/access/custom-pages.ts">get</a>(identifier, uuid) -> CustomPageGetResponse</code>

## Tags

Types:

- <code><a href="./src/resources/access/tags.ts">TagCreateResponse</a></code>
- <code><a href="./src/resources/access/tags.ts">TagUpdateResponse</a></code>
- <code><a href="./src/resources/access/tags.ts">TagListResponse</a></code>
- <code><a href="./src/resources/access/tags.ts">TagDeleteResponse</a></code>
- <code><a href="./src/resources/access/tags.ts">TagGetResponse</a></code>

Methods:

- <code title="post /accounts/{identifier}/access/tags">client.access.tags.<a href="./src/resources/access/tags.ts">create</a>(identifier, { ...params }) -> TagCreateResponse</code>
- <code title="put /accounts/{identifier}/access/tags/{name}">client.access.tags.<a href="./src/resources/access/tags.ts">update</a>(identifier, tagName, { ...params }) -> TagUpdateResponse</code>
- <code title="get /accounts/{identifier}/access/tags">client.access.tags.<a href="./src/resources/access/tags.ts">list</a>(identifier) -> TagListResponse | null</code>
- <code title="delete /accounts/{identifier}/access/tags/{name}">client.access.tags.<a href="./src/resources/access/tags.ts">delete</a>(identifier, name) -> TagDeleteResponse</code>
- <code title="get /accounts/{identifier}/access/tags/{name}">client.access.tags.<a href="./src/resources/access/tags.ts">get</a>(identifier, name) -> TagGetResponse</code>

# DNSAnalytics

## Reports

Types:

- <code><a href="./src/resources/dns-analytics/reports/reports.ts">ReportListResponse</a></code>

Methods:

- <code title="get /zones/{identifier}/dns_analytics/report">client.dnsAnalytics.reports.<a href="./src/resources/dns-analytics/reports/reports.ts">list</a>(identifier, { ...params }) -> ReportListResponse</code>

### Bytimes

Types:

- <code><a href="./src/resources/dns-analytics/reports/bytimes.ts">BytimeListResponse</a></code>

Methods:

- <code title="get /zones/{identifier}/dns_analytics/report/bytime">client.dnsAnalytics.reports.bytimes.<a href="./src/resources/dns-analytics/reports/bytimes.ts">list</a>(identifier, { ...params }) -> BytimeListResponse</code>

# Cache

Types:

- <code><a href="./src/resources/cache/cache.ts">CachePurgeResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/purge_cache">client.cache.<a href="./src/resources/cache/cache.ts">purge</a>(zoneId, { ...params }) -> CachePurgeResponse | null</code>

## CacheReserve

Types:

- <code><a href="./src/resources/cache/cache-reserve.ts">CacheReserveListResponse</a></code>
- <code><a href="./src/resources/cache/cache-reserve.ts">CacheReserveClearResponse</a></code>
- <code><a href="./src/resources/cache/cache-reserve.ts">CacheReserveEditResponse</a></code>
- <code><a href="./src/resources/cache/cache-reserve.ts">CacheReserveStatusResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/cache/cache_reserve">client.cache.cacheReserve.<a href="./src/resources/cache/cache-reserve.ts">list</a>(zoneId) -> CacheReserveListResponse</code>
- <code title="post /zones/{zone_id}/cache/cache_reserve_clear">client.cache.cacheReserve.<a href="./src/resources/cache/cache-reserve.ts">clear</a>(zoneId) -> CacheReserveClearResponse</code>
- <code title="patch /zones/{zone_id}/cache/cache_reserve">client.cache.cacheReserve.<a href="./src/resources/cache/cache-reserve.ts">edit</a>(zoneId, { ...params }) -> CacheReserveEditResponse</code>
- <code title="get /zones/{zone_id}/cache/cache_reserve_clear">client.cache.cacheReserve.<a href="./src/resources/cache/cache-reserve.ts">status</a>(zoneId) -> CacheReserveStatusResponse</code>

## TieredCacheSmartTopology

Types:

- <code><a href="./src/resources/cache/tiered-cache-smart-topology.ts">TieredCacheSmartTopologyDeleteResponse</a></code>
- <code><a href="./src/resources/cache/tiered-cache-smart-topology.ts">TieredCacheSmartTopologyEditResponse</a></code>
- <code><a href="./src/resources/cache/tiered-cache-smart-topology.ts">TieredCacheSmartTopologyGetResponse</a></code>

Methods:

- <code title="delete /zones/{zone_id}/cache/tiered_cache_smart_topology_enable">client.cache.tieredCacheSmartTopology.<a href="./src/resources/cache/tiered-cache-smart-topology.ts">delete</a>(zoneId) -> TieredCacheSmartTopologyDeleteResponse</code>
- <code title="patch /zones/{zone_id}/cache/tiered_cache_smart_topology_enable">client.cache.tieredCacheSmartTopology.<a href="./src/resources/cache/tiered-cache-smart-topology.ts">edit</a>(zoneId, { ...params }) -> TieredCacheSmartTopologyEditResponse</code>
- <code title="get /zones/{zone_id}/cache/tiered_cache_smart_topology_enable">client.cache.tieredCacheSmartTopology.<a href="./src/resources/cache/tiered-cache-smart-topology.ts">get</a>(zoneId) -> TieredCacheSmartTopologyGetResponse</code>

## Variants

Types:

- <code><a href="./src/resources/cache/variants.ts">VariantListResponse</a></code>
- <code><a href="./src/resources/cache/variants.ts">VariantDeleteResponse</a></code>
- <code><a href="./src/resources/cache/variants.ts">VariantEditResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/cache/variants">client.cache.variants.<a href="./src/resources/cache/variants.ts">list</a>(zoneId) -> VariantListResponse</code>
- <code title="delete /zones/{zone_id}/cache/variants">client.cache.variants.<a href="./src/resources/cache/variants.ts">delete</a>(zoneId) -> VariantDeleteResponse</code>
- <code title="patch /zones/{zone_id}/cache/variants">client.cache.variants.<a href="./src/resources/cache/variants.ts">edit</a>(zoneId, { ...params }) -> VariantEditResponse</code>

## RegionalTieredCache

Types:

- <code><a href="./src/resources/cache/regional-tiered-cache.ts">RegionalTieredCacheEditResponse</a></code>
- <code><a href="./src/resources/cache/regional-tiered-cache.ts">RegionalTieredCacheGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/cache/regional_tiered_cache">client.cache.regionalTieredCache.<a href="./src/resources/cache/regional-tiered-cache.ts">edit</a>(zoneId, { ...params }) -> RegionalTieredCacheEditResponse</code>
- <code title="get /zones/{zone_id}/cache/regional_tiered_cache">client.cache.regionalTieredCache.<a href="./src/resources/cache/regional-tiered-cache.ts">get</a>(zoneId) -> RegionalTieredCacheGetResponse</code>

# SSL

## Analyze

Types:

- <code><a href="./src/resources/ssl/analyze.ts">AnalyzeCreateResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/ssl/analyze">client.ssl.analyze.<a href="./src/resources/ssl/analyze.ts">create</a>(zoneId, { ...params }) -> AnalyzeCreateResponse</code>

## CertificatePacks

Types:

- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">CertificatePackListResponse</a></code>
- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">CertificatePackDeleteResponse</a></code>
- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">CertificatePackEditResponse</a></code>
- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">CertificatePackGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/ssl/certificate_packs">client.ssl.certificatePacks.<a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">list</a>(zoneId, { ...params }) -> CertificatePackListResponse | null</code>
- <code title="delete /zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}">client.ssl.certificatePacks.<a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">delete</a>(zoneId, certificatePackId) -> CertificatePackDeleteResponse</code>
- <code title="patch /zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}">client.ssl.certificatePacks.<a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">edit</a>(zoneId, certificatePackId) -> CertificatePackEditResponse</code>
- <code title="get /zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}">client.ssl.certificatePacks.<a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">get</a>(zoneId, certificatePackId) -> CertificatePackGetResponse</code>

### Order

Types:

- <code><a href="./src/resources/ssl/certificate-packs/order.ts">OrderCreateResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/ssl/certificate_packs/order">client.ssl.certificatePacks.order.<a href="./src/resources/ssl/certificate-packs/order.ts">create</a>(zoneId, { ...params }) -> OrderCreateResponse</code>

### Quota

Types:

- <code><a href="./src/resources/ssl/certificate-packs/quota.ts">QuotaListResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/ssl/certificate_packs/quota">client.ssl.certificatePacks.quota.<a href="./src/resources/ssl/certificate-packs/quota.ts">list</a>(zoneId) -> QuotaListResponse</code>

## Recommendations

Types:

- <code><a href="./src/resources/ssl/recommendations.ts">RecommendationListResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/ssl/recommendation">client.ssl.recommendations.<a href="./src/resources/ssl/recommendations.ts">list</a>(zoneIdentifier) -> RecommendationListResponse | null</code>

## Universal

### Settings

Types:

- <code><a href="./src/resources/ssl/universal/settings.ts">SettingEditResponse</a></code>
- <code><a href="./src/resources/ssl/universal/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/ssl/universal/settings">client.ssl.universal.settings.<a href="./src/resources/ssl/universal/settings.ts">edit</a>(zoneId, { ...params }) -> SettingEditResponse</code>
- <code title="get /zones/{zone_id}/ssl/universal/settings">client.ssl.universal.settings.<a href="./src/resources/ssl/universal/settings.ts">get</a>(zoneId) -> SettingGetResponse</code>

## Verification

Types:

- <code><a href="./src/resources/ssl/verification.ts">VerificationListResponse</a></code>
- <code><a href="./src/resources/ssl/verification.ts">VerificationEditResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/ssl/verification">client.ssl.verification.<a href="./src/resources/ssl/verification.ts">list</a>(zoneId, { ...params }) -> VerificationListResponse</code>
- <code title="patch /zones/{zone_id}/ssl/verification/{certificate_pack_id}">client.ssl.verification.<a href="./src/resources/ssl/verification.ts">edit</a>(zoneId, certificatePackId, { ...params }) -> VerificationEditResponse</code>

# Subscriptions

Types:

- <code><a href="./src/resources/subscriptions.ts">SubscriptionCreateResponse</a></code>
- <code><a href="./src/resources/subscriptions.ts">SubscriptionUpdateResponse</a></code>
- <code><a href="./src/resources/subscriptions.ts">SubscriptionListResponse</a></code>
- <code><a href="./src/resources/subscriptions.ts">SubscriptionDeleteResponse</a></code>
- <code><a href="./src/resources/subscriptions.ts">SubscriptionGetResponse</a></code>

Methods:

- <code title="post /zones/{identifier}/subscription">client.subscriptions.<a href="./src/resources/subscriptions.ts">create</a>(identifier, { ...params }) -> SubscriptionCreateResponse</code>
- <code title="put /accounts/{account_identifier}/subscriptions/{subscription_identifier}">client.subscriptions.<a href="./src/resources/subscriptions.ts">update</a>(accountIdentifier, subscriptionIdentifier, { ...params }) -> SubscriptionUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/subscriptions">client.subscriptions.<a href="./src/resources/subscriptions.ts">list</a>(accountIdentifier) -> SubscriptionListResponse | null</code>
- <code title="delete /accounts/{account_identifier}/subscriptions/{subscription_identifier}">client.subscriptions.<a href="./src/resources/subscriptions.ts">delete</a>(accountIdentifier, subscriptionIdentifier) -> SubscriptionDeleteResponse</code>
- <code title="get /zones/{identifier}/subscription">client.subscriptions.<a href="./src/resources/subscriptions.ts">get</a>(identifier) -> SubscriptionGetResponse</code>

# ACM

## TotalTLS

Types:

- <code><a href="./src/resources/acm/total-tls.ts">TotalTLSCreateResponse</a></code>
- <code><a href="./src/resources/acm/total-tls.ts">TotalTLSGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/acm/total_tls">client.acm.totalTLS.<a href="./src/resources/acm/total-tls.ts">create</a>(zoneId, { ...params }) -> TotalTLSCreateResponse</code>
- <code title="get /zones/{zone_id}/acm/total_tls">client.acm.totalTLS.<a href="./src/resources/acm/total-tls.ts">get</a>(zoneId) -> TotalTLSGetResponse</code>

# Argo

## SmartRouting

Types:

- <code><a href="./src/resources/argo/smart-routing.ts">SmartRoutingEditResponse</a></code>
- <code><a href="./src/resources/argo/smart-routing.ts">SmartRoutingGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/argo/smart_routing">client.argo.smartRouting.<a href="./src/resources/argo/smart-routing.ts">edit</a>(zoneId, { ...params }) -> SmartRoutingEditResponse</code>
- <code title="get /zones/{zone_id}/argo/smart_routing">client.argo.smartRouting.<a href="./src/resources/argo/smart-routing.ts">get</a>(zoneId) -> SmartRoutingGetResponse</code>

## TieredCaching

Types:

- <code><a href="./src/resources/argo/tiered-caching.ts">TieredCachingEditResponse</a></code>
- <code><a href="./src/resources/argo/tiered-caching.ts">TieredCachingGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/argo/tiered_caching">client.argo.tieredCaching.<a href="./src/resources/argo/tiered-caching.ts">edit</a>(zoneId, { ...params }) -> TieredCachingEditResponse</code>
- <code title="get /zones/{zone_id}/argo/tiered_caching">client.argo.tieredCaching.<a href="./src/resources/argo/tiered-caching.ts">get</a>(zoneId) -> TieredCachingGetResponse</code>

# AvailablePlans

Types:

- <code><a href="./src/resources/available-plans.ts">AvailablePlanListResponse</a></code>
- <code><a href="./src/resources/available-plans.ts">AvailablePlanGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/available_plans">client.availablePlans.<a href="./src/resources/available-plans.ts">list</a>(zoneIdentifier) -> AvailablePlanListResponse | null</code>
- <code title="get /zones/{zone_identifier}/available_plans/{plan_identifier}">client.availablePlans.<a href="./src/resources/available-plans.ts">get</a>(zoneIdentifier, planIdentifier) -> AvailablePlanGetResponse</code>

# AvailableRatePlans

Types:

- <code><a href="./src/resources/available-rate-plans.ts">AvailableRatePlanListResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/available_rate_plans">client.availableRatePlans.<a href="./src/resources/available-rate-plans.ts">list</a>(zoneIdentifier) -> AvailableRatePlanListResponse | null</code>

# CertificateAuthorities

## HostnameAssociations

Types:

- <code><a href="./src/resources/certificate-authorities/hostname-associations.ts">HostnameAssociationUpdateResponse</a></code>
- <code><a href="./src/resources/certificate-authorities/hostname-associations.ts">HostnameAssociationListResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/certificate_authorities/hostname_associations">client.certificateAuthorities.hostnameAssociations.<a href="./src/resources/certificate-authorities/hostname-associations.ts">update</a>(zoneId, { ...params }) -> HostnameAssociationUpdateResponse</code>
- <code title="get /zones/{zone_id}/certificate_authorities/hostname_associations">client.certificateAuthorities.hostnameAssociations.<a href="./src/resources/certificate-authorities/hostname-associations.ts">list</a>(zoneId, { ...params }) -> HostnameAssociationListResponse</code>

# ClientCertificates

Types:

- <code><a href="./src/resources/client-certificates.ts">ClientCertificateCreateResponse</a></code>
- <code><a href="./src/resources/client-certificates.ts">ClientCertificateListResponse</a></code>
- <code><a href="./src/resources/client-certificates.ts">ClientCertificateDeleteResponse</a></code>
- <code><a href="./src/resources/client-certificates.ts">ClientCertificateEditResponse</a></code>
- <code><a href="./src/resources/client-certificates.ts">ClientCertificateGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/client_certificates">client.clientCertificates.<a href="./src/resources/client-certificates.ts">create</a>(zoneId, { ...params }) -> ClientCertificateCreateResponse</code>
- <code title="get /zones/{zone_id}/client_certificates">client.clientCertificates.<a href="./src/resources/client-certificates.ts">list</a>(zoneId, { ...params }) -> ClientCertificateListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/client_certificates/{client_certificate_id}">client.clientCertificates.<a href="./src/resources/client-certificates.ts">delete</a>(zoneId, clientCertificateId) -> ClientCertificateDeleteResponse</code>
- <code title="patch /zones/{zone_id}/client_certificates/{client_certificate_id}">client.clientCertificates.<a href="./src/resources/client-certificates.ts">edit</a>(zoneId, clientCertificateId) -> ClientCertificateEditResponse</code>
- <code title="get /zones/{zone_id}/client_certificates/{client_certificate_id}">client.clientCertificates.<a href="./src/resources/client-certificates.ts">get</a>(zoneId, clientCertificateId) -> ClientCertificateGetResponse</code>

# CustomCertificates

Types:

- <code><a href="./src/resources/custom-certificates/custom-certificates.ts">CustomCertificateCreateResponse</a></code>
- <code><a href="./src/resources/custom-certificates/custom-certificates.ts">CustomCertificateListResponse</a></code>
- <code><a href="./src/resources/custom-certificates/custom-certificates.ts">CustomCertificateDeleteResponse</a></code>
- <code><a href="./src/resources/custom-certificates/custom-certificates.ts">CustomCertificateEditResponse</a></code>
- <code><a href="./src/resources/custom-certificates/custom-certificates.ts">CustomCertificateGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/custom_certificates">client.customCertificates.<a href="./src/resources/custom-certificates/custom-certificates.ts">create</a>(zoneId, { ...params }) -> CustomCertificateCreateResponse</code>
- <code title="get /zones/{zone_id}/custom_certificates">client.customCertificates.<a href="./src/resources/custom-certificates/custom-certificates.ts">list</a>(zoneId, { ...params }) -> CustomCertificateListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/custom_certificates/{custom_certificate_id}">client.customCertificates.<a href="./src/resources/custom-certificates/custom-certificates.ts">delete</a>(zoneId, customCertificateId) -> CustomCertificateDeleteResponse</code>
- <code title="patch /zones/{zone_id}/custom_certificates/{custom_certificate_id}">client.customCertificates.<a href="./src/resources/custom-certificates/custom-certificates.ts">edit</a>(zoneId, customCertificateId, { ...params }) -> CustomCertificateEditResponse</code>
- <code title="get /zones/{zone_id}/custom_certificates/{custom_certificate_id}">client.customCertificates.<a href="./src/resources/custom-certificates/custom-certificates.ts">get</a>(zoneId, customCertificateId) -> CustomCertificateGetResponse</code>

## Prioritize

Types:

- <code><a href="./src/resources/custom-certificates/prioritize.ts">PrioritizeUpdateResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/custom_certificates/prioritize">client.customCertificates.prioritize.<a href="./src/resources/custom-certificates/prioritize.ts">update</a>(zoneId, { ...params }) -> PrioritizeUpdateResponse | null</code>

# CustomHostnames

Types:

- <code><a href="./src/resources/custom-hostnames/custom-hostnames.ts">CustomHostnameCreateResponse</a></code>
- <code><a href="./src/resources/custom-hostnames/custom-hostnames.ts">CustomHostnameListResponse</a></code>
- <code><a href="./src/resources/custom-hostnames/custom-hostnames.ts">CustomHostnameDeleteResponse</a></code>
- <code><a href="./src/resources/custom-hostnames/custom-hostnames.ts">CustomHostnameEditResponse</a></code>
- <code><a href="./src/resources/custom-hostnames/custom-hostnames.ts">CustomHostnameGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/custom_hostnames">client.customHostnames.<a href="./src/resources/custom-hostnames/custom-hostnames.ts">create</a>(zoneId, { ...params }) -> CustomHostnameCreateResponse</code>
- <code title="get /zones/{zone_id}/custom_hostnames">client.customHostnames.<a href="./src/resources/custom-hostnames/custom-hostnames.ts">list</a>(zoneId, { ...params }) -> CustomHostnameListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/custom_hostnames/{custom_hostname_id}">client.customHostnames.<a href="./src/resources/custom-hostnames/custom-hostnames.ts">delete</a>(zoneId, customHostnameId) -> CustomHostnameDeleteResponse</code>
- <code title="patch /zones/{zone_id}/custom_hostnames/{custom_hostname_id}">client.customHostnames.<a href="./src/resources/custom-hostnames/custom-hostnames.ts">edit</a>(zoneId, customHostnameId, { ...params }) -> CustomHostnameEditResponse</code>
- <code title="get /zones/{zone_id}/custom_hostnames/{custom_hostname_id}">client.customHostnames.<a href="./src/resources/custom-hostnames/custom-hostnames.ts">get</a>(zoneId, customHostnameId) -> CustomHostnameGetResponse</code>

## FallbackOrigin

Types:

- <code><a href="./src/resources/custom-hostnames/fallback-origin.ts">FallbackOriginUpdateResponse</a></code>
- <code><a href="./src/resources/custom-hostnames/fallback-origin.ts">FallbackOriginDeleteResponse</a></code>
- <code><a href="./src/resources/custom-hostnames/fallback-origin.ts">FallbackOriginGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/custom_hostnames/fallback_origin">client.customHostnames.fallbackOrigin.<a href="./src/resources/custom-hostnames/fallback-origin.ts">update</a>(zoneId, { ...params }) -> FallbackOriginUpdateResponse</code>
- <code title="delete /zones/{zone_id}/custom_hostnames/fallback_origin">client.customHostnames.fallbackOrigin.<a href="./src/resources/custom-hostnames/fallback-origin.ts">delete</a>(zoneId) -> FallbackOriginDeleteResponse</code>
- <code title="get /zones/{zone_id}/custom_hostnames/fallback_origin">client.customHostnames.fallbackOrigin.<a href="./src/resources/custom-hostnames/fallback-origin.ts">get</a>(zoneId) -> FallbackOriginGetResponse</code>

# CustomNameservers

Types:

- <code><a href="./src/resources/custom-nameservers.ts">CustomNameserverCreateResponse</a></code>
- <code><a href="./src/resources/custom-nameservers.ts">CustomNameserverListResponse</a></code>
- <code><a href="./src/resources/custom-nameservers.ts">CustomNameserverDeleteResponse</a></code>
- <code><a href="./src/resources/custom-nameservers.ts">CustomNameserverAvailabiltyResponse</a></code>
- <code><a href="./src/resources/custom-nameservers.ts">CustomNameserverVerifyResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/custom_ns">client.customNameservers.<a href="./src/resources/custom-nameservers.ts">create</a>(accountId, { ...params }) -> CustomNameserverCreateResponse</code>
- <code title="get /accounts/{account_id}/custom_ns">client.customNameservers.<a href="./src/resources/custom-nameservers.ts">list</a>(accountId) -> CustomNameserverListResponse | null</code>
- <code title="delete /accounts/{account_id}/custom_ns/{custom_ns_id}">client.customNameservers.<a href="./src/resources/custom-nameservers.ts">delete</a>(accountId, customNsId) -> CustomNameserverDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/custom_ns/availability">client.customNameservers.<a href="./src/resources/custom-nameservers.ts">availabilty</a>(accountId) -> CustomNameserverAvailabiltyResponse | null</code>
- <code title="post /accounts/{account_id}/custom_ns/verify">client.customNameservers.<a href="./src/resources/custom-nameservers.ts">verify</a>(accountId) -> CustomNameserverVerifyResponse | null</code>

# DNS

## Records

Types:

- <code><a href="./src/resources/dns/records.ts">RecordCreateResponse</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordUpdateResponse</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordListResponse</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordDeleteResponse</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordEditResponse</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordExportResponse</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordGetResponse</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordImportResponse</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordScanResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/dns_records">client.dns.records.<a href="./src/resources/dns/records.ts">create</a>(zoneId, { ...params }) -> RecordCreateResponse</code>
- <code title="put /zones/{zone_id}/dns_records/{dns_record_id}">client.dns.records.<a href="./src/resources/dns/records.ts">update</a>(zoneId, dnsRecordId, { ...params }) -> RecordUpdateResponse</code>
- <code title="get /zones/{zone_id}/dns_records">client.dns.records.<a href="./src/resources/dns/records.ts">list</a>(zoneId, { ...params }) -> RecordListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/dns_records/{dns_record_id}">client.dns.records.<a href="./src/resources/dns/records.ts">delete</a>(zoneId, dnsRecordId) -> RecordDeleteResponse</code>
- <code title="patch /zones/{zone_id}/dns_records/{dns_record_id}">client.dns.records.<a href="./src/resources/dns/records.ts">edit</a>(zoneId, dnsRecordId, { ...params }) -> RecordEditResponse</code>
- <code title="get /zones/{zone_id}/dns_records/export">client.dns.records.<a href="./src/resources/dns/records.ts">export</a>(zoneId) -> string</code>
- <code title="get /zones/{zone_id}/dns_records/{dns_record_id}">client.dns.records.<a href="./src/resources/dns/records.ts">get</a>(zoneId, dnsRecordId) -> RecordGetResponse</code>
- <code title="post /zones/{zone_id}/dns_records/import">client.dns.records.<a href="./src/resources/dns/records.ts">import</a>(zoneId, { ...params }) -> RecordImportResponse</code>
- <code title="post /zones/{zone_id}/dns_records/scan">client.dns.records.<a href="./src/resources/dns/records.ts">scan</a>(zoneId) -> RecordScanResponse</code>

## Firewall

Types:

- <code><a href="./src/resources/dns/firewall/firewall.ts">FirewallCreateResponse</a></code>
- <code><a href="./src/resources/dns/firewall/firewall.ts">FirewallListResponse</a></code>
- <code><a href="./src/resources/dns/firewall/firewall.ts">FirewallDeleteResponse</a></code>
- <code><a href="./src/resources/dns/firewall/firewall.ts">FirewallEditResponse</a></code>
- <code><a href="./src/resources/dns/firewall/firewall.ts">FirewallGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dns_firewall">client.dns.firewall.<a href="./src/resources/dns/firewall/firewall.ts">create</a>(accountId, { ...params }) -> FirewallCreateResponse</code>
- <code title="get /accounts/{account_id}/dns_firewall">client.dns.firewall.<a href="./src/resources/dns/firewall/firewall.ts">list</a>(accountId, { ...params }) -> FirewallListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/dns_firewall/{dns_firewall_id}">client.dns.firewall.<a href="./src/resources/dns/firewall/firewall.ts">delete</a>(accountId, dnsFirewallId) -> FirewallDeleteResponse</code>
- <code title="patch /accounts/{account_id}/dns_firewall/{dns_firewall_id}">client.dns.firewall.<a href="./src/resources/dns/firewall/firewall.ts">edit</a>(accountId, dnsFirewallId, { ...params }) -> FirewallEditResponse</code>
- <code title="get /accounts/{account_id}/dns_firewall/{dns_firewall_id}">client.dns.firewall.<a href="./src/resources/dns/firewall/firewall.ts">get</a>(accountId, dnsFirewallId) -> FirewallGetResponse</code>

### Analytics

#### Reports

Types:

- <code><a href="./src/resources/dns/firewall/analytics/reports/reports.ts">ReportListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/dns_firewall/{identifier}/dns_analytics/report">client.dns.firewall.analytics.reports.<a href="./src/resources/dns/firewall/analytics/reports/reports.ts">list</a>(accountIdentifier, identifier, { ...params }) -> ReportListResponse</code>

##### Bytimes

Types:

- <code><a href="./src/resources/dns/firewall/analytics/reports/bytimes.ts">BytimeListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/dns_firewall/{identifier}/dns_analytics/report/bytime">client.dns.firewall.analytics.reports.bytimes.<a href="./src/resources/dns/firewall/analytics/reports/bytimes.ts">list</a>(accountIdentifier, identifier, { ...params }) -> BytimeListResponse</code>

# DNSSEC

Types:

- <code><a href="./src/resources/dnssec.ts">DNSSECDeleteResponse</a></code>
- <code><a href="./src/resources/dnssec.ts">DNSSECEditResponse</a></code>
- <code><a href="./src/resources/dnssec.ts">DNSSECGetResponse</a></code>

Methods:

- <code title="delete /zones/{zone_id}/dnssec">client.dnssec.<a href="./src/resources/dnssec.ts">delete</a>(zoneId) -> DNSSECDeleteResponse</code>
- <code title="patch /zones/{zone_id}/dnssec">client.dnssec.<a href="./src/resources/dnssec.ts">edit</a>(zoneId, { ...params }) -> DNSSECEditResponse</code>
- <code title="get /zones/{zone_id}/dnssec">client.dnssec.<a href="./src/resources/dnssec.ts">get</a>(zoneId) -> DNSSECGetResponse</code>

# Emails

## Routing

Types:

- <code><a href="./src/resources/emails/routing/routing.ts">RoutingGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/email/routing">client.emails.routing.<a href="./src/resources/emails/routing/routing.ts">get</a>(zoneIdentifier) -> RoutingGetResponse</code>

### Disables

Types:

- <code><a href="./src/resources/emails/routing/disables.ts">DisableCreateResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/email/routing/disable">client.emails.routing.disables.<a href="./src/resources/emails/routing/disables.ts">create</a>(zoneIdentifier) -> DisableCreateResponse</code>

### DNS

Types:

- <code><a href="./src/resources/emails/routing/dns.ts">DNSGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/email/routing/dns">client.emails.routing.dns.<a href="./src/resources/emails/routing/dns.ts">get</a>(zoneIdentifier) -> DNSGetResponse | null</code>

### Enables

Types:

- <code><a href="./src/resources/emails/routing/enables.ts">EnableCreateResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/email/routing/enable">client.emails.routing.enables.<a href="./src/resources/emails/routing/enables.ts">create</a>(zoneIdentifier) -> EnableCreateResponse</code>

### Rules

Types:

- <code><a href="./src/resources/emails/routing/rules/rules.ts">RuleCreateResponse</a></code>
- <code><a href="./src/resources/emails/routing/rules/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/emails/routing/rules/rules.ts">RuleListResponse</a></code>
- <code><a href="./src/resources/emails/routing/rules/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/emails/routing/rules/rules.ts">RuleGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/email/routing/rules">client.emails.routing.rules.<a href="./src/resources/emails/routing/rules/rules.ts">create</a>(zoneIdentifier, { ...params }) -> RuleCreateResponse</code>
- <code title="put /zones/{zone_identifier}/email/routing/rules/{rule_identifier}">client.emails.routing.rules.<a href="./src/resources/emails/routing/rules/rules.ts">update</a>(zoneIdentifier, ruleIdentifier, { ...params }) -> RuleUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/email/routing/rules">client.emails.routing.rules.<a href="./src/resources/emails/routing/rules/rules.ts">list</a>(zoneIdentifier, { ...params }) -> RuleListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_identifier}/email/routing/rules/{rule_identifier}">client.emails.routing.rules.<a href="./src/resources/emails/routing/rules/rules.ts">delete</a>(zoneIdentifier, ruleIdentifier) -> RuleDeleteResponse</code>
- <code title="get /zones/{zone_identifier}/email/routing/rules/{rule_identifier}">client.emails.routing.rules.<a href="./src/resources/emails/routing/rules/rules.ts">get</a>(zoneIdentifier, ruleIdentifier) -> RuleGetResponse</code>

#### CatchAlls

Types:

- <code><a href="./src/resources/emails/routing/rules/catch-alls.ts">CatchAllUpdateResponse</a></code>
- <code><a href="./src/resources/emails/routing/rules/catch-alls.ts">CatchAllGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_identifier}/email/routing/rules/catch_all">client.emails.routing.rules.catchAlls.<a href="./src/resources/emails/routing/rules/catch-alls.ts">update</a>(zoneIdentifier, { ...params }) -> CatchAllUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/email/routing/rules/catch_all">client.emails.routing.rules.catchAlls.<a href="./src/resources/emails/routing/rules/catch-alls.ts">get</a>(zoneIdentifier) -> CatchAllGetResponse</code>

### Addresses

Types:

- <code><a href="./src/resources/emails/routing/addresses.ts">AddressCreateResponse</a></code>
- <code><a href="./src/resources/emails/routing/addresses.ts">AddressDeleteResponse</a></code>
- <code><a href="./src/resources/emails/routing/addresses.ts">AddressEmailRoutingDestinationAddressesListDestinationAddressesResponse</a></code>
- <code><a href="./src/resources/emails/routing/addresses.ts">AddressGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/email/routing/addresses">client.emails.routing.addresses.<a href="./src/resources/emails/routing/addresses.ts">create</a>(accountIdentifier, { ...params }) -> AddressCreateResponse</code>
- <code title="delete /accounts/{account_identifier}/email/routing/addresses/{destination_address_identifier}">client.emails.routing.addresses.<a href="./src/resources/emails/routing/addresses.ts">delete</a>(accountIdentifier, destinationAddressIdentifier) -> AddressDeleteResponse</code>
- <code title="get /accounts/{account_identifier}/email/routing/addresses">client.emails.routing.addresses.<a href="./src/resources/emails/routing/addresses.ts">emailRoutingDestinationAddressesListDestinationAddresses</a>(accountIdentifier, { ...params }) -> AddressEmailRoutingDestinationAddressesListDestinationAddressesResponse | null</code>
- <code title="get /accounts/{account_identifier}/email/routing/addresses/{destination_address_identifier}">client.emails.routing.addresses.<a href="./src/resources/emails/routing/addresses.ts">get</a>(accountIdentifier, destinationAddressIdentifier) -> AddressGetResponse</code>

# Filters

Types:

- <code><a href="./src/resources/filters.ts">FilterCreateResponse</a></code>
- <code><a href="./src/resources/filters.ts">FilterUpdateResponse</a></code>
- <code><a href="./src/resources/filters.ts">FilterListResponse</a></code>
- <code><a href="./src/resources/filters.ts">FilterDeleteResponse</a></code>
- <code><a href="./src/resources/filters.ts">FilterGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/filters">client.filters.<a href="./src/resources/filters.ts">create</a>(zoneIdentifier, { ...params }) -> FilterCreateResponse | null</code>
- <code title="put /zones/{zone_identifier}/filters/{id}">client.filters.<a href="./src/resources/filters.ts">update</a>(zoneIdentifier, id, { ...params }) -> FilterUpdateResponse | null</code>
- <code title="get /zones/{zone_identifier}/filters">client.filters.<a href="./src/resources/filters.ts">list</a>(zoneIdentifier, { ...params }) -> FilterListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_identifier}/filters/{id}">client.filters.<a href="./src/resources/filters.ts">delete</a>(zoneIdentifier, id) -> FilterDeleteResponse | null</code>
- <code title="get /zones/{zone_identifier}/filters/{id}">client.filters.<a href="./src/resources/filters.ts">get</a>(zoneIdentifier, id) -> FilterGetResponse | null</code>

# Firewalls

## Lockdowns

Types:

- <code><a href="./src/resources/firewalls/lockdowns.ts">LockdownCreateResponse</a></code>
- <code><a href="./src/resources/firewalls/lockdowns.ts">LockdownUpdateResponse</a></code>
- <code><a href="./src/resources/firewalls/lockdowns.ts">LockdownListResponse</a></code>
- <code><a href="./src/resources/firewalls/lockdowns.ts">LockdownDeleteResponse</a></code>
- <code><a href="./src/resources/firewalls/lockdowns.ts">LockdownGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/firewall/lockdowns">client.firewalls.lockdowns.<a href="./src/resources/firewalls/lockdowns.ts">create</a>(zoneIdentifier, { ...params }) -> LockdownCreateResponse | null</code>
- <code title="put /zones/{zone_identifier}/firewall/lockdowns/{id}">client.firewalls.lockdowns.<a href="./src/resources/firewalls/lockdowns.ts">update</a>(zoneIdentifier, id, { ...params }) -> LockdownUpdateResponse | null</code>
- <code title="get /zones/{zone_identifier}/firewall/lockdowns">client.firewalls.lockdowns.<a href="./src/resources/firewalls/lockdowns.ts">list</a>(zoneIdentifier, { ...params }) -> LockdownListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_identifier}/firewall/lockdowns/{id}">client.firewalls.lockdowns.<a href="./src/resources/firewalls/lockdowns.ts">delete</a>(zoneIdentifier, id) -> LockdownDeleteResponse</code>
- <code title="get /zones/{zone_identifier}/firewall/lockdowns/{id}">client.firewalls.lockdowns.<a href="./src/resources/firewalls/lockdowns.ts">get</a>(zoneIdentifier, id) -> LockdownGetResponse | null</code>

## Rules

Types:

- <code><a href="./src/resources/firewalls/rules.ts">RuleCreateResponse</a></code>
- <code><a href="./src/resources/firewalls/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/firewalls/rules.ts">RuleListResponse</a></code>
- <code><a href="./src/resources/firewalls/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/firewalls/rules.ts">RuleEditResponse</a></code>
- <code><a href="./src/resources/firewalls/rules.ts">RuleGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/firewall/rules">client.firewalls.rules.<a href="./src/resources/firewalls/rules.ts">create</a>(zoneIdentifier, { ...params }) -> RuleCreateResponse | null</code>
- <code title="put /zones/{zone_identifier}/firewall/rules/{id}">client.firewalls.rules.<a href="./src/resources/firewalls/rules.ts">update</a>(zoneIdentifier, id, { ...params }) -> RuleUpdateResponse | null</code>
- <code title="get /zones/{zone_identifier}/firewall/rules">client.firewalls.rules.<a href="./src/resources/firewalls/rules.ts">list</a>(zoneIdentifier, { ...params }) -> RuleListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_identifier}/firewall/rules/{id}">client.firewalls.rules.<a href="./src/resources/firewalls/rules.ts">delete</a>(zoneIdentifier, id, { ...params }) -> RuleDeleteResponse | null</code>
- <code title="patch /zones/{zone_identifier}/firewall/rules/{id}">client.firewalls.rules.<a href="./src/resources/firewalls/rules.ts">edit</a>(zoneIdentifier, id, { ...params }) -> RuleEditResponse | null</code>
- <code title="get /zones/{zone_identifier}/firewall/rules/{id}">client.firewalls.rules.<a href="./src/resources/firewalls/rules.ts">get</a>(zoneIdentifier, id) -> RuleGetResponse | null</code>

## AccessRules

Types:

- <code><a href="./src/resources/firewalls/access-rules.ts">AccessRuleCreateResponse</a></code>
- <code><a href="./src/resources/firewalls/access-rules.ts">AccessRuleListResponse</a></code>
- <code><a href="./src/resources/firewalls/access-rules.ts">AccessRuleDeleteResponse</a></code>
- <code><a href="./src/resources/firewalls/access-rules.ts">AccessRuleEditResponse</a></code>
- <code><a href="./src/resources/firewalls/access-rules.ts">AccessRuleGetResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/firewall/access_rules/rules">client.firewalls.accessRules.<a href="./src/resources/firewalls/access-rules.ts">create</a>({ ...params }) -> AccessRuleCreateResponse | null</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/firewall/access_rules/rules">client.firewalls.accessRules.<a href="./src/resources/firewalls/access-rules.ts">list</a>({ ...params }) -> AccessRuleListResponsesV4PagePaginationArray</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/firewall/access_rules/rules/{identifier}">client.firewalls.accessRules.<a href="./src/resources/firewalls/access-rules.ts">delete</a>(identifier, { ...params }) -> AccessRuleDeleteResponse | null</code>
- <code title="patch /{account_or_zone}/{account_or_zone_id}/firewall/access_rules/rules/{identifier}">client.firewalls.accessRules.<a href="./src/resources/firewalls/access-rules.ts">edit</a>(identifier, { ...params }) -> AccessRuleEditResponse | null</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/firewall/access_rules/rules/{identifier}">client.firewalls.accessRules.<a href="./src/resources/firewalls/access-rules.ts">get</a>(identifier, { ...params }) -> AccessRuleGetResponse | null</code>

## UARules

Types:

- <code><a href="./src/resources/firewalls/ua-rules.ts">UARuleCreateResponse</a></code>
- <code><a href="./src/resources/firewalls/ua-rules.ts">UARuleUpdateResponse</a></code>
- <code><a href="./src/resources/firewalls/ua-rules.ts">UARuleListResponse</a></code>
- <code><a href="./src/resources/firewalls/ua-rules.ts">UARuleDeleteResponse</a></code>
- <code><a href="./src/resources/firewalls/ua-rules.ts">UARuleGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/firewall/ua_rules">client.firewalls.uaRules.<a href="./src/resources/firewalls/ua-rules.ts">create</a>(zoneIdentifier, { ...params }) -> UARuleCreateResponse | null</code>
- <code title="put /zones/{zone_identifier}/firewall/ua_rules/{id}">client.firewalls.uaRules.<a href="./src/resources/firewalls/ua-rules.ts">update</a>(zoneIdentifier, id, { ...params }) -> UARuleUpdateResponse | null</code>
- <code title="get /zones/{zone_identifier}/firewall/ua_rules">client.firewalls.uaRules.<a href="./src/resources/firewalls/ua-rules.ts">list</a>(zoneIdentifier, { ...params }) -> UARuleListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_identifier}/firewall/ua_rules/{id}">client.firewalls.uaRules.<a href="./src/resources/firewalls/ua-rules.ts">delete</a>(zoneIdentifier, id) -> UARuleDeleteResponse | null</code>
- <code title="get /zones/{zone_identifier}/firewall/ua_rules/{id}">client.firewalls.uaRules.<a href="./src/resources/firewalls/ua-rules.ts">get</a>(zoneIdentifier, id) -> UARuleGetResponse | null</code>

## WAF

### Overrides

Types:

- <code><a href="./src/resources/firewalls/waf/overrides.ts">OverrideCreateResponse</a></code>
- <code><a href="./src/resources/firewalls/waf/overrides.ts">OverrideUpdateResponse</a></code>
- <code><a href="./src/resources/firewalls/waf/overrides.ts">OverrideListResponse</a></code>
- <code><a href="./src/resources/firewalls/waf/overrides.ts">OverrideDeleteResponse</a></code>
- <code><a href="./src/resources/firewalls/waf/overrides.ts">OverrideGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/firewall/waf/overrides">client.firewalls.waf.overrides.<a href="./src/resources/firewalls/waf/overrides.ts">create</a>(zoneIdentifier, { ...params }) -> OverrideCreateResponse | null</code>
- <code title="put /zones/{zone_identifier}/firewall/waf/overrides/{id}">client.firewalls.waf.overrides.<a href="./src/resources/firewalls/waf/overrides.ts">update</a>(zoneIdentifier, id, { ...params }) -> OverrideUpdateResponse | null</code>
- <code title="get /zones/{zone_identifier}/firewall/waf/overrides">client.firewalls.waf.overrides.<a href="./src/resources/firewalls/waf/overrides.ts">list</a>(zoneIdentifier, { ...params }) -> OverrideListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_identifier}/firewall/waf/overrides/{id}">client.firewalls.waf.overrides.<a href="./src/resources/firewalls/waf/overrides.ts">delete</a>(zoneIdentifier, id) -> OverrideDeleteResponse</code>
- <code title="get /zones/{zone_identifier}/firewall/waf/overrides/{id}">client.firewalls.waf.overrides.<a href="./src/resources/firewalls/waf/overrides.ts">get</a>(zoneIdentifier, id) -> OverrideGetResponse | null</code>

### Packages

Types:

- <code><a href="./src/resources/firewalls/waf/packages/packages.ts">PackageListResponse</a></code>
- <code><a href="./src/resources/firewalls/waf/packages/packages.ts">PackageGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/firewall/waf/packages">client.firewalls.waf.packages.<a href="./src/resources/firewalls/waf/packages/packages.ts">list</a>(zoneIdentifier, { ...params }) -> PackageListResponsesV4PagePaginationArray</code>
- <code title="get /zones/{zone_identifier}/firewall/waf/packages/{identifier}">client.firewalls.waf.packages.<a href="./src/resources/firewalls/waf/packages/packages.ts">get</a>(zoneIdentifier, identifier) -> PackageGetResponse</code>

#### Groups

Types:

- <code><a href="./src/resources/firewalls/waf/packages/groups.ts">GroupListResponse</a></code>
- <code><a href="./src/resources/firewalls/waf/packages/groups.ts">GroupEditResponse</a></code>
- <code><a href="./src/resources/firewalls/waf/packages/groups.ts">GroupGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/groups">client.firewalls.waf.packages.groups.<a href="./src/resources/firewalls/waf/packages/groups.ts">list</a>(zoneId, packageId, { ...params }) -> GroupListResponsesV4PagePaginationArray</code>
- <code title="patch /zones/{zone_id}/firewall/waf/packages/{package_id}/groups/{group_id}">client.firewalls.waf.packages.groups.<a href="./src/resources/firewalls/waf/packages/groups.ts">edit</a>(zoneId, packageId, groupId, { ...params }) -> GroupEditResponse</code>
- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/groups/{group_id}">client.firewalls.waf.packages.groups.<a href="./src/resources/firewalls/waf/packages/groups.ts">get</a>(zoneId, packageId, groupId) -> GroupGetResponse</code>

#### Rules

Types:

- <code><a href="./src/resources/firewalls/waf/packages/rules.ts">RuleEditResponse</a></code>
- <code><a href="./src/resources/firewalls/waf/packages/rules.ts">RuleGetResponse</a></code>
- <code><a href="./src/resources/firewalls/waf/packages/rules.ts">RuleWAFRulesListWAFRulesResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{rule_id}">client.firewalls.waf.packages.rules.<a href="./src/resources/firewalls/waf/packages/rules.ts">edit</a>(zoneId, packageId, ruleId, { ...params }) -> RuleEditResponse</code>
- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{rule_id}">client.firewalls.waf.packages.rules.<a href="./src/resources/firewalls/waf/packages/rules.ts">get</a>(zoneId, packageId, ruleId) -> RuleGetResponse</code>
- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/rules">client.firewalls.waf.packages.rules.<a href="./src/resources/firewalls/waf/packages/rules.ts">wafRulesListWAFRules</a>(zoneId, packageId, { ...params }) -> RuleWAFRulesListWAFRulesResponse | null</code>

# Healthchecks

Types:

- <code><a href="./src/resources/healthchecks/healthchecks.ts">HealthcheckCreateResponse</a></code>
- <code><a href="./src/resources/healthchecks/healthchecks.ts">HealthcheckUpdateResponse</a></code>
- <code><a href="./src/resources/healthchecks/healthchecks.ts">HealthcheckListResponse</a></code>
- <code><a href="./src/resources/healthchecks/healthchecks.ts">HealthcheckDeleteResponse</a></code>
- <code><a href="./src/resources/healthchecks/healthchecks.ts">HealthcheckEditResponse</a></code>
- <code><a href="./src/resources/healthchecks/healthchecks.ts">HealthcheckGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/healthchecks">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">create</a>(zoneIdentifier, { ...params }) -> HealthcheckCreateResponse</code>
- <code title="put /zones/{zone_identifier}/healthchecks/{identifier}">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">update</a>(zoneIdentifier, identifier, { ...params }) -> HealthcheckUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/healthchecks">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">list</a>(zoneIdentifier) -> HealthcheckListResponse | null</code>
- <code title="delete /zones/{zone_identifier}/healthchecks/{identifier}">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">delete</a>(zoneIdentifier, identifier) -> HealthcheckDeleteResponse</code>
- <code title="patch /zones/{zone_identifier}/healthchecks/{identifier}">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">edit</a>(zoneIdentifier, identifier, { ...params }) -> HealthcheckEditResponse</code>
- <code title="get /zones/{zone_identifier}/healthchecks/{identifier}">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">get</a>(zoneIdentifier, identifier) -> HealthcheckGetResponse</code>

## Previews

Types:

- <code><a href="./src/resources/healthchecks/previews.ts">PreviewCreateResponse</a></code>
- <code><a href="./src/resources/healthchecks/previews.ts">PreviewDeleteResponse</a></code>
- <code><a href="./src/resources/healthchecks/previews.ts">PreviewGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/healthchecks/preview">client.healthchecks.previews.<a href="./src/resources/healthchecks/previews.ts">create</a>(zoneIdentifier, { ...params }) -> PreviewCreateResponse</code>
- <code title="delete /zones/{zone_identifier}/healthchecks/preview/{identifier}">client.healthchecks.previews.<a href="./src/resources/healthchecks/previews.ts">delete</a>(zoneIdentifier, identifier) -> PreviewDeleteResponse</code>
- <code title="get /zones/{zone_identifier}/healthchecks/preview/{identifier}">client.healthchecks.previews.<a href="./src/resources/healthchecks/previews.ts">get</a>(zoneIdentifier, identifier) -> PreviewGetResponse</code>

# KeylessCertificates

Types:

- <code><a href="./src/resources/keyless-certificates.ts">KeylessCertificateCreateResponse</a></code>
- <code><a href="./src/resources/keyless-certificates.ts">KeylessCertificateListResponse</a></code>
- <code><a href="./src/resources/keyless-certificates.ts">KeylessCertificateDeleteResponse</a></code>
- <code><a href="./src/resources/keyless-certificates.ts">KeylessCertificateEditResponse</a></code>
- <code><a href="./src/resources/keyless-certificates.ts">KeylessCertificateGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/keyless_certificates">client.keylessCertificates.<a href="./src/resources/keyless-certificates.ts">create</a>(zoneId, { ...params }) -> KeylessCertificateCreateResponse</code>
- <code title="get /zones/{zone_id}/keyless_certificates">client.keylessCertificates.<a href="./src/resources/keyless-certificates.ts">list</a>(zoneId) -> KeylessCertificateListResponse | null</code>
- <code title="delete /zones/{zone_id}/keyless_certificates/{keyless_certificate_id}">client.keylessCertificates.<a href="./src/resources/keyless-certificates.ts">delete</a>(zoneId, keylessCertificateId) -> KeylessCertificateDeleteResponse</code>
- <code title="patch /zones/{zone_id}/keyless_certificates/{keyless_certificate_id}">client.keylessCertificates.<a href="./src/resources/keyless-certificates.ts">edit</a>(zoneId, keylessCertificateId, { ...params }) -> KeylessCertificateEditResponse</code>
- <code title="get /zones/{zone_id}/keyless_certificates/{keyless_certificate_id}">client.keylessCertificates.<a href="./src/resources/keyless-certificates.ts">get</a>(zoneId, keylessCertificateId) -> KeylessCertificateGetResponse</code>

# Logpush

## Datasets

### Fields

Types:

- <code><a href="./src/resources/logpush/datasets/fields.ts">FieldListResponse</a></code>

Methods:

- <code title="get /{account_or_zone}/{account_or_zone_id}/logpush/datasets/{dataset_id}/fields">client.logpush.datasets.fields.<a href="./src/resources/logpush/datasets/fields.ts">list</a>(datasetId, { ...params }) -> FieldListResponse</code>

### Jobs

Types:

- <code><a href="./src/resources/logpush/datasets/jobs.ts">JobListResponse</a></code>

Methods:

- <code title="get /{account_or_zone}/{account_or_zone_id}/logpush/datasets/{dataset_id}/jobs">client.logpush.datasets.jobs.<a href="./src/resources/logpush/datasets/jobs.ts">list</a>(datasetId, { ...params }) -> JobListResponse</code>

## Edge

Types:

- <code><a href="./src/resources/logpush/edge.ts">EdgeCreateResponse</a></code>
- <code><a href="./src/resources/logpush/edge.ts">EdgeGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/logpush/edge">client.logpush.edge.<a href="./src/resources/logpush/edge.ts">create</a>(zoneId, { ...params }) -> EdgeCreateResponse | null</code>
- <code title="get /zones/{zone_id}/logpush/edge">client.logpush.edge.<a href="./src/resources/logpush/edge.ts">get</a>(zoneId) -> EdgeGetResponse</code>

## Jobs

Types:

- <code><a href="./src/resources/logpush/jobs.ts">JobCreateResponse</a></code>
- <code><a href="./src/resources/logpush/jobs.ts">JobUpdateResponse</a></code>
- <code><a href="./src/resources/logpush/jobs.ts">JobListResponse</a></code>
- <code><a href="./src/resources/logpush/jobs.ts">JobDeleteResponse</a></code>
- <code><a href="./src/resources/logpush/jobs.ts">JobGetResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/logpush/jobs">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">create</a>({ ...params }) -> JobCreateResponse | null</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/logpush/jobs/{job_id}">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">update</a>(jobId, { ...params }) -> JobUpdateResponse | null</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/logpush/jobs">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">list</a>({ ...params }) -> JobListResponse</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/logpush/jobs/{job_id}">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">delete</a>(jobId, { ...params }) -> JobDeleteResponse | null</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/logpush/jobs/{job_id}">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">get</a>(jobId, { ...params }) -> JobGetResponse | null</code>

## Ownership

Types:

- <code><a href="./src/resources/logpush/ownership.ts">OwnershipCreateResponse</a></code>
- <code><a href="./src/resources/logpush/ownership.ts">OwnershipValidateResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/logpush/ownership">client.logpush.ownership.<a href="./src/resources/logpush/ownership.ts">create</a>({ ...params }) -> OwnershipCreateResponse | null</code>
- <code title="post /{account_or_zone}/{account_or_zone_id}/logpush/ownership/validate">client.logpush.ownership.<a href="./src/resources/logpush/ownership.ts">validate</a>({ ...params }) -> OwnershipValidateResponse | null</code>

## Validate

Types:

- <code><a href="./src/resources/logpush/validate.ts">ValidateDestinationResponse</a></code>
- <code><a href="./src/resources/logpush/validate.ts">ValidateOriginResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/logpush/validate/destination/exists">client.logpush.validate.<a href="./src/resources/logpush/validate.ts">destination</a>({ ...params }) -> ValidateDestinationResponse | null</code>
- <code title="post /{account_or_zone}/{account_or_zone_id}/logpush/validate/origin">client.logpush.validate.<a href="./src/resources/logpush/validate.ts">origin</a>({ ...params }) -> ValidateOriginResponse | null</code>

# Logs

## Controls

### Retentions

#### Flags

Types:

- <code><a href="./src/resources/logs/controls/retentions/flags.ts">FlagCreateResponse</a></code>
- <code><a href="./src/resources/logs/controls/retentions/flags.ts">FlagLogsReceivedGetLogRetentionFlagResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/logs/control/retention/flag">client.logs.controls.retentions.flags.<a href="./src/resources/logs/controls/retentions/flags.ts">create</a>(zoneIdentifier, { ...params }) -> FlagCreateResponse</code>
- <code title="get /zones/{zone_identifier}/logs/control/retention/flag">client.logs.controls.retentions.flags.<a href="./src/resources/logs/controls/retentions/flags.ts">logsReceivedGetLogRetentionFlag</a>(zoneIdentifier) -> FlagLogsReceivedGetLogRetentionFlagResponse</code>

### Cmb

#### Config

Types:

- <code><a href="./src/resources/logs/controls/cmb/config.ts">ConfigCreateResponse</a></code>
- <code><a href="./src/resources/logs/controls/cmb/config.ts">ConfigDeleteResponse</a></code>
- <code><a href="./src/resources/logs/controls/cmb/config.ts">ConfigGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/logs/control/cmb/config">client.logs.controls.cmb.config.<a href="./src/resources/logs/controls/cmb/config.ts">create</a>(accountId, { ...params }) -> ConfigCreateResponse | null</code>
- <code title="delete /accounts/{account_id}/logs/control/cmb/config">client.logs.controls.cmb.config.<a href="./src/resources/logs/controls/cmb/config.ts">delete</a>(accountId) -> ConfigDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/logs/control/cmb/config">client.logs.controls.cmb.config.<a href="./src/resources/logs/controls/cmb/config.ts">get</a>(accountId) -> ConfigGetResponse | null</code>

## Rayids

Types:

- <code><a href="./src/resources/logs/rayids.ts">RayidGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/logs/rayids/{ray_identifier}">client.logs.rayids.<a href="./src/resources/logs/rayids.ts">get</a>(zoneIdentifier, rayIdentifier, { ...params }) -> RayidGetResponse</code>

## Received

Types:

- <code><a href="./src/resources/logs/received/received.ts">ReceivedGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/logs/received">client.logs.received.<a href="./src/resources/logs/received/received.ts">get</a>(zoneIdentifier, { ...params }) -> ReceivedGetResponse</code>

### Fields

Types:

- <code><a href="./src/resources/logs/received/fields.ts">FieldListResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/logs/received/fields">client.logs.received.fields.<a href="./src/resources/logs/received/fields.ts">list</a>(zoneIdentifier) -> FieldListResponse</code>

# OriginTLSClientAuth

Types:

- <code><a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">OriginTLSClientAuthCreateResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">OriginTLSClientAuthListResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">OriginTLSClientAuthDeleteResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">OriginTLSClientAuthGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/origin_tls_client_auth">client.originTLSClientAuth.<a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">create</a>(zoneId, { ...params }) -> OriginTLSClientAuthCreateResponse</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth">client.originTLSClientAuth.<a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">list</a>(zoneId) -> OriginTLSClientAuthListResponse | null</code>
- <code title="delete /zones/{zone_id}/origin_tls_client_auth/{certificate_id}">client.originTLSClientAuth.<a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">delete</a>(zoneId, certificateId) -> OriginTLSClientAuthDeleteResponse</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/{certificate_id}">client.originTLSClientAuth.<a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">get</a>(zoneId, certificateId) -> OriginTLSClientAuthGetResponse</code>

## Hostnames

Types:

- <code><a href="./src/resources/origin-tls-client-auth/hostnames/hostnames.ts">HostnameUpdateResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/hostnames/hostnames.ts">HostnameGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/origin_tls_client_auth/hostnames">client.originTLSClientAuth.hostnames.<a href="./src/resources/origin-tls-client-auth/hostnames/hostnames.ts">update</a>(zoneId, { ...params }) -> HostnameUpdateResponse | null</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/hostnames/{hostname}">client.originTLSClientAuth.hostnames.<a href="./src/resources/origin-tls-client-auth/hostnames/hostnames.ts">get</a>(zoneId, hostname) -> HostnameGetResponse</code>

### Certificates

Types:

- <code><a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">CertificateCreateResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">CertificateListResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">CertificateDeleteResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">CertificateGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates">client.originTLSClientAuth.hostnames.certificates.<a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">create</a>(zoneId, { ...params }) -> CertificateCreateResponse</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates">client.originTLSClientAuth.hostnames.certificates.<a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">list</a>(zoneId) -> CertificateListResponse | null</code>
- <code title="delete /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates/{certificate_id}">client.originTLSClientAuth.hostnames.certificates.<a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">delete</a>(zoneId, certificateId) -> CertificateDeleteResponse</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates/{certificate_id}">client.originTLSClientAuth.hostnames.certificates.<a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">get</a>(zoneId, certificateId) -> CertificateGetResponse</code>

## Settings

Types:

- <code><a href="./src/resources/origin-tls-client-auth/settings.ts">SettingUpdateResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/origin_tls_client_auth/settings">client.originTLSClientAuth.settings.<a href="./src/resources/origin-tls-client-auth/settings.ts">update</a>(zoneId, { ...params }) -> SettingUpdateResponse</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/settings">client.originTLSClientAuth.settings.<a href="./src/resources/origin-tls-client-auth/settings.ts">get</a>(zoneId) -> SettingGetResponse</code>

# Pagerules

Types:

- <code><a href="./src/resources/pagerules/pagerules.ts">PageruleCreateResponse</a></code>
- <code><a href="./src/resources/pagerules/pagerules.ts">PageruleUpdateResponse</a></code>
- <code><a href="./src/resources/pagerules/pagerules.ts">PageruleListResponse</a></code>
- <code><a href="./src/resources/pagerules/pagerules.ts">PageruleDeleteResponse</a></code>
- <code><a href="./src/resources/pagerules/pagerules.ts">PageruleEditResponse</a></code>
- <code><a href="./src/resources/pagerules/pagerules.ts">PageruleGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/pagerules">client.pagerules.<a href="./src/resources/pagerules/pagerules.ts">create</a>(zoneId, { ...params }) -> PageruleCreateResponse</code>
- <code title="put /zones/{zone_id}/pagerules/{pagerule_id}">client.pagerules.<a href="./src/resources/pagerules/pagerules.ts">update</a>(zoneId, pageruleId, { ...params }) -> PageruleUpdateResponse</code>
- <code title="get /zones/{zone_id}/pagerules">client.pagerules.<a href="./src/resources/pagerules/pagerules.ts">list</a>(zoneId, { ...params }) -> PageruleListResponse</code>
- <code title="delete /zones/{zone_id}/pagerules/{pagerule_id}">client.pagerules.<a href="./src/resources/pagerules/pagerules.ts">delete</a>(zoneId, pageruleId) -> PageruleDeleteResponse | null</code>
- <code title="patch /zones/{zone_id}/pagerules/{pagerule_id}">client.pagerules.<a href="./src/resources/pagerules/pagerules.ts">edit</a>(zoneId, pageruleId, { ...params }) -> PageruleEditResponse</code>
- <code title="get /zones/{zone_id}/pagerules/{pagerule_id}">client.pagerules.<a href="./src/resources/pagerules/pagerules.ts">get</a>(zoneId, pageruleId) -> PageruleGetResponse</code>

## Settings

Types:

- <code><a href="./src/resources/pagerules/settings.ts">SettingListResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/pagerules/settings">client.pagerules.settings.<a href="./src/resources/pagerules/settings.ts">list</a>(zoneId) -> SettingListResponse</code>

# RateLimits

Types:

- <code><a href="./src/resources/rate-limits.ts">RateLimitCreateResponse</a></code>
- <code><a href="./src/resources/rate-limits.ts">RateLimitListResponse</a></code>
- <code><a href="./src/resources/rate-limits.ts">RateLimitDeleteResponse</a></code>
- <code><a href="./src/resources/rate-limits.ts">RateLimitEditResponse</a></code>
- <code><a href="./src/resources/rate-limits.ts">RateLimitGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/rate_limits">client.rateLimits.<a href="./src/resources/rate-limits.ts">create</a>(zoneIdentifier, { ...params }) -> RateLimitCreateResponse | null</code>
- <code title="get /zones/{zone_identifier}/rate_limits">client.rateLimits.<a href="./src/resources/rate-limits.ts">list</a>(zoneIdentifier, { ...params }) -> RateLimitListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_identifier}/rate_limits/{id}">client.rateLimits.<a href="./src/resources/rate-limits.ts">delete</a>(zoneIdentifier, id) -> RateLimitDeleteResponse | null</code>
- <code title="put /zones/{zone_identifier}/rate_limits/{id}">client.rateLimits.<a href="./src/resources/rate-limits.ts">edit</a>(zoneIdentifier, id, { ...params }) -> RateLimitEditResponse | null</code>
- <code title="get /zones/{zone_identifier}/rate_limits/{id}">client.rateLimits.<a href="./src/resources/rate-limits.ts">get</a>(zoneIdentifier, id) -> RateLimitGetResponse | null</code>

# SecondaryDNS

## ForceAxfrs

Types:

- <code><a href="./src/resources/secondary-dns/force-axfrs.ts">ForceAxfrCreateResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/secondary_dns/force_axfr">client.secondaryDNS.forceAxfrs.<a href="./src/resources/secondary-dns/force-axfrs.ts">create</a>(zoneId) -> ForceAxfrCreateResponse</code>

## Incoming

Types:

- <code><a href="./src/resources/secondary-dns/incoming.ts">IncomingCreateResponse</a></code>
- <code><a href="./src/resources/secondary-dns/incoming.ts">IncomingUpdateResponse</a></code>
- <code><a href="./src/resources/secondary-dns/incoming.ts">IncomingDeleteResponse</a></code>
- <code><a href="./src/resources/secondary-dns/incoming.ts">IncomingGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/secondary_dns/incoming">client.secondaryDNS.incoming.<a href="./src/resources/secondary-dns/incoming.ts">create</a>(zoneId, { ...params }) -> IncomingCreateResponse</code>
- <code title="put /zones/{zone_id}/secondary_dns/incoming">client.secondaryDNS.incoming.<a href="./src/resources/secondary-dns/incoming.ts">update</a>(zoneId, { ...params }) -> IncomingUpdateResponse</code>
- <code title="delete /zones/{zone_id}/secondary_dns/incoming">client.secondaryDNS.incoming.<a href="./src/resources/secondary-dns/incoming.ts">delete</a>(zoneId) -> IncomingDeleteResponse</code>
- <code title="get /zones/{zone_id}/secondary_dns/incoming">client.secondaryDNS.incoming.<a href="./src/resources/secondary-dns/incoming.ts">get</a>(zoneId) -> IncomingGetResponse</code>

## Outgoing

Types:

- <code><a href="./src/resources/secondary-dns/outgoing/outgoing.ts">OutgoingCreateResponse</a></code>
- <code><a href="./src/resources/secondary-dns/outgoing/outgoing.ts">OutgoingUpdateResponse</a></code>
- <code><a href="./src/resources/secondary-dns/outgoing/outgoing.ts">OutgoingDeleteResponse</a></code>
- <code><a href="./src/resources/secondary-dns/outgoing/outgoing.ts">OutgoingDisableResponse</a></code>
- <code><a href="./src/resources/secondary-dns/outgoing/outgoing.ts">OutgoingEnableResponse</a></code>
- <code><a href="./src/resources/secondary-dns/outgoing/outgoing.ts">OutgoingForceNotifyResponse</a></code>
- <code><a href="./src/resources/secondary-dns/outgoing/outgoing.ts">OutgoingGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/secondary_dns/outgoing">client.secondaryDNS.outgoing.<a href="./src/resources/secondary-dns/outgoing/outgoing.ts">create</a>(zoneId, { ...params }) -> OutgoingCreateResponse</code>
- <code title="put /zones/{zone_id}/secondary_dns/outgoing">client.secondaryDNS.outgoing.<a href="./src/resources/secondary-dns/outgoing/outgoing.ts">update</a>(zoneId, { ...params }) -> OutgoingUpdateResponse</code>
- <code title="delete /zones/{zone_id}/secondary_dns/outgoing">client.secondaryDNS.outgoing.<a href="./src/resources/secondary-dns/outgoing/outgoing.ts">delete</a>(zoneId) -> OutgoingDeleteResponse</code>
- <code title="post /zones/{zone_id}/secondary_dns/outgoing/disable">client.secondaryDNS.outgoing.<a href="./src/resources/secondary-dns/outgoing/outgoing.ts">disable</a>(zoneId) -> OutgoingDisableResponse</code>
- <code title="post /zones/{zone_id}/secondary_dns/outgoing/enable">client.secondaryDNS.outgoing.<a href="./src/resources/secondary-dns/outgoing/outgoing.ts">enable</a>(zoneId) -> OutgoingEnableResponse</code>
- <code title="post /zones/{zone_id}/secondary_dns/outgoing/force_notify">client.secondaryDNS.outgoing.<a href="./src/resources/secondary-dns/outgoing/outgoing.ts">forceNotify</a>(zoneId) -> OutgoingForceNotifyResponse</code>
- <code title="get /zones/{zone_id}/secondary_dns/outgoing">client.secondaryDNS.outgoing.<a href="./src/resources/secondary-dns/outgoing/outgoing.ts">get</a>(zoneId) -> OutgoingGetResponse</code>

### Status

Types:

- <code><a href="./src/resources/secondary-dns/outgoing/status.ts">StatusGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/secondary_dns/outgoing/status">client.secondaryDNS.outgoing.status.<a href="./src/resources/secondary-dns/outgoing/status.ts">get</a>(zoneId) -> StatusGetResponse</code>

## ACLs

Types:

- <code><a href="./src/resources/secondary-dns/acls.ts">ACLCreateResponse</a></code>
- <code><a href="./src/resources/secondary-dns/acls.ts">ACLUpdateResponse</a></code>
- <code><a href="./src/resources/secondary-dns/acls.ts">ACLListResponse</a></code>
- <code><a href="./src/resources/secondary-dns/acls.ts">ACLDeleteResponse</a></code>
- <code><a href="./src/resources/secondary-dns/acls.ts">ACLGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/secondary_dns/acls">client.secondaryDNS.acls.<a href="./src/resources/secondary-dns/acls.ts">create</a>(accountId, { ...params }) -> ACLCreateResponse</code>
- <code title="put /accounts/{account_id}/secondary_dns/acls/{acl_id}">client.secondaryDNS.acls.<a href="./src/resources/secondary-dns/acls.ts">update</a>(accountId, aclId, { ...params }) -> ACLUpdateResponse</code>
- <code title="get /accounts/{account_id}/secondary_dns/acls">client.secondaryDNS.acls.<a href="./src/resources/secondary-dns/acls.ts">list</a>(accountId) -> ACLListResponse | null</code>
- <code title="delete /accounts/{account_id}/secondary_dns/acls/{acl_id}">client.secondaryDNS.acls.<a href="./src/resources/secondary-dns/acls.ts">delete</a>(accountId, aclId) -> ACLDeleteResponse</code>
- <code title="get /accounts/{account_id}/secondary_dns/acls/{acl_id}">client.secondaryDNS.acls.<a href="./src/resources/secondary-dns/acls.ts">get</a>(accountId, aclId) -> ACLGetResponse</code>

## Peers

Types:

- <code><a href="./src/resources/secondary-dns/peers.ts">PeerCreateResponse</a></code>
- <code><a href="./src/resources/secondary-dns/peers.ts">PeerUpdateResponse</a></code>
- <code><a href="./src/resources/secondary-dns/peers.ts">PeerListResponse</a></code>
- <code><a href="./src/resources/secondary-dns/peers.ts">PeerDeleteResponse</a></code>
- <code><a href="./src/resources/secondary-dns/peers.ts">PeerGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/secondary_dns/peers">client.secondaryDNS.peers.<a href="./src/resources/secondary-dns/peers.ts">create</a>(accountId, { ...params }) -> PeerCreateResponse</code>
- <code title="put /accounts/{account_id}/secondary_dns/peers/{peer_id}">client.secondaryDNS.peers.<a href="./src/resources/secondary-dns/peers.ts">update</a>(accountId, peerId, { ...params }) -> PeerUpdateResponse</code>
- <code title="get /accounts/{account_id}/secondary_dns/peers">client.secondaryDNS.peers.<a href="./src/resources/secondary-dns/peers.ts">list</a>(accountId) -> PeerListResponse | null</code>
- <code title="delete /accounts/{account_id}/secondary_dns/peers/{peer_id}">client.secondaryDNS.peers.<a href="./src/resources/secondary-dns/peers.ts">delete</a>(accountId, peerId) -> PeerDeleteResponse</code>
- <code title="get /accounts/{account_id}/secondary_dns/peers/{peer_id}">client.secondaryDNS.peers.<a href="./src/resources/secondary-dns/peers.ts">get</a>(accountId, peerId) -> PeerGetResponse</code>

## TSIGs

Types:

- <code><a href="./src/resources/secondary-dns/tsigs.ts">TSIGCreateResponse</a></code>
- <code><a href="./src/resources/secondary-dns/tsigs.ts">TSIGUpdateResponse</a></code>
- <code><a href="./src/resources/secondary-dns/tsigs.ts">TSIGListResponse</a></code>
- <code><a href="./src/resources/secondary-dns/tsigs.ts">TSIGDeleteResponse</a></code>
- <code><a href="./src/resources/secondary-dns/tsigs.ts">TSIGGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/secondary_dns/tsigs">client.secondaryDNS.tsigs.<a href="./src/resources/secondary-dns/tsigs.ts">create</a>(accountId, { ...params }) -> TSIGCreateResponse</code>
- <code title="put /accounts/{account_id}/secondary_dns/tsigs/{tsig_id}">client.secondaryDNS.tsigs.<a href="./src/resources/secondary-dns/tsigs.ts">update</a>(accountId, tsigId, { ...params }) -> TSIGUpdateResponse</code>
- <code title="get /accounts/{account_id}/secondary_dns/tsigs">client.secondaryDNS.tsigs.<a href="./src/resources/secondary-dns/tsigs.ts">list</a>(accountId) -> TSIGListResponse | null</code>
- <code title="delete /accounts/{account_id}/secondary_dns/tsigs/{tsig_id}">client.secondaryDNS.tsigs.<a href="./src/resources/secondary-dns/tsigs.ts">delete</a>(accountId, tsigId) -> TSIGDeleteResponse</code>
- <code title="get /accounts/{account_id}/secondary_dns/tsigs/{tsig_id}">client.secondaryDNS.tsigs.<a href="./src/resources/secondary-dns/tsigs.ts">get</a>(accountId, tsigId) -> TSIGGetResponse</code>

# Settings

Types:

- <code><a href="./src/resources/settings/settings.ts">SettingListResponse</a></code>
- <code><a href="./src/resources/settings/settings.ts">SettingEditResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/settings">client.settings.<a href="./src/resources/settings/settings.ts">list</a>(zoneId) -> SettingListResponse</code>
- <code title="patch /zones/{zone_id}/settings">client.settings.<a href="./src/resources/settings/settings.ts">edit</a>(zoneId, { ...params }) -> SettingEditResponse</code>

## ZeroRTT

Types:

- <code><a href="./src/resources/settings/zero-rtt.ts">ZeroRTTEditResponse</a></code>
- <code><a href="./src/resources/settings/zero-rtt.ts">ZeroRTTGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/0rtt">client.settings.zeroRTT.<a href="./src/resources/settings/zero-rtt.ts">edit</a>(zoneId, { ...params }) -> ZeroRTTEditResponse</code>
- <code title="get /zones/{zone_id}/settings/0rtt">client.settings.zeroRTT.<a href="./src/resources/settings/zero-rtt.ts">get</a>(zoneId) -> ZeroRTTGetResponse</code>

## AdvancedDDOS

Types:

- <code><a href="./src/resources/settings/advanced-ddos.ts">AdvancedDDOSGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/settings/advanced_ddos">client.settings.advancedDDOS.<a href="./src/resources/settings/advanced-ddos.ts">get</a>(zoneId) -> AdvancedDDOSGetResponse</code>

## AlwaysOnline

Types:

- <code><a href="./src/resources/settings/always-online.ts">AlwaysOnlineEditResponse</a></code>
- <code><a href="./src/resources/settings/always-online.ts">AlwaysOnlineGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/always_online">client.settings.alwaysOnline.<a href="./src/resources/settings/always-online.ts">edit</a>(zoneId, { ...params }) -> AlwaysOnlineEditResponse</code>
- <code title="get /zones/{zone_id}/settings/always_online">client.settings.alwaysOnline.<a href="./src/resources/settings/always-online.ts">get</a>(zoneId) -> AlwaysOnlineGetResponse</code>

## AlwaysUseHTTPS

Types:

- <code><a href="./src/resources/settings/always-use-https.ts">AlwaysUseHTTPSEditResponse</a></code>
- <code><a href="./src/resources/settings/always-use-https.ts">AlwaysUseHTTPSGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/always_use_https">client.settings.alwaysUseHTTPS.<a href="./src/resources/settings/always-use-https.ts">edit</a>(zoneId, { ...params }) -> AlwaysUseHTTPSEditResponse</code>
- <code title="get /zones/{zone_id}/settings/always_use_https">client.settings.alwaysUseHTTPS.<a href="./src/resources/settings/always-use-https.ts">get</a>(zoneId) -> AlwaysUseHTTPSGetResponse</code>

## AutomaticHTTPSRewrites

Types:

- <code><a href="./src/resources/settings/automatic-https-rewrites.ts">AutomaticHTTPSRewriteEditResponse</a></code>
- <code><a href="./src/resources/settings/automatic-https-rewrites.ts">AutomaticHTTPSRewriteGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/automatic_https_rewrites">client.settings.automaticHTTPSRewrites.<a href="./src/resources/settings/automatic-https-rewrites.ts">edit</a>(zoneId, { ...params }) -> AutomaticHTTPSRewriteEditResponse</code>
- <code title="get /zones/{zone_id}/settings/automatic_https_rewrites">client.settings.automaticHTTPSRewrites.<a href="./src/resources/settings/automatic-https-rewrites.ts">get</a>(zoneId) -> AutomaticHTTPSRewriteGetResponse</code>

## AutomaticPlatformOptimization

Types:

- <code><a href="./src/resources/settings/automatic-platform-optimization.ts">AutomaticPlatformOptimizationEditResponse</a></code>
- <code><a href="./src/resources/settings/automatic-platform-optimization.ts">AutomaticPlatformOptimizationGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/automatic_platform_optimization">client.settings.automaticPlatformOptimization.<a href="./src/resources/settings/automatic-platform-optimization.ts">edit</a>(zoneId, { ...params }) -> AutomaticPlatformOptimizationEditResponse</code>
- <code title="get /zones/{zone_id}/settings/automatic_platform_optimization">client.settings.automaticPlatformOptimization.<a href="./src/resources/settings/automatic-platform-optimization.ts">get</a>(zoneId) -> AutomaticPlatformOptimizationGetResponse</code>

## Brotli

Types:

- <code><a href="./src/resources/settings/brotli.ts">BrotliEditResponse</a></code>
- <code><a href="./src/resources/settings/brotli.ts">BrotliGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/brotli">client.settings.brotli.<a href="./src/resources/settings/brotli.ts">edit</a>(zoneId, { ...params }) -> BrotliEditResponse</code>
- <code title="get /zones/{zone_id}/settings/brotli">client.settings.brotli.<a href="./src/resources/settings/brotli.ts">get</a>(zoneId) -> BrotliGetResponse</code>

## BrowserCacheTTL

Types:

- <code><a href="./src/resources/settings/browser-cache-ttl.ts">BrowserCacheTTLEditResponse</a></code>
- <code><a href="./src/resources/settings/browser-cache-ttl.ts">BrowserCacheTTLGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/browser_cache_ttl">client.settings.browserCacheTTL.<a href="./src/resources/settings/browser-cache-ttl.ts">edit</a>(zoneId, { ...params }) -> BrowserCacheTTLEditResponse</code>
- <code title="get /zones/{zone_id}/settings/browser_cache_ttl">client.settings.browserCacheTTL.<a href="./src/resources/settings/browser-cache-ttl.ts">get</a>(zoneId) -> BrowserCacheTTLGetResponse</code>

## BrowserCheck

Types:

- <code><a href="./src/resources/settings/browser-check.ts">BrowserCheckEditResponse</a></code>
- <code><a href="./src/resources/settings/browser-check.ts">BrowserCheckGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/browser_check">client.settings.browserCheck.<a href="./src/resources/settings/browser-check.ts">edit</a>(zoneId, { ...params }) -> BrowserCheckEditResponse</code>
- <code title="get /zones/{zone_id}/settings/browser_check">client.settings.browserCheck.<a href="./src/resources/settings/browser-check.ts">get</a>(zoneId) -> BrowserCheckGetResponse</code>

## CacheLevel

Types:

- <code><a href="./src/resources/settings/cache-level.ts">CacheLevelEditResponse</a></code>
- <code><a href="./src/resources/settings/cache-level.ts">CacheLevelGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/cache_level">client.settings.cacheLevel.<a href="./src/resources/settings/cache-level.ts">edit</a>(zoneId, { ...params }) -> CacheLevelEditResponse</code>
- <code title="get /zones/{zone_id}/settings/cache_level">client.settings.cacheLevel.<a href="./src/resources/settings/cache-level.ts">get</a>(zoneId) -> CacheLevelGetResponse</code>

## ChallengeTTL

Types:

- <code><a href="./src/resources/settings/challenge-ttl.ts">ChallengeTTLEditResponse</a></code>
- <code><a href="./src/resources/settings/challenge-ttl.ts">ChallengeTTLGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/challenge_ttl">client.settings.challengeTTL.<a href="./src/resources/settings/challenge-ttl.ts">edit</a>(zoneId, { ...params }) -> ChallengeTTLEditResponse</code>
- <code title="get /zones/{zone_id}/settings/challenge_ttl">client.settings.challengeTTL.<a href="./src/resources/settings/challenge-ttl.ts">get</a>(zoneId) -> ChallengeTTLGetResponse</code>

## Ciphers

Types:

- <code><a href="./src/resources/settings/ciphers.ts">CipherEditResponse</a></code>
- <code><a href="./src/resources/settings/ciphers.ts">CipherGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/ciphers">client.settings.ciphers.<a href="./src/resources/settings/ciphers.ts">edit</a>(zoneId, { ...params }) -> CipherEditResponse</code>
- <code title="get /zones/{zone_id}/settings/ciphers">client.settings.ciphers.<a href="./src/resources/settings/ciphers.ts">get</a>(zoneId) -> CipherGetResponse</code>

## DevelopmentMode

Types:

- <code><a href="./src/resources/settings/development-mode.ts">DevelopmentModeEditResponse</a></code>
- <code><a href="./src/resources/settings/development-mode.ts">DevelopmentModeGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/development_mode">client.settings.developmentMode.<a href="./src/resources/settings/development-mode.ts">edit</a>(zoneId, { ...params }) -> DevelopmentModeEditResponse</code>
- <code title="get /zones/{zone_id}/settings/development_mode">client.settings.developmentMode.<a href="./src/resources/settings/development-mode.ts">get</a>(zoneId) -> DevelopmentModeGetResponse</code>

## EarlyHints

Types:

- <code><a href="./src/resources/settings/early-hints.ts">EarlyHintEditResponse</a></code>
- <code><a href="./src/resources/settings/early-hints.ts">EarlyHintGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/early_hints">client.settings.earlyHints.<a href="./src/resources/settings/early-hints.ts">edit</a>(zoneId, { ...params }) -> EarlyHintEditResponse</code>
- <code title="get /zones/{zone_id}/settings/early_hints">client.settings.earlyHints.<a href="./src/resources/settings/early-hints.ts">get</a>(zoneId) -> EarlyHintGetResponse</code>

## EmailObfuscation

Types:

- <code><a href="./src/resources/settings/email-obfuscation.ts">EmailObfuscationEditResponse</a></code>
- <code><a href="./src/resources/settings/email-obfuscation.ts">EmailObfuscationGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/email_obfuscation">client.settings.emailObfuscation.<a href="./src/resources/settings/email-obfuscation.ts">edit</a>(zoneId, { ...params }) -> EmailObfuscationEditResponse</code>
- <code title="get /zones/{zone_id}/settings/email_obfuscation">client.settings.emailObfuscation.<a href="./src/resources/settings/email-obfuscation.ts">get</a>(zoneId) -> EmailObfuscationGetResponse</code>

## H2Prioritization

Types:

- <code><a href="./src/resources/settings/h2-prioritization.ts">H2PrioritizationEditResponse</a></code>
- <code><a href="./src/resources/settings/h2-prioritization.ts">H2PrioritizationGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/h2_prioritization">client.settings.h2Prioritization.<a href="./src/resources/settings/h2-prioritization.ts">edit</a>(zoneId, { ...params }) -> H2PrioritizationEditResponse</code>
- <code title="get /zones/{zone_id}/settings/h2_prioritization">client.settings.h2Prioritization.<a href="./src/resources/settings/h2-prioritization.ts">get</a>(zoneId) -> H2PrioritizationGetResponse</code>

## HotlinkProtection

Types:

- <code><a href="./src/resources/settings/hotlink-protection.ts">HotlinkProtectionEditResponse</a></code>
- <code><a href="./src/resources/settings/hotlink-protection.ts">HotlinkProtectionGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/hotlink_protection">client.settings.hotlinkProtection.<a href="./src/resources/settings/hotlink-protection.ts">edit</a>(zoneId, { ...params }) -> HotlinkProtectionEditResponse</code>
- <code title="get /zones/{zone_id}/settings/hotlink_protection">client.settings.hotlinkProtection.<a href="./src/resources/settings/hotlink-protection.ts">get</a>(zoneId) -> HotlinkProtectionGetResponse</code>

## HTTP2

Types:

- <code><a href="./src/resources/settings/http2.ts">HTTP2EditResponse</a></code>
- <code><a href="./src/resources/settings/http2.ts">HTTP2GetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/http2">client.settings.http2.<a href="./src/resources/settings/http2.ts">edit</a>(zoneId, { ...params }) -> HTTP2EditResponse</code>
- <code title="get /zones/{zone_id}/settings/http2">client.settings.http2.<a href="./src/resources/settings/http2.ts">get</a>(zoneId) -> HTTP2GetResponse</code>

## HTTP3

Types:

- <code><a href="./src/resources/settings/http3.ts">HTTP3EditResponse</a></code>
- <code><a href="./src/resources/settings/http3.ts">HTTP3GetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/http3">client.settings.http3.<a href="./src/resources/settings/http3.ts">edit</a>(zoneId, { ...params }) -> HTTP3EditResponse</code>
- <code title="get /zones/{zone_id}/settings/http3">client.settings.http3.<a href="./src/resources/settings/http3.ts">get</a>(zoneId) -> HTTP3GetResponse</code>

## ImageResizing

Types:

- <code><a href="./src/resources/settings/image-resizing.ts">ImageResizingEditResponse</a></code>
- <code><a href="./src/resources/settings/image-resizing.ts">ImageResizingGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/image_resizing">client.settings.imageResizing.<a href="./src/resources/settings/image-resizing.ts">edit</a>(zoneId, { ...params }) -> ImageResizingEditResponse</code>
- <code title="get /zones/{zone_id}/settings/image_resizing">client.settings.imageResizing.<a href="./src/resources/settings/image-resizing.ts">get</a>(zoneId) -> ImageResizingGetResponse</code>

## IPGeolocation

Types:

- <code><a href="./src/resources/settings/ip-geolocation.ts">IPGeolocationEditResponse</a></code>
- <code><a href="./src/resources/settings/ip-geolocation.ts">IPGeolocationGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/ip_geolocation">client.settings.ipGeolocation.<a href="./src/resources/settings/ip-geolocation.ts">edit</a>(zoneId, { ...params }) -> IPGeolocationEditResponse</code>
- <code title="get /zones/{zone_id}/settings/ip_geolocation">client.settings.ipGeolocation.<a href="./src/resources/settings/ip-geolocation.ts">get</a>(zoneId) -> IPGeolocationGetResponse</code>

## IPV6

Types:

- <code><a href="./src/resources/settings/ipv6.ts">IPV6EditResponse</a></code>
- <code><a href="./src/resources/settings/ipv6.ts">IPV6GetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/ipv6">client.settings.ipv6.<a href="./src/resources/settings/ipv6.ts">edit</a>(zoneId, { ...params }) -> IPV6EditResponse</code>
- <code title="get /zones/{zone_id}/settings/ipv6">client.settings.ipv6.<a href="./src/resources/settings/ipv6.ts">get</a>(zoneId) -> IPV6GetResponse</code>

## MinTLSVersion

Types:

- <code><a href="./src/resources/settings/min-tls-version.ts">MinTLSVersionEditResponse</a></code>
- <code><a href="./src/resources/settings/min-tls-version.ts">MinTLSVersionGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/min_tls_version">client.settings.minTLSVersion.<a href="./src/resources/settings/min-tls-version.ts">edit</a>(zoneId, { ...params }) -> MinTLSVersionEditResponse</code>
- <code title="get /zones/{zone_id}/settings/min_tls_version">client.settings.minTLSVersion.<a href="./src/resources/settings/min-tls-version.ts">get</a>(zoneId) -> MinTLSVersionGetResponse</code>

## Minify

Types:

- <code><a href="./src/resources/settings/minify.ts">MinifyEditResponse</a></code>
- <code><a href="./src/resources/settings/minify.ts">MinifyGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/minify">client.settings.minify.<a href="./src/resources/settings/minify.ts">edit</a>(zoneId, { ...params }) -> MinifyEditResponse</code>
- <code title="get /zones/{zone_id}/settings/minify">client.settings.minify.<a href="./src/resources/settings/minify.ts">get</a>(zoneId) -> MinifyGetResponse</code>

## Mirage

Types:

- <code><a href="./src/resources/settings/mirage.ts">MirageEditResponse</a></code>
- <code><a href="./src/resources/settings/mirage.ts">MirageGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/mirage">client.settings.mirage.<a href="./src/resources/settings/mirage.ts">edit</a>(zoneId, { ...params }) -> MirageEditResponse</code>
- <code title="get /zones/{zone_id}/settings/mirage">client.settings.mirage.<a href="./src/resources/settings/mirage.ts">get</a>(zoneId) -> MirageGetResponse</code>

## MobileRedirect

Types:

- <code><a href="./src/resources/settings/mobile-redirect.ts">MobileRedirectEditResponse</a></code>
- <code><a href="./src/resources/settings/mobile-redirect.ts">MobileRedirectGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/mobile_redirect">client.settings.mobileRedirect.<a href="./src/resources/settings/mobile-redirect.ts">edit</a>(zoneId, { ...params }) -> MobileRedirectEditResponse</code>
- <code title="get /zones/{zone_id}/settings/mobile_redirect">client.settings.mobileRedirect.<a href="./src/resources/settings/mobile-redirect.ts">get</a>(zoneId) -> MobileRedirectGetResponse</code>

## NEL

Types:

- <code><a href="./src/resources/settings/nel.ts">NELEditResponse</a></code>
- <code><a href="./src/resources/settings/nel.ts">NELGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/nel">client.settings.nel.<a href="./src/resources/settings/nel.ts">edit</a>(zoneId, { ...params }) -> NELEditResponse</code>
- <code title="get /zones/{zone_id}/settings/nel">client.settings.nel.<a href="./src/resources/settings/nel.ts">get</a>(zoneId) -> NELGetResponse</code>

## OpportunisticEncryption

Types:

- <code><a href="./src/resources/settings/opportunistic-encryption.ts">OpportunisticEncryptionEditResponse</a></code>
- <code><a href="./src/resources/settings/opportunistic-encryption.ts">OpportunisticEncryptionGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/opportunistic_encryption">client.settings.opportunisticEncryption.<a href="./src/resources/settings/opportunistic-encryption.ts">edit</a>(zoneId, { ...params }) -> OpportunisticEncryptionEditResponse</code>
- <code title="get /zones/{zone_id}/settings/opportunistic_encryption">client.settings.opportunisticEncryption.<a href="./src/resources/settings/opportunistic-encryption.ts">get</a>(zoneId) -> OpportunisticEncryptionGetResponse</code>

## OpportunisticOnion

Types:

- <code><a href="./src/resources/settings/opportunistic-onion.ts">OpportunisticOnionEditResponse</a></code>
- <code><a href="./src/resources/settings/opportunistic-onion.ts">OpportunisticOnionGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/opportunistic_onion">client.settings.opportunisticOnion.<a href="./src/resources/settings/opportunistic-onion.ts">edit</a>(zoneId, { ...params }) -> OpportunisticOnionEditResponse</code>
- <code title="get /zones/{zone_id}/settings/opportunistic_onion">client.settings.opportunisticOnion.<a href="./src/resources/settings/opportunistic-onion.ts">get</a>(zoneId) -> OpportunisticOnionGetResponse</code>

## OrangeToOrange

Types:

- <code><a href="./src/resources/settings/orange-to-orange.ts">OrangeToOrangeEditResponse</a></code>
- <code><a href="./src/resources/settings/orange-to-orange.ts">OrangeToOrangeGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/orange_to_orange">client.settings.orangeToOrange.<a href="./src/resources/settings/orange-to-orange.ts">edit</a>(zoneId, { ...params }) -> OrangeToOrangeEditResponse</code>
- <code title="get /zones/{zone_id}/settings/orange_to_orange">client.settings.orangeToOrange.<a href="./src/resources/settings/orange-to-orange.ts">get</a>(zoneId) -> OrangeToOrangeGetResponse</code>

## OriginErrorPagePassThru

Types:

- <code><a href="./src/resources/settings/origin-error-page-pass-thru.ts">OriginErrorPagePassThruEditResponse</a></code>
- <code><a href="./src/resources/settings/origin-error-page-pass-thru.ts">OriginErrorPagePassThruGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/origin_error_page_pass_thru">client.settings.originErrorPagePassThru.<a href="./src/resources/settings/origin-error-page-pass-thru.ts">edit</a>(zoneId, { ...params }) -> OriginErrorPagePassThruEditResponse</code>
- <code title="get /zones/{zone_id}/settings/origin_error_page_pass_thru">client.settings.originErrorPagePassThru.<a href="./src/resources/settings/origin-error-page-pass-thru.ts">get</a>(zoneId) -> OriginErrorPagePassThruGetResponse</code>

## OriginMaxHTTPVersion

Types:

- <code><a href="./src/resources/settings/origin-max-http-version.ts">OriginMaxHTTPVersionEditResponse</a></code>
- <code><a href="./src/resources/settings/origin-max-http-version.ts">OriginMaxHTTPVersionGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/origin_max_http_version">client.settings.originMaxHTTPVersion.<a href="./src/resources/settings/origin-max-http-version.ts">edit</a>(zoneId, { ...params }) -> OriginMaxHTTPVersionEditResponse</code>
- <code title="get /zones/{zone_id}/settings/origin_max_http_version">client.settings.originMaxHTTPVersion.<a href="./src/resources/settings/origin-max-http-version.ts">get</a>(zoneId) -> OriginMaxHTTPVersionGetResponse</code>

## Polish

Types:

- <code><a href="./src/resources/settings/polish.ts">PolishEditResponse</a></code>
- <code><a href="./src/resources/settings/polish.ts">PolishGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/polish">client.settings.polish.<a href="./src/resources/settings/polish.ts">edit</a>(zoneId, { ...params }) -> PolishEditResponse</code>
- <code title="get /zones/{zone_id}/settings/polish">client.settings.polish.<a href="./src/resources/settings/polish.ts">get</a>(zoneId) -> PolishGetResponse</code>

## PrefetchPreload

Types:

- <code><a href="./src/resources/settings/prefetch-preload.ts">PrefetchPreloadEditResponse</a></code>
- <code><a href="./src/resources/settings/prefetch-preload.ts">PrefetchPreloadGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/prefetch_preload">client.settings.prefetchPreload.<a href="./src/resources/settings/prefetch-preload.ts">edit</a>(zoneId, { ...params }) -> PrefetchPreloadEditResponse</code>
- <code title="get /zones/{zone_id}/settings/prefetch_preload">client.settings.prefetchPreload.<a href="./src/resources/settings/prefetch-preload.ts">get</a>(zoneId) -> PrefetchPreloadGetResponse</code>

## ProxyReadTimeout

Types:

- <code><a href="./src/resources/settings/proxy-read-timeout.ts">ProxyReadTimeoutEditResponse</a></code>
- <code><a href="./src/resources/settings/proxy-read-timeout.ts">ProxyReadTimeoutGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/proxy_read_timeout">client.settings.proxyReadTimeout.<a href="./src/resources/settings/proxy-read-timeout.ts">edit</a>(zoneId, { ...params }) -> ProxyReadTimeoutEditResponse</code>
- <code title="get /zones/{zone_id}/settings/proxy_read_timeout">client.settings.proxyReadTimeout.<a href="./src/resources/settings/proxy-read-timeout.ts">get</a>(zoneId) -> ProxyReadTimeoutGetResponse</code>

## PseudoIPV4

Types:

- <code><a href="./src/resources/settings/pseudo-ipv4.ts">PseudoIPV4EditResponse</a></code>
- <code><a href="./src/resources/settings/pseudo-ipv4.ts">PseudoIPV4GetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/pseudo_ipv4">client.settings.pseudoIPV4.<a href="./src/resources/settings/pseudo-ipv4.ts">edit</a>(zoneId, { ...params }) -> PseudoIPV4EditResponse</code>
- <code title="get /zones/{zone_id}/settings/pseudo_ipv4">client.settings.pseudoIPV4.<a href="./src/resources/settings/pseudo-ipv4.ts">get</a>(zoneId) -> PseudoIPV4GetResponse</code>

## ResponseBuffering

Types:

- <code><a href="./src/resources/settings/response-buffering.ts">ResponseBufferingEditResponse</a></code>
- <code><a href="./src/resources/settings/response-buffering.ts">ResponseBufferingGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/response_buffering">client.settings.responseBuffering.<a href="./src/resources/settings/response-buffering.ts">edit</a>(zoneId, { ...params }) -> ResponseBufferingEditResponse</code>
- <code title="get /zones/{zone_id}/settings/response_buffering">client.settings.responseBuffering.<a href="./src/resources/settings/response-buffering.ts">get</a>(zoneId) -> ResponseBufferingGetResponse</code>

## RocketLoader

Types:

- <code><a href="./src/resources/settings/rocket-loader.ts">RocketLoaderEditResponse</a></code>
- <code><a href="./src/resources/settings/rocket-loader.ts">RocketLoaderGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/rocket_loader">client.settings.rocketLoader.<a href="./src/resources/settings/rocket-loader.ts">edit</a>(zoneId, { ...params }) -> RocketLoaderEditResponse</code>
- <code title="get /zones/{zone_id}/settings/rocket_loader">client.settings.rocketLoader.<a href="./src/resources/settings/rocket-loader.ts">get</a>(zoneId) -> RocketLoaderGetResponse</code>

## SecurityHeaders

Types:

- <code><a href="./src/resources/settings/security-headers.ts">SecurityHeaderEditResponse</a></code>
- <code><a href="./src/resources/settings/security-headers.ts">SecurityHeaderGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/security_header">client.settings.securityHeaders.<a href="./src/resources/settings/security-headers.ts">edit</a>(zoneId, { ...params }) -> SecurityHeaderEditResponse</code>
- <code title="get /zones/{zone_id}/settings/security_header">client.settings.securityHeaders.<a href="./src/resources/settings/security-headers.ts">get</a>(zoneId) -> SecurityHeaderGetResponse</code>

## SecurityLevel

Types:

- <code><a href="./src/resources/settings/security-level.ts">SecurityLevelEditResponse</a></code>
- <code><a href="./src/resources/settings/security-level.ts">SecurityLevelGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/security_level">client.settings.securityLevel.<a href="./src/resources/settings/security-level.ts">edit</a>(zoneId, { ...params }) -> SecurityLevelEditResponse</code>
- <code title="get /zones/{zone_id}/settings/security_level">client.settings.securityLevel.<a href="./src/resources/settings/security-level.ts">get</a>(zoneId) -> SecurityLevelGetResponse</code>

## ServerSideExcludes

Types:

- <code><a href="./src/resources/settings/server-side-excludes.ts">ServerSideExcludeEditResponse</a></code>
- <code><a href="./src/resources/settings/server-side-excludes.ts">ServerSideExcludeGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/server_side_exclude">client.settings.serverSideExcludes.<a href="./src/resources/settings/server-side-excludes.ts">edit</a>(zoneId, { ...params }) -> ServerSideExcludeEditResponse</code>
- <code title="get /zones/{zone_id}/settings/server_side_exclude">client.settings.serverSideExcludes.<a href="./src/resources/settings/server-side-excludes.ts">get</a>(zoneId) -> ServerSideExcludeGetResponse</code>

## SortQueryStringForCache

Types:

- <code><a href="./src/resources/settings/sort-query-string-for-cache.ts">SortQueryStringForCacheEditResponse</a></code>
- <code><a href="./src/resources/settings/sort-query-string-for-cache.ts">SortQueryStringForCacheGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/sort_query_string_for_cache">client.settings.sortQueryStringForCache.<a href="./src/resources/settings/sort-query-string-for-cache.ts">edit</a>(zoneId, { ...params }) -> SortQueryStringForCacheEditResponse</code>
- <code title="get /zones/{zone_id}/settings/sort_query_string_for_cache">client.settings.sortQueryStringForCache.<a href="./src/resources/settings/sort-query-string-for-cache.ts">get</a>(zoneId) -> SortQueryStringForCacheGetResponse</code>

## SSL

Types:

- <code><a href="./src/resources/settings/ssl.ts">SSLEditResponse</a></code>
- <code><a href="./src/resources/settings/ssl.ts">SSLGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/ssl">client.settings.ssl.<a href="./src/resources/settings/ssl.ts">edit</a>(zoneId, { ...params }) -> SSLEditResponse</code>
- <code title="get /zones/{zone_id}/settings/ssl">client.settings.ssl.<a href="./src/resources/settings/ssl.ts">get</a>(zoneId) -> SSLGetResponse</code>

## SSLRecommender

Types:

- <code><a href="./src/resources/settings/ssl-recommender.ts">SSLRecommenderEditResponse</a></code>
- <code><a href="./src/resources/settings/ssl-recommender.ts">SSLRecommenderGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/ssl_recommender">client.settings.sslRecommender.<a href="./src/resources/settings/ssl-recommender.ts">edit</a>(zoneId, { ...params }) -> SSLRecommenderEditResponse</code>
- <code title="get /zones/{zone_id}/settings/ssl_recommender">client.settings.sslRecommender.<a href="./src/resources/settings/ssl-recommender.ts">get</a>(zoneId) -> SSLRecommenderGetResponse</code>

## TLS1_3

Types:

- <code><a href="./src/resources/settings/tls-1-3.ts">TLS1_3EditResponse</a></code>
- <code><a href="./src/resources/settings/tls-1-3.ts">TLS1_3GetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/tls_1_3">client.settings.tls1_3.<a href="./src/resources/settings/tls-1-3.ts">edit</a>(zoneId, { ...params }) -> TLS1_3EditResponse</code>
- <code title="get /zones/{zone_id}/settings/tls_1_3">client.settings.tls1_3.<a href="./src/resources/settings/tls-1-3.ts">get</a>(zoneId) -> TLS1_3GetResponse</code>

## TLSClientAuth

Types:

- <code><a href="./src/resources/settings/tls-client-auth.ts">TLSClientAuthEditResponse</a></code>
- <code><a href="./src/resources/settings/tls-client-auth.ts">TLSClientAuthGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/tls_client_auth">client.settings.tlsClientAuth.<a href="./src/resources/settings/tls-client-auth.ts">edit</a>(zoneId, { ...params }) -> TLSClientAuthEditResponse</code>
- <code title="get /zones/{zone_id}/settings/tls_client_auth">client.settings.tlsClientAuth.<a href="./src/resources/settings/tls-client-auth.ts">get</a>(zoneId) -> TLSClientAuthGetResponse</code>

## TrueClientIPHeader

Types:

- <code><a href="./src/resources/settings/true-client-ip-header.ts">TrueClientIPHeaderEditResponse</a></code>
- <code><a href="./src/resources/settings/true-client-ip-header.ts">TrueClientIPHeaderGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/true_client_ip_header">client.settings.trueClientIPHeader.<a href="./src/resources/settings/true-client-ip-header.ts">edit</a>(zoneId, { ...params }) -> TrueClientIPHeaderEditResponse</code>
- <code title="get /zones/{zone_id}/settings/true_client_ip_header">client.settings.trueClientIPHeader.<a href="./src/resources/settings/true-client-ip-header.ts">get</a>(zoneId) -> TrueClientIPHeaderGetResponse</code>

## WAF

Types:

- <code><a href="./src/resources/settings/waf.ts">WAFEditResponse</a></code>
- <code><a href="./src/resources/settings/waf.ts">WAFGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/waf">client.settings.waf.<a href="./src/resources/settings/waf.ts">edit</a>(zoneId, { ...params }) -> WAFEditResponse</code>
- <code title="get /zones/{zone_id}/settings/waf">client.settings.waf.<a href="./src/resources/settings/waf.ts">get</a>(zoneId) -> WAFGetResponse</code>

## Webp

Types:

- <code><a href="./src/resources/settings/webp.ts">WebpEditResponse</a></code>
- <code><a href="./src/resources/settings/webp.ts">WebpGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/webp">client.settings.webp.<a href="./src/resources/settings/webp.ts">edit</a>(zoneId, { ...params }) -> WebpEditResponse</code>
- <code title="get /zones/{zone_id}/settings/webp">client.settings.webp.<a href="./src/resources/settings/webp.ts">get</a>(zoneId) -> WebpGetResponse</code>

## Websocket

Types:

- <code><a href="./src/resources/settings/websocket.ts">WebsocketEditResponse</a></code>
- <code><a href="./src/resources/settings/websocket.ts">WebsocketGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/websockets">client.settings.websocket.<a href="./src/resources/settings/websocket.ts">edit</a>(zoneId, { ...params }) -> WebsocketEditResponse</code>
- <code title="get /zones/{zone_id}/settings/websockets">client.settings.websocket.<a href="./src/resources/settings/websocket.ts">get</a>(zoneId) -> WebsocketGetResponse</code>

## FontSettings

Types:

- <code><a href="./src/resources/settings/font-settings.ts">FontSettingEditResponse</a></code>
- <code><a href="./src/resources/settings/font-settings.ts">FontSettingGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/fonts">client.settings.fontSettings.<a href="./src/resources/settings/font-settings.ts">edit</a>(zoneId, { ...params }) -> FontSettingEditResponse</code>
- <code title="get /zones/{zone_id}/settings/fonts">client.settings.fontSettings.<a href="./src/resources/settings/font-settings.ts">get</a>(zoneId) -> FontSettingGetResponse</code>

# WaitingRooms

Types:

- <code><a href="./src/resources/waiting-rooms/waiting-rooms.ts">WaitingRoomCreateResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/waiting-rooms.ts">WaitingRoomUpdateResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/waiting-rooms.ts">WaitingRoomListResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/waiting-rooms.ts">WaitingRoomDeleteResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/waiting-rooms.ts">WaitingRoomEditResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/waiting-rooms.ts">WaitingRoomGetResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/waiting-rooms.ts">WaitingRoomPreviewResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/waiting_rooms">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">create</a>(zoneIdentifier, { ...params }) -> WaitingRoomCreateResponse</code>
- <code title="put /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">update</a>(zoneIdentifier, waitingRoomId, { ...params }) -> WaitingRoomUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/waiting_rooms">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">list</a>(zoneIdentifier) -> WaitingRoomListResponse | null</code>
- <code title="delete /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">delete</a>(zoneIdentifier, waitingRoomId) -> WaitingRoomDeleteResponse</code>
- <code title="patch /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">edit</a>(zoneIdentifier, waitingRoomId, { ...params }) -> WaitingRoomEditResponse</code>
- <code title="get /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">get</a>(zoneIdentifier, waitingRoomId) -> WaitingRoomGetResponse</code>
- <code title="post /zones/{zone_identifier}/waiting_rooms/preview">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">preview</a>(zoneIdentifier, { ...params }) -> WaitingRoomPreviewResponse</code>

## Events

Types:

- <code><a href="./src/resources/waiting-rooms/events/events.ts">EventCreateResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/events/events.ts">EventUpdateResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/events/events.ts">EventListResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/events/events.ts">EventDeleteResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/events/events.ts">EventEditResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/events/events.ts">EventGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">create</a>(zoneIdentifier, waitingRoomId, { ...params }) -> EventCreateResponse</code>
- <code title="put /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events/{event_id}">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">update</a>(zoneIdentifier, waitingRoomId, eventId, { ...params }) -> EventUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">list</a>(zoneIdentifier, waitingRoomId) -> EventListResponse | null</code>
- <code title="delete /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events/{event_id}">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">delete</a>(zoneIdentifier, waitingRoomId, eventId) -> EventDeleteResponse</code>
- <code title="patch /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events/{event_id}">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">edit</a>(zoneIdentifier, waitingRoomId, eventId, { ...params }) -> EventEditResponse</code>
- <code title="get /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events/{event_id}">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">get</a>(zoneIdentifier, waitingRoomId, eventId) -> EventGetResponse</code>

### Details

Types:

- <code><a href="./src/resources/waiting-rooms/events/details.ts">DetailGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events/{event_id}/details">client.waitingRooms.events.details.<a href="./src/resources/waiting-rooms/events/details.ts">get</a>(zoneIdentifier, waitingRoomId, eventId) -> DetailGetResponse</code>

## Rules

Types:

- <code><a href="./src/resources/waiting-rooms/rules.ts">RuleCreateResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/rules.ts">RuleListResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/rules.ts">RuleEditResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/rules">client.waitingRooms.rules.<a href="./src/resources/waiting-rooms/rules.ts">create</a>(zoneIdentifier, waitingRoomId, { ...params }) -> RuleCreateResponse | null</code>
- <code title="put /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/rules">client.waitingRooms.rules.<a href="./src/resources/waiting-rooms/rules.ts">update</a>(zoneIdentifier, waitingRoomId, [ ...body ]) -> RuleUpdateResponse | null</code>
- <code title="get /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/rules">client.waitingRooms.rules.<a href="./src/resources/waiting-rooms/rules.ts">list</a>(zoneIdentifier, waitingRoomId) -> RuleListResponse | null</code>
- <code title="delete /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/rules/{rule_id}">client.waitingRooms.rules.<a href="./src/resources/waiting-rooms/rules.ts">delete</a>(zoneIdentifier, waitingRoomId, ruleId) -> RuleDeleteResponse | null</code>
- <code title="patch /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/rules/{rule_id}">client.waitingRooms.rules.<a href="./src/resources/waiting-rooms/rules.ts">edit</a>(zoneIdentifier, waitingRoomId, ruleId, { ...params }) -> RuleEditResponse | null</code>

## Statuses

Types:

- <code><a href="./src/resources/waiting-rooms/statuses.ts">StatusGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/status">client.waitingRooms.statuses.<a href="./src/resources/waiting-rooms/statuses.ts">get</a>(zoneIdentifier, waitingRoomId) -> StatusGetResponse</code>

## Settings

Types:

- <code><a href="./src/resources/waiting-rooms/settings.ts">SettingUpdateResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/settings.ts">SettingEditResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_identifier}/waiting_rooms/settings">client.waitingRooms.settings.<a href="./src/resources/waiting-rooms/settings.ts">update</a>(zoneIdentifier, { ...params }) -> SettingUpdateResponse</code>
- <code title="patch /zones/{zone_identifier}/waiting_rooms/settings">client.waitingRooms.settings.<a href="./src/resources/waiting-rooms/settings.ts">edit</a>(zoneIdentifier, { ...params }) -> SettingEditResponse</code>
- <code title="get /zones/{zone_identifier}/waiting_rooms/settings">client.waitingRooms.settings.<a href="./src/resources/waiting-rooms/settings.ts">get</a>(zoneIdentifier) -> SettingGetResponse</code>

# Web3

## Hostnames

Types:

- <code><a href="./src/resources/web3/hostnames/hostnames.ts">HostnameCreateResponse</a></code>
- <code><a href="./src/resources/web3/hostnames/hostnames.ts">HostnameListResponse</a></code>
- <code><a href="./src/resources/web3/hostnames/hostnames.ts">HostnameDeleteResponse</a></code>
- <code><a href="./src/resources/web3/hostnames/hostnames.ts">HostnameEditResponse</a></code>
- <code><a href="./src/resources/web3/hostnames/hostnames.ts">HostnameGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/web3/hostnames">client.web3.hostnames.<a href="./src/resources/web3/hostnames/hostnames.ts">create</a>(zoneIdentifier, { ...params }) -> HostnameCreateResponse</code>
- <code title="get /zones/{zone_identifier}/web3/hostnames">client.web3.hostnames.<a href="./src/resources/web3/hostnames/hostnames.ts">list</a>(zoneIdentifier) -> HostnameListResponse | null</code>
- <code title="delete /zones/{zone_identifier}/web3/hostnames/{identifier}">client.web3.hostnames.<a href="./src/resources/web3/hostnames/hostnames.ts">delete</a>(zoneIdentifier, identifier) -> HostnameDeleteResponse | null</code>
- <code title="patch /zones/{zone_identifier}/web3/hostnames/{identifier}">client.web3.hostnames.<a href="./src/resources/web3/hostnames/hostnames.ts">edit</a>(zoneIdentifier, identifier, { ...params }) -> HostnameEditResponse</code>
- <code title="get /zones/{zone_identifier}/web3/hostnames/{identifier}">client.web3.hostnames.<a href="./src/resources/web3/hostnames/hostnames.ts">get</a>(zoneIdentifier, identifier) -> HostnameGetResponse</code>

### IPFSUniversalPaths

#### ContentLists

Types:

- <code><a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/content-lists.ts">ContentListUpdateResponse</a></code>
- <code><a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/content-lists.ts">ContentListListResponse</a></code>

Methods:

- <code title="put /zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list">client.web3.hostnames.ipfsUniversalPaths.contentLists.<a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/content-lists.ts">update</a>(zoneIdentifier, identifier, { ...params }) -> ContentListUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list">client.web3.hostnames.ipfsUniversalPaths.contentLists.<a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/content-lists.ts">list</a>(zoneIdentifier, identifier) -> ContentListListResponse</code>

##### Entries

Types:

- <code><a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">EntryCreateResponse</a></code>
- <code><a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">EntryUpdateResponse</a></code>
- <code><a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">EntryListResponse</a></code>
- <code><a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">EntryDeleteResponse</a></code>
- <code><a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">EntryGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries">client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.<a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">create</a>(zoneIdentifier, identifier, { ...params }) -> EntryCreateResponse</code>
- <code title="put /zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{content_list_entry_identifier}">client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.<a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">update</a>(zoneIdentifier, identifier, contentListEntryIdentifier, { ...params }) -> EntryUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries">client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.<a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">list</a>(zoneIdentifier, identifier) -> EntryListResponse | null</code>
- <code title="delete /zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{content_list_entry_identifier}">client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.<a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">delete</a>(zoneIdentifier, identifier, contentListEntryIdentifier) -> EntryDeleteResponse | null</code>
- <code title="get /zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{content_list_entry_identifier}">client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.<a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">get</a>(zoneIdentifier, identifier, contentListEntryIdentifier) -> EntryGetResponse</code>

# Workers

## AI

Types:

- <code><a href="./src/resources/workers/ai.ts">AIRunResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/ai/run/{model_name}">client.workers.ai.<a href="./src/resources/workers/ai.ts">run</a>(accountId, modelName, { ...params }) -> AIRunResponse</code>

## Scripts

Types:

- <code><a href="./src/resources/workers/scripts/scripts.ts">ScriptUpdateResponse</a></code>
- <code><a href="./src/resources/workers/scripts/scripts.ts">ScriptListResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/scripts/{script_name}">client.workers.scripts.<a href="./src/resources/workers/scripts/scripts.ts">update</a>(accountId, scriptName, { ...params }) -> ScriptUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts">client.workers.scripts.<a href="./src/resources/workers/scripts/scripts.ts">list</a>(accountId) -> ScriptListResponse</code>
- <code title="delete /accounts/{account_id}/workers/scripts/{script_name}">client.workers.scripts.<a href="./src/resources/workers/scripts/scripts.ts">delete</a>(accountId, scriptName, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}">client.workers.scripts.<a href="./src/resources/workers/scripts/scripts.ts">get</a>(accountId, scriptName) -> Response</code>

### Bindings

Types:

- <code><a href="./src/resources/workers/scripts/bindings.ts">BindingListResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/workers/script/bindings">client.workers.scripts.bindings.<a href="./src/resources/workers/scripts/bindings.ts">list</a>(zoneId) -> BindingListResponse</code>

### Schedules

Types:

- <code><a href="./src/resources/workers/scripts/schedules.ts">ScheduleUpdateResponse</a></code>
- <code><a href="./src/resources/workers/scripts/schedules.ts">ScheduleListResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/scripts/{script_name}/schedules">client.workers.scripts.schedules.<a href="./src/resources/workers/scripts/schedules.ts">update</a>(accountId, scriptName, { ...params }) -> ScheduleUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/schedules">client.workers.scripts.schedules.<a href="./src/resources/workers/scripts/schedules.ts">list</a>(accountId, scriptName) -> ScheduleListResponse</code>

### Tail

Types:

- <code><a href="./src/resources/workers/scripts/tail.ts">TailCreateResponse</a></code>
- <code><a href="./src/resources/workers/scripts/tail.ts">TailListResponse</a></code>
- <code><a href="./src/resources/workers/scripts/tail.ts">TailDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/scripts/{script_name}/tails">client.workers.scripts.tail.<a href="./src/resources/workers/scripts/tail.ts">create</a>(accountId, scriptName) -> TailCreateResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/tails">client.workers.scripts.tail.<a href="./src/resources/workers/scripts/tail.ts">list</a>(accountId, scriptName) -> TailListResponse</code>
- <code title="delete /accounts/{account_id}/workers/scripts/{script_name}/tails/{id}">client.workers.scripts.tail.<a href="./src/resources/workers/scripts/tail.ts">delete</a>(accountId, scriptName, id) -> TailDeleteResponse</code>

### UsageModel

Types:

- <code><a href="./src/resources/workers/scripts/usage-model.ts">UsageModelUpdateResponse</a></code>
- <code><a href="./src/resources/workers/scripts/usage-model.ts">UsageModelGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/scripts/{script_name}/usage-model">client.workers.scripts.usageModel.<a href="./src/resources/workers/scripts/usage-model.ts">update</a>(accountId, scriptName, { ...params }) -> UsageModelUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/usage-model">client.workers.scripts.usageModel.<a href="./src/resources/workers/scripts/usage-model.ts">get</a>(accountId, scriptName) -> UsageModelGetResponse</code>

## Filters

Types:

- <code><a href="./src/resources/workers/filters.ts">FilterCreateResponse</a></code>
- <code><a href="./src/resources/workers/filters.ts">FilterUpdateResponse</a></code>
- <code><a href="./src/resources/workers/filters.ts">FilterListResponse</a></code>
- <code><a href="./src/resources/workers/filters.ts">FilterDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/workers/filters">client.workers.filters.<a href="./src/resources/workers/filters.ts">create</a>(zoneId, { ...params }) -> FilterCreateResponse | null</code>
- <code title="put /zones/{zone_id}/workers/filters/{filter_id}">client.workers.filters.<a href="./src/resources/workers/filters.ts">update</a>(zoneId, filterId, { ...params }) -> FilterUpdateResponse</code>
- <code title="get /zones/{zone_id}/workers/filters">client.workers.filters.<a href="./src/resources/workers/filters.ts">list</a>(zoneId) -> FilterListResponse</code>
- <code title="delete /zones/{zone_id}/workers/filters/{filter_id}">client.workers.filters.<a href="./src/resources/workers/filters.ts">delete</a>(zoneId, filterId) -> FilterDeleteResponse | null</code>

## Routes

Types:

- <code><a href="./src/resources/workers/routes.ts">RouteCreateResponse</a></code>
- <code><a href="./src/resources/workers/routes.ts">RouteUpdateResponse</a></code>
- <code><a href="./src/resources/workers/routes.ts">RouteListResponse</a></code>
- <code><a href="./src/resources/workers/routes.ts">RouteDeleteResponse</a></code>
- <code><a href="./src/resources/workers/routes.ts">RouteGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/workers/routes">client.workers.routes.<a href="./src/resources/workers/routes.ts">create</a>(zoneId, { ...params }) -> RouteCreateResponse</code>
- <code title="put /zones/{zone_id}/workers/routes/{route_id}">client.workers.routes.<a href="./src/resources/workers/routes.ts">update</a>(zoneId, routeId, { ...params }) -> RouteUpdateResponse</code>
- <code title="get /zones/{zone_id}/workers/routes">client.workers.routes.<a href="./src/resources/workers/routes.ts">list</a>(zoneId) -> RouteListResponse</code>
- <code title="delete /zones/{zone_id}/workers/routes/{route_id}">client.workers.routes.<a href="./src/resources/workers/routes.ts">delete</a>(zoneId, routeId) -> RouteDeleteResponse</code>
- <code title="get /zones/{zone_id}/workers/routes/{route_id}">client.workers.routes.<a href="./src/resources/workers/routes.ts">get</a>(zoneId, routeId) -> RouteGetResponse</code>

## AccountSettings

Types:

- <code><a href="./src/resources/workers/account-settings.ts">AccountSettingUpdateResponse</a></code>
- <code><a href="./src/resources/workers/account-settings.ts">AccountSettingGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/account-settings">client.workers.accountSettings.<a href="./src/resources/workers/account-settings.ts">update</a>(accountId, { ...params }) -> AccountSettingUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/account-settings">client.workers.accountSettings.<a href="./src/resources/workers/account-settings.ts">get</a>(accountId) -> AccountSettingGetResponse</code>

## Deployments

### ByScripts

Types:

- <code><a href="./src/resources/workers/deployments/by-scripts.ts">ByScriptListResponse</a></code>
- <code><a href="./src/resources/workers/deployments/by-scripts.ts">ByScriptGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/workers/deployments/by-script/{script_id}">client.workers.deployments.byScripts.<a href="./src/resources/workers/deployments/by-scripts.ts">list</a>(accountId, scriptId) -> ByScriptListResponse</code>
- <code title="get /accounts/{account_id}/workers/deployments/by-script/{script_id}/detail/{deployment_id}">client.workers.deployments.byScripts.<a href="./src/resources/workers/deployments/by-scripts.ts">get</a>(accountId, scriptId, deploymentId) -> ByScriptGetResponse</code>

## Domains

Types:

- <code><a href="./src/resources/workers/domains.ts">DomainUpdateResponse</a></code>
- <code><a href="./src/resources/workers/domains.ts">DomainListResponse</a></code>
- <code><a href="./src/resources/workers/domains.ts">DomainGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/domains">client.workers.domains.<a href="./src/resources/workers/domains.ts">update</a>(accountId, { ...params }) -> DomainUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/domains">client.workers.domains.<a href="./src/resources/workers/domains.ts">list</a>(accountId, { ...params }) -> DomainListResponse</code>
- <code title="delete /accounts/{account_id}/workers/domains/{domain_id}">client.workers.domains.<a href="./src/resources/workers/domains.ts">delete</a>(accountId, domainId) -> void</code>
- <code title="get /accounts/{account_id}/workers/domains/{domain_id}">client.workers.domains.<a href="./src/resources/workers/domains.ts">get</a>(accountId, domainId) -> DomainGetResponse</code>

## DurableObjects

### Namespaces

Types:

- <code><a href="./src/resources/workers/durable-objects/namespaces/namespaces.ts">NamespaceListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/workers/durable_objects/namespaces">client.workers.durableObjects.namespaces.<a href="./src/resources/workers/durable-objects/namespaces/namespaces.ts">list</a>(accountId) -> NamespaceListResponse | null</code>

#### Objects

Types:

- <code><a href="./src/resources/workers/durable-objects/namespaces/objects.ts">ObjectListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/workers/durable_objects/namespaces/{id}/objects">client.workers.durableObjects.namespaces.objects.<a href="./src/resources/workers/durable-objects/namespaces/objects.ts">list</a>(accountId, id, { ...params }) -> ObjectListResponse | null</code>

## Queues

Types:

- <code><a href="./src/resources/workers/queues/queues.ts">QueueCreateResponse</a></code>
- <code><a href="./src/resources/workers/queues/queues.ts">QueueUpdateResponse</a></code>
- <code><a href="./src/resources/workers/queues/queues.ts">QueueListResponse</a></code>
- <code><a href="./src/resources/workers/queues/queues.ts">QueueDeleteResponse</a></code>
- <code><a href="./src/resources/workers/queues/queues.ts">QueueGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/queues">client.workers.queues.<a href="./src/resources/workers/queues/queues.ts">create</a>(accountId, { ...params }) -> QueueCreateResponse | null</code>
- <code title="put /accounts/{account_id}/workers/queues/{name}">client.workers.queues.<a href="./src/resources/workers/queues/queues.ts">update</a>(accountId, name, { ...params }) -> QueueUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/workers/queues">client.workers.queues.<a href="./src/resources/workers/queues/queues.ts">list</a>(accountId) -> QueueListResponse | null</code>
- <code title="delete /accounts/{account_id}/workers/queues/{name}">client.workers.queues.<a href="./src/resources/workers/queues/queues.ts">delete</a>(accountId, name) -> QueueDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/workers/queues/{name}">client.workers.queues.<a href="./src/resources/workers/queues/queues.ts">get</a>(accountId, name) -> QueueGetResponse | null</code>

### Consumers

Types:

- <code><a href="./src/resources/workers/queues/consumers.ts">ConsumerCreateResponse</a></code>
- <code><a href="./src/resources/workers/queues/consumers.ts">ConsumerUpdateResponse</a></code>
- <code><a href="./src/resources/workers/queues/consumers.ts">ConsumerListResponse</a></code>
- <code><a href="./src/resources/workers/queues/consumers.ts">ConsumerDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/queues/{name}/consumers">client.workers.queues.consumers.<a href="./src/resources/workers/queues/consumers.ts">create</a>(accountId, name, { ...params }) -> ConsumerCreateResponse | null</code>
- <code title="put /accounts/{account_id}/workers/queues/{name}/consumers/{consumer_name}">client.workers.queues.consumers.<a href="./src/resources/workers/queues/consumers.ts">update</a>(accountId, name, consumerName, { ...params }) -> ConsumerUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/workers/queues/{name}/consumers">client.workers.queues.consumers.<a href="./src/resources/workers/queues/consumers.ts">list</a>(accountId, name) -> ConsumerListResponse | null</code>
- <code title="delete /accounts/{account_id}/workers/queues/{name}/consumers/{consumer_name}">client.workers.queues.consumers.<a href="./src/resources/workers/queues/consumers.ts">delete</a>(accountId, name, consumerName) -> ConsumerDeleteResponse | null</code>

## Subdomains

Types:

- <code><a href="./src/resources/workers/subdomains.ts">SubdomainUpdateResponse</a></code>
- <code><a href="./src/resources/workers/subdomains.ts">SubdomainGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/subdomain">client.workers.subdomains.<a href="./src/resources/workers/subdomains.ts">update</a>(accountId, { ...params }) -> SubdomainUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/subdomain">client.workers.subdomains.<a href="./src/resources/workers/subdomains.ts">get</a>(accountId) -> SubdomainGetResponse</code>

## DeploymentsByScript

Types:

- <code><a href="./src/resources/workers/deployments-by-script.ts">DeploymentsByScriptListResponse</a></code>
- <code><a href="./src/resources/workers/deployments-by-script.ts">DeploymentsByScriptDetailResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/workers/deployments/by-script/{script_id}">client.workers.deploymentsByScript.<a href="./src/resources/workers/deployments-by-script.ts">list</a>(accountId, scriptId) -> DeploymentsByScriptListResponse</code>
- <code title="get /accounts/{account_id}/workers/deployments/by-script/{script_id}/detail/{deployment_id}">client.workers.deploymentsByScript.<a href="./src/resources/workers/deployments-by-script.ts">detail</a>(accountId, scriptId, deploymentId) -> DeploymentsByScriptDetailResponse</code>

## Services

### Environments

#### Content

Types:

- <code><a href="./src/resources/workers/services/environments/content.ts">ContentUpdateResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/services/{service_name}/environments/{environment_name}/content">client.workers.services.environments.content.<a href="./src/resources/workers/services/environments/content.ts">update</a>(accountId, serviceName, environmentName, { ...params }) -> ContentUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/services/{service_name}/environments/{environment_name}/content">client.workers.services.environments.content.<a href="./src/resources/workers/services/environments/content.ts">get</a>(accountId, serviceName, environmentName) -> Response</code>

#### Settings

Types:

- <code><a href="./src/resources/workers/services/environments/settings.ts">SettingEditResponse</a></code>
- <code><a href="./src/resources/workers/services/environments/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/workers/services/{service_name}/environments/{environment_name}/settings">client.workers.services.environments.settings.<a href="./src/resources/workers/services/environments/settings.ts">edit</a>(accountId, serviceName, environmentName, { ...params }) -> SettingEditResponse</code>
- <code title="get /accounts/{account_id}/workers/services/{service_name}/environments/{environment_name}/settings">client.workers.services.environments.settings.<a href="./src/resources/workers/services/environments/settings.ts">get</a>(accountId, serviceName, environmentName) -> SettingGetResponse</code>

## Script

Types:

- <code><a href="./src/resources/workers/script.ts">ScriptUpdateResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/workers/script">client.workers.script.<a href="./src/resources/workers/script.ts">update</a>(zoneId) -> ScriptUpdateResponse</code>
- <code title="delete /zones/{zone_id}/workers/script">client.workers.script.<a href="./src/resources/workers/script.ts">delete</a>(zoneId) -> void</code>
- <code title="get /zones/{zone_id}/workers/script">client.workers.script.<a href="./src/resources/workers/script.ts">get</a>(zoneId) -> Response</code>

# ActivationChecks

Types:

- <code><a href="./src/resources/activation-checks.ts">ActivationCheckUpdateResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/activation_check">client.activationChecks.<a href="./src/resources/activation-checks.ts">update</a>(zoneId) -> ActivationCheckUpdateResponse</code>

# ManagedHeaders

Types:

- <code><a href="./src/resources/managed-headers.ts">ManagedHeaderListResponse</a></code>
- <code><a href="./src/resources/managed-headers.ts">ManagedHeaderEditResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/managed_headers">client.managedHeaders.<a href="./src/resources/managed-headers.ts">list</a>(zoneId) -> ManagedHeaderListResponse</code>
- <code title="patch /zones/{zone_id}/managed_headers">client.managedHeaders.<a href="./src/resources/managed-headers.ts">edit</a>(zoneId, { ...params }) -> ManagedHeaderEditResponse</code>

# PageShield

Types:

- <code><a href="./src/resources/page-shield/page-shield.ts">PageShieldUpdateResponse</a></code>
- <code><a href="./src/resources/page-shield/page-shield.ts">PageShieldListResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/page_shield">client.pageShield.<a href="./src/resources/page-shield/page-shield.ts">update</a>(zoneId, { ...params }) -> PageShieldUpdateResponse</code>
- <code title="get /zones/{zone_id}/page_shield">client.pageShield.<a href="./src/resources/page-shield/page-shield.ts">list</a>(zoneId) -> PageShieldListResponse</code>

## Policies

Types:

- <code><a href="./src/resources/page-shield/policies.ts">PolicyCreateResponse</a></code>
- <code><a href="./src/resources/page-shield/policies.ts">PolicyUpdateResponse</a></code>
- <code><a href="./src/resources/page-shield/policies.ts">PolicyListResponse</a></code>
- <code><a href="./src/resources/page-shield/policies.ts">PolicyGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/page_shield/policies">client.pageShield.policies.<a href="./src/resources/page-shield/policies.ts">create</a>(zoneId, { ...params }) -> PolicyCreateResponse</code>
- <code title="put /zones/{zone_id}/page_shield/policies/{policy_id}">client.pageShield.policies.<a href="./src/resources/page-shield/policies.ts">update</a>(zoneId, policyId, { ...params }) -> PolicyUpdateResponse</code>
- <code title="get /zones/{zone_id}/page_shield/policies">client.pageShield.policies.<a href="./src/resources/page-shield/policies.ts">list</a>(zoneId) -> PolicyListResponse | null</code>
- <code title="delete /zones/{zone_id}/page_shield/policies/{policy_id}">client.pageShield.policies.<a href="./src/resources/page-shield/policies.ts">delete</a>(zoneId, policyId) -> void</code>
- <code title="get /zones/{zone_id}/page_shield/policies/{policy_id}">client.pageShield.policies.<a href="./src/resources/page-shield/policies.ts">get</a>(zoneId, policyId) -> PolicyGetResponse</code>

## Connections

Types:

- <code><a href="./src/resources/page-shield/connections.ts">ConnectionListResponse</a></code>
- <code><a href="./src/resources/page-shield/connections.ts">ConnectionGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/page_shield/connections">client.pageShield.connections.<a href="./src/resources/page-shield/connections.ts">list</a>(zoneId, { ...params }) -> ConnectionListResponse | null</code>
- <code title="get /zones/{zone_id}/page_shield/connections/{connection_id}">client.pageShield.connections.<a href="./src/resources/page-shield/connections.ts">get</a>(zoneId, connectionId) -> ConnectionGetResponse</code>

## Scripts

Types:

- <code><a href="./src/resources/page-shield/scripts.ts">ScriptListResponse</a></code>
- <code><a href="./src/resources/page-shield/scripts.ts">ScriptGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/page_shield/scripts">client.pageShield.scripts.<a href="./src/resources/page-shield/scripts.ts">list</a>(zoneId, { ...params }) -> ScriptListResponse | null</code>
- <code title="get /zones/{zone_id}/page_shield/scripts/{script_id}">client.pageShield.scripts.<a href="./src/resources/page-shield/scripts.ts">get</a>(zoneId, scriptId) -> ScriptGetResponse</code>

# Rulesets

Types:

- <code><a href="./src/resources/rulesets/rulesets.ts">RulesetCreateResponse</a></code>
- <code><a href="./src/resources/rulesets/rulesets.ts">RulesetUpdateResponse</a></code>
- <code><a href="./src/resources/rulesets/rulesets.ts">RulesetListResponse</a></code>
- <code><a href="./src/resources/rulesets/rulesets.ts">RulesetGetResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/rulesets">client.rulesets.<a href="./src/resources/rulesets/rulesets.ts">create</a>({ ...params }) -> RulesetCreateResponse</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}">client.rulesets.<a href="./src/resources/rulesets/rulesets.ts">update</a>(rulesetId, { ...params }) -> RulesetUpdateResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/rulesets">client.rulesets.<a href="./src/resources/rulesets/rulesets.ts">list</a>({ ...params }) -> RulesetListResponse</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}">client.rulesets.<a href="./src/resources/rulesets/rulesets.ts">delete</a>(rulesetId, { ...params }) -> void</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}">client.rulesets.<a href="./src/resources/rulesets/rulesets.ts">get</a>(rulesetId, { ...params }) -> RulesetGetResponse</code>

## Phases

Types:

- <code><a href="./src/resources/rulesets/phases/phases.ts">PhaseUpdateResponse</a></code>
- <code><a href="./src/resources/rulesets/phases/phases.ts">PhaseGetResponse</a></code>

Methods:

- <code title="put /{account_or_zone}/{account_or_zone_id}/rulesets/phases/{ruleset_phase}/entrypoint">client.rulesets.phases.<a href="./src/resources/rulesets/phases/phases.ts">update</a>(rulesetPhase, { ...params }) -> PhaseUpdateResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/rulesets/phases/{ruleset_phase}/entrypoint">client.rulesets.phases.<a href="./src/resources/rulesets/phases/phases.ts">get</a>(rulesetPhase, { ...params }) -> PhaseGetResponse</code>

### Versions

Types:

- <code><a href="./src/resources/rulesets/phases/versions.ts">VersionListResponse</a></code>
- <code><a href="./src/resources/rulesets/phases/versions.ts">VersionGetResponse</a></code>

Methods:

- <code title="get /{account_or_zone}/{account_or_zone_id}/rulesets/phases/{ruleset_phase}/entrypoint/versions">client.rulesets.phases.versions.<a href="./src/resources/rulesets/phases/versions.ts">list</a>(rulesetPhase, { ...params }) -> VersionListResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/rulesets/phases/{ruleset_phase}/entrypoint/versions/{ruleset_version}">client.rulesets.phases.versions.<a href="./src/resources/rulesets/phases/versions.ts">get</a>(rulesetPhase, rulesetVersion, { ...params }) -> VersionGetResponse</code>

## Rules

Types:

- <code><a href="./src/resources/rulesets/rules.ts">RuleCreateResponse</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">RuleEditResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}/rules">client.rulesets.rules.<a href="./src/resources/rulesets/rules.ts">create</a>(rulesetId, { ...params }) -> RuleCreateResponse</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}/rules/{rule_id}">client.rulesets.rules.<a href="./src/resources/rulesets/rules.ts">delete</a>(rulesetId, ruleId, { ...params }) -> RuleDeleteResponse</code>
- <code title="patch /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}/rules/{rule_id}">client.rulesets.rules.<a href="./src/resources/rulesets/rules.ts">edit</a>(rulesetId, ruleId, { ...params }) -> RuleEditResponse</code>

## Versions

Types:

- <code><a href="./src/resources/rulesets/versions/versions.ts">VersionListResponse</a></code>
- <code><a href="./src/resources/rulesets/versions/versions.ts">VersionGetResponse</a></code>

Methods:

- <code title="get /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}/versions">client.rulesets.versions.<a href="./src/resources/rulesets/versions/versions.ts">list</a>(rulesetId, { ...params }) -> VersionListResponse</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}/versions/{ruleset_version}">client.rulesets.versions.<a href="./src/resources/rulesets/versions/versions.ts">delete</a>(rulesetId, rulesetVersion, { ...params }) -> void</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}/versions/{ruleset_version}">client.rulesets.versions.<a href="./src/resources/rulesets/versions/versions.ts">get</a>(rulesetId, rulesetVersion, { ...params }) -> VersionGetResponse</code>

### ByTags

Types:

- <code><a href="./src/resources/rulesets/versions/by-tags.ts">ByTagGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/rulesets/{ruleset_id}/versions/{ruleset_version}/by_tag/{rule_tag}">client.rulesets.versions.byTags.<a href="./src/resources/rulesets/versions/by-tags.ts">get</a>(accountId, rulesetId, rulesetVersion, ruleTag) -> ByTagGetResponse</code>

# URLNormalizations

Types:

- <code><a href="./src/resources/url-normalizations.ts">URLNormalizationUpdateResponse</a></code>
- <code><a href="./src/resources/url-normalizations.ts">URLNormalizationGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/url_normalization">client.urlNormalizations.<a href="./src/resources/url-normalizations.ts">update</a>(zoneId, { ...params }) -> URLNormalizationUpdateResponse</code>
- <code title="get /zones/{zone_id}/url_normalization">client.urlNormalizations.<a href="./src/resources/url-normalizations.ts">get</a>(zoneId) -> URLNormalizationGetResponse</code>

# Spectrum

## Analytics

### Aggregates

#### Currents

Types:

- <code><a href="./src/resources/spectrum/analytics/aggregates/currents.ts">CurrentGetResponse</a></code>

Methods:

- <code title="get /zones/{zone}/spectrum/analytics/aggregate/current">client.spectrum.analytics.aggregates.currents.<a href="./src/resources/spectrum/analytics/aggregates/currents.ts">get</a>(zone, { ...params }) -> CurrentGetResponse</code>

### Events

#### Bytimes

Types:

- <code><a href="./src/resources/spectrum/analytics/events/bytimes.ts">BytimeGetResponse</a></code>

Methods:

- <code title="get /zones/{zone}/spectrum/analytics/events/bytime">client.spectrum.analytics.events.bytimes.<a href="./src/resources/spectrum/analytics/events/bytimes.ts">get</a>(zone, { ...params }) -> BytimeGetResponse | null</code>

#### Summaries

Types:

- <code><a href="./src/resources/spectrum/analytics/events/summaries.ts">SummaryGetResponse</a></code>

Methods:

- <code title="get /zones/{zone}/spectrum/analytics/events/summary">client.spectrum.analytics.events.summaries.<a href="./src/resources/spectrum/analytics/events/summaries.ts">get</a>(zone, { ...params }) -> SummaryGetResponse | null</code>

## Apps

Types:

- <code><a href="./src/resources/spectrum/apps.ts">AppCreateResponse</a></code>
- <code><a href="./src/resources/spectrum/apps.ts">AppUpdateResponse</a></code>
- <code><a href="./src/resources/spectrum/apps.ts">AppListResponse</a></code>
- <code><a href="./src/resources/spectrum/apps.ts">AppDeleteResponse</a></code>
- <code><a href="./src/resources/spectrum/apps.ts">AppGetResponse</a></code>

Methods:

- <code title="post /zones/{zone}/spectrum/apps">client.spectrum.apps.<a href="./src/resources/spectrum/apps.ts">create</a>(zone, { ...params }) -> AppCreateResponse | null</code>
- <code title="put /zones/{zone}/spectrum/apps/{app_id}">client.spectrum.apps.<a href="./src/resources/spectrum/apps.ts">update</a>(zone, appId, { ...params }) -> AppUpdateResponse | null</code>
- <code title="get /zones/{zone}/spectrum/apps">client.spectrum.apps.<a href="./src/resources/spectrum/apps.ts">list</a>(zone, { ...params }) -> AppListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone}/spectrum/apps/{app_id}">client.spectrum.apps.<a href="./src/resources/spectrum/apps.ts">delete</a>(zone, appId) -> AppDeleteResponse | null</code>
- <code title="get /zones/{zone}/spectrum/apps/{app_id}">client.spectrum.apps.<a href="./src/resources/spectrum/apps.ts">get</a>(zone, appId) -> AppGetResponse | null</code>

# Addresses

## AddressMaps

Types:

- <code><a href="./src/resources/addresses/address-maps/address-maps.ts">AddressMapCreateResponse</a></code>
- <code><a href="./src/resources/addresses/address-maps/address-maps.ts">AddressMapListResponse</a></code>
- <code><a href="./src/resources/addresses/address-maps/address-maps.ts">AddressMapDeleteResponse</a></code>
- <code><a href="./src/resources/addresses/address-maps/address-maps.ts">AddressMapEditResponse</a></code>
- <code><a href="./src/resources/addresses/address-maps/address-maps.ts">AddressMapGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/addressing/address_maps">client.addresses.addressMaps.<a href="./src/resources/addresses/address-maps/address-maps.ts">create</a>(accountId, { ...params }) -> AddressMapCreateResponse</code>
- <code title="get /accounts/{account_id}/addressing/address_maps">client.addresses.addressMaps.<a href="./src/resources/addresses/address-maps/address-maps.ts">list</a>(accountId) -> AddressMapListResponse | null</code>
- <code title="delete /accounts/{account_id}/addressing/address_maps/{address_map_id}">client.addresses.addressMaps.<a href="./src/resources/addresses/address-maps/address-maps.ts">delete</a>(accountId, addressMapId) -> AddressMapDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/addressing/address_maps/{address_map_id}">client.addresses.addressMaps.<a href="./src/resources/addresses/address-maps/address-maps.ts">edit</a>(accountId, addressMapId, { ...params }) -> AddressMapEditResponse</code>
- <code title="get /accounts/{account_id}/addressing/address_maps/{address_map_id}">client.addresses.addressMaps.<a href="./src/resources/addresses/address-maps/address-maps.ts">get</a>(accountId, addressMapId) -> AddressMapGetResponse</code>

### Accounts

Types:

- <code><a href="./src/resources/addresses/address-maps/accounts.ts">AccountUpdateResponse</a></code>
- <code><a href="./src/resources/addresses/address-maps/accounts.ts">AccountDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/addressing/address_maps/{address_map_id}/accounts/{account_id}">client.addresses.addressMaps.accounts.<a href="./src/resources/addresses/address-maps/accounts.ts">update</a>(accountId, addressMapId) -> AccountUpdateResponse | null</code>
- <code title="delete /accounts/{account_id}/addressing/address_maps/{address_map_id}/accounts/{account_id}">client.addresses.addressMaps.accounts.<a href="./src/resources/addresses/address-maps/accounts.ts">delete</a>(accountId, addressMapId) -> AccountDeleteResponse | null</code>

### IPs

Types:

- <code><a href="./src/resources/addresses/address-maps/ips.ts">IPUpdateResponse</a></code>
- <code><a href="./src/resources/addresses/address-maps/ips.ts">IPDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/addressing/address_maps/{address_map_id}/ips/{ip_address}">client.addresses.addressMaps.ips.<a href="./src/resources/addresses/address-maps/ips.ts">update</a>(accountId, addressMapId, ipAddress) -> IPUpdateResponse | null</code>
- <code title="delete /accounts/{account_id}/addressing/address_maps/{address_map_id}/ips/{ip_address}">client.addresses.addressMaps.ips.<a href="./src/resources/addresses/address-maps/ips.ts">delete</a>(accountId, addressMapId, ipAddress) -> IPDeleteResponse | null</code>

### Zones

Types:

- <code><a href="./src/resources/addresses/address-maps/zones.ts">ZoneUpdateResponse</a></code>
- <code><a href="./src/resources/addresses/address-maps/zones.ts">ZoneDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/addressing/address_maps/{address_map_id}/zones/{zone_id}">client.addresses.addressMaps.zones.<a href="./src/resources/addresses/address-maps/zones.ts">update</a>(accountId, addressMapId, zoneId) -> ZoneUpdateResponse | null</code>
- <code title="delete /accounts/{account_id}/addressing/address_maps/{address_map_id}/zones/{zone_id}">client.addresses.addressMaps.zones.<a href="./src/resources/addresses/address-maps/zones.ts">delete</a>(accountId, addressMapId, zoneId) -> ZoneDeleteResponse | null</code>

## LOADocuments

Types:

- <code><a href="./src/resources/addresses/loa-documents/loa-documents.ts">LOADocumentCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/addressing/loa_documents">client.addresses.loaDocuments.<a href="./src/resources/addresses/loa-documents/loa-documents.ts">create</a>(accountId, { ...params }) -> LOADocumentCreateResponse</code>

### Downloads

Types:

- <code><a href="./src/resources/addresses/loa-documents/downloads.ts">DownloadListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/addressing/loa_documents/{loa_document_id}/download">client.addresses.loaDocuments.downloads.<a href="./src/resources/addresses/loa-documents/downloads.ts">list</a>(accountId, loaDocumentId) -> unknown</code>

## Prefixes

Types:

- <code><a href="./src/resources/addresses/prefixes/prefixes.ts">PrefixCreateResponse</a></code>
- <code><a href="./src/resources/addresses/prefixes/prefixes.ts">PrefixListResponse</a></code>
- <code><a href="./src/resources/addresses/prefixes/prefixes.ts">PrefixDeleteResponse</a></code>
- <code><a href="./src/resources/addresses/prefixes/prefixes.ts">PrefixEditResponse</a></code>
- <code><a href="./src/resources/addresses/prefixes/prefixes.ts">PrefixGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/addressing/prefixes">client.addresses.prefixes.<a href="./src/resources/addresses/prefixes/prefixes.ts">create</a>(accountId, { ...params }) -> PrefixCreateResponse</code>
- <code title="get /accounts/{account_id}/addressing/prefixes">client.addresses.prefixes.<a href="./src/resources/addresses/prefixes/prefixes.ts">list</a>(accountId) -> PrefixListResponse | null</code>
- <code title="delete /accounts/{account_id}/addressing/prefixes/{prefix_id}">client.addresses.prefixes.<a href="./src/resources/addresses/prefixes/prefixes.ts">delete</a>(accountId, prefixId) -> PrefixDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/addressing/prefixes/{prefix_id}">client.addresses.prefixes.<a href="./src/resources/addresses/prefixes/prefixes.ts">edit</a>(accountId, prefixId, { ...params }) -> PrefixEditResponse</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}">client.addresses.prefixes.<a href="./src/resources/addresses/prefixes/prefixes.ts">get</a>(accountId, prefixId) -> PrefixGetResponse</code>

### BGPs

#### Statuses

Types:

- <code><a href="./src/resources/addresses/prefixes/bgps/statuses.ts">StatusEditResponse</a></code>
- <code><a href="./src/resources/addresses/prefixes/bgps/statuses.ts">StatusGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/status">client.addresses.prefixes.bgps.statuses.<a href="./src/resources/addresses/prefixes/bgps/statuses.ts">edit</a>(accountId, prefixId, { ...params }) -> StatusEditResponse</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/status">client.addresses.prefixes.bgps.statuses.<a href="./src/resources/addresses/prefixes/bgps/statuses.ts">get</a>(accountId, prefixId) -> StatusGetResponse</code>

### Delegations

Types:

- <code><a href="./src/resources/addresses/prefixes/delegations.ts">DelegationCreateResponse</a></code>
- <code><a href="./src/resources/addresses/prefixes/delegations.ts">DelegationListResponse</a></code>
- <code><a href="./src/resources/addresses/prefixes/delegations.ts">DelegationDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/addressing/prefixes/{prefix_id}/delegations">client.addresses.prefixes.delegations.<a href="./src/resources/addresses/prefixes/delegations.ts">create</a>(accountId, prefixId, { ...params }) -> DelegationCreateResponse</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/delegations">client.addresses.prefixes.delegations.<a href="./src/resources/addresses/prefixes/delegations.ts">list</a>(accountId, prefixId) -> DelegationListResponse | null</code>
- <code title="delete /accounts/{account_id}/addressing/prefixes/{prefix_id}/delegations/{delegation_id}">client.addresses.prefixes.delegations.<a href="./src/resources/addresses/prefixes/delegations.ts">delete</a>(accountId, prefixId, delegationId) -> DelegationDeleteResponse</code>

# AuditLogs

Types:

- <code><a href="./src/resources/audit-logs.ts">AuditLogListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/audit_logs">client.auditLogs.<a href="./src/resources/audit-logs.ts">list</a>(accountIdentifier, { ...params }) -> AuditLogListResponsesV4PagePaginationArray</code>

# Billing

## Profiles

Types:

- <code><a href="./src/resources/billing/profiles.ts">ProfileGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/billing/profile">client.billing.profiles.<a href="./src/resources/billing/profiles.ts">get</a>(accountIdentifier) -> ProfileGetResponse</code>

# BrandProtection

## Submits

Types:

- <code><a href="./src/resources/brand-protection/submits.ts">SubmitCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/brand-protection/submit">client.brandProtection.submits.<a href="./src/resources/brand-protection/submits.ts">create</a>(accountId, { ...params }) -> SubmitCreateResponse</code>

## URLInfos

Types:

- <code><a href="./src/resources/brand-protection/url-infos.ts">URLInfoGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/brand-protection/url-info">client.brandProtection.urlInfos.<a href="./src/resources/brand-protection/url-infos.ts">get</a>(accountId, { ...params }) -> URLInfoGetResponse</code>

# Tunnels

Types:

- <code><a href="./src/resources/tunnels/tunnels.ts">TunnelCreateResponse</a></code>
- <code><a href="./src/resources/tunnels/tunnels.ts">TunnelListResponse</a></code>
- <code><a href="./src/resources/tunnels/tunnels.ts">TunnelDeleteResponse</a></code>
- <code><a href="./src/resources/tunnels/tunnels.ts">TunnelEditResponse</a></code>
- <code><a href="./src/resources/tunnels/tunnels.ts">TunnelGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/tunnels">client.tunnels.<a href="./src/resources/tunnels/tunnels.ts">create</a>(accountId, { ...params }) -> TunnelCreateResponse</code>
- <code title="get /accounts/{account_id}/tunnels">client.tunnels.<a href="./src/resources/tunnels/tunnels.ts">list</a>(accountId, { ...params }) -> TunnelListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/tunnels/{tunnel_id}">client.tunnels.<a href="./src/resources/tunnels/tunnels.ts">delete</a>(accountId, tunnelId, { ...params }) -> TunnelDeleteResponse</code>
- <code title="patch /accounts/{account_id}/cfd_tunnel/{tunnel_id}">client.tunnels.<a href="./src/resources/tunnels/tunnels.ts">edit</a>(accountId, tunnelId, { ...params }) -> TunnelEditResponse</code>
- <code title="get /accounts/{account_id}/tunnels/{tunnel_id}">client.tunnels.<a href="./src/resources/tunnels/tunnels.ts">get</a>(accountId, tunnelId) -> TunnelGetResponse</code>

## Configurations

Types:

- <code><a href="./src/resources/tunnels/configurations.ts">ConfigurationUpdateResponse</a></code>
- <code><a href="./src/resources/tunnels/configurations.ts">ConfigurationListResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/cfd_tunnel/{tunnel_id}/configurations">client.tunnels.configurations.<a href="./src/resources/tunnels/configurations.ts">update</a>(accountId, tunnelId, { ...params }) -> ConfigurationUpdateResponse</code>
- <code title="get /accounts/{account_id}/cfd_tunnel/{tunnel_id}/configurations">client.tunnels.configurations.<a href="./src/resources/tunnels/configurations.ts">list</a>(accountId, tunnelId) -> ConfigurationListResponse</code>

## Connections

Types:

- <code><a href="./src/resources/tunnels/connections.ts">ConnectionListResponse</a></code>
- <code><a href="./src/resources/tunnels/connections.ts">ConnectionDeleteResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cfd_tunnel/{tunnel_id}/connections">client.tunnels.connections.<a href="./src/resources/tunnels/connections.ts">list</a>(accountId, tunnelId) -> ConnectionListResponse | null</code>
- <code title="delete /accounts/{account_id}/tunnels/{tunnel_id}/connections">client.tunnels.connections.<a href="./src/resources/tunnels/connections.ts">delete</a>(accountId, tunnelId, { ...params }) -> ConnectionDeleteResponse</code>

## Tokens

Types:

- <code><a href="./src/resources/tunnels/tokens.ts">TokenGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cfd_tunnel/{tunnel_id}/token">client.tunnels.tokens.<a href="./src/resources/tunnels/tokens.ts">get</a>(accountId, tunnelId) -> TokenGetResponse</code>

## Connectors

Types:

- <code><a href="./src/resources/tunnels/connectors.ts">ConnectorGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cfd_tunnel/{tunnel_id}/connectors/{connector_id}">client.tunnels.connectors.<a href="./src/resources/tunnels/connectors.ts">get</a>(accountId, tunnelId, connectorId) -> ConnectorGetResponse</code>

## Management

Types:

- <code><a href="./src/resources/tunnels/management.ts">ManagementCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cfd_tunnel/{tunnel_id}/management">client.tunnels.management.<a href="./src/resources/tunnels/management.ts">create</a>(accountId, tunnelId, { ...params }) -> ManagementCreateResponse</code>

# Diagnostics

## Traceroutes

Types:

- <code><a href="./src/resources/diagnostics/traceroutes.ts">TracerouteCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/diagnostics/traceroute">client.diagnostics.traceroutes.<a href="./src/resources/diagnostics/traceroutes.ts">create</a>(accountId, { ...params }) -> TracerouteCreateResponse | null</code>

# DLP

## Datasets

Types:

- <code><a href="./src/resources/dlp/datasets/datasets.ts">DatasetCreateResponse</a></code>
- <code><a href="./src/resources/dlp/datasets/datasets.ts">DatasetUpdateResponse</a></code>
- <code><a href="./src/resources/dlp/datasets/datasets.ts">DatasetListResponse</a></code>
- <code><a href="./src/resources/dlp/datasets/datasets.ts">DatasetGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/datasets">client.dlp.datasets.<a href="./src/resources/dlp/datasets/datasets.ts">create</a>(accountId, { ...params }) -> DatasetCreateResponse</code>
- <code title="put /accounts/{account_id}/dlp/datasets/{dataset_id}">client.dlp.datasets.<a href="./src/resources/dlp/datasets/datasets.ts">update</a>(accountId, datasetId, { ...params }) -> DatasetUpdateResponse</code>
- <code title="get /accounts/{account_id}/dlp/datasets">client.dlp.datasets.<a href="./src/resources/dlp/datasets/datasets.ts">list</a>(accountId) -> DatasetListResponse</code>
- <code title="delete /accounts/{account_id}/dlp/datasets/{dataset_id}">client.dlp.datasets.<a href="./src/resources/dlp/datasets/datasets.ts">delete</a>(accountId, datasetId) -> void</code>
- <code title="get /accounts/{account_id}/dlp/datasets/{dataset_id}">client.dlp.datasets.<a href="./src/resources/dlp/datasets/datasets.ts">get</a>(accountId, datasetId) -> DatasetGetResponse</code>

### Upload

Types:

- <code><a href="./src/resources/dlp/datasets/upload.ts">UploadCreateResponse</a></code>
- <code><a href="./src/resources/dlp/datasets/upload.ts">UploadEditResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/datasets/{dataset_id}/upload">client.dlp.datasets.upload.<a href="./src/resources/dlp/datasets/upload.ts">create</a>(accountId, datasetId) -> UploadCreateResponse</code>
- <code title="post /accounts/{account_id}/dlp/datasets/{dataset_id}/upload/{version}">client.dlp.datasets.upload.<a href="./src/resources/dlp/datasets/upload.ts">edit</a>(accountId, datasetId, version) -> UploadEditResponse</code>

## Patterns

Types:

- <code><a href="./src/resources/dlp/patterns.ts">PatternValidateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/patterns/validate">client.dlp.patterns.<a href="./src/resources/dlp/patterns.ts">validate</a>(accountId, { ...params }) -> PatternValidateResponse</code>

## PayloadLogs

Types:

- <code><a href="./src/resources/dlp/payload-logs.ts">PayloadLogUpdateResponse</a></code>
- <code><a href="./src/resources/dlp/payload-logs.ts">PayloadLogGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/dlp/payload_log">client.dlp.payloadLogs.<a href="./src/resources/dlp/payload-logs.ts">update</a>(accountId, { ...params }) -> PayloadLogUpdateResponse</code>
- <code title="get /accounts/{account_id}/dlp/payload_log">client.dlp.payloadLogs.<a href="./src/resources/dlp/payload-logs.ts">get</a>(accountId) -> PayloadLogGetResponse</code>

## Profiles

Types:

- <code><a href="./src/resources/dlp/profiles/profiles.ts">ProfileListResponse</a></code>
- <code><a href="./src/resources/dlp/profiles/profiles.ts">ProfileGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dlp/profiles">client.dlp.profiles.<a href="./src/resources/dlp/profiles/profiles.ts">list</a>(accountId) -> ProfileListResponse | null</code>
- <code title="get /accounts/{account_id}/dlp/profiles/{profile_id}">client.dlp.profiles.<a href="./src/resources/dlp/profiles/profiles.ts">get</a>(accountId, profileId) -> ProfileGetResponse</code>

### Customs

Types:

- <code><a href="./src/resources/dlp/profiles/customs.ts">CustomCreateResponse</a></code>
- <code><a href="./src/resources/dlp/profiles/customs.ts">CustomUpdateResponse</a></code>
- <code><a href="./src/resources/dlp/profiles/customs.ts">CustomDeleteResponse</a></code>
- <code><a href="./src/resources/dlp/profiles/customs.ts">CustomGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/profiles/custom">client.dlp.profiles.customs.<a href="./src/resources/dlp/profiles/customs.ts">create</a>(accountId, { ...params }) -> CustomCreateResponse | null</code>
- <code title="put /accounts/{account_id}/dlp/profiles/custom/{profile_id}">client.dlp.profiles.customs.<a href="./src/resources/dlp/profiles/customs.ts">update</a>(accountId, profileId, { ...params }) -> CustomUpdateResponse</code>
- <code title="delete /accounts/{account_id}/dlp/profiles/custom/{profile_id}">client.dlp.profiles.customs.<a href="./src/resources/dlp/profiles/customs.ts">delete</a>(accountId, profileId) -> CustomDeleteResponse</code>
- <code title="get /accounts/{account_id}/dlp/profiles/custom/{profile_id}">client.dlp.profiles.customs.<a href="./src/resources/dlp/profiles/customs.ts">get</a>(accountId, profileId) -> CustomGetResponse</code>

### Predefineds

Types:

- <code><a href="./src/resources/dlp/profiles/predefineds.ts">PredefinedUpdateResponse</a></code>
- <code><a href="./src/resources/dlp/profiles/predefineds.ts">PredefinedGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/dlp/profiles/predefined/{profile_id}">client.dlp.profiles.predefineds.<a href="./src/resources/dlp/profiles/predefineds.ts">update</a>(accountId, profileId, { ...params }) -> PredefinedUpdateResponse</code>
- <code title="get /accounts/{account_id}/dlp/profiles/predefined/{profile_id}">client.dlp.profiles.predefineds.<a href="./src/resources/dlp/profiles/predefineds.ts">get</a>(accountId, profileId) -> PredefinedGetResponse</code>

# Images

## V1s

Types:

- <code><a href="./src/resources/images/v1s/v1s.ts">V1CreateResponse</a></code>
- <code><a href="./src/resources/images/v1s/v1s.ts">V1ListResponse</a></code>
- <code><a href="./src/resources/images/v1s/v1s.ts">V1DeleteResponse</a></code>
- <code><a href="./src/resources/images/v1s/v1s.ts">V1EditResponse</a></code>
- <code><a href="./src/resources/images/v1s/v1s.ts">V1GetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/images/v1">client.images.v1s.<a href="./src/resources/images/v1s/v1s.ts">create</a>(accountId, { ...params }) -> V1CreateResponse</code>
- <code title="get /accounts/{account_id}/images/v1">client.images.v1s.<a href="./src/resources/images/v1s/v1s.ts">list</a>(accountId, { ...params }) -> V1ListResponsesV4PagePagination</code>
- <code title="delete /accounts/{account_id}/images/v1/{image_id}">client.images.v1s.<a href="./src/resources/images/v1s/v1s.ts">delete</a>(accountId, imageId) -> V1DeleteResponse</code>
- <code title="patch /accounts/{account_id}/images/v1/{image_id}">client.images.v1s.<a href="./src/resources/images/v1s/v1s.ts">edit</a>(accountId, imageId, { ...params }) -> V1EditResponse</code>
- <code title="get /accounts/{account_id}/images/v1/{image_id}">client.images.v1s.<a href="./src/resources/images/v1s/v1s.ts">get</a>(accountId, imageId) -> V1GetResponse</code>

### Keys

Types:

- <code><a href="./src/resources/images/v1s/keys.ts">KeyListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/images/v1/keys">client.images.v1s.keys.<a href="./src/resources/images/v1s/keys.ts">list</a>(accountId) -> KeyListResponse</code>

### Stats

Types:

- <code><a href="./src/resources/images/v1s/stats.ts">StatGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/images/v1/stats">client.images.v1s.stats.<a href="./src/resources/images/v1s/stats.ts">get</a>(accountId) -> StatGetResponse</code>

### Variants

Types:

- <code><a href="./src/resources/images/v1s/variants.ts">VariantCreateResponse</a></code>
- <code><a href="./src/resources/images/v1s/variants.ts">VariantListResponse</a></code>
- <code><a href="./src/resources/images/v1s/variants.ts">VariantDeleteResponse</a></code>
- <code><a href="./src/resources/images/v1s/variants.ts">VariantEditResponse</a></code>
- <code><a href="./src/resources/images/v1s/variants.ts">VariantGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/images/v1/variants">client.images.v1s.variants.<a href="./src/resources/images/v1s/variants.ts">create</a>(accountId, { ...params }) -> VariantCreateResponse</code>
- <code title="get /accounts/{account_id}/images/v1/variants">client.images.v1s.variants.<a href="./src/resources/images/v1s/variants.ts">list</a>(accountId) -> VariantListResponse</code>
- <code title="delete /accounts/{account_id}/images/v1/variants/{variant_id}">client.images.v1s.variants.<a href="./src/resources/images/v1s/variants.ts">delete</a>(accountId, variantId) -> VariantDeleteResponse</code>
- <code title="patch /accounts/{account_id}/images/v1/variants/{variant_id}">client.images.v1s.variants.<a href="./src/resources/images/v1s/variants.ts">edit</a>(accountId, variantId, { ...params }) -> VariantEditResponse</code>
- <code title="get /accounts/{account_id}/images/v1/variants/{variant_id}">client.images.v1s.variants.<a href="./src/resources/images/v1s/variants.ts">get</a>(accountId, variantId) -> VariantGetResponse</code>

### Blobs

Methods:

- <code title="get /accounts/{account_id}/images/v1/{image_id}/blob">client.images.v1s.blobs.<a href="./src/resources/images/v1s/blobs.ts">get</a>(accountId, imageId) -> Response</code>

## V2s

Types:

- <code><a href="./src/resources/images/v2s/v2s.ts">V2ListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/images/v2">client.images.v2s.<a href="./src/resources/images/v2s/v2s.ts">list</a>(accountId, { ...params }) -> V2ListResponse</code>

### DirectUploads

Types:

- <code><a href="./src/resources/images/v2s/direct-uploads.ts">DirectUploadCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/images/v2/direct_upload">client.images.v2s.directUploads.<a href="./src/resources/images/v2s/direct-uploads.ts">create</a>(accountId, { ...params }) -> DirectUploadCreateResponse</code>

# Intel

## ASN

Types:

- <code><a href="./src/resources/intel/asn/asn.ts">ASNGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/asn/{asn}">client.intel.asn.<a href="./src/resources/intel/asn/asn.ts">get</a>(accountId, asn) -> ASNGetResponse</code>

### Subnets

Types:

- <code><a href="./src/resources/intel/asn/subnets.ts">SubnetListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/asn/{asn}/subnets">client.intel.asn.subnets.<a href="./src/resources/intel/asn/subnets.ts">list</a>(accountId, asn) -> SubnetListResponse</code>

## DNS

Types:

- <code><a href="./src/resources/intel/dns.ts">DNSGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/dns">client.intel.dns.<a href="./src/resources/intel/dns.ts">get</a>(accountId, { ...params }) -> DNSGetResponse</code>

## Domains

Types:

- <code><a href="./src/resources/intel/domains/domains.ts">DomainGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/domain">client.intel.domains.<a href="./src/resources/intel/domains/domains.ts">get</a>(accountId, { ...params }) -> DomainGetResponse</code>

### Bulks

Types:

- <code><a href="./src/resources/intel/domains/bulks.ts">BulkGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/domain/bulk">client.intel.domains.bulks.<a href="./src/resources/intel/domains/bulks.ts">get</a>(accountId, { ...params }) -> BulkGetResponse | null</code>

## DomainHistories

Types:

- <code><a href="./src/resources/intel/domain-histories.ts">DomainHistoryListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/domain-history">client.intel.domainHistories.<a href="./src/resources/intel/domain-histories.ts">list</a>(accountId, { ...params }) -> DomainHistoryListResponse | null</code>

## IPs

Types:

- <code><a href="./src/resources/intel/ips.ts">IPGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/ip">client.intel.ips.<a href="./src/resources/intel/ips.ts">get</a>(accountId, { ...params }) -> IPGetResponse | null</code>

## IPLists

Types:

- <code><a href="./src/resources/intel/ip-lists.ts">IPListGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/ip-list">client.intel.ipLists.<a href="./src/resources/intel/ip-lists.ts">get</a>(accountId) -> IPListGetResponse | null</code>

## Miscategorizations

Types:

- <code><a href="./src/resources/intel/miscategorizations.ts">MiscategorizationCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/intel/miscategorization">client.intel.miscategorizations.<a href="./src/resources/intel/miscategorizations.ts">create</a>(accountId, { ...params }) -> MiscategorizationCreateResponse</code>

## Whois

Types:

- <code><a href="./src/resources/intel/whois.ts">WhoisGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/whois">client.intel.whois.<a href="./src/resources/intel/whois.ts">get</a>(accountId, { ...params }) -> WhoisGetResponse</code>

## IndicatorFeeds

Types:

- <code><a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">IndicatorFeedCreateResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">IndicatorFeedUpdateResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">IndicatorFeedListResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">IndicatorFeedDataResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">IndicatorFeedGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/intel/indicator-feeds">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">create</a>(accountId, { ...params }) -> IndicatorFeedCreateResponse</code>
- <code title="put /accounts/{account_id}/intel/indicator-feeds/{feed_id}/snapshot">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">update</a>(accountId, feedId, { ...params }) -> IndicatorFeedUpdateResponse</code>
- <code title="get /accounts/{account_id}/intel/indicator-feeds">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">list</a>(accountId) -> IndicatorFeedListResponse</code>
- <code title="get /accounts/{account_id}/intel/indicator-feeds/{feed_id}/data">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">data</a>(accountId, feedId) -> string</code>
- <code title="get /accounts/{account_id}/intel/indicator-feeds/{feed_id}">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">get</a>(accountId, feedId) -> IndicatorFeedGetResponse</code>

### Permissions

Types:

- <code><a href="./src/resources/intel/indicator-feeds/permissions.ts">PermissionCreateResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/permissions.ts">PermissionListResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/permissions.ts">PermissionDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/intel/indicator-feeds/permissions/add">client.intel.indicatorFeeds.permissions.<a href="./src/resources/intel/indicator-feeds/permissions.ts">create</a>(accountId, { ...params }) -> PermissionCreateResponse</code>
- <code title="get /accounts/{account_id}/intel/indicator-feeds/permissions/view">client.intel.indicatorFeeds.permissions.<a href="./src/resources/intel/indicator-feeds/permissions.ts">list</a>(accountId) -> PermissionListResponse</code>
- <code title="put /accounts/{account_id}/intel/indicator-feeds/permissions/remove">client.intel.indicatorFeeds.permissions.<a href="./src/resources/intel/indicator-feeds/permissions.ts">delete</a>(accountId, { ...params }) -> PermissionDeleteResponse</code>

## Sinkholes

Types:

- <code><a href="./src/resources/intel/sinkholes.ts">SinkholeListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/sinkholes">client.intel.sinkholes.<a href="./src/resources/intel/sinkholes.ts">list</a>(accountId) -> SinkholeListResponse</code>

# Magics

## CfInterconnects

Types:

- <code><a href="./src/resources/magics/cf-interconnects.ts">CfInterconnectUpdateResponse</a></code>
- <code><a href="./src/resources/magics/cf-interconnects.ts">CfInterconnectListResponse</a></code>
- <code><a href="./src/resources/magics/cf-interconnects.ts">CfInterconnectGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_identifier}/magic/cf_interconnects/{tunnel_identifier}">client.magics.cfInterconnects.<a href="./src/resources/magics/cf-interconnects.ts">update</a>(accountIdentifier, tunnelIdentifier, { ...params }) -> CfInterconnectUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/magic/cf_interconnects">client.magics.cfInterconnects.<a href="./src/resources/magics/cf-interconnects.ts">list</a>(accountIdentifier) -> CfInterconnectListResponse</code>
- <code title="get /accounts/{account_identifier}/magic/cf_interconnects/{tunnel_identifier}">client.magics.cfInterconnects.<a href="./src/resources/magics/cf-interconnects.ts">get</a>(accountIdentifier, tunnelIdentifier) -> CfInterconnectGetResponse</code>

## GRETunnels

Types:

- <code><a href="./src/resources/magics/gre-tunnels.ts">GRETunnelCreateResponse</a></code>
- <code><a href="./src/resources/magics/gre-tunnels.ts">GRETunnelUpdateResponse</a></code>
- <code><a href="./src/resources/magics/gre-tunnels.ts">GRETunnelListResponse</a></code>
- <code><a href="./src/resources/magics/gre-tunnels.ts">GRETunnelDeleteResponse</a></code>
- <code><a href="./src/resources/magics/gre-tunnels.ts">GRETunnelGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/magic/gre_tunnels">client.magics.greTunnels.<a href="./src/resources/magics/gre-tunnels.ts">create</a>(accountIdentifier, { ...params }) -> GRETunnelCreateResponse</code>
- <code title="put /accounts/{account_identifier}/magic/gre_tunnels/{tunnel_identifier}">client.magics.greTunnels.<a href="./src/resources/magics/gre-tunnels.ts">update</a>(accountIdentifier, tunnelIdentifier, { ...params }) -> GRETunnelUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/magic/gre_tunnels">client.magics.greTunnels.<a href="./src/resources/magics/gre-tunnels.ts">list</a>(accountIdentifier) -> GRETunnelListResponse</code>
- <code title="delete /accounts/{account_identifier}/magic/gre_tunnels/{tunnel_identifier}">client.magics.greTunnels.<a href="./src/resources/magics/gre-tunnels.ts">delete</a>(accountIdentifier, tunnelIdentifier) -> GRETunnelDeleteResponse</code>
- <code title="get /accounts/{account_identifier}/magic/gre_tunnels/{tunnel_identifier}">client.magics.greTunnels.<a href="./src/resources/magics/gre-tunnels.ts">get</a>(accountIdentifier, tunnelIdentifier) -> GRETunnelGetResponse</code>

## IPSECTunnels

Types:

- <code><a href="./src/resources/magics/ipsec-tunnels/ipsec-tunnels.ts">IPSECTunnelCreateResponse</a></code>
- <code><a href="./src/resources/magics/ipsec-tunnels/ipsec-tunnels.ts">IPSECTunnelUpdateResponse</a></code>
- <code><a href="./src/resources/magics/ipsec-tunnels/ipsec-tunnels.ts">IPSECTunnelListResponse</a></code>
- <code><a href="./src/resources/magics/ipsec-tunnels/ipsec-tunnels.ts">IPSECTunnelDeleteResponse</a></code>
- <code><a href="./src/resources/magics/ipsec-tunnels/ipsec-tunnels.ts">IPSECTunnelGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/magic/ipsec_tunnels">client.magics.ipsecTunnels.<a href="./src/resources/magics/ipsec-tunnels/ipsec-tunnels.ts">create</a>(accountIdentifier, { ...params }) -> IPSECTunnelCreateResponse</code>
- <code title="put /accounts/{account_identifier}/magic/ipsec_tunnels/{tunnel_identifier}">client.magics.ipsecTunnels.<a href="./src/resources/magics/ipsec-tunnels/ipsec-tunnels.ts">update</a>(accountIdentifier, tunnelIdentifier, { ...params }) -> IPSECTunnelUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/magic/ipsec_tunnels">client.magics.ipsecTunnels.<a href="./src/resources/magics/ipsec-tunnels/ipsec-tunnels.ts">list</a>(accountIdentifier) -> IPSECTunnelListResponse</code>
- <code title="delete /accounts/{account_identifier}/magic/ipsec_tunnels/{tunnel_identifier}">client.magics.ipsecTunnels.<a href="./src/resources/magics/ipsec-tunnels/ipsec-tunnels.ts">delete</a>(accountIdentifier, tunnelIdentifier) -> IPSECTunnelDeleteResponse</code>
- <code title="get /accounts/{account_identifier}/magic/ipsec_tunnels/{tunnel_identifier}">client.magics.ipsecTunnels.<a href="./src/resources/magics/ipsec-tunnels/ipsec-tunnels.ts">get</a>(accountIdentifier, tunnelIdentifier) -> IPSECTunnelGetResponse</code>

### PSKGenerates

Types:

- <code><a href="./src/resources/magics/ipsec-tunnels/psk-generates.ts">PSKGenerateCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/magic/ipsec_tunnels/{tunnel_identifier}/psk_generate">client.magics.ipsecTunnels.pskGenerates.<a href="./src/resources/magics/ipsec-tunnels/psk-generates.ts">create</a>(accountIdentifier, tunnelIdentifier) -> PSKGenerateCreateResponse</code>

## Routes

Types:

- <code><a href="./src/resources/magics/routes.ts">RouteCreateResponse</a></code>
- <code><a href="./src/resources/magics/routes.ts">RouteUpdateResponse</a></code>
- <code><a href="./src/resources/magics/routes.ts">RouteListResponse</a></code>
- <code><a href="./src/resources/magics/routes.ts">RouteDeleteResponse</a></code>
- <code><a href="./src/resources/magics/routes.ts">RouteEmptyResponse</a></code>
- <code><a href="./src/resources/magics/routes.ts">RouteGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/magic/routes">client.magics.routes.<a href="./src/resources/magics/routes.ts">create</a>(accountIdentifier, { ...params }) -> RouteCreateResponse</code>
- <code title="put /accounts/{account_identifier}/magic/routes/{route_identifier}">client.magics.routes.<a href="./src/resources/magics/routes.ts">update</a>(accountIdentifier, routeIdentifier, { ...params }) -> RouteUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/magic/routes">client.magics.routes.<a href="./src/resources/magics/routes.ts">list</a>(accountIdentifier) -> RouteListResponse</code>
- <code title="delete /accounts/{account_identifier}/magic/routes/{route_identifier}">client.magics.routes.<a href="./src/resources/magics/routes.ts">delete</a>(accountIdentifier, routeIdentifier) -> RouteDeleteResponse</code>
- <code title="delete /accounts/{account_identifier}/magic/routes">client.magics.routes.<a href="./src/resources/magics/routes.ts">empty</a>(accountIdentifier, { ...params }) -> RouteEmptyResponse</code>
- <code title="get /accounts/{account_identifier}/magic/routes/{route_identifier}">client.magics.routes.<a href="./src/resources/magics/routes.ts">get</a>(accountIdentifier, routeIdentifier) -> RouteGetResponse</code>

# AccountMembers

Types:

- <code><a href="./src/resources/account-members.ts">AccountMemberCreateResponse</a></code>
- <code><a href="./src/resources/account-members.ts">AccountMemberUpdateResponse</a></code>
- <code><a href="./src/resources/account-members.ts">AccountMemberListResponse</a></code>
- <code><a href="./src/resources/account-members.ts">AccountMemberDeleteResponse</a></code>
- <code><a href="./src/resources/account-members.ts">AccountMemberGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/members">client.accountMembers.<a href="./src/resources/account-members.ts">create</a>(accountId, { ...params }) -> AccountMemberCreateResponse</code>
- <code title="put /accounts/{account_id}/members/{member_id}">client.accountMembers.<a href="./src/resources/account-members.ts">update</a>(accountId, memberId, { ...params }) -> AccountMemberUpdateResponse</code>
- <code title="get /accounts/{account_id}/members">client.accountMembers.<a href="./src/resources/account-members.ts">list</a>(accountId, { ...params }) -> AccountMemberListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/members/{member_id}">client.accountMembers.<a href="./src/resources/account-members.ts">delete</a>(accountId, memberId) -> AccountMemberDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/members/{member_id}">client.accountMembers.<a href="./src/resources/account-members.ts">get</a>(accountId, memberId) -> AccountMemberGetResponse</code>

# MNMs

## Configs

Types:

- <code><a href="./src/resources/mnms/configs/configs.ts">ConfigCreateResponse</a></code>
- <code><a href="./src/resources/mnms/configs/configs.ts">ConfigUpdateResponse</a></code>
- <code><a href="./src/resources/mnms/configs/configs.ts">ConfigListResponse</a></code>
- <code><a href="./src/resources/mnms/configs/configs.ts">ConfigDeleteResponse</a></code>
- <code><a href="./src/resources/mnms/configs/configs.ts">ConfigEditResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/mnm/config">client.mnms.configs.<a href="./src/resources/mnms/configs/configs.ts">create</a>(accountIdentifier) -> ConfigCreateResponse</code>
- <code title="put /accounts/{account_identifier}/mnm/config">client.mnms.configs.<a href="./src/resources/mnms/configs/configs.ts">update</a>(accountIdentifier) -> ConfigUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/mnm/config">client.mnms.configs.<a href="./src/resources/mnms/configs/configs.ts">list</a>(accountIdentifier) -> ConfigListResponse</code>
- <code title="delete /accounts/{account_identifier}/mnm/config">client.mnms.configs.<a href="./src/resources/mnms/configs/configs.ts">delete</a>(accountIdentifier) -> ConfigDeleteResponse</code>
- <code title="patch /accounts/{account_identifier}/mnm/config">client.mnms.configs.<a href="./src/resources/mnms/configs/configs.ts">edit</a>(accountIdentifier) -> ConfigEditResponse</code>

### Fulls

Types:

- <code><a href="./src/resources/mnms/configs/fulls.ts">FullListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/mnm/config/full">client.mnms.configs.fulls.<a href="./src/resources/mnms/configs/fulls.ts">list</a>(accountIdentifier) -> FullListResponse</code>

## Rules

Types:

- <code><a href="./src/resources/mnms/rules/rules.ts">RuleCreateResponse</a></code>
- <code><a href="./src/resources/mnms/rules/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/mnms/rules/rules.ts">RuleListResponse</a></code>
- <code><a href="./src/resources/mnms/rules/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/mnms/rules/rules.ts">RuleEditResponse</a></code>
- <code><a href="./src/resources/mnms/rules/rules.ts">RuleGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/mnm/rules">client.mnms.rules.<a href="./src/resources/mnms/rules/rules.ts">create</a>(accountIdentifier) -> RuleCreateResponse | null</code>
- <code title="put /accounts/{account_identifier}/mnm/rules">client.mnms.rules.<a href="./src/resources/mnms/rules/rules.ts">update</a>(accountIdentifier) -> RuleUpdateResponse | null</code>
- <code title="get /accounts/{account_identifier}/mnm/rules">client.mnms.rules.<a href="./src/resources/mnms/rules/rules.ts">list</a>(accountIdentifier) -> RuleListResponse | null</code>
- <code title="delete /accounts/{account_identifier}/mnm/rules/{rule_identifier}">client.mnms.rules.<a href="./src/resources/mnms/rules/rules.ts">delete</a>(accountIdentifier, ruleIdentifier) -> RuleDeleteResponse | null</code>
- <code title="patch /accounts/{account_identifier}/mnm/rules/{rule_identifier}">client.mnms.rules.<a href="./src/resources/mnms/rules/rules.ts">edit</a>(accountIdentifier, ruleIdentifier) -> RuleEditResponse | null</code>
- <code title="get /accounts/{account_identifier}/mnm/rules/{rule_identifier}">client.mnms.rules.<a href="./src/resources/mnms/rules/rules.ts">get</a>(accountIdentifier, ruleIdentifier) -> RuleGetResponse | null</code>

### Advertisements

Types:

- <code><a href="./src/resources/mnms/rules/advertisements.ts">AdvertisementEditResponse</a></code>

Methods:

- <code title="patch /accounts/{account_identifier}/mnm/rules/{rule_identifier}/advertisement">client.mnms.rules.advertisements.<a href="./src/resources/mnms/rules/advertisements.ts">edit</a>(accountIdentifier, ruleIdentifier) -> AdvertisementEditResponse | null</code>

# MTLSCertificates

Types:

- <code><a href="./src/resources/mtls-certificates/mtls-certificates.ts">MTLSCertificateCreateResponse</a></code>
- <code><a href="./src/resources/mtls-certificates/mtls-certificates.ts">MTLSCertificateListResponse</a></code>
- <code><a href="./src/resources/mtls-certificates/mtls-certificates.ts">MTLSCertificateDeleteResponse</a></code>
- <code><a href="./src/resources/mtls-certificates/mtls-certificates.ts">MTLSCertificateGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/mtls_certificates">client.mtlsCertificates.<a href="./src/resources/mtls-certificates/mtls-certificates.ts">create</a>(accountId, { ...params }) -> MTLSCertificateCreateResponse</code>
- <code title="get /accounts/{account_id}/mtls_certificates">client.mtlsCertificates.<a href="./src/resources/mtls-certificates/mtls-certificates.ts">list</a>(accountId) -> MTLSCertificateListResponse | null</code>
- <code title="delete /accounts/{account_id}/mtls_certificates/{mtls_certificate_id}">client.mtlsCertificates.<a href="./src/resources/mtls-certificates/mtls-certificates.ts">delete</a>(accountId, mtlsCertificateId) -> MTLSCertificateDeleteResponse</code>
- <code title="get /accounts/{account_id}/mtls_certificates/{mtls_certificate_id}">client.mtlsCertificates.<a href="./src/resources/mtls-certificates/mtls-certificates.ts">get</a>(accountId, mtlsCertificateId) -> MTLSCertificateGetResponse</code>

## Associations

Types:

- <code><a href="./src/resources/mtls-certificates/associations.ts">AssociationListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/mtls_certificates/{mtls_certificate_id}/associations">client.mtlsCertificates.associations.<a href="./src/resources/mtls-certificates/associations.ts">list</a>(accountId, mtlsCertificateId) -> AssociationListResponse | null</code>

# Pages

## Projects

Types:

- <code><a href="./src/resources/pages/projects/projects.ts">ProjectCreateResponse</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">ProjectListResponse</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">ProjectDeleteResponse</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">ProjectEditResponse</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">ProjectGetResponse</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">ProjectPurgeBuildCacheResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pages/projects">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">create</a>(accountId, { ...params }) -> ProjectCreateResponse</code>
- <code title="get /accounts/{account_id}/pages/projects">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">list</a>(accountId) -> ProjectListResponse</code>
- <code title="delete /accounts/{account_id}/pages/projects/{project_name}">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">delete</a>(accountId, projectName) -> unknown</code>
- <code title="patch /accounts/{account_id}/pages/projects/{project_name}">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">edit</a>(accountId, projectName, { ...params }) -> ProjectEditResponse</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">get</a>(accountId, projectName) -> ProjectGetResponse</code>
- <code title="post /accounts/{account_id}/pages/projects/{project_name}/purge_build_cache">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">purgeBuildCache</a>(accountId, projectName) -> unknown</code>

### Deployments

Types:

- <code><a href="./src/resources/pages/projects/deployments/deployments.ts">DeploymentCreateResponse</a></code>
- <code><a href="./src/resources/pages/projects/deployments/deployments.ts">DeploymentListResponse</a></code>
- <code><a href="./src/resources/pages/projects/deployments/deployments.ts">DeploymentDeleteResponse</a></code>
- <code><a href="./src/resources/pages/projects/deployments/deployments.ts">DeploymentGetResponse</a></code>
- <code><a href="./src/resources/pages/projects/deployments/deployments.ts">DeploymentRetryResponse</a></code>
- <code><a href="./src/resources/pages/projects/deployments/deployments.ts">DeploymentRollbackResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pages/projects/{project_name}/deployments">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">create</a>(accountId, projectName, { ...params }) -> DeploymentCreateResponse</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}/deployments">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">list</a>(accountId, projectName) -> DeploymentListResponse</code>
- <code title="delete /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">delete</a>(accountId, projectName, deploymentId) -> unknown</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">get</a>(accountId, projectName, deploymentId) -> DeploymentGetResponse</code>
- <code title="post /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}/retry">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">retry</a>(accountId, projectName, deploymentId) -> DeploymentRetryResponse</code>
- <code title="post /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}/rollback">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">rollback</a>(accountId, projectName, deploymentId) -> DeploymentRollbackResponse</code>

#### History

##### Logs

Types:

- <code><a href="./src/resources/pages/projects/deployments/history/logs.ts">LogListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}/history/logs">client.pages.projects.deployments.history.logs.<a href="./src/resources/pages/projects/deployments/history/logs.ts">list</a>(accountId, projectName, deploymentId) -> LogListResponse</code>

### Domains

Types:

- <code><a href="./src/resources/pages/projects/domains.ts">DomainCreateResponse</a></code>
- <code><a href="./src/resources/pages/projects/domains.ts">DomainListResponse</a></code>
- <code><a href="./src/resources/pages/projects/domains.ts">DomainDeleteResponse</a></code>
- <code><a href="./src/resources/pages/projects/domains.ts">DomainEditResponse</a></code>
- <code><a href="./src/resources/pages/projects/domains.ts">DomainGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pages/projects/{project_name}/domains">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">create</a>(accountId, projectName, { ...params }) -> DomainCreateResponse | null</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}/domains">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">list</a>(accountId, projectName) -> DomainListResponse</code>
- <code title="delete /accounts/{account_id}/pages/projects/{project_name}/domains/{domain_name}">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">delete</a>(accountId, projectName, domainName) -> unknown</code>
- <code title="patch /accounts/{account_id}/pages/projects/{project_name}/domains/{domain_name}">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">edit</a>(accountId, projectName, domainName) -> DomainEditResponse | null</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}/domains/{domain_name}">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">get</a>(accountId, projectName, domainName) -> DomainGetResponse | null</code>

# PCAPs

Types:

- <code><a href="./src/resources/pcaps/pcaps.ts">PCAPCreateResponse</a></code>
- <code><a href="./src/resources/pcaps/pcaps.ts">PCAPListResponse</a></code>
- <code><a href="./src/resources/pcaps/pcaps.ts">PCAPGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pcaps">client.pcaps.<a href="./src/resources/pcaps/pcaps.ts">create</a>(accountId, { ...params }) -> PCAPCreateResponse</code>
- <code title="get /accounts/{account_id}/pcaps">client.pcaps.<a href="./src/resources/pcaps/pcaps.ts">list</a>(accountId) -> PCAPListResponse | null</code>
- <code title="get /accounts/{account_id}/pcaps/{pcap_id}">client.pcaps.<a href="./src/resources/pcaps/pcaps.ts">get</a>(accountId, pcapId) -> PCAPGetResponse</code>

## Ownerships

Types:

- <code><a href="./src/resources/pcaps/ownerships.ts">OwnershipCreateResponse</a></code>
- <code><a href="./src/resources/pcaps/ownerships.ts">OwnershipGetResponse</a></code>
- <code><a href="./src/resources/pcaps/ownerships.ts">OwnershipValidateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pcaps/ownership">client.pcaps.ownerships.<a href="./src/resources/pcaps/ownerships.ts">create</a>(accountId, { ...params }) -> OwnershipCreateResponse</code>
- <code title="delete /accounts/{account_id}/pcaps/ownership/{ownership_id}">client.pcaps.ownerships.<a href="./src/resources/pcaps/ownerships.ts">delete</a>(accountId, ownershipId) -> void</code>
- <code title="get /accounts/{account_id}/pcaps/ownership">client.pcaps.ownerships.<a href="./src/resources/pcaps/ownerships.ts">get</a>(accountId) -> OwnershipGetResponse | null</code>
- <code title="post /accounts/{account_id}/pcaps/ownership/validate">client.pcaps.ownerships.<a href="./src/resources/pcaps/ownerships.ts">validate</a>(accountId, { ...params }) -> OwnershipValidateResponse</code>

## Downloads

Methods:

- <code title="get /accounts/{account_id}/pcaps/{pcap_id}/download">client.pcaps.downloads.<a href="./src/resources/pcaps/downloads.ts">get</a>(accountId, pcapId) -> Response</code>

# Registrar

## Domains

Types:

- <code><a href="./src/resources/registrar/domains.ts">DomainUpdateResponse</a></code>
- <code><a href="./src/resources/registrar/domains.ts">DomainListResponse</a></code>
- <code><a href="./src/resources/registrar/domains.ts">DomainGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/registrar/domains/{domain_name}">client.registrar.domains.<a href="./src/resources/registrar/domains.ts">update</a>(accountId, domainName, { ...params }) -> DomainUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/registrar/domains">client.registrar.domains.<a href="./src/resources/registrar/domains.ts">list</a>(accountId) -> DomainListResponse | null</code>
- <code title="get /accounts/{account_id}/registrar/domains/{domain_name}">client.registrar.domains.<a href="./src/resources/registrar/domains.ts">get</a>(accountId, domainName) -> DomainGetResponse | null</code>

# RequestTracers

## Traces

Types:

- <code><a href="./src/resources/request-tracers/traces.ts">TraceCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/request-tracer/trace">client.requestTracers.traces.<a href="./src/resources/request-tracers/traces.ts">create</a>(accountIdentifier, { ...params }) -> TraceCreateResponse</code>

# Roles

Types:

- <code><a href="./src/resources/roles.ts">RoleListResponse</a></code>
- <code><a href="./src/resources/roles.ts">RoleGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/roles">client.roles.<a href="./src/resources/roles.ts">list</a>(accountId) -> RoleListResponse | null</code>
- <code title="get /accounts/{account_id}/roles/{role_id}">client.roles.<a href="./src/resources/roles.ts">get</a>(accountId, roleId) -> RoleGetResponse</code>

# Rules

## Lists

Types:

- <code><a href="./src/resources/rules/lists/lists.ts">ListCreateResponse</a></code>
- <code><a href="./src/resources/rules/lists/lists.ts">ListUpdateResponse</a></code>
- <code><a href="./src/resources/rules/lists/lists.ts">ListListResponse</a></code>
- <code><a href="./src/resources/rules/lists/lists.ts">ListDeleteResponse</a></code>
- <code><a href="./src/resources/rules/lists/lists.ts">ListGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/rules/lists">client.rules.lists.<a href="./src/resources/rules/lists/lists.ts">create</a>(accountId, { ...params }) -> ListCreateResponse | null</code>
- <code title="put /accounts/{account_id}/rules/lists/{list_id}">client.rules.lists.<a href="./src/resources/rules/lists/lists.ts">update</a>(accountId, listId, { ...params }) -> ListUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/rules/lists">client.rules.lists.<a href="./src/resources/rules/lists/lists.ts">list</a>(accountId) -> ListListResponse | null</code>
- <code title="delete /accounts/{account_id}/rules/lists/{list_id}">client.rules.lists.<a href="./src/resources/rules/lists/lists.ts">delete</a>(accountId, listId) -> ListDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/rules/lists/{list_id}">client.rules.lists.<a href="./src/resources/rules/lists/lists.ts">get</a>(accountId, listId) -> ListGetResponse | null</code>

### BulkOperations

Types:

- <code><a href="./src/resources/rules/lists/bulk-operations.ts">BulkOperationGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/rules/lists/bulk_operations/{operation_id}">client.rules.lists.bulkOperations.<a href="./src/resources/rules/lists/bulk-operations.ts">get</a>(accountIdentifier, operationId) -> BulkOperationGetResponse | null</code>

### Items

Types:

- <code><a href="./src/resources/rules/lists/items.ts">ItemCreateResponse</a></code>
- <code><a href="./src/resources/rules/lists/items.ts">ItemUpdateResponse</a></code>
- <code><a href="./src/resources/rules/lists/items.ts">ItemListResponse</a></code>
- <code><a href="./src/resources/rules/lists/items.ts">ItemDeleteResponse</a></code>
- <code><a href="./src/resources/rules/lists/items.ts">ItemGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/rules/lists/{list_id}/items">client.rules.lists.items.<a href="./src/resources/rules/lists/items.ts">create</a>(accountId, listId, [ ...body ]) -> ItemCreateResponse | null</code>
- <code title="put /accounts/{account_id}/rules/lists/{list_id}/items">client.rules.lists.items.<a href="./src/resources/rules/lists/items.ts">update</a>(accountId, listId, [ ...body ]) -> ItemUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/rules/lists/{list_id}/items">client.rules.lists.items.<a href="./src/resources/rules/lists/items.ts">list</a>(accountId, listId, { ...params }) -> ItemListResponse | null</code>
- <code title="delete /accounts/{account_id}/rules/lists/{list_id}/items">client.rules.lists.items.<a href="./src/resources/rules/lists/items.ts">delete</a>(accountId, listId, { ...params }) -> ItemDeleteResponse | null</code>
- <code title="get /accounts/{account_identifier}/rules/lists/{list_id}/items/{item_id}">client.rules.lists.items.<a href="./src/resources/rules/lists/items.ts">get</a>(accountIdentifier, listId, itemId) -> ItemGetResponse | null</code>

# Storage

## Analytics

Types:

- <code><a href="./src/resources/storage/analytics.ts">AnalyticsListResponse</a></code>
- <code><a href="./src/resources/storage/analytics.ts">AnalyticsStoredResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/storage/analytics">client.storage.analytics.<a href="./src/resources/storage/analytics.ts">list</a>(accountId, { ...params }) -> AnalyticsListResponse</code>
- <code title="get /accounts/{account_id}/storage/analytics/stored">client.storage.analytics.<a href="./src/resources/storage/analytics.ts">stored</a>(accountId, { ...params }) -> AnalyticsStoredResponse</code>

## KV

### Namespaces

Types:

- <code><a href="./src/resources/storage/kv/namespaces/namespaces.ts">NamespaceCreateResponse</a></code>
- <code><a href="./src/resources/storage/kv/namespaces/namespaces.ts">NamespaceUpdateResponse</a></code>
- <code><a href="./src/resources/storage/kv/namespaces/namespaces.ts">NamespaceListResponse</a></code>
- <code><a href="./src/resources/storage/kv/namespaces/namespaces.ts">NamespaceDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/storage/kv/namespaces">client.storage.kv.namespaces.<a href="./src/resources/storage/kv/namespaces/namespaces.ts">create</a>(accountId, { ...params }) -> NamespaceCreateResponse</code>
- <code title="put /accounts/{account_id}/storage/kv/namespaces/{namespace_id}">client.storage.kv.namespaces.<a href="./src/resources/storage/kv/namespaces/namespaces.ts">update</a>(accountId, namespaceId, { ...params }) -> NamespaceUpdateResponse</code>
- <code title="get /accounts/{account_id}/storage/kv/namespaces">client.storage.kv.namespaces.<a href="./src/resources/storage/kv/namespaces/namespaces.ts">list</a>(accountId, { ...params }) -> NamespaceListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/storage/kv/namespaces/{namespace_id}">client.storage.kv.namespaces.<a href="./src/resources/storage/kv/namespaces/namespaces.ts">delete</a>(accountId, namespaceId) -> NamespaceDeleteResponse</code>

#### Bulk

Types:

- <code><a href="./src/resources/storage/kv/namespaces/bulk.ts">BulkUpdateResponse</a></code>
- <code><a href="./src/resources/storage/kv/namespaces/bulk.ts">BulkDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk">client.storage.kv.namespaces.bulk.<a href="./src/resources/storage/kv/namespaces/bulk.ts">update</a>(accountId, namespaceId, [ ...body ]) -> BulkUpdateResponse</code>
- <code title="delete /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk">client.storage.kv.namespaces.bulk.<a href="./src/resources/storage/kv/namespaces/bulk.ts">delete</a>(accountId, namespaceId, [ ...body ]) -> BulkDeleteResponse</code>

#### Keys

Types:

- <code><a href="./src/resources/storage/kv/namespaces/keys.ts">KeyListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/keys">client.storage.kv.namespaces.keys.<a href="./src/resources/storage/kv/namespaces/keys.ts">list</a>(accountId, namespaceId, { ...params }) -> KeyListResponse</code>

#### Metadata

Types:

- <code><a href="./src/resources/storage/kv/namespaces/metadata.ts">MetadataGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/metadata/{key_name}">client.storage.kv.namespaces.metadata.<a href="./src/resources/storage/kv/namespaces/metadata.ts">get</a>(accountId, namespaceId, keyName) -> MetadataGetResponse</code>

#### Values

Types:

- <code><a href="./src/resources/storage/kv/namespaces/values.ts">ValueUpdateResponse</a></code>
- <code><a href="./src/resources/storage/kv/namespaces/values.ts">ValueDeleteResponse</a></code>
- <code><a href="./src/resources/storage/kv/namespaces/values.ts">ValueGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values/{key_name}">client.storage.kv.namespaces.values.<a href="./src/resources/storage/kv/namespaces/values.ts">update</a>(accountId, namespaceId, keyName, { ...params }) -> ValueUpdateResponse</code>
- <code title="delete /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values/{key_name}">client.storage.kv.namespaces.values.<a href="./src/resources/storage/kv/namespaces/values.ts">delete</a>(accountId, namespaceId, keyName) -> ValueDeleteResponse</code>
- <code title="get /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values/{key_name}">client.storage.kv.namespaces.values.<a href="./src/resources/storage/kv/namespaces/values.ts">get</a>(accountId, namespaceId, keyName) -> string</code>

# Stream

Types:

- <code><a href="./src/resources/stream/stream.ts">StreamListResponse</a></code>
- <code><a href="./src/resources/stream/stream.ts">StreamGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream">client.stream.<a href="./src/resources/stream/stream.ts">create</a>(accountId, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/stream">client.stream.<a href="./src/resources/stream/stream.ts">list</a>(accountId, { ...params }) -> StreamListResponse</code>
- <code title="delete /accounts/{account_id}/stream/{identifier}">client.stream.<a href="./src/resources/stream/stream.ts">delete</a>(accountId, identifier) -> void</code>
- <code title="get /accounts/{account_id}/stream/{identifier}">client.stream.<a href="./src/resources/stream/stream.ts">get</a>(accountId, identifier) -> StreamGetResponse</code>

## AudioTracks

Types:

- <code><a href="./src/resources/stream/audio-tracks.ts">AudioTrackCreateResponse</a></code>
- <code><a href="./src/resources/stream/audio-tracks.ts">AudioTrackListResponse</a></code>
- <code><a href="./src/resources/stream/audio-tracks.ts">AudioTrackDeleteResponse</a></code>
- <code><a href="./src/resources/stream/audio-tracks.ts">AudioTrackEditResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/{identifier}/audio/copy">client.stream.audioTracks.<a href="./src/resources/stream/audio-tracks.ts">create</a>(accountId, identifier, { ...params }) -> AudioTrackCreateResponse</code>
- <code title="get /accounts/{account_id}/stream/{identifier}/audio">client.stream.audioTracks.<a href="./src/resources/stream/audio-tracks.ts">list</a>(accountId, identifier) -> AudioTrackListResponse</code>
- <code title="delete /accounts/{account_id}/stream/{identifier}/audio/{audio_identifier}">client.stream.audioTracks.<a href="./src/resources/stream/audio-tracks.ts">delete</a>(accountId, identifier, audioIdentifier) -> AudioTrackDeleteResponse</code>
- <code title="patch /accounts/{account_id}/stream/{identifier}/audio/{audio_identifier}">client.stream.audioTracks.<a href="./src/resources/stream/audio-tracks.ts">edit</a>(accountId, identifier, audioIdentifier, { ...params }) -> AudioTrackEditResponse</code>

## Videos

Types:

- <code><a href="./src/resources/stream/videos.ts">VideoStorageUsageResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/stream/storage-usage">client.stream.videos.<a href="./src/resources/stream/videos.ts">storageUsage</a>(accountId, { ...params }) -> VideoStorageUsageResponse</code>

## Clips

Types:

- <code><a href="./src/resources/stream/clips.ts">ClipCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/clip">client.stream.clips.<a href="./src/resources/stream/clips.ts">create</a>(accountId, { ...params }) -> ClipCreateResponse</code>

## Copies

Types:

- <code><a href="./src/resources/stream/copies.ts">CopyCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/copy">client.stream.copies.<a href="./src/resources/stream/copies.ts">create</a>(accountId, { ...params }) -> CopyCreateResponse</code>

## DirectUploads

Types:

- <code><a href="./src/resources/stream/direct-uploads.ts">DirectUploadCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/direct_upload">client.stream.directUploads.<a href="./src/resources/stream/direct-uploads.ts">create</a>(accountId, { ...params }) -> DirectUploadCreateResponse</code>

## Keys

Types:

- <code><a href="./src/resources/stream/keys.ts">KeyCreateResponse</a></code>
- <code><a href="./src/resources/stream/keys.ts">KeyListResponse</a></code>
- <code><a href="./src/resources/stream/keys.ts">KeyDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/keys">client.stream.keys.<a href="./src/resources/stream/keys.ts">create</a>(accountId) -> KeyCreateResponse</code>
- <code title="get /accounts/{account_id}/stream/keys">client.stream.keys.<a href="./src/resources/stream/keys.ts">list</a>(accountId) -> KeyListResponse</code>
- <code title="delete /accounts/{account_id}/stream/keys/{identifier}">client.stream.keys.<a href="./src/resources/stream/keys.ts">delete</a>(accountId, identifier) -> KeyDeleteResponse</code>

## LiveInputs

Types:

- <code><a href="./src/resources/stream/live-inputs/live-inputs.ts">LiveInputCreateResponse</a></code>
- <code><a href="./src/resources/stream/live-inputs/live-inputs.ts">LiveInputUpdateResponse</a></code>
- <code><a href="./src/resources/stream/live-inputs/live-inputs.ts">LiveInputListResponse</a></code>
- <code><a href="./src/resources/stream/live-inputs/live-inputs.ts">LiveInputGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/live_inputs">client.stream.liveInputs.<a href="./src/resources/stream/live-inputs/live-inputs.ts">create</a>(accountId, { ...params }) -> LiveInputCreateResponse</code>
- <code title="put /accounts/{account_id}/stream/live_inputs/{live_input_identifier}">client.stream.liveInputs.<a href="./src/resources/stream/live-inputs/live-inputs.ts">update</a>(accountId, liveInputIdentifier, { ...params }) -> LiveInputUpdateResponse</code>
- <code title="get /accounts/{account_id}/stream/live_inputs">client.stream.liveInputs.<a href="./src/resources/stream/live-inputs/live-inputs.ts">list</a>(accountId, { ...params }) -> LiveInputListResponse</code>
- <code title="delete /accounts/{account_id}/stream/live_inputs/{live_input_identifier}">client.stream.liveInputs.<a href="./src/resources/stream/live-inputs/live-inputs.ts">delete</a>(accountId, liveInputIdentifier) -> void</code>
- <code title="get /accounts/{account_id}/stream/live_inputs/{live_input_identifier}">client.stream.liveInputs.<a href="./src/resources/stream/live-inputs/live-inputs.ts">get</a>(accountId, liveInputIdentifier) -> LiveInputGetResponse</code>

### Outputs

Types:

- <code><a href="./src/resources/stream/live-inputs/outputs.ts">OutputCreateResponse</a></code>
- <code><a href="./src/resources/stream/live-inputs/outputs.ts">OutputUpdateResponse</a></code>
- <code><a href="./src/resources/stream/live-inputs/outputs.ts">OutputListResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs">client.stream.liveInputs.outputs.<a href="./src/resources/stream/live-inputs/outputs.ts">create</a>(accountId, liveInputIdentifier, { ...params }) -> OutputCreateResponse</code>
- <code title="put /accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs/{output_identifier}">client.stream.liveInputs.outputs.<a href="./src/resources/stream/live-inputs/outputs.ts">update</a>(accountId, liveInputIdentifier, outputIdentifier, { ...params }) -> OutputUpdateResponse</code>
- <code title="get /accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs">client.stream.liveInputs.outputs.<a href="./src/resources/stream/live-inputs/outputs.ts">list</a>(accountId, liveInputIdentifier) -> OutputListResponse</code>
- <code title="delete /accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs/{output_identifier}">client.stream.liveInputs.outputs.<a href="./src/resources/stream/live-inputs/outputs.ts">delete</a>(accountId, liveInputIdentifier, outputIdentifier) -> void</code>

## Watermarks

Types:

- <code><a href="./src/resources/stream/watermarks.ts">WatermarkCreateResponse</a></code>
- <code><a href="./src/resources/stream/watermarks.ts">WatermarkListResponse</a></code>
- <code><a href="./src/resources/stream/watermarks.ts">WatermarkDeleteResponse</a></code>
- <code><a href="./src/resources/stream/watermarks.ts">WatermarkGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/watermarks">client.stream.watermarks.<a href="./src/resources/stream/watermarks.ts">create</a>(accountId, { ...params }) -> WatermarkCreateResponse</code>
- <code title="get /accounts/{account_id}/stream/watermarks">client.stream.watermarks.<a href="./src/resources/stream/watermarks.ts">list</a>(accountId) -> WatermarkListResponse</code>
- <code title="delete /accounts/{account_id}/stream/watermarks/{identifier}">client.stream.watermarks.<a href="./src/resources/stream/watermarks.ts">delete</a>(accountId, identifier) -> WatermarkDeleteResponse</code>
- <code title="get /accounts/{account_id}/stream/watermarks/{identifier}">client.stream.watermarks.<a href="./src/resources/stream/watermarks.ts">get</a>(accountId, identifier) -> WatermarkGetResponse</code>

## Webhooks

Types:

- <code><a href="./src/resources/stream/webhooks.ts">WebhookUpdateResponse</a></code>
- <code><a href="./src/resources/stream/webhooks.ts">WebhookDeleteResponse</a></code>
- <code><a href="./src/resources/stream/webhooks.ts">WebhookGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/stream/webhook">client.stream.webhooks.<a href="./src/resources/stream/webhooks.ts">update</a>(accountId, { ...params }) -> WebhookUpdateResponse</code>
- <code title="delete /accounts/{account_id}/stream/webhook">client.stream.webhooks.<a href="./src/resources/stream/webhooks.ts">delete</a>(accountId) -> WebhookDeleteResponse</code>
- <code title="get /accounts/{account_id}/stream/webhook">client.stream.webhooks.<a href="./src/resources/stream/webhooks.ts">get</a>(accountId) -> WebhookGetResponse</code>

## Captions

Types:

- <code><a href="./src/resources/stream/captions.ts">CaptionUpdateResponse</a></code>
- <code><a href="./src/resources/stream/captions.ts">CaptionListResponse</a></code>
- <code><a href="./src/resources/stream/captions.ts">CaptionDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/stream/{identifier}/captions/{language}">client.stream.captions.<a href="./src/resources/stream/captions.ts">update</a>(accountId, identifier, language, { ...params }) -> CaptionUpdateResponse</code>
- <code title="get /accounts/{account_id}/stream/{identifier}/captions">client.stream.captions.<a href="./src/resources/stream/captions.ts">list</a>(accountId, identifier) -> CaptionListResponse</code>
- <code title="delete /accounts/{account_id}/stream/{identifier}/captions/{language}">client.stream.captions.<a href="./src/resources/stream/captions.ts">delete</a>(accountId, identifier, language) -> CaptionDeleteResponse</code>

## Downloads

Types:

- <code><a href="./src/resources/stream/downloads.ts">DownloadCreateResponse</a></code>
- <code><a href="./src/resources/stream/downloads.ts">DownloadListResponse</a></code>
- <code><a href="./src/resources/stream/downloads.ts">DownloadDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/{identifier}/downloads">client.stream.downloads.<a href="./src/resources/stream/downloads.ts">create</a>(accountId, identifier) -> DownloadCreateResponse</code>
- <code title="get /accounts/{account_id}/stream/{identifier}/downloads">client.stream.downloads.<a href="./src/resources/stream/downloads.ts">list</a>(accountId, identifier) -> DownloadListResponse</code>
- <code title="delete /accounts/{account_id}/stream/{identifier}/downloads">client.stream.downloads.<a href="./src/resources/stream/downloads.ts">delete</a>(accountId, identifier) -> DownloadDeleteResponse</code>

## Embeds

Types:

- <code><a href="./src/resources/stream/embeds.ts">EmbedListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/stream/{identifier}/embed">client.stream.embeds.<a href="./src/resources/stream/embeds.ts">list</a>(accountId, identifier) -> unknown</code>

## Tokens

Types:

- <code><a href="./src/resources/stream/tokens.ts">TokenCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/{identifier}/token">client.stream.tokens.<a href="./src/resources/stream/tokens.ts">create</a>(accountId, identifier, { ...params }) -> TokenCreateResponse</code>

# Teamnets

## Routes

Types:

- <code><a href="./src/resources/teamnets/routes/routes.ts">RouteListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/teamnet/routes">client.teamnets.routes.<a href="./src/resources/teamnets/routes/routes.ts">list</a>(accountId, { ...params }) -> RouteListResponsesV4PagePaginationArray</code>

### IPs

Types:

- <code><a href="./src/resources/teamnets/routes/ips.ts">IPGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/teamnet/routes/ip/{ip}">client.teamnets.routes.ips.<a href="./src/resources/teamnets/routes/ips.ts">get</a>(accountId, ip, { ...params }) -> IPGetResponse</code>

### Networks

Types:

- <code><a href="./src/resources/teamnets/routes/networks.ts">NetworkCreateResponse</a></code>
- <code><a href="./src/resources/teamnets/routes/networks.ts">NetworkDeleteResponse</a></code>
- <code><a href="./src/resources/teamnets/routes/networks.ts">NetworkEditResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}">client.teamnets.routes.networks.<a href="./src/resources/teamnets/routes/networks.ts">create</a>(accountId, ipNetworkEncoded, { ...params }) -> NetworkCreateResponse</code>
- <code title="delete /accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}">client.teamnets.routes.networks.<a href="./src/resources/teamnets/routes/networks.ts">delete</a>(accountId, ipNetworkEncoded, { ...params }) -> NetworkDeleteResponse</code>
- <code title="patch /accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}">client.teamnets.routes.networks.<a href="./src/resources/teamnets/routes/networks.ts">edit</a>(accountId, ipNetworkEncoded) -> NetworkEditResponse</code>

## VirtualNetworks

Types:

- <code><a href="./src/resources/teamnets/virtual-networks.ts">VirtualNetworkCreateResponse</a></code>
- <code><a href="./src/resources/teamnets/virtual-networks.ts">VirtualNetworkListResponse</a></code>
- <code><a href="./src/resources/teamnets/virtual-networks.ts">VirtualNetworkDeleteResponse</a></code>
- <code><a href="./src/resources/teamnets/virtual-networks.ts">VirtualNetworkEditResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/teamnet/virtual_networks">client.teamnets.virtualNetworks.<a href="./src/resources/teamnets/virtual-networks.ts">create</a>(accountId, { ...params }) -> VirtualNetworkCreateResponse</code>
- <code title="get /accounts/{account_id}/teamnet/virtual_networks">client.teamnets.virtualNetworks.<a href="./src/resources/teamnets/virtual-networks.ts">list</a>(accountId, { ...params }) -> VirtualNetworkListResponse | null</code>
- <code title="delete /accounts/{account_id}/teamnet/virtual_networks/{virtual_network_id}">client.teamnets.virtualNetworks.<a href="./src/resources/teamnets/virtual-networks.ts">delete</a>(accountId, virtualNetworkId) -> VirtualNetworkDeleteResponse</code>
- <code title="patch /accounts/{account_id}/teamnet/virtual_networks/{virtual_network_id}">client.teamnets.virtualNetworks.<a href="./src/resources/teamnets/virtual-networks.ts">edit</a>(accountId, virtualNetworkId, { ...params }) -> VirtualNetworkEditResponse</code>

# Gateways

Types:

- <code><a href="./src/resources/gateways/gateways.ts">GatewayCreateResponse</a></code>
- <code><a href="./src/resources/gateways/gateways.ts">GatewayListResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/gateway">client.gateways.<a href="./src/resources/gateways/gateways.ts">create</a>(accountId) -> GatewayCreateResponse</code>
- <code title="get /accounts/{account_id}/gateway">client.gateways.<a href="./src/resources/gateways/gateways.ts">list</a>(accountId) -> GatewayListResponse</code>

## AuditSSHSettings

Types:

- <code><a href="./src/resources/gateways/audit-ssh-settings.ts">AuditSSHSettingUpdateResponse</a></code>
- <code><a href="./src/resources/gateways/audit-ssh-settings.ts">AuditSSHSettingGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/gateway/audit_ssh_settings">client.gateways.auditSSHSettings.<a href="./src/resources/gateways/audit-ssh-settings.ts">update</a>(accountId, { ...params }) -> AuditSSHSettingUpdateResponse</code>
- <code title="get /accounts/{account_id}/gateway/audit_ssh_settings">client.gateways.auditSSHSettings.<a href="./src/resources/gateways/audit-ssh-settings.ts">get</a>(accountId) -> AuditSSHSettingGetResponse</code>

## Categories

Types:

- <code><a href="./src/resources/gateways/categories.ts">CategoryListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/gateway/categories">client.gateways.categories.<a href="./src/resources/gateways/categories.ts">list</a>(accountId) -> CategoryListResponse | null</code>

## AppTypes

Types:

- <code><a href="./src/resources/gateways/app-types.ts">AppTypeListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/gateway/app_types">client.gateways.appTypes.<a href="./src/resources/gateways/app-types.ts">list</a>(accountId) -> AppTypeListResponse | null</code>

## Configurations

Types:

- <code><a href="./src/resources/gateways/configurations.ts">ConfigurationUpdateResponse</a></code>
- <code><a href="./src/resources/gateways/configurations.ts">ConfigurationEditResponse</a></code>
- <code><a href="./src/resources/gateways/configurations.ts">ConfigurationGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/gateway/configuration">client.gateways.configurations.<a href="./src/resources/gateways/configurations.ts">update</a>(accountId, { ...params }) -> ConfigurationUpdateResponse</code>
- <code title="patch /accounts/{account_id}/gateway/configuration">client.gateways.configurations.<a href="./src/resources/gateways/configurations.ts">edit</a>(accountId, { ...params }) -> ConfigurationEditResponse</code>
- <code title="get /accounts/{account_id}/gateway/configuration">client.gateways.configurations.<a href="./src/resources/gateways/configurations.ts">get</a>(accountId) -> ConfigurationGetResponse</code>

## Lists

Types:

- <code><a href="./src/resources/gateways/lists/lists.ts">ListCreateResponse</a></code>
- <code><a href="./src/resources/gateways/lists/lists.ts">ListUpdateResponse</a></code>
- <code><a href="./src/resources/gateways/lists/lists.ts">ListListResponse</a></code>
- <code><a href="./src/resources/gateways/lists/lists.ts">ListDeleteResponse</a></code>
- <code><a href="./src/resources/gateways/lists/lists.ts">ListEditResponse</a></code>
- <code><a href="./src/resources/gateways/lists/lists.ts">ListGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/gateway/lists">client.gateways.lists.<a href="./src/resources/gateways/lists/lists.ts">create</a>(accountId, { ...params }) -> ListCreateResponse</code>
- <code title="put /accounts/{account_id}/gateway/lists/{list_id}">client.gateways.lists.<a href="./src/resources/gateways/lists/lists.ts">update</a>(accountId, listId, { ...params }) -> ListUpdateResponse</code>
- <code title="get /accounts/{account_id}/gateway/lists">client.gateways.lists.<a href="./src/resources/gateways/lists/lists.ts">list</a>(accountId) -> ListListResponse | null</code>
- <code title="delete /accounts/{account_id}/gateway/lists/{list_id}">client.gateways.lists.<a href="./src/resources/gateways/lists/lists.ts">delete</a>(accountId, listId) -> ListDeleteResponse</code>
- <code title="patch /accounts/{account_id}/gateway/lists/{list_id}">client.gateways.lists.<a href="./src/resources/gateways/lists/lists.ts">edit</a>(accountId, listId, { ...params }) -> ListEditResponse</code>
- <code title="get /accounts/{account_id}/gateway/lists/{list_id}">client.gateways.lists.<a href="./src/resources/gateways/lists/lists.ts">get</a>(accountId, listId) -> ListGetResponse</code>

### Items

Types:

- <code><a href="./src/resources/gateways/lists/items.ts">ItemListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/gateway/lists/{list_id}/items">client.gateways.lists.items.<a href="./src/resources/gateways/lists/items.ts">list</a>(accountId, listId) -> ItemListResponse | null</code>

## Locations

Types:

- <code><a href="./src/resources/gateways/locations.ts">LocationCreateResponse</a></code>
- <code><a href="./src/resources/gateways/locations.ts">LocationUpdateResponse</a></code>
- <code><a href="./src/resources/gateways/locations.ts">LocationListResponse</a></code>
- <code><a href="./src/resources/gateways/locations.ts">LocationDeleteResponse</a></code>
- <code><a href="./src/resources/gateways/locations.ts">LocationGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/gateway/locations">client.gateways.locations.<a href="./src/resources/gateways/locations.ts">create</a>(accountId, { ...params }) -> LocationCreateResponse</code>
- <code title="put /accounts/{account_id}/gateway/locations/{location_id}">client.gateways.locations.<a href="./src/resources/gateways/locations.ts">update</a>(accountId, locationId, { ...params }) -> LocationUpdateResponse</code>
- <code title="get /accounts/{account_id}/gateway/locations">client.gateways.locations.<a href="./src/resources/gateways/locations.ts">list</a>(accountId) -> LocationListResponse | null</code>
- <code title="delete /accounts/{account_id}/gateway/locations/{location_id}">client.gateways.locations.<a href="./src/resources/gateways/locations.ts">delete</a>(accountId, locationId) -> LocationDeleteResponse</code>
- <code title="get /accounts/{account_id}/gateway/locations/{location_id}">client.gateways.locations.<a href="./src/resources/gateways/locations.ts">get</a>(accountId, locationId) -> LocationGetResponse</code>

## Loggings

Types:

- <code><a href="./src/resources/gateways/loggings.ts">LoggingUpdateResponse</a></code>
- <code><a href="./src/resources/gateways/loggings.ts">LoggingGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/gateway/logging">client.gateways.loggings.<a href="./src/resources/gateways/loggings.ts">update</a>(accountId, { ...params }) -> LoggingUpdateResponse</code>
- <code title="get /accounts/{account_id}/gateway/logging">client.gateways.loggings.<a href="./src/resources/gateways/loggings.ts">get</a>(accountId) -> LoggingGetResponse</code>

## ProxyEndpoints

Types:

- <code><a href="./src/resources/gateways/proxy-endpoints.ts">ProxyEndpointCreateResponse</a></code>
- <code><a href="./src/resources/gateways/proxy-endpoints.ts">ProxyEndpointListResponse</a></code>
- <code><a href="./src/resources/gateways/proxy-endpoints.ts">ProxyEndpointDeleteResponse</a></code>
- <code><a href="./src/resources/gateways/proxy-endpoints.ts">ProxyEndpointEditResponse</a></code>
- <code><a href="./src/resources/gateways/proxy-endpoints.ts">ProxyEndpointGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/gateway/proxy_endpoints">client.gateways.proxyEndpoints.<a href="./src/resources/gateways/proxy-endpoints.ts">create</a>(accountId, { ...params }) -> ProxyEndpointCreateResponse</code>
- <code title="get /accounts/{account_id}/gateway/proxy_endpoints">client.gateways.proxyEndpoints.<a href="./src/resources/gateways/proxy-endpoints.ts">list</a>(accountId) -> ProxyEndpointListResponse | null</code>
- <code title="delete /accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}">client.gateways.proxyEndpoints.<a href="./src/resources/gateways/proxy-endpoints.ts">delete</a>(accountId, proxyEndpointId) -> ProxyEndpointDeleteResponse</code>
- <code title="patch /accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}">client.gateways.proxyEndpoints.<a href="./src/resources/gateways/proxy-endpoints.ts">edit</a>(accountId, proxyEndpointId, { ...params }) -> ProxyEndpointEditResponse</code>
- <code title="get /accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}">client.gateways.proxyEndpoints.<a href="./src/resources/gateways/proxy-endpoints.ts">get</a>(accountId, proxyEndpointId) -> ProxyEndpointGetResponse</code>

## Rules

Types:

- <code><a href="./src/resources/gateways/rules.ts">RuleCreateResponse</a></code>
- <code><a href="./src/resources/gateways/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/gateways/rules.ts">RuleListResponse</a></code>
- <code><a href="./src/resources/gateways/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/gateways/rules.ts">RuleGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/gateway/rules">client.gateways.rules.<a href="./src/resources/gateways/rules.ts">create</a>(accountId, { ...params }) -> RuleCreateResponse</code>
- <code title="put /accounts/{account_id}/gateway/rules/{rule_id}">client.gateways.rules.<a href="./src/resources/gateways/rules.ts">update</a>(accountId, ruleId, { ...params }) -> RuleUpdateResponse</code>
- <code title="get /accounts/{account_id}/gateway/rules">client.gateways.rules.<a href="./src/resources/gateways/rules.ts">list</a>(accountId) -> RuleListResponse | null</code>
- <code title="delete /accounts/{account_id}/gateway/rules/{rule_id}">client.gateways.rules.<a href="./src/resources/gateways/rules.ts">delete</a>(accountId, ruleId) -> RuleDeleteResponse</code>
- <code title="get /accounts/{account_id}/gateway/rules/{rule_id}">client.gateways.rules.<a href="./src/resources/gateways/rules.ts">get</a>(accountId, ruleId) -> RuleGetResponse</code>

# Alerting

## V3

Types:

- <code><a href="./src/resources/alerting/v3/v3.ts">V3ListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/alerting/v3/available_alerts">client.alerting.v3.<a href="./src/resources/alerting/v3/v3.ts">list</a>(accountId) -> V3ListResponse | null</code>

### Destinations

#### Eligible

Types:

- <code><a href="./src/resources/alerting/v3/destinations/eligible.ts">EligibleGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/alerting/v3/destinations/eligible">client.alerting.v3.destinations.eligible.<a href="./src/resources/alerting/v3/destinations/eligible.ts">get</a>(accountId) -> EligibleGetResponse | null</code>

#### Pagerduty

Types:

- <code><a href="./src/resources/alerting/v3/destinations/pagerduty.ts">PagerdutyCreateResponse</a></code>
- <code><a href="./src/resources/alerting/v3/destinations/pagerduty.ts">PagerdutyDeleteResponse</a></code>
- <code><a href="./src/resources/alerting/v3/destinations/pagerduty.ts">PagerdutyGetResponse</a></code>
- <code><a href="./src/resources/alerting/v3/destinations/pagerduty.ts">PagerdutyLinkResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/alerting/v3/destinations/pagerduty/connect">client.alerting.v3.destinations.pagerduty.<a href="./src/resources/alerting/v3/destinations/pagerduty.ts">create</a>(accountId) -> PagerdutyCreateResponse</code>
- <code title="delete /accounts/{account_id}/alerting/v3/destinations/pagerduty">client.alerting.v3.destinations.pagerduty.<a href="./src/resources/alerting/v3/destinations/pagerduty.ts">delete</a>(accountId) -> PagerdutyDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/alerting/v3/destinations/pagerduty">client.alerting.v3.destinations.pagerduty.<a href="./src/resources/alerting/v3/destinations/pagerduty.ts">get</a>(accountId) -> PagerdutyGetResponse | null</code>
- <code title="get /accounts/{account_id}/alerting/v3/destinations/pagerduty/connect/{token_id}">client.alerting.v3.destinations.pagerduty.<a href="./src/resources/alerting/v3/destinations/pagerduty.ts">link</a>(accountId, tokenId) -> PagerdutyLinkResponse</code>

#### Webhooks

Types:

- <code><a href="./src/resources/alerting/v3/destinations/webhooks.ts">WebhookCreateResponse</a></code>
- <code><a href="./src/resources/alerting/v3/destinations/webhooks.ts">WebhookUpdateResponse</a></code>
- <code><a href="./src/resources/alerting/v3/destinations/webhooks.ts">WebhookListResponse</a></code>
- <code><a href="./src/resources/alerting/v3/destinations/webhooks.ts">WebhookDeleteResponse</a></code>
- <code><a href="./src/resources/alerting/v3/destinations/webhooks.ts">WebhookGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/alerting/v3/destinations/webhooks">client.alerting.v3.destinations.webhooks.<a href="./src/resources/alerting/v3/destinations/webhooks.ts">create</a>(accountId, { ...params }) -> WebhookCreateResponse</code>
- <code title="put /accounts/{account_id}/alerting/v3/destinations/webhooks/{webhook_id}">client.alerting.v3.destinations.webhooks.<a href="./src/resources/alerting/v3/destinations/webhooks.ts">update</a>(accountId, webhookId, { ...params }) -> WebhookUpdateResponse</code>
- <code title="get /accounts/{account_id}/alerting/v3/destinations/webhooks">client.alerting.v3.destinations.webhooks.<a href="./src/resources/alerting/v3/destinations/webhooks.ts">list</a>(accountId) -> WebhookListResponse | null</code>
- <code title="delete /accounts/{account_id}/alerting/v3/destinations/webhooks/{webhook_id}">client.alerting.v3.destinations.webhooks.<a href="./src/resources/alerting/v3/destinations/webhooks.ts">delete</a>(accountId, webhookId) -> WebhookDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/alerting/v3/destinations/webhooks/{webhook_id}">client.alerting.v3.destinations.webhooks.<a href="./src/resources/alerting/v3/destinations/webhooks.ts">get</a>(accountId, webhookId) -> WebhookGetResponse</code>

### Histories

Types:

- <code><a href="./src/resources/alerting/v3/histories.ts">HistoryListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/alerting/v3/history">client.alerting.v3.histories.<a href="./src/resources/alerting/v3/histories.ts">list</a>(accountId, { ...params }) -> HistoryListResponsesV4PagePaginationArray</code>

### Policies

Types:

- <code><a href="./src/resources/alerting/v3/policies.ts">PolicyCreateResponse</a></code>
- <code><a href="./src/resources/alerting/v3/policies.ts">PolicyUpdateResponse</a></code>
- <code><a href="./src/resources/alerting/v3/policies.ts">PolicyListResponse</a></code>
- <code><a href="./src/resources/alerting/v3/policies.ts">PolicyDeleteResponse</a></code>
- <code><a href="./src/resources/alerting/v3/policies.ts">PolicyGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/alerting/v3/policies">client.alerting.v3.policies.<a href="./src/resources/alerting/v3/policies.ts">create</a>(accountId, { ...params }) -> PolicyCreateResponse</code>
- <code title="put /accounts/{account_id}/alerting/v3/policies/{policy_id}">client.alerting.v3.policies.<a href="./src/resources/alerting/v3/policies.ts">update</a>(accountId, policyId, { ...params }) -> PolicyUpdateResponse</code>
- <code title="get /accounts/{account_id}/alerting/v3/policies">client.alerting.v3.policies.<a href="./src/resources/alerting/v3/policies.ts">list</a>(accountId) -> PolicyListResponse | null</code>
- <code title="delete /accounts/{account_id}/alerting/v3/policies/{policy_id}">client.alerting.v3.policies.<a href="./src/resources/alerting/v3/policies.ts">delete</a>(accountId, policyId) -> PolicyDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/alerting/v3/policies/{policy_id}">client.alerting.v3.policies.<a href="./src/resources/alerting/v3/policies.ts">get</a>(accountId, policyId) -> PolicyGetResponse</code>

# Devices

Types:

- <code><a href="./src/resources/devices/devices.ts">DeviceDevicesListDevicesResponse</a></code>
- <code><a href="./src/resources/devices/devices.ts">DeviceGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/devices">client.devices.<a href="./src/resources/devices/devices.ts">devicesListDevices</a>(accountId) -> DeviceDevicesListDevicesResponse | null</code>
- <code title="get /accounts/{account_id}/devices/{device_id}">client.devices.<a href="./src/resources/devices/devices.ts">get</a>(accountId, deviceId) -> DeviceGetResponse | null</code>

## DEXTests

Types:

- <code><a href="./src/resources/devices/dex-tests.ts">DEXTestCreateResponse</a></code>
- <code><a href="./src/resources/devices/dex-tests.ts">DEXTestUpdateResponse</a></code>
- <code><a href="./src/resources/devices/dex-tests.ts">DEXTestListResponse</a></code>
- <code><a href="./src/resources/devices/dex-tests.ts">DEXTestDeleteResponse</a></code>
- <code><a href="./src/resources/devices/dex-tests.ts">DEXTestGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/dex_tests">client.devices.dexTests.<a href="./src/resources/devices/dex-tests.ts">create</a>(accountId, { ...params }) -> DEXTestCreateResponse | null</code>
- <code title="put /accounts/{account_id}/devices/dex_tests/{dex_test_id}">client.devices.dexTests.<a href="./src/resources/devices/dex-tests.ts">update</a>(accountId, dexTestId, { ...params }) -> DEXTestUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/devices/dex_tests">client.devices.dexTests.<a href="./src/resources/devices/dex-tests.ts">list</a>(accountId) -> DEXTestListResponse | null</code>
- <code title="delete /accounts/{account_id}/devices/dex_tests/{dex_test_id}">client.devices.dexTests.<a href="./src/resources/devices/dex-tests.ts">delete</a>(accountId, dexTestId) -> DEXTestDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/devices/dex_tests/{dex_test_id}">client.devices.dexTests.<a href="./src/resources/devices/dex-tests.ts">get</a>(accountId, dexTestId) -> DEXTestGetResponse | null</code>

## Networks

Types:

- <code><a href="./src/resources/devices/networks.ts">NetworkCreateResponse</a></code>
- <code><a href="./src/resources/devices/networks.ts">NetworkUpdateResponse</a></code>
- <code><a href="./src/resources/devices/networks.ts">NetworkListResponse</a></code>
- <code><a href="./src/resources/devices/networks.ts">NetworkDeleteResponse</a></code>
- <code><a href="./src/resources/devices/networks.ts">NetworkGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/networks">client.devices.networks.<a href="./src/resources/devices/networks.ts">create</a>(accountId, { ...params }) -> NetworkCreateResponse | null</code>
- <code title="put /accounts/{account_id}/devices/networks/{network_id}">client.devices.networks.<a href="./src/resources/devices/networks.ts">update</a>(accountId, networkId, { ...params }) -> NetworkUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/devices/networks">client.devices.networks.<a href="./src/resources/devices/networks.ts">list</a>(accountId) -> NetworkListResponse | null</code>
- <code title="delete /accounts/{account_id}/devices/networks/{network_id}">client.devices.networks.<a href="./src/resources/devices/networks.ts">delete</a>(accountId, networkId) -> NetworkDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/devices/networks/{network_id}">client.devices.networks.<a href="./src/resources/devices/networks.ts">get</a>(accountId, networkId) -> NetworkGetResponse | null</code>

## Policies

Types:

- <code><a href="./src/resources/devices/policies/policies.ts">PolicyCreateResponse</a></code>
- <code><a href="./src/resources/devices/policies/policies.ts">PolicyListResponse</a></code>
- <code><a href="./src/resources/devices/policies/policies.ts">PolicyDeleteResponse</a></code>
- <code><a href="./src/resources/devices/policies/policies.ts">PolicyEditResponse</a></code>
- <code><a href="./src/resources/devices/policies/policies.ts">PolicyGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/policy">client.devices.policies.<a href="./src/resources/devices/policies/policies.ts">create</a>(accountId, { ...params }) -> PolicyCreateResponse | null</code>
- <code title="get /accounts/{account_id}/devices/policies">client.devices.policies.<a href="./src/resources/devices/policies/policies.ts">list</a>(accountId) -> PolicyListResponse | null</code>
- <code title="delete /accounts/{account_id}/devices/policy/{policy_id}">client.devices.policies.<a href="./src/resources/devices/policies/policies.ts">delete</a>(accountId, policyId) -> PolicyDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/devices/policy/{policy_id}">client.devices.policies.<a href="./src/resources/devices/policies/policies.ts">edit</a>(accountId, policyId, { ...params }) -> PolicyEditResponse | null</code>
- <code title="get /accounts/{account_id}/devices/policy/{policy_id}">client.devices.policies.<a href="./src/resources/devices/policies/policies.ts">get</a>(accountId, policyId) -> PolicyGetResponse | null</code>

### DefaultPolicy

Types:

- <code><a href="./src/resources/devices/policies/default-policy.ts">DefaultPolicyGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/devices/policy">client.devices.policies.defaultPolicy.<a href="./src/resources/devices/policies/default-policy.ts">get</a>(accountId) -> DefaultPolicyGetResponse | null</code>

### Excludes

Types:

- <code><a href="./src/resources/devices/policies/excludes.ts">ExcludeUpdateResponse</a></code>
- <code><a href="./src/resources/devices/policies/excludes.ts">ExcludeListResponse</a></code>
- <code><a href="./src/resources/devices/policies/excludes.ts">ExcludeGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/devices/policy/exclude">client.devices.policies.excludes.<a href="./src/resources/devices/policies/excludes.ts">update</a>(accountId, [ ...body ]) -> ExcludeUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/devices/policy/exclude">client.devices.policies.excludes.<a href="./src/resources/devices/policies/excludes.ts">list</a>(accountId) -> ExcludeListResponse | null</code>
- <code title="get /accounts/{account_id}/devices/policy/{policy_id}/exclude">client.devices.policies.excludes.<a href="./src/resources/devices/policies/excludes.ts">get</a>(accountId, policyId) -> ExcludeGetResponse | null</code>

### FallbackDomains

Types:

- <code><a href="./src/resources/devices/policies/fallback-domains.ts">FallbackDomainUpdateResponse</a></code>
- <code><a href="./src/resources/devices/policies/fallback-domains.ts">FallbackDomainListResponse</a></code>
- <code><a href="./src/resources/devices/policies/fallback-domains.ts">FallbackDomainGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/devices/policy/{policy_id}/fallback_domains">client.devices.policies.fallbackDomains.<a href="./src/resources/devices/policies/fallback-domains.ts">update</a>(accountId, policyId, [ ...body ]) -> FallbackDomainUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/devices/policy/fallback_domains">client.devices.policies.fallbackDomains.<a href="./src/resources/devices/policies/fallback-domains.ts">list</a>(accountId) -> FallbackDomainListResponse | null</code>
- <code title="get /accounts/{account_id}/devices/policy/{policy_id}/fallback_domains">client.devices.policies.fallbackDomains.<a href="./src/resources/devices/policies/fallback-domains.ts">get</a>(accountId, policyId) -> FallbackDomainGetResponse | null</code>

### Includes

Types:

- <code><a href="./src/resources/devices/policies/includes.ts">IncludeUpdateResponse</a></code>
- <code><a href="./src/resources/devices/policies/includes.ts">IncludeListResponse</a></code>
- <code><a href="./src/resources/devices/policies/includes.ts">IncludeGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/devices/policy/include">client.devices.policies.includes.<a href="./src/resources/devices/policies/includes.ts">update</a>(accountId, [ ...body ]) -> IncludeUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/devices/policy/include">client.devices.policies.includes.<a href="./src/resources/devices/policies/includes.ts">list</a>(accountId) -> IncludeListResponse | null</code>
- <code title="get /accounts/{account_id}/devices/policy/{policy_id}/include">client.devices.policies.includes.<a href="./src/resources/devices/policies/includes.ts">get</a>(accountId, policyId) -> IncludeGetResponse | null</code>

## Postures

Types:

- <code><a href="./src/resources/devices/postures/postures.ts">PostureCreateResponse</a></code>
- <code><a href="./src/resources/devices/postures/postures.ts">PostureUpdateResponse</a></code>
- <code><a href="./src/resources/devices/postures/postures.ts">PostureListResponse</a></code>
- <code><a href="./src/resources/devices/postures/postures.ts">PostureDeleteResponse</a></code>
- <code><a href="./src/resources/devices/postures/postures.ts">PostureGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/posture">client.devices.postures.<a href="./src/resources/devices/postures/postures.ts">create</a>(accountId, { ...params }) -> PostureCreateResponse | null</code>
- <code title="put /accounts/{account_id}/devices/posture/{rule_id}">client.devices.postures.<a href="./src/resources/devices/postures/postures.ts">update</a>(accountId, ruleId, { ...params }) -> PostureUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/devices/posture">client.devices.postures.<a href="./src/resources/devices/postures/postures.ts">list</a>(accountId) -> PostureListResponse | null</code>
- <code title="delete /accounts/{account_id}/devices/posture/{rule_id}">client.devices.postures.<a href="./src/resources/devices/postures/postures.ts">delete</a>(accountId, ruleId) -> PostureDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/devices/posture/{rule_id}">client.devices.postures.<a href="./src/resources/devices/postures/postures.ts">get</a>(accountId, ruleId) -> PostureGetResponse | null</code>

### Integrations

Types:

- <code><a href="./src/resources/devices/postures/integrations.ts">IntegrationCreateResponse</a></code>
- <code><a href="./src/resources/devices/postures/integrations.ts">IntegrationListResponse</a></code>
- <code><a href="./src/resources/devices/postures/integrations.ts">IntegrationDeleteResponse</a></code>
- <code><a href="./src/resources/devices/postures/integrations.ts">IntegrationEditResponse</a></code>
- <code><a href="./src/resources/devices/postures/integrations.ts">IntegrationGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/posture/integration">client.devices.postures.integrations.<a href="./src/resources/devices/postures/integrations.ts">create</a>(accountId, { ...params }) -> IntegrationCreateResponse | null</code>
- <code title="get /accounts/{account_id}/devices/posture/integration">client.devices.postures.integrations.<a href="./src/resources/devices/postures/integrations.ts">list</a>(accountId) -> IntegrationListResponse | null</code>
- <code title="delete /accounts/{account_id}/devices/posture/integration/{integration_id}">client.devices.postures.integrations.<a href="./src/resources/devices/postures/integrations.ts">delete</a>(accountId, integrationId) -> IntegrationDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/devices/posture/integration/{integration_id}">client.devices.postures.integrations.<a href="./src/resources/devices/postures/integrations.ts">edit</a>(accountId, integrationId, { ...params }) -> IntegrationEditResponse | null</code>
- <code title="get /accounts/{account_id}/devices/posture/integration/{integration_id}">client.devices.postures.integrations.<a href="./src/resources/devices/postures/integrations.ts">get</a>(accountId, integrationId) -> IntegrationGetResponse | null</code>

## Revokes

Types:

- <code><a href="./src/resources/devices/revokes.ts">RevokeCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/revoke">client.devices.revokes.<a href="./src/resources/devices/revokes.ts">create</a>(accountId, [ ...body ]) -> RevokeCreateResponse | null</code>

## Settings

Types:

- <code><a href="./src/resources/devices/settings.ts">SettingUpdateResponse</a></code>
- <code><a href="./src/resources/devices/settings.ts">SettingListResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/devices/settings">client.devices.settings.<a href="./src/resources/devices/settings.ts">update</a>(accountId, { ...params }) -> SettingUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/devices/settings">client.devices.settings.<a href="./src/resources/devices/settings.ts">list</a>(accountId) -> SettingListResponse | null</code>

## Unrevokes

Types:

- <code><a href="./src/resources/devices/unrevokes.ts">UnrevokeCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/unrevoke">client.devices.unrevokes.<a href="./src/resources/devices/unrevokes.ts">create</a>(accountId, [ ...body ]) -> UnrevokeCreateResponse | null</code>

## OverrideCodes

Types:

- <code><a href="./src/resources/devices/override-codes.ts">OverrideCodeListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/devices/{device_id}/override_codes">client.devices.overrideCodes.<a href="./src/resources/devices/override-codes.ts">list</a>(accountId, deviceId) -> OverrideCodeListResponse | null</code>

# D1

## Databases

Types:

- <code><a href="./src/resources/d1/databases.ts">DatabaseCreateResponse</a></code>
- <code><a href="./src/resources/d1/databases.ts">DatabaseListResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/d1/database">client.d1.databases.<a href="./src/resources/d1/databases.ts">create</a>(accountId, { ...params }) -> DatabaseCreateResponse</code>
- <code title="get /accounts/{account_id}/d1/database">client.d1.databases.<a href="./src/resources/d1/databases.ts">list</a>(accountId, { ...params }) -> DatabaseListResponsesV4PagePaginationArray</code>

## Database

Types:

- <code><a href="./src/resources/d1/database.ts">DatabaseCreateResponse</a></code>
- <code><a href="./src/resources/d1/database.ts">DatabaseDeleteResponse</a></code>
- <code><a href="./src/resources/d1/database.ts">DatabaseGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/d1/database/{database_identifier}/query">client.d1.database.<a href="./src/resources/d1/database.ts">create</a>(accountIdentifier, databaseIdentifier, { ...params }) -> DatabaseCreateResponse</code>
- <code title="delete /accounts/{account_identifier}/d1/database/{database_identifier}">client.d1.database.<a href="./src/resources/d1/database.ts">delete</a>(accountIdentifier, databaseIdentifier) -> DatabaseDeleteResponse | null</code>
- <code title="get /accounts/{account_identifier}/d1/database/{database_identifier}">client.d1.database.<a href="./src/resources/d1/database.ts">get</a>(accountIdentifier, databaseIdentifier) -> DatabaseGetResponse</code>

# DEX

## Colos

Types:

- <code><a href="./src/resources/dex/colos.ts">ColoListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/colos">client.dex.colos.<a href="./src/resources/dex/colos.ts">list</a>(accountId, { ...params }) -> ColoListResponse | null</code>

## FleetStatus

### Devices

Types:

- <code><a href="./src/resources/dex/fleet-status/devices.ts">DeviceListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/fleet-status/devices">client.dex.fleetStatus.devices.<a href="./src/resources/dex/fleet-status/devices.ts">list</a>(accountId, { ...params }) -> DeviceListResponsesV4PagePaginationArray</code>

### Live

Types:

- <code><a href="./src/resources/dex/fleet-status/live.ts">LiveListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/fleet-status/live">client.dex.fleetStatus.live.<a href="./src/resources/dex/fleet-status/live.ts">list</a>(accountId, { ...params }) -> LiveListResponse</code>

### OverTime

Methods:

- <code title="get /accounts/{account_id}/dex/fleet-status/over-time">client.dex.fleetStatus.overTime.<a href="./src/resources/dex/fleet-status/over-time.ts">list</a>(accountId, { ...params }) -> void</code>

## HTTPTests

Types:

- <code><a href="./src/resources/dex/http-tests/http-tests.ts">HTTPTestGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/http-tests/{test_id}">client.dex.httpTests.<a href="./src/resources/dex/http-tests/http-tests.ts">get</a>(accountId, testId, { ...params }) -> HTTPTestGetResponse</code>

### Percentiles

Types:

- <code><a href="./src/resources/dex/http-tests/percentiles.ts">PercentileListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/http-tests/{test_id}/percentiles">client.dex.httpTests.percentiles.<a href="./src/resources/dex/http-tests/percentiles.ts">list</a>(accountId, testId, { ...params }) -> PercentileListResponse</code>

## Tests

Types:

- <code><a href="./src/resources/dex/tests/tests.ts">TestListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/tests">client.dex.tests.<a href="./src/resources/dex/tests/tests.ts">list</a>(accountId, { ...params }) -> TestListResponsesV4PagePagination</code>

### UniqueDevices

Types:

- <code><a href="./src/resources/dex/tests/unique-devices.ts">UniqueDeviceListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/tests/unique-devices">client.dex.tests.uniqueDevices.<a href="./src/resources/dex/tests/unique-devices.ts">list</a>(accountId, { ...params }) -> UniqueDeviceListResponse</code>

## TracerouteTestResults

### NetworkPath

Types:

- <code><a href="./src/resources/dex/traceroute-test-results/network-path.ts">NetworkPathListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/traceroute-test-results/{test_result_id}/network-path">client.dex.tracerouteTestResults.networkPath.<a href="./src/resources/dex/traceroute-test-results/network-path.ts">list</a>(accountId, testResultId) -> NetworkPathListResponse</code>

## TracerouteTests

Types:

- <code><a href="./src/resources/dex/traceroute-tests.ts">TracerouteTestGetResponse</a></code>
- <code><a href="./src/resources/dex/traceroute-tests.ts">TracerouteTestNetworkPathResponse</a></code>
- <code><a href="./src/resources/dex/traceroute-tests.ts">TracerouteTestPercentilesResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/traceroute-tests/{test_id}">client.dex.tracerouteTests.<a href="./src/resources/dex/traceroute-tests.ts">get</a>(accountId, testId, { ...params }) -> TracerouteTestGetResponse</code>
- <code title="get /accounts/{account_id}/dex/traceroute-tests/{test_id}/network-path">client.dex.tracerouteTests.<a href="./src/resources/dex/traceroute-tests.ts">networkPath</a>(accountId, testId, { ...params }) -> TracerouteTestNetworkPathResponse</code>
- <code title="get /accounts/{account_id}/dex/traceroute-tests/{test_id}/percentiles">client.dex.tracerouteTests.<a href="./src/resources/dex/traceroute-tests.ts">percentiles</a>(accountId, testId, { ...params }) -> TracerouteTestPercentilesResponse</code>

# R2

## Buckets

Types:

- <code><a href="./src/resources/r2/buckets.ts">BucketCreateResponse</a></code>
- <code><a href="./src/resources/r2/buckets.ts">BucketListResponse</a></code>
- <code><a href="./src/resources/r2/buckets.ts">BucketDeleteResponse</a></code>
- <code><a href="./src/resources/r2/buckets.ts">BucketGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/r2/buckets">client.r2.buckets.<a href="./src/resources/r2/buckets.ts">create</a>(accountId, { ...params }) -> BucketCreateResponse</code>
- <code title="get /accounts/{account_id}/r2/buckets">client.r2.buckets.<a href="./src/resources/r2/buckets.ts">list</a>(accountId, { ...params }) -> BucketListResponse</code>
- <code title="delete /accounts/{account_id}/r2/buckets/{bucket_name}">client.r2.buckets.<a href="./src/resources/r2/buckets.ts">delete</a>(accountId, bucketName) -> BucketDeleteResponse</code>
- <code title="get /accounts/{account_id}/r2/buckets/{bucket_name}">client.r2.buckets.<a href="./src/resources/r2/buckets.ts">get</a>(accountId, bucketName) -> BucketGetResponse</code>

## Sippy

Types:

- <code><a href="./src/resources/r2/sippy.ts">SippyUpdateResponse</a></code>
- <code><a href="./src/resources/r2/sippy.ts">SippyDeleteResponse</a></code>
- <code><a href="./src/resources/r2/sippy.ts">SippyGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/r2/buckets/{bucket_name}/sippy">client.r2.sippy.<a href="./src/resources/r2/sippy.ts">update</a>(accountId, bucketName, { ...params }) -> SippyUpdateResponse</code>
- <code title="delete /accounts/{account_id}/r2/buckets/{bucket_name}/sippy">client.r2.sippy.<a href="./src/resources/r2/sippy.ts">delete</a>(accountId, bucketName) -> SippyDeleteResponse</code>
- <code title="get /accounts/{account_id}/r2/buckets/{bucket_name}/sippy">client.r2.sippy.<a href="./src/resources/r2/sippy.ts">get</a>(accountId, bucketName) -> SippyGetResponse</code>

# Teamnet

## Routes

Types:

- <code><a href="./src/resources/teamnet/routes.ts">RouteCreateResponse</a></code>
- <code><a href="./src/resources/teamnet/routes.ts">RouteDeleteResponse</a></code>
- <code><a href="./src/resources/teamnet/routes.ts">RouteEditResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/teamnet/routes">client.teamnet.routes.<a href="./src/resources/teamnet/routes.ts">create</a>(accountId, { ...params }) -> RouteCreateResponse</code>
- <code title="delete /accounts/{account_id}/teamnet/routes/{route_id}">client.teamnet.routes.<a href="./src/resources/teamnet/routes.ts">delete</a>(accountId, routeId) -> RouteDeleteResponse</code>
- <code title="patch /accounts/{account_id}/teamnet/routes/{route_id}">client.teamnet.routes.<a href="./src/resources/teamnet/routes.ts">edit</a>(accountId, routeId, { ...params }) -> RouteEditResponse</code>

# WARPConnector

Types:

- <code><a href="./src/resources/warp-connector.ts">WARPConnectorCreateResponse</a></code>
- <code><a href="./src/resources/warp-connector.ts">WARPConnectorListResponse</a></code>
- <code><a href="./src/resources/warp-connector.ts">WARPConnectorDeleteResponse</a></code>
- <code><a href="./src/resources/warp-connector.ts">WARPConnectorEditResponse</a></code>
- <code><a href="./src/resources/warp-connector.ts">WARPConnectorGetResponse</a></code>
- <code><a href="./src/resources/warp-connector.ts">WARPConnectorTokenResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/warp_connector">client.warpConnector.<a href="./src/resources/warp-connector.ts">create</a>(accountId, { ...params }) -> WARPConnectorCreateResponse</code>
- <code title="get /accounts/{account_id}/warp_connector">client.warpConnector.<a href="./src/resources/warp-connector.ts">list</a>(accountId, { ...params }) -> WARPConnectorListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/warp_connector/{tunnel_id}">client.warpConnector.<a href="./src/resources/warp-connector.ts">delete</a>(accountId, tunnelId, { ...params }) -> WARPConnectorDeleteResponse</code>
- <code title="patch /accounts/{account_id}/warp_connector/{tunnel_id}">client.warpConnector.<a href="./src/resources/warp-connector.ts">edit</a>(accountId, tunnelId, { ...params }) -> WARPConnectorEditResponse</code>
- <code title="get /accounts/{account_id}/warp_connector/{tunnel_id}">client.warpConnector.<a href="./src/resources/warp-connector.ts">get</a>(accountId, tunnelId) -> WARPConnectorGetResponse</code>
- <code title="get /accounts/{account_id}/warp_connector/{tunnel_id}/token">client.warpConnector.<a href="./src/resources/warp-connector.ts">token</a>(accountId, tunnelId) -> WARPConnectorTokenResponse</code>

# Dispatchers

## Scripts

Types:

- <code><a href="./src/resources/dispatchers/scripts.ts">ScriptUpdateResponse</a></code>
- <code><a href="./src/resources/dispatchers/scripts.ts">ScriptGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}">client.dispatchers.scripts.<a href="./src/resources/dispatchers/scripts.ts">update</a>(accountId, dispatchNamespace, scriptName, { ...params }) -> ScriptUpdateResponse</code>
- <code title="delete /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}">client.dispatchers.scripts.<a href="./src/resources/dispatchers/scripts.ts">delete</a>(accountId, dispatchNamespace, scriptName, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}">client.dispatchers.scripts.<a href="./src/resources/dispatchers/scripts.ts">get</a>(accountId, dispatchNamespace, scriptName) -> ScriptGetResponse</code>

# WorkersForPlatforms

## Dispatch

### Namespaces

#### Scripts

##### Content

Types:

- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/content.ts">ContentUpdateResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/content">client.workersForPlatforms.dispatch.namespaces.scripts.content.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/content.ts">update</a>(accountId, dispatchNamespace, scriptName, { ...params }) -> ContentUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/content">client.workersForPlatforms.dispatch.namespaces.scripts.content.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/content.ts">get</a>(accountId, dispatchNamespace, scriptName) -> Response</code>

##### Settings

Types:

- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/settings.ts">SettingEditResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/settings">client.workersForPlatforms.dispatch.namespaces.scripts.settings.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/settings.ts">edit</a>(accountId, dispatchNamespace, scriptName, { ...params }) -> SettingEditResponse</code>
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/settings">client.workersForPlatforms.dispatch.namespaces.scripts.settings.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/settings.ts">get</a>(accountId, dispatchNamespace, scriptName) -> SettingGetResponse</code>

# WorkerDomains

Types:

- <code><a href="./src/resources/worker-domains.ts">WorkerDomainGetResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/workers/domains/{domain_id}">client.workerDomains.<a href="./src/resources/worker-domains.ts">delete</a>(accountId, domainId) -> void</code>
- <code title="get /accounts/{account_id}/workers/domains/{domain_id}">client.workerDomains.<a href="./src/resources/worker-domains.ts">get</a>(accountId, domainId) -> WorkerDomainGetResponse</code>

# WorkerScripts

## Content

Types:

- <code><a href="./src/resources/worker-scripts/content.ts">ContentUpdateResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/scripts/{script_name}/content">client.workerScripts.content.<a href="./src/resources/worker-scripts/content.ts">update</a>(accountId, scriptName, { ...params }) -> ContentUpdateResponse</code>

## ContentV2

Methods:

- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/content/v2">client.workerScripts.contentV2.<a href="./src/resources/worker-scripts/content-v2.ts">get</a>(accountId, scriptName) -> Response</code>

## Settings

Types:

- <code><a href="./src/resources/worker-scripts/settings.ts">SettingEditResponse</a></code>
- <code><a href="./src/resources/worker-scripts/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/workers/scripts/{script_name}/settings">client.workerScripts.settings.<a href="./src/resources/worker-scripts/settings.ts">edit</a>(accountId, scriptName, { ...params }) -> SettingEditResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/settings">client.workerScripts.settings.<a href="./src/resources/worker-scripts/settings.ts">get</a>(accountId, scriptName) -> SettingGetResponse</code>

# Zerotrust

## ConnectivitySettings

Types:

- <code><a href="./src/resources/zerotrust/connectivity-settings.ts">ConnectivitySettingEditResponse</a></code>
- <code><a href="./src/resources/zerotrust/connectivity-settings.ts">ConnectivitySettingGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/zerotrust/connectivity_settings">client.zerotrust.connectivitySettings.<a href="./src/resources/zerotrust/connectivity-settings.ts">edit</a>(accountId, { ...params }) -> ConnectivitySettingEditResponse</code>
- <code title="get /accounts/{account_id}/zerotrust/connectivity_settings">client.zerotrust.connectivitySettings.<a href="./src/resources/zerotrust/connectivity-settings.ts">get</a>(accountId) -> ConnectivitySettingGetResponse</code>

# Addressing

## Prefixes

### BGPPrefixes

Types:

- <code><a href="./src/resources/addressing/prefixes/bgp-prefixes.ts">BGPPrefixListResponse</a></code>
- <code><a href="./src/resources/addressing/prefixes/bgp-prefixes.ts">BGPPrefixEditResponse</a></code>
- <code><a href="./src/resources/addressing/prefixes/bgp-prefixes.ts">BGPPrefixGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes">client.addressing.prefixes.bgpPrefixes.<a href="./src/resources/addressing/prefixes/bgp-prefixes.ts">list</a>(accountId, prefixId) -> BGPPrefixListResponse | null</code>
- <code title="patch /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes/{bgp_prefix_id}">client.addressing.prefixes.bgpPrefixes.<a href="./src/resources/addressing/prefixes/bgp-prefixes.ts">edit</a>(accountId, prefixId, bgpPrefixId, { ...params }) -> BGPPrefixEditResponse</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes/{bgp_prefix_id}">client.addressing.prefixes.bgpPrefixes.<a href="./src/resources/addressing/prefixes/bgp-prefixes.ts">get</a>(accountId, prefixId, bgpPrefixId) -> BGPPrefixGetResponse</code>

### Bindings

Types:

- <code><a href="./src/resources/addressing/prefixes/bindings.ts">BindingCreateResponse</a></code>
- <code><a href="./src/resources/addressing/prefixes/bindings.ts">BindingListResponse</a></code>
- <code><a href="./src/resources/addressing/prefixes/bindings.ts">BindingDeleteResponse</a></code>
- <code><a href="./src/resources/addressing/prefixes/bindings.ts">BindingGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings">client.addressing.prefixes.bindings.<a href="./src/resources/addressing/prefixes/bindings.ts">create</a>(accountId, prefixId, { ...params }) -> BindingCreateResponse</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings">client.addressing.prefixes.bindings.<a href="./src/resources/addressing/prefixes/bindings.ts">list</a>(accountId, prefixId) -> BindingListResponse</code>
- <code title="delete /accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings/{binding_id}">client.addressing.prefixes.bindings.<a href="./src/resources/addressing/prefixes/bindings.ts">delete</a>(accountId, prefixId, bindingId) -> BindingDeleteResponse</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings/{binding_id}">client.addressing.prefixes.bindings.<a href="./src/resources/addressing/prefixes/bindings.ts">get</a>(accountId, prefixId, bindingId) -> BindingGetResponse</code>

## Services

Types:

- <code><a href="./src/resources/addressing/services.ts">ServiceListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/addressing/services">client.addressing.services.<a href="./src/resources/addressing/services.ts">list</a>(accountId) -> ServiceListResponse</code>

# Challenges

## Widgets

Types:

- <code><a href="./src/resources/challenges/widgets.ts">WidgetCreateResponse</a></code>
- <code><a href="./src/resources/challenges/widgets.ts">WidgetUpdateResponse</a></code>
- <code><a href="./src/resources/challenges/widgets.ts">WidgetListResponse</a></code>
- <code><a href="./src/resources/challenges/widgets.ts">WidgetDeleteResponse</a></code>
- <code><a href="./src/resources/challenges/widgets.ts">WidgetGetResponse</a></code>
- <code><a href="./src/resources/challenges/widgets.ts">WidgetRotateSecretResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/challenges/widgets">client.challenges.widgets.<a href="./src/resources/challenges/widgets.ts">create</a>(accountIdentifier, { ...params }) -> WidgetCreateResponse</code>
- <code title="put /accounts/{account_identifier}/challenges/widgets/{sitekey}">client.challenges.widgets.<a href="./src/resources/challenges/widgets.ts">update</a>(accountIdentifier, sitekey, { ...params }) -> WidgetUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/challenges/widgets">client.challenges.widgets.<a href="./src/resources/challenges/widgets.ts">list</a>(accountIdentifier, { ...params }) -> WidgetListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_identifier}/challenges/widgets/{sitekey}">client.challenges.widgets.<a href="./src/resources/challenges/widgets.ts">delete</a>(accountIdentifier, sitekey) -> WidgetDeleteResponse</code>
- <code title="get /accounts/{account_identifier}/challenges/widgets/{sitekey}">client.challenges.widgets.<a href="./src/resources/challenges/widgets.ts">get</a>(accountIdentifier, sitekey) -> WidgetGetResponse</code>
- <code title="post /accounts/{account_identifier}/challenges/widgets/{sitekey}/rotate_secret">client.challenges.widgets.<a href="./src/resources/challenges/widgets.ts">rotateSecret</a>(accountIdentifier, sitekey, { ...params }) -> WidgetRotateSecretResponse</code>

# Hyperdrive

## Configs

Types:

- <code><a href="./src/resources/hyperdrive/configs.ts">ConfigCreateResponse</a></code>
- <code><a href="./src/resources/hyperdrive/configs.ts">ConfigUpdateResponse</a></code>
- <code><a href="./src/resources/hyperdrive/configs.ts">ConfigListResponse</a></code>
- <code><a href="./src/resources/hyperdrive/configs.ts">ConfigDeleteResponse</a></code>
- <code><a href="./src/resources/hyperdrive/configs.ts">ConfigEditResponse</a></code>
- <code><a href="./src/resources/hyperdrive/configs.ts">ConfigGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/hyperdrive/configs">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">create</a>(accountId, { ...params }) -> ConfigCreateResponse | null</code>
- <code title="put /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">update</a>(accountId, hyperdriveId, { ...params }) -> ConfigUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/hyperdrive/configs">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">list</a>(accountId) -> ConfigListResponse</code>
- <code title="delete /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">delete</a>(accountId, hyperdriveId) -> ConfigDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">edit</a>(accountId, hyperdriveId, { ...params }) -> ConfigEditResponse | null</code>
- <code title="get /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">get</a>(accountId, hyperdriveId) -> ConfigGetResponse | null</code>

# RUM

## SiteInfos

Types:

- <code><a href="./src/resources/rum/site-infos.ts">SiteInfoCreateResponse</a></code>
- <code><a href="./src/resources/rum/site-infos.ts">SiteInfoUpdateResponse</a></code>
- <code><a href="./src/resources/rum/site-infos.ts">SiteInfoListResponse</a></code>
- <code><a href="./src/resources/rum/site-infos.ts">SiteInfoDeleteResponse</a></code>
- <code><a href="./src/resources/rum/site-infos.ts">SiteInfoGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/rum/site_info">client.rum.siteInfos.<a href="./src/resources/rum/site-infos.ts">create</a>(accountId, { ...params }) -> SiteInfoCreateResponse</code>
- <code title="put /accounts/{account_id}/rum/site_info/{site_id}">client.rum.siteInfos.<a href="./src/resources/rum/site-infos.ts">update</a>(accountId, siteId, { ...params }) -> SiteInfoUpdateResponse</code>
- <code title="get /accounts/{account_id}/rum/site_info/list">client.rum.siteInfos.<a href="./src/resources/rum/site-infos.ts">list</a>(accountId, { ...params }) -> SiteInfoListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/rum/site_info/{site_id}">client.rum.siteInfos.<a href="./src/resources/rum/site-infos.ts">delete</a>(accountId, siteId) -> SiteInfoDeleteResponse</code>
- <code title="get /accounts/{account_id}/rum/site_info/{site_id}">client.rum.siteInfos.<a href="./src/resources/rum/site-infos.ts">get</a>(accountId, siteId) -> SiteInfoGetResponse</code>

## Rules

Types:

- <code><a href="./src/resources/rum/rules.ts">RuleCreateResponse</a></code>
- <code><a href="./src/resources/rum/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/rum/rules.ts">RuleListResponse</a></code>
- <code><a href="./src/resources/rum/rules.ts">RuleDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/rum/v2/{ruleset_id}/rule">client.rum.rules.<a href="./src/resources/rum/rules.ts">create</a>(accountId, rulesetId, { ...params }) -> RuleCreateResponse</code>
- <code title="put /accounts/{account_id}/rum/v2/{ruleset_id}/rule/{rule_id}">client.rum.rules.<a href="./src/resources/rum/rules.ts">update</a>(accountId, rulesetId, ruleId, { ...params }) -> RuleUpdateResponse</code>
- <code title="get /accounts/{account_id}/rum/v2/{ruleset_id}/rules">client.rum.rules.<a href="./src/resources/rum/rules.ts">list</a>(accountId, rulesetId) -> RuleListResponse</code>
- <code title="delete /accounts/{account_id}/rum/v2/{ruleset_id}/rule/{rule_id}">client.rum.rules.<a href="./src/resources/rum/rules.ts">delete</a>(accountId, rulesetId, ruleId) -> RuleDeleteResponse</code>

# Vectorize

## Indexes

Types:

- <code><a href="./src/resources/vectorize/indexes.ts">IndexCreateResponse</a></code>
- <code><a href="./src/resources/vectorize/indexes.ts">IndexUpdateResponse</a></code>
- <code><a href="./src/resources/vectorize/indexes.ts">IndexListResponse</a></code>
- <code><a href="./src/resources/vectorize/indexes.ts">IndexDeleteResponse</a></code>
- <code><a href="./src/resources/vectorize/indexes.ts">IndexDeleteByIDsResponse</a></code>
- <code><a href="./src/resources/vectorize/indexes.ts">IndexGetResponse</a></code>
- <code><a href="./src/resources/vectorize/indexes.ts">IndexGetByIDsResponse</a></code>
- <code><a href="./src/resources/vectorize/indexes.ts">IndexInsertResponse</a></code>
- <code><a href="./src/resources/vectorize/indexes.ts">IndexQueryResponse</a></code>
- <code><a href="./src/resources/vectorize/indexes.ts">IndexUpsertResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/vectorize/indexes">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">create</a>(accountIdentifier, { ...params }) -> IndexCreateResponse | null</code>
- <code title="put /accounts/{account_identifier}/vectorize/indexes/{index_name}">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">update</a>(accountIdentifier, indexName, { ...params }) -> IndexUpdateResponse | null</code>
- <code title="get /accounts/{account_identifier}/vectorize/indexes">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">list</a>(accountIdentifier) -> IndexListResponse</code>
- <code title="delete /accounts/{account_identifier}/vectorize/indexes/{index_name}">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">delete</a>(accountIdentifier, indexName) -> IndexDeleteResponse | null</code>
- <code title="post /accounts/{account_identifier}/vectorize/indexes/{index_name}/delete-by-ids">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">deleteByIds</a>(accountIdentifier, indexName, { ...params }) -> IndexDeleteByIDsResponse | null</code>
- <code title="get /accounts/{account_identifier}/vectorize/indexes/{index_name}">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">get</a>(accountIdentifier, indexName) -> IndexGetResponse | null</code>
- <code title="post /accounts/{account_identifier}/vectorize/indexes/{index_name}/get-by-ids">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">getByIds</a>(accountIdentifier, indexName, { ...params }) -> IndexGetByIDsResponse | null</code>
- <code title="post /accounts/{account_identifier}/vectorize/indexes/{index_name}/insert">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">insert</a>(accountIdentifier, indexName) -> IndexInsertResponse | null</code>
- <code title="post /accounts/{account_identifier}/vectorize/indexes/{index_name}/query">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">query</a>(accountIdentifier, indexName, { ...params }) -> IndexQueryResponse | null</code>
- <code title="post /accounts/{account_identifier}/vectorize/indexes/{index_name}/upsert">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">upsert</a>(accountIdentifier, indexName) -> IndexUpsertResponse | null</code>

# URLScanner

Types:

- <code><a href="./src/resources/url-scanner/url-scanner.ts">URLScannerScanResponse</a></code>

Methods:

- <code title="get /accounts/{accountId}/urlscanner/scan">client.urlScanner.<a href="./src/resources/url-scanner/url-scanner.ts">scan</a>(accountId, { ...params }) -> URLScannerScanResponse</code>

## Scans

Types:

- <code><a href="./src/resources/url-scanner/scans.ts">ScanCreateResponse</a></code>
- <code><a href="./src/resources/url-scanner/scans.ts">ScanGetResponse</a></code>
- <code><a href="./src/resources/url-scanner/scans.ts">ScanHarResponse</a></code>

Methods:

- <code title="post /accounts/{accountId}/urlscanner/scan">client.urlScanner.scans.<a href="./src/resources/url-scanner/scans.ts">create</a>(accountId, { ...params }) -> ScanCreateResponse</code>
- <code title="get /accounts/{accountId}/urlscanner/scan/{scanId}">client.urlScanner.scans.<a href="./src/resources/url-scanner/scans.ts">get</a>(accountId, scanId) -> ScanGetResponse</code>
- <code title="get /accounts/{accountId}/urlscanner/scan/{scanId}/har">client.urlScanner.scans.<a href="./src/resources/url-scanner/scans.ts">har</a>(accountId, scanId) -> ScanHarResponse</code>
- <code title="get /accounts/{accountId}/urlscanner/scan/{scanId}/screenshot">client.urlScanner.scans.<a href="./src/resources/url-scanner/scans.ts">screenshot</a>(accountId, scanId, { ...params }) -> Response</code>

# Radar

## Annotations

### Outages

Types:

- <code><a href="./src/resources/radar/annotations/outages.ts">OutageGetResponse</a></code>
- <code><a href="./src/resources/radar/annotations/outages.ts">OutageLocationsResponse</a></code>

Methods:

- <code title="get /radar/annotations/outages">client.radar.annotations.outages.<a href="./src/resources/radar/annotations/outages.ts">get</a>({ ...params }) -> OutageGetResponse</code>
- <code title="get /radar/annotations/outages/locations">client.radar.annotations.outages.<a href="./src/resources/radar/annotations/outages.ts">locations</a>({ ...params }) -> OutageLocationsResponse</code>

## BGP

Types:

- <code><a href="./src/resources/radar/bgp/bgp.ts">BGPTimeseriesResponse</a></code>

Methods:

- <code title="get /radar/bgp/timeseries">client.radar.bgp.<a href="./src/resources/radar/bgp/bgp.ts">timeseries</a>({ ...params }) -> BGPTimeseriesResponse</code>

### Leaks

Types:

- <code><a href="./src/resources/radar/bgp/leaks.ts">LeakEventsResponse</a></code>

Methods:

- <code title="get /radar/bgp/leaks/events">client.radar.bgp.leaks.<a href="./src/resources/radar/bgp/leaks.ts">events</a>({ ...params }) -> LeakEventsResponse</code>

### Top

Types:

- <code><a href="./src/resources/radar/bgp/top/top.ts">TopPrefixesResponse</a></code>

Methods:

- <code title="get /radar/bgp/top/prefixes">client.radar.bgp.top.<a href="./src/resources/radar/bgp/top/top.ts">prefixes</a>({ ...params }) -> TopPrefixesResponse</code>

#### Ases

Types:

- <code><a href="./src/resources/radar/bgp/top/ases.ts">AseGetResponse</a></code>
- <code><a href="./src/resources/radar/bgp/top/ases.ts">AsePrefixesResponse</a></code>

Methods:

- <code title="get /radar/bgp/top/ases">client.radar.bgp.top.ases.<a href="./src/resources/radar/bgp/top/ases.ts">get</a>({ ...params }) -> AseGetResponse</code>
- <code title="get /radar/bgp/top/ases/prefixes">client.radar.bgp.top.ases.<a href="./src/resources/radar/bgp/top/ases.ts">prefixes</a>({ ...params }) -> AsePrefixesResponse</code>

### Hijacks

Types:

- <code><a href="./src/resources/radar/bgp/hijacks.ts">HijackEventsResponse</a></code>

Methods:

- <code title="get /radar/bgp/hijacks/events">client.radar.bgp.hijacks.<a href="./src/resources/radar/bgp/hijacks.ts">events</a>({ ...params }) -> HijackEventsResponse</code>

### Routes

Types:

- <code><a href="./src/resources/radar/bgp/routes.ts">RouteMoasResponse</a></code>
- <code><a href="./src/resources/radar/bgp/routes.ts">RoutePfx2asResponse</a></code>
- <code><a href="./src/resources/radar/bgp/routes.ts">RouteStatsResponse</a></code>

Methods:

- <code title="get /radar/bgp/routes/moas">client.radar.bgp.routes.<a href="./src/resources/radar/bgp/routes.ts">moas</a>({ ...params }) -> RouteMoasResponse</code>
- <code title="get /radar/bgp/routes/pfx2as">client.radar.bgp.routes.<a href="./src/resources/radar/bgp/routes.ts">pfx2as</a>({ ...params }) -> RoutePfx2asResponse</code>
- <code title="get /radar/bgp/routes/stats">client.radar.bgp.routes.<a href="./src/resources/radar/bgp/routes.ts">stats</a>({ ...params }) -> RouteStatsResponse</code>

## Datasets

Types:

- <code><a href="./src/resources/radar/datasets.ts">DatasetListResponse</a></code>
- <code><a href="./src/resources/radar/datasets.ts">DatasetDownloadResponse</a></code>
- <code><a href="./src/resources/radar/datasets.ts">DatasetGetResponse</a></code>

Methods:

- <code title="get /radar/datasets">client.radar.datasets.<a href="./src/resources/radar/datasets.ts">list</a>({ ...params }) -> DatasetListResponse</code>
- <code title="post /radar/datasets/download">client.radar.datasets.<a href="./src/resources/radar/datasets.ts">download</a>({ ...params }) -> DatasetDownloadResponse</code>
- <code title="get /radar/datasets/{alias}">client.radar.datasets.<a href="./src/resources/radar/datasets.ts">get</a>(alias, { ...params }) -> string</code>

## DNS

### Top

Types:

- <code><a href="./src/resources/radar/dns/top.ts">TopAsesResponse</a></code>
- <code><a href="./src/resources/radar/dns/top.ts">TopLocationsResponse</a></code>

Methods:

- <code title="get /radar/dns/top/ases">client.radar.dns.top.<a href="./src/resources/radar/dns/top.ts">ases</a>({ ...params }) -> TopAsesResponse</code>
- <code title="get /radar/dns/top/locations">client.radar.dns.top.<a href="./src/resources/radar/dns/top.ts">locations</a>({ ...params }) -> TopLocationsResponse</code>

## Netflows

Types:

- <code><a href="./src/resources/radar/netflows/netflows.ts">NetflowTimeseriesResponse</a></code>

Methods:

- <code title="get /radar/netflows/timeseries">client.radar.netflows.<a href="./src/resources/radar/netflows/netflows.ts">timeseries</a>({ ...params }) -> NetflowTimeseriesResponse</code>

### Top

Types:

- <code><a href="./src/resources/radar/netflows/top.ts">TopAsesResponse</a></code>
- <code><a href="./src/resources/radar/netflows/top.ts">TopLocationsResponse</a></code>

Methods:

- <code title="get /radar/netflows/top/ases">client.radar.netflows.top.<a href="./src/resources/radar/netflows/top.ts">ases</a>({ ...params }) -> TopAsesResponse</code>
- <code title="get /radar/netflows/top/locations">client.radar.netflows.top.<a href="./src/resources/radar/netflows/top.ts">locations</a>({ ...params }) -> TopLocationsResponse</code>

## Search

Types:

- <code><a href="./src/resources/radar/search.ts">SearchGlobalResponse</a></code>

Methods:

- <code title="get /radar/search/global">client.radar.search.<a href="./src/resources/radar/search.ts">global</a>({ ...params }) -> SearchGlobalResponse</code>

## VerifiedBots

### Top

Types:

- <code><a href="./src/resources/radar/verified-bots/top.ts">TopBotsResponse</a></code>
- <code><a href="./src/resources/radar/verified-bots/top.ts">TopCategoriesResponse</a></code>

Methods:

- <code title="get /radar/verified_bots/top/bots">client.radar.verifiedBots.top.<a href="./src/resources/radar/verified-bots/top.ts">bots</a>({ ...params }) -> TopBotsResponse</code>
- <code title="get /radar/verified_bots/top/categories">client.radar.verifiedBots.top.<a href="./src/resources/radar/verified-bots/top.ts">categories</a>({ ...params }) -> TopCategoriesResponse</code>

## As112

Types:

- <code><a href="./src/resources/radar/as112/as112.ts">As112TimeseriesResponse</a></code>

Methods:

- <code title="get /radar/as112/timeseries">client.radar.as112.<a href="./src/resources/radar/as112/as112.ts">timeseries</a>({ ...params }) -> As112TimeseriesResponse</code>

### Summary

Types:

- <code><a href="./src/resources/radar/as112/summary.ts">SummaryDNSSECResponse</a></code>
- <code><a href="./src/resources/radar/as112/summary.ts">SummaryEdnsResponse</a></code>
- <code><a href="./src/resources/radar/as112/summary.ts">SummaryIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/as112/summary.ts">SummaryProtocolResponse</a></code>
- <code><a href="./src/resources/radar/as112/summary.ts">SummaryQueryTypeResponse</a></code>
- <code><a href="./src/resources/radar/as112/summary.ts">SummaryResponseCodesResponse</a></code>

Methods:

- <code title="get /radar/as112/summary/dnssec">client.radar.as112.summary.<a href="./src/resources/radar/as112/summary.ts">dnssec</a>({ ...params }) -> SummaryDNSSECResponse</code>
- <code title="get /radar/as112/summary/edns">client.radar.as112.summary.<a href="./src/resources/radar/as112/summary.ts">edns</a>({ ...params }) -> SummaryEdnsResponse</code>
- <code title="get /radar/as112/summary/ip_version">client.radar.as112.summary.<a href="./src/resources/radar/as112/summary.ts">ipVersion</a>({ ...params }) -> SummaryIPVersionResponse</code>
- <code title="get /radar/as112/summary/protocol">client.radar.as112.summary.<a href="./src/resources/radar/as112/summary.ts">protocol</a>({ ...params }) -> SummaryProtocolResponse</code>
- <code title="get /radar/as112/summary/query_type">client.radar.as112.summary.<a href="./src/resources/radar/as112/summary.ts">queryType</a>({ ...params }) -> SummaryQueryTypeResponse</code>
- <code title="get /radar/as112/summary/response_codes">client.radar.as112.summary.<a href="./src/resources/radar/as112/summary.ts">responseCodes</a>({ ...params }) -> SummaryResponseCodesResponse</code>

### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/as112/timeseries-groups.ts">TimeseriesGroupDNSSECResponse</a></code>
- <code><a href="./src/resources/radar/as112/timeseries-groups.ts">TimeseriesGroupEdnsResponse</a></code>
- <code><a href="./src/resources/radar/as112/timeseries-groups.ts">TimeseriesGroupIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/as112/timeseries-groups.ts">TimeseriesGroupProtocolResponse</a></code>
- <code><a href="./src/resources/radar/as112/timeseries-groups.ts">TimeseriesGroupQueryTypeResponse</a></code>
- <code><a href="./src/resources/radar/as112/timeseries-groups.ts">TimeseriesGroupResponseCodesResponse</a></code>

Methods:

- <code title="get /radar/as112/timeseries_groups/dnssec">client.radar.as112.timeseriesGroups.<a href="./src/resources/radar/as112/timeseries-groups.ts">dnssec</a>({ ...params }) -> TimeseriesGroupDNSSECResponse</code>
- <code title="get /radar/as112/timeseries_groups/edns">client.radar.as112.timeseriesGroups.<a href="./src/resources/radar/as112/timeseries-groups.ts">edns</a>({ ...params }) -> TimeseriesGroupEdnsResponse</code>
- <code title="get /radar/as112/timeseries_groups/ip_version">client.radar.as112.timeseriesGroups.<a href="./src/resources/radar/as112/timeseries-groups.ts">ipVersion</a>({ ...params }) -> TimeseriesGroupIPVersionResponse</code>
- <code title="get /radar/as112/timeseries_groups/protocol">client.radar.as112.timeseriesGroups.<a href="./src/resources/radar/as112/timeseries-groups.ts">protocol</a>({ ...params }) -> TimeseriesGroupProtocolResponse</code>
- <code title="get /radar/as112/timeseries_groups/query_type">client.radar.as112.timeseriesGroups.<a href="./src/resources/radar/as112/timeseries-groups.ts">queryType</a>({ ...params }) -> TimeseriesGroupQueryTypeResponse</code>
- <code title="get /radar/as112/timeseries_groups/response_codes">client.radar.as112.timeseriesGroups.<a href="./src/resources/radar/as112/timeseries-groups.ts">responseCodes</a>({ ...params }) -> TimeseriesGroupResponseCodesResponse</code>

### Top

Types:

- <code><a href="./src/resources/radar/as112/top.ts">TopDNSSECResponse</a></code>
- <code><a href="./src/resources/radar/as112/top.ts">TopEdnsResponse</a></code>
- <code><a href="./src/resources/radar/as112/top.ts">TopIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/as112/top.ts">TopLocationsResponse</a></code>

Methods:

- <code title="get /radar/as112/top/locations/dnssec/{dnssec}">client.radar.as112.top.<a href="./src/resources/radar/as112/top.ts">dnssec</a>(dnssec, { ...params }) -> TopDNSSECResponse</code>
- <code title="get /radar/as112/top/locations/edns/{edns}">client.radar.as112.top.<a href="./src/resources/radar/as112/top.ts">edns</a>(edns, { ...params }) -> TopEdnsResponse</code>
- <code title="get /radar/as112/top/locations/ip_version/{ip_version}">client.radar.as112.top.<a href="./src/resources/radar/as112/top.ts">ipVersion</a>(ipVersion, { ...params }) -> TopIPVersionResponse</code>
- <code title="get /radar/as112/top/locations">client.radar.as112.top.<a href="./src/resources/radar/as112/top.ts">locations</a>({ ...params }) -> TopLocationsResponse</code>

## ConnectionTampering

Types:

- <code><a href="./src/resources/radar/connection-tampering.ts">ConnectionTamperingSummaryResponse</a></code>
- <code><a href="./src/resources/radar/connection-tampering.ts">ConnectionTamperingTimeseriesGroupsResponse</a></code>

Methods:

- <code title="get /radar/connection_tampering/summary">client.radar.connectionTampering.<a href="./src/resources/radar/connection-tampering.ts">summary</a>({ ...params }) -> ConnectionTamperingSummaryResponse</code>
- <code title="get /radar/connection_tampering/timeseries_groups">client.radar.connectionTampering.<a href="./src/resources/radar/connection-tampering.ts">timeseriesGroups</a>({ ...params }) -> ConnectionTamperingTimeseriesGroupsResponse</code>

## Email

### Security

#### Top

##### Ases

Types:

- <code><a href="./src/resources/radar/email/security/top/ases/ases.ts">AseGetResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/ases">client.radar.email.security.top.ases.<a href="./src/resources/radar/email/security/top/ases/ases.ts">get</a>({ ...params }) -> AseGetResponse</code>

###### ARC

Types:

- <code><a href="./src/resources/radar/email/security/top/ases/arc.ts">ARCGetResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/ases/arc/{arc}">client.radar.email.security.top.ases.arc.<a href="./src/resources/radar/email/security/top/ases/arc.ts">get</a>(arc, { ...params }) -> ARCGetResponse</code>

###### DKIM

Types:

- <code><a href="./src/resources/radar/email/security/top/ases/dkim.ts">DKIMGetResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/ases/dkim/{dkim}">client.radar.email.security.top.ases.dkim.<a href="./src/resources/radar/email/security/top/ases/dkim.ts">get</a>(dkim, { ...params }) -> DKIMGetResponse</code>

###### DMARC

Types:

- <code><a href="./src/resources/radar/email/security/top/ases/dmarc.ts">DMARCGetResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/ases/dmarc/{dmarc}">client.radar.email.security.top.ases.dmarc.<a href="./src/resources/radar/email/security/top/ases/dmarc.ts">get</a>(dmarc, { ...params }) -> DMARCGetResponse</code>

###### Malicious

Types:

- <code><a href="./src/resources/radar/email/security/top/ases/malicious.ts">MaliciousGetResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/ases/malicious/{malicious}">client.radar.email.security.top.ases.malicious.<a href="./src/resources/radar/email/security/top/ases/malicious.ts">get</a>(malicious, { ...params }) -> MaliciousGetResponse</code>

###### Spam

Types:

- <code><a href="./src/resources/radar/email/security/top/ases/spam.ts">SpamGetResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/ases/spam/{spam}">client.radar.email.security.top.ases.spam.<a href="./src/resources/radar/email/security/top/ases/spam.ts">get</a>(spam, { ...params }) -> SpamGetResponse</code>

###### SPF

Types:

- <code><a href="./src/resources/radar/email/security/top/ases/spf.ts">SPFGetResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/ases/spf/{spf}">client.radar.email.security.top.ases.spf.<a href="./src/resources/radar/email/security/top/ases/spf.ts">get</a>(spf, { ...params }) -> SPFGetResponse</code>

##### Locations

Types:

- <code><a href="./src/resources/radar/email/security/top/locations/locations.ts">LocationGetResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/locations">client.radar.email.security.top.locations.<a href="./src/resources/radar/email/security/top/locations/locations.ts">get</a>({ ...params }) -> LocationGetResponse</code>

###### ARC

Types:

- <code><a href="./src/resources/radar/email/security/top/locations/arc.ts">ARCGetResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/locations/arc/{arc}">client.radar.email.security.top.locations.arc.<a href="./src/resources/radar/email/security/top/locations/arc.ts">get</a>(arc, { ...params }) -> ARCGetResponse</code>

###### DKIM

Types:

- <code><a href="./src/resources/radar/email/security/top/locations/dkim.ts">DKIMGetResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/locations/dkim/{dkim}">client.radar.email.security.top.locations.dkim.<a href="./src/resources/radar/email/security/top/locations/dkim.ts">get</a>(dkim, { ...params }) -> DKIMGetResponse</code>

###### DMARC

Types:

- <code><a href="./src/resources/radar/email/security/top/locations/dmarc.ts">DMARCGetResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/locations/dmarc/{dmarc}">client.radar.email.security.top.locations.dmarc.<a href="./src/resources/radar/email/security/top/locations/dmarc.ts">get</a>(dmarc, { ...params }) -> DMARCGetResponse</code>

###### Malicious

Types:

- <code><a href="./src/resources/radar/email/security/top/locations/malicious.ts">MaliciousGetResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/locations/malicious/{malicious}">client.radar.email.security.top.locations.malicious.<a href="./src/resources/radar/email/security/top/locations/malicious.ts">get</a>(malicious, { ...params }) -> MaliciousGetResponse</code>

###### Spam

Types:

- <code><a href="./src/resources/radar/email/security/top/locations/spam.ts">SpamGetResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/locations/spam/{spam}">client.radar.email.security.top.locations.spam.<a href="./src/resources/radar/email/security/top/locations/spam.ts">get</a>(spam, { ...params }) -> SpamGetResponse</code>

###### SPF

Types:

- <code><a href="./src/resources/radar/email/security/top/locations/spf.ts">SPFGetResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/locations/spf/{spf}">client.radar.email.security.top.locations.spf.<a href="./src/resources/radar/email/security/top/locations/spf.ts">get</a>(spf, { ...params }) -> SPFGetResponse</code>

#### Summary

Types:

- <code><a href="./src/resources/radar/email/security/summary.ts">SummaryARCResponse</a></code>
- <code><a href="./src/resources/radar/email/security/summary.ts">SummaryDKIMResponse</a></code>
- <code><a href="./src/resources/radar/email/security/summary.ts">SummaryDMARCResponse</a></code>
- <code><a href="./src/resources/radar/email/security/summary.ts">SummaryMaliciousResponse</a></code>
- <code><a href="./src/resources/radar/email/security/summary.ts">SummarySpamResponse</a></code>
- <code><a href="./src/resources/radar/email/security/summary.ts">SummarySPFResponse</a></code>
- <code><a href="./src/resources/radar/email/security/summary.ts">SummaryThreatCategoryResponse</a></code>

Methods:

- <code title="get /radar/email/security/summary/arc">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">arc</a>({ ...params }) -> SummaryARCResponse</code>
- <code title="get /radar/email/security/summary/dkim">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">dkim</a>({ ...params }) -> SummaryDKIMResponse</code>
- <code title="get /radar/email/security/summary/dmarc">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">dmarc</a>({ ...params }) -> SummaryDMARCResponse</code>
- <code title="get /radar/email/security/summary/malicious">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">malicious</a>({ ...params }) -> SummaryMaliciousResponse</code>
- <code title="get /radar/email/security/summary/spam">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">spam</a>({ ...params }) -> SummarySpamResponse</code>
- <code title="get /radar/email/security/summary/spf">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">spf</a>({ ...params }) -> SummarySPFResponse</code>
- <code title="get /radar/email/security/summary/threat_category">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">threatCategory</a>({ ...params }) -> SummaryThreatCategoryResponse</code>

#### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/email/security/timeseries-groups.ts">TimeseriesGroupARCResponse</a></code>
- <code><a href="./src/resources/radar/email/security/timeseries-groups.ts">TimeseriesGroupDKIMResponse</a></code>

Methods:

- <code title="get /radar/email/security/timeseries_groups/arc">client.radar.email.security.timeseriesGroups.<a href="./src/resources/radar/email/security/timeseries-groups.ts">arc</a>({ ...params }) -> TimeseriesGroupARCResponse</code>
- <code title="get /radar/email/security/timeseries_groups/dkim">client.radar.email.security.timeseriesGroups.<a href="./src/resources/radar/email/security/timeseries-groups.ts">dkim</a>({ ...params }) -> TimeseriesGroupDKIMResponse</code>

## Attacks

### Layer3

Types:

- <code><a href="./src/resources/radar/attacks/layer3/layer3.ts">Layer3TimeseriesResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/timeseries">client.radar.attacks.layer3.<a href="./src/resources/radar/attacks/layer3/layer3.ts">timeseries</a>({ ...params }) -> Layer3TimeseriesResponse</code>

#### Summary

Types:

- <code><a href="./src/resources/radar/attacks/layer3/summary.ts">SummaryBitrateResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/summary.ts">SummaryDurationResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/summary.ts">SummaryGetResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/summary.ts">SummaryIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/summary.ts">SummaryProtocolResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/summary.ts">SummaryVectorResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/summary/bitrate">client.radar.attacks.layer3.summary.<a href="./src/resources/radar/attacks/layer3/summary.ts">bitrate</a>({ ...params }) -> SummaryBitrateResponse</code>
- <code title="get /radar/attacks/layer3/summary/duration">client.radar.attacks.layer3.summary.<a href="./src/resources/radar/attacks/layer3/summary.ts">duration</a>({ ...params }) -> SummaryDurationResponse</code>
- <code title="get /radar/attacks/layer3/summary">client.radar.attacks.layer3.summary.<a href="./src/resources/radar/attacks/layer3/summary.ts">get</a>({ ...params }) -> SummaryGetResponse</code>
- <code title="get /radar/attacks/layer3/summary/ip_version">client.radar.attacks.layer3.summary.<a href="./src/resources/radar/attacks/layer3/summary.ts">ipVersion</a>({ ...params }) -> SummaryIPVersionResponse</code>
- <code title="get /radar/attacks/layer3/summary/protocol">client.radar.attacks.layer3.summary.<a href="./src/resources/radar/attacks/layer3/summary.ts">protocol</a>({ ...params }) -> SummaryProtocolResponse</code>
- <code title="get /radar/attacks/layer3/summary/vector">client.radar.attacks.layer3.summary.<a href="./src/resources/radar/attacks/layer3/summary.ts">vector</a>({ ...params }) -> SummaryVectorResponse</code>

#### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">TimeseriesGroupBitrateResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">TimeseriesGroupDurationResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">TimeseriesGroupGetResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">TimeseriesGroupIndustryResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">TimeseriesGroupIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">TimeseriesGroupProtocolResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">TimeseriesGroupVectorResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">TimeseriesGroupVerticalResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/timeseries_groups/bitrate">client.radar.attacks.layer3.timeseriesGroups.<a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">bitrate</a>({ ...params }) -> TimeseriesGroupBitrateResponse</code>
- <code title="get /radar/attacks/layer3/timeseries_groups/duration">client.radar.attacks.layer3.timeseriesGroups.<a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">duration</a>({ ...params }) -> TimeseriesGroupDurationResponse</code>
- <code title="get /radar/attacks/layer3/timeseries_groups">client.radar.attacks.layer3.timeseriesGroups.<a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">get</a>({ ...params }) -> TimeseriesGroupGetResponse</code>
- <code title="get /radar/attacks/layer3/timeseries_groups/industry">client.radar.attacks.layer3.timeseriesGroups.<a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">industry</a>({ ...params }) -> TimeseriesGroupIndustryResponse</code>
- <code title="get /radar/attacks/layer3/timeseries_groups/ip_version">client.radar.attacks.layer3.timeseriesGroups.<a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">ipVersion</a>({ ...params }) -> TimeseriesGroupIPVersionResponse</code>
- <code title="get /radar/attacks/layer3/timeseries_groups/protocol">client.radar.attacks.layer3.timeseriesGroups.<a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">protocol</a>({ ...params }) -> TimeseriesGroupProtocolResponse</code>
- <code title="get /radar/attacks/layer3/timeseries_groups/vector">client.radar.attacks.layer3.timeseriesGroups.<a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">vector</a>({ ...params }) -> TimeseriesGroupVectorResponse</code>
- <code title="get /radar/attacks/layer3/timeseries_groups/vertical">client.radar.attacks.layer3.timeseriesGroups.<a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">vertical</a>({ ...params }) -> TimeseriesGroupVerticalResponse</code>

#### Top

Types:

- <code><a href="./src/resources/radar/attacks/layer3/top/top.ts">TopAttacksResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/top/top.ts">TopIndustryResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/top/top.ts">TopVerticalResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/top/attacks">client.radar.attacks.layer3.top.<a href="./src/resources/radar/attacks/layer3/top/top.ts">attacks</a>({ ...params }) -> TopAttacksResponse</code>
- <code title="get /radar/attacks/layer3/top/industry">client.radar.attacks.layer3.top.<a href="./src/resources/radar/attacks/layer3/top/top.ts">industry</a>({ ...params }) -> TopIndustryResponse</code>
- <code title="get /radar/attacks/layer3/top/vertical">client.radar.attacks.layer3.top.<a href="./src/resources/radar/attacks/layer3/top/top.ts">vertical</a>({ ...params }) -> TopVerticalResponse</code>

##### Locations

Types:

- <code><a href="./src/resources/radar/attacks/layer3/top/locations.ts">LocationOriginResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/top/locations.ts">LocationTargetResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/top/locations/origin">client.radar.attacks.layer3.top.locations.<a href="./src/resources/radar/attacks/layer3/top/locations.ts">origin</a>({ ...params }) -> LocationOriginResponse</code>
- <code title="get /radar/attacks/layer3/top/locations/target">client.radar.attacks.layer3.top.locations.<a href="./src/resources/radar/attacks/layer3/top/locations.ts">target</a>({ ...params }) -> LocationTargetResponse</code>

### Layer7

Types:

- <code><a href="./src/resources/radar/attacks/layer7/layer7.ts">Layer7TimeseriesResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/timeseries">client.radar.attacks.layer7.<a href="./src/resources/radar/attacks/layer7/layer7.ts">timeseries</a>({ ...params }) -> Layer7TimeseriesResponse</code>

#### Summary

Types:

- <code><a href="./src/resources/radar/attacks/layer7/summary.ts">SummaryGetResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/summary.ts">SummaryHTTPMethodResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/summary.ts">SummaryHTTPVersionResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/summary.ts">SummaryIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/summary.ts">SummaryManagedRulesResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/summary.ts">SummaryMitigationProductResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/summary">client.radar.attacks.layer7.summary.<a href="./src/resources/radar/attacks/layer7/summary.ts">get</a>({ ...params }) -> SummaryGetResponse</code>
- <code title="get /radar/attacks/layer7/summary/http_method">client.radar.attacks.layer7.summary.<a href="./src/resources/radar/attacks/layer7/summary.ts">httpMethod</a>({ ...params }) -> SummaryHTTPMethodResponse</code>
- <code title="get /radar/attacks/layer7/summary/http_version">client.radar.attacks.layer7.summary.<a href="./src/resources/radar/attacks/layer7/summary.ts">httpVersion</a>({ ...params }) -> SummaryHTTPVersionResponse</code>
- <code title="get /radar/attacks/layer7/summary/ip_version">client.radar.attacks.layer7.summary.<a href="./src/resources/radar/attacks/layer7/summary.ts">ipVersion</a>({ ...params }) -> SummaryIPVersionResponse</code>
- <code title="get /radar/attacks/layer7/summary/managed_rules">client.radar.attacks.layer7.summary.<a href="./src/resources/radar/attacks/layer7/summary.ts">managedRules</a>({ ...params }) -> SummaryManagedRulesResponse</code>
- <code title="get /radar/attacks/layer7/summary/mitigation_product">client.radar.attacks.layer7.summary.<a href="./src/resources/radar/attacks/layer7/summary.ts">mitigationProduct</a>({ ...params }) -> SummaryMitigationProductResponse</code>

#### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">TimeseriesGroupGetResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">TimeseriesGroupHTTPMethodResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">TimeseriesGroupHTTPVersionResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">TimeseriesGroupIndustryResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">TimeseriesGroupIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">TimeseriesGroupManagedRulesResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">TimeseriesGroupMitigationProductResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">TimeseriesGroupVerticalResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/timeseries_groups">client.radar.attacks.layer7.timeseriesGroups.<a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">get</a>({ ...params }) -> TimeseriesGroupGetResponse</code>
- <code title="get /radar/attacks/layer7/timeseries_groups/http_method">client.radar.attacks.layer7.timeseriesGroups.<a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">httpMethod</a>({ ...params }) -> TimeseriesGroupHTTPMethodResponse</code>
- <code title="get /radar/attacks/layer7/timeseries_groups/http_version">client.radar.attacks.layer7.timeseriesGroups.<a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">httpVersion</a>({ ...params }) -> TimeseriesGroupHTTPVersionResponse</code>
- <code title="get /radar/attacks/layer7/timeseries_groups/industry">client.radar.attacks.layer7.timeseriesGroups.<a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">industry</a>({ ...params }) -> TimeseriesGroupIndustryResponse</code>
- <code title="get /radar/attacks/layer7/timeseries_groups/ip_version">client.radar.attacks.layer7.timeseriesGroups.<a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">ipVersion</a>({ ...params }) -> TimeseriesGroupIPVersionResponse</code>
- <code title="get /radar/attacks/layer7/timeseries_groups/managed_rules">client.radar.attacks.layer7.timeseriesGroups.<a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">managedRules</a>({ ...params }) -> TimeseriesGroupManagedRulesResponse</code>
- <code title="get /radar/attacks/layer7/timeseries_groups/mitigation_product">client.radar.attacks.layer7.timeseriesGroups.<a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">mitigationProduct</a>({ ...params }) -> TimeseriesGroupMitigationProductResponse</code>
- <code title="get /radar/attacks/layer7/timeseries_groups/vertical">client.radar.attacks.layer7.timeseriesGroups.<a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">vertical</a>({ ...params }) -> TimeseriesGroupVerticalResponse</code>

#### Top

Types:

- <code><a href="./src/resources/radar/attacks/layer7/top/top.ts">TopAttacksResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/top/top.ts">TopIndustryResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/top/top.ts">TopVerticalResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/top/attacks">client.radar.attacks.layer7.top.<a href="./src/resources/radar/attacks/layer7/top/top.ts">attacks</a>({ ...params }) -> TopAttacksResponse</code>
- <code title="get /radar/attacks/layer7/top/industry">client.radar.attacks.layer7.top.<a href="./src/resources/radar/attacks/layer7/top/top.ts">industry</a>({ ...params }) -> TopIndustryResponse</code>
- <code title="get /radar/attacks/layer7/top/vertical">client.radar.attacks.layer7.top.<a href="./src/resources/radar/attacks/layer7/top/top.ts">vertical</a>({ ...params }) -> TopVerticalResponse</code>

##### Locations

Types:

- <code><a href="./src/resources/radar/attacks/layer7/top/locations.ts">LocationOriginResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/top/locations.ts">LocationTargetResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/top/locations/origin">client.radar.attacks.layer7.top.locations.<a href="./src/resources/radar/attacks/layer7/top/locations.ts">origin</a>({ ...params }) -> LocationOriginResponse</code>
- <code title="get /radar/attacks/layer7/top/locations/target">client.radar.attacks.layer7.top.locations.<a href="./src/resources/radar/attacks/layer7/top/locations.ts">target</a>({ ...params }) -> LocationTargetResponse</code>

##### Ases

Types:

- <code><a href="./src/resources/radar/attacks/layer7/top/ases.ts">AseOriginResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/top/ases/origin">client.radar.attacks.layer7.top.ases.<a href="./src/resources/radar/attacks/layer7/top/ases.ts">origin</a>({ ...params }) -> AseOriginResponse</code>

## Emails

### Security

#### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/emails/security/timeseries-groups.ts">TimeseriesGroupDMARCResponse</a></code>
- <code><a href="./src/resources/radar/emails/security/timeseries-groups.ts">TimeseriesGroupMaliciousResponse</a></code>
- <code><a href="./src/resources/radar/emails/security/timeseries-groups.ts">TimeseriesGroupSpamResponse</a></code>
- <code><a href="./src/resources/radar/emails/security/timeseries-groups.ts">TimeseriesGroupSPFResponse</a></code>
- <code><a href="./src/resources/radar/emails/security/timeseries-groups.ts">TimeseriesGroupThreatCategoryResponse</a></code>

Methods:

- <code title="get /radar/email/security/timeseries_groups/dmarc">client.radar.emails.security.timeseriesGroups.<a href="./src/resources/radar/emails/security/timeseries-groups.ts">dmarc</a>({ ...params }) -> TimeseriesGroupDMARCResponse</code>
- <code title="get /radar/email/security/timeseries_groups/malicious">client.radar.emails.security.timeseriesGroups.<a href="./src/resources/radar/emails/security/timeseries-groups.ts">malicious</a>({ ...params }) -> TimeseriesGroupMaliciousResponse</code>
- <code title="get /radar/email/security/timeseries_groups/spam">client.radar.emails.security.timeseriesGroups.<a href="./src/resources/radar/emails/security/timeseries-groups.ts">spam</a>({ ...params }) -> TimeseriesGroupSpamResponse</code>
- <code title="get /radar/email/security/timeseries_groups/spf">client.radar.emails.security.timeseriesGroups.<a href="./src/resources/radar/emails/security/timeseries-groups.ts">spf</a>({ ...params }) -> TimeseriesGroupSPFResponse</code>
- <code title="get /radar/email/security/timeseries_groups/threat_category">client.radar.emails.security.timeseriesGroups.<a href="./src/resources/radar/emails/security/timeseries-groups.ts">threatCategory</a>({ ...params }) -> TimeseriesGroupThreatCategoryResponse</code>

## Entities

Types:

- <code><a href="./src/resources/radar/entities/entities.ts">EntityGetResponse</a></code>

Methods:

- <code title="get /radar/entities/ip">client.radar.entities.<a href="./src/resources/radar/entities/entities.ts">get</a>({ ...params }) -> EntityGetResponse</code>

### ASNs

Types:

- <code><a href="./src/resources/radar/entities/asns.ts">ASNListResponse</a></code>
- <code><a href="./src/resources/radar/entities/asns.ts">ASNGetResponse</a></code>
- <code><a href="./src/resources/radar/entities/asns.ts">ASNIPResponse</a></code>
- <code><a href="./src/resources/radar/entities/asns.ts">ASNRelResponse</a></code>

Methods:

- <code title="get /radar/entities/asns">client.radar.entities.asns.<a href="./src/resources/radar/entities/asns.ts">list</a>({ ...params }) -> ASNListResponse</code>
- <code title="get /radar/entities/asns/{asn}">client.radar.entities.asns.<a href="./src/resources/radar/entities/asns.ts">get</a>(asn, { ...params }) -> ASNGetResponse</code>
- <code title="get /radar/entities/asns/ip">client.radar.entities.asns.<a href="./src/resources/radar/entities/asns.ts">ip</a>({ ...params }) -> ASNIPResponse</code>
- <code title="get /radar/entities/asns/{asn}/rel">client.radar.entities.asns.<a href="./src/resources/radar/entities/asns.ts">rel</a>(asn, { ...params }) -> ASNRelResponse</code>

### Locations

Types:

- <code><a href="./src/resources/radar/entities/locations.ts">LocationListResponse</a></code>
- <code><a href="./src/resources/radar/entities/locations.ts">LocationGetResponse</a></code>

Methods:

- <code title="get /radar/entities/locations">client.radar.entities.locations.<a href="./src/resources/radar/entities/locations.ts">list</a>({ ...params }) -> LocationListResponse</code>
- <code title="get /radar/entities/locations/{location}">client.radar.entities.locations.<a href="./src/resources/radar/entities/locations.ts">get</a>(location, { ...params }) -> LocationGetResponse</code>

## HTTP

### Top

Types:

- <code><a href="./src/resources/radar/http/top.ts">TopBrowserFamiliesResponse</a></code>
- <code><a href="./src/resources/radar/http/top.ts">TopBrowsersResponse</a></code>

Methods:

- <code title="get /radar/http/top/browser_families">client.radar.http.top.<a href="./src/resources/radar/http/top.ts">browserFamilies</a>({ ...params }) -> TopBrowserFamiliesResponse</code>
- <code title="get /radar/http/top/browsers">client.radar.http.top.<a href="./src/resources/radar/http/top.ts">browsers</a>({ ...params }) -> TopBrowsersResponse</code>

### Locations

Types:

- <code><a href="./src/resources/radar/http/locations/locations.ts">LocationGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations">client.radar.http.locations.<a href="./src/resources/radar/http/locations/locations.ts">get</a>({ ...params }) -> LocationGetResponse</code>

#### BotClass

Types:

- <code><a href="./src/resources/radar/http/locations/bot-class.ts">BotClassGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/bot_class/{bot_class}">client.radar.http.locations.botClass.<a href="./src/resources/radar/http/locations/bot-class.ts">get</a>(botClass, { ...params }) -> BotClassGetResponse</code>

#### DeviceType

Types:

- <code><a href="./src/resources/radar/http/locations/device-type.ts">DeviceTypeGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/device_type/{device_type}">client.radar.http.locations.deviceType.<a href="./src/resources/radar/http/locations/device-type.ts">get</a>(deviceType, { ...params }) -> DeviceTypeGetResponse</code>

#### HTTPProtocol

Types:

- <code><a href="./src/resources/radar/http/locations/http-protocol.ts">HTTPProtocolGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/http_protocol/{http_protocol}">client.radar.http.locations.httpProtocol.<a href="./src/resources/radar/http/locations/http-protocol.ts">get</a>(httpProtocol, { ...params }) -> HTTPProtocolGetResponse</code>

#### HTTPMethod

Types:

- <code><a href="./src/resources/radar/http/locations/http-method.ts">HTTPMethodGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/http_version/{http_version}">client.radar.http.locations.httpMethod.<a href="./src/resources/radar/http/locations/http-method.ts">get</a>(httpVersion, { ...params }) -> HTTPMethodGetResponse</code>

#### IPVersion

Types:

- <code><a href="./src/resources/radar/http/locations/ip-version.ts">IPVersionGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/ip_version/{ip_version}">client.radar.http.locations.ipVersion.<a href="./src/resources/radar/http/locations/ip-version.ts">get</a>(ipVersion, { ...params }) -> IPVersionGetResponse</code>

#### OS

Types:

- <code><a href="./src/resources/radar/http/locations/os.ts">OSGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/os/{os}">client.radar.http.locations.os.<a href="./src/resources/radar/http/locations/os.ts">get</a>(os, { ...params }) -> OSGetResponse</code>

#### TLSVersion

Types:

- <code><a href="./src/resources/radar/http/locations/tls-version.ts">TLSVersionGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/tls_version/{tls_version}">client.radar.http.locations.tlsVersion.<a href="./src/resources/radar/http/locations/tls-version.ts">get</a>(tlsVersion, { ...params }) -> TLSVersionGetResponse</code>

### Ases

Types:

- <code><a href="./src/resources/radar/http/ases/ases.ts">AseGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases">client.radar.http.ases.<a href="./src/resources/radar/http/ases/ases.ts">get</a>({ ...params }) -> AseGetResponse</code>

#### BotClass

Types:

- <code><a href="./src/resources/radar/http/ases/bot-class.ts">BotClassGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/bot_class/{bot_class}">client.radar.http.ases.botClass.<a href="./src/resources/radar/http/ases/bot-class.ts">get</a>(botClass, { ...params }) -> BotClassGetResponse</code>

#### DeviceType

Types:

- <code><a href="./src/resources/radar/http/ases/device-type.ts">DeviceTypeGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/device_type/{device_type}">client.radar.http.ases.deviceType.<a href="./src/resources/radar/http/ases/device-type.ts">get</a>(deviceType, { ...params }) -> DeviceTypeGetResponse</code>

#### HTTPProtocol

Types:

- <code><a href="./src/resources/radar/http/ases/http-protocol.ts">HTTPProtocolGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/http_protocol/{http_protocol}">client.radar.http.ases.httpProtocol.<a href="./src/resources/radar/http/ases/http-protocol.ts">get</a>(httpProtocol, { ...params }) -> HTTPProtocolGetResponse</code>

#### HTTPMethod

Types:

- <code><a href="./src/resources/radar/http/ases/http-method.ts">HTTPMethodGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/http_version/{http_version}">client.radar.http.ases.httpMethod.<a href="./src/resources/radar/http/ases/http-method.ts">get</a>(httpVersion, { ...params }) -> HTTPMethodGetResponse</code>

#### IPVersion

Types:

- <code><a href="./src/resources/radar/http/ases/ip-version.ts">IPVersionGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/ip_version/{ip_version}">client.radar.http.ases.ipVersion.<a href="./src/resources/radar/http/ases/ip-version.ts">get</a>(ipVersion, { ...params }) -> IPVersionGetResponse</code>

#### OS

Types:

- <code><a href="./src/resources/radar/http/ases/os.ts">OSGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/os/{os}">client.radar.http.ases.os.<a href="./src/resources/radar/http/ases/os.ts">get</a>(os, { ...params }) -> OSGetResponse</code>

#### TLSVersion

Types:

- <code><a href="./src/resources/radar/http/ases/tls-version.ts">TLSVersionGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/tls_version/{tls_version}">client.radar.http.ases.tlsVersion.<a href="./src/resources/radar/http/ases/tls-version.ts">get</a>(tlsVersion, { ...params }) -> TLSVersionGetResponse</code>

### Summary

Types:

- <code><a href="./src/resources/radar/http/summary.ts">SummaryBotClassResponse</a></code>
- <code><a href="./src/resources/radar/http/summary.ts">SummaryDeviceTypeResponse</a></code>
- <code><a href="./src/resources/radar/http/summary.ts">SummaryHTTPProtocolResponse</a></code>
- <code><a href="./src/resources/radar/http/summary.ts">SummaryHTTPVersionResponse</a></code>
- <code><a href="./src/resources/radar/http/summary.ts">SummaryIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/http/summary.ts">SummaryOSResponse</a></code>
- <code><a href="./src/resources/radar/http/summary.ts">SummaryTLSVersionResponse</a></code>

Methods:

- <code title="get /radar/http/summary/bot_class">client.radar.http.summary.<a href="./src/resources/radar/http/summary.ts">botClass</a>({ ...params }) -> SummaryBotClassResponse</code>
- <code title="get /radar/http/summary/device_type">client.radar.http.summary.<a href="./src/resources/radar/http/summary.ts">deviceType</a>({ ...params }) -> SummaryDeviceTypeResponse</code>
- <code title="get /radar/http/summary/http_protocol">client.radar.http.summary.<a href="./src/resources/radar/http/summary.ts">httpProtocol</a>({ ...params }) -> SummaryHTTPProtocolResponse</code>
- <code title="get /radar/http/summary/http_version">client.radar.http.summary.<a href="./src/resources/radar/http/summary.ts">httpVersion</a>({ ...params }) -> SummaryHTTPVersionResponse</code>
- <code title="get /radar/http/summary/ip_version">client.radar.http.summary.<a href="./src/resources/radar/http/summary.ts">ipVersion</a>({ ...params }) -> SummaryIPVersionResponse</code>
- <code title="get /radar/http/summary/os">client.radar.http.summary.<a href="./src/resources/radar/http/summary.ts">os</a>({ ...params }) -> SummaryOSResponse</code>
- <code title="get /radar/http/summary/tls_version">client.radar.http.summary.<a href="./src/resources/radar/http/summary.ts">tlsVersion</a>({ ...params }) -> SummaryTLSVersionResponse</code>

### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/http/timeseries-groups.ts">TimeseriesGroupBotClassResponse</a></code>
- <code><a href="./src/resources/radar/http/timeseries-groups.ts">TimeseriesGroupBrowserResponse</a></code>
- <code><a href="./src/resources/radar/http/timeseries-groups.ts">TimeseriesGroupBrowserFamilyResponse</a></code>
- <code><a href="./src/resources/radar/http/timeseries-groups.ts">TimeseriesGroupDeviceTypeResponse</a></code>
- <code><a href="./src/resources/radar/http/timeseries-groups.ts">TimeseriesGroupHTTPProtocolResponse</a></code>
- <code><a href="./src/resources/radar/http/timeseries-groups.ts">TimeseriesGroupHTTPVersionResponse</a></code>
- <code><a href="./src/resources/radar/http/timeseries-groups.ts">TimeseriesGroupIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/http/timeseries-groups.ts">TimeseriesGroupOSResponse</a></code>
- <code><a href="./src/resources/radar/http/timeseries-groups.ts">TimeseriesGroupTLSVersionResponse</a></code>

Methods:

- <code title="get /radar/http/timeseries_groups/bot_class">client.radar.http.timeseriesGroups.<a href="./src/resources/radar/http/timeseries-groups.ts">botClass</a>({ ...params }) -> TimeseriesGroupBotClassResponse</code>
- <code title="get /radar/http/timeseries_groups/browser">client.radar.http.timeseriesGroups.<a href="./src/resources/radar/http/timeseries-groups.ts">browser</a>({ ...params }) -> TimeseriesGroupBrowserResponse</code>
- <code title="get /radar/http/timeseries_groups/browser_family">client.radar.http.timeseriesGroups.<a href="./src/resources/radar/http/timeseries-groups.ts">browserFamily</a>({ ...params }) -> TimeseriesGroupBrowserFamilyResponse</code>
- <code title="get /radar/http/timeseries_groups/device_type">client.radar.http.timeseriesGroups.<a href="./src/resources/radar/http/timeseries-groups.ts">deviceType</a>({ ...params }) -> TimeseriesGroupDeviceTypeResponse</code>
- <code title="get /radar/http/timeseries_groups/http_protocol">client.radar.http.timeseriesGroups.<a href="./src/resources/radar/http/timeseries-groups.ts">httpProtocol</a>({ ...params }) -> TimeseriesGroupHTTPProtocolResponse</code>
- <code title="get /radar/http/timeseries_groups/http_version">client.radar.http.timeseriesGroups.<a href="./src/resources/radar/http/timeseries-groups.ts">httpVersion</a>({ ...params }) -> TimeseriesGroupHTTPVersionResponse</code>
- <code title="get /radar/http/timeseries_groups/ip_version">client.radar.http.timeseriesGroups.<a href="./src/resources/radar/http/timeseries-groups.ts">ipVersion</a>({ ...params }) -> TimeseriesGroupIPVersionResponse</code>
- <code title="get /radar/http/timeseries_groups/os">client.radar.http.timeseriesGroups.<a href="./src/resources/radar/http/timeseries-groups.ts">os</a>({ ...params }) -> TimeseriesGroupOSResponse</code>
- <code title="get /radar/http/timeseries_groups/tls_version">client.radar.http.timeseriesGroups.<a href="./src/resources/radar/http/timeseries-groups.ts">tlsVersion</a>({ ...params }) -> TimeseriesGroupTLSVersionResponse</code>

## Quality

### IQI

Types:

- <code><a href="./src/resources/radar/quality/iqi.ts">IQISummaryResponse</a></code>
- <code><a href="./src/resources/radar/quality/iqi.ts">IQITimeseriesGroupsResponse</a></code>

Methods:

- <code title="get /radar/quality/iqi/summary">client.radar.quality.iqi.<a href="./src/resources/radar/quality/iqi.ts">summary</a>({ ...params }) -> IQISummaryResponse</code>
- <code title="get /radar/quality/iqi/timeseries_groups">client.radar.quality.iqi.<a href="./src/resources/radar/quality/iqi.ts">timeseriesGroups</a>({ ...params }) -> IQITimeseriesGroupsResponse</code>

### Speed

Types:

- <code><a href="./src/resources/radar/quality/speed/speed.ts">SpeedHistogramResponse</a></code>
- <code><a href="./src/resources/radar/quality/speed/speed.ts">SpeedSummaryResponse</a></code>

Methods:

- <code title="get /radar/quality/speed/histogram">client.radar.quality.speed.<a href="./src/resources/radar/quality/speed/speed.ts">histogram</a>({ ...params }) -> SpeedHistogramResponse</code>
- <code title="get /radar/quality/speed/summary">client.radar.quality.speed.<a href="./src/resources/radar/quality/speed/speed.ts">summary</a>({ ...params }) -> SpeedSummaryResponse</code>

#### Top

Types:

- <code><a href="./src/resources/radar/quality/speed/top.ts">TopAsesResponse</a></code>
- <code><a href="./src/resources/radar/quality/speed/top.ts">TopLocationsResponse</a></code>

Methods:

- <code title="get /radar/quality/speed/top/ases">client.radar.quality.speed.top.<a href="./src/resources/radar/quality/speed/top.ts">ases</a>({ ...params }) -> TopAsesResponse</code>
- <code title="get /radar/quality/speed/top/locations">client.radar.quality.speed.top.<a href="./src/resources/radar/quality/speed/top.ts">locations</a>({ ...params }) -> TopLocationsResponse</code>

## Ranking

Types:

- <code><a href="./src/resources/radar/ranking/ranking.ts">RankingTimeseriesGroupsResponse</a></code>
- <code><a href="./src/resources/radar/ranking/ranking.ts">RankingTopResponse</a></code>

Methods:

- <code title="get /radar/ranking/timeseries_groups">client.radar.ranking.<a href="./src/resources/radar/ranking/ranking.ts">timeseriesGroups</a>({ ...params }) -> RankingTimeseriesGroupsResponse</code>
- <code title="get /radar/ranking/top">client.radar.ranking.<a href="./src/resources/radar/ranking/ranking.ts">top</a>({ ...params }) -> RankingTopResponse</code>

### Domain

Types:

- <code><a href="./src/resources/radar/ranking/domain.ts">DomainGetResponse</a></code>

Methods:

- <code title="get /radar/ranking/domain/{domain}">client.radar.ranking.domain.<a href="./src/resources/radar/ranking/domain.ts">get</a>(domain, { ...params }) -> DomainGetResponse</code>

## TrafficAnomalies

Types:

- <code><a href="./src/resources/radar/traffic-anomalies/traffic-anomalies.ts">TrafficAnomalyGetResponse</a></code>

Methods:

- <code title="get /radar/traffic_anomalies">client.radar.trafficAnomalies.<a href="./src/resources/radar/traffic-anomalies/traffic-anomalies.ts">get</a>({ ...params }) -> TrafficAnomalyGetResponse</code>

### Locations

Types:

- <code><a href="./src/resources/radar/traffic-anomalies/locations.ts">LocationGetResponse</a></code>

Methods:

- <code title="get /radar/traffic_anomalies/locations">client.radar.trafficAnomalies.locations.<a href="./src/resources/radar/traffic-anomalies/locations.ts">get</a>({ ...params }) -> LocationGetResponse</code>

# BotManagement

Types:

- <code><a href="./src/resources/bot-management.ts">BotManagementUpdateResponse</a></code>
- <code><a href="./src/resources/bot-management.ts">BotManagementGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/bot_management">client.botManagement.<a href="./src/resources/bot-management.ts">update</a>(zoneId, { ...params }) -> BotManagementUpdateResponse</code>
- <code title="get /zones/{zone_id}/bot_management">client.botManagement.<a href="./src/resources/bot-management.ts">get</a>(zoneId) -> BotManagementGetResponse</code>

# OriginPostQuantumEncryption

Types:

- <code><a href="./src/resources/origin-post-quantum-encryption.ts">OriginPostQuantumEncryptionUpdateResponse</a></code>
- <code><a href="./src/resources/origin-post-quantum-encryption.ts">OriginPostQuantumEncryptionGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/cache/origin_post_quantum_encryption">client.originPostQuantumEncryption.<a href="./src/resources/origin-post-quantum-encryption.ts">update</a>(zoneId, { ...params }) -> OriginPostQuantumEncryptionUpdateResponse</code>
- <code title="get /zones/{zone_id}/cache/origin_post_quantum_encryption">client.originPostQuantumEncryption.<a href="./src/resources/origin-post-quantum-encryption.ts">get</a>(zoneId) -> OriginPostQuantumEncryptionGetResponse</code>

# Firewall

## WAF

### Packages

#### Groups

Types:

- <code><a href="./src/resources/firewall/waf/packages/groups.ts">GroupListResponse</a></code>
- <code><a href="./src/resources/firewall/waf/packages/groups.ts">GroupEditResponse</a></code>
- <code><a href="./src/resources/firewall/waf/packages/groups.ts">GroupGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/groups">client.firewall.waf.packages.groups.<a href="./src/resources/firewall/waf/packages/groups.ts">list</a>(zoneId, packageId, { ...params }) -> GroupListResponsesV4PagePaginationArray</code>
- <code title="patch /zones/{zone_id}/firewall/waf/packages/{package_id}/groups/{group_id}">client.firewall.waf.packages.groups.<a href="./src/resources/firewall/waf/packages/groups.ts">edit</a>(zoneId, packageId, groupId, { ...params }) -> GroupEditResponse</code>
- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/groups/{group_id}">client.firewall.waf.packages.groups.<a href="./src/resources/firewall/waf/packages/groups.ts">get</a>(zoneId, packageId, groupId) -> GroupGetResponse</code>

#### Rules

Types:

- <code><a href="./src/resources/firewall/waf/packages/rules.ts">RuleEditResponse</a></code>
- <code><a href="./src/resources/firewall/waf/packages/rules.ts">RuleGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{rule_id}">client.firewall.waf.packages.rules.<a href="./src/resources/firewall/waf/packages/rules.ts">edit</a>(zoneId, packageId, ruleId, { ...params }) -> RuleEditResponse</code>
- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{rule_id}">client.firewall.waf.packages.rules.<a href="./src/resources/firewall/waf/packages/rules.ts">get</a>(zoneId, packageId, ruleId) -> RuleGetResponse</code>

# Speed

Types:

- <code><a href="./src/resources/speed/speed.ts">SpeedDeleteResponse</a></code>
- <code><a href="./src/resources/speed/speed.ts">SpeedScheduleGetResponse</a></code>
- <code><a href="./src/resources/speed/speed.ts">SpeedTrendsListResponse</a></code>

Methods:

- <code title="delete /zones/{zone_id}/speed_api/schedule/{url}">client.speed.<a href="./src/resources/speed/speed.ts">delete</a>(zoneId, url, { ...params }) -> SpeedDeleteResponse</code>
- <code title="get /zones/{zone_id}/speed_api/schedule/{url}">client.speed.<a href="./src/resources/speed/speed.ts">scheduleGet</a>(zoneId, url, { ...params }) -> SpeedScheduleGetResponse</code>
- <code title="get /zones/{zone_id}/speed_api/pages/{url}/trend">client.speed.<a href="./src/resources/speed/speed.ts">trendsList</a>(zoneId, url, { ...params }) -> SpeedTrendsListResponse</code>

## Tests

Types:

- <code><a href="./src/resources/speed/tests.ts">TestCreateResponse</a></code>
- <code><a href="./src/resources/speed/tests.ts">TestListResponse</a></code>
- <code><a href="./src/resources/speed/tests.ts">TestDeleteResponse</a></code>
- <code><a href="./src/resources/speed/tests.ts">TestGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/speed_api/pages/{url}/tests">client.speed.tests.<a href="./src/resources/speed/tests.ts">create</a>(zoneId, url, { ...params }) -> TestCreateResponse</code>
- <code title="get /zones/{zone_id}/speed_api/pages/{url}/tests">client.speed.tests.<a href="./src/resources/speed/tests.ts">list</a>(zoneId, url, { ...params }) -> TestListResponse</code>
- <code title="delete /zones/{zone_id}/speed_api/pages/{url}/tests">client.speed.tests.<a href="./src/resources/speed/tests.ts">delete</a>(zoneId, url, { ...params }) -> TestDeleteResponse</code>
- <code title="get /zones/{zone_id}/speed_api/pages/{url}/tests/{test_id}">client.speed.tests.<a href="./src/resources/speed/tests.ts">get</a>(zoneId, url, testId) -> TestGetResponse</code>

## Schedule

Types:

- <code><a href="./src/resources/speed/schedule.ts">ScheduleCreateResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/speed_api/schedule/{url}">client.speed.schedule.<a href="./src/resources/speed/schedule.ts">create</a>(zoneId, url, { ...params }) -> ScheduleCreateResponse</code>

## Availabilities

Types:

- <code><a href="./src/resources/speed/availabilities.ts">AvailabilityListResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/speed_api/availabilities">client.speed.availabilities.<a href="./src/resources/speed/availabilities.ts">list</a>(zoneId) -> AvailabilityListResponse</code>

## Pages

Types:

- <code><a href="./src/resources/speed/pages.ts">PageListResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/speed_api/pages">client.speed.pages.<a href="./src/resources/speed/pages.ts">list</a>(zoneId) -> PageListResponse</code>

# DcvDelegation

## UUID

Types:

- <code><a href="./src/resources/dcv-delegation/uuid.ts">UUIDGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/dcv_delegation/uuid">client.dcvDelegation.uuid.<a href="./src/resources/dcv-delegation/uuid.ts">get</a>(zoneId) -> UUIDGetResponse</code>

# Hostnames

## Settings

### TLS

Types:

- <code><a href="./src/resources/hostnames/settings/tls.ts">TLSUpdateResponse</a></code>
- <code><a href="./src/resources/hostnames/settings/tls.ts">TLSDeleteResponse</a></code>
- <code><a href="./src/resources/hostnames/settings/tls.ts">TLSGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}">client.hostnames.settings.tls.<a href="./src/resources/hostnames/settings/tls.ts">update</a>(zoneId, settingId, hostname, { ...params }) -> TLSUpdateResponse</code>
- <code title="delete /zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}">client.hostnames.settings.tls.<a href="./src/resources/hostnames/settings/tls.ts">delete</a>(zoneId, settingId, hostname) -> TLSDeleteResponse</code>
- <code title="get /zones/{zone_id}/hostnames/settings/{setting_id}">client.hostnames.settings.tls.<a href="./src/resources/hostnames/settings/tls.ts">get</a>(zoneId, settingId) -> TLSGetResponse | null</code>

# Snippets

Types:

- <code><a href="./src/resources/snippets/snippets.ts">SnippetUpdateResponse</a></code>
- <code><a href="./src/resources/snippets/snippets.ts">SnippetListResponse</a></code>
- <code><a href="./src/resources/snippets/snippets.ts">SnippetDeleteResponse</a></code>
- <code><a href="./src/resources/snippets/snippets.ts">SnippetGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_identifier}/snippets/{snippet_name}">client.snippets.<a href="./src/resources/snippets/snippets.ts">update</a>(zoneIdentifier, snippetName, { ...params }) -> SnippetUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/snippets">client.snippets.<a href="./src/resources/snippets/snippets.ts">list</a>(zoneIdentifier) -> SnippetListResponse</code>
- <code title="delete /zones/{zone_identifier}/snippets/{snippet_name}">client.snippets.<a href="./src/resources/snippets/snippets.ts">delete</a>(zoneIdentifier, snippetName) -> SnippetDeleteResponse</code>
- <code title="get /zones/{zone_identifier}/snippets/{snippet_name}">client.snippets.<a href="./src/resources/snippets/snippets.ts">get</a>(zoneIdentifier, snippetName) -> SnippetGetResponse</code>

## Content

Methods:

- <code title="get /zones/{zone_identifier}/snippets/{snippet_name}/content">client.snippets.content.<a href="./src/resources/snippets/content.ts">get</a>(zoneIdentifier, snippetName) -> Response</code>

## SnippetRules

Types:

- <code><a href="./src/resources/snippets/snippet-rules.ts">SnippetRuleUpdateResponse</a></code>
- <code><a href="./src/resources/snippets/snippet-rules.ts">SnippetRuleListResponse</a></code>

Methods:

- <code title="put /zones/{zone_identifier}/snippets/snippet_rules">client.snippets.snippetRules.<a href="./src/resources/snippets/snippet-rules.ts">update</a>(zoneIdentifier, { ...params }) -> SnippetRuleUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/snippets/snippet_rules">client.snippets.snippetRules.<a href="./src/resources/snippets/snippet-rules.ts">list</a>(zoneIdentifier) -> SnippetRuleListResponse</code>

# Calls

Types:

- <code><a href="./src/resources/calls.ts">CallCreateResponse</a></code>
- <code><a href="./src/resources/calls.ts">CallUpdateResponse</a></code>
- <code><a href="./src/resources/calls.ts">CallListResponse</a></code>
- <code><a href="./src/resources/calls.ts">CallDeleteResponse</a></code>
- <code><a href="./src/resources/calls.ts">CallGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/calls/apps">client.calls.<a href="./src/resources/calls.ts">create</a>(accountId, { ...params }) -> CallCreateResponse</code>
- <code title="put /accounts/{account_id}/calls/apps/{app_id}">client.calls.<a href="./src/resources/calls.ts">update</a>(accountId, appId, { ...params }) -> CallUpdateResponse</code>
- <code title="get /accounts/{account_id}/calls/apps">client.calls.<a href="./src/resources/calls.ts">list</a>(accountId) -> CallListResponse</code>
- <code title="delete /accounts/{account_id}/calls/apps/{app_id}">client.calls.<a href="./src/resources/calls.ts">delete</a>(accountId, appId) -> CallDeleteResponse</code>
- <code title="get /accounts/{account_id}/calls/apps/{app_id}">client.calls.<a href="./src/resources/calls.ts">get</a>(accountId, appId) -> CallGetResponse</code>

# CloudforceOne

## Requests

Types:

- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">RequestCreateResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">RequestUpdateResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">RequestListResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">RequestDeleteResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">RequestConstantsResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">RequestGetResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">RequestQuotaResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">RequestTypesResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/cloudforce-one/requests/new">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">create</a>(accountIdentifier, { ...params }) -> RequestCreateResponse</code>
- <code title="put /accounts/{account_identifier}/cloudforce-one/requests/{request_identifier}">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">update</a>(accountIdentifier, requestIdentifier, { ...params }) -> RequestUpdateResponse</code>
- <code title="post /accounts/{account_identifier}/cloudforce-one/requests">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">list</a>(accountIdentifier, { ...params }) -> RequestListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_identifier}/cloudforce-one/requests/{request_identifier}">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">delete</a>(accountIdentifier, requestIdentifier) -> RequestDeleteResponse</code>
- <code title="get /accounts/{account_identifier}/cloudforce-one/requests/constants">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">constants</a>(accountIdentifier) -> RequestConstantsResponse</code>
- <code title="get /accounts/{account_identifier}/cloudforce-one/requests/{request_identifier}">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">get</a>(accountIdentifier, requestIdentifier) -> RequestGetResponse</code>
- <code title="get /accounts/{account_identifier}/cloudforce-one/requests/quota">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">quota</a>(accountIdentifier) -> RequestQuotaResponse</code>
- <code title="get /accounts/{account_identifier}/cloudforce-one/requests/types">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">types</a>(accountIdentifier) -> RequestTypesResponse</code>

### Message

Types:

- <code><a href="./src/resources/cloudforce-one/requests/message.ts">MessageCreateResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/message.ts">MessageUpdateResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/message.ts">MessageDeleteResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/message.ts">MessageGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/cloudforce-one/requests/{request_identifier}/message/new">client.cloudforceOne.requests.message.<a href="./src/resources/cloudforce-one/requests/message.ts">create</a>(accountIdentifier, requestIdentifier, { ...params }) -> MessageCreateResponse</code>
- <code title="put /accounts/{account_identifier}/cloudforce-one/requests/{request_identifier}/message/{message_identifer}">client.cloudforceOne.requests.message.<a href="./src/resources/cloudforce-one/requests/message.ts">update</a>(accountIdentifier, requestIdentifier, messageIdentifer, { ...params }) -> MessageUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/cloudforce-one/requests/{request_identifier}/message/{message_identifer}">client.cloudforceOne.requests.message.<a href="./src/resources/cloudforce-one/requests/message.ts">delete</a>(accountIdentifier, requestIdentifier, messageIdentifer) -> MessageDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/cloudforce-one/requests/{request_identifier}/message">client.cloudforceOne.requests.message.<a href="./src/resources/cloudforce-one/requests/message.ts">get</a>(accountIdentifier, requestIdentifier, { ...params }) -> MessageGetResponse</code>

### Priority

Types:

- <code><a href="./src/resources/cloudforce-one/requests/priority.ts">PriorityCreateResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/priority.ts">PriorityUpdateResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/priority.ts">PriorityDeleteResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/priority.ts">PriorityDoSomethingUnknownResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/priority.ts">PriorityGetResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/priority.ts">PriorityQuotaResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/cloudforce-one/requests/priority/new">client.cloudforceOne.requests.priority.<a href="./src/resources/cloudforce-one/requests/priority.ts">create</a>(accountIdentifier, { ...params }) -> PriorityCreateResponse</code>
- <code title="put /accounts/{account_identifier}/cloudforce-one/requests/priority/{priority_identifer}">client.cloudforceOne.requests.priority.<a href="./src/resources/cloudforce-one/requests/priority.ts">update</a>(accountIdentifier, priorityIdentifer, { ...params }) -> PriorityUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/cloudforce-one/requests/priority/{priority_identifer}">client.cloudforceOne.requests.priority.<a href="./src/resources/cloudforce-one/requests/priority.ts">delete</a>(accountIdentifier, priorityIdentifer) -> PriorityDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/cloudforce-one/requests/priority">client.cloudforceOne.requests.priority.<a href="./src/resources/cloudforce-one/requests/priority.ts">doSomethingUnknown</a>(accountIdentifier, { ...params }) -> PriorityDoSomethingUnknownResponse</code>
- <code title="get /accounts/{account_identifier}/cloudforce-one/requests/priority/{priority_identifer}">client.cloudforceOne.requests.priority.<a href="./src/resources/cloudforce-one/requests/priority.ts">get</a>(accountIdentifier, priorityIdentifer) -> PriorityGetResponse</code>
- <code title="get /accounts/{account_identifier}/cloudforce-one/requests/priority/quota">client.cloudforceOne.requests.priority.<a href="./src/resources/cloudforce-one/requests/priority.ts">quota</a>(accountIdentifier) -> PriorityQuotaResponse</code>
