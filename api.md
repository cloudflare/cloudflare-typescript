# Accounts

Types:

- <code><a href="./src/resources/accounts.ts">AccountUpdateResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountListResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}">client.accounts.<a href="./src/resources/accounts.ts">update</a>(accountId, { ...params }) -> AccountUpdateResponse</code>
- <code title="get /accounts">client.accounts.<a href="./src/resources/accounts.ts">list</a>({ ...params }) -> AccountListResponse | null</code>
- <code title="get /accounts/{account_id}">client.accounts.<a href="./src/resources/accounts.ts">get</a>(accountId) -> AccountGetResponse</code>

# Certificates

Types:

- <code><a href="./src/resources/certificates.ts">CertificateDeleteResponse</a></code>
- <code><a href="./src/resources/certificates.ts">CertificateGetResponse</a></code>
- <code><a href="./src/resources/certificates.ts">CertificateOriginCaCreateCertificateResponse</a></code>
- <code><a href="./src/resources/certificates.ts">CertificateOriginCaListCertificatesResponse</a></code>

Methods:

- <code title="delete /certificates/{certificate_id}">client.certificates.<a href="./src/resources/certificates.ts">delete</a>(certificateId) -> CertificateDeleteResponse</code>
- <code title="get /certificates/{certificate_id}">client.certificates.<a href="./src/resources/certificates.ts">get</a>(certificateId) -> CertificateGetResponse</code>
- <code title="post /certificates">client.certificates.<a href="./src/resources/certificates.ts">originCaCreateCertificate</a>({ ...params }) -> CertificateOriginCaCreateCertificateResponse</code>
- <code title="get /certificates">client.certificates.<a href="./src/resources/certificates.ts">originCaListCertificates</a>() -> CertificateOriginCaListCertificatesResponse | null</code>

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
- <code title="get /memberships">client.memberships.<a href="./src/resources/memberships.ts">list</a>({ ...params }) -> MembershipListResponse | null</code>
- <code title="delete /memberships/{membership_id}">client.memberships.<a href="./src/resources/memberships.ts">delete</a>(membershipId) -> MembershipDeleteResponse</code>
- <code title="get /memberships/{membership_id}">client.memberships.<a href="./src/resources/memberships.ts">get</a>(membershipId) -> MembershipGetResponse</code>

# Users

Types:

- <code><a href="./src/resources/users/users.ts">UserUserEditUserResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserUserUserDetailsResponse</a></code>

Methods:

- <code title="patch /user">client.users.<a href="./src/resources/users/users.ts">userEditUser</a>({ ...params }) -> UserUserEditUserResponse</code>
- <code title="get /user">client.users.<a href="./src/resources/users/users.ts">userUserDetails</a>() -> UserUserUserDetailsResponse</code>

## AuditLogs

Types:

- <code><a href="./src/resources/users/audit-logs.ts">AuditLogListResponse</a></code>

Methods:

- <code title="get /user/audit_logs">client.users.auditLogs.<a href="./src/resources/users/audit-logs.ts">list</a>({ ...params }) -> AuditLogListResponse</code>

## Billings

### Histories

Types:

- <code><a href="./src/resources/users/billings/histories.ts">HistoryUserBillingHistoryBillingHistoryDetailsResponse</a></code>

Methods:

- <code title="get /user/billing/history">client.users.billings.histories.<a href="./src/resources/users/billings/histories.ts">userBillingHistoryBillingHistoryDetails</a>({ ...params }) -> HistoryUserBillingHistoryBillingHistoryDetailsResponse | null</code>

### Profiles

Types:

- <code><a href="./src/resources/users/billings/profiles.ts">ProfileUserBillingProfileBillingProfileDetailsResponse</a></code>

Methods:

- <code title="get /user/billing/profile">client.users.billings.profiles.<a href="./src/resources/users/billings/profiles.ts">userBillingProfileBillingProfileDetails</a>() -> ProfileUserBillingProfileBillingProfileDetailsResponse</code>

## Firewalls

### AccessRules

#### Rules

Types:

- <code><a href="./src/resources/users/firewalls/access-rules/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/users/firewalls/access-rules/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/users/firewalls/access-rules/rules.ts">RuleIPAccessRulesForAUserCreateAnIPAccessRuleResponse</a></code>
- <code><a href="./src/resources/users/firewalls/access-rules/rules.ts">RuleIPAccessRulesForAUserListIPAccessRulesResponse</a></code>

Methods:

- <code title="patch /user/firewall/access_rules/rules/{identifier}">client.users.firewalls.accessRules.rules.<a href="./src/resources/users/firewalls/access-rules/rules.ts">update</a>(identifier, { ...params }) -> RuleUpdateResponse | null</code>
- <code title="delete /user/firewall/access_rules/rules/{identifier}">client.users.firewalls.accessRules.rules.<a href="./src/resources/users/firewalls/access-rules/rules.ts">delete</a>(identifier) -> RuleDeleteResponse | null</code>
- <code title="post /user/firewall/access_rules/rules">client.users.firewalls.accessRules.rules.<a href="./src/resources/users/firewalls/access-rules/rules.ts">ipAccessRulesForAUserCreateAnIPAccessRule</a>({ ...params }) -> RuleIPAccessRulesForAUserCreateAnIPAccessRuleResponse | null</code>
- <code title="get /user/firewall/access_rules/rules">client.users.firewalls.accessRules.rules.<a href="./src/resources/users/firewalls/access-rules/rules.ts">ipAccessRulesForAUserListIPAccessRules</a>({ ...params }) -> RuleIPAccessRulesForAUserListIPAccessRulesResponse | null</code>

## Invites

Types:

- <code><a href="./src/resources/users/invites.ts">InviteUpdateResponse</a></code>
- <code><a href="./src/resources/users/invites.ts">InviteGetResponse</a></code>
- <code><a href="./src/resources/users/invites.ts">InviteUserSInvitesListInvitationsResponse</a></code>

Methods:

- <code title="patch /user/invites/{invite_id}">client.users.invites.<a href="./src/resources/users/invites.ts">update</a>(inviteId, { ...params }) -> InviteUpdateResponse</code>
- <code title="get /user/invites/{invite_id}">client.users.invites.<a href="./src/resources/users/invites.ts">get</a>(inviteId) -> InviteGetResponse</code>
- <code title="get /user/invites">client.users.invites.<a href="./src/resources/users/invites.ts">userSInvitesListInvitations</a>() -> InviteUserSInvitesListInvitationsResponse | null</code>

## LoadBalancers

### Monitors

Types:

- <code><a href="./src/resources/users/load-balancers/monitors/monitors.ts">MonitorCreateResponse</a></code>
- <code><a href="./src/resources/users/load-balancers/monitors/monitors.ts">MonitorUpdateResponse</a></code>
- <code><a href="./src/resources/users/load-balancers/monitors/monitors.ts">MonitorListResponse</a></code>
- <code><a href="./src/resources/users/load-balancers/monitors/monitors.ts">MonitorDeleteResponse</a></code>
- <code><a href="./src/resources/users/load-balancers/monitors/monitors.ts">MonitorGetResponse</a></code>

Methods:

- <code title="post /user/load_balancers/monitors">client.users.loadBalancers.monitors.<a href="./src/resources/users/load-balancers/monitors/monitors.ts">create</a>({ ...params }) -> MonitorCreateResponse</code>
- <code title="patch /user/load_balancers/monitors/{monitor_id}">client.users.loadBalancers.monitors.<a href="./src/resources/users/load-balancers/monitors/monitors.ts">update</a>(monitorId, { ...params }) -> MonitorUpdateResponse</code>
- <code title="get /user/load_balancers/monitors">client.users.loadBalancers.monitors.<a href="./src/resources/users/load-balancers/monitors/monitors.ts">list</a>() -> MonitorListResponse | null</code>
- <code title="delete /user/load_balancers/monitors/{monitor_id}">client.users.loadBalancers.monitors.<a href="./src/resources/users/load-balancers/monitors/monitors.ts">delete</a>(monitorId) -> MonitorDeleteResponse</code>
- <code title="get /user/load_balancers/monitors/{monitor_id}">client.users.loadBalancers.monitors.<a href="./src/resources/users/load-balancers/monitors/monitors.ts">get</a>(monitorId) -> MonitorGetResponse</code>

#### Previews

Types:

- <code><a href="./src/resources/users/load-balancers/monitors/previews.ts">PreviewLoadBalancerMonitorsPreviewMonitorResponse</a></code>

Methods:

- <code title="post /user/load_balancers/monitors/{monitor_id}/preview">client.users.loadBalancers.monitors.previews.<a href="./src/resources/users/load-balancers/monitors/previews.ts">loadBalancerMonitorsPreviewMonitor</a>(monitorId, { ...params }) -> PreviewLoadBalancerMonitorsPreviewMonitorResponse</code>

#### References

Types:

- <code><a href="./src/resources/users/load-balancers/monitors/references.ts">ReferenceLoadBalancerMonitorsListMonitorReferencesResponse</a></code>

Methods:

- <code title="get /user/load_balancers/monitors/{monitor_id}/references">client.users.loadBalancers.monitors.references.<a href="./src/resources/users/load-balancers/monitors/references.ts">loadBalancerMonitorsListMonitorReferences</a>(monitorId) -> ReferenceLoadBalancerMonitorsListMonitorReferencesResponse | null</code>

### Pools

Types:

- <code><a href="./src/resources/users/load-balancers/pools/pools.ts">PoolUpdateResponse</a></code>
- <code><a href="./src/resources/users/load-balancers/pools/pools.ts">PoolDeleteResponse</a></code>
- <code><a href="./src/resources/users/load-balancers/pools/pools.ts">PoolGetResponse</a></code>
- <code><a href="./src/resources/users/load-balancers/pools/pools.ts">PoolLoadBalancerPoolsCreatePoolResponse</a></code>
- <code><a href="./src/resources/users/load-balancers/pools/pools.ts">PoolLoadBalancerPoolsListPoolsResponse</a></code>
- <code><a href="./src/resources/users/load-balancers/pools/pools.ts">PoolLoadBalancerPoolsPatchPoolsResponse</a></code>

Methods:

- <code title="patch /user/load_balancers/pools/{pool_id}">client.users.loadBalancers.pools.<a href="./src/resources/users/load-balancers/pools/pools.ts">update</a>(poolId, { ...params }) -> PoolUpdateResponse</code>
- <code title="delete /user/load_balancers/pools/{pool_id}">client.users.loadBalancers.pools.<a href="./src/resources/users/load-balancers/pools/pools.ts">delete</a>(poolId) -> PoolDeleteResponse</code>
- <code title="get /user/load_balancers/pools/{pool_id}">client.users.loadBalancers.pools.<a href="./src/resources/users/load-balancers/pools/pools.ts">get</a>(poolId) -> PoolGetResponse</code>
- <code title="post /user/load_balancers/pools">client.users.loadBalancers.pools.<a href="./src/resources/users/load-balancers/pools/pools.ts">loadBalancerPoolsCreatePool</a>({ ...params }) -> PoolLoadBalancerPoolsCreatePoolResponse</code>
- <code title="get /user/load_balancers/pools">client.users.loadBalancers.pools.<a href="./src/resources/users/load-balancers/pools/pools.ts">loadBalancerPoolsListPools</a>({ ...params }) -> PoolLoadBalancerPoolsListPoolsResponse | null</code>
- <code title="patch /user/load_balancers/pools">client.users.loadBalancers.pools.<a href="./src/resources/users/load-balancers/pools/pools.ts">loadBalancerPoolsPatchPools</a>({ ...params }) -> PoolLoadBalancerPoolsPatchPoolsResponse | null</code>

#### Health

Types:

- <code><a href="./src/resources/users/load-balancers/pools/health.ts">HealthLoadBalancerPoolsPoolHealthDetailsResponse</a></code>

Methods:

- <code title="get /user/load_balancers/pools/{pool_id}/health">client.users.loadBalancers.pools.health.<a href="./src/resources/users/load-balancers/pools/health.ts">loadBalancerPoolsPoolHealthDetails</a>(poolId) -> HealthLoadBalancerPoolsPoolHealthDetailsResponse</code>

#### Previews

Types:

- <code><a href="./src/resources/users/load-balancers/pools/previews.ts">PreviewLoadBalancerPoolsPreviewPoolResponse</a></code>

Methods:

- <code title="post /user/load_balancers/pools/{pool_id}/preview">client.users.loadBalancers.pools.previews.<a href="./src/resources/users/load-balancers/pools/previews.ts">loadBalancerPoolsPreviewPool</a>(poolId, { ...params }) -> PreviewLoadBalancerPoolsPreviewPoolResponse</code>

#### References

Types:

- <code><a href="./src/resources/users/load-balancers/pools/references.ts">ReferenceLoadBalancerPoolsListPoolReferencesResponse</a></code>

Methods:

- <code title="get /user/load_balancers/pools/{pool_id}/references">client.users.loadBalancers.pools.references.<a href="./src/resources/users/load-balancers/pools/references.ts">loadBalancerPoolsListPoolReferences</a>(poolId) -> ReferenceLoadBalancerPoolsListPoolReferencesResponse | null</code>

### Previews

Types:

- <code><a href="./src/resources/users/load-balancers/previews.ts">PreviewGetResponse</a></code>

Methods:

- <code title="get /user/load_balancers/preview/{preview_id}">client.users.loadBalancers.previews.<a href="./src/resources/users/load-balancers/previews.ts">get</a>(previewId) -> PreviewGetResponse</code>

## LoadBalancingAnalytics

### Events

Types:

- <code><a href="./src/resources/users/load-balancing-analytics/events.ts">EventLoadBalancerHealthcheckEventsListHealthcheckEventsResponse</a></code>

Methods:

- <code title="get /user/load_balancing_analytics/events">client.users.loadBalancingAnalytics.events.<a href="./src/resources/users/load-balancing-analytics/events.ts">loadBalancerHealthcheckEventsListHealthcheckEvents</a>({ ...params }) -> EventLoadBalancerHealthcheckEventsListHealthcheckEventsResponse | null</code>

## Organizations

Types:

- <code><a href="./src/resources/users/organizations.ts">OrganizationDeleteResponse</a></code>
- <code><a href="./src/resources/users/organizations.ts">OrganizationGetResponse</a></code>
- <code><a href="./src/resources/users/organizations.ts">OrganizationUserSOrganizationsListOrganizationsResponse</a></code>

Methods:

- <code title="delete /user/organizations/{organization_id}">client.users.organizations.<a href="./src/resources/users/organizations.ts">delete</a>(organizationId) -> OrganizationDeleteResponse</code>
- <code title="get /user/organizations/{organization_id}">client.users.organizations.<a href="./src/resources/users/organizations.ts">get</a>(organizationId) -> OrganizationGetResponse</code>
- <code title="get /user/organizations">client.users.organizations.<a href="./src/resources/users/organizations.ts">userSOrganizationsListOrganizations</a>({ ...params }) -> OrganizationUserSOrganizationsListOrganizationsResponse | null</code>

## Subscriptions

Types:

- <code><a href="./src/resources/users/subscriptions.ts">SubscriptionUpdateResponse</a></code>
- <code><a href="./src/resources/users/subscriptions.ts">SubscriptionDeleteResponse</a></code>
- <code><a href="./src/resources/users/subscriptions.ts">SubscriptionUserSubscriptionGetUserSubscriptionsResponse</a></code>

Methods:

- <code title="put /user/subscriptions/{identifier}">client.users.subscriptions.<a href="./src/resources/users/subscriptions.ts">update</a>(identifier, { ...params }) -> SubscriptionUpdateResponse</code>
- <code title="delete /user/subscriptions/{identifier}">client.users.subscriptions.<a href="./src/resources/users/subscriptions.ts">delete</a>(identifier) -> SubscriptionDeleteResponse</code>
- <code title="get /user/subscriptions">client.users.subscriptions.<a href="./src/resources/users/subscriptions.ts">userSubscriptionGetUserSubscriptions</a>() -> SubscriptionUserSubscriptionGetUserSubscriptionsResponse | null</code>

## Tokens

Types:

- <code><a href="./src/resources/users/tokens/tokens.ts">TokenUpdateResponse</a></code>
- <code><a href="./src/resources/users/tokens/tokens.ts">TokenDeleteResponse</a></code>
- <code><a href="./src/resources/users/tokens/tokens.ts">TokenGetResponse</a></code>
- <code><a href="./src/resources/users/tokens/tokens.ts">TokenUserAPITokensCreateTokenResponse</a></code>
- <code><a href="./src/resources/users/tokens/tokens.ts">TokenUserAPITokensListTokensResponse</a></code>

Methods:

- <code title="put /user/tokens/{token_id}">client.users.tokens.<a href="./src/resources/users/tokens/tokens.ts">update</a>(tokenId, { ...params }) -> TokenUpdateResponse</code>
- <code title="delete /user/tokens/{token_id}">client.users.tokens.<a href="./src/resources/users/tokens/tokens.ts">delete</a>(tokenId) -> TokenDeleteResponse | null</code>
- <code title="get /user/tokens/{token_id}">client.users.tokens.<a href="./src/resources/users/tokens/tokens.ts">get</a>(tokenId) -> TokenGetResponse</code>
- <code title="post /user/tokens">client.users.tokens.<a href="./src/resources/users/tokens/tokens.ts">userAPITokensCreateToken</a>({ ...params }) -> TokenUserAPITokensCreateTokenResponse</code>
- <code title="get /user/tokens">client.users.tokens.<a href="./src/resources/users/tokens/tokens.ts">userAPITokensListTokens</a>({ ...params }) -> TokenUserAPITokensListTokensResponse | null</code>

### PermissionGroups

Types:

- <code><a href="./src/resources/users/tokens/permission-groups.ts">PermissionGroupPermissionGroupsListPermissionGroupsResponse</a></code>

Methods:

- <code title="get /user/tokens/permission_groups">client.users.tokens.permissionGroups.<a href="./src/resources/users/tokens/permission-groups.ts">permissionGroupsListPermissionGroups</a>() -> PermissionGroupPermissionGroupsListPermissionGroupsResponse | null</code>

### Verifies

Types:

- <code><a href="./src/resources/users/tokens/verifies.ts">VerifyUserAPITokensVerifyTokenResponse</a></code>

Methods:

- <code title="get /user/tokens/verify">client.users.tokens.verifies.<a href="./src/resources/users/tokens/verifies.ts">userAPITokensVerifyToken</a>() -> VerifyUserAPITokensVerifyTokenResponse</code>

### Values

Types:

- <code><a href="./src/resources/users/tokens/values.ts">ValueUserAPITokensRollTokenResponse</a></code>

Methods:

- <code title="put /user/tokens/{token_id}/value">client.users.tokens.values.<a href="./src/resources/users/tokens/values.ts">userAPITokensRollToken</a>(tokenId, { ...params }) -> ValueUserAPITokensRollTokenResponse</code>

# Zones

Types:

- <code><a href="./src/resources/zones/zones.ts">ZoneCreateResponse</a></code>
- <code><a href="./src/resources/zones/zones.ts">ZoneUpdateResponse</a></code>
- <code><a href="./src/resources/zones/zones.ts">ZoneListResponse</a></code>
- <code><a href="./src/resources/zones/zones.ts">ZoneDeleteResponse</a></code>
- <code><a href="./src/resources/zones/zones.ts">ZoneGetResponse</a></code>

Methods:

- <code title="post /zones">client.zones.<a href="./src/resources/zones/zones.ts">create</a>({ ...params }) -> ZoneCreateResponse</code>
- <code title="patch /zones/{zone_id}">client.zones.<a href="./src/resources/zones/zones.ts">update</a>(zoneId, { ...params }) -> ZoneUpdateResponse</code>
- <code title="get /zones">client.zones.<a href="./src/resources/zones/zones.ts">list</a>({ ...params }) -> ZoneListResponse</code>
- <code title="delete /zones/{zone_id}">client.zones.<a href="./src/resources/zones/zones.ts">delete</a>(zoneId) -> ZoneDeleteResponse | null</code>
- <code title="get /zones/{zone_id}">client.zones.<a href="./src/resources/zones/zones.ts">get</a>(zoneId) -> ZoneGetResponse</code>

## Hold

Types:

- <code><a href="./src/resources/zones/hold.ts">HoldEnforceResponse</a></code>
- <code><a href="./src/resources/zones/hold.ts">HoldGetResponse</a></code>
- <code><a href="./src/resources/zones/hold.ts">HoldRemoveResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/hold">client.zones.hold.<a href="./src/resources/zones/hold.ts">enforce</a>(zoneId, { ...params }) -> HoldEnforceResponse</code>
- <code title="get /zones/{zone_id}/hold">client.zones.hold.<a href="./src/resources/zones/hold.ts">get</a>(zoneId) -> HoldGetResponse</code>
- <code title="delete /zones/{zone_id}/hold">client.zones.hold.<a href="./src/resources/zones/hold.ts">remove</a>(zoneId, { ...params }) -> HoldRemoveResponse</code>

# AI

Types:

- <code><a href="./src/resources/ai.ts">AIRunResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/ai/run/{model_name}">client.ai.<a href="./src/resources/ai.ts">run</a>(accountId, modelName, { ...params }) -> AIRunResponse</code>

# LoadBalancers

Types:

- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancerCreateResponse</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancerUpdateResponse</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancerListResponse</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancerDeleteResponse</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancerGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/load_balancers">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">create</a>(zoneId, { ...params }) -> LoadBalancerCreateResponse</code>
- <code title="patch /zones/{zone_id}/load_balancers/{load_balancer_id}">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">update</a>(zoneId, loadBalancerId, { ...params }) -> LoadBalancerUpdateResponse</code>
- <code title="get /zones/{zone_id}/load_balancers">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">list</a>(zoneId) -> LoadBalancerListResponse | null</code>
- <code title="delete /zones/{zone_id}/load_balancers/{load_balancer_id}">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">delete</a>(zoneId, loadBalancerId) -> LoadBalancerDeleteResponse</code>
- <code title="get /zones/{zone_id}/load_balancers/{load_balancer_id}">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">get</a>(zoneId, loadBalancerId) -> LoadBalancerGetResponse</code>

## Monitors

Types:

- <code><a href="./src/resources/load-balancers/monitors/monitors.ts">MonitorCreateResponse</a></code>
- <code><a href="./src/resources/load-balancers/monitors/monitors.ts">MonitorUpdateResponse</a></code>
- <code><a href="./src/resources/load-balancers/monitors/monitors.ts">MonitorListResponse</a></code>
- <code><a href="./src/resources/load-balancers/monitors/monitors.ts">MonitorDeleteResponse</a></code>
- <code><a href="./src/resources/load-balancers/monitors/monitors.ts">MonitorGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/load_balancers/monitors">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">create</a>(accountId, { ...params }) -> MonitorCreateResponse</code>
- <code title="patch /accounts/{account_id}/load_balancers/monitors/{monitor_id}">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">update</a>(accountId, monitorId, { ...params }) -> MonitorUpdateResponse</code>
- <code title="get /accounts/{account_id}/load_balancers/monitors">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">list</a>(accountId) -> MonitorListResponse | null</code>
- <code title="delete /accounts/{account_id}/load_balancers/monitors/{monitor_id}">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">delete</a>(accountId, monitorId) -> MonitorDeleteResponse</code>
- <code title="get /accounts/{account_id}/load_balancers/monitors/{monitor_id}">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">get</a>(accountId, monitorId) -> MonitorGetResponse</code>

### Previews

Types:

- <code><a href="./src/resources/load-balancers/monitors/previews.ts">PreviewAccountLoadBalancerMonitorsPreviewMonitorResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/load_balancers/monitors/{monitor_id}/preview">client.loadBalancers.monitors.previews.<a href="./src/resources/load-balancers/monitors/previews.ts">accountLoadBalancerMonitorsPreviewMonitor</a>(accountId, monitorId, { ...params }) -> PreviewAccountLoadBalancerMonitorsPreviewMonitorResponse</code>

### References

Types:

- <code><a href="./src/resources/load-balancers/monitors/references.ts">ReferenceAccountLoadBalancerMonitorsListMonitorReferencesResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/load_balancers/monitors/{monitor_id}/references">client.loadBalancers.monitors.references.<a href="./src/resources/load-balancers/monitors/references.ts">accountLoadBalancerMonitorsListMonitorReferences</a>(accountId, monitorId) -> ReferenceAccountLoadBalancerMonitorsListMonitorReferencesResponse | null</code>

## Pools

Types:

- <code><a href="./src/resources/load-balancers/pools/pools.ts">PoolCreateResponse</a></code>
- <code><a href="./src/resources/load-balancers/pools/pools.ts">PoolUpdateResponse</a></code>
- <code><a href="./src/resources/load-balancers/pools/pools.ts">PoolListResponse</a></code>
- <code><a href="./src/resources/load-balancers/pools/pools.ts">PoolDeleteResponse</a></code>
- <code><a href="./src/resources/load-balancers/pools/pools.ts">PoolGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/load_balancers/pools">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">create</a>(accountId, { ...params }) -> PoolCreateResponse</code>
- <code title="patch /accounts/{account_id}/load_balancers/pools/{pool_id}">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">update</a>(accountId, poolId, { ...params }) -> PoolUpdateResponse</code>
- <code title="get /accounts/{account_id}/load_balancers/pools">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">list</a>(accountId, { ...params }) -> PoolListResponse | null</code>
- <code title="delete /accounts/{account_id}/load_balancers/pools/{pool_id}">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">delete</a>(accountId, poolId) -> PoolDeleteResponse</code>
- <code title="get /accounts/{account_id}/load_balancers/pools/{pool_id}">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">get</a>(accountId, poolId) -> PoolGetResponse</code>

### Health

Types:

- <code><a href="./src/resources/load-balancers/pools/health.ts">HealthGetResponse</a></code>
- <code><a href="./src/resources/load-balancers/pools/health.ts">HealthPreviewResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/load_balancers/pools/{pool_id}/health">client.loadBalancers.pools.health.<a href="./src/resources/load-balancers/pools/health.ts">get</a>(accountId, poolId) -> HealthGetResponse</code>
- <code title="post /accounts/{account_id}/load_balancers/pools/{pool_id}/preview">client.loadBalancers.pools.health.<a href="./src/resources/load-balancers/pools/health.ts">preview</a>(accountId, poolId, { ...params }) -> HealthPreviewResponse</code>

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

- <code><a href="./src/resources/load-balancers/regions.ts">RegionGetResponse</a></code>
- <code><a href="./src/resources/load-balancers/regions.ts">RegionLoadBalancerRegionsListRegionsResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/load_balancers/regions/{region_id}">client.loadBalancers.regions.<a href="./src/resources/load-balancers/regions.ts">get</a>(accountId, regionId) -> RegionGetResponse</code>
- <code title="get /accounts/{account_id}/load_balancers/regions">client.loadBalancers.regions.<a href="./src/resources/load-balancers/regions.ts">loadBalancerRegionsListRegions</a>(accountId, { ...params }) -> RegionLoadBalancerRegionsListRegionsResponse</code>

## Searches

Types:

- <code><a href="./src/resources/load-balancers/searches.ts">SearchListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/load_balancers/search">client.loadBalancers.searches.<a href="./src/resources/load-balancers/searches.ts">list</a>(accountId, { ...params }) -> SearchListResponse | null</code>

# Access

## Apps

Types:

- <code><a href="./src/resources/access/apps/apps.ts">AppCreateResponse</a></code>
- <code><a href="./src/resources/access/apps/apps.ts">AppUpdateResponse</a></code>
- <code><a href="./src/resources/access/apps/apps.ts">AppListResponse</a></code>
- <code><a href="./src/resources/access/apps/apps.ts">AppDeleteResponse</a></code>
- <code><a href="./src/resources/access/apps/apps.ts">AppGetResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/apps">client.access.apps.<a href="./src/resources/access/apps/apps.ts">create</a>(accountOrZone, accountOrZoneId, { ...params }) -> AppCreateResponse</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}">client.access.apps.<a href="./src/resources/access/apps/apps.ts">update</a>(accountOrZone, accountOrZoneId, appId, { ...params }) -> AppUpdateResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps">client.access.apps.<a href="./src/resources/access/apps/apps.ts">list</a>(accountOrZone, accountOrZoneId) -> AppListResponse | null</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}">client.access.apps.<a href="./src/resources/access/apps/apps.ts">delete</a>(accountOrZone, accountOrZoneId, appId) -> AppDeleteResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}">client.access.apps.<a href="./src/resources/access/apps/apps.ts">get</a>(accountOrZone, accountOrZoneId, appId) -> AppGetResponse</code>

### Cas

Types:

- <code><a href="./src/resources/access/apps/cas.ts">CaCreateResponse</a></code>
- <code><a href="./src/resources/access/apps/cas.ts">CaListResponse</a></code>
- <code><a href="./src/resources/access/apps/cas.ts">CaDeleteResponse</a></code>
- <code><a href="./src/resources/access/apps/cas.ts">CaGetResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid}/ca">client.access.apps.cas.<a href="./src/resources/access/apps/cas.ts">create</a>(accountOrZone, accountOrZoneId, uuid) -> CaCreateResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps/ca">client.access.apps.cas.<a href="./src/resources/access/apps/cas.ts">list</a>(accountOrZone, accountOrZoneId) -> CaListResponse | null</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid}/ca">client.access.apps.cas.<a href="./src/resources/access/apps/cas.ts">delete</a>(accountOrZone, accountOrZoneId, uuid) -> CaDeleteResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid}/ca">client.access.apps.cas.<a href="./src/resources/access/apps/cas.ts">get</a>(accountOrZone, accountOrZoneId, uuid) -> CaGetResponse</code>

### RevokeTokens

Types:

- <code><a href="./src/resources/access/apps/revoke-tokens.ts">RevokeTokenAccessApplicationsRevokeServiceTokensResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}/revoke_tokens">client.access.apps.revokeTokens.<a href="./src/resources/access/apps/revoke-tokens.ts">accessApplicationsRevokeServiceTokens</a>(accountOrZone, accountOrZoneId, appId) -> RevokeTokenAccessApplicationsRevokeServiceTokensResponse | null</code>

### UserPolicyChecks

Types:

- <code><a href="./src/resources/access/apps/user-policy-checks.ts">UserPolicyCheckAccessApplicationsTestAccessPoliciesResponse</a></code>

Methods:

- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}/user_policy_checks">client.access.apps.userPolicyChecks.<a href="./src/resources/access/apps/user-policy-checks.ts">accessApplicationsTestAccessPolicies</a>(accountOrZone, accountOrZoneId, appId) -> UserPolicyCheckAccessApplicationsTestAccessPoliciesResponse</code>

### Policies

Types:

- <code><a href="./src/resources/access/apps/policies.ts">PolicyCreateResponse</a></code>
- <code><a href="./src/resources/access/apps/policies.ts">PolicyUpdateResponse</a></code>
- <code><a href="./src/resources/access/apps/policies.ts">PolicyDeleteResponse</a></code>
- <code><a href="./src/resources/access/apps/policies.ts">PolicyAccessPoliciesCreateAnAccessPolicyResponse</a></code>
- <code><a href="./src/resources/access/apps/policies.ts">PolicyAccessPoliciesListAccessPoliciesResponse</a></code>
- <code><a href="./src/resources/access/apps/policies.ts">PolicyGetResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid}/policies">client.access.apps.policies.<a href="./src/resources/access/apps/policies.ts">create</a>(accountOrZone, accountOrZoneId, uuid, { ...params }) -> PolicyCreateResponse</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid1}/policies/{uuid}">client.access.apps.policies.<a href="./src/resources/access/apps/policies.ts">update</a>(accountOrZone, accountOrZoneId, uuid1, uuid, { ...params }) -> PolicyUpdateResponse</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid1}/policies/{uuid}">client.access.apps.policies.<a href="./src/resources/access/apps/policies.ts">delete</a>(accountOrZone, accountOrZoneId, uuid1, uuid) -> PolicyDeleteResponse</code>
- <code title="post /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid}/policies">client.access.apps.policies.<a href="./src/resources/access/apps/policies.ts">accessPoliciesCreateAnAccessPolicy</a>(accountOrZone, accountOrZoneId, uuid, { ...params }) -> PolicyAccessPoliciesCreateAnAccessPolicyResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid}/policies">client.access.apps.policies.<a href="./src/resources/access/apps/policies.ts">accessPoliciesListAccessPolicies</a>(accountOrZone, accountOrZoneId, uuid) -> PolicyAccessPoliciesListAccessPoliciesResponse | null</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid1}/policies/{uuid}">client.access.apps.policies.<a href="./src/resources/access/apps/policies.ts">get</a>(accountOrZone, accountOrZoneId, uuid1, uuid) -> PolicyGetResponse</code>

## Certificates

Types:

- <code><a href="./src/resources/access/certificates/certificates.ts">CertificateUpdateResponse</a></code>
- <code><a href="./src/resources/access/certificates/certificates.ts">CertificateDeleteResponse</a></code>
- <code><a href="./src/resources/access/certificates/certificates.ts">CertificateAccessMTLSAuthenticationAddAnMTLSCertificateResponse</a></code>
- <code><a href="./src/resources/access/certificates/certificates.ts">CertificateAccessMTLSAuthenticationListMTLSCertificatesResponse</a></code>
- <code><a href="./src/resources/access/certificates/certificates.ts">CertificateGetResponse</a></code>

Methods:

- <code title="put /{account_or_zone}/{account_or_zone_id}/access/certificates/{uuid}">client.access.certificates.<a href="./src/resources/access/certificates/certificates.ts">update</a>(accountOrZone, accountOrZoneId, uuid, { ...params }) -> CertificateUpdateResponse</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/certificates/{uuid}">client.access.certificates.<a href="./src/resources/access/certificates/certificates.ts">delete</a>(accountOrZone, accountOrZoneId, uuid) -> CertificateDeleteResponse</code>
- <code title="post /{account_or_zone}/{account_or_zone_id}/access/certificates">client.access.certificates.<a href="./src/resources/access/certificates/certificates.ts">accessMTLSAuthenticationAddAnMTLSCertificate</a>(accountOrZone, accountOrZoneId, { ...params }) -> CertificateAccessMTLSAuthenticationAddAnMTLSCertificateResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/certificates">client.access.certificates.<a href="./src/resources/access/certificates/certificates.ts">accessMTLSAuthenticationListMTLSCertificates</a>(accountOrZone, accountOrZoneId) -> CertificateAccessMTLSAuthenticationListMTLSCertificatesResponse | null</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/certificates/{uuid}">client.access.certificates.<a href="./src/resources/access/certificates/certificates.ts">get</a>(accountOrZone, accountOrZoneId, uuid) -> CertificateGetResponse</code>

### Settings

Types:

- <code><a href="./src/resources/access/certificates/settings.ts">SettingUpdateResponse</a></code>
- <code><a href="./src/resources/access/certificates/settings.ts">SettingListResponse</a></code>

Methods:

- <code title="put /{account_or_zone}/{account_or_zone_id}/access/certificates/settings">client.access.certificates.settings.<a href="./src/resources/access/certificates/settings.ts">update</a>(accountOrZone, accountOrZoneId, { ...params }) -> SettingUpdateResponse | null</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/certificates/settings">client.access.certificates.settings.<a href="./src/resources/access/certificates/settings.ts">list</a>(accountOrZone, accountOrZoneId) -> SettingListResponse | null</code>

## Groups

Types:

- <code><a href="./src/resources/access/groups.ts">GroupUpdateResponse</a></code>
- <code><a href="./src/resources/access/groups.ts">GroupDeleteResponse</a></code>
- <code><a href="./src/resources/access/groups.ts">GroupAccessGroupsCreateAnAccessGroupResponse</a></code>
- <code><a href="./src/resources/access/groups.ts">GroupAccessGroupsListAccessGroupsResponse</a></code>
- <code><a href="./src/resources/access/groups.ts">GroupGetResponse</a></code>

Methods:

- <code title="put /{account_or_zone}/{account_or_zone_id}/access/groups/{uuid}">client.access.groups.<a href="./src/resources/access/groups.ts">update</a>(accountOrZone, accountOrZoneId, uuid, { ...params }) -> GroupUpdateResponse</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/groups/{uuid}">client.access.groups.<a href="./src/resources/access/groups.ts">delete</a>(accountOrZone, accountOrZoneId, uuid) -> GroupDeleteResponse</code>
- <code title="post /{account_or_zone}/{account_or_zone_id}/access/groups">client.access.groups.<a href="./src/resources/access/groups.ts">accessGroupsCreateAnAccessGroup</a>(accountOrZone, accountOrZoneId, { ...params }) -> GroupAccessGroupsCreateAnAccessGroupResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/groups">client.access.groups.<a href="./src/resources/access/groups.ts">accessGroupsListAccessGroups</a>(accountOrZone, accountOrZoneId) -> GroupAccessGroupsListAccessGroupsResponse | null</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/groups/{uuid}">client.access.groups.<a href="./src/resources/access/groups.ts">get</a>(accountOrZone, accountOrZoneId, uuid) -> GroupGetResponse</code>

## IdentityProviders

Types:

- <code><a href="./src/resources/access/identity-providers.ts">IdentityProviderUpdateResponse</a></code>
- <code><a href="./src/resources/access/identity-providers.ts">IdentityProviderDeleteResponse</a></code>
- <code><a href="./src/resources/access/identity-providers.ts">IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse</a></code>
- <code><a href="./src/resources/access/identity-providers.ts">IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse</a></code>
- <code><a href="./src/resources/access/identity-providers.ts">IdentityProviderGetResponse</a></code>

Methods:

- <code title="put /{account_or_zone}/{account_or_zone_id}/access/identity_providers/{uuid}">client.access.identityProviders.<a href="./src/resources/access/identity-providers.ts">update</a>(accountOrZone, accountOrZoneId, uuid, { ...params }) -> IdentityProviderUpdateResponse</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/identity_providers/{uuid}">client.access.identityProviders.<a href="./src/resources/access/identity-providers.ts">delete</a>(accountOrZone, accountOrZoneId, uuid) -> IdentityProviderDeleteResponse</code>
- <code title="post /{account_or_zone}/{account_or_zone_id}/access/identity_providers">client.access.identityProviders.<a href="./src/resources/access/identity-providers.ts">accessIdentityProvidersAddAnAccessIdentityProvider</a>(accountOrZone, accountOrZoneId, { ...params }) -> IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/identity_providers">client.access.identityProviders.<a href="./src/resources/access/identity-providers.ts">accessIdentityProvidersListAccessIdentityProviders</a>(accountOrZone, accountOrZoneId) -> IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse | null</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/identity_providers/{uuid}">client.access.identityProviders.<a href="./src/resources/access/identity-providers.ts">get</a>(accountOrZone, accountOrZoneId, uuid) -> IdentityProviderGetResponse</code>

## Organizations

Types:

- <code><a href="./src/resources/access/organizations/organizations.ts">OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse</a></code>
- <code><a href="./src/resources/access/organizations/organizations.ts">OrganizationZeroTrustOrganizationGetYourZeroTrustOrganizationResponse</a></code>
- <code><a href="./src/resources/access/organizations/organizations.ts">OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/organizations">client.access.organizations.<a href="./src/resources/access/organizations/organizations.ts">zeroTrustOrganizationCreateYourZeroTrustOrganization</a>(accountOrZone, accountOrZoneId, { ...params }) -> OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/organizations">client.access.organizations.<a href="./src/resources/access/organizations/organizations.ts">zeroTrustOrganizationGetYourZeroTrustOrganization</a>(accountOrZone, accountOrZoneId) -> OrganizationZeroTrustOrganizationGetYourZeroTrustOrganizationResponse</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/access/organizations">client.access.organizations.<a href="./src/resources/access/organizations/organizations.ts">zeroTrustOrganizationUpdateYourZeroTrustOrganization</a>(accountOrZone, accountOrZoneId, { ...params }) -> OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse</code>

### RevokeUsers

Types:

- <code><a href="./src/resources/access/organizations/revoke-users.ts">RevokeUserZeroTrustOrganizationRevokeAllAccessTokensForAUserResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/organizations/revoke_user">client.access.organizations.revokeUsers.<a href="./src/resources/access/organizations/revoke-users.ts">zeroTrustOrganizationRevokeAllAccessTokensForAUser</a>(accountOrZone, accountOrZoneId, { ...params }) -> RevokeUserZeroTrustOrganizationRevokeAllAccessTokensForAUserResponse</code>

## ServiceTokens

Types:

- <code><a href="./src/resources/access/service-tokens/service-tokens.ts">ServiceTokenUpdateResponse</a></code>
- <code><a href="./src/resources/access/service-tokens/service-tokens.ts">ServiceTokenDeleteResponse</a></code>
- <code><a href="./src/resources/access/service-tokens/service-tokens.ts">ServiceTokenAccessServiceTokensCreateAServiceTokenResponse</a></code>
- <code><a href="./src/resources/access/service-tokens/service-tokens.ts">ServiceTokenAccessServiceTokensListServiceTokensResponse</a></code>

Methods:

- <code title="put /{account_or_zone}/{account_or_zone_id}/access/service_tokens/{uuid}">client.access.serviceTokens.<a href="./src/resources/access/service-tokens/service-tokens.ts">update</a>(accountOrZone, accountOrZoneId, uuid, { ...params }) -> ServiceTokenUpdateResponse</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/service_tokens/{uuid}">client.access.serviceTokens.<a href="./src/resources/access/service-tokens/service-tokens.ts">delete</a>(accountOrZone, accountOrZoneId, uuid) -> ServiceTokenDeleteResponse</code>
- <code title="post /{account_or_zone}/{account_or_zone_id}/access/service_tokens">client.access.serviceTokens.<a href="./src/resources/access/service-tokens/service-tokens.ts">accessServiceTokensCreateAServiceToken</a>(accountOrZone, accountOrZoneId, { ...params }) -> ServiceTokenAccessServiceTokensCreateAServiceTokenResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/service_tokens">client.access.serviceTokens.<a href="./src/resources/access/service-tokens/service-tokens.ts">accessServiceTokensListServiceTokens</a>(accountOrZone, accountOrZoneId) -> ServiceTokenAccessServiceTokensListServiceTokensResponse | null</code>

### Refreshes

Types:

- <code><a href="./src/resources/access/service-tokens/refreshes.ts">RefreshAccessServiceTokensRefreshAServiceTokenResponse</a></code>

Methods:

- <code title="post /accounts/{identifier}/access/service_tokens/{uuid}/refresh">client.access.serviceTokens.refreshes.<a href="./src/resources/access/service-tokens/refreshes.ts">accessServiceTokensRefreshAServiceToken</a>(identifier, uuid) -> RefreshAccessServiceTokensRefreshAServiceTokenResponse</code>

### Rotates

Types:

- <code><a href="./src/resources/access/service-tokens/rotates.ts">RotateAccessServiceTokensRotateAServiceTokenResponse</a></code>

Methods:

- <code title="post /accounts/{identifier}/access/service_tokens/{uuid}/rotate">client.access.serviceTokens.rotates.<a href="./src/resources/access/service-tokens/rotates.ts">accessServiceTokensRotateAServiceToken</a>(identifier, uuid) -> RotateAccessServiceTokensRotateAServiceTokenResponse</code>

## Bookmarks

Types:

- <code><a href="./src/resources/access/bookmarks.ts">BookmarkUpdateResponse</a></code>
- <code><a href="./src/resources/access/bookmarks.ts">BookmarkDeleteResponse</a></code>
- <code><a href="./src/resources/access/bookmarks.ts">BookmarkAccessBookmarkApplicationsDeprecatedListBookmarkApplicationsResponse</a></code>
- <code><a href="./src/resources/access/bookmarks.ts">BookmarkGetResponse</a></code>

Methods:

- <code title="put /accounts/{identifier}/access/bookmarks/{uuid}">client.access.bookmarks.<a href="./src/resources/access/bookmarks.ts">update</a>(identifier, uuid) -> BookmarkUpdateResponse</code>
- <code title="delete /accounts/{identifier}/access/bookmarks/{uuid}">client.access.bookmarks.<a href="./src/resources/access/bookmarks.ts">delete</a>(identifier, uuid) -> BookmarkDeleteResponse</code>
- <code title="get /accounts/{identifier}/access/bookmarks">client.access.bookmarks.<a href="./src/resources/access/bookmarks.ts">accessBookmarkApplicationsDeprecatedListBookmarkApplications</a>(identifier) -> BookmarkAccessBookmarkApplicationsDeprecatedListBookmarkApplicationsResponse | null</code>
- <code title="get /accounts/{identifier}/access/bookmarks/{uuid}">client.access.bookmarks.<a href="./src/resources/access/bookmarks.ts">get</a>(identifier, uuid) -> BookmarkGetResponse</code>

## Keys

Types:

- <code><a href="./src/resources/access/keys/keys.ts">KeyAccessKeyConfigurationGetTheAccessKeyConfigurationResponse</a></code>
- <code><a href="./src/resources/access/keys/keys.ts">KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/access/keys">client.access.keys.<a href="./src/resources/access/keys/keys.ts">accessKeyConfigurationGetTheAccessKeyConfiguration</a>(identifier) -> KeyAccessKeyConfigurationGetTheAccessKeyConfigurationResponse</code>
- <code title="put /accounts/{identifier}/access/keys">client.access.keys.<a href="./src/resources/access/keys/keys.ts">accessKeyConfigurationUpdateTheAccessKeyConfiguration</a>(identifier, { ...params }) -> KeyAccessKeyConfigurationUpdateTheAccessKeyConfigurationResponse</code>

### Rotates

Types:

- <code><a href="./src/resources/access/keys/rotates.ts">RotateAccessKeyConfigurationRotateAccessKeysResponse</a></code>

Methods:

- <code title="post /accounts/{identifier}/access/keys/rotate">client.access.keys.rotates.<a href="./src/resources/access/keys/rotates.ts">accessKeyConfigurationRotateAccessKeys</a>(identifier) -> RotateAccessKeyConfigurationRotateAccessKeysResponse</code>

## Logs

### AccessRequests

Types:

- <code><a href="./src/resources/access/logs/access-requests.ts">AccessRequestAccessAuthenticationLogsGetAccessAuthenticationLogsResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/access/logs/access_requests">client.access.logs.accessRequests.<a href="./src/resources/access/logs/access-requests.ts">accessAuthenticationLogsGetAccessAuthenticationLogs</a>(identifier) -> AccessRequestAccessAuthenticationLogsGetAccessAuthenticationLogsResponse | null</code>

## Seats

Types:

- <code><a href="./src/resources/access/seats.ts">SeatZeroTrustSeatsUpdateAUserSeatResponse</a></code>

Methods:

- <code title="patch /accounts/{identifier}/access/seats">client.access.seats.<a href="./src/resources/access/seats.ts">zeroTrustSeatsUpdateAUserSeat</a>(identifier, [ ...body ]) -> SeatZeroTrustSeatsUpdateAUserSeatResponse | null</code>

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

- <code><a href="./src/resources/access/users/last-seen-identity.ts">LastSeenIdentityGetResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/access/users/{id}/last_seen_identity">client.access.users.lastSeenIdentity.<a href="./src/resources/access/users/last-seen-identity.ts">get</a>(identifier, id) -> LastSeenIdentityGetResponse</code>

### FailedLogins

Types:

- <code><a href="./src/resources/access/users/failed-logins.ts">FailedLoginZeroTrustUsersGetFailedLoginsResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/access/users/{id}/failed_logins">client.access.users.failedLogins.<a href="./src/resources/access/users/failed-logins.ts">zeroTrustUsersGetFailedLogins</a>(identifier, id) -> FailedLoginZeroTrustUsersGetFailedLoginsResponse | null</code>

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

- <code><a href="./src/resources/access/tags.ts">TagListResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/access/tags">client.access.tags.<a href="./src/resources/access/tags.ts">list</a>(identifier) -> TagListResponse | null</code>

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

# PurgeCaches

Types:

- <code><a href="./src/resources/purge-caches.ts">PurgeCachZonePurgeResponse</a></code>

Methods:

- <code title="post /zones/{identifier}/purge_cache">client.purgeCaches.<a href="./src/resources/purge-caches.ts">zonePurge</a>(identifier, { ...params }) -> PurgeCachZonePurgeResponse | null</code>

# SSLs

## Analyzes

Types:

- <code><a href="./src/resources/ssls/analyzes.ts">AnalyzeAnalyzeCertificateAnalyzeCertificateResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/ssl/analyze">client.ssls.analyzes.<a href="./src/resources/ssls/analyzes.ts">analyzeCertificateAnalyzeCertificate</a>(zoneId, { ...params }) -> AnalyzeAnalyzeCertificateAnalyzeCertificateResponse</code>

## CertificatePacks

Types:

- <code><a href="./src/resources/ssls/certificate-packs/certificate-packs.ts">CertificatePackUpdateResponse</a></code>
- <code><a href="./src/resources/ssls/certificate-packs/certificate-packs.ts">CertificatePackDeleteResponse</a></code>
- <code><a href="./src/resources/ssls/certificate-packs/certificate-packs.ts">CertificatePackCertificatePacksListCertificatePacksResponse</a></code>
- <code><a href="./src/resources/ssls/certificate-packs/certificate-packs.ts">CertificatePackGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}">client.ssls.certificatePacks.<a href="./src/resources/ssls/certificate-packs/certificate-packs.ts">update</a>(zoneId, certificatePackId) -> CertificatePackUpdateResponse</code>
- <code title="delete /zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}">client.ssls.certificatePacks.<a href="./src/resources/ssls/certificate-packs/certificate-packs.ts">delete</a>(zoneId, certificatePackId) -> CertificatePackDeleteResponse</code>
- <code title="get /zones/{zone_id}/ssl/certificate_packs">client.ssls.certificatePacks.<a href="./src/resources/ssls/certificate-packs/certificate-packs.ts">certificatePacksListCertificatePacks</a>(zoneId, { ...params }) -> CertificatePackCertificatePacksListCertificatePacksResponse | null</code>
- <code title="get /zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}">client.ssls.certificatePacks.<a href="./src/resources/ssls/certificate-packs/certificate-packs.ts">get</a>(zoneId, certificatePackId) -> CertificatePackGetResponse</code>

### Orders

Types:

- <code><a href="./src/resources/ssls/certificate-packs/orders.ts">OrderCertificatePacksOrderAdvancedCertificateManagerCertificatePackResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/ssl/certificate_packs/order">client.ssls.certificatePacks.orders.<a href="./src/resources/ssls/certificate-packs/orders.ts">certificatePacksOrderAdvancedCertificateManagerCertificatePack</a>(zoneId, { ...params }) -> OrderCertificatePacksOrderAdvancedCertificateManagerCertificatePackResponse</code>

### Quotas

Types:

- <code><a href="./src/resources/ssls/certificate-packs/quotas.ts">QuotaCertificatePacksGetCertificatePackQuotasResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/ssl/certificate_packs/quota">client.ssls.certificatePacks.quotas.<a href="./src/resources/ssls/certificate-packs/quotas.ts">certificatePacksGetCertificatePackQuotas</a>(zoneId) -> QuotaCertificatePacksGetCertificatePackQuotasResponse</code>

## Recommendations

Types:

- <code><a href="./src/resources/ssls/recommendations.ts">RecommendationListResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/ssl/recommendation">client.ssls.recommendations.<a href="./src/resources/ssls/recommendations.ts">list</a>(zoneIdentifier) -> RecommendationListResponse | null</code>

## Universals

### Settings

Types:

- <code><a href="./src/resources/ssls/universals/settings.ts">SettingUpdateResponse</a></code>
- <code><a href="./src/resources/ssls/universals/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/ssl/universal/settings">client.ssls.universals.settings.<a href="./src/resources/ssls/universals/settings.ts">update</a>(zoneId, { ...params }) -> SettingUpdateResponse</code>
- <code title="get /zones/{zone_id}/ssl/universal/settings">client.ssls.universals.settings.<a href="./src/resources/ssls/universals/settings.ts">get</a>(zoneId) -> SettingGetResponse</code>

## Verifications

Types:

- <code><a href="./src/resources/ssls/verifications.ts">VerificationUpdateResponse</a></code>
- <code><a href="./src/resources/ssls/verifications.ts">VerificationSSLVerificationSSLVerificationDetailsResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/ssl/verification/{certificate_pack_id}">client.ssls.verifications.<a href="./src/resources/ssls/verifications.ts">update</a>(zoneId, certificatePackId, { ...params }) -> VerificationUpdateResponse</code>
- <code title="get /zones/{zone_id}/ssl/verification">client.ssls.verifications.<a href="./src/resources/ssls/verifications.ts">sslVerificationSSLVerificationDetails</a>(zoneId, { ...params }) -> VerificationSSLVerificationSSLVerificationDetailsResponse</code>

# Subscriptions

Types:

- <code><a href="./src/resources/subscriptions.ts">SubscriptionUpdateResponse</a></code>
- <code><a href="./src/resources/subscriptions.ts">SubscriptionDeleteResponse</a></code>
- <code><a href="./src/resources/subscriptions.ts">SubscriptionAccountSubscriptionsCreateSubscriptionResponse</a></code>
- <code><a href="./src/resources/subscriptions.ts">SubscriptionAccountSubscriptionsListSubscriptionsResponse</a></code>
- <code><a href="./src/resources/subscriptions.ts">SubscriptionZoneSubscriptionCreateZoneSubscriptionResponse</a></code>
- <code><a href="./src/resources/subscriptions.ts">SubscriptionZoneSubscriptionUpdateZoneSubscriptionResponse</a></code>
- <code><a href="./src/resources/subscriptions.ts">SubscriptionZoneSubscriptionZoneSubscriptionDetailsResponse</a></code>

Methods:

- <code title="put /accounts/{account_identifier}/subscriptions/{subscription_identifier}">client.subscriptions.<a href="./src/resources/subscriptions.ts">update</a>(accountIdentifier, subscriptionIdentifier, { ...params }) -> SubscriptionUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/subscriptions/{subscription_identifier}">client.subscriptions.<a href="./src/resources/subscriptions.ts">delete</a>(accountIdentifier, subscriptionIdentifier) -> SubscriptionDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/subscriptions">client.subscriptions.<a href="./src/resources/subscriptions.ts">accountSubscriptionsCreateSubscription</a>(accountIdentifier, { ...params }) -> SubscriptionAccountSubscriptionsCreateSubscriptionResponse</code>
- <code title="get /accounts/{account_identifier}/subscriptions">client.subscriptions.<a href="./src/resources/subscriptions.ts">accountSubscriptionsListSubscriptions</a>(accountIdentifier) -> SubscriptionAccountSubscriptionsListSubscriptionsResponse | null</code>
- <code title="post /zones/{identifier}/subscription">client.subscriptions.<a href="./src/resources/subscriptions.ts">zoneSubscriptionCreateZoneSubscription</a>(identifier, { ...params }) -> SubscriptionZoneSubscriptionCreateZoneSubscriptionResponse</code>
- <code title="put /zones/{identifier}/subscription">client.subscriptions.<a href="./src/resources/subscriptions.ts">zoneSubscriptionUpdateZoneSubscription</a>(identifier, { ...params }) -> SubscriptionZoneSubscriptionUpdateZoneSubscriptionResponse</code>
- <code title="get /zones/{identifier}/subscription">client.subscriptions.<a href="./src/resources/subscriptions.ts">zoneSubscriptionZoneSubscriptionDetails</a>(identifier) -> SubscriptionZoneSubscriptionZoneSubscriptionDetailsResponse</code>

# Acms

## TotalTLS

Types:

- <code><a href="./src/resources/acms/total-tls.ts">TotalTLSUpdateResponse</a></code>
- <code><a href="./src/resources/acms/total-tls.ts">TotalTLSGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/acm/total_tls">client.acms.totalTLS.<a href="./src/resources/acms/total-tls.ts">update</a>(zoneId, { ...params }) -> TotalTLSUpdateResponse</code>
- <code title="get /zones/{zone_id}/acm/total_tls">client.acms.totalTLS.<a href="./src/resources/acms/total-tls.ts">get</a>(zoneId) -> TotalTLSGetResponse</code>

# Analytics

## Colo

Types:

- <code><a href="./src/resources/analytics/colo.ts">ColoZoneAnalyticsDeprecatedGetAnalyticsByCoLocationsResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/analytics/colos">client.analytics.colo.<a href="./src/resources/analytics/colo.ts">zoneAnalyticsDeprecatedGetAnalyticsByCoLocations</a>(zoneIdentifier, { ...params }) -> ColoZoneAnalyticsDeprecatedGetAnalyticsByCoLocationsResponse</code>

## Dashboards

Types:

- <code><a href="./src/resources/analytics/dashboards.ts">DashboardZoneAnalyticsDeprecatedGetDashboardResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/analytics/dashboard">client.analytics.dashboards.<a href="./src/resources/analytics/dashboards.ts">zoneAnalyticsDeprecatedGetDashboard</a>(zoneIdentifier, { ...params }) -> DashboardZoneAnalyticsDeprecatedGetDashboardResponse</code>

## Latencies

Types:

- <code><a href="./src/resources/analytics/latencies/latencies.ts">LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/analytics/latency">client.analytics.latencies.<a href="./src/resources/analytics/latencies/latencies.ts">argoAnalyticsForZoneArgoAnalyticsForAZone</a>(zoneId, { ...params }) -> LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneResponse</code>

### Colos

Types:

- <code><a href="./src/resources/analytics/latencies/colos.ts">ColoArgoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPsResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/analytics/latency/colos">client.analytics.latencies.colos.<a href="./src/resources/analytics/latencies/colos.ts">argoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPs</a>(zoneId) -> ColoArgoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPsResponse</code>

# Argo

## SmartRouting

Types:

- <code><a href="./src/resources/argo/smart-routing.ts">SmartRoutingUpdateResponse</a></code>
- <code><a href="./src/resources/argo/smart-routing.ts">SmartRoutingGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/argo/smart_routing">client.argo.smartRouting.<a href="./src/resources/argo/smart-routing.ts">update</a>(zoneId, { ...params }) -> SmartRoutingUpdateResponse</code>
- <code title="get /zones/{zone_id}/argo/smart_routing">client.argo.smartRouting.<a href="./src/resources/argo/smart-routing.ts">get</a>(zoneId) -> SmartRoutingGetResponse</code>

## TieredCaching

Types:

- <code><a href="./src/resources/argo/tiered-caching.ts">TieredCachingTieredCachingGetTieredCachingSettingResponse</a></code>
- <code><a href="./src/resources/argo/tiered-caching.ts">TieredCachingTieredCachingPatchTieredCachingSettingResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/argo/tiered_caching">client.argo.tieredCaching.<a href="./src/resources/argo/tiered-caching.ts">tieredCachingGetTieredCachingSetting</a>(zoneId) -> TieredCachingTieredCachingGetTieredCachingSettingResponse</code>
- <code title="patch /zones/{zone_id}/argo/tiered_caching">client.argo.tieredCaching.<a href="./src/resources/argo/tiered-caching.ts">tieredCachingPatchTieredCachingSetting</a>(zoneId, { ...params }) -> TieredCachingTieredCachingPatchTieredCachingSettingResponse</code>

# AvailablePlans

Types:

- <code><a href="./src/resources/available-plans.ts">AvailablePlanListResponse</a></code>
- <code><a href="./src/resources/available-plans.ts">AvailablePlanGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/available_plans">client.availablePlans.<a href="./src/resources/available-plans.ts">list</a>(zoneIdentifier) -> AvailablePlanListResponse | null</code>
- <code title="get /zones/{zone_identifier}/available_plans/{plan_identifier}">client.availablePlans.<a href="./src/resources/available-plans.ts">get</a>(zoneIdentifier, planIdentifier) -> AvailablePlanGetResponse</code>

# AvailableRatePlans

Types:

- <code><a href="./src/resources/available-rate-plans.ts">AvailableRatePlanZoneRatePlanListAvailableRatePlansResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/available_rate_plans">client.availableRatePlans.<a href="./src/resources/available-rate-plans.ts">zoneRatePlanListAvailableRatePlans</a>(zoneIdentifier) -> AvailableRatePlanZoneRatePlanListAvailableRatePlansResponse | null</code>

# Caches

## CacheReserves

Types:

- <code><a href="./src/resources/caches/cache-reserves.ts">CacheReserveListResponse</a></code>
- <code><a href="./src/resources/caches/cache-reserves.ts">CacheReserveZoneCacheSettingsChangeCacheReserveSettingResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/cache/cache_reserve">client.caches.cacheReserves.<a href="./src/resources/caches/cache-reserves.ts">list</a>(zoneId) -> CacheReserveListResponse</code>
- <code title="patch /zones/{zone_id}/cache/cache_reserve">client.caches.cacheReserves.<a href="./src/resources/caches/cache-reserves.ts">zoneCacheSettingsChangeCacheReserveSetting</a>(zoneId, { ...params }) -> CacheReserveZoneCacheSettingsChangeCacheReserveSettingResponse</code>

## TieredCacheSmartTopologyEnables

Types:

- <code><a href="./src/resources/caches/tiered-cache-smart-topology-enables.ts">TieredCacheSmartTopologyEnableDeleteResponse</a></code>
- <code><a href="./src/resources/caches/tiered-cache-smart-topology-enables.ts">TieredCacheSmartTopologyEnableSmartTieredCacheGetSmartTieredCacheSettingResponse</a></code>
- <code><a href="./src/resources/caches/tiered-cache-smart-topology-enables.ts">TieredCacheSmartTopologyEnableSmartTieredCachePatchSmartTieredCacheSettingResponse</a></code>

Methods:

- <code title="delete /zones/{zone_id}/cache/tiered_cache_smart_topology_enable">client.caches.tieredCacheSmartTopologyEnables.<a href="./src/resources/caches/tiered-cache-smart-topology-enables.ts">delete</a>(zoneId) -> TieredCacheSmartTopologyEnableDeleteResponse</code>
- <code title="get /zones/{zone_id}/cache/tiered_cache_smart_topology_enable">client.caches.tieredCacheSmartTopologyEnables.<a href="./src/resources/caches/tiered-cache-smart-topology-enables.ts">smartTieredCacheGetSmartTieredCacheSetting</a>(zoneId) -> TieredCacheSmartTopologyEnableSmartTieredCacheGetSmartTieredCacheSettingResponse</code>
- <code title="patch /zones/{zone_id}/cache/tiered_cache_smart_topology_enable">client.caches.tieredCacheSmartTopologyEnables.<a href="./src/resources/caches/tiered-cache-smart-topology-enables.ts">smartTieredCachePatchSmartTieredCacheSetting</a>(zoneId, { ...params }) -> TieredCacheSmartTopologyEnableSmartTieredCachePatchSmartTieredCacheSettingResponse</code>

## Variants

Types:

- <code><a href="./src/resources/caches/variants.ts">VariantListResponse</a></code>
- <code><a href="./src/resources/caches/variants.ts">VariantDeleteResponse</a></code>
- <code><a href="./src/resources/caches/variants.ts">VariantZoneCacheSettingsChangeVariantsSettingResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/cache/variants">client.caches.variants.<a href="./src/resources/caches/variants.ts">list</a>(zoneId) -> VariantListResponse</code>
- <code title="delete /zones/{zone_id}/cache/variants">client.caches.variants.<a href="./src/resources/caches/variants.ts">delete</a>(zoneId) -> VariantDeleteResponse</code>
- <code title="patch /zones/{zone_id}/cache/variants">client.caches.variants.<a href="./src/resources/caches/variants.ts">zoneCacheSettingsChangeVariantsSetting</a>(zoneId, { ...params }) -> VariantZoneCacheSettingsChangeVariantsSettingResponse</code>

# CertificateAuthorities

## HostnameAssociations

Types:

- <code><a href="./src/resources/certificate-authorities/hostname-associations.ts">HostnameAssociationClientCertificateForAZoneListHostnameAssociationsResponse</a></code>
- <code><a href="./src/resources/certificate-authorities/hostname-associations.ts">HostnameAssociationClientCertificateForAZonePutHostnameAssociationsResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/certificate_authorities/hostname_associations">client.certificateAuthorities.hostnameAssociations.<a href="./src/resources/certificate-authorities/hostname-associations.ts">clientCertificateForAZoneListHostnameAssociations</a>(zoneId, { ...params }) -> HostnameAssociationClientCertificateForAZoneListHostnameAssociationsResponse</code>
- <code title="put /zones/{zone_id}/certificate_authorities/hostname_associations">client.certificateAuthorities.hostnameAssociations.<a href="./src/resources/certificate-authorities/hostname-associations.ts">clientCertificateForAZonePutHostnameAssociations</a>(zoneId, { ...params }) -> HostnameAssociationClientCertificateForAZonePutHostnameAssociationsResponse</code>

# ClientCertificates

Types:

- <code><a href="./src/resources/client-certificates.ts">ClientCertificateUpdateResponse</a></code>
- <code><a href="./src/resources/client-certificates.ts">ClientCertificateDeleteResponse</a></code>
- <code><a href="./src/resources/client-certificates.ts">ClientCertificateClientCertificateForAZoneCreateClientCertificateResponse</a></code>
- <code><a href="./src/resources/client-certificates.ts">ClientCertificateClientCertificateForAZoneListClientCertificatesResponse</a></code>
- <code><a href="./src/resources/client-certificates.ts">ClientCertificateGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/client_certificates/{client_certificate_id}">client.clientCertificates.<a href="./src/resources/client-certificates.ts">update</a>(zoneId, clientCertificateId) -> ClientCertificateUpdateResponse</code>
- <code title="delete /zones/{zone_id}/client_certificates/{client_certificate_id}">client.clientCertificates.<a href="./src/resources/client-certificates.ts">delete</a>(zoneId, clientCertificateId) -> ClientCertificateDeleteResponse</code>
- <code title="post /zones/{zone_id}/client_certificates">client.clientCertificates.<a href="./src/resources/client-certificates.ts">clientCertificateForAZoneCreateClientCertificate</a>(zoneId, { ...params }) -> ClientCertificateClientCertificateForAZoneCreateClientCertificateResponse</code>
- <code title="get /zones/{zone_id}/client_certificates">client.clientCertificates.<a href="./src/resources/client-certificates.ts">clientCertificateForAZoneListClientCertificates</a>(zoneId, { ...params }) -> ClientCertificateClientCertificateForAZoneListClientCertificatesResponse | null</code>
- <code title="get /zones/{zone_id}/client_certificates/{client_certificate_id}">client.clientCertificates.<a href="./src/resources/client-certificates.ts">get</a>(zoneId, clientCertificateId) -> ClientCertificateGetResponse</code>

# CustomCertificates

Types:

- <code><a href="./src/resources/custom-certificates/custom-certificates.ts">CustomCertificateCreateResponse</a></code>
- <code><a href="./src/resources/custom-certificates/custom-certificates.ts">CustomCertificateUpdateResponse</a></code>
- <code><a href="./src/resources/custom-certificates/custom-certificates.ts">CustomCertificateListResponse</a></code>
- <code><a href="./src/resources/custom-certificates/custom-certificates.ts">CustomCertificateDeleteResponse</a></code>
- <code><a href="./src/resources/custom-certificates/custom-certificates.ts">CustomCertificateGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/custom_certificates">client.customCertificates.<a href="./src/resources/custom-certificates/custom-certificates.ts">create</a>(zoneId, { ...params }) -> CustomCertificateCreateResponse</code>
- <code title="patch /zones/{zone_id}/custom_certificates/{custom_certificate_id}">client.customCertificates.<a href="./src/resources/custom-certificates/custom-certificates.ts">update</a>(zoneId, customCertificateId, { ...params }) -> CustomCertificateUpdateResponse</code>
- <code title="get /zones/{zone_id}/custom_certificates">client.customCertificates.<a href="./src/resources/custom-certificates/custom-certificates.ts">list</a>(zoneId, { ...params }) -> CustomCertificateListResponse | null</code>
- <code title="delete /zones/{zone_id}/custom_certificates/{custom_certificate_id}">client.customCertificates.<a href="./src/resources/custom-certificates/custom-certificates.ts">delete</a>(zoneId, customCertificateId) -> CustomCertificateDeleteResponse</code>
- <code title="get /zones/{zone_id}/custom_certificates/{custom_certificate_id}">client.customCertificates.<a href="./src/resources/custom-certificates/custom-certificates.ts">get</a>(zoneId, customCertificateId) -> CustomCertificateGetResponse</code>

## Prioritizes

Types:

- <code><a href="./src/resources/custom-certificates/prioritizes.ts">PrioritizeCustomSSLForAZoneRePrioritizeSSLCertificatesResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/custom_certificates/prioritize">client.customCertificates.prioritizes.<a href="./src/resources/custom-certificates/prioritizes.ts">customSSLForAZoneRePrioritizeSSLCertificates</a>(zoneId, { ...params }) -> PrioritizeCustomSSLForAZoneRePrioritizeSSLCertificatesResponse | null</code>

# CustomHostnames

Types:

- <code><a href="./src/resources/custom-hostnames/custom-hostnames.ts">CustomHostnameUpdateResponse</a></code>
- <code><a href="./src/resources/custom-hostnames/custom-hostnames.ts">CustomHostnameDeleteResponse</a></code>
- <code><a href="./src/resources/custom-hostnames/custom-hostnames.ts">CustomHostnameCustomHostnameForAZoneCreateCustomHostnameResponse</a></code>
- <code><a href="./src/resources/custom-hostnames/custom-hostnames.ts">CustomHostnameCustomHostnameForAZoneListCustomHostnamesResponse</a></code>
- <code><a href="./src/resources/custom-hostnames/custom-hostnames.ts">CustomHostnameGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/custom_hostnames/{custom_hostname_id}">client.customHostnames.<a href="./src/resources/custom-hostnames/custom-hostnames.ts">update</a>(zoneId, customHostnameId, { ...params }) -> CustomHostnameUpdateResponse</code>
- <code title="delete /zones/{zone_id}/custom_hostnames/{custom_hostname_id}">client.customHostnames.<a href="./src/resources/custom-hostnames/custom-hostnames.ts">delete</a>(zoneId, customHostnameId) -> CustomHostnameDeleteResponse</code>
- <code title="post /zones/{zone_id}/custom_hostnames">client.customHostnames.<a href="./src/resources/custom-hostnames/custom-hostnames.ts">customHostnameForAZoneCreateCustomHostname</a>(zoneId, { ...params }) -> CustomHostnameCustomHostnameForAZoneCreateCustomHostnameResponse</code>
- <code title="get /zones/{zone_id}/custom_hostnames">client.customHostnames.<a href="./src/resources/custom-hostnames/custom-hostnames.ts">customHostnameForAZoneListCustomHostnames</a>(zoneId, { ...params }) -> CustomHostnameCustomHostnameForAZoneListCustomHostnamesResponse | null</code>
- <code title="get /zones/{zone_id}/custom_hostnames/{custom_hostname_id}">client.customHostnames.<a href="./src/resources/custom-hostnames/custom-hostnames.ts">get</a>(zoneId, customHostnameId) -> CustomHostnameGetResponse</code>

## FallbackOrigins

Types:

- <code><a href="./src/resources/custom-hostnames/fallback-origins.ts">FallbackOriginUpdateResponse</a></code>
- <code><a href="./src/resources/custom-hostnames/fallback-origins.ts">FallbackOriginDeleteResponse</a></code>
- <code><a href="./src/resources/custom-hostnames/fallback-origins.ts">FallbackOriginGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/custom_hostnames/fallback_origin">client.customHostnames.fallbackOrigins.<a href="./src/resources/custom-hostnames/fallback-origins.ts">update</a>(zoneId, { ...params }) -> FallbackOriginUpdateResponse</code>
- <code title="delete /zones/{zone_id}/custom_hostnames/fallback_origin">client.customHostnames.fallbackOrigins.<a href="./src/resources/custom-hostnames/fallback-origins.ts">delete</a>(zoneId) -> FallbackOriginDeleteResponse</code>
- <code title="get /zones/{zone_id}/custom_hostnames/fallback_origin">client.customHostnames.fallbackOrigins.<a href="./src/resources/custom-hostnames/fallback-origins.ts">get</a>(zoneId) -> FallbackOriginGetResponse</code>

# CustomNs

Types:

- <code><a href="./src/resources/custom-ns/custom-ns.ts">CustomNCreateResponse</a></code>
- <code><a href="./src/resources/custom-ns/custom-ns.ts">CustomNListResponse</a></code>
- <code><a href="./src/resources/custom-ns/custom-ns.ts">CustomNDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/custom_ns">client.customNs.<a href="./src/resources/custom-ns/custom-ns.ts">create</a>(accountId, { ...params }) -> CustomNCreateResponse</code>
- <code title="get /accounts/{account_id}/custom_ns">client.customNs.<a href="./src/resources/custom-ns/custom-ns.ts">list</a>(accountId) -> CustomNListResponse | null</code>
- <code title="delete /accounts/{account_id}/custom_ns/{custom_ns_id}">client.customNs.<a href="./src/resources/custom-ns/custom-ns.ts">delete</a>(accountId, customNsId) -> CustomNDeleteResponse | null</code>

## Availabilities

Types:

- <code><a href="./src/resources/custom-ns/availabilities.ts">AvailabilityGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/custom_ns/availability">client.customNs.availabilities.<a href="./src/resources/custom-ns/availabilities.ts">get</a>(accountId) -> AvailabilityGetResponse | null</code>

## Verifies

Types:

- <code><a href="./src/resources/custom-ns/verifies.ts">VerifyUpdateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/custom_ns/verify">client.customNs.verifies.<a href="./src/resources/custom-ns/verifies.ts">update</a>(accountId) -> VerifyUpdateResponse | null</code>

# DNSRecords

Types:

- <code><a href="./src/resources/dns-records.ts">DNSRecordCreateResponse</a></code>
- <code><a href="./src/resources/dns-records.ts">DNSRecordUpdateResponse</a></code>
- <code><a href="./src/resources/dns-records.ts">DNSRecordListResponse</a></code>
- <code><a href="./src/resources/dns-records.ts">DNSRecordDeleteResponse</a></code>
- <code><a href="./src/resources/dns-records.ts">DNSRecordExportResponse</a></code>
- <code><a href="./src/resources/dns-records.ts">DNSRecordGetResponse</a></code>
- <code><a href="./src/resources/dns-records.ts">DNSRecordImportResponse</a></code>
- <code><a href="./src/resources/dns-records.ts">DNSRecordScanResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/dns_records">client.dnsRecords.<a href="./src/resources/dns-records.ts">create</a>(zoneId, { ...params }) -> DNSRecordCreateResponse</code>
- <code title="put /zones/{zone_id}/dns_records/{dns_record_id}">client.dnsRecords.<a href="./src/resources/dns-records.ts">update</a>(zoneId, dnsRecordId, { ...params }) -> DNSRecordUpdateResponse</code>
- <code title="get /zones/{zone_id}/dns_records">client.dnsRecords.<a href="./src/resources/dns-records.ts">list</a>(zoneId, { ...params }) -> DNSRecordListResponse | null</code>
- <code title="delete /zones/{zone_id}/dns_records/{dns_record_id}">client.dnsRecords.<a href="./src/resources/dns-records.ts">delete</a>(zoneId, dnsRecordId) -> DNSRecordDeleteResponse</code>
- <code title="get /zones/{zone_id}/dns_records/export">client.dnsRecords.<a href="./src/resources/dns-records.ts">export</a>(zoneId) -> string</code>
- <code title="get /zones/{zone_id}/dns_records/{dns_record_id}">client.dnsRecords.<a href="./src/resources/dns-records.ts">get</a>(zoneId, dnsRecordId) -> DNSRecordGetResponse</code>
- <code title="post /zones/{zone_id}/dns_records/import">client.dnsRecords.<a href="./src/resources/dns-records.ts">import</a>(zoneId, { ...params }) -> DNSRecordImportResponse</code>
- <code title="post /zones/{zone_id}/dns_records/scan">client.dnsRecords.<a href="./src/resources/dns-records.ts">scan</a>(zoneId) -> DNSRecordScanResponse</code>

# DNSSECs

Types:

- <code><a href="./src/resources/dnssecs.ts">DNSSECUpdateResponse</a></code>
- <code><a href="./src/resources/dnssecs.ts">DNSSECGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/dnssec">client.dnssecs.<a href="./src/resources/dnssecs.ts">update</a>(zoneId, { ...params }) -> DNSSECUpdateResponse</code>
- <code title="get /zones/{zone_id}/dnssec">client.dnssecs.<a href="./src/resources/dnssecs.ts">get</a>(zoneId) -> DNSSECGetResponse</code>

# Emails

## Routings

Types:

- <code><a href="./src/resources/emails/routings/routings.ts">RoutingEmailRoutingSettingsGetEmailRoutingSettingsResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/email/routing">client.emails.routings.<a href="./src/resources/emails/routings/routings.ts">emailRoutingSettingsGetEmailRoutingSettings</a>(zoneIdentifier) -> RoutingEmailRoutingSettingsGetEmailRoutingSettingsResponse</code>

### Disables

Types:

- <code><a href="./src/resources/emails/routings/disables.ts">DisableEmailRoutingSettingsDisableEmailRoutingResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/email/routing/disable">client.emails.routings.disables.<a href="./src/resources/emails/routings/disables.ts">emailRoutingSettingsDisableEmailRouting</a>(zoneIdentifier) -> DisableEmailRoutingSettingsDisableEmailRoutingResponse</code>

### DNS

Types:

- <code><a href="./src/resources/emails/routings/dns.ts">DNSEmailRoutingSettingsEmailRoutingDNSSettingsResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/email/routing/dns">client.emails.routings.dns.<a href="./src/resources/emails/routings/dns.ts">emailRoutingSettingsEmailRoutingDNSSettings</a>(zoneIdentifier) -> DNSEmailRoutingSettingsEmailRoutingDNSSettingsResponse | null</code>

### Enables

Types:

- <code><a href="./src/resources/emails/routings/enables.ts">EnableEmailRoutingSettingsEnableEmailRoutingResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/email/routing/enable">client.emails.routings.enables.<a href="./src/resources/emails/routings/enables.ts">emailRoutingSettingsEnableEmailRouting</a>(zoneIdentifier) -> EnableEmailRoutingSettingsEnableEmailRoutingResponse</code>

### Rules

Types:

- <code><a href="./src/resources/emails/routings/rules/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/emails/routings/rules/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/emails/routings/rules/rules.ts">RuleEmailRoutingRoutingRulesCreateRoutingRuleResponse</a></code>
- <code><a href="./src/resources/emails/routings/rules/rules.ts">RuleEmailRoutingRoutingRulesListRoutingRulesResponse</a></code>
- <code><a href="./src/resources/emails/routings/rules/rules.ts">RuleGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_identifier}/email/routing/rules/{rule_identifier}">client.emails.routings.rules.<a href="./src/resources/emails/routings/rules/rules.ts">update</a>(zoneIdentifier, ruleIdentifier, { ...params }) -> RuleUpdateResponse</code>
- <code title="delete /zones/{zone_identifier}/email/routing/rules/{rule_identifier}">client.emails.routings.rules.<a href="./src/resources/emails/routings/rules/rules.ts">delete</a>(zoneIdentifier, ruleIdentifier) -> RuleDeleteResponse</code>
- <code title="post /zones/{zone_identifier}/email/routing/rules">client.emails.routings.rules.<a href="./src/resources/emails/routings/rules/rules.ts">emailRoutingRoutingRulesCreateRoutingRule</a>(zoneIdentifier, { ...params }) -> RuleEmailRoutingRoutingRulesCreateRoutingRuleResponse</code>
- <code title="get /zones/{zone_identifier}/email/routing/rules">client.emails.routings.rules.<a href="./src/resources/emails/routings/rules/rules.ts">emailRoutingRoutingRulesListRoutingRules</a>(zoneIdentifier, { ...params }) -> RuleEmailRoutingRoutingRulesListRoutingRulesResponse | null</code>
- <code title="get /zones/{zone_identifier}/email/routing/rules/{rule_identifier}">client.emails.routings.rules.<a href="./src/resources/emails/routings/rules/rules.ts">get</a>(zoneIdentifier, ruleIdentifier) -> RuleGetResponse</code>

#### CatchAlls

Types:

- <code><a href="./src/resources/emails/routings/rules/catch-alls.ts">CatchAllEmailRoutingRoutingRulesGetCatchAllRuleResponse</a></code>
- <code><a href="./src/resources/emails/routings/rules/catch-alls.ts">CatchAllEmailRoutingRoutingRulesUpdateCatchAllRuleResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/email/routing/rules/catch_all">client.emails.routings.rules.catchAlls.<a href="./src/resources/emails/routings/rules/catch-alls.ts">emailRoutingRoutingRulesGetCatchAllRule</a>(zoneIdentifier) -> CatchAllEmailRoutingRoutingRulesGetCatchAllRuleResponse</code>
- <code title="put /zones/{zone_identifier}/email/routing/rules/catch_all">client.emails.routings.rules.catchAlls.<a href="./src/resources/emails/routings/rules/catch-alls.ts">emailRoutingRoutingRulesUpdateCatchAllRule</a>(zoneIdentifier, { ...params }) -> CatchAllEmailRoutingRoutingRulesUpdateCatchAllRuleResponse</code>

### Addresses

Types:

- <code><a href="./src/resources/emails/routings/addresses.ts">AddressDeleteResponse</a></code>
- <code><a href="./src/resources/emails/routings/addresses.ts">AddressEmailRoutingDestinationAddressesCreateADestinationAddressResponse</a></code>
- <code><a href="./src/resources/emails/routings/addresses.ts">AddressEmailRoutingDestinationAddressesListDestinationAddressesResponse</a></code>
- <code><a href="./src/resources/emails/routings/addresses.ts">AddressGetResponse</a></code>

Methods:

- <code title="delete /accounts/{account_identifier}/email/routing/addresses/{destination_address_identifier}">client.emails.routings.addresses.<a href="./src/resources/emails/routings/addresses.ts">delete</a>(accountIdentifier, destinationAddressIdentifier) -> AddressDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/email/routing/addresses">client.emails.routings.addresses.<a href="./src/resources/emails/routings/addresses.ts">emailRoutingDestinationAddressesCreateADestinationAddress</a>(accountIdentifier, { ...params }) -> AddressEmailRoutingDestinationAddressesCreateADestinationAddressResponse</code>
- <code title="get /accounts/{account_identifier}/email/routing/addresses">client.emails.routings.addresses.<a href="./src/resources/emails/routings/addresses.ts">emailRoutingDestinationAddressesListDestinationAddresses</a>(accountIdentifier, { ...params }) -> AddressEmailRoutingDestinationAddressesListDestinationAddressesResponse | null</code>
- <code title="get /accounts/{account_identifier}/email/routing/addresses/{destination_address_identifier}">client.emails.routings.addresses.<a href="./src/resources/emails/routings/addresses.ts">get</a>(accountIdentifier, destinationAddressIdentifier) -> AddressGetResponse</code>

# Filters

Types:

- <code><a href="./src/resources/filters.ts">FilterUpdateResponse</a></code>
- <code><a href="./src/resources/filters.ts">FilterDeleteResponse</a></code>
- <code><a href="./src/resources/filters.ts">FilterFiltersCreateFiltersResponse</a></code>
- <code><a href="./src/resources/filters.ts">FilterFiltersListFiltersResponse</a></code>
- <code><a href="./src/resources/filters.ts">FilterFiltersUpdateFiltersResponse</a></code>
- <code><a href="./src/resources/filters.ts">FilterGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_identifier}/filters/{id}">client.filters.<a href="./src/resources/filters.ts">update</a>(zoneIdentifier, id, { ...params }) -> FilterUpdateResponse | null</code>
- <code title="delete /zones/{zone_identifier}/filters/{id}">client.filters.<a href="./src/resources/filters.ts">delete</a>(zoneIdentifier, id) -> FilterDeleteResponse | null</code>
- <code title="post /zones/{zone_identifier}/filters">client.filters.<a href="./src/resources/filters.ts">filtersCreateFilters</a>(zoneIdentifier, { ...params }) -> FilterFiltersCreateFiltersResponse | null</code>
- <code title="get /zones/{zone_identifier}/filters">client.filters.<a href="./src/resources/filters.ts">filtersListFilters</a>(zoneIdentifier, { ...params }) -> FilterFiltersListFiltersResponse | null</code>
- <code title="put /zones/{zone_identifier}/filters">client.filters.<a href="./src/resources/filters.ts">filtersUpdateFilters</a>(zoneIdentifier, { ...params }) -> FilterFiltersUpdateFiltersResponse | null</code>
- <code title="get /zones/{zone_identifier}/filters/{id}">client.filters.<a href="./src/resources/filters.ts">get</a>(zoneIdentifier, id) -> FilterGetResponse | null</code>

# Firewalls

## Lockdowns

Types:

- <code><a href="./src/resources/firewalls/lockdowns.ts">LockdownUpdateResponse</a></code>
- <code><a href="./src/resources/firewalls/lockdowns.ts">LockdownDeleteResponse</a></code>
- <code><a href="./src/resources/firewalls/lockdowns.ts">LockdownGetResponse</a></code>
- <code><a href="./src/resources/firewalls/lockdowns.ts">LockdownZoneLockdownCreateAZoneLockdownRuleResponse</a></code>
- <code><a href="./src/resources/firewalls/lockdowns.ts">LockdownZoneLockdownListZoneLockdownRulesResponse</a></code>

Methods:

- <code title="put /zones/{zone_identifier}/firewall/lockdowns/{id}">client.firewalls.lockdowns.<a href="./src/resources/firewalls/lockdowns.ts">update</a>(zoneIdentifier, id, { ...params }) -> LockdownUpdateResponse | null</code>
- <code title="delete /zones/{zone_identifier}/firewall/lockdowns/{id}">client.firewalls.lockdowns.<a href="./src/resources/firewalls/lockdowns.ts">delete</a>(zoneIdentifier, id) -> LockdownDeleteResponse</code>
- <code title="get /zones/{zone_identifier}/firewall/lockdowns/{id}">client.firewalls.lockdowns.<a href="./src/resources/firewalls/lockdowns.ts">get</a>(zoneIdentifier, id) -> LockdownGetResponse | null</code>
- <code title="post /zones/{zone_identifier}/firewall/lockdowns">client.firewalls.lockdowns.<a href="./src/resources/firewalls/lockdowns.ts">zoneLockdownCreateAZoneLockdownRule</a>(zoneIdentifier, { ...params }) -> LockdownZoneLockdownCreateAZoneLockdownRuleResponse | null</code>
- <code title="get /zones/{zone_identifier}/firewall/lockdowns">client.firewalls.lockdowns.<a href="./src/resources/firewalls/lockdowns.ts">zoneLockdownListZoneLockdownRules</a>(zoneIdentifier, { ...params }) -> LockdownZoneLockdownListZoneLockdownRulesResponse | null</code>

## Rules

Types:

- <code><a href="./src/resources/firewalls/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/firewalls/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/firewalls/rules.ts">RuleFirewallRulesCreateFirewallRulesResponse</a></code>
- <code><a href="./src/resources/firewalls/rules.ts">RuleFirewallRulesListFirewallRulesResponse</a></code>
- <code><a href="./src/resources/firewalls/rules.ts">RuleFirewallRulesUpdateFirewallRulesResponse</a></code>
- <code><a href="./src/resources/firewalls/rules.ts">RuleFirewallRulesUpdatePriorityOfFirewallRulesResponse</a></code>
- <code><a href="./src/resources/firewalls/rules.ts">RuleGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_identifier}/firewall/rules/{id}">client.firewalls.rules.<a href="./src/resources/firewalls/rules.ts">update</a>(zoneIdentifier, id, { ...params }) -> RuleUpdateResponse | null</code>
- <code title="delete /zones/{zone_identifier}/firewall/rules/{id}">client.firewalls.rules.<a href="./src/resources/firewalls/rules.ts">delete</a>(zoneIdentifier, id, { ...params }) -> RuleDeleteResponse | null</code>
- <code title="post /zones/{zone_identifier}/firewall/rules">client.firewalls.rules.<a href="./src/resources/firewalls/rules.ts">firewallRulesCreateFirewallRules</a>(zoneIdentifier, { ...params }) -> RuleFirewallRulesCreateFirewallRulesResponse | null</code>
- <code title="get /zones/{zone_identifier}/firewall/rules">client.firewalls.rules.<a href="./src/resources/firewalls/rules.ts">firewallRulesListFirewallRules</a>(zoneIdentifier, { ...params }) -> RuleFirewallRulesListFirewallRulesResponse | null</code>
- <code title="put /zones/{zone_identifier}/firewall/rules">client.firewalls.rules.<a href="./src/resources/firewalls/rules.ts">firewallRulesUpdateFirewallRules</a>(zoneIdentifier, { ...params }) -> RuleFirewallRulesUpdateFirewallRulesResponse | null</code>
- <code title="patch /zones/{zone_identifier}/firewall/rules">client.firewalls.rules.<a href="./src/resources/firewalls/rules.ts">firewallRulesUpdatePriorityOfFirewallRules</a>(zoneIdentifier, { ...params }) -> RuleFirewallRulesUpdatePriorityOfFirewallRulesResponse | null</code>
- <code title="get /zones/{zone_identifier}/firewall/rules/{id}">client.firewalls.rules.<a href="./src/resources/firewalls/rules.ts">get</a>(zoneIdentifier, id) -> RuleGetResponse | null</code>

## AccessRules

Types:

- <code><a href="./src/resources/firewalls/access-rules.ts">AccessRuleCreateResponse</a></code>
- <code><a href="./src/resources/firewalls/access-rules.ts">AccessRuleUpdateResponse</a></code>
- <code><a href="./src/resources/firewalls/access-rules.ts">AccessRuleListResponse</a></code>
- <code><a href="./src/resources/firewalls/access-rules.ts">AccessRuleDeleteResponse</a></code>
- <code><a href="./src/resources/firewalls/access-rules.ts">AccessRuleGetResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/firewall/access_rules/rules">client.firewalls.accessRules.<a href="./src/resources/firewalls/access-rules.ts">create</a>(accountOrZone, accountOrZoneId, { ...params }) -> AccessRuleCreateResponse | null</code>
- <code title="patch /{account_or_zone}/{account_or_zone_id}/firewall/access_rules/rules/{identifier}">client.firewalls.accessRules.<a href="./src/resources/firewalls/access-rules.ts">update</a>(identifier, { ...params }) -> AccessRuleUpdateResponse | null</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/firewall/access_rules/rules">client.firewalls.accessRules.<a href="./src/resources/firewalls/access-rules.ts">list</a>(accountOrZone, accountOrZoneId, { ...params }) -> AccessRuleListResponse | null</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/firewall/access_rules/rules/{identifier}">client.firewalls.accessRules.<a href="./src/resources/firewalls/access-rules.ts">delete</a>(accountOrZone, accountOrZoneId, identifier) -> AccessRuleDeleteResponse | null</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/firewall/access_rules/rules/{identifier}">client.firewalls.accessRules.<a href="./src/resources/firewalls/access-rules.ts">get</a>(accountOrZone, accountOrZoneId, identifier) -> AccessRuleGetResponse | null</code>

## UaRules

Types:

- <code><a href="./src/resources/firewalls/ua-rules.ts">UaRuleUpdateResponse</a></code>
- <code><a href="./src/resources/firewalls/ua-rules.ts">UaRuleDeleteResponse</a></code>
- <code><a href="./src/resources/firewalls/ua-rules.ts">UaRuleGetResponse</a></code>
- <code><a href="./src/resources/firewalls/ua-rules.ts">UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleResponse</a></code>
- <code><a href="./src/resources/firewalls/ua-rules.ts">UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponse</a></code>

Methods:

- <code title="put /zones/{zone_identifier}/firewall/ua_rules/{id}">client.firewalls.uaRules.<a href="./src/resources/firewalls/ua-rules.ts">update</a>(zoneIdentifier, id, { ...params }) -> UaRuleUpdateResponse | null</code>
- <code title="delete /zones/{zone_identifier}/firewall/ua_rules/{id}">client.firewalls.uaRules.<a href="./src/resources/firewalls/ua-rules.ts">delete</a>(zoneIdentifier, id) -> UaRuleDeleteResponse | null</code>
- <code title="get /zones/{zone_identifier}/firewall/ua_rules/{id}">client.firewalls.uaRules.<a href="./src/resources/firewalls/ua-rules.ts">get</a>(zoneIdentifier, id) -> UaRuleGetResponse | null</code>
- <code title="post /zones/{zone_identifier}/firewall/ua_rules">client.firewalls.uaRules.<a href="./src/resources/firewalls/ua-rules.ts">userAgentBlockingRulesCreateAUserAgentBlockingRule</a>(zoneIdentifier, { ...params }) -> UaRuleUserAgentBlockingRulesCreateAUserAgentBlockingRuleResponse | null</code>
- <code title="get /zones/{zone_identifier}/firewall/ua_rules">client.firewalls.uaRules.<a href="./src/resources/firewalls/ua-rules.ts">userAgentBlockingRulesListUserAgentBlockingRules</a>(zoneIdentifier, { ...params }) -> UaRuleUserAgentBlockingRulesListUserAgentBlockingRulesResponse | null</code>

## WAF

### Overrides

Types:

- <code><a href="./src/resources/firewalls/waf/overrides.ts">OverrideUpdateResponse</a></code>
- <code><a href="./src/resources/firewalls/waf/overrides.ts">OverrideDeleteResponse</a></code>
- <code><a href="./src/resources/firewalls/waf/overrides.ts">OverrideGetResponse</a></code>
- <code><a href="./src/resources/firewalls/waf/overrides.ts">OverrideWAFOverridesCreateAWAFOverrideResponse</a></code>
- <code><a href="./src/resources/firewalls/waf/overrides.ts">OverrideWAFOverridesListWAFOverridesResponse</a></code>

Methods:

- <code title="put /zones/{zone_identifier}/firewall/waf/overrides/{id}">client.firewalls.waf.overrides.<a href="./src/resources/firewalls/waf/overrides.ts">update</a>(zoneIdentifier, id, { ...params }) -> OverrideUpdateResponse | null</code>
- <code title="delete /zones/{zone_identifier}/firewall/waf/overrides/{id}">client.firewalls.waf.overrides.<a href="./src/resources/firewalls/waf/overrides.ts">delete</a>(zoneIdentifier, id) -> OverrideDeleteResponse</code>
- <code title="get /zones/{zone_identifier}/firewall/waf/overrides/{id}">client.firewalls.waf.overrides.<a href="./src/resources/firewalls/waf/overrides.ts">get</a>(zoneIdentifier, id) -> OverrideGetResponse | null</code>
- <code title="post /zones/{zone_identifier}/firewall/waf/overrides">client.firewalls.waf.overrides.<a href="./src/resources/firewalls/waf/overrides.ts">wafOverridesCreateAWAFOverride</a>(zoneIdentifier, { ...params }) -> OverrideWAFOverridesCreateAWAFOverrideResponse | null</code>
- <code title="get /zones/{zone_identifier}/firewall/waf/overrides">client.firewalls.waf.overrides.<a href="./src/resources/firewalls/waf/overrides.ts">wafOverridesListWAFOverrides</a>(zoneIdentifier, { ...params }) -> OverrideWAFOverridesListWAFOverridesResponse | null</code>

### Packages

Types:

- <code><a href="./src/resources/firewalls/waf/packages/packages.ts">PackageListResponse</a></code>
- <code><a href="./src/resources/firewalls/waf/packages/packages.ts">PackageGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/firewall/waf/packages">client.firewalls.waf.packages.<a href="./src/resources/firewalls/waf/packages/packages.ts">list</a>(zoneIdentifier, { ...params }) -> PackageListResponse</code>
- <code title="get /zones/{zone_identifier}/firewall/waf/packages/{identifier}">client.firewalls.waf.packages.<a href="./src/resources/firewalls/waf/packages/packages.ts">get</a>(zoneIdentifier, identifier) -> PackageGetResponse</code>

#### Groups

Types:

- <code><a href="./src/resources/firewalls/waf/packages/groups.ts">GroupUpdateResponse</a></code>
- <code><a href="./src/resources/firewalls/waf/packages/groups.ts">GroupGetResponse</a></code>
- <code><a href="./src/resources/firewalls/waf/packages/groups.ts">GroupWAFRuleGroupsListWAFRuleGroupsResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/firewall/waf/packages/{package_id}/groups/{group_id}">client.firewalls.waf.packages.groups.<a href="./src/resources/firewalls/waf/packages/groups.ts">update</a>(zoneId, packageId, groupId, { ...params }) -> GroupUpdateResponse</code>
- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/groups/{group_id}">client.firewalls.waf.packages.groups.<a href="./src/resources/firewalls/waf/packages/groups.ts">get</a>(zoneId, packageId, groupId) -> GroupGetResponse</code>
- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/groups">client.firewalls.waf.packages.groups.<a href="./src/resources/firewalls/waf/packages/groups.ts">wafRuleGroupsListWAFRuleGroups</a>(zoneId, packageId, { ...params }) -> GroupWAFRuleGroupsListWAFRuleGroupsResponse | null</code>

#### Rules

Types:

- <code><a href="./src/resources/firewalls/waf/packages/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/firewalls/waf/packages/rules.ts">RuleGetResponse</a></code>
- <code><a href="./src/resources/firewalls/waf/packages/rules.ts">RuleWAFRulesListWAFRulesResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{rule_id}">client.firewalls.waf.packages.rules.<a href="./src/resources/firewalls/waf/packages/rules.ts">update</a>(zoneId, packageId, ruleId, { ...params }) -> RuleUpdateResponse</code>
- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{rule_id}">client.firewalls.waf.packages.rules.<a href="./src/resources/firewalls/waf/packages/rules.ts">get</a>(zoneId, packageId, ruleId) -> RuleGetResponse</code>
- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/rules">client.firewalls.waf.packages.rules.<a href="./src/resources/firewalls/waf/packages/rules.ts">wafRulesListWAFRules</a>(zoneId, packageId, { ...params }) -> RuleWAFRulesListWAFRulesResponse | null</code>

# Healthchecks

Types:

- <code><a href="./src/resources/healthchecks/healthchecks.ts">HealthcheckUpdateResponse</a></code>
- <code><a href="./src/resources/healthchecks/healthchecks.ts">HealthcheckDeleteResponse</a></code>
- <code><a href="./src/resources/healthchecks/healthchecks.ts">HealthcheckGetResponse</a></code>
- <code><a href="./src/resources/healthchecks/healthchecks.ts">HealthcheckHealthChecksCreateHealthCheckResponse</a></code>
- <code><a href="./src/resources/healthchecks/healthchecks.ts">HealthcheckHealthChecksListHealthChecksResponse</a></code>

Methods:

- <code title="put /zones/{zone_identifier}/healthchecks/{identifier}">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">update</a>(zoneIdentifier, identifier, { ...params }) -> HealthcheckUpdateResponse</code>
- <code title="delete /zones/{zone_identifier}/healthchecks/{identifier}">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">delete</a>(zoneIdentifier, identifier) -> HealthcheckDeleteResponse</code>
- <code title="get /zones/{zone_identifier}/healthchecks/{identifier}">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">get</a>(zoneIdentifier, identifier) -> HealthcheckGetResponse</code>
- <code title="post /zones/{zone_identifier}/healthchecks">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">healthChecksCreateHealthCheck</a>(zoneIdentifier, { ...params }) -> HealthcheckHealthChecksCreateHealthCheckResponse</code>
- <code title="get /zones/{zone_identifier}/healthchecks">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">healthChecksListHealthChecks</a>(zoneIdentifier) -> HealthcheckHealthChecksListHealthChecksResponse | null</code>

## Previews

Types:

- <code><a href="./src/resources/healthchecks/previews.ts">PreviewDeleteResponse</a></code>
- <code><a href="./src/resources/healthchecks/previews.ts">PreviewGetResponse</a></code>
- <code><a href="./src/resources/healthchecks/previews.ts">PreviewHealthChecksCreatePreviewHealthCheckResponse</a></code>

Methods:

- <code title="delete /zones/{zone_identifier}/healthchecks/preview/{identifier}">client.healthchecks.previews.<a href="./src/resources/healthchecks/previews.ts">delete</a>(zoneIdentifier, identifier) -> PreviewDeleteResponse</code>
- <code title="get /zones/{zone_identifier}/healthchecks/preview/{identifier}">client.healthchecks.previews.<a href="./src/resources/healthchecks/previews.ts">get</a>(zoneIdentifier, identifier) -> PreviewGetResponse</code>
- <code title="post /zones/{zone_identifier}/healthchecks/preview">client.healthchecks.previews.<a href="./src/resources/healthchecks/previews.ts">healthChecksCreatePreviewHealthCheck</a>(zoneIdentifier, { ...params }) -> PreviewHealthChecksCreatePreviewHealthCheckResponse</code>

# KeylessCertificates

Types:

- <code><a href="./src/resources/keyless-certificates.ts">KeylessCertificateCreateResponse</a></code>
- <code><a href="./src/resources/keyless-certificates.ts">KeylessCertificateUpdateResponse</a></code>
- <code><a href="./src/resources/keyless-certificates.ts">KeylessCertificateListResponse</a></code>
- <code><a href="./src/resources/keyless-certificates.ts">KeylessCertificateDeleteResponse</a></code>
- <code><a href="./src/resources/keyless-certificates.ts">KeylessCertificateGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/keyless_certificates">client.keylessCertificates.<a href="./src/resources/keyless-certificates.ts">create</a>(zoneId, { ...params }) -> KeylessCertificateCreateResponse</code>
- <code title="patch /zones/{zone_id}/keyless_certificates/{keyless_certificate_id}">client.keylessCertificates.<a href="./src/resources/keyless-certificates.ts">update</a>(zoneId, keylessCertificateId, { ...params }) -> KeylessCertificateUpdateResponse</code>
- <code title="get /zones/{zone_id}/keyless_certificates">client.keylessCertificates.<a href="./src/resources/keyless-certificates.ts">list</a>(zoneId) -> KeylessCertificateListResponse | null</code>
- <code title="delete /zones/{zone_id}/keyless_certificates/{keyless_certificate_id}">client.keylessCertificates.<a href="./src/resources/keyless-certificates.ts">delete</a>(zoneId, keylessCertificateId) -> KeylessCertificateDeleteResponse</code>
- <code title="get /zones/{zone_id}/keyless_certificates/{keyless_certificate_id}">client.keylessCertificates.<a href="./src/resources/keyless-certificates.ts">get</a>(zoneId, keylessCertificateId) -> KeylessCertificateGetResponse</code>

# Logpush

## Datasets

### Fields

Types:

- <code><a href="./src/resources/logpush/datasets/fields.ts">FieldListResponse</a></code>

Methods:

- <code title="get /{account_or_zone}/{account_or_zone_id}/logpush/datasets/{dataset_id}/fields">client.logpush.datasets.fields.<a href="./src/resources/logpush/datasets/fields.ts">list</a>(accountOrZone, accountOrZoneId, datasetId) -> FieldListResponse</code>

### Jobs

Types:

- <code><a href="./src/resources/logpush/datasets/jobs.ts">JobListResponse</a></code>

Methods:

- <code title="get /{account_or_zone}/{account_or_zone_id}/logpush/datasets/{dataset_id}/jobs">client.logpush.datasets.jobs.<a href="./src/resources/logpush/datasets/jobs.ts">list</a>(accountOrZone, accountOrZoneId, datasetId) -> JobListResponse</code>

## Edges

Types:

- <code><a href="./src/resources/logpush/edges.ts">EdgeUpdateResponse</a></code>
- <code><a href="./src/resources/logpush/edges.ts">EdgeGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/logpush/edge">client.logpush.edges.<a href="./src/resources/logpush/edges.ts">update</a>(zoneId, { ...params }) -> EdgeUpdateResponse | null</code>
- <code title="get /zones/{zone_id}/logpush/edge">client.logpush.edges.<a href="./src/resources/logpush/edges.ts">get</a>(zoneId) -> EdgeGetResponse</code>

## Jobs

Types:

- <code><a href="./src/resources/logpush/jobs.ts">JobCreateResponse</a></code>
- <code><a href="./src/resources/logpush/jobs.ts">JobUpdateResponse</a></code>
- <code><a href="./src/resources/logpush/jobs.ts">JobListResponse</a></code>
- <code><a href="./src/resources/logpush/jobs.ts">JobDeleteResponse</a></code>
- <code><a href="./src/resources/logpush/jobs.ts">JobGetResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/logpush/jobs">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">create</a>(accountOrZone, accountOrZoneId, { ...params }) -> JobCreateResponse | null</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/logpush/jobs/{job_id}">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">update</a>(accountOrZone, accountOrZoneId, jobId, { ...params }) -> JobUpdateResponse | null</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/logpush/jobs">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">list</a>(accountOrZone, accountOrZoneId) -> JobListResponse</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/logpush/jobs/{job_id}">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">delete</a>(accountOrZone, accountOrZoneId, jobId) -> JobDeleteResponse | null</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/logpush/jobs/{job_id}">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">get</a>(accountOrZone, accountOrZoneId, jobId) -> JobGetResponse | null</code>

## Ownerships

Types:

- <code><a href="./src/resources/logpush/ownerships/ownerships.ts">OwnershipPostAccountsAccountIdentifierLogpushOwnershipResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/logpush/ownership">client.logpush.ownerships.<a href="./src/resources/logpush/ownerships/ownerships.ts">postAccountsAccountIdentifierLogpushOwnership</a>(accountOrZone, accountOrZoneId, { ...params }) -> OwnershipPostAccountsAccountIdentifierLogpushOwnershipResponse | null</code>

### Validates

Types:

- <code><a href="./src/resources/logpush/ownerships/validates.ts">ValidatePostAccountsAccountIdentifierLogpushOwnershipValidateResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/logpush/ownership/validate">client.logpush.ownerships.validates.<a href="./src/resources/logpush/ownerships/validates.ts">postAccountsAccountIdentifierLogpushOwnershipValidate</a>(accountOrZone, accountOrZoneId, { ...params }) -> ValidatePostAccountsAccountIdentifierLogpushOwnershipValidateResponse | null</code>

## Validates

### Destinations

#### Exists

Types:

- <code><a href="./src/resources/logpush/validates/destinations/exists.ts">ExistDeleteAccountsAccountIdentifierLogpushValidateDestinationExistsResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/logpush/validate/destination/exists">client.logpush.validates.destinations.exists.<a href="./src/resources/logpush/validates/destinations/exists.ts">deleteAccountsAccountIdentifierLogpushValidateDestinationExists</a>(accountOrZone, accountOrZoneId, { ...params }) -> ExistDeleteAccountsAccountIdentifierLogpushValidateDestinationExistsResponse | null</code>

### Origins

Types:

- <code><a href="./src/resources/logpush/validates/origins.ts">OriginPostAccountsAccountIdentifierLogpushValidateOriginResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/logpush/validate/origin">client.logpush.validates.origins.<a href="./src/resources/logpush/validates/origins.ts">postAccountsAccountIdentifierLogpushValidateOrigin</a>(accountOrZone, accountOrZoneId, { ...params }) -> OriginPostAccountsAccountIdentifierLogpushValidateOriginResponse | null</code>

# Logs

## Controls

### Retentions

#### Flags

Types:

- <code><a href="./src/resources/logs/controls/retentions/flags.ts">FlagLogsReceivedGetLogRetentionFlagResponse</a></code>
- <code><a href="./src/resources/logs/controls/retentions/flags.ts">FlagLogsReceivedUpdateLogRetentionFlagResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/logs/control/retention/flag">client.logs.controls.retentions.flags.<a href="./src/resources/logs/controls/retentions/flags.ts">logsReceivedGetLogRetentionFlag</a>(zoneIdentifier) -> FlagLogsReceivedGetLogRetentionFlagResponse</code>
- <code title="post /zones/{zone_identifier}/logs/control/retention/flag">client.logs.controls.retentions.flags.<a href="./src/resources/logs/controls/retentions/flags.ts">logsReceivedUpdateLogRetentionFlag</a>(zoneIdentifier, { ...params }) -> FlagLogsReceivedUpdateLogRetentionFlagResponse</code>

### Cmb

#### Configs

Types:

- <code><a href="./src/resources/logs/controls/cmb/configs.ts">ConfigDeleteResponse</a></code>
- <code><a href="./src/resources/logs/controls/cmb/configs.ts">ConfigGetAccountsAccountIdentifierLogsControlCmbConfigResponse</a></code>
- <code><a href="./src/resources/logs/controls/cmb/configs.ts">ConfigPutAccountsAccountIdentifierLogsControlCmbConfigResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/logs/control/cmb/config">client.logs.controls.cmb.configs.<a href="./src/resources/logs/controls/cmb/configs.ts">delete</a>(accountId) -> ConfigDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/logs/control/cmb/config">client.logs.controls.cmb.configs.<a href="./src/resources/logs/controls/cmb/configs.ts">getAccountsAccountIdentifierLogsControlCmbConfig</a>(accountId) -> ConfigGetAccountsAccountIdentifierLogsControlCmbConfigResponse | null</code>
- <code title="post /accounts/{account_id}/logs/control/cmb/config">client.logs.controls.cmb.configs.<a href="./src/resources/logs/controls/cmb/configs.ts">putAccountsAccountIdentifierLogsControlCmbConfig</a>(accountId, { ...params }) -> ConfigPutAccountsAccountIdentifierLogsControlCmbConfigResponse | null</code>

## Rayids

Types:

- <code><a href="./src/resources/logs/rayids.ts">RayidGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/logs/rayids/{ray_identifier}">client.logs.rayids.<a href="./src/resources/logs/rayids.ts">get</a>(zoneIdentifier, rayIdentifier, { ...params }) -> RayidGetResponse</code>

## Receiveds

Types:

- <code><a href="./src/resources/logs/receiveds/receiveds.ts">ReceivedReceivedGetLogsReceivedResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/logs/received">client.logs.receiveds.<a href="./src/resources/logs/receiveds/receiveds.ts">receivedGetLogsReceived</a>(zoneIdentifier, { ...params }) -> ReceivedReceivedGetLogsReceivedResponse</code>

### Fields

Types:

- <code><a href="./src/resources/logs/receiveds/fields.ts">FieldLogsReceivedListFieldsResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/logs/received/fields">client.logs.receiveds.fields.<a href="./src/resources/logs/receiveds/fields.ts">logsReceivedListFields</a>(zoneIdentifier) -> FieldLogsReceivedListFieldsResponse</code>

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

- <code><a href="./src/resources/origin-tls-client-auth/settings.ts">SettingZoneLevelAuthenticatedOriginPullsGetEnablementSettingForZoneResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/settings.ts">SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/origin_tls_client_auth/settings">client.originTLSClientAuth.settings.<a href="./src/resources/origin-tls-client-auth/settings.ts">zoneLevelAuthenticatedOriginPullsGetEnablementSettingForZone</a>(zoneId) -> SettingZoneLevelAuthenticatedOriginPullsGetEnablementSettingForZoneResponse</code>
- <code title="put /zones/{zone_id}/origin_tls_client_auth/settings">client.originTLSClientAuth.settings.<a href="./src/resources/origin-tls-client-auth/settings.ts">zoneLevelAuthenticatedOriginPullsSetEnablementForZone</a>(zoneId, { ...params }) -> SettingZoneLevelAuthenticatedOriginPullsSetEnablementForZoneResponse</code>

# Pagerules

Types:

- <code><a href="./src/resources/pagerules/pagerules.ts">PageruleCreateResponse</a></code>
- <code><a href="./src/resources/pagerules/pagerules.ts">PageruleUpdateResponse</a></code>
- <code><a href="./src/resources/pagerules/pagerules.ts">PageruleListResponse</a></code>
- <code><a href="./src/resources/pagerules/pagerules.ts">PageruleDeleteResponse</a></code>
- <code><a href="./src/resources/pagerules/pagerules.ts">PageruleGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/pagerules">client.pagerules.<a href="./src/resources/pagerules/pagerules.ts">create</a>(zoneId, { ...params }) -> PageruleCreateResponse</code>
- <code title="put /zones/{zone_id}/pagerules/{pagerule_id}">client.pagerules.<a href="./src/resources/pagerules/pagerules.ts">update</a>(zoneId, pageruleId, { ...params }) -> PageruleUpdateResponse</code>
- <code title="get /zones/{zone_id}/pagerules">client.pagerules.<a href="./src/resources/pagerules/pagerules.ts">list</a>(zoneId, { ...params }) -> PageruleListResponse</code>
- <code title="delete /zones/{zone_id}/pagerules/{pagerule_id}">client.pagerules.<a href="./src/resources/pagerules/pagerules.ts">delete</a>(zoneId, pageruleId) -> PageruleDeleteResponse | null</code>
- <code title="get /zones/{zone_id}/pagerules/{pagerule_id}">client.pagerules.<a href="./src/resources/pagerules/pagerules.ts">get</a>(zoneId, pageruleId) -> PageruleGetResponse</code>

## Settings

Types:

- <code><a href="./src/resources/pagerules/settings.ts">SettingAvailablePageRulesSettingsListAvailablePageRulesSettingsResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/pagerules/settings">client.pagerules.settings.<a href="./src/resources/pagerules/settings.ts">availablePageRulesSettingsListAvailablePageRulesSettings</a>(zoneId) -> SettingAvailablePageRulesSettingsListAvailablePageRulesSettingsResponse</code>

# RateLimits

Types:

- <code><a href="./src/resources/rate-limits.ts">RateLimitUpdateResponse</a></code>
- <code><a href="./src/resources/rate-limits.ts">RateLimitListResponse</a></code>
- <code><a href="./src/resources/rate-limits.ts">RateLimitGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_identifier}/rate_limits/{id}">client.rateLimits.<a href="./src/resources/rate-limits.ts">update</a>(zoneIdentifier, id, { ...params }) -> RateLimitUpdateResponse | null</code>
- <code title="get /zones/{zone_identifier}/rate_limits">client.rateLimits.<a href="./src/resources/rate-limits.ts">list</a>(zoneIdentifier, { ...params }) -> RateLimitListResponse | null</code>
- <code title="get /zones/{zone_identifier}/rate_limits/{id}">client.rateLimits.<a href="./src/resources/rate-limits.ts">get</a>(zoneIdentifier, id) -> RateLimitGetResponse | null</code>

# SecondaryDNS

## ForceAxfrs

Types:

- <code><a href="./src/resources/secondary-dns/force-axfrs.ts">ForceAxfrSecondaryDNSSecondaryZoneForceAxfrResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/secondary_dns/force_axfr">client.secondaryDNS.forceAxfrs.<a href="./src/resources/secondary-dns/force-axfrs.ts">secondaryDNSSecondaryZoneForceAxfr</a>(zoneId) -> ForceAxfrSecondaryDNSSecondaryZoneForceAxfrResponse</code>

## Incomings

Types:

- <code><a href="./src/resources/secondary-dns/incomings.ts">IncomingDeleteResponse</a></code>
- <code><a href="./src/resources/secondary-dns/incomings.ts">IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationResponse</a></code>
- <code><a href="./src/resources/secondary-dns/incomings.ts">IncomingSecondaryDNSSecondaryZoneSecondaryZoneConfigurationDetailsResponse</a></code>
- <code><a href="./src/resources/secondary-dns/incomings.ts">IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationResponse</a></code>

Methods:

- <code title="delete /zones/{zone_id}/secondary_dns/incoming">client.secondaryDNS.incomings.<a href="./src/resources/secondary-dns/incomings.ts">delete</a>(zoneId) -> IncomingDeleteResponse</code>
- <code title="post /zones/{zone_id}/secondary_dns/incoming">client.secondaryDNS.incomings.<a href="./src/resources/secondary-dns/incomings.ts">secondaryDNSSecondaryZoneCreateSecondaryZoneConfiguration</a>(zoneId, { ...params }) -> IncomingSecondaryDNSSecondaryZoneCreateSecondaryZoneConfigurationResponse</code>
- <code title="get /zones/{zone_id}/secondary_dns/incoming">client.secondaryDNS.incomings.<a href="./src/resources/secondary-dns/incomings.ts">secondaryDNSSecondaryZoneSecondaryZoneConfigurationDetails</a>(zoneId) -> IncomingSecondaryDNSSecondaryZoneSecondaryZoneConfigurationDetailsResponse</code>
- <code title="put /zones/{zone_id}/secondary_dns/incoming">client.secondaryDNS.incomings.<a href="./src/resources/secondary-dns/incomings.ts">secondaryDNSSecondaryZoneUpdateSecondaryZoneConfiguration</a>(zoneId, { ...params }) -> IncomingSecondaryDNSSecondaryZoneUpdateSecondaryZoneConfigurationResponse</code>

## Outgoings

Types:

- <code><a href="./src/resources/secondary-dns/outgoings/outgoings.ts">OutgoingDeleteResponse</a></code>
- <code><a href="./src/resources/secondary-dns/outgoings/outgoings.ts">OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationResponse</a></code>
- <code><a href="./src/resources/secondary-dns/outgoings/outgoings.ts">OutgoingSecondaryDNSPrimaryZonePrimaryZoneConfigurationDetailsResponse</a></code>
- <code><a href="./src/resources/secondary-dns/outgoings/outgoings.ts">OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationResponse</a></code>

Methods:

- <code title="delete /zones/{zone_id}/secondary_dns/outgoing">client.secondaryDNS.outgoings.<a href="./src/resources/secondary-dns/outgoings/outgoings.ts">delete</a>(zoneId) -> OutgoingDeleteResponse</code>
- <code title="post /zones/{zone_id}/secondary_dns/outgoing">client.secondaryDNS.outgoings.<a href="./src/resources/secondary-dns/outgoings/outgoings.ts">secondaryDNSPrimaryZoneCreatePrimaryZoneConfiguration</a>(zoneId, { ...params }) -> OutgoingSecondaryDNSPrimaryZoneCreatePrimaryZoneConfigurationResponse</code>
- <code title="get /zones/{zone_id}/secondary_dns/outgoing">client.secondaryDNS.outgoings.<a href="./src/resources/secondary-dns/outgoings/outgoings.ts">secondaryDNSPrimaryZonePrimaryZoneConfigurationDetails</a>(zoneId) -> OutgoingSecondaryDNSPrimaryZonePrimaryZoneConfigurationDetailsResponse</code>
- <code title="put /zones/{zone_id}/secondary_dns/outgoing">client.secondaryDNS.outgoings.<a href="./src/resources/secondary-dns/outgoings/outgoings.ts">secondaryDNSPrimaryZoneUpdatePrimaryZoneConfiguration</a>(zoneId, { ...params }) -> OutgoingSecondaryDNSPrimaryZoneUpdatePrimaryZoneConfigurationResponse</code>

### Disables

Types:

- <code><a href="./src/resources/secondary-dns/outgoings/disables.ts">DisableSecondaryDNSPrimaryZoneDisableOutgoingZoneTransfersResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/secondary_dns/outgoing/disable">client.secondaryDNS.outgoings.disables.<a href="./src/resources/secondary-dns/outgoings/disables.ts">secondaryDNSPrimaryZoneDisableOutgoingZoneTransfers</a>(zoneId) -> DisableSecondaryDNSPrimaryZoneDisableOutgoingZoneTransfersResponse</code>

### Enables

Types:

- <code><a href="./src/resources/secondary-dns/outgoings/enables.ts">EnableSecondaryDNSPrimaryZoneEnableOutgoingZoneTransfersResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/secondary_dns/outgoing/enable">client.secondaryDNS.outgoings.enables.<a href="./src/resources/secondary-dns/outgoings/enables.ts">secondaryDNSPrimaryZoneEnableOutgoingZoneTransfers</a>(zoneId) -> EnableSecondaryDNSPrimaryZoneEnableOutgoingZoneTransfersResponse</code>

### ForceNotifies

Types:

- <code><a href="./src/resources/secondary-dns/outgoings/force-notifies.ts">ForceNotifySecondaryDNSPrimaryZoneForceDNSNotifyResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/secondary_dns/outgoing/force_notify">client.secondaryDNS.outgoings.forceNotifies.<a href="./src/resources/secondary-dns/outgoings/force-notifies.ts">secondaryDNSPrimaryZoneForceDNSNotify</a>(zoneId) -> ForceNotifySecondaryDNSPrimaryZoneForceDNSNotifyResponse</code>

### Statuses

Types:

- <code><a href="./src/resources/secondary-dns/outgoings/statuses.ts">StatusSecondaryDNSPrimaryZoneGetOutgoingZoneTransferStatusResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/secondary_dns/outgoing/status">client.secondaryDNS.outgoings.statuses.<a href="./src/resources/secondary-dns/outgoings/statuses.ts">secondaryDNSPrimaryZoneGetOutgoingZoneTransferStatus</a>(zoneId) -> StatusSecondaryDNSPrimaryZoneGetOutgoingZoneTransferStatusResponse</code>

## ACLs

Types:

- <code><a href="./src/resources/secondary-dns/acls.ts">ACLUpdateResponse</a></code>
- <code><a href="./src/resources/secondary-dns/acls.ts">ACLDeleteResponse</a></code>
- <code><a href="./src/resources/secondary-dns/acls.ts">ACLGetResponse</a></code>
- <code><a href="./src/resources/secondary-dns/acls.ts">ACLSecondaryDNSACLCreateACLResponse</a></code>
- <code><a href="./src/resources/secondary-dns/acls.ts">ACLSecondaryDNSACLListACLsResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/secondary_dns/acls/{acl_id}">client.secondaryDNS.acls.<a href="./src/resources/secondary-dns/acls.ts">update</a>(accountId, aclId, { ...params }) -> ACLUpdateResponse</code>
- <code title="delete /accounts/{account_id}/secondary_dns/acls/{acl_id}">client.secondaryDNS.acls.<a href="./src/resources/secondary-dns/acls.ts">delete</a>(accountId, aclId) -> ACLDeleteResponse</code>
- <code title="get /accounts/{account_id}/secondary_dns/acls/{acl_id}">client.secondaryDNS.acls.<a href="./src/resources/secondary-dns/acls.ts">get</a>(accountId, aclId) -> ACLGetResponse</code>
- <code title="post /accounts/{account_id}/secondary_dns/acls">client.secondaryDNS.acls.<a href="./src/resources/secondary-dns/acls.ts">secondaryDNSACLCreateACL</a>(accountId, { ...params }) -> ACLSecondaryDNSACLCreateACLResponse</code>
- <code title="get /accounts/{account_id}/secondary_dns/acls">client.secondaryDNS.acls.<a href="./src/resources/secondary-dns/acls.ts">secondaryDNSACLListACLs</a>(accountId) -> ACLSecondaryDNSACLListACLsResponse | null</code>

## Peers

Types:

- <code><a href="./src/resources/secondary-dns/peers.ts">PeerUpdateResponse</a></code>
- <code><a href="./src/resources/secondary-dns/peers.ts">PeerDeleteResponse</a></code>
- <code><a href="./src/resources/secondary-dns/peers.ts">PeerGetResponse</a></code>
- <code><a href="./src/resources/secondary-dns/peers.ts">PeerSecondaryDNSPeerCreatePeerResponse</a></code>
- <code><a href="./src/resources/secondary-dns/peers.ts">PeerSecondaryDNSPeerListPeersResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/secondary_dns/peers/{peer_id}">client.secondaryDNS.peers.<a href="./src/resources/secondary-dns/peers.ts">update</a>(accountId, peerId, { ...params }) -> PeerUpdateResponse</code>
- <code title="delete /accounts/{account_id}/secondary_dns/peers/{peer_id}">client.secondaryDNS.peers.<a href="./src/resources/secondary-dns/peers.ts">delete</a>(accountId, peerId) -> PeerDeleteResponse</code>
- <code title="get /accounts/{account_id}/secondary_dns/peers/{peer_id}">client.secondaryDNS.peers.<a href="./src/resources/secondary-dns/peers.ts">get</a>(accountId, peerId) -> PeerGetResponse</code>
- <code title="post /accounts/{account_id}/secondary_dns/peers">client.secondaryDNS.peers.<a href="./src/resources/secondary-dns/peers.ts">secondaryDNSPeerCreatePeer</a>(accountId, { ...params }) -> PeerSecondaryDNSPeerCreatePeerResponse</code>
- <code title="get /accounts/{account_id}/secondary_dns/peers">client.secondaryDNS.peers.<a href="./src/resources/secondary-dns/peers.ts">secondaryDNSPeerListPeers</a>(accountId) -> PeerSecondaryDNSPeerListPeersResponse | null</code>

## Tsigs

Types:

- <code><a href="./src/resources/secondary-dns/tsigs.ts">TsigUpdateResponse</a></code>
- <code><a href="./src/resources/secondary-dns/tsigs.ts">TsigDeleteResponse</a></code>
- <code><a href="./src/resources/secondary-dns/tsigs.ts">TsigGetResponse</a></code>
- <code><a href="./src/resources/secondary-dns/tsigs.ts">TsigSecondaryDNSTsigCreateTsigResponse</a></code>
- <code><a href="./src/resources/secondary-dns/tsigs.ts">TsigSecondaryDNSTsigListTsiGsResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/secondary_dns/tsigs/{tsig_id}">client.secondaryDNS.tsigs.<a href="./src/resources/secondary-dns/tsigs.ts">update</a>(accountId, tsigId, { ...params }) -> TsigUpdateResponse</code>
- <code title="delete /accounts/{account_id}/secondary_dns/tsigs/{tsig_id}">client.secondaryDNS.tsigs.<a href="./src/resources/secondary-dns/tsigs.ts">delete</a>(accountId, tsigId) -> TsigDeleteResponse</code>
- <code title="get /accounts/{account_id}/secondary_dns/tsigs/{tsig_id}">client.secondaryDNS.tsigs.<a href="./src/resources/secondary-dns/tsigs.ts">get</a>(accountId, tsigId) -> TsigGetResponse</code>
- <code title="post /accounts/{account_id}/secondary_dns/tsigs">client.secondaryDNS.tsigs.<a href="./src/resources/secondary-dns/tsigs.ts">secondaryDNSTsigCreateTsig</a>(accountId, { ...params }) -> TsigSecondaryDNSTsigCreateTsigResponse</code>
- <code title="get /accounts/{account_id}/secondary_dns/tsigs">client.secondaryDNS.tsigs.<a href="./src/resources/secondary-dns/tsigs.ts">secondaryDNSTsigListTsiGs</a>(accountId) -> TsigSecondaryDNSTsigListTsiGsResponse | null</code>

# Settings

Types:

- <code><a href="./src/resources/settings/settings.ts">SettingListResponse</a></code>
- <code><a href="./src/resources/settings/settings.ts">SettingEditResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/settings">client.settings.<a href="./src/resources/settings/settings.ts">list</a>(zoneId) -> SettingListResponse</code>
- <code title="patch /zones/{zone_id}/settings">client.settings.<a href="./src/resources/settings/settings.ts">edit</a>(zoneId, { ...params }) -> SettingEditResponse</code>

## ZeroRtt

Types:

- <code><a href="./src/resources/settings/zero-rtt.ts">ZeroRttGetResponse</a></code>
- <code><a href="./src/resources/settings/zero-rtt.ts">ZeroRttZoneSettingsChange0RttSessionResumptionSettingResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/settings/0rtt">client.settings.zeroRtt.<a href="./src/resources/settings/zero-rtt.ts">get</a>(zoneId) -> ZeroRttGetResponse</code>
- <code title="patch /zones/{zone_id}/settings/0rtt">client.settings.zeroRtt.<a href="./src/resources/settings/zero-rtt.ts">zoneSettingsChange0RttSessionResumptionSetting</a>(zoneId, { ...params }) -> ZeroRttZoneSettingsChange0RttSessionResumptionSettingResponse</code>

## AdvancedDDOS

Types:

- <code><a href="./src/resources/settings/advanced-ddos.ts">AdvancedDDOSGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/settings/advanced_ddos">client.settings.advancedDDOS.<a href="./src/resources/settings/advanced-ddos.ts">get</a>(zoneId) -> AdvancedDDOSGetResponse</code>

## AlwaysOnline

Types:

- <code><a href="./src/resources/settings/always-online.ts">AlwaysOnlineUpdateResponse</a></code>
- <code><a href="./src/resources/settings/always-online.ts">AlwaysOnlineGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/always_online">client.settings.alwaysOnline.<a href="./src/resources/settings/always-online.ts">update</a>(zoneId, { ...params }) -> AlwaysOnlineUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/always_online">client.settings.alwaysOnline.<a href="./src/resources/settings/always-online.ts">get</a>(zoneId) -> AlwaysOnlineGetResponse</code>

## AlwaysUseHTTPS

Types:

- <code><a href="./src/resources/settings/always-use-https.ts">AlwaysUseHTTPSUpdateResponse</a></code>
- <code><a href="./src/resources/settings/always-use-https.ts">AlwaysUseHTTPSGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/always_use_https">client.settings.alwaysUseHTTPS.<a href="./src/resources/settings/always-use-https.ts">update</a>(zoneId, { ...params }) -> AlwaysUseHTTPSUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/always_use_https">client.settings.alwaysUseHTTPS.<a href="./src/resources/settings/always-use-https.ts">get</a>(zoneId) -> AlwaysUseHTTPSGetResponse</code>

## AutomaticHTTPSRewrites

Types:

- <code><a href="./src/resources/settings/automatic-https-rewrites.ts">AutomaticHTTPSRewriteUpdateResponse</a></code>
- <code><a href="./src/resources/settings/automatic-https-rewrites.ts">AutomaticHTTPSRewriteGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/automatic_https_rewrites">client.settings.automaticHTTPSRewrites.<a href="./src/resources/settings/automatic-https-rewrites.ts">update</a>(zoneId, { ...params }) -> AutomaticHTTPSRewriteUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/automatic_https_rewrites">client.settings.automaticHTTPSRewrites.<a href="./src/resources/settings/automatic-https-rewrites.ts">get</a>(zoneId) -> AutomaticHTTPSRewriteGetResponse</code>

## AutomaticPlatformOptimization

Types:

- <code><a href="./src/resources/settings/automatic-platform-optimization.ts">AutomaticPlatformOptimizationUpdateResponse</a></code>
- <code><a href="./src/resources/settings/automatic-platform-optimization.ts">AutomaticPlatformOptimizationGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/automatic_platform_optimization">client.settings.automaticPlatformOptimization.<a href="./src/resources/settings/automatic-platform-optimization.ts">update</a>(zoneId, { ...params }) -> AutomaticPlatformOptimizationUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/automatic_platform_optimization">client.settings.automaticPlatformOptimization.<a href="./src/resources/settings/automatic-platform-optimization.ts">get</a>(zoneId) -> AutomaticPlatformOptimizationGetResponse</code>

## Brotli

Types:

- <code><a href="./src/resources/settings/brotli.ts">BrotliUpdateResponse</a></code>
- <code><a href="./src/resources/settings/brotli.ts">BrotliGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/brotli">client.settings.brotli.<a href="./src/resources/settings/brotli.ts">update</a>(zoneId, { ...params }) -> BrotliUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/brotli">client.settings.brotli.<a href="./src/resources/settings/brotli.ts">get</a>(zoneId) -> BrotliGetResponse</code>

## BrowserCacheTTL

Types:

- <code><a href="./src/resources/settings/browser-cache-ttl.ts">BrowserCacheTTLUpdateResponse</a></code>
- <code><a href="./src/resources/settings/browser-cache-ttl.ts">BrowserCacheTTLGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/browser_cache_ttl">client.settings.browserCacheTTL.<a href="./src/resources/settings/browser-cache-ttl.ts">update</a>(zoneId, { ...params }) -> BrowserCacheTTLUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/browser_cache_ttl">client.settings.browserCacheTTL.<a href="./src/resources/settings/browser-cache-ttl.ts">get</a>(zoneId) -> BrowserCacheTTLGetResponse</code>

## BrowserCheck

Types:

- <code><a href="./src/resources/settings/browser-check.ts">BrowserCheckUpdateResponse</a></code>
- <code><a href="./src/resources/settings/browser-check.ts">BrowserCheckGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/browser_check">client.settings.browserCheck.<a href="./src/resources/settings/browser-check.ts">update</a>(zoneId, { ...params }) -> BrowserCheckUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/browser_check">client.settings.browserCheck.<a href="./src/resources/settings/browser-check.ts">get</a>(zoneId) -> BrowserCheckGetResponse</code>

## CacheLevel

Types:

- <code><a href="./src/resources/settings/cache-level.ts">CacheLevelUpdateResponse</a></code>
- <code><a href="./src/resources/settings/cache-level.ts">CacheLevelGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/cache_level">client.settings.cacheLevel.<a href="./src/resources/settings/cache-level.ts">update</a>(zoneId, { ...params }) -> CacheLevelUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/cache_level">client.settings.cacheLevel.<a href="./src/resources/settings/cache-level.ts">get</a>(zoneId) -> CacheLevelGetResponse</code>

## ChallengeTTL

Types:

- <code><a href="./src/resources/settings/challenge-ttl.ts">ChallengeTTLUpdateResponse</a></code>
- <code><a href="./src/resources/settings/challenge-ttl.ts">ChallengeTTLGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/challenge_ttl">client.settings.challengeTTL.<a href="./src/resources/settings/challenge-ttl.ts">update</a>(zoneId, { ...params }) -> ChallengeTTLUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/challenge_ttl">client.settings.challengeTTL.<a href="./src/resources/settings/challenge-ttl.ts">get</a>(zoneId) -> ChallengeTTLGetResponse</code>

## Ciphers

Types:

- <code><a href="./src/resources/settings/ciphers.ts">CipherUpdateResponse</a></code>
- <code><a href="./src/resources/settings/ciphers.ts">CipherGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/ciphers">client.settings.ciphers.<a href="./src/resources/settings/ciphers.ts">update</a>(zoneId, { ...params }) -> CipherUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/ciphers">client.settings.ciphers.<a href="./src/resources/settings/ciphers.ts">get</a>(zoneId) -> CipherGetResponse</code>

## DevelopmentMode

Types:

- <code><a href="./src/resources/settings/development-mode.ts">DevelopmentModeUpdateResponse</a></code>
- <code><a href="./src/resources/settings/development-mode.ts">DevelopmentModeGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/development_mode">client.settings.developmentMode.<a href="./src/resources/settings/development-mode.ts">update</a>(zoneId, { ...params }) -> DevelopmentModeUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/development_mode">client.settings.developmentMode.<a href="./src/resources/settings/development-mode.ts">get</a>(zoneId) -> DevelopmentModeGetResponse</code>

## EarlyHint

Types:

- <code><a href="./src/resources/settings/early-hint.ts">EarlyHintUpdateResponse</a></code>
- <code><a href="./src/resources/settings/early-hint.ts">EarlyHintGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/early_hints">client.settings.earlyHint.<a href="./src/resources/settings/early-hint.ts">update</a>(zoneId, { ...params }) -> EarlyHintUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/early_hints">client.settings.earlyHint.<a href="./src/resources/settings/early-hint.ts">get</a>(zoneId) -> EarlyHintGetResponse</code>

## EmailObfuscation

Types:

- <code><a href="./src/resources/settings/email-obfuscation.ts">EmailObfuscationUpdateResponse</a></code>
- <code><a href="./src/resources/settings/email-obfuscation.ts">EmailObfuscationGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/email_obfuscation">client.settings.emailObfuscation.<a href="./src/resources/settings/email-obfuscation.ts">update</a>(zoneId, { ...params }) -> EmailObfuscationUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/email_obfuscation">client.settings.emailObfuscation.<a href="./src/resources/settings/email-obfuscation.ts">get</a>(zoneId) -> EmailObfuscationGetResponse</code>

## H2Prioritization

Types:

- <code><a href="./src/resources/settings/h2-prioritization.ts">H2PrioritizationUpdateResponse</a></code>
- <code><a href="./src/resources/settings/h2-prioritization.ts">H2PrioritizationGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/h2_prioritization">client.settings.h2Prioritization.<a href="./src/resources/settings/h2-prioritization.ts">update</a>(zoneId, { ...params }) -> H2PrioritizationUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/h2_prioritization">client.settings.h2Prioritization.<a href="./src/resources/settings/h2-prioritization.ts">get</a>(zoneId) -> H2PrioritizationGetResponse</code>

## HotlinkProtection

Types:

- <code><a href="./src/resources/settings/hotlink-protection.ts">HotlinkProtectionUpdateResponse</a></code>
- <code><a href="./src/resources/settings/hotlink-protection.ts">HotlinkProtectionGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/hotlink_protection">client.settings.hotlinkProtection.<a href="./src/resources/settings/hotlink-protection.ts">update</a>(zoneId, { ...params }) -> HotlinkProtectionUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/hotlink_protection">client.settings.hotlinkProtection.<a href="./src/resources/settings/hotlink-protection.ts">get</a>(zoneId) -> HotlinkProtectionGetResponse</code>

## HTTP2

Types:

- <code><a href="./src/resources/settings/http2.ts">HTTP2UpdateResponse</a></code>
- <code><a href="./src/resources/settings/http2.ts">HTTP2GetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/http2">client.settings.http2.<a href="./src/resources/settings/http2.ts">update</a>(zoneId, { ...params }) -> HTTP2UpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/http2">client.settings.http2.<a href="./src/resources/settings/http2.ts">get</a>(zoneId) -> HTTP2GetResponse</code>

## HTTP3

Types:

- <code><a href="./src/resources/settings/http3.ts">HTTP3UpdateResponse</a></code>
- <code><a href="./src/resources/settings/http3.ts">HTTP3GetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/http3">client.settings.http3.<a href="./src/resources/settings/http3.ts">update</a>(zoneId, { ...params }) -> HTTP3UpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/http3">client.settings.http3.<a href="./src/resources/settings/http3.ts">get</a>(zoneId) -> HTTP3GetResponse</code>

## ImageResizing

Types:

- <code><a href="./src/resources/settings/image-resizing.ts">ImageResizingUpdateResponse</a></code>
- <code><a href="./src/resources/settings/image-resizing.ts">ImageResizingGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/image_resizing">client.settings.imageResizing.<a href="./src/resources/settings/image-resizing.ts">update</a>(zoneId, { ...params }) -> ImageResizingUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/image_resizing">client.settings.imageResizing.<a href="./src/resources/settings/image-resizing.ts">get</a>(zoneId) -> ImageResizingGetResponse</code>

## IPGeolocation

Types:

- <code><a href="./src/resources/settings/ip-geolocation.ts">IPGeolocationUpdateResponse</a></code>
- <code><a href="./src/resources/settings/ip-geolocation.ts">IPGeolocationGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/ip_geolocation">client.settings.ipGeolocation.<a href="./src/resources/settings/ip-geolocation.ts">update</a>(zoneId, { ...params }) -> IPGeolocationUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/ip_geolocation">client.settings.ipGeolocation.<a href="./src/resources/settings/ip-geolocation.ts">get</a>(zoneId) -> IPGeolocationGetResponse</code>

## IPV6

Types:

- <code><a href="./src/resources/settings/ipv6.ts">IPV6UpdateResponse</a></code>
- <code><a href="./src/resources/settings/ipv6.ts">IPV6GetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/ipv6">client.settings.ipv6.<a href="./src/resources/settings/ipv6.ts">update</a>(zoneId, { ...params }) -> IPV6UpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/ipv6">client.settings.ipv6.<a href="./src/resources/settings/ipv6.ts">get</a>(zoneId) -> IPV6GetResponse</code>

## MinTLSVersion

Types:

- <code><a href="./src/resources/settings/min-tls-version.ts">MinTLSVersionUpdateResponse</a></code>
- <code><a href="./src/resources/settings/min-tls-version.ts">MinTLSVersionGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/min_tls_version">client.settings.minTLSVersion.<a href="./src/resources/settings/min-tls-version.ts">update</a>(zoneId, { ...params }) -> MinTLSVersionUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/min_tls_version">client.settings.minTLSVersion.<a href="./src/resources/settings/min-tls-version.ts">get</a>(zoneId) -> MinTLSVersionGetResponse</code>

## Minify

Types:

- <code><a href="./src/resources/settings/minify.ts">MinifyUpdateResponse</a></code>
- <code><a href="./src/resources/settings/minify.ts">MinifyGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/minify">client.settings.minify.<a href="./src/resources/settings/minify.ts">update</a>(zoneId, { ...params }) -> MinifyUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/minify">client.settings.minify.<a href="./src/resources/settings/minify.ts">get</a>(zoneId) -> MinifyGetResponse</code>

## Mirage

Types:

- <code><a href="./src/resources/settings/mirage.ts">MirageUpdateResponse</a></code>
- <code><a href="./src/resources/settings/mirage.ts">MirageGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/mirage">client.settings.mirage.<a href="./src/resources/settings/mirage.ts">update</a>(zoneId, { ...params }) -> MirageUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/mirage">client.settings.mirage.<a href="./src/resources/settings/mirage.ts">get</a>(zoneId) -> MirageGetResponse</code>

## MobileRedirect

Types:

- <code><a href="./src/resources/settings/mobile-redirect.ts">MobileRedirectUpdateResponse</a></code>
- <code><a href="./src/resources/settings/mobile-redirect.ts">MobileRedirectGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/mobile_redirect">client.settings.mobileRedirect.<a href="./src/resources/settings/mobile-redirect.ts">update</a>(zoneId, { ...params }) -> MobileRedirectUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/mobile_redirect">client.settings.mobileRedirect.<a href="./src/resources/settings/mobile-redirect.ts">get</a>(zoneId) -> MobileRedirectGetResponse</code>

## NEL

Types:

- <code><a href="./src/resources/settings/nel.ts">NELUpdateResponse</a></code>
- <code><a href="./src/resources/settings/nel.ts">NELGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/nel">client.settings.nel.<a href="./src/resources/settings/nel.ts">update</a>(zoneId, { ...params }) -> NELUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/nel">client.settings.nel.<a href="./src/resources/settings/nel.ts">get</a>(zoneId) -> NELGetResponse</code>

## OpportunisticEncryption

Types:

- <code><a href="./src/resources/settings/opportunistic-encryption.ts">OpportunisticEncryptionUpdateResponse</a></code>
- <code><a href="./src/resources/settings/opportunistic-encryption.ts">OpportunisticEncryptionGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/opportunistic_encryption">client.settings.opportunisticEncryption.<a href="./src/resources/settings/opportunistic-encryption.ts">update</a>(zoneId, { ...params }) -> OpportunisticEncryptionUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/opportunistic_encryption">client.settings.opportunisticEncryption.<a href="./src/resources/settings/opportunistic-encryption.ts">get</a>(zoneId) -> OpportunisticEncryptionGetResponse</code>

## OpportunisticOnion

Types:

- <code><a href="./src/resources/settings/opportunistic-onion.ts">OpportunisticOnionUpdateResponse</a></code>
- <code><a href="./src/resources/settings/opportunistic-onion.ts">OpportunisticOnionGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/opportunistic_onion">client.settings.opportunisticOnion.<a href="./src/resources/settings/opportunistic-onion.ts">update</a>(zoneId, { ...params }) -> OpportunisticOnionUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/opportunistic_onion">client.settings.opportunisticOnion.<a href="./src/resources/settings/opportunistic-onion.ts">get</a>(zoneId) -> OpportunisticOnionGetResponse</code>

## OrangeToOrange

Types:

- <code><a href="./src/resources/settings/orange-to-orange.ts">OrangeToOrangeUpdateResponse</a></code>
- <code><a href="./src/resources/settings/orange-to-orange.ts">OrangeToOrangeGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/orange_to_orange">client.settings.orangeToOrange.<a href="./src/resources/settings/orange-to-orange.ts">update</a>(zoneId, { ...params }) -> OrangeToOrangeUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/orange_to_orange">client.settings.orangeToOrange.<a href="./src/resources/settings/orange-to-orange.ts">get</a>(zoneId) -> OrangeToOrangeGetResponse</code>

## OriginErrorPagePassThru

Types:

- <code><a href="./src/resources/settings/origin-error-page-pass-thru.ts">OriginErrorPagePassThruUpdateResponse</a></code>
- <code><a href="./src/resources/settings/origin-error-page-pass-thru.ts">OriginErrorPagePassThruGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/origin_error_page_pass_thru">client.settings.originErrorPagePassThru.<a href="./src/resources/settings/origin-error-page-pass-thru.ts">update</a>(zoneId, { ...params }) -> OriginErrorPagePassThruUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/origin_error_page_pass_thru">client.settings.originErrorPagePassThru.<a href="./src/resources/settings/origin-error-page-pass-thru.ts">get</a>(zoneId) -> OriginErrorPagePassThruGetResponse</code>

## OriginMaxHTTPVersion

Types:

- <code><a href="./src/resources/settings/origin-max-http-version.ts">OriginMaxHTTPVersionUpdateResponse</a></code>
- <code><a href="./src/resources/settings/origin-max-http-version.ts">OriginMaxHTTPVersionGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/origin_max_http_version">client.settings.originMaxHTTPVersion.<a href="./src/resources/settings/origin-max-http-version.ts">update</a>(zoneId, { ...params }) -> OriginMaxHTTPVersionUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/origin_max_http_version">client.settings.originMaxHTTPVersion.<a href="./src/resources/settings/origin-max-http-version.ts">get</a>(zoneId) -> OriginMaxHTTPVersionGetResponse</code>

## Polish

Types:

- <code><a href="./src/resources/settings/polish.ts">PolishUpdateResponse</a></code>
- <code><a href="./src/resources/settings/polish.ts">PolishGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/polish">client.settings.polish.<a href="./src/resources/settings/polish.ts">update</a>(zoneId, { ...params }) -> PolishUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/polish">client.settings.polish.<a href="./src/resources/settings/polish.ts">get</a>(zoneId) -> PolishGetResponse</code>

## PrefetchPreload

Types:

- <code><a href="./src/resources/settings/prefetch-preload.ts">PrefetchPreloadUpdateResponse</a></code>
- <code><a href="./src/resources/settings/prefetch-preload.ts">PrefetchPreloadGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/prefetch_preload">client.settings.prefetchPreload.<a href="./src/resources/settings/prefetch-preload.ts">update</a>(zoneId, { ...params }) -> PrefetchPreloadUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/prefetch_preload">client.settings.prefetchPreload.<a href="./src/resources/settings/prefetch-preload.ts">get</a>(zoneId) -> PrefetchPreloadGetResponse</code>

## ProxyReadTimeout

Types:

- <code><a href="./src/resources/settings/proxy-read-timeout.ts">ProxyReadTimeoutUpdateResponse</a></code>
- <code><a href="./src/resources/settings/proxy-read-timeout.ts">ProxyReadTimeoutGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/proxy_read_timeout">client.settings.proxyReadTimeout.<a href="./src/resources/settings/proxy-read-timeout.ts">update</a>(zoneId, { ...params }) -> ProxyReadTimeoutUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/proxy_read_timeout">client.settings.proxyReadTimeout.<a href="./src/resources/settings/proxy-read-timeout.ts">get</a>(zoneId) -> ProxyReadTimeoutGetResponse</code>

## PseudoIPV4

Types:

- <code><a href="./src/resources/settings/pseudo-ipv4.ts">PseudoIPV4UpdateResponse</a></code>
- <code><a href="./src/resources/settings/pseudo-ipv4.ts">PseudoIPV4GetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/pseudo_ipv4">client.settings.pseudoIPV4.<a href="./src/resources/settings/pseudo-ipv4.ts">update</a>(zoneId, { ...params }) -> PseudoIPV4UpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/pseudo_ipv4">client.settings.pseudoIPV4.<a href="./src/resources/settings/pseudo-ipv4.ts">get</a>(zoneId) -> PseudoIPV4GetResponse</code>

## ResponseBuffering

Types:

- <code><a href="./src/resources/settings/response-buffering.ts">ResponseBufferingUpdateResponse</a></code>
- <code><a href="./src/resources/settings/response-buffering.ts">ResponseBufferingGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/response_buffering">client.settings.responseBuffering.<a href="./src/resources/settings/response-buffering.ts">update</a>(zoneId, { ...params }) -> ResponseBufferingUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/response_buffering">client.settings.responseBuffering.<a href="./src/resources/settings/response-buffering.ts">get</a>(zoneId) -> ResponseBufferingGetResponse</code>

## RocketLoader

Types:

- <code><a href="./src/resources/settings/rocket-loader.ts">RocketLoaderUpdateResponse</a></code>
- <code><a href="./src/resources/settings/rocket-loader.ts">RocketLoaderGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/rocket_loader">client.settings.rocketLoader.<a href="./src/resources/settings/rocket-loader.ts">update</a>(zoneId, { ...params }) -> RocketLoaderUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/rocket_loader">client.settings.rocketLoader.<a href="./src/resources/settings/rocket-loader.ts">get</a>(zoneId) -> RocketLoaderGetResponse</code>

## SecurityHeaders

Types:

- <code><a href="./src/resources/settings/security-headers.ts">SecurityHeaderUpdateResponse</a></code>
- <code><a href="./src/resources/settings/security-headers.ts">SecurityHeaderGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/security_header">client.settings.securityHeaders.<a href="./src/resources/settings/security-headers.ts">update</a>(zoneId, { ...params }) -> SecurityHeaderUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/security_header">client.settings.securityHeaders.<a href="./src/resources/settings/security-headers.ts">get</a>(zoneId) -> SecurityHeaderGetResponse</code>

## SecurityLevel

Types:

- <code><a href="./src/resources/settings/security-level.ts">SecurityLevelUpdateResponse</a></code>
- <code><a href="./src/resources/settings/security-level.ts">SecurityLevelGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/security_level">client.settings.securityLevel.<a href="./src/resources/settings/security-level.ts">update</a>(zoneId, { ...params }) -> SecurityLevelUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/security_level">client.settings.securityLevel.<a href="./src/resources/settings/security-level.ts">get</a>(zoneId) -> SecurityLevelGetResponse</code>

## ServerSideExcludes

Types:

- <code><a href="./src/resources/settings/server-side-excludes.ts">ServerSideExcludeUpdateResponse</a></code>
- <code><a href="./src/resources/settings/server-side-excludes.ts">ServerSideExcludeGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/server_side_exclude">client.settings.serverSideExcludes.<a href="./src/resources/settings/server-side-excludes.ts">update</a>(zoneId, { ...params }) -> ServerSideExcludeUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/server_side_exclude">client.settings.serverSideExcludes.<a href="./src/resources/settings/server-side-excludes.ts">get</a>(zoneId) -> ServerSideExcludeGetResponse</code>

## SortQueryStringForCache

Types:

- <code><a href="./src/resources/settings/sort-query-string-for-cache.ts">SortQueryStringForCacheUpdateResponse</a></code>
- <code><a href="./src/resources/settings/sort-query-string-for-cache.ts">SortQueryStringForCacheGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/sort_query_string_for_cache">client.settings.sortQueryStringForCache.<a href="./src/resources/settings/sort-query-string-for-cache.ts">update</a>(zoneId, { ...params }) -> SortQueryStringForCacheUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/sort_query_string_for_cache">client.settings.sortQueryStringForCache.<a href="./src/resources/settings/sort-query-string-for-cache.ts">get</a>(zoneId) -> SortQueryStringForCacheGetResponse</code>

## SSL

Types:

- <code><a href="./src/resources/settings/ssl.ts">SSLUpdateResponse</a></code>
- <code><a href="./src/resources/settings/ssl.ts">SSLGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/ssl">client.settings.ssl.<a href="./src/resources/settings/ssl.ts">update</a>(zoneId, { ...params }) -> SSLUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/ssl">client.settings.ssl.<a href="./src/resources/settings/ssl.ts">get</a>(zoneId) -> SSLGetResponse</code>

## SSLRecommender

Types:

- <code><a href="./src/resources/settings/ssl-recommender.ts">SSLRecommenderUpdateResponse</a></code>
- <code><a href="./src/resources/settings/ssl-recommender.ts">SSLRecommenderGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/ssl_recommender">client.settings.sslRecommender.<a href="./src/resources/settings/ssl-recommender.ts">update</a>(zoneId, { ...params }) -> SSLRecommenderUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/ssl_recommender">client.settings.sslRecommender.<a href="./src/resources/settings/ssl-recommender.ts">get</a>(zoneId) -> SSLRecommenderGetResponse</code>

## TLS1_3

Types:

- <code><a href="./src/resources/settings/tls-1-3.ts">TLS1_3UpdateResponse</a></code>
- <code><a href="./src/resources/settings/tls-1-3.ts">TLS1_3GetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/tls_1_3">client.settings.tls1_3.<a href="./src/resources/settings/tls-1-3.ts">update</a>(zoneId, { ...params }) -> TLS1_3UpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/tls_1_3">client.settings.tls1_3.<a href="./src/resources/settings/tls-1-3.ts">get</a>(zoneId) -> TLS1_3GetResponse</code>

## TLSClientAuth

Types:

- <code><a href="./src/resources/settings/tls-client-auth.ts">TLSClientAuthUpdateResponse</a></code>
- <code><a href="./src/resources/settings/tls-client-auth.ts">TLSClientAuthGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/tls_client_auth">client.settings.tlsClientAuth.<a href="./src/resources/settings/tls-client-auth.ts">update</a>(zoneId, { ...params }) -> TLSClientAuthUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/tls_client_auth">client.settings.tlsClientAuth.<a href="./src/resources/settings/tls-client-auth.ts">get</a>(zoneId) -> TLSClientAuthGetResponse</code>

## TrueClientIPHeader

Types:

- <code><a href="./src/resources/settings/true-client-ip-header.ts">TrueClientIPHeaderUpdateResponse</a></code>
- <code><a href="./src/resources/settings/true-client-ip-header.ts">TrueClientIPHeaderGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/true_client_ip_header">client.settings.trueClientIPHeader.<a href="./src/resources/settings/true-client-ip-header.ts">update</a>(zoneId, { ...params }) -> TrueClientIPHeaderUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/true_client_ip_header">client.settings.trueClientIPHeader.<a href="./src/resources/settings/true-client-ip-header.ts">get</a>(zoneId) -> TrueClientIPHeaderGetResponse</code>

## WAF

Types:

- <code><a href="./src/resources/settings/waf.ts">WAFUpdateResponse</a></code>
- <code><a href="./src/resources/settings/waf.ts">WAFGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/waf">client.settings.waf.<a href="./src/resources/settings/waf.ts">update</a>(zoneId, { ...params }) -> WAFUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/waf">client.settings.waf.<a href="./src/resources/settings/waf.ts">get</a>(zoneId) -> WAFGetResponse</code>

## Webp

Types:

- <code><a href="./src/resources/settings/webp.ts">WebpUpdateResponse</a></code>
- <code><a href="./src/resources/settings/webp.ts">WebpGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/webp">client.settings.webp.<a href="./src/resources/settings/webp.ts">update</a>(zoneId, { ...params }) -> WebpUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/webp">client.settings.webp.<a href="./src/resources/settings/webp.ts">get</a>(zoneId) -> WebpGetResponse</code>

## Websocket

Types:

- <code><a href="./src/resources/settings/websocket.ts">WebsocketUpdateResponse</a></code>
- <code><a href="./src/resources/settings/websocket.ts">WebsocketGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/websockets">client.settings.websocket.<a href="./src/resources/settings/websocket.ts">update</a>(zoneId, { ...params }) -> WebsocketUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/websockets">client.settings.websocket.<a href="./src/resources/settings/websocket.ts">get</a>(zoneId) -> WebsocketGetResponse</code>

# WaitingRooms

Types:

- <code><a href="./src/resources/waiting-rooms/waiting-rooms.ts">WaitingRoomCreateResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/waiting-rooms.ts">WaitingRoomUpdateResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/waiting-rooms.ts">WaitingRoomListResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/waiting-rooms.ts">WaitingRoomDeleteResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/waiting-rooms.ts">WaitingRoomGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/waiting_rooms">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">create</a>(zoneIdentifier, { ...params }) -> WaitingRoomCreateResponse</code>
- <code title="put /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">update</a>(zoneIdentifier, waitingRoomId, { ...params }) -> WaitingRoomUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/waiting_rooms">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">list</a>(zoneIdentifier) -> WaitingRoomListResponse | null</code>
- <code title="delete /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">delete</a>(zoneIdentifier, waitingRoomId) -> WaitingRoomDeleteResponse</code>
- <code title="get /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">get</a>(zoneIdentifier, waitingRoomId) -> WaitingRoomGetResponse</code>

## Previews

Types:

- <code><a href="./src/resources/waiting-rooms/previews.ts">PreviewCreateResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/waiting_rooms/preview">client.waitingRooms.previews.<a href="./src/resources/waiting-rooms/previews.ts">create</a>(zoneIdentifier, { ...params }) -> PreviewCreateResponse</code>

## Events

Types:

- <code><a href="./src/resources/waiting-rooms/events/events.ts">EventUpdateResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/events/events.ts">EventDeleteResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/events/events.ts">EventGetResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/events/events.ts">EventWaitingRoomCreateEventResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/events/events.ts">EventWaitingRoomListEventsResponse</a></code>

Methods:

- <code title="put /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events/{event_id}">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">update</a>(zoneIdentifier, waitingRoomId, eventId, { ...params }) -> EventUpdateResponse</code>
- <code title="delete /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events/{event_id}">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">delete</a>(zoneIdentifier, waitingRoomId, eventId) -> EventDeleteResponse</code>
- <code title="get /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events/{event_id}">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">get</a>(zoneIdentifier, waitingRoomId, eventId) -> EventGetResponse</code>
- <code title="post /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">waitingRoomCreateEvent</a>(zoneIdentifier, waitingRoomId, { ...params }) -> EventWaitingRoomCreateEventResponse</code>
- <code title="get /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">waitingRoomListEvents</a>(zoneIdentifier, waitingRoomId) -> EventWaitingRoomListEventsResponse | null</code>

### Details

Types:

- <code><a href="./src/resources/waiting-rooms/events/details.ts">DetailWaitingRoomPreviewActiveEventDetailsResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events/{event_id}/details">client.waitingRooms.events.details.<a href="./src/resources/waiting-rooms/events/details.ts">waitingRoomPreviewActiveEventDetails</a>(zoneIdentifier, waitingRoomId, eventId) -> DetailWaitingRoomPreviewActiveEventDetailsResponse</code>

## Rules

Types:

- <code><a href="./src/resources/waiting-rooms/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/rules.ts">RuleWaitingRoomCreateWaitingRoomRuleResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/rules.ts">RuleWaitingRoomListWaitingRoomRulesResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/rules.ts">RuleWaitingRoomReplaceWaitingRoomRulesResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/rules/{rule_id}">client.waitingRooms.rules.<a href="./src/resources/waiting-rooms/rules.ts">update</a>(zoneIdentifier, waitingRoomId, ruleId, { ...params }) -> RuleUpdateResponse | null</code>
- <code title="delete /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/rules/{rule_id}">client.waitingRooms.rules.<a href="./src/resources/waiting-rooms/rules.ts">delete</a>(zoneIdentifier, waitingRoomId, ruleId) -> RuleDeleteResponse | null</code>
- <code title="post /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/rules">client.waitingRooms.rules.<a href="./src/resources/waiting-rooms/rules.ts">waitingRoomCreateWaitingRoomRule</a>(zoneIdentifier, waitingRoomId, { ...params }) -> RuleWaitingRoomCreateWaitingRoomRuleResponse | null</code>
- <code title="get /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/rules">client.waitingRooms.rules.<a href="./src/resources/waiting-rooms/rules.ts">waitingRoomListWaitingRoomRules</a>(zoneIdentifier, waitingRoomId) -> RuleWaitingRoomListWaitingRoomRulesResponse | null</code>
- <code title="put /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/rules">client.waitingRooms.rules.<a href="./src/resources/waiting-rooms/rules.ts">waitingRoomReplaceWaitingRoomRules</a>(zoneIdentifier, waitingRoomId, [ ...body ]) -> RuleWaitingRoomReplaceWaitingRoomRulesResponse | null</code>

## Statuses

Types:

- <code><a href="./src/resources/waiting-rooms/statuses.ts">StatusWaitingRoomGetWaitingRoomStatusResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/status">client.waitingRooms.statuses.<a href="./src/resources/waiting-rooms/statuses.ts">waitingRoomGetWaitingRoomStatus</a>(zoneIdentifier, waitingRoomId) -> StatusWaitingRoomGetWaitingRoomStatusResponse</code>

## Settings

Types:

- <code><a href="./src/resources/waiting-rooms/settings.ts">WaitingroomZoneSettingsResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/settings.ts">SettingUpdateResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/waiting_rooms/settings">client.waitingRooms.settings.<a href="./src/resources/waiting-rooms/settings.ts">update</a>(zoneIdentifier, { ...params }) -> SettingUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/waiting_rooms/settings">client.waitingRooms.settings.<a href="./src/resources/waiting-rooms/settings.ts">get</a>(zoneIdentifier) -> SettingGetResponse</code>

# Web3s

## Hostnames

Types:

- <code><a href="./src/resources/web3s/hostnames/hostnames.ts">HostnameUpdateResponse</a></code>
- <code><a href="./src/resources/web3s/hostnames/hostnames.ts">HostnameDeleteResponse</a></code>
- <code><a href="./src/resources/web3s/hostnames/hostnames.ts">HostnameGetResponse</a></code>
- <code><a href="./src/resources/web3s/hostnames/hostnames.ts">HostnameWeb3HostnameCreateWeb3HostnameResponse</a></code>
- <code><a href="./src/resources/web3s/hostnames/hostnames.ts">HostnameWeb3HostnameListWeb3HostnamesResponse</a></code>

Methods:

- <code title="patch /zones/{zone_identifier}/web3/hostnames/{identifier}">client.web3s.hostnames.<a href="./src/resources/web3s/hostnames/hostnames.ts">update</a>(zoneIdentifier, identifier, { ...params }) -> HostnameUpdateResponse</code>
- <code title="delete /zones/{zone_identifier}/web3/hostnames/{identifier}">client.web3s.hostnames.<a href="./src/resources/web3s/hostnames/hostnames.ts">delete</a>(zoneIdentifier, identifier) -> HostnameDeleteResponse | null</code>
- <code title="get /zones/{zone_identifier}/web3/hostnames/{identifier}">client.web3s.hostnames.<a href="./src/resources/web3s/hostnames/hostnames.ts">get</a>(zoneIdentifier, identifier) -> HostnameGetResponse</code>
- <code title="post /zones/{zone_identifier}/web3/hostnames">client.web3s.hostnames.<a href="./src/resources/web3s/hostnames/hostnames.ts">web3HostnameCreateWeb3Hostname</a>(zoneIdentifier, { ...params }) -> HostnameWeb3HostnameCreateWeb3HostnameResponse</code>
- <code title="get /zones/{zone_identifier}/web3/hostnames">client.web3s.hostnames.<a href="./src/resources/web3s/hostnames/hostnames.ts">web3HostnameListWeb3Hostnames</a>(zoneIdentifier) -> HostnameWeb3HostnameListWeb3HostnamesResponse | null</code>

### IpfsUniversalPaths

#### ContentLists

Types:

- <code><a href="./src/resources/web3s/hostnames/ipfs-universal-paths/content-lists/content-lists.ts">ContentListWeb3HostnameIpfsUniversalPathGatewayContentListDetailsResponse</a></code>
- <code><a href="./src/resources/web3s/hostnames/ipfs-universal-paths/content-lists/content-lists.ts">ContentListWeb3HostnameUpdateIpfsUniversalPathGatewayContentListResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list">client.web3s.hostnames.ipfsUniversalPaths.contentLists.<a href="./src/resources/web3s/hostnames/ipfs-universal-paths/content-lists/content-lists.ts">web3HostnameIpfsUniversalPathGatewayContentListDetails</a>(zoneIdentifier, identifier) -> ContentListWeb3HostnameIpfsUniversalPathGatewayContentListDetailsResponse</code>
- <code title="put /zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list">client.web3s.hostnames.ipfsUniversalPaths.contentLists.<a href="./src/resources/web3s/hostnames/ipfs-universal-paths/content-lists/content-lists.ts">web3HostnameUpdateIpfsUniversalPathGatewayContentList</a>(zoneIdentifier, identifier, { ...params }) -> ContentListWeb3HostnameUpdateIpfsUniversalPathGatewayContentListResponse</code>

##### Entries

Types:

- <code><a href="./src/resources/web3s/hostnames/ipfs-universal-paths/content-lists/entries.ts">EntryUpdateResponse</a></code>
- <code><a href="./src/resources/web3s/hostnames/ipfs-universal-paths/content-lists/entries.ts">EntryDeleteResponse</a></code>
- <code><a href="./src/resources/web3s/hostnames/ipfs-universal-paths/content-lists/entries.ts">EntryGetResponse</a></code>
- <code><a href="./src/resources/web3s/hostnames/ipfs-universal-paths/content-lists/entries.ts">EntryWeb3HostnameCreateIpfsUniversalPathGatewayContentListEntryResponse</a></code>
- <code><a href="./src/resources/web3s/hostnames/ipfs-universal-paths/content-lists/entries.ts">EntryWeb3HostnameListIpfsUniversalPathGatewayContentListEntriesResponse</a></code>

Methods:

- <code title="put /zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{content_list_entry_identifier}">client.web3s.hostnames.ipfsUniversalPaths.contentLists.entries.<a href="./src/resources/web3s/hostnames/ipfs-universal-paths/content-lists/entries.ts">update</a>(zoneIdentifier, identifier, contentListEntryIdentifier, { ...params }) -> EntryUpdateResponse</code>
- <code title="delete /zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{content_list_entry_identifier}">client.web3s.hostnames.ipfsUniversalPaths.contentLists.entries.<a href="./src/resources/web3s/hostnames/ipfs-universal-paths/content-lists/entries.ts">delete</a>(zoneIdentifier, identifier, contentListEntryIdentifier) -> EntryDeleteResponse | null</code>
- <code title="get /zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{content_list_entry_identifier}">client.web3s.hostnames.ipfsUniversalPaths.contentLists.entries.<a href="./src/resources/web3s/hostnames/ipfs-universal-paths/content-lists/entries.ts">get</a>(zoneIdentifier, identifier, contentListEntryIdentifier) -> EntryGetResponse</code>
- <code title="post /zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries">client.web3s.hostnames.ipfsUniversalPaths.contentLists.entries.<a href="./src/resources/web3s/hostnames/ipfs-universal-paths/content-lists/entries.ts">web3HostnameCreateIpfsUniversalPathGatewayContentListEntry</a>(zoneIdentifier, identifier, { ...params }) -> EntryWeb3HostnameCreateIpfsUniversalPathGatewayContentListEntryResponse</code>
- <code title="get /zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries">client.web3s.hostnames.ipfsUniversalPaths.contentLists.entries.<a href="./src/resources/web3s/hostnames/ipfs-universal-paths/content-lists/entries.ts">web3HostnameListIpfsUniversalPathGatewayContentListEntries</a>(zoneIdentifier, identifier) -> EntryWeb3HostnameListIpfsUniversalPathGatewayContentListEntriesResponse | null</code>

# Workers

## Scripts

Types:

- <code><a href="./src/resources/workers/scripts/scripts.ts">ScriptCreateResponse</a></code>
- <code><a href="./src/resources/workers/scripts/scripts.ts">ScriptUpdateResponse</a></code>
- <code><a href="./src/resources/workers/scripts/scripts.ts">ScriptListResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/workers/script">client.workers.scripts.<a href="./src/resources/workers/scripts/scripts.ts">create</a>(zoneId) -> ScriptCreateResponse</code>
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

- <code><a href="./src/resources/workers/scripts/schedules.ts">ScheduleWorkerCronTriggerGetCronTriggersResponse</a></code>
- <code><a href="./src/resources/workers/scripts/schedules.ts">ScheduleWorkerCronTriggerUpdateCronTriggersResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/schedules">client.workers.scripts.schedules.<a href="./src/resources/workers/scripts/schedules.ts">workerCronTriggerGetCronTriggers</a>(accountId, scriptName) -> ScheduleWorkerCronTriggerGetCronTriggersResponse</code>
- <code title="put /accounts/{account_id}/workers/scripts/{script_name}/schedules">client.workers.scripts.schedules.<a href="./src/resources/workers/scripts/schedules.ts">workerCronTriggerUpdateCronTriggers</a>(accountId, scriptName, { ...params }) -> ScheduleWorkerCronTriggerUpdateCronTriggersResponse</code>

### Tails

Types:

- <code><a href="./src/resources/workers/scripts/tails.ts">TailDeleteResponse</a></code>
- <code><a href="./src/resources/workers/scripts/tails.ts">TailWorkerTailLogsListTailsResponse</a></code>
- <code><a href="./src/resources/workers/scripts/tails.ts">TailWorkerTailLogsStartTailResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/workers/scripts/{script_name}/tails/{id}">client.workers.scripts.tails.<a href="./src/resources/workers/scripts/tails.ts">delete</a>(accountId, scriptName, id) -> TailDeleteResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/tails">client.workers.scripts.tails.<a href="./src/resources/workers/scripts/tails.ts">workerTailLogsListTails</a>(accountId, scriptName) -> TailWorkerTailLogsListTailsResponse</code>
- <code title="post /accounts/{account_id}/workers/scripts/{script_name}/tails">client.workers.scripts.tails.<a href="./src/resources/workers/scripts/tails.ts">workerTailLogsStartTail</a>(accountId, scriptName) -> TailWorkerTailLogsStartTailResponse</code>

### UsageModels

Types:

- <code><a href="./src/resources/workers/scripts/usage-models.ts">UsageModelWorkerScriptFetchUsageModelResponse</a></code>
- <code><a href="./src/resources/workers/scripts/usage-models.ts">UsageModelWorkerScriptUpdateUsageModelResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/usage-model">client.workers.scripts.usageModels.<a href="./src/resources/workers/scripts/usage-models.ts">workerScriptFetchUsageModel</a>(accountId, scriptName) -> UsageModelWorkerScriptFetchUsageModelResponse</code>
- <code title="put /accounts/{account_id}/workers/scripts/{script_name}/usage-model">client.workers.scripts.usageModels.<a href="./src/resources/workers/scripts/usage-models.ts">workerScriptUpdateUsageModel</a>(accountId, scriptName, { ...params }) -> UsageModelWorkerScriptUpdateUsageModelResponse</code>

## Filters

Types:

- <code><a href="./src/resources/workers/filters.ts">FilterUpdateResponse</a></code>
- <code><a href="./src/resources/workers/filters.ts">FilterDeleteResponse</a></code>
- <code><a href="./src/resources/workers/filters.ts">FilterWorkerFiltersDeprecatedCreateFilterResponse</a></code>
- <code><a href="./src/resources/workers/filters.ts">FilterWorkerFiltersDeprecatedListFiltersResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/workers/filters/{filter_id}">client.workers.filters.<a href="./src/resources/workers/filters.ts">update</a>(zoneId, filterId, { ...params }) -> FilterUpdateResponse</code>
- <code title="delete /zones/{zone_id}/workers/filters/{filter_id}">client.workers.filters.<a href="./src/resources/workers/filters.ts">delete</a>(zoneId, filterId) -> FilterDeleteResponse | null</code>
- <code title="post /zones/{zone_id}/workers/filters">client.workers.filters.<a href="./src/resources/workers/filters.ts">workerFiltersDeprecatedCreateFilter</a>(zoneId, { ...params }) -> FilterWorkerFiltersDeprecatedCreateFilterResponse | null</code>
- <code title="get /zones/{zone_id}/workers/filters">client.workers.filters.<a href="./src/resources/workers/filters.ts">workerFiltersDeprecatedListFilters</a>(zoneId) -> FilterWorkerFiltersDeprecatedListFiltersResponse</code>

## Routes

Types:

- <code><a href="./src/resources/workers/routes.ts">RouteUpdateResponse</a></code>
- <code><a href="./src/resources/workers/routes.ts">RouteDeleteResponse</a></code>
- <code><a href="./src/resources/workers/routes.ts">RouteGetResponse</a></code>
- <code><a href="./src/resources/workers/routes.ts">RouteWorkerRoutesCreateRouteResponse</a></code>
- <code><a href="./src/resources/workers/routes.ts">RouteWorkerRoutesListRoutesResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/workers/routes/{route_id}">client.workers.routes.<a href="./src/resources/workers/routes.ts">update</a>(zoneId, routeId, { ...params }) -> RouteUpdateResponse</code>
- <code title="delete /zones/{zone_id}/workers/routes/{route_id}">client.workers.routes.<a href="./src/resources/workers/routes.ts">delete</a>(zoneId, routeId) -> RouteDeleteResponse</code>
- <code title="get /zones/{zone_id}/workers/routes/{route_id}">client.workers.routes.<a href="./src/resources/workers/routes.ts">get</a>(zoneId, routeId) -> RouteGetResponse</code>
- <code title="post /zones/{zone_id}/workers/routes">client.workers.routes.<a href="./src/resources/workers/routes.ts">workerRoutesCreateRoute</a>(zoneId, { ...params }) -> RouteWorkerRoutesCreateRouteResponse</code>
- <code title="get /zones/{zone_id}/workers/routes">client.workers.routes.<a href="./src/resources/workers/routes.ts">workerRoutesListRoutes</a>(zoneId) -> RouteWorkerRoutesListRoutesResponse</code>

## AccountSettings

Types:

- <code><a href="./src/resources/workers/account-settings.ts">AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsResponse</a></code>
- <code><a href="./src/resources/workers/account-settings.ts">AccountSettingWorkerAccountSettingsFetchWorkerAccountSettingsResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/account-settings">client.workers.accountSettings.<a href="./src/resources/workers/account-settings.ts">workerAccountSettingsCreateWorkerAccountSettings</a>(accountId, { ...params }) -> AccountSettingWorkerAccountSettingsCreateWorkerAccountSettingsResponse</code>
- <code title="get /accounts/{account_id}/workers/account-settings">client.workers.accountSettings.<a href="./src/resources/workers/account-settings.ts">workerAccountSettingsFetchWorkerAccountSettings</a>(accountId) -> AccountSettingWorkerAccountSettingsFetchWorkerAccountSettingsResponse</code>

## Deployments

### ByScripts

Types:

- <code><a href="./src/resources/workers/deployments/by-scripts/by-scripts.ts">ByScriptWorkerDeploymentsListDeploymentsResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/workers/deployments/by-script/{script_id}">client.workers.deployments.byScripts.<a href="./src/resources/workers/deployments/by-scripts/by-scripts.ts">workerDeploymentsListDeployments</a>(accountId, scriptId) -> ByScriptWorkerDeploymentsListDeploymentsResponse</code>

#### Details

Types:

- <code><a href="./src/resources/workers/deployments/by-scripts/details.ts">DetailGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/workers/deployments/by-script/{script_id}/detail/{deployment_id}">client.workers.deployments.byScripts.details.<a href="./src/resources/workers/deployments/by-scripts/details.ts">get</a>(accountId, scriptId, deploymentId) -> DetailGetResponse</code>

## Domains

Types:

- <code><a href="./src/resources/workers/domains.ts">DomainGetResponse</a></code>
- <code><a href="./src/resources/workers/domains.ts">DomainWorkerDomainAttachToDomainResponse</a></code>
- <code><a href="./src/resources/workers/domains.ts">DomainWorkerDomainListDomainsResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/workers/domains/{domain_id}">client.workers.domains.<a href="./src/resources/workers/domains.ts">delete</a>(accountId, domainId) -> void</code>
- <code title="get /accounts/{account_id}/workers/domains/{domain_id}">client.workers.domains.<a href="./src/resources/workers/domains.ts">get</a>(accountId, domainId) -> DomainGetResponse</code>
- <code title="put /accounts/{account_id}/workers/domains">client.workers.domains.<a href="./src/resources/workers/domains.ts">workerDomainAttachToDomain</a>(accountId, { ...params }) -> DomainWorkerDomainAttachToDomainResponse</code>
- <code title="get /accounts/{account_id}/workers/domains">client.workers.domains.<a href="./src/resources/workers/domains.ts">workerDomainListDomains</a>(accountId, { ...params }) -> DomainWorkerDomainListDomainsResponse</code>

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

- <code><a href="./src/resources/workers/queues/queues.ts">QueueUpdateResponse</a></code>
- <code><a href="./src/resources/workers/queues/queues.ts">QueueListResponse</a></code>
- <code><a href="./src/resources/workers/queues/queues.ts">QueueDeleteResponse</a></code>
- <code><a href="./src/resources/workers/queues/queues.ts">QueueGetResponse</a></code>
- <code><a href="./src/resources/workers/queues/queues.ts">QueueQueueCreateQueueResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/queues/{name}">client.workers.queues.<a href="./src/resources/workers/queues/queues.ts">update</a>(accountId, name, { ...params }) -> QueueUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/workers/queues">client.workers.queues.<a href="./src/resources/workers/queues/queues.ts">list</a>(accountId) -> QueueListResponse | null</code>
- <code title="delete /accounts/{account_id}/workers/queues/{name}">client.workers.queues.<a href="./src/resources/workers/queues/queues.ts">delete</a>(accountId, name) -> QueueDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/workers/queues/{name}">client.workers.queues.<a href="./src/resources/workers/queues/queues.ts">get</a>(accountId, name) -> QueueGetResponse | null</code>
- <code title="post /accounts/{account_id}/workers/queues">client.workers.queues.<a href="./src/resources/workers/queues/queues.ts">queueCreateQueue</a>(accountId, { ...params }) -> QueueQueueCreateQueueResponse | null</code>

### Consumers

Types:

- <code><a href="./src/resources/workers/queues/consumers.ts">ConsumerUpdateResponse</a></code>
- <code><a href="./src/resources/workers/queues/consumers.ts">ConsumerListResponse</a></code>
- <code><a href="./src/resources/workers/queues/consumers.ts">ConsumerDeleteResponse</a></code>
- <code><a href="./src/resources/workers/queues/consumers.ts">ConsumerQueueCreateQueueConsumerResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/queues/{name}/consumers/{consumer_name}">client.workers.queues.consumers.<a href="./src/resources/workers/queues/consumers.ts">update</a>(accountId, name, consumerName, { ...params }) -> ConsumerUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/workers/queues/{name}/consumers">client.workers.queues.consumers.<a href="./src/resources/workers/queues/consumers.ts">list</a>(accountId, name) -> ConsumerListResponse | null</code>
- <code title="delete /accounts/{account_id}/workers/queues/{name}/consumers/{consumer_name}">client.workers.queues.consumers.<a href="./src/resources/workers/queues/consumers.ts">delete</a>(accountId, name, consumerName) -> ConsumerDeleteResponse | null</code>
- <code title="post /accounts/{account_id}/workers/queues/{name}/consumers">client.workers.queues.consumers.<a href="./src/resources/workers/queues/consumers.ts">queueCreateQueueConsumer</a>(accountId, name, { ...params }) -> ConsumerQueueCreateQueueConsumerResponse | null</code>

## Subdomains

Types:

- <code><a href="./src/resources/workers/subdomains.ts">SubdomainWorkerSubdomainCreateSubdomainResponse</a></code>
- <code><a href="./src/resources/workers/subdomains.ts">SubdomainWorkerSubdomainGetSubdomainResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/subdomain">client.workers.subdomains.<a href="./src/resources/workers/subdomains.ts">workerSubdomainCreateSubdomain</a>(accountId, { ...params }) -> SubdomainWorkerSubdomainCreateSubdomainResponse</code>
- <code title="get /accounts/{account_id}/workers/subdomain">client.workers.subdomains.<a href="./src/resources/workers/subdomains.ts">workerSubdomainGetSubdomain</a>(accountId) -> SubdomainWorkerSubdomainGetSubdomainResponse</code>

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

- <code><a href="./src/resources/workers/services/environments/settings.ts">SettingGetResponse</a></code>
- <code><a href="./src/resources/workers/services/environments/settings.ts">SettingModifyResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/workers/services/{service_name}/environments/{environment_name}/settings">client.workers.services.environments.settings.<a href="./src/resources/workers/services/environments/settings.ts">get</a>(accountId, serviceName, environmentName) -> SettingGetResponse</code>
- <code title="patch /accounts/{account_id}/workers/services/{service_name}/environments/{environment_name}/settings">client.workers.services.environments.settings.<a href="./src/resources/workers/services/environments/settings.ts">modify</a>(accountId, serviceName, environmentName, { ...params }) -> SettingModifyResponse</code>

## Script

Methods:

- <code title="delete /zones/{zone_id}/workers/script">client.workers.script.<a href="./src/resources/workers/script.ts">delete</a>(zoneId) -> void</code>

# ActivationChecks

Types:

- <code><a href="./src/resources/activation-checks.ts">ActivationCheckPutZonesZoneIDActivationCheckResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/activation_check">client.activationChecks.<a href="./src/resources/activation-checks.ts">putZonesZoneIdActivationCheck</a>(zoneId) -> ActivationCheckPutZonesZoneIDActivationCheckResponse</code>

# ManagedHeaders

Types:

- <code><a href="./src/resources/managed-headers.ts">ManagedHeaderListResponse</a></code>
- <code><a href="./src/resources/managed-headers.ts">ManagedHeaderManagedTransformsUpdateStatusOfManagedTransformsResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/managed_headers">client.managedHeaders.<a href="./src/resources/managed-headers.ts">list</a>(zoneId) -> ManagedHeaderListResponse</code>
- <code title="patch /zones/{zone_id}/managed_headers">client.managedHeaders.<a href="./src/resources/managed-headers.ts">managedTransformsUpdateStatusOfManagedTransforms</a>(zoneId, { ...params }) -> ManagedHeaderManagedTransformsUpdateStatusOfManagedTransformsResponse</code>

# PageShields

Types:

- <code><a href="./src/resources/page-shields/page-shields.ts">PageShieldListResponse</a></code>
- <code><a href="./src/resources/page-shields/page-shields.ts">PageShieldPageShieldUpdatePageShieldSettingsResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/page_shield">client.pageShields.<a href="./src/resources/page-shields/page-shields.ts">list</a>(zoneId) -> PageShieldListResponse</code>
- <code title="put /zones/{zone_id}/page_shield">client.pageShields.<a href="./src/resources/page-shields/page-shields.ts">pageShieldUpdatePageShieldSettings</a>(zoneId, { ...params }) -> PageShieldPageShieldUpdatePageShieldSettingsResponse</code>

## Connections

Types:

- <code><a href="./src/resources/page-shields/connections.ts">ConnectionGetResponse</a></code>
- <code><a href="./src/resources/page-shields/connections.ts">ConnectionPageShieldListPageShieldConnectionsResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/page_shield/connections/{connection_id}">client.pageShields.connections.<a href="./src/resources/page-shields/connections.ts">get</a>(zoneId, connectionId) -> ConnectionGetResponse</code>
- <code title="get /zones/{zone_id}/page_shield/connections">client.pageShields.connections.<a href="./src/resources/page-shields/connections.ts">pageShieldListPageShieldConnections</a>(zoneId, { ...params }) -> ConnectionPageShieldListPageShieldConnectionsResponse | null</code>

## Scripts

Types:

- <code><a href="./src/resources/page-shields/scripts.ts">ScriptGetResponse</a></code>
- <code><a href="./src/resources/page-shields/scripts.ts">ScriptPageShieldListPageShieldScriptsResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/page_shield/scripts/{script_id}">client.pageShields.scripts.<a href="./src/resources/page-shields/scripts.ts">get</a>(zoneId, scriptId) -> ScriptGetResponse</code>
- <code title="get /zones/{zone_id}/page_shield/scripts">client.pageShields.scripts.<a href="./src/resources/page-shields/scripts.ts">pageShieldListPageShieldScripts</a>(zoneId, { ...params }) -> ScriptPageShieldListPageShieldScriptsResponse | null</code>

# Rulesets

Types:

- <code><a href="./src/resources/rulesets/rulesets.ts">RulesetCreateResponse</a></code>
- <code><a href="./src/resources/rulesets/rulesets.ts">RulesetUpdateResponse</a></code>
- <code><a href="./src/resources/rulesets/rulesets.ts">RulesetListResponse</a></code>
- <code><a href="./src/resources/rulesets/rulesets.ts">RulesetGetResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/rulesets">client.rulesets.<a href="./src/resources/rulesets/rulesets.ts">create</a>(accountOrZone, accountOrZoneId, { ...params }) -> RulesetCreateResponse</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}">client.rulesets.<a href="./src/resources/rulesets/rulesets.ts">update</a>(accountOrZone, accountOrZoneId, rulesetId, { ...params }) -> RulesetUpdateResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/rulesets">client.rulesets.<a href="./src/resources/rulesets/rulesets.ts">list</a>(accountOrZone, accountOrZoneId) -> RulesetListResponse</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}">client.rulesets.<a href="./src/resources/rulesets/rulesets.ts">delete</a>(accountOrZone, accountOrZoneId, rulesetId) -> void</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}">client.rulesets.<a href="./src/resources/rulesets/rulesets.ts">get</a>(accountOrZone, accountOrZoneId, rulesetId) -> RulesetGetResponse</code>

## Phases

Types:

- <code><a href="./src/resources/rulesets/phases.ts">PhaseGetResponse</a></code>

Methods:

- <code title="get /{account_or_zone}/{account_or_zone_id}/rulesets/phases/{ruleset_phase}/entrypoint">client.rulesets.phases.<a href="./src/resources/rulesets/phases.ts">get</a>(accountOrZone, accountOrZoneId, rulesetPhase) -> PhaseGetResponse</code>

## Rules

Types:

- <code><a href="./src/resources/rulesets/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">RuleAccountRulesetsCreateAnAccountRulesetRuleResponse</a></code>

Methods:

- <code title="patch /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}/rules/{rule_id}">client.rulesets.rules.<a href="./src/resources/rulesets/rules.ts">update</a>(rulesetId, ruleId, { ...params }) -> RuleUpdateResponse</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}/rules/{rule_id}">client.rulesets.rules.<a href="./src/resources/rulesets/rules.ts">delete</a>(accountOrZone, accountOrZoneId, rulesetId, ruleId) -> RuleDeleteResponse</code>
- <code title="post /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}/rules">client.rulesets.rules.<a href="./src/resources/rulesets/rules.ts">accountRulesetsCreateAnAccountRulesetRule</a>(accountOrZone, accountOrZoneId, rulesetId, { ...params }) -> RuleAccountRulesetsCreateAnAccountRulesetRuleResponse</code>

## Versions

Types:

- <code><a href="./src/resources/rulesets/versions/versions.ts">VersionAccountRulesetsListAnAccountRulesetSVersionsResponse</a></code>
- <code><a href="./src/resources/rulesets/versions/versions.ts">VersionGetResponse</a></code>

Methods:

- <code title="delete /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}/versions/{ruleset_version}">client.rulesets.versions.<a href="./src/resources/rulesets/versions/versions.ts">delete</a>(accountOrZone, accountOrZoneId, rulesetId, rulesetVersion) -> void</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}/versions">client.rulesets.versions.<a href="./src/resources/rulesets/versions/versions.ts">accountRulesetsListAnAccountRulesetSVersions</a>(accountOrZone, accountOrZoneId, rulesetId) -> VersionAccountRulesetsListAnAccountRulesetSVersionsResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}/versions/{ruleset_version}">client.rulesets.versions.<a href="./src/resources/rulesets/versions/versions.ts">get</a>(accountOrZone, accountOrZoneId, rulesetId, rulesetVersion) -> VersionGetResponse</code>

### ByTags

Types:

- <code><a href="./src/resources/rulesets/versions/by-tags.ts">ByTagGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/rulesets/{ruleset_id}/versions/{ruleset_version}/by_tag/{rule_tag}">client.rulesets.versions.byTags.<a href="./src/resources/rulesets/versions/by-tags.ts">get</a>(accountId, rulesetId, rulesetVersion, ruleTag) -> ByTagGetResponse</code>

# URLNormalizations

Types:

- <code><a href="./src/resources/url-normalizations.ts">URLNormalizationURLNormalizationGetURLNormalizationSettingsResponse</a></code>
- <code><a href="./src/resources/url-normalizations.ts">URLNormalizationURLNormalizationUpdateURLNormalizationSettingsResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/url_normalization">client.urlNormalizations.<a href="./src/resources/url-normalizations.ts">urlNormalizationGetURLNormalizationSettings</a>(zoneId) -> URLNormalizationURLNormalizationGetURLNormalizationSettingsResponse</code>
- <code title="put /zones/{zone_id}/url_normalization">client.urlNormalizations.<a href="./src/resources/url-normalizations.ts">urlNormalizationUpdateURLNormalizationSettings</a>(zoneId, { ...params }) -> URLNormalizationURLNormalizationUpdateURLNormalizationSettingsResponse</code>

# Spectrums

## Analytics

### Aggregates

#### Currents

Types:

- <code><a href="./src/resources/spectrums/analytics/aggregates/currents.ts">CurrentSpectrumAggregateAnalyticsGetCurrentAggregatedAnalyticsResponse</a></code>

Methods:

- <code title="get /zones/{zone}/spectrum/analytics/aggregate/current">client.spectrums.analytics.aggregates.currents.<a href="./src/resources/spectrums/analytics/aggregates/currents.ts">spectrumAggregateAnalyticsGetCurrentAggregatedAnalytics</a>(zone, { ...params }) -> CurrentSpectrumAggregateAnalyticsGetCurrentAggregatedAnalyticsResponse</code>

### Events

#### Bytimes

Types:

- <code><a href="./src/resources/spectrums/analytics/events/bytimes.ts">BytimeSpectrumAnalyticsByTimeGetAnalyticsByTimeResponse</a></code>

Methods:

- <code title="get /zones/{zone}/spectrum/analytics/events/bytime">client.spectrums.analytics.events.bytimes.<a href="./src/resources/spectrums/analytics/events/bytimes.ts">spectrumAnalyticsByTimeGetAnalyticsByTime</a>(zone, { ...params }) -> BytimeSpectrumAnalyticsByTimeGetAnalyticsByTimeResponse | null</code>

#### Summaries

Types:

- <code><a href="./src/resources/spectrums/analytics/events/summaries.ts">SummarySpectrumAnalyticsSummaryGetAnalyticsSummaryResponse</a></code>

Methods:

- <code title="get /zones/{zone}/spectrum/analytics/events/summary">client.spectrums.analytics.events.summaries.<a href="./src/resources/spectrums/analytics/events/summaries.ts">spectrumAnalyticsSummaryGetAnalyticsSummary</a>(zone, { ...params }) -> SummarySpectrumAnalyticsSummaryGetAnalyticsSummaryResponse | null</code>

## Apps

Types:

- <code><a href="./src/resources/spectrums/apps.ts">AppUpdateResponse</a></code>
- <code><a href="./src/resources/spectrums/apps.ts">AppDeleteResponse</a></code>
- <code><a href="./src/resources/spectrums/apps.ts">AppGetResponse</a></code>
- <code><a href="./src/resources/spectrums/apps.ts">AppSpectrumApplicationsCreateSpectrumApplicationUsingANameForTheOriginResponse</a></code>
- <code><a href="./src/resources/spectrums/apps.ts">AppSpectrumApplicationsListSpectrumApplicationsResponse</a></code>

Methods:

- <code title="put /zones/{zone}/spectrum/apps/{app_id}">client.spectrums.apps.<a href="./src/resources/spectrums/apps.ts">update</a>(zone, appId, { ...params }) -> AppUpdateResponse | null</code>
- <code title="delete /zones/{zone}/spectrum/apps/{app_id}">client.spectrums.apps.<a href="./src/resources/spectrums/apps.ts">delete</a>(zone, appId) -> AppDeleteResponse | null</code>
- <code title="get /zones/{zone}/spectrum/apps/{app_id}">client.spectrums.apps.<a href="./src/resources/spectrums/apps.ts">get</a>(zone, appId) -> AppGetResponse | null</code>
- <code title="post /zones/{zone}/spectrum/apps">client.spectrums.apps.<a href="./src/resources/spectrums/apps.ts">spectrumApplicationsCreateSpectrumApplicationUsingANameForTheOrigin</a>(zone, { ...params }) -> AppSpectrumApplicationsCreateSpectrumApplicationUsingANameForTheOriginResponse | null</code>
- <code title="get /zones/{zone}/spectrum/apps">client.spectrums.apps.<a href="./src/resources/spectrums/apps.ts">spectrumApplicationsListSpectrumApplications</a>(zone, { ...params }) -> AppSpectrumApplicationsListSpectrumApplicationsResponse | null</code>

# Addresses

## AddressMaps

Types:

- <code><a href="./src/resources/addresses/address-maps/address-maps.ts">AddressMapCreateResponse</a></code>
- <code><a href="./src/resources/addresses/address-maps/address-maps.ts">AddressMapUpdateResponse</a></code>
- <code><a href="./src/resources/addresses/address-maps/address-maps.ts">AddressMapListResponse</a></code>
- <code><a href="./src/resources/addresses/address-maps/address-maps.ts">AddressMapDeleteResponse</a></code>
- <code><a href="./src/resources/addresses/address-maps/address-maps.ts">AddressMapGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/addressing/address_maps">client.addresses.addressMaps.<a href="./src/resources/addresses/address-maps/address-maps.ts">create</a>(accountId, { ...params }) -> AddressMapCreateResponse</code>
- <code title="patch /accounts/{account_id}/addressing/address_maps/{address_map_id}">client.addresses.addressMaps.<a href="./src/resources/addresses/address-maps/address-maps.ts">update</a>(accountId, addressMapId, { ...params }) -> AddressMapUpdateResponse</code>
- <code title="get /accounts/{account_id}/addressing/address_maps">client.addresses.addressMaps.<a href="./src/resources/addresses/address-maps/address-maps.ts">list</a>(accountId) -> AddressMapListResponse | null</code>
- <code title="delete /accounts/{account_id}/addressing/address_maps/{address_map_id}">client.addresses.addressMaps.<a href="./src/resources/addresses/address-maps/address-maps.ts">delete</a>(accountId, addressMapId) -> AddressMapDeleteResponse | null</code>
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

## LoaDocuments

Types:

- <code><a href="./src/resources/addresses/loa-documents/loa-documents.ts">LoaDocumentIPAddressManagementPrefixesUploadLoaDocumentResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/addressing/loa_documents">client.addresses.loaDocuments.<a href="./src/resources/addresses/loa-documents/loa-documents.ts">ipAddressManagementPrefixesUploadLoaDocument</a>(accountId, { ...params }) -> LoaDocumentIPAddressManagementPrefixesUploadLoaDocumentResponse</code>

### Downloads

Types:

- <code><a href="./src/resources/addresses/loa-documents/downloads.ts">DownloadListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/addressing/loa_documents/{loa_document_id}/download">client.addresses.loaDocuments.downloads.<a href="./src/resources/addresses/loa-documents/downloads.ts">list</a>(accountId, loaDocumentId) -> unknown</code>

## Prefixes

Types:

- <code><a href="./src/resources/addresses/prefixes/prefixes.ts">PrefixUpdateResponse</a></code>
- <code><a href="./src/resources/addresses/prefixes/prefixes.ts">PrefixDeleteResponse</a></code>
- <code><a href="./src/resources/addresses/prefixes/prefixes.ts">PrefixGetResponse</a></code>
- <code><a href="./src/resources/addresses/prefixes/prefixes.ts">PrefixIPAddressManagementPrefixesAddPrefixResponse</a></code>
- <code><a href="./src/resources/addresses/prefixes/prefixes.ts">PrefixIPAddressManagementPrefixesListPrefixesResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/addressing/prefixes/{prefix_id}">client.addresses.prefixes.<a href="./src/resources/addresses/prefixes/prefixes.ts">update</a>(accountId, prefixId, { ...params }) -> PrefixUpdateResponse</code>
- <code title="delete /accounts/{account_id}/addressing/prefixes/{prefix_id}">client.addresses.prefixes.<a href="./src/resources/addresses/prefixes/prefixes.ts">delete</a>(accountId, prefixId) -> PrefixDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}">client.addresses.prefixes.<a href="./src/resources/addresses/prefixes/prefixes.ts">get</a>(accountId, prefixId) -> PrefixGetResponse</code>
- <code title="post /accounts/{account_id}/addressing/prefixes">client.addresses.prefixes.<a href="./src/resources/addresses/prefixes/prefixes.ts">ipAddressManagementPrefixesAddPrefix</a>(accountId, { ...params }) -> PrefixIPAddressManagementPrefixesAddPrefixResponse</code>
- <code title="get /accounts/{account_id}/addressing/prefixes">client.addresses.prefixes.<a href="./src/resources/addresses/prefixes/prefixes.ts">ipAddressManagementPrefixesListPrefixes</a>(accountId) -> PrefixIPAddressManagementPrefixesListPrefixesResponse | null</code>

### BGPs

#### Statuses

Types:

- <code><a href="./src/resources/addresses/prefixes/bgps/statuses.ts">StatusIPAddressManagementDynamicAdvertisementGetAdvertisementStatusResponse</a></code>
- <code><a href="./src/resources/addresses/prefixes/bgps/statuses.ts">StatusIPAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatusResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/status">client.addresses.prefixes.bgps.statuses.<a href="./src/resources/addresses/prefixes/bgps/statuses.ts">ipAddressManagementDynamicAdvertisementGetAdvertisementStatus</a>(accountId, prefixId) -> StatusIPAddressManagementDynamicAdvertisementGetAdvertisementStatusResponse</code>
- <code title="patch /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/status">client.addresses.prefixes.bgps.statuses.<a href="./src/resources/addresses/prefixes/bgps/statuses.ts">ipAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatus</a>(accountId, prefixId, { ...params }) -> StatusIPAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatusResponse</code>

### Delegations

Types:

- <code><a href="./src/resources/addresses/prefixes/delegations.ts">DelegationDeleteResponse</a></code>
- <code><a href="./src/resources/addresses/prefixes/delegations.ts">DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationResponse</a></code>
- <code><a href="./src/resources/addresses/prefixes/delegations.ts">DelegationIPAddressManagementPrefixDelegationListPrefixDelegationsResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/addressing/prefixes/{prefix_id}/delegations/{delegation_id}">client.addresses.prefixes.delegations.<a href="./src/resources/addresses/prefixes/delegations.ts">delete</a>(accountId, prefixId, delegationId) -> DelegationDeleteResponse</code>
- <code title="post /accounts/{account_id}/addressing/prefixes/{prefix_id}/delegations">client.addresses.prefixes.delegations.<a href="./src/resources/addresses/prefixes/delegations.ts">ipAddressManagementPrefixDelegationCreatePrefixDelegation</a>(accountId, prefixId, { ...params }) -> DelegationIPAddressManagementPrefixDelegationCreatePrefixDelegationResponse</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/delegations">client.addresses.prefixes.delegations.<a href="./src/resources/addresses/prefixes/delegations.ts">ipAddressManagementPrefixDelegationListPrefixDelegations</a>(accountId, prefixId) -> DelegationIPAddressManagementPrefixDelegationListPrefixDelegationsResponse | null</code>

# AuditLogs

Types:

- <code><a href="./src/resources/audit-logs.ts">AuditLogAuditLogsGetAccountAuditLogsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/audit_logs">client.auditLogs.<a href="./src/resources/audit-logs.ts">auditLogsGetAccountAuditLogs</a>(accountIdentifier, { ...params }) -> AuditLogAuditLogsGetAccountAuditLogsResponse</code>

# Billings

## Profiles

Types:

- <code><a href="./src/resources/billings/profiles.ts">ProfileAccountBillingProfileBillingProfileDetailsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/billing/profile">client.billings.profiles.<a href="./src/resources/billings/profiles.ts">accountBillingProfileBillingProfileDetails</a>(accountIdentifier) -> ProfileAccountBillingProfileBillingProfileDetailsResponse</code>

# BrandProtections

## Submits

Types:

- <code><a href="./src/resources/brand-protections/submits.ts">SubmitPhishingURLScannerSubmitSuspiciousURLForScanningResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/brand-protection/submit">client.brandProtections.submits.<a href="./src/resources/brand-protections/submits.ts">phishingURLScannerSubmitSuspiciousURLForScanning</a>(accountId, { ...params }) -> SubmitPhishingURLScannerSubmitSuspiciousURLForScanningResponse</code>

## URLInfos

Types:

- <code><a href="./src/resources/brand-protections/url-infos.ts">URLInfoPhishingURLInformationGetResultsForAURLScanResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/brand-protection/url-info">client.brandProtections.urlInfos.<a href="./src/resources/brand-protections/url-infos.ts">phishingURLInformationGetResultsForAURLScan</a>(accountId, { ...params }) -> URLInfoPhishingURLInformationGetResultsForAURLScanResponse</code>

# CfdTunnels

Types:

- <code><a href="./src/resources/cfd-tunnels/cfd-tunnels.ts">CfdTunnelUpdateResponse</a></code>
- <code><a href="./src/resources/cfd-tunnels/cfd-tunnels.ts">CfdTunnelDeleteResponse</a></code>
- <code><a href="./src/resources/cfd-tunnels/cfd-tunnels.ts">CfdTunnelCloudflareTunnelCreateACloudflareTunnelResponse</a></code>
- <code><a href="./src/resources/cfd-tunnels/cfd-tunnels.ts">CfdTunnelCloudflareTunnelListCloudflareTunnelsResponse</a></code>
- <code><a href="./src/resources/cfd-tunnels/cfd-tunnels.ts">CfdTunnelGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/cfd_tunnel/{tunnel_id}">client.cfdTunnels.<a href="./src/resources/cfd-tunnels/cfd-tunnels.ts">update</a>(accountId, tunnelId, { ...params }) -> CfdTunnelUpdateResponse</code>
- <code title="delete /accounts/{account_id}/cfd_tunnel/{tunnel_id}">client.cfdTunnels.<a href="./src/resources/cfd-tunnels/cfd-tunnels.ts">delete</a>(accountId, tunnelId, { ...params }) -> CfdTunnelDeleteResponse</code>
- <code title="post /accounts/{account_id}/cfd_tunnel">client.cfdTunnels.<a href="./src/resources/cfd-tunnels/cfd-tunnels.ts">cloudflareTunnelCreateACloudflareTunnel</a>(accountId, { ...params }) -> CfdTunnelCloudflareTunnelCreateACloudflareTunnelResponse</code>
- <code title="get /accounts/{account_id}/cfd_tunnel">client.cfdTunnels.<a href="./src/resources/cfd-tunnels/cfd-tunnels.ts">cloudflareTunnelListCloudflareTunnels</a>(accountId, { ...params }) -> CfdTunnelCloudflareTunnelListCloudflareTunnelsResponse | null</code>
- <code title="get /accounts/{account_id}/cfd_tunnel/{tunnel_id}">client.cfdTunnels.<a href="./src/resources/cfd-tunnels/cfd-tunnels.ts">get</a>(accountId, tunnelId) -> CfdTunnelGetResponse</code>

## Configurations

Types:

- <code><a href="./src/resources/cfd-tunnels/configurations.ts">ConfigurationCloudflareTunnelConfigurationGetConfigurationResponse</a></code>
- <code><a href="./src/resources/cfd-tunnels/configurations.ts">ConfigurationCloudflareTunnelConfigurationPutConfigurationResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cfd_tunnel/{tunnel_id}/configurations">client.cfdTunnels.configurations.<a href="./src/resources/cfd-tunnels/configurations.ts">cloudflareTunnelConfigurationGetConfiguration</a>(accountId, tunnelId) -> ConfigurationCloudflareTunnelConfigurationGetConfigurationResponse</code>
- <code title="put /accounts/{account_id}/cfd_tunnel/{tunnel_id}/configurations">client.cfdTunnels.configurations.<a href="./src/resources/cfd-tunnels/configurations.ts">cloudflareTunnelConfigurationPutConfiguration</a>(accountId, tunnelId, { ...params }) -> ConfigurationCloudflareTunnelConfigurationPutConfigurationResponse</code>

## Connections

Types:

- <code><a href="./src/resources/cfd-tunnels/connections.ts">ConnectionDeleteResponse</a></code>
- <code><a href="./src/resources/cfd-tunnels/connections.ts">ConnectionCloudflareTunnelListCloudflareTunnelConnectionsResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/cfd_tunnel/{tunnel_id}/connections">client.cfdTunnels.connections.<a href="./src/resources/cfd-tunnels/connections.ts">delete</a>(accountId, tunnelId, { ...params }) -> ConnectionDeleteResponse</code>
- <code title="get /accounts/{account_id}/cfd_tunnel/{tunnel_id}/connections">client.cfdTunnels.connections.<a href="./src/resources/cfd-tunnels/connections.ts">cloudflareTunnelListCloudflareTunnelConnections</a>(accountId, tunnelId) -> ConnectionCloudflareTunnelListCloudflareTunnelConnectionsResponse | null</code>

## Tokens

Types:

- <code><a href="./src/resources/cfd-tunnels/tokens.ts">TokenCloudflareTunnelGetACloudflareTunnelTokenResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cfd_tunnel/{tunnel_id}/token">client.cfdTunnels.tokens.<a href="./src/resources/cfd-tunnels/tokens.ts">cloudflareTunnelGetACloudflareTunnelToken</a>(accountId, tunnelId) -> TokenCloudflareTunnelGetACloudflareTunnelTokenResponse</code>

## Connectors

Types:

- <code><a href="./src/resources/cfd-tunnels/connectors.ts">ConnectorGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cfd_tunnel/{tunnel_id}/connectors/{connector_id}">client.cfdTunnels.connectors.<a href="./src/resources/cfd-tunnels/connectors.ts">get</a>(accountId, tunnelId, connectorId) -> ConnectorGetResponse</code>

## Management

Types:

- <code><a href="./src/resources/cfd-tunnels/management.ts">ManagementCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cfd_tunnel/{tunnel_id}/management">client.cfdTunnels.management.<a href="./src/resources/cfd-tunnels/management.ts">create</a>(accountId, tunnelId, { ...params }) -> ManagementCreateResponse</code>

# Diagnostics

## Traceroutes

Types:

- <code><a href="./src/resources/diagnostics/traceroutes.ts">TracerouteDiagnosticsTracerouteResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/diagnostics/traceroute">client.diagnostics.traceroutes.<a href="./src/resources/diagnostics/traceroutes.ts">diagnosticsTraceroute</a>(accountIdentifier, { ...params }) -> TracerouteDiagnosticsTracerouteResponse | null</code>

# DLPs

## Patterns

### Validates

Types:

- <code><a href="./src/resources/dlps/patterns/validates.ts">ValidateDLPPatternValidationValidatePatternResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/patterns/validate">client.dlps.patterns.validates.<a href="./src/resources/dlps/patterns/validates.ts">dlpPatternValidationValidatePattern</a>(accountId, { ...params }) -> ValidateDLPPatternValidationValidatePatternResponse</code>

## PayloadLogs

Types:

- <code><a href="./src/resources/dlps/payload-logs.ts">PayloadLogDLPPayloadLogSettingsGetSettingsResponse</a></code>
- <code><a href="./src/resources/dlps/payload-logs.ts">PayloadLogDLPPayloadLogSettingsUpdateSettingsResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dlp/payload_log">client.dlps.payloadLogs.<a href="./src/resources/dlps/payload-logs.ts">dlpPayloadLogSettingsGetSettings</a>(accountId) -> PayloadLogDLPPayloadLogSettingsGetSettingsResponse</code>
- <code title="put /accounts/{account_id}/dlp/payload_log">client.dlps.payloadLogs.<a href="./src/resources/dlps/payload-logs.ts">dlpPayloadLogSettingsUpdateSettings</a>(accountId, { ...params }) -> PayloadLogDLPPayloadLogSettingsUpdateSettingsResponse</code>

## Profiles

Types:

- <code><a href="./src/resources/dlps/profiles/profiles.ts">ProfileDLPProfilesListAllProfilesResponse</a></code>
- <code><a href="./src/resources/dlps/profiles/profiles.ts">ProfileGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dlp/profiles">client.dlps.profiles.<a href="./src/resources/dlps/profiles/profiles.ts">dlpProfilesListAllProfiles</a>(accountId) -> ProfileDLPProfilesListAllProfilesResponse | null</code>
- <code title="get /accounts/{account_id}/dlp/profiles/{profile_id}">client.dlps.profiles.<a href="./src/resources/dlps/profiles/profiles.ts">get</a>(accountId, profileId) -> ProfileGetResponse</code>

### Customs

Types:

- <code><a href="./src/resources/dlps/profiles/customs.ts">CustomUpdateResponse</a></code>
- <code><a href="./src/resources/dlps/profiles/customs.ts">CustomDeleteResponse</a></code>
- <code><a href="./src/resources/dlps/profiles/customs.ts">CustomDLPProfilesCreateCustomProfilesResponse</a></code>
- <code><a href="./src/resources/dlps/profiles/customs.ts">CustomGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/dlp/profiles/custom/{profile_id}">client.dlps.profiles.customs.<a href="./src/resources/dlps/profiles/customs.ts">update</a>(accountId, profileId, { ...params }) -> CustomUpdateResponse</code>
- <code title="delete /accounts/{account_id}/dlp/profiles/custom/{profile_id}">client.dlps.profiles.customs.<a href="./src/resources/dlps/profiles/customs.ts">delete</a>(accountId, profileId) -> CustomDeleteResponse</code>
- <code title="post /accounts/{account_id}/dlp/profiles/custom">client.dlps.profiles.customs.<a href="./src/resources/dlps/profiles/customs.ts">dlpProfilesCreateCustomProfiles</a>(accountId, { ...params }) -> CustomDLPProfilesCreateCustomProfilesResponse | null</code>
- <code title="get /accounts/{account_id}/dlp/profiles/custom/{profile_id}">client.dlps.profiles.customs.<a href="./src/resources/dlps/profiles/customs.ts">get</a>(accountId, profileId) -> CustomGetResponse</code>

### Predefineds

Types:

- <code><a href="./src/resources/dlps/profiles/predefineds.ts">PredefinedUpdateResponse</a></code>
- <code><a href="./src/resources/dlps/profiles/predefineds.ts">PredefinedGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/dlp/profiles/predefined/{profile_id}">client.dlps.profiles.predefineds.<a href="./src/resources/dlps/profiles/predefineds.ts">update</a>(accountId, profileId, { ...params }) -> PredefinedUpdateResponse</code>
- <code title="get /accounts/{account_id}/dlp/profiles/predefined/{profile_id}">client.dlps.profiles.predefineds.<a href="./src/resources/dlps/profiles/predefineds.ts">get</a>(accountId, profileId) -> PredefinedGetResponse</code>

# DNSFirewalls

Types:

- <code><a href="./src/resources/dns-firewalls/dns-firewalls.ts">DNSFirewallCreateResponse</a></code>
- <code><a href="./src/resources/dns-firewalls/dns-firewalls.ts">DNSFirewallUpdateResponse</a></code>
- <code><a href="./src/resources/dns-firewalls/dns-firewalls.ts">DNSFirewallListResponse</a></code>
- <code><a href="./src/resources/dns-firewalls/dns-firewalls.ts">DNSFirewallDeleteResponse</a></code>
- <code><a href="./src/resources/dns-firewalls/dns-firewalls.ts">DNSFirewallGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dns_firewall">client.dnsFirewalls.<a href="./src/resources/dns-firewalls/dns-firewalls.ts">create</a>(accountId, { ...params }) -> DNSFirewallCreateResponse</code>
- <code title="patch /accounts/{account_id}/dns_firewall/{dns_firewall_id}">client.dnsFirewalls.<a href="./src/resources/dns-firewalls/dns-firewalls.ts">update</a>(accountId, dnsFirewallId, { ...params }) -> DNSFirewallUpdateResponse</code>
- <code title="get /accounts/{account_id}/dns_firewall">client.dnsFirewalls.<a href="./src/resources/dns-firewalls/dns-firewalls.ts">list</a>(accountId, { ...params }) -> DNSFirewallListResponse | null</code>
- <code title="delete /accounts/{account_id}/dns_firewall/{dns_firewall_id}">client.dnsFirewalls.<a href="./src/resources/dns-firewalls/dns-firewalls.ts">delete</a>(accountId, dnsFirewallId) -> DNSFirewallDeleteResponse</code>
- <code title="get /accounts/{account_id}/dns_firewall/{dns_firewall_id}">client.dnsFirewalls.<a href="./src/resources/dns-firewalls/dns-firewalls.ts">get</a>(accountId, dnsFirewallId) -> DNSFirewallGetResponse</code>

## DNSAnalytics

### Reports

Types:

- <code><a href="./src/resources/dns-firewalls/dns-analytics/reports/reports.ts">ReportListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/dns_firewall/{identifier}/dns_analytics/report">client.dnsFirewalls.dnsAnalytics.reports.<a href="./src/resources/dns-firewalls/dns-analytics/reports/reports.ts">list</a>(accountIdentifier, identifier, { ...params }) -> ReportListResponse</code>

#### Bytimes

Types:

- <code><a href="./src/resources/dns-firewalls/dns-analytics/reports/bytimes.ts">BytimeListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/dns_firewall/{identifier}/dns_analytics/report/bytime">client.dnsFirewalls.dnsAnalytics.reports.bytimes.<a href="./src/resources/dns-firewalls/dns-analytics/reports/bytimes.ts">list</a>(accountIdentifier, identifier, { ...params }) -> BytimeListResponse</code>

# Images

## V1s

Types:

- <code><a href="./src/resources/images/v1s/v1s.ts">V1UpdateResponse</a></code>
- <code><a href="./src/resources/images/v1s/v1s.ts">V1DeleteResponse</a></code>
- <code><a href="./src/resources/images/v1s/v1s.ts">V1CloudflareImagesListImagesResponse</a></code>
- <code><a href="./src/resources/images/v1s/v1s.ts">V1CloudflareImagesUploadAnImageViaURLResponse</a></code>
- <code><a href="./src/resources/images/v1s/v1s.ts">V1GetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/images/v1/{image_id}">client.images.v1s.<a href="./src/resources/images/v1s/v1s.ts">update</a>(accountId, imageId, { ...params }) -> V1UpdateResponse</code>
- <code title="delete /accounts/{account_id}/images/v1/{image_id}">client.images.v1s.<a href="./src/resources/images/v1s/v1s.ts">delete</a>(accountId, imageId) -> V1DeleteResponse</code>
- <code title="get /accounts/{account_id}/images/v1">client.images.v1s.<a href="./src/resources/images/v1s/v1s.ts">cloudflareImagesListImages</a>(accountId, { ...params }) -> V1CloudflareImagesListImagesResponse</code>
- <code title="post /accounts/{account_id}/images/v1">client.images.v1s.<a href="./src/resources/images/v1s/v1s.ts">cloudflareImagesUploadAnImageViaURL</a>(accountId, { ...params }) -> V1CloudflareImagesUploadAnImageViaURLResponse</code>
- <code title="get /accounts/{account_id}/images/v1/{image_id}">client.images.v1s.<a href="./src/resources/images/v1s/v1s.ts">get</a>(accountId, imageId) -> V1GetResponse</code>

### Keys

Types:

- <code><a href="./src/resources/images/v1s/keys.ts">KeyCloudflareImagesKeysListSigningKeysResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/images/v1/keys">client.images.v1s.keys.<a href="./src/resources/images/v1s/keys.ts">cloudflareImagesKeysListSigningKeys</a>(accountId) -> KeyCloudflareImagesKeysListSigningKeysResponse</code>

### Stats

Types:

- <code><a href="./src/resources/images/v1s/stats.ts">StatCloudflareImagesImagesUsageStatisticsResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/images/v1/stats">client.images.v1s.stats.<a href="./src/resources/images/v1s/stats.ts">cloudflareImagesImagesUsageStatistics</a>(accountId) -> StatCloudflareImagesImagesUsageStatisticsResponse</code>

### Variants

Types:

- <code><a href="./src/resources/images/v1s/variants.ts">VariantUpdateResponse</a></code>
- <code><a href="./src/resources/images/v1s/variants.ts">VariantDeleteResponse</a></code>
- <code><a href="./src/resources/images/v1s/variants.ts">VariantCloudflareImagesVariantsCreateAVariantResponse</a></code>
- <code><a href="./src/resources/images/v1s/variants.ts">VariantCloudflareImagesVariantsListVariantsResponse</a></code>
- <code><a href="./src/resources/images/v1s/variants.ts">VariantGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/images/v1/variants/{variant_id}">client.images.v1s.variants.<a href="./src/resources/images/v1s/variants.ts">update</a>(accountId, variantId, { ...params }) -> VariantUpdateResponse</code>
- <code title="delete /accounts/{account_id}/images/v1/variants/{variant_id}">client.images.v1s.variants.<a href="./src/resources/images/v1s/variants.ts">delete</a>(accountId, variantId) -> VariantDeleteResponse</code>
- <code title="post /accounts/{account_id}/images/v1/variants">client.images.v1s.variants.<a href="./src/resources/images/v1s/variants.ts">cloudflareImagesVariantsCreateAVariant</a>(accountId, { ...params }) -> VariantCloudflareImagesVariantsCreateAVariantResponse</code>
- <code title="get /accounts/{account_id}/images/v1/variants">client.images.v1s.variants.<a href="./src/resources/images/v1s/variants.ts">cloudflareImagesVariantsListVariants</a>(accountId) -> VariantCloudflareImagesVariantsListVariantsResponse</code>
- <code title="get /accounts/{account_id}/images/v1/variants/{variant_id}">client.images.v1s.variants.<a href="./src/resources/images/v1s/variants.ts">get</a>(accountId, variantId) -> VariantGetResponse</code>

### Blobs

Methods:

- <code title="get /accounts/{account_id}/images/v1/{image_id}/blob">client.images.v1s.blobs.<a href="./src/resources/images/v1s/blobs.ts">cloudflareImagesBaseImage</a>(accountId, imageId) -> Response</code>

## V2s

Types:

- <code><a href="./src/resources/images/v2s/v2s.ts">ImagesImagesListResponseV2</a></code>
- <code><a href="./src/resources/images/v2s/v2s.ts">V2ListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/images/v2">client.images.v2s.<a href="./src/resources/images/v2s/v2s.ts">list</a>(accountId, { ...params }) -> V2ListResponse</code>

### DirectUploads

Types:

- <code><a href="./src/resources/images/v2s/direct-uploads.ts">DirectUploadCloudflareImagesCreateAuthenticatedDirectUploadURLV2Response</a></code>

Methods:

- <code title="post /accounts/{account_id}/images/v2/direct_upload">client.images.v2s.directUploads.<a href="./src/resources/images/v2s/direct-uploads.ts">cloudflareImagesCreateAuthenticatedDirectUploadURLV2</a>(accountId, { ...params }) -> DirectUploadCloudflareImagesCreateAuthenticatedDirectUploadURLV2Response</code>

# Intels

## Asn

Types:

- <code><a href="./src/resources/intels/asn/asn.ts">AsnGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/asn/{asn}">client.intels.asn.<a href="./src/resources/intels/asn/asn.ts">get</a>(accountId, asn) -> AsnGetResponse</code>

### Subnets

Types:

- <code><a href="./src/resources/intels/asn/subnets.ts">SubnetListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/asn/{asn}/subnets">client.intels.asn.subnets.<a href="./src/resources/intels/asn/subnets.ts">list</a>(accountId, asn) -> SubnetListResponse</code>

## DNS

Types:

- <code><a href="./src/resources/intels/dns.ts">DNSPassiveDNSByIPGetPassiveDNSByIPResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/dns">client.intels.dns.<a href="./src/resources/intels/dns.ts">passiveDNSByIPGetPassiveDNSByIP</a>(accountId, { ...params }) -> DNSPassiveDNSByIPGetPassiveDNSByIPResponse</code>

## Domains

Types:

- <code><a href="./src/resources/intels/domains/domains.ts">DomainDomainIntelligenceGetDomainDetailsResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/domain">client.intels.domains.<a href="./src/resources/intels/domains/domains.ts">domainIntelligenceGetDomainDetails</a>(accountId, { ...params }) -> DomainDomainIntelligenceGetDomainDetailsResponse</code>

### Bulks

Types:

- <code><a href="./src/resources/intels/domains/bulks.ts">BulkDomainIntelligenceGetMultipleDomainDetailsResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/domain/bulk">client.intels.domains.bulks.<a href="./src/resources/intels/domains/bulks.ts">domainIntelligenceGetMultipleDomainDetails</a>(accountId, { ...params }) -> BulkDomainIntelligenceGetMultipleDomainDetailsResponse | null</code>

## DomainHistories

Types:

- <code><a href="./src/resources/intels/domain-histories.ts">DomainHistoryListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/domain-history">client.intels.domainHistories.<a href="./src/resources/intels/domain-histories.ts">list</a>(accountId, { ...params }) -> DomainHistoryListResponse | null</code>

## IPs

Types:

- <code><a href="./src/resources/intels/ips.ts">IPIPIntelligenceGetIPOverviewResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/ip">client.intels.ips.<a href="./src/resources/intels/ips.ts">ipIntelligenceGetIPOverview</a>(accountId, { ...params }) -> IPIPIntelligenceGetIPOverviewResponse | null</code>

## IPLists

Types:

- <code><a href="./src/resources/intels/ip-lists.ts">IPListIPListGetIPListsResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/ip-list">client.intels.ipLists.<a href="./src/resources/intels/ip-lists.ts">ipListGetIPLists</a>(accountId) -> IPListIPListGetIPListsResponse | null</code>

## Miscategorizations

Types:

- <code><a href="./src/resources/intels/miscategorizations.ts">MiscategorizationMiscategorizationCreateMiscategorizationResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/intel/miscategorization">client.intels.miscategorizations.<a href="./src/resources/intels/miscategorizations.ts">miscategorizationCreateMiscategorization</a>(accountId, { ...params }) -> MiscategorizationMiscategorizationCreateMiscategorizationResponse</code>

## Whois

Types:

- <code><a href="./src/resources/intels/whois.ts">WhoisWhoisRecordGetWhoisRecordResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/whois">client.intels.whois.<a href="./src/resources/intels/whois.ts">whoisRecordGetWhoisRecord</a>(accountId, { ...params }) -> WhoisWhoisRecordGetWhoisRecordResponse</code>

# Magics

## CfInterconnects

Types:

- <code><a href="./src/resources/magics/cf-interconnects.ts">CfInterconnectUpdateResponse</a></code>
- <code><a href="./src/resources/magics/cf-interconnects.ts">CfInterconnectGetResponse</a></code>
- <code><a href="./src/resources/magics/cf-interconnects.ts">CfInterconnectMagicInterconnectsListInterconnectsResponse</a></code>
- <code><a href="./src/resources/magics/cf-interconnects.ts">CfInterconnectMagicInterconnectsUpdateMultipleInterconnectsResponse</a></code>

Methods:

- <code title="put /accounts/{account_identifier}/magic/cf_interconnects/{tunnel_identifier}">client.magics.cfInterconnects.<a href="./src/resources/magics/cf-interconnects.ts">update</a>(accountIdentifier, tunnelIdentifier, { ...params }) -> CfInterconnectUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/magic/cf_interconnects/{tunnel_identifier}">client.magics.cfInterconnects.<a href="./src/resources/magics/cf-interconnects.ts">get</a>(accountIdentifier, tunnelIdentifier) -> CfInterconnectGetResponse</code>
- <code title="get /accounts/{account_identifier}/magic/cf_interconnects">client.magics.cfInterconnects.<a href="./src/resources/magics/cf-interconnects.ts">magicInterconnectsListInterconnects</a>(accountIdentifier) -> CfInterconnectMagicInterconnectsListInterconnectsResponse</code>
- <code title="put /accounts/{account_identifier}/magic/cf_interconnects">client.magics.cfInterconnects.<a href="./src/resources/magics/cf-interconnects.ts">magicInterconnectsUpdateMultipleInterconnects</a>(accountIdentifier, { ...params }) -> CfInterconnectMagicInterconnectsUpdateMultipleInterconnectsResponse</code>

## GreTunnels

Types:

- <code><a href="./src/resources/magics/gre-tunnels.ts">GreTunnelUpdateResponse</a></code>
- <code><a href="./src/resources/magics/gre-tunnels.ts">GreTunnelDeleteResponse</a></code>
- <code><a href="./src/resources/magics/gre-tunnels.ts">GreTunnelGetResponse</a></code>
- <code><a href="./src/resources/magics/gre-tunnels.ts">GreTunnelMagicGreTunnelsCreateGreTunnelsResponse</a></code>
- <code><a href="./src/resources/magics/gre-tunnels.ts">GreTunnelMagicGreTunnelsListGreTunnelsResponse</a></code>
- <code><a href="./src/resources/magics/gre-tunnels.ts">GreTunnelMagicGreTunnelsUpdateMultipleGreTunnelsResponse</a></code>

Methods:

- <code title="put /accounts/{account_identifier}/magic/gre_tunnels/{tunnel_identifier}">client.magics.greTunnels.<a href="./src/resources/magics/gre-tunnels.ts">update</a>(accountIdentifier, tunnelIdentifier, { ...params }) -> GreTunnelUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/magic/gre_tunnels/{tunnel_identifier}">client.magics.greTunnels.<a href="./src/resources/magics/gre-tunnels.ts">delete</a>(accountIdentifier, tunnelIdentifier) -> GreTunnelDeleteResponse</code>
- <code title="get /accounts/{account_identifier}/magic/gre_tunnels/{tunnel_identifier}">client.magics.greTunnels.<a href="./src/resources/magics/gre-tunnels.ts">get</a>(accountIdentifier, tunnelIdentifier) -> GreTunnelGetResponse</code>
- <code title="post /accounts/{account_identifier}/magic/gre_tunnels">client.magics.greTunnels.<a href="./src/resources/magics/gre-tunnels.ts">magicGreTunnelsCreateGreTunnels</a>(accountIdentifier, { ...params }) -> GreTunnelMagicGreTunnelsCreateGreTunnelsResponse</code>
- <code title="get /accounts/{account_identifier}/magic/gre_tunnels">client.magics.greTunnels.<a href="./src/resources/magics/gre-tunnels.ts">magicGreTunnelsListGreTunnels</a>(accountIdentifier) -> GreTunnelMagicGreTunnelsListGreTunnelsResponse</code>
- <code title="put /accounts/{account_identifier}/magic/gre_tunnels">client.magics.greTunnels.<a href="./src/resources/magics/gre-tunnels.ts">magicGreTunnelsUpdateMultipleGreTunnels</a>(accountIdentifier, { ...params }) -> GreTunnelMagicGreTunnelsUpdateMultipleGreTunnelsResponse</code>

## IpsecTunnels

Types:

- <code><a href="./src/resources/magics/ipsec-tunnels/ipsec-tunnels.ts">IpsecTunnelUpdateResponse</a></code>
- <code><a href="./src/resources/magics/ipsec-tunnels/ipsec-tunnels.ts">IpsecTunnelDeleteResponse</a></code>
- <code><a href="./src/resources/magics/ipsec-tunnels/ipsec-tunnels.ts">IpsecTunnelGetResponse</a></code>
- <code><a href="./src/resources/magics/ipsec-tunnels/ipsec-tunnels.ts">IpsecTunnelMagicIPsecTunnelsCreateIPsecTunnelsResponse</a></code>
- <code><a href="./src/resources/magics/ipsec-tunnels/ipsec-tunnels.ts">IpsecTunnelMagicIPsecTunnelsListIPsecTunnelsResponse</a></code>
- <code><a href="./src/resources/magics/ipsec-tunnels/ipsec-tunnels.ts">IpsecTunnelMagicIPsecTunnelsUpdateMultipleIPsecTunnelsResponse</a></code>

Methods:

- <code title="put /accounts/{account_identifier}/magic/ipsec_tunnels/{tunnel_identifier}">client.magics.ipsecTunnels.<a href="./src/resources/magics/ipsec-tunnels/ipsec-tunnels.ts">update</a>(accountIdentifier, tunnelIdentifier, { ...params }) -> IpsecTunnelUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/magic/ipsec_tunnels/{tunnel_identifier}">client.magics.ipsecTunnels.<a href="./src/resources/magics/ipsec-tunnels/ipsec-tunnels.ts">delete</a>(accountIdentifier, tunnelIdentifier) -> IpsecTunnelDeleteResponse</code>
- <code title="get /accounts/{account_identifier}/magic/ipsec_tunnels/{tunnel_identifier}">client.magics.ipsecTunnels.<a href="./src/resources/magics/ipsec-tunnels/ipsec-tunnels.ts">get</a>(accountIdentifier, tunnelIdentifier) -> IpsecTunnelGetResponse</code>
- <code title="post /accounts/{account_identifier}/magic/ipsec_tunnels">client.magics.ipsecTunnels.<a href="./src/resources/magics/ipsec-tunnels/ipsec-tunnels.ts">magicIPsecTunnelsCreateIPsecTunnels</a>(accountIdentifier, { ...params }) -> IpsecTunnelMagicIPsecTunnelsCreateIPsecTunnelsResponse</code>
- <code title="get /accounts/{account_identifier}/magic/ipsec_tunnels">client.magics.ipsecTunnels.<a href="./src/resources/magics/ipsec-tunnels/ipsec-tunnels.ts">magicIPsecTunnelsListIPsecTunnels</a>(accountIdentifier) -> IpsecTunnelMagicIPsecTunnelsListIPsecTunnelsResponse</code>
- <code title="put /accounts/{account_identifier}/magic/ipsec_tunnels">client.magics.ipsecTunnels.<a href="./src/resources/magics/ipsec-tunnels/ipsec-tunnels.ts">magicIPsecTunnelsUpdateMultipleIPsecTunnels</a>(accountIdentifier, { ...params }) -> IpsecTunnelMagicIPsecTunnelsUpdateMultipleIPsecTunnelsResponse</code>

### PskGenerates

Types:

- <code><a href="./src/resources/magics/ipsec-tunnels/psk-generates.ts">PskGenerateMagicIPsecTunnelsGeneratePreSharedKeyPskForIPsecTunnelsResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/magic/ipsec_tunnels/{tunnel_identifier}/psk_generate">client.magics.ipsecTunnels.pskGenerates.<a href="./src/resources/magics/ipsec-tunnels/psk-generates.ts">magicIPsecTunnelsGeneratePreSharedKeyPskForIPsecTunnels</a>(accountIdentifier, tunnelIdentifier) -> PskGenerateMagicIPsecTunnelsGeneratePreSharedKeyPskForIPsecTunnelsResponse</code>

## Routes

Types:

- <code><a href="./src/resources/magics/routes.ts">RouteUpdateResponse</a></code>
- <code><a href="./src/resources/magics/routes.ts">RouteDeleteResponse</a></code>
- <code><a href="./src/resources/magics/routes.ts">RouteGetResponse</a></code>
- <code><a href="./src/resources/magics/routes.ts">RouteMagicStaticRoutesCreateRoutesResponse</a></code>
- <code><a href="./src/resources/magics/routes.ts">RouteMagicStaticRoutesListRoutesResponse</a></code>
- <code><a href="./src/resources/magics/routes.ts">RouteMagicStaticRoutesUpdateManyRoutesResponse</a></code>

Methods:

- <code title="put /accounts/{account_identifier}/magic/routes/{route_identifier}">client.magics.routes.<a href="./src/resources/magics/routes.ts">update</a>(accountIdentifier, routeIdentifier, { ...params }) -> RouteUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/magic/routes/{route_identifier}">client.magics.routes.<a href="./src/resources/magics/routes.ts">delete</a>(accountIdentifier, routeIdentifier) -> RouteDeleteResponse</code>
- <code title="get /accounts/{account_identifier}/magic/routes/{route_identifier}">client.magics.routes.<a href="./src/resources/magics/routes.ts">get</a>(accountIdentifier, routeIdentifier) -> RouteGetResponse</code>
- <code title="post /accounts/{account_identifier}/magic/routes">client.magics.routes.<a href="./src/resources/magics/routes.ts">magicStaticRoutesCreateRoutes</a>(accountIdentifier, { ...params }) -> RouteMagicStaticRoutesCreateRoutesResponse</code>
- <code title="get /accounts/{account_identifier}/magic/routes">client.magics.routes.<a href="./src/resources/magics/routes.ts">magicStaticRoutesListRoutes</a>(accountIdentifier) -> RouteMagicStaticRoutesListRoutesResponse</code>
- <code title="put /accounts/{account_identifier}/magic/routes">client.magics.routes.<a href="./src/resources/magics/routes.ts">magicStaticRoutesUpdateManyRoutes</a>(accountIdentifier, { ...params }) -> RouteMagicStaticRoutesUpdateManyRoutesResponse</code>

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
- <code title="get /accounts/{account_id}/members">client.accountMembers.<a href="./src/resources/account-members.ts">list</a>(accountId, { ...params }) -> AccountMemberListResponse | null</code>
- <code title="delete /accounts/{account_id}/members/{member_id}">client.accountMembers.<a href="./src/resources/account-members.ts">delete</a>(accountId, memberId) -> AccountMemberDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/members/{member_id}">client.accountMembers.<a href="./src/resources/account-members.ts">get</a>(accountId, memberId) -> AccountMemberGetResponse</code>

# Mnms

## Configs

Types:

- <code><a href="./src/resources/mnms/configs/configs.ts">ConfigDeleteResponse</a></code>
- <code><a href="./src/resources/mnms/configs/configs.ts">ConfigMagicNetworkMonitoringConfigurationCreateAccountConfigurationResponse</a></code>
- <code><a href="./src/resources/mnms/configs/configs.ts">ConfigMagicNetworkMonitoringConfigurationListAccountConfigurationResponse</a></code>
- <code><a href="./src/resources/mnms/configs/configs.ts">ConfigMagicNetworkMonitoringConfigurationUpdateAccountConfigurationFieldsResponse</a></code>
- <code><a href="./src/resources/mnms/configs/configs.ts">ConfigMagicNetworkMonitoringConfigurationUpdateAnEntireAccountConfigurationResponse</a></code>

Methods:

- <code title="delete /accounts/{account_identifier}/mnm/config">client.mnms.configs.<a href="./src/resources/mnms/configs/configs.ts">delete</a>(accountIdentifier) -> ConfigDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/mnm/config">client.mnms.configs.<a href="./src/resources/mnms/configs/configs.ts">magicNetworkMonitoringConfigurationCreateAccountConfiguration</a>(accountIdentifier) -> ConfigMagicNetworkMonitoringConfigurationCreateAccountConfigurationResponse</code>
- <code title="get /accounts/{account_identifier}/mnm/config">client.mnms.configs.<a href="./src/resources/mnms/configs/configs.ts">magicNetworkMonitoringConfigurationListAccountConfiguration</a>(accountIdentifier) -> ConfigMagicNetworkMonitoringConfigurationListAccountConfigurationResponse</code>
- <code title="patch /accounts/{account_identifier}/mnm/config">client.mnms.configs.<a href="./src/resources/mnms/configs/configs.ts">magicNetworkMonitoringConfigurationUpdateAccountConfigurationFields</a>(accountIdentifier) -> ConfigMagicNetworkMonitoringConfigurationUpdateAccountConfigurationFieldsResponse</code>
- <code title="put /accounts/{account_identifier}/mnm/config">client.mnms.configs.<a href="./src/resources/mnms/configs/configs.ts">magicNetworkMonitoringConfigurationUpdateAnEntireAccountConfiguration</a>(accountIdentifier) -> ConfigMagicNetworkMonitoringConfigurationUpdateAnEntireAccountConfigurationResponse</code>

### Fulls

Types:

- <code><a href="./src/resources/mnms/configs/fulls.ts">FullMagicNetworkMonitoringConfigurationListRulesAndAccountConfigurationResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/mnm/config/full">client.mnms.configs.fulls.<a href="./src/resources/mnms/configs/fulls.ts">magicNetworkMonitoringConfigurationListRulesAndAccountConfiguration</a>(accountIdentifier) -> FullMagicNetworkMonitoringConfigurationListRulesAndAccountConfigurationResponse</code>

## Rules

Types:

- <code><a href="./src/resources/mnms/rules/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/mnms/rules/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/mnms/rules/rules.ts">RuleGetResponse</a></code>
- <code><a href="./src/resources/mnms/rules/rules.ts">RuleMagicNetworkMonitoringRulesCreateRulesResponse</a></code>
- <code><a href="./src/resources/mnms/rules/rules.ts">RuleMagicNetworkMonitoringRulesListRulesResponse</a></code>
- <code><a href="./src/resources/mnms/rules/rules.ts">RuleMagicNetworkMonitoringRulesUpdateRulesResponse</a></code>

Methods:

- <code title="patch /accounts/{account_identifier}/mnm/rules/{rule_identifier}">client.mnms.rules.<a href="./src/resources/mnms/rules/rules.ts">update</a>(accountIdentifier, ruleIdentifier) -> RuleUpdateResponse | null</code>
- <code title="delete /accounts/{account_identifier}/mnm/rules/{rule_identifier}">client.mnms.rules.<a href="./src/resources/mnms/rules/rules.ts">delete</a>(accountIdentifier, ruleIdentifier) -> RuleDeleteResponse | null</code>
- <code title="get /accounts/{account_identifier}/mnm/rules/{rule_identifier}">client.mnms.rules.<a href="./src/resources/mnms/rules/rules.ts">get</a>(accountIdentifier, ruleIdentifier) -> RuleGetResponse | null</code>
- <code title="post /accounts/{account_identifier}/mnm/rules">client.mnms.rules.<a href="./src/resources/mnms/rules/rules.ts">magicNetworkMonitoringRulesCreateRules</a>(accountIdentifier) -> RuleMagicNetworkMonitoringRulesCreateRulesResponse | null</code>
- <code title="get /accounts/{account_identifier}/mnm/rules">client.mnms.rules.<a href="./src/resources/mnms/rules/rules.ts">magicNetworkMonitoringRulesListRules</a>(accountIdentifier) -> RuleMagicNetworkMonitoringRulesListRulesResponse | null</code>
- <code title="put /accounts/{account_identifier}/mnm/rules">client.mnms.rules.<a href="./src/resources/mnms/rules/rules.ts">magicNetworkMonitoringRulesUpdateRules</a>(accountIdentifier) -> RuleMagicNetworkMonitoringRulesUpdateRulesResponse | null</code>

### Advertisements

Types:

- <code><a href="./src/resources/mnms/rules/advertisements.ts">AdvertisementMagicNetworkMonitoringRulesUpdateAdvertisementForRuleResponse</a></code>

Methods:

- <code title="patch /accounts/{account_identifier}/mnm/rules/{rule_identifier}/advertisement">client.mnms.rules.advertisements.<a href="./src/resources/mnms/rules/advertisements.ts">magicNetworkMonitoringRulesUpdateAdvertisementForRule</a>(accountIdentifier, ruleIdentifier) -> AdvertisementMagicNetworkMonitoringRulesUpdateAdvertisementForRuleResponse | null</code>

# MtlsCertificates

Types:

- <code><a href="./src/resources/mtls-certificates/mtls-certificates.ts">MtlsCertificateUpdateResponse</a></code>
- <code><a href="./src/resources/mtls-certificates/mtls-certificates.ts">MtlsCertificateListResponse</a></code>
- <code><a href="./src/resources/mtls-certificates/mtls-certificates.ts">MtlsCertificateDeleteResponse</a></code>
- <code><a href="./src/resources/mtls-certificates/mtls-certificates.ts">MtlsCertificateGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/mtls_certificates">client.mtlsCertificates.<a href="./src/resources/mtls-certificates/mtls-certificates.ts">update</a>(accountId, { ...params }) -> MtlsCertificateUpdateResponse</code>
- <code title="get /accounts/{account_id}/mtls_certificates">client.mtlsCertificates.<a href="./src/resources/mtls-certificates/mtls-certificates.ts">list</a>(accountId) -> MtlsCertificateListResponse | null</code>
- <code title="delete /accounts/{account_id}/mtls_certificates/{mtls_certificate_id}">client.mtlsCertificates.<a href="./src/resources/mtls-certificates/mtls-certificates.ts">delete</a>(accountId, mtlsCertificateId) -> MtlsCertificateDeleteResponse</code>
- <code title="get /accounts/{account_id}/mtls_certificates/{mtls_certificate_id}">client.mtlsCertificates.<a href="./src/resources/mtls-certificates/mtls-certificates.ts">get</a>(accountId, mtlsCertificateId) -> MtlsCertificateGetResponse</code>

## Associations

Types:

- <code><a href="./src/resources/mtls-certificates/associations.ts">AssociationListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/mtls_certificates/{mtls_certificate_id}/associations">client.mtlsCertificates.associations.<a href="./src/resources/mtls-certificates/associations.ts">list</a>(accountId, mtlsCertificateId) -> AssociationListResponse | null</code>

# Pages

## Projects

Types:

- <code><a href="./src/resources/pages/projects/projects.ts">ProjectCreateResponse</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">ProjectUpdateResponse</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">ProjectListResponse</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">ProjectDeleteResponse</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">ProjectGetResponse</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">ProjectPurgeBuildCacheResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pages/projects">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">create</a>(accountId, { ...params }) -> ProjectCreateResponse</code>
- <code title="patch /accounts/{account_id}/pages/projects/{project_name}">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">update</a>(accountId, projectName, { ...params }) -> ProjectUpdateResponse</code>
- <code title="get /accounts/{account_id}/pages/projects">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">list</a>(accountId) -> ProjectListResponse</code>
- <code title="delete /accounts/{account_id}/pages/projects/{project_name}">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">delete</a>(accountId, projectName) -> unknown</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">get</a>(accountId, projectName) -> ProjectGetResponse</code>
- <code title="post /accounts/{account_id}/pages/projects/{project_name}/purge_build_cache">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">purgeBuildCache</a>(accountId, projectName) -> unknown</code>

### Deployments

Types:

- <code><a href="./src/resources/pages/projects/deployments/deployments.ts">DeploymentCreateResponse</a></code>
- <code><a href="./src/resources/pages/projects/deployments/deployments.ts">DeploymentListResponse</a></code>
- <code><a href="./src/resources/pages/projects/deployments/deployments.ts">DeploymentDeleteResponse</a></code>
- <code><a href="./src/resources/pages/projects/deployments/deployments.ts">DeploymentGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pages/projects/{project_name}/deployments">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">create</a>(accountId, projectName, { ...params }) -> DeploymentCreateResponse</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}/deployments">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">list</a>(accountId, projectName) -> DeploymentListResponse</code>
- <code title="delete /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">delete</a>(accountId, projectName, deploymentId) -> unknown</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">get</a>(accountId, projectName, deploymentId) -> DeploymentGetResponse</code>

#### Histories

##### Logs

Types:

- <code><a href="./src/resources/pages/projects/deployments/histories/logs.ts">LogPagesDeploymentGetDeploymentLogsResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}/history/logs">client.pages.projects.deployments.histories.logs.<a href="./src/resources/pages/projects/deployments/histories/logs.ts">pagesDeploymentGetDeploymentLogs</a>(accountId, projectName, deploymentId) -> LogPagesDeploymentGetDeploymentLogsResponse</code>

#### Retries

Types:

- <code><a href="./src/resources/pages/projects/deployments/retries.ts">RetryPagesDeploymentRetryDeploymentResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}/retry">client.pages.projects.deployments.retries.<a href="./src/resources/pages/projects/deployments/retries.ts">pagesDeploymentRetryDeployment</a>(accountId, projectName, deploymentId) -> RetryPagesDeploymentRetryDeploymentResponse</code>

#### Rollbacks

Types:

- <code><a href="./src/resources/pages/projects/deployments/rollbacks.ts">RollbackPagesDeploymentRollbackDeploymentResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}/rollback">client.pages.projects.deployments.rollbacks.<a href="./src/resources/pages/projects/deployments/rollbacks.ts">pagesDeploymentRollbackDeployment</a>(accountId, projectName, deploymentId) -> RollbackPagesDeploymentRollbackDeploymentResponse</code>

### Domains

Types:

- <code><a href="./src/resources/pages/projects/domains.ts">DomainUpdateResponse</a></code>
- <code><a href="./src/resources/pages/projects/domains.ts">DomainDeleteResponse</a></code>
- <code><a href="./src/resources/pages/projects/domains.ts">DomainGetResponse</a></code>
- <code><a href="./src/resources/pages/projects/domains.ts">DomainPagesDomainsAddDomainResponse</a></code>
- <code><a href="./src/resources/pages/projects/domains.ts">DomainPagesDomainsGetDomainsResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/pages/projects/{project_name}/domains/{domain_name}">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">update</a>(accountId, projectName, domainName) -> DomainUpdateResponse | null</code>
- <code title="delete /accounts/{account_id}/pages/projects/{project_name}/domains/{domain_name}">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">delete</a>(accountId, projectName, domainName) -> unknown</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}/domains/{domain_name}">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">get</a>(accountId, projectName, domainName) -> DomainGetResponse | null</code>
- <code title="post /accounts/{account_id}/pages/projects/{project_name}/domains">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">pagesDomainsAddDomain</a>(accountId, projectName, { ...params }) -> DomainPagesDomainsAddDomainResponse | null</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}/domains">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">pagesDomainsGetDomains</a>(accountId, projectName) -> DomainPagesDomainsGetDomainsResponse</code>

# Pcaps

Types:

- <code><a href="./src/resources/pcaps/pcaps.ts">PcapGetResponse</a></code>
- <code><a href="./src/resources/pcaps/pcaps.ts">PcapMagicPcapCollectionCreatePcapRequestResponse</a></code>
- <code><a href="./src/resources/pcaps/pcaps.ts">PcapMagicPcapCollectionListPacketCaptureRequestsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/pcaps/{identifier}">client.pcaps.<a href="./src/resources/pcaps/pcaps.ts">get</a>(accountIdentifier, identifier) -> PcapGetResponse</code>
- <code title="post /accounts/{account_identifier}/pcaps">client.pcaps.<a href="./src/resources/pcaps/pcaps.ts">magicPcapCollectionCreatePcapRequest</a>(accountIdentifier, { ...params }) -> PcapMagicPcapCollectionCreatePcapRequestResponse</code>
- <code title="get /accounts/{account_identifier}/pcaps">client.pcaps.<a href="./src/resources/pcaps/pcaps.ts">magicPcapCollectionListPacketCaptureRequests</a>(accountIdentifier) -> PcapMagicPcapCollectionListPacketCaptureRequestsResponse | null</code>

## Ownerships

Types:

- <code><a href="./src/resources/pcaps/ownerships/ownerships.ts">OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesResponse</a></code>
- <code><a href="./src/resources/pcaps/ownerships/ownerships.ts">OwnershipMagicPcapCollectionListPcaPsBucketOwnershipResponse</a></code>

Methods:

- <code title="delete /accounts/{account_identifier}/pcaps/ownership/{identifier}">client.pcaps.ownerships.<a href="./src/resources/pcaps/ownerships/ownerships.ts">delete</a>(accountIdentifier, identifier) -> void</code>
- <code title="post /accounts/{account_identifier}/pcaps/ownership">client.pcaps.ownerships.<a href="./src/resources/pcaps/ownerships/ownerships.ts">magicPcapCollectionAddBucketsForFullPacketCaptures</a>(accountIdentifier, { ...params }) -> OwnershipMagicPcapCollectionAddBucketsForFullPacketCapturesResponse</code>
- <code title="get /accounts/{account_identifier}/pcaps/ownership">client.pcaps.ownerships.<a href="./src/resources/pcaps/ownerships/ownerships.ts">magicPcapCollectionListPcaPsBucketOwnership</a>(accountIdentifier) -> OwnershipMagicPcapCollectionListPcaPsBucketOwnershipResponse | null</code>

### Validates

Types:

- <code><a href="./src/resources/pcaps/ownerships/validates.ts">ValidateMagicPcapCollectionValidateBucketsForFullPacketCapturesResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/pcaps/ownership/validate">client.pcaps.ownerships.validates.<a href="./src/resources/pcaps/ownerships/validates.ts">magicPcapCollectionValidateBucketsForFullPacketCaptures</a>(accountIdentifier, { ...params }) -> ValidateMagicPcapCollectionValidateBucketsForFullPacketCapturesResponse</code>

## Downloads

Methods:

- <code title="get /accounts/{account_identifier}/pcaps/{identifier}/download">client.pcaps.downloads.<a href="./src/resources/pcaps/downloads.ts">list</a>(accountIdentifier, identifier) -> Response</code>

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

- <code><a href="./src/resources/request-tracers/traces.ts">Q19cOvCrTrace</a></code>
- <code><a href="./src/resources/request-tracers/traces.ts">TraceCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/request-tracer/trace">client.requestTracers.traces.<a href="./src/resources/request-tracers/traces.ts">create</a>(accountIdentifier, { ...params }) -> TraceCreateResponse</code>

# Roles

Types:

- <code><a href="./src/resources/roles.ts">RoleAccountRolesListRolesResponse</a></code>
- <code><a href="./src/resources/roles.ts">RoleGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/roles">client.roles.<a href="./src/resources/roles.ts">accountRolesListRoles</a>(accountId) -> RoleAccountRolesListRolesResponse | null</code>
- <code title="get /accounts/{account_id}/roles/{role_id}">client.roles.<a href="./src/resources/roles.ts">get</a>(accountId, roleId) -> RoleGetResponse</code>

# Rules

## Lists

Types:

- <code><a href="./src/resources/rules/lists/lists.ts">ListUpdateResponse</a></code>
- <code><a href="./src/resources/rules/lists/lists.ts">ListDeleteResponse</a></code>
- <code><a href="./src/resources/rules/lists/lists.ts">ListGetResponse</a></code>
- <code><a href="./src/resources/rules/lists/lists.ts">ListListsCreateAListResponse</a></code>
- <code><a href="./src/resources/rules/lists/lists.ts">ListListsGetListsResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/rules/lists/{list_id}">client.rules.lists.<a href="./src/resources/rules/lists/lists.ts">update</a>(accountId, listId, { ...params }) -> ListUpdateResponse | null</code>
- <code title="delete /accounts/{account_id}/rules/lists/{list_id}">client.rules.lists.<a href="./src/resources/rules/lists/lists.ts">delete</a>(accountId, listId) -> ListDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/rules/lists/{list_id}">client.rules.lists.<a href="./src/resources/rules/lists/lists.ts">get</a>(accountId, listId) -> ListGetResponse | null</code>
- <code title="post /accounts/{account_id}/rules/lists">client.rules.lists.<a href="./src/resources/rules/lists/lists.ts">listsCreateAList</a>(accountId, { ...params }) -> ListListsCreateAListResponse | null</code>
- <code title="get /accounts/{account_id}/rules/lists">client.rules.lists.<a href="./src/resources/rules/lists/lists.ts">listsGetLists</a>(accountId) -> ListListsGetListsResponse | null</code>

### BulkOperations

Types:

- <code><a href="./src/resources/rules/lists/bulk-operations.ts">BulkOperationGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/rules/lists/bulk_operations/{operation_id}">client.rules.lists.bulkOperations.<a href="./src/resources/rules/lists/bulk-operations.ts">get</a>(accountIdentifier, operationId) -> BulkOperationGetResponse | null</code>

### Items

Types:

- <code><a href="./src/resources/rules/lists/items.ts">ItemDeleteResponse</a></code>
- <code><a href="./src/resources/rules/lists/items.ts">ItemGetResponse</a></code>
- <code><a href="./src/resources/rules/lists/items.ts">ItemListsCreateListItemsResponse</a></code>
- <code><a href="./src/resources/rules/lists/items.ts">ItemListsGetListItemsResponse</a></code>
- <code><a href="./src/resources/rules/lists/items.ts">ItemListsUpdateAllListItemsResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/rules/lists/{list_id}/items">client.rules.lists.items.<a href="./src/resources/rules/lists/items.ts">delete</a>(accountId, listId, { ...params }) -> ItemDeleteResponse | null</code>
- <code title="get /accounts/{account_identifier}/rules/lists/{list_id}/items/{item_id}">client.rules.lists.items.<a href="./src/resources/rules/lists/items.ts">get</a>(accountIdentifier, listId, itemId) -> ItemGetResponse | null</code>
- <code title="post /accounts/{account_id}/rules/lists/{list_id}/items">client.rules.lists.items.<a href="./src/resources/rules/lists/items.ts">listsCreateListItems</a>(accountId, listId, [ ...body ]) -> ItemListsCreateListItemsResponse | null</code>
- <code title="get /accounts/{account_id}/rules/lists/{list_id}/items">client.rules.lists.items.<a href="./src/resources/rules/lists/items.ts">listsGetListItems</a>(accountId, listId, { ...params }) -> ItemListsGetListItemsResponse | null</code>
- <code title="put /accounts/{account_id}/rules/lists/{list_id}/items">client.rules.lists.items.<a href="./src/resources/rules/lists/items.ts">listsUpdateAllListItems</a>(accountId, listId, [ ...body ]) -> ItemListsUpdateAllListItemsResponse | null</code>

# Storage

## Analytics

Types:

- <code><a href="./src/resources/storage/analytics.ts">AnalyticsListResponse</a></code>
- <code><a href="./src/resources/storage/analytics.ts">AnalyticsStoredResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/storage/analytics">client.storage.analytics.<a href="./src/resources/storage/analytics.ts">list</a>(accountId, { ...params }) -> AnalyticsListResponse</code>
- <code title="get /accounts/{account_id}/storage/analytics/stored">client.storage.analytics.<a href="./src/resources/storage/analytics.ts">stored</a>(accountId, { ...params }) -> AnalyticsStoredResponse</code>

## Kv

### Namespaces

Types:

- <code><a href="./src/resources/storage/kv/namespaces/namespaces.ts">NamespaceUpdateResponse</a></code>
- <code><a href="./src/resources/storage/kv/namespaces/namespaces.ts">NamespaceListResponse</a></code>
- <code><a href="./src/resources/storage/kv/namespaces/namespaces.ts">NamespaceDeleteResponse</a></code>
- <code><a href="./src/resources/storage/kv/namespaces/namespaces.ts">NamespaceWorkersKvNamespaceCreateANamespaceResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/storage/kv/namespaces/{namespace_id}">client.storage.kv.namespaces.<a href="./src/resources/storage/kv/namespaces/namespaces.ts">update</a>(accountId, namespaceId, { ...params }) -> NamespaceUpdateResponse</code>
- <code title="get /accounts/{account_id}/storage/kv/namespaces">client.storage.kv.namespaces.<a href="./src/resources/storage/kv/namespaces/namespaces.ts">list</a>(accountId, { ...params }) -> NamespaceListResponse | null</code>
- <code title="delete /accounts/{account_id}/storage/kv/namespaces/{namespace_id}">client.storage.kv.namespaces.<a href="./src/resources/storage/kv/namespaces/namespaces.ts">delete</a>(accountId, namespaceId) -> NamespaceDeleteResponse</code>
- <code title="post /accounts/{account_id}/storage/kv/namespaces">client.storage.kv.namespaces.<a href="./src/resources/storage/kv/namespaces/namespaces.ts">workersKvNamespaceCreateANamespace</a>(accountId, { ...params }) -> NamespaceWorkersKvNamespaceCreateANamespaceResponse</code>

#### Bulks

Types:

- <code><a href="./src/resources/storage/kv/namespaces/bulks.ts">BulkDeleteResponse</a></code>
- <code><a href="./src/resources/storage/kv/namespaces/bulks.ts">BulkWorkersKvNamespaceWriteMultipleKeyValuePairsResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk">client.storage.kv.namespaces.bulks.<a href="./src/resources/storage/kv/namespaces/bulks.ts">delete</a>(accountId, namespaceId, [ ...body ]) -> BulkDeleteResponse</code>
- <code title="put /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk">client.storage.kv.namespaces.bulks.<a href="./src/resources/storage/kv/namespaces/bulks.ts">workersKvNamespaceWriteMultipleKeyValuePairs</a>(accountId, namespaceId, [ ...body ]) -> BulkWorkersKvNamespaceWriteMultipleKeyValuePairsResponse</code>

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

- <code><a href="./src/resources/stream/stream.ts">StreamUpdateResponse</a></code>
- <code><a href="./src/resources/stream/stream.ts">StreamGetResponse</a></code>
- <code><a href="./src/resources/stream/stream.ts">StreamStreamVideosListVideosResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/{identifier}">client.stream.<a href="./src/resources/stream/stream.ts">update</a>(accountId, identifier, { ...params }) -> StreamUpdateResponse</code>
- <code title="delete /accounts/{account_id}/stream/{identifier}">client.stream.<a href="./src/resources/stream/stream.ts">delete</a>(accountId, identifier) -> void</code>
- <code title="get /accounts/{account_id}/stream/{identifier}">client.stream.<a href="./src/resources/stream/stream.ts">get</a>(accountId, identifier) -> StreamGetResponse</code>
- <code title="post /accounts/{account_id}/stream">client.stream.<a href="./src/resources/stream/stream.ts">streamVideosInitiateVideoUploadsUsingTus</a>(accountId, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/stream">client.stream.<a href="./src/resources/stream/stream.ts">streamVideosListVideos</a>(accountId, { ...params }) -> StreamStreamVideosListVideosResponse</code>

## AudioTracks

Types:

- <code><a href="./src/resources/stream/audio-tracks.ts">AudioTrackUpdateResponse</a></code>
- <code><a href="./src/resources/stream/audio-tracks.ts">AudioTrackListResponse</a></code>
- <code><a href="./src/resources/stream/audio-tracks.ts">AudioTrackDeleteResponse</a></code>
- <code><a href="./src/resources/stream/audio-tracks.ts">AudioTrackCopyResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/stream/{identifier}/audio/{audio_identifier}">client.stream.audioTracks.<a href="./src/resources/stream/audio-tracks.ts">update</a>(accountId, identifier, audioIdentifier, { ...params }) -> AudioTrackUpdateResponse</code>
- <code title="get /accounts/{account_id}/stream/{identifier}/audio">client.stream.audioTracks.<a href="./src/resources/stream/audio-tracks.ts">list</a>(accountId, identifier) -> AudioTrackListResponse</code>
- <code title="delete /accounts/{account_id}/stream/{identifier}/audio/{audio_identifier}">client.stream.audioTracks.<a href="./src/resources/stream/audio-tracks.ts">delete</a>(accountId, identifier, audioIdentifier) -> AudioTrackDeleteResponse</code>
- <code title="post /accounts/{account_id}/stream/{identifier}/audio/copy">client.stream.audioTracks.<a href="./src/resources/stream/audio-tracks.ts">copy</a>(accountId, identifier, { ...params }) -> AudioTrackCopyResponse</code>

## Videos

Types:

- <code><a href="./src/resources/stream/videos.ts">VideoStorageUsageResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/stream/storage-usage">client.stream.videos.<a href="./src/resources/stream/videos.ts">storageUsage</a>(accountId, { ...params }) -> VideoStorageUsageResponse</code>

## Clips

Types:

- <code><a href="./src/resources/stream/clips.ts">ClipStreamVideoClippingClipVideosGivenAStartAndEndTimeResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/clip">client.stream.clips.<a href="./src/resources/stream/clips.ts">streamVideoClippingClipVideosGivenAStartAndEndTime</a>(accountId, { ...params }) -> ClipStreamVideoClippingClipVideosGivenAStartAndEndTimeResponse</code>

## Copies

Types:

- <code><a href="./src/resources/stream/copies.ts">CopyStreamVideosUploadVideosFromAURLResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/copy">client.stream.copies.<a href="./src/resources/stream/copies.ts">streamVideosUploadVideosFromAURL</a>(accountId, { ...params }) -> CopyStreamVideosUploadVideosFromAURLResponse</code>

## DirectUploads

Types:

- <code><a href="./src/resources/stream/direct-uploads.ts">DirectUploadStreamVideosUploadVideosViaDirectUploadURLsResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/direct_upload">client.stream.directUploads.<a href="./src/resources/stream/direct-uploads.ts">streamVideosUploadVideosViaDirectUploadURLs</a>(accountId, { ...params }) -> DirectUploadStreamVideosUploadVideosViaDirectUploadURLsResponse</code>

## Keys

Types:

- <code><a href="./src/resources/stream/keys.ts">KeyDeleteResponse</a></code>
- <code><a href="./src/resources/stream/keys.ts">KeyStreamSigningKeysCreateSigningKeysResponse</a></code>
- <code><a href="./src/resources/stream/keys.ts">KeyStreamSigningKeysListSigningKeysResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/stream/keys/{identifier}">client.stream.keys.<a href="./src/resources/stream/keys.ts">delete</a>(accountId, identifier) -> KeyDeleteResponse</code>
- <code title="post /accounts/{account_id}/stream/keys">client.stream.keys.<a href="./src/resources/stream/keys.ts">streamSigningKeysCreateSigningKeys</a>(accountId) -> KeyStreamSigningKeysCreateSigningKeysResponse</code>
- <code title="get /accounts/{account_id}/stream/keys">client.stream.keys.<a href="./src/resources/stream/keys.ts">streamSigningKeysListSigningKeys</a>(accountId) -> KeyStreamSigningKeysListSigningKeysResponse</code>

## LiveInputs

Types:

- <code><a href="./src/resources/stream/live-inputs/live-inputs.ts">LiveInputUpdateResponse</a></code>
- <code><a href="./src/resources/stream/live-inputs/live-inputs.ts">LiveInputGetResponse</a></code>
- <code><a href="./src/resources/stream/live-inputs/live-inputs.ts">LiveInputStreamLiveInputsCreateALiveInputResponse</a></code>
- <code><a href="./src/resources/stream/live-inputs/live-inputs.ts">LiveInputStreamLiveInputsListLiveInputsResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/stream/live_inputs/{live_input_identifier}">client.stream.liveInputs.<a href="./src/resources/stream/live-inputs/live-inputs.ts">update</a>(accountId, liveInputIdentifier, { ...params }) -> LiveInputUpdateResponse</code>
- <code title="delete /accounts/{account_id}/stream/live_inputs/{live_input_identifier}">client.stream.liveInputs.<a href="./src/resources/stream/live-inputs/live-inputs.ts">delete</a>(accountId, liveInputIdentifier) -> void</code>
- <code title="get /accounts/{account_id}/stream/live_inputs/{live_input_identifier}">client.stream.liveInputs.<a href="./src/resources/stream/live-inputs/live-inputs.ts">get</a>(accountId, liveInputIdentifier) -> LiveInputGetResponse</code>
- <code title="post /accounts/{account_id}/stream/live_inputs">client.stream.liveInputs.<a href="./src/resources/stream/live-inputs/live-inputs.ts">streamLiveInputsCreateALiveInput</a>(accountId, { ...params }) -> LiveInputStreamLiveInputsCreateALiveInputResponse</code>
- <code title="get /accounts/{account_id}/stream/live_inputs">client.stream.liveInputs.<a href="./src/resources/stream/live-inputs/live-inputs.ts">streamLiveInputsListLiveInputs</a>(accountId, { ...params }) -> LiveInputStreamLiveInputsListLiveInputsResponse</code>

### Outputs

Types:

- <code><a href="./src/resources/stream/live-inputs/outputs.ts">OutputUpdateResponse</a></code>
- <code><a href="./src/resources/stream/live-inputs/outputs.ts">OutputStreamLiveInputsCreateANewOutputConnectedToALiveInputResponse</a></code>
- <code><a href="./src/resources/stream/live-inputs/outputs.ts">OutputStreamLiveInputsListAllOutputsAssociatedWithASpecifiedLiveInputResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs/{output_identifier}">client.stream.liveInputs.outputs.<a href="./src/resources/stream/live-inputs/outputs.ts">update</a>(accountId, liveInputIdentifier, outputIdentifier, { ...params }) -> OutputUpdateResponse</code>
- <code title="delete /accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs/{output_identifier}">client.stream.liveInputs.outputs.<a href="./src/resources/stream/live-inputs/outputs.ts">delete</a>(accountId, liveInputIdentifier, outputIdentifier) -> void</code>
- <code title="post /accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs">client.stream.liveInputs.outputs.<a href="./src/resources/stream/live-inputs/outputs.ts">streamLiveInputsCreateANewOutputConnectedToALiveInput</a>(accountId, liveInputIdentifier, { ...params }) -> OutputStreamLiveInputsCreateANewOutputConnectedToALiveInputResponse</code>
- <code title="get /accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs">client.stream.liveInputs.outputs.<a href="./src/resources/stream/live-inputs/outputs.ts">streamLiveInputsListAllOutputsAssociatedWithASpecifiedLiveInput</a>(accountId, liveInputIdentifier) -> OutputStreamLiveInputsListAllOutputsAssociatedWithASpecifiedLiveInputResponse</code>

## Watermarks

Types:

- <code><a href="./src/resources/stream/watermarks.ts">WatermarkDeleteResponse</a></code>
- <code><a href="./src/resources/stream/watermarks.ts">WatermarkGetResponse</a></code>
- <code><a href="./src/resources/stream/watermarks.ts">WatermarkStreamWatermarkProfileCreateWatermarkProfilesViaBasicUploadResponse</a></code>
- <code><a href="./src/resources/stream/watermarks.ts">WatermarkStreamWatermarkProfileListWatermarkProfilesResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/stream/watermarks/{identifier}">client.stream.watermarks.<a href="./src/resources/stream/watermarks.ts">delete</a>(accountId, identifier) -> WatermarkDeleteResponse</code>
- <code title="get /accounts/{account_id}/stream/watermarks/{identifier}">client.stream.watermarks.<a href="./src/resources/stream/watermarks.ts">get</a>(accountId, identifier) -> WatermarkGetResponse</code>
- <code title="post /accounts/{account_id}/stream/watermarks">client.stream.watermarks.<a href="./src/resources/stream/watermarks.ts">streamWatermarkProfileCreateWatermarkProfilesViaBasicUpload</a>(accountId, { ...params }) -> WatermarkStreamWatermarkProfileCreateWatermarkProfilesViaBasicUploadResponse</code>
- <code title="get /accounts/{account_id}/stream/watermarks">client.stream.watermarks.<a href="./src/resources/stream/watermarks.ts">streamWatermarkProfileListWatermarkProfiles</a>(accountId) -> WatermarkStreamWatermarkProfileListWatermarkProfilesResponse</code>

## Webhooks

Types:

- <code><a href="./src/resources/stream/webhooks.ts">WebhookDeleteResponse</a></code>
- <code><a href="./src/resources/stream/webhooks.ts">WebhookStreamWebhookCreateWebhooksResponse</a></code>
- <code><a href="./src/resources/stream/webhooks.ts">WebhookStreamWebhookViewWebhooksResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/stream/webhook">client.stream.webhooks.<a href="./src/resources/stream/webhooks.ts">delete</a>(accountId) -> WebhookDeleteResponse</code>
- <code title="put /accounts/{account_id}/stream/webhook">client.stream.webhooks.<a href="./src/resources/stream/webhooks.ts">streamWebhookCreateWebhooks</a>(accountId, { ...params }) -> WebhookStreamWebhookCreateWebhooksResponse</code>
- <code title="get /accounts/{account_id}/stream/webhook">client.stream.webhooks.<a href="./src/resources/stream/webhooks.ts">streamWebhookViewWebhooks</a>(accountId) -> WebhookStreamWebhookViewWebhooksResponse</code>

## Captions

Types:

- <code><a href="./src/resources/stream/captions.ts">CaptionUpdateResponse</a></code>
- <code><a href="./src/resources/stream/captions.ts">CaptionDeleteResponse</a></code>
- <code><a href="./src/resources/stream/captions.ts">CaptionStreamSubtitlesCaptionsListCaptionsOrSubtitlesResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/stream/{identifier}/captions/{language}">client.stream.captions.<a href="./src/resources/stream/captions.ts">update</a>(accountId, identifier, language, { ...params }) -> CaptionUpdateResponse</code>
- <code title="delete /accounts/{account_id}/stream/{identifier}/captions/{language}">client.stream.captions.<a href="./src/resources/stream/captions.ts">delete</a>(accountId, identifier, language) -> CaptionDeleteResponse</code>
- <code title="get /accounts/{account_id}/stream/{identifier}/captions">client.stream.captions.<a href="./src/resources/stream/captions.ts">streamSubtitlesCaptionsListCaptionsOrSubtitles</a>(accountId, identifier) -> CaptionStreamSubtitlesCaptionsListCaptionsOrSubtitlesResponse</code>

## Downloads

Types:

- <code><a href="./src/resources/stream/downloads.ts">DownloadDeleteResponse</a></code>
- <code><a href="./src/resources/stream/downloads.ts">DownloadStreamMP4DownloadsCreateDownloadsResponse</a></code>
- <code><a href="./src/resources/stream/downloads.ts">DownloadStreamMP4DownloadsListDownloadsResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/stream/{identifier}/downloads">client.stream.downloads.<a href="./src/resources/stream/downloads.ts">delete</a>(accountId, identifier) -> DownloadDeleteResponse</code>
- <code title="post /accounts/{account_id}/stream/{identifier}/downloads">client.stream.downloads.<a href="./src/resources/stream/downloads.ts">streamMP4DownloadsCreateDownloads</a>(accountId, identifier) -> DownloadStreamMP4DownloadsCreateDownloadsResponse</code>
- <code title="get /accounts/{account_id}/stream/{identifier}/downloads">client.stream.downloads.<a href="./src/resources/stream/downloads.ts">streamMP4DownloadsListDownloads</a>(accountId, identifier) -> DownloadStreamMP4DownloadsListDownloadsResponse</code>

## Embeds

Types:

- <code><a href="./src/resources/stream/embeds.ts">EmbedListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/stream/{identifier}/embed">client.stream.embeds.<a href="./src/resources/stream/embeds.ts">list</a>(accountId, identifier) -> unknown</code>

## Tokens

Types:

- <code><a href="./src/resources/stream/tokens.ts">TokenStreamVideosCreateSignedURLTokensForVideosResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/{identifier}/token">client.stream.tokens.<a href="./src/resources/stream/tokens.ts">streamVideosCreateSignedURLTokensForVideos</a>(accountId, identifier, { ...params }) -> TokenStreamVideosCreateSignedURLTokensForVideosResponse</code>

# Teamnets

## Routes

Types:

- <code><a href="./src/resources/teamnets/routes/routes.ts">RouteTunnelRouteListTunnelRoutesResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/teamnet/routes">client.teamnets.routes.<a href="./src/resources/teamnets/routes/routes.ts">tunnelRouteListTunnelRoutes</a>(accountId, { ...params }) -> RouteTunnelRouteListTunnelRoutesResponse | null</code>

### IPs

Types:

- <code><a href="./src/resources/teamnets/routes/ips.ts">IPGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/teamnet/routes/ip/{ip}">client.teamnets.routes.ips.<a href="./src/resources/teamnets/routes/ips.ts">get</a>(accountId, ip, { ...params }) -> IPGetResponse</code>

### Networks

Types:

- <code><a href="./src/resources/teamnets/routes/networks.ts">NetworkUpdateResponse</a></code>
- <code><a href="./src/resources/teamnets/routes/networks.ts">NetworkDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}">client.teamnets.routes.networks.<a href="./src/resources/teamnets/routes/networks.ts">update</a>(accountId, ipNetworkEncoded, { ...params }) -> NetworkUpdateResponse</code>
- <code title="delete /accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}">client.teamnets.routes.networks.<a href="./src/resources/teamnets/routes/networks.ts">delete</a>(accountId, ipNetworkEncoded, { ...params }) -> NetworkDeleteResponse</code>

## VirtualNetworks

Types:

- <code><a href="./src/resources/teamnets/virtual-networks.ts">VirtualNetworkUpdateResponse</a></code>
- <code><a href="./src/resources/teamnets/virtual-networks.ts">VirtualNetworkDeleteResponse</a></code>
- <code><a href="./src/resources/teamnets/virtual-networks.ts">VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkResponse</a></code>
- <code><a href="./src/resources/teamnets/virtual-networks.ts">VirtualNetworkTunnelVirtualNetworkListVirtualNetworksResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/teamnet/virtual_networks/{virtual_network_id}">client.teamnets.virtualNetworks.<a href="./src/resources/teamnets/virtual-networks.ts">update</a>(accountId, virtualNetworkId, { ...params }) -> VirtualNetworkUpdateResponse</code>
- <code title="delete /accounts/{account_id}/teamnet/virtual_networks/{virtual_network_id}">client.teamnets.virtualNetworks.<a href="./src/resources/teamnets/virtual-networks.ts">delete</a>(accountId, virtualNetworkId) -> VirtualNetworkDeleteResponse</code>
- <code title="post /accounts/{account_id}/teamnet/virtual_networks">client.teamnets.virtualNetworks.<a href="./src/resources/teamnets/virtual-networks.ts">tunnelVirtualNetworkCreateAVirtualNetwork</a>(accountId, { ...params }) -> VirtualNetworkTunnelVirtualNetworkCreateAVirtualNetworkResponse</code>
- <code title="get /accounts/{account_id}/teamnet/virtual_networks">client.teamnets.virtualNetworks.<a href="./src/resources/teamnets/virtual-networks.ts">tunnelVirtualNetworkListVirtualNetworks</a>(accountId, { ...params }) -> VirtualNetworkTunnelVirtualNetworkListVirtualNetworksResponse | null</code>

# Tunnels

Types:

- <code><a href="./src/resources/tunnels/tunnels.ts">TunnelDeleteResponse</a></code>
- <code><a href="./src/resources/tunnels/tunnels.ts">TunnelArgoTunnelCreateAnArgoTunnelResponse</a></code>
- <code><a href="./src/resources/tunnels/tunnels.ts">TunnelArgoTunnelListArgoTunnelsResponse</a></code>
- <code><a href="./src/resources/tunnels/tunnels.ts">TunnelGetResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/tunnels/{tunnel_id}">client.tunnels.<a href="./src/resources/tunnels/tunnels.ts">delete</a>(accountId, tunnelId, { ...params }) -> TunnelDeleteResponse</code>
- <code title="post /accounts/{account_id}/tunnels">client.tunnels.<a href="./src/resources/tunnels/tunnels.ts">argoTunnelCreateAnArgoTunnel</a>(accountId, { ...params }) -> TunnelArgoTunnelCreateAnArgoTunnelResponse</code>
- <code title="get /accounts/{account_id}/tunnels">client.tunnels.<a href="./src/resources/tunnels/tunnels.ts">argoTunnelListArgoTunnels</a>(accountId, { ...params }) -> TunnelArgoTunnelListArgoTunnelsResponse | null</code>
- <code title="get /accounts/{account_id}/tunnels/{tunnel_id}">client.tunnels.<a href="./src/resources/tunnels/tunnels.ts">get</a>(accountId, tunnelId) -> TunnelGetResponse</code>

## Connections

Types:

- <code><a href="./src/resources/tunnels/connections.ts">ConnectionDeleteResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/tunnels/{tunnel_id}/connections">client.tunnels.connections.<a href="./src/resources/tunnels/connections.ts">delete</a>(accountId, tunnelId, { ...params }) -> ConnectionDeleteResponse</code>

# Gateways

Types:

- <code><a href="./src/resources/gateways/gateways.ts">GatewayZeroTrustAccountsCreateZeroTrustAccountResponse</a></code>
- <code><a href="./src/resources/gateways/gateways.ts">GatewayZeroTrustAccountsGetZeroTrustAccountInformationResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/gateway">client.gateways.<a href="./src/resources/gateways/gateways.ts">zeroTrustAccountsCreateZeroTrustAccount</a>(accountId) -> GatewayZeroTrustAccountsCreateZeroTrustAccountResponse</code>
- <code title="get /accounts/{account_id}/gateway">client.gateways.<a href="./src/resources/gateways/gateways.ts">zeroTrustAccountsGetZeroTrustAccountInformation</a>(accountId) -> GatewayZeroTrustAccountsGetZeroTrustAccountInformationResponse</code>

## Categories

Types:

- <code><a href="./src/resources/gateways/categories.ts">CategoryZeroTrustGatewayCategoriesListCategoriesResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/gateway/categories">client.gateways.categories.<a href="./src/resources/gateways/categories.ts">zeroTrustGatewayCategoriesListCategories</a>(accountId) -> CategoryZeroTrustGatewayCategoriesListCategoriesResponse | null</code>

## AppTypes

Types:

- <code><a href="./src/resources/gateways/app-types.ts">AppTypeZeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappingsResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/gateway/app_types">client.gateways.appTypes.<a href="./src/resources/gateways/app-types.ts">zeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappings</a>(accountId) -> AppTypeZeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappingsResponse | null</code>

## Configurations

Types:

- <code><a href="./src/resources/gateways/configurations.ts">ConfigurationZeroTrustAccountsGetZeroTrustAccountConfigurationResponse</a></code>
- <code><a href="./src/resources/gateways/configurations.ts">ConfigurationZeroTrustAccountsPatchZeroTrustAccountConfigurationResponse</a></code>
- <code><a href="./src/resources/gateways/configurations.ts">ConfigurationZeroTrustAccountsUpdateZeroTrustAccountConfigurationResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/gateway/configuration">client.gateways.configurations.<a href="./src/resources/gateways/configurations.ts">zeroTrustAccountsGetZeroTrustAccountConfiguration</a>(accountId) -> ConfigurationZeroTrustAccountsGetZeroTrustAccountConfigurationResponse</code>
- <code title="patch /accounts/{account_id}/gateway/configuration">client.gateways.configurations.<a href="./src/resources/gateways/configurations.ts">zeroTrustAccountsPatchZeroTrustAccountConfiguration</a>(accountId, { ...params }) -> ConfigurationZeroTrustAccountsPatchZeroTrustAccountConfigurationResponse</code>
- <code title="put /accounts/{account_id}/gateway/configuration">client.gateways.configurations.<a href="./src/resources/gateways/configurations.ts">zeroTrustAccountsUpdateZeroTrustAccountConfiguration</a>(accountId, { ...params }) -> ConfigurationZeroTrustAccountsUpdateZeroTrustAccountConfigurationResponse</code>

## Lists

Types:

- <code><a href="./src/resources/gateways/lists/lists.ts">ListUpdateResponse</a></code>
- <code><a href="./src/resources/gateways/lists/lists.ts">ListDeleteResponse</a></code>
- <code><a href="./src/resources/gateways/lists/lists.ts">ListGetResponse</a></code>
- <code><a href="./src/resources/gateways/lists/lists.ts">ListZeroTrustListsCreateZeroTrustListResponse</a></code>
- <code><a href="./src/resources/gateways/lists/lists.ts">ListZeroTrustListsListZeroTrustListsResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/gateway/lists/{list_id}">client.gateways.lists.<a href="./src/resources/gateways/lists/lists.ts">update</a>(accountId, listId, { ...params }) -> ListUpdateResponse</code>
- <code title="delete /accounts/{account_id}/gateway/lists/{list_id}">client.gateways.lists.<a href="./src/resources/gateways/lists/lists.ts">delete</a>(accountId, listId) -> ListDeleteResponse</code>
- <code title="get /accounts/{account_id}/gateway/lists/{list_id}">client.gateways.lists.<a href="./src/resources/gateways/lists/lists.ts">get</a>(accountId, listId) -> ListGetResponse</code>
- <code title="post /accounts/{account_id}/gateway/lists">client.gateways.lists.<a href="./src/resources/gateways/lists/lists.ts">zeroTrustListsCreateZeroTrustList</a>(accountId, { ...params }) -> ListZeroTrustListsCreateZeroTrustListResponse</code>
- <code title="get /accounts/{account_id}/gateway/lists">client.gateways.lists.<a href="./src/resources/gateways/lists/lists.ts">zeroTrustListsListZeroTrustLists</a>(accountId) -> ListZeroTrustListsListZeroTrustListsResponse | null</code>

### Items

Types:

- <code><a href="./src/resources/gateways/lists/items.ts">ItemZeroTrustListsZeroTrustListItemsResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/gateway/lists/{list_id}/items">client.gateways.lists.items.<a href="./src/resources/gateways/lists/items.ts">zeroTrustListsZeroTrustListItems</a>(accountId, listId) -> ItemZeroTrustListsZeroTrustListItemsResponse | null</code>

## Locations

Types:

- <code><a href="./src/resources/gateways/locations.ts">LocationUpdateResponse</a></code>
- <code><a href="./src/resources/gateways/locations.ts">LocationDeleteResponse</a></code>
- <code><a href="./src/resources/gateways/locations.ts">LocationGetResponse</a></code>
- <code><a href="./src/resources/gateways/locations.ts">LocationZeroTrustGatewayLocationsCreateZeroTrustGatewayLocationResponse</a></code>
- <code><a href="./src/resources/gateways/locations.ts">LocationZeroTrustGatewayLocationsListZeroTrustGatewayLocationsResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/gateway/locations/{location_id}">client.gateways.locations.<a href="./src/resources/gateways/locations.ts">update</a>(accountId, locationId, { ...params }) -> LocationUpdateResponse</code>
- <code title="delete /accounts/{account_id}/gateway/locations/{location_id}">client.gateways.locations.<a href="./src/resources/gateways/locations.ts">delete</a>(accountId, locationId) -> LocationDeleteResponse</code>
- <code title="get /accounts/{account_id}/gateway/locations/{location_id}">client.gateways.locations.<a href="./src/resources/gateways/locations.ts">get</a>(accountId, locationId) -> LocationGetResponse</code>
- <code title="post /accounts/{account_id}/gateway/locations">client.gateways.locations.<a href="./src/resources/gateways/locations.ts">zeroTrustGatewayLocationsCreateZeroTrustGatewayLocation</a>(accountId, { ...params }) -> LocationZeroTrustGatewayLocationsCreateZeroTrustGatewayLocationResponse</code>
- <code title="get /accounts/{account_id}/gateway/locations">client.gateways.locations.<a href="./src/resources/gateways/locations.ts">zeroTrustGatewayLocationsListZeroTrustGatewayLocations</a>(accountId) -> LocationZeroTrustGatewayLocationsListZeroTrustGatewayLocationsResponse | null</code>

## Loggings

Types:

- <code><a href="./src/resources/gateways/loggings.ts">LoggingZeroTrustAccountsGetLoggingSettingsForTheZeroTrustAccountResponse</a></code>
- <code><a href="./src/resources/gateways/loggings.ts">LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/gateway/logging">client.gateways.loggings.<a href="./src/resources/gateways/loggings.ts">zeroTrustAccountsGetLoggingSettingsForTheZeroTrustAccount</a>(accountId) -> LoggingZeroTrustAccountsGetLoggingSettingsForTheZeroTrustAccountResponse</code>
- <code title="put /accounts/{account_id}/gateway/logging">client.gateways.loggings.<a href="./src/resources/gateways/loggings.ts">zeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccount</a>(accountId, { ...params }) -> LoggingZeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccountResponse</code>

## ProxyEndpoints

Types:

- <code><a href="./src/resources/gateways/proxy-endpoints.ts">ProxyEndpointUpdateResponse</a></code>
- <code><a href="./src/resources/gateways/proxy-endpoints.ts">ProxyEndpointListResponse</a></code>
- <code><a href="./src/resources/gateways/proxy-endpoints.ts">ProxyEndpointDeleteResponse</a></code>
- <code><a href="./src/resources/gateways/proxy-endpoints.ts">ProxyEndpointGetResponse</a></code>
- <code><a href="./src/resources/gateways/proxy-endpoints.ts">ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointResponse</a></code>
- <code><a href="./src/resources/gateways/proxy-endpoints.ts">ProxyEndpointZeroTrustGatewayProxyEndpointsListProxyEndpointsResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}">client.gateways.proxyEndpoints.<a href="./src/resources/gateways/proxy-endpoints.ts">update</a>(accountId, proxyEndpointId, { ...params }) -> ProxyEndpointUpdateResponse</code>
- <code title="get /accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}">client.gateways.proxyEndpoints.<a href="./src/resources/gateways/proxy-endpoints.ts">list</a>(accountId, proxyEndpointId) -> ProxyEndpointListResponse</code>
- <code title="delete /accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}">client.gateways.proxyEndpoints.<a href="./src/resources/gateways/proxy-endpoints.ts">delete</a>(accountId, proxyEndpointId) -> ProxyEndpointDeleteResponse</code>
- <code title="get /accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}">client.gateways.proxyEndpoints.<a href="./src/resources/gateways/proxy-endpoints.ts">get</a>(accountId, proxyEndpointId) -> ProxyEndpointGetResponse</code>
- <code title="post /accounts/{account_id}/gateway/proxy_endpoints">client.gateways.proxyEndpoints.<a href="./src/resources/gateways/proxy-endpoints.ts">zeroTrustGatewayProxyEndpointsCreateProxyEndpoint</a>(accountId, { ...params }) -> ProxyEndpointZeroTrustGatewayProxyEndpointsCreateProxyEndpointResponse</code>
- <code title="get /accounts/{account_id}/gateway/proxy_endpoints">client.gateways.proxyEndpoints.<a href="./src/resources/gateways/proxy-endpoints.ts">zeroTrustGatewayProxyEndpointsListProxyEndpoints</a>(accountId) -> ProxyEndpointZeroTrustGatewayProxyEndpointsListProxyEndpointsResponse | null</code>

## Rules

Types:

- <code><a href="./src/resources/gateways/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/gateways/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/gateways/rules.ts">RuleGetResponse</a></code>
- <code><a href="./src/resources/gateways/rules.ts">RuleZeroTrustGatewayRulesCreateZeroTrustGatewayRuleResponse</a></code>
- <code><a href="./src/resources/gateways/rules.ts">RuleZeroTrustGatewayRulesListZeroTrustGatewayRulesResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/gateway/rules/{rule_id}">client.gateways.rules.<a href="./src/resources/gateways/rules.ts">update</a>(accountId, ruleId, { ...params }) -> RuleUpdateResponse</code>
- <code title="delete /accounts/{account_id}/gateway/rules/{rule_id}">client.gateways.rules.<a href="./src/resources/gateways/rules.ts">delete</a>(accountId, ruleId) -> RuleDeleteResponse</code>
- <code title="get /accounts/{account_id}/gateway/rules/{rule_id}">client.gateways.rules.<a href="./src/resources/gateways/rules.ts">get</a>(accountId, ruleId) -> RuleGetResponse</code>
- <code title="post /accounts/{account_id}/gateway/rules">client.gateways.rules.<a href="./src/resources/gateways/rules.ts">zeroTrustGatewayRulesCreateZeroTrustGatewayRule</a>(accountId, { ...params }) -> RuleZeroTrustGatewayRulesCreateZeroTrustGatewayRuleResponse</code>
- <code title="get /accounts/{account_id}/gateway/rules">client.gateways.rules.<a href="./src/resources/gateways/rules.ts">zeroTrustGatewayRulesListZeroTrustGatewayRules</a>(accountId) -> RuleZeroTrustGatewayRulesListZeroTrustGatewayRulesResponse | null</code>

# Alerting

## V3s

### Destinations

#### Eligibles

Types:

- <code><a href="./src/resources/alerting/v3s/destinations/eligibles.ts">EligibleNotificationMechanismEligibilityGetDeliveryMechanismEligibilityResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/alerting/v3/destinations/eligible">client.alerting.v3s.destinations.eligibles.<a href="./src/resources/alerting/v3s/destinations/eligibles.ts">notificationMechanismEligibilityGetDeliveryMechanismEligibility</a>(accountId) -> EligibleNotificationMechanismEligibilityGetDeliveryMechanismEligibilityResponse | null</code>

#### Pagerduties

Types:

- <code><a href="./src/resources/alerting/v3s/destinations/pagerduties.ts">PagerdutyNotificationDestinationsWithPagerDutyListPagerDutyServicesResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/alerting/v3/destinations/pagerduty">client.alerting.v3s.destinations.pagerduties.<a href="./src/resources/alerting/v3s/destinations/pagerduties.ts">notificationDestinationsWithPagerDutyListPagerDutyServices</a>(accountId) -> PagerdutyNotificationDestinationsWithPagerDutyListPagerDutyServicesResponse | null</code>

#### Webhooks

Types:

- <code><a href="./src/resources/alerting/v3s/destinations/webhooks.ts">WebhookUpdateResponse</a></code>
- <code><a href="./src/resources/alerting/v3s/destinations/webhooks.ts">WebhookDeleteResponse</a></code>
- <code><a href="./src/resources/alerting/v3s/destinations/webhooks.ts">WebhookGetResponse</a></code>
- <code><a href="./src/resources/alerting/v3s/destinations/webhooks.ts">WebhookNotificationWebhooksCreateAWebhookResponse</a></code>
- <code><a href="./src/resources/alerting/v3s/destinations/webhooks.ts">WebhookNotificationWebhooksListWebhooksResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/alerting/v3/destinations/webhooks/{webhook_id}">client.alerting.v3s.destinations.webhooks.<a href="./src/resources/alerting/v3s/destinations/webhooks.ts">update</a>(accountId, webhookId, { ...params }) -> WebhookUpdateResponse</code>
- <code title="delete /accounts/{account_id}/alerting/v3/destinations/webhooks/{webhook_id}">client.alerting.v3s.destinations.webhooks.<a href="./src/resources/alerting/v3s/destinations/webhooks.ts">delete</a>(accountId, webhookId) -> WebhookDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/alerting/v3/destinations/webhooks/{webhook_id}">client.alerting.v3s.destinations.webhooks.<a href="./src/resources/alerting/v3s/destinations/webhooks.ts">get</a>(accountId, webhookId) -> WebhookGetResponse</code>
- <code title="post /accounts/{account_id}/alerting/v3/destinations/webhooks">client.alerting.v3s.destinations.webhooks.<a href="./src/resources/alerting/v3s/destinations/webhooks.ts">notificationWebhooksCreateAWebhook</a>(accountId, { ...params }) -> WebhookNotificationWebhooksCreateAWebhookResponse</code>
- <code title="get /accounts/{account_id}/alerting/v3/destinations/webhooks">client.alerting.v3s.destinations.webhooks.<a href="./src/resources/alerting/v3s/destinations/webhooks.ts">notificationWebhooksListWebhooks</a>(accountId) -> WebhookNotificationWebhooksListWebhooksResponse | null</code>

### Histories

Types:

- <code><a href="./src/resources/alerting/v3s/histories.ts">HistoryNotificationHistoryListHistoryResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/alerting/v3/history">client.alerting.v3s.histories.<a href="./src/resources/alerting/v3s/histories.ts">notificationHistoryListHistory</a>(accountId, { ...params }) -> HistoryNotificationHistoryListHistoryResponse | null</code>

### Policies

Types:

- <code><a href="./src/resources/alerting/v3s/policies.ts">PolicyUpdateResponse</a></code>
- <code><a href="./src/resources/alerting/v3s/policies.ts">PolicyDeleteResponse</a></code>
- <code><a href="./src/resources/alerting/v3s/policies.ts">PolicyGetResponse</a></code>
- <code><a href="./src/resources/alerting/v3s/policies.ts">PolicyNotificationPoliciesCreateANotificationPolicyResponse</a></code>
- <code><a href="./src/resources/alerting/v3s/policies.ts">PolicyNotificationPoliciesListNotificationPoliciesResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/alerting/v3/policies/{policy_id}">client.alerting.v3s.policies.<a href="./src/resources/alerting/v3s/policies.ts">update</a>(accountId, policyId, { ...params }) -> PolicyUpdateResponse</code>
- <code title="delete /accounts/{account_id}/alerting/v3/policies/{policy_id}">client.alerting.v3s.policies.<a href="./src/resources/alerting/v3s/policies.ts">delete</a>(accountId, policyId) -> PolicyDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/alerting/v3/policies/{policy_id}">client.alerting.v3s.policies.<a href="./src/resources/alerting/v3s/policies.ts">get</a>(accountId, policyId) -> PolicyGetResponse</code>
- <code title="post /accounts/{account_id}/alerting/v3/policies">client.alerting.v3s.policies.<a href="./src/resources/alerting/v3s/policies.ts">notificationPoliciesCreateANotificationPolicy</a>(accountId, { ...params }) -> PolicyNotificationPoliciesCreateANotificationPolicyResponse</code>
- <code title="get /accounts/{account_id}/alerting/v3/policies">client.alerting.v3s.policies.<a href="./src/resources/alerting/v3s/policies.ts">notificationPoliciesListNotificationPolicies</a>(accountId) -> PolicyNotificationPoliciesListNotificationPoliciesResponse | null</code>

## V3

### AvailableAlerts

Types:

- <code><a href="./src/resources/alerting/v3/available-alerts.ts">AvailableAlertListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/alerting/v3/available_alerts">client.alerting.v3.availableAlerts.<a href="./src/resources/alerting/v3/available-alerts.ts">list</a>(accountId) -> AvailableAlertListResponse | null</code>

### Destinations

#### Pagerduty

Types:

- <code><a href="./src/resources/alerting/v3/destinations/pagerduty.ts">PagerdutyCreateTokenResponse</a></code>
- <code><a href="./src/resources/alerting/v3/destinations/pagerduty.ts">PagerdutyDeleteAllResponse</a></code>
- <code><a href="./src/resources/alerting/v3/destinations/pagerduty.ts">PagerdutyLinkResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/alerting/v3/destinations/pagerduty/connect">client.alerting.v3.destinations.pagerduty.<a href="./src/resources/alerting/v3/destinations/pagerduty.ts">createToken</a>(accountId) -> PagerdutyCreateTokenResponse</code>
- <code title="delete /accounts/{account_id}/alerting/v3/destinations/pagerduty">client.alerting.v3.destinations.pagerduty.<a href="./src/resources/alerting/v3/destinations/pagerduty.ts">deleteAll</a>(accountId) -> PagerdutyDeleteAllResponse | null</code>
- <code title="get /accounts/{account_id}/alerting/v3/destinations/pagerduty/connect/{token_id}">client.alerting.v3.destinations.pagerduty.<a href="./src/resources/alerting/v3/destinations/pagerduty.ts">link</a>(accountId, tokenId) -> PagerdutyLinkResponse</code>

# Devices

Types:

- <code><a href="./src/resources/devices/devices.ts">DeviceDevicesListDevicesResponse</a></code>
- <code><a href="./src/resources/devices/devices.ts">DeviceGetResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/devices">client.devices.<a href="./src/resources/devices/devices.ts">devicesListDevices</a>(identifier) -> DeviceDevicesListDevicesResponse | null</code>
- <code title="get /accounts/{identifier}/devices/{uuid}">client.devices.<a href="./src/resources/devices/devices.ts">get</a>(identifier, uuid) -> DeviceGetResponse | null</code>

## DEXTests

Types:

- <code><a href="./src/resources/devices/dex-tests.ts">DEXTestUpdateResponse</a></code>
- <code><a href="./src/resources/devices/dex-tests.ts">DEXTestDeleteResponse</a></code>
- <code><a href="./src/resources/devices/dex-tests.ts">DEXTestDeviceDEXTestCreateDeviceDEXTestResponse</a></code>
- <code><a href="./src/resources/devices/dex-tests.ts">DEXTestDeviceDEXTestDetailsResponse</a></code>
- <code><a href="./src/resources/devices/dex-tests.ts">DEXTestGetResponse</a></code>

Methods:

- <code title="put /accounts/{identifier}/devices/dex_tests/{uuid}">client.devices.dexTests.<a href="./src/resources/devices/dex-tests.ts">update</a>(identifier, uuid, { ...params }) -> DEXTestUpdateResponse | null</code>
- <code title="delete /accounts/{identifier}/devices/dex_tests/{uuid}">client.devices.dexTests.<a href="./src/resources/devices/dex-tests.ts">delete</a>(identifier, uuid) -> DEXTestDeleteResponse | null</code>
- <code title="post /accounts/{identifier}/devices/dex_tests">client.devices.dexTests.<a href="./src/resources/devices/dex-tests.ts">deviceDEXTestCreateDeviceDEXTest</a>(identifier, { ...params }) -> DEXTestDeviceDEXTestCreateDeviceDEXTestResponse | null</code>
- <code title="get /accounts/{identifier}/devices/dex_tests">client.devices.dexTests.<a href="./src/resources/devices/dex-tests.ts">deviceDEXTestDetails</a>(identifier) -> DEXTestDeviceDEXTestDetailsResponse | null</code>
- <code title="get /accounts/{identifier}/devices/dex_tests/{uuid}">client.devices.dexTests.<a href="./src/resources/devices/dex-tests.ts">get</a>(identifier, uuid) -> DEXTestGetResponse | null</code>

## Networks

Types:

- <code><a href="./src/resources/devices/networks.ts">NetworkUpdateResponse</a></code>
- <code><a href="./src/resources/devices/networks.ts">NetworkDeleteResponse</a></code>
- <code><a href="./src/resources/devices/networks.ts">NetworkDeviceManagedNetworksCreateDeviceManagedNetworkResponse</a></code>
- <code><a href="./src/resources/devices/networks.ts">NetworkDeviceManagedNetworksListDeviceManagedNetworksResponse</a></code>
- <code><a href="./src/resources/devices/networks.ts">NetworkGetResponse</a></code>

Methods:

- <code title="put /accounts/{identifier}/devices/networks/{uuid}">client.devices.networks.<a href="./src/resources/devices/networks.ts">update</a>(identifier, uuid, { ...params }) -> NetworkUpdateResponse | null</code>
- <code title="delete /accounts/{identifier}/devices/networks/{uuid}">client.devices.networks.<a href="./src/resources/devices/networks.ts">delete</a>(identifier, uuid) -> NetworkDeleteResponse | null</code>
- <code title="post /accounts/{identifier}/devices/networks">client.devices.networks.<a href="./src/resources/devices/networks.ts">deviceManagedNetworksCreateDeviceManagedNetwork</a>(identifier, { ...params }) -> NetworkDeviceManagedNetworksCreateDeviceManagedNetworkResponse | null</code>
- <code title="get /accounts/{identifier}/devices/networks">client.devices.networks.<a href="./src/resources/devices/networks.ts">deviceManagedNetworksListDeviceManagedNetworks</a>(identifier) -> NetworkDeviceManagedNetworksListDeviceManagedNetworksResponse | null</code>
- <code title="get /accounts/{identifier}/devices/networks/{uuid}">client.devices.networks.<a href="./src/resources/devices/networks.ts">get</a>(identifier, uuid) -> NetworkGetResponse | null</code>

## Policies

Types:

- <code><a href="./src/resources/devices/policies/policies.ts">PolicyUpdateResponse</a></code>
- <code><a href="./src/resources/devices/policies/policies.ts">PolicyDeleteResponse</a></code>
- <code><a href="./src/resources/devices/policies/policies.ts">PolicyDevicesCreateDeviceSettingsPolicyResponse</a></code>
- <code><a href="./src/resources/devices/policies/policies.ts">PolicyDevicesGetDefaultDeviceSettingsPolicyResponse</a></code>
- <code><a href="./src/resources/devices/policies/policies.ts">PolicyDevicesListDeviceSettingsPoliciesResponse</a></code>
- <code><a href="./src/resources/devices/policies/policies.ts">PolicyDevicesUpdateDefaultDeviceSettingsPolicyResponse</a></code>
- <code><a href="./src/resources/devices/policies/policies.ts">PolicyGetResponse</a></code>

Methods:

- <code title="patch /accounts/{identifier}/devices/policy/{uuid}">client.devices.policies.<a href="./src/resources/devices/policies/policies.ts">update</a>(identifier, uuid, { ...params }) -> PolicyUpdateResponse | null</code>
- <code title="delete /accounts/{identifier}/devices/policy/{uuid}">client.devices.policies.<a href="./src/resources/devices/policies/policies.ts">delete</a>(identifier, uuid) -> PolicyDeleteResponse | null</code>
- <code title="post /accounts/{identifier}/devices/policy">client.devices.policies.<a href="./src/resources/devices/policies/policies.ts">devicesCreateDeviceSettingsPolicy</a>(identifier, { ...params }) -> PolicyDevicesCreateDeviceSettingsPolicyResponse | null</code>
- <code title="get /accounts/{identifier}/devices/policy">client.devices.policies.<a href="./src/resources/devices/policies/policies.ts">devicesGetDefaultDeviceSettingsPolicy</a>(identifier) -> PolicyDevicesGetDefaultDeviceSettingsPolicyResponse | null</code>
- <code title="get /accounts/{identifier}/devices/policies">client.devices.policies.<a href="./src/resources/devices/policies/policies.ts">devicesListDeviceSettingsPolicies</a>(identifier) -> PolicyDevicesListDeviceSettingsPoliciesResponse | null</code>
- <code title="patch /accounts/{identifier}/devices/policy">client.devices.policies.<a href="./src/resources/devices/policies/policies.ts">devicesUpdateDefaultDeviceSettingsPolicy</a>(identifier, { ...params }) -> PolicyDevicesUpdateDefaultDeviceSettingsPolicyResponse | null</code>
- <code title="get /accounts/{identifier}/devices/policy/{uuid}">client.devices.policies.<a href="./src/resources/devices/policies/policies.ts">get</a>(identifier, uuid) -> PolicyGetResponse | null</code>

### Excludes

Types:

- <code><a href="./src/resources/devices/policies/excludes.ts">ExcludeDevicesGetSplitTunnelExcludeListResponse</a></code>
- <code><a href="./src/resources/devices/policies/excludes.ts">ExcludeDevicesGetSplitTunnelExcludeListForADeviceSettingsPolicyResponse</a></code>
- <code><a href="./src/resources/devices/policies/excludes.ts">ExcludeDevicesSetSplitTunnelExcludeListResponse</a></code>
- <code><a href="./src/resources/devices/policies/excludes.ts">ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/devices/policy/exclude">client.devices.policies.excludes.<a href="./src/resources/devices/policies/excludes.ts">devicesGetSplitTunnelExcludeList</a>(identifier) -> ExcludeDevicesGetSplitTunnelExcludeListResponse | null</code>
- <code title="get /accounts/{identifier}/devices/policy/{uuid}/exclude">client.devices.policies.excludes.<a href="./src/resources/devices/policies/excludes.ts">devicesGetSplitTunnelExcludeListForADeviceSettingsPolicy</a>(identifier, uuid) -> ExcludeDevicesGetSplitTunnelExcludeListForADeviceSettingsPolicyResponse | null</code>
- <code title="put /accounts/{identifier}/devices/policy/exclude">client.devices.policies.excludes.<a href="./src/resources/devices/policies/excludes.ts">devicesSetSplitTunnelExcludeList</a>(identifier, [ ...body ]) -> ExcludeDevicesSetSplitTunnelExcludeListResponse | null</code>
- <code title="put /accounts/{identifier}/devices/policy/{uuid}/exclude">client.devices.policies.excludes.<a href="./src/resources/devices/policies/excludes.ts">devicesSetSplitTunnelExcludeListForADeviceSettingsPolicy</a>(identifier, uuid, [ ...body ]) -> ExcludeDevicesSetSplitTunnelExcludeListForADeviceSettingsPolicyResponse | null</code>

### FallbackDomains

Types:

- <code><a href="./src/resources/devices/policies/fallback-domains.ts">FallbackDomainDevicesGetLocalDomainFallbackListResponse</a></code>
- <code><a href="./src/resources/devices/policies/fallback-domains.ts">FallbackDomainDevicesGetLocalDomainFallbackListForADeviceSettingsPolicyResponse</a></code>
- <code><a href="./src/resources/devices/policies/fallback-domains.ts">FallbackDomainDevicesSetLocalDomainFallbackListResponse</a></code>
- <code><a href="./src/resources/devices/policies/fallback-domains.ts">FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/devices/policy/fallback_domains">client.devices.policies.fallbackDomains.<a href="./src/resources/devices/policies/fallback-domains.ts">devicesGetLocalDomainFallbackList</a>(identifier) -> FallbackDomainDevicesGetLocalDomainFallbackListResponse | null</code>
- <code title="get /accounts/{identifier}/devices/policy/{uuid}/fallback_domains">client.devices.policies.fallbackDomains.<a href="./src/resources/devices/policies/fallback-domains.ts">devicesGetLocalDomainFallbackListForADeviceSettingsPolicy</a>(identifier, uuid) -> FallbackDomainDevicesGetLocalDomainFallbackListForADeviceSettingsPolicyResponse | null</code>
- <code title="put /accounts/{identifier}/devices/policy/fallback_domains">client.devices.policies.fallbackDomains.<a href="./src/resources/devices/policies/fallback-domains.ts">devicesSetLocalDomainFallbackList</a>(identifier, [ ...body ]) -> FallbackDomainDevicesSetLocalDomainFallbackListResponse | null</code>
- <code title="put /accounts/{identifier}/devices/policy/{uuid}/fallback_domains">client.devices.policies.fallbackDomains.<a href="./src/resources/devices/policies/fallback-domains.ts">devicesSetLocalDomainFallbackListForADeviceSettingsPolicy</a>(identifier, uuid, [ ...body ]) -> FallbackDomainDevicesSetLocalDomainFallbackListForADeviceSettingsPolicyResponse | null</code>

### Includes

Types:

- <code><a href="./src/resources/devices/policies/includes.ts">IncludeDevicesGetSplitTunnelIncludeListResponse</a></code>
- <code><a href="./src/resources/devices/policies/includes.ts">IncludeDevicesGetSplitTunnelIncludeListForADeviceSettingsPolicyResponse</a></code>
- <code><a href="./src/resources/devices/policies/includes.ts">IncludeDevicesSetSplitTunnelIncludeListResponse</a></code>
- <code><a href="./src/resources/devices/policies/includes.ts">IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/devices/policy/include">client.devices.policies.includes.<a href="./src/resources/devices/policies/includes.ts">devicesGetSplitTunnelIncludeList</a>(identifier) -> IncludeDevicesGetSplitTunnelIncludeListResponse | null</code>
- <code title="get /accounts/{identifier}/devices/policy/{uuid}/include">client.devices.policies.includes.<a href="./src/resources/devices/policies/includes.ts">devicesGetSplitTunnelIncludeListForADeviceSettingsPolicy</a>(identifier, uuid) -> IncludeDevicesGetSplitTunnelIncludeListForADeviceSettingsPolicyResponse | null</code>
- <code title="put /accounts/{identifier}/devices/policy/include">client.devices.policies.includes.<a href="./src/resources/devices/policies/includes.ts">devicesSetSplitTunnelIncludeList</a>(identifier, [ ...body ]) -> IncludeDevicesSetSplitTunnelIncludeListResponse | null</code>
- <code title="put /accounts/{identifier}/devices/policy/{uuid}/include">client.devices.policies.includes.<a href="./src/resources/devices/policies/includes.ts">devicesSetSplitTunnelIncludeListForADeviceSettingsPolicy</a>(identifier, uuid, [ ...body ]) -> IncludeDevicesSetSplitTunnelIncludeListForADeviceSettingsPolicyResponse | null</code>

## Postures

Types:

- <code><a href="./src/resources/devices/postures/postures.ts">PostureUpdateResponse</a></code>
- <code><a href="./src/resources/devices/postures/postures.ts">PostureDeleteResponse</a></code>
- <code><a href="./src/resources/devices/postures/postures.ts">PostureDevicePostureRulesCreateDevicePostureRuleResponse</a></code>
- <code><a href="./src/resources/devices/postures/postures.ts">PostureDevicePostureRulesListDevicePostureRulesResponse</a></code>
- <code><a href="./src/resources/devices/postures/postures.ts">PostureGetResponse</a></code>

Methods:

- <code title="put /accounts/{identifier}/devices/posture/{uuid}">client.devices.postures.<a href="./src/resources/devices/postures/postures.ts">update</a>(identifier, uuid, { ...params }) -> PostureUpdateResponse | null</code>
- <code title="delete /accounts/{identifier}/devices/posture/{uuid}">client.devices.postures.<a href="./src/resources/devices/postures/postures.ts">delete</a>(identifier, uuid) -> PostureDeleteResponse | null</code>
- <code title="post /accounts/{identifier}/devices/posture">client.devices.postures.<a href="./src/resources/devices/postures/postures.ts">devicePostureRulesCreateDevicePostureRule</a>(identifier, { ...params }) -> PostureDevicePostureRulesCreateDevicePostureRuleResponse | null</code>
- <code title="get /accounts/{identifier}/devices/posture">client.devices.postures.<a href="./src/resources/devices/postures/postures.ts">devicePostureRulesListDevicePostureRules</a>(identifier) -> PostureDevicePostureRulesListDevicePostureRulesResponse | null</code>
- <code title="get /accounts/{identifier}/devices/posture/{uuid}">client.devices.postures.<a href="./src/resources/devices/postures/postures.ts">get</a>(identifier, uuid) -> PostureGetResponse | null</code>

### Integrations

Types:

- <code><a href="./src/resources/devices/postures/integrations.ts">IntegrationUpdateResponse</a></code>
- <code><a href="./src/resources/devices/postures/integrations.ts">IntegrationDeleteResponse</a></code>
- <code><a href="./src/resources/devices/postures/integrations.ts">IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationResponse</a></code>
- <code><a href="./src/resources/devices/postures/integrations.ts">IntegrationDevicePostureIntegrationsListDevicePostureIntegrationsResponse</a></code>
- <code><a href="./src/resources/devices/postures/integrations.ts">IntegrationGetResponse</a></code>

Methods:

- <code title="patch /accounts/{identifier}/devices/posture/integration/{uuid}">client.devices.postures.integrations.<a href="./src/resources/devices/postures/integrations.ts">update</a>(identifier, uuid, { ...params }) -> IntegrationUpdateResponse | null</code>
- <code title="delete /accounts/{identifier}/devices/posture/integration/{uuid}">client.devices.postures.integrations.<a href="./src/resources/devices/postures/integrations.ts">delete</a>(identifier, uuid) -> IntegrationDeleteResponse | null</code>
- <code title="post /accounts/{identifier}/devices/posture/integration">client.devices.postures.integrations.<a href="./src/resources/devices/postures/integrations.ts">devicePostureIntegrationsCreateDevicePostureIntegration</a>(identifier, { ...params }) -> IntegrationDevicePostureIntegrationsCreateDevicePostureIntegrationResponse | null</code>
- <code title="get /accounts/{identifier}/devices/posture/integration">client.devices.postures.integrations.<a href="./src/resources/devices/postures/integrations.ts">devicePostureIntegrationsListDevicePostureIntegrations</a>(identifier) -> IntegrationDevicePostureIntegrationsListDevicePostureIntegrationsResponse | null</code>
- <code title="get /accounts/{identifier}/devices/posture/integration/{uuid}">client.devices.postures.integrations.<a href="./src/resources/devices/postures/integrations.ts">get</a>(identifier, uuid) -> IntegrationGetResponse | null</code>

## Revokes

Types:

- <code><a href="./src/resources/devices/revokes.ts">RevokeDevicesRevokeDevicesResponse</a></code>

Methods:

- <code title="post /accounts/{identifier}/devices/revoke">client.devices.revokes.<a href="./src/resources/devices/revokes.ts">devicesRevokeDevices</a>(identifier, [ ...body ]) -> RevokeDevicesRevokeDevicesResponse | null</code>

## Settings

Types:

- <code><a href="./src/resources/devices/settings.ts">SettingZeroTrustAccountsGetDeviceSettingsForZeroTrustAccountResponse</a></code>
- <code><a href="./src/resources/devices/settings.ts">SettingZeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccountResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/devices/settings">client.devices.settings.<a href="./src/resources/devices/settings.ts">zeroTrustAccountsGetDeviceSettingsForZeroTrustAccount</a>(identifier) -> SettingZeroTrustAccountsGetDeviceSettingsForZeroTrustAccountResponse | null</code>
- <code title="put /accounts/{identifier}/devices/settings">client.devices.settings.<a href="./src/resources/devices/settings.ts">zeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccount</a>(identifier, { ...params }) -> SettingZeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccountResponse | null</code>

## Unrevokes

Types:

- <code><a href="./src/resources/devices/unrevokes.ts">UnrevokeDevicesUnrevokeDevicesResponse</a></code>

Methods:

- <code title="post /accounts/{identifier}/devices/unrevoke">client.devices.unrevokes.<a href="./src/resources/devices/unrevokes.ts">devicesUnrevokeDevices</a>(identifier, [ ...body ]) -> UnrevokeDevicesUnrevokeDevicesResponse | null</code>

## OverrideCodes

Types:

- <code><a href="./src/resources/devices/override-codes.ts">OverrideCodeDevicesListAdminOverrideCodeForDeviceResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/devices/{uuid}/override_codes">client.devices.overrideCodes.<a href="./src/resources/devices/override-codes.ts">devicesListAdminOverrideCodeForDevice</a>(identifier, uuid) -> OverrideCodeDevicesListAdminOverrideCodeForDeviceResponse | null</code>

# D1

## Databases

Types:

- <code><a href="./src/resources/d1/databases.ts">DatabaseCreateResponse</a></code>
- <code><a href="./src/resources/d1/databases.ts">DatabaseListResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/d1/database">client.d1.databases.<a href="./src/resources/d1/databases.ts">create</a>(accountId, { ...params }) -> DatabaseCreateResponse</code>
- <code title="get /accounts/{account_id}/d1/database">client.d1.databases.<a href="./src/resources/d1/databases.ts">list</a>(accountId, { ...params }) -> DatabaseListResponse</code>

## Database

Types:

- <code><a href="./src/resources/d1/database.ts">DatabaseDeleteResponse</a></code>
- <code><a href="./src/resources/d1/database.ts">DatabaseGetResponse</a></code>
- <code><a href="./src/resources/d1/database.ts">DatabaseQueryResponse</a></code>

Methods:

- <code title="delete /accounts/{account_identifier}/d1/database/{database_identifier}">client.d1.database.<a href="./src/resources/d1/database.ts">delete</a>(accountIdentifier, databaseIdentifier) -> DatabaseDeleteResponse | null</code>
- <code title="get /accounts/{account_identifier}/d1/database/{database_identifier}">client.d1.database.<a href="./src/resources/d1/database.ts">get</a>(accountIdentifier, databaseIdentifier) -> DatabaseGetResponse</code>
- <code title="post /accounts/{account_identifier}/d1/database/{database_identifier}/query">client.d1.database.<a href="./src/resources/d1/database.ts">query</a>(accountIdentifier, databaseIdentifier, { ...params }) -> DatabaseQueryResponse</code>

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

- <code title="get /accounts/{account_id}/dex/fleet-status/devices">client.dex.fleetStatus.devices.<a href="./src/resources/dex/fleet-status/devices.ts">list</a>(accountId, { ...params }) -> DeviceListResponse | null</code>

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

- <code title="get /accounts/{account_id}/dex/tests">client.dex.tests.<a href="./src/resources/dex/tests/tests.ts">list</a>(accountId, { ...params }) -> TestListResponse</code>

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

# Teamnet

## Routes

Types:

- <code><a href="./src/resources/teamnet/routes.ts">RouteCreateResponse</a></code>
- <code><a href="./src/resources/teamnet/routes.ts">RouteUpdateResponse</a></code>
- <code><a href="./src/resources/teamnet/routes.ts">RouteDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/teamnet/routes">client.teamnet.routes.<a href="./src/resources/teamnet/routes.ts">create</a>(accountId, { ...params }) -> RouteCreateResponse</code>
- <code title="patch /accounts/{account_id}/teamnet/routes/{route_id}">client.teamnet.routes.<a href="./src/resources/teamnet/routes.ts">update</a>(accountId, routeId, { ...params }) -> RouteUpdateResponse</code>
- <code title="delete /accounts/{account_id}/teamnet/routes/{route_id}">client.teamnet.routes.<a href="./src/resources/teamnet/routes.ts">delete</a>(accountId, routeId) -> RouteDeleteResponse</code>

# WarpConnector

Types:

- <code><a href="./src/resources/warp-connector.ts">WarpConnectorCreateResponse</a></code>
- <code><a href="./src/resources/warp-connector.ts">WarpConnectorUpdateResponse</a></code>
- <code><a href="./src/resources/warp-connector.ts">WarpConnectorListResponse</a></code>
- <code><a href="./src/resources/warp-connector.ts">WarpConnectorDeleteResponse</a></code>
- <code><a href="./src/resources/warp-connector.ts">WarpConnectorGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/warp_connector">client.warpConnector.<a href="./src/resources/warp-connector.ts">create</a>(accountId, { ...params }) -> WarpConnectorCreateResponse</code>
- <code title="patch /accounts/{account_id}/warp_connector/{tunnel_id}">client.warpConnector.<a href="./src/resources/warp-connector.ts">update</a>(accountId, tunnelId, { ...params }) -> WarpConnectorUpdateResponse</code>
- <code title="get /accounts/{account_id}/warp_connector">client.warpConnector.<a href="./src/resources/warp-connector.ts">list</a>(accountId, { ...params }) -> WarpConnectorListResponse | null</code>
- <code title="delete /accounts/{account_id}/warp_connector/{tunnel_id}">client.warpConnector.<a href="./src/resources/warp-connector.ts">delete</a>(accountId, tunnelId, { ...params }) -> WarpConnectorDeleteResponse</code>
- <code title="get /accounts/{account_id}/warp_connector/{tunnel_id}">client.warpConnector.<a href="./src/resources/warp-connector.ts">get</a>(accountId, tunnelId) -> WarpConnectorGetResponse</code>

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

- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/settings.ts">SettingUpdateResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/settings">client.workersForPlatforms.dispatch.namespaces.scripts.settings.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/settings.ts">update</a>(accountId, dispatchNamespace, scriptName, { ...params }) -> SettingUpdateResponse</code>
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

- <code><a href="./src/resources/worker-scripts/settings.ts">SettingUpdateResponse</a></code>
- <code><a href="./src/resources/worker-scripts/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/workers/scripts/{script_name}/settings">client.workerScripts.settings.<a href="./src/resources/worker-scripts/settings.ts">update</a>(accountId, scriptName, { ...params }) -> SettingUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/settings">client.workerScripts.settings.<a href="./src/resources/worker-scripts/settings.ts">get</a>(accountId, scriptName) -> SettingGetResponse</code>

# Zerotrust

## ConnectivitySettings

Types:

- <code><a href="./src/resources/zerotrust/connectivity-settings.ts">ConnectivitySettingUpdateResponse</a></code>
- <code><a href="./src/resources/zerotrust/connectivity-settings.ts">ConnectivitySettingGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/zerotrust/connectivity_settings">client.zerotrust.connectivitySettings.<a href="./src/resources/zerotrust/connectivity-settings.ts">update</a>(accountId, { ...params }) -> ConnectivitySettingUpdateResponse</code>
- <code title="get /accounts/{account_id}/zerotrust/connectivity_settings">client.zerotrust.connectivitySettings.<a href="./src/resources/zerotrust/connectivity-settings.ts">get</a>(accountId) -> ConnectivitySettingGetResponse</code>

# Addressing

## Prefixes

### BGPPrefixes

Types:

- <code><a href="./src/resources/addressing/prefixes/bgp-prefixes.ts">BGPPrefixUpdateResponse</a></code>
- <code><a href="./src/resources/addressing/prefixes/bgp-prefixes.ts">BGPPrefixListResponse</a></code>
- <code><a href="./src/resources/addressing/prefixes/bgp-prefixes.ts">BGPPrefixGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes/{bgp_prefix_id}">client.addressing.prefixes.bgpPrefixes.<a href="./src/resources/addressing/prefixes/bgp-prefixes.ts">update</a>(accountId, prefixId, bgpPrefixId, { ...params }) -> BGPPrefixUpdateResponse</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes">client.addressing.prefixes.bgpPrefixes.<a href="./src/resources/addressing/prefixes/bgp-prefixes.ts">list</a>(accountId, prefixId) -> BGPPrefixListResponse | null</code>
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
- <code title="get /accounts/{account_identifier}/challenges/widgets">client.challenges.widgets.<a href="./src/resources/challenges/widgets.ts">list</a>(accountIdentifier, { ...params }) -> WidgetListResponse</code>
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
- <code><a href="./src/resources/hyperdrive/configs.ts">ConfigGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/hyperdrive/configs">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">create</a>(accountId, { ...params }) -> ConfigCreateResponse | null</code>
- <code title="put /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">update</a>(accountId, hyperdriveId, { ...params }) -> ConfigUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/hyperdrive/configs">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">list</a>(accountId) -> ConfigListResponse</code>
- <code title="delete /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">delete</a>(accountId, hyperdriveId) -> ConfigDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">get</a>(accountId, hyperdriveId) -> ConfigGetResponse | null</code>

# Intel

## IndicatorFeeds

Types:

- <code><a href="./src/resources/intel/indicator-feeds.ts">IndicatorFeedCreateResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds.ts">IndicatorFeedListResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds.ts">IndicatorFeedDataResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds.ts">IndicatorFeedGetResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds.ts">IndicatorFeedPermissionsAddResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds.ts">IndicatorFeedPermissionsRemoveResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds.ts">IndicatorFeedPermissionsViewResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds.ts">IndicatorFeedSnapshotResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/intel/indicator-feeds">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds.ts">create</a>(accountIdentifier, { ...params }) -> IndicatorFeedCreateResponse</code>
- <code title="get /accounts/{account_identifier}/intel/indicator-feeds">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds.ts">list</a>(accountIdentifier) -> IndicatorFeedListResponse</code>
- <code title="get /accounts/{account_identifier}/intel/indicator-feeds/{feed_id}/data">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds.ts">data</a>(accountIdentifier, feedId) -> string</code>
- <code title="get /accounts/{account_identifier}/intel/indicator-feeds/{feed_id}">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds.ts">get</a>(accountIdentifier, feedId) -> IndicatorFeedGetResponse</code>
- <code title="put /accounts/{account_identifier}/intel/indicator-feeds/permissions/add">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds.ts">permissionsAdd</a>(accountIdentifier, { ...params }) -> IndicatorFeedPermissionsAddResponse</code>
- <code title="put /accounts/{account_identifier}/intel/indicator-feeds/permissions/remove">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds.ts">permissionsRemove</a>(accountIdentifier, { ...params }) -> IndicatorFeedPermissionsRemoveResponse</code>
- <code title="get /accounts/{account_identifier}/intel/indicator-feeds/permissions/view">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds.ts">permissionsView</a>(accountIdentifier) -> IndicatorFeedPermissionsViewResponse</code>
- <code title="put /accounts/{account_identifier}/intel/indicator-feeds/{feed_id}/snapshot">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds.ts">snapshot</a>(accountIdentifier, feedId, { ...params }) -> IndicatorFeedSnapshotResponse</code>

## Sinkholes

Types:

- <code><a href="./src/resources/intel/sinkholes.ts">SinkholeListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/intel/sinkholes">client.intel.sinkholes.<a href="./src/resources/intel/sinkholes.ts">list</a>(accountIdentifier) -> SinkholeListResponse</code>

# Rum

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
- <code title="get /accounts/{account_id}/rum/site_info/list">client.rum.siteInfos.<a href="./src/resources/rum/site-infos.ts">list</a>(accountId, { ...params }) -> SiteInfoListResponse</code>
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

- <code><a href="./src/resources/radar/annotations/outages/outages.ts">OutageListResponse</a></code>

Methods:

- <code title="get /radar/annotations/outages">client.radar.annotations.outages.<a href="./src/resources/radar/annotations/outages/outages.ts">list</a>({ ...params }) -> OutageListResponse</code>

#### Locations

Types:

- <code><a href="./src/resources/radar/annotations/outages/locations.ts">LocationListResponse</a></code>

Methods:

- <code title="get /radar/annotations/outages/locations">client.radar.annotations.outages.locations.<a href="./src/resources/radar/annotations/outages/locations.ts">list</a>({ ...params }) -> LocationListResponse</code>

## BGP

### Leaks

#### Events

Types:

- <code><a href="./src/resources/radar/bgp/leaks/events.ts">EventListResponse</a></code>

Methods:

- <code title="get /radar/bgp/leaks/events">client.radar.bgp.leaks.events.<a href="./src/resources/radar/bgp/leaks/events.ts">list</a>({ ...params }) -> EventListResponse</code>

### Timeseries

Types:

- <code><a href="./src/resources/radar/bgp/timeseries.ts">TimeseryListResponse</a></code>

Methods:

- <code title="get /radar/bgp/timeseries">client.radar.bgp.timeseries.<a href="./src/resources/radar/bgp/timeseries.ts">list</a>({ ...params }) -> TimeseryListResponse</code>

### Tops

#### Ases

Types:

- <code><a href="./src/resources/radar/bgp/tops/ases.ts">AseListResponse</a></code>
- <code><a href="./src/resources/radar/bgp/tops/ases.ts">AsePrefixesResponse</a></code>

Methods:

- <code title="get /radar/bgp/top/ases">client.radar.bgp.tops.ases.<a href="./src/resources/radar/bgp/tops/ases.ts">list</a>({ ...params }) -> AseListResponse</code>
- <code title="get /radar/bgp/top/ases/prefixes">client.radar.bgp.tops.ases.<a href="./src/resources/radar/bgp/tops/ases.ts">prefixes</a>({ ...params }) -> AsePrefixesResponse</code>

#### Prefixes

Types:

- <code><a href="./src/resources/radar/bgp/tops/prefixes.ts">PrefixListResponse</a></code>

Methods:

- <code title="get /radar/bgp/top/prefixes">client.radar.bgp.tops.prefixes.<a href="./src/resources/radar/bgp/tops/prefixes.ts">list</a>({ ...params }) -> PrefixListResponse</code>

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

- <code><a href="./src/resources/radar/datasets/datasets.ts">DatasetListResponse</a></code>
- <code><a href="./src/resources/radar/datasets/datasets.ts">DatasetGetResponse</a></code>

Methods:

- <code title="get /radar/datasets">client.radar.datasets.<a href="./src/resources/radar/datasets/datasets.ts">list</a>({ ...params }) -> DatasetListResponse</code>
- <code title="get /radar/datasets/{alias}">client.radar.datasets.<a href="./src/resources/radar/datasets/datasets.ts">get</a>(alias, { ...params }) -> string</code>

### Downloads

Types:

- <code><a href="./src/resources/radar/datasets/downloads.ts">DownloadRadarPostDatasetDownloadResponse</a></code>

Methods:

- <code title="post /radar/datasets/download">client.radar.datasets.downloads.<a href="./src/resources/radar/datasets/downloads.ts">radarPostDatasetDownload</a>({ ...params }) -> DownloadRadarPostDatasetDownloadResponse</code>

## DNS

### Tops

#### Ases

Types:

- <code><a href="./src/resources/radar/dns/tops/ases.ts">AseListResponse</a></code>

Methods:

- <code title="get /radar/dns/top/ases">client.radar.dns.tops.ases.<a href="./src/resources/radar/dns/tops/ases.ts">list</a>({ ...params }) -> AseListResponse</code>

#### Locations

Types:

- <code><a href="./src/resources/radar/dns/tops/locations.ts">LocationListResponse</a></code>

Methods:

- <code title="get /radar/dns/top/locations">client.radar.dns.tops.locations.<a href="./src/resources/radar/dns/tops/locations.ts">list</a>({ ...params }) -> LocationListResponse</code>

## Netflows

### Timeseries

Types:

- <code><a href="./src/resources/radar/netflows/timeseries.ts">TimeseryListResponse</a></code>

Methods:

- <code title="get /radar/netflows/timeseries">client.radar.netflows.timeseries.<a href="./src/resources/radar/netflows/timeseries.ts">list</a>({ ...params }) -> TimeseryListResponse</code>

### Tops

#### Ases

Types:

- <code><a href="./src/resources/radar/netflows/tops/ases.ts">AseListResponse</a></code>

Methods:

- <code title="get /radar/netflows/top/ases">client.radar.netflows.tops.ases.<a href="./src/resources/radar/netflows/tops/ases.ts">list</a>({ ...params }) -> AseListResponse</code>

#### Locations

Types:

- <code><a href="./src/resources/radar/netflows/tops/locations.ts">LocationListResponse</a></code>

Methods:

- <code title="get /radar/netflows/top/locations">client.radar.netflows.tops.locations.<a href="./src/resources/radar/netflows/tops/locations.ts">list</a>({ ...params }) -> LocationListResponse</code>

## Searches

### Globals

Types:

- <code><a href="./src/resources/radar/searches/globals.ts">GlobalListResponse</a></code>

Methods:

- <code title="get /radar/search/global">client.radar.searches.globals.<a href="./src/resources/radar/searches/globals.ts">list</a>({ ...params }) -> GlobalListResponse</code>

## VerifiedBots

### Tops

#### Bots

Types:

- <code><a href="./src/resources/radar/verified-bots/tops/bots.ts">BotListResponse</a></code>

Methods:

- <code title="get /radar/verified_bots/top/bots">client.radar.verifiedBots.tops.bots.<a href="./src/resources/radar/verified-bots/tops/bots.ts">list</a>({ ...params }) -> BotListResponse</code>

#### Categories

Types:

- <code><a href="./src/resources/radar/verified-bots/tops/categories.ts">CategoryListResponse</a></code>

Methods:

- <code title="get /radar/verified_bots/top/categories">client.radar.verifiedBots.tops.categories.<a href="./src/resources/radar/verified-bots/tops/categories.ts">list</a>({ ...params }) -> CategoryListResponse</code>

## As112

### TimeseriesGroups

#### DNSSEC

Types:

- <code><a href="./src/resources/radar/as112/timeseries-groups/dnssec.ts">DNSSECListResponse</a></code>

Methods:

- <code title="get /radar/as112/timeseries_groups/dnssec">client.radar.as112.timeseriesGroups.dnssec.<a href="./src/resources/radar/as112/timeseries-groups/dnssec.ts">list</a>({ ...params }) -> DNSSECListResponse</code>

#### Edns

Types:

- <code><a href="./src/resources/radar/as112/timeseries-groups/edns.ts">EdnListResponse</a></code>

Methods:

- <code title="get /radar/as112/timeseries_groups/edns">client.radar.as112.timeseriesGroups.edns.<a href="./src/resources/radar/as112/timeseries-groups/edns.ts">list</a>({ ...params }) -> EdnListResponse</code>

#### IPVersion

Types:

- <code><a href="./src/resources/radar/as112/timeseries-groups/ip-version.ts">IPVersionListResponse</a></code>

Methods:

- <code title="get /radar/as112/timeseries_groups/ip_version">client.radar.as112.timeseriesGroups.ipVersion.<a href="./src/resources/radar/as112/timeseries-groups/ip-version.ts">list</a>({ ...params }) -> IPVersionListResponse</code>

## ConnectionTampering

Types:

- <code><a href="./src/resources/radar/connection-tampering/connection-tampering.ts">ConnectionTamperingSummaryResponse</a></code>

Methods:

- <code title="get /radar/connection_tampering/summary">client.radar.connectionTampering.<a href="./src/resources/radar/connection-tampering/connection-tampering.ts">summary</a>({ ...params }) -> ConnectionTamperingSummaryResponse</code>

### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/connection-tampering/timeseries-groups.ts">TimeseriesGroupListResponse</a></code>

Methods:

- <code title="get /radar/connection_tampering/timeseries_groups">client.radar.connectionTampering.timeseriesGroups.<a href="./src/resources/radar/connection-tampering/timeseries-groups.ts">list</a>({ ...params }) -> TimeseriesGroupListResponse</code>

## Email

### Security

#### Summaries

##### Arcs

Types:

- <code><a href="./src/resources/radar/email/security/summaries/arcs.ts">ArcListResponse</a></code>

Methods:

- <code title="get /radar/email/security/summary/arc">client.radar.email.security.summaries.arcs.<a href="./src/resources/radar/email/security/summaries/arcs.ts">list</a>({ ...params }) -> ArcListResponse</code>

##### DKIMs

Types:

- <code><a href="./src/resources/radar/email/security/summaries/dkims.ts">DKIMListResponse</a></code>

Methods:

- <code title="get /radar/email/security/summary/dkim">client.radar.email.security.summaries.dkims.<a href="./src/resources/radar/email/security/summaries/dkims.ts">list</a>({ ...params }) -> DKIMListResponse</code>

##### Dmarcs

Types:

- <code><a href="./src/resources/radar/email/security/summaries/dmarcs.ts">DmarcListResponse</a></code>

Methods:

- <code title="get /radar/email/security/summary/dmarc">client.radar.email.security.summaries.dmarcs.<a href="./src/resources/radar/email/security/summaries/dmarcs.ts">list</a>({ ...params }) -> DmarcListResponse</code>

##### Malicious

Types:

- <code><a href="./src/resources/radar/email/security/summaries/malicious.ts">MaliciousListResponse</a></code>

Methods:

- <code title="get /radar/email/security/summary/malicious">client.radar.email.security.summaries.malicious.<a href="./src/resources/radar/email/security/summaries/malicious.ts">list</a>({ ...params }) -> MaliciousListResponse</code>

##### Spams

Types:

- <code><a href="./src/resources/radar/email/security/summaries/spams.ts">SpamGetResponse</a></code>

Methods:

- <code title="get /radar/email/security/summary/spam">client.radar.email.security.summaries.spams.<a href="./src/resources/radar/email/security/summaries/spams.ts">get</a>({ ...params }) -> SpamGetResponse</code>

##### SPFs

Types:

- <code><a href="./src/resources/radar/email/security/summaries/spfs.ts">SPFListResponse</a></code>

Methods:

- <code title="get /radar/email/security/summary/spf">client.radar.email.security.summaries.spfs.<a href="./src/resources/radar/email/security/summaries/spfs.ts">list</a>({ ...params }) -> SPFListResponse</code>

##### ThreatCategories

Types:

- <code><a href="./src/resources/radar/email/security/summaries/threat-categories.ts">ThreatCategoryListResponse</a></code>

Methods:

- <code title="get /radar/email/security/summary/threat_category">client.radar.email.security.summaries.threatCategories.<a href="./src/resources/radar/email/security/summaries/threat-categories.ts">list</a>({ ...params }) -> ThreatCategoryListResponse</code>

#### TimeseriesGroups

##### Arcs

Types:

- <code><a href="./src/resources/radar/email/security/timeseries-groups/arcs.ts">ArcListResponse</a></code>

Methods:

- <code title="get /radar/email/security/timeseries_groups/arc">client.radar.email.security.timeseriesGroups.arcs.<a href="./src/resources/radar/email/security/timeseries-groups/arcs.ts">list</a>({ ...params }) -> ArcListResponse</code>

##### DKIMs

Types:

- <code><a href="./src/resources/radar/email/security/timeseries-groups/dkims.ts">DKIMListResponse</a></code>

Methods:

- <code title="get /radar/email/security/timeseries_groups/dkim">client.radar.email.security.timeseriesGroups.dkims.<a href="./src/resources/radar/email/security/timeseries-groups/dkims.ts">list</a>({ ...params }) -> DKIMListResponse</code>

## Attacks

### Layer3

#### TimeseriesGroups

##### Industry

Types:

- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups/industry.ts">IndustryListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/timeseries_groups/industry">client.radar.attacks.layer3.timeseriesGroups.industry.<a href="./src/resources/radar/attacks/layer3/timeseries-groups/industry.ts">list</a>({ ...params }) -> IndustryListResponse</code>

##### IPVersion

Types:

- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups/ip-version.ts">IPVersionListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/timeseries_groups/ip_version">client.radar.attacks.layer3.timeseriesGroups.ipVersion.<a href="./src/resources/radar/attacks/layer3/timeseries-groups/ip-version.ts">list</a>({ ...params }) -> IPVersionListResponse</code>

##### Protocol

Types:

- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups/protocol.ts">ProtocolListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/timeseries_groups/protocol">client.radar.attacks.layer3.timeseriesGroups.protocol.<a href="./src/resources/radar/attacks/layer3/timeseries-groups/protocol.ts">list</a>({ ...params }) -> ProtocolListResponse</code>

##### Vector

Types:

- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups/vector.ts">VectorListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/timeseries_groups/vector">client.radar.attacks.layer3.timeseriesGroups.vector.<a href="./src/resources/radar/attacks/layer3/timeseries-groups/vector.ts">list</a>({ ...params }) -> VectorListResponse</code>

##### Vertical

Types:

- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups/vertical.ts">VerticalListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/timeseries_groups/vertical">client.radar.attacks.layer3.timeseriesGroups.vertical.<a href="./src/resources/radar/attacks/layer3/timeseries-groups/vertical.ts">list</a>({ ...params }) -> VerticalListResponse</code>

#### Top

##### Attacks

Types:

- <code><a href="./src/resources/radar/attacks/layer3/top/attacks.ts">AttackListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/top/attacks">client.radar.attacks.layer3.top.attacks.<a href="./src/resources/radar/attacks/layer3/top/attacks.ts">list</a>({ ...params }) -> AttackListResponse</code>

##### Industry

Types:

- <code><a href="./src/resources/radar/attacks/layer3/top/industry.ts">IndustryListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/top/industry">client.radar.attacks.layer3.top.industry.<a href="./src/resources/radar/attacks/layer3/top/industry.ts">list</a>({ ...params }) -> IndustryListResponse</code>

##### Locations

###### Origin

Types:

- <code><a href="./src/resources/radar/attacks/layer3/top/locations/origin.ts">OriginListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/top/locations/origin">client.radar.attacks.layer3.top.locations.origin.<a href="./src/resources/radar/attacks/layer3/top/locations/origin.ts">list</a>({ ...params }) -> OriginListResponse</code>

###### Target

Types:

- <code><a href="./src/resources/radar/attacks/layer3/top/locations/target.ts">TargetListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/top/locations/target">client.radar.attacks.layer3.top.locations.target.<a href="./src/resources/radar/attacks/layer3/top/locations/target.ts">list</a>({ ...params }) -> TargetListResponse</code>

##### Vertical

Types:

- <code><a href="./src/resources/radar/attacks/layer3/top/vertical.ts">VerticalListResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/top/vertical">client.radar.attacks.layer3.top.vertical.<a href="./src/resources/radar/attacks/layer3/top/vertical.ts">list</a>({ ...params }) -> VerticalListResponse</code>

## Emails

### Security

#### Dmarc

Types:

- <code><a href="./src/resources/radar/emails/security/dmarc.ts">DmarcListResponse</a></code>

Methods:

- <code title="get /radar/email/security/timeseries_groups/dmarc">client.radar.emails.security.dmarc.<a href="./src/resources/radar/emails/security/dmarc.ts">list</a>({ ...params }) -> DmarcListResponse</code>

#### Malicious

Types:

- <code><a href="./src/resources/radar/emails/security/malicious.ts">MaliciousListResponse</a></code>

Methods:

- <code title="get /radar/email/security/timeseries_groups/malicious">client.radar.emails.security.malicious.<a href="./src/resources/radar/emails/security/malicious.ts">list</a>({ ...params }) -> MaliciousListResponse</code>

#### Spam

Types:

- <code><a href="./src/resources/radar/emails/security/spam.ts">SpamListResponse</a></code>

Methods:

- <code title="get /radar/email/security/timeseries_groups/spam">client.radar.emails.security.spam.<a href="./src/resources/radar/emails/security/spam.ts">list</a>({ ...params }) -> SpamListResponse</code>

#### SPF

Types:

- <code><a href="./src/resources/radar/emails/security/spf.ts">SPFListResponse</a></code>

Methods:

- <code title="get /radar/email/security/timeseries_groups/spf">client.radar.emails.security.spf.<a href="./src/resources/radar/emails/security/spf.ts">list</a>({ ...params }) -> SPFListResponse</code>

#### ThreatCategory

Types:

- <code><a href="./src/resources/radar/emails/security/threat-category.ts">ThreatCategoryListResponse</a></code>

Methods:

- <code title="get /radar/email/security/timeseries_groups/threat_category">client.radar.emails.security.threatCategory.<a href="./src/resources/radar/emails/security/threat-category.ts">list</a>({ ...params }) -> ThreatCategoryListResponse</code>

#### Top

##### Ases

Types:

- <code><a href="./src/resources/radar/emails/security/top/ases/ases.ts">AseListResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/ases">client.radar.emails.security.top.ases.<a href="./src/resources/radar/emails/security/top/ases/ases.ts">list</a>({ ...params }) -> AseListResponse</code>

###### Arc

Types:

- <code><a href="./src/resources/radar/emails/security/top/ases/arc.ts">ArcGetResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/ases/arc/{arc}">client.radar.emails.security.top.ases.arc.<a href="./src/resources/radar/emails/security/top/ases/arc.ts">get</a>(arc, { ...params }) -> ArcGetResponse</code>

###### DKIM

Types:

- <code><a href="./src/resources/radar/emails/security/top/ases/dkim.ts">DKIMGetResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/ases/dkim/{dkim}">client.radar.emails.security.top.ases.dkim.<a href="./src/resources/radar/emails/security/top/ases/dkim.ts">get</a>(dkim, { ...params }) -> DKIMGetResponse</code>

###### Dmarc

Types:

- <code><a href="./src/resources/radar/emails/security/top/ases/dmarc.ts">DmarcGetResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/ases/dmarc/{dmarc}">client.radar.emails.security.top.ases.dmarc.<a href="./src/resources/radar/emails/security/top/ases/dmarc.ts">get</a>(dmarc, { ...params }) -> DmarcGetResponse</code>

## Entities

Types:

- <code><a href="./src/resources/radar/entities/entities.ts">EntityIPsResponse</a></code>

Methods:

- <code title="get /radar/entities/ip">client.radar.entities.<a href="./src/resources/radar/entities/entities.ts">ips</a>({ ...params }) -> EntityIPsResponse</code>

### Asns

Types:

- <code><a href="./src/resources/radar/entities/asns.ts">AsnRelResponse</a></code>

Methods:

- <code title="get /radar/entities/asns/{asn}/rel">client.radar.entities.asns.<a href="./src/resources/radar/entities/asns.ts">rel</a>(asn, { ...params }) -> AsnRelResponse</code>

## HTTP

Types:

- <code><a href="./src/resources/radar/http/http.ts">HTTPBotClassesResponse</a></code>
- <code><a href="./src/resources/radar/http/http.ts">HTTPBrowserFamiliesResponse</a></code>
- <code><a href="./src/resources/radar/http/http.ts">HTTPBrowsersResponse</a></code>
- <code><a href="./src/resources/radar/http/http.ts">HTTPDeviceTypesResponse</a></code>
- <code><a href="./src/resources/radar/http/http.ts">HTTPHTTPProtocolsResponse</a></code>
- <code><a href="./src/resources/radar/http/http.ts">HTTPHTTPVersionsResponse</a></code>
- <code><a href="./src/resources/radar/http/http.ts">HTTPIPVersionsResponse</a></code>
- <code><a href="./src/resources/radar/http/http.ts">HTTPOssResponse</a></code>

Methods:

- <code title="get /radar/http/timeseries_groups/bot_class">client.radar.http.<a href="./src/resources/radar/http/http.ts">botClasses</a>({ ...params }) -> HTTPBotClassesResponse</code>
- <code title="get /radar/http/timeseries_groups/browser_family">client.radar.http.<a href="./src/resources/radar/http/http.ts">browserFamilies</a>({ ...params }) -> HTTPBrowserFamiliesResponse</code>
- <code title="get /radar/http/timeseries_groups/browser">client.radar.http.<a href="./src/resources/radar/http/http.ts">browsers</a>({ ...params }) -> HTTPBrowsersResponse</code>
- <code title="get /radar/http/timeseries_groups/device_type">client.radar.http.<a href="./src/resources/radar/http/http.ts">deviceTypes</a>({ ...params }) -> HTTPDeviceTypesResponse</code>
- <code title="get /radar/http/timeseries_groups/http_protocol">client.radar.http.<a href="./src/resources/radar/http/http.ts">httpProtocols</a>({ ...params }) -> HTTPHTTPProtocolsResponse</code>
- <code title="get /radar/http/timeseries_groups/http_version">client.radar.http.<a href="./src/resources/radar/http/http.ts">httpVersions</a>({ ...params }) -> HTTPHTTPVersionsResponse</code>
- <code title="get /radar/http/timeseries_groups/ip_version">client.radar.http.<a href="./src/resources/radar/http/http.ts">ipVersions</a>({ ...params }) -> HTTPIPVersionsResponse</code>
- <code title="get /radar/http/timeseries_groups/os">client.radar.http.<a href="./src/resources/radar/http/http.ts">oss</a>({ ...params }) -> HTTPOssResponse</code>

### TLSVersion

Types:

- <code><a href="./src/resources/radar/http/tls-version.ts">TLSVersionListResponse</a></code>

Methods:

- <code title="get /radar/http/timeseries_groups/tls_version">client.radar.http.tlsVersion.<a href="./src/resources/radar/http/tls-version.ts">list</a>({ ...params }) -> TLSVersionListResponse</code>

## Quality

### Iqi

Types:

- <code><a href="./src/resources/radar/quality/iqi/iqi.ts">IqiGetResponse</a></code>

Methods:

- <code title="get /radar/quality/iqi/summary">client.radar.quality.iqi.<a href="./src/resources/radar/quality/iqi/iqi.ts">get</a>({ ...params }) -> IqiGetResponse</code>

#### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/quality/iqi/timeseries-groups.ts">TimeseriesGroupListResponse</a></code>

Methods:

- <code title="get /radar/quality/iqi/timeseries_groups">client.radar.quality.iqi.timeseriesGroups.<a href="./src/resources/radar/quality/iqi/timeseries-groups.ts">list</a>({ ...params }) -> TimeseriesGroupListResponse</code>

### Speed

#### Histogram

Types:

- <code><a href="./src/resources/radar/quality/speed/histogram.ts">HistogramGetResponse</a></code>

Methods:

- <code title="get /radar/quality/speed/histogram">client.radar.quality.speed.histogram.<a href="./src/resources/radar/quality/speed/histogram.ts">get</a>({ ...params }) -> HistogramGetResponse</code>

#### Summary

Types:

- <code><a href="./src/resources/radar/quality/speed/summary.ts">SummaryGetResponse</a></code>

Methods:

- <code title="get /radar/quality/speed/summary">client.radar.quality.speed.summary.<a href="./src/resources/radar/quality/speed/summary.ts">get</a>({ ...params }) -> SummaryGetResponse</code>

#### Top

##### Ases

Types:

- <code><a href="./src/resources/radar/quality/speed/top/ases.ts">AseListResponse</a></code>

Methods:

- <code title="get /radar/quality/speed/top/ases">client.radar.quality.speed.top.ases.<a href="./src/resources/radar/quality/speed/top/ases.ts">list</a>({ ...params }) -> AseListResponse</code>

##### Locations

Types:

- <code><a href="./src/resources/radar/quality/speed/top/locations.ts">LocationListResponse</a></code>

Methods:

- <code title="get /radar/quality/speed/top/locations">client.radar.quality.speed.top.locations.<a href="./src/resources/radar/quality/speed/top/locations.ts">list</a>({ ...params }) -> LocationListResponse</code>

## Ranking

### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/ranking/timeseries-groups.ts">TimeseriesGroupListResponse</a></code>

Methods:

- <code title="get /radar/ranking/timeseries_groups">client.radar.ranking.timeseriesGroups.<a href="./src/resources/radar/ranking/timeseries-groups.ts">list</a>({ ...params }) -> TimeseriesGroupListResponse</code>

## TrafficAnomalies

Types:

- <code><a href="./src/resources/radar/traffic-anomalies/traffic-anomalies.ts">TrafficAnomalyListResponse</a></code>

Methods:

- <code title="get /radar/traffic_anomalies">client.radar.trafficAnomalies.<a href="./src/resources/radar/traffic-anomalies/traffic-anomalies.ts">list</a>({ ...params }) -> TrafficAnomalyListResponse</code>

### Locations

Types:

- <code><a href="./src/resources/radar/traffic-anomalies/locations.ts">LocationListResponse</a></code>

Methods:

- <code title="get /radar/traffic_anomalies/locations">client.radar.trafficAnomalies.locations.<a href="./src/resources/radar/traffic-anomalies/locations.ts">list</a>({ ...params }) -> LocationListResponse</code>

# BotManagements

Types:

- <code><a href="./src/resources/bot-managements.ts">BotManagementUpdateResponse</a></code>
- <code><a href="./src/resources/bot-managements.ts">BotManagementGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/bot_management">client.botManagements.<a href="./src/resources/bot-managements.ts">update</a>(zoneId, { ...params }) -> BotManagementUpdateResponse</code>
- <code title="get /zones/{zone_id}/bot_management">client.botManagements.<a href="./src/resources/bot-managements.ts">get</a>(zoneId) -> BotManagementGetResponse</code>

# CacheReserves

Types:

- <code><a href="./src/resources/cache-reserves.ts">CacheReserveCreateResponse</a></code>
- <code><a href="./src/resources/cache-reserves.ts">CacheReserveClearResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/cache/cache_reserve_clear">client.cacheReserves.<a href="./src/resources/cache-reserves.ts">create</a>(zoneId) -> CacheReserveCreateResponse</code>
- <code title="get /zones/{zone_id}/cache/cache_reserve_clear">client.cacheReserves.<a href="./src/resources/cache-reserves.ts">clear</a>(zoneId) -> CacheReserveClearResponse</code>

# OriginPostQuantumEncryptions

Types:

- <code><a href="./src/resources/origin-post-quantum-encryptions.ts">OriginPostQuantumEncryptionUpdateResponse</a></code>
- <code><a href="./src/resources/origin-post-quantum-encryptions.ts">OriginPostQuantumEncryptionGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/cache/origin_post_quantum_encryption">client.originPostQuantumEncryptions.<a href="./src/resources/origin-post-quantum-encryptions.ts">update</a>(zoneId, { ...params }) -> OriginPostQuantumEncryptionUpdateResponse</code>
- <code title="get /zones/{zone_id}/cache/origin_post_quantum_encryption">client.originPostQuantumEncryptions.<a href="./src/resources/origin-post-quantum-encryptions.ts">get</a>(zoneId) -> OriginPostQuantumEncryptionGetResponse</code>

# Cache

Types:

- <code><a href="./src/resources/cache.ts">CacheRegionalTieredCachesResponse</a></code>
- <code><a href="./src/resources/cache.ts">CacheUpdateRegionalTieredCacheResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/cache/regional_tiered_cache">client.cache.<a href="./src/resources/cache.ts">regionalTieredCaches</a>(zoneId) -> CacheRegionalTieredCachesResponse</code>
- <code title="patch /zones/{zone_id}/cache/regional_tiered_cache">client.cache.<a href="./src/resources/cache.ts">updateRegionalTieredCache</a>(zoneId, { ...params }) -> CacheUpdateRegionalTieredCacheResponse</code>

# Firewall

## WAF

### Packages

#### Groups

Types:

- <code><a href="./src/resources/firewall/waf/packages/groups.ts">GroupUpdateResponse</a></code>
- <code><a href="./src/resources/firewall/waf/packages/groups.ts">GroupListResponse</a></code>
- <code><a href="./src/resources/firewall/waf/packages/groups.ts">GroupGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/firewall/waf/packages/{package_id}/groups/{group_id}">client.firewall.waf.packages.groups.<a href="./src/resources/firewall/waf/packages/groups.ts">update</a>(zoneId, packageId, groupId, { ...params }) -> GroupUpdateResponse</code>
- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/groups">client.firewall.waf.packages.groups.<a href="./src/resources/firewall/waf/packages/groups.ts">list</a>(zoneId, packageId, { ...params }) -> GroupListResponse | null</code>
- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/groups/{group_id}">client.firewall.waf.packages.groups.<a href="./src/resources/firewall/waf/packages/groups.ts">get</a>(zoneId, packageId, groupId) -> GroupGetResponse</code>

#### Rules

Types:

- <code><a href="./src/resources/firewall/waf/packages/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/firewall/waf/packages/rules.ts">RuleGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{rule_id}">client.firewall.waf.packages.rules.<a href="./src/resources/firewall/waf/packages/rules.ts">update</a>(zoneId, packageId, ruleId, { ...params }) -> RuleUpdateResponse</code>
- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{rule_id}">client.firewall.waf.packages.rules.<a href="./src/resources/firewall/waf/packages/rules.ts">get</a>(zoneId, packageId, ruleId) -> RuleGetResponse</code>

# Zaraz

Types:

- <code><a href="./src/resources/zaraz/zaraz.ts">ZarazWorkflowUpdateResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/settings/zaraz/workflow">client.zaraz.<a href="./src/resources/zaraz/zaraz.ts">workflowUpdate</a>(zoneId, { ...params }) -> ZarazWorkflowUpdateResponse</code>

## Config

Types:

- <code><a href="./src/resources/zaraz/config.ts">ConfigUpdateResponse</a></code>
- <code><a href="./src/resources/zaraz/config.ts">ConfigGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/settings/zaraz/config">client.zaraz.config.<a href="./src/resources/zaraz/config.ts">update</a>(zoneId, { ...params }) -> ConfigUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/zaraz/config">client.zaraz.config.<a href="./src/resources/zaraz/config.ts">get</a>(zoneId) -> ConfigGetResponse</code>

## Default

Types:

- <code><a href="./src/resources/zaraz/default.ts">DefaultGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/settings/zaraz/default">client.zaraz.default.<a href="./src/resources/zaraz/default.ts">get</a>(zoneId) -> DefaultGetResponse</code>

## Export

Types:

- <code><a href="./src/resources/zaraz/export.ts">ExportGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/settings/zaraz/export">client.zaraz.export.<a href="./src/resources/zaraz/export.ts">get</a>(zoneId) -> ExportGetResponse</code>

## History

Types:

- <code><a href="./src/resources/zaraz/history/history.ts">HistoryUpdateResponse</a></code>
- <code><a href="./src/resources/zaraz/history/history.ts">HistoryListResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/settings/zaraz/history">client.zaraz.history.<a href="./src/resources/zaraz/history/history.ts">update</a>(zoneId, { ...params }) -> HistoryUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/zaraz/history">client.zaraz.history.<a href="./src/resources/zaraz/history/history.ts">list</a>(zoneId, { ...params }) -> HistoryListResponse</code>

### Configs

Types:

- <code><a href="./src/resources/zaraz/history/configs.ts">ConfigGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/settings/zaraz/history/configs">client.zaraz.history.configs.<a href="./src/resources/zaraz/history/configs.ts">get</a>(zoneId, { ...params }) -> ConfigGetResponse</code>

## Publish

Types:

- <code><a href="./src/resources/zaraz/publish.ts">PublishCreateResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/settings/zaraz/publish">client.zaraz.publish.<a href="./src/resources/zaraz/publish.ts">create</a>(zoneId, { ...params }) -> PublishCreateResponse</code>

## Workflow

Types:

- <code><a href="./src/resources/zaraz/workflow.ts">WorkflowGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/settings/zaraz/workflow">client.zaraz.workflow.<a href="./src/resources/zaraz/workflow.ts">get</a>(zoneId) -> WorkflowGetResponse</code>

# SpeedAPI

Types:

- <code><a href="./src/resources/speed-api/speed-api.ts">SpeedAPIAvailabilitiesListResponse</a></code>
- <code><a href="./src/resources/speed-api/speed-api.ts">SpeedAPIPagesListResponse</a></code>
- <code><a href="./src/resources/speed-api/speed-api.ts">SpeedAPIScheduleDeleteResponse</a></code>
- <code><a href="./src/resources/speed-api/speed-api.ts">SpeedAPIScheduleGetResponse</a></code>
- <code><a href="./src/resources/speed-api/speed-api.ts">SpeedAPITestsCreateResponse</a></code>
- <code><a href="./src/resources/speed-api/speed-api.ts">SpeedAPITestsDeleteResponse</a></code>
- <code><a href="./src/resources/speed-api/speed-api.ts">SpeedAPITestsGetResponse</a></code>
- <code><a href="./src/resources/speed-api/speed-api.ts">SpeedAPITestsListResponse</a></code>
- <code><a href="./src/resources/speed-api/speed-api.ts">SpeedAPITrendsListResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/speed_api/availabilities">client.speedAPI.<a href="./src/resources/speed-api/speed-api.ts">availabilitiesList</a>(zoneId) -> SpeedAPIAvailabilitiesListResponse</code>
- <code title="get /zones/{zone_id}/speed_api/pages">client.speedAPI.<a href="./src/resources/speed-api/speed-api.ts">pagesList</a>(zoneId) -> SpeedAPIPagesListResponse</code>
- <code title="delete /zones/{zone_id}/speed_api/schedule/{url}">client.speedAPI.<a href="./src/resources/speed-api/speed-api.ts">scheduleDelete</a>(zoneId, url, { ...params }) -> SpeedAPIScheduleDeleteResponse</code>
- <code title="get /zones/{zone_id}/speed_api/schedule/{url}">client.speedAPI.<a href="./src/resources/speed-api/speed-api.ts">scheduleGet</a>(zoneId, url, { ...params }) -> SpeedAPIScheduleGetResponse</code>
- <code title="post /zones/{zone_id}/speed_api/pages/{url}/tests">client.speedAPI.<a href="./src/resources/speed-api/speed-api.ts">testsCreate</a>(zoneId, url, { ...params }) -> SpeedAPITestsCreateResponse</code>
- <code title="delete /zones/{zone_id}/speed_api/pages/{url}/tests">client.speedAPI.<a href="./src/resources/speed-api/speed-api.ts">testsDelete</a>(zoneId, url, { ...params }) -> SpeedAPITestsDeleteResponse</code>
- <code title="get /zones/{zone_id}/speed_api/pages/{url}/tests/{test_id}">client.speedAPI.<a href="./src/resources/speed-api/speed-api.ts">testsGet</a>(zoneId, url, testId) -> SpeedAPITestsGetResponse</code>
- <code title="get /zones/{zone_id}/speed_api/pages/{url}/tests">client.speedAPI.<a href="./src/resources/speed-api/speed-api.ts">testsList</a>(zoneId, url, { ...params }) -> SpeedAPITestsListResponse</code>
- <code title="get /zones/{zone_id}/speed_api/pages/{url}/trend">client.speedAPI.<a href="./src/resources/speed-api/speed-api.ts">trendsList</a>(zoneId, url, { ...params }) -> SpeedAPITrendsListResponse</code>

## Schedule

Types:

- <code><a href="./src/resources/speed-api/schedule.ts">ScheduleCreateResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/speed_api/schedule/{url}">client.speedAPI.schedule.<a href="./src/resources/speed-api/schedule.ts">create</a>(zoneId, url, { ...params }) -> ScheduleCreateResponse</code>

# DcvDelegation

## Uuid

Types:

- <code><a href="./src/resources/dcv-delegation/uuid.ts">UuidGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/dcv_delegation/uuid">client.dcvDelegation.uuid.<a href="./src/resources/dcv-delegation/uuid.ts">get</a>(zoneId) -> UuidGetResponse</code>

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

# PageShield

## Connections

Types:

- <code><a href="./src/resources/page-shield/connections.ts">ConnectionGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/page_shield/connections/{connection_id}">client.pageShield.connections.<a href="./src/resources/page-shield/connections.ts">get</a>(zoneId, connectionId) -> ConnectionGetResponse</code>

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

# FontSettings

Types:

- <code><a href="./src/resources/font-settings.ts">FontSettingUpdateResponse</a></code>
- <code><a href="./src/resources/font-settings.ts">FontSettingGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/fonts">client.fontSettings.<a href="./src/resources/font-settings.ts">update</a>(zoneId, { ...params }) -> FontSettingUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/fonts">client.fontSettings.<a href="./src/resources/font-settings.ts">get</a>(zoneId) -> FontSettingGetResponse</code>

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

# DLP

## Datasets

Types:

- <code><a href="./src/resources/dlp/datasets.ts">DatasetCreateResponse</a></code>
- <code><a href="./src/resources/dlp/datasets.ts">DatasetUpdateResponse</a></code>
- <code><a href="./src/resources/dlp/datasets.ts">DatasetListResponse</a></code>
- <code><a href="./src/resources/dlp/datasets.ts">DatasetGetResponse</a></code>
- <code><a href="./src/resources/dlp/datasets.ts">DatasetUploadResponse</a></code>
- <code><a href="./src/resources/dlp/datasets.ts">DatasetUploadPrepareResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/datasets">client.dlp.datasets.<a href="./src/resources/dlp/datasets.ts">create</a>(accountId, { ...params }) -> DatasetCreateResponse</code>
- <code title="put /accounts/{account_id}/dlp/datasets/{dataset_id}">client.dlp.datasets.<a href="./src/resources/dlp/datasets.ts">update</a>(accountId, datasetId, { ...params }) -> DatasetUpdateResponse</code>
- <code title="get /accounts/{account_id}/dlp/datasets">client.dlp.datasets.<a href="./src/resources/dlp/datasets.ts">list</a>(accountId) -> DatasetListResponse</code>
- <code title="delete /accounts/{account_id}/dlp/datasets/{dataset_id}">client.dlp.datasets.<a href="./src/resources/dlp/datasets.ts">delete</a>(accountId, datasetId) -> void</code>
- <code title="get /accounts/{account_id}/dlp/datasets/{dataset_id}">client.dlp.datasets.<a href="./src/resources/dlp/datasets.ts">get</a>(accountId, datasetId) -> DatasetGetResponse</code>
- <code title="post /accounts/{account_id}/dlp/datasets/{dataset_id}/upload/{version}">client.dlp.datasets.<a href="./src/resources/dlp/datasets.ts">upload</a>(accountId, datasetId, version) -> DatasetUploadResponse</code>
- <code title="post /accounts/{account_id}/dlp/datasets/{dataset_id}/upload">client.dlp.datasets.<a href="./src/resources/dlp/datasets.ts">uploadPrepare</a>(accountId, datasetId) -> DatasetUploadPrepareResponse</code>

# Gateway

## AuditSSHSettings

Types:

- <code><a href="./src/resources/gateway/audit-ssh-settings.ts">AuditSSHSettingUpdateResponse</a></code>
- <code><a href="./src/resources/gateway/audit-ssh-settings.ts">AuditSSHSettingGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/gateway/audit_ssh_settings">client.gateway.auditSSHSettings.<a href="./src/resources/gateway/audit-ssh-settings.ts">update</a>(accountId, { ...params }) -> AuditSSHSettingUpdateResponse</code>
- <code title="get /accounts/{account_id}/gateway/audit_ssh_settings">client.gateway.auditSSHSettings.<a href="./src/resources/gateway/audit-ssh-settings.ts">get</a>(accountId) -> AuditSSHSettingGetResponse</code>

# AccessTags

Types:

- <code><a href="./src/resources/access-tags.ts">AccessTagCreateResponse</a></code>
- <code><a href="./src/resources/access-tags.ts">AccessTagUpdateResponse</a></code>
- <code><a href="./src/resources/access-tags.ts">AccessTagDeleteResponse</a></code>
- <code><a href="./src/resources/access-tags.ts">AccessTagGetResponse</a></code>

Methods:

- <code title="post /accounts/{identifier}/access/tags">client.accessTags.<a href="./src/resources/access-tags.ts">create</a>(identifier, { ...params }) -> AccessTagCreateResponse</code>
- <code title="put /accounts/{identifier}/access/tags/{name}">client.accessTags.<a href="./src/resources/access-tags.ts">update</a>(identifier, tagName, { ...params }) -> AccessTagUpdateResponse</code>
- <code title="delete /accounts/{identifier}/access/tags/{name}">client.accessTags.<a href="./src/resources/access-tags.ts">delete</a>(identifier, name) -> AccessTagDeleteResponse</code>
- <code title="get /accounts/{identifier}/access/tags/{name}">client.accessTags.<a href="./src/resources/access-tags.ts">get</a>(identifier, name) -> AccessTagGetResponse</code>

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
