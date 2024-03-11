# Accounts

Types:

- <code><a href="./src/resources/accounts/accounts.ts">Account</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">AccountUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">AccountListResponse</a></code>
- <code><a href="./src/resources/accounts/accounts.ts">AccountGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}">client.accounts.<a href="./src/resources/accounts/accounts.ts">update</a>({ ...params }) -> AccountUpdateResponse</code>
- <code title="get /accounts">client.accounts.<a href="./src/resources/accounts/accounts.ts">list</a>({ ...params }) -> AccountListResponsesV4PagePaginationArray</code>
- <code title="get /accounts/{account_id}">client.accounts.<a href="./src/resources/accounts/accounts.ts">get</a>({ ...params }) -> AccountGetResponse</code>

## Members

Types:

- <code><a href="./src/resources/accounts/members.ts">AccountMember</a></code>
- <code><a href="./src/resources/accounts/members.ts">AccountMemberWithID</a></code>
- <code><a href="./src/resources/accounts/members.ts">MemberListResponse</a></code>
- <code><a href="./src/resources/accounts/members.ts">MemberDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/members">client.accounts.members.<a href="./src/resources/accounts/members.ts">create</a>({ ...params }) -> AccountMemberWithID</code>
- <code title="put /accounts/{account_id}/members/{member_id}">client.accounts.members.<a href="./src/resources/accounts/members.ts">update</a>(memberId, { ...params }) -> AccountMember</code>
- <code title="get /accounts/{account_id}/members">client.accounts.members.<a href="./src/resources/accounts/members.ts">list</a>({ ...params }) -> MemberListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/members/{member_id}">client.accounts.members.<a href="./src/resources/accounts/members.ts">delete</a>(memberId, { ...params }) -> MemberDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/members/{member_id}">client.accounts.members.<a href="./src/resources/accounts/members.ts">get</a>(memberId, { ...params }) -> AccountMember</code>

## Roles

Types:

- <code><a href="./src/resources/accounts/roles.ts">IamSchemasRole</a></code>
- <code><a href="./src/resources/accounts/roles.ts">RoleListResponse</a></code>
- <code><a href="./src/resources/accounts/roles.ts">RoleGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/roles">client.accounts.roles.<a href="./src/resources/accounts/roles.ts">list</a>({ ...params }) -> RoleListResponse | null</code>
- <code title="get /accounts/{account_id}/roles/{role_id}">client.accounts.roles.<a href="./src/resources/accounts/roles.ts">get</a>(roleId, { ...params }) -> RoleGetResponse</code>

# Certificates

Types:

- <code><a href="./src/resources/certificates.ts">OriginCACertificate</a></code>
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

- <code><a href="./src/resources/ips.ts">IPs</a></code>
- <code><a href="./src/resources/ips.ts">JdcloudIPs</a></code>
- <code><a href="./src/resources/ips.ts">IPListResponse</a></code>

Methods:

- <code title="get /ips">client.ips.<a href="./src/resources/ips.ts">list</a>({ ...params }) -> IPListResponse</code>

# Memberships

Types:

- <code><a href="./src/resources/memberships.ts">Membership</a></code>
- <code><a href="./src/resources/memberships.ts">MembershipUpdateResponse</a></code>
- <code><a href="./src/resources/memberships.ts">MembershipDeleteResponse</a></code>
- <code><a href="./src/resources/memberships.ts">MembershipGetResponse</a></code>

Methods:

- <code title="put /memberships/{membership_id}">client.memberships.<a href="./src/resources/memberships.ts">update</a>(membershipId, { ...params }) -> MembershipUpdateResponse</code>
- <code title="get /memberships">client.memberships.<a href="./src/resources/memberships.ts">list</a>({ ...params }) -> MembershipsV4PagePaginationArray</code>
- <code title="delete /memberships/{membership_id}">client.memberships.<a href="./src/resources/memberships.ts">delete</a>(membershipId) -> MembershipDeleteResponse</code>
- <code title="get /memberships/{membership_id}">client.memberships.<a href="./src/resources/memberships.ts">get</a>(membershipId) -> MembershipGetResponse</code>

# User

Types:

- <code><a href="./src/resources/user/user.ts">User</a></code>
- <code><a href="./src/resources/user/user.ts">UserEditResponse</a></code>
- <code><a href="./src/resources/user/user.ts">UserGetResponse</a></code>

Methods:

- <code title="patch /user">client.user.<a href="./src/resources/user/user.ts">edit</a>({ ...params }) -> UserEditResponse</code>
- <code title="get /user">client.user.<a href="./src/resources/user/user.ts">get</a>() -> UserGetResponse</code>

## AuditLogs

Types:

- <code><a href="./src/resources/user/audit-logs.ts">AuditLogListResponse</a></code>

Methods:

- <code title="get /user/audit_logs">client.user.auditLogs.<a href="./src/resources/user/audit-logs.ts">list</a>({ ...params }) -> AuditLogListResponsesV4PagePaginationArray</code>

## Billing

### History

Types:

- <code><a href="./src/resources/user/billing/history.ts">BillSubsAPIBillingHistory</a></code>
- <code><a href="./src/resources/user/billing/history.ts">HistoryGetResponse</a></code>

Methods:

- <code title="get /user/billing/history">client.user.billing.history.<a href="./src/resources/user/billing/history.ts">get</a>({ ...params }) -> HistoryGetResponse | null</code>

### Profiles

Types:

- <code><a href="./src/resources/user/billing/profiles.ts">ProfileGetResponse</a></code>

Methods:

- <code title="get /user/billing/profile">client.user.billing.profiles.<a href="./src/resources/user/billing/profiles.ts">get</a>() -> ProfileGetResponse</code>

## Firewall

### AccessRules

Types:

- <code><a href="./src/resources/user/firewall/access-rules.ts">LegacyJhsRule</a></code>
- <code><a href="./src/resources/user/firewall/access-rules.ts">AccessRuleDeleteResponse</a></code>

Methods:

- <code title="post /user/firewall/access_rules/rules">client.user.firewall.accessRules.<a href="./src/resources/user/firewall/access-rules.ts">create</a>({ ...params }) -> LegacyJhsRule | null</code>
- <code title="get /user/firewall/access_rules/rules">client.user.firewall.accessRules.<a href="./src/resources/user/firewall/access-rules.ts">list</a>({ ...params }) -> LegacyJhsRulesV4PagePaginationArray</code>
- <code title="delete /user/firewall/access_rules/rules/{identifier}">client.user.firewall.accessRules.<a href="./src/resources/user/firewall/access-rules.ts">delete</a>(identifier) -> AccessRuleDeleteResponse | null</code>
- <code title="patch /user/firewall/access_rules/rules/{identifier}">client.user.firewall.accessRules.<a href="./src/resources/user/firewall/access-rules.ts">edit</a>(identifier, { ...params }) -> LegacyJhsRule | null</code>

## Invites

Types:

- <code><a href="./src/resources/user/invites.ts">IamSchemasInvite</a></code>
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

- <code><a href="./src/resources/user/load-balancers/monitors.ts">LoadBalancingMonitor</a></code>
- <code><a href="./src/resources/user/load-balancers/monitors.ts">MonitorListResponse</a></code>
- <code><a href="./src/resources/user/load-balancers/monitors.ts">MonitorDeleteResponse</a></code>
- <code><a href="./src/resources/user/load-balancers/monitors.ts">MonitorPreviewResponse</a></code>
- <code><a href="./src/resources/user/load-balancers/monitors.ts">MonitorReferencesResponse</a></code>

Methods:

- <code title="post /user/load_balancers/monitors">client.user.loadBalancers.monitors.<a href="./src/resources/user/load-balancers/monitors.ts">create</a>({ ...params }) -> LoadBalancingMonitor</code>
- <code title="put /user/load_balancers/monitors/{monitor_id}">client.user.loadBalancers.monitors.<a href="./src/resources/user/load-balancers/monitors.ts">update</a>(monitorId, { ...params }) -> LoadBalancingMonitor</code>
- <code title="get /user/load_balancers/monitors">client.user.loadBalancers.monitors.<a href="./src/resources/user/load-balancers/monitors.ts">list</a>() -> MonitorListResponse | null</code>
- <code title="delete /user/load_balancers/monitors/{monitor_id}">client.user.loadBalancers.monitors.<a href="./src/resources/user/load-balancers/monitors.ts">delete</a>(monitorId) -> MonitorDeleteResponse</code>
- <code title="patch /user/load_balancers/monitors/{monitor_id}">client.user.loadBalancers.monitors.<a href="./src/resources/user/load-balancers/monitors.ts">edit</a>(monitorId, { ...params }) -> LoadBalancingMonitor</code>
- <code title="get /user/load_balancers/monitors/{monitor_id}">client.user.loadBalancers.monitors.<a href="./src/resources/user/load-balancers/monitors.ts">get</a>(monitorId) -> LoadBalancingMonitor</code>
- <code title="post /user/load_balancers/monitors/{monitor_id}/preview">client.user.loadBalancers.monitors.<a href="./src/resources/user/load-balancers/monitors.ts">preview</a>(monitorId, { ...params }) -> MonitorPreviewResponse</code>
- <code title="get /user/load_balancers/monitors/{monitor_id}/references">client.user.loadBalancers.monitors.<a href="./src/resources/user/load-balancers/monitors.ts">references</a>(monitorId) -> MonitorReferencesResponse | null</code>

### Pools

Types:

- <code><a href="./src/resources/user/load-balancers/pools.ts">LoadBalancingPool</a></code>
- <code><a href="./src/resources/user/load-balancers/pools.ts">PoolListResponse</a></code>
- <code><a href="./src/resources/user/load-balancers/pools.ts">PoolDeleteResponse</a></code>
- <code><a href="./src/resources/user/load-balancers/pools.ts">PoolHealthResponse</a></code>
- <code><a href="./src/resources/user/load-balancers/pools.ts">PoolPreviewResponse</a></code>
- <code><a href="./src/resources/user/load-balancers/pools.ts">PoolReferencesResponse</a></code>

Methods:

- <code title="post /user/load_balancers/pools">client.user.loadBalancers.pools.<a href="./src/resources/user/load-balancers/pools.ts">create</a>({ ...params }) -> LoadBalancingPool</code>
- <code title="put /user/load_balancers/pools/{pool_id}">client.user.loadBalancers.pools.<a href="./src/resources/user/load-balancers/pools.ts">update</a>(poolId, { ...params }) -> LoadBalancingPool</code>
- <code title="get /user/load_balancers/pools">client.user.loadBalancers.pools.<a href="./src/resources/user/load-balancers/pools.ts">list</a>({ ...params }) -> PoolListResponse | null</code>
- <code title="delete /user/load_balancers/pools/{pool_id}">client.user.loadBalancers.pools.<a href="./src/resources/user/load-balancers/pools.ts">delete</a>(poolId) -> PoolDeleteResponse</code>
- <code title="patch /user/load_balancers/pools/{pool_id}">client.user.loadBalancers.pools.<a href="./src/resources/user/load-balancers/pools.ts">edit</a>(poolId, { ...params }) -> LoadBalancingPool</code>
- <code title="get /user/load_balancers/pools/{pool_id}">client.user.loadBalancers.pools.<a href="./src/resources/user/load-balancers/pools.ts">get</a>(poolId) -> LoadBalancingPool</code>
- <code title="get /user/load_balancers/pools/{pool_id}/health">client.user.loadBalancers.pools.<a href="./src/resources/user/load-balancers/pools.ts">health</a>(poolId) -> PoolHealthResponse</code>
- <code title="post /user/load_balancers/pools/{pool_id}/preview">client.user.loadBalancers.pools.<a href="./src/resources/user/load-balancers/pools.ts">preview</a>(poolId, { ...params }) -> PoolPreviewResponse</code>
- <code title="get /user/load_balancers/pools/{pool_id}/references">client.user.loadBalancers.pools.<a href="./src/resources/user/load-balancers/pools.ts">references</a>(poolId) -> PoolReferencesResponse | null</code>

### Preview

Types:

- <code><a href="./src/resources/user/load-balancers/preview.ts">LoadBalancingPreviewResult</a></code>

Methods:

- <code title="get /user/load_balancers/preview/{preview_id}">client.user.loadBalancers.preview.<a href="./src/resources/user/load-balancers/preview.ts">get</a>(previewId) -> LoadBalancingPreviewResult</code>

### Analytics

#### Events

Types:

- <code><a href="./src/resources/user/load-balancers/analytics/events.ts">LoadBalancingAnalytics</a></code>
- <code><a href="./src/resources/user/load-balancers/analytics/events.ts">EventListResponse</a></code>

Methods:

- <code title="get /user/load_balancing_analytics/events">client.user.loadBalancers.analytics.events.<a href="./src/resources/user/load-balancers/analytics/events.ts">list</a>({ ...params }) -> EventListResponse | null</code>

## Organizations

Types:

- <code><a href="./src/resources/user/organizations.ts">IamOrganization</a></code>
- <code><a href="./src/resources/user/organizations.ts">OrganizationDeleteResponse</a></code>
- <code><a href="./src/resources/user/organizations.ts">OrganizationGetResponse</a></code>

Methods:

- <code title="get /user/organizations">client.user.organizations.<a href="./src/resources/user/organizations.ts">list</a>({ ...params }) -> IamOrganizationsV4PagePaginationArray</code>
- <code title="delete /user/organizations/{organization_id}">client.user.organizations.<a href="./src/resources/user/organizations.ts">delete</a>(organizationId) -> OrganizationDeleteResponse</code>
- <code title="get /user/organizations/{organization_id}">client.user.organizations.<a href="./src/resources/user/organizations.ts">get</a>(organizationId) -> OrganizationGetResponse</code>

## Subscriptions

Types:

- <code><a href="./src/resources/user/subscriptions.ts">BillSubsAPISubscription</a></code>
- <code><a href="./src/resources/user/subscriptions.ts">SubscriptionUpdateResponse</a></code>
- <code><a href="./src/resources/user/subscriptions.ts">SubscriptionDeleteResponse</a></code>
- <code><a href="./src/resources/user/subscriptions.ts">SubscriptionEditResponse</a></code>
- <code><a href="./src/resources/user/subscriptions.ts">SubscriptionGetResponse</a></code>

Methods:

- <code title="put /user/subscriptions/{identifier}">client.user.subscriptions.<a href="./src/resources/user/subscriptions.ts">update</a>(identifier, { ...params }) -> SubscriptionUpdateResponse</code>
- <code title="delete /user/subscriptions/{identifier}">client.user.subscriptions.<a href="./src/resources/user/subscriptions.ts">delete</a>(identifier) -> SubscriptionDeleteResponse</code>
- <code title="put /zones/{identifier}/subscription">client.user.subscriptions.<a href="./src/resources/user/subscriptions.ts">edit</a>(identifier, { ...params }) -> SubscriptionEditResponse</code>
- <code title="get /user/subscriptions">client.user.subscriptions.<a href="./src/resources/user/subscriptions.ts">get</a>() -> SubscriptionGetResponse | null</code>

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

### Value

Types:

- <code><a href="./src/resources/user/tokens/value.ts">IamValue</a></code>

Methods:

- <code title="put /user/tokens/{token_id}/value">client.user.tokens.value.<a href="./src/resources/user/tokens/value.ts">update</a>(tokenId, { ...params }) -> IamValue</code>

# Zones

Types:

- <code><a href="./src/resources/zones/zones.ts">Zone</a></code>
- <code><a href="./src/resources/zones/zones.ts">ZoneCreateResponse</a></code>
- <code><a href="./src/resources/zones/zones.ts">ZoneListResponse</a></code>
- <code><a href="./src/resources/zones/zones.ts">ZoneDeleteResponse</a></code>
- <code><a href="./src/resources/zones/zones.ts">ZoneEditResponse</a></code>
- <code><a href="./src/resources/zones/zones.ts">ZoneGetResponse</a></code>

Methods:

- <code title="post /zones">client.zones.<a href="./src/resources/zones/zones.ts">create</a>({ ...params }) -> ZoneCreateResponse</code>
- <code title="get /zones">client.zones.<a href="./src/resources/zones/zones.ts">list</a>({ ...params }) -> ZoneListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}">client.zones.<a href="./src/resources/zones/zones.ts">delete</a>({ ...params }) -> ZoneDeleteResponse | null</code>
- <code title="patch /zones/{zone_id}">client.zones.<a href="./src/resources/zones/zones.ts">edit</a>({ ...params }) -> ZoneEditResponse</code>
- <code title="get /zones/{zone_id}">client.zones.<a href="./src/resources/zones/zones.ts">get</a>({ ...params }) -> ZoneGetResponse</code>

## ActivationCheck

Types:

- <code><a href="./src/resources/zones/activation-check.ts">ActivationCheckTriggerResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/activation_check">client.zones.activationCheck.<a href="./src/resources/zones/activation-check.ts">trigger</a>({ ...params }) -> ActivationCheckTriggerResponse</code>

## Settings

Types:

- <code><a href="./src/resources/zones/settings/settings.ts">SettingEditResponse</a></code>
- <code><a href="./src/resources/zones/settings/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings">client.zones.settings.<a href="./src/resources/zones/settings/settings.ts">edit</a>({ ...params }) -> SettingEditResponse</code>
- <code title="get /zones/{zone_id}/settings">client.zones.settings.<a href="./src/resources/zones/settings/settings.ts">get</a>({ ...params }) -> SettingGetResponse</code>

### ZeroRTT

Types:

- <code><a href="./src/resources/zones/settings/zero-rtt.ts">Zones0rtt</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/0rtt">client.zones.settings.zeroRTT.<a href="./src/resources/zones/settings/zero-rtt.ts">edit</a>({ ...params }) -> Zones0rtt</code>
- <code title="get /zones/{zone_id}/settings/0rtt">client.zones.settings.zeroRTT.<a href="./src/resources/zones/settings/zero-rtt.ts">get</a>({ ...params }) -> Zones0rtt</code>

### AdvancedDDOS

Types:

- <code><a href="./src/resources/zones/settings/advanced-ddos.ts">ZonesAdvancedDDOS</a></code>

Methods:

- <code title="get /zones/{zone_id}/settings/advanced_ddos">client.zones.settings.advancedDDOS.<a href="./src/resources/zones/settings/advanced-ddos.ts">get</a>({ ...params }) -> ZonesAdvancedDDOS</code>

### AlwaysOnline

Types:

- <code><a href="./src/resources/zones/settings/always-online.ts">ZonesAlwaysOnline</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/always_online">client.zones.settings.alwaysOnline.<a href="./src/resources/zones/settings/always-online.ts">edit</a>({ ...params }) -> ZonesAlwaysOnline</code>
- <code title="get /zones/{zone_id}/settings/always_online">client.zones.settings.alwaysOnline.<a href="./src/resources/zones/settings/always-online.ts">get</a>({ ...params }) -> ZonesAlwaysOnline</code>

### AlwaysUseHTTPS

Types:

- <code><a href="./src/resources/zones/settings/always-use-https.ts">ZonesAlwaysUseHTTPS</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/always_use_https">client.zones.settings.alwaysUseHTTPS.<a href="./src/resources/zones/settings/always-use-https.ts">edit</a>({ ...params }) -> ZonesAlwaysUseHTTPS</code>
- <code title="get /zones/{zone_id}/settings/always_use_https">client.zones.settings.alwaysUseHTTPS.<a href="./src/resources/zones/settings/always-use-https.ts">get</a>({ ...params }) -> ZonesAlwaysUseHTTPS</code>

### AutomaticHTTPSRewrites

Types:

- <code><a href="./src/resources/zones/settings/automatic-https-rewrites.ts">ZonesAutomaticHTTPSRewrites</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/automatic_https_rewrites">client.zones.settings.automaticHTTPSRewrites.<a href="./src/resources/zones/settings/automatic-https-rewrites.ts">edit</a>({ ...params }) -> ZonesAutomaticHTTPSRewrites</code>
- <code title="get /zones/{zone_id}/settings/automatic_https_rewrites">client.zones.settings.automaticHTTPSRewrites.<a href="./src/resources/zones/settings/automatic-https-rewrites.ts">get</a>({ ...params }) -> ZonesAutomaticHTTPSRewrites</code>

### AutomaticPlatformOptimization

Types:

- <code><a href="./src/resources/zones/settings/automatic-platform-optimization.ts">ZonesAutomaticPlatformOptimization</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/automatic_platform_optimization">client.zones.settings.automaticPlatformOptimization.<a href="./src/resources/zones/settings/automatic-platform-optimization.ts">edit</a>({ ...params }) -> ZonesAutomaticPlatformOptimization</code>
- <code title="get /zones/{zone_id}/settings/automatic_platform_optimization">client.zones.settings.automaticPlatformOptimization.<a href="./src/resources/zones/settings/automatic-platform-optimization.ts">get</a>({ ...params }) -> ZonesAutomaticPlatformOptimization</code>

### Brotli

Types:

- <code><a href="./src/resources/zones/settings/brotli.ts">ZonesBrotli</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/brotli">client.zones.settings.brotli.<a href="./src/resources/zones/settings/brotli.ts">edit</a>({ ...params }) -> ZonesBrotli</code>
- <code title="get /zones/{zone_id}/settings/brotli">client.zones.settings.brotli.<a href="./src/resources/zones/settings/brotli.ts">get</a>({ ...params }) -> ZonesBrotli</code>

### BrowserCacheTTL

Types:

- <code><a href="./src/resources/zones/settings/browser-cache-ttl.ts">ZonesBrowserCacheTTL</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/browser_cache_ttl">client.zones.settings.browserCacheTTL.<a href="./src/resources/zones/settings/browser-cache-ttl.ts">edit</a>({ ...params }) -> ZonesBrowserCacheTTL</code>
- <code title="get /zones/{zone_id}/settings/browser_cache_ttl">client.zones.settings.browserCacheTTL.<a href="./src/resources/zones/settings/browser-cache-ttl.ts">get</a>({ ...params }) -> ZonesBrowserCacheTTL</code>

### BrowserCheck

Types:

- <code><a href="./src/resources/zones/settings/browser-check.ts">ZonesBrowserCheck</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/browser_check">client.zones.settings.browserCheck.<a href="./src/resources/zones/settings/browser-check.ts">edit</a>({ ...params }) -> ZonesBrowserCheck</code>
- <code title="get /zones/{zone_id}/settings/browser_check">client.zones.settings.browserCheck.<a href="./src/resources/zones/settings/browser-check.ts">get</a>({ ...params }) -> ZonesBrowserCheck</code>

### CacheLevel

Types:

- <code><a href="./src/resources/zones/settings/cache-level.ts">ZonesCacheLevel</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/cache_level">client.zones.settings.cacheLevel.<a href="./src/resources/zones/settings/cache-level.ts">edit</a>({ ...params }) -> ZonesCacheLevel</code>
- <code title="get /zones/{zone_id}/settings/cache_level">client.zones.settings.cacheLevel.<a href="./src/resources/zones/settings/cache-level.ts">get</a>({ ...params }) -> ZonesCacheLevel</code>

### ChallengeTTL

Types:

- <code><a href="./src/resources/zones/settings/challenge-ttl.ts">ZonesChallengeTTL</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/challenge_ttl">client.zones.settings.challengeTTL.<a href="./src/resources/zones/settings/challenge-ttl.ts">edit</a>({ ...params }) -> ZonesChallengeTTL</code>
- <code title="get /zones/{zone_id}/settings/challenge_ttl">client.zones.settings.challengeTTL.<a href="./src/resources/zones/settings/challenge-ttl.ts">get</a>({ ...params }) -> ZonesChallengeTTL</code>

### Ciphers

Types:

- <code><a href="./src/resources/zones/settings/ciphers.ts">ZonesCiphers</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/ciphers">client.zones.settings.ciphers.<a href="./src/resources/zones/settings/ciphers.ts">edit</a>({ ...params }) -> ZonesCiphers</code>
- <code title="get /zones/{zone_id}/settings/ciphers">client.zones.settings.ciphers.<a href="./src/resources/zones/settings/ciphers.ts">get</a>({ ...params }) -> ZonesCiphers</code>

### DevelopmentMode

Types:

- <code><a href="./src/resources/zones/settings/development-mode.ts">ZonesDevelopmentMode</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/development_mode">client.zones.settings.developmentMode.<a href="./src/resources/zones/settings/development-mode.ts">edit</a>({ ...params }) -> ZonesDevelopmentMode</code>
- <code title="get /zones/{zone_id}/settings/development_mode">client.zones.settings.developmentMode.<a href="./src/resources/zones/settings/development-mode.ts">get</a>({ ...params }) -> ZonesDevelopmentMode</code>

### EarlyHints

Types:

- <code><a href="./src/resources/zones/settings/early-hints.ts">ZonesEarlyHints</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/early_hints">client.zones.settings.earlyHints.<a href="./src/resources/zones/settings/early-hints.ts">edit</a>({ ...params }) -> ZonesEarlyHints</code>
- <code title="get /zones/{zone_id}/settings/early_hints">client.zones.settings.earlyHints.<a href="./src/resources/zones/settings/early-hints.ts">get</a>({ ...params }) -> ZonesEarlyHints</code>

### EmailObfuscation

Types:

- <code><a href="./src/resources/zones/settings/email-obfuscation.ts">ZonesEmailObfuscation</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/email_obfuscation">client.zones.settings.emailObfuscation.<a href="./src/resources/zones/settings/email-obfuscation.ts">edit</a>({ ...params }) -> ZonesEmailObfuscation</code>
- <code title="get /zones/{zone_id}/settings/email_obfuscation">client.zones.settings.emailObfuscation.<a href="./src/resources/zones/settings/email-obfuscation.ts">get</a>({ ...params }) -> ZonesEmailObfuscation</code>

### H2Prioritization

Types:

- <code><a href="./src/resources/zones/settings/h2-prioritization.ts">ZonesH2Prioritization</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/h2_prioritization">client.zones.settings.h2Prioritization.<a href="./src/resources/zones/settings/h2-prioritization.ts">edit</a>({ ...params }) -> ZonesH2Prioritization</code>
- <code title="get /zones/{zone_id}/settings/h2_prioritization">client.zones.settings.h2Prioritization.<a href="./src/resources/zones/settings/h2-prioritization.ts">get</a>({ ...params }) -> ZonesH2Prioritization</code>

### HotlinkProtection

Types:

- <code><a href="./src/resources/zones/settings/hotlink-protection.ts">ZonesHotlinkProtection</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/hotlink_protection">client.zones.settings.hotlinkProtection.<a href="./src/resources/zones/settings/hotlink-protection.ts">edit</a>({ ...params }) -> ZonesHotlinkProtection</code>
- <code title="get /zones/{zone_id}/settings/hotlink_protection">client.zones.settings.hotlinkProtection.<a href="./src/resources/zones/settings/hotlink-protection.ts">get</a>({ ...params }) -> ZonesHotlinkProtection</code>

### HTTP2

Types:

- <code><a href="./src/resources/zones/settings/http2.ts">ZonesHTTP2</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/http2">client.zones.settings.http2.<a href="./src/resources/zones/settings/http2.ts">edit</a>({ ...params }) -> ZonesHTTP2</code>
- <code title="get /zones/{zone_id}/settings/http2">client.zones.settings.http2.<a href="./src/resources/zones/settings/http2.ts">get</a>({ ...params }) -> ZonesHTTP2</code>

### HTTP3

Types:

- <code><a href="./src/resources/zones/settings/http3.ts">ZonesHTTP3</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/http3">client.zones.settings.http3.<a href="./src/resources/zones/settings/http3.ts">edit</a>({ ...params }) -> ZonesHTTP3</code>
- <code title="get /zones/{zone_id}/settings/http3">client.zones.settings.http3.<a href="./src/resources/zones/settings/http3.ts">get</a>({ ...params }) -> ZonesHTTP3</code>

### ImageResizing

Types:

- <code><a href="./src/resources/zones/settings/image-resizing.ts">ZonesImageResizing</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/image_resizing">client.zones.settings.imageResizing.<a href="./src/resources/zones/settings/image-resizing.ts">edit</a>({ ...params }) -> ZonesImageResizing</code>
- <code title="get /zones/{zone_id}/settings/image_resizing">client.zones.settings.imageResizing.<a href="./src/resources/zones/settings/image-resizing.ts">get</a>({ ...params }) -> ZonesImageResizing</code>

### IPGeolocation

Types:

- <code><a href="./src/resources/zones/settings/ip-geolocation.ts">ZonesIPGeolocation</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/ip_geolocation">client.zones.settings.ipGeolocation.<a href="./src/resources/zones/settings/ip-geolocation.ts">edit</a>({ ...params }) -> ZonesIPGeolocation</code>
- <code title="get /zones/{zone_id}/settings/ip_geolocation">client.zones.settings.ipGeolocation.<a href="./src/resources/zones/settings/ip-geolocation.ts">get</a>({ ...params }) -> ZonesIPGeolocation</code>

### IPV6

Types:

- <code><a href="./src/resources/zones/settings/ipv6.ts">ZonesIPV6</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/ipv6">client.zones.settings.ipv6.<a href="./src/resources/zones/settings/ipv6.ts">edit</a>({ ...params }) -> ZonesIPV6</code>
- <code title="get /zones/{zone_id}/settings/ipv6">client.zones.settings.ipv6.<a href="./src/resources/zones/settings/ipv6.ts">get</a>({ ...params }) -> ZonesIPV6</code>

### MinTLSVersion

Types:

- <code><a href="./src/resources/zones/settings/min-tls-version.ts">ZonesMinTLSVersion</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/min_tls_version">client.zones.settings.minTLSVersion.<a href="./src/resources/zones/settings/min-tls-version.ts">edit</a>({ ...params }) -> ZonesMinTLSVersion</code>
- <code title="get /zones/{zone_id}/settings/min_tls_version">client.zones.settings.minTLSVersion.<a href="./src/resources/zones/settings/min-tls-version.ts">get</a>({ ...params }) -> ZonesMinTLSVersion</code>

### Minify

Types:

- <code><a href="./src/resources/zones/settings/minify.ts">ZonesMinify</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/minify">client.zones.settings.minify.<a href="./src/resources/zones/settings/minify.ts">edit</a>({ ...params }) -> ZonesMinify</code>
- <code title="get /zones/{zone_id}/settings/minify">client.zones.settings.minify.<a href="./src/resources/zones/settings/minify.ts">get</a>({ ...params }) -> ZonesMinify</code>

### Mirage

Types:

- <code><a href="./src/resources/zones/settings/mirage.ts">ZonesMirage</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/mirage">client.zones.settings.mirage.<a href="./src/resources/zones/settings/mirage.ts">edit</a>({ ...params }) -> ZonesMirage</code>
- <code title="get /zones/{zone_id}/settings/mirage">client.zones.settings.mirage.<a href="./src/resources/zones/settings/mirage.ts">get</a>({ ...params }) -> ZonesMirage</code>

### MobileRedirect

Types:

- <code><a href="./src/resources/zones/settings/mobile-redirect.ts">ZonesMobileRedirect</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/mobile_redirect">client.zones.settings.mobileRedirect.<a href="./src/resources/zones/settings/mobile-redirect.ts">edit</a>({ ...params }) -> ZonesMobileRedirect</code>
- <code title="get /zones/{zone_id}/settings/mobile_redirect">client.zones.settings.mobileRedirect.<a href="./src/resources/zones/settings/mobile-redirect.ts">get</a>({ ...params }) -> ZonesMobileRedirect</code>

### NEL

Types:

- <code><a href="./src/resources/zones/settings/nel.ts">ZonesNEL</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/nel">client.zones.settings.nel.<a href="./src/resources/zones/settings/nel.ts">edit</a>({ ...params }) -> ZonesNEL</code>
- <code title="get /zones/{zone_id}/settings/nel">client.zones.settings.nel.<a href="./src/resources/zones/settings/nel.ts">get</a>({ ...params }) -> ZonesNEL</code>

### OpportunisticEncryption

Types:

- <code><a href="./src/resources/zones/settings/opportunistic-encryption.ts">ZonesOpportunisticEncryption</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/opportunistic_encryption">client.zones.settings.opportunisticEncryption.<a href="./src/resources/zones/settings/opportunistic-encryption.ts">edit</a>({ ...params }) -> ZonesOpportunisticEncryption</code>
- <code title="get /zones/{zone_id}/settings/opportunistic_encryption">client.zones.settings.opportunisticEncryption.<a href="./src/resources/zones/settings/opportunistic-encryption.ts">get</a>({ ...params }) -> ZonesOpportunisticEncryption</code>

### OpportunisticOnion

Types:

- <code><a href="./src/resources/zones/settings/opportunistic-onion.ts">ZonesOpportunisticOnion</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/opportunistic_onion">client.zones.settings.opportunisticOnion.<a href="./src/resources/zones/settings/opportunistic-onion.ts">edit</a>({ ...params }) -> ZonesOpportunisticOnion</code>
- <code title="get /zones/{zone_id}/settings/opportunistic_onion">client.zones.settings.opportunisticOnion.<a href="./src/resources/zones/settings/opportunistic-onion.ts">get</a>({ ...params }) -> ZonesOpportunisticOnion</code>

### OrangeToOrange

Types:

- <code><a href="./src/resources/zones/settings/orange-to-orange.ts">ZonesOrangeToOrange</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/orange_to_orange">client.zones.settings.orangeToOrange.<a href="./src/resources/zones/settings/orange-to-orange.ts">edit</a>({ ...params }) -> ZonesOrangeToOrange</code>
- <code title="get /zones/{zone_id}/settings/orange_to_orange">client.zones.settings.orangeToOrange.<a href="./src/resources/zones/settings/orange-to-orange.ts">get</a>({ ...params }) -> ZonesOrangeToOrange</code>

### OriginErrorPagePassThru

Types:

- <code><a href="./src/resources/zones/settings/origin-error-page-pass-thru.ts">ZonesOriginErrorPagePassThru</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/origin_error_page_pass_thru">client.zones.settings.originErrorPagePassThru.<a href="./src/resources/zones/settings/origin-error-page-pass-thru.ts">edit</a>({ ...params }) -> ZonesOriginErrorPagePassThru</code>
- <code title="get /zones/{zone_id}/settings/origin_error_page_pass_thru">client.zones.settings.originErrorPagePassThru.<a href="./src/resources/zones/settings/origin-error-page-pass-thru.ts">get</a>({ ...params }) -> ZonesOriginErrorPagePassThru</code>

### OriginMaxHTTPVersion

Types:

- <code><a href="./src/resources/zones/settings/origin-max-http-version.ts">OriginMaxHTTPVersionEditResponse</a></code>
- <code><a href="./src/resources/zones/settings/origin-max-http-version.ts">OriginMaxHTTPVersionGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/origin_max_http_version">client.zones.settings.originMaxHTTPVersion.<a href="./src/resources/zones/settings/origin-max-http-version.ts">edit</a>({ ...params }) -> OriginMaxHTTPVersionEditResponse</code>
- <code title="get /zones/{zone_id}/settings/origin_max_http_version">client.zones.settings.originMaxHTTPVersion.<a href="./src/resources/zones/settings/origin-max-http-version.ts">get</a>({ ...params }) -> OriginMaxHTTPVersionGetResponse</code>

### Polish

Types:

- <code><a href="./src/resources/zones/settings/polish.ts">ZonesPolish</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/polish">client.zones.settings.polish.<a href="./src/resources/zones/settings/polish.ts">edit</a>({ ...params }) -> ZonesPolish</code>
- <code title="get /zones/{zone_id}/settings/polish">client.zones.settings.polish.<a href="./src/resources/zones/settings/polish.ts">get</a>({ ...params }) -> ZonesPolish</code>

### PrefetchPreload

Types:

- <code><a href="./src/resources/zones/settings/prefetch-preload.ts">ZonesPrefetchPreload</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/prefetch_preload">client.zones.settings.prefetchPreload.<a href="./src/resources/zones/settings/prefetch-preload.ts">edit</a>({ ...params }) -> ZonesPrefetchPreload</code>
- <code title="get /zones/{zone_id}/settings/prefetch_preload">client.zones.settings.prefetchPreload.<a href="./src/resources/zones/settings/prefetch-preload.ts">get</a>({ ...params }) -> ZonesPrefetchPreload</code>

### ProxyReadTimeout

Types:

- <code><a href="./src/resources/zones/settings/proxy-read-timeout.ts">ZonesProxyReadTimeout</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/proxy_read_timeout">client.zones.settings.proxyReadTimeout.<a href="./src/resources/zones/settings/proxy-read-timeout.ts">edit</a>({ ...params }) -> ZonesProxyReadTimeout</code>
- <code title="get /zones/{zone_id}/settings/proxy_read_timeout">client.zones.settings.proxyReadTimeout.<a href="./src/resources/zones/settings/proxy-read-timeout.ts">get</a>({ ...params }) -> ZonesProxyReadTimeout</code>

### PseudoIPV4

Types:

- <code><a href="./src/resources/zones/settings/pseudo-ipv4.ts">ZonesPseudoIPV4</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/pseudo_ipv4">client.zones.settings.pseudoIPV4.<a href="./src/resources/zones/settings/pseudo-ipv4.ts">edit</a>({ ...params }) -> ZonesPseudoIPV4</code>
- <code title="get /zones/{zone_id}/settings/pseudo_ipv4">client.zones.settings.pseudoIPV4.<a href="./src/resources/zones/settings/pseudo-ipv4.ts">get</a>({ ...params }) -> ZonesPseudoIPV4</code>

### ResponseBuffering

Types:

- <code><a href="./src/resources/zones/settings/response-buffering.ts">ZonesBuffering</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/response_buffering">client.zones.settings.responseBuffering.<a href="./src/resources/zones/settings/response-buffering.ts">edit</a>({ ...params }) -> ZonesBuffering</code>
- <code title="get /zones/{zone_id}/settings/response_buffering">client.zones.settings.responseBuffering.<a href="./src/resources/zones/settings/response-buffering.ts">get</a>({ ...params }) -> ZonesBuffering</code>

### RocketLoader

Types:

- <code><a href="./src/resources/zones/settings/rocket-loader.ts">ZonesRocketLoader</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/rocket_loader">client.zones.settings.rocketLoader.<a href="./src/resources/zones/settings/rocket-loader.ts">edit</a>({ ...params }) -> ZonesRocketLoader</code>
- <code title="get /zones/{zone_id}/settings/rocket_loader">client.zones.settings.rocketLoader.<a href="./src/resources/zones/settings/rocket-loader.ts">get</a>({ ...params }) -> ZonesRocketLoader</code>

### SecurityHeaders

Types:

- <code><a href="./src/resources/zones/settings/security-headers.ts">ZonesSecurityHeader</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/security_header">client.zones.settings.securityHeaders.<a href="./src/resources/zones/settings/security-headers.ts">edit</a>({ ...params }) -> ZonesSecurityHeader</code>
- <code title="get /zones/{zone_id}/settings/security_header">client.zones.settings.securityHeaders.<a href="./src/resources/zones/settings/security-headers.ts">get</a>({ ...params }) -> ZonesSecurityHeader</code>

### SecurityLevel

Types:

- <code><a href="./src/resources/zones/settings/security-level.ts">ZonesSecurityLevel</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/security_level">client.zones.settings.securityLevel.<a href="./src/resources/zones/settings/security-level.ts">edit</a>({ ...params }) -> ZonesSecurityLevel</code>
- <code title="get /zones/{zone_id}/settings/security_level">client.zones.settings.securityLevel.<a href="./src/resources/zones/settings/security-level.ts">get</a>({ ...params }) -> ZonesSecurityLevel</code>

### ServerSideExcludes

Types:

- <code><a href="./src/resources/zones/settings/server-side-excludes.ts">ZonesServerSideExclude</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/server_side_exclude">client.zones.settings.serverSideExcludes.<a href="./src/resources/zones/settings/server-side-excludes.ts">edit</a>({ ...params }) -> ZonesServerSideExclude</code>
- <code title="get /zones/{zone_id}/settings/server_side_exclude">client.zones.settings.serverSideExcludes.<a href="./src/resources/zones/settings/server-side-excludes.ts">get</a>({ ...params }) -> ZonesServerSideExclude</code>

### SortQueryStringForCache

Types:

- <code><a href="./src/resources/zones/settings/sort-query-string-for-cache.ts">ZonesSortQueryStringForCache</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/sort_query_string_for_cache">client.zones.settings.sortQueryStringForCache.<a href="./src/resources/zones/settings/sort-query-string-for-cache.ts">edit</a>({ ...params }) -> ZonesSortQueryStringForCache</code>
- <code title="get /zones/{zone_id}/settings/sort_query_string_for_cache">client.zones.settings.sortQueryStringForCache.<a href="./src/resources/zones/settings/sort-query-string-for-cache.ts">get</a>({ ...params }) -> ZonesSortQueryStringForCache</code>

### SSL

Types:

- <code><a href="./src/resources/zones/settings/ssl.ts">ZonesSSL</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/ssl">client.zones.settings.ssl.<a href="./src/resources/zones/settings/ssl.ts">edit</a>({ ...params }) -> ZonesSSL</code>
- <code title="get /zones/{zone_id}/settings/ssl">client.zones.settings.ssl.<a href="./src/resources/zones/settings/ssl.ts">get</a>({ ...params }) -> ZonesSSL</code>

### SSLRecommender

Types:

- <code><a href="./src/resources/zones/settings/ssl-recommender.ts">ZonesSSLRecommender</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/ssl_recommender">client.zones.settings.sslRecommender.<a href="./src/resources/zones/settings/ssl-recommender.ts">edit</a>({ ...params }) -> ZonesSSLRecommender</code>
- <code title="get /zones/{zone_id}/settings/ssl_recommender">client.zones.settings.sslRecommender.<a href="./src/resources/zones/settings/ssl-recommender.ts">get</a>({ ...params }) -> ZonesSSLRecommender</code>

### TLS1_3

Types:

- <code><a href="./src/resources/zones/settings/tls-1-3.ts">ZonesTLS1_3</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/tls_1_3">client.zones.settings.tls1_3.<a href="./src/resources/zones/settings/tls-1-3.ts">edit</a>({ ...params }) -> ZonesTLS1_3</code>
- <code title="get /zones/{zone_id}/settings/tls_1_3">client.zones.settings.tls1_3.<a href="./src/resources/zones/settings/tls-1-3.ts">get</a>({ ...params }) -> ZonesTLS1_3</code>

### TLSClientAuth

Types:

- <code><a href="./src/resources/zones/settings/tls-client-auth.ts">ZonesTLSClientAuth</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/tls_client_auth">client.zones.settings.tlsClientAuth.<a href="./src/resources/zones/settings/tls-client-auth.ts">edit</a>({ ...params }) -> ZonesTLSClientAuth</code>
- <code title="get /zones/{zone_id}/settings/tls_client_auth">client.zones.settings.tlsClientAuth.<a href="./src/resources/zones/settings/tls-client-auth.ts">get</a>({ ...params }) -> ZonesTLSClientAuth</code>

### TrueClientIPHeader

Types:

- <code><a href="./src/resources/zones/settings/true-client-ip-header.ts">ZonesTrueClientIPHeader</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/true_client_ip_header">client.zones.settings.trueClientIPHeader.<a href="./src/resources/zones/settings/true-client-ip-header.ts">edit</a>({ ...params }) -> ZonesTrueClientIPHeader</code>
- <code title="get /zones/{zone_id}/settings/true_client_ip_header">client.zones.settings.trueClientIPHeader.<a href="./src/resources/zones/settings/true-client-ip-header.ts">get</a>({ ...params }) -> ZonesTrueClientIPHeader</code>

### WAF

Types:

- <code><a href="./src/resources/zones/settings/waf.ts">ZonesWAF</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/waf">client.zones.settings.waf.<a href="./src/resources/zones/settings/waf.ts">edit</a>({ ...params }) -> ZonesWAF</code>
- <code title="get /zones/{zone_id}/settings/waf">client.zones.settings.waf.<a href="./src/resources/zones/settings/waf.ts">get</a>({ ...params }) -> ZonesWAF</code>

### Webp

Types:

- <code><a href="./src/resources/zones/settings/webp.ts">ZonesWebp</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/webp">client.zones.settings.webp.<a href="./src/resources/zones/settings/webp.ts">edit</a>({ ...params }) -> ZonesWebp</code>
- <code title="get /zones/{zone_id}/settings/webp">client.zones.settings.webp.<a href="./src/resources/zones/settings/webp.ts">get</a>({ ...params }) -> ZonesWebp</code>

### Websocket

Types:

- <code><a href="./src/resources/zones/settings/websocket.ts">ZonesWebsockets</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/websockets">client.zones.settings.websocket.<a href="./src/resources/zones/settings/websocket.ts">edit</a>({ ...params }) -> ZonesWebsockets</code>
- <code title="get /zones/{zone_id}/settings/websockets">client.zones.settings.websocket.<a href="./src/resources/zones/settings/websocket.ts">get</a>({ ...params }) -> ZonesWebsockets</code>

### FontSettings

Types:

- <code><a href="./src/resources/zones/settings/font-settings.ts">SpeedCloudflareFonts</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/fonts">client.zones.settings.fontSettings.<a href="./src/resources/zones/settings/font-settings.ts">edit</a>({ ...params }) -> SpeedCloudflareFonts</code>
- <code title="get /zones/{zone_id}/settings/fonts">client.zones.settings.fontSettings.<a href="./src/resources/zones/settings/font-settings.ts">get</a>({ ...params }) -> SpeedCloudflareFonts</code>

## CustomNameservers

Types:

- <code><a href="./src/resources/zones/custom-nameservers.ts">CustomNameserverUpdateResponse</a></code>
- <code><a href="./src/resources/zones/custom-nameservers.ts">CustomNameserverGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/custom_ns">client.zones.customNameservers.<a href="./src/resources/zones/custom-nameservers.ts">update</a>({ ...params }) -> CustomNameserverUpdateResponse | null</code>
- <code title="get /zones/{zone_id}/custom_ns">client.zones.customNameservers.<a href="./src/resources/zones/custom-nameservers.ts">get</a>({ ...params }) -> CustomNameserverGetResponse | null</code>

## Holds

Types:

- <code><a href="./src/resources/zones/holds.ts">HoldCreateResponse</a></code>
- <code><a href="./src/resources/zones/holds.ts">HoldDeleteResponse</a></code>
- <code><a href="./src/resources/zones/holds.ts">HoldGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/hold">client.zones.holds.<a href="./src/resources/zones/holds.ts">create</a>({ ...params }) -> HoldCreateResponse</code>
- <code title="delete /zones/{zone_id}/hold">client.zones.holds.<a href="./src/resources/zones/holds.ts">delete</a>({ ...params }) -> HoldDeleteResponse</code>
- <code title="get /zones/{zone_id}/hold">client.zones.holds.<a href="./src/resources/zones/holds.ts">get</a>({ ...params }) -> HoldGetResponse</code>

## Workers

### Script

Types:

- <code><a href="./src/resources/zones/workers/script.ts">ScriptUpdateResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/workers/script">client.zones.workers.script.<a href="./src/resources/zones/workers/script.ts">update</a>({ ...params }) -> ScriptUpdateResponse</code>
- <code title="delete /zones/{zone_id}/workers/script">client.zones.workers.script.<a href="./src/resources/zones/workers/script.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /zones/{zone_id}/workers/script">client.zones.workers.script.<a href="./src/resources/zones/workers/script.ts">get</a>({ ...params }) -> Response</code>

## Subscriptions

Types:

- <code><a href="./src/resources/zones/subscriptions.ts">SubscriptionCreateResponse</a></code>
- <code><a href="./src/resources/zones/subscriptions.ts">SubscriptionListResponse</a></code>
- <code><a href="./src/resources/zones/subscriptions.ts">SubscriptionGetResponse</a></code>

Methods:

- <code title="post /zones/{identifier}/subscription">client.zones.subscriptions.<a href="./src/resources/zones/subscriptions.ts">create</a>(identifier, { ...params }) -> SubscriptionCreateResponse</code>
- <code title="get /accounts/{account_identifier}/subscriptions">client.zones.subscriptions.<a href="./src/resources/zones/subscriptions.ts">list</a>(accountIdentifier) -> SubscriptionListResponse | null</code>
- <code title="get /zones/{identifier}/subscription">client.zones.subscriptions.<a href="./src/resources/zones/subscriptions.ts">get</a>(identifier) -> SubscriptionGetResponse</code>

# LoadBalancers

Types:

- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancer</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancerListResponse</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancerDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/load_balancers">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">create</a>({ ...params }) -> LoadBalancer</code>
- <code title="put /zones/{zone_id}/load_balancers/{load_balancer_id}">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">update</a>(loadBalancerId, { ...params }) -> LoadBalancer</code>
- <code title="get /zones/{zone_id}/load_balancers">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">list</a>({ ...params }) -> LoadBalancerListResponse | null</code>
- <code title="delete /zones/{zone_id}/load_balancers/{load_balancer_id}">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">delete</a>(loadBalancerId, { ...params }) -> LoadBalancerDeleteResponse</code>
- <code title="patch /zones/{zone_id}/load_balancers/{load_balancer_id}">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">edit</a>(loadBalancerId, { ...params }) -> LoadBalancer</code>
- <code title="get /zones/{zone_id}/load_balancers/{load_balancer_id}">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">get</a>(loadBalancerId, { ...params }) -> LoadBalancer</code>

## Monitors

Types:

- <code><a href="./src/resources/load-balancers/monitors/monitors.ts">MonitorListResponse</a></code>
- <code><a href="./src/resources/load-balancers/monitors/monitors.ts">MonitorDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/load_balancers/monitors">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">create</a>({ ...params }) -> LoadBalancingMonitor</code>
- <code title="put /accounts/{account_id}/load_balancers/monitors/{monitor_id}">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">update</a>(monitorId, { ...params }) -> LoadBalancingMonitor</code>
- <code title="get /accounts/{account_id}/load_balancers/monitors">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">list</a>({ ...params }) -> MonitorListResponse | null</code>
- <code title="delete /accounts/{account_id}/load_balancers/monitors/{monitor_id}">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">delete</a>(monitorId, { ...params }) -> MonitorDeleteResponse</code>
- <code title="patch /accounts/{account_id}/load_balancers/monitors/{monitor_id}">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">edit</a>(monitorId, { ...params }) -> LoadBalancingMonitor</code>
- <code title="get /accounts/{account_id}/load_balancers/monitors/{monitor_id}">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">get</a>(monitorId, { ...params }) -> LoadBalancingMonitor</code>

### Previews

Types:

- <code><a href="./src/resources/load-balancers/monitors/previews.ts">PreviewCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/load_balancers/monitors/{monitor_id}/preview">client.loadBalancers.monitors.previews.<a href="./src/resources/load-balancers/monitors/previews.ts">create</a>(monitorId, { ...params }) -> PreviewCreateResponse</code>

### References

Types:

- <code><a href="./src/resources/load-balancers/monitors/references.ts">ReferenceGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/load_balancers/monitors/{monitor_id}/references">client.loadBalancers.monitors.references.<a href="./src/resources/load-balancers/monitors/references.ts">get</a>(monitorId, { ...params }) -> ReferenceGetResponse | null</code>

## Pools

Types:

- <code><a href="./src/resources/load-balancers/pools/pools.ts">PoolListResponse</a></code>
- <code><a href="./src/resources/load-balancers/pools/pools.ts">PoolDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/load_balancers/pools">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">create</a>({ ...params }) -> LoadBalancingPool</code>
- <code title="put /accounts/{account_id}/load_balancers/pools/{pool_id}">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">update</a>(poolId, { ...params }) -> LoadBalancingPool</code>
- <code title="get /accounts/{account_id}/load_balancers/pools">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">list</a>({ ...params }) -> PoolListResponse | null</code>
- <code title="delete /accounts/{account_id}/load_balancers/pools/{pool_id}">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">delete</a>(poolId, { ...params }) -> PoolDeleteResponse</code>
- <code title="patch /accounts/{account_id}/load_balancers/pools/{pool_id}">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">edit</a>(poolId, { ...params }) -> LoadBalancingPool</code>
- <code title="get /accounts/{account_id}/load_balancers/pools/{pool_id}">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">get</a>(poolId, { ...params }) -> LoadBalancingPool</code>

### Health

Types:

- <code><a href="./src/resources/load-balancers/pools/health.ts">HealthCreateResponse</a></code>
- <code><a href="./src/resources/load-balancers/pools/health.ts">HealthGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/load_balancers/pools/{pool_id}/preview">client.loadBalancers.pools.health.<a href="./src/resources/load-balancers/pools/health.ts">create</a>(poolId, { ...params }) -> HealthCreateResponse</code>
- <code title="get /accounts/{account_id}/load_balancers/pools/{pool_id}/health">client.loadBalancers.pools.health.<a href="./src/resources/load-balancers/pools/health.ts">get</a>(poolId, { ...params }) -> HealthGetResponse</code>

### References

Types:

- <code><a href="./src/resources/load-balancers/pools/references.ts">ReferenceGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/load_balancers/pools/{pool_id}/references">client.loadBalancers.pools.references.<a href="./src/resources/load-balancers/pools/references.ts">get</a>(poolId, { ...params }) -> ReferenceGetResponse | null</code>

## Previews

Methods:

- <code title="get /accounts/{account_id}/load_balancers/preview/{preview_id}">client.loadBalancers.previews.<a href="./src/resources/load-balancers/previews.ts">get</a>(previewId, { ...params }) -> LoadBalancingPreviewResult</code>

## Regions

Types:

- <code><a href="./src/resources/load-balancers/regions.ts">RegionListResponse</a></code>
- <code><a href="./src/resources/load-balancers/regions.ts">RegionGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/load_balancers/regions">client.loadBalancers.regions.<a href="./src/resources/load-balancers/regions.ts">list</a>({ ...params }) -> RegionListResponse</code>
- <code title="get /accounts/{account_id}/load_balancers/regions/{region_id}">client.loadBalancers.regions.<a href="./src/resources/load-balancers/regions.ts">get</a>(regionId, { ...params }) -> RegionGetResponse</code>

## Searches

Types:

- <code><a href="./src/resources/load-balancers/searches.ts">SearchGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/load_balancers/search">client.loadBalancers.searches.<a href="./src/resources/load-balancers/searches.ts">get</a>({ ...params }) -> SearchGetResponse | null</code>

# Cache

Types:

- <code><a href="./src/resources/cache/cache.ts">CachePurgeResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/purge_cache">client.cache.<a href="./src/resources/cache/cache.ts">purge</a>({ ...params }) -> CachePurgeResponse | null</code>

## CacheReserve

Types:

- <code><a href="./src/resources/cache/cache-reserve.ts">CacheReserveClearResponse</a></code>
- <code><a href="./src/resources/cache/cache-reserve.ts">CacheReserveEditResponse</a></code>
- <code><a href="./src/resources/cache/cache-reserve.ts">CacheReserveGetResponse</a></code>
- <code><a href="./src/resources/cache/cache-reserve.ts">CacheReserveStatusResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/cache/cache_reserve_clear">client.cache.cacheReserve.<a href="./src/resources/cache/cache-reserve.ts">clear</a>({ ...params }) -> CacheReserveClearResponse</code>
- <code title="patch /zones/{zone_id}/cache/cache_reserve">client.cache.cacheReserve.<a href="./src/resources/cache/cache-reserve.ts">edit</a>({ ...params }) -> CacheReserveEditResponse</code>
- <code title="get /zones/{zone_id}/cache/cache_reserve">client.cache.cacheReserve.<a href="./src/resources/cache/cache-reserve.ts">get</a>({ ...params }) -> CacheReserveGetResponse</code>
- <code title="get /zones/{zone_id}/cache/cache_reserve_clear">client.cache.cacheReserve.<a href="./src/resources/cache/cache-reserve.ts">status</a>({ ...params }) -> CacheReserveStatusResponse</code>

## SmartTieredCache

Types:

- <code><a href="./src/resources/cache/smart-tiered-cache.ts">SmartTieredCacheDeleteResponse</a></code>
- <code><a href="./src/resources/cache/smart-tiered-cache.ts">SmartTieredCacheEditResponse</a></code>
- <code><a href="./src/resources/cache/smart-tiered-cache.ts">SmartTieredCacheGetResponse</a></code>

Methods:

- <code title="delete /zones/{zone_id}/cache/tiered_cache_smart_topology_enable">client.cache.smartTieredCache.<a href="./src/resources/cache/smart-tiered-cache.ts">delete</a>({ ...params }) -> SmartTieredCacheDeleteResponse</code>
- <code title="patch /zones/{zone_id}/cache/tiered_cache_smart_topology_enable">client.cache.smartTieredCache.<a href="./src/resources/cache/smart-tiered-cache.ts">edit</a>({ ...params }) -> SmartTieredCacheEditResponse</code>
- <code title="get /zones/{zone_id}/cache/tiered_cache_smart_topology_enable">client.cache.smartTieredCache.<a href="./src/resources/cache/smart-tiered-cache.ts">get</a>({ ...params }) -> SmartTieredCacheGetResponse</code>

## Variants

Types:

- <code><a href="./src/resources/cache/variants.ts">CacheVariants</a></code>
- <code><a href="./src/resources/cache/variants.ts">VariantEditResponse</a></code>
- <code><a href="./src/resources/cache/variants.ts">VariantGetResponse</a></code>

Methods:

- <code title="delete /zones/{zone_id}/cache/variants">client.cache.variants.<a href="./src/resources/cache/variants.ts">delete</a>({ ...params }) -> CacheVariants</code>
- <code title="patch /zones/{zone_id}/cache/variants">client.cache.variants.<a href="./src/resources/cache/variants.ts">edit</a>({ ...params }) -> VariantEditResponse</code>
- <code title="get /zones/{zone_id}/cache/variants">client.cache.variants.<a href="./src/resources/cache/variants.ts">get</a>({ ...params }) -> VariantGetResponse</code>

## RegionalTieredCache

Types:

- <code><a href="./src/resources/cache/regional-tiered-cache.ts">RegionalTieredCacheEditResponse</a></code>
- <code><a href="./src/resources/cache/regional-tiered-cache.ts">RegionalTieredCacheGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/cache/regional_tiered_cache">client.cache.regionalTieredCache.<a href="./src/resources/cache/regional-tiered-cache.ts">edit</a>({ ...params }) -> RegionalTieredCacheEditResponse</code>
- <code title="get /zones/{zone_id}/cache/regional_tiered_cache">client.cache.regionalTieredCache.<a href="./src/resources/cache/regional-tiered-cache.ts">get</a>({ ...params }) -> RegionalTieredCacheGetResponse</code>

# SSL

## Analyze

Types:

- <code><a href="./src/resources/ssl/analyze.ts">AnalyzeCreateResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/ssl/analyze">client.ssl.analyze.<a href="./src/resources/ssl/analyze.ts">create</a>({ ...params }) -> AnalyzeCreateResponse</code>

## CertificatePacks

Types:

- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">CertificatePackListResponse</a></code>
- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">CertificatePackDeleteResponse</a></code>
- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">CertificatePackEditResponse</a></code>
- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">CertificatePackGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/ssl/certificate_packs">client.ssl.certificatePacks.<a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">list</a>({ ...params }) -> CertificatePackListResponse | null</code>
- <code title="delete /zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}">client.ssl.certificatePacks.<a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">delete</a>(certificatePackId, { ...params }) -> CertificatePackDeleteResponse</code>
- <code title="patch /zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}">client.ssl.certificatePacks.<a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">edit</a>(certificatePackId, { ...params }) -> CertificatePackEditResponse</code>
- <code title="get /zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}">client.ssl.certificatePacks.<a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">get</a>(certificatePackId, { ...params }) -> CertificatePackGetResponse</code>

### Order

Types:

- <code><a href="./src/resources/ssl/certificate-packs/order.ts">OrderCreateResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/ssl/certificate_packs/order">client.ssl.certificatePacks.order.<a href="./src/resources/ssl/certificate-packs/order.ts">create</a>({ ...params }) -> OrderCreateResponse</code>

### Quota

Types:

- <code><a href="./src/resources/ssl/certificate-packs/quota.ts">QuotaGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/ssl/certificate_packs/quota">client.ssl.certificatePacks.quota.<a href="./src/resources/ssl/certificate-packs/quota.ts">get</a>({ ...params }) -> QuotaGetResponse</code>

## Recommendations

Types:

- <code><a href="./src/resources/ssl/recommendations.ts">RecommendationGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/ssl/recommendation">client.ssl.recommendations.<a href="./src/resources/ssl/recommendations.ts">get</a>(zoneIdentifier) -> RecommendationGetResponse | null</code>

## Universal

### Settings

Types:

- <code><a href="./src/resources/ssl/universal/settings.ts">TLSCertificatesAndHostnamesUniversal</a></code>

Methods:

- <code title="patch /zones/{zone_id}/ssl/universal/settings">client.ssl.universal.settings.<a href="./src/resources/ssl/universal/settings.ts">edit</a>({ ...params }) -> TLSCertificatesAndHostnamesUniversal</code>
- <code title="get /zones/{zone_id}/ssl/universal/settings">client.ssl.universal.settings.<a href="./src/resources/ssl/universal/settings.ts">get</a>({ ...params }) -> TLSCertificatesAndHostnamesUniversal</code>

## Verification

Types:

- <code><a href="./src/resources/ssl/verification.ts">TLSCertificatesAndHostnamesVerification</a></code>
- <code><a href="./src/resources/ssl/verification.ts">VerificationEditResponse</a></code>
- <code><a href="./src/resources/ssl/verification.ts">VerificationGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/ssl/verification/{certificate_pack_id}">client.ssl.verification.<a href="./src/resources/ssl/verification.ts">edit</a>(certificatePackId, { ...params }) -> VerificationEditResponse</code>
- <code title="get /zones/{zone_id}/ssl/verification">client.ssl.verification.<a href="./src/resources/ssl/verification.ts">get</a>({ ...params }) -> VerificationGetResponse</code>

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

- <code title="post /zones/{zone_id}/acm/total_tls">client.acm.totalTLS.<a href="./src/resources/acm/total-tls.ts">create</a>({ ...params }) -> TotalTLSCreateResponse</code>
- <code title="get /zones/{zone_id}/acm/total_tls">client.acm.totalTLS.<a href="./src/resources/acm/total-tls.ts">get</a>({ ...params }) -> TotalTLSGetResponse</code>

# Argo

## SmartRouting

Types:

- <code><a href="./src/resources/argo/smart-routing.ts">SmartRoutingEditResponse</a></code>
- <code><a href="./src/resources/argo/smart-routing.ts">SmartRoutingGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/argo/smart_routing">client.argo.smartRouting.<a href="./src/resources/argo/smart-routing.ts">edit</a>({ ...params }) -> SmartRoutingEditResponse</code>
- <code title="get /zones/{zone_id}/argo/smart_routing">client.argo.smartRouting.<a href="./src/resources/argo/smart-routing.ts">get</a>({ ...params }) -> SmartRoutingGetResponse</code>

## TieredCaching

Types:

- <code><a href="./src/resources/argo/tiered-caching.ts">TieredCachingEditResponse</a></code>
- <code><a href="./src/resources/argo/tiered-caching.ts">TieredCachingGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/argo/tiered_caching">client.argo.tieredCaching.<a href="./src/resources/argo/tiered-caching.ts">edit</a>({ ...params }) -> TieredCachingEditResponse</code>
- <code title="get /zones/{zone_id}/argo/tiered_caching">client.argo.tieredCaching.<a href="./src/resources/argo/tiered-caching.ts">get</a>({ ...params }) -> TieredCachingGetResponse</code>

# AvailablePlans

Types:

- <code><a href="./src/resources/available-plans.ts">BillSubsAPIAvailableRatePlan</a></code>
- <code><a href="./src/resources/available-plans.ts">AvailablePlanListResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/available_plans">client.availablePlans.<a href="./src/resources/available-plans.ts">list</a>(zoneIdentifier) -> AvailablePlanListResponse | null</code>
- <code title="get /zones/{zone_identifier}/available_plans/{plan_identifier}">client.availablePlans.<a href="./src/resources/available-plans.ts">get</a>(zoneIdentifier, planIdentifier) -> BillSubsAPIAvailableRatePlan</code>

# AvailableRatePlans

Types:

- <code><a href="./src/resources/available-rate-plans.ts">BillSubsRatePlan</a></code>
- <code><a href="./src/resources/available-rate-plans.ts">AvailableRatePlanGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/available_rate_plans">client.availableRatePlans.<a href="./src/resources/available-rate-plans.ts">get</a>(zoneIdentifier) -> AvailableRatePlanGetResponse | null</code>

# CertificateAuthorities

## HostnameAssociations

Types:

- <code><a href="./src/resources/certificate-authorities/hostname-associations.ts">TLSCertificatesAndHostnamesHostnameAssociation</a></code>

Methods:

- <code title="put /zones/{zone_id}/certificate_authorities/hostname_associations">client.certificateAuthorities.hostnameAssociations.<a href="./src/resources/certificate-authorities/hostname-associations.ts">update</a>({ ...params }) -> TLSCertificatesAndHostnamesHostnameAssociation</code>
- <code title="get /zones/{zone_id}/certificate_authorities/hostname_associations">client.certificateAuthorities.hostnameAssociations.<a href="./src/resources/certificate-authorities/hostname-associations.ts">get</a>({ ...params }) -> TLSCertificatesAndHostnamesHostnameAssociation</code>

# ClientCertificates

Types:

- <code><a href="./src/resources/client-certificates.ts">TLSCertificatesAndHostnamesClientCertificate</a></code>

Methods:

- <code title="post /zones/{zone_id}/client_certificates">client.clientCertificates.<a href="./src/resources/client-certificates.ts">create</a>({ ...params }) -> TLSCertificatesAndHostnamesClientCertificate</code>
- <code title="get /zones/{zone_id}/client_certificates">client.clientCertificates.<a href="./src/resources/client-certificates.ts">list</a>({ ...params }) -> TLSCertificatesAndHostnamesClientCertificatesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/client_certificates/{client_certificate_id}">client.clientCertificates.<a href="./src/resources/client-certificates.ts">delete</a>(clientCertificateId, { ...params }) -> TLSCertificatesAndHostnamesClientCertificate</code>
- <code title="patch /zones/{zone_id}/client_certificates/{client_certificate_id}">client.clientCertificates.<a href="./src/resources/client-certificates.ts">edit</a>(clientCertificateId, { ...params }) -> TLSCertificatesAndHostnamesClientCertificate</code>
- <code title="get /zones/{zone_id}/client_certificates/{client_certificate_id}">client.clientCertificates.<a href="./src/resources/client-certificates.ts">get</a>(clientCertificateId, { ...params }) -> TLSCertificatesAndHostnamesClientCertificate</code>

# CustomCertificates

Types:

- <code><a href="./src/resources/custom-certificates/custom-certificates.ts">TLSCertificatesAndHostnamesCustomCertificate</a></code>
- <code><a href="./src/resources/custom-certificates/custom-certificates.ts">CustomCertificateCreateResponse</a></code>
- <code><a href="./src/resources/custom-certificates/custom-certificates.ts">CustomCertificateDeleteResponse</a></code>
- <code><a href="./src/resources/custom-certificates/custom-certificates.ts">CustomCertificateEditResponse</a></code>
- <code><a href="./src/resources/custom-certificates/custom-certificates.ts">CustomCertificateGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/custom_certificates">client.customCertificates.<a href="./src/resources/custom-certificates/custom-certificates.ts">create</a>({ ...params }) -> CustomCertificateCreateResponse</code>
- <code title="get /zones/{zone_id}/custom_certificates">client.customCertificates.<a href="./src/resources/custom-certificates/custom-certificates.ts">list</a>({ ...params }) -> TLSCertificatesAndHostnamesCustomCertificatesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/custom_certificates/{custom_certificate_id}">client.customCertificates.<a href="./src/resources/custom-certificates/custom-certificates.ts">delete</a>(customCertificateId, { ...params }) -> CustomCertificateDeleteResponse</code>
- <code title="patch /zones/{zone_id}/custom_certificates/{custom_certificate_id}">client.customCertificates.<a href="./src/resources/custom-certificates/custom-certificates.ts">edit</a>(customCertificateId, { ...params }) -> CustomCertificateEditResponse</code>
- <code title="get /zones/{zone_id}/custom_certificates/{custom_certificate_id}">client.customCertificates.<a href="./src/resources/custom-certificates/custom-certificates.ts">get</a>(customCertificateId, { ...params }) -> CustomCertificateGetResponse</code>

## Prioritize

Types:

- <code><a href="./src/resources/custom-certificates/prioritize.ts">PrioritizeUpdateResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/custom_certificates/prioritize">client.customCertificates.prioritize.<a href="./src/resources/custom-certificates/prioritize.ts">update</a>({ ...params }) -> PrioritizeUpdateResponse | null</code>

# CustomHostnames

Types:

- <code><a href="./src/resources/custom-hostnames/custom-hostnames.ts">TLSCertificatesAndHostnamesCustomHostname</a></code>
- <code><a href="./src/resources/custom-hostnames/custom-hostnames.ts">CustomHostnameCreateResponse</a></code>
- <code><a href="./src/resources/custom-hostnames/custom-hostnames.ts">CustomHostnameListResponse</a></code>
- <code><a href="./src/resources/custom-hostnames/custom-hostnames.ts">CustomHostnameDeleteResponse</a></code>
- <code><a href="./src/resources/custom-hostnames/custom-hostnames.ts">CustomHostnameEditResponse</a></code>
- <code><a href="./src/resources/custom-hostnames/custom-hostnames.ts">CustomHostnameGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/custom_hostnames">client.customHostnames.<a href="./src/resources/custom-hostnames/custom-hostnames.ts">create</a>({ ...params }) -> CustomHostnameCreateResponse</code>
- <code title="get /zones/{zone_id}/custom_hostnames">client.customHostnames.<a href="./src/resources/custom-hostnames/custom-hostnames.ts">list</a>({ ...params }) -> CustomHostnameListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/custom_hostnames/{custom_hostname_id}">client.customHostnames.<a href="./src/resources/custom-hostnames/custom-hostnames.ts">delete</a>(customHostnameId, { ...params }) -> CustomHostnameDeleteResponse</code>
- <code title="patch /zones/{zone_id}/custom_hostnames/{custom_hostname_id}">client.customHostnames.<a href="./src/resources/custom-hostnames/custom-hostnames.ts">edit</a>(customHostnameId, { ...params }) -> CustomHostnameEditResponse</code>
- <code title="get /zones/{zone_id}/custom_hostnames/{custom_hostname_id}">client.customHostnames.<a href="./src/resources/custom-hostnames/custom-hostnames.ts">get</a>(customHostnameId, { ...params }) -> CustomHostnameGetResponse</code>

## FallbackOrigin

Types:

- <code><a href="./src/resources/custom-hostnames/fallback-origin.ts">FallbackOriginUpdateResponse</a></code>
- <code><a href="./src/resources/custom-hostnames/fallback-origin.ts">FallbackOriginDeleteResponse</a></code>
- <code><a href="./src/resources/custom-hostnames/fallback-origin.ts">FallbackOriginGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/custom_hostnames/fallback_origin">client.customHostnames.fallbackOrigin.<a href="./src/resources/custom-hostnames/fallback-origin.ts">update</a>({ ...params }) -> FallbackOriginUpdateResponse</code>
- <code title="delete /zones/{zone_id}/custom_hostnames/fallback_origin">client.customHostnames.fallbackOrigin.<a href="./src/resources/custom-hostnames/fallback-origin.ts">delete</a>({ ...params }) -> FallbackOriginDeleteResponse</code>
- <code title="get /zones/{zone_id}/custom_hostnames/fallback_origin">client.customHostnames.fallbackOrigin.<a href="./src/resources/custom-hostnames/fallback-origin.ts">get</a>({ ...params }) -> FallbackOriginGetResponse</code>

# CustomNameservers

Types:

- <code><a href="./src/resources/custom-nameservers.ts">DNSCustomNameserversCustomNS</a></code>
- <code><a href="./src/resources/custom-nameservers.ts">CustomNameserverDeleteResponse</a></code>
- <code><a href="./src/resources/custom-nameservers.ts">CustomNameserverAvailabiltyResponse</a></code>
- <code><a href="./src/resources/custom-nameservers.ts">CustomNameserverGetResponse</a></code>
- <code><a href="./src/resources/custom-nameservers.ts">CustomNameserverVerifyResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/custom_ns">client.customNameservers.<a href="./src/resources/custom-nameservers.ts">create</a>({ ...params }) -> DNSCustomNameserversCustomNS</code>
- <code title="delete /accounts/{account_id}/custom_ns/{custom_ns_id}">client.customNameservers.<a href="./src/resources/custom-nameservers.ts">delete</a>(customNSId, { ...params }) -> CustomNameserverDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/custom_ns/availability">client.customNameservers.<a href="./src/resources/custom-nameservers.ts">availabilty</a>({ ...params }) -> CustomNameserverAvailabiltyResponse | null</code>
- <code title="get /accounts/{account_id}/custom_ns">client.customNameservers.<a href="./src/resources/custom-nameservers.ts">get</a>({ ...params }) -> CustomNameserverGetResponse | null</code>
- <code title="post /accounts/{account_id}/custom_ns/verify">client.customNameservers.<a href="./src/resources/custom-nameservers.ts">verify</a>({ ...params }) -> CustomNameserverVerifyResponse | null</code>

# DNS

## Records

Types:

- <code><a href="./src/resources/dns/records.ts">DNSRecord</a></code>
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

- <code title="post /zones/{zone_id}/dns_records">client.dns.records.<a href="./src/resources/dns/records.ts">create</a>({ ...params }) -> RecordCreateResponse</code>
- <code title="put /zones/{zone_id}/dns_records/{dns_record_id}">client.dns.records.<a href="./src/resources/dns/records.ts">update</a>(dnsRecordId, { ...params }) -> RecordUpdateResponse</code>
- <code title="get /zones/{zone_id}/dns_records">client.dns.records.<a href="./src/resources/dns/records.ts">list</a>({ ...params }) -> RecordListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/dns_records/{dns_record_id}">client.dns.records.<a href="./src/resources/dns/records.ts">delete</a>(dnsRecordId, { ...params }) -> RecordDeleteResponse</code>
- <code title="patch /zones/{zone_id}/dns_records/{dns_record_id}">client.dns.records.<a href="./src/resources/dns/records.ts">edit</a>(dnsRecordId, { ...params }) -> RecordEditResponse</code>
- <code title="get /zones/{zone_id}/dns_records/export">client.dns.records.<a href="./src/resources/dns/records.ts">export</a>({ ...params }) -> string</code>
- <code title="get /zones/{zone_id}/dns_records/{dns_record_id}">client.dns.records.<a href="./src/resources/dns/records.ts">get</a>(dnsRecordId, { ...params }) -> RecordGetResponse</code>
- <code title="post /zones/{zone_id}/dns_records/import">client.dns.records.<a href="./src/resources/dns/records.ts">import</a>({ ...params }) -> RecordImportResponse</code>
- <code title="post /zones/{zone_id}/dns_records/scan">client.dns.records.<a href="./src/resources/dns/records.ts">scan</a>({ ...params }) -> RecordScanResponse</code>

## Analytics

### Reports

Types:

- <code><a href="./src/resources/dns/analytics/reports/reports.ts">DNSDNSAnalyticsAPIReport</a></code>

Methods:

- <code title="get /zones/{identifier}/dns_analytics/report">client.dns.analytics.reports.<a href="./src/resources/dns/analytics/reports/reports.ts">get</a>(identifier, { ...params }) -> DNSDNSAnalyticsAPIReport</code>

#### Bytimes

Types:

- <code><a href="./src/resources/dns/analytics/reports/bytimes.ts">DNSDNSAnalyticsAPIReportBytime</a></code>

Methods:

- <code title="get /zones/{identifier}/dns_analytics/report/bytime">client.dns.analytics.reports.bytimes.<a href="./src/resources/dns/analytics/reports/bytimes.ts">get</a>(identifier, { ...params }) -> DNSDNSAnalyticsAPIReportBytime</code>

## Firewall

Types:

- <code><a href="./src/resources/dns/firewall/firewall.ts">DNSFirewallDNSFirewall</a></code>
- <code><a href="./src/resources/dns/firewall/firewall.ts">FirewallDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dns_firewall">client.dns.firewall.<a href="./src/resources/dns/firewall/firewall.ts">create</a>({ ...params }) -> DNSFirewallDNSFirewall</code>
- <code title="get /accounts/{account_id}/dns_firewall">client.dns.firewall.<a href="./src/resources/dns/firewall/firewall.ts">list</a>({ ...params }) -> DNSFirewallDNSFirewallsV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/dns_firewall/{dns_firewall_id}">client.dns.firewall.<a href="./src/resources/dns/firewall/firewall.ts">delete</a>(dnsFirewallId, { ...params }) -> FirewallDeleteResponse</code>
- <code title="patch /accounts/{account_id}/dns_firewall/{dns_firewall_id}">client.dns.firewall.<a href="./src/resources/dns/firewall/firewall.ts">edit</a>(dnsFirewallId, { ...params }) -> DNSFirewallDNSFirewall</code>
- <code title="get /accounts/{account_id}/dns_firewall/{dns_firewall_id}">client.dns.firewall.<a href="./src/resources/dns/firewall/firewall.ts">get</a>(dnsFirewallId, { ...params }) -> DNSFirewallDNSFirewall</code>

### Analytics

#### Reports

Methods:

- <code title="get /accounts/{account_identifier}/dns_firewall/{identifier}/dns_analytics/report">client.dns.firewall.analytics.reports.<a href="./src/resources/dns/firewall/analytics/reports/reports.ts">get</a>(accountIdentifier, identifier, { ...params }) -> DNSDNSAnalyticsAPIReport</code>

##### Bytimes

Methods:

- <code title="get /accounts/{account_identifier}/dns_firewall/{identifier}/dns_analytics/report/bytime">client.dns.firewall.analytics.reports.bytimes.<a href="./src/resources/dns/firewall/analytics/reports/bytimes.ts">get</a>(accountIdentifier, identifier, { ...params }) -> DNSDNSAnalyticsAPIReportBytime</code>

# DNSSEC

Types:

- <code><a href="./src/resources/dnssec.ts">DNSSECDNSSEC</a></code>
- <code><a href="./src/resources/dnssec.ts">DNSSECDeleteResponse</a></code>

Methods:

- <code title="delete /zones/{zone_id}/dnssec">client.dnssec.<a href="./src/resources/dnssec.ts">delete</a>({ ...params }) -> DNSSECDeleteResponse</code>
- <code title="patch /zones/{zone_id}/dnssec">client.dnssec.<a href="./src/resources/dnssec.ts">edit</a>({ ...params }) -> DNSSECDNSSEC</code>
- <code title="get /zones/{zone_id}/dnssec">client.dnssec.<a href="./src/resources/dnssec.ts">get</a>({ ...params }) -> DNSSECDNSSEC</code>

# EmailRouting

## Routing

Types:

- <code><a href="./src/resources/email-routing/routing/routing.ts">EmailSettings</a></code>
- <code><a href="./src/resources/email-routing/routing/routing.ts">RoutingDisableResponse</a></code>
- <code><a href="./src/resources/email-routing/routing/routing.ts">RoutingEnableResponse</a></code>
- <code><a href="./src/resources/email-routing/routing/routing.ts">RoutingGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/email/routing/disable">client.emailRouting.routing.<a href="./src/resources/email-routing/routing/routing.ts">disable</a>(zoneIdentifier) -> RoutingDisableResponse</code>
- <code title="post /zones/{zone_identifier}/email/routing/enable">client.emailRouting.routing.<a href="./src/resources/email-routing/routing/routing.ts">enable</a>(zoneIdentifier) -> RoutingEnableResponse</code>
- <code title="get /zones/{zone_identifier}/email/routing">client.emailRouting.routing.<a href="./src/resources/email-routing/routing/routing.ts">get</a>(zoneIdentifier) -> RoutingGetResponse</code>

### DNS

Types:

- <code><a href="./src/resources/email-routing/routing/dns.ts">EmailDNSRecord</a></code>
- <code><a href="./src/resources/email-routing/routing/dns.ts">DNSGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/email/routing/dns">client.emailRouting.routing.dns.<a href="./src/resources/email-routing/routing/dns.ts">get</a>(zoneIdentifier) -> DNSGetResponse | null</code>

### Rules

Types:

- <code><a href="./src/resources/email-routing/routing/rules/rules.ts">EmailRules</a></code>
- <code><a href="./src/resources/email-routing/routing/rules/rules.ts">RuleCreateResponse</a></code>
- <code><a href="./src/resources/email-routing/routing/rules/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/email-routing/routing/rules/rules.ts">RuleListResponse</a></code>
- <code><a href="./src/resources/email-routing/routing/rules/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/email-routing/routing/rules/rules.ts">RuleGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/email/routing/rules">client.emailRouting.routing.rules.<a href="./src/resources/email-routing/routing/rules/rules.ts">create</a>(zoneIdentifier, { ...params }) -> RuleCreateResponse</code>
- <code title="put /zones/{zone_identifier}/email/routing/rules/{rule_identifier}">client.emailRouting.routing.rules.<a href="./src/resources/email-routing/routing/rules/rules.ts">update</a>(zoneIdentifier, ruleIdentifier, { ...params }) -> RuleUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/email/routing/rules">client.emailRouting.routing.rules.<a href="./src/resources/email-routing/routing/rules/rules.ts">list</a>(zoneIdentifier, { ...params }) -> RuleListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_identifier}/email/routing/rules/{rule_identifier}">client.emailRouting.routing.rules.<a href="./src/resources/email-routing/routing/rules/rules.ts">delete</a>(zoneIdentifier, ruleIdentifier) -> RuleDeleteResponse</code>
- <code title="get /zones/{zone_identifier}/email/routing/rules/{rule_identifier}">client.emailRouting.routing.rules.<a href="./src/resources/email-routing/routing/rules/rules.ts">get</a>(zoneIdentifier, ruleIdentifier) -> RuleGetResponse</code>

#### CatchAlls

Types:

- <code><a href="./src/resources/email-routing/routing/rules/catch-alls.ts">EmailCatchAllRule</a></code>

Methods:

- <code title="put /zones/{zone_identifier}/email/routing/rules/catch_all">client.emailRouting.routing.rules.catchAlls.<a href="./src/resources/email-routing/routing/rules/catch-alls.ts">update</a>(zoneIdentifier, { ...params }) -> EmailCatchAllRule</code>
- <code title="get /zones/{zone_identifier}/email/routing/rules/catch_all">client.emailRouting.routing.rules.catchAlls.<a href="./src/resources/email-routing/routing/rules/catch-alls.ts">get</a>(zoneIdentifier) -> EmailCatchAllRule</code>

### Addresses

Types:

- <code><a href="./src/resources/email-routing/routing/addresses.ts">EmailAddresses</a></code>
- <code><a href="./src/resources/email-routing/routing/addresses.ts">AddressCreateResponse</a></code>
- <code><a href="./src/resources/email-routing/routing/addresses.ts">AddressListResponse</a></code>
- <code><a href="./src/resources/email-routing/routing/addresses.ts">AddressDeleteResponse</a></code>
- <code><a href="./src/resources/email-routing/routing/addresses.ts">AddressGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/email/routing/addresses">client.emailRouting.routing.addresses.<a href="./src/resources/email-routing/routing/addresses.ts">create</a>(accountIdentifier, { ...params }) -> AddressCreateResponse</code>
- <code title="get /accounts/{account_identifier}/email/routing/addresses">client.emailRouting.routing.addresses.<a href="./src/resources/email-routing/routing/addresses.ts">list</a>(accountIdentifier, { ...params }) -> AddressListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_identifier}/email/routing/addresses/{destination_address_identifier}">client.emailRouting.routing.addresses.<a href="./src/resources/email-routing/routing/addresses.ts">delete</a>(accountIdentifier, destinationAddressIdentifier) -> AddressDeleteResponse</code>
- <code title="get /accounts/{account_identifier}/email/routing/addresses/{destination_address_identifier}">client.emailRouting.routing.addresses.<a href="./src/resources/email-routing/routing/addresses.ts">get</a>(accountIdentifier, destinationAddressIdentifier) -> AddressGetResponse</code>

# Filters

Types:

- <code><a href="./src/resources/filters.ts">LegacyJhsFilter</a></code>
- <code><a href="./src/resources/filters.ts">FilterCreateResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/filters">client.filters.<a href="./src/resources/filters.ts">create</a>(zoneIdentifier, { ...params }) -> FilterCreateResponse | null</code>
- <code title="put /zones/{zone_identifier}/filters/{id}">client.filters.<a href="./src/resources/filters.ts">update</a>(zoneIdentifier, id, { ...params }) -> LegacyJhsFilter | null</code>
- <code title="get /zones/{zone_identifier}/filters">client.filters.<a href="./src/resources/filters.ts">list</a>(zoneIdentifier, { ...params }) -> LegacyJhsFiltersV4PagePaginationArray</code>
- <code title="delete /zones/{zone_identifier}/filters/{id}">client.filters.<a href="./src/resources/filters.ts">delete</a>(zoneIdentifier, id) -> LegacyJhsFilter | null</code>
- <code title="get /zones/{zone_identifier}/filters/{id}">client.filters.<a href="./src/resources/filters.ts">get</a>(zoneIdentifier, id) -> LegacyJhsFilter | null</code>

# Firewall

## Lockdowns

Types:

- <code><a href="./src/resources/firewall/lockdowns.ts">LegacyJhsZonelockdown</a></code>
- <code><a href="./src/resources/firewall/lockdowns.ts">LockdownDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/firewall/lockdowns">client.firewall.lockdowns.<a href="./src/resources/firewall/lockdowns.ts">create</a>(zoneIdentifier, { ...params }) -> LegacyJhsZonelockdown | null</code>
- <code title="put /zones/{zone_identifier}/firewall/lockdowns/{id}">client.firewall.lockdowns.<a href="./src/resources/firewall/lockdowns.ts">update</a>(zoneIdentifier, id, { ...params }) -> LegacyJhsZonelockdown | null</code>
- <code title="get /zones/{zone_identifier}/firewall/lockdowns">client.firewall.lockdowns.<a href="./src/resources/firewall/lockdowns.ts">list</a>(zoneIdentifier, { ...params }) -> LegacyJhsZonelockdownsV4PagePaginationArray</code>
- <code title="delete /zones/{zone_identifier}/firewall/lockdowns/{id}">client.firewall.lockdowns.<a href="./src/resources/firewall/lockdowns.ts">delete</a>(zoneIdentifier, id) -> LockdownDeleteResponse</code>
- <code title="get /zones/{zone_identifier}/firewall/lockdowns/{id}">client.firewall.lockdowns.<a href="./src/resources/firewall/lockdowns.ts">get</a>(zoneIdentifier, id) -> LegacyJhsZonelockdown | null</code>

## Rules

Types:

- <code><a href="./src/resources/firewall/rules.ts">LegacyJhsFilterRule</a></code>
- <code><a href="./src/resources/firewall/rules.ts">RuleCreateResponse</a></code>
- <code><a href="./src/resources/firewall/rules.ts">RuleEditResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/firewall/rules">client.firewall.rules.<a href="./src/resources/firewall/rules.ts">create</a>(zoneIdentifier, { ...params }) -> RuleCreateResponse | null</code>
- <code title="put /zones/{zone_identifier}/firewall/rules/{id}">client.firewall.rules.<a href="./src/resources/firewall/rules.ts">update</a>(zoneIdentifier, id, { ...params }) -> LegacyJhsFilterRule | null</code>
- <code title="get /zones/{zone_identifier}/firewall/rules">client.firewall.rules.<a href="./src/resources/firewall/rules.ts">list</a>(zoneIdentifier, { ...params }) -> LegacyJhsFilterRulesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_identifier}/firewall/rules/{id}">client.firewall.rules.<a href="./src/resources/firewall/rules.ts">delete</a>(zoneIdentifier, id, { ...params }) -> LegacyJhsFilterRule | null</code>
- <code title="patch /zones/{zone_identifier}/firewall/rules/{id}">client.firewall.rules.<a href="./src/resources/firewall/rules.ts">edit</a>(zoneIdentifier, id, { ...params }) -> RuleEditResponse | null</code>
- <code title="get /zones/{zone_identifier}/firewall/rules/{id}">client.firewall.rules.<a href="./src/resources/firewall/rules.ts">get</a>(zoneIdentifier, id) -> LegacyJhsFilterRule | null</code>

## AccessRules

Types:

- <code><a href="./src/resources/firewall/access-rules.ts">AccessRuleCreateResponse</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">AccessRuleListResponse</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">AccessRuleDeleteResponse</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">AccessRuleEditResponse</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">AccessRuleGetResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/firewall/access_rules/rules">client.firewall.accessRules.<a href="./src/resources/firewall/access-rules.ts">create</a>({ ...params }) -> AccessRuleCreateResponse | null</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/firewall/access_rules/rules">client.firewall.accessRules.<a href="./src/resources/firewall/access-rules.ts">list</a>({ ...params }) -> AccessRuleListResponsesV4PagePaginationArray</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/firewall/access_rules/rules/{identifier}">client.firewall.accessRules.<a href="./src/resources/firewall/access-rules.ts">delete</a>(identifier, { ...params }) -> AccessRuleDeleteResponse | null</code>
- <code title="patch /{account_or_zone}/{account_or_zone_id}/firewall/access_rules/rules/{identifier}">client.firewall.accessRules.<a href="./src/resources/firewall/access-rules.ts">edit</a>(identifier, { ...params }) -> AccessRuleEditResponse | null</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/firewall/access_rules/rules/{identifier}">client.firewall.accessRules.<a href="./src/resources/firewall/access-rules.ts">get</a>(identifier, { ...params }) -> AccessRuleGetResponse | null</code>

## UARules

Types:

- <code><a href="./src/resources/firewall/ua-rules.ts">LegacyJhsUARules</a></code>
- <code><a href="./src/resources/firewall/ua-rules.ts">UARuleCreateResponse</a></code>
- <code><a href="./src/resources/firewall/ua-rules.ts">UARuleUpdateResponse</a></code>
- <code><a href="./src/resources/firewall/ua-rules.ts">UARuleListResponse</a></code>
- <code><a href="./src/resources/firewall/ua-rules.ts">UARuleDeleteResponse</a></code>
- <code><a href="./src/resources/firewall/ua-rules.ts">UARuleGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/firewall/ua_rules">client.firewall.uaRules.<a href="./src/resources/firewall/ua-rules.ts">create</a>(zoneIdentifier, { ...params }) -> UARuleCreateResponse | null</code>
- <code title="put /zones/{zone_identifier}/firewall/ua_rules/{id}">client.firewall.uaRules.<a href="./src/resources/firewall/ua-rules.ts">update</a>(zoneIdentifier, id, { ...params }) -> UARuleUpdateResponse | null</code>
- <code title="get /zones/{zone_identifier}/firewall/ua_rules">client.firewall.uaRules.<a href="./src/resources/firewall/ua-rules.ts">list</a>(zoneIdentifier, { ...params }) -> UARuleListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_identifier}/firewall/ua_rules/{id}">client.firewall.uaRules.<a href="./src/resources/firewall/ua-rules.ts">delete</a>(zoneIdentifier, id) -> UARuleDeleteResponse | null</code>
- <code title="get /zones/{zone_identifier}/firewall/ua_rules/{id}">client.firewall.uaRules.<a href="./src/resources/firewall/ua-rules.ts">get</a>(zoneIdentifier, id) -> UARuleGetResponse | null</code>

## WAF

### Overrides

Types:

- <code><a href="./src/resources/firewall/waf/overrides.ts">LegacyJhsOverride</a></code>
- <code><a href="./src/resources/firewall/waf/overrides.ts">OverrideDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/firewall/waf/overrides">client.firewall.waf.overrides.<a href="./src/resources/firewall/waf/overrides.ts">create</a>(zoneIdentifier, { ...params }) -> LegacyJhsOverride | null</code>
- <code title="put /zones/{zone_identifier}/firewall/waf/overrides/{id}">client.firewall.waf.overrides.<a href="./src/resources/firewall/waf/overrides.ts">update</a>(zoneIdentifier, id, { ...params }) -> LegacyJhsOverride | null</code>
- <code title="get /zones/{zone_identifier}/firewall/waf/overrides">client.firewall.waf.overrides.<a href="./src/resources/firewall/waf/overrides.ts">list</a>(zoneIdentifier, { ...params }) -> LegacyJhsOverridesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_identifier}/firewall/waf/overrides/{id}">client.firewall.waf.overrides.<a href="./src/resources/firewall/waf/overrides.ts">delete</a>(zoneIdentifier, id) -> OverrideDeleteResponse</code>
- <code title="get /zones/{zone_identifier}/firewall/waf/overrides/{id}">client.firewall.waf.overrides.<a href="./src/resources/firewall/waf/overrides.ts">get</a>(zoneIdentifier, id) -> LegacyJhsOverride | null</code>

### Packages

Types:

- <code><a href="./src/resources/firewall/waf/packages/packages.ts">PackageListResponse</a></code>
- <code><a href="./src/resources/firewall/waf/packages/packages.ts">PackageGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/firewall/waf/packages">client.firewall.waf.packages.<a href="./src/resources/firewall/waf/packages/packages.ts">list</a>(zoneIdentifier, { ...params }) -> PackageListResponsesV4PagePaginationArray</code>
- <code title="get /zones/{zone_identifier}/firewall/waf/packages/{identifier}">client.firewall.waf.packages.<a href="./src/resources/firewall/waf/packages/packages.ts">get</a>(zoneIdentifier, identifier) -> PackageGetResponse</code>

#### Groups

Types:

- <code><a href="./src/resources/firewall/waf/packages/groups.ts">WAFManagedRulesSchemasGroup</a></code>
- <code><a href="./src/resources/firewall/waf/packages/groups.ts">GroupEditResponse</a></code>
- <code><a href="./src/resources/firewall/waf/packages/groups.ts">GroupGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/groups">client.firewall.waf.packages.groups.<a href="./src/resources/firewall/waf/packages/groups.ts">list</a>(packageId, { ...params }) -> WAFManagedRulesSchemasGroupsV4PagePaginationArray</code>
- <code title="patch /zones/{zone_id}/firewall/waf/packages/{package_id}/groups/{group_id}">client.firewall.waf.packages.groups.<a href="./src/resources/firewall/waf/packages/groups.ts">edit</a>(packageId, groupId, { ...params }) -> GroupEditResponse</code>
- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/groups/{group_id}">client.firewall.waf.packages.groups.<a href="./src/resources/firewall/waf/packages/groups.ts">get</a>(packageId, groupId, { ...params }) -> GroupGetResponse</code>

#### Rules

Types:

- <code><a href="./src/resources/firewall/waf/packages/rules.ts">WAFManagedRulesRule</a></code>
- <code><a href="./src/resources/firewall/waf/packages/rules.ts">RuleEditResponse</a></code>
- <code><a href="./src/resources/firewall/waf/packages/rules.ts">RuleGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/rules">client.firewall.waf.packages.rules.<a href="./src/resources/firewall/waf/packages/rules.ts">list</a>(packageId, { ...params }) -> WAFManagedRulesRulesV4PagePaginationArray</code>
- <code title="patch /zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{rule_id}">client.firewall.waf.packages.rules.<a href="./src/resources/firewall/waf/packages/rules.ts">edit</a>(packageId, ruleId, { ...params }) -> RuleEditResponse</code>
- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{rule_id}">client.firewall.waf.packages.rules.<a href="./src/resources/firewall/waf/packages/rules.ts">get</a>(packageId, ruleId, { ...params }) -> RuleGetResponse</code>

# Healthchecks

Types:

- <code><a href="./src/resources/healthchecks/healthchecks.ts">HealthchecksHealthchecks</a></code>
- <code><a href="./src/resources/healthchecks/healthchecks.ts">HealthcheckListResponse</a></code>
- <code><a href="./src/resources/healthchecks/healthchecks.ts">HealthcheckDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/healthchecks">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">create</a>(zoneIdentifier, { ...params }) -> HealthchecksHealthchecks</code>
- <code title="put /zones/{zone_identifier}/healthchecks/{identifier}">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">update</a>(zoneIdentifier, identifier, { ...params }) -> HealthchecksHealthchecks</code>
- <code title="get /zones/{zone_identifier}/healthchecks">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">list</a>(zoneIdentifier) -> HealthcheckListResponse | null</code>
- <code title="delete /zones/{zone_identifier}/healthchecks/{identifier}">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">delete</a>(zoneIdentifier, identifier) -> HealthcheckDeleteResponse</code>
- <code title="patch /zones/{zone_identifier}/healthchecks/{identifier}">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">edit</a>(zoneIdentifier, identifier, { ...params }) -> HealthchecksHealthchecks</code>
- <code title="get /zones/{zone_identifier}/healthchecks/{identifier}">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">get</a>(zoneIdentifier, identifier) -> HealthchecksHealthchecks</code>

## Previews

Types:

- <code><a href="./src/resources/healthchecks/previews.ts">PreviewDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/healthchecks/preview">client.healthchecks.previews.<a href="./src/resources/healthchecks/previews.ts">create</a>(zoneIdentifier, { ...params }) -> HealthchecksHealthchecks</code>
- <code title="delete /zones/{zone_identifier}/healthchecks/preview/{identifier}">client.healthchecks.previews.<a href="./src/resources/healthchecks/previews.ts">delete</a>(zoneIdentifier, identifier) -> PreviewDeleteResponse</code>
- <code title="get /zones/{zone_identifier}/healthchecks/preview/{identifier}">client.healthchecks.previews.<a href="./src/resources/healthchecks/previews.ts">get</a>(zoneIdentifier, identifier) -> HealthchecksHealthchecks</code>

# KeylessCertificates

Types:

- <code><a href="./src/resources/keyless-certificates.ts">TLSCertificatesAndHostnamesBase</a></code>
- <code><a href="./src/resources/keyless-certificates.ts">TLSCertificatesAndHostnamesKeylessCertificate</a></code>
- <code><a href="./src/resources/keyless-certificates.ts">KeylessCertificateListResponse</a></code>
- <code><a href="./src/resources/keyless-certificates.ts">KeylessCertificateDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/keyless_certificates">client.keylessCertificates.<a href="./src/resources/keyless-certificates.ts">create</a>({ ...params }) -> TLSCertificatesAndHostnamesBase</code>
- <code title="get /zones/{zone_id}/keyless_certificates">client.keylessCertificates.<a href="./src/resources/keyless-certificates.ts">list</a>({ ...params }) -> KeylessCertificateListResponse | null</code>
- <code title="delete /zones/{zone_id}/keyless_certificates/{keyless_certificate_id}">client.keylessCertificates.<a href="./src/resources/keyless-certificates.ts">delete</a>(keylessCertificateId, { ...params }) -> KeylessCertificateDeleteResponse</code>
- <code title="patch /zones/{zone_id}/keyless_certificates/{keyless_certificate_id}">client.keylessCertificates.<a href="./src/resources/keyless-certificates.ts">edit</a>(keylessCertificateId, { ...params }) -> TLSCertificatesAndHostnamesBase</code>
- <code title="get /zones/{zone_id}/keyless_certificates/{keyless_certificate_id}">client.keylessCertificates.<a href="./src/resources/keyless-certificates.ts">get</a>(keylessCertificateId, { ...params }) -> TLSCertificatesAndHostnamesBase</code>

# Logpush

## Datasets

### Fields

Types:

- <code><a href="./src/resources/logpush/datasets/fields.ts">FieldGetResponse</a></code>

Methods:

- <code title="get /{account_or_zone}/{account_or_zone_id}/logpush/datasets/{dataset_id}/fields">client.logpush.datasets.fields.<a href="./src/resources/logpush/datasets/fields.ts">get</a>(datasetId, { ...params }) -> FieldGetResponse</code>

### Jobs

Types:

- <code><a href="./src/resources/logpush/datasets/jobs.ts">LogpushLogpushJob</a></code>
- <code><a href="./src/resources/logpush/datasets/jobs.ts">JobGetResponse</a></code>

Methods:

- <code title="get /{account_or_zone}/{account_or_zone_id}/logpush/datasets/{dataset_id}/jobs">client.logpush.datasets.jobs.<a href="./src/resources/logpush/datasets/jobs.ts">get</a>(datasetId, { ...params }) -> JobGetResponse</code>

## Edge

Types:

- <code><a href="./src/resources/logpush/edge.ts">LogpushInstantLogsJob</a></code>
- <code><a href="./src/resources/logpush/edge.ts">EdgeGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/logpush/edge">client.logpush.edge.<a href="./src/resources/logpush/edge.ts">create</a>({ ...params }) -> LogpushInstantLogsJob | null</code>
- <code title="get /zones/{zone_id}/logpush/edge">client.logpush.edge.<a href="./src/resources/logpush/edge.ts">get</a>({ ...params }) -> EdgeGetResponse</code>

## Jobs

Types:

- <code><a href="./src/resources/logpush/jobs.ts">JobListResponse</a></code>
- <code><a href="./src/resources/logpush/jobs.ts">JobDeleteResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/logpush/jobs">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">create</a>({ ...params }) -> LogpushLogpushJob | null</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/logpush/jobs/{job_id}">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">update</a>(jobId, { ...params }) -> LogpushLogpushJob | null</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/logpush/jobs">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">list</a>({ ...params }) -> JobListResponse</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/logpush/jobs/{job_id}">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">delete</a>(jobId, { ...params }) -> JobDeleteResponse | null</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/logpush/jobs/{job_id}">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">get</a>(jobId, { ...params }) -> LogpushLogpushJob | null</code>

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

## Control

### Retention

#### Flag

Types:

- <code><a href="./src/resources/logs/control/retention/flag.ts">FlagCreateResponse</a></code>
- <code><a href="./src/resources/logs/control/retention/flag.ts">FlagGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/logs/control/retention/flag">client.logs.control.retention.flag.<a href="./src/resources/logs/control/retention/flag.ts">create</a>(zoneIdentifier, { ...params }) -> FlagCreateResponse</code>
- <code title="get /zones/{zone_identifier}/logs/control/retention/flag">client.logs.control.retention.flag.<a href="./src/resources/logs/control/retention/flag.ts">get</a>(zoneIdentifier) -> FlagGetResponse</code>

### Cmb

#### Config

Types:

- <code><a href="./src/resources/logs/control/cmb/config.ts">LogcontrolCmbConfig</a></code>
- <code><a href="./src/resources/logs/control/cmb/config.ts">ConfigDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/logs/control/cmb/config">client.logs.control.cmb.config.<a href="./src/resources/logs/control/cmb/config.ts">create</a>({ ...params }) -> LogcontrolCmbConfig | null</code>
- <code title="delete /accounts/{account_id}/logs/control/cmb/config">client.logs.control.cmb.config.<a href="./src/resources/logs/control/cmb/config.ts">delete</a>({ ...params }) -> ConfigDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/logs/control/cmb/config">client.logs.control.cmb.config.<a href="./src/resources/logs/control/cmb/config.ts">get</a>({ ...params }) -> LogcontrolCmbConfig | null</code>

## Rayid

Types:

- <code><a href="./src/resources/logs/rayid.ts">RayidGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/logs/rayids/{ray_identifier}">client.logs.rayid.<a href="./src/resources/logs/rayid.ts">get</a>(zoneIdentifier, rayIdentifier, { ...params }) -> RayidGetResponse</code>

## Received

Types:

- <code><a href="./src/resources/logs/received/received.ts">ReceivedGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/logs/received">client.logs.received.<a href="./src/resources/logs/received/received.ts">get</a>(zoneIdentifier, { ...params }) -> ReceivedGetResponse</code>

### Fields

Types:

- <code><a href="./src/resources/logs/received/fields.ts">FieldGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/logs/received/fields">client.logs.received.fields.<a href="./src/resources/logs/received/fields.ts">get</a>(zoneIdentifier) -> FieldGetResponse</code>

# OriginTLSClientAuth

Types:

- <code><a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">TLSCertificatesAndHostnamesZoneAuthenticatedOriginPull</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">OriginTLSClientAuthCreateResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">OriginTLSClientAuthListResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">OriginTLSClientAuthDeleteResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">OriginTLSClientAuthGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/origin_tls_client_auth">client.originTLSClientAuth.<a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">create</a>({ ...params }) -> OriginTLSClientAuthCreateResponse</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth">client.originTLSClientAuth.<a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">list</a>({ ...params }) -> OriginTLSClientAuthListResponse | null</code>
- <code title="delete /zones/{zone_id}/origin_tls_client_auth/{certificate_id}">client.originTLSClientAuth.<a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">delete</a>(certificateId, { ...params }) -> OriginTLSClientAuthDeleteResponse</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/{certificate_id}">client.originTLSClientAuth.<a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">get</a>(certificateId, { ...params }) -> OriginTLSClientAuthGetResponse</code>

## Hostnames

Types:

- <code><a href="./src/resources/origin-tls-client-auth/hostnames/hostnames.ts">TLSCertificatesAndHostnamesHostnameAuthenticatedOriginPull</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/hostnames/hostnames.ts">TLSCertificatesAndHostnamesHostnameCertidObject</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/hostnames/hostnames.ts">HostnameUpdateResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/origin_tls_client_auth/hostnames">client.originTLSClientAuth.hostnames.<a href="./src/resources/origin-tls-client-auth/hostnames/hostnames.ts">update</a>({ ...params }) -> HostnameUpdateResponse | null</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/hostnames/{hostname}">client.originTLSClientAuth.hostnames.<a href="./src/resources/origin-tls-client-auth/hostnames/hostnames.ts">get</a>(hostname, { ...params }) -> TLSCertificatesAndHostnamesHostnameCertidObject</code>

### Certificates

Types:

- <code><a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">TLSCertificatesAndHostnamesSchemasCertificateObject</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">CertificateListResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates">client.originTLSClientAuth.hostnames.certificates.<a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">create</a>({ ...params }) -> TLSCertificatesAndHostnamesSchemasCertificateObject</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates">client.originTLSClientAuth.hostnames.certificates.<a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">list</a>({ ...params }) -> CertificateListResponse | null</code>
- <code title="delete /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates/{certificate_id}">client.originTLSClientAuth.hostnames.certificates.<a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">delete</a>(certificateId, { ...params }) -> TLSCertificatesAndHostnamesSchemasCertificateObject</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates/{certificate_id}">client.originTLSClientAuth.hostnames.certificates.<a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">get</a>(certificateId, { ...params }) -> TLSCertificatesAndHostnamesSchemasCertificateObject</code>

## Settings

Types:

- <code><a href="./src/resources/origin-tls-client-auth/settings.ts">SettingUpdateResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/origin_tls_client_auth/settings">client.originTLSClientAuth.settings.<a href="./src/resources/origin-tls-client-auth/settings.ts">update</a>({ ...params }) -> SettingUpdateResponse</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/settings">client.originTLSClientAuth.settings.<a href="./src/resources/origin-tls-client-auth/settings.ts">get</a>({ ...params }) -> SettingGetResponse</code>

# Pagerules

Types:

- <code><a href="./src/resources/pagerules/pagerules.ts">ZonesPageRule</a></code>
- <code><a href="./src/resources/pagerules/pagerules.ts">PageruleCreateResponse</a></code>
- <code><a href="./src/resources/pagerules/pagerules.ts">PageruleUpdateResponse</a></code>
- <code><a href="./src/resources/pagerules/pagerules.ts">PageruleListResponse</a></code>
- <code><a href="./src/resources/pagerules/pagerules.ts">PageruleDeleteResponse</a></code>
- <code><a href="./src/resources/pagerules/pagerules.ts">PageruleEditResponse</a></code>
- <code><a href="./src/resources/pagerules/pagerules.ts">PageruleGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/pagerules">client.pagerules.<a href="./src/resources/pagerules/pagerules.ts">create</a>({ ...params }) -> PageruleCreateResponse</code>
- <code title="put /zones/{zone_id}/pagerules/{pagerule_id}">client.pagerules.<a href="./src/resources/pagerules/pagerules.ts">update</a>(pageruleId, { ...params }) -> PageruleUpdateResponse</code>
- <code title="get /zones/{zone_id}/pagerules">client.pagerules.<a href="./src/resources/pagerules/pagerules.ts">list</a>({ ...params }) -> PageruleListResponse</code>
- <code title="delete /zones/{zone_id}/pagerules/{pagerule_id}">client.pagerules.<a href="./src/resources/pagerules/pagerules.ts">delete</a>(pageruleId, { ...params }) -> PageruleDeleteResponse | null</code>
- <code title="patch /zones/{zone_id}/pagerules/{pagerule_id}">client.pagerules.<a href="./src/resources/pagerules/pagerules.ts">edit</a>(pageruleId, { ...params }) -> PageruleEditResponse</code>
- <code title="get /zones/{zone_id}/pagerules/{pagerule_id}">client.pagerules.<a href="./src/resources/pagerules/pagerules.ts">get</a>(pageruleId, { ...params }) -> PageruleGetResponse</code>

## Settings

Types:

- <code><a href="./src/resources/pagerules/settings.ts">ZonesSettings</a></code>

Methods:

- <code title="get /zones/{zone_id}/pagerules/settings">client.pagerules.settings.<a href="./src/resources/pagerules/settings.ts">list</a>({ ...params }) -> ZonesSettings</code>

# RateLimits

Types:

- <code><a href="./src/resources/rate-limits.ts">LegacyJhsRateLimits</a></code>
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

- <code><a href="./src/resources/secondary-dns/force-axfrs.ts">SecondaryDNSForceResult</a></code>

Methods:

- <code title="post /zones/{zone_id}/secondary_dns/force_axfr">client.secondaryDNS.forceAxfrs.<a href="./src/resources/secondary-dns/force-axfrs.ts">create</a>({ ...params }) -> SecondaryDNSForceResult</code>

## Incoming

Types:

- <code><a href="./src/resources/secondary-dns/incoming.ts">IncomingCreateResponse</a></code>
- <code><a href="./src/resources/secondary-dns/incoming.ts">IncomingUpdateResponse</a></code>
- <code><a href="./src/resources/secondary-dns/incoming.ts">IncomingDeleteResponse</a></code>
- <code><a href="./src/resources/secondary-dns/incoming.ts">IncomingGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/secondary_dns/incoming">client.secondaryDNS.incoming.<a href="./src/resources/secondary-dns/incoming.ts">create</a>({ ...params }) -> IncomingCreateResponse</code>
- <code title="put /zones/{zone_id}/secondary_dns/incoming">client.secondaryDNS.incoming.<a href="./src/resources/secondary-dns/incoming.ts">update</a>({ ...params }) -> IncomingUpdateResponse</code>
- <code title="delete /zones/{zone_id}/secondary_dns/incoming">client.secondaryDNS.incoming.<a href="./src/resources/secondary-dns/incoming.ts">delete</a>({ ...params }) -> IncomingDeleteResponse</code>
- <code title="get /zones/{zone_id}/secondary_dns/incoming">client.secondaryDNS.incoming.<a href="./src/resources/secondary-dns/incoming.ts">get</a>({ ...params }) -> IncomingGetResponse</code>

## Outgoing

Types:

- <code><a href="./src/resources/secondary-dns/outgoing/outgoing.ts">SecondaryDNSDisableTransferResult</a></code>
- <code><a href="./src/resources/secondary-dns/outgoing/outgoing.ts">SecondaryDNSEnableTransferResult</a></code>
- <code><a href="./src/resources/secondary-dns/outgoing/outgoing.ts">SecondaryDNSSchemasForceResult</a></code>
- <code><a href="./src/resources/secondary-dns/outgoing/outgoing.ts">OutgoingCreateResponse</a></code>
- <code><a href="./src/resources/secondary-dns/outgoing/outgoing.ts">OutgoingUpdateResponse</a></code>
- <code><a href="./src/resources/secondary-dns/outgoing/outgoing.ts">OutgoingDeleteResponse</a></code>
- <code><a href="./src/resources/secondary-dns/outgoing/outgoing.ts">OutgoingGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/secondary_dns/outgoing">client.secondaryDNS.outgoing.<a href="./src/resources/secondary-dns/outgoing/outgoing.ts">create</a>({ ...params }) -> OutgoingCreateResponse</code>
- <code title="put /zones/{zone_id}/secondary_dns/outgoing">client.secondaryDNS.outgoing.<a href="./src/resources/secondary-dns/outgoing/outgoing.ts">update</a>({ ...params }) -> OutgoingUpdateResponse</code>
- <code title="delete /zones/{zone_id}/secondary_dns/outgoing">client.secondaryDNS.outgoing.<a href="./src/resources/secondary-dns/outgoing/outgoing.ts">delete</a>({ ...params }) -> OutgoingDeleteResponse</code>
- <code title="post /zones/{zone_id}/secondary_dns/outgoing/disable">client.secondaryDNS.outgoing.<a href="./src/resources/secondary-dns/outgoing/outgoing.ts">disable</a>({ ...params }) -> SecondaryDNSDisableTransferResult</code>
- <code title="post /zones/{zone_id}/secondary_dns/outgoing/enable">client.secondaryDNS.outgoing.<a href="./src/resources/secondary-dns/outgoing/outgoing.ts">enable</a>({ ...params }) -> SecondaryDNSEnableTransferResult</code>
- <code title="post /zones/{zone_id}/secondary_dns/outgoing/force_notify">client.secondaryDNS.outgoing.<a href="./src/resources/secondary-dns/outgoing/outgoing.ts">forceNotify</a>({ ...params }) -> SecondaryDNSSchemasForceResult</code>
- <code title="get /zones/{zone_id}/secondary_dns/outgoing">client.secondaryDNS.outgoing.<a href="./src/resources/secondary-dns/outgoing/outgoing.ts">get</a>({ ...params }) -> OutgoingGetResponse</code>

### Status

Methods:

- <code title="get /zones/{zone_id}/secondary_dns/outgoing/status">client.secondaryDNS.outgoing.status.<a href="./src/resources/secondary-dns/outgoing/status.ts">get</a>({ ...params }) -> SecondaryDNSEnableTransferResult</code>

## ACLs

Types:

- <code><a href="./src/resources/secondary-dns/acls.ts">SecondaryDNSACL</a></code>
- <code><a href="./src/resources/secondary-dns/acls.ts">ACLListResponse</a></code>
- <code><a href="./src/resources/secondary-dns/acls.ts">ACLDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/secondary_dns/acls">client.secondaryDNS.acls.<a href="./src/resources/secondary-dns/acls.ts">create</a>({ ...params }) -> SecondaryDNSACL</code>
- <code title="put /accounts/{account_id}/secondary_dns/acls/{acl_id}">client.secondaryDNS.acls.<a href="./src/resources/secondary-dns/acls.ts">update</a>(aclId, { ...params }) -> SecondaryDNSACL</code>
- <code title="get /accounts/{account_id}/secondary_dns/acls">client.secondaryDNS.acls.<a href="./src/resources/secondary-dns/acls.ts">list</a>({ ...params }) -> ACLListResponse | null</code>
- <code title="delete /accounts/{account_id}/secondary_dns/acls/{acl_id}">client.secondaryDNS.acls.<a href="./src/resources/secondary-dns/acls.ts">delete</a>(aclId, { ...params }) -> ACLDeleteResponse</code>
- <code title="get /accounts/{account_id}/secondary_dns/acls/{acl_id}">client.secondaryDNS.acls.<a href="./src/resources/secondary-dns/acls.ts">get</a>(aclId, { ...params }) -> SecondaryDNSACL</code>

## Peers

Types:

- <code><a href="./src/resources/secondary-dns/peers.ts">SecondaryDNSPeer</a></code>
- <code><a href="./src/resources/secondary-dns/peers.ts">PeerListResponse</a></code>
- <code><a href="./src/resources/secondary-dns/peers.ts">PeerDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/secondary_dns/peers">client.secondaryDNS.peers.<a href="./src/resources/secondary-dns/peers.ts">create</a>({ ...params }) -> SecondaryDNSPeer</code>
- <code title="put /accounts/{account_id}/secondary_dns/peers/{peer_id}">client.secondaryDNS.peers.<a href="./src/resources/secondary-dns/peers.ts">update</a>(peerId, { ...params }) -> SecondaryDNSPeer</code>
- <code title="get /accounts/{account_id}/secondary_dns/peers">client.secondaryDNS.peers.<a href="./src/resources/secondary-dns/peers.ts">list</a>({ ...params }) -> PeerListResponse | null</code>
- <code title="delete /accounts/{account_id}/secondary_dns/peers/{peer_id}">client.secondaryDNS.peers.<a href="./src/resources/secondary-dns/peers.ts">delete</a>(peerId, { ...params }) -> PeerDeleteResponse</code>
- <code title="get /accounts/{account_id}/secondary_dns/peers/{peer_id}">client.secondaryDNS.peers.<a href="./src/resources/secondary-dns/peers.ts">get</a>(peerId, { ...params }) -> SecondaryDNSPeer</code>

## TSIGs

Types:

- <code><a href="./src/resources/secondary-dns/tsigs.ts">SecondaryDNSTSIG</a></code>
- <code><a href="./src/resources/secondary-dns/tsigs.ts">TSIGListResponse</a></code>
- <code><a href="./src/resources/secondary-dns/tsigs.ts">TSIGDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/secondary_dns/tsigs">client.secondaryDNS.tsigs.<a href="./src/resources/secondary-dns/tsigs.ts">create</a>({ ...params }) -> SecondaryDNSTSIG</code>
- <code title="put /accounts/{account_id}/secondary_dns/tsigs/{tsig_id}">client.secondaryDNS.tsigs.<a href="./src/resources/secondary-dns/tsigs.ts">update</a>(tsigId, { ...params }) -> SecondaryDNSTSIG</code>
- <code title="get /accounts/{account_id}/secondary_dns/tsigs">client.secondaryDNS.tsigs.<a href="./src/resources/secondary-dns/tsigs.ts">list</a>({ ...params }) -> TSIGListResponse | null</code>
- <code title="delete /accounts/{account_id}/secondary_dns/tsigs/{tsig_id}">client.secondaryDNS.tsigs.<a href="./src/resources/secondary-dns/tsigs.ts">delete</a>(tsigId, { ...params }) -> TSIGDeleteResponse</code>
- <code title="get /accounts/{account_id}/secondary_dns/tsigs/{tsig_id}">client.secondaryDNS.tsigs.<a href="./src/resources/secondary-dns/tsigs.ts">get</a>(tsigId, { ...params }) -> SecondaryDNSTSIG</code>

# WaitingRooms

Types:

- <code><a href="./src/resources/waiting-rooms/waiting-rooms.ts">WaitingroomWaitingroom</a></code>
- <code><a href="./src/resources/waiting-rooms/waiting-rooms.ts">WaitingRoomListResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/waiting-rooms.ts">WaitingRoomDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/waiting_rooms">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">create</a>(zoneIdentifier, { ...params }) -> WaitingroomWaitingroom</code>
- <code title="put /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">update</a>(zoneIdentifier, waitingRoomId, { ...params }) -> WaitingroomWaitingroom</code>
- <code title="get /zones/{zone_identifier}/waiting_rooms">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">list</a>(zoneIdentifier) -> WaitingRoomListResponse | null</code>
- <code title="delete /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">delete</a>(zoneIdentifier, waitingRoomId) -> WaitingRoomDeleteResponse</code>
- <code title="patch /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">edit</a>(zoneIdentifier, waitingRoomId, { ...params }) -> WaitingroomWaitingroom</code>
- <code title="get /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">get</a>(zoneIdentifier, waitingRoomId) -> WaitingroomWaitingroom</code>

## Page

Types:

- <code><a href="./src/resources/waiting-rooms/page.ts">PagePreviewResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/waiting_rooms/preview">client.waitingRooms.page.<a href="./src/resources/waiting-rooms/page.ts">preview</a>(zoneIdentifier, { ...params }) -> PagePreviewResponse</code>

## Events

Types:

- <code><a href="./src/resources/waiting-rooms/events/events.ts">WaitingroomEventResult</a></code>
- <code><a href="./src/resources/waiting-rooms/events/events.ts">EventListResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/events/events.ts">EventDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">create</a>(zoneIdentifier, waitingRoomId, { ...params }) -> WaitingroomEventResult</code>
- <code title="put /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events/{event_id}">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">update</a>(zoneIdentifier, waitingRoomId, eventId, { ...params }) -> WaitingroomEventResult</code>
- <code title="get /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">list</a>(zoneIdentifier, waitingRoomId) -> EventListResponse | null</code>
- <code title="delete /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events/{event_id}">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">delete</a>(zoneIdentifier, waitingRoomId, eventId) -> EventDeleteResponse</code>
- <code title="patch /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events/{event_id}">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">edit</a>(zoneIdentifier, waitingRoomId, eventId, { ...params }) -> WaitingroomEventResult</code>
- <code title="get /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events/{event_id}">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">get</a>(zoneIdentifier, waitingRoomId, eventId) -> WaitingroomEventResult</code>

### Details

Types:

- <code><a href="./src/resources/waiting-rooms/events/details.ts">WaitingroomEventDetailsResult</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/waiting_rooms/{waiting_room_id}/events/{event_id}/details">client.waitingRooms.events.details.<a href="./src/resources/waiting-rooms/events/details.ts">get</a>(zoneIdentifier, waitingRoomId, eventId) -> WaitingroomEventDetailsResult</code>

## Rules

Types:

- <code><a href="./src/resources/waiting-rooms/rules.ts">WaitingroomRuleResult</a></code>
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

- <code><a href="./src/resources/web3/hostnames/hostnames.ts">DwebConfigWeb3Hostname</a></code>
- <code><a href="./src/resources/web3/hostnames/hostnames.ts">HostnameListResponse</a></code>
- <code><a href="./src/resources/web3/hostnames/hostnames.ts">HostnameDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/web3/hostnames">client.web3.hostnames.<a href="./src/resources/web3/hostnames/hostnames.ts">create</a>(zoneIdentifier, { ...params }) -> DwebConfigWeb3Hostname</code>
- <code title="get /zones/{zone_identifier}/web3/hostnames">client.web3.hostnames.<a href="./src/resources/web3/hostnames/hostnames.ts">list</a>(zoneIdentifier) -> HostnameListResponse | null</code>
- <code title="delete /zones/{zone_identifier}/web3/hostnames/{identifier}">client.web3.hostnames.<a href="./src/resources/web3/hostnames/hostnames.ts">delete</a>(zoneIdentifier, identifier) -> HostnameDeleteResponse | null</code>
- <code title="patch /zones/{zone_identifier}/web3/hostnames/{identifier}">client.web3.hostnames.<a href="./src/resources/web3/hostnames/hostnames.ts">edit</a>(zoneIdentifier, identifier, { ...params }) -> DwebConfigWeb3Hostname</code>
- <code title="get /zones/{zone_identifier}/web3/hostnames/{identifier}">client.web3.hostnames.<a href="./src/resources/web3/hostnames/hostnames.ts">get</a>(zoneIdentifier, identifier) -> DwebConfigWeb3Hostname</code>

### IPFSUniversalPaths

#### ContentLists

Types:

- <code><a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/content-lists.ts">DwebConfigContentListDetails</a></code>

Methods:

- <code title="put /zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list">client.web3.hostnames.ipfsUniversalPaths.contentLists.<a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/content-lists.ts">update</a>(zoneIdentifier, identifier, { ...params }) -> DwebConfigContentListDetails</code>
- <code title="get /zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list">client.web3.hostnames.ipfsUniversalPaths.contentLists.<a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/content-lists.ts">get</a>(zoneIdentifier, identifier) -> DwebConfigContentListDetails</code>

##### Entries

Types:

- <code><a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">DwebConfigContentListEntry</a></code>
- <code><a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">EntryListResponse</a></code>
- <code><a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">EntryDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries">client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.<a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">create</a>(zoneIdentifier, identifier, { ...params }) -> DwebConfigContentListEntry</code>
- <code title="put /zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{content_list_entry_identifier}">client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.<a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">update</a>(zoneIdentifier, identifier, contentListEntryIdentifier, { ...params }) -> DwebConfigContentListEntry</code>
- <code title="get /zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries">client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.<a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">list</a>(zoneIdentifier, identifier) -> EntryListResponse | null</code>
- <code title="delete /zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{content_list_entry_identifier}">client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.<a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">delete</a>(zoneIdentifier, identifier, contentListEntryIdentifier) -> EntryDeleteResponse | null</code>
- <code title="get /zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{content_list_entry_identifier}">client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.<a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/entries.ts">get</a>(zoneIdentifier, identifier, contentListEntryIdentifier) -> DwebConfigContentListEntry</code>

# Workers

## AI

Types:

- <code><a href="./src/resources/workers/ai.ts">AIRunResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/ai/run/{model_name}">client.workers.ai.<a href="./src/resources/workers/ai.ts">run</a>(modelName, { ...params }) -> AIRunResponse</code>

## Scripts

Types:

- <code><a href="./src/resources/workers/scripts/scripts.ts">WorkersScript</a></code>
- <code><a href="./src/resources/workers/scripts/scripts.ts">ScriptListResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/scripts/{script_name}">client.workers.scripts.<a href="./src/resources/workers/scripts/scripts.ts">update</a>(scriptName, { ...params }) -> WorkersScript</code>
- <code title="get /accounts/{account_id}/workers/scripts">client.workers.scripts.<a href="./src/resources/workers/scripts/scripts.ts">list</a>({ ...params }) -> ScriptListResponse</code>
- <code title="delete /accounts/{account_id}/workers/scripts/{script_name}">client.workers.scripts.<a href="./src/resources/workers/scripts/scripts.ts">delete</a>(scriptName, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}">client.workers.scripts.<a href="./src/resources/workers/scripts/scripts.ts">get</a>(scriptName, { ...params }) -> Response</code>

### Bindings

Types:

- <code><a href="./src/resources/workers/scripts/bindings.ts">WorkersSchemasBinding</a></code>
- <code><a href="./src/resources/workers/scripts/bindings.ts">BindingGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/workers/script/bindings">client.workers.scripts.bindings.<a href="./src/resources/workers/scripts/bindings.ts">get</a>({ ...params }) -> BindingGetResponse</code>

### Schedules

Types:

- <code><a href="./src/resources/workers/scripts/schedules.ts">ScheduleUpdateResponse</a></code>
- <code><a href="./src/resources/workers/scripts/schedules.ts">ScheduleGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/scripts/{script_name}/schedules">client.workers.scripts.schedules.<a href="./src/resources/workers/scripts/schedules.ts">update</a>(scriptName, { ...params }) -> ScheduleUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/schedules">client.workers.scripts.schedules.<a href="./src/resources/workers/scripts/schedules.ts">get</a>(scriptName, { ...params }) -> ScheduleGetResponse</code>

### Tail

Types:

- <code><a href="./src/resources/workers/scripts/tail.ts">TailCreateResponse</a></code>
- <code><a href="./src/resources/workers/scripts/tail.ts">TailDeleteResponse</a></code>
- <code><a href="./src/resources/workers/scripts/tail.ts">TailGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/scripts/{script_name}/tails">client.workers.scripts.tail.<a href="./src/resources/workers/scripts/tail.ts">create</a>(scriptName, { ...params }) -> TailCreateResponse</code>
- <code title="delete /accounts/{account_id}/workers/scripts/{script_name}/tails/{id}">client.workers.scripts.tail.<a href="./src/resources/workers/scripts/tail.ts">delete</a>(scriptName, id, { ...params }) -> TailDeleteResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/tails">client.workers.scripts.tail.<a href="./src/resources/workers/scripts/tail.ts">get</a>(scriptName, { ...params }) -> TailGetResponse</code>

### UsageModel

Types:

- <code><a href="./src/resources/workers/scripts/usage-model.ts">UsageModelUpdateResponse</a></code>
- <code><a href="./src/resources/workers/scripts/usage-model.ts">UsageModelGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/scripts/{script_name}/usage-model">client.workers.scripts.usageModel.<a href="./src/resources/workers/scripts/usage-model.ts">update</a>(scriptName, { ...params }) -> UsageModelUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/usage-model">client.workers.scripts.usageModel.<a href="./src/resources/workers/scripts/usage-model.ts">get</a>(scriptName, { ...params }) -> UsageModelGetResponse</code>

### Content

Methods:

- <code title="put /accounts/{account_id}/workers/scripts/{script_name}/content">client.workers.scripts.content.<a href="./src/resources/workers/scripts/content.ts">update</a>(scriptName, { ...params }) -> WorkersScript</code>

### ContentV2

Methods:

- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/content/v2">client.workers.scripts.contentV2.<a href="./src/resources/workers/scripts/content-v2.ts">get</a>(scriptName, { ...params }) -> Response</code>

### Settings

Types:

- <code><a href="./src/resources/workers/scripts/settings.ts">SettingEditResponse</a></code>
- <code><a href="./src/resources/workers/scripts/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/workers/scripts/{script_name}/settings">client.workers.scripts.settings.<a href="./src/resources/workers/scripts/settings.ts">edit</a>(scriptName, { ...params }) -> SettingEditResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/settings">client.workers.scripts.settings.<a href="./src/resources/workers/scripts/settings.ts">get</a>(scriptName, { ...params }) -> SettingGetResponse</code>

## Filters

Types:

- <code><a href="./src/resources/workers/filters.ts">WorkersFilters</a></code>
- <code><a href="./src/resources/workers/filters.ts">FilterCreateResponse</a></code>
- <code><a href="./src/resources/workers/filters.ts">FilterListResponse</a></code>
- <code><a href="./src/resources/workers/filters.ts">FilterDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/workers/filters">client.workers.filters.<a href="./src/resources/workers/filters.ts">create</a>({ ...params }) -> FilterCreateResponse | null</code>
- <code title="put /zones/{zone_id}/workers/filters/{filter_id}">client.workers.filters.<a href="./src/resources/workers/filters.ts">update</a>(filterId, { ...params }) -> WorkersFilters</code>
- <code title="get /zones/{zone_id}/workers/filters">client.workers.filters.<a href="./src/resources/workers/filters.ts">list</a>({ ...params }) -> FilterListResponse</code>
- <code title="delete /zones/{zone_id}/workers/filters/{filter_id}">client.workers.filters.<a href="./src/resources/workers/filters.ts">delete</a>(filterId, { ...params }) -> FilterDeleteResponse | null</code>

## Routes

Types:

- <code><a href="./src/resources/workers/routes.ts">WorkersRoutes</a></code>
- <code><a href="./src/resources/workers/routes.ts">RouteCreateResponse</a></code>
- <code><a href="./src/resources/workers/routes.ts">RouteListResponse</a></code>
- <code><a href="./src/resources/workers/routes.ts">RouteDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/workers/routes">client.workers.routes.<a href="./src/resources/workers/routes.ts">create</a>({ ...params }) -> RouteCreateResponse</code>
- <code title="put /zones/{zone_id}/workers/routes/{route_id}">client.workers.routes.<a href="./src/resources/workers/routes.ts">update</a>(routeId, { ...params }) -> WorkersRoutes</code>
- <code title="get /zones/{zone_id}/workers/routes">client.workers.routes.<a href="./src/resources/workers/routes.ts">list</a>({ ...params }) -> RouteListResponse</code>
- <code title="delete /zones/{zone_id}/workers/routes/{route_id}">client.workers.routes.<a href="./src/resources/workers/routes.ts">delete</a>(routeId, { ...params }) -> RouteDeleteResponse</code>
- <code title="get /zones/{zone_id}/workers/routes/{route_id}">client.workers.routes.<a href="./src/resources/workers/routes.ts">get</a>(routeId, { ...params }) -> WorkersRoutes</code>

## AccountSettings

Types:

- <code><a href="./src/resources/workers/account-settings.ts">AccountSettingUpdateResponse</a></code>
- <code><a href="./src/resources/workers/account-settings.ts">AccountSettingGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/account-settings">client.workers.accountSettings.<a href="./src/resources/workers/account-settings.ts">update</a>({ ...params }) -> AccountSettingUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/account-settings">client.workers.accountSettings.<a href="./src/resources/workers/account-settings.ts">get</a>({ ...params }) -> AccountSettingGetResponse</code>

## Deployments

### ByScripts

Types:

- <code><a href="./src/resources/workers/deployments/by-scripts/by-scripts.ts">ByScriptGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/workers/deployments/by-script/{script_id}">client.workers.deployments.byScripts.<a href="./src/resources/workers/deployments/by-scripts/by-scripts.ts">get</a>(scriptId, { ...params }) -> ByScriptGetResponse</code>

#### Details

Types:

- <code><a href="./src/resources/workers/deployments/by-scripts/details.ts">DetailGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/workers/deployments/by-script/{script_id}/detail/{deployment_id}">client.workers.deployments.byScripts.details.<a href="./src/resources/workers/deployments/by-scripts/details.ts">get</a>(scriptId, deploymentId, { ...params }) -> DetailGetResponse</code>

## Domains

Types:

- <code><a href="./src/resources/workers/domains.ts">WorkersDomain</a></code>
- <code><a href="./src/resources/workers/domains.ts">DomainListResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/domains">client.workers.domains.<a href="./src/resources/workers/domains.ts">update</a>({ ...params }) -> WorkersDomain</code>
- <code title="get /accounts/{account_id}/workers/domains">client.workers.domains.<a href="./src/resources/workers/domains.ts">list</a>({ ...params }) -> DomainListResponse</code>
- <code title="delete /accounts/{account_id}/workers/domains/{domain_id}">client.workers.domains.<a href="./src/resources/workers/domains.ts">delete</a>(domainId, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/workers/domains/{domain_id}">client.workers.domains.<a href="./src/resources/workers/domains.ts">get</a>(domainId, { ...params }) -> WorkersDomain</code>

## Subdomains

Types:

- <code><a href="./src/resources/workers/subdomains.ts">SubdomainUpdateResponse</a></code>
- <code><a href="./src/resources/workers/subdomains.ts">SubdomainGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/subdomain">client.workers.subdomains.<a href="./src/resources/workers/subdomains.ts">update</a>({ ...params }) -> SubdomainUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/subdomain">client.workers.subdomains.<a href="./src/resources/workers/subdomains.ts">get</a>({ ...params }) -> SubdomainGetResponse</code>

## Services

### Environments

#### Content

Methods:

- <code title="put /accounts/{account_id}/workers/services/{service_name}/environments/{environment_name}/content">client.workers.services.environments.content.<a href="./src/resources/workers/services/environments/content.ts">update</a>(serviceName, environmentName, { ...params }) -> WorkersScript</code>
- <code title="get /accounts/{account_id}/workers/services/{service_name}/environments/{environment_name}/content">client.workers.services.environments.content.<a href="./src/resources/workers/services/environments/content.ts">get</a>(serviceName, environmentName, { ...params }) -> Response</code>

#### Settings

Types:

- <code><a href="./src/resources/workers/services/environments/settings.ts">SettingEditResponse</a></code>
- <code><a href="./src/resources/workers/services/environments/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/workers/services/{service_name}/environments/{environment_name}/settings">client.workers.services.environments.settings.<a href="./src/resources/workers/services/environments/settings.ts">edit</a>(serviceName, environmentName, { ...params }) -> SettingEditResponse</code>
- <code title="get /accounts/{account_id}/workers/services/{service_name}/environments/{environment_name}/settings">client.workers.services.environments.settings.<a href="./src/resources/workers/services/environments/settings.ts">get</a>(serviceName, environmentName, { ...params }) -> SettingGetResponse</code>

# KV

## Namespaces

Types:

- <code><a href="./src/resources/kv/namespaces/namespaces.ts">WorkersKVNamespace</a></code>
- <code><a href="./src/resources/kv/namespaces/namespaces.ts">NamespaceUpdateResponse</a></code>
- <code><a href="./src/resources/kv/namespaces/namespaces.ts">NamespaceDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/storage/kv/namespaces">client.kv.namespaces.<a href="./src/resources/kv/namespaces/namespaces.ts">create</a>({ ...params }) -> WorkersKVNamespace</code>
- <code title="put /accounts/{account_id}/storage/kv/namespaces/{namespace_id}">client.kv.namespaces.<a href="./src/resources/kv/namespaces/namespaces.ts">update</a>(namespaceId, { ...params }) -> NamespaceUpdateResponse</code>
- <code title="get /accounts/{account_id}/storage/kv/namespaces">client.kv.namespaces.<a href="./src/resources/kv/namespaces/namespaces.ts">list</a>({ ...params }) -> WorkersKVNamespacesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/storage/kv/namespaces/{namespace_id}">client.kv.namespaces.<a href="./src/resources/kv/namespaces/namespaces.ts">delete</a>(namespaceId, { ...params }) -> NamespaceDeleteResponse</code>

### Bulk

Types:

- <code><a href="./src/resources/kv/namespaces/bulk.ts">BulkUpdateResponse</a></code>
- <code><a href="./src/resources/kv/namespaces/bulk.ts">BulkDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk">client.kv.namespaces.bulk.<a href="./src/resources/kv/namespaces/bulk.ts">update</a>(namespaceId, [ ...body ]) -> BulkUpdateResponse</code>
- <code title="delete /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk">client.kv.namespaces.bulk.<a href="./src/resources/kv/namespaces/bulk.ts">delete</a>(namespaceId, [ ...body ]) -> BulkDeleteResponse</code>

### Keys

Types:

- <code><a href="./src/resources/kv/namespaces/keys.ts">WorkersKVKey</a></code>

Methods:

- <code title="get /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/keys">client.kv.namespaces.keys.<a href="./src/resources/kv/namespaces/keys.ts">list</a>(namespaceId, { ...params }) -> WorkersKVKeysCursorLimitPagination</code>

### Metadata

Types:

- <code><a href="./src/resources/kv/namespaces/metadata.ts">MetadataGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/metadata/{key_name}">client.kv.namespaces.metadata.<a href="./src/resources/kv/namespaces/metadata.ts">get</a>(namespaceId, keyName, { ...params }) -> MetadataGetResponse</code>

### Values

Types:

- <code><a href="./src/resources/kv/namespaces/values.ts">ValueUpdateResponse</a></code>
- <code><a href="./src/resources/kv/namespaces/values.ts">ValueDeleteResponse</a></code>
- <code><a href="./src/resources/kv/namespaces/values.ts">ValueGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values/{key_name}">client.kv.namespaces.values.<a href="./src/resources/kv/namespaces/values.ts">update</a>(namespaceId, keyName, { ...params }) -> ValueUpdateResponse</code>
- <code title="delete /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values/{key_name}">client.kv.namespaces.values.<a href="./src/resources/kv/namespaces/values.ts">delete</a>(namespaceId, keyName, { ...params }) -> ValueDeleteResponse</code>
- <code title="get /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values/{key_name}">client.kv.namespaces.values.<a href="./src/resources/kv/namespaces/values.ts">get</a>(namespaceId, keyName, { ...params }) -> string</code>

# DurableObjects

## Namespaces

Types:

- <code><a href="./src/resources/durable-objects/namespaces/namespaces.ts">WorkersNamespace</a></code>
- <code><a href="./src/resources/durable-objects/namespaces/namespaces.ts">NamespaceListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/workers/durable_objects/namespaces">client.durableObjects.namespaces.<a href="./src/resources/durable-objects/namespaces/namespaces.ts">list</a>({ ...params }) -> NamespaceListResponse | null</code>

### Objects

Types:

- <code><a href="./src/resources/durable-objects/namespaces/objects.ts">WorkersObject</a></code>

Methods:

- <code title="get /accounts/{account_id}/workers/durable_objects/namespaces/{id}/objects">client.durableObjects.namespaces.objects.<a href="./src/resources/durable-objects/namespaces/objects.ts">list</a>(id, { ...params }) -> WorkersObjectsCursorLimitPagination</code>

# Queues

Types:

- <code><a href="./src/resources/queues/queues.ts">WorkersQueue</a></code>
- <code><a href="./src/resources/queues/queues.ts">WorkersQueueCreated</a></code>
- <code><a href="./src/resources/queues/queues.ts">WorkersQueueUpdated</a></code>
- <code><a href="./src/resources/queues/queues.ts">QueueListResponse</a></code>
- <code><a href="./src/resources/queues/queues.ts">QueueDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/queues">client.queues.<a href="./src/resources/queues/queues.ts">create</a>({ ...params }) -> WorkersQueueCreated | null</code>
- <code title="put /accounts/{account_id}/workers/queues/{name}">client.queues.<a href="./src/resources/queues/queues.ts">update</a>(name, { ...params }) -> WorkersQueueUpdated | null</code>
- <code title="get /accounts/{account_id}/workers/queues">client.queues.<a href="./src/resources/queues/queues.ts">list</a>({ ...params }) -> QueueListResponse | null</code>
- <code title="delete /accounts/{account_id}/workers/queues/{name}">client.queues.<a href="./src/resources/queues/queues.ts">delete</a>(name, { ...params }) -> QueueDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/workers/queues/{name}">client.queues.<a href="./src/resources/queues/queues.ts">get</a>(name, { ...params }) -> WorkersQueue | null</code>

## Consumers

Types:

- <code><a href="./src/resources/queues/consumers.ts">WorkersConsumer</a></code>
- <code><a href="./src/resources/queues/consumers.ts">WorkersConsumerCreated</a></code>
- <code><a href="./src/resources/queues/consumers.ts">WorkersConsumerUpdated</a></code>
- <code><a href="./src/resources/queues/consumers.ts">ConsumerDeleteResponse</a></code>
- <code><a href="./src/resources/queues/consumers.ts">ConsumerGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/queues/{name}/consumers">client.queues.consumers.<a href="./src/resources/queues/consumers.ts">create</a>(name, { ...params }) -> WorkersConsumerCreated | null</code>
- <code title="put /accounts/{account_id}/workers/queues/{name}/consumers/{consumer_name}">client.queues.consumers.<a href="./src/resources/queues/consumers.ts">update</a>(name, consumerName, { ...params }) -> WorkersConsumerUpdated | null</code>
- <code title="delete /accounts/{account_id}/workers/queues/{name}/consumers/{consumer_name}">client.queues.consumers.<a href="./src/resources/queues/consumers.ts">delete</a>(name, consumerName, { ...params }) -> ConsumerDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/workers/queues/{name}/consumers">client.queues.consumers.<a href="./src/resources/queues/consumers.ts">get</a>(name, { ...params }) -> ConsumerGetResponse | null</code>

# ManagedHeaders

Types:

- <code><a href="./src/resources/managed-headers.ts">ManagedHeaderListResponse</a></code>
- <code><a href="./src/resources/managed-headers.ts">ManagedHeaderEditResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/managed_headers">client.managedHeaders.<a href="./src/resources/managed-headers.ts">list</a>({ ...params }) -> ManagedHeaderListResponse</code>
- <code title="patch /zones/{zone_id}/managed_headers">client.managedHeaders.<a href="./src/resources/managed-headers.ts">edit</a>({ ...params }) -> ManagedHeaderEditResponse</code>

# PageShield

Types:

- <code><a href="./src/resources/page-shield/page-shield.ts">PageShieldGetZoneSettings</a></code>
- <code><a href="./src/resources/page-shield/page-shield.ts">PageShieldUpdateZoneSettings</a></code>

Methods:

- <code title="put /zones/{zone_id}/page_shield">client.pageShield.<a href="./src/resources/page-shield/page-shield.ts">update</a>({ ...params }) -> PageShieldUpdateZoneSettings</code>
- <code title="get /zones/{zone_id}/page_shield">client.pageShield.<a href="./src/resources/page-shield/page-shield.ts">get</a>({ ...params }) -> PageShieldGetZoneSettings</code>

## Policies

Types:

- <code><a href="./src/resources/page-shield/policies.ts">PageShieldPageshieldPolicy</a></code>
- <code><a href="./src/resources/page-shield/policies.ts">PolicyListResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/page_shield/policies">client.pageShield.policies.<a href="./src/resources/page-shield/policies.ts">create</a>({ ...params }) -> PageShieldPageshieldPolicy</code>
- <code title="put /zones/{zone_id}/page_shield/policies/{policy_id}">client.pageShield.policies.<a href="./src/resources/page-shield/policies.ts">update</a>(policyId, { ...params }) -> PageShieldPageshieldPolicy</code>
- <code title="get /zones/{zone_id}/page_shield/policies">client.pageShield.policies.<a href="./src/resources/page-shield/policies.ts">list</a>({ ...params }) -> PolicyListResponse | null</code>
- <code title="delete /zones/{zone_id}/page_shield/policies/{policy_id}">client.pageShield.policies.<a href="./src/resources/page-shield/policies.ts">delete</a>(policyId, { ...params }) -> void</code>
- <code title="get /zones/{zone_id}/page_shield/policies/{policy_id}">client.pageShield.policies.<a href="./src/resources/page-shield/policies.ts">get</a>(policyId, { ...params }) -> PageShieldPageshieldPolicy</code>

## Connections

Types:

- <code><a href="./src/resources/page-shield/connections.ts">PageShieldConnection</a></code>
- <code><a href="./src/resources/page-shield/connections.ts">ConnectionListResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/page_shield/connections">client.pageShield.connections.<a href="./src/resources/page-shield/connections.ts">list</a>({ ...params }) -> ConnectionListResponse | null</code>
- <code title="get /zones/{zone_id}/page_shield/connections/{connection_id}">client.pageShield.connections.<a href="./src/resources/page-shield/connections.ts">get</a>(connectionId, { ...params }) -> PageShieldConnection</code>

## Scripts

Types:

- <code><a href="./src/resources/page-shield/scripts.ts">PageShieldScript</a></code>
- <code><a href="./src/resources/page-shield/scripts.ts">ScriptListResponse</a></code>
- <code><a href="./src/resources/page-shield/scripts.ts">ScriptGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/page_shield/scripts">client.pageShield.scripts.<a href="./src/resources/page-shield/scripts.ts">list</a>({ ...params }) -> ScriptListResponse | null</code>
- <code title="get /zones/{zone_id}/page_shield/scripts/{script_id}">client.pageShield.scripts.<a href="./src/resources/page-shield/scripts.ts">get</a>(scriptId, { ...params }) -> ScriptGetResponse</code>

# Rulesets

Types:

- <code><a href="./src/resources/rulesets/rulesets.ts">RulesetsRulesetResponse</a></code>
- <code><a href="./src/resources/rulesets/rulesets.ts">RulesetsRulesetsResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/rulesets">client.rulesets.<a href="./src/resources/rulesets/rulesets.ts">create</a>({ ...params }) -> RulesetsRulesetResponse</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}">client.rulesets.<a href="./src/resources/rulesets/rulesets.ts">update</a>(rulesetId, { ...params }) -> RulesetsRulesetResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/rulesets">client.rulesets.<a href="./src/resources/rulesets/rulesets.ts">list</a>({ ...params }) -> RulesetsRulesetsResponse</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}">client.rulesets.<a href="./src/resources/rulesets/rulesets.ts">delete</a>(rulesetId, { ...params }) -> void</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}">client.rulesets.<a href="./src/resources/rulesets/rulesets.ts">get</a>(rulesetId, { ...params }) -> RulesetsRulesetResponse</code>

## Phases

Methods:

- <code title="put /{account_or_zone}/{account_or_zone_id}/rulesets/phases/{ruleset_phase}/entrypoint">client.rulesets.phases.<a href="./src/resources/rulesets/phases/phases.ts">update</a>(rulesetPhase, { ...params }) -> RulesetsRulesetResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/rulesets/phases/{ruleset_phase}/entrypoint">client.rulesets.phases.<a href="./src/resources/rulesets/phases/phases.ts">get</a>(rulesetPhase, { ...params }) -> RulesetsRulesetResponse</code>

### Versions

Methods:

- <code title="get /{account_or_zone}/{account_or_zone_id}/rulesets/phases/{ruleset_phase}/entrypoint/versions">client.rulesets.phases.versions.<a href="./src/resources/rulesets/phases/versions.ts">list</a>(rulesetPhase, { ...params }) -> RulesetsRulesetsResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/rulesets/phases/{ruleset_phase}/entrypoint/versions/{ruleset_version}">client.rulesets.phases.versions.<a href="./src/resources/rulesets/phases/versions.ts">get</a>(rulesetPhase, rulesetVersion, { ...params }) -> RulesetsRulesetResponse</code>

## Rules

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}/rules">client.rulesets.rules.<a href="./src/resources/rulesets/rules.ts">create</a>(rulesetId, { ...params }) -> RulesetsRulesetResponse</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}/rules/{rule_id}">client.rulesets.rules.<a href="./src/resources/rulesets/rules.ts">delete</a>(rulesetId, ruleId, { ...params }) -> RulesetsRulesetResponse</code>
- <code title="patch /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}/rules/{rule_id}">client.rulesets.rules.<a href="./src/resources/rulesets/rules.ts">edit</a>(rulesetId, ruleId, { ...params }) -> RulesetsRulesetResponse</code>

## Versions

Methods:

- <code title="get /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}/versions">client.rulesets.versions.<a href="./src/resources/rulesets/versions/versions.ts">list</a>(rulesetId, { ...params }) -> RulesetsRulesetsResponse</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}/versions/{ruleset_version}">client.rulesets.versions.<a href="./src/resources/rulesets/versions/versions.ts">delete</a>(rulesetId, rulesetVersion, { ...params }) -> void</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}/versions/{ruleset_version}">client.rulesets.versions.<a href="./src/resources/rulesets/versions/versions.ts">get</a>(rulesetId, rulesetVersion, { ...params }) -> RulesetsRulesetResponse</code>

### ByTags

Methods:

- <code title="get /accounts/{account_id}/rulesets/{ruleset_id}/versions/{ruleset_version}/by_tag/{rule_tag}">client.rulesets.versions.byTags.<a href="./src/resources/rulesets/versions/by-tags.ts">get</a>(rulesetId, rulesetVersion, ruleTag, { ...params }) -> RulesetsRulesetResponse</code>

# URLNormalization

Types:

- <code><a href="./src/resources/url-normalization.ts">URLNormalizationUpdateResponse</a></code>
- <code><a href="./src/resources/url-normalization.ts">URLNormalizationGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/url_normalization">client.urlNormalization.<a href="./src/resources/url-normalization.ts">update</a>({ ...params }) -> URLNormalizationUpdateResponse</code>
- <code title="get /zones/{zone_id}/url_normalization">client.urlNormalization.<a href="./src/resources/url-normalization.ts">get</a>({ ...params }) -> URLNormalizationGetResponse</code>

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

# Addressing

## Services

Types:

- <code><a href="./src/resources/addressing/services.ts">ServiceListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/addressing/services">client.addressing.services.<a href="./src/resources/addressing/services.ts">list</a>({ ...params }) -> ServiceListResponse</code>

## AddressMaps

Types:

- <code><a href="./src/resources/addressing/address-maps/address-maps.ts">AddressingAddressMaps</a></code>
- <code><a href="./src/resources/addressing/address-maps/address-maps.ts">AddressMapCreateResponse</a></code>
- <code><a href="./src/resources/addressing/address-maps/address-maps.ts">AddressMapListResponse</a></code>
- <code><a href="./src/resources/addressing/address-maps/address-maps.ts">AddressMapDeleteResponse</a></code>
- <code><a href="./src/resources/addressing/address-maps/address-maps.ts">AddressMapGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/addressing/address_maps">client.addressing.addressMaps.<a href="./src/resources/addressing/address-maps/address-maps.ts">create</a>({ ...params }) -> AddressMapCreateResponse</code>
- <code title="get /accounts/{account_id}/addressing/address_maps">client.addressing.addressMaps.<a href="./src/resources/addressing/address-maps/address-maps.ts">list</a>({ ...params }) -> AddressMapListResponse | null</code>
- <code title="delete /accounts/{account_id}/addressing/address_maps/{address_map_id}">client.addressing.addressMaps.<a href="./src/resources/addressing/address-maps/address-maps.ts">delete</a>(addressMapId, { ...params }) -> AddressMapDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/addressing/address_maps/{address_map_id}">client.addressing.addressMaps.<a href="./src/resources/addressing/address-maps/address-maps.ts">edit</a>(addressMapId, { ...params }) -> AddressingAddressMaps</code>
- <code title="get /accounts/{account_id}/addressing/address_maps/{address_map_id}">client.addressing.addressMaps.<a href="./src/resources/addressing/address-maps/address-maps.ts">get</a>(addressMapId, { ...params }) -> AddressMapGetResponse</code>

### Accounts

Types:

- <code><a href="./src/resources/addressing/address-maps/accounts.ts">AccountUpdateResponse</a></code>
- <code><a href="./src/resources/addressing/address-maps/accounts.ts">AccountDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/addressing/address_maps/{address_map_id}/accounts/{account_id}">client.addressing.addressMaps.accounts.<a href="./src/resources/addressing/address-maps/accounts.ts">update</a>(addressMapId, { ...params }) -> AccountUpdateResponse | null</code>
- <code title="delete /accounts/{account_id}/addressing/address_maps/{address_map_id}/accounts/{account_id}">client.addressing.addressMaps.accounts.<a href="./src/resources/addressing/address-maps/accounts.ts">delete</a>(addressMapId, { ...params }) -> AccountDeleteResponse | null</code>

### IPs

Types:

- <code><a href="./src/resources/addressing/address-maps/ips.ts">IPUpdateResponse</a></code>
- <code><a href="./src/resources/addressing/address-maps/ips.ts">IPDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/addressing/address_maps/{address_map_id}/ips/{ip_address}">client.addressing.addressMaps.ips.<a href="./src/resources/addressing/address-maps/ips.ts">update</a>(addressMapId, ipAddress, { ...params }) -> IPUpdateResponse | null</code>
- <code title="delete /accounts/{account_id}/addressing/address_maps/{address_map_id}/ips/{ip_address}">client.addressing.addressMaps.ips.<a href="./src/resources/addressing/address-maps/ips.ts">delete</a>(addressMapId, ipAddress, { ...params }) -> IPDeleteResponse | null</code>

### Zones

Types:

- <code><a href="./src/resources/addressing/address-maps/zones.ts">ZoneUpdateResponse</a></code>
- <code><a href="./src/resources/addressing/address-maps/zones.ts">ZoneDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/addressing/address_maps/{address_map_id}/zones/{zone_id}">client.addressing.addressMaps.zones.<a href="./src/resources/addressing/address-maps/zones.ts">update</a>(addressMapId, { ...params }) -> ZoneUpdateResponse | null</code>
- <code title="delete /accounts/{account_id}/addressing/address_maps/{address_map_id}/zones/{zone_id}">client.addressing.addressMaps.zones.<a href="./src/resources/addressing/address-maps/zones.ts">delete</a>(addressMapId, { ...params }) -> ZoneDeleteResponse | null</code>

## LOADocuments

Types:

- <code><a href="./src/resources/addressing/loa-documents/loa-documents.ts">LOADocumentCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/addressing/loa_documents">client.addressing.loaDocuments.<a href="./src/resources/addressing/loa-documents/loa-documents.ts">create</a>({ ...params }) -> LOADocumentCreateResponse</code>

### Downloads

Types:

- <code><a href="./src/resources/addressing/loa-documents/downloads.ts">DownloadGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/addressing/loa_documents/{loa_document_id}/download">client.addressing.loaDocuments.downloads.<a href="./src/resources/addressing/loa-documents/downloads.ts">get</a>(loaDocumentId, { ...params }) -> unknown</code>

## Prefixes

Types:

- <code><a href="./src/resources/addressing/prefixes/prefixes.ts">AddressingIpamPrefixes</a></code>
- <code><a href="./src/resources/addressing/prefixes/prefixes.ts">PrefixListResponse</a></code>
- <code><a href="./src/resources/addressing/prefixes/prefixes.ts">PrefixDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/addressing/prefixes">client.addressing.prefixes.<a href="./src/resources/addressing/prefixes/prefixes.ts">create</a>({ ...params }) -> AddressingIpamPrefixes</code>
- <code title="get /accounts/{account_id}/addressing/prefixes">client.addressing.prefixes.<a href="./src/resources/addressing/prefixes/prefixes.ts">list</a>({ ...params }) -> PrefixListResponse | null</code>
- <code title="delete /accounts/{account_id}/addressing/prefixes/{prefix_id}">client.addressing.prefixes.<a href="./src/resources/addressing/prefixes/prefixes.ts">delete</a>(prefixId, { ...params }) -> PrefixDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/addressing/prefixes/{prefix_id}">client.addressing.prefixes.<a href="./src/resources/addressing/prefixes/prefixes.ts">edit</a>(prefixId, { ...params }) -> AddressingIpamPrefixes</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}">client.addressing.prefixes.<a href="./src/resources/addressing/prefixes/prefixes.ts">get</a>(prefixId, { ...params }) -> AddressingIpamPrefixes</code>

### BGP

#### Bindings

Types:

- <code><a href="./src/resources/addressing/prefixes/bgp/bindings.ts">AddressingServiceBinding</a></code>
- <code><a href="./src/resources/addressing/prefixes/bgp/bindings.ts">BindingListResponse</a></code>
- <code><a href="./src/resources/addressing/prefixes/bgp/bindings.ts">BindingDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings">client.addressing.prefixes.bgp.bindings.<a href="./src/resources/addressing/prefixes/bgp/bindings.ts">create</a>(prefixId, { ...params }) -> AddressingServiceBinding</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings">client.addressing.prefixes.bgp.bindings.<a href="./src/resources/addressing/prefixes/bgp/bindings.ts">list</a>(prefixId, { ...params }) -> BindingListResponse</code>
- <code title="delete /accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings/{binding_id}">client.addressing.prefixes.bgp.bindings.<a href="./src/resources/addressing/prefixes/bgp/bindings.ts">delete</a>(prefixId, bindingId, { ...params }) -> BindingDeleteResponse</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings/{binding_id}">client.addressing.prefixes.bgp.bindings.<a href="./src/resources/addressing/prefixes/bgp/bindings.ts">get</a>(prefixId, bindingId, { ...params }) -> AddressingServiceBinding</code>

#### Prefixes

Types:

- <code><a href="./src/resources/addressing/prefixes/bgp/prefixes.ts">AddressingIpamBGPPrefixes</a></code>
- <code><a href="./src/resources/addressing/prefixes/bgp/prefixes.ts">PrefixListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes">client.addressing.prefixes.bgp.prefixes.<a href="./src/resources/addressing/prefixes/bgp/prefixes.ts">list</a>(prefixId, { ...params }) -> PrefixListResponse | null</code>
- <code title="patch /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes/{bgp_prefix_id}">client.addressing.prefixes.bgp.prefixes.<a href="./src/resources/addressing/prefixes/bgp/prefixes.ts">edit</a>(prefixId, bgpPrefixId, { ...params }) -> AddressingIpamBGPPrefixes</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes/{bgp_prefix_id}">client.addressing.prefixes.bgp.prefixes.<a href="./src/resources/addressing/prefixes/bgp/prefixes.ts">get</a>(prefixId, bgpPrefixId, { ...params }) -> AddressingIpamBGPPrefixes</code>

#### Statuses

Types:

- <code><a href="./src/resources/addressing/prefixes/bgp/statuses.ts">StatusEditResponse</a></code>
- <code><a href="./src/resources/addressing/prefixes/bgp/statuses.ts">StatusGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/status">client.addressing.prefixes.bgp.statuses.<a href="./src/resources/addressing/prefixes/bgp/statuses.ts">edit</a>(prefixId, { ...params }) -> StatusEditResponse</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/status">client.addressing.prefixes.bgp.statuses.<a href="./src/resources/addressing/prefixes/bgp/statuses.ts">get</a>(prefixId, { ...params }) -> StatusGetResponse</code>

### Delegations

Types:

- <code><a href="./src/resources/addressing/prefixes/delegations.ts">AddressingIpamDelegations</a></code>
- <code><a href="./src/resources/addressing/prefixes/delegations.ts">DelegationListResponse</a></code>
- <code><a href="./src/resources/addressing/prefixes/delegations.ts">DelegationDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/addressing/prefixes/{prefix_id}/delegations">client.addressing.prefixes.delegations.<a href="./src/resources/addressing/prefixes/delegations.ts">create</a>(prefixId, { ...params }) -> AddressingIpamDelegations</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/delegations">client.addressing.prefixes.delegations.<a href="./src/resources/addressing/prefixes/delegations.ts">list</a>(prefixId, { ...params }) -> DelegationListResponse | null</code>
- <code title="delete /accounts/{account_id}/addressing/prefixes/{prefix_id}/delegations/{delegation_id}">client.addressing.prefixes.delegations.<a href="./src/resources/addressing/prefixes/delegations.ts">delete</a>(prefixId, delegationId, { ...params }) -> DelegationDeleteResponse</code>

# AuditLogs

Types:

- <code><a href="./src/resources/audit-logs.ts">AuditLogListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/audit_logs">client.auditLogs.<a href="./src/resources/audit-logs.ts">list</a>({ ...params }) -> AuditLogListResponsesV4PagePaginationArray</code>

# Billing

## Profiles

Types:

- <code><a href="./src/resources/billing/profiles.ts">ProfileGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/billing/profile">client.billing.profiles.<a href="./src/resources/billing/profiles.ts">get</a>(accountIdentifier) -> ProfileGetResponse</code>

# BrandProtection

Types:

- <code><a href="./src/resources/brand-protection.ts">IntelPhishingURLInfo</a></code>
- <code><a href="./src/resources/brand-protection.ts">IntelPhishingURLSubmit</a></code>

Methods:

- <code title="post /accounts/{account_id}/brand-protection/submit">client.brandProtection.<a href="./src/resources/brand-protection.ts">submit</a>({ ...params }) -> IntelPhishingURLSubmit</code>
- <code title="get /accounts/{account_id}/brand-protection/url-info">client.brandProtection.<a href="./src/resources/brand-protection.ts">urlInfo</a>({ ...params }) -> IntelPhishingURLInfo</code>

# Diagnostics

## Traceroutes

Types:

- <code><a href="./src/resources/diagnostics/traceroutes.ts">MagicTransitTargetResult</a></code>
- <code><a href="./src/resources/diagnostics/traceroutes.ts">TracerouteCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/diagnostics/traceroute">client.diagnostics.traceroutes.<a href="./src/resources/diagnostics/traceroutes.ts">create</a>({ ...params }) -> TracerouteCreateResponse | null</code>

# Images

## V1

Types:

- <code><a href="./src/resources/images/v1/v1.ts">ImagesImage</a></code>
- <code><a href="./src/resources/images/v1/v1.ts">V1ListResponse</a></code>
- <code><a href="./src/resources/images/v1/v1.ts">V1DeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/images/v1">client.images.v1.<a href="./src/resources/images/v1/v1.ts">create</a>({ ...params }) -> ImagesImage</code>
- <code title="get /accounts/{account_id}/images/v1">client.images.v1.<a href="./src/resources/images/v1/v1.ts">list</a>({ ...params }) -> V1ListResponsesV4PagePagination</code>
- <code title="delete /accounts/{account_id}/images/v1/{image_id}">client.images.v1.<a href="./src/resources/images/v1/v1.ts">delete</a>(imageId, { ...params }) -> V1DeleteResponse</code>
- <code title="patch /accounts/{account_id}/images/v1/{image_id}">client.images.v1.<a href="./src/resources/images/v1/v1.ts">edit</a>(imageId, { ...params }) -> ImagesImage</code>
- <code title="get /accounts/{account_id}/images/v1/{image_id}">client.images.v1.<a href="./src/resources/images/v1/v1.ts">get</a>(imageId, { ...params }) -> ImagesImage</code>

### Keys

Types:

- <code><a href="./src/resources/images/v1/keys.ts">ImagesImageKeys</a></code>

Methods:

- <code title="put /accounts/{account_id}/images/v1/keys/{signing_key_name}">client.images.v1.keys.<a href="./src/resources/images/v1/keys.ts">update</a>(signingKeyName, { ...params }) -> ImagesImageKeys</code>
- <code title="get /accounts/{account_id}/images/v1/keys">client.images.v1.keys.<a href="./src/resources/images/v1/keys.ts">list</a>({ ...params }) -> ImagesImageKeys</code>
- <code title="delete /accounts/{account_id}/images/v1/keys/{signing_key_name}">client.images.v1.keys.<a href="./src/resources/images/v1/keys.ts">delete</a>(signingKeyName, { ...params }) -> ImagesImageKeys</code>

### Stats

Types:

- <code><a href="./src/resources/images/v1/stats.ts">ImagesImagesStats</a></code>

Methods:

- <code title="get /accounts/{account_id}/images/v1/stats">client.images.v1.stats.<a href="./src/resources/images/v1/stats.ts">get</a>({ ...params }) -> ImagesImagesStats</code>

### Variants

Types:

- <code><a href="./src/resources/images/v1/variants.ts">ImageVariant</a></code>
- <code><a href="./src/resources/images/v1/variants.ts">ImageVariants</a></code>
- <code><a href="./src/resources/images/v1/variants.ts">VariantDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/images/v1/variants">client.images.v1.variants.<a href="./src/resources/images/v1/variants.ts">create</a>({ ...params }) -> ImageVariant</code>
- <code title="get /accounts/{account_id}/images/v1/variants">client.images.v1.variants.<a href="./src/resources/images/v1/variants.ts">list</a>({ ...params }) -> ImageVariants</code>
- <code title="delete /accounts/{account_id}/images/v1/variants/{variant_id}">client.images.v1.variants.<a href="./src/resources/images/v1/variants.ts">delete</a>(variantId, { ...params }) -> VariantDeleteResponse</code>
- <code title="patch /accounts/{account_id}/images/v1/variants/{variant_id}">client.images.v1.variants.<a href="./src/resources/images/v1/variants.ts">edit</a>(variantId, { ...params }) -> ImageVariant</code>
- <code title="get /accounts/{account_id}/images/v1/variants/{variant_id}">client.images.v1.variants.<a href="./src/resources/images/v1/variants.ts">get</a>(variantId, { ...params }) -> ImageVariant</code>

### Blobs

Methods:

- <code title="get /accounts/{account_id}/images/v1/{image_id}/blob">client.images.v1.blobs.<a href="./src/resources/images/v1/blobs.ts">get</a>(imageId, { ...params }) -> Response</code>

## V2

Types:

- <code><a href="./src/resources/images/v2/v2.ts">V2ListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/images/v2">client.images.v2.<a href="./src/resources/images/v2/v2.ts">list</a>({ ...params }) -> V2ListResponse</code>

### DirectUploads

Types:

- <code><a href="./src/resources/images/v2/direct-uploads.ts">DirectUploadCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/images/v2/direct_upload">client.images.v2.directUploads.<a href="./src/resources/images/v2/direct-uploads.ts">create</a>({ ...params }) -> DirectUploadCreateResponse</code>

# Intel

## ASN

Types:

- <code><a href="./src/resources/intel/asn/asn.ts">IntelASN</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/asn/{asn}">client.intel.asn.<a href="./src/resources/intel/asn/asn.ts">get</a>(asn, { ...params }) -> IntelASN</code>

### Subnets

Types:

- <code><a href="./src/resources/intel/asn/subnets.ts">SubnetGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/asn/{asn}/subnets">client.intel.asn.subnets.<a href="./src/resources/intel/asn/subnets.ts">get</a>(asn, { ...params }) -> SubnetGetResponse</code>

## DNS

Types:

- <code><a href="./src/resources/intel/dns.ts">IntelPassiveDNSByIP</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/dns">client.intel.dns.<a href="./src/resources/intel/dns.ts">get</a>({ ...params }) -> IntelPassiveDNSByIP</code>

## Domains

Types:

- <code><a href="./src/resources/intel/domains/domains.ts">IntelDomain</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/domain">client.intel.domains.<a href="./src/resources/intel/domains/domains.ts">get</a>({ ...params }) -> IntelDomain</code>

### Bulks

Types:

- <code><a href="./src/resources/intel/domains/bulks.ts">BulkGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/domain/bulk">client.intel.domains.bulks.<a href="./src/resources/intel/domains/bulks.ts">get</a>({ ...params }) -> BulkGetResponse | null</code>

## DomainHistory

Types:

- <code><a href="./src/resources/intel/domain-history.ts">IntelDomainHistory</a></code>
- <code><a href="./src/resources/intel/domain-history.ts">DomainHistoryGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/domain-history">client.intel.domainHistory.<a href="./src/resources/intel/domain-history.ts">get</a>({ ...params }) -> DomainHistoryGetResponse | null</code>

## IPs

Types:

- <code><a href="./src/resources/intel/ips.ts">IntelSchemasIP</a></code>
- <code><a href="./src/resources/intel/ips.ts">IPGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/ip">client.intel.ips.<a href="./src/resources/intel/ips.ts">get</a>({ ...params }) -> IPGetResponse | null</code>

## IPLists

Types:

- <code><a href="./src/resources/intel/ip-lists.ts">IntelIPList</a></code>
- <code><a href="./src/resources/intel/ip-lists.ts">IPListGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/ip-list">client.intel.ipLists.<a href="./src/resources/intel/ip-lists.ts">get</a>({ ...params }) -> IPListGetResponse | null</code>

## Miscategorizations

Types:

- <code><a href="./src/resources/intel/miscategorizations.ts">MiscategorizationCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/intel/miscategorization">client.intel.miscategorizations.<a href="./src/resources/intel/miscategorizations.ts">create</a>({ ...params }) -> MiscategorizationCreateResponse</code>

## Whois

Types:

- <code><a href="./src/resources/intel/whois.ts">IntelWhois</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/whois">client.intel.whois.<a href="./src/resources/intel/whois.ts">get</a>({ ...params }) -> IntelWhois</code>

## IndicatorFeeds

Types:

- <code><a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">IntelIndicatorFeedItem</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">IntelIndicatorFeedMetadata</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">IntelUpdateFeed</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">IndicatorFeedListResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">IndicatorFeedDataResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/intel/indicator-feeds">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">create</a>({ ...params }) -> IntelIndicatorFeedItem</code>
- <code title="put /accounts/{account_id}/intel/indicator-feeds/{feed_id}/snapshot">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">update</a>(feedId, { ...params }) -> IntelUpdateFeed</code>
- <code title="get /accounts/{account_id}/intel/indicator-feeds">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">list</a>({ ...params }) -> IndicatorFeedListResponse</code>
- <code title="get /accounts/{account_id}/intel/indicator-feeds/{feed_id}/data">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">data</a>(feedId, { ...params }) -> string</code>
- <code title="get /accounts/{account_id}/intel/indicator-feeds/{feed_id}">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">get</a>(feedId, { ...params }) -> IntelIndicatorFeedMetadata</code>

### Permissions

Types:

- <code><a href="./src/resources/intel/indicator-feeds/permissions.ts">IntelPermissionListItem</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/permissions.ts">IntelPermissionsUpdate</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/permissions.ts">PermissionListResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/intel/indicator-feeds/permissions/add">client.intel.indicatorFeeds.permissions.<a href="./src/resources/intel/indicator-feeds/permissions.ts">create</a>({ ...params }) -> IntelPermissionsUpdate</code>
- <code title="get /accounts/{account_id}/intel/indicator-feeds/permissions/view">client.intel.indicatorFeeds.permissions.<a href="./src/resources/intel/indicator-feeds/permissions.ts">list</a>({ ...params }) -> PermissionListResponse</code>
- <code title="put /accounts/{account_id}/intel/indicator-feeds/permissions/remove">client.intel.indicatorFeeds.permissions.<a href="./src/resources/intel/indicator-feeds/permissions.ts">delete</a>({ ...params }) -> IntelPermissionsUpdate</code>

## Sinkholes

Types:

- <code><a href="./src/resources/intel/sinkholes.ts">IntelSinkholesSinkholeItem</a></code>
- <code><a href="./src/resources/intel/sinkholes.ts">SinkholeListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/sinkholes">client.intel.sinkholes.<a href="./src/resources/intel/sinkholes.ts">list</a>({ ...params }) -> SinkholeListResponse</code>

## AttackSurfaceReport

### IssueTypes

Types:

- <code><a href="./src/resources/intel/attack-surface-report/issue-types.ts">IssueTypeGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/attack-surface-report/issue-types">client.intel.attackSurfaceReport.issueTypes.<a href="./src/resources/intel/attack-surface-report/issue-types.ts">get</a>({ ...params }) -> IssueTypeGetResponse</code>

### Issues

Types:

- <code><a href="./src/resources/intel/attack-surface-report/issues.ts">IssueListResponse</a></code>
- <code><a href="./src/resources/intel/attack-surface-report/issues.ts">IssueClassResponse</a></code>
- <code><a href="./src/resources/intel/attack-surface-report/issues.ts">IssueDismissResponse</a></code>
- <code><a href="./src/resources/intel/attack-surface-report/issues.ts">IssueSeverityResponse</a></code>
- <code><a href="./src/resources/intel/attack-surface-report/issues.ts">IssueTypeResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/attack-surface-report/issues">client.intel.attackSurfaceReport.issues.<a href="./src/resources/intel/attack-surface-report/issues.ts">list</a>({ ...params }) -> IssueListResponsesV4PagePagination</code>
- <code title="get /accounts/{account_id}/intel/attack-surface-report/issues/class">client.intel.attackSurfaceReport.issues.<a href="./src/resources/intel/attack-surface-report/issues.ts">class</a>({ ...params }) -> IssueClassResponse</code>
- <code title="put /accounts/{account_id}/intel/attack-surface-report/{issue_id}/dismiss">client.intel.attackSurfaceReport.issues.<a href="./src/resources/intel/attack-surface-report/issues.ts">dismiss</a>(issueId, { ...params }) -> IssueDismissResponse</code>
- <code title="get /accounts/{account_id}/intel/attack-surface-report/issues/severity">client.intel.attackSurfaceReport.issues.<a href="./src/resources/intel/attack-surface-report/issues.ts">severity</a>({ ...params }) -> IssueSeverityResponse</code>
- <code title="get /accounts/{account_id}/intel/attack-surface-report/issues/type">client.intel.attackSurfaceReport.issues.<a href="./src/resources/intel/attack-surface-report/issues.ts">type</a>({ ...params }) -> IssueTypeResponse</code>

# MagicTransit

## CfInterconnects

Types:

- <code><a href="./src/resources/magic-transit/cf-interconnects.ts">CfInterconnectUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/cf-interconnects.ts">CfInterconnectListResponse</a></code>
- <code><a href="./src/resources/magic-transit/cf-interconnects.ts">CfInterconnectGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_identifier}/magic/cf_interconnects/{tunnel_identifier}">client.magicTransit.cfInterconnects.<a href="./src/resources/magic-transit/cf-interconnects.ts">update</a>(accountIdentifier, tunnelIdentifier, { ...params }) -> CfInterconnectUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/magic/cf_interconnects">client.magicTransit.cfInterconnects.<a href="./src/resources/magic-transit/cf-interconnects.ts">list</a>(accountIdentifier) -> CfInterconnectListResponse</code>
- <code title="get /accounts/{account_identifier}/magic/cf_interconnects/{tunnel_identifier}">client.magicTransit.cfInterconnects.<a href="./src/resources/magic-transit/cf-interconnects.ts">get</a>(accountIdentifier, tunnelIdentifier) -> CfInterconnectGetResponse</code>

## GRETunnels

Types:

- <code><a href="./src/resources/magic-transit/gre-tunnels.ts">GRETunnelCreateResponse</a></code>
- <code><a href="./src/resources/magic-transit/gre-tunnels.ts">GRETunnelUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/gre-tunnels.ts">GRETunnelListResponse</a></code>
- <code><a href="./src/resources/magic-transit/gre-tunnels.ts">GRETunnelDeleteResponse</a></code>
- <code><a href="./src/resources/magic-transit/gre-tunnels.ts">GRETunnelGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/magic/gre_tunnels">client.magicTransit.greTunnels.<a href="./src/resources/magic-transit/gre-tunnels.ts">create</a>(accountIdentifier, { ...params }) -> GRETunnelCreateResponse</code>
- <code title="put /accounts/{account_identifier}/magic/gre_tunnels/{tunnel_identifier}">client.magicTransit.greTunnels.<a href="./src/resources/magic-transit/gre-tunnels.ts">update</a>(accountIdentifier, tunnelIdentifier, { ...params }) -> GRETunnelUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/magic/gre_tunnels">client.magicTransit.greTunnels.<a href="./src/resources/magic-transit/gre-tunnels.ts">list</a>(accountIdentifier) -> GRETunnelListResponse</code>
- <code title="delete /accounts/{account_identifier}/magic/gre_tunnels/{tunnel_identifier}">client.magicTransit.greTunnels.<a href="./src/resources/magic-transit/gre-tunnels.ts">delete</a>(accountIdentifier, tunnelIdentifier) -> GRETunnelDeleteResponse</code>
- <code title="get /accounts/{account_identifier}/magic/gre_tunnels/{tunnel_identifier}">client.magicTransit.greTunnels.<a href="./src/resources/magic-transit/gre-tunnels.ts">get</a>(accountIdentifier, tunnelIdentifier) -> GRETunnelGetResponse</code>

## IPSECTunnels

Types:

- <code><a href="./src/resources/magic-transit/ipsec-tunnels.ts">IPSECTunnelCreateResponse</a></code>
- <code><a href="./src/resources/magic-transit/ipsec-tunnels.ts">IPSECTunnelUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/ipsec-tunnels.ts">IPSECTunnelListResponse</a></code>
- <code><a href="./src/resources/magic-transit/ipsec-tunnels.ts">IPSECTunnelDeleteResponse</a></code>
- <code><a href="./src/resources/magic-transit/ipsec-tunnels.ts">IPSECTunnelGetResponse</a></code>
- <code><a href="./src/resources/magic-transit/ipsec-tunnels.ts">IPSECTunnelPSKGenerateResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/magic/ipsec_tunnels">client.magicTransit.ipsecTunnels.<a href="./src/resources/magic-transit/ipsec-tunnels.ts">create</a>(accountIdentifier, { ...params }) -> IPSECTunnelCreateResponse</code>
- <code title="put /accounts/{account_identifier}/magic/ipsec_tunnels/{tunnel_identifier}">client.magicTransit.ipsecTunnels.<a href="./src/resources/magic-transit/ipsec-tunnels.ts">update</a>(accountIdentifier, tunnelIdentifier, { ...params }) -> IPSECTunnelUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/magic/ipsec_tunnels">client.magicTransit.ipsecTunnels.<a href="./src/resources/magic-transit/ipsec-tunnels.ts">list</a>(accountIdentifier) -> IPSECTunnelListResponse</code>
- <code title="delete /accounts/{account_identifier}/magic/ipsec_tunnels/{tunnel_identifier}">client.magicTransit.ipsecTunnels.<a href="./src/resources/magic-transit/ipsec-tunnels.ts">delete</a>(accountIdentifier, tunnelIdentifier) -> IPSECTunnelDeleteResponse</code>
- <code title="get /accounts/{account_identifier}/magic/ipsec_tunnels/{tunnel_identifier}">client.magicTransit.ipsecTunnels.<a href="./src/resources/magic-transit/ipsec-tunnels.ts">get</a>(accountIdentifier, tunnelIdentifier) -> IPSECTunnelGetResponse</code>
- <code title="post /accounts/{account_identifier}/magic/ipsec_tunnels/{tunnel_identifier}/psk_generate">client.magicTransit.ipsecTunnels.<a href="./src/resources/magic-transit/ipsec-tunnels.ts">pskGenerate</a>(accountIdentifier, tunnelIdentifier) -> IPSECTunnelPSKGenerateResponse</code>

## Routes

Types:

- <code><a href="./src/resources/magic-transit/routes.ts">RouteCreateResponse</a></code>
- <code><a href="./src/resources/magic-transit/routes.ts">RouteUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/routes.ts">RouteListResponse</a></code>
- <code><a href="./src/resources/magic-transit/routes.ts">RouteDeleteResponse</a></code>
- <code><a href="./src/resources/magic-transit/routes.ts">RouteEmptyResponse</a></code>
- <code><a href="./src/resources/magic-transit/routes.ts">RouteGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/magic/routes">client.magicTransit.routes.<a href="./src/resources/magic-transit/routes.ts">create</a>(accountIdentifier, { ...params }) -> RouteCreateResponse</code>
- <code title="put /accounts/{account_identifier}/magic/routes/{route_identifier}">client.magicTransit.routes.<a href="./src/resources/magic-transit/routes.ts">update</a>(accountIdentifier, routeIdentifier, { ...params }) -> RouteUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/magic/routes">client.magicTransit.routes.<a href="./src/resources/magic-transit/routes.ts">list</a>(accountIdentifier) -> RouteListResponse</code>
- <code title="delete /accounts/{account_identifier}/magic/routes/{route_identifier}">client.magicTransit.routes.<a href="./src/resources/magic-transit/routes.ts">delete</a>(accountIdentifier, routeIdentifier) -> RouteDeleteResponse</code>
- <code title="delete /accounts/{account_identifier}/magic/routes">client.magicTransit.routes.<a href="./src/resources/magic-transit/routes.ts">empty</a>(accountIdentifier, { ...params }) -> RouteEmptyResponse</code>
- <code title="get /accounts/{account_identifier}/magic/routes/{route_identifier}">client.magicTransit.routes.<a href="./src/resources/magic-transit/routes.ts">get</a>(accountIdentifier, routeIdentifier) -> RouteGetResponse</code>

## Sites

Types:

- <code><a href="./src/resources/magic-transit/sites/sites.ts">SiteCreateResponse</a></code>
- <code><a href="./src/resources/magic-transit/sites/sites.ts">SiteUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/sites/sites.ts">SiteListResponse</a></code>
- <code><a href="./src/resources/magic-transit/sites/sites.ts">SiteDeleteResponse</a></code>
- <code><a href="./src/resources/magic-transit/sites/sites.ts">SiteGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/magic/sites">client.magicTransit.sites.<a href="./src/resources/magic-transit/sites/sites.ts">create</a>(accountIdentifier, { ...params }) -> SiteCreateResponse</code>
- <code title="put /accounts/{account_identifier}/magic/sites/{site_identifier}">client.magicTransit.sites.<a href="./src/resources/magic-transit/sites/sites.ts">update</a>(accountIdentifier, siteIdentifier, { ...params }) -> SiteUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/magic/sites">client.magicTransit.sites.<a href="./src/resources/magic-transit/sites/sites.ts">list</a>(accountIdentifier) -> SiteListResponse</code>
- <code title="delete /accounts/{account_identifier}/magic/sites/{site_identifier}">client.magicTransit.sites.<a href="./src/resources/magic-transit/sites/sites.ts">delete</a>(accountIdentifier, siteIdentifier) -> SiteDeleteResponse</code>
- <code title="get /accounts/{account_identifier}/magic/sites/{site_identifier}">client.magicTransit.sites.<a href="./src/resources/magic-transit/sites/sites.ts">get</a>(accountIdentifier, siteIdentifier) -> SiteGetResponse</code>

### ACLs

Types:

- <code><a href="./src/resources/magic-transit/sites/acls.ts">ACLCreateResponse</a></code>
- <code><a href="./src/resources/magic-transit/sites/acls.ts">ACLUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/sites/acls.ts">ACLListResponse</a></code>
- <code><a href="./src/resources/magic-transit/sites/acls.ts">ACLDeleteResponse</a></code>
- <code><a href="./src/resources/magic-transit/sites/acls.ts">ACLGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/magic/sites/{site_identifier}/acls">client.magicTransit.sites.acls.<a href="./src/resources/magic-transit/sites/acls.ts">create</a>(accountIdentifier, siteIdentifier, { ...params }) -> ACLCreateResponse</code>
- <code title="put /accounts/{account_identifier}/magic/sites/{site_identifier}/acls/{acl_identifier}">client.magicTransit.sites.acls.<a href="./src/resources/magic-transit/sites/acls.ts">update</a>(accountIdentifier, siteIdentifier, aclIdentifier, { ...params }) -> ACLUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/magic/sites/{site_identifier}/acls">client.magicTransit.sites.acls.<a href="./src/resources/magic-transit/sites/acls.ts">list</a>(accountIdentifier, siteIdentifier) -> ACLListResponse</code>
- <code title="delete /accounts/{account_identifier}/magic/sites/{site_identifier}/acls/{acl_identifier}">client.magicTransit.sites.acls.<a href="./src/resources/magic-transit/sites/acls.ts">delete</a>(accountIdentifier, siteIdentifier, aclIdentifier) -> ACLDeleteResponse</code>
- <code title="get /accounts/{account_identifier}/magic/sites/{site_identifier}/acls/{acl_identifier}">client.magicTransit.sites.acls.<a href="./src/resources/magic-transit/sites/acls.ts">get</a>(accountIdentifier, siteIdentifier, aclIdentifier) -> ACLGetResponse</code>

### Lans

Types:

- <code><a href="./src/resources/magic-transit/sites/lans.ts">LanCreateResponse</a></code>
- <code><a href="./src/resources/magic-transit/sites/lans.ts">LanUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/sites/lans.ts">LanListResponse</a></code>
- <code><a href="./src/resources/magic-transit/sites/lans.ts">LanDeleteResponse</a></code>
- <code><a href="./src/resources/magic-transit/sites/lans.ts">LanGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/magic/sites/{site_identifier}/lans">client.magicTransit.sites.lans.<a href="./src/resources/magic-transit/sites/lans.ts">create</a>(accountIdentifier, siteIdentifier, { ...params }) -> LanCreateResponse</code>
- <code title="put /accounts/{account_identifier}/magic/sites/{site_identifier}/lans/{lan_identifier}">client.magicTransit.sites.lans.<a href="./src/resources/magic-transit/sites/lans.ts">update</a>(accountIdentifier, siteIdentifier, lanIdentifier, { ...params }) -> LanUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/magic/sites/{site_identifier}/lans">client.magicTransit.sites.lans.<a href="./src/resources/magic-transit/sites/lans.ts">list</a>(accountIdentifier, siteIdentifier) -> LanListResponse</code>
- <code title="delete /accounts/{account_identifier}/magic/sites/{site_identifier}/lans/{lan_identifier}">client.magicTransit.sites.lans.<a href="./src/resources/magic-transit/sites/lans.ts">delete</a>(accountIdentifier, siteIdentifier, lanIdentifier) -> LanDeleteResponse</code>
- <code title="get /accounts/{account_identifier}/magic/sites/{site_identifier}/lans/{lan_identifier}">client.magicTransit.sites.lans.<a href="./src/resources/magic-transit/sites/lans.ts">get</a>(accountIdentifier, siteIdentifier, lanIdentifier) -> LanGetResponse</code>

### Wans

Types:

- <code><a href="./src/resources/magic-transit/sites/wans.ts">WanCreateResponse</a></code>
- <code><a href="./src/resources/magic-transit/sites/wans.ts">WanUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/sites/wans.ts">WanListResponse</a></code>
- <code><a href="./src/resources/magic-transit/sites/wans.ts">WanDeleteResponse</a></code>
- <code><a href="./src/resources/magic-transit/sites/wans.ts">WanGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/magic/sites/{site_identifier}/wans">client.magicTransit.sites.wans.<a href="./src/resources/magic-transit/sites/wans.ts">create</a>(accountIdentifier, siteIdentifier, { ...params }) -> WanCreateResponse</code>
- <code title="put /accounts/{account_identifier}/magic/sites/{site_identifier}/wans/{wan_identifier}">client.magicTransit.sites.wans.<a href="./src/resources/magic-transit/sites/wans.ts">update</a>(accountIdentifier, siteIdentifier, wanIdentifier, { ...params }) -> WanUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/magic/sites/{site_identifier}/wans">client.magicTransit.sites.wans.<a href="./src/resources/magic-transit/sites/wans.ts">list</a>(accountIdentifier, siteIdentifier) -> WanListResponse</code>
- <code title="delete /accounts/{account_identifier}/magic/sites/{site_identifier}/wans/{wan_identifier}">client.magicTransit.sites.wans.<a href="./src/resources/magic-transit/sites/wans.ts">delete</a>(accountIdentifier, siteIdentifier, wanIdentifier) -> WanDeleteResponse</code>
- <code title="get /accounts/{account_identifier}/magic/sites/{site_identifier}/wans/{wan_identifier}">client.magicTransit.sites.wans.<a href="./src/resources/magic-transit/sites/wans.ts">get</a>(accountIdentifier, siteIdentifier, wanIdentifier) -> WanGetResponse</code>

# MagicNetworkMonitoring

## Configs

Types:

- <code><a href="./src/resources/magic-network-monitoring/configs/configs.ts">MagicVisibilityMNMConfig</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/mnm/config">client.magicNetworkMonitoring.configs.<a href="./src/resources/magic-network-monitoring/configs/configs.ts">create</a>(accountIdentifier) -> MagicVisibilityMNMConfig</code>
- <code title="put /accounts/{account_identifier}/mnm/config">client.magicNetworkMonitoring.configs.<a href="./src/resources/magic-network-monitoring/configs/configs.ts">update</a>(accountIdentifier) -> MagicVisibilityMNMConfig</code>
- <code title="delete /accounts/{account_identifier}/mnm/config">client.magicNetworkMonitoring.configs.<a href="./src/resources/magic-network-monitoring/configs/configs.ts">delete</a>(accountIdentifier) -> MagicVisibilityMNMConfig</code>
- <code title="patch /accounts/{account_identifier}/mnm/config">client.magicNetworkMonitoring.configs.<a href="./src/resources/magic-network-monitoring/configs/configs.ts">edit</a>(accountIdentifier) -> MagicVisibilityMNMConfig</code>
- <code title="get /accounts/{account_identifier}/mnm/config">client.magicNetworkMonitoring.configs.<a href="./src/resources/magic-network-monitoring/configs/configs.ts">get</a>(accountIdentifier) -> MagicVisibilityMNMConfig</code>

### Full

Methods:

- <code title="get /accounts/{account_identifier}/mnm/config/full">client.magicNetworkMonitoring.configs.full.<a href="./src/resources/magic-network-monitoring/configs/full.ts">get</a>(accountIdentifier) -> MagicVisibilityMNMConfig</code>

## Rules

Types:

- <code><a href="./src/resources/magic-network-monitoring/rules/rules.ts">MagicVisibilityMNMRule</a></code>
- <code><a href="./src/resources/magic-network-monitoring/rules/rules.ts">RuleListResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/mnm/rules">client.magicNetworkMonitoring.rules.<a href="./src/resources/magic-network-monitoring/rules/rules.ts">create</a>(accountIdentifier) -> MagicVisibilityMNMRule | null</code>
- <code title="put /accounts/{account_identifier}/mnm/rules">client.magicNetworkMonitoring.rules.<a href="./src/resources/magic-network-monitoring/rules/rules.ts">update</a>(accountIdentifier) -> MagicVisibilityMNMRule | null</code>
- <code title="get /accounts/{account_identifier}/mnm/rules">client.magicNetworkMonitoring.rules.<a href="./src/resources/magic-network-monitoring/rules/rules.ts">list</a>(accountIdentifier) -> RuleListResponse | null</code>
- <code title="delete /accounts/{account_identifier}/mnm/rules/{rule_identifier}">client.magicNetworkMonitoring.rules.<a href="./src/resources/magic-network-monitoring/rules/rules.ts">delete</a>(accountIdentifier, ruleIdentifier) -> MagicVisibilityMNMRule | null</code>
- <code title="patch /accounts/{account_identifier}/mnm/rules/{rule_identifier}">client.magicNetworkMonitoring.rules.<a href="./src/resources/magic-network-monitoring/rules/rules.ts">edit</a>(accountIdentifier, ruleIdentifier) -> MagicVisibilityMNMRule | null</code>
- <code title="get /accounts/{account_identifier}/mnm/rules/{rule_identifier}">client.magicNetworkMonitoring.rules.<a href="./src/resources/magic-network-monitoring/rules/rules.ts">get</a>(accountIdentifier, ruleIdentifier) -> MagicVisibilityMNMRule | null</code>

### Advertisements

Types:

- <code><a href="./src/resources/magic-network-monitoring/rules/advertisements.ts">MagicVisibilityMNMRuleAdvertisable</a></code>

Methods:

- <code title="patch /accounts/{account_identifier}/mnm/rules/{rule_identifier}/advertisement">client.magicNetworkMonitoring.rules.advertisements.<a href="./src/resources/magic-network-monitoring/rules/advertisements.ts">edit</a>(accountIdentifier, ruleIdentifier) -> MagicVisibilityMNMRuleAdvertisable | null</code>

# MTLSCertificates

Types:

- <code><a href="./src/resources/mtls-certificates/mtls-certificates.ts">TLSCertificatesAndHostnamesCertificateObjectPost</a></code>
- <code><a href="./src/resources/mtls-certificates/mtls-certificates.ts">TLSCertificatesAndHostnamesComponentsSchemasCertificateObject</a></code>
- <code><a href="./src/resources/mtls-certificates/mtls-certificates.ts">MTLSCertificateListResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/mtls_certificates">client.mtlsCertificates.<a href="./src/resources/mtls-certificates/mtls-certificates.ts">create</a>({ ...params }) -> TLSCertificatesAndHostnamesCertificateObjectPost</code>
- <code title="get /accounts/{account_id}/mtls_certificates">client.mtlsCertificates.<a href="./src/resources/mtls-certificates/mtls-certificates.ts">list</a>({ ...params }) -> MTLSCertificateListResponse | null</code>
- <code title="delete /accounts/{account_id}/mtls_certificates/{mtls_certificate_id}">client.mtlsCertificates.<a href="./src/resources/mtls-certificates/mtls-certificates.ts">delete</a>(mtlsCertificateId, { ...params }) -> TLSCertificatesAndHostnamesComponentsSchemasCertificateObject</code>
- <code title="get /accounts/{account_id}/mtls_certificates/{mtls_certificate_id}">client.mtlsCertificates.<a href="./src/resources/mtls-certificates/mtls-certificates.ts">get</a>(mtlsCertificateId, { ...params }) -> TLSCertificatesAndHostnamesComponentsSchemasCertificateObject</code>

## Associations

Types:

- <code><a href="./src/resources/mtls-certificates/associations.ts">TLSCertificatesAndHostnamesAssociationObject</a></code>
- <code><a href="./src/resources/mtls-certificates/associations.ts">AssociationGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/mtls_certificates/{mtls_certificate_id}/associations">client.mtlsCertificates.associations.<a href="./src/resources/mtls-certificates/associations.ts">get</a>(mtlsCertificateId, { ...params }) -> AssociationGetResponse | null</code>

# Pages

## Projects

Types:

- <code><a href="./src/resources/pages/projects/projects.ts">PagesDeployments</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">PagesProjects</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">ProjectCreateResponse</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">ProjectListResponse</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">ProjectDeleteResponse</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">ProjectEditResponse</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">ProjectPurgeBuildCacheResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pages/projects">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">create</a>({ ...params }) -> ProjectCreateResponse</code>
- <code title="get /accounts/{account_id}/pages/projects">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">list</a>({ ...params }) -> ProjectListResponse</code>
- <code title="delete /accounts/{account_id}/pages/projects/{project_name}">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">delete</a>(projectName, { ...params }) -> unknown</code>
- <code title="patch /accounts/{account_id}/pages/projects/{project_name}">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">edit</a>(projectName, { ...params }) -> ProjectEditResponse</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">get</a>(projectName, { ...params }) -> PagesProjects</code>
- <code title="post /accounts/{account_id}/pages/projects/{project_name}/purge_build_cache">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">purgeBuildCache</a>(projectName, { ...params }) -> unknown</code>

### Deployments

Types:

- <code><a href="./src/resources/pages/projects/deployments/deployments.ts">DeploymentListResponse</a></code>
- <code><a href="./src/resources/pages/projects/deployments/deployments.ts">DeploymentDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pages/projects/{project_name}/deployments">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">create</a>(projectName, { ...params }) -> PagesDeployments</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}/deployments">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">list</a>(projectName, { ...params }) -> DeploymentListResponse</code>
- <code title="delete /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">delete</a>(projectName, deploymentId, { ...params }) -> unknown</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">get</a>(projectName, deploymentId, { ...params }) -> PagesDeployments</code>
- <code title="post /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}/retry">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">retry</a>(projectName, deploymentId, { ...params }) -> PagesDeployments</code>
- <code title="post /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}/rollback">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">rollback</a>(projectName, deploymentId, { ...params }) -> PagesDeployments</code>

#### History

##### Logs

Types:

- <code><a href="./src/resources/pages/projects/deployments/history/logs.ts">LogGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}/history/logs">client.pages.projects.deployments.history.logs.<a href="./src/resources/pages/projects/deployments/history/logs.ts">get</a>(projectName, deploymentId, { ...params }) -> LogGetResponse</code>

### Domains

Types:

- <code><a href="./src/resources/pages/projects/domains.ts">DomainCreateResponse</a></code>
- <code><a href="./src/resources/pages/projects/domains.ts">DomainListResponse</a></code>
- <code><a href="./src/resources/pages/projects/domains.ts">DomainDeleteResponse</a></code>
- <code><a href="./src/resources/pages/projects/domains.ts">DomainEditResponse</a></code>
- <code><a href="./src/resources/pages/projects/domains.ts">DomainGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pages/projects/{project_name}/domains">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">create</a>(projectName, { ...params }) -> DomainCreateResponse | null</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}/domains">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">list</a>(projectName, { ...params }) -> DomainListResponse</code>
- <code title="delete /accounts/{account_id}/pages/projects/{project_name}/domains/{domain_name}">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">delete</a>(projectName, domainName, { ...params }) -> unknown</code>
- <code title="patch /accounts/{account_id}/pages/projects/{project_name}/domains/{domain_name}">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">edit</a>(projectName, domainName, { ...params }) -> DomainEditResponse | null</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}/domains/{domain_name}">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">get</a>(projectName, domainName, { ...params }) -> DomainGetResponse | null</code>

# PCAPs

Types:

- <code><a href="./src/resources/pcaps/pcaps.ts">PCAPCreateResponse</a></code>
- <code><a href="./src/resources/pcaps/pcaps.ts">PCAPListResponse</a></code>
- <code><a href="./src/resources/pcaps/pcaps.ts">PCAPGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pcaps">client.pcaps.<a href="./src/resources/pcaps/pcaps.ts">create</a>({ ...params }) -> PCAPCreateResponse</code>
- <code title="get /accounts/{account_id}/pcaps">client.pcaps.<a href="./src/resources/pcaps/pcaps.ts">list</a>({ ...params }) -> PCAPListResponse | null</code>
- <code title="get /accounts/{account_id}/pcaps/{pcap_id}">client.pcaps.<a href="./src/resources/pcaps/pcaps.ts">get</a>(pcapId, { ...params }) -> PCAPGetResponse</code>

## Ownerships

Types:

- <code><a href="./src/resources/pcaps/ownerships.ts">MagicVisibilityPCAPsOwnership</a></code>
- <code><a href="./src/resources/pcaps/ownerships.ts">OwnershipGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pcaps/ownership">client.pcaps.ownerships.<a href="./src/resources/pcaps/ownerships.ts">create</a>({ ...params }) -> MagicVisibilityPCAPsOwnership</code>
- <code title="delete /accounts/{account_id}/pcaps/ownership/{ownership_id}">client.pcaps.ownerships.<a href="./src/resources/pcaps/ownerships.ts">delete</a>(ownershipId, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/pcaps/ownership">client.pcaps.ownerships.<a href="./src/resources/pcaps/ownerships.ts">get</a>({ ...params }) -> OwnershipGetResponse | null</code>
- <code title="post /accounts/{account_id}/pcaps/ownership/validate">client.pcaps.ownerships.<a href="./src/resources/pcaps/ownerships.ts">validate</a>({ ...params }) -> MagicVisibilityPCAPsOwnership</code>

## Downloads

Methods:

- <code title="get /accounts/{account_id}/pcaps/{pcap_id}/download">client.pcaps.downloads.<a href="./src/resources/pcaps/downloads.ts">get</a>(pcapId, { ...params }) -> Response</code>

# Registrar

## Domains

Types:

- <code><a href="./src/resources/registrar/domains.ts">RegistrarAPIDomains</a></code>
- <code><a href="./src/resources/registrar/domains.ts">DomainUpdateResponse</a></code>
- <code><a href="./src/resources/registrar/domains.ts">DomainListResponse</a></code>
- <code><a href="./src/resources/registrar/domains.ts">DomainGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/registrar/domains/{domain_name}">client.registrar.domains.<a href="./src/resources/registrar/domains.ts">update</a>(domainName, { ...params }) -> DomainUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/registrar/domains">client.registrar.domains.<a href="./src/resources/registrar/domains.ts">list</a>({ ...params }) -> DomainListResponse | null</code>
- <code title="get /accounts/{account_id}/registrar/domains/{domain_name}">client.registrar.domains.<a href="./src/resources/registrar/domains.ts">get</a>(domainName, { ...params }) -> DomainGetResponse | null</code>

# RequestTracers

## Traces

Types:

- <code><a href="./src/resources/request-tracers/traces.ts">RequestTracerTrace</a></code>
- <code><a href="./src/resources/request-tracers/traces.ts">TraceCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/request-tracer/trace">client.requestTracers.traces.<a href="./src/resources/request-tracers/traces.ts">create</a>(accountIdentifier, { ...params }) -> TraceCreateResponse</code>

# Rules

## Lists

Types:

- <code><a href="./src/resources/rules/lists/lists.ts">ListsList</a></code>
- <code><a href="./src/resources/rules/lists/lists.ts">ListListResponse</a></code>
- <code><a href="./src/resources/rules/lists/lists.ts">ListDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/rules/lists">client.rules.lists.<a href="./src/resources/rules/lists/lists.ts">create</a>({ ...params }) -> ListsList | null</code>
- <code title="put /accounts/{account_id}/rules/lists/{list_id}">client.rules.lists.<a href="./src/resources/rules/lists/lists.ts">update</a>(listId, { ...params }) -> ListsList | null</code>
- <code title="get /accounts/{account_id}/rules/lists">client.rules.lists.<a href="./src/resources/rules/lists/lists.ts">list</a>({ ...params }) -> ListListResponse | null</code>
- <code title="delete /accounts/{account_id}/rules/lists/{list_id}">client.rules.lists.<a href="./src/resources/rules/lists/lists.ts">delete</a>(listId, { ...params }) -> ListDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/rules/lists/{list_id}">client.rules.lists.<a href="./src/resources/rules/lists/lists.ts">get</a>(listId, { ...params }) -> ListsList | null</code>

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

- <code title="post /accounts/{account_id}/rules/lists/{list_id}/items">client.rules.lists.items.<a href="./src/resources/rules/lists/items.ts">create</a>(listId, [ ...body ]) -> ItemCreateResponse | null</code>
- <code title="put /accounts/{account_id}/rules/lists/{list_id}/items">client.rules.lists.items.<a href="./src/resources/rules/lists/items.ts">update</a>(listId, [ ...body ]) -> ItemUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/rules/lists/{list_id}/items">client.rules.lists.items.<a href="./src/resources/rules/lists/items.ts">list</a>(listId, { ...params }) -> ItemListResponsesCursorPagination</code>
- <code title="delete /accounts/{account_id}/rules/lists/{list_id}/items">client.rules.lists.items.<a href="./src/resources/rules/lists/items.ts">delete</a>(listId, { ...params }) -> ItemDeleteResponse | null</code>
- <code title="get /accounts/{account_identifier}/rules/lists/{list_id}/items/{item_id}">client.rules.lists.items.<a href="./src/resources/rules/lists/items.ts">get</a>(accountIdentifier, listId, itemId) -> ItemGetResponse | null</code>

# Storage

## Analytics

Types:

- <code><a href="./src/resources/storage/analytics.ts">WorkersKVComponentsSchemasResult</a></code>
- <code><a href="./src/resources/storage/analytics.ts">WorkersKVSchemasResult</a></code>

Methods:

- <code title="get /accounts/{account_id}/storage/analytics">client.storage.analytics.<a href="./src/resources/storage/analytics.ts">list</a>({ ...params }) -> WorkersKVSchemasResult</code>
- <code title="get /accounts/{account_id}/storage/analytics/stored">client.storage.analytics.<a href="./src/resources/storage/analytics.ts">stored</a>({ ...params }) -> WorkersKVComponentsSchemasResult</code>

# Stream

Types:

- <code><a href="./src/resources/stream/stream.ts">StreamVideos</a></code>
- <code><a href="./src/resources/stream/stream.ts">StreamListResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream">client.stream.<a href="./src/resources/stream/stream.ts">create</a>({ ...params }) -> void</code>
- <code title="get /accounts/{account_id}/stream">client.stream.<a href="./src/resources/stream/stream.ts">list</a>({ ...params }) -> StreamListResponse</code>
- <code title="delete /accounts/{account_id}/stream/{identifier}">client.stream.<a href="./src/resources/stream/stream.ts">delete</a>(identifier, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/stream/{identifier}">client.stream.<a href="./src/resources/stream/stream.ts">get</a>(identifier, { ...params }) -> StreamVideos</code>

## AudioTracks

Types:

- <code><a href="./src/resources/stream/audio-tracks.ts">StreamAdditionalAudio</a></code>
- <code><a href="./src/resources/stream/audio-tracks.ts">AudioTrackDeleteResponse</a></code>
- <code><a href="./src/resources/stream/audio-tracks.ts">AudioTrackGetResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/stream/{identifier}/audio/{audio_identifier}">client.stream.audioTracks.<a href="./src/resources/stream/audio-tracks.ts">delete</a>(identifier, audioIdentifier, { ...params }) -> AudioTrackDeleteResponse</code>
- <code title="post /accounts/{account_id}/stream/{identifier}/audio/copy">client.stream.audioTracks.<a href="./src/resources/stream/audio-tracks.ts">copy</a>(identifier, { ...params }) -> StreamAdditionalAudio</code>
- <code title="patch /accounts/{account_id}/stream/{identifier}/audio/{audio_identifier}">client.stream.audioTracks.<a href="./src/resources/stream/audio-tracks.ts">edit</a>(identifier, audioIdentifier, { ...params }) -> StreamAdditionalAudio</code>
- <code title="get /accounts/{account_id}/stream/{identifier}/audio">client.stream.audioTracks.<a href="./src/resources/stream/audio-tracks.ts">get</a>(identifier, { ...params }) -> AudioTrackGetResponse</code>

## Videos

Types:

- <code><a href="./src/resources/stream/videos.ts">VideoStorageUsageResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/stream/storage-usage">client.stream.videos.<a href="./src/resources/stream/videos.ts">storageUsage</a>({ ...params }) -> VideoStorageUsageResponse</code>

## Clips

Types:

- <code><a href="./src/resources/stream/clips.ts">StreamClipping</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/clip">client.stream.clips.<a href="./src/resources/stream/clips.ts">create</a>({ ...params }) -> StreamClipping</code>

## Copies

Methods:

- <code title="post /accounts/{account_id}/stream/copy">client.stream.copies.<a href="./src/resources/stream/copies.ts">create</a>({ ...params }) -> StreamVideos</code>

## DirectUploads

Types:

- <code><a href="./src/resources/stream/direct-uploads.ts">DirectUploadCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/direct_upload">client.stream.directUploads.<a href="./src/resources/stream/direct-uploads.ts">create</a>({ ...params }) -> DirectUploadCreateResponse</code>

## Keys

Types:

- <code><a href="./src/resources/stream/keys.ts">StreamKeys</a></code>
- <code><a href="./src/resources/stream/keys.ts">KeyDeleteResponse</a></code>
- <code><a href="./src/resources/stream/keys.ts">KeyGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/keys">client.stream.keys.<a href="./src/resources/stream/keys.ts">create</a>({ ...params }) -> StreamKeys</code>
- <code title="delete /accounts/{account_id}/stream/keys/{identifier}">client.stream.keys.<a href="./src/resources/stream/keys.ts">delete</a>(identifier, { ...params }) -> KeyDeleteResponse</code>
- <code title="get /accounts/{account_id}/stream/keys">client.stream.keys.<a href="./src/resources/stream/keys.ts">get</a>({ ...params }) -> KeyGetResponse</code>

## LiveInputs

Types:

- <code><a href="./src/resources/stream/live-inputs/live-inputs.ts">StreamLiveInput</a></code>
- <code><a href="./src/resources/stream/live-inputs/live-inputs.ts">LiveInputListResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/live_inputs">client.stream.liveInputs.<a href="./src/resources/stream/live-inputs/live-inputs.ts">create</a>({ ...params }) -> StreamLiveInput</code>
- <code title="put /accounts/{account_id}/stream/live_inputs/{live_input_identifier}">client.stream.liveInputs.<a href="./src/resources/stream/live-inputs/live-inputs.ts">update</a>(liveInputIdentifier, { ...params }) -> StreamLiveInput</code>
- <code title="get /accounts/{account_id}/stream/live_inputs">client.stream.liveInputs.<a href="./src/resources/stream/live-inputs/live-inputs.ts">list</a>({ ...params }) -> LiveInputListResponse</code>
- <code title="delete /accounts/{account_id}/stream/live_inputs/{live_input_identifier}">client.stream.liveInputs.<a href="./src/resources/stream/live-inputs/live-inputs.ts">delete</a>(liveInputIdentifier, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/stream/live_inputs/{live_input_identifier}">client.stream.liveInputs.<a href="./src/resources/stream/live-inputs/live-inputs.ts">get</a>(liveInputIdentifier, { ...params }) -> StreamLiveInput</code>

### Outputs

Types:

- <code><a href="./src/resources/stream/live-inputs/outputs.ts">StreamOutput</a></code>
- <code><a href="./src/resources/stream/live-inputs/outputs.ts">OutputListResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs">client.stream.liveInputs.outputs.<a href="./src/resources/stream/live-inputs/outputs.ts">create</a>(liveInputIdentifier, { ...params }) -> StreamOutput</code>
- <code title="put /accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs/{output_identifier}">client.stream.liveInputs.outputs.<a href="./src/resources/stream/live-inputs/outputs.ts">update</a>(liveInputIdentifier, outputIdentifier, { ...params }) -> StreamOutput</code>
- <code title="get /accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs">client.stream.liveInputs.outputs.<a href="./src/resources/stream/live-inputs/outputs.ts">list</a>(liveInputIdentifier, { ...params }) -> OutputListResponse</code>
- <code title="delete /accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs/{output_identifier}">client.stream.liveInputs.outputs.<a href="./src/resources/stream/live-inputs/outputs.ts">delete</a>(liveInputIdentifier, outputIdentifier, { ...params }) -> void</code>

## Watermarks

Types:

- <code><a href="./src/resources/stream/watermarks.ts">StreamWatermarks</a></code>
- <code><a href="./src/resources/stream/watermarks.ts">WatermarkCreateResponse</a></code>
- <code><a href="./src/resources/stream/watermarks.ts">WatermarkListResponse</a></code>
- <code><a href="./src/resources/stream/watermarks.ts">WatermarkDeleteResponse</a></code>
- <code><a href="./src/resources/stream/watermarks.ts">WatermarkGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/watermarks">client.stream.watermarks.<a href="./src/resources/stream/watermarks.ts">create</a>({ ...params }) -> WatermarkCreateResponse</code>
- <code title="get /accounts/{account_id}/stream/watermarks">client.stream.watermarks.<a href="./src/resources/stream/watermarks.ts">list</a>({ ...params }) -> WatermarkListResponse</code>
- <code title="delete /accounts/{account_id}/stream/watermarks/{identifier}">client.stream.watermarks.<a href="./src/resources/stream/watermarks.ts">delete</a>(identifier, { ...params }) -> WatermarkDeleteResponse</code>
- <code title="get /accounts/{account_id}/stream/watermarks/{identifier}">client.stream.watermarks.<a href="./src/resources/stream/watermarks.ts">get</a>(identifier, { ...params }) -> WatermarkGetResponse</code>

## Webhooks

Types:

- <code><a href="./src/resources/stream/webhooks.ts">WebhookUpdateResponse</a></code>
- <code><a href="./src/resources/stream/webhooks.ts">WebhookDeleteResponse</a></code>
- <code><a href="./src/resources/stream/webhooks.ts">WebhookGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/stream/webhook">client.stream.webhooks.<a href="./src/resources/stream/webhooks.ts">update</a>({ ...params }) -> WebhookUpdateResponse</code>
- <code title="delete /accounts/{account_id}/stream/webhook">client.stream.webhooks.<a href="./src/resources/stream/webhooks.ts">delete</a>({ ...params }) -> WebhookDeleteResponse</code>
- <code title="get /accounts/{account_id}/stream/webhook">client.stream.webhooks.<a href="./src/resources/stream/webhooks.ts">get</a>({ ...params }) -> WebhookGetResponse</code>

## Captions

Types:

- <code><a href="./src/resources/stream/captions.ts">StreamCaptions</a></code>
- <code><a href="./src/resources/stream/captions.ts">CaptionUpdateResponse</a></code>
- <code><a href="./src/resources/stream/captions.ts">CaptionDeleteResponse</a></code>
- <code><a href="./src/resources/stream/captions.ts">CaptionGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/stream/{identifier}/captions/{language}">client.stream.captions.<a href="./src/resources/stream/captions.ts">update</a>(identifier, language, { ...params }) -> CaptionUpdateResponse</code>
- <code title="delete /accounts/{account_id}/stream/{identifier}/captions/{language}">client.stream.captions.<a href="./src/resources/stream/captions.ts">delete</a>(identifier, language, { ...params }) -> CaptionDeleteResponse</code>
- <code title="get /accounts/{account_id}/stream/{identifier}/captions">client.stream.captions.<a href="./src/resources/stream/captions.ts">get</a>(identifier, { ...params }) -> CaptionGetResponse</code>

## Downloads

Types:

- <code><a href="./src/resources/stream/downloads.ts">DownloadCreateResponse</a></code>
- <code><a href="./src/resources/stream/downloads.ts">DownloadDeleteResponse</a></code>
- <code><a href="./src/resources/stream/downloads.ts">DownloadGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/{identifier}/downloads">client.stream.downloads.<a href="./src/resources/stream/downloads.ts">create</a>(identifier, { ...params }) -> DownloadCreateResponse</code>
- <code title="delete /accounts/{account_id}/stream/{identifier}/downloads">client.stream.downloads.<a href="./src/resources/stream/downloads.ts">delete</a>(identifier, { ...params }) -> DownloadDeleteResponse</code>
- <code title="get /accounts/{account_id}/stream/{identifier}/downloads">client.stream.downloads.<a href="./src/resources/stream/downloads.ts">get</a>(identifier, { ...params }) -> DownloadGetResponse</code>

## Embeds

Types:

- <code><a href="./src/resources/stream/embeds.ts">EmbedGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/stream/{identifier}/embed">client.stream.embeds.<a href="./src/resources/stream/embeds.ts">get</a>(identifier, { ...params }) -> unknown</code>

## Tokens

Types:

- <code><a href="./src/resources/stream/tokens.ts">TokenCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/{identifier}/token">client.stream.tokens.<a href="./src/resources/stream/tokens.ts">create</a>(identifier, { ...params }) -> TokenCreateResponse</code>

# Alerting

## V3

Types:

- <code><a href="./src/resources/alerting/v3/v3.ts">V3ListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/alerting/v3/available_alerts">client.alerting.v3.<a href="./src/resources/alerting/v3/v3.ts">list</a>({ ...params }) -> V3ListResponse | null</code>

### Destinations

#### Eligible

Types:

- <code><a href="./src/resources/alerting/v3/destinations/eligible.ts">EligibleGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/alerting/v3/destinations/eligible">client.alerting.v3.destinations.eligible.<a href="./src/resources/alerting/v3/destinations/eligible.ts">get</a>({ ...params }) -> EligibleGetResponse | null</code>

#### Pagerduty

Types:

- <code><a href="./src/resources/alerting/v3/destinations/pagerduty.ts">PagerdutyCreateResponse</a></code>
- <code><a href="./src/resources/alerting/v3/destinations/pagerduty.ts">PagerdutyDeleteResponse</a></code>
- <code><a href="./src/resources/alerting/v3/destinations/pagerduty.ts">PagerdutyGetResponse</a></code>
- <code><a href="./src/resources/alerting/v3/destinations/pagerduty.ts">PagerdutyLinkResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/alerting/v3/destinations/pagerduty/connect">client.alerting.v3.destinations.pagerduty.<a href="./src/resources/alerting/v3/destinations/pagerduty.ts">create</a>({ ...params }) -> PagerdutyCreateResponse</code>
- <code title="delete /accounts/{account_id}/alerting/v3/destinations/pagerduty">client.alerting.v3.destinations.pagerduty.<a href="./src/resources/alerting/v3/destinations/pagerduty.ts">delete</a>({ ...params }) -> PagerdutyDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/alerting/v3/destinations/pagerduty">client.alerting.v3.destinations.pagerduty.<a href="./src/resources/alerting/v3/destinations/pagerduty.ts">get</a>({ ...params }) -> PagerdutyGetResponse | null</code>
- <code title="get /accounts/{account_id}/alerting/v3/destinations/pagerduty/connect/{token_id}">client.alerting.v3.destinations.pagerduty.<a href="./src/resources/alerting/v3/destinations/pagerduty.ts">link</a>(tokenId, { ...params }) -> PagerdutyLinkResponse</code>

#### Webhooks

Types:

- <code><a href="./src/resources/alerting/v3/destinations/webhooks.ts">WebhookCreateResponse</a></code>
- <code><a href="./src/resources/alerting/v3/destinations/webhooks.ts">WebhookUpdateResponse</a></code>
- <code><a href="./src/resources/alerting/v3/destinations/webhooks.ts">WebhookListResponse</a></code>
- <code><a href="./src/resources/alerting/v3/destinations/webhooks.ts">WebhookDeleteResponse</a></code>
- <code><a href="./src/resources/alerting/v3/destinations/webhooks.ts">WebhookGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/alerting/v3/destinations/webhooks">client.alerting.v3.destinations.webhooks.<a href="./src/resources/alerting/v3/destinations/webhooks.ts">create</a>({ ...params }) -> WebhookCreateResponse</code>
- <code title="put /accounts/{account_id}/alerting/v3/destinations/webhooks/{webhook_id}">client.alerting.v3.destinations.webhooks.<a href="./src/resources/alerting/v3/destinations/webhooks.ts">update</a>(webhookId, { ...params }) -> WebhookUpdateResponse</code>
- <code title="get /accounts/{account_id}/alerting/v3/destinations/webhooks">client.alerting.v3.destinations.webhooks.<a href="./src/resources/alerting/v3/destinations/webhooks.ts">list</a>({ ...params }) -> WebhookListResponse | null</code>
- <code title="delete /accounts/{account_id}/alerting/v3/destinations/webhooks/{webhook_id}">client.alerting.v3.destinations.webhooks.<a href="./src/resources/alerting/v3/destinations/webhooks.ts">delete</a>(webhookId, { ...params }) -> WebhookDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/alerting/v3/destinations/webhooks/{webhook_id}">client.alerting.v3.destinations.webhooks.<a href="./src/resources/alerting/v3/destinations/webhooks.ts">get</a>(webhookId, { ...params }) -> WebhookGetResponse</code>

### Histories

Types:

- <code><a href="./src/resources/alerting/v3/histories.ts">HistoryListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/alerting/v3/history">client.alerting.v3.histories.<a href="./src/resources/alerting/v3/histories.ts">list</a>({ ...params }) -> HistoryListResponsesV4PagePaginationArray</code>

### Policies

Types:

- <code><a href="./src/resources/alerting/v3/policies.ts">PolicyCreateResponse</a></code>
- <code><a href="./src/resources/alerting/v3/policies.ts">PolicyUpdateResponse</a></code>
- <code><a href="./src/resources/alerting/v3/policies.ts">PolicyListResponse</a></code>
- <code><a href="./src/resources/alerting/v3/policies.ts">PolicyDeleteResponse</a></code>
- <code><a href="./src/resources/alerting/v3/policies.ts">PolicyGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/alerting/v3/policies">client.alerting.v3.policies.<a href="./src/resources/alerting/v3/policies.ts">create</a>({ ...params }) -> PolicyCreateResponse</code>
- <code title="put /accounts/{account_id}/alerting/v3/policies/{policy_id}">client.alerting.v3.policies.<a href="./src/resources/alerting/v3/policies.ts">update</a>(policyId, { ...params }) -> PolicyUpdateResponse</code>
- <code title="get /accounts/{account_id}/alerting/v3/policies">client.alerting.v3.policies.<a href="./src/resources/alerting/v3/policies.ts">list</a>({ ...params }) -> PolicyListResponse | null</code>
- <code title="delete /accounts/{account_id}/alerting/v3/policies/{policy_id}">client.alerting.v3.policies.<a href="./src/resources/alerting/v3/policies.ts">delete</a>(policyId, { ...params }) -> PolicyDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/alerting/v3/policies/{policy_id}">client.alerting.v3.policies.<a href="./src/resources/alerting/v3/policies.ts">get</a>(policyId, { ...params }) -> PolicyGetResponse</code>

# D1

## Database

Types:

- <code><a href="./src/resources/d1/database.ts">D1CreateDatabase</a></code>
- <code><a href="./src/resources/d1/database.ts">D1DatabaseDetails</a></code>
- <code><a href="./src/resources/d1/database.ts">D1QueryResult</a></code>
- <code><a href="./src/resources/d1/database.ts">DatabaseDeleteResponse</a></code>
- <code><a href="./src/resources/d1/database.ts">DatabaseQueryResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/d1/database">client.d1.database.<a href="./src/resources/d1/database.ts">create</a>({ ...params }) -> D1CreateDatabase</code>
- <code title="get /accounts/{account_id}/d1/database">client.d1.database.<a href="./src/resources/d1/database.ts">list</a>({ ...params }) -> D1CreateDatabasesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_identifier}/d1/database/{database_identifier}">client.d1.database.<a href="./src/resources/d1/database.ts">delete</a>(accountIdentifier, databaseIdentifier) -> DatabaseDeleteResponse | null</code>
- <code title="get /accounts/{account_identifier}/d1/database/{database_identifier}">client.d1.database.<a href="./src/resources/d1/database.ts">get</a>(accountIdentifier, databaseIdentifier) -> D1DatabaseDetails</code>
- <code title="post /accounts/{account_identifier}/d1/database/{database_identifier}/query">client.d1.database.<a href="./src/resources/d1/database.ts">query</a>(accountIdentifier, databaseIdentifier, { ...params }) -> DatabaseQueryResponse</code>

# R2

## Buckets

Types:

- <code><a href="./src/resources/r2/buckets.ts">R2Bucket</a></code>
- <code><a href="./src/resources/r2/buckets.ts">BucketDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/r2/buckets">client.r2.buckets.<a href="./src/resources/r2/buckets.ts">create</a>({ ...params }) -> R2Bucket</code>
- <code title="get /accounts/{account_id}/r2/buckets">client.r2.buckets.<a href="./src/resources/r2/buckets.ts">list</a>({ ...params }) -> R2BucketsCursorPagination</code>
- <code title="delete /accounts/{account_id}/r2/buckets/{bucket_name}">client.r2.buckets.<a href="./src/resources/r2/buckets.ts">delete</a>(bucketName, { ...params }) -> BucketDeleteResponse</code>
- <code title="get /accounts/{account_id}/r2/buckets/{bucket_name}">client.r2.buckets.<a href="./src/resources/r2/buckets.ts">get</a>(bucketName, { ...params }) -> R2Bucket</code>

## Sippy

Types:

- <code><a href="./src/resources/r2/sippy.ts">R2Sippy</a></code>
- <code><a href="./src/resources/r2/sippy.ts">SippyDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/r2/buckets/{bucket_name}/sippy">client.r2.sippy.<a href="./src/resources/r2/sippy.ts">update</a>(bucketName, { ...params }) -> R2Sippy</code>
- <code title="delete /accounts/{account_id}/r2/buckets/{bucket_name}/sippy">client.r2.sippy.<a href="./src/resources/r2/sippy.ts">delete</a>(bucketName, { ...params }) -> SippyDeleteResponse</code>
- <code title="get /accounts/{account_id}/r2/buckets/{bucket_name}/sippy">client.r2.sippy.<a href="./src/resources/r2/sippy.ts">get</a>(bucketName, { ...params }) -> R2Sippy</code>

# WARPConnector

Types:

- <code><a href="./src/resources/warp-connector.ts">WARPConnectorCreateResponse</a></code>
- <code><a href="./src/resources/warp-connector.ts">WARPConnectorListResponse</a></code>
- <code><a href="./src/resources/warp-connector.ts">WARPConnectorDeleteResponse</a></code>
- <code><a href="./src/resources/warp-connector.ts">WARPConnectorEditResponse</a></code>
- <code><a href="./src/resources/warp-connector.ts">WARPConnectorGetResponse</a></code>
- <code><a href="./src/resources/warp-connector.ts">WARPConnectorTokenResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/warp_connector">client.warpConnector.<a href="./src/resources/warp-connector.ts">create</a>({ ...params }) -> WARPConnectorCreateResponse</code>
- <code title="get /accounts/{account_id}/warp_connector">client.warpConnector.<a href="./src/resources/warp-connector.ts">list</a>({ ...params }) -> WARPConnectorListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/warp_connector/{tunnel_id}">client.warpConnector.<a href="./src/resources/warp-connector.ts">delete</a>(tunnelId, { ...params }) -> WARPConnectorDeleteResponse</code>
- <code title="patch /accounts/{account_id}/warp_connector/{tunnel_id}">client.warpConnector.<a href="./src/resources/warp-connector.ts">edit</a>(tunnelId, { ...params }) -> WARPConnectorEditResponse</code>
- <code title="get /accounts/{account_id}/warp_connector/{tunnel_id}">client.warpConnector.<a href="./src/resources/warp-connector.ts">get</a>(tunnelId, { ...params }) -> WARPConnectorGetResponse</code>
- <code title="get /accounts/{account_id}/warp_connector/{tunnel_id}/token">client.warpConnector.<a href="./src/resources/warp-connector.ts">token</a>(tunnelId, { ...params }) -> WARPConnectorTokenResponse</code>

# WorkersForPlatforms

## Dispatch

### Namespaces

Types:

- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/namespaces.ts">NamespaceCreateResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/namespaces.ts">NamespaceListResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/namespaces.ts">NamespaceDeleteResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/namespaces.ts">NamespaceGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/dispatch/namespaces">client.workersForPlatforms.dispatch.namespaces.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/namespaces.ts">create</a>({ ...params }) -> NamespaceCreateResponse</code>
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces">client.workersForPlatforms.dispatch.namespaces.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/namespaces.ts">list</a>({ ...params }) -> NamespaceListResponse</code>
- <code title="delete /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}">client.workersForPlatforms.dispatch.namespaces.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/namespaces.ts">delete</a>(dispatchNamespace, { ...params }) -> NamespaceDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}">client.workersForPlatforms.dispatch.namespaces.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/namespaces.ts">get</a>(dispatchNamespace, { ...params }) -> NamespaceGetResponse</code>

#### Scripts

Types:

- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/scripts.ts">WorkersNamespaceScript</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}">client.workersForPlatforms.dispatch.namespaces.scripts.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/scripts.ts">update</a>(dispatchNamespace, scriptName, { ...params }) -> WorkersScript</code>
- <code title="delete /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}">client.workersForPlatforms.dispatch.namespaces.scripts.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/scripts.ts">delete</a>(dispatchNamespace, scriptName, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}">client.workersForPlatforms.dispatch.namespaces.scripts.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/scripts.ts">get</a>(dispatchNamespace, scriptName, { ...params }) -> WorkersNamespaceScript</code>

##### Content

###### Scripts

Methods:

- <code title="put /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/content">client.workersForPlatforms.dispatch.namespaces.scripts.content.scripts.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/content/scripts.ts">update</a>(dispatchNamespace, scriptName, { ...params }) -> WorkersScript</code>
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/content">client.workersForPlatforms.dispatch.namespaces.scripts.content.scripts.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/content/scripts.ts">get</a>(dispatchNamespace, scriptName, { ...params }) -> Response</code>

###### Settings

Types:

- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/content/settings.ts">SettingEditResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/content/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/settings">client.workersForPlatforms.dispatch.namespaces.scripts.content.settings.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/content/settings.ts">edit</a>(dispatchNamespace, scriptName, { ...params }) -> SettingEditResponse</code>
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/settings">client.workersForPlatforms.dispatch.namespaces.scripts.content.settings.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/content/settings.ts">get</a>(dispatchNamespace, scriptName, { ...params }) -> SettingGetResponse</code>

###### Bindings

Types:

- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/content/bindings.ts">BindingGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/bindings">client.workersForPlatforms.dispatch.namespaces.scripts.content.bindings.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/content/bindings.ts">get</a>(dispatchNamespace, scriptName, { ...params }) -> BindingGetResponse</code>

# ZeroTrust

## Devices

Types:

- <code><a href="./src/resources/zero-trust/devices/devices.ts">TeamsDevicesDevices</a></code>
- <code><a href="./src/resources/zero-trust/devices/devices.ts">DeviceListResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/devices.ts">DeviceGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/devices">client.zeroTrust.devices.<a href="./src/resources/zero-trust/devices/devices.ts">list</a>({ ...params }) -> DeviceListResponse | null</code>
- <code title="get /accounts/{account_id}/devices/{device_id}">client.zeroTrust.devices.<a href="./src/resources/zero-trust/devices/devices.ts">get</a>(deviceId, { ...params }) -> DeviceGetResponse | null</code>

### DEXTests

Types:

- <code><a href="./src/resources/zero-trust/devices/dex-tests.ts">TeamsDevicesDeviceDEXTestSchemasHTTP</a></code>
- <code><a href="./src/resources/zero-trust/devices/dex-tests.ts">DEXTestListResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/dex-tests.ts">DEXTestDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/dex_tests">client.zeroTrust.devices.dexTests.<a href="./src/resources/zero-trust/devices/dex-tests.ts">create</a>({ ...params }) -> TeamsDevicesDeviceDEXTestSchemasHTTP | null</code>
- <code title="put /accounts/{account_id}/devices/dex_tests/{dex_test_id}">client.zeroTrust.devices.dexTests.<a href="./src/resources/zero-trust/devices/dex-tests.ts">update</a>(dexTestId, { ...params }) -> TeamsDevicesDeviceDEXTestSchemasHTTP | null</code>
- <code title="get /accounts/{account_id}/devices/dex_tests">client.zeroTrust.devices.dexTests.<a href="./src/resources/zero-trust/devices/dex-tests.ts">list</a>({ ...params }) -> DEXTestListResponse | null</code>
- <code title="delete /accounts/{account_id}/devices/dex_tests/{dex_test_id}">client.zeroTrust.devices.dexTests.<a href="./src/resources/zero-trust/devices/dex-tests.ts">delete</a>(dexTestId, { ...params }) -> DEXTestDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/devices/dex_tests/{dex_test_id}">client.zeroTrust.devices.dexTests.<a href="./src/resources/zero-trust/devices/dex-tests.ts">get</a>(dexTestId, { ...params }) -> TeamsDevicesDeviceDEXTestSchemasHTTP | null</code>

### Networks

Types:

- <code><a href="./src/resources/zero-trust/devices/networks.ts">TeamsDevicesDeviceManagedNetworks</a></code>
- <code><a href="./src/resources/zero-trust/devices/networks.ts">NetworkListResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/networks.ts">NetworkDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/networks">client.zeroTrust.devices.networks.<a href="./src/resources/zero-trust/devices/networks.ts">create</a>({ ...params }) -> TeamsDevicesDeviceManagedNetworks | null</code>
- <code title="put /accounts/{account_id}/devices/networks/{network_id}">client.zeroTrust.devices.networks.<a href="./src/resources/zero-trust/devices/networks.ts">update</a>(networkId, { ...params }) -> TeamsDevicesDeviceManagedNetworks | null</code>
- <code title="get /accounts/{account_id}/devices/networks">client.zeroTrust.devices.networks.<a href="./src/resources/zero-trust/devices/networks.ts">list</a>({ ...params }) -> NetworkListResponse | null</code>
- <code title="delete /accounts/{account_id}/devices/networks/{network_id}">client.zeroTrust.devices.networks.<a href="./src/resources/zero-trust/devices/networks.ts">delete</a>(networkId, { ...params }) -> NetworkDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/devices/networks/{network_id}">client.zeroTrust.devices.networks.<a href="./src/resources/zero-trust/devices/networks.ts">get</a>(networkId, { ...params }) -> TeamsDevicesDeviceManagedNetworks | null</code>

### Policies

Types:

- <code><a href="./src/resources/zero-trust/devices/policies/policies.ts">TeamsDevicesDeviceSettingsPolicy</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/policies.ts">PolicyListResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/policies.ts">PolicyDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/policy">client.zeroTrust.devices.policies.<a href="./src/resources/zero-trust/devices/policies/policies.ts">create</a>({ ...params }) -> TeamsDevicesDeviceSettingsPolicy | null</code>
- <code title="get /accounts/{account_id}/devices/policies">client.zeroTrust.devices.policies.<a href="./src/resources/zero-trust/devices/policies/policies.ts">list</a>({ ...params }) -> PolicyListResponse | null</code>
- <code title="delete /accounts/{account_id}/devices/policy/{policy_id}">client.zeroTrust.devices.policies.<a href="./src/resources/zero-trust/devices/policies/policies.ts">delete</a>(policyId, { ...params }) -> PolicyDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/devices/policy/{policy_id}">client.zeroTrust.devices.policies.<a href="./src/resources/zero-trust/devices/policies/policies.ts">edit</a>(policyId, { ...params }) -> TeamsDevicesDeviceSettingsPolicy | null</code>
- <code title="get /accounts/{account_id}/devices/policy/{policy_id}">client.zeroTrust.devices.policies.<a href="./src/resources/zero-trust/devices/policies/policies.ts">get</a>(policyId, { ...params }) -> TeamsDevicesDeviceSettingsPolicy | null</code>

#### DefaultPolicy

Types:

- <code><a href="./src/resources/zero-trust/devices/policies/default-policy.ts">DefaultPolicyGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/devices/policy">client.zeroTrust.devices.policies.defaultPolicy.<a href="./src/resources/zero-trust/devices/policies/default-policy.ts">get</a>({ ...params }) -> DefaultPolicyGetResponse | null</code>

#### Excludes

Types:

- <code><a href="./src/resources/zero-trust/devices/policies/excludes.ts">TeamsDevicesSplitTunnel</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/excludes.ts">ExcludeUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/excludes.ts">ExcludeListResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/excludes.ts">ExcludeGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/devices/policy/exclude">client.zeroTrust.devices.policies.excludes.<a href="./src/resources/zero-trust/devices/policies/excludes.ts">update</a>([ ...body ]) -> ExcludeUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/devices/policy/exclude">client.zeroTrust.devices.policies.excludes.<a href="./src/resources/zero-trust/devices/policies/excludes.ts">list</a>({ ...params }) -> ExcludeListResponse | null</code>
- <code title="get /accounts/{account_id}/devices/policy/{policy_id}/exclude">client.zeroTrust.devices.policies.excludes.<a href="./src/resources/zero-trust/devices/policies/excludes.ts">get</a>(policyId, { ...params }) -> ExcludeGetResponse | null</code>

#### FallbackDomains

Types:

- <code><a href="./src/resources/zero-trust/devices/policies/fallback-domains.ts">TeamsDevicesFallbackDomain</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/fallback-domains.ts">FallbackDomainUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/fallback-domains.ts">FallbackDomainListResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/fallback-domains.ts">FallbackDomainGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/devices/policy/{policy_id}/fallback_domains">client.zeroTrust.devices.policies.fallbackDomains.<a href="./src/resources/zero-trust/devices/policies/fallback-domains.ts">update</a>(policyId, [ ...body ]) -> FallbackDomainUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/devices/policy/fallback_domains">client.zeroTrust.devices.policies.fallbackDomains.<a href="./src/resources/zero-trust/devices/policies/fallback-domains.ts">list</a>({ ...params }) -> FallbackDomainListResponse | null</code>
- <code title="get /accounts/{account_id}/devices/policy/{policy_id}/fallback_domains">client.zeroTrust.devices.policies.fallbackDomains.<a href="./src/resources/zero-trust/devices/policies/fallback-domains.ts">get</a>(policyId, { ...params }) -> FallbackDomainGetResponse | null</code>

#### Includes

Types:

- <code><a href="./src/resources/zero-trust/devices/policies/includes.ts">TeamsDevicesSplitTunnelInclude</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/includes.ts">IncludeUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/includes.ts">IncludeListResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/includes.ts">IncludeGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/devices/policy/include">client.zeroTrust.devices.policies.includes.<a href="./src/resources/zero-trust/devices/policies/includes.ts">update</a>([ ...body ]) -> IncludeUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/devices/policy/include">client.zeroTrust.devices.policies.includes.<a href="./src/resources/zero-trust/devices/policies/includes.ts">list</a>({ ...params }) -> IncludeListResponse | null</code>
- <code title="get /accounts/{account_id}/devices/policy/{policy_id}/include">client.zeroTrust.devices.policies.includes.<a href="./src/resources/zero-trust/devices/policies/includes.ts">get</a>(policyId, { ...params }) -> IncludeGetResponse | null</code>

### Posture

Types:

- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">TeamsDevicesDevicePostureRules</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">PostureListResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">PostureDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/posture">client.zeroTrust.devices.posture.<a href="./src/resources/zero-trust/devices/posture/posture.ts">create</a>({ ...params }) -> TeamsDevicesDevicePostureRules | null</code>
- <code title="put /accounts/{account_id}/devices/posture/{rule_id}">client.zeroTrust.devices.posture.<a href="./src/resources/zero-trust/devices/posture/posture.ts">update</a>(ruleId, { ...params }) -> TeamsDevicesDevicePostureRules | null</code>
- <code title="get /accounts/{account_id}/devices/posture">client.zeroTrust.devices.posture.<a href="./src/resources/zero-trust/devices/posture/posture.ts">list</a>({ ...params }) -> PostureListResponse | null</code>
- <code title="delete /accounts/{account_id}/devices/posture/{rule_id}">client.zeroTrust.devices.posture.<a href="./src/resources/zero-trust/devices/posture/posture.ts">delete</a>(ruleId, { ...params }) -> PostureDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/devices/posture/{rule_id}">client.zeroTrust.devices.posture.<a href="./src/resources/zero-trust/devices/posture/posture.ts">get</a>(ruleId, { ...params }) -> TeamsDevicesDevicePostureRules | null</code>

#### Integrations

Types:

- <code><a href="./src/resources/zero-trust/devices/posture/integrations.ts">TeamsDevicesDevicePostureIntegrations</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/integrations.ts">IntegrationListResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/integrations.ts">IntegrationDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/posture/integration">client.zeroTrust.devices.posture.integrations.<a href="./src/resources/zero-trust/devices/posture/integrations.ts">create</a>({ ...params }) -> TeamsDevicesDevicePostureIntegrations | null</code>
- <code title="get /accounts/{account_id}/devices/posture/integration">client.zeroTrust.devices.posture.integrations.<a href="./src/resources/zero-trust/devices/posture/integrations.ts">list</a>({ ...params }) -> IntegrationListResponse | null</code>
- <code title="delete /accounts/{account_id}/devices/posture/integration/{integration_id}">client.zeroTrust.devices.posture.integrations.<a href="./src/resources/zero-trust/devices/posture/integrations.ts">delete</a>(integrationId, { ...params }) -> IntegrationDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/devices/posture/integration/{integration_id}">client.zeroTrust.devices.posture.integrations.<a href="./src/resources/zero-trust/devices/posture/integrations.ts">edit</a>(integrationId, { ...params }) -> TeamsDevicesDevicePostureIntegrations | null</code>
- <code title="get /accounts/{account_id}/devices/posture/integration/{integration_id}">client.zeroTrust.devices.posture.integrations.<a href="./src/resources/zero-trust/devices/posture/integrations.ts">get</a>(integrationId, { ...params }) -> TeamsDevicesDevicePostureIntegrations | null</code>

### Revokes

Types:

- <code><a href="./src/resources/zero-trust/devices/revokes.ts">RevokeCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/revoke">client.zeroTrust.devices.revokes.<a href="./src/resources/zero-trust/devices/revokes.ts">create</a>([ ...body ]) -> RevokeCreateResponse | null</code>

### Settings

Types:

- <code><a href="./src/resources/zero-trust/devices/settings.ts">TeamsDevicesZeroTrustAccountDeviceSettings</a></code>

Methods:

- <code title="put /accounts/{account_id}/devices/settings">client.zeroTrust.devices.settings.<a href="./src/resources/zero-trust/devices/settings.ts">update</a>({ ...params }) -> TeamsDevicesZeroTrustAccountDeviceSettings | null</code>
- <code title="get /accounts/{account_id}/devices/settings">client.zeroTrust.devices.settings.<a href="./src/resources/zero-trust/devices/settings.ts">list</a>({ ...params }) -> TeamsDevicesZeroTrustAccountDeviceSettings | null</code>

### Unrevokes

Types:

- <code><a href="./src/resources/zero-trust/devices/unrevokes.ts">UnrevokeCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/unrevoke">client.zeroTrust.devices.unrevokes.<a href="./src/resources/zero-trust/devices/unrevokes.ts">create</a>([ ...body ]) -> UnrevokeCreateResponse | null</code>

### OverrideCodes

Types:

- <code><a href="./src/resources/zero-trust/devices/override-codes.ts">OverrideCodeListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/devices/{device_id}/override_codes">client.zeroTrust.devices.overrideCodes.<a href="./src/resources/zero-trust/devices/override-codes.ts">list</a>(deviceId, { ...params }) -> OverrideCodeListResponse | null</code>

## IdentityProviders

Types:

- <code><a href="./src/resources/zero-trust/identity-providers.ts">AccessIdentityProviders</a></code>
- <code><a href="./src/resources/zero-trust/identity-providers.ts">IdentityProviderListResponse</a></code>
- <code><a href="./src/resources/zero-trust/identity-providers.ts">IdentityProviderDeleteResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/identity_providers">client.zeroTrust.identityProviders.<a href="./src/resources/zero-trust/identity-providers.ts">create</a>({ ...params }) -> AccessIdentityProviders</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/access/identity_providers/{uuid}">client.zeroTrust.identityProviders.<a href="./src/resources/zero-trust/identity-providers.ts">update</a>(uuid, { ...params }) -> AccessIdentityProviders</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/identity_providers">client.zeroTrust.identityProviders.<a href="./src/resources/zero-trust/identity-providers.ts">list</a>({ ...params }) -> IdentityProviderListResponse | null</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/identity_providers/{uuid}">client.zeroTrust.identityProviders.<a href="./src/resources/zero-trust/identity-providers.ts">delete</a>(uuid, { ...params }) -> IdentityProviderDeleteResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/identity_providers/{uuid}">client.zeroTrust.identityProviders.<a href="./src/resources/zero-trust/identity-providers.ts">get</a>(uuid, { ...params }) -> AccessIdentityProviders</code>

## Organizations

Types:

- <code><a href="./src/resources/zero-trust/organizations.ts">AccessOrganizations</a></code>
- <code><a href="./src/resources/zero-trust/organizations.ts">OrganizationRevokeUsersResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/organizations">client.zeroTrust.organizations.<a href="./src/resources/zero-trust/organizations.ts">create</a>({ ...params }) -> AccessOrganizations</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/access/organizations">client.zeroTrust.organizations.<a href="./src/resources/zero-trust/organizations.ts">update</a>({ ...params }) -> AccessOrganizations</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/organizations">client.zeroTrust.organizations.<a href="./src/resources/zero-trust/organizations.ts">list</a>({ ...params }) -> AccessOrganizations</code>
- <code title="post /{account_or_zone}/{account_or_zone_id}/access/organizations/revoke_user">client.zeroTrust.organizations.<a href="./src/resources/zero-trust/organizations.ts">revokeUsers</a>({ ...params }) -> OrganizationRevokeUsersResponse</code>

## Seats

Types:

- <code><a href="./src/resources/zero-trust/seats.ts">AccessSeats</a></code>
- <code><a href="./src/resources/zero-trust/seats.ts">SeatEditResponse</a></code>

Methods:

- <code title="patch /accounts/{identifier}/access/seats">client.zeroTrust.seats.<a href="./src/resources/zero-trust/seats.ts">edit</a>(identifier, [ ...body ]) -> SeatEditResponse | null</code>

## Access

### Applications

Types:

- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">AccessApps</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">ApplicationListResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">ApplicationDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">ApplicationRevokeTokensResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/apps">client.zeroTrust.access.applications.<a href="./src/resources/zero-trust/access/applications/applications.ts">create</a>({ ...params }) -> AccessApps</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}">client.zeroTrust.access.applications.<a href="./src/resources/zero-trust/access/applications/applications.ts">update</a>(appId, { ...params }) -> AccessApps</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps">client.zeroTrust.access.applications.<a href="./src/resources/zero-trust/access/applications/applications.ts">list</a>({ ...params }) -> ApplicationListResponse | null</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}">client.zeroTrust.access.applications.<a href="./src/resources/zero-trust/access/applications/applications.ts">delete</a>(appId, { ...params }) -> ApplicationDeleteResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}">client.zeroTrust.access.applications.<a href="./src/resources/zero-trust/access/applications/applications.ts">get</a>(appId, { ...params }) -> AccessApps</code>
- <code title="post /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}/revoke_tokens">client.zeroTrust.access.applications.<a href="./src/resources/zero-trust/access/applications/applications.ts">revokeTokens</a>(appId, { ...params }) -> ApplicationRevokeTokensResponse | null</code>

#### CAs

Types:

- <code><a href="./src/resources/zero-trust/access/applications/cas.ts">AccessCA</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/cas.ts">CACreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/cas.ts">CAListResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/cas.ts">CADeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/cas.ts">CAGetResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid}/ca">client.zeroTrust.access.applications.cas.<a href="./src/resources/zero-trust/access/applications/cas.ts">create</a>(uuid, { ...params }) -> CACreateResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps/ca">client.zeroTrust.access.applications.cas.<a href="./src/resources/zero-trust/access/applications/cas.ts">list</a>({ ...params }) -> CAListResponse | null</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid}/ca">client.zeroTrust.access.applications.cas.<a href="./src/resources/zero-trust/access/applications/cas.ts">delete</a>(uuid, { ...params }) -> CADeleteResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid}/ca">client.zeroTrust.access.applications.cas.<a href="./src/resources/zero-trust/access/applications/cas.ts">get</a>(uuid, { ...params }) -> CAGetResponse</code>

#### UserPolicyChecks

Types:

- <code><a href="./src/resources/zero-trust/access/applications/user-policy-checks.ts">UserPolicyCheckListResponse</a></code>

Methods:

- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}/user_policy_checks">client.zeroTrust.access.applications.userPolicyChecks.<a href="./src/resources/zero-trust/access/applications/user-policy-checks.ts">list</a>(appId, { ...params }) -> UserPolicyCheckListResponse</code>

#### Policies

Types:

- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">AccessPolicies</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">PolicyListResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">PolicyDeleteResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid}/policies">client.zeroTrust.access.applications.policies.<a href="./src/resources/zero-trust/access/applications/policies.ts">create</a>(uuid, { ...params }) -> AccessPolicies</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid1}/policies/{uuid}">client.zeroTrust.access.applications.policies.<a href="./src/resources/zero-trust/access/applications/policies.ts">update</a>(uuid1, uuid, { ...params }) -> AccessPolicies</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid}/policies">client.zeroTrust.access.applications.policies.<a href="./src/resources/zero-trust/access/applications/policies.ts">list</a>(uuid, { ...params }) -> PolicyListResponse | null</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid1}/policies/{uuid}">client.zeroTrust.access.applications.policies.<a href="./src/resources/zero-trust/access/applications/policies.ts">delete</a>(uuid1, uuid, { ...params }) -> PolicyDeleteResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid1}/policies/{uuid}">client.zeroTrust.access.applications.policies.<a href="./src/resources/zero-trust/access/applications/policies.ts">get</a>(uuid1, uuid, { ...params }) -> AccessPolicies</code>

### Certificates

Types:

- <code><a href="./src/resources/zero-trust/access/certificates/certificates.ts">AccessCertificates</a></code>
- <code><a href="./src/resources/zero-trust/access/certificates/certificates.ts">CertificateListResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/certificates/certificates.ts">CertificateDeleteResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/certificates">client.zeroTrust.access.certificates.<a href="./src/resources/zero-trust/access/certificates/certificates.ts">create</a>({ ...params }) -> AccessCertificates</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/access/certificates/{uuid}">client.zeroTrust.access.certificates.<a href="./src/resources/zero-trust/access/certificates/certificates.ts">update</a>(uuid, { ...params }) -> AccessCertificates</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/certificates">client.zeroTrust.access.certificates.<a href="./src/resources/zero-trust/access/certificates/certificates.ts">list</a>({ ...params }) -> CertificateListResponse | null</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/certificates/{uuid}">client.zeroTrust.access.certificates.<a href="./src/resources/zero-trust/access/certificates/certificates.ts">delete</a>(uuid, { ...params }) -> CertificateDeleteResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/certificates/{uuid}">client.zeroTrust.access.certificates.<a href="./src/resources/zero-trust/access/certificates/certificates.ts">get</a>(uuid, { ...params }) -> AccessCertificates</code>

#### Settings

Types:

- <code><a href="./src/resources/zero-trust/access/certificates/settings.ts">AccessSettings</a></code>
- <code><a href="./src/resources/zero-trust/access/certificates/settings.ts">SettingUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/certificates/settings.ts">SettingListResponse</a></code>

Methods:

- <code title="put /{account_or_zone}/{account_or_zone_id}/access/certificates/settings">client.zeroTrust.access.certificates.settings.<a href="./src/resources/zero-trust/access/certificates/settings.ts">update</a>({ ...params }) -> SettingUpdateResponse | null</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/certificates/settings">client.zeroTrust.access.certificates.settings.<a href="./src/resources/zero-trust/access/certificates/settings.ts">list</a>({ ...params }) -> SettingListResponse | null</code>

### Groups

Types:

- <code><a href="./src/resources/zero-trust/access/groups.ts">AccessGroups</a></code>
- <code><a href="./src/resources/zero-trust/access/groups.ts">GroupListResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/groups.ts">GroupDeleteResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/groups">client.zeroTrust.access.groups.<a href="./src/resources/zero-trust/access/groups.ts">create</a>({ ...params }) -> AccessGroups</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/access/groups/{uuid}">client.zeroTrust.access.groups.<a href="./src/resources/zero-trust/access/groups.ts">update</a>(uuid, { ...params }) -> AccessGroups</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/groups">client.zeroTrust.access.groups.<a href="./src/resources/zero-trust/access/groups.ts">list</a>({ ...params }) -> GroupListResponse | null</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/groups/{uuid}">client.zeroTrust.access.groups.<a href="./src/resources/zero-trust/access/groups.ts">delete</a>(uuid, { ...params }) -> GroupDeleteResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/groups/{uuid}">client.zeroTrust.access.groups.<a href="./src/resources/zero-trust/access/groups.ts">get</a>(uuid, { ...params }) -> AccessGroups</code>

### ServiceTokens

Types:

- <code><a href="./src/resources/zero-trust/access/service-tokens.ts">AccessServiceTokens</a></code>
- <code><a href="./src/resources/zero-trust/access/service-tokens.ts">ServiceTokenCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/service-tokens.ts">ServiceTokenListResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/service-tokens.ts">ServiceTokenRotateResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/service_tokens">client.zeroTrust.access.serviceTokens.<a href="./src/resources/zero-trust/access/service-tokens.ts">create</a>({ ...params }) -> ServiceTokenCreateResponse</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/access/service_tokens/{uuid}">client.zeroTrust.access.serviceTokens.<a href="./src/resources/zero-trust/access/service-tokens.ts">update</a>(uuid, { ...params }) -> AccessServiceTokens</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/service_tokens">client.zeroTrust.access.serviceTokens.<a href="./src/resources/zero-trust/access/service-tokens.ts">list</a>({ ...params }) -> ServiceTokenListResponse | null</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/service_tokens/{uuid}">client.zeroTrust.access.serviceTokens.<a href="./src/resources/zero-trust/access/service-tokens.ts">delete</a>(uuid, { ...params }) -> AccessServiceTokens</code>
- <code title="post /accounts/{identifier}/access/service_tokens/{uuid}/refresh">client.zeroTrust.access.serviceTokens.<a href="./src/resources/zero-trust/access/service-tokens.ts">refresh</a>(identifier, uuid) -> AccessServiceTokens</code>
- <code title="post /accounts/{identifier}/access/service_tokens/{uuid}/rotate">client.zeroTrust.access.serviceTokens.<a href="./src/resources/zero-trust/access/service-tokens.ts">rotate</a>(identifier, uuid) -> ServiceTokenRotateResponse</code>

### Bookmarks

Types:

- <code><a href="./src/resources/zero-trust/access/bookmarks.ts">AccessBookmarks</a></code>
- <code><a href="./src/resources/zero-trust/access/bookmarks.ts">BookmarkListResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/bookmarks.ts">BookmarkDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{identifier}/access/bookmarks/{uuid}">client.zeroTrust.access.bookmarks.<a href="./src/resources/zero-trust/access/bookmarks.ts">create</a>(identifier, uuid) -> AccessBookmarks</code>
- <code title="put /accounts/{identifier}/access/bookmarks/{uuid}">client.zeroTrust.access.bookmarks.<a href="./src/resources/zero-trust/access/bookmarks.ts">update</a>(identifier, uuid) -> AccessBookmarks</code>
- <code title="get /accounts/{identifier}/access/bookmarks">client.zeroTrust.access.bookmarks.<a href="./src/resources/zero-trust/access/bookmarks.ts">list</a>(identifier) -> BookmarkListResponse | null</code>
- <code title="delete /accounts/{identifier}/access/bookmarks/{uuid}">client.zeroTrust.access.bookmarks.<a href="./src/resources/zero-trust/access/bookmarks.ts">delete</a>(identifier, uuid) -> BookmarkDeleteResponse</code>
- <code title="get /accounts/{identifier}/access/bookmarks/{uuid}">client.zeroTrust.access.bookmarks.<a href="./src/resources/zero-trust/access/bookmarks.ts">get</a>(identifier, uuid) -> AccessBookmarks</code>

### Keys

Types:

- <code><a href="./src/resources/zero-trust/access/keys.ts">KeyUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/keys.ts">KeyListResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/keys.ts">KeyRotateResponse</a></code>

Methods:

- <code title="put /accounts/{identifier}/access/keys">client.zeroTrust.access.keys.<a href="./src/resources/zero-trust/access/keys.ts">update</a>(identifier, { ...params }) -> KeyUpdateResponse</code>
- <code title="get /accounts/{identifier}/access/keys">client.zeroTrust.access.keys.<a href="./src/resources/zero-trust/access/keys.ts">list</a>(identifier) -> KeyListResponse</code>
- <code title="post /accounts/{identifier}/access/keys/rotate">client.zeroTrust.access.keys.<a href="./src/resources/zero-trust/access/keys.ts">rotate</a>(identifier) -> KeyRotateResponse</code>

### Logs

#### AccessRequests

Types:

- <code><a href="./src/resources/zero-trust/access/logs/access-requests.ts">AccessAccessRequests</a></code>
- <code><a href="./src/resources/zero-trust/access/logs/access-requests.ts">AccessRequestListResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/access/logs/access_requests">client.zeroTrust.access.logs.accessRequests.<a href="./src/resources/zero-trust/access/logs/access-requests.ts">list</a>(identifier) -> AccessRequestListResponse | null</code>

### Users

Types:

- <code><a href="./src/resources/zero-trust/access/users/users.ts">AccessUsers</a></code>
- <code><a href="./src/resources/zero-trust/access/users/users.ts">UserListResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/access/users">client.zeroTrust.access.users.<a href="./src/resources/zero-trust/access/users/users.ts">list</a>(identifier) -> UserListResponse | null</code>

#### ActiveSessions

Types:

- <code><a href="./src/resources/zero-trust/access/users/active-sessions.ts">ActiveSessionListResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/users/active-sessions.ts">ActiveSessionGetResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/access/users/{id}/active_sessions">client.zeroTrust.access.users.activeSessions.<a href="./src/resources/zero-trust/access/users/active-sessions.ts">list</a>(identifier, id) -> ActiveSessionListResponse | null</code>
- <code title="get /accounts/{identifier}/access/users/{id}/active_sessions/{nonce}">client.zeroTrust.access.users.activeSessions.<a href="./src/resources/zero-trust/access/users/active-sessions.ts">get</a>(identifier, id, nonce) -> ActiveSessionGetResponse</code>

#### LastSeenIdentity

Types:

- <code><a href="./src/resources/zero-trust/access/users/last-seen-identity.ts">AccessIdentity</a></code>

Methods:

- <code title="get /accounts/{identifier}/access/users/{id}/last_seen_identity">client.zeroTrust.access.users.lastSeenIdentity.<a href="./src/resources/zero-trust/access/users/last-seen-identity.ts">get</a>(identifier, id) -> AccessIdentity</code>

#### FailedLogins

Types:

- <code><a href="./src/resources/zero-trust/access/users/failed-logins.ts">FailedLoginListResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/access/users/{id}/failed_logins">client.zeroTrust.access.users.failedLogins.<a href="./src/resources/zero-trust/access/users/failed-logins.ts">list</a>(identifier, id) -> FailedLoginListResponse | null</code>

### CustomPages

Types:

- <code><a href="./src/resources/zero-trust/access/custom-pages.ts">AccessCustomPage</a></code>
- <code><a href="./src/resources/zero-trust/access/custom-pages.ts">AccessCustomPageWithoutHTML</a></code>
- <code><a href="./src/resources/zero-trust/access/custom-pages.ts">CustomPageListResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/custom-pages.ts">CustomPageDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{identifier}/access/custom_pages">client.zeroTrust.access.customPages.<a href="./src/resources/zero-trust/access/custom-pages.ts">create</a>(identifier, { ...params }) -> AccessCustomPageWithoutHTML</code>
- <code title="put /accounts/{identifier}/access/custom_pages/{uuid}">client.zeroTrust.access.customPages.<a href="./src/resources/zero-trust/access/custom-pages.ts">update</a>(identifier, uuid, { ...params }) -> AccessCustomPageWithoutHTML</code>
- <code title="get /accounts/{identifier}/access/custom_pages">client.zeroTrust.access.customPages.<a href="./src/resources/zero-trust/access/custom-pages.ts">list</a>(identifier) -> CustomPageListResponse | null</code>
- <code title="delete /accounts/{identifier}/access/custom_pages/{uuid}">client.zeroTrust.access.customPages.<a href="./src/resources/zero-trust/access/custom-pages.ts">delete</a>(identifier, uuid) -> CustomPageDeleteResponse</code>
- <code title="get /accounts/{identifier}/access/custom_pages/{uuid}">client.zeroTrust.access.customPages.<a href="./src/resources/zero-trust/access/custom-pages.ts">get</a>(identifier, uuid) -> AccessCustomPage</code>

### Tags

Types:

- <code><a href="./src/resources/zero-trust/access/tags.ts">AccessTag</a></code>
- <code><a href="./src/resources/zero-trust/access/tags.ts">TagListResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/tags.ts">TagDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{identifier}/access/tags">client.zeroTrust.access.tags.<a href="./src/resources/zero-trust/access/tags.ts">create</a>(identifier, { ...params }) -> AccessTag</code>
- <code title="put /accounts/{identifier}/access/tags/{name}">client.zeroTrust.access.tags.<a href="./src/resources/zero-trust/access/tags.ts">update</a>(identifier, tagName, { ...params }) -> AccessTag</code>
- <code title="get /accounts/{identifier}/access/tags">client.zeroTrust.access.tags.<a href="./src/resources/zero-trust/access/tags.ts">list</a>(identifier) -> TagListResponse | null</code>
- <code title="delete /accounts/{identifier}/access/tags/{name}">client.zeroTrust.access.tags.<a href="./src/resources/zero-trust/access/tags.ts">delete</a>(identifier, name) -> TagDeleteResponse</code>
- <code title="get /accounts/{identifier}/access/tags/{name}">client.zeroTrust.access.tags.<a href="./src/resources/zero-trust/access/tags.ts">get</a>(identifier, name) -> AccessTag</code>

## DEX

### Colos

Types:

- <code><a href="./src/resources/zero-trust/dex/colos.ts">ColoListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/colos">client.zeroTrust.dex.colos.<a href="./src/resources/zero-trust/dex/colos.ts">list</a>({ ...params }) -> ColoListResponse | null</code>

### FleetStatus

#### Devices

Types:

- <code><a href="./src/resources/zero-trust/dex/fleet-status/devices.ts">DigitalExperienceMonitoringDevice</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/fleet-status/devices">client.zeroTrust.dex.fleetStatus.devices.<a href="./src/resources/zero-trust/dex/fleet-status/devices.ts">list</a>({ ...params }) -> DigitalExperienceMonitoringDevicesV4PagePaginationArray</code>

#### Live

Types:

- <code><a href="./src/resources/zero-trust/dex/fleet-status/live.ts">LiveListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/fleet-status/live">client.zeroTrust.dex.fleetStatus.live.<a href="./src/resources/zero-trust/dex/fleet-status/live.ts">list</a>({ ...params }) -> LiveListResponse</code>

#### OverTime

Methods:

- <code title="get /accounts/{account_id}/dex/fleet-status/over-time">client.zeroTrust.dex.fleetStatus.overTime.<a href="./src/resources/zero-trust/dex/fleet-status/over-time.ts">list</a>({ ...params }) -> void</code>

### HTTPTests

Types:

- <code><a href="./src/resources/zero-trust/dex/http-tests/http-tests.ts">DigitalExperienceMonitoringHTTPDetails</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/http-tests/{test_id}">client.zeroTrust.dex.httpTests.<a href="./src/resources/zero-trust/dex/http-tests/http-tests.ts">get</a>(testId, { ...params }) -> DigitalExperienceMonitoringHTTPDetails</code>

#### Percentiles

Types:

- <code><a href="./src/resources/zero-trust/dex/http-tests/percentiles.ts">DigitalExperienceMonitoringHTTPDetailsPercentiles</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/http-tests/{test_id}/percentiles">client.zeroTrust.dex.httpTests.percentiles.<a href="./src/resources/zero-trust/dex/http-tests/percentiles.ts">list</a>(testId, { ...params }) -> DigitalExperienceMonitoringHTTPDetailsPercentiles</code>

### Tests

Types:

- <code><a href="./src/resources/zero-trust/dex/tests/tests.ts">DigitalExperienceMonitoringTests</a></code>
- <code><a href="./src/resources/zero-trust/dex/tests/tests.ts">TestListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/tests">client.zeroTrust.dex.tests.<a href="./src/resources/zero-trust/dex/tests/tests.ts">list</a>({ ...params }) -> TestListResponsesV4PagePagination</code>

#### UniqueDevices

Types:

- <code><a href="./src/resources/zero-trust/dex/tests/unique-devices.ts">DigitalExperienceMonitoringUniqueDevices</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/tests/unique-devices">client.zeroTrust.dex.tests.uniqueDevices.<a href="./src/resources/zero-trust/dex/tests/unique-devices.ts">list</a>({ ...params }) -> DigitalExperienceMonitoringUniqueDevices</code>

### TracerouteTestResults

#### NetworkPath

Types:

- <code><a href="./src/resources/zero-trust/dex/traceroute-test-results/network-path.ts">DigitalExperienceMonitoringTracerouteTestResultNetworkPath</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/traceroute-test-results/{test_result_id}/network-path">client.zeroTrust.dex.tracerouteTestResults.networkPath.<a href="./src/resources/zero-trust/dex/traceroute-test-results/network-path.ts">list</a>(testResultId, { ...params }) -> DigitalExperienceMonitoringTracerouteTestResultNetworkPath</code>

### TracerouteTests

Types:

- <code><a href="./src/resources/zero-trust/dex/traceroute-tests.ts">DigitalExperienceMonitoringTracerouteDetails</a></code>
- <code><a href="./src/resources/zero-trust/dex/traceroute-tests.ts">DigitalExperienceMonitoringTracerouteDetailsPercentiles</a></code>
- <code><a href="./src/resources/zero-trust/dex/traceroute-tests.ts">DigitalExperienceMonitoringTracerouteTestNetworkPath</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/traceroute-tests/{test_id}">client.zeroTrust.dex.tracerouteTests.<a href="./src/resources/zero-trust/dex/traceroute-tests.ts">get</a>(testId, { ...params }) -> DigitalExperienceMonitoringTracerouteDetails</code>
- <code title="get /accounts/{account_id}/dex/traceroute-tests/{test_id}/network-path">client.zeroTrust.dex.tracerouteTests.<a href="./src/resources/zero-trust/dex/traceroute-tests.ts">networkPath</a>(testId, { ...params }) -> DigitalExperienceMonitoringTracerouteTestNetworkPath</code>
- <code title="get /accounts/{account_id}/dex/traceroute-tests/{test_id}/percentiles">client.zeroTrust.dex.tracerouteTests.<a href="./src/resources/zero-trust/dex/traceroute-tests.ts">percentiles</a>(testId, { ...params }) -> DigitalExperienceMonitoringTracerouteDetailsPercentiles</code>

## Tunnels

Types:

- <code><a href="./src/resources/zero-trust/tunnels/tunnels.ts">TunnelArgoTunnel</a></code>
- <code><a href="./src/resources/zero-trust/tunnels/tunnels.ts">TunnelListResponse</a></code>
- <code><a href="./src/resources/zero-trust/tunnels/tunnels.ts">TunnelEditResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/tunnels">client.zeroTrust.tunnels.<a href="./src/resources/zero-trust/tunnels/tunnels.ts">create</a>({ ...params }) -> TunnelArgoTunnel</code>
- <code title="get /accounts/{account_id}/tunnels">client.zeroTrust.tunnels.<a href="./src/resources/zero-trust/tunnels/tunnels.ts">list</a>({ ...params }) -> TunnelListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/tunnels/{tunnel_id}">client.zeroTrust.tunnels.<a href="./src/resources/zero-trust/tunnels/tunnels.ts">delete</a>(tunnelId, { ...params }) -> TunnelArgoTunnel</code>
- <code title="patch /accounts/{account_id}/cfd_tunnel/{tunnel_id}">client.zeroTrust.tunnels.<a href="./src/resources/zero-trust/tunnels/tunnels.ts">edit</a>(tunnelId, { ...params }) -> TunnelEditResponse</code>
- <code title="get /accounts/{account_id}/tunnels/{tunnel_id}">client.zeroTrust.tunnels.<a href="./src/resources/zero-trust/tunnels/tunnels.ts">get</a>(tunnelId, { ...params }) -> TunnelArgoTunnel</code>

### Configurations

Types:

- <code><a href="./src/resources/zero-trust/tunnels/configurations.ts">ConfigurationUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/tunnels/configurations.ts">ConfigurationGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/cfd_tunnel/{tunnel_id}/configurations">client.zeroTrust.tunnels.configurations.<a href="./src/resources/zero-trust/tunnels/configurations.ts">update</a>(tunnelId, { ...params }) -> ConfigurationUpdateResponse</code>
- <code title="get /accounts/{account_id}/cfd_tunnel/{tunnel_id}/configurations">client.zeroTrust.tunnels.configurations.<a href="./src/resources/zero-trust/tunnels/configurations.ts">get</a>(tunnelId, { ...params }) -> ConfigurationGetResponse</code>

### Connections

Types:

- <code><a href="./src/resources/zero-trust/tunnels/connections.ts">TunnelTunnelClient</a></code>
- <code><a href="./src/resources/zero-trust/tunnels/connections.ts">ConnectionDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/tunnels/connections.ts">ConnectionGetResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/tunnels/{tunnel_id}/connections">client.zeroTrust.tunnels.connections.<a href="./src/resources/zero-trust/tunnels/connections.ts">delete</a>(tunnelId, { ...params }) -> ConnectionDeleteResponse</code>
- <code title="get /accounts/{account_id}/cfd_tunnel/{tunnel_id}/connections">client.zeroTrust.tunnels.connections.<a href="./src/resources/zero-trust/tunnels/connections.ts">get</a>(tunnelId, { ...params }) -> ConnectionGetResponse | null</code>

### Token

Types:

- <code><a href="./src/resources/zero-trust/tunnels/token.ts">TokenGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cfd_tunnel/{tunnel_id}/token">client.zeroTrust.tunnels.token.<a href="./src/resources/zero-trust/tunnels/token.ts">get</a>(tunnelId, { ...params }) -> TokenGetResponse</code>

### Connectors

Methods:

- <code title="get /accounts/{account_id}/cfd_tunnel/{tunnel_id}/connectors/{connector_id}">client.zeroTrust.tunnels.connectors.<a href="./src/resources/zero-trust/tunnels/connectors.ts">get</a>(tunnelId, connectorId, { ...params }) -> TunnelTunnelClient</code>

### Management

Types:

- <code><a href="./src/resources/zero-trust/tunnels/management.ts">ManagementCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cfd_tunnel/{tunnel_id}/management">client.zeroTrust.tunnels.management.<a href="./src/resources/zero-trust/tunnels/management.ts">create</a>(tunnelId, { ...params }) -> ManagementCreateResponse</code>

## ConnectivitySettings

Types:

- <code><a href="./src/resources/zero-trust/connectivity-settings.ts">ConnectivitySettingEditResponse</a></code>
- <code><a href="./src/resources/zero-trust/connectivity-settings.ts">ConnectivitySettingGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/zerotrust/connectivity_settings">client.zeroTrust.connectivitySettings.<a href="./src/resources/zero-trust/connectivity-settings.ts">edit</a>({ ...params }) -> ConnectivitySettingEditResponse</code>
- <code title="get /accounts/{account_id}/zerotrust/connectivity_settings">client.zeroTrust.connectivitySettings.<a href="./src/resources/zero-trust/connectivity-settings.ts">get</a>({ ...params }) -> ConnectivitySettingGetResponse</code>

## DLP

### Datasets

Types:

- <code><a href="./src/resources/zero-trust/dlp/datasets/datasets.ts">DLPDataset</a></code>
- <code><a href="./src/resources/zero-trust/dlp/datasets/datasets.ts">DLPDatasetArray</a></code>
- <code><a href="./src/resources/zero-trust/dlp/datasets/datasets.ts">DLPDatasetCreation</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/datasets">client.zeroTrust.dlp.datasets.<a href="./src/resources/zero-trust/dlp/datasets/datasets.ts">create</a>({ ...params }) -> DLPDatasetCreation</code>
- <code title="put /accounts/{account_id}/dlp/datasets/{dataset_id}">client.zeroTrust.dlp.datasets.<a href="./src/resources/zero-trust/dlp/datasets/datasets.ts">update</a>(datasetId, { ...params }) -> DLPDataset</code>
- <code title="get /accounts/{account_id}/dlp/datasets">client.zeroTrust.dlp.datasets.<a href="./src/resources/zero-trust/dlp/datasets/datasets.ts">list</a>({ ...params }) -> DLPDatasetArray</code>
- <code title="delete /accounts/{account_id}/dlp/datasets/{dataset_id}">client.zeroTrust.dlp.datasets.<a href="./src/resources/zero-trust/dlp/datasets/datasets.ts">delete</a>(datasetId, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/dlp/datasets/{dataset_id}">client.zeroTrust.dlp.datasets.<a href="./src/resources/zero-trust/dlp/datasets/datasets.ts">get</a>(datasetId, { ...params }) -> DLPDataset</code>

#### Upload

Types:

- <code><a href="./src/resources/zero-trust/dlp/datasets/upload.ts">DLPDatasetNewVersion</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/datasets/{dataset_id}/upload">client.zeroTrust.dlp.datasets.upload.<a href="./src/resources/zero-trust/dlp/datasets/upload.ts">create</a>(datasetId, { ...params }) -> DLPDatasetNewVersion</code>
- <code title="post /accounts/{account_id}/dlp/datasets/{dataset_id}/upload/{version}">client.zeroTrust.dlp.datasets.upload.<a href="./src/resources/zero-trust/dlp/datasets/upload.ts">edit</a>(datasetId, version, { ...params }) -> DLPDataset</code>

### Patterns

Types:

- <code><a href="./src/resources/zero-trust/dlp/patterns.ts">PatternValidateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/patterns/validate">client.zeroTrust.dlp.patterns.<a href="./src/resources/zero-trust/dlp/patterns.ts">validate</a>({ ...params }) -> PatternValidateResponse</code>

### PayloadLogs

Types:

- <code><a href="./src/resources/zero-trust/dlp/payload-logs.ts">PayloadLogUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/payload-logs.ts">PayloadLogGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/dlp/payload_log">client.zeroTrust.dlp.payloadLogs.<a href="./src/resources/zero-trust/dlp/payload-logs.ts">update</a>({ ...params }) -> PayloadLogUpdateResponse</code>
- <code title="get /accounts/{account_id}/dlp/payload_log">client.zeroTrust.dlp.payloadLogs.<a href="./src/resources/zero-trust/dlp/payload-logs.ts">get</a>({ ...params }) -> PayloadLogGetResponse</code>

### Profiles

Types:

- <code><a href="./src/resources/zero-trust/dlp/profiles/profiles.ts">DLPProfiles</a></code>
- <code><a href="./src/resources/zero-trust/dlp/profiles/profiles.ts">ProfileListResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/profiles/profiles.ts">ProfileGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dlp/profiles">client.zeroTrust.dlp.profiles.<a href="./src/resources/zero-trust/dlp/profiles/profiles.ts">list</a>({ ...params }) -> ProfileListResponse | null</code>
- <code title="get /accounts/{account_id}/dlp/profiles/{profile_id}">client.zeroTrust.dlp.profiles.<a href="./src/resources/zero-trust/dlp/profiles/profiles.ts">get</a>(profileId, { ...params }) -> ProfileGetResponse</code>

#### Custom

Types:

- <code><a href="./src/resources/zero-trust/dlp/profiles/custom.ts">DLPCustomProfile</a></code>
- <code><a href="./src/resources/zero-trust/dlp/profiles/custom.ts">CustomCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/profiles/custom.ts">CustomDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/profiles/custom">client.zeroTrust.dlp.profiles.custom.<a href="./src/resources/zero-trust/dlp/profiles/custom.ts">create</a>({ ...params }) -> CustomCreateResponse | null</code>
- <code title="put /accounts/{account_id}/dlp/profiles/custom/{profile_id}">client.zeroTrust.dlp.profiles.custom.<a href="./src/resources/zero-trust/dlp/profiles/custom.ts">update</a>(profileId, { ...params }) -> DLPCustomProfile</code>
- <code title="delete /accounts/{account_id}/dlp/profiles/custom/{profile_id}">client.zeroTrust.dlp.profiles.custom.<a href="./src/resources/zero-trust/dlp/profiles/custom.ts">delete</a>(profileId, { ...params }) -> CustomDeleteResponse</code>
- <code title="get /accounts/{account_id}/dlp/profiles/custom/{profile_id}">client.zeroTrust.dlp.profiles.custom.<a href="./src/resources/zero-trust/dlp/profiles/custom.ts">get</a>(profileId, { ...params }) -> DLPCustomProfile</code>

#### Predefined

Types:

- <code><a href="./src/resources/zero-trust/dlp/profiles/predefined.ts">DLPPredefinedProfile</a></code>

Methods:

- <code title="put /accounts/{account_id}/dlp/profiles/predefined/{profile_id}">client.zeroTrust.dlp.profiles.predefined.<a href="./src/resources/zero-trust/dlp/profiles/predefined.ts">update</a>(profileId, { ...params }) -> DLPPredefinedProfile</code>
- <code title="get /accounts/{account_id}/dlp/profiles/predefined/{profile_id}">client.zeroTrust.dlp.profiles.predefined.<a href="./src/resources/zero-trust/dlp/profiles/predefined.ts">get</a>(profileId, { ...params }) -> DLPPredefinedProfile</code>

## Gateway

Types:

- <code><a href="./src/resources/zero-trust/gateway/gateway.ts">GatewayCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/gateway.ts">GatewayListResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/gateway">client.zeroTrust.gateway.<a href="./src/resources/zero-trust/gateway/gateway.ts">create</a>({ ...params }) -> GatewayCreateResponse</code>
- <code title="get /accounts/{account_id}/gateway">client.zeroTrust.gateway.<a href="./src/resources/zero-trust/gateway/gateway.ts">list</a>({ ...params }) -> GatewayListResponse</code>

### AuditSSHSettings

Types:

- <code><a href="./src/resources/zero-trust/gateway/audit-ssh-settings.ts">ZeroTrustGatewaySettings</a></code>

Methods:

- <code title="put /accounts/{account_id}/gateway/audit_ssh_settings">client.zeroTrust.gateway.auditSSHSettings.<a href="./src/resources/zero-trust/gateway/audit-ssh-settings.ts">update</a>({ ...params }) -> ZeroTrustGatewaySettings</code>
- <code title="get /accounts/{account_id}/gateway/audit_ssh_settings">client.zeroTrust.gateway.auditSSHSettings.<a href="./src/resources/zero-trust/gateway/audit-ssh-settings.ts">get</a>({ ...params }) -> ZeroTrustGatewaySettings</code>

### Categories

Types:

- <code><a href="./src/resources/zero-trust/gateway/categories.ts">ZeroTrustGatewayCategories</a></code>
- <code><a href="./src/resources/zero-trust/gateway/categories.ts">CategoryListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/gateway/categories">client.zeroTrust.gateway.categories.<a href="./src/resources/zero-trust/gateway/categories.ts">list</a>({ ...params }) -> CategoryListResponse | null</code>

### AppTypes

Types:

- <code><a href="./src/resources/zero-trust/gateway/app-types.ts">ZeroTrustGatewayAppTypes</a></code>
- <code><a href="./src/resources/zero-trust/gateway/app-types.ts">AppTypeListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/gateway/app_types">client.zeroTrust.gateway.appTypes.<a href="./src/resources/zero-trust/gateway/app-types.ts">list</a>({ ...params }) -> AppTypeListResponse | null</code>

### Configurations

Types:

- <code><a href="./src/resources/zero-trust/gateway/configurations.ts">ConfigurationUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations.ts">ConfigurationEditResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations.ts">ConfigurationGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/gateway/configuration">client.zeroTrust.gateway.configurations.<a href="./src/resources/zero-trust/gateway/configurations.ts">update</a>({ ...params }) -> ConfigurationUpdateResponse</code>
- <code title="patch /accounts/{account_id}/gateway/configuration">client.zeroTrust.gateway.configurations.<a href="./src/resources/zero-trust/gateway/configurations.ts">edit</a>({ ...params }) -> ConfigurationEditResponse</code>
- <code title="get /accounts/{account_id}/gateway/configuration">client.zeroTrust.gateway.configurations.<a href="./src/resources/zero-trust/gateway/configurations.ts">get</a>({ ...params }) -> ConfigurationGetResponse</code>

### Lists

Types:

- <code><a href="./src/resources/zero-trust/gateway/lists/lists.ts">ZeroTrustGatewayLists</a></code>
- <code><a href="./src/resources/zero-trust/gateway/lists/lists.ts">ListCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/lists/lists.ts">ListListResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/lists/lists.ts">ListDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/gateway/lists">client.zeroTrust.gateway.lists.<a href="./src/resources/zero-trust/gateway/lists/lists.ts">create</a>({ ...params }) -> ListCreateResponse</code>
- <code title="put /accounts/{account_id}/gateway/lists/{list_id}">client.zeroTrust.gateway.lists.<a href="./src/resources/zero-trust/gateway/lists/lists.ts">update</a>(listId, { ...params }) -> ZeroTrustGatewayLists</code>
- <code title="get /accounts/{account_id}/gateway/lists">client.zeroTrust.gateway.lists.<a href="./src/resources/zero-trust/gateway/lists/lists.ts">list</a>({ ...params }) -> ListListResponse | null</code>
- <code title="delete /accounts/{account_id}/gateway/lists/{list_id}">client.zeroTrust.gateway.lists.<a href="./src/resources/zero-trust/gateway/lists/lists.ts">delete</a>(listId, { ...params }) -> ListDeleteResponse</code>
- <code title="patch /accounts/{account_id}/gateway/lists/{list_id}">client.zeroTrust.gateway.lists.<a href="./src/resources/zero-trust/gateway/lists/lists.ts">edit</a>(listId, { ...params }) -> ZeroTrustGatewayLists</code>
- <code title="get /accounts/{account_id}/gateway/lists/{list_id}">client.zeroTrust.gateway.lists.<a href="./src/resources/zero-trust/gateway/lists/lists.ts">get</a>(listId, { ...params }) -> ZeroTrustGatewayLists</code>

#### Items

Types:

- <code><a href="./src/resources/zero-trust/gateway/lists/items.ts">ItemListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/gateway/lists/{list_id}/items">client.zeroTrust.gateway.lists.items.<a href="./src/resources/zero-trust/gateway/lists/items.ts">list</a>(listId, { ...params }) -> ItemListResponse | null</code>

### Locations

Types:

- <code><a href="./src/resources/zero-trust/gateway/locations.ts">ZeroTrustGatewayLocations</a></code>
- <code><a href="./src/resources/zero-trust/gateway/locations.ts">LocationListResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/locations.ts">LocationDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/gateway/locations">client.zeroTrust.gateway.locations.<a href="./src/resources/zero-trust/gateway/locations.ts">create</a>({ ...params }) -> ZeroTrustGatewayLocations</code>
- <code title="put /accounts/{account_id}/gateway/locations/{location_id}">client.zeroTrust.gateway.locations.<a href="./src/resources/zero-trust/gateway/locations.ts">update</a>(locationId, { ...params }) -> ZeroTrustGatewayLocations</code>
- <code title="get /accounts/{account_id}/gateway/locations">client.zeroTrust.gateway.locations.<a href="./src/resources/zero-trust/gateway/locations.ts">list</a>({ ...params }) -> LocationListResponse | null</code>
- <code title="delete /accounts/{account_id}/gateway/locations/{location_id}">client.zeroTrust.gateway.locations.<a href="./src/resources/zero-trust/gateway/locations.ts">delete</a>(locationId, { ...params }) -> LocationDeleteResponse</code>
- <code title="get /accounts/{account_id}/gateway/locations/{location_id}">client.zeroTrust.gateway.locations.<a href="./src/resources/zero-trust/gateway/locations.ts">get</a>(locationId, { ...params }) -> ZeroTrustGatewayLocations</code>

### Loggings

Types:

- <code><a href="./src/resources/zero-trust/gateway/loggings.ts">ZeroTrustGatewayGatewayAccountLoggingSettings</a></code>

Methods:

- <code title="put /accounts/{account_id}/gateway/logging">client.zeroTrust.gateway.loggings.<a href="./src/resources/zero-trust/gateway/loggings.ts">update</a>({ ...params }) -> ZeroTrustGatewayGatewayAccountLoggingSettings</code>
- <code title="get /accounts/{account_id}/gateway/logging">client.zeroTrust.gateway.loggings.<a href="./src/resources/zero-trust/gateway/loggings.ts">get</a>({ ...params }) -> ZeroTrustGatewayGatewayAccountLoggingSettings</code>

### ProxyEndpoints

Types:

- <code><a href="./src/resources/zero-trust/gateway/proxy-endpoints.ts">ZeroTrustGatewayProxyEndpoints</a></code>
- <code><a href="./src/resources/zero-trust/gateway/proxy-endpoints.ts">ProxyEndpointListResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/proxy-endpoints.ts">ProxyEndpointDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/gateway/proxy_endpoints">client.zeroTrust.gateway.proxyEndpoints.<a href="./src/resources/zero-trust/gateway/proxy-endpoints.ts">create</a>({ ...params }) -> ZeroTrustGatewayProxyEndpoints</code>
- <code title="get /accounts/{account_id}/gateway/proxy_endpoints">client.zeroTrust.gateway.proxyEndpoints.<a href="./src/resources/zero-trust/gateway/proxy-endpoints.ts">list</a>({ ...params }) -> ProxyEndpointListResponse | null</code>
- <code title="delete /accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}">client.zeroTrust.gateway.proxyEndpoints.<a href="./src/resources/zero-trust/gateway/proxy-endpoints.ts">delete</a>(proxyEndpointId, { ...params }) -> ProxyEndpointDeleteResponse</code>
- <code title="patch /accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}">client.zeroTrust.gateway.proxyEndpoints.<a href="./src/resources/zero-trust/gateway/proxy-endpoints.ts">edit</a>(proxyEndpointId, { ...params }) -> ZeroTrustGatewayProxyEndpoints</code>
- <code title="get /accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}">client.zeroTrust.gateway.proxyEndpoints.<a href="./src/resources/zero-trust/gateway/proxy-endpoints.ts">get</a>(proxyEndpointId, { ...params }) -> ZeroTrustGatewayProxyEndpoints</code>

### Rules

Types:

- <code><a href="./src/resources/zero-trust/gateway/rules.ts">ZeroTrustGatewayRules</a></code>
- <code><a href="./src/resources/zero-trust/gateway/rules.ts">RuleListResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/rules.ts">RuleDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/gateway/rules">client.zeroTrust.gateway.rules.<a href="./src/resources/zero-trust/gateway/rules.ts">create</a>({ ...params }) -> ZeroTrustGatewayRules</code>
- <code title="put /accounts/{account_id}/gateway/rules/{rule_id}">client.zeroTrust.gateway.rules.<a href="./src/resources/zero-trust/gateway/rules.ts">update</a>(ruleId, { ...params }) -> ZeroTrustGatewayRules</code>
- <code title="get /accounts/{account_id}/gateway/rules">client.zeroTrust.gateway.rules.<a href="./src/resources/zero-trust/gateway/rules.ts">list</a>({ ...params }) -> RuleListResponse | null</code>
- <code title="delete /accounts/{account_id}/gateway/rules/{rule_id}">client.zeroTrust.gateway.rules.<a href="./src/resources/zero-trust/gateway/rules.ts">delete</a>(ruleId, { ...params }) -> RuleDeleteResponse</code>
- <code title="get /accounts/{account_id}/gateway/rules/{rule_id}">client.zeroTrust.gateway.rules.<a href="./src/resources/zero-trust/gateway/rules.ts">get</a>(ruleId, { ...params }) -> ZeroTrustGatewayRules</code>

## Networks

### Routes

Types:

- <code><a href="./src/resources/zero-trust/networks/routes/routes.ts">TunnelRoute</a></code>
- <code><a href="./src/resources/zero-trust/networks/routes/routes.ts">TunnelTeamnet</a></code>

Methods:

- <code title="post /accounts/{account_id}/teamnet/routes">client.zeroTrust.networks.routes.<a href="./src/resources/zero-trust/networks/routes/routes.ts">create</a>({ ...params }) -> TunnelRoute</code>
- <code title="get /accounts/{account_id}/teamnet/routes">client.zeroTrust.networks.routes.<a href="./src/resources/zero-trust/networks/routes/routes.ts">list</a>({ ...params }) -> TunnelTeamnetsV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/teamnet/routes/{route_id}">client.zeroTrust.networks.routes.<a href="./src/resources/zero-trust/networks/routes/routes.ts">delete</a>(routeId, { ...params }) -> TunnelRoute</code>
- <code title="patch /accounts/{account_id}/teamnet/routes/{route_id}">client.zeroTrust.networks.routes.<a href="./src/resources/zero-trust/networks/routes/routes.ts">edit</a>(routeId, { ...params }) -> TunnelRoute</code>

#### IPs

Methods:

- <code title="get /accounts/{account_id}/teamnet/routes/ip/{ip}">client.zeroTrust.networks.routes.ips.<a href="./src/resources/zero-trust/networks/routes/ips.ts">get</a>(ip, { ...params }) -> TunnelTeamnet</code>

#### Networks

Methods:

- <code title="post /accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}">client.zeroTrust.networks.routes.networks.<a href="./src/resources/zero-trust/networks/routes/networks.ts">create</a>(ipNetworkEncoded, { ...params }) -> TunnelRoute</code>
- <code title="delete /accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}">client.zeroTrust.networks.routes.networks.<a href="./src/resources/zero-trust/networks/routes/networks.ts">delete</a>(ipNetworkEncoded, { ...params }) -> TunnelRoute</code>
- <code title="patch /accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}">client.zeroTrust.networks.routes.networks.<a href="./src/resources/zero-trust/networks/routes/networks.ts">edit</a>(ipNetworkEncoded, { ...params }) -> TunnelRoute</code>

### VirtualNetworks

Types:

- <code><a href="./src/resources/zero-trust/networks/virtual-networks.ts">TunnelVirtualNetwork</a></code>
- <code><a href="./src/resources/zero-trust/networks/virtual-networks.ts">VirtualNetworkCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/networks/virtual-networks.ts">VirtualNetworkListResponse</a></code>
- <code><a href="./src/resources/zero-trust/networks/virtual-networks.ts">VirtualNetworkDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/networks/virtual-networks.ts">VirtualNetworkEditResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/teamnet/virtual_networks">client.zeroTrust.networks.virtualNetworks.<a href="./src/resources/zero-trust/networks/virtual-networks.ts">create</a>({ ...params }) -> VirtualNetworkCreateResponse</code>
- <code title="get /accounts/{account_id}/teamnet/virtual_networks">client.zeroTrust.networks.virtualNetworks.<a href="./src/resources/zero-trust/networks/virtual-networks.ts">list</a>({ ...params }) -> VirtualNetworkListResponse | null</code>
- <code title="delete /accounts/{account_id}/teamnet/virtual_networks/{virtual_network_id}">client.zeroTrust.networks.virtualNetworks.<a href="./src/resources/zero-trust/networks/virtual-networks.ts">delete</a>(virtualNetworkId, { ...params }) -> VirtualNetworkDeleteResponse</code>
- <code title="patch /accounts/{account_id}/teamnet/virtual_networks/{virtual_network_id}">client.zeroTrust.networks.virtualNetworks.<a href="./src/resources/zero-trust/networks/virtual-networks.ts">edit</a>(virtualNetworkId, { ...params }) -> VirtualNetworkEditResponse</code>

# Challenges

## Widgets

Types:

- <code><a href="./src/resources/challenges/widgets.ts">NcChallengesAdminWidgetDetail</a></code>
- <code><a href="./src/resources/challenges/widgets.ts">NcChallengesAdminWidgetList</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/challenges/widgets">client.challenges.widgets.<a href="./src/resources/challenges/widgets.ts">create</a>(accountIdentifier, { ...params }) -> NcChallengesAdminWidgetDetail</code>
- <code title="put /accounts/{account_identifier}/challenges/widgets/{sitekey}">client.challenges.widgets.<a href="./src/resources/challenges/widgets.ts">update</a>(accountIdentifier, sitekey, { ...params }) -> NcChallengesAdminWidgetDetail</code>
- <code title="get /accounts/{account_identifier}/challenges/widgets">client.challenges.widgets.<a href="./src/resources/challenges/widgets.ts">list</a>(accountIdentifier, { ...params }) -> NcChallengesAdminWidgetListsV4PagePaginationArray</code>
- <code title="delete /accounts/{account_identifier}/challenges/widgets/{sitekey}">client.challenges.widgets.<a href="./src/resources/challenges/widgets.ts">delete</a>(accountIdentifier, sitekey) -> NcChallengesAdminWidgetDetail</code>
- <code title="get /accounts/{account_identifier}/challenges/widgets/{sitekey}">client.challenges.widgets.<a href="./src/resources/challenges/widgets.ts">get</a>(accountIdentifier, sitekey) -> NcChallengesAdminWidgetDetail</code>
- <code title="post /accounts/{account_identifier}/challenges/widgets/{sitekey}/rotate_secret">client.challenges.widgets.<a href="./src/resources/challenges/widgets.ts">rotateSecret</a>(accountIdentifier, sitekey, { ...params }) -> NcChallengesAdminWidgetDetail</code>

# Hyperdrive

## Configs

Types:

- <code><a href="./src/resources/hyperdrive/configs.ts">HyperdriveHyperdriveWithIdentifier</a></code>
- <code><a href="./src/resources/hyperdrive/configs.ts">ConfigCreateResponse</a></code>
- <code><a href="./src/resources/hyperdrive/configs.ts">ConfigUpdateResponse</a></code>
- <code><a href="./src/resources/hyperdrive/configs.ts">ConfigListResponse</a></code>
- <code><a href="./src/resources/hyperdrive/configs.ts">ConfigDeleteResponse</a></code>
- <code><a href="./src/resources/hyperdrive/configs.ts">ConfigEditResponse</a></code>
- <code><a href="./src/resources/hyperdrive/configs.ts">ConfigGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/hyperdrive/configs">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">create</a>({ ...params }) -> ConfigCreateResponse | null</code>
- <code title="put /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">update</a>(hyperdriveId, { ...params }) -> ConfigUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/hyperdrive/configs">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">list</a>({ ...params }) -> ConfigListResponse</code>
- <code title="delete /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">delete</a>(hyperdriveId, { ...params }) -> ConfigDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">edit</a>(hyperdriveId, { ...params }) -> ConfigEditResponse | null</code>
- <code title="get /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">get</a>(hyperdriveId, { ...params }) -> ConfigGetResponse | null</code>

# RUM

## SiteInfos

Types:

- <code><a href="./src/resources/rum/site-infos.ts">RUMSite</a></code>
- <code><a href="./src/resources/rum/site-infos.ts">SiteInfoDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/rum/site_info">client.rum.siteInfos.<a href="./src/resources/rum/site-infos.ts">create</a>({ ...params }) -> RUMSite</code>
- <code title="put /accounts/{account_id}/rum/site_info/{site_id}">client.rum.siteInfos.<a href="./src/resources/rum/site-infos.ts">update</a>(siteId, { ...params }) -> RUMSite</code>
- <code title="get /accounts/{account_id}/rum/site_info/list">client.rum.siteInfos.<a href="./src/resources/rum/site-infos.ts">list</a>({ ...params }) -> RUMSitesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/rum/site_info/{site_id}">client.rum.siteInfos.<a href="./src/resources/rum/site-infos.ts">delete</a>(siteId, { ...params }) -> SiteInfoDeleteResponse</code>
- <code title="get /accounts/{account_id}/rum/site_info/{site_id}">client.rum.siteInfos.<a href="./src/resources/rum/site-infos.ts">get</a>(siteId, { ...params }) -> RUMSite</code>

## Rules

Types:

- <code><a href="./src/resources/rum/rules.ts">RUMRule</a></code>
- <code><a href="./src/resources/rum/rules.ts">RuleListResponse</a></code>
- <code><a href="./src/resources/rum/rules.ts">RuleDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/rum/v2/{ruleset_id}/rule">client.rum.rules.<a href="./src/resources/rum/rules.ts">create</a>(rulesetId, { ...params }) -> RUMRule</code>
- <code title="put /accounts/{account_id}/rum/v2/{ruleset_id}/rule/{rule_id}">client.rum.rules.<a href="./src/resources/rum/rules.ts">update</a>(rulesetId, ruleId, { ...params }) -> RUMRule</code>
- <code title="get /accounts/{account_id}/rum/v2/{ruleset_id}/rules">client.rum.rules.<a href="./src/resources/rum/rules.ts">list</a>(rulesetId, { ...params }) -> RuleListResponse</code>
- <code title="delete /accounts/{account_id}/rum/v2/{ruleset_id}/rule/{rule_id}">client.rum.rules.<a href="./src/resources/rum/rules.ts">delete</a>(rulesetId, ruleId, { ...params }) -> RuleDeleteResponse</code>

# Vectorize

## Indexes

Types:

- <code><a href="./src/resources/vectorize/indexes.ts">VectorizeCreateIndex</a></code>
- <code><a href="./src/resources/vectorize/indexes.ts">VectorizeIndexDeleteVectorsByID</a></code>
- <code><a href="./src/resources/vectorize/indexes.ts">VectorizeIndexInsert</a></code>
- <code><a href="./src/resources/vectorize/indexes.ts">VectorizeIndexQuery</a></code>
- <code><a href="./src/resources/vectorize/indexes.ts">VectorizeIndexUpsert</a></code>
- <code><a href="./src/resources/vectorize/indexes.ts">IndexListResponse</a></code>
- <code><a href="./src/resources/vectorize/indexes.ts">IndexDeleteResponse</a></code>
- <code><a href="./src/resources/vectorize/indexes.ts">IndexGetByIDsResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/vectorize/indexes">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">create</a>(accountIdentifier, { ...params }) -> VectorizeCreateIndex | null</code>
- <code title="put /accounts/{account_identifier}/vectorize/indexes/{index_name}">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">update</a>(accountIdentifier, indexName, { ...params }) -> VectorizeCreateIndex | null</code>
- <code title="get /accounts/{account_identifier}/vectorize/indexes">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">list</a>(accountIdentifier) -> IndexListResponse</code>
- <code title="delete /accounts/{account_identifier}/vectorize/indexes/{index_name}">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">delete</a>(accountIdentifier, indexName) -> IndexDeleteResponse | null</code>
- <code title="post /accounts/{account_identifier}/vectorize/indexes/{index_name}/delete-by-ids">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">deleteByIds</a>(accountIdentifier, indexName, { ...params }) -> VectorizeIndexDeleteVectorsByID | null</code>
- <code title="get /accounts/{account_identifier}/vectorize/indexes/{index_name}">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">get</a>(accountIdentifier, indexName) -> VectorizeCreateIndex | null</code>
- <code title="post /accounts/{account_identifier}/vectorize/indexes/{index_name}/get-by-ids">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">getByIds</a>(accountIdentifier, indexName, { ...params }) -> IndexGetByIDsResponse | null</code>
- <code title="post /accounts/{account_identifier}/vectorize/indexes/{index_name}/insert">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">insert</a>(accountIdentifier, indexName) -> VectorizeIndexInsert | null</code>
- <code title="post /accounts/{account_identifier}/vectorize/indexes/{index_name}/query">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">query</a>(accountIdentifier, indexName, { ...params }) -> VectorizeIndexQuery | null</code>
- <code title="post /accounts/{account_identifier}/vectorize/indexes/{index_name}/upsert">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">upsert</a>(accountIdentifier, indexName) -> VectorizeIndexUpsert | null</code>

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
- <code><a href="./src/resources/radar/bgp/routes.ts">RouteTimeseriesResponse</a></code>

Methods:

- <code title="get /radar/bgp/routes/moas">client.radar.bgp.routes.<a href="./src/resources/radar/bgp/routes.ts">moas</a>({ ...params }) -> RouteMoasResponse</code>
- <code title="get /radar/bgp/routes/pfx2as">client.radar.bgp.routes.<a href="./src/resources/radar/bgp/routes.ts">pfx2as</a>({ ...params }) -> RoutePfx2asResponse</code>
- <code title="get /radar/bgp/routes/stats">client.radar.bgp.routes.<a href="./src/resources/radar/bgp/routes.ts">stats</a>({ ...params }) -> RouteStatsResponse</code>
- <code title="get /radar/bgp/routes/timeseries">client.radar.bgp.routes.<a href="./src/resources/radar/bgp/routes.ts">timeseries</a>({ ...params }) -> RouteTimeseriesResponse</code>

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

## AS112

Types:

- <code><a href="./src/resources/radar/as112/as112.ts">AS112TimeseriesResponse</a></code>

Methods:

- <code title="get /radar/as112/timeseries">client.radar.as112.<a href="./src/resources/radar/as112/as112.ts">timeseries</a>({ ...params }) -> AS112TimeseriesResponse</code>

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

### Routing

#### Summary

Types:

- <code><a href="./src/resources/radar/email/routing/summary.ts">SummaryARCResponse</a></code>
- <code><a href="./src/resources/radar/email/routing/summary.ts">SummaryDKIMResponse</a></code>
- <code><a href="./src/resources/radar/email/routing/summary.ts">SummaryDMARCResponse</a></code>
- <code><a href="./src/resources/radar/email/routing/summary.ts">SummaryEncryptedResponse</a></code>
- <code><a href="./src/resources/radar/email/routing/summary.ts">SummaryIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/email/routing/summary.ts">SummarySPFResponse</a></code>

Methods:

- <code title="get /radar/email/routing/summary/arc">client.radar.email.routing.summary.<a href="./src/resources/radar/email/routing/summary.ts">arc</a>({ ...params }) -> SummaryARCResponse</code>
- <code title="get /radar/email/routing/summary/dkim">client.radar.email.routing.summary.<a href="./src/resources/radar/email/routing/summary.ts">dkim</a>({ ...params }) -> SummaryDKIMResponse</code>
- <code title="get /radar/email/routing/summary/dmarc">client.radar.email.routing.summary.<a href="./src/resources/radar/email/routing/summary.ts">dmarc</a>({ ...params }) -> SummaryDMARCResponse</code>
- <code title="get /radar/email/routing/summary/encrypted">client.radar.email.routing.summary.<a href="./src/resources/radar/email/routing/summary.ts">encrypted</a>({ ...params }) -> SummaryEncryptedResponse</code>
- <code title="get /radar/email/routing/summary/ip_version">client.radar.email.routing.summary.<a href="./src/resources/radar/email/routing/summary.ts">ipVersion</a>({ ...params }) -> SummaryIPVersionResponse</code>
- <code title="get /radar/email/routing/summary/spf">client.radar.email.routing.summary.<a href="./src/resources/radar/email/routing/summary.ts">spf</a>({ ...params }) -> SummarySPFResponse</code>

#### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/email/routing/timeseries-groups.ts">TimeseriesGroupARCResponse</a></code>
- <code><a href="./src/resources/radar/email/routing/timeseries-groups.ts">TimeseriesGroupDKIMResponse</a></code>
- <code><a href="./src/resources/radar/email/routing/timeseries-groups.ts">TimeseriesGroupDMARCResponse</a></code>
- <code><a href="./src/resources/radar/email/routing/timeseries-groups.ts">TimeseriesGroupEncryptedResponse</a></code>
- <code><a href="./src/resources/radar/email/routing/timeseries-groups.ts">TimeseriesGroupIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/email/routing/timeseries-groups.ts">TimeseriesGroupSPFResponse</a></code>

Methods:

- <code title="get /radar/email/routing/timeseries_groups/arc">client.radar.email.routing.timeseriesGroups.<a href="./src/resources/radar/email/routing/timeseries-groups.ts">arc</a>({ ...params }) -> TimeseriesGroupARCResponse</code>
- <code title="get /radar/email/routing/timeseries_groups/dkim">client.radar.email.routing.timeseriesGroups.<a href="./src/resources/radar/email/routing/timeseries-groups.ts">dkim</a>({ ...params }) -> TimeseriesGroupDKIMResponse</code>
- <code title="get /radar/email/routing/timeseries_groups/dmarc">client.radar.email.routing.timeseriesGroups.<a href="./src/resources/radar/email/routing/timeseries-groups.ts">dmarc</a>({ ...params }) -> TimeseriesGroupDMARCResponse</code>
- <code title="get /radar/email/routing/timeseries_groups/encrypted">client.radar.email.routing.timeseriesGroups.<a href="./src/resources/radar/email/routing/timeseries-groups.ts">encrypted</a>({ ...params }) -> TimeseriesGroupEncryptedResponse</code>
- <code title="get /radar/email/routing/timeseries_groups/ip_version">client.radar.email.routing.timeseriesGroups.<a href="./src/resources/radar/email/routing/timeseries-groups.ts">ipVersion</a>({ ...params }) -> TimeseriesGroupIPVersionResponse</code>
- <code title="get /radar/email/routing/timeseries_groups/spf">client.radar.email.routing.timeseriesGroups.<a href="./src/resources/radar/email/routing/timeseries-groups.ts">spf</a>({ ...params }) -> TimeseriesGroupSPFResponse</code>

### Security

#### Top

##### Tlds

Types:

- <code><a href="./src/resources/radar/email/security/top/tlds/tlds.ts">TldGetResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/tlds">client.radar.email.security.top.tlds.<a href="./src/resources/radar/email/security/top/tlds/tlds.ts">get</a>({ ...params }) -> TldGetResponse</code>

###### Malicious

Types:

- <code><a href="./src/resources/radar/email/security/top/tlds/malicious.ts">MaliciousGetResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/tlds/malicious/{malicious}">client.radar.email.security.top.tlds.malicious.<a href="./src/resources/radar/email/security/top/tlds/malicious.ts">get</a>(malicious, { ...params }) -> MaliciousGetResponse</code>

###### Spam

Types:

- <code><a href="./src/resources/radar/email/security/top/tlds/spam.ts">SpamGetResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/tlds/spam/{spam}">client.radar.email.security.top.tlds.spam.<a href="./src/resources/radar/email/security/top/tlds/spam.ts">get</a>(spam, { ...params }) -> SpamGetResponse</code>

###### Spoof

Types:

- <code><a href="./src/resources/radar/email/security/top/tlds/spoof.ts">SpoofGetResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/tlds/spoof/{spoof}">client.radar.email.security.top.tlds.spoof.<a href="./src/resources/radar/email/security/top/tlds/spoof.ts">get</a>(spoof, { ...params }) -> SpoofGetResponse</code>

#### Summary

Types:

- <code><a href="./src/resources/radar/email/security/summary.ts">SummaryARCResponse</a></code>
- <code><a href="./src/resources/radar/email/security/summary.ts">SummaryDKIMResponse</a></code>
- <code><a href="./src/resources/radar/email/security/summary.ts">SummaryDMARCResponse</a></code>
- <code><a href="./src/resources/radar/email/security/summary.ts">SummaryMaliciousResponse</a></code>
- <code><a href="./src/resources/radar/email/security/summary.ts">SummarySpamResponse</a></code>
- <code><a href="./src/resources/radar/email/security/summary.ts">SummarySPFResponse</a></code>
- <code><a href="./src/resources/radar/email/security/summary.ts">SummarySpoofResponse</a></code>
- <code><a href="./src/resources/radar/email/security/summary.ts">SummaryThreatCategoryResponse</a></code>
- <code><a href="./src/resources/radar/email/security/summary.ts">SummaryTLSVersionResponse</a></code>

Methods:

- <code title="get /radar/email/security/summary/arc">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">arc</a>({ ...params }) -> SummaryARCResponse</code>
- <code title="get /radar/email/security/summary/dkim">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">dkim</a>({ ...params }) -> SummaryDKIMResponse</code>
- <code title="get /radar/email/security/summary/dmarc">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">dmarc</a>({ ...params }) -> SummaryDMARCResponse</code>
- <code title="get /radar/email/security/summary/malicious">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">malicious</a>({ ...params }) -> SummaryMaliciousResponse</code>
- <code title="get /radar/email/security/summary/spam">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">spam</a>({ ...params }) -> SummarySpamResponse</code>
- <code title="get /radar/email/security/summary/spf">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">spf</a>({ ...params }) -> SummarySPFResponse</code>
- <code title="get /radar/email/security/summary/spoof">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">spoof</a>({ ...params }) -> SummarySpoofResponse</code>
- <code title="get /radar/email/security/summary/threat_category">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">threatCategory</a>({ ...params }) -> SummaryThreatCategoryResponse</code>
- <code title="get /radar/email/security/summary/tls_version">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">tlsVersion</a>({ ...params }) -> SummaryTLSVersionResponse</code>

#### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/email/security/timeseries-groups.ts">TimeseriesGroupARCResponse</a></code>
- <code><a href="./src/resources/radar/email/security/timeseries-groups.ts">TimeseriesGroupDKIMResponse</a></code>
- <code><a href="./src/resources/radar/email/security/timeseries-groups.ts">TimeseriesGroupDMARCResponse</a></code>
- <code><a href="./src/resources/radar/email/security/timeseries-groups.ts">TimeseriesGroupMaliciousResponse</a></code>
- <code><a href="./src/resources/radar/email/security/timeseries-groups.ts">TimeseriesGroupSpamResponse</a></code>
- <code><a href="./src/resources/radar/email/security/timeseries-groups.ts">TimeseriesGroupSPFResponse</a></code>
- <code><a href="./src/resources/radar/email/security/timeseries-groups.ts">TimeseriesGroupSpoofResponse</a></code>
- <code><a href="./src/resources/radar/email/security/timeseries-groups.ts">TimeseriesGroupThreatCategoryResponse</a></code>
- <code><a href="./src/resources/radar/email/security/timeseries-groups.ts">TimeseriesGroupTLSVersionResponse</a></code>

Methods:

- <code title="get /radar/email/security/timeseries_groups/arc">client.radar.email.security.timeseriesGroups.<a href="./src/resources/radar/email/security/timeseries-groups.ts">arc</a>({ ...params }) -> TimeseriesGroupARCResponse</code>
- <code title="get /radar/email/security/timeseries_groups/dkim">client.radar.email.security.timeseriesGroups.<a href="./src/resources/radar/email/security/timeseries-groups.ts">dkim</a>({ ...params }) -> TimeseriesGroupDKIMResponse</code>
- <code title="get /radar/email/security/timeseries_groups/dmarc">client.radar.email.security.timeseriesGroups.<a href="./src/resources/radar/email/security/timeseries-groups.ts">dmarc</a>({ ...params }) -> TimeseriesGroupDMARCResponse</code>
- <code title="get /radar/email/security/timeseries_groups/malicious">client.radar.email.security.timeseriesGroups.<a href="./src/resources/radar/email/security/timeseries-groups.ts">malicious</a>({ ...params }) -> TimeseriesGroupMaliciousResponse</code>
- <code title="get /radar/email/security/timeseries_groups/spam">client.radar.email.security.timeseriesGroups.<a href="./src/resources/radar/email/security/timeseries-groups.ts">spam</a>({ ...params }) -> TimeseriesGroupSpamResponse</code>
- <code title="get /radar/email/security/timeseries_groups/spf">client.radar.email.security.timeseriesGroups.<a href="./src/resources/radar/email/security/timeseries-groups.ts">spf</a>({ ...params }) -> TimeseriesGroupSPFResponse</code>
- <code title="get /radar/email/security/timeseries_groups/spoof">client.radar.email.security.timeseriesGroups.<a href="./src/resources/radar/email/security/timeseries-groups.ts">spoof</a>({ ...params }) -> TimeseriesGroupSpoofResponse</code>
- <code title="get /radar/email/security/timeseries_groups/threat_category">client.radar.email.security.timeseriesGroups.<a href="./src/resources/radar/email/security/timeseries-groups.ts">threatCategory</a>({ ...params }) -> TimeseriesGroupThreatCategoryResponse</code>
- <code title="get /radar/email/security/timeseries_groups/tls_version">client.radar.email.security.timeseriesGroups.<a href="./src/resources/radar/email/security/timeseries-groups.ts">tlsVersion</a>({ ...params }) -> TimeseriesGroupTLSVersionResponse</code>

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

- <code title="put /zones/{zone_id}/bot_management">client.botManagement.<a href="./src/resources/bot-management.ts">update</a>({ ...params }) -> BotManagementUpdateResponse</code>
- <code title="get /zones/{zone_id}/bot_management">client.botManagement.<a href="./src/resources/bot-management.ts">get</a>({ ...params }) -> BotManagementGetResponse</code>

# OriginPostQuantumEncryption

Types:

- <code><a href="./src/resources/origin-post-quantum-encryption.ts">OriginPostQuantumEncryptionUpdateResponse</a></code>
- <code><a href="./src/resources/origin-post-quantum-encryption.ts">OriginPostQuantumEncryptionGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/cache/origin_post_quantum_encryption">client.originPostQuantumEncryption.<a href="./src/resources/origin-post-quantum-encryption.ts">update</a>({ ...params }) -> OriginPostQuantumEncryptionUpdateResponse</code>
- <code title="get /zones/{zone_id}/cache/origin_post_quantum_encryption">client.originPostQuantumEncryption.<a href="./src/resources/origin-post-quantum-encryption.ts">get</a>({ ...params }) -> OriginPostQuantumEncryptionGetResponse</code>

# Speed

Types:

- <code><a href="./src/resources/speed/speed.ts">ObservatorySchedule</a></code>
- <code><a href="./src/resources/speed/speed.ts">ObservatoryTrend</a></code>
- <code><a href="./src/resources/speed/speed.ts">SpeedDeleteResponse</a></code>

Methods:

- <code title="delete /zones/{zone_id}/speed_api/schedule/{url}">client.speed.<a href="./src/resources/speed/speed.ts">delete</a>(url, { ...params }) -> SpeedDeleteResponse</code>
- <code title="get /zones/{zone_id}/speed_api/schedule/{url}">client.speed.<a href="./src/resources/speed/speed.ts">scheduleGet</a>(url, { ...params }) -> ObservatorySchedule</code>
- <code title="get /zones/{zone_id}/speed_api/pages/{url}/trend">client.speed.<a href="./src/resources/speed/speed.ts">trendsList</a>(url, { ...params }) -> ObservatoryTrend</code>

## Tests

Types:

- <code><a href="./src/resources/speed/tests.ts">ObservatoryPageTest</a></code>
- <code><a href="./src/resources/speed/tests.ts">TestListResponse</a></code>
- <code><a href="./src/resources/speed/tests.ts">TestDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/speed_api/pages/{url}/tests">client.speed.tests.<a href="./src/resources/speed/tests.ts">create</a>(url, { ...params }) -> ObservatoryPageTest</code>
- <code title="get /zones/{zone_id}/speed_api/pages/{url}/tests">client.speed.tests.<a href="./src/resources/speed/tests.ts">list</a>(url, { ...params }) -> TestListResponse</code>
- <code title="delete /zones/{zone_id}/speed_api/pages/{url}/tests">client.speed.tests.<a href="./src/resources/speed/tests.ts">delete</a>(url, { ...params }) -> TestDeleteResponse</code>
- <code title="get /zones/{zone_id}/speed_api/pages/{url}/tests/{test_id}">client.speed.tests.<a href="./src/resources/speed/tests.ts">get</a>(url, testId, { ...params }) -> ObservatoryPageTest</code>

## Schedule

Types:

- <code><a href="./src/resources/speed/schedule.ts">ScheduleCreateResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/speed_api/schedule/{url}">client.speed.schedule.<a href="./src/resources/speed/schedule.ts">create</a>(url, { ...params }) -> ScheduleCreateResponse</code>

## Availabilities

Types:

- <code><a href="./src/resources/speed/availabilities.ts">ObservatoryAvailabilities</a></code>

Methods:

- <code title="get /zones/{zone_id}/speed_api/availabilities">client.speed.availabilities.<a href="./src/resources/speed/availabilities.ts">list</a>({ ...params }) -> ObservatoryAvailabilities</code>

## Pages

Types:

- <code><a href="./src/resources/speed/pages.ts">PageListResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/speed_api/pages">client.speed.pages.<a href="./src/resources/speed/pages.ts">list</a>({ ...params }) -> PageListResponse</code>

# DCVDelegation

## UUID

Types:

- <code><a href="./src/resources/dcv-delegation/uuid.ts">TLSCertificatesAndHostnamesUUIDObject</a></code>

Methods:

- <code title="get /zones/{zone_id}/dcv_delegation/uuid">client.dcvDelegation.uuid.<a href="./src/resources/dcv-delegation/uuid.ts">get</a>({ ...params }) -> TLSCertificatesAndHostnamesUUIDObject</code>

# Hostnames

## Settings

### TLS

Types:

- <code><a href="./src/resources/hostnames/settings/tls.ts">TLSCertificatesAndHostnamesSettingObject</a></code>
- <code><a href="./src/resources/hostnames/settings/tls.ts">TLSCertificatesAndHostnamesSettingObjectDelete</a></code>
- <code><a href="./src/resources/hostnames/settings/tls.ts">TLSGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}">client.hostnames.settings.tls.<a href="./src/resources/hostnames/settings/tls.ts">update</a>(settingId, hostname, { ...params }) -> TLSCertificatesAndHostnamesSettingObject</code>
- <code title="delete /zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}">client.hostnames.settings.tls.<a href="./src/resources/hostnames/settings/tls.ts">delete</a>(settingId, hostname, { ...params }) -> TLSCertificatesAndHostnamesSettingObjectDelete</code>
- <code title="get /zones/{zone_id}/hostnames/settings/{setting_id}">client.hostnames.settings.tls.<a href="./src/resources/hostnames/settings/tls.ts">get</a>(settingId, { ...params }) -> TLSGetResponse | null</code>

# Snippets

Types:

- <code><a href="./src/resources/snippets/snippets.ts">Snippet</a></code>
- <code><a href="./src/resources/snippets/snippets.ts">SnippetListResponse</a></code>
- <code><a href="./src/resources/snippets/snippets.ts">SnippetDeleteResponse</a></code>

Methods:

- <code title="put /zones/{zone_identifier}/snippets/{snippet_name}">client.snippets.<a href="./src/resources/snippets/snippets.ts">update</a>(zoneIdentifier, snippetName, { ...params }) -> Snippet</code>
- <code title="get /zones/{zone_identifier}/snippets">client.snippets.<a href="./src/resources/snippets/snippets.ts">list</a>(zoneIdentifier) -> SnippetListResponse</code>
- <code title="delete /zones/{zone_identifier}/snippets/{snippet_name}">client.snippets.<a href="./src/resources/snippets/snippets.ts">delete</a>(zoneIdentifier, snippetName) -> SnippetDeleteResponse</code>
- <code title="get /zones/{zone_identifier}/snippets/{snippet_name}">client.snippets.<a href="./src/resources/snippets/snippets.ts">get</a>(zoneIdentifier, snippetName) -> Snippet</code>

## Content

Methods:

- <code title="get /zones/{zone_identifier}/snippets/{snippet_name}/content">client.snippets.content.<a href="./src/resources/snippets/content.ts">get</a>(zoneIdentifier, snippetName) -> Response</code>

## Rules

Types:

- <code><a href="./src/resources/snippets/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/snippets/rules.ts">RuleListResponse</a></code>

Methods:

- <code title="put /zones/{zone_identifier}/snippets/snippet_rules">client.snippets.rules.<a href="./src/resources/snippets/rules.ts">update</a>(zoneIdentifier, { ...params }) -> RuleUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/snippets/snippet_rules">client.snippets.rules.<a href="./src/resources/snippets/rules.ts">list</a>(zoneIdentifier) -> RuleListResponse</code>

# Calls

Types:

- <code><a href="./src/resources/calls.ts">CallsApp</a></code>
- <code><a href="./src/resources/calls.ts">CallsAppWithSecret</a></code>
- <code><a href="./src/resources/calls.ts">CallListResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/calls/apps">client.calls.<a href="./src/resources/calls.ts">create</a>({ ...params }) -> CallsAppWithSecret</code>
- <code title="put /accounts/{account_id}/calls/apps/{app_id}">client.calls.<a href="./src/resources/calls.ts">update</a>(appId, { ...params }) -> CallsApp</code>
- <code title="get /accounts/{account_id}/calls/apps">client.calls.<a href="./src/resources/calls.ts">list</a>({ ...params }) -> CallListResponse</code>
- <code title="delete /accounts/{account_id}/calls/apps/{app_id}">client.calls.<a href="./src/resources/calls.ts">delete</a>(appId, { ...params }) -> CallsApp</code>
- <code title="get /accounts/{account_id}/calls/apps/{app_id}">client.calls.<a href="./src/resources/calls.ts">get</a>(appId, { ...params }) -> CallsApp</code>

# CloudforceOne

## Requests

Types:

- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">CloudforceOneQuota</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">CloudforceOneRequestConstants</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">CloudforceOneRequestItem</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">CloudforceOneRequestListItem</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">CloudforceOneRequestTypes</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">RequestDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/cloudforce-one/requests/new">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">create</a>(accountIdentifier, { ...params }) -> CloudforceOneRequestItem</code>
- <code title="put /accounts/{account_identifier}/cloudforce-one/requests/{request_identifier}">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">update</a>(accountIdentifier, requestIdentifier, { ...params }) -> CloudforceOneRequestItem</code>
- <code title="post /accounts/{account_identifier}/cloudforce-one/requests">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">list</a>(accountIdentifier, { ...params }) -> CloudforceOneRequestListItemsV4PagePaginationArray</code>
- <code title="delete /accounts/{account_identifier}/cloudforce-one/requests/{request_identifier}">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">delete</a>(accountIdentifier, requestIdentifier) -> RequestDeleteResponse</code>
- <code title="get /accounts/{account_identifier}/cloudforce-one/requests/constants">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">constants</a>(accountIdentifier) -> CloudforceOneRequestConstants</code>
- <code title="get /accounts/{account_identifier}/cloudforce-one/requests/{request_identifier}">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">get</a>(accountIdentifier, requestIdentifier) -> CloudforceOneRequestItem</code>
- <code title="get /accounts/{account_identifier}/cloudforce-one/requests/quota">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">quota</a>(accountIdentifier) -> CloudforceOneQuota</code>
- <code title="get /accounts/{account_identifier}/cloudforce-one/requests/types">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">types</a>(accountIdentifier) -> CloudforceOneRequestTypes</code>

### Message

Types:

- <code><a href="./src/resources/cloudforce-one/requests/message.ts">CloudforceOneRequestMessageItem</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/message.ts">MessageDeleteResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/message.ts">MessageGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/cloudforce-one/requests/{request_identifier}/message/new">client.cloudforceOne.requests.message.<a href="./src/resources/cloudforce-one/requests/message.ts">create</a>(accountIdentifier, requestIdentifier, { ...params }) -> CloudforceOneRequestMessageItem</code>
- <code title="put /accounts/{account_identifier}/cloudforce-one/requests/{request_identifier}/message/{message_identifer}">client.cloudforceOne.requests.message.<a href="./src/resources/cloudforce-one/requests/message.ts">update</a>(accountIdentifier, requestIdentifier, messageIdentifer, { ...params }) -> CloudforceOneRequestMessageItem</code>
- <code title="delete /accounts/{account_identifier}/cloudforce-one/requests/{request_identifier}/message/{message_identifer}">client.cloudforceOne.requests.message.<a href="./src/resources/cloudforce-one/requests/message.ts">delete</a>(accountIdentifier, requestIdentifier, messageIdentifer) -> MessageDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/cloudforce-one/requests/{request_identifier}/message">client.cloudforceOne.requests.message.<a href="./src/resources/cloudforce-one/requests/message.ts">get</a>(accountIdentifier, requestIdentifier, { ...params }) -> MessageGetResponse</code>

### Priority

Types:

- <code><a href="./src/resources/cloudforce-one/requests/priority.ts">CloudforceOnePriorityItem</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/priority.ts">PriorityDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/cloudforce-one/requests/priority/new">client.cloudforceOne.requests.priority.<a href="./src/resources/cloudforce-one/requests/priority.ts">create</a>(accountIdentifier, { ...params }) -> CloudforceOnePriorityItem</code>
- <code title="put /accounts/{account_identifier}/cloudforce-one/requests/priority/{priority_identifer}">client.cloudforceOne.requests.priority.<a href="./src/resources/cloudforce-one/requests/priority.ts">update</a>(accountIdentifier, priorityIdentifer, { ...params }) -> CloudforceOneRequestItem</code>
- <code title="delete /accounts/{account_identifier}/cloudforce-one/requests/priority/{priority_identifer}">client.cloudforceOne.requests.priority.<a href="./src/resources/cloudforce-one/requests/priority.ts">delete</a>(accountIdentifier, priorityIdentifer) -> PriorityDeleteResponse</code>
- <code title="get /accounts/{account_identifier}/cloudforce-one/requests/priority/{priority_identifer}">client.cloudforceOne.requests.priority.<a href="./src/resources/cloudforce-one/requests/priority.ts">get</a>(accountIdentifier, priorityIdentifer) -> CloudforceOneRequestItem</code>
- <code title="get /accounts/{account_identifier}/cloudforce-one/requests/priority/quota">client.cloudforceOne.requests.priority.<a href="./src/resources/cloudforce-one/requests/priority.ts">quota</a>(accountIdentifier) -> CloudforceOneQuota</code>
