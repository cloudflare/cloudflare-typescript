# Shared

Types:

- <code><a href="./src/resources/shared.ts">ASN</a></code>
- <code><a href="./src/resources/shared.ts">AuditLog</a></code>
- <code><a href="./src/resources/shared.ts">CertificateCA</a></code>
- <code><a href="./src/resources/shared.ts">CertificateRequestType</a></code>
- <code><a href="./src/resources/shared.ts">CloudflareTunnel</a></code>
- <code><a href="./src/resources/shared.ts">ErrorData</a></code>
- <code><a href="./src/resources/shared.ts">Identifier</a></code>
- <code><a href="./src/resources/shared.ts">LoadBalancerPreview</a></code>
- <code><a href="./src/resources/shared.ts">Member</a></code>
- <code><a href="./src/resources/shared.ts">PaginationInfo</a></code>
- <code><a href="./src/resources/shared.ts">Permission</a></code>
- <code><a href="./src/resources/shared.ts">PermissionGrant</a></code>
- <code><a href="./src/resources/shared.ts">ResponseInfo</a></code>
- <code><a href="./src/resources/shared.ts">Result</a></code>
- <code><a href="./src/resources/shared.ts">Role</a></code>
- <code><a href="./src/resources/shared.ts">SortDirection</a></code>

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

- <code><a href="./src/resources/accounts/members.ts">Status</a></code>
- <code><a href="./src/resources/accounts/members.ts">UserWithInviteCode</a></code>
- <code><a href="./src/resources/accounts/members.ts">MemberCreateResponse</a></code>
- <code><a href="./src/resources/accounts/members.ts">MemberUpdateResponse</a></code>
- <code><a href="./src/resources/accounts/members.ts">MemberListResponse</a></code>
- <code><a href="./src/resources/accounts/members.ts">MemberDeleteResponse</a></code>
- <code><a href="./src/resources/accounts/members.ts">MemberGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/members">client.accounts.members.<a href="./src/resources/accounts/members.ts">create</a>({ ...params }) -> MemberCreateResponse</code>
- <code title="put /accounts/{account_id}/members/{member_id}">client.accounts.members.<a href="./src/resources/accounts/members.ts">update</a>(memberId, { ...params }) -> MemberUpdateResponse</code>
- <code title="get /accounts/{account_id}/members">client.accounts.members.<a href="./src/resources/accounts/members.ts">list</a>({ ...params }) -> MemberListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/members/{member_id}">client.accounts.members.<a href="./src/resources/accounts/members.ts">delete</a>(memberId, { ...params }) -> MemberDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/members/{member_id}">client.accounts.members.<a href="./src/resources/accounts/members.ts">get</a>(memberId, { ...params }) -> MemberGetResponse</code>

## Roles

Types:

- <code><a href="./src/resources/accounts/roles.ts">RoleGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/roles">client.accounts.roles.<a href="./src/resources/accounts/roles.ts">list</a>({ ...params }) -> RolesSinglePage</code>
- <code title="get /accounts/{account_id}/roles/{role_id}">client.accounts.roles.<a href="./src/resources/accounts/roles.ts">get</a>(roleId, { ...params }) -> RoleGetResponse</code>

# OriginCACertificates

Types:

- <code><a href="./src/resources/origin-ca-certificates.ts">OriginCACertificate</a></code>
- <code><a href="./src/resources/origin-ca-certificates.ts">OriginCACertificateCreateResponse</a></code>
- <code><a href="./src/resources/origin-ca-certificates.ts">OriginCACertificateDeleteResponse</a></code>
- <code><a href="./src/resources/origin-ca-certificates.ts">OriginCACertificateGetResponse</a></code>

Methods:

- <code title="post /certificates">client.originCACertificates.<a href="./src/resources/origin-ca-certificates.ts">create</a>({ ...params }) -> OriginCACertificateCreateResponse</code>
- <code title="get /certificates">client.originCACertificates.<a href="./src/resources/origin-ca-certificates.ts">list</a>({ ...params }) -> OriginCACertificatesSinglePage</code>
- <code title="delete /certificates/{certificate_id}">client.originCACertificates.<a href="./src/resources/origin-ca-certificates.ts">delete</a>(certificateId) -> OriginCACertificateDeleteResponse</code>
- <code title="get /certificates/{certificate_id}">client.originCACertificates.<a href="./src/resources/origin-ca-certificates.ts">get</a>(certificateId) -> OriginCACertificateGetResponse</code>

# IPs

Types:

- <code><a href="./src/resources/ips.ts">IPs</a></code>
- <code><a href="./src/resources/ips.ts">JDCloudIPs</a></code>
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
- <code><a href="./src/resources/user/invites.ts">InviteEditResponse</a></code>
- <code><a href="./src/resources/user/invites.ts">InviteGetResponse</a></code>

Methods:

- <code title="get /user/invites">client.user.invites.<a href="./src/resources/user/invites.ts">list</a>() -> InvitesSinglePage</code>
- <code title="patch /user/invites/{invite_id}">client.user.invites.<a href="./src/resources/user/invites.ts">edit</a>(inviteId, { ...params }) -> InviteEditResponse</code>
- <code title="get /user/invites/{invite_id}">client.user.invites.<a href="./src/resources/user/invites.ts">get</a>(inviteId) -> InviteGetResponse</code>

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

- <code><a href="./src/resources/user/subscriptions.ts">RatePlan</a></code>
- <code><a href="./src/resources/user/subscriptions.ts">Subscription</a></code>
- <code><a href="./src/resources/user/subscriptions.ts">SubscriptionComponent</a></code>
- <code><a href="./src/resources/user/subscriptions.ts">SubscriptionZone</a></code>
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

- <code><a href="./src/resources/user/tokens/tokens.ts">CIDRList</a></code>
- <code><a href="./src/resources/user/tokens/tokens.ts">Policy</a></code>
- <code><a href="./src/resources/user/tokens/tokens.ts">Token</a></code>
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

- <code title="get /user/tokens/permission_groups">client.user.tokens.permissionGroups.<a href="./src/resources/user/tokens/permission-groups.ts">list</a>() -> PermissionGroupListResponsesSinglePage</code>

### Value

Types:

- <code><a href="./src/resources/user/tokens/value.ts">Value</a></code>

Methods:

- <code title="put /user/tokens/{token_id}/value">client.user.tokens.value.<a href="./src/resources/user/tokens/value.ts">update</a>(tokenId, { ...params }) -> Value</code>

# Zones

Types:

- <code><a href="./src/resources/zones/zones.ts">Type</a></code>
- <code><a href="./src/resources/zones/zones.ts">Zone</a></code>
- <code><a href="./src/resources/zones/zones.ts">ZoneDeleteResponse</a></code>

Methods:

- <code title="post /zones">client.zones.<a href="./src/resources/zones/zones.ts">create</a>({ ...params }) -> Zone</code>
- <code title="get /zones">client.zones.<a href="./src/resources/zones/zones.ts">list</a>({ ...params }) -> ZonesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}">client.zones.<a href="./src/resources/zones/zones.ts">delete</a>({ ...params }) -> ZoneDeleteResponse | null</code>
- <code title="patch /zones/{zone_id}">client.zones.<a href="./src/resources/zones/zones.ts">edit</a>({ ...params }) -> Zone</code>
- <code title="get /zones/{zone_id}">client.zones.<a href="./src/resources/zones/zones.ts">get</a>({ ...params }) -> Zone</code>

## ActivationCheck

Types:

- <code><a href="./src/resources/zones/activation-check.ts">ActivationCheckTriggerResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/activation_check">client.zones.activationCheck.<a href="./src/resources/zones/activation-check.ts">trigger</a>({ ...params }) -> ActivationCheckTriggerResponse</code>

## Settings

Types:

- <code><a href="./src/resources/zones/settings.ts">AdvancedDDoS</a></code>
- <code><a href="./src/resources/zones/settings.ts">AlwaysOnline</a></code>
- <code><a href="./src/resources/zones/settings.ts">AlwaysUseHTTPS</a></code>
- <code><a href="./src/resources/zones/settings.ts">AutomaticHTTPSRewrites</a></code>
- <code><a href="./src/resources/zones/settings.ts">AutomaticPlatformOptimization</a></code>
- <code><a href="./src/resources/zones/settings.ts">Brotli</a></code>
- <code><a href="./src/resources/zones/settings.ts">BrowserCacheTTL</a></code>
- <code><a href="./src/resources/zones/settings.ts">BrowserCheck</a></code>
- <code><a href="./src/resources/zones/settings.ts">CacheLevel</a></code>
- <code><a href="./src/resources/zones/settings.ts">ChallengeTTL</a></code>
- <code><a href="./src/resources/zones/settings.ts">Ciphers</a></code>
- <code><a href="./src/resources/zones/settings.ts">DevelopmentMode</a></code>
- <code><a href="./src/resources/zones/settings.ts">EarlyHints</a></code>
- <code><a href="./src/resources/zones/settings.ts">EmailObfuscation</a></code>
- <code><a href="./src/resources/zones/settings.ts">FontSettings</a></code>
- <code><a href="./src/resources/zones/settings.ts">H2Prioritization</a></code>
- <code><a href="./src/resources/zones/settings.ts">HotlinkProtection</a></code>
- <code><a href="./src/resources/zones/settings.ts">HTTP2</a></code>
- <code><a href="./src/resources/zones/settings.ts">HTTP3</a></code>
- <code><a href="./src/resources/zones/settings.ts">ImageResizing</a></code>
- <code><a href="./src/resources/zones/settings.ts">IPGeolocation</a></code>
- <code><a href="./src/resources/zones/settings.ts">IPV6</a></code>
- <code><a href="./src/resources/zones/settings.ts">MinTLSVersion</a></code>
- <code><a href="./src/resources/zones/settings.ts">Minify</a></code>
- <code><a href="./src/resources/zones/settings.ts">Mirage</a></code>
- <code><a href="./src/resources/zones/settings.ts">MobileRedirect</a></code>
- <code><a href="./src/resources/zones/settings.ts">NEL</a></code>
- <code><a href="./src/resources/zones/settings.ts">OpportunisticEncryption</a></code>
- <code><a href="./src/resources/zones/settings.ts">OpportunisticOnion</a></code>
- <code><a href="./src/resources/zones/settings.ts">OrangeToOrange</a></code>
- <code><a href="./src/resources/zones/settings.ts">OriginErrorPagePassThru</a></code>
- <code><a href="./src/resources/zones/settings.ts">OriginMaxHTTPVersion</a></code>
- <code><a href="./src/resources/zones/settings.ts">Polish</a></code>
- <code><a href="./src/resources/zones/settings.ts">PrefetchPreload</a></code>
- <code><a href="./src/resources/zones/settings.ts">ProxyReadTimeout</a></code>
- <code><a href="./src/resources/zones/settings.ts">PseudoIPV4</a></code>
- <code><a href="./src/resources/zones/settings.ts">ResponseBuffering</a></code>
- <code><a href="./src/resources/zones/settings.ts">RocketLoader</a></code>
- <code><a href="./src/resources/zones/settings.ts">SecurityHeaders</a></code>
- <code><a href="./src/resources/zones/settings.ts">SecurityLevel</a></code>
- <code><a href="./src/resources/zones/settings.ts">ServerSideExcludes</a></code>
- <code><a href="./src/resources/zones/settings.ts">SortQueryStringForCache</a></code>
- <code><a href="./src/resources/zones/settings.ts">SSL</a></code>
- <code><a href="./src/resources/zones/settings.ts">SSLRecommender</a></code>
- <code><a href="./src/resources/zones/settings.ts">TLS1_3</a></code>
- <code><a href="./src/resources/zones/settings.ts">TLSClientAuth</a></code>
- <code><a href="./src/resources/zones/settings.ts">TrueClientIPHeader</a></code>
- <code><a href="./src/resources/zones/settings.ts">WAF</a></code>
- <code><a href="./src/resources/zones/settings.ts">WebP</a></code>
- <code><a href="./src/resources/zones/settings.ts">Websocket</a></code>
- <code><a href="./src/resources/zones/settings.ts">ZeroRTT</a></code>
- <code><a href="./src/resources/zones/settings.ts">SettingEditResponse</a></code>
- <code><a href="./src/resources/zones/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/{setting_id}">client.zones.settings.<a href="./src/resources/zones/settings.ts">edit</a>(settingId, { ...params }) -> SettingEditResponse</code>
- <code title="get /zones/{zone_id}/settings/{setting_id}">client.zones.settings.<a href="./src/resources/zones/settings.ts">get</a>(settingId, { ...params }) -> SettingGetResponse</code>

## CustomNameservers

Types:

- <code><a href="./src/resources/zones/custom-nameservers.ts">CustomNameserverUpdateResponse</a></code>
- <code><a href="./src/resources/zones/custom-nameservers.ts">CustomNameserverGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/custom_ns">client.zones.customNameservers.<a href="./src/resources/zones/custom-nameservers.ts">update</a>({ ...params }) -> CustomNameserverUpdateResponse | null</code>
- <code title="get /zones/{zone_id}/custom_ns">client.zones.customNameservers.<a href="./src/resources/zones/custom-nameservers.ts">get</a>({ ...params }) -> CustomNameserverGetResponse | null</code>

## Holds

Types:

- <code><a href="./src/resources/zones/holds.ts">ZoneHold</a></code>

Methods:

- <code title="post /zones/{zone_id}/hold">client.zones.holds.<a href="./src/resources/zones/holds.ts">create</a>({ ...params }) -> ZoneHold</code>
- <code title="delete /zones/{zone_id}/hold">client.zones.holds.<a href="./src/resources/zones/holds.ts">delete</a>({ ...params }) -> ZoneHold</code>
- <code title="get /zones/{zone_id}/hold">client.zones.holds.<a href="./src/resources/zones/holds.ts">get</a>({ ...params }) -> ZoneHold</code>

## Subscriptions

Types:

- <code><a href="./src/resources/zones/subscriptions.ts">SubscriptionCreateResponse</a></code>
- <code><a href="./src/resources/zones/subscriptions.ts">SubscriptionGetResponse</a></code>

Methods:

- <code title="post /zones/{identifier}/subscription">client.zones.subscriptions.<a href="./src/resources/zones/subscriptions.ts">create</a>(identifier, { ...params }) -> SubscriptionCreateResponse</code>
- <code title="get /accounts/{account_identifier}/subscriptions">client.zones.subscriptions.<a href="./src/resources/zones/subscriptions.ts">list</a>(accountIdentifier) -> SubscriptionsSinglePage</code>
- <code title="get /zones/{identifier}/subscription">client.zones.subscriptions.<a href="./src/resources/zones/subscriptions.ts">get</a>(identifier) -> SubscriptionGetResponse</code>

# LoadBalancers

Types:

- <code><a href="./src/resources/load-balancers/load-balancers.ts">AdaptiveRouting</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">CheckRegion</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">DefaultPools</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">FilterOptions</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">Header</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">Host</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancer</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadShedding</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LocationStrategy</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">NotificationFilter</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">Origin</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">OriginSteering</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">RandomSteering</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">Rules</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">SessionAffinity</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">SessionAffinityAttributes</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">SteeringPolicy</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancerDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/load_balancers">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">create</a>({ ...params }) -> LoadBalancer</code>
- <code title="put /zones/{zone_id}/load_balancers/{load_balancer_id}">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">update</a>(loadBalancerId, { ...params }) -> LoadBalancer</code>
- <code title="get /zones/{zone_id}/load_balancers">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">list</a>({ ...params }) -> LoadBalancersSinglePage</code>
- <code title="delete /zones/{zone_id}/load_balancers/{load_balancer_id}">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">delete</a>(loadBalancerId, { ...params }) -> LoadBalancerDeleteResponse</code>
- <code title="patch /zones/{zone_id}/load_balancers/{load_balancer_id}">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">edit</a>(loadBalancerId, { ...params }) -> LoadBalancer</code>
- <code title="get /zones/{zone_id}/load_balancers/{load_balancer_id}">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">get</a>(loadBalancerId, { ...params }) -> LoadBalancer</code>

## Monitors

Types:

- <code><a href="./src/resources/load-balancers/monitors/monitors.ts">Monitor</a></code>
- <code><a href="./src/resources/load-balancers/monitors/monitors.ts">MonitorDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/load_balancers/monitors">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">create</a>({ ...params }) -> Monitor</code>
- <code title="put /accounts/{account_id}/load_balancers/monitors/{monitor_id}">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">update</a>(monitorId, { ...params }) -> Monitor</code>
- <code title="get /accounts/{account_id}/load_balancers/monitors">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">list</a>({ ...params }) -> MonitorsSinglePage</code>
- <code title="delete /accounts/{account_id}/load_balancers/monitors/{monitor_id}">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">delete</a>(monitorId, { ...params }) -> MonitorDeleteResponse</code>
- <code title="patch /accounts/{account_id}/load_balancers/monitors/{monitor_id}">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">edit</a>(monitorId, { ...params }) -> Monitor</code>
- <code title="get /accounts/{account_id}/load_balancers/monitors/{monitor_id}">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">get</a>(monitorId, { ...params }) -> Monitor</code>

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

- <code><a href="./src/resources/load-balancers/pools/pools.ts">Pool</a></code>
- <code><a href="./src/resources/load-balancers/pools/pools.ts">PoolDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/load_balancers/pools">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">create</a>({ ...params }) -> Pool</code>
- <code title="put /accounts/{account_id}/load_balancers/pools/{pool_id}">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">update</a>(poolId, { ...params }) -> Pool</code>
- <code title="get /accounts/{account_id}/load_balancers/pools">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">list</a>({ ...params }) -> PoolsSinglePage</code>
- <code title="delete /accounts/{account_id}/load_balancers/pools/{pool_id}">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">delete</a>(poolId, { ...params }) -> PoolDeleteResponse</code>
- <code title="patch /accounts/{account_id}/load_balancers/pools/{pool_id}">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">edit</a>(poolId, { ...params }) -> Pool</code>
- <code title="get /accounts/{account_id}/load_balancers/pools/{pool_id}">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">get</a>(poolId, { ...params }) -> Pool</code>

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

Types:

- <code><a href="./src/resources/load-balancers/previews.ts">PreviewGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/load_balancers/preview/{preview_id}">client.loadBalancers.previews.<a href="./src/resources/load-balancers/previews.ts">get</a>(previewId, { ...params }) -> PreviewGetResponse</code>

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

- <code><a href="./src/resources/cache/cache-reserve.ts">CacheReserve</a></code>
- <code><a href="./src/resources/cache/cache-reserve.ts">CacheReserveClear</a></code>
- <code><a href="./src/resources/cache/cache-reserve.ts">State</a></code>
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

- <code><a href="./src/resources/cache/variants.ts">CacheVariant</a></code>
- <code><a href="./src/resources/cache/variants.ts">CacheVariantIdentifier</a></code>
- <code><a href="./src/resources/cache/variants.ts">VariantEditResponse</a></code>
- <code><a href="./src/resources/cache/variants.ts">VariantGetResponse</a></code>

Methods:

- <code title="delete /zones/{zone_id}/cache/variants">client.cache.variants.<a href="./src/resources/cache/variants.ts">delete</a>({ ...params }) -> CacheVariant</code>
- <code title="patch /zones/{zone_id}/cache/variants">client.cache.variants.<a href="./src/resources/cache/variants.ts">edit</a>({ ...params }) -> VariantEditResponse</code>
- <code title="get /zones/{zone_id}/cache/variants">client.cache.variants.<a href="./src/resources/cache/variants.ts">get</a>({ ...params }) -> VariantGetResponse</code>

## RegionalTieredCache

Types:

- <code><a href="./src/resources/cache/regional-tiered-cache.ts">RegionalTieredCache</a></code>
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

- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">Host</a></code>
- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">RequestValidity</a></code>
- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">Status</a></code>
- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">ValidationMethod</a></code>
- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">CertificatePackListResponse</a></code>
- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">CertificatePackDeleteResponse</a></code>
- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">CertificatePackEditResponse</a></code>
- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">CertificatePackGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/ssl/certificate_packs">client.ssl.certificatePacks.<a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">list</a>({ ...params }) -> CertificatePackListResponsesSinglePage</code>
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

- <code><a href="./src/resources/ssl/universal/settings.ts">UniversalSSLSettings</a></code>

Methods:

- <code title="patch /zones/{zone_id}/ssl/universal/settings">client.ssl.universal.settings.<a href="./src/resources/ssl/universal/settings.ts">edit</a>({ ...params }) -> UniversalSSLSettings</code>
- <code title="get /zones/{zone_id}/ssl/universal/settings">client.ssl.universal.settings.<a href="./src/resources/ssl/universal/settings.ts">get</a>({ ...params }) -> UniversalSSLSettings</code>

## Verification

Types:

- <code><a href="./src/resources/ssl/verification.ts">Verification</a></code>
- <code><a href="./src/resources/ssl/verification.ts">VerificationEditResponse</a></code>
- <code><a href="./src/resources/ssl/verification.ts">VerificationGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/ssl/verification/{certificate_pack_id}">client.ssl.verification.<a href="./src/resources/ssl/verification.ts">edit</a>(certificatePackId, { ...params }) -> VerificationEditResponse</code>
- <code title="get /zones/{zone_id}/ssl/verification">client.ssl.verification.<a href="./src/resources/ssl/verification.ts">get</a>({ ...params }) -> VerificationGetResponse</code>

# Subscriptions

Types:

- <code><a href="./src/resources/subscriptions.ts">SubscriptionCreateResponse</a></code>
- <code><a href="./src/resources/subscriptions.ts">SubscriptionUpdateResponse</a></code>
- <code><a href="./src/resources/subscriptions.ts">SubscriptionDeleteResponse</a></code>
- <code><a href="./src/resources/subscriptions.ts">SubscriptionGetResponse</a></code>

Methods:

- <code title="post /zones/{identifier}/subscription">client.subscriptions.<a href="./src/resources/subscriptions.ts">create</a>(identifier, { ...params }) -> SubscriptionCreateResponse</code>
- <code title="put /accounts/{account_identifier}/subscriptions/{subscription_identifier}">client.subscriptions.<a href="./src/resources/subscriptions.ts">update</a>(accountIdentifier, subscriptionIdentifier, { ...params }) -> SubscriptionUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/subscriptions">client.subscriptions.<a href="./src/resources/subscriptions.ts">list</a>(accountIdentifier) -> SubscriptionsSinglePage</code>
- <code title="delete /accounts/{account_identifier}/subscriptions/{subscription_identifier}">client.subscriptions.<a href="./src/resources/subscriptions.ts">delete</a>(accountIdentifier, subscriptionIdentifier) -> SubscriptionDeleteResponse</code>
- <code title="get /zones/{identifier}/subscription">client.subscriptions.<a href="./src/resources/subscriptions.ts">get</a>(identifier) -> SubscriptionGetResponse</code>

# ACM

## TotalTLS

Types:

- <code><a href="./src/resources/acm/total-tls.ts">CertificateAuthority</a></code>
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

# Plans

Types:

- <code><a href="./src/resources/plans.ts">AvailableRatePlan</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/available_plans">client.plans.<a href="./src/resources/plans.ts">list</a>(zoneIdentifier) -> AvailableRatePlansSinglePage</code>
- <code title="get /zones/{zone_identifier}/available_plans/{plan_identifier}">client.plans.<a href="./src/resources/plans.ts">get</a>(zoneIdentifier, planIdentifier) -> AvailableRatePlan</code>

# RatePlans

Types:

- <code><a href="./src/resources/rate-plans.ts">RatePlan</a></code>
- <code><a href="./src/resources/rate-plans.ts">RatePlanGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/available_rate_plans">client.ratePlans.<a href="./src/resources/rate-plans.ts">get</a>(zoneIdentifier) -> RatePlanGetResponse | null</code>

# CertificateAuthorities

## HostnameAssociations

Types:

- <code><a href="./src/resources/certificate-authorities/hostname-associations.ts">HostnameAssociation</a></code>
- <code><a href="./src/resources/certificate-authorities/hostname-associations.ts">TLSHostnameAssociation</a></code>
- <code><a href="./src/resources/certificate-authorities/hostname-associations.ts">HostnameAssociationUpdateResponse</a></code>
- <code><a href="./src/resources/certificate-authorities/hostname-associations.ts">HostnameAssociationGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/certificate_authorities/hostname_associations">client.certificateAuthorities.hostnameAssociations.<a href="./src/resources/certificate-authorities/hostname-associations.ts">update</a>({ ...params }) -> HostnameAssociationUpdateResponse</code>
- <code title="get /zones/{zone_id}/certificate_authorities/hostname_associations">client.certificateAuthorities.hostnameAssociations.<a href="./src/resources/certificate-authorities/hostname-associations.ts">get</a>({ ...params }) -> HostnameAssociationGetResponse</code>

# ClientCertificates

Types:

- <code><a href="./src/resources/client-certificates.ts">ClientCertificate</a></code>

Methods:

- <code title="post /zones/{zone_id}/client_certificates">client.clientCertificates.<a href="./src/resources/client-certificates.ts">create</a>({ ...params }) -> ClientCertificate</code>
- <code title="get /zones/{zone_id}/client_certificates">client.clientCertificates.<a href="./src/resources/client-certificates.ts">list</a>({ ...params }) -> ClientCertificatesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/client_certificates/{client_certificate_id}">client.clientCertificates.<a href="./src/resources/client-certificates.ts">delete</a>(clientCertificateId, { ...params }) -> ClientCertificate</code>
- <code title="patch /zones/{zone_id}/client_certificates/{client_certificate_id}">client.clientCertificates.<a href="./src/resources/client-certificates.ts">edit</a>(clientCertificateId, { ...params }) -> ClientCertificate</code>
- <code title="get /zones/{zone_id}/client_certificates/{client_certificate_id}">client.clientCertificates.<a href="./src/resources/client-certificates.ts">get</a>(clientCertificateId, { ...params }) -> ClientCertificate</code>

# CustomCertificates

Types:

- <code><a href="./src/resources/custom-certificates/custom-certificates.ts">CustomCertificate</a></code>
- <code><a href="./src/resources/custom-certificates/custom-certificates.ts">GeoRestrictions</a></code>
- <code><a href="./src/resources/custom-certificates/custom-certificates.ts">Status</a></code>
- <code><a href="./src/resources/custom-certificates/custom-certificates.ts">CustomCertificateCreateResponse</a></code>
- <code><a href="./src/resources/custom-certificates/custom-certificates.ts">CustomCertificateDeleteResponse</a></code>
- <code><a href="./src/resources/custom-certificates/custom-certificates.ts">CustomCertificateEditResponse</a></code>
- <code><a href="./src/resources/custom-certificates/custom-certificates.ts">CustomCertificateGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/custom_certificates">client.customCertificates.<a href="./src/resources/custom-certificates/custom-certificates.ts">create</a>({ ...params }) -> CustomCertificateCreateResponse</code>
- <code title="get /zones/{zone_id}/custom_certificates">client.customCertificates.<a href="./src/resources/custom-certificates/custom-certificates.ts">list</a>({ ...params }) -> CustomCertificatesV4PagePaginationArray</code>
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

- <code><a href="./src/resources/custom-hostnames/custom-hostnames.ts">BundleMethod</a></code>
- <code><a href="./src/resources/custom-hostnames/custom-hostnames.ts">CustomHostname</a></code>
- <code><a href="./src/resources/custom-hostnames/custom-hostnames.ts">DCVMethod</a></code>
- <code><a href="./src/resources/custom-hostnames/custom-hostnames.ts">DomainValidationType</a></code>
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

- <code><a href="./src/resources/custom-nameservers.ts">CustomNameserver</a></code>
- <code><a href="./src/resources/custom-nameservers.ts">CustomNameserverDeleteResponse</a></code>
- <code><a href="./src/resources/custom-nameservers.ts">CustomNameserverAvailabiltyResponse</a></code>
- <code><a href="./src/resources/custom-nameservers.ts">CustomNameserverGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/custom_ns">client.customNameservers.<a href="./src/resources/custom-nameservers.ts">create</a>({ ...params }) -> CustomNameserver</code>
- <code title="delete /accounts/{account_id}/custom_ns/{custom_ns_id}">client.customNameservers.<a href="./src/resources/custom-nameservers.ts">delete</a>(customNSId, { ...params }) -> CustomNameserverDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/custom_ns/availability">client.customNameservers.<a href="./src/resources/custom-nameservers.ts">availabilty</a>({ ...params }) -> CustomNameserverAvailabiltyResponse | null</code>
- <code title="get /accounts/{account_id}/custom_ns">client.customNameservers.<a href="./src/resources/custom-nameservers.ts">get</a>({ ...params }) -> CustomNameserverGetResponse | null</code>

# DNS

Types:

- <code><a href="./src/resources/dns/dns.ts">DNSAnalyticsNominalMetric</a></code>
- <code><a href="./src/resources/dns/dns.ts">DNSAnalyticsQuery</a></code>

## Records

Types:

- <code><a href="./src/resources/dns/records.ts">ARecord</a></code>
- <code><a href="./src/resources/dns/records.ts">AAAARecord</a></code>
- <code><a href="./src/resources/dns/records.ts">CAARecord</a></code>
- <code><a href="./src/resources/dns/records.ts">CERTRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">CNAMERecord</a></code>
- <code><a href="./src/resources/dns/records.ts">DNSKEYRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">DSRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">HTTPSRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">LOCRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">MXRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">NAPTRRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">NSRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">PTRRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">Record</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordMetadata</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordProcessTiming</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordTags</a></code>
- <code><a href="./src/resources/dns/records.ts">SMIMEARecord</a></code>
- <code><a href="./src/resources/dns/records.ts">SRVRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">SSHFPRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">SVCBRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">TLSARecord</a></code>
- <code><a href="./src/resources/dns/records.ts">TTL</a></code>
- <code><a href="./src/resources/dns/records.ts">TXTRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">URIRecord</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordDeleteResponse</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordExportResponse</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordImportResponse</a></code>
- <code><a href="./src/resources/dns/records.ts">RecordScanResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/dns_records">client.dns.records.<a href="./src/resources/dns/records.ts">create</a>({ ...params }) -> Record</code>
- <code title="put /zones/{zone_id}/dns_records/{dns_record_id}">client.dns.records.<a href="./src/resources/dns/records.ts">update</a>(dnsRecordId, { ...params }) -> Record</code>
- <code title="get /zones/{zone_id}/dns_records">client.dns.records.<a href="./src/resources/dns/records.ts">list</a>({ ...params }) -> RecordsV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/dns_records/{dns_record_id}">client.dns.records.<a href="./src/resources/dns/records.ts">delete</a>(dnsRecordId, { ...params }) -> RecordDeleteResponse</code>
- <code title="patch /zones/{zone_id}/dns_records/{dns_record_id}">client.dns.records.<a href="./src/resources/dns/records.ts">edit</a>(dnsRecordId, { ...params }) -> Record</code>
- <code title="get /zones/{zone_id}/dns_records/export">client.dns.records.<a href="./src/resources/dns/records.ts">export</a>({ ...params }) -> string</code>
- <code title="get /zones/{zone_id}/dns_records/{dns_record_id}">client.dns.records.<a href="./src/resources/dns/records.ts">get</a>(dnsRecordId, { ...params }) -> Record</code>
- <code title="post /zones/{zone_id}/dns_records/import">client.dns.records.<a href="./src/resources/dns/records.ts">import</a>({ ...params }) -> RecordImportResponse</code>
- <code title="post /zones/{zone_id}/dns_records/scan">client.dns.records.<a href="./src/resources/dns/records.ts">scan</a>({ ...params }) -> RecordScanResponse</code>

## Settings

Types:

- <code><a href="./src/resources/dns/settings.ts">DNSSetting</a></code>
- <code><a href="./src/resources/dns/settings.ts">Nameserver</a></code>
- <code><a href="./src/resources/dns/settings.ts">SettingEditResponse</a></code>
- <code><a href="./src/resources/dns/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="patch /{account_or_zone}/{account_or_zone_id}/dns_settings">client.dns.settings.<a href="./src/resources/dns/settings.ts">edit</a>({ ...params }) -> SettingEditResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/dns_settings">client.dns.settings.<a href="./src/resources/dns/settings.ts">get</a>({ ...params }) -> SettingGetResponse</code>

## Analytics

### Reports

Types:

- <code><a href="./src/resources/dns/analytics/reports/reports.ts">Report</a></code>

Methods:

- <code title="get /zones/{zone_id}/dns_analytics/report">client.dns.analytics.reports.<a href="./src/resources/dns/analytics/reports/reports.ts">get</a>({ ...params }) -> Report</code>

#### Bytimes

Types:

- <code><a href="./src/resources/dns/analytics/reports/bytimes.ts">ByTime</a></code>

Methods:

- <code title="get /zones/{zone_id}/dns_analytics/report/bytime">client.dns.analytics.reports.bytimes.<a href="./src/resources/dns/analytics/reports/bytimes.ts">get</a>({ ...params }) -> ByTime</code>

## Firewall

Types:

- <code><a href="./src/resources/dns/firewall/firewall.ts">AttackMitigation</a></code>
- <code><a href="./src/resources/dns/firewall/firewall.ts">Firewall</a></code>
- <code><a href="./src/resources/dns/firewall/firewall.ts">FirewallIPs</a></code>
- <code><a href="./src/resources/dns/firewall/firewall.ts">UpstreamIPs</a></code>
- <code><a href="./src/resources/dns/firewall/firewall.ts">FirewallDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dns_firewall">client.dns.firewall.<a href="./src/resources/dns/firewall/firewall.ts">create</a>({ ...params }) -> Firewall</code>
- <code title="get /accounts/{account_id}/dns_firewall">client.dns.firewall.<a href="./src/resources/dns/firewall/firewall.ts">list</a>({ ...params }) -> FirewallsV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/dns_firewall/{dns_firewall_id}">client.dns.firewall.<a href="./src/resources/dns/firewall/firewall.ts">delete</a>(dnsFirewallId, { ...params }) -> FirewallDeleteResponse</code>
- <code title="patch /accounts/{account_id}/dns_firewall/{dns_firewall_id}">client.dns.firewall.<a href="./src/resources/dns/firewall/firewall.ts">edit</a>(dnsFirewallId, { ...params }) -> Firewall</code>
- <code title="get /accounts/{account_id}/dns_firewall/{dns_firewall_id}">client.dns.firewall.<a href="./src/resources/dns/firewall/firewall.ts">get</a>(dnsFirewallId, { ...params }) -> Firewall</code>

### Analytics

Types:

- <code><a href="./src/resources/dns/firewall/analytics/analytics.ts">Delta</a></code>

#### Reports

Methods:

- <code title="get /accounts/{account_id}/dns_firewall/{dns_firewall_id}/dns_analytics/report">client.dns.firewall.analytics.reports.<a href="./src/resources/dns/firewall/analytics/reports/reports.ts">get</a>(dnsFirewallId, { ...params }) -> Report</code>

##### Bytimes

Methods:

- <code title="get /accounts/{account_id}/dns_firewall/{dns_firewall_id}/dns_analytics/report/bytime">client.dns.firewall.analytics.reports.bytimes.<a href="./src/resources/dns/firewall/analytics/reports/bytimes.ts">get</a>(dnsFirewallId, { ...params }) -> ByTime</code>

# DNSSEC

Types:

- <code><a href="./src/resources/dnssec.ts">DNSSEC</a></code>
- <code><a href="./src/resources/dnssec.ts">DNSSECDeleteResponse</a></code>

Methods:

- <code title="delete /zones/{zone_id}/dnssec">client.dnssec.<a href="./src/resources/dnssec.ts">delete</a>({ ...params }) -> DNSSECDeleteResponse</code>
- <code title="patch /zones/{zone_id}/dnssec">client.dnssec.<a href="./src/resources/dnssec.ts">edit</a>({ ...params }) -> DNSSEC</code>
- <code title="get /zones/{zone_id}/dnssec">client.dnssec.<a href="./src/resources/dnssec.ts">get</a>({ ...params }) -> DNSSEC</code>

# EmailRouting

Types:

- <code><a href="./src/resources/email-routing/email-routing.ts">Settings</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/email/routing/disable">client.emailRouting.<a href="./src/resources/email-routing/email-routing.ts">disable</a>(zoneIdentifier, { ...params }) -> Settings</code>
- <code title="post /zones/{zone_identifier}/email/routing/enable">client.emailRouting.<a href="./src/resources/email-routing/email-routing.ts">enable</a>(zoneIdentifier, { ...params }) -> Settings</code>
- <code title="get /zones/{zone_identifier}/email/routing">client.emailRouting.<a href="./src/resources/email-routing/email-routing.ts">get</a>(zoneIdentifier) -> Settings</code>

## DNS

Types:

- <code><a href="./src/resources/email-routing/dns.ts">DNSRecord</a></code>
- <code><a href="./src/resources/email-routing/dns.ts">DNSGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/email/routing/dns">client.emailRouting.dns.<a href="./src/resources/email-routing/dns.ts">get</a>(zoneIdentifier) -> DNSGetResponse | null</code>

## Rules

Types:

- <code><a href="./src/resources/email-routing/rules/rules.ts">Action</a></code>
- <code><a href="./src/resources/email-routing/rules/rules.ts">EmailRoutingRule</a></code>
- <code><a href="./src/resources/email-routing/rules/rules.ts">Matcher</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/email/routing/rules">client.emailRouting.rules.<a href="./src/resources/email-routing/rules/rules.ts">create</a>(zoneIdentifier, { ...params }) -> EmailRoutingRule</code>
- <code title="put /zones/{zone_identifier}/email/routing/rules/{rule_identifier}">client.emailRouting.rules.<a href="./src/resources/email-routing/rules/rules.ts">update</a>(zoneIdentifier, ruleIdentifier, { ...params }) -> EmailRoutingRule</code>
- <code title="get /zones/{zone_identifier}/email/routing/rules">client.emailRouting.rules.<a href="./src/resources/email-routing/rules/rules.ts">list</a>(zoneIdentifier, { ...params }) -> EmailRoutingRulesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_identifier}/email/routing/rules/{rule_identifier}">client.emailRouting.rules.<a href="./src/resources/email-routing/rules/rules.ts">delete</a>(zoneIdentifier, ruleIdentifier) -> EmailRoutingRule</code>
- <code title="get /zones/{zone_identifier}/email/routing/rules/{rule_identifier}">client.emailRouting.rules.<a href="./src/resources/email-routing/rules/rules.ts">get</a>(zoneIdentifier, ruleIdentifier) -> EmailRoutingRule</code>

### CatchAlls

Types:

- <code><a href="./src/resources/email-routing/rules/catch-alls.ts">CatchAllAction</a></code>
- <code><a href="./src/resources/email-routing/rules/catch-alls.ts">CatchAllMatcher</a></code>
- <code><a href="./src/resources/email-routing/rules/catch-alls.ts">CatchAllUpdateResponse</a></code>
- <code><a href="./src/resources/email-routing/rules/catch-alls.ts">CatchAllGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_identifier}/email/routing/rules/catch_all">client.emailRouting.rules.catchAlls.<a href="./src/resources/email-routing/rules/catch-alls.ts">update</a>(zoneIdentifier, { ...params }) -> CatchAllUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/email/routing/rules/catch_all">client.emailRouting.rules.catchAlls.<a href="./src/resources/email-routing/rules/catch-alls.ts">get</a>(zoneIdentifier) -> CatchAllGetResponse</code>

## Addresses

Types:

- <code><a href="./src/resources/email-routing/addresses.ts">Address</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/email/routing/addresses">client.emailRouting.addresses.<a href="./src/resources/email-routing/addresses.ts">create</a>(accountIdentifier, { ...params }) -> Address</code>
- <code title="get /accounts/{account_identifier}/email/routing/addresses">client.emailRouting.addresses.<a href="./src/resources/email-routing/addresses.ts">list</a>(accountIdentifier, { ...params }) -> AddressesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_identifier}/email/routing/addresses/{destination_address_identifier}">client.emailRouting.addresses.<a href="./src/resources/email-routing/addresses.ts">delete</a>(accountIdentifier, destinationAddressIdentifier) -> Address</code>
- <code title="get /accounts/{account_identifier}/email/routing/addresses/{destination_address_identifier}">client.emailRouting.addresses.<a href="./src/resources/email-routing/addresses.ts">get</a>(accountIdentifier, destinationAddressIdentifier) -> Address</code>

# Filters

Types:

- <code><a href="./src/resources/filters.ts">FirewallFilter</a></code>
- <code><a href="./src/resources/filters.ts">FilterCreateResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/filters">client.filters.<a href="./src/resources/filters.ts">create</a>(zoneIdentifier, { ...params }) -> FilterCreateResponse | null</code>
- <code title="put /zones/{zone_identifier}/filters/{id}">client.filters.<a href="./src/resources/filters.ts">update</a>(zoneIdentifier, id, { ...params }) -> FirewallFilter</code>
- <code title="get /zones/{zone_identifier}/filters">client.filters.<a href="./src/resources/filters.ts">list</a>(zoneIdentifier, { ...params }) -> FirewallFiltersV4PagePaginationArray</code>
- <code title="delete /zones/{zone_identifier}/filters/{id}">client.filters.<a href="./src/resources/filters.ts">delete</a>(zoneIdentifier, id) -> FirewallFilter</code>
- <code title="get /zones/{zone_identifier}/filters/{id}">client.filters.<a href="./src/resources/filters.ts">get</a>(zoneIdentifier, id) -> FirewallFilter</code>

# Firewall

## Lockdowns

Types:

- <code><a href="./src/resources/firewall/lockdowns.ts">Configuration</a></code>
- <code><a href="./src/resources/firewall/lockdowns.ts">Lockdown</a></code>
- <code><a href="./src/resources/firewall/lockdowns.ts">LockdownCIDRConfiguration</a></code>
- <code><a href="./src/resources/firewall/lockdowns.ts">LockdownIPConfiguration</a></code>
- <code><a href="./src/resources/firewall/lockdowns.ts">LockdownURL</a></code>
- <code><a href="./src/resources/firewall/lockdowns.ts">LockdownDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/firewall/lockdowns">client.firewall.lockdowns.<a href="./src/resources/firewall/lockdowns.ts">create</a>(zoneIdentifier, { ...params }) -> Lockdown</code>
- <code title="put /zones/{zone_identifier}/firewall/lockdowns/{id}">client.firewall.lockdowns.<a href="./src/resources/firewall/lockdowns.ts">update</a>(zoneIdentifier, id, { ...params }) -> Lockdown</code>
- <code title="get /zones/{zone_identifier}/firewall/lockdowns">client.firewall.lockdowns.<a href="./src/resources/firewall/lockdowns.ts">list</a>(zoneIdentifier, { ...params }) -> LockdownsV4PagePaginationArray</code>
- <code title="delete /zones/{zone_identifier}/firewall/lockdowns/{id}">client.firewall.lockdowns.<a href="./src/resources/firewall/lockdowns.ts">delete</a>(zoneIdentifier, id) -> LockdownDeleteResponse</code>
- <code title="get /zones/{zone_identifier}/firewall/lockdowns/{id}">client.firewall.lockdowns.<a href="./src/resources/firewall/lockdowns.ts">get</a>(zoneIdentifier, id) -> Lockdown</code>

## Rules

Types:

- <code><a href="./src/resources/firewall/rules.ts">FirewallRule</a></code>
- <code><a href="./src/resources/firewall/rules.ts">Product</a></code>
- <code><a href="./src/resources/firewall/rules.ts">DeletedFilter</a></code>
- <code><a href="./src/resources/firewall/rules.ts">RuleCreateResponse</a></code>
- <code><a href="./src/resources/firewall/rules.ts">RuleEditResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/firewall/rules">client.firewall.rules.<a href="./src/resources/firewall/rules.ts">create</a>(zoneIdentifier, { ...params }) -> RuleCreateResponse | null</code>
- <code title="put /zones/{zone_identifier}/firewall/rules/{id}">client.firewall.rules.<a href="./src/resources/firewall/rules.ts">update</a>(zoneIdentifier, id, { ...params }) -> FirewallRule</code>
- <code title="get /zones/{zone_identifier}/firewall/rules">client.firewall.rules.<a href="./src/resources/firewall/rules.ts">list</a>(zoneIdentifier, { ...params }) -> FirewallRulesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_identifier}/firewall/rules/{id}">client.firewall.rules.<a href="./src/resources/firewall/rules.ts">delete</a>(zoneIdentifier, id) -> FirewallRule</code>
- <code title="patch /zones/{zone_identifier}/firewall/rules/{id}">client.firewall.rules.<a href="./src/resources/firewall/rules.ts">edit</a>(zoneIdentifier, id, { ...params }) -> RuleEditResponse | null</code>
- <code title="get /zones/{zone_identifier}/firewall/rules/{id}">client.firewall.rules.<a href="./src/resources/firewall/rules.ts">get</a>(zoneIdentifier, { ...params }) -> FirewallRule</code>

## AccessRules

Types:

- <code><a href="./src/resources/firewall/access-rules.ts">AccessRuleCIDRConfiguration</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">AccessRuleIPConfiguration</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">ASNConfiguration</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">CountryConfiguration</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">IPV6Configuration</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">AccessRuleCreateResponse</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">AccessRuleListResponse</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">AccessRuleDeleteResponse</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">AccessRuleEditResponse</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">AccessRuleGetResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/firewall/access_rules/rules">client.firewall.accessRules.<a href="./src/resources/firewall/access-rules.ts">create</a>({ ...params }) -> AccessRuleCreateResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/firewall/access_rules/rules">client.firewall.accessRules.<a href="./src/resources/firewall/access-rules.ts">list</a>({ ...params }) -> AccessRuleListResponsesV4PagePaginationArray</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/firewall/access_rules/rules/{identifier}">client.firewall.accessRules.<a href="./src/resources/firewall/access-rules.ts">delete</a>(identifier, { ...params }) -> AccessRuleDeleteResponse | null</code>
- <code title="patch /{account_or_zone}/{account_or_zone_id}/firewall/access_rules/rules/{identifier}">client.firewall.accessRules.<a href="./src/resources/firewall/access-rules.ts">edit</a>(identifier, { ...params }) -> AccessRuleEditResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/firewall/access_rules/rules/{identifier}">client.firewall.accessRules.<a href="./src/resources/firewall/access-rules.ts">get</a>(identifier, { ...params }) -> AccessRuleGetResponse</code>

## UARules

Types:

- <code><a href="./src/resources/firewall/ua-rules.ts">UARuleCreateResponse</a></code>
- <code><a href="./src/resources/firewall/ua-rules.ts">UARuleUpdateResponse</a></code>
- <code><a href="./src/resources/firewall/ua-rules.ts">UARuleListResponse</a></code>
- <code><a href="./src/resources/firewall/ua-rules.ts">UARuleDeleteResponse</a></code>
- <code><a href="./src/resources/firewall/ua-rules.ts">UARuleGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/firewall/ua_rules">client.firewall.uaRules.<a href="./src/resources/firewall/ua-rules.ts">create</a>(zoneIdentifier, { ...params }) -> UARuleCreateResponse</code>
- <code title="put /zones/{zone_identifier}/firewall/ua_rules/{id}">client.firewall.uaRules.<a href="./src/resources/firewall/ua-rules.ts">update</a>(zoneIdentifier, id, { ...params }) -> UARuleUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/firewall/ua_rules">client.firewall.uaRules.<a href="./src/resources/firewall/ua-rules.ts">list</a>(zoneIdentifier, { ...params }) -> UARuleListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_identifier}/firewall/ua_rules/{id}">client.firewall.uaRules.<a href="./src/resources/firewall/ua-rules.ts">delete</a>(zoneIdentifier, id) -> UARuleDeleteResponse</code>
- <code title="get /zones/{zone_identifier}/firewall/ua_rules/{id}">client.firewall.uaRules.<a href="./src/resources/firewall/ua-rules.ts">get</a>(zoneIdentifier, id) -> UARuleGetResponse</code>

## WAF

### Overrides

Types:

- <code><a href="./src/resources/firewall/waf/overrides.ts">Override</a></code>
- <code><a href="./src/resources/firewall/waf/overrides.ts">OverrideURL</a></code>
- <code><a href="./src/resources/firewall/waf/overrides.ts">RewriteAction</a></code>
- <code><a href="./src/resources/firewall/waf/overrides.ts">WAFRule</a></code>
- <code><a href="./src/resources/firewall/waf/overrides.ts">OverrideDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/firewall/waf/overrides">client.firewall.waf.overrides.<a href="./src/resources/firewall/waf/overrides.ts">create</a>(zoneIdentifier, { ...params }) -> Override</code>
- <code title="put /zones/{zone_identifier}/firewall/waf/overrides/{id}">client.firewall.waf.overrides.<a href="./src/resources/firewall/waf/overrides.ts">update</a>(zoneIdentifier, id, { ...params }) -> Override</code>
- <code title="get /zones/{zone_identifier}/firewall/waf/overrides">client.firewall.waf.overrides.<a href="./src/resources/firewall/waf/overrides.ts">list</a>(zoneIdentifier, { ...params }) -> OverridesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_identifier}/firewall/waf/overrides/{id}">client.firewall.waf.overrides.<a href="./src/resources/firewall/waf/overrides.ts">delete</a>(zoneIdentifier, id) -> OverrideDeleteResponse</code>
- <code title="get /zones/{zone_identifier}/firewall/waf/overrides/{id}">client.firewall.waf.overrides.<a href="./src/resources/firewall/waf/overrides.ts">get</a>(zoneIdentifier, id) -> Override</code>

### Packages

Types:

- <code><a href="./src/resources/firewall/waf/packages/packages.ts">PackageListResponse</a></code>
- <code><a href="./src/resources/firewall/waf/packages/packages.ts">PackageGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/firewall/waf/packages">client.firewall.waf.packages.<a href="./src/resources/firewall/waf/packages/packages.ts">list</a>(zoneIdentifier, { ...params }) -> PackageListResponsesV4PagePaginationArray</code>
- <code title="get /zones/{zone_identifier}/firewall/waf/packages/{identifier}">client.firewall.waf.packages.<a href="./src/resources/firewall/waf/packages/packages.ts">get</a>(zoneIdentifier, identifier) -> PackageGetResponse</code>

#### Groups

Types:

- <code><a href="./src/resources/firewall/waf/packages/groups.ts">Group</a></code>
- <code><a href="./src/resources/firewall/waf/packages/groups.ts">GroupEditResponse</a></code>
- <code><a href="./src/resources/firewall/waf/packages/groups.ts">GroupGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/groups">client.firewall.waf.packages.groups.<a href="./src/resources/firewall/waf/packages/groups.ts">list</a>(packageId, { ...params }) -> GroupsV4PagePaginationArray</code>
- <code title="patch /zones/{zone_id}/firewall/waf/packages/{package_id}/groups/{group_id}">client.firewall.waf.packages.groups.<a href="./src/resources/firewall/waf/packages/groups.ts">edit</a>(packageId, groupId, { ...params }) -> GroupEditResponse</code>
- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/groups/{group_id}">client.firewall.waf.packages.groups.<a href="./src/resources/firewall/waf/packages/groups.ts">get</a>(packageId, groupId, { ...params }) -> GroupGetResponse</code>

#### Rules

Types:

- <code><a href="./src/resources/firewall/waf/packages/rules.ts">AllowedModesAnomaly</a></code>
- <code><a href="./src/resources/firewall/waf/packages/rules.ts">WAFRuleGroup</a></code>
- <code><a href="./src/resources/firewall/waf/packages/rules.ts">RuleListResponse</a></code>
- <code><a href="./src/resources/firewall/waf/packages/rules.ts">RuleEditResponse</a></code>
- <code><a href="./src/resources/firewall/waf/packages/rules.ts">RuleGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/rules">client.firewall.waf.packages.rules.<a href="./src/resources/firewall/waf/packages/rules.ts">list</a>(packageId, { ...params }) -> RuleListResponsesV4PagePaginationArray</code>
- <code title="patch /zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{rule_id}">client.firewall.waf.packages.rules.<a href="./src/resources/firewall/waf/packages/rules.ts">edit</a>(packageId, ruleId, { ...params }) -> RuleEditResponse</code>
- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{rule_id}">client.firewall.waf.packages.rules.<a href="./src/resources/firewall/waf/packages/rules.ts">get</a>(packageId, ruleId, { ...params }) -> RuleGetResponse</code>

# Healthchecks

Types:

- <code><a href="./src/resources/healthchecks/healthchecks.ts">CheckRegion</a></code>
- <code><a href="./src/resources/healthchecks/healthchecks.ts">Healthcheck</a></code>
- <code><a href="./src/resources/healthchecks/healthchecks.ts">HTTPConfiguration</a></code>
- <code><a href="./src/resources/healthchecks/healthchecks.ts">QueryHealthcheck</a></code>
- <code><a href="./src/resources/healthchecks/healthchecks.ts">TCPConfiguration</a></code>
- <code><a href="./src/resources/healthchecks/healthchecks.ts">HealthcheckDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/healthchecks">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">create</a>({ ...params }) -> Healthcheck</code>
- <code title="put /zones/{zone_id}/healthchecks/{healthcheck_id}">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">update</a>(healthcheckId, { ...params }) -> Healthcheck</code>
- <code title="get /zones/{zone_id}/healthchecks">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">list</a>({ ...params }) -> HealthchecksSinglePage</code>
- <code title="delete /zones/{zone_id}/healthchecks/{healthcheck_id}">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">delete</a>(healthcheckId, { ...params }) -> HealthcheckDeleteResponse</code>
- <code title="patch /zones/{zone_id}/healthchecks/{healthcheck_id}">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">edit</a>(healthcheckId, { ...params }) -> Healthcheck</code>
- <code title="get /zones/{zone_id}/healthchecks/{healthcheck_id}">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">get</a>(healthcheckId, { ...params }) -> Healthcheck</code>

## Previews

Types:

- <code><a href="./src/resources/healthchecks/previews.ts">PreviewDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/healthchecks/preview">client.healthchecks.previews.<a href="./src/resources/healthchecks/previews.ts">create</a>({ ...params }) -> Healthcheck</code>
- <code title="delete /zones/{zone_id}/healthchecks/preview/{healthcheck_id}">client.healthchecks.previews.<a href="./src/resources/healthchecks/previews.ts">delete</a>(healthcheckId, { ...params }) -> PreviewDeleteResponse</code>
- <code title="get /zones/{zone_id}/healthchecks/preview/{healthcheck_id}">client.healthchecks.previews.<a href="./src/resources/healthchecks/previews.ts">get</a>(healthcheckId, { ...params }) -> Healthcheck</code>

# KeylessCertificates

Types:

- <code><a href="./src/resources/keyless-certificates.ts">KeylessCertificate</a></code>
- <code><a href="./src/resources/keyless-certificates.ts">Tunnel</a></code>
- <code><a href="./src/resources/keyless-certificates.ts">KeylessCertificateDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/keyless_certificates">client.keylessCertificates.<a href="./src/resources/keyless-certificates.ts">create</a>({ ...params }) -> KeylessCertificate</code>
- <code title="get /zones/{zone_id}/keyless_certificates">client.keylessCertificates.<a href="./src/resources/keyless-certificates.ts">list</a>({ ...params }) -> KeylessCertificatesSinglePage</code>
- <code title="delete /zones/{zone_id}/keyless_certificates/{keyless_certificate_id}">client.keylessCertificates.<a href="./src/resources/keyless-certificates.ts">delete</a>(keylessCertificateId, { ...params }) -> KeylessCertificateDeleteResponse</code>
- <code title="patch /zones/{zone_id}/keyless_certificates/{keyless_certificate_id}">client.keylessCertificates.<a href="./src/resources/keyless-certificates.ts">edit</a>(keylessCertificateId, { ...params }) -> KeylessCertificate</code>
- <code title="get /zones/{zone_id}/keyless_certificates/{keyless_certificate_id}">client.keylessCertificates.<a href="./src/resources/keyless-certificates.ts">get</a>(keylessCertificateId, { ...params }) -> KeylessCertificate</code>

# Logpush

## Datasets

### Fields

Types:

- <code><a href="./src/resources/logpush/datasets/fields.ts">FieldGetResponse</a></code>

Methods:

- <code title="get /{account_or_zone}/{account_or_zone_id}/logpush/datasets/{dataset_id}/fields">client.logpush.datasets.fields.<a href="./src/resources/logpush/datasets/fields.ts">get</a>(datasetId, { ...params }) -> FieldGetResponse</code>

### Jobs

Types:

- <code><a href="./src/resources/logpush/datasets/jobs.ts">JobGetResponse</a></code>

Methods:

- <code title="get /{account_or_zone}/{account_or_zone_id}/logpush/datasets/{dataset_id}/jobs">client.logpush.datasets.jobs.<a href="./src/resources/logpush/datasets/jobs.ts">get</a>(datasetId, { ...params }) -> JobGetResponse</code>

## Edge

Types:

- <code><a href="./src/resources/logpush/edge.ts">InstantLogpushJob</a></code>
- <code><a href="./src/resources/logpush/edge.ts">EdgeGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/logpush/edge">client.logpush.edge.<a href="./src/resources/logpush/edge.ts">create</a>({ ...params }) -> InstantLogpushJob | null</code>
- <code title="get /zones/{zone_id}/logpush/edge">client.logpush.edge.<a href="./src/resources/logpush/edge.ts">get</a>({ ...params }) -> EdgeGetResponse</code>

## Jobs

Types:

- <code><a href="./src/resources/logpush/jobs.ts">LogpushJob</a></code>
- <code><a href="./src/resources/logpush/jobs.ts">OutputOptions</a></code>
- <code><a href="./src/resources/logpush/jobs.ts">JobDeleteResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/logpush/jobs">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">create</a>({ ...params }) -> LogpushJob | null</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/logpush/jobs/{job_id}">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">update</a>(jobId, { ...params }) -> LogpushJob | null</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/logpush/jobs">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">list</a>({ ...params }) -> LogpushJobsSinglePage</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/logpush/jobs/{job_id}">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">delete</a>(jobId, { ...params }) -> JobDeleteResponse | null</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/logpush/jobs/{job_id}">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">get</a>(jobId, { ...params }) -> LogpushJob | null</code>

## Ownership

Types:

- <code><a href="./src/resources/logpush/ownership.ts">OwnershipValidation</a></code>
- <code><a href="./src/resources/logpush/ownership.ts">OwnershipCreateResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/logpush/ownership">client.logpush.ownership.<a href="./src/resources/logpush/ownership.ts">create</a>({ ...params }) -> OwnershipCreateResponse | null</code>
- <code title="post /{account_or_zone}/{account_or_zone_id}/logpush/ownership/validate">client.logpush.ownership.<a href="./src/resources/logpush/ownership.ts">validate</a>({ ...params }) -> OwnershipValidation | null</code>

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

Types:

- <code><a href="./src/resources/logs/control/retention.ts">RetentionCreateResponse</a></code>
- <code><a href="./src/resources/logs/control/retention.ts">RetentionGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/logs/control/retention/flag">client.logs.control.retention.<a href="./src/resources/logs/control/retention.ts">create</a>(zoneIdentifier, { ...params }) -> RetentionCreateResponse</code>
- <code title="get /zones/{zone_identifier}/logs/control/retention/flag">client.logs.control.retention.<a href="./src/resources/logs/control/retention.ts">get</a>(zoneIdentifier) -> RetentionGetResponse</code>

### Cmb

#### Config

Types:

- <code><a href="./src/resources/logs/control/cmb/config.ts">CmbConfig</a></code>
- <code><a href="./src/resources/logs/control/cmb/config.ts">ConfigDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/logs/control/cmb/config">client.logs.control.cmb.config.<a href="./src/resources/logs/control/cmb/config.ts">create</a>({ ...params }) -> CmbConfig | null</code>
- <code title="delete /accounts/{account_id}/logs/control/cmb/config">client.logs.control.cmb.config.<a href="./src/resources/logs/control/cmb/config.ts">delete</a>({ ...params }) -> ConfigDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/logs/control/cmb/config">client.logs.control.cmb.config.<a href="./src/resources/logs/control/cmb/config.ts">get</a>({ ...params }) -> CmbConfig | null</code>

## RayID

Types:

- <code><a href="./src/resources/logs/rayid.ts">RayIDGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/logs/rayids/{ray_identifier}">client.logs.RayID.<a href="./src/resources/logs/rayid.ts">get</a>(zoneIdentifier, rayIdentifier, { ...params }) -> RayIDGetResponse</code>

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

- <code><a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">ZoneAuthenticatedOriginPull</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">OriginTLSClientAuthCreateResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">OriginTLSClientAuthDeleteResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">OriginTLSClientAuthGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/origin_tls_client_auth">client.originTLSClientAuth.<a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">create</a>({ ...params }) -> OriginTLSClientAuthCreateResponse</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth">client.originTLSClientAuth.<a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">list</a>({ ...params }) -> ZoneAuthenticatedOriginPullsSinglePage</code>
- <code title="delete /zones/{zone_id}/origin_tls_client_auth/{certificate_id}">client.originTLSClientAuth.<a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">delete</a>(certificateId, { ...params }) -> OriginTLSClientAuthDeleteResponse</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/{certificate_id}">client.originTLSClientAuth.<a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">get</a>(certificateId, { ...params }) -> OriginTLSClientAuthGetResponse</code>

## Hostnames

Types:

- <code><a href="./src/resources/origin-tls-client-auth/hostnames/hostnames.ts">AuthenticatedOriginPull</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/hostnames/hostnames.ts">HostnameUpdateResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/origin_tls_client_auth/hostnames">client.originTLSClientAuth.hostnames.<a href="./src/resources/origin-tls-client-auth/hostnames/hostnames.ts">update</a>({ ...params }) -> HostnameUpdateResponse | null</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/hostnames/{hostname}">client.originTLSClientAuth.hostnames.<a href="./src/resources/origin-tls-client-auth/hostnames/hostnames.ts">get</a>(hostname, { ...params }) -> AuthenticatedOriginPull</code>

### Certificates

Types:

- <code><a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">Certificate</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">CertificateCreateResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">CertificateDeleteResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">CertificateGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates">client.originTLSClientAuth.hostnames.certificates.<a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">create</a>({ ...params }) -> CertificateCreateResponse</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates">client.originTLSClientAuth.hostnames.certificates.<a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">list</a>({ ...params }) -> AuthenticatedOriginPullsSinglePage</code>
- <code title="delete /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates/{certificate_id}">client.originTLSClientAuth.hostnames.certificates.<a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">delete</a>(certificateId, { ...params }) -> CertificateDeleteResponse</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates/{certificate_id}">client.originTLSClientAuth.hostnames.certificates.<a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">get</a>(certificateId, { ...params }) -> CertificateGetResponse</code>

## Settings

Types:

- <code><a href="./src/resources/origin-tls-client-auth/settings.ts">SettingUpdateResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/origin_tls_client_auth/settings">client.originTLSClientAuth.settings.<a href="./src/resources/origin-tls-client-auth/settings.ts">update</a>({ ...params }) -> SettingUpdateResponse</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/settings">client.originTLSClientAuth.settings.<a href="./src/resources/origin-tls-client-auth/settings.ts">get</a>({ ...params }) -> SettingGetResponse</code>

# Pagerules

Types:

- <code><a href="./src/resources/pagerules/pagerules.ts">PageRule</a></code>
- <code><a href="./src/resources/pagerules/pagerules.ts">Route</a></code>
- <code><a href="./src/resources/pagerules/pagerules.ts">Target</a></code>
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

- <code><a href="./src/resources/pagerules/settings.ts">SettingListResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/pagerules/settings">client.pagerules.settings.<a href="./src/resources/pagerules/settings.ts">list</a>({ ...params }) -> SettingListResponse</code>

# RateLimits

Types:

- <code><a href="./src/resources/rate-limits.ts">Action</a></code>
- <code><a href="./src/resources/rate-limits.ts">Methods</a></code>
- <code><a href="./src/resources/rate-limits.ts">RateLimit</a></code>
- <code><a href="./src/resources/rate-limits.ts">RateLimitCreateResponse</a></code>
- <code><a href="./src/resources/rate-limits.ts">RateLimitDeleteResponse</a></code>
- <code><a href="./src/resources/rate-limits.ts">RateLimitEditResponse</a></code>
- <code><a href="./src/resources/rate-limits.ts">RateLimitGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/rate_limits">client.rateLimits.<a href="./src/resources/rate-limits.ts">create</a>(zoneIdentifier, { ...params }) -> RateLimitCreateResponse</code>
- <code title="get /zones/{zone_identifier}/rate_limits">client.rateLimits.<a href="./src/resources/rate-limits.ts">list</a>(zoneIdentifier, { ...params }) -> RateLimitsV4PagePaginationArray</code>
- <code title="delete /zones/{zone_identifier}/rate_limits/{id}">client.rateLimits.<a href="./src/resources/rate-limits.ts">delete</a>(zoneIdentifier, id) -> RateLimitDeleteResponse</code>
- <code title="put /zones/{zone_identifier}/rate_limits/{id}">client.rateLimits.<a href="./src/resources/rate-limits.ts">edit</a>(zoneIdentifier, id, { ...params }) -> RateLimitEditResponse</code>
- <code title="get /zones/{zone_identifier}/rate_limits/{id}">client.rateLimits.<a href="./src/resources/rate-limits.ts">get</a>(zoneIdentifier, id) -> RateLimitGetResponse</code>

# SecondaryDNS

## ForceAXFR

Types:

- <code><a href="./src/resources/secondary-dns/force-axfr.ts">ForceAXFR</a></code>

Methods:

- <code title="post /zones/{zone_id}/secondary_dns/force_axfr">client.secondaryDNS.forceAXFR.<a href="./src/resources/secondary-dns/force-axfr.ts">create</a>({ ...params }) -> ForceAXFR</code>

## Incoming

Types:

- <code><a href="./src/resources/secondary-dns/incoming.ts">Incoming</a></code>
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

- <code><a href="./src/resources/secondary-dns/outgoing/outgoing.ts">DisableTransfer</a></code>
- <code><a href="./src/resources/secondary-dns/outgoing/outgoing.ts">EnableTransfer</a></code>
- <code><a href="./src/resources/secondary-dns/outgoing/outgoing.ts">Outgoing</a></code>
- <code><a href="./src/resources/secondary-dns/outgoing/outgoing.ts">OutgoingStatus</a></code>
- <code><a href="./src/resources/secondary-dns/outgoing/outgoing.ts">OutgoingCreateResponse</a></code>
- <code><a href="./src/resources/secondary-dns/outgoing/outgoing.ts">OutgoingUpdateResponse</a></code>
- <code><a href="./src/resources/secondary-dns/outgoing/outgoing.ts">OutgoingDeleteResponse</a></code>
- <code><a href="./src/resources/secondary-dns/outgoing/outgoing.ts">OutgoingForceNotifyResponse</a></code>
- <code><a href="./src/resources/secondary-dns/outgoing/outgoing.ts">OutgoingGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/secondary_dns/outgoing">client.secondaryDNS.outgoing.<a href="./src/resources/secondary-dns/outgoing/outgoing.ts">create</a>({ ...params }) -> OutgoingCreateResponse</code>
- <code title="put /zones/{zone_id}/secondary_dns/outgoing">client.secondaryDNS.outgoing.<a href="./src/resources/secondary-dns/outgoing/outgoing.ts">update</a>({ ...params }) -> OutgoingUpdateResponse</code>
- <code title="delete /zones/{zone_id}/secondary_dns/outgoing">client.secondaryDNS.outgoing.<a href="./src/resources/secondary-dns/outgoing/outgoing.ts">delete</a>({ ...params }) -> OutgoingDeleteResponse</code>
- <code title="post /zones/{zone_id}/secondary_dns/outgoing/disable">client.secondaryDNS.outgoing.<a href="./src/resources/secondary-dns/outgoing/outgoing.ts">disable</a>({ ...params }) -> DisableTransfer</code>
- <code title="post /zones/{zone_id}/secondary_dns/outgoing/enable">client.secondaryDNS.outgoing.<a href="./src/resources/secondary-dns/outgoing/outgoing.ts">enable</a>({ ...params }) -> EnableTransfer</code>
- <code title="post /zones/{zone_id}/secondary_dns/outgoing/force_notify">client.secondaryDNS.outgoing.<a href="./src/resources/secondary-dns/outgoing/outgoing.ts">forceNotify</a>({ ...params }) -> OutgoingForceNotifyResponse</code>
- <code title="get /zones/{zone_id}/secondary_dns/outgoing">client.secondaryDNS.outgoing.<a href="./src/resources/secondary-dns/outgoing/outgoing.ts">get</a>({ ...params }) -> OutgoingGetResponse</code>

### Status

Methods:

- <code title="get /zones/{zone_id}/secondary_dns/outgoing/status">client.secondaryDNS.outgoing.status.<a href="./src/resources/secondary-dns/outgoing/status.ts">get</a>({ ...params }) -> EnableTransfer</code>

## ACLs

Types:

- <code><a href="./src/resources/secondary-dns/acls.ts">ACL</a></code>
- <code><a href="./src/resources/secondary-dns/acls.ts">ACLDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/secondary_dns/acls">client.secondaryDNS.acls.<a href="./src/resources/secondary-dns/acls.ts">create</a>({ ...params }) -> ACL</code>
- <code title="put /accounts/{account_id}/secondary_dns/acls/{acl_id}">client.secondaryDNS.acls.<a href="./src/resources/secondary-dns/acls.ts">update</a>(aclId, { ...params }) -> ACL</code>
- <code title="get /accounts/{account_id}/secondary_dns/acls">client.secondaryDNS.acls.<a href="./src/resources/secondary-dns/acls.ts">list</a>({ ...params }) -> ACLsSinglePage</code>
- <code title="delete /accounts/{account_id}/secondary_dns/acls/{acl_id}">client.secondaryDNS.acls.<a href="./src/resources/secondary-dns/acls.ts">delete</a>(aclId, { ...params }) -> ACLDeleteResponse</code>
- <code title="get /accounts/{account_id}/secondary_dns/acls/{acl_id}">client.secondaryDNS.acls.<a href="./src/resources/secondary-dns/acls.ts">get</a>(aclId, { ...params }) -> ACL</code>

## Peers

Types:

- <code><a href="./src/resources/secondary-dns/peers.ts">Peer</a></code>
- <code><a href="./src/resources/secondary-dns/peers.ts">PeerDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/secondary_dns/peers">client.secondaryDNS.peers.<a href="./src/resources/secondary-dns/peers.ts">create</a>({ ...params }) -> Peer</code>
- <code title="put /accounts/{account_id}/secondary_dns/peers/{peer_id}">client.secondaryDNS.peers.<a href="./src/resources/secondary-dns/peers.ts">update</a>(peerId, { ...params }) -> Peer</code>
- <code title="get /accounts/{account_id}/secondary_dns/peers">client.secondaryDNS.peers.<a href="./src/resources/secondary-dns/peers.ts">list</a>({ ...params }) -> PeersSinglePage</code>
- <code title="delete /accounts/{account_id}/secondary_dns/peers/{peer_id}">client.secondaryDNS.peers.<a href="./src/resources/secondary-dns/peers.ts">delete</a>(peerId, { ...params }) -> PeerDeleteResponse</code>
- <code title="get /accounts/{account_id}/secondary_dns/peers/{peer_id}">client.secondaryDNS.peers.<a href="./src/resources/secondary-dns/peers.ts">get</a>(peerId, { ...params }) -> Peer</code>

## TSIGs

Types:

- <code><a href="./src/resources/secondary-dns/tsigs.ts">TSIG</a></code>
- <code><a href="./src/resources/secondary-dns/tsigs.ts">TSIGDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/secondary_dns/tsigs">client.secondaryDNS.tsigs.<a href="./src/resources/secondary-dns/tsigs.ts">create</a>({ ...params }) -> TSIG</code>
- <code title="put /accounts/{account_id}/secondary_dns/tsigs/{tsig_id}">client.secondaryDNS.tsigs.<a href="./src/resources/secondary-dns/tsigs.ts">update</a>(tsigId, { ...params }) -> TSIG</code>
- <code title="get /accounts/{account_id}/secondary_dns/tsigs">client.secondaryDNS.tsigs.<a href="./src/resources/secondary-dns/tsigs.ts">list</a>({ ...params }) -> TSIGsSinglePage</code>
- <code title="delete /accounts/{account_id}/secondary_dns/tsigs/{tsig_id}">client.secondaryDNS.tsigs.<a href="./src/resources/secondary-dns/tsigs.ts">delete</a>(tsigId, { ...params }) -> TSIGDeleteResponse</code>
- <code title="get /accounts/{account_id}/secondary_dns/tsigs/{tsig_id}">client.secondaryDNS.tsigs.<a href="./src/resources/secondary-dns/tsigs.ts">get</a>(tsigId, { ...params }) -> TSIG</code>

# WaitingRooms

Types:

- <code><a href="./src/resources/waiting-rooms/waiting-rooms.ts">AdditionalRoutes</a></code>
- <code><a href="./src/resources/waiting-rooms/waiting-rooms.ts">CookieAttributes</a></code>
- <code><a href="./src/resources/waiting-rooms/waiting-rooms.ts">Query</a></code>
- <code><a href="./src/resources/waiting-rooms/waiting-rooms.ts">WaitingRoom</a></code>
- <code><a href="./src/resources/waiting-rooms/waiting-rooms.ts">WaitingRoomDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/waiting_rooms">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">create</a>({ ...params }) -> WaitingRoom</code>
- <code title="put /zones/{zone_id}/waiting_rooms/{waiting_room_id}">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">update</a>(waitingRoomId, { ...params }) -> WaitingRoom</code>
- <code title="get /zones/{zone_id}/waiting_rooms">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">list</a>({ ...params }) -> WaitingRoomsSinglePage</code>
- <code title="delete /zones/{zone_id}/waiting_rooms/{waiting_room_id}">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">delete</a>(waitingRoomId, { ...params }) -> WaitingRoomDeleteResponse</code>
- <code title="patch /zones/{zone_id}/waiting_rooms/{waiting_room_id}">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">edit</a>(waitingRoomId, { ...params }) -> WaitingRoom</code>
- <code title="get /zones/{zone_id}/waiting_rooms/{waiting_room_id}">client.waitingRooms.<a href="./src/resources/waiting-rooms/waiting-rooms.ts">get</a>(waitingRoomId, { ...params }) -> WaitingRoom</code>

## Page

Types:

- <code><a href="./src/resources/waiting-rooms/page.ts">PagePreviewResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/waiting_rooms/preview">client.waitingRooms.page.<a href="./src/resources/waiting-rooms/page.ts">preview</a>({ ...params }) -> PagePreviewResponse</code>

## Events

Types:

- <code><a href="./src/resources/waiting-rooms/events/events.ts">Event</a></code>
- <code><a href="./src/resources/waiting-rooms/events/events.ts">EventDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/waiting_rooms/{waiting_room_id}/events">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">create</a>(waitingRoomId, { ...params }) -> Event</code>
- <code title="put /zones/{zone_id}/waiting_rooms/{waiting_room_id}/events/{event_id}">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">update</a>(waitingRoomId, eventId, { ...params }) -> Event</code>
- <code title="get /zones/{zone_id}/waiting_rooms/{waiting_room_id}/events">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">list</a>(waitingRoomId, { ...params }) -> EventsSinglePage</code>
- <code title="delete /zones/{zone_id}/waiting_rooms/{waiting_room_id}/events/{event_id}">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">delete</a>(waitingRoomId, eventId, { ...params }) -> EventDeleteResponse</code>
- <code title="patch /zones/{zone_id}/waiting_rooms/{waiting_room_id}/events/{event_id}">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">edit</a>(waitingRoomId, eventId, { ...params }) -> Event</code>
- <code title="get /zones/{zone_id}/waiting_rooms/{waiting_room_id}/events/{event_id}">client.waitingRooms.events.<a href="./src/resources/waiting-rooms/events/events.ts">get</a>(waitingRoomId, eventId, { ...params }) -> Event</code>

### Details

Types:

- <code><a href="./src/resources/waiting-rooms/events/details.ts">EventQuery</a></code>
- <code><a href="./src/resources/waiting-rooms/events/details.ts">DetailGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/waiting_rooms/{waiting_room_id}/events/{event_id}/details">client.waitingRooms.events.details.<a href="./src/resources/waiting-rooms/events/details.ts">get</a>(waitingRoomId, eventId, { ...params }) -> DetailGetResponse</code>

## Rules

Types:

- <code><a href="./src/resources/waiting-rooms/rules.ts">WaitingRoomRule</a></code>
- <code><a href="./src/resources/waiting-rooms/rules.ts">RuleCreateResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/rules.ts">RuleEditResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/waiting_rooms/{waiting_room_id}/rules">client.waitingRooms.rules.<a href="./src/resources/waiting-rooms/rules.ts">create</a>(waitingRoomId, { ...params }) -> RuleCreateResponse | null</code>
- <code title="put /zones/{zone_id}/waiting_rooms/{waiting_room_id}/rules">client.waitingRooms.rules.<a href="./src/resources/waiting-rooms/rules.ts">update</a>(waitingRoomId, [ ...body ]) -> RuleUpdateResponse | null</code>
- <code title="get /zones/{zone_id}/waiting_rooms/{waiting_room_id}/rules">client.waitingRooms.rules.<a href="./src/resources/waiting-rooms/rules.ts">list</a>(waitingRoomId, { ...params }) -> WaitingRoomRulesSinglePage</code>
- <code title="delete /zones/{zone_id}/waiting_rooms/{waiting_room_id}/rules/{rule_id}">client.waitingRooms.rules.<a href="./src/resources/waiting-rooms/rules.ts">delete</a>(waitingRoomId, ruleId, { ...params }) -> RuleDeleteResponse | null</code>
- <code title="patch /zones/{zone_id}/waiting_rooms/{waiting_room_id}/rules/{rule_id}">client.waitingRooms.rules.<a href="./src/resources/waiting-rooms/rules.ts">edit</a>(waitingRoomId, ruleId, { ...params }) -> RuleEditResponse | null</code>

## Statuses

Types:

- <code><a href="./src/resources/waiting-rooms/statuses.ts">StatusGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/waiting_rooms/{waiting_room_id}/status">client.waitingRooms.statuses.<a href="./src/resources/waiting-rooms/statuses.ts">get</a>(waitingRoomId, { ...params }) -> StatusGetResponse</code>

## Settings

Types:

- <code><a href="./src/resources/waiting-rooms/settings.ts">Setting</a></code>
- <code><a href="./src/resources/waiting-rooms/settings.ts">SettingUpdateResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/settings.ts">SettingEditResponse</a></code>
- <code><a href="./src/resources/waiting-rooms/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/waiting_rooms/settings">client.waitingRooms.settings.<a href="./src/resources/waiting-rooms/settings.ts">update</a>({ ...params }) -> SettingUpdateResponse</code>
- <code title="patch /zones/{zone_id}/waiting_rooms/settings">client.waitingRooms.settings.<a href="./src/resources/waiting-rooms/settings.ts">edit</a>({ ...params }) -> SettingEditResponse</code>
- <code title="get /zones/{zone_id}/waiting_rooms/settings">client.waitingRooms.settings.<a href="./src/resources/waiting-rooms/settings.ts">get</a>({ ...params }) -> SettingGetResponse</code>

# Web3

## Hostnames

Types:

- <code><a href="./src/resources/web3/hostnames/hostnames.ts">Hostname</a></code>
- <code><a href="./src/resources/web3/hostnames/hostnames.ts">HostnameDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_identifier}/web3/hostnames">client.web3.hostnames.<a href="./src/resources/web3/hostnames/hostnames.ts">create</a>(zoneIdentifier, { ...params }) -> Hostname</code>
- <code title="get /zones/{zone_identifier}/web3/hostnames">client.web3.hostnames.<a href="./src/resources/web3/hostnames/hostnames.ts">list</a>(zoneIdentifier) -> HostnamesSinglePage</code>
- <code title="delete /zones/{zone_identifier}/web3/hostnames/{identifier}">client.web3.hostnames.<a href="./src/resources/web3/hostnames/hostnames.ts">delete</a>(zoneIdentifier, identifier) -> HostnameDeleteResponse | null</code>
- <code title="patch /zones/{zone_identifier}/web3/hostnames/{identifier}">client.web3.hostnames.<a href="./src/resources/web3/hostnames/hostnames.ts">edit</a>(zoneIdentifier, identifier, { ...params }) -> Hostname</code>
- <code title="get /zones/{zone_identifier}/web3/hostnames/{identifier}">client.web3.hostnames.<a href="./src/resources/web3/hostnames/hostnames.ts">get</a>(zoneIdentifier, identifier) -> Hostname</code>

### IPFSUniversalPaths

#### ContentLists

Types:

- <code><a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/content-lists.ts">ContentList</a></code>

Methods:

- <code title="put /zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list">client.web3.hostnames.ipfsUniversalPaths.contentLists.<a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/content-lists.ts">update</a>(zoneIdentifier, identifier, { ...params }) -> ContentList</code>
- <code title="get /zones/{zone_identifier}/web3/hostnames/{identifier}/ipfs_universal_path/content_list">client.web3.hostnames.ipfsUniversalPaths.contentLists.<a href="./src/resources/web3/hostnames/ipfs-universal-paths/content-lists/content-lists.ts">get</a>(zoneIdentifier, identifier) -> ContentList</code>

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

Types:

- <code><a href="./src/resources/workers/workers.ts">Binding</a></code>
- <code><a href="./src/resources/workers/workers.ts">D1Binding</a></code>
- <code><a href="./src/resources/workers/workers.ts">DispatchNamespaceBinding</a></code>
- <code><a href="./src/resources/workers/workers.ts">DurableObjectBinding</a></code>
- <code><a href="./src/resources/workers/workers.ts">KVNamespaceBinding</a></code>
- <code><a href="./src/resources/workers/workers.ts">MigrationStep</a></code>
- <code><a href="./src/resources/workers/workers.ts">MTLSCERTBinding</a></code>
- <code><a href="./src/resources/workers/workers.ts">PlacementConfiguration</a></code>
- <code><a href="./src/resources/workers/workers.ts">R2Binding</a></code>
- <code><a href="./src/resources/workers/workers.ts">ServiceBinding</a></code>
- <code><a href="./src/resources/workers/workers.ts">SingleStepMigration</a></code>
- <code><a href="./src/resources/workers/workers.ts">SteppedMigration</a></code>
- <code><a href="./src/resources/workers/workers.ts">WorkerMetadata</a></code>

## AI

Types:

- <code><a href="./src/resources/workers/ai/ai.ts">AIRunResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/ai/run/{model_name}">client.workers.ai.<a href="./src/resources/workers/ai/ai.ts">run</a>(modelName, { ...params }) -> AIRunResponse</code>

### Models

#### Schema

Types:

- <code><a href="./src/resources/workers/ai/models/schema.ts">SchemaGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/ai/models/schema">client.workers.ai.models.schema.<a href="./src/resources/workers/ai/models/schema.ts">get</a>({ ...params }) -> SchemaGetResponse</code>

## Scripts

Types:

- <code><a href="./src/resources/workers/scripts/scripts.ts">Script</a></code>
- <code><a href="./src/resources/workers/scripts/scripts.ts">ScriptSetting</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/scripts/{script_name}">client.workers.scripts.<a href="./src/resources/workers/scripts/scripts.ts">update</a>(scriptName, { ...params }) -> Script</code>
- <code title="get /accounts/{account_id}/workers/scripts">client.workers.scripts.<a href="./src/resources/workers/scripts/scripts.ts">list</a>({ ...params }) -> ScriptsSinglePage</code>
- <code title="delete /accounts/{account_id}/workers/scripts/{script_name}">client.workers.scripts.<a href="./src/resources/workers/scripts/scripts.ts">delete</a>(scriptName, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}">client.workers.scripts.<a href="./src/resources/workers/scripts/scripts.ts">get</a>(scriptName, { ...params }) -> Response</code>

### Schedules

Types:

- <code><a href="./src/resources/workers/scripts/schedules.ts">Schedule</a></code>
- <code><a href="./src/resources/workers/scripts/schedules.ts">ScheduleUpdateResponse</a></code>
- <code><a href="./src/resources/workers/scripts/schedules.ts">ScheduleGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/scripts/{script_name}/schedules">client.workers.scripts.schedules.<a href="./src/resources/workers/scripts/schedules.ts">update</a>(scriptName, { ...params }) -> ScheduleUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/schedules">client.workers.scripts.schedules.<a href="./src/resources/workers/scripts/schedules.ts">get</a>(scriptName, { ...params }) -> ScheduleGetResponse</code>

### Tail

Types:

- <code><a href="./src/resources/workers/scripts/tail.ts">ConsumerScript</a></code>
- <code><a href="./src/resources/workers/scripts/tail.ts">TailCreateResponse</a></code>
- <code><a href="./src/resources/workers/scripts/tail.ts">TailDeleteResponse</a></code>
- <code><a href="./src/resources/workers/scripts/tail.ts">TailGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/scripts/{script_name}/tails">client.workers.scripts.tail.<a href="./src/resources/workers/scripts/tail.ts">create</a>(scriptName, { ...params }) -> TailCreateResponse</code>
- <code title="delete /accounts/{account_id}/workers/scripts/{script_name}/tails/{id}">client.workers.scripts.tail.<a href="./src/resources/workers/scripts/tail.ts">delete</a>(scriptName, id, { ...params }) -> TailDeleteResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/tails">client.workers.scripts.tail.<a href="./src/resources/workers/scripts/tail.ts">get</a>(scriptName, { ...params }) -> TailGetResponse</code>

### Content

Methods:

- <code title="put /accounts/{account_id}/workers/scripts/{script_name}/content">client.workers.scripts.content.<a href="./src/resources/workers/scripts/content.ts">update</a>(scriptName, { ...params }) -> Script</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/content/v2">client.workers.scripts.content.<a href="./src/resources/workers/scripts/content.ts">get</a>(scriptName, { ...params }) -> Response</code>

### Settings

Methods:

- <code title="patch /accounts/{account_id}/workers/scripts/{script_name}/script-settings">client.workers.scripts.settings.<a href="./src/resources/workers/scripts/settings.ts">edit</a>(scriptName, { ...params }) -> ScriptSetting</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/script-settings">client.workers.scripts.settings.<a href="./src/resources/workers/scripts/settings.ts">get</a>(scriptName, { ...params }) -> ScriptSetting</code>

### Deployments

Types:

- <code><a href="./src/resources/workers/scripts/deployments.ts">Deployment</a></code>
- <code><a href="./src/resources/workers/scripts/deployments.ts">DeploymentCreateResponse</a></code>
- <code><a href="./src/resources/workers/scripts/deployments.ts">DeploymentGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/scripts/{script_name}/deployments">client.workers.scripts.deployments.<a href="./src/resources/workers/scripts/deployments.ts">create</a>(scriptName, { ...params }) -> DeploymentCreateResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/deployments">client.workers.scripts.deployments.<a href="./src/resources/workers/scripts/deployments.ts">get</a>(scriptName, { ...params }) -> DeploymentGetResponse</code>

### Versions

Types:

- <code><a href="./src/resources/workers/scripts/versions.ts">VersionCreateResponse</a></code>
- <code><a href="./src/resources/workers/scripts/versions.ts">VersionListResponse</a></code>
- <code><a href="./src/resources/workers/scripts/versions.ts">VersionGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/scripts/{script_name}/versions">client.workers.scripts.versions.<a href="./src/resources/workers/scripts/versions.ts">create</a>(scriptName, { ...params }) -> VersionCreateResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/versions">client.workers.scripts.versions.<a href="./src/resources/workers/scripts/versions.ts">list</a>(scriptName, { ...params }) -> VersionListResponsesV4PagePagination</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/versions/{version_id}">client.workers.scripts.versions.<a href="./src/resources/workers/scripts/versions.ts">get</a>(scriptName, versionId, { ...params }) -> VersionGetResponse</code>

## AccountSettings

Types:

- <code><a href="./src/resources/workers/account-settings.ts">AccountSettingUpdateResponse</a></code>
- <code><a href="./src/resources/workers/account-settings.ts">AccountSettingGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/account-settings">client.workers.accountSettings.<a href="./src/resources/workers/account-settings.ts">update</a>({ ...params }) -> AccountSettingUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/account-settings">client.workers.accountSettings.<a href="./src/resources/workers/account-settings.ts">get</a>({ ...params }) -> AccountSettingGetResponse</code>

## Domains

Types:

- <code><a href="./src/resources/workers/domains.ts">Domain</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/domains">client.workers.domains.<a href="./src/resources/workers/domains.ts">update</a>({ ...params }) -> Domain</code>
- <code title="get /accounts/{account_id}/workers/domains">client.workers.domains.<a href="./src/resources/workers/domains.ts">list</a>({ ...params }) -> DomainsSinglePage</code>
- <code title="delete /accounts/{account_id}/workers/domains/{domain_id}">client.workers.domains.<a href="./src/resources/workers/domains.ts">delete</a>(domainId, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/workers/domains/{domain_id}">client.workers.domains.<a href="./src/resources/workers/domains.ts">get</a>(domainId, { ...params }) -> Domain</code>

## Subdomains

Types:

- <code><a href="./src/resources/workers/subdomains.ts">SubdomainUpdateResponse</a></code>
- <code><a href="./src/resources/workers/subdomains.ts">SubdomainGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/subdomain">client.workers.subdomains.<a href="./src/resources/workers/subdomains.ts">update</a>({ ...params }) -> SubdomainUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/subdomain">client.workers.subdomains.<a href="./src/resources/workers/subdomains.ts">get</a>({ ...params }) -> SubdomainGetResponse</code>

# KV

## Namespaces

Types:

- <code><a href="./src/resources/kv/namespaces/namespaces.ts">Namespace</a></code>
- <code><a href="./src/resources/kv/namespaces/namespaces.ts">NamespaceUpdateResponse</a></code>
- <code><a href="./src/resources/kv/namespaces/namespaces.ts">NamespaceDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/storage/kv/namespaces">client.kv.namespaces.<a href="./src/resources/kv/namespaces/namespaces.ts">create</a>({ ...params }) -> Namespace</code>
- <code title="put /accounts/{account_id}/storage/kv/namespaces/{namespace_id}">client.kv.namespaces.<a href="./src/resources/kv/namespaces/namespaces.ts">update</a>(namespaceId, { ...params }) -> NamespaceUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/storage/kv/namespaces">client.kv.namespaces.<a href="./src/resources/kv/namespaces/namespaces.ts">list</a>({ ...params }) -> NamespacesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/storage/kv/namespaces/{namespace_id}">client.kv.namespaces.<a href="./src/resources/kv/namespaces/namespaces.ts">delete</a>(namespaceId, { ...params }) -> NamespaceDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/storage/kv/namespaces/{namespace_id}">client.kv.namespaces.<a href="./src/resources/kv/namespaces/namespaces.ts">get</a>(namespaceId, { ...params }) -> Namespace</code>

### Bulk

Types:

- <code><a href="./src/resources/kv/namespaces/bulk.ts">BulkUpdateResponse</a></code>
- <code><a href="./src/resources/kv/namespaces/bulk.ts">BulkDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk">client.kv.namespaces.bulk.<a href="./src/resources/kv/namespaces/bulk.ts">update</a>(namespaceId, [ ...body ]) -> BulkUpdateResponse | null</code>
- <code title="delete /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk">client.kv.namespaces.bulk.<a href="./src/resources/kv/namespaces/bulk.ts">delete</a>(namespaceId, { ...params }) -> BulkDeleteResponse | null</code>

### Keys

Types:

- <code><a href="./src/resources/kv/namespaces/keys.ts">Key</a></code>

Methods:

- <code title="get /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/keys">client.kv.namespaces.keys.<a href="./src/resources/kv/namespaces/keys.ts">list</a>(namespaceId, { ...params }) -> KeysCursorLimitPagination</code>

### Metadata

Types:

- <code><a href="./src/resources/kv/namespaces/metadata.ts">MetadataGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/metadata/{key_name}">client.kv.namespaces.metadata.<a href="./src/resources/kv/namespaces/metadata.ts">get</a>(namespaceId, keyName, { ...params }) -> MetadataGetResponse</code>

### Values

Types:

- <code><a href="./src/resources/kv/namespaces/values.ts">ValueUpdateResponse</a></code>
- <code><a href="./src/resources/kv/namespaces/values.ts">ValueDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values/{key_name}">client.kv.namespaces.values.<a href="./src/resources/kv/namespaces/values.ts">update</a>(namespaceId, keyName, { ...params }) -> ValueUpdateResponse | null</code>
- <code title="delete /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values/{key_name}">client.kv.namespaces.values.<a href="./src/resources/kv/namespaces/values.ts">delete</a>(namespaceId, keyName, { ...params }) -> ValueDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values/{key_name}">client.kv.namespaces.values.<a href="./src/resources/kv/namespaces/values.ts">get</a>(namespaceId, keyName, { ...params }) -> Response</code>

# DurableObjects

## Namespaces

Types:

- <code><a href="./src/resources/durable-objects/namespaces/namespaces.ts">Namespace</a></code>

Methods:

- <code title="get /accounts/{account_id}/workers/durable_objects/namespaces">client.durableObjects.namespaces.<a href="./src/resources/durable-objects/namespaces/namespaces.ts">list</a>({ ...params }) -> NamespacesSinglePage</code>

### Objects

Types:

- <code><a href="./src/resources/durable-objects/namespaces/objects.ts">DurableObject</a></code>

Methods:

- <code title="get /accounts/{account_id}/workers/durable_objects/namespaces/{id}/objects">client.durableObjects.namespaces.objects.<a href="./src/resources/durable-objects/namespaces/objects.ts">list</a>(id, { ...params }) -> DurableObjectsCursorLimitPagination</code>

# Queues

Types:

- <code><a href="./src/resources/queues/queues.ts">Queue</a></code>
- <code><a href="./src/resources/queues/queues.ts">QueueCreated</a></code>
- <code><a href="./src/resources/queues/queues.ts">QueueUpdated</a></code>
- <code><a href="./src/resources/queues/queues.ts">QueueDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/queues">client.queues.<a href="./src/resources/queues/queues.ts">create</a>({ ...params }) -> QueueCreated | null</code>
- <code title="put /accounts/{account_id}/queues/{queue_id}">client.queues.<a href="./src/resources/queues/queues.ts">update</a>(queueId, { ...params }) -> QueueUpdated | null</code>
- <code title="get /accounts/{account_id}/queues">client.queues.<a href="./src/resources/queues/queues.ts">list</a>({ ...params }) -> QueuesSinglePage</code>
- <code title="delete /accounts/{account_id}/queues/{queue_id}">client.queues.<a href="./src/resources/queues/queues.ts">delete</a>(queueId, { ...params }) -> QueueDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/queues/{queue_id}">client.queues.<a href="./src/resources/queues/queues.ts">get</a>(queueId, { ...params }) -> Queue | null</code>

## Consumers

Types:

- <code><a href="./src/resources/queues/consumers.ts">Consumer</a></code>
- <code><a href="./src/resources/queues/consumers.ts">ConsumerCreateResponse</a></code>
- <code><a href="./src/resources/queues/consumers.ts">ConsumerUpdateResponse</a></code>
- <code><a href="./src/resources/queues/consumers.ts">ConsumerDeleteResponse</a></code>
- <code><a href="./src/resources/queues/consumers.ts">ConsumerGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/queues/{queue_id}/consumers">client.queues.consumers.<a href="./src/resources/queues/consumers.ts">create</a>(queueId, { ...params }) -> ConsumerCreateResponse | null</code>
- <code title="put /accounts/{account_id}/queues/{queue_id}/consumers/{consumer_id}">client.queues.consumers.<a href="./src/resources/queues/consumers.ts">update</a>(queueId, consumerId, { ...params }) -> ConsumerUpdateResponse | null</code>
- <code title="delete /accounts/{account_id}/queues/{queue_id}/consumers/{consumer_id}">client.queues.consumers.<a href="./src/resources/queues/consumers.ts">delete</a>(queueId, consumerId, { ...params }) -> ConsumerDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/queues/{queue_id}/consumers">client.queues.consumers.<a href="./src/resources/queues/consumers.ts">get</a>(queueId, { ...params }) -> ConsumerGetResponse | null</code>

## Messages

Types:

- <code><a href="./src/resources/queues/messages.ts">MessageAckResponse</a></code>
- <code><a href="./src/resources/queues/messages.ts">MessagePullResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/queues/{queue_id}/messages/ack">client.queues.messages.<a href="./src/resources/queues/messages.ts">ack</a>(queueId, { ...params }) -> MessageAckResponse | null</code>
- <code title="post /accounts/{account_id}/queues/{queue_id}/messages/pull">client.queues.messages.<a href="./src/resources/queues/messages.ts">pull</a>(queueId, { ...params }) -> MessagePullResponse | null</code>

# APIGateway

## Configurations

Types:

- <code><a href="./src/resources/api-gateway/configurations.ts">Configuration</a></code>
- <code><a href="./src/resources/api-gateway/configurations.ts">ConfigurationUpdateResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/api_gateway/configuration">client.apiGateway.configurations.<a href="./src/resources/api-gateway/configurations.ts">update</a>({ ...params }) -> ConfigurationUpdateResponse</code>
- <code title="get /zones/{zone_id}/api_gateway/configuration">client.apiGateway.configurations.<a href="./src/resources/api-gateway/configurations.ts">get</a>({ ...params }) -> Configuration</code>

## Discovery

Types:

- <code><a href="./src/resources/api-gateway/discovery/discovery.ts">DiscoveryOperation</a></code>
- <code><a href="./src/resources/api-gateway/discovery/discovery.ts">DiscoveryGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/api_gateway/discovery">client.apiGateway.discovery.<a href="./src/resources/api-gateway/discovery/discovery.ts">get</a>({ ...params }) -> DiscoveryGetResponse</code>

### Operations

Types:

- <code><a href="./src/resources/api-gateway/discovery/operations.ts">OperationEditResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/api_gateway/discovery/operations">client.apiGateway.discovery.operations.<a href="./src/resources/api-gateway/discovery/operations.ts">list</a>({ ...params }) -> DiscoveryOperationsV4PagePaginationArray</code>
- <code title="patch /zones/{zone_id}/api_gateway/discovery/operations/{operation_id}">client.apiGateway.discovery.operations.<a href="./src/resources/api-gateway/discovery/operations.ts">edit</a>(operationId, { ...params }) -> OperationEditResponse</code>

## Operations

Types:

- <code><a href="./src/resources/api-gateway/operations/operations.ts">APIShield</a></code>
- <code><a href="./src/resources/api-gateway/operations/operations.ts">OperationCreateResponse</a></code>
- <code><a href="./src/resources/api-gateway/operations/operations.ts">OperationListResponse</a></code>
- <code><a href="./src/resources/api-gateway/operations/operations.ts">OperationDeleteResponse</a></code>
- <code><a href="./src/resources/api-gateway/operations/operations.ts">OperationGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/api_gateway/operations">client.apiGateway.operations.<a href="./src/resources/api-gateway/operations/operations.ts">create</a>([ ...body ]) -> OperationCreateResponse</code>
- <code title="get /zones/{zone_id}/api_gateway/operations">client.apiGateway.operations.<a href="./src/resources/api-gateway/operations/operations.ts">list</a>({ ...params }) -> OperationListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/api_gateway/operations/{operation_id}">client.apiGateway.operations.<a href="./src/resources/api-gateway/operations/operations.ts">delete</a>(operationId, { ...params }) -> OperationDeleteResponse</code>
- <code title="get /zones/{zone_id}/api_gateway/operations/{operation_id}">client.apiGateway.operations.<a href="./src/resources/api-gateway/operations/operations.ts">get</a>(operationId, { ...params }) -> OperationGetResponse</code>

### SchemaValidation

Types:

- <code><a href="./src/resources/api-gateway/operations/schema-validation.ts">SettingsMultipleRequest</a></code>
- <code><a href="./src/resources/api-gateway/operations/schema-validation.ts">SchemaValidationUpdateResponse</a></code>
- <code><a href="./src/resources/api-gateway/operations/schema-validation.ts">SchemaValidationGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/api_gateway/operations/{operation_id}/schema_validation">client.apiGateway.operations.schemaValidation.<a href="./src/resources/api-gateway/operations/schema-validation.ts">update</a>(operationId, { ...params }) -> SchemaValidationUpdateResponse</code>
- <code title="patch /zones/{zone_id}/api_gateway/operations/schema_validation">client.apiGateway.operations.schemaValidation.<a href="./src/resources/api-gateway/operations/schema-validation.ts">edit</a>({ ...params }) -> SettingsMultipleRequest</code>
- <code title="get /zones/{zone_id}/api_gateway/operations/{operation_id}/schema_validation">client.apiGateway.operations.schemaValidation.<a href="./src/resources/api-gateway/operations/schema-validation.ts">get</a>(operationId, { ...params }) -> SchemaValidationGetResponse</code>

## Schemas

Types:

- <code><a href="./src/resources/api-gateway/schemas.ts">SchemaListResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/api_gateway/schemas">client.apiGateway.schemas.<a href="./src/resources/api-gateway/schemas.ts">list</a>({ ...params }) -> SchemaListResponse</code>

## Settings

Types:

- <code><a href="./src/resources/api-gateway/settings/settings.ts">Settings</a></code>

### SchemaValidation

Methods:

- <code title="put /zones/{zone_id}/api_gateway/settings/schema_validation">client.apiGateway.settings.schemaValidation.<a href="./src/resources/api-gateway/settings/schema-validation.ts">update</a>({ ...params }) -> Settings</code>
- <code title="patch /zones/{zone_id}/api_gateway/settings/schema_validation">client.apiGateway.settings.schemaValidation.<a href="./src/resources/api-gateway/settings/schema-validation.ts">edit</a>({ ...params }) -> Settings</code>
- <code title="get /zones/{zone_id}/api_gateway/settings/schema_validation">client.apiGateway.settings.schemaValidation.<a href="./src/resources/api-gateway/settings/schema-validation.ts">get</a>({ ...params }) -> Settings</code>

## UserSchemas

Types:

- <code><a href="./src/resources/api-gateway/user-schemas/user-schemas.ts">Message</a></code>
- <code><a href="./src/resources/api-gateway/user-schemas/user-schemas.ts">PublicSchema</a></code>
- <code><a href="./src/resources/api-gateway/user-schemas/user-schemas.ts">SchemaUpload</a></code>
- <code><a href="./src/resources/api-gateway/user-schemas/user-schemas.ts">UserSchemaDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/api_gateway/user_schemas">client.apiGateway.userSchemas.<a href="./src/resources/api-gateway/user-schemas/user-schemas.ts">create</a>({ ...params }) -> SchemaUpload</code>
- <code title="get /zones/{zone_id}/api_gateway/user_schemas">client.apiGateway.userSchemas.<a href="./src/resources/api-gateway/user-schemas/user-schemas.ts">list</a>({ ...params }) -> PublicSchemasV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/api_gateway/user_schemas/{schema_id}">client.apiGateway.userSchemas.<a href="./src/resources/api-gateway/user-schemas/user-schemas.ts">delete</a>(schemaId, { ...params }) -> UserSchemaDeleteResponse</code>
- <code title="patch /zones/{zone_id}/api_gateway/user_schemas/{schema_id}">client.apiGateway.userSchemas.<a href="./src/resources/api-gateway/user-schemas/user-schemas.ts">edit</a>(schemaId, { ...params }) -> PublicSchema</code>
- <code title="get /zones/{zone_id}/api_gateway/user_schemas/{schema_id}">client.apiGateway.userSchemas.<a href="./src/resources/api-gateway/user-schemas/user-schemas.ts">get</a>(schemaId, { ...params }) -> PublicSchema</code>

### Operations

Types:

- <code><a href="./src/resources/api-gateway/user-schemas/operations.ts">OperationListResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/api_gateway/user_schemas/{schema_id}/operations">client.apiGateway.userSchemas.operations.<a href="./src/resources/api-gateway/user-schemas/operations.ts">list</a>(schemaId, { ...params }) -> OperationListResponsesV4PagePaginationArray</code>

# ManagedHeaders

Types:

- <code><a href="./src/resources/managed-headers.ts">RequestModel</a></code>
- <code><a href="./src/resources/managed-headers.ts">ManagedHeaderListResponse</a></code>
- <code><a href="./src/resources/managed-headers.ts">ManagedHeaderEditResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/managed_headers">client.managedHeaders.<a href="./src/resources/managed-headers.ts">list</a>({ ...params }) -> ManagedHeaderListResponse</code>
- <code title="patch /zones/{zone_id}/managed_headers">client.managedHeaders.<a href="./src/resources/managed-headers.ts">edit</a>({ ...params }) -> ManagedHeaderEditResponse</code>

# PageShield

Types:

- <code><a href="./src/resources/page-shield/page-shield.ts">Setting</a></code>
- <code><a href="./src/resources/page-shield/page-shield.ts">PageShieldUpdateResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/page_shield">client.pageShield.<a href="./src/resources/page-shield/page-shield.ts">update</a>({ ...params }) -> PageShieldUpdateResponse</code>
- <code title="get /zones/{zone_id}/page_shield">client.pageShield.<a href="./src/resources/page-shield/page-shield.ts">get</a>({ ...params }) -> Setting | null</code>

## Policies

Types:

- <code><a href="./src/resources/page-shield/policies.ts">Policy</a></code>
- <code><a href="./src/resources/page-shield/policies.ts">PolicyCreateResponse</a></code>
- <code><a href="./src/resources/page-shield/policies.ts">PolicyUpdateResponse</a></code>
- <code><a href="./src/resources/page-shield/policies.ts">PolicyListResponse</a></code>
- <code><a href="./src/resources/page-shield/policies.ts">PolicyGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/page_shield/policies">client.pageShield.policies.<a href="./src/resources/page-shield/policies.ts">create</a>({ ...params }) -> PolicyCreateResponse | null</code>
- <code title="put /zones/{zone_id}/page_shield/policies/{policy_id}">client.pageShield.policies.<a href="./src/resources/page-shield/policies.ts">update</a>(policyId, { ...params }) -> PolicyUpdateResponse | null</code>
- <code title="get /zones/{zone_id}/page_shield/policies">client.pageShield.policies.<a href="./src/resources/page-shield/policies.ts">list</a>({ ...params }) -> PolicyListResponsesSinglePage</code>
- <code title="delete /zones/{zone_id}/page_shield/policies/{policy_id}">client.pageShield.policies.<a href="./src/resources/page-shield/policies.ts">delete</a>(policyId, { ...params }) -> void</code>
- <code title="get /zones/{zone_id}/page_shield/policies/{policy_id}">client.pageShield.policies.<a href="./src/resources/page-shield/policies.ts">get</a>(policyId, { ...params }) -> PolicyGetResponse | null</code>

## Connections

Types:

- <code><a href="./src/resources/page-shield/connections.ts">Connection</a></code>

Methods:

- <code title="get /zones/{zone_id}/page_shield/connections">client.pageShield.connections.<a href="./src/resources/page-shield/connections.ts">list</a>({ ...params }) -> ConnectionsSinglePage</code>
- <code title="get /zones/{zone_id}/page_shield/connections/{connection_id}">client.pageShield.connections.<a href="./src/resources/page-shield/connections.ts">get</a>(connectionId, { ...params }) -> Connection | null</code>

## Scripts

Types:

- <code><a href="./src/resources/page-shield/scripts.ts">Script</a></code>
- <code><a href="./src/resources/page-shield/scripts.ts">ScriptGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/page_shield/scripts">client.pageShield.scripts.<a href="./src/resources/page-shield/scripts.ts">list</a>({ ...params }) -> ScriptsSinglePage</code>
- <code title="get /zones/{zone_id}/page_shield/scripts/{script_id}">client.pageShield.scripts.<a href="./src/resources/page-shield/scripts.ts">get</a>(scriptId, { ...params }) -> ScriptGetResponse | null</code>

## Cookies

Types:

- <code><a href="./src/resources/page-shield/cookies.ts">CookieListResponse</a></code>
- <code><a href="./src/resources/page-shield/cookies.ts">CookieGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/page_shield/cookies">client.pageShield.cookies.<a href="./src/resources/page-shield/cookies.ts">list</a>({ ...params }) -> CookieListResponsesSinglePage</code>
- <code title="get /zones/{zone_id}/page_shield/cookies/{cookie_id}">client.pageShield.cookies.<a href="./src/resources/page-shield/cookies.ts">get</a>(cookieId, { ...params }) -> CookieGetResponse | null</code>

# Rulesets

Types:

- <code><a href="./src/resources/rulesets/rulesets.ts">Kind</a></code>
- <code><a href="./src/resources/rulesets/rulesets.ts">Phase</a></code>
- <code><a href="./src/resources/rulesets/rulesets.ts">Ruleset</a></code>
- <code><a href="./src/resources/rulesets/rulesets.ts">RulesetCreateResponse</a></code>
- <code><a href="./src/resources/rulesets/rulesets.ts">RulesetUpdateResponse</a></code>
- <code><a href="./src/resources/rulesets/rulesets.ts">RulesetListResponse</a></code>
- <code><a href="./src/resources/rulesets/rulesets.ts">RulesetGetResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/rulesets">client.rulesets.<a href="./src/resources/rulesets/rulesets.ts">create</a>({ ...params }) -> RulesetCreateResponse</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}">client.rulesets.<a href="./src/resources/rulesets/rulesets.ts">update</a>(rulesetId, { ...params }) -> RulesetUpdateResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/rulesets">client.rulesets.<a href="./src/resources/rulesets/rulesets.ts">list</a>({ ...params }) -> RulesetListResponsesSinglePage</code>
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

- <code title="get /{account_or_zone}/{account_or_zone_id}/rulesets/phases/{ruleset_phase}/entrypoint/versions">client.rulesets.phases.versions.<a href="./src/resources/rulesets/phases/versions.ts">list</a>(rulesetPhase, { ...params }) -> VersionListResponsesSinglePage</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/rulesets/phases/{ruleset_phase}/entrypoint/versions/{ruleset_version}">client.rulesets.phases.versions.<a href="./src/resources/rulesets/phases/versions.ts">get</a>(rulesetPhase, rulesetVersion, { ...params }) -> VersionGetResponse</code>

## Rules

Types:

- <code><a href="./src/resources/rulesets/rules.ts">BlockRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">ChallengeRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">CompressResponseRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">DDoSDynamicRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">ExecuteRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">ForceConnectionCloseRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">JSChallengeRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">LogCustomFieldRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">LogRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">Logging</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">ManagedChallengeRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">RedirectRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">RewriteRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">RewriteURIPart</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">RouteRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">RulesetRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">ScoreRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">ServeErrorRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">SetCacheSettingsRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">SetConfigRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">SkipRule</a></code>
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

- <code title="get /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}/versions">client.rulesets.versions.<a href="./src/resources/rulesets/versions/versions.ts">list</a>(rulesetId, { ...params }) -> VersionListResponsesSinglePage</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}/versions/{ruleset_version}">client.rulesets.versions.<a href="./src/resources/rulesets/versions/versions.ts">delete</a>(rulesetId, rulesetVersion, { ...params }) -> void</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/rulesets/{ruleset_id}/versions/{ruleset_version}">client.rulesets.versions.<a href="./src/resources/rulesets/versions/versions.ts">get</a>(rulesetId, rulesetVersion, { ...params }) -> VersionGetResponse</code>

### ByTag

Types:

- <code><a href="./src/resources/rulesets/versions/by-tag.ts">ByTagGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/rulesets/{ruleset_id}/versions/{ruleset_version}/by_tag/{rule_tag}">client.rulesets.versions.byTag.<a href="./src/resources/rulesets/versions/by-tag.ts">get</a>(rulesetId, rulesetVersion, ruleTag, { ...params }) -> ByTagGetResponse</code>

# URLNormalization

Types:

- <code><a href="./src/resources/url-normalization.ts">URLNormalizationUpdateResponse</a></code>
- <code><a href="./src/resources/url-normalization.ts">URLNormalizationGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/url_normalization">client.urlNormalization.<a href="./src/resources/url-normalization.ts">update</a>({ ...params }) -> URLNormalizationUpdateResponse</code>
- <code title="get /zones/{zone_id}/url_normalization">client.urlNormalization.<a href="./src/resources/url-normalization.ts">get</a>({ ...params }) -> URLNormalizationGetResponse</code>

# Spectrum

Types:

- <code><a href="./src/resources/spectrum/spectrum.ts">DNS</a></code>
- <code><a href="./src/resources/spectrum/spectrum.ts">EdgeIPs</a></code>
- <code><a href="./src/resources/spectrum/spectrum.ts">OriginDNS</a></code>
- <code><a href="./src/resources/spectrum/spectrum.ts">OriginPort</a></code>

## Analytics

### Aggregates

#### Currents

Types:

- <code><a href="./src/resources/spectrum/analytics/aggregates/currents.ts">CurrentGetResponse</a></code>

Methods:

- <code title="get /zones/{zone}/spectrum/analytics/aggregate/current">client.spectrum.analytics.aggregates.currents.<a href="./src/resources/spectrum/analytics/aggregates/currents.ts">get</a>(zone, { ...params }) -> CurrentGetResponse</code>

### Events

Types:

- <code><a href="./src/resources/spectrum/analytics/events/events.ts">Dimension</a></code>

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
- <code title="get /zones/{zone}/spectrum/apps/{app_id}">client.spectrum.apps.<a href="./src/resources/spectrum/apps.ts">get</a>(zone, appId) -> AppGetResponse</code>

# Addressing

## RegionalHostnames

Types:

- <code><a href="./src/resources/addressing/regional-hostnames/regional-hostnames.ts">RegionalHostnameCreateResponse</a></code>
- <code><a href="./src/resources/addressing/regional-hostnames/regional-hostnames.ts">RegionalHostnameListResponse</a></code>
- <code><a href="./src/resources/addressing/regional-hostnames/regional-hostnames.ts">RegionalHostnameDeleteResponse</a></code>
- <code><a href="./src/resources/addressing/regional-hostnames/regional-hostnames.ts">RegionalHostnameEditResponse</a></code>
- <code><a href="./src/resources/addressing/regional-hostnames/regional-hostnames.ts">RegionalHostnameGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/addressing/regional_hostnames">client.addressing.regionalHostnames.<a href="./src/resources/addressing/regional-hostnames/regional-hostnames.ts">create</a>({ ...params }) -> RegionalHostnameCreateResponse</code>
- <code title="get /zones/{zone_id}/addressing/regional_hostnames">client.addressing.regionalHostnames.<a href="./src/resources/addressing/regional-hostnames/regional-hostnames.ts">list</a>({ ...params }) -> RegionalHostnameListResponsesSinglePage</code>
- <code title="delete /zones/{zone_id}/addressing/regional_hostnames/{hostname}">client.addressing.regionalHostnames.<a href="./src/resources/addressing/regional-hostnames/regional-hostnames.ts">delete</a>(hostname, { ...params }) -> RegionalHostnameDeleteResponse</code>
- <code title="patch /zones/{zone_id}/addressing/regional_hostnames/{hostname}">client.addressing.regionalHostnames.<a href="./src/resources/addressing/regional-hostnames/regional-hostnames.ts">edit</a>(hostname, { ...params }) -> RegionalHostnameEditResponse</code>
- <code title="get /zones/{zone_id}/addressing/regional_hostnames/{hostname}">client.addressing.regionalHostnames.<a href="./src/resources/addressing/regional-hostnames/regional-hostnames.ts">get</a>(hostname, { ...params }) -> RegionalHostnameGetResponse</code>

### Regions

Types:

- <code><a href="./src/resources/addressing/regional-hostnames/regions.ts">RegionListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/addressing/regional_hostnames/regions">client.addressing.regionalHostnames.regions.<a href="./src/resources/addressing/regional-hostnames/regions.ts">list</a>({ ...params }) -> RegionListResponsesSinglePage</code>

## Services

Types:

- <code><a href="./src/resources/addressing/services.ts">ServiceListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/addressing/services">client.addressing.services.<a href="./src/resources/addressing/services.ts">list</a>({ ...params }) -> ServiceListResponsesSinglePage</code>

## AddressMaps

Types:

- <code><a href="./src/resources/addressing/address-maps/address-maps.ts">AddressMap</a></code>
- <code><a href="./src/resources/addressing/address-maps/address-maps.ts">Kind</a></code>
- <code><a href="./src/resources/addressing/address-maps/address-maps.ts">AddressMapCreateResponse</a></code>
- <code><a href="./src/resources/addressing/address-maps/address-maps.ts">AddressMapDeleteResponse</a></code>
- <code><a href="./src/resources/addressing/address-maps/address-maps.ts">AddressMapGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/addressing/address_maps">client.addressing.addressMaps.<a href="./src/resources/addressing/address-maps/address-maps.ts">create</a>({ ...params }) -> AddressMapCreateResponse</code>
- <code title="get /accounts/{account_id}/addressing/address_maps">client.addressing.addressMaps.<a href="./src/resources/addressing/address-maps/address-maps.ts">list</a>({ ...params }) -> AddressMapsSinglePage</code>
- <code title="delete /accounts/{account_id}/addressing/address_maps/{address_map_id}">client.addressing.addressMaps.<a href="./src/resources/addressing/address-maps/address-maps.ts">delete</a>(addressMapId, { ...params }) -> AddressMapDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/addressing/address_maps/{address_map_id}">client.addressing.addressMaps.<a href="./src/resources/addressing/address-maps/address-maps.ts">edit</a>(addressMapId, { ...params }) -> AddressMap</code>
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

Methods:

- <code title="get /accounts/{account_id}/addressing/loa_documents/{loa_document_id}/download">client.addressing.loaDocuments.downloads.<a href="./src/resources/addressing/loa-documents/downloads.ts">get</a>(loaDocumentId, { ...params }) -> Response</code>

## Prefixes

Types:

- <code><a href="./src/resources/addressing/prefixes/prefixes.ts">Prefix</a></code>
- <code><a href="./src/resources/addressing/prefixes/prefixes.ts">PrefixDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/addressing/prefixes">client.addressing.prefixes.<a href="./src/resources/addressing/prefixes/prefixes.ts">create</a>({ ...params }) -> Prefix</code>
- <code title="get /accounts/{account_id}/addressing/prefixes">client.addressing.prefixes.<a href="./src/resources/addressing/prefixes/prefixes.ts">list</a>({ ...params }) -> PrefixesSinglePage</code>
- <code title="delete /accounts/{account_id}/addressing/prefixes/{prefix_id}">client.addressing.prefixes.<a href="./src/resources/addressing/prefixes/prefixes.ts">delete</a>(prefixId, { ...params }) -> PrefixDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/addressing/prefixes/{prefix_id}">client.addressing.prefixes.<a href="./src/resources/addressing/prefixes/prefixes.ts">edit</a>(prefixId, { ...params }) -> Prefix</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}">client.addressing.prefixes.<a href="./src/resources/addressing/prefixes/prefixes.ts">get</a>(prefixId, { ...params }) -> Prefix</code>

### BGP

#### Bindings

Types:

- <code><a href="./src/resources/addressing/prefixes/bgp/bindings.ts">ServiceBinding</a></code>
- <code><a href="./src/resources/addressing/prefixes/bgp/bindings.ts">BindingDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings">client.addressing.prefixes.bgp.bindings.<a href="./src/resources/addressing/prefixes/bgp/bindings.ts">create</a>(prefixId, { ...params }) -> ServiceBinding</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings">client.addressing.prefixes.bgp.bindings.<a href="./src/resources/addressing/prefixes/bgp/bindings.ts">list</a>(prefixId, { ...params }) -> ServiceBindingsSinglePage</code>
- <code title="delete /accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings/{binding_id}">client.addressing.prefixes.bgp.bindings.<a href="./src/resources/addressing/prefixes/bgp/bindings.ts">delete</a>(prefixId, bindingId, { ...params }) -> BindingDeleteResponse</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings/{binding_id}">client.addressing.prefixes.bgp.bindings.<a href="./src/resources/addressing/prefixes/bgp/bindings.ts">get</a>(prefixId, bindingId, { ...params }) -> ServiceBinding</code>

#### Prefixes

Types:

- <code><a href="./src/resources/addressing/prefixes/bgp/prefixes.ts">BGPPrefix</a></code>

Methods:

- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes">client.addressing.prefixes.bgp.prefixes.<a href="./src/resources/addressing/prefixes/bgp/prefixes.ts">list</a>(prefixId, { ...params }) -> BGPPrefixesSinglePage</code>
- <code title="patch /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes/{bgp_prefix_id}">client.addressing.prefixes.bgp.prefixes.<a href="./src/resources/addressing/prefixes/bgp/prefixes.ts">edit</a>(prefixId, bgpPrefixId, { ...params }) -> BGPPrefix</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes/{bgp_prefix_id}">client.addressing.prefixes.bgp.prefixes.<a href="./src/resources/addressing/prefixes/bgp/prefixes.ts">get</a>(prefixId, bgpPrefixId, { ...params }) -> BGPPrefix</code>

#### Statuses

Types:

- <code><a href="./src/resources/addressing/prefixes/bgp/statuses.ts">StatusEditResponse</a></code>
- <code><a href="./src/resources/addressing/prefixes/bgp/statuses.ts">StatusGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/status">client.addressing.prefixes.bgp.statuses.<a href="./src/resources/addressing/prefixes/bgp/statuses.ts">edit</a>(prefixId, { ...params }) -> StatusEditResponse</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/status">client.addressing.prefixes.bgp.statuses.<a href="./src/resources/addressing/prefixes/bgp/statuses.ts">get</a>(prefixId, { ...params }) -> StatusGetResponse</code>

### Delegations

Types:

- <code><a href="./src/resources/addressing/prefixes/delegations.ts">Delegations</a></code>
- <code><a href="./src/resources/addressing/prefixes/delegations.ts">DelegationDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/addressing/prefixes/{prefix_id}/delegations">client.addressing.prefixes.delegations.<a href="./src/resources/addressing/prefixes/delegations.ts">create</a>(prefixId, { ...params }) -> Delegations</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/delegations">client.addressing.prefixes.delegations.<a href="./src/resources/addressing/prefixes/delegations.ts">list</a>(prefixId, { ...params }) -> DelegationsSinglePage</code>
- <code title="delete /accounts/{account_id}/addressing/prefixes/{prefix_id}/delegations/{delegation_id}">client.addressing.prefixes.delegations.<a href="./src/resources/addressing/prefixes/delegations.ts">delete</a>(prefixId, delegationId, { ...params }) -> DelegationDeleteResponse</code>

# AuditLogs

Methods:

- <code title="get /accounts/{account_id}/audit_logs">client.auditLogs.<a href="./src/resources/audit-logs.ts">list</a>({ ...params }) -> AuditLogsV4PagePaginationArray</code>

# Billing

## Profiles

Types:

- <code><a href="./src/resources/billing/profiles.ts">ProfileGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/billing/profile">client.billing.profiles.<a href="./src/resources/billing/profiles.ts">get</a>(accountIdentifier) -> ProfileGetResponse</code>

# BrandProtection

Types:

- <code><a href="./src/resources/brand-protection.ts">Info</a></code>
- <code><a href="./src/resources/brand-protection.ts">RuleMatch</a></code>
- <code><a href="./src/resources/brand-protection.ts">ScanStatus</a></code>
- <code><a href="./src/resources/brand-protection.ts">Submit</a></code>
- <code><a href="./src/resources/brand-protection.ts">URLInfoModelResults</a></code>

Methods:

- <code title="post /accounts/{account_id}/brand-protection/submit">client.brandProtection.<a href="./src/resources/brand-protection.ts">submit</a>({ ...params }) -> Submit</code>
- <code title="get /accounts/{account_id}/brand-protection/url-info">client.brandProtection.<a href="./src/resources/brand-protection.ts">urlInfo</a>({ ...params }) -> Info</code>

# Diagnostics

## Traceroutes

Types:

- <code><a href="./src/resources/diagnostics/traceroutes.ts">Traceroute</a></code>
- <code><a href="./src/resources/diagnostics/traceroutes.ts">TracerouteCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/diagnostics/traceroute">client.diagnostics.traceroutes.<a href="./src/resources/diagnostics/traceroutes.ts">create</a>({ ...params }) -> TracerouteCreateResponse | null</code>

# Images

## V1

Types:

- <code><a href="./src/resources/images/v1/v1.ts">Image</a></code>
- <code><a href="./src/resources/images/v1/v1.ts">V1ListResponse</a></code>
- <code><a href="./src/resources/images/v1/v1.ts">V1DeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/images/v1">client.images.v1.<a href="./src/resources/images/v1/v1.ts">create</a>({ ...params }) -> Image</code>
- <code title="get /accounts/{account_id}/images/v1">client.images.v1.<a href="./src/resources/images/v1/v1.ts">list</a>({ ...params }) -> V1ListResponsesV4PagePagination</code>
- <code title="delete /accounts/{account_id}/images/v1/{image_id}">client.images.v1.<a href="./src/resources/images/v1/v1.ts">delete</a>(imageId, { ...params }) -> V1DeleteResponse</code>
- <code title="patch /accounts/{account_id}/images/v1/{image_id}">client.images.v1.<a href="./src/resources/images/v1/v1.ts">edit</a>(imageId, { ...params }) -> Image</code>
- <code title="get /accounts/{account_id}/images/v1/{image_id}">client.images.v1.<a href="./src/resources/images/v1/v1.ts">get</a>(imageId, { ...params }) -> Image</code>

### Keys

Types:

- <code><a href="./src/resources/images/v1/keys.ts">Key</a></code>
- <code><a href="./src/resources/images/v1/keys.ts">KeyUpdateResponse</a></code>
- <code><a href="./src/resources/images/v1/keys.ts">KeyListResponse</a></code>
- <code><a href="./src/resources/images/v1/keys.ts">KeyDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/images/v1/keys/{signing_key_name}">client.images.v1.keys.<a href="./src/resources/images/v1/keys.ts">update</a>(signingKeyName, { ...params }) -> KeyUpdateResponse</code>
- <code title="get /accounts/{account_id}/images/v1/keys">client.images.v1.keys.<a href="./src/resources/images/v1/keys.ts">list</a>({ ...params }) -> KeyListResponse</code>
- <code title="delete /accounts/{account_id}/images/v1/keys/{signing_key_name}">client.images.v1.keys.<a href="./src/resources/images/v1/keys.ts">delete</a>(signingKeyName, { ...params }) -> KeyDeleteResponse</code>

### Stats

Types:

- <code><a href="./src/resources/images/v1/stats.ts">Stat</a></code>

Methods:

- <code title="get /accounts/{account_id}/images/v1/stats">client.images.v1.stats.<a href="./src/resources/images/v1/stats.ts">get</a>({ ...params }) -> Stat</code>

### Variants

Types:

- <code><a href="./src/resources/images/v1/variants.ts">Variant</a></code>
- <code><a href="./src/resources/images/v1/variants.ts">VariantCreateResponse</a></code>
- <code><a href="./src/resources/images/v1/variants.ts">VariantDeleteResponse</a></code>
- <code><a href="./src/resources/images/v1/variants.ts">VariantEditResponse</a></code>
- <code><a href="./src/resources/images/v1/variants.ts">VariantGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/images/v1/variants">client.images.v1.variants.<a href="./src/resources/images/v1/variants.ts">create</a>({ ...params }) -> VariantCreateResponse</code>
- <code title="get /accounts/{account_id}/images/v1/variants">client.images.v1.variants.<a href="./src/resources/images/v1/variants.ts">list</a>({ ...params }) -> Variant</code>
- <code title="delete /accounts/{account_id}/images/v1/variants/{variant_id}">client.images.v1.variants.<a href="./src/resources/images/v1/variants.ts">delete</a>(variantId, { ...params }) -> VariantDeleteResponse</code>
- <code title="patch /accounts/{account_id}/images/v1/variants/{variant_id}">client.images.v1.variants.<a href="./src/resources/images/v1/variants.ts">edit</a>(variantId, { ...params }) -> VariantEditResponse</code>
- <code title="get /accounts/{account_id}/images/v1/variants/{variant_id}">client.images.v1.variants.<a href="./src/resources/images/v1/variants.ts">get</a>(variantId, { ...params }) -> VariantGetResponse</code>

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

Methods:

- <code title="get /accounts/{account_id}/intel/asn/{asn}">client.intel.asn.<a href="./src/resources/intel/asn/asn.ts">get</a>(asn, { ...params }) -> ASN</code>

### Subnets

Types:

- <code><a href="./src/resources/intel/asn/subnets.ts">SubnetGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/asn/{asn}/subnets">client.intel.asn.subnets.<a href="./src/resources/intel/asn/subnets.ts">get</a>(asn, { ...params }) -> SubnetGetResponse</code>

## DNS

Types:

- <code><a href="./src/resources/intel/dns.ts">DNS</a></code>
- <code><a href="./src/resources/intel/dns.ts">DNSListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/dns">client.intel.dns.<a href="./src/resources/intel/dns.ts">list</a>({ ...params }) -> DNSListResponsesV4PagePagination</code>

## Domains

Types:

- <code><a href="./src/resources/intel/domains/domains.ts">Domain</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/domain">client.intel.domains.<a href="./src/resources/intel/domains/domains.ts">get</a>({ ...params }) -> Domain</code>

### Bulks

Types:

- <code><a href="./src/resources/intel/domains/bulks.ts">BulkGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/domain/bulk">client.intel.domains.bulks.<a href="./src/resources/intel/domains/bulks.ts">get</a>({ ...params }) -> BulkGetResponse | null</code>

## DomainHistory

Types:

- <code><a href="./src/resources/intel/domain-history.ts">DomainHistory</a></code>
- <code><a href="./src/resources/intel/domain-history.ts">DomainHistoryGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/domain-history">client.intel.domainHistory.<a href="./src/resources/intel/domain-history.ts">get</a>({ ...params }) -> DomainHistoryGetResponse | null</code>

## IPs

Types:

- <code><a href="./src/resources/intel/ips.ts">IP</a></code>
- <code><a href="./src/resources/intel/ips.ts">IPGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/ip">client.intel.ips.<a href="./src/resources/intel/ips.ts">get</a>({ ...params }) -> IPGetResponse | null</code>

## IPLists

Types:

- <code><a href="./src/resources/intel/ip-lists.ts">IPList</a></code>
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

- <code><a href="./src/resources/intel/whois.ts">Whois</a></code>
- <code><a href="./src/resources/intel/whois.ts">WhoisGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/whois">client.intel.whois.<a href="./src/resources/intel/whois.ts">get</a>({ ...params }) -> WhoisGetResponse</code>

## IndicatorFeeds

Types:

- <code><a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">IndicatorFeedCreateResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">IndicatorFeedUpdateResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">IndicatorFeedListResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">IndicatorFeedDataResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">IndicatorFeedGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/intel/indicator-feeds">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">create</a>({ ...params }) -> IndicatorFeedCreateResponse</code>
- <code title="put /accounts/{account_id}/intel/indicator-feeds/{feed_id}">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">update</a>(feedId, { ...params }) -> IndicatorFeedUpdateResponse</code>
- <code title="get /accounts/{account_id}/intel/indicator-feeds">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">list</a>({ ...params }) -> IndicatorFeedListResponsesSinglePage</code>
- <code title="get /accounts/{account_id}/intel/indicator-feeds/{feed_id}/data">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">data</a>(feedId, { ...params }) -> string</code>
- <code title="get /accounts/{account_id}/intel/indicator-feeds/{feed_id}">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">get</a>(feedId, { ...params }) -> IndicatorFeedGetResponse</code>

### Snapshots

Types:

- <code><a href="./src/resources/intel/indicator-feeds/snapshots.ts">SnapshotUpdateResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/intel/indicator-feeds/{feed_id}/snapshot">client.intel.indicatorFeeds.snapshots.<a href="./src/resources/intel/indicator-feeds/snapshots.ts">update</a>(feedId, { ...params }) -> SnapshotUpdateResponse</code>

### Permissions

Types:

- <code><a href="./src/resources/intel/indicator-feeds/permissions.ts">PermissionCreateResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/permissions.ts">PermissionListResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/permissions.ts">PermissionDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/intel/indicator-feeds/permissions/add">client.intel.indicatorFeeds.permissions.<a href="./src/resources/intel/indicator-feeds/permissions.ts">create</a>({ ...params }) -> PermissionCreateResponse</code>
- <code title="get /accounts/{account_id}/intel/indicator-feeds/permissions/view">client.intel.indicatorFeeds.permissions.<a href="./src/resources/intel/indicator-feeds/permissions.ts">list</a>({ ...params }) -> PermissionListResponse</code>
- <code title="put /accounts/{account_id}/intel/indicator-feeds/permissions/remove">client.intel.indicatorFeeds.permissions.<a href="./src/resources/intel/indicator-feeds/permissions.ts">delete</a>({ ...params }) -> PermissionDeleteResponse</code>

## Sinkholes

Types:

- <code><a href="./src/resources/intel/sinkholes.ts">Sinkhole</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/sinkholes">client.intel.sinkholes.<a href="./src/resources/intel/sinkholes.ts">list</a>({ ...params }) -> SinkholesSinglePage</code>

## AttackSurfaceReport

### IssueTypes

Types:

- <code><a href="./src/resources/intel/attack-surface-report/issue-types.ts">IssueTypeGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/attack-surface-report/issue-types">client.intel.attackSurfaceReport.issueTypes.<a href="./src/resources/intel/attack-surface-report/issue-types.ts">get</a>({ ...params }) -> IssueTypeGetResponse</code>

### Issues

Types:

- <code><a href="./src/resources/intel/attack-surface-report/issues.ts">IssueType</a></code>
- <code><a href="./src/resources/intel/attack-surface-report/issues.ts">SeverityQueryParam</a></code>
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

Types:

- <code><a href="./src/resources/magic-transit/magic-transit.ts">HealthCheck</a></code>
- <code><a href="./src/resources/magic-transit/magic-transit.ts">HealthCheckRate</a></code>
- <code><a href="./src/resources/magic-transit/magic-transit.ts">HealthCheckType</a></code>

## Apps

Types:

- <code><a href="./src/resources/magic-transit/apps.ts">AppCreateResponse</a></code>
- <code><a href="./src/resources/magic-transit/apps.ts">AppUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/apps.ts">AppListResponse</a></code>
- <code><a href="./src/resources/magic-transit/apps.ts">AppDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/apps">client.magicTransit.apps.<a href="./src/resources/magic-transit/apps.ts">create</a>({ ...params }) -> AppCreateResponse | null</code>
- <code title="put /accounts/{account_id}/magic/apps/{account_app_id}">client.magicTransit.apps.<a href="./src/resources/magic-transit/apps.ts">update</a>(accountAppId, { ...params }) -> AppUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/magic/apps">client.magicTransit.apps.<a href="./src/resources/magic-transit/apps.ts">list</a>({ ...params }) -> AppListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/magic/apps/{account_app_id}">client.magicTransit.apps.<a href="./src/resources/magic-transit/apps.ts">delete</a>(accountAppId, { ...params }) -> AppDeleteResponse | null</code>

## CfInterconnects

Types:

- <code><a href="./src/resources/magic-transit/cf-interconnects.ts">CfInterconnectUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/cf-interconnects.ts">CfInterconnectListResponse</a></code>
- <code><a href="./src/resources/magic-transit/cf-interconnects.ts">CfInterconnectGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/magic/cf_interconnects/{cf_interconnect_id}">client.magicTransit.cfInterconnects.<a href="./src/resources/magic-transit/cf-interconnects.ts">update</a>(cfInterconnectId, { ...params }) -> CfInterconnectUpdateResponse</code>
- <code title="get /accounts/{account_id}/magic/cf_interconnects">client.magicTransit.cfInterconnects.<a href="./src/resources/magic-transit/cf-interconnects.ts">list</a>({ ...params }) -> CfInterconnectListResponse</code>
- <code title="get /accounts/{account_id}/magic/cf_interconnects/{cf_interconnect_id}">client.magicTransit.cfInterconnects.<a href="./src/resources/magic-transit/cf-interconnects.ts">get</a>(cfInterconnectId, { ...params }) -> CfInterconnectGetResponse</code>

## GRETunnels

Types:

- <code><a href="./src/resources/magic-transit/gre-tunnels.ts">GRETunnelCreateResponse</a></code>
- <code><a href="./src/resources/magic-transit/gre-tunnels.ts">GRETunnelUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/gre-tunnels.ts">GRETunnelListResponse</a></code>
- <code><a href="./src/resources/magic-transit/gre-tunnels.ts">GRETunnelDeleteResponse</a></code>
- <code><a href="./src/resources/magic-transit/gre-tunnels.ts">GRETunnelGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/gre_tunnels">client.magicTransit.greTunnels.<a href="./src/resources/magic-transit/gre-tunnels.ts">create</a>({ ...params }) -> GRETunnelCreateResponse</code>
- <code title="put /accounts/{account_id}/magic/gre_tunnels/{gre_tunnel_id}">client.magicTransit.greTunnels.<a href="./src/resources/magic-transit/gre-tunnels.ts">update</a>(greTunnelId, { ...params }) -> GRETunnelUpdateResponse</code>
- <code title="get /accounts/{account_id}/magic/gre_tunnels">client.magicTransit.greTunnels.<a href="./src/resources/magic-transit/gre-tunnels.ts">list</a>({ ...params }) -> GRETunnelListResponse</code>
- <code title="delete /accounts/{account_id}/magic/gre_tunnels/{gre_tunnel_id}">client.magicTransit.greTunnels.<a href="./src/resources/magic-transit/gre-tunnels.ts">delete</a>(greTunnelId, { ...params }) -> GRETunnelDeleteResponse</code>
- <code title="get /accounts/{account_id}/magic/gre_tunnels/{gre_tunnel_id}">client.magicTransit.greTunnels.<a href="./src/resources/magic-transit/gre-tunnels.ts">get</a>(greTunnelId, { ...params }) -> GRETunnelGetResponse</code>

## IPSECTunnels

Types:

- <code><a href="./src/resources/magic-transit/ipsec-tunnels.ts">PSKMetadata</a></code>
- <code><a href="./src/resources/magic-transit/ipsec-tunnels.ts">IPSECTunnelCreateResponse</a></code>
- <code><a href="./src/resources/magic-transit/ipsec-tunnels.ts">IPSECTunnelUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/ipsec-tunnels.ts">IPSECTunnelListResponse</a></code>
- <code><a href="./src/resources/magic-transit/ipsec-tunnels.ts">IPSECTunnelDeleteResponse</a></code>
- <code><a href="./src/resources/magic-transit/ipsec-tunnels.ts">IPSECTunnelGetResponse</a></code>
- <code><a href="./src/resources/magic-transit/ipsec-tunnels.ts">IPSECTunnelPSKGenerateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/ipsec_tunnels">client.magicTransit.ipsecTunnels.<a href="./src/resources/magic-transit/ipsec-tunnels.ts">create</a>({ ...params }) -> IPSECTunnelCreateResponse</code>
- <code title="put /accounts/{account_id}/magic/ipsec_tunnels/{ipsec_tunnel_id}">client.magicTransit.ipsecTunnels.<a href="./src/resources/magic-transit/ipsec-tunnels.ts">update</a>(ipsecTunnelId, { ...params }) -> IPSECTunnelUpdateResponse</code>
- <code title="get /accounts/{account_id}/magic/ipsec_tunnels">client.magicTransit.ipsecTunnels.<a href="./src/resources/magic-transit/ipsec-tunnels.ts">list</a>({ ...params }) -> IPSECTunnelListResponse</code>
- <code title="delete /accounts/{account_id}/magic/ipsec_tunnels/{ipsec_tunnel_id}">client.magicTransit.ipsecTunnels.<a href="./src/resources/magic-transit/ipsec-tunnels.ts">delete</a>(ipsecTunnelId, { ...params }) -> IPSECTunnelDeleteResponse</code>
- <code title="get /accounts/{account_id}/magic/ipsec_tunnels/{ipsec_tunnel_id}">client.magicTransit.ipsecTunnels.<a href="./src/resources/magic-transit/ipsec-tunnels.ts">get</a>(ipsecTunnelId, { ...params }) -> IPSECTunnelGetResponse</code>
- <code title="post /accounts/{account_id}/magic/ipsec_tunnels/{ipsec_tunnel_id}/psk_generate">client.magicTransit.ipsecTunnels.<a href="./src/resources/magic-transit/ipsec-tunnels.ts">pskGenerate</a>(ipsecTunnelId, { ...params }) -> IPSECTunnelPSKGenerateResponse</code>

## Routes

Types:

- <code><a href="./src/resources/magic-transit/routes.ts">Scope</a></code>
- <code><a href="./src/resources/magic-transit/routes.ts">RouteCreateResponse</a></code>
- <code><a href="./src/resources/magic-transit/routes.ts">RouteUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/routes.ts">RouteListResponse</a></code>
- <code><a href="./src/resources/magic-transit/routes.ts">RouteDeleteResponse</a></code>
- <code><a href="./src/resources/magic-transit/routes.ts">RouteEmptyResponse</a></code>
- <code><a href="./src/resources/magic-transit/routes.ts">RouteGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/routes">client.magicTransit.routes.<a href="./src/resources/magic-transit/routes.ts">create</a>({ ...params }) -> RouteCreateResponse</code>
- <code title="put /accounts/{account_id}/magic/routes/{route_id}">client.magicTransit.routes.<a href="./src/resources/magic-transit/routes.ts">update</a>(routeId, { ...params }) -> RouteUpdateResponse</code>
- <code title="get /accounts/{account_id}/magic/routes">client.magicTransit.routes.<a href="./src/resources/magic-transit/routes.ts">list</a>({ ...params }) -> RouteListResponse</code>
- <code title="delete /accounts/{account_id}/magic/routes/{route_id}">client.magicTransit.routes.<a href="./src/resources/magic-transit/routes.ts">delete</a>(routeId, { ...params }) -> RouteDeleteResponse</code>
- <code title="delete /accounts/{account_id}/magic/routes">client.magicTransit.routes.<a href="./src/resources/magic-transit/routes.ts">empty</a>({ ...params }) -> RouteEmptyResponse</code>
- <code title="get /accounts/{account_id}/magic/routes/{route_id}">client.magicTransit.routes.<a href="./src/resources/magic-transit/routes.ts">get</a>(routeId, { ...params }) -> RouteGetResponse</code>

## Sites

Types:

- <code><a href="./src/resources/magic-transit/sites/sites.ts">Site</a></code>
- <code><a href="./src/resources/magic-transit/sites/sites.ts">SiteLocation</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/sites">client.magicTransit.sites.<a href="./src/resources/magic-transit/sites/sites.ts">create</a>({ ...params }) -> Site</code>
- <code title="put /accounts/{account_id}/magic/sites/{site_id}">client.magicTransit.sites.<a href="./src/resources/magic-transit/sites/sites.ts">update</a>(siteId, { ...params }) -> Site</code>
- <code title="get /accounts/{account_id}/magic/sites">client.magicTransit.sites.<a href="./src/resources/magic-transit/sites/sites.ts">list</a>({ ...params }) -> SitesSinglePage</code>
- <code title="delete /accounts/{account_id}/magic/sites/{site_id}">client.magicTransit.sites.<a href="./src/resources/magic-transit/sites/sites.ts">delete</a>(siteId, { ...params }) -> Site</code>
- <code title="patch /accounts/{account_id}/magic/sites/{site_id}">client.magicTransit.sites.<a href="./src/resources/magic-transit/sites/sites.ts">edit</a>(siteId, { ...params }) -> Site</code>
- <code title="get /accounts/{account_id}/magic/sites/{site_id}">client.magicTransit.sites.<a href="./src/resources/magic-transit/sites/sites.ts">get</a>(siteId, { ...params }) -> Site</code>

### ACLs

Types:

- <code><a href="./src/resources/magic-transit/sites/acls.ts">ACL</a></code>
- <code><a href="./src/resources/magic-transit/sites/acls.ts">ACLConfiguration</a></code>
- <code><a href="./src/resources/magic-transit/sites/acls.ts">AllowedProtocol</a></code>
- <code><a href="./src/resources/magic-transit/sites/acls.ts">Subnet</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/sites/{site_id}/acls">client.magicTransit.sites.acls.<a href="./src/resources/magic-transit/sites/acls.ts">create</a>(siteId, { ...params }) -> ACL</code>
- <code title="put /accounts/{account_id}/magic/sites/{site_id}/acls/{acl_id}">client.magicTransit.sites.acls.<a href="./src/resources/magic-transit/sites/acls.ts">update</a>(siteId, aclId, { ...params }) -> ACL</code>
- <code title="get /accounts/{account_id}/magic/sites/{site_id}/acls">client.magicTransit.sites.acls.<a href="./src/resources/magic-transit/sites/acls.ts">list</a>(siteId, { ...params }) -> ACLsSinglePage</code>
- <code title="delete /accounts/{account_id}/magic/sites/{site_id}/acls/{acl_id}">client.magicTransit.sites.acls.<a href="./src/resources/magic-transit/sites/acls.ts">delete</a>(siteId, aclId, { ...params }) -> ACL</code>
- <code title="patch /accounts/{account_id}/magic/sites/{site_id}/acls/{acl_id}">client.magicTransit.sites.acls.<a href="./src/resources/magic-transit/sites/acls.ts">edit</a>(siteId, aclId, { ...params }) -> ACL</code>
- <code title="get /accounts/{account_id}/magic/sites/{site_id}/acls/{acl_id}">client.magicTransit.sites.acls.<a href="./src/resources/magic-transit/sites/acls.ts">get</a>(siteId, aclId, { ...params }) -> ACL</code>

### LANs

Types:

- <code><a href="./src/resources/magic-transit/sites/lans.ts">DHCPRelay</a></code>
- <code><a href="./src/resources/magic-transit/sites/lans.ts">DHCPServer</a></code>
- <code><a href="./src/resources/magic-transit/sites/lans.ts">LAN</a></code>
- <code><a href="./src/resources/magic-transit/sites/lans.ts">LANStaticAddressing</a></code>
- <code><a href="./src/resources/magic-transit/sites/lans.ts">Nat</a></code>
- <code><a href="./src/resources/magic-transit/sites/lans.ts">RoutedSubnet</a></code>
- <code><a href="./src/resources/magic-transit/sites/lans.ts">LANCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/sites/{site_id}/lans">client.magicTransit.sites.lans.<a href="./src/resources/magic-transit/sites/lans.ts">create</a>(siteId, { ...params }) -> LANCreateResponse</code>
- <code title="put /accounts/{account_id}/magic/sites/{site_id}/lans/{lan_id}">client.magicTransit.sites.lans.<a href="./src/resources/magic-transit/sites/lans.ts">update</a>(siteId, lanId, { ...params }) -> LAN</code>
- <code title="get /accounts/{account_id}/magic/sites/{site_id}/lans">client.magicTransit.sites.lans.<a href="./src/resources/magic-transit/sites/lans.ts">list</a>(siteId, { ...params }) -> LANsSinglePage</code>
- <code title="delete /accounts/{account_id}/magic/sites/{site_id}/lans/{lan_id}">client.magicTransit.sites.lans.<a href="./src/resources/magic-transit/sites/lans.ts">delete</a>(siteId, lanId, { ...params }) -> LAN</code>
- <code title="patch /accounts/{account_id}/magic/sites/{site_id}/lans/{lan_id}">client.magicTransit.sites.lans.<a href="./src/resources/magic-transit/sites/lans.ts">edit</a>(siteId, lanId, { ...params }) -> LAN</code>
- <code title="get /accounts/{account_id}/magic/sites/{site_id}/lans/{lan_id}">client.magicTransit.sites.lans.<a href="./src/resources/magic-transit/sites/lans.ts">get</a>(siteId, lanId, { ...params }) -> LAN</code>

### WANs

Types:

- <code><a href="./src/resources/magic-transit/sites/wans.ts">WAN</a></code>
- <code><a href="./src/resources/magic-transit/sites/wans.ts">WANStaticAddressing</a></code>
- <code><a href="./src/resources/magic-transit/sites/wans.ts">WANCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/sites/{site_id}/wans">client.magicTransit.sites.wans.<a href="./src/resources/magic-transit/sites/wans.ts">create</a>(siteId, { ...params }) -> WANCreateResponse</code>
- <code title="put /accounts/{account_id}/magic/sites/{site_id}/wans/{wan_id}">client.magicTransit.sites.wans.<a href="./src/resources/magic-transit/sites/wans.ts">update</a>(siteId, wanId, { ...params }) -> WAN</code>
- <code title="get /accounts/{account_id}/magic/sites/{site_id}/wans">client.magicTransit.sites.wans.<a href="./src/resources/magic-transit/sites/wans.ts">list</a>(siteId, { ...params }) -> WANsSinglePage</code>
- <code title="delete /accounts/{account_id}/magic/sites/{site_id}/wans/{wan_id}">client.magicTransit.sites.wans.<a href="./src/resources/magic-transit/sites/wans.ts">delete</a>(siteId, wanId, { ...params }) -> WAN</code>
- <code title="patch /accounts/{account_id}/magic/sites/{site_id}/wans/{wan_id}">client.magicTransit.sites.wans.<a href="./src/resources/magic-transit/sites/wans.ts">edit</a>(siteId, wanId, { ...params }) -> WAN</code>
- <code title="get /accounts/{account_id}/magic/sites/{site_id}/wans/{wan_id}">client.magicTransit.sites.wans.<a href="./src/resources/magic-transit/sites/wans.ts">get</a>(siteId, wanId, { ...params }) -> WAN</code>

## Connectors

Types:

- <code><a href="./src/resources/magic-transit/connectors.ts">ConnectorUpdateResponse</a></code>
- <code><a href="./src/resources/magic-transit/connectors.ts">ConnectorListResponse</a></code>
- <code><a href="./src/resources/magic-transit/connectors.ts">ConnectorEditResponse</a></code>
- <code><a href="./src/resources/magic-transit/connectors.ts">ConnectorGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/magic/connectors/{connector_id}">client.magicTransit.connectors.<a href="./src/resources/magic-transit/connectors.ts">update</a>(connectorId, { ...params }) -> ConnectorUpdateResponse</code>
- <code title="get /accounts/{account_id}/magic/connectors">client.magicTransit.connectors.<a href="./src/resources/magic-transit/connectors.ts">list</a>({ ...params }) -> ConnectorListResponsesSinglePage</code>
- <code title="patch /accounts/{account_id}/magic/connectors/{connector_id}">client.magicTransit.connectors.<a href="./src/resources/magic-transit/connectors.ts">edit</a>(connectorId, { ...params }) -> ConnectorEditResponse</code>
- <code title="get /accounts/{account_id}/magic/connectors/{connector_id}">client.magicTransit.connectors.<a href="./src/resources/magic-transit/connectors.ts">get</a>(connectorId, { ...params }) -> ConnectorGetResponse</code>

# MagicNetworkMonitoring

## Configs

Types:

- <code><a href="./src/resources/magic-network-monitoring/configs/configs.ts">Configuration</a></code>

Methods:

- <code title="post /accounts/{account_id}/mnm/config">client.magicNetworkMonitoring.configs.<a href="./src/resources/magic-network-monitoring/configs/configs.ts">create</a>({ ...params }) -> Configuration</code>
- <code title="put /accounts/{account_id}/mnm/config">client.magicNetworkMonitoring.configs.<a href="./src/resources/magic-network-monitoring/configs/configs.ts">update</a>({ ...params }) -> Configuration</code>
- <code title="delete /accounts/{account_id}/mnm/config">client.magicNetworkMonitoring.configs.<a href="./src/resources/magic-network-monitoring/configs/configs.ts">delete</a>({ ...params }) -> Configuration</code>
- <code title="patch /accounts/{account_id}/mnm/config">client.magicNetworkMonitoring.configs.<a href="./src/resources/magic-network-monitoring/configs/configs.ts">edit</a>({ ...params }) -> Configuration</code>
- <code title="get /accounts/{account_id}/mnm/config">client.magicNetworkMonitoring.configs.<a href="./src/resources/magic-network-monitoring/configs/configs.ts">get</a>({ ...params }) -> Configuration</code>

### Full

Methods:

- <code title="get /accounts/{account_id}/mnm/config/full">client.magicNetworkMonitoring.configs.full.<a href="./src/resources/magic-network-monitoring/configs/full.ts">get</a>({ ...params }) -> Configuration</code>

## Rules

Types:

- <code><a href="./src/resources/magic-network-monitoring/rules/rules.ts">MagicNetworkMonitoringRule</a></code>

Methods:

- <code title="post /accounts/{account_id}/mnm/rules">client.magicNetworkMonitoring.rules.<a href="./src/resources/magic-network-monitoring/rules/rules.ts">create</a>({ ...params }) -> MagicNetworkMonitoringRule | null</code>
- <code title="put /accounts/{account_id}/mnm/rules">client.magicNetworkMonitoring.rules.<a href="./src/resources/magic-network-monitoring/rules/rules.ts">update</a>({ ...params }) -> MagicNetworkMonitoringRule | null</code>
- <code title="get /accounts/{account_id}/mnm/rules">client.magicNetworkMonitoring.rules.<a href="./src/resources/magic-network-monitoring/rules/rules.ts">list</a>({ ...params }) -> MagicNetworkMonitoringRulesSinglePage</code>
- <code title="delete /accounts/{account_id}/mnm/rules/{rule_id}">client.magicNetworkMonitoring.rules.<a href="./src/resources/magic-network-monitoring/rules/rules.ts">delete</a>(ruleId, { ...params }) -> MagicNetworkMonitoringRule | null</code>
- <code title="patch /accounts/{account_id}/mnm/rules/{rule_id}">client.magicNetworkMonitoring.rules.<a href="./src/resources/magic-network-monitoring/rules/rules.ts">edit</a>(ruleId, { ...params }) -> MagicNetworkMonitoringRule | null</code>
- <code title="get /accounts/{account_id}/mnm/rules/{rule_id}">client.magicNetworkMonitoring.rules.<a href="./src/resources/magic-network-monitoring/rules/rules.ts">get</a>(ruleId, { ...params }) -> MagicNetworkMonitoringRule | null</code>

### Advertisements

Types:

- <code><a href="./src/resources/magic-network-monitoring/rules/advertisements.ts">Advertisement</a></code>

Methods:

- <code title="patch /accounts/{account_id}/mnm/rules/{rule_id}/advertisement">client.magicNetworkMonitoring.rules.advertisements.<a href="./src/resources/magic-network-monitoring/rules/advertisements.ts">edit</a>(ruleId, { ...params }) -> Advertisement | null</code>

# MTLSCertificates

Types:

- <code><a href="./src/resources/mtls-certificates/mtls-certificates.ts">MTLSCertificate</a></code>
- <code><a href="./src/resources/mtls-certificates/mtls-certificates.ts">MTLSCertificateCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/mtls_certificates">client.mtlsCertificates.<a href="./src/resources/mtls-certificates/mtls-certificates.ts">create</a>({ ...params }) -> MTLSCertificateCreateResponse</code>
- <code title="get /accounts/{account_id}/mtls_certificates">client.mtlsCertificates.<a href="./src/resources/mtls-certificates/mtls-certificates.ts">list</a>({ ...params }) -> MTLSCertificatesSinglePage</code>
- <code title="delete /accounts/{account_id}/mtls_certificates/{mtls_certificate_id}">client.mtlsCertificates.<a href="./src/resources/mtls-certificates/mtls-certificates.ts">delete</a>(mtlsCertificateId, { ...params }) -> MTLSCertificate</code>
- <code title="get /accounts/{account_id}/mtls_certificates/{mtls_certificate_id}">client.mtlsCertificates.<a href="./src/resources/mtls-certificates/mtls-certificates.ts">get</a>(mtlsCertificateId, { ...params }) -> MTLSCertificate</code>

## Associations

Types:

- <code><a href="./src/resources/mtls-certificates/associations.ts">CertificateAsssociation</a></code>
- <code><a href="./src/resources/mtls-certificates/associations.ts">AssociationGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/mtls_certificates/{mtls_certificate_id}/associations">client.mtlsCertificates.associations.<a href="./src/resources/mtls-certificates/associations.ts">get</a>(mtlsCertificateId, { ...params }) -> AssociationGetResponse | null</code>

# Pages

## Projects

Types:

- <code><a href="./src/resources/pages/projects/projects.ts">Deployment</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">Project</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">Stage</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">ProjectCreateResponse</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">ProjectDeleteResponse</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">ProjectEditResponse</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">ProjectPurgeBuildCacheResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pages/projects">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">create</a>({ ...params }) -> ProjectCreateResponse</code>
- <code title="get /accounts/{account_id}/pages/projects">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">list</a>({ ...params }) -> DeploymentsSinglePage</code>
- <code title="delete /accounts/{account_id}/pages/projects/{project_name}">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">delete</a>(projectName, { ...params }) -> unknown</code>
- <code title="patch /accounts/{account_id}/pages/projects/{project_name}">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">edit</a>(projectName, { ...params }) -> ProjectEditResponse</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">get</a>(projectName, { ...params }) -> Project</code>
- <code title="post /accounts/{account_id}/pages/projects/{project_name}/purge_build_cache">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">purgeBuildCache</a>(projectName, { ...params }) -> unknown</code>

### Deployments

Types:

- <code><a href="./src/resources/pages/projects/deployments/deployments.ts">DeploymentDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pages/projects/{project_name}/deployments">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">create</a>(projectName, { ...params }) -> Deployment</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}/deployments">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">list</a>(projectName, { ...params }) -> DeploymentsSinglePage</code>
- <code title="delete /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">delete</a>(projectName, deploymentId, { ...params }) -> unknown</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">get</a>(projectName, deploymentId, { ...params }) -> Deployment</code>
- <code title="post /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}/retry">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">retry</a>(projectName, deploymentId, { ...params }) -> Deployment</code>
- <code title="post /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}/rollback">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">rollback</a>(projectName, deploymentId, { ...params }) -> Deployment</code>

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
- <code title="get /accounts/{account_id}/pages/projects/{project_name}/domains">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">list</a>(projectName, { ...params }) -> DomainListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/pages/projects/{project_name}/domains/{domain_name}">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">delete</a>(projectName, domainName, { ...params }) -> unknown</code>
- <code title="patch /accounts/{account_id}/pages/projects/{project_name}/domains/{domain_name}">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">edit</a>(projectName, domainName, { ...params }) -> DomainEditResponse | null</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}/domains/{domain_name}">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">get</a>(projectName, domainName, { ...params }) -> DomainGetResponse | null</code>

# PCAPs

Types:

- <code><a href="./src/resources/pcaps/pcaps.ts">PCAP</a></code>
- <code><a href="./src/resources/pcaps/pcaps.ts">PCAPFilter</a></code>
- <code><a href="./src/resources/pcaps/pcaps.ts">PCAPCreateResponse</a></code>
- <code><a href="./src/resources/pcaps/pcaps.ts">PCAPListResponse</a></code>
- <code><a href="./src/resources/pcaps/pcaps.ts">PCAPGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pcaps">client.pcaps.<a href="./src/resources/pcaps/pcaps.ts">create</a>({ ...params }) -> PCAPCreateResponse</code>
- <code title="get /accounts/{account_id}/pcaps">client.pcaps.<a href="./src/resources/pcaps/pcaps.ts">list</a>({ ...params }) -> PCAPListResponsesSinglePage</code>
- <code title="get /accounts/{account_id}/pcaps/{pcap_id}">client.pcaps.<a href="./src/resources/pcaps/pcaps.ts">get</a>(pcapId, { ...params }) -> PCAPGetResponse</code>

## Ownership

Types:

- <code><a href="./src/resources/pcaps/ownership.ts">Ownership</a></code>
- <code><a href="./src/resources/pcaps/ownership.ts">OwnershipGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pcaps/ownership">client.pcaps.ownership.<a href="./src/resources/pcaps/ownership.ts">create</a>({ ...params }) -> Ownership</code>
- <code title="delete /accounts/{account_id}/pcaps/ownership/{ownership_id}">client.pcaps.ownership.<a href="./src/resources/pcaps/ownership.ts">delete</a>(ownershipId, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/pcaps/ownership">client.pcaps.ownership.<a href="./src/resources/pcaps/ownership.ts">get</a>({ ...params }) -> OwnershipGetResponse | null</code>
- <code title="post /accounts/{account_id}/pcaps/ownership/validate">client.pcaps.ownership.<a href="./src/resources/pcaps/ownership.ts">validate</a>({ ...params }) -> Ownership</code>

## Download

Methods:

- <code title="get /accounts/{account_id}/pcaps/{pcap_id}/download">client.pcaps.download.<a href="./src/resources/pcaps/download.ts">get</a>(pcapId, { ...params }) -> Response</code>

# Registrar

## Domains

Types:

- <code><a href="./src/resources/registrar/domains.ts">Domain</a></code>
- <code><a href="./src/resources/registrar/domains.ts">DomainUpdateResponse</a></code>
- <code><a href="./src/resources/registrar/domains.ts">DomainGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/registrar/domains/{domain_name}">client.registrar.domains.<a href="./src/resources/registrar/domains.ts">update</a>(domainName, { ...params }) -> DomainUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/registrar/domains">client.registrar.domains.<a href="./src/resources/registrar/domains.ts">list</a>({ ...params }) -> DomainsSinglePage</code>
- <code title="get /accounts/{account_id}/registrar/domains/{domain_name}">client.registrar.domains.<a href="./src/resources/registrar/domains.ts">get</a>(domainName, { ...params }) -> DomainGetResponse | null</code>

# RequestTracers

## Traces

Types:

- <code><a href="./src/resources/request-tracers/traces.ts">Trace</a></code>
- <code><a href="./src/resources/request-tracers/traces.ts">TraceItem</a></code>
- <code><a href="./src/resources/request-tracers/traces.ts">TraceCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/request-tracer/trace">client.requestTracers.traces.<a href="./src/resources/request-tracers/traces.ts">create</a>({ ...params }) -> TraceCreateResponse</code>

# Rules

## Lists

Types:

- <code><a href="./src/resources/rules/lists/lists.ts">Hostname</a></code>
- <code><a href="./src/resources/rules/lists/lists.ts">ListsList</a></code>
- <code><a href="./src/resources/rules/lists/lists.ts">Redirect</a></code>
- <code><a href="./src/resources/rules/lists/lists.ts">ListDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/rules/lists">client.rules.lists.<a href="./src/resources/rules/lists/lists.ts">create</a>({ ...params }) -> ListsList | null</code>
- <code title="put /accounts/{account_id}/rules/lists/{list_id}">client.rules.lists.<a href="./src/resources/rules/lists/lists.ts">update</a>(listId, { ...params }) -> ListsList | null</code>
- <code title="get /accounts/{account_id}/rules/lists">client.rules.lists.<a href="./src/resources/rules/lists/lists.ts">list</a>({ ...params }) -> ListsListsSinglePage</code>
- <code title="delete /accounts/{account_id}/rules/lists/{list_id}">client.rules.lists.<a href="./src/resources/rules/lists/lists.ts">delete</a>(listId, { ...params }) -> ListDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/rules/lists/{list_id}">client.rules.lists.<a href="./src/resources/rules/lists/lists.ts">get</a>(listId, { ...params }) -> ListsList | null</code>

### BulkOperations

Types:

- <code><a href="./src/resources/rules/lists/bulk-operations.ts">OperationStatus</a></code>
- <code><a href="./src/resources/rules/lists/bulk-operations.ts">BulkOperationGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/rules/lists/bulk_operations/{operation_id}">client.rules.lists.bulkOperations.<a href="./src/resources/rules/lists/bulk-operations.ts">get</a>(accountIdentifier, operationId) -> BulkOperationGetResponse | null</code>

### Items

Types:

- <code><a href="./src/resources/rules/lists/items.ts">ListCursor</a></code>
- <code><a href="./src/resources/rules/lists/items.ts">ListItem</a></code>
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

- <code><a href="./src/resources/storage/analytics.ts">Components</a></code>
- <code><a href="./src/resources/storage/analytics.ts">Schema</a></code>

Methods:

- <code title="get /accounts/{account_id}/storage/analytics">client.storage.analytics.<a href="./src/resources/storage/analytics.ts">list</a>({ ...params }) -> Schema</code>
- <code title="get /accounts/{account_id}/storage/analytics/stored">client.storage.analytics.<a href="./src/resources/storage/analytics.ts">stored</a>({ ...params }) -> Components</code>

# Stream

Types:

- <code><a href="./src/resources/stream/stream.ts">AllowedOrigins</a></code>
- <code><a href="./src/resources/stream/stream.ts">Video</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream">client.stream.<a href="./src/resources/stream/stream.ts">create</a>({ ...params }) -> void</code>
- <code title="get /accounts/{account_id}/stream">client.stream.<a href="./src/resources/stream/stream.ts">list</a>({ ...params }) -> VideosSinglePage</code>
- <code title="delete /accounts/{account_id}/stream/{identifier}">client.stream.<a href="./src/resources/stream/stream.ts">delete</a>(identifier, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/stream/{identifier}">client.stream.<a href="./src/resources/stream/stream.ts">get</a>(identifier, { ...params }) -> Video</code>

## AudioTracks

Types:

- <code><a href="./src/resources/stream/audio-tracks.ts">Audio</a></code>
- <code><a href="./src/resources/stream/audio-tracks.ts">AudioTrackDeleteResponse</a></code>
- <code><a href="./src/resources/stream/audio-tracks.ts">AudioTrackGetResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/stream/{identifier}/audio/{audio_identifier}">client.stream.audioTracks.<a href="./src/resources/stream/audio-tracks.ts">delete</a>(identifier, audioIdentifier, { ...params }) -> AudioTrackDeleteResponse</code>
- <code title="post /accounts/{account_id}/stream/{identifier}/audio/copy">client.stream.audioTracks.<a href="./src/resources/stream/audio-tracks.ts">copy</a>(identifier, { ...params }) -> Audio</code>
- <code title="patch /accounts/{account_id}/stream/{identifier}/audio/{audio_identifier}">client.stream.audioTracks.<a href="./src/resources/stream/audio-tracks.ts">edit</a>(identifier, audioIdentifier, { ...params }) -> Audio</code>
- <code title="get /accounts/{account_id}/stream/{identifier}/audio">client.stream.audioTracks.<a href="./src/resources/stream/audio-tracks.ts">get</a>(identifier, { ...params }) -> AudioTrackGetResponse</code>

## Videos

Types:

- <code><a href="./src/resources/stream/videos.ts">VideoStorageUsageResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/stream/storage-usage">client.stream.videos.<a href="./src/resources/stream/videos.ts">storageUsage</a>({ ...params }) -> VideoStorageUsageResponse</code>

## Clip

Types:

- <code><a href="./src/resources/stream/clip.ts">Clip</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/clip">client.stream.clip.<a href="./src/resources/stream/clip.ts">create</a>({ ...params }) -> Clip</code>

## Copy

Methods:

- <code title="post /accounts/{account_id}/stream/copy">client.stream.copy.<a href="./src/resources/stream/copy.ts">create</a>({ ...params }) -> Video</code>

## DirectUpload

Types:

- <code><a href="./src/resources/stream/direct-upload.ts">DirectUploadCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/direct_upload">client.stream.directUpload.<a href="./src/resources/stream/direct-upload.ts">create</a>({ ...params }) -> DirectUploadCreateResponse</code>

## Keys

Types:

- <code><a href="./src/resources/stream/keys.ts">Keys</a></code>
- <code><a href="./src/resources/stream/keys.ts">KeyDeleteResponse</a></code>
- <code><a href="./src/resources/stream/keys.ts">KeyGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/keys">client.stream.keys.<a href="./src/resources/stream/keys.ts">create</a>({ ...params }) -> Keys</code>
- <code title="delete /accounts/{account_id}/stream/keys/{identifier}">client.stream.keys.<a href="./src/resources/stream/keys.ts">delete</a>(identifier, { ...params }) -> KeyDeleteResponse</code>
- <code title="get /accounts/{account_id}/stream/keys">client.stream.keys.<a href="./src/resources/stream/keys.ts">get</a>({ ...params }) -> KeyGetResponse</code>

## LiveInputs

Types:

- <code><a href="./src/resources/stream/live-inputs/live-inputs.ts">LiveInput</a></code>
- <code><a href="./src/resources/stream/live-inputs/live-inputs.ts">LiveInputListResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/live_inputs">client.stream.liveInputs.<a href="./src/resources/stream/live-inputs/live-inputs.ts">create</a>({ ...params }) -> LiveInput</code>
- <code title="put /accounts/{account_id}/stream/live_inputs/{live_input_identifier}">client.stream.liveInputs.<a href="./src/resources/stream/live-inputs/live-inputs.ts">update</a>(liveInputIdentifier, { ...params }) -> LiveInput</code>
- <code title="get /accounts/{account_id}/stream/live_inputs">client.stream.liveInputs.<a href="./src/resources/stream/live-inputs/live-inputs.ts">list</a>({ ...params }) -> LiveInputListResponse</code>
- <code title="delete /accounts/{account_id}/stream/live_inputs/{live_input_identifier}">client.stream.liveInputs.<a href="./src/resources/stream/live-inputs/live-inputs.ts">delete</a>(liveInputIdentifier, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/stream/live_inputs/{live_input_identifier}">client.stream.liveInputs.<a href="./src/resources/stream/live-inputs/live-inputs.ts">get</a>(liveInputIdentifier, { ...params }) -> LiveInput</code>

### Outputs

Types:

- <code><a href="./src/resources/stream/live-inputs/outputs.ts">Output</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs">client.stream.liveInputs.outputs.<a href="./src/resources/stream/live-inputs/outputs.ts">create</a>(liveInputIdentifier, { ...params }) -> Output</code>
- <code title="put /accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs/{output_identifier}">client.stream.liveInputs.outputs.<a href="./src/resources/stream/live-inputs/outputs.ts">update</a>(liveInputIdentifier, outputIdentifier, { ...params }) -> Output</code>
- <code title="get /accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs">client.stream.liveInputs.outputs.<a href="./src/resources/stream/live-inputs/outputs.ts">list</a>(liveInputIdentifier, { ...params }) -> OutputsSinglePage</code>
- <code title="delete /accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs/{output_identifier}">client.stream.liveInputs.outputs.<a href="./src/resources/stream/live-inputs/outputs.ts">delete</a>(liveInputIdentifier, outputIdentifier, { ...params }) -> void</code>

## Watermarks

Types:

- <code><a href="./src/resources/stream/watermarks.ts">Watermark</a></code>
- <code><a href="./src/resources/stream/watermarks.ts">WatermarkDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/watermarks">client.stream.watermarks.<a href="./src/resources/stream/watermarks.ts">create</a>({ ...params }) -> Watermark</code>
- <code title="get /accounts/{account_id}/stream/watermarks">client.stream.watermarks.<a href="./src/resources/stream/watermarks.ts">list</a>({ ...params }) -> WatermarksSinglePage</code>
- <code title="delete /accounts/{account_id}/stream/watermarks/{identifier}">client.stream.watermarks.<a href="./src/resources/stream/watermarks.ts">delete</a>(identifier, { ...params }) -> WatermarkDeleteResponse</code>
- <code title="get /accounts/{account_id}/stream/watermarks/{identifier}">client.stream.watermarks.<a href="./src/resources/stream/watermarks.ts">get</a>(identifier, { ...params }) -> Watermark</code>

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

- <code><a href="./src/resources/stream/captions/captions.ts">Caption</a></code>
- <code><a href="./src/resources/stream/captions/captions.ts">CaptionGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/stream/{identifier}/captions">client.stream.captions.<a href="./src/resources/stream/captions/captions.ts">get</a>(identifier, { ...params }) -> CaptionGetResponse</code>

### Language

Types:

- <code><a href="./src/resources/stream/captions/language/language.ts">LanguageDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/{identifier}/captions/{language}/generate">client.stream.captions.language.<a href="./src/resources/stream/captions/language/language.ts">create</a>(identifier, language, { ...params }) -> Caption</code>
- <code title="put /accounts/{account_id}/stream/{identifier}/captions/{language}">client.stream.captions.language.<a href="./src/resources/stream/captions/language/language.ts">update</a>(identifier, language, { ...params }) -> Caption</code>
- <code title="delete /accounts/{account_id}/stream/{identifier}/captions/{language}">client.stream.captions.language.<a href="./src/resources/stream/captions/language/language.ts">delete</a>(identifier, language, { ...params }) -> LanguageDeleteResponse</code>
- <code title="get /accounts/{account_id}/stream/{identifier}/captions/{language}">client.stream.captions.language.<a href="./src/resources/stream/captions/language/language.ts">get</a>(identifier, language, { ...params }) -> Caption</code>

#### Vtt

Types:

- <code><a href="./src/resources/stream/captions/language/vtt.ts">VttGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/stream/{identifier}/captions/{language}/vtt">client.stream.captions.language.vtt.<a href="./src/resources/stream/captions/language/vtt.ts">get</a>(identifier, language, { ...params }) -> string</code>

## Downloads

Types:

- <code><a href="./src/resources/stream/downloads.ts">DownloadCreateResponse</a></code>
- <code><a href="./src/resources/stream/downloads.ts">DownloadDeleteResponse</a></code>
- <code><a href="./src/resources/stream/downloads.ts">DownloadGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/{identifier}/downloads">client.stream.downloads.<a href="./src/resources/stream/downloads.ts">create</a>(identifier, { ...params }) -> DownloadCreateResponse</code>
- <code title="delete /accounts/{account_id}/stream/{identifier}/downloads">client.stream.downloads.<a href="./src/resources/stream/downloads.ts">delete</a>(identifier, { ...params }) -> DownloadDeleteResponse</code>
- <code title="get /accounts/{account_id}/stream/{identifier}/downloads">client.stream.downloads.<a href="./src/resources/stream/downloads.ts">get</a>(identifier, { ...params }) -> DownloadGetResponse</code>

## Embed

Types:

- <code><a href="./src/resources/stream/embed.ts">EmbedGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/stream/{identifier}/embed">client.stream.embed.<a href="./src/resources/stream/embed.ts">get</a>(identifier, { ...params }) -> string</code>

## Token

Types:

- <code><a href="./src/resources/stream/token.ts">TokenCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/stream/{identifier}/token">client.stream.token.<a href="./src/resources/stream/token.ts">create</a>(identifier, { ...params }) -> TokenCreateResponse</code>

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
- <code><a href="./src/resources/alerting/destinations/pagerduty.ts">PagerdutyGetResponse</a></code>
- <code><a href="./src/resources/alerting/destinations/pagerduty.ts">PagerdutyLinkResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/alerting/v3/destinations/pagerduty/connect">client.alerting.destinations.pagerduty.<a href="./src/resources/alerting/destinations/pagerduty.ts">create</a>({ ...params }) -> PagerdutyCreateResponse</code>
- <code title="delete /accounts/{account_id}/alerting/v3/destinations/pagerduty">client.alerting.destinations.pagerduty.<a href="./src/resources/alerting/destinations/pagerduty.ts">delete</a>({ ...params }) -> PagerdutyDeleteResponse</code>
- <code title="get /accounts/{account_id}/alerting/v3/destinations/pagerduty">client.alerting.destinations.pagerduty.<a href="./src/resources/alerting/destinations/pagerduty.ts">get</a>({ ...params }) -> PagerdutyGetResponse</code>
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

# D1

Types:

- <code><a href="./src/resources/d1/d1.ts">D1</a></code>

## Database

Types:

- <code><a href="./src/resources/d1/database.ts">QueryResult</a></code>
- <code><a href="./src/resources/d1/database.ts">DatabaseCreateResponse</a></code>
- <code><a href="./src/resources/d1/database.ts">DatabaseListResponse</a></code>
- <code><a href="./src/resources/d1/database.ts">DatabaseDeleteResponse</a></code>
- <code><a href="./src/resources/d1/database.ts">DatabaseExportResponse</a></code>
- <code><a href="./src/resources/d1/database.ts">DatabaseImportResponse</a></code>
- <code><a href="./src/resources/d1/database.ts">DatabaseQueryResponse</a></code>
- <code><a href="./src/resources/d1/database.ts">DatabaseRawResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/d1/database">client.d1.database.<a href="./src/resources/d1/database.ts">create</a>({ ...params }) -> DatabaseCreateResponse</code>
- <code title="get /accounts/{account_id}/d1/database">client.d1.database.<a href="./src/resources/d1/database.ts">list</a>({ ...params }) -> DatabaseListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/d1/database/{database_id}">client.d1.database.<a href="./src/resources/d1/database.ts">delete</a>(databaseId, { ...params }) -> DatabaseDeleteResponse | null</code>
- <code title="post /accounts/{account_id}/d1/database/{database_id}/export">client.d1.database.<a href="./src/resources/d1/database.ts">export</a>(databaseId, { ...params }) -> DatabaseExportResponse</code>
- <code title="get /accounts/{account_id}/d1/database/{database_id}">client.d1.database.<a href="./src/resources/d1/database.ts">get</a>(databaseId, { ...params }) -> D1</code>
- <code title="post /accounts/{account_id}/d1/database/{database_id}/import">client.d1.database.<a href="./src/resources/d1/database.ts">import</a>(databaseId, { ...params }) -> DatabaseImportResponse</code>
- <code title="post /accounts/{account_id}/d1/database/{database_id}/query">client.d1.database.<a href="./src/resources/d1/database.ts">query</a>(databaseId, { ...params }) -> DatabaseQueryResponse</code>
- <code title="post /accounts/{account_id}/d1/database/{database_id}/raw">client.d1.database.<a href="./src/resources/d1/database.ts">raw</a>(databaseId, { ...params }) -> DatabaseRawResponse</code>

# R2

## Buckets

Types:

- <code><a href="./src/resources/r2/buckets.ts">Bucket</a></code>
- <code><a href="./src/resources/r2/buckets.ts">BucketDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/r2/buckets">client.r2.buckets.<a href="./src/resources/r2/buckets.ts">create</a>({ ...params }) -> Bucket</code>
- <code title="get /accounts/{account_id}/r2/buckets">client.r2.buckets.<a href="./src/resources/r2/buckets.ts">list</a>({ ...params }) -> BucketsCursorPagination</code>
- <code title="delete /accounts/{account_id}/r2/buckets/{bucket_name}">client.r2.buckets.<a href="./src/resources/r2/buckets.ts">delete</a>(bucketName, { ...params }) -> BucketDeleteResponse</code>
- <code title="get /accounts/{account_id}/r2/buckets/{bucket_name}">client.r2.buckets.<a href="./src/resources/r2/buckets.ts">get</a>(bucketName, { ...params }) -> Bucket</code>

## Sippy

Types:

- <code><a href="./src/resources/r2/sippy.ts">Provider</a></code>
- <code><a href="./src/resources/r2/sippy.ts">Sippy</a></code>
- <code><a href="./src/resources/r2/sippy.ts">SippyDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/r2/buckets/{bucket_name}/sippy">client.r2.sippy.<a href="./src/resources/r2/sippy.ts">update</a>(bucketName, { ...params }) -> Sippy</code>
- <code title="delete /accounts/{account_id}/r2/buckets/{bucket_name}/sippy">client.r2.sippy.<a href="./src/resources/r2/sippy.ts">delete</a>(bucketName, { ...params }) -> SippyDeleteResponse</code>
- <code title="get /accounts/{account_id}/r2/buckets/{bucket_name}/sippy">client.r2.sippy.<a href="./src/resources/r2/sippy.ts">get</a>(bucketName, { ...params }) -> Sippy</code>

## TemporaryCredentials

Types:

- <code><a href="./src/resources/r2/temporary-credentials.ts">TemporaryCredential</a></code>
- <code><a href="./src/resources/r2/temporary-credentials.ts">TemporaryCredentialCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/r2/temp-access-credentials">client.r2.temporaryCredentials.<a href="./src/resources/r2/temporary-credentials.ts">create</a>({ ...params }) -> TemporaryCredentialCreateResponse</code>

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
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces">client.workersForPlatforms.dispatch.namespaces.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/namespaces.ts">list</a>({ ...params }) -> NamespaceListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}">client.workersForPlatforms.dispatch.namespaces.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/namespaces.ts">delete</a>(dispatchNamespace, { ...params }) -> NamespaceDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}">client.workersForPlatforms.dispatch.namespaces.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/namespaces.ts">get</a>(dispatchNamespace, { ...params }) -> NamespaceGetResponse</code>

#### Scripts

Types:

- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/scripts.ts">Script</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}">client.workersForPlatforms.dispatch.namespaces.scripts.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/scripts.ts">update</a>(dispatchNamespace, scriptName, { ...params }) -> Script</code>
- <code title="delete /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}">client.workersForPlatforms.dispatch.namespaces.scripts.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/scripts.ts">delete</a>(dispatchNamespace, scriptName, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}">client.workersForPlatforms.dispatch.namespaces.scripts.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/scripts.ts">get</a>(dispatchNamespace, scriptName, { ...params }) -> Script</code>

##### Content

Methods:

- <code title="put /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/content">client.workersForPlatforms.dispatch.namespaces.scripts.content.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/content.ts">update</a>(dispatchNamespace, scriptName, { ...params }) -> Script</code>
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/content">client.workersForPlatforms.dispatch.namespaces.scripts.content.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/content.ts">get</a>(dispatchNamespace, scriptName, { ...params }) -> Response</code>

##### Settings

Types:

- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/settings.ts">SettingEditResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/settings">client.workersForPlatforms.dispatch.namespaces.scripts.settings.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/settings.ts">edit</a>(dispatchNamespace, scriptName, { ...params }) -> SettingEditResponse</code>
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/settings">client.workersForPlatforms.dispatch.namespaces.scripts.settings.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/settings.ts">get</a>(dispatchNamespace, scriptName, { ...params }) -> SettingGetResponse</code>

##### Bindings

Types:

- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/bindings.ts">BindingGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/bindings">client.workersForPlatforms.dispatch.namespaces.scripts.bindings.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/bindings.ts">get</a>(dispatchNamespace, scriptName, { ...params }) -> BindingGetResponse</code>

##### Secrets

Types:

- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/secrets.ts">SecretUpdateResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/secrets.ts">SecretListResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/secrets">client.workersForPlatforms.dispatch.namespaces.scripts.secrets.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/secrets.ts">update</a>(dispatchNamespace, scriptName, { ...params }) -> SecretUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/secrets">client.workersForPlatforms.dispatch.namespaces.scripts.secrets.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/secrets.ts">list</a>(dispatchNamespace, scriptName, { ...params }) -> SecretListResponsesSinglePage</code>

##### Tags

Types:

- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/tags.ts">TagUpdateResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/tags.ts">TagListResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/tags.ts">TagDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/tags">client.workersForPlatforms.dispatch.namespaces.scripts.tags.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/tags.ts">update</a>(dispatchNamespace, scriptName, [ ...body ]) -> TagUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/tags">client.workersForPlatforms.dispatch.namespaces.scripts.tags.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/tags.ts">list</a>(dispatchNamespace, scriptName, { ...params }) -> TagListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/tags/{tag}">client.workersForPlatforms.dispatch.namespaces.scripts.tags.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/tags.ts">delete</a>(dispatchNamespace, scriptName, tag, { ...params }) -> TagDeleteResponse | null</code>

# ZeroTrust

## Devices

Types:

- <code><a href="./src/resources/zero-trust/devices/devices.ts">Device</a></code>
- <code><a href="./src/resources/zero-trust/devices/devices.ts">DeviceGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/devices">client.zeroTrust.devices.<a href="./src/resources/zero-trust/devices/devices.ts">list</a>({ ...params }) -> DevicesSinglePage</code>
- <code title="get /accounts/{account_id}/devices/{device_id}">client.zeroTrust.devices.<a href="./src/resources/zero-trust/devices/devices.ts">get</a>(deviceId, { ...params }) -> DeviceGetResponse</code>

### DEXTests

Types:

- <code><a href="./src/resources/zero-trust/devices/dex-tests.ts">DEXTest</a></code>
- <code><a href="./src/resources/zero-trust/devices/dex-tests.ts">SchemaData</a></code>
- <code><a href="./src/resources/zero-trust/devices/dex-tests.ts">SchemaHTTP</a></code>
- <code><a href="./src/resources/zero-trust/devices/dex-tests.ts">DEXTestDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/dex_tests">client.zeroTrust.devices.dexTests.<a href="./src/resources/zero-trust/devices/dex-tests.ts">create</a>({ ...params }) -> SchemaHTTP | null</code>
- <code title="put /accounts/{account_id}/devices/dex_tests/{dex_test_id}">client.zeroTrust.devices.dexTests.<a href="./src/resources/zero-trust/devices/dex-tests.ts">update</a>(dexTestId, { ...params }) -> SchemaHTTP | null</code>
- <code title="get /accounts/{account_id}/devices/dex_tests">client.zeroTrust.devices.dexTests.<a href="./src/resources/zero-trust/devices/dex-tests.ts">list</a>({ ...params }) -> SchemaHTTPSSinglePage</code>
- <code title="delete /accounts/{account_id}/devices/dex_tests/{dex_test_id}">client.zeroTrust.devices.dexTests.<a href="./src/resources/zero-trust/devices/dex-tests.ts">delete</a>(dexTestId, { ...params }) -> DEXTestDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/devices/dex_tests/{dex_test_id}">client.zeroTrust.devices.dexTests.<a href="./src/resources/zero-trust/devices/dex-tests.ts">get</a>(dexTestId, { ...params }) -> SchemaHTTP | null</code>

### Networks

Types:

- <code><a href="./src/resources/zero-trust/devices/networks.ts">DeviceNetwork</a></code>
- <code><a href="./src/resources/zero-trust/devices/networks.ts">NetworkDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/networks">client.zeroTrust.devices.networks.<a href="./src/resources/zero-trust/devices/networks.ts">create</a>({ ...params }) -> DeviceNetwork | null</code>
- <code title="put /accounts/{account_id}/devices/networks/{network_id}">client.zeroTrust.devices.networks.<a href="./src/resources/zero-trust/devices/networks.ts">update</a>(networkId, { ...params }) -> DeviceNetwork | null</code>
- <code title="get /accounts/{account_id}/devices/networks">client.zeroTrust.devices.networks.<a href="./src/resources/zero-trust/devices/networks.ts">list</a>({ ...params }) -> DeviceNetworksSinglePage</code>
- <code title="delete /accounts/{account_id}/devices/networks/{network_id}">client.zeroTrust.devices.networks.<a href="./src/resources/zero-trust/devices/networks.ts">delete</a>(networkId, { ...params }) -> NetworkDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/devices/networks/{network_id}">client.zeroTrust.devices.networks.<a href="./src/resources/zero-trust/devices/networks.ts">get</a>(networkId, { ...params }) -> DeviceNetwork | null</code>

### Policies

Types:

- <code><a href="./src/resources/zero-trust/devices/policies/policies.ts">SettingsPolicy</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/policies.ts">PolicyDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/policy">client.zeroTrust.devices.policies.<a href="./src/resources/zero-trust/devices/policies/policies.ts">create</a>({ ...params }) -> SettingsPolicy | null</code>
- <code title="get /accounts/{account_id}/devices/policies">client.zeroTrust.devices.policies.<a href="./src/resources/zero-trust/devices/policies/policies.ts">list</a>({ ...params }) -> SettingsPoliciesSinglePage</code>
- <code title="delete /accounts/{account_id}/devices/policy/{policy_id}">client.zeroTrust.devices.policies.<a href="./src/resources/zero-trust/devices/policies/policies.ts">delete</a>(policyId, { ...params }) -> PolicyDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/devices/policy/{policy_id}">client.zeroTrust.devices.policies.<a href="./src/resources/zero-trust/devices/policies/policies.ts">edit</a>(policyId, { ...params }) -> SettingsPolicy | null</code>
- <code title="get /accounts/{account_id}/devices/policy/{policy_id}">client.zeroTrust.devices.policies.<a href="./src/resources/zero-trust/devices/policies/policies.ts">get</a>(policyId, { ...params }) -> SettingsPolicy | null</code>

#### DefaultPolicy

Types:

- <code><a href="./src/resources/zero-trust/devices/policies/default-policy.ts">DefaultPolicyGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/devices/policy">client.zeroTrust.devices.policies.defaultPolicy.<a href="./src/resources/zero-trust/devices/policies/default-policy.ts">get</a>({ ...params }) -> DefaultPolicyGetResponse | null</code>

#### Excludes

Types:

- <code><a href="./src/resources/zero-trust/devices/policies/excludes.ts">SplitTunnelExclude</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/excludes.ts">ExcludeUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/excludes.ts">ExcludeGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/devices/policy/exclude">client.zeroTrust.devices.policies.excludes.<a href="./src/resources/zero-trust/devices/policies/excludes.ts">update</a>([ ...body ]) -> ExcludeUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/devices/policy/exclude">client.zeroTrust.devices.policies.excludes.<a href="./src/resources/zero-trust/devices/policies/excludes.ts">list</a>({ ...params }) -> SplitTunnelExcludesSinglePage</code>
- <code title="get /accounts/{account_id}/devices/policy/{policy_id}/exclude">client.zeroTrust.devices.policies.excludes.<a href="./src/resources/zero-trust/devices/policies/excludes.ts">get</a>(policyId, { ...params }) -> ExcludeGetResponse | null</code>

#### FallbackDomains

Types:

- <code><a href="./src/resources/zero-trust/devices/policies/fallback-domains.ts">FallbackDomain</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/fallback-domains.ts">FallbackDomainPolicy</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/fallback-domains.ts">FallbackDomainUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/fallback-domains.ts">FallbackDomainGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/devices/policy/{policy_id}/fallback_domains">client.zeroTrust.devices.policies.fallbackDomains.<a href="./src/resources/zero-trust/devices/policies/fallback-domains.ts">update</a>(policyId, [ ...body ]) -> FallbackDomainUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/devices/policy/fallback_domains">client.zeroTrust.devices.policies.fallbackDomains.<a href="./src/resources/zero-trust/devices/policies/fallback-domains.ts">list</a>({ ...params }) -> FallbackDomainsSinglePage</code>
- <code title="get /accounts/{account_id}/devices/policy/{policy_id}/fallback_domains">client.zeroTrust.devices.policies.fallbackDomains.<a href="./src/resources/zero-trust/devices/policies/fallback-domains.ts">get</a>(policyId, { ...params }) -> FallbackDomainGetResponse | null</code>

#### Includes

Types:

- <code><a href="./src/resources/zero-trust/devices/policies/includes.ts">SplitTunnelInclude</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/includes.ts">IncludeUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/includes.ts">IncludeGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/devices/policy/include">client.zeroTrust.devices.policies.includes.<a href="./src/resources/zero-trust/devices/policies/includes.ts">update</a>([ ...body ]) -> IncludeUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/devices/policy/include">client.zeroTrust.devices.policies.includes.<a href="./src/resources/zero-trust/devices/policies/includes.ts">list</a>({ ...params }) -> SplitTunnelIncludesSinglePage</code>
- <code title="get /accounts/{account_id}/devices/policy/{policy_id}/include">client.zeroTrust.devices.policies.includes.<a href="./src/resources/zero-trust/devices/policies/includes.ts">get</a>(policyId, { ...params }) -> IncludeGetResponse | null</code>

### Posture

Types:

- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">CarbonblackInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">ClientCertificateInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">CrowdstrikeInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">DeviceInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">DeviceMatch</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">DevicePostureRule</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">DiskEncryptionInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">DomainJoinedInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">FileInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">FirewallInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">IntuneInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">KolideInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">OSVersionInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">SentineloneInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">SentineloneS2sInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">TaniumInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">UniqueClientIDInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">WorkspaceOneInput</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/posture.ts">PostureDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/posture">client.zeroTrust.devices.posture.<a href="./src/resources/zero-trust/devices/posture/posture.ts">create</a>({ ...params }) -> DevicePostureRule | null</code>
- <code title="put /accounts/{account_id}/devices/posture/{rule_id}">client.zeroTrust.devices.posture.<a href="./src/resources/zero-trust/devices/posture/posture.ts">update</a>(ruleId, { ...params }) -> DevicePostureRule | null</code>
- <code title="get /accounts/{account_id}/devices/posture">client.zeroTrust.devices.posture.<a href="./src/resources/zero-trust/devices/posture/posture.ts">list</a>({ ...params }) -> DevicePostureRulesSinglePage</code>
- <code title="delete /accounts/{account_id}/devices/posture/{rule_id}">client.zeroTrust.devices.posture.<a href="./src/resources/zero-trust/devices/posture/posture.ts">delete</a>(ruleId, { ...params }) -> PostureDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/devices/posture/{rule_id}">client.zeroTrust.devices.posture.<a href="./src/resources/zero-trust/devices/posture/posture.ts">get</a>(ruleId, { ...params }) -> DevicePostureRule | null</code>

#### Integrations

Types:

- <code><a href="./src/resources/zero-trust/devices/posture/integrations.ts">Integration</a></code>
- <code><a href="./src/resources/zero-trust/devices/posture/integrations.ts">IntegrationDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/posture/integration">client.zeroTrust.devices.posture.integrations.<a href="./src/resources/zero-trust/devices/posture/integrations.ts">create</a>({ ...params }) -> Integration | null</code>
- <code title="get /accounts/{account_id}/devices/posture/integration">client.zeroTrust.devices.posture.integrations.<a href="./src/resources/zero-trust/devices/posture/integrations.ts">list</a>({ ...params }) -> IntegrationsSinglePage</code>
- <code title="delete /accounts/{account_id}/devices/posture/integration/{integration_id}">client.zeroTrust.devices.posture.integrations.<a href="./src/resources/zero-trust/devices/posture/integrations.ts">delete</a>(integrationId, { ...params }) -> IntegrationDeleteResponse</code>
- <code title="patch /accounts/{account_id}/devices/posture/integration/{integration_id}">client.zeroTrust.devices.posture.integrations.<a href="./src/resources/zero-trust/devices/posture/integrations.ts">edit</a>(integrationId, { ...params }) -> Integration | null</code>
- <code title="get /accounts/{account_id}/devices/posture/integration/{integration_id}">client.zeroTrust.devices.posture.integrations.<a href="./src/resources/zero-trust/devices/posture/integrations.ts">get</a>(integrationId, { ...params }) -> Integration | null</code>

### Revoke

Types:

- <code><a href="./src/resources/zero-trust/devices/revoke.ts">RevokeCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/revoke">client.zeroTrust.devices.revoke.<a href="./src/resources/zero-trust/devices/revoke.ts">create</a>([ ...body ]) -> RevokeCreateResponse</code>

### Settings

Types:

- <code><a href="./src/resources/zero-trust/devices/settings.ts">DeviceSettings</a></code>

Methods:

- <code title="put /accounts/{account_id}/devices/settings">client.zeroTrust.devices.settings.<a href="./src/resources/zero-trust/devices/settings.ts">update</a>({ ...params }) -> DeviceSettings | null</code>
- <code title="get /accounts/{account_id}/devices/settings">client.zeroTrust.devices.settings.<a href="./src/resources/zero-trust/devices/settings.ts">list</a>({ ...params }) -> DeviceSettings | null</code>

### Unrevoke

Types:

- <code><a href="./src/resources/zero-trust/devices/unrevoke.ts">UnrevokeCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/unrevoke">client.zeroTrust.devices.unrevoke.<a href="./src/resources/zero-trust/devices/unrevoke.ts">create</a>([ ...body ]) -> UnrevokeCreateResponse</code>

### OverrideCodes

Types:

- <code><a href="./src/resources/zero-trust/devices/override-codes.ts">OverrideCodeListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/devices/{device_id}/override_codes">client.zeroTrust.devices.overrideCodes.<a href="./src/resources/zero-trust/devices/override-codes.ts">list</a>(deviceId, { ...params }) -> OverrideCodeListResponse | null</code>

## IdentityProviders

Types:

- <code><a href="./src/resources/zero-trust/identity-providers.ts">AzureAD</a></code>
- <code><a href="./src/resources/zero-trust/identity-providers.ts">GenericOAuthConfig</a></code>
- <code><a href="./src/resources/zero-trust/identity-providers.ts">IdentityProvider</a></code>
- <code><a href="./src/resources/zero-trust/identity-providers.ts">IdentityProviderSCIMConfig</a></code>
- <code><a href="./src/resources/zero-trust/identity-providers.ts">IdentityProviderType</a></code>
- <code><a href="./src/resources/zero-trust/identity-providers.ts">IdentityProviderListResponse</a></code>
- <code><a href="./src/resources/zero-trust/identity-providers.ts">IdentityProviderDeleteResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/identity_providers">client.zeroTrust.identityProviders.<a href="./src/resources/zero-trust/identity-providers.ts">create</a>({ ...params }) -> IdentityProvider</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/access/identity_providers/{identity_provider_id}">client.zeroTrust.identityProviders.<a href="./src/resources/zero-trust/identity-providers.ts">update</a>(identityProviderId, { ...params }) -> IdentityProvider</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/identity_providers">client.zeroTrust.identityProviders.<a href="./src/resources/zero-trust/identity-providers.ts">list</a>({ ...params }) -> IdentityProviderListResponsesSinglePage</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/identity_providers/{identity_provider_id}">client.zeroTrust.identityProviders.<a href="./src/resources/zero-trust/identity-providers.ts">delete</a>(identityProviderId, { ...params }) -> IdentityProviderDeleteResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/identity_providers/{identity_provider_id}">client.zeroTrust.identityProviders.<a href="./src/resources/zero-trust/identity-providers.ts">get</a>(identityProviderId, { ...params }) -> IdentityProvider</code>

## Organizations

Types:

- <code><a href="./src/resources/zero-trust/organizations.ts">LoginDesign</a></code>
- <code><a href="./src/resources/zero-trust/organizations.ts">Organization</a></code>
- <code><a href="./src/resources/zero-trust/organizations.ts">OrganizationRevokeUsersResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/organizations">client.zeroTrust.organizations.<a href="./src/resources/zero-trust/organizations.ts">create</a>({ ...params }) -> Organization</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/access/organizations">client.zeroTrust.organizations.<a href="./src/resources/zero-trust/organizations.ts">update</a>({ ...params }) -> Organization</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/organizations">client.zeroTrust.organizations.<a href="./src/resources/zero-trust/organizations.ts">list</a>({ ...params }) -> Organization</code>
- <code title="post /{account_or_zone}/{account_or_zone_id}/access/organizations/revoke_user">client.zeroTrust.organizations.<a href="./src/resources/zero-trust/organizations.ts">revokeUsers</a>({ ...params }) -> OrganizationRevokeUsersResponse</code>

## Seats

Types:

- <code><a href="./src/resources/zero-trust/seats.ts">Seat</a></code>
- <code><a href="./src/resources/zero-trust/seats.ts">SeatEditResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/access/seats">client.zeroTrust.seats.<a href="./src/resources/zero-trust/seats.ts">edit</a>([ ...body ]) -> SeatEditResponse | null</code>

## Access

Types:

- <code><a href="./src/resources/zero-trust/access/access.ts">AccessDevicePostureRule</a></code>
- <code><a href="./src/resources/zero-trust/access/access.ts">AccessRule</a></code>
- <code><a href="./src/resources/zero-trust/access/access.ts">AnyValidServiceTokenRule</a></code>
- <code><a href="./src/resources/zero-trust/access/access.ts">AuthenticationMethodRule</a></code>
- <code><a href="./src/resources/zero-trust/access/access.ts">AzureGroupRule</a></code>
- <code><a href="./src/resources/zero-trust/access/access.ts">CertificateRule</a></code>
- <code><a href="./src/resources/zero-trust/access/access.ts">CountryRule</a></code>
- <code><a href="./src/resources/zero-trust/access/access.ts">DomainRule</a></code>
- <code><a href="./src/resources/zero-trust/access/access.ts">EmailListRule</a></code>
- <code><a href="./src/resources/zero-trust/access/access.ts">EmailRule</a></code>
- <code><a href="./src/resources/zero-trust/access/access.ts">EveryoneRule</a></code>
- <code><a href="./src/resources/zero-trust/access/access.ts">ExternalEvaluationRule</a></code>
- <code><a href="./src/resources/zero-trust/access/access.ts">GitHubOrganizationRule</a></code>
- <code><a href="./src/resources/zero-trust/access/access.ts">GroupRule</a></code>
- <code><a href="./src/resources/zero-trust/access/access.ts">GSuiteGroupRule</a></code>
- <code><a href="./src/resources/zero-trust/access/access.ts">IPListRule</a></code>
- <code><a href="./src/resources/zero-trust/access/access.ts">IPRule</a></code>
- <code><a href="./src/resources/zero-trust/access/access.ts">OktaGroupRule</a></code>
- <code><a href="./src/resources/zero-trust/access/access.ts">SAMLGroupRule</a></code>
- <code><a href="./src/resources/zero-trust/access/access.ts">ServiceTokenRule</a></code>

### Applications

Types:

- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">AllowedHeaders</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">AllowedIdPs</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">AllowedMethods</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">AllowedOrigins</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">AppID</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">Application</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">ApplicationPolicy</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">ApplicationSCIMConfig</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">ApplicationType</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">CORSHeaders</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">Decision</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">OIDCSaaSApp</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">SaaSAppNameFormat</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">SaaSAppNameIDFormat</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">SaaSAppSource</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">SAMLSaaSApp</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">SCIMConfigAuthenticationHTTPBasic</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">SCIMConfigAuthenticationOAuthBearerToken</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">SCIMConfigAuthenticationOauth2</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">SCIMConfigMapping</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">SelfHostedDomains</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">ApplicationCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">ApplicationUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">ApplicationListResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">ApplicationDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">ApplicationGetResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">ApplicationRevokeTokensResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/apps">client.zeroTrust.access.applications.<a href="./src/resources/zero-trust/access/applications/applications.ts">create</a>({ ...params }) -> ApplicationCreateResponse</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}">client.zeroTrust.access.applications.<a href="./src/resources/zero-trust/access/applications/applications.ts">update</a>(appId, { ...params }) -> ApplicationUpdateResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps">client.zeroTrust.access.applications.<a href="./src/resources/zero-trust/access/applications/applications.ts">list</a>({ ...params }) -> ApplicationListResponsesSinglePage</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}">client.zeroTrust.access.applications.<a href="./src/resources/zero-trust/access/applications/applications.ts">delete</a>(appId, { ...params }) -> ApplicationDeleteResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}">client.zeroTrust.access.applications.<a href="./src/resources/zero-trust/access/applications/applications.ts">get</a>(appId, { ...params }) -> ApplicationGetResponse</code>
- <code title="post /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}/revoke_tokens">client.zeroTrust.access.applications.<a href="./src/resources/zero-trust/access/applications/applications.ts">revokeTokens</a>(appId, { ...params }) -> ApplicationRevokeTokensResponse | null</code>

#### CAs

Types:

- <code><a href="./src/resources/zero-trust/access/applications/cas.ts">CA</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/cas.ts">CACreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/cas.ts">CADeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/cas.ts">CAGetResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}/ca">client.zeroTrust.access.applications.cas.<a href="./src/resources/zero-trust/access/applications/cas.ts">create</a>(appId, { ...params }) -> CACreateResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps/ca">client.zeroTrust.access.applications.cas.<a href="./src/resources/zero-trust/access/applications/cas.ts">list</a>({ ...params }) -> CAsSinglePage</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}/ca">client.zeroTrust.access.applications.cas.<a href="./src/resources/zero-trust/access/applications/cas.ts">delete</a>(appId, { ...params }) -> CADeleteResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}/ca">client.zeroTrust.access.applications.cas.<a href="./src/resources/zero-trust/access/applications/cas.ts">get</a>(appId, { ...params }) -> CAGetResponse</code>

#### UserPolicyChecks

Types:

- <code><a href="./src/resources/zero-trust/access/applications/user-policy-checks.ts">UserPolicyCheckGeo</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/user-policy-checks.ts">UserPolicyCheckListResponse</a></code>

Methods:

- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}/user_policy_checks">client.zeroTrust.access.applications.userPolicyChecks.<a href="./src/resources/zero-trust/access/applications/user-policy-checks.ts">list</a>(appId, { ...params }) -> UserPolicyCheckListResponse</code>

#### Policies

Types:

- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">ApprovalGroup</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">Policy</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">PolicyDeleteResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}/policies">client.zeroTrust.access.applications.policies.<a href="./src/resources/zero-trust/access/applications/policies.ts">create</a>(appId, { ...params }) -> ApplicationPolicy</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}/policies/{policy_id}">client.zeroTrust.access.applications.policies.<a href="./src/resources/zero-trust/access/applications/policies.ts">update</a>(appId, policyId, { ...params }) -> ApplicationPolicy</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}/policies">client.zeroTrust.access.applications.policies.<a href="./src/resources/zero-trust/access/applications/policies.ts">list</a>(appId, { ...params }) -> ApplicationPoliciesSinglePage</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}/policies/{policy_id}">client.zeroTrust.access.applications.policies.<a href="./src/resources/zero-trust/access/applications/policies.ts">delete</a>(appId, policyId, { ...params }) -> PolicyDeleteResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}/policies/{policy_id}">client.zeroTrust.access.applications.policies.<a href="./src/resources/zero-trust/access/applications/policies.ts">get</a>(appId, policyId, { ...params }) -> ApplicationPolicy</code>

### Certificates

Types:

- <code><a href="./src/resources/zero-trust/access/certificates/certificates.ts">AssociatedHostnames</a></code>
- <code><a href="./src/resources/zero-trust/access/certificates/certificates.ts">Certificate</a></code>
- <code><a href="./src/resources/zero-trust/access/certificates/certificates.ts">CertificateDeleteResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/certificates">client.zeroTrust.access.certificates.<a href="./src/resources/zero-trust/access/certificates/certificates.ts">create</a>({ ...params }) -> Certificate</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/access/certificates/{certificate_id}">client.zeroTrust.access.certificates.<a href="./src/resources/zero-trust/access/certificates/certificates.ts">update</a>(certificateId, { ...params }) -> Certificate</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/certificates">client.zeroTrust.access.certificates.<a href="./src/resources/zero-trust/access/certificates/certificates.ts">list</a>({ ...params }) -> CertificatesSinglePage</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/certificates/{certificate_id}">client.zeroTrust.access.certificates.<a href="./src/resources/zero-trust/access/certificates/certificates.ts">delete</a>(certificateId, { ...params }) -> CertificateDeleteResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/certificates/{certificate_id}">client.zeroTrust.access.certificates.<a href="./src/resources/zero-trust/access/certificates/certificates.ts">get</a>(certificateId, { ...params }) -> Certificate</code>

#### Settings

Types:

- <code><a href="./src/resources/zero-trust/access/certificates/settings.ts">CertificateSettings</a></code>
- <code><a href="./src/resources/zero-trust/access/certificates/settings.ts">SettingUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/certificates/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="put /{account_or_zone}/{account_or_zone_id}/access/certificates/settings">client.zeroTrust.access.certificates.settings.<a href="./src/resources/zero-trust/access/certificates/settings.ts">update</a>({ ...params }) -> SettingUpdateResponse | null</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/certificates/settings">client.zeroTrust.access.certificates.settings.<a href="./src/resources/zero-trust/access/certificates/settings.ts">get</a>({ ...params }) -> SettingGetResponse | null</code>

### Groups

Types:

- <code><a href="./src/resources/zero-trust/access/groups.ts">ZeroTrustGroup</a></code>
- <code><a href="./src/resources/zero-trust/access/groups.ts">GroupDeleteResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/groups">client.zeroTrust.access.groups.<a href="./src/resources/zero-trust/access/groups.ts">create</a>({ ...params }) -> ZeroTrustGroup</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/access/groups/{group_id}">client.zeroTrust.access.groups.<a href="./src/resources/zero-trust/access/groups.ts">update</a>(groupId, { ...params }) -> ZeroTrustGroup</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/groups">client.zeroTrust.access.groups.<a href="./src/resources/zero-trust/access/groups.ts">list</a>({ ...params }) -> ZeroTrustGroupsSinglePage</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/groups/{group_id}">client.zeroTrust.access.groups.<a href="./src/resources/zero-trust/access/groups.ts">delete</a>(groupId, { ...params }) -> GroupDeleteResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/groups/{group_id}">client.zeroTrust.access.groups.<a href="./src/resources/zero-trust/access/groups.ts">get</a>(groupId, { ...params }) -> ZeroTrustGroup</code>

### ServiceTokens

Types:

- <code><a href="./src/resources/zero-trust/access/service-tokens.ts">ServiceToken</a></code>
- <code><a href="./src/resources/zero-trust/access/service-tokens.ts">ServiceTokenCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/service-tokens.ts">ServiceTokenRotateResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/service_tokens">client.zeroTrust.access.serviceTokens.<a href="./src/resources/zero-trust/access/service-tokens.ts">create</a>({ ...params }) -> ServiceTokenCreateResponse</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/access/service_tokens/{service_token_id}">client.zeroTrust.access.serviceTokens.<a href="./src/resources/zero-trust/access/service-tokens.ts">update</a>(serviceTokenId, { ...params }) -> ServiceToken</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/service_tokens">client.zeroTrust.access.serviceTokens.<a href="./src/resources/zero-trust/access/service-tokens.ts">list</a>({ ...params }) -> ServiceTokensSinglePage</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/service_tokens/{service_token_id}">client.zeroTrust.access.serviceTokens.<a href="./src/resources/zero-trust/access/service-tokens.ts">delete</a>(serviceTokenId, { ...params }) -> ServiceToken</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/service_tokens/{service_token_id}">client.zeroTrust.access.serviceTokens.<a href="./src/resources/zero-trust/access/service-tokens.ts">get</a>(serviceTokenId, { ...params }) -> ServiceToken</code>
- <code title="post /accounts/{account_id}/access/service_tokens/{service_token_id}/refresh">client.zeroTrust.access.serviceTokens.<a href="./src/resources/zero-trust/access/service-tokens.ts">refresh</a>(serviceTokenId, { ...params }) -> ServiceToken</code>
- <code title="post /accounts/{account_id}/access/service_tokens/{service_token_id}/rotate">client.zeroTrust.access.serviceTokens.<a href="./src/resources/zero-trust/access/service-tokens.ts">rotate</a>(serviceTokenId, { ...params }) -> ServiceTokenRotateResponse</code>

### Bookmarks

Types:

- <code><a href="./src/resources/zero-trust/access/bookmarks.ts">Bookmark</a></code>
- <code><a href="./src/resources/zero-trust/access/bookmarks.ts">BookmarkDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/access/bookmarks/{bookmark_id}">client.zeroTrust.access.bookmarks.<a href="./src/resources/zero-trust/access/bookmarks.ts">create</a>(bookmarkId, { ...params }) -> Bookmark</code>
- <code title="put /accounts/{account_id}/access/bookmarks/{bookmark_id}">client.zeroTrust.access.bookmarks.<a href="./src/resources/zero-trust/access/bookmarks.ts">update</a>(bookmarkId, { ...params }) -> Bookmark</code>
- <code title="get /accounts/{account_id}/access/bookmarks">client.zeroTrust.access.bookmarks.<a href="./src/resources/zero-trust/access/bookmarks.ts">list</a>({ ...params }) -> BookmarksSinglePage</code>
- <code title="delete /accounts/{account_id}/access/bookmarks/{bookmark_id}">client.zeroTrust.access.bookmarks.<a href="./src/resources/zero-trust/access/bookmarks.ts">delete</a>(bookmarkId, { ...params }) -> BookmarkDeleteResponse</code>
- <code title="get /accounts/{account_id}/access/bookmarks/{bookmark_id}">client.zeroTrust.access.bookmarks.<a href="./src/resources/zero-trust/access/bookmarks.ts">get</a>(bookmarkId, { ...params }) -> Bookmark</code>

### Keys

Types:

- <code><a href="./src/resources/zero-trust/access/keys.ts">KeyUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/keys.ts">KeyGetResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/keys.ts">KeyRotateResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/access/keys">client.zeroTrust.access.keys.<a href="./src/resources/zero-trust/access/keys.ts">update</a>({ ...params }) -> KeyUpdateResponse</code>
- <code title="get /accounts/{account_id}/access/keys">client.zeroTrust.access.keys.<a href="./src/resources/zero-trust/access/keys.ts">get</a>({ ...params }) -> KeyGetResponse</code>
- <code title="post /accounts/{account_id}/access/keys/rotate">client.zeroTrust.access.keys.<a href="./src/resources/zero-trust/access/keys.ts">rotate</a>({ ...params }) -> KeyRotateResponse</code>

### Logs

#### AccessRequests

Types:

- <code><a href="./src/resources/zero-trust/access/logs/access-requests.ts">AccessRequests</a></code>
- <code><a href="./src/resources/zero-trust/access/logs/access-requests.ts">AccessRequestListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/access/logs/access_requests">client.zeroTrust.access.logs.accessRequests.<a href="./src/resources/zero-trust/access/logs/access-requests.ts">list</a>({ ...params }) -> AccessRequestListResponse</code>

### Users

Types:

- <code><a href="./src/resources/zero-trust/access/users/users.ts">AccessUser</a></code>

Methods:

- <code title="get /accounts/{account_id}/access/users">client.zeroTrust.access.users.<a href="./src/resources/zero-trust/access/users/users.ts">list</a>({ ...params }) -> AccessUsersSinglePage</code>

#### ActiveSessions

Types:

- <code><a href="./src/resources/zero-trust/access/users/active-sessions.ts">ActiveSessionListResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/users/active-sessions.ts">ActiveSessionGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/access/users/{user_id}/active_sessions">client.zeroTrust.access.users.activeSessions.<a href="./src/resources/zero-trust/access/users/active-sessions.ts">list</a>(userId, { ...params }) -> ActiveSessionListResponsesSinglePage</code>
- <code title="get /accounts/{account_id}/access/users/{user_id}/active_sessions/{nonce}">client.zeroTrust.access.users.activeSessions.<a href="./src/resources/zero-trust/access/users/active-sessions.ts">get</a>(userId, nonce, { ...params }) -> ActiveSessionGetResponse</code>

#### LastSeenIdentity

Types:

- <code><a href="./src/resources/zero-trust/access/users/last-seen-identity.ts">Identity</a></code>

Methods:

- <code title="get /accounts/{account_id}/access/users/{user_id}/last_seen_identity">client.zeroTrust.access.users.lastSeenIdentity.<a href="./src/resources/zero-trust/access/users/last-seen-identity.ts">get</a>(userId, { ...params }) -> Identity</code>

#### FailedLogins

Types:

- <code><a href="./src/resources/zero-trust/access/users/failed-logins.ts">FailedLoginListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/access/users/{user_id}/failed_logins">client.zeroTrust.access.users.failedLogins.<a href="./src/resources/zero-trust/access/users/failed-logins.ts">list</a>(userId, { ...params }) -> FailedLoginListResponsesSinglePage</code>

### CustomPages

Types:

- <code><a href="./src/resources/zero-trust/access/custom-pages.ts">CustomPage</a></code>
- <code><a href="./src/resources/zero-trust/access/custom-pages.ts">CustomPageWithoutHTML</a></code>
- <code><a href="./src/resources/zero-trust/access/custom-pages.ts">CustomPageDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/access/custom_pages">client.zeroTrust.access.customPages.<a href="./src/resources/zero-trust/access/custom-pages.ts">create</a>({ ...params }) -> CustomPageWithoutHTML</code>
- <code title="put /accounts/{account_id}/access/custom_pages/{custom_page_id}">client.zeroTrust.access.customPages.<a href="./src/resources/zero-trust/access/custom-pages.ts">update</a>(customPageId, { ...params }) -> CustomPageWithoutHTML</code>
- <code title="get /accounts/{account_id}/access/custom_pages">client.zeroTrust.access.customPages.<a href="./src/resources/zero-trust/access/custom-pages.ts">list</a>({ ...params }) -> CustomPageWithoutHTMLsSinglePage</code>
- <code title="delete /accounts/{account_id}/access/custom_pages/{custom_page_id}">client.zeroTrust.access.customPages.<a href="./src/resources/zero-trust/access/custom-pages.ts">delete</a>(customPageId, { ...params }) -> CustomPageDeleteResponse</code>
- <code title="get /accounts/{account_id}/access/custom_pages/{custom_page_id}">client.zeroTrust.access.customPages.<a href="./src/resources/zero-trust/access/custom-pages.ts">get</a>(customPageId, { ...params }) -> CustomPage</code>

### Tags

Types:

- <code><a href="./src/resources/zero-trust/access/tags.ts">Tag</a></code>
- <code><a href="./src/resources/zero-trust/access/tags.ts">TagDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/access/tags">client.zeroTrust.access.tags.<a href="./src/resources/zero-trust/access/tags.ts">create</a>({ ...params }) -> Tag</code>
- <code title="put /accounts/{account_id}/access/tags/{tag_name}">client.zeroTrust.access.tags.<a href="./src/resources/zero-trust/access/tags.ts">update</a>(tagName, { ...params }) -> Tag</code>
- <code title="get /accounts/{account_id}/access/tags">client.zeroTrust.access.tags.<a href="./src/resources/zero-trust/access/tags.ts">list</a>({ ...params }) -> TagsSinglePage</code>
- <code title="delete /accounts/{account_id}/access/tags/{tag_name}">client.zeroTrust.access.tags.<a href="./src/resources/zero-trust/access/tags.ts">delete</a>(tagName, { ...params }) -> TagDeleteResponse</code>
- <code title="get /accounts/{account_id}/access/tags/{tag_name}">client.zeroTrust.access.tags.<a href="./src/resources/zero-trust/access/tags.ts">get</a>(tagName, { ...params }) -> Tag</code>

### Policies

Types:

- <code><a href="./src/resources/zero-trust/access/policies.ts">PolicyCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/policies.ts">PolicyUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/policies.ts">PolicyListResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/policies.ts">PolicyDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/policies.ts">PolicyGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/access/policies">client.zeroTrust.access.policies.<a href="./src/resources/zero-trust/access/policies.ts">create</a>({ ...params }) -> PolicyCreateResponse</code>
- <code title="put /accounts/{account_id}/access/policies/{policy_id}">client.zeroTrust.access.policies.<a href="./src/resources/zero-trust/access/policies.ts">update</a>(policyId, { ...params }) -> PolicyUpdateResponse</code>
- <code title="get /accounts/{account_id}/access/policies">client.zeroTrust.access.policies.<a href="./src/resources/zero-trust/access/policies.ts">list</a>({ ...params }) -> PolicyListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/access/policies/{policy_id}">client.zeroTrust.access.policies.<a href="./src/resources/zero-trust/access/policies.ts">delete</a>(policyId, { ...params }) -> PolicyDeleteResponse</code>
- <code title="get /accounts/{account_id}/access/policies/{policy_id}">client.zeroTrust.access.policies.<a href="./src/resources/zero-trust/access/policies.ts">get</a>(policyId, { ...params }) -> PolicyGetResponse</code>

## DEX

Types:

- <code><a href="./src/resources/zero-trust/dex/dex.ts">DeviceExperienceMonitor</a></code>
- <code><a href="./src/resources/zero-trust/dex/dex.ts">NetworkPath</a></code>
- <code><a href="./src/resources/zero-trust/dex/dex.ts">NetworkPathResponse</a></code>
- <code><a href="./src/resources/zero-trust/dex/dex.ts">Percentiles</a></code>

### Colos

Types:

- <code><a href="./src/resources/zero-trust/dex/colos.ts">ColoListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/colos">client.zeroTrust.dex.colos.<a href="./src/resources/zero-trust/dex/colos.ts">list</a>({ ...params }) -> ColoListResponsesSinglePage</code>

### FleetStatus

Types:

- <code><a href="./src/resources/zero-trust/dex/fleet-status/fleet-status.ts">LiveStat</a></code>
- <code><a href="./src/resources/zero-trust/dex/fleet-status/fleet-status.ts">FleetStatusLiveResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/fleet-status/live">client.zeroTrust.dex.fleetStatus.<a href="./src/resources/zero-trust/dex/fleet-status/fleet-status.ts">live</a>({ ...params }) -> FleetStatusLiveResponse</code>
- <code title="get /accounts/{account_id}/dex/fleet-status/over-time">client.zeroTrust.dex.fleetStatus.<a href="./src/resources/zero-trust/dex/fleet-status/fleet-status.ts">overTime</a>({ ...params }) -> void</code>

#### Devices

Types:

- <code><a href="./src/resources/zero-trust/dex/fleet-status/devices.ts">DeviceListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/fleet-status/devices">client.zeroTrust.dex.fleetStatus.devices.<a href="./src/resources/zero-trust/dex/fleet-status/devices.ts">list</a>({ ...params }) -> DeviceListResponsesV4PagePaginationArray</code>

### HTTPTests

Types:

- <code><a href="./src/resources/zero-trust/dex/http-tests/http-tests.ts">HTTPDetails</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/http-tests/{test_id}">client.zeroTrust.dex.httpTests.<a href="./src/resources/zero-trust/dex/http-tests/http-tests.ts">get</a>(testId, { ...params }) -> HTTPDetails</code>

#### Percentiles

Types:

- <code><a href="./src/resources/zero-trust/dex/http-tests/percentiles.ts">HTTPDetailsPercentiles</a></code>
- <code><a href="./src/resources/zero-trust/dex/http-tests/percentiles.ts">TestStatOverTime</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/http-tests/{test_id}/percentiles">client.zeroTrust.dex.httpTests.percentiles.<a href="./src/resources/zero-trust/dex/http-tests/percentiles.ts">get</a>(testId, { ...params }) -> HTTPDetailsPercentiles</code>

### Tests

Types:

- <code><a href="./src/resources/zero-trust/dex/tests/tests.ts">AggregateTimePeriod</a></code>
- <code><a href="./src/resources/zero-trust/dex/tests/tests.ts">Tests</a></code>
- <code><a href="./src/resources/zero-trust/dex/tests/tests.ts">TestListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/tests">client.zeroTrust.dex.tests.<a href="./src/resources/zero-trust/dex/tests/tests.ts">list</a>({ ...params }) -> TestListResponsesV4PagePagination</code>

#### UniqueDevices

Types:

- <code><a href="./src/resources/zero-trust/dex/tests/unique-devices.ts">UniqueDevices</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/tests/unique-devices">client.zeroTrust.dex.tests.uniqueDevices.<a href="./src/resources/zero-trust/dex/tests/unique-devices.ts">list</a>({ ...params }) -> UniqueDevices</code>

### TracerouteTestResults

#### NetworkPath

Types:

- <code><a href="./src/resources/zero-trust/dex/traceroute-test-results/network-path.ts">NetworkPathGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/traceroute-test-results/{test_result_id}/network-path">client.zeroTrust.dex.tracerouteTestResults.networkPath.<a href="./src/resources/zero-trust/dex/traceroute-test-results/network-path.ts">get</a>(testResultId, { ...params }) -> NetworkPathGetResponse</code>

### TracerouteTests

Types:

- <code><a href="./src/resources/zero-trust/dex/traceroute-tests.ts">Traceroute</a></code>
- <code><a href="./src/resources/zero-trust/dex/traceroute-tests.ts">TracerouteTestPercentilesResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/traceroute-tests/{test_id}">client.zeroTrust.dex.tracerouteTests.<a href="./src/resources/zero-trust/dex/traceroute-tests.ts">get</a>(testId, { ...params }) -> Traceroute</code>
- <code title="get /accounts/{account_id}/dex/traceroute-tests/{test_id}/network-path">client.zeroTrust.dex.tracerouteTests.<a href="./src/resources/zero-trust/dex/traceroute-tests.ts">networkPath</a>(testId, { ...params }) -> NetworkPathResponse</code>
- <code title="get /accounts/{account_id}/dex/traceroute-tests/{test_id}/percentiles">client.zeroTrust.dex.tracerouteTests.<a href="./src/resources/zero-trust/dex/traceroute-tests.ts">percentiles</a>(testId, { ...params }) -> TracerouteTestPercentilesResponse</code>

## Tunnels

Types:

- <code><a href="./src/resources/zero-trust/tunnels/tunnels.ts">Connection</a></code>
- <code><a href="./src/resources/zero-trust/tunnels/tunnels.ts">TunnelCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/tunnels/tunnels.ts">TunnelListResponse</a></code>
- <code><a href="./src/resources/zero-trust/tunnels/tunnels.ts">TunnelDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/tunnels/tunnels.ts">TunnelEditResponse</a></code>
- <code><a href="./src/resources/zero-trust/tunnels/tunnels.ts">TunnelGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/tunnels">client.zeroTrust.tunnels.<a href="./src/resources/zero-trust/tunnels/tunnels.ts">create</a>({ ...params }) -> TunnelCreateResponse</code>
- <code title="get /accounts/{account_id}/tunnels">client.zeroTrust.tunnels.<a href="./src/resources/zero-trust/tunnels/tunnels.ts">list</a>({ ...params }) -> TunnelListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/tunnels/{tunnel_id}">client.zeroTrust.tunnels.<a href="./src/resources/zero-trust/tunnels/tunnels.ts">delete</a>(tunnelId, { ...params }) -> TunnelDeleteResponse</code>
- <code title="patch /accounts/{account_id}/cfd_tunnel/{tunnel_id}">client.zeroTrust.tunnels.<a href="./src/resources/zero-trust/tunnels/tunnels.ts">edit</a>(tunnelId, { ...params }) -> TunnelEditResponse</code>
- <code title="get /accounts/{account_id}/tunnels/{tunnel_id}">client.zeroTrust.tunnels.<a href="./src/resources/zero-trust/tunnels/tunnels.ts">get</a>(tunnelId, { ...params }) -> TunnelGetResponse</code>

### Configurations

Types:

- <code><a href="./src/resources/zero-trust/tunnels/configurations.ts">ConfigurationUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/tunnels/configurations.ts">ConfigurationGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/cfd_tunnel/{tunnel_id}/configurations">client.zeroTrust.tunnels.configurations.<a href="./src/resources/zero-trust/tunnels/configurations.ts">update</a>(tunnelId, { ...params }) -> ConfigurationUpdateResponse</code>
- <code title="get /accounts/{account_id}/cfd_tunnel/{tunnel_id}/configurations">client.zeroTrust.tunnels.configurations.<a href="./src/resources/zero-trust/tunnels/configurations.ts">get</a>(tunnelId, { ...params }) -> ConfigurationGetResponse</code>

### Connections

Types:

- <code><a href="./src/resources/zero-trust/tunnels/connections.ts">Client</a></code>
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

- <code title="get /accounts/{account_id}/cfd_tunnel/{tunnel_id}/connectors/{connector_id}">client.zeroTrust.tunnels.connectors.<a href="./src/resources/zero-trust/tunnels/connectors.ts">get</a>(tunnelId, connectorId, { ...params }) -> Client</code>

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

- <code><a href="./src/resources/zero-trust/dlp/datasets/datasets.ts">Dataset</a></code>
- <code><a href="./src/resources/zero-trust/dlp/datasets/datasets.ts">DatasetArray</a></code>
- <code><a href="./src/resources/zero-trust/dlp/datasets/datasets.ts">DatasetCreation</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/datasets">client.zeroTrust.dlp.datasets.<a href="./src/resources/zero-trust/dlp/datasets/datasets.ts">create</a>({ ...params }) -> DatasetCreation</code>
- <code title="put /accounts/{account_id}/dlp/datasets/{dataset_id}">client.zeroTrust.dlp.datasets.<a href="./src/resources/zero-trust/dlp/datasets/datasets.ts">update</a>(datasetId, { ...params }) -> Dataset</code>
- <code title="get /accounts/{account_id}/dlp/datasets">client.zeroTrust.dlp.datasets.<a href="./src/resources/zero-trust/dlp/datasets/datasets.ts">list</a>({ ...params }) -> DatasetsSinglePage</code>
- <code title="delete /accounts/{account_id}/dlp/datasets/{dataset_id}">client.zeroTrust.dlp.datasets.<a href="./src/resources/zero-trust/dlp/datasets/datasets.ts">delete</a>(datasetId, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/dlp/datasets/{dataset_id}">client.zeroTrust.dlp.datasets.<a href="./src/resources/zero-trust/dlp/datasets/datasets.ts">get</a>(datasetId, { ...params }) -> Dataset</code>

#### Upload

Types:

- <code><a href="./src/resources/zero-trust/dlp/datasets/upload.ts">NewVersion</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/datasets/{dataset_id}/upload">client.zeroTrust.dlp.datasets.upload.<a href="./src/resources/zero-trust/dlp/datasets/upload.ts">create</a>(datasetId, { ...params }) -> NewVersion</code>
- <code title="post /accounts/{account_id}/dlp/datasets/{dataset_id}/upload/{version}">client.zeroTrust.dlp.datasets.upload.<a href="./src/resources/zero-trust/dlp/datasets/upload.ts">edit</a>(datasetId, version, { ...params }) -> Dataset</code>

### Patterns

Methods:

- <code title="post /accounts/{account_id}/dlp/patterns/validate">client.zeroTrust.dlp.patterns.<a href="./src/resources/zero-trust/dlp/patterns.ts">validate</a>({ ...params }) -> OwnershipValidation | null</code>

### PayloadLogs

Types:

- <code><a href="./src/resources/zero-trust/dlp/payload-logs.ts">PayloadLogUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/payload-logs.ts">PayloadLogGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/dlp/payload_log">client.zeroTrust.dlp.payloadLogs.<a href="./src/resources/zero-trust/dlp/payload-logs.ts">update</a>({ ...params }) -> PayloadLogUpdateResponse</code>
- <code title="get /accounts/{account_id}/dlp/payload_log">client.zeroTrust.dlp.payloadLogs.<a href="./src/resources/zero-trust/dlp/payload-logs.ts">get</a>({ ...params }) -> PayloadLogGetResponse</code>

### Profiles

Types:

- <code><a href="./src/resources/zero-trust/dlp/profiles/profiles.ts">ContextAwareness</a></code>
- <code><a href="./src/resources/zero-trust/dlp/profiles/profiles.ts">Profile</a></code>
- <code><a href="./src/resources/zero-trust/dlp/profiles/profiles.ts">SkipConfiguration</a></code>
- <code><a href="./src/resources/zero-trust/dlp/profiles/profiles.ts">ProfileGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dlp/profiles">client.zeroTrust.dlp.profiles.<a href="./src/resources/zero-trust/dlp/profiles/profiles.ts">list</a>({ ...params }) -> ProfilesSinglePage</code>
- <code title="get /accounts/{account_id}/dlp/profiles/{profile_id}">client.zeroTrust.dlp.profiles.<a href="./src/resources/zero-trust/dlp/profiles/profiles.ts">get</a>(profileId, { ...params }) -> ProfileGetResponse</code>

#### Custom

Types:

- <code><a href="./src/resources/zero-trust/dlp/profiles/custom.ts">CustomProfile</a></code>
- <code><a href="./src/resources/zero-trust/dlp/profiles/custom.ts">Pattern</a></code>
- <code><a href="./src/resources/zero-trust/dlp/profiles/custom.ts">CustomCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/profiles/custom.ts">CustomDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/profiles/custom">client.zeroTrust.dlp.profiles.custom.<a href="./src/resources/zero-trust/dlp/profiles/custom.ts">create</a>({ ...params }) -> CustomCreateResponse | null</code>
- <code title="put /accounts/{account_id}/dlp/profiles/custom/{profile_id}">client.zeroTrust.dlp.profiles.custom.<a href="./src/resources/zero-trust/dlp/profiles/custom.ts">update</a>(profileId, { ...params }) -> CustomProfile</code>
- <code title="delete /accounts/{account_id}/dlp/profiles/custom/{profile_id}">client.zeroTrust.dlp.profiles.custom.<a href="./src/resources/zero-trust/dlp/profiles/custom.ts">delete</a>(profileId, { ...params }) -> CustomDeleteResponse</code>
- <code title="get /accounts/{account_id}/dlp/profiles/custom/{profile_id}">client.zeroTrust.dlp.profiles.custom.<a href="./src/resources/zero-trust/dlp/profiles/custom.ts">get</a>(profileId, { ...params }) -> CustomProfile</code>

#### Predefined

Types:

- <code><a href="./src/resources/zero-trust/dlp/profiles/predefined.ts">PredefinedProfile</a></code>

Methods:

- <code title="put /accounts/{account_id}/dlp/profiles/predefined/{profile_id}">client.zeroTrust.dlp.profiles.predefined.<a href="./src/resources/zero-trust/dlp/profiles/predefined.ts">update</a>(profileId, { ...params }) -> PredefinedProfile</code>
- <code title="get /accounts/{account_id}/dlp/profiles/predefined/{profile_id}">client.zeroTrust.dlp.profiles.predefined.<a href="./src/resources/zero-trust/dlp/profiles/predefined.ts">get</a>(profileId, { ...params }) -> PredefinedProfile</code>

## Gateway

Types:

- <code><a href="./src/resources/zero-trust/gateway/gateway.ts">GatewayCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/gateway.ts">GatewayListResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/gateway">client.zeroTrust.gateway.<a href="./src/resources/zero-trust/gateway/gateway.ts">create</a>({ ...params }) -> GatewayCreateResponse</code>
- <code title="get /accounts/{account_id}/gateway">client.zeroTrust.gateway.<a href="./src/resources/zero-trust/gateway/gateway.ts">list</a>({ ...params }) -> GatewayListResponse</code>

### AuditSSHSettings

Types:

- <code><a href="./src/resources/zero-trust/gateway/audit-ssh-settings.ts">GatewaySettings</a></code>

Methods:

- <code title="put /accounts/{account_id}/gateway/audit_ssh_settings">client.zeroTrust.gateway.auditSSHSettings.<a href="./src/resources/zero-trust/gateway/audit-ssh-settings.ts">update</a>({ ...params }) -> GatewaySettings</code>
- <code title="get /accounts/{account_id}/gateway/audit_ssh_settings">client.zeroTrust.gateway.auditSSHSettings.<a href="./src/resources/zero-trust/gateway/audit-ssh-settings.ts">get</a>({ ...params }) -> GatewaySettings</code>

### Categories

Types:

- <code><a href="./src/resources/zero-trust/gateway/categories.ts">Category</a></code>

Methods:

- <code title="get /accounts/{account_id}/gateway/categories">client.zeroTrust.gateway.categories.<a href="./src/resources/zero-trust/gateway/categories.ts">list</a>({ ...params }) -> CategoriesSinglePage</code>

### AppTypes

Types:

- <code><a href="./src/resources/zero-trust/gateway/app-types.ts">AppType</a></code>

Methods:

- <code title="get /accounts/{account_id}/gateway/app_types">client.zeroTrust.gateway.appTypes.<a href="./src/resources/zero-trust/gateway/app-types.ts">list</a>({ ...params }) -> AppTypesSinglePage</code>

### Configurations

Types:

- <code><a href="./src/resources/zero-trust/gateway/configurations.ts">ActivityLogSettings</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations.ts">AntiVirusSettings</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations.ts">BlockPageSettings</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations.ts">BodyScanningSettings</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations.ts">BrowserIsolationSettings</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations.ts">CustomCertificateSettings</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations.ts">ExtendedEmailMatching</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations.ts">FipsSettings</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations.ts">GatewayConfigurationSettings</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations.ts">NotificationSettings</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations.ts">ProtocolDetection</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations.ts">TLSSettings</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations.ts">ConfigurationUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations.ts">ConfigurationEditResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations.ts">ConfigurationGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/gateway/configuration">client.zeroTrust.gateway.configurations.<a href="./src/resources/zero-trust/gateway/configurations.ts">update</a>({ ...params }) -> ConfigurationUpdateResponse</code>
- <code title="patch /accounts/{account_id}/gateway/configuration">client.zeroTrust.gateway.configurations.<a href="./src/resources/zero-trust/gateway/configurations.ts">edit</a>({ ...params }) -> ConfigurationEditResponse</code>
- <code title="get /accounts/{account_id}/gateway/configuration">client.zeroTrust.gateway.configurations.<a href="./src/resources/zero-trust/gateway/configurations.ts">get</a>({ ...params }) -> ConfigurationGetResponse</code>

### Lists

Types:

- <code><a href="./src/resources/zero-trust/gateway/lists/lists.ts">GatewayItem</a></code>
- <code><a href="./src/resources/zero-trust/gateway/lists/lists.ts">GatewayList</a></code>
- <code><a href="./src/resources/zero-trust/gateway/lists/lists.ts">ListCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/lists/lists.ts">ListDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/gateway/lists">client.zeroTrust.gateway.lists.<a href="./src/resources/zero-trust/gateway/lists/lists.ts">create</a>({ ...params }) -> ListCreateResponse</code>
- <code title="put /accounts/{account_id}/gateway/lists/{list_id}">client.zeroTrust.gateway.lists.<a href="./src/resources/zero-trust/gateway/lists/lists.ts">update</a>(listId, { ...params }) -> GatewayList</code>
- <code title="get /accounts/{account_id}/gateway/lists">client.zeroTrust.gateway.lists.<a href="./src/resources/zero-trust/gateway/lists/lists.ts">list</a>({ ...params }) -> GatewayListsSinglePage</code>
- <code title="delete /accounts/{account_id}/gateway/lists/{list_id}">client.zeroTrust.gateway.lists.<a href="./src/resources/zero-trust/gateway/lists/lists.ts">delete</a>(listId, { ...params }) -> ListDeleteResponse</code>
- <code title="patch /accounts/{account_id}/gateway/lists/{list_id}">client.zeroTrust.gateway.lists.<a href="./src/resources/zero-trust/gateway/lists/lists.ts">edit</a>(listId, { ...params }) -> GatewayList</code>
- <code title="get /accounts/{account_id}/gateway/lists/{list_id}">client.zeroTrust.gateway.lists.<a href="./src/resources/zero-trust/gateway/lists/lists.ts">get</a>(listId, { ...params }) -> GatewayList</code>

#### Items

Types:

- <code><a href="./src/resources/zero-trust/gateway/lists/items.ts">ItemListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/gateway/lists/{list_id}/items">client.zeroTrust.gateway.lists.items.<a href="./src/resources/zero-trust/gateway/lists/items.ts">list</a>(listId, { ...params }) -> ItemListResponsesSinglePage</code>

### Locations

Types:

- <code><a href="./src/resources/zero-trust/gateway/locations.ts">DOHEndpoint</a></code>
- <code><a href="./src/resources/zero-trust/gateway/locations.ts">DOTEndpoint</a></code>
- <code><a href="./src/resources/zero-trust/gateway/locations.ts">Endpoint</a></code>
- <code><a href="./src/resources/zero-trust/gateway/locations.ts">IPNetwork</a></code>
- <code><a href="./src/resources/zero-trust/gateway/locations.ts">IPV4Endpoint</a></code>
- <code><a href="./src/resources/zero-trust/gateway/locations.ts">IPV6Endpoint</a></code>
- <code><a href="./src/resources/zero-trust/gateway/locations.ts">IPV6Network</a></code>
- <code><a href="./src/resources/zero-trust/gateway/locations.ts">Location</a></code>
- <code><a href="./src/resources/zero-trust/gateway/locations.ts">LocationDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/gateway/locations">client.zeroTrust.gateway.locations.<a href="./src/resources/zero-trust/gateway/locations.ts">create</a>({ ...params }) -> Location</code>
- <code title="put /accounts/{account_id}/gateway/locations/{location_id}">client.zeroTrust.gateway.locations.<a href="./src/resources/zero-trust/gateway/locations.ts">update</a>(locationId, { ...params }) -> Location</code>
- <code title="get /accounts/{account_id}/gateway/locations">client.zeroTrust.gateway.locations.<a href="./src/resources/zero-trust/gateway/locations.ts">list</a>({ ...params }) -> LocationsSinglePage</code>
- <code title="delete /accounts/{account_id}/gateway/locations/{location_id}">client.zeroTrust.gateway.locations.<a href="./src/resources/zero-trust/gateway/locations.ts">delete</a>(locationId, { ...params }) -> LocationDeleteResponse</code>
- <code title="get /accounts/{account_id}/gateway/locations/{location_id}">client.zeroTrust.gateway.locations.<a href="./src/resources/zero-trust/gateway/locations.ts">get</a>(locationId, { ...params }) -> Location</code>

### Logging

Types:

- <code><a href="./src/resources/zero-trust/gateway/logging.ts">LoggingSetting</a></code>

Methods:

- <code title="put /accounts/{account_id}/gateway/logging">client.zeroTrust.gateway.logging.<a href="./src/resources/zero-trust/gateway/logging.ts">update</a>({ ...params }) -> LoggingSetting</code>
- <code title="get /accounts/{account_id}/gateway/logging">client.zeroTrust.gateway.logging.<a href="./src/resources/zero-trust/gateway/logging.ts">get</a>({ ...params }) -> LoggingSetting</code>

### ProxyEndpoints

Types:

- <code><a href="./src/resources/zero-trust/gateway/proxy-endpoints.ts">GatewayIPs</a></code>
- <code><a href="./src/resources/zero-trust/gateway/proxy-endpoints.ts">ProxyEndpoint</a></code>
- <code><a href="./src/resources/zero-trust/gateway/proxy-endpoints.ts">ProxyEndpointDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/proxy-endpoints.ts">ProxyEndpointGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/gateway/proxy_endpoints">client.zeroTrust.gateway.proxyEndpoints.<a href="./src/resources/zero-trust/gateway/proxy-endpoints.ts">create</a>({ ...params }) -> ProxyEndpoint</code>
- <code title="get /accounts/{account_id}/gateway/proxy_endpoints">client.zeroTrust.gateway.proxyEndpoints.<a href="./src/resources/zero-trust/gateway/proxy-endpoints.ts">list</a>({ ...params }) -> ProxyEndpoint</code>
- <code title="delete /accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}">client.zeroTrust.gateway.proxyEndpoints.<a href="./src/resources/zero-trust/gateway/proxy-endpoints.ts">delete</a>(proxyEndpointId, { ...params }) -> ProxyEndpointDeleteResponse</code>
- <code title="patch /accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}">client.zeroTrust.gateway.proxyEndpoints.<a href="./src/resources/zero-trust/gateway/proxy-endpoints.ts">edit</a>(proxyEndpointId, { ...params }) -> ProxyEndpoint</code>
- <code title="get /accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}">client.zeroTrust.gateway.proxyEndpoints.<a href="./src/resources/zero-trust/gateway/proxy-endpoints.ts">get</a>(proxyEndpointId, { ...params }) -> ProxyEndpointGetResponse | null</code>

### Rules

Types:

- <code><a href="./src/resources/zero-trust/gateway/rules.ts">DNSResolverSettingsV4</a></code>
- <code><a href="./src/resources/zero-trust/gateway/rules.ts">DNSResolverSettingsV6</a></code>
- <code><a href="./src/resources/zero-trust/gateway/rules.ts">GatewayFilter</a></code>
- <code><a href="./src/resources/zero-trust/gateway/rules.ts">GatewayRule</a></code>
- <code><a href="./src/resources/zero-trust/gateway/rules.ts">RuleSetting</a></code>
- <code><a href="./src/resources/zero-trust/gateway/rules.ts">Schedule</a></code>
- <code><a href="./src/resources/zero-trust/gateway/rules.ts">RuleDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/gateway/rules">client.zeroTrust.gateway.rules.<a href="./src/resources/zero-trust/gateway/rules.ts">create</a>({ ...params }) -> GatewayRule</code>
- <code title="put /accounts/{account_id}/gateway/rules/{rule_id}">client.zeroTrust.gateway.rules.<a href="./src/resources/zero-trust/gateway/rules.ts">update</a>(ruleId, { ...params }) -> GatewayRule</code>
- <code title="get /accounts/{account_id}/gateway/rules">client.zeroTrust.gateway.rules.<a href="./src/resources/zero-trust/gateway/rules.ts">list</a>({ ...params }) -> GatewayRulesSinglePage</code>
- <code title="delete /accounts/{account_id}/gateway/rules/{rule_id}">client.zeroTrust.gateway.rules.<a href="./src/resources/zero-trust/gateway/rules.ts">delete</a>(ruleId, { ...params }) -> RuleDeleteResponse</code>
- <code title="get /accounts/{account_id}/gateway/rules/{rule_id}">client.zeroTrust.gateway.rules.<a href="./src/resources/zero-trust/gateway/rules.ts">get</a>(ruleId, { ...params }) -> GatewayRule</code>

### Certificates

Types:

- <code><a href="./src/resources/zero-trust/gateway/certificates.ts">CertificateCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/certificates.ts">CertificateListResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/certificates.ts">CertificateDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/certificates.ts">CertificateActivateResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/certificates.ts">CertificateDeactivateResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/certificates.ts">CertificateGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/gateway/certificates">client.zeroTrust.gateway.certificates.<a href="./src/resources/zero-trust/gateway/certificates.ts">create</a>({ ...params }) -> CertificateCreateResponse</code>
- <code title="get /accounts/{account_id}/gateway/certificates">client.zeroTrust.gateway.certificates.<a href="./src/resources/zero-trust/gateway/certificates.ts">list</a>({ ...params }) -> CertificateListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/gateway/certificates/{certificate_id}">client.zeroTrust.gateway.certificates.<a href="./src/resources/zero-trust/gateway/certificates.ts">delete</a>(certificateId, { ...params }) -> CertificateDeleteResponse</code>
- <code title="post /accounts/{account_id}/gateway/certificates/{certificate_id}/activate">client.zeroTrust.gateway.certificates.<a href="./src/resources/zero-trust/gateway/certificates.ts">activate</a>(certificateId, { ...params }) -> CertificateActivateResponse</code>
- <code title="post /accounts/{account_id}/gateway/certificates/{certificate_id}/deactivate">client.zeroTrust.gateway.certificates.<a href="./src/resources/zero-trust/gateway/certificates.ts">deactivate</a>(certificateId, { ...params }) -> CertificateDeactivateResponse</code>
- <code title="get /accounts/{account_id}/gateway/certificates/{certificate_id}">client.zeroTrust.gateway.certificates.<a href="./src/resources/zero-trust/gateway/certificates.ts">get</a>(certificateId, { ...params }) -> CertificateGetResponse</code>

## Networks

### Routes

Types:

- <code><a href="./src/resources/zero-trust/networks/routes/routes.ts">NetworkRoute</a></code>
- <code><a href="./src/resources/zero-trust/networks/routes/routes.ts">Route</a></code>
- <code><a href="./src/resources/zero-trust/networks/routes/routes.ts">Teamnet</a></code>

Methods:

- <code title="post /accounts/{account_id}/teamnet/routes">client.zeroTrust.networks.routes.<a href="./src/resources/zero-trust/networks/routes/routes.ts">create</a>({ ...params }) -> Route</code>
- <code title="get /accounts/{account_id}/teamnet/routes">client.zeroTrust.networks.routes.<a href="./src/resources/zero-trust/networks/routes/routes.ts">list</a>({ ...params }) -> TeamnetsV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/teamnet/routes/{route_id}">client.zeroTrust.networks.routes.<a href="./src/resources/zero-trust/networks/routes/routes.ts">delete</a>(routeId, { ...params }) -> Route</code>
- <code title="patch /accounts/{account_id}/teamnet/routes/{route_id}">client.zeroTrust.networks.routes.<a href="./src/resources/zero-trust/networks/routes/routes.ts">edit</a>(routeId, { ...params }) -> Route</code>

#### IPs

Methods:

- <code title="get /accounts/{account_id}/teamnet/routes/ip/{ip}">client.zeroTrust.networks.routes.ips.<a href="./src/resources/zero-trust/networks/routes/ips.ts">get</a>(ip, { ...params }) -> Teamnet</code>

#### Networks

Methods:

- <code title="post /accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}">client.zeroTrust.networks.routes.networks.<a href="./src/resources/zero-trust/networks/routes/networks.ts">create</a>(ipNetworkEncoded, { ...params }) -> Route</code>
- <code title="delete /accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}">client.zeroTrust.networks.routes.networks.<a href="./src/resources/zero-trust/networks/routes/networks.ts">delete</a>(ipNetworkEncoded, { ...params }) -> Route</code>
- <code title="patch /accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}">client.zeroTrust.networks.routes.networks.<a href="./src/resources/zero-trust/networks/routes/networks.ts">edit</a>(ipNetworkEncoded, { ...params }) -> Route</code>

### VirtualNetworks

Types:

- <code><a href="./src/resources/zero-trust/networks/virtual-networks.ts">VirtualNetwork</a></code>
- <code><a href="./src/resources/zero-trust/networks/virtual-networks.ts">VirtualNetworkCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/networks/virtual-networks.ts">VirtualNetworkDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/networks/virtual-networks.ts">VirtualNetworkEditResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/teamnet/virtual_networks">client.zeroTrust.networks.virtualNetworks.<a href="./src/resources/zero-trust/networks/virtual-networks.ts">create</a>({ ...params }) -> VirtualNetworkCreateResponse</code>
- <code title="get /accounts/{account_id}/teamnet/virtual_networks">client.zeroTrust.networks.virtualNetworks.<a href="./src/resources/zero-trust/networks/virtual-networks.ts">list</a>({ ...params }) -> VirtualNetworksSinglePage</code>
- <code title="delete /accounts/{account_id}/teamnet/virtual_networks/{virtual_network_id}">client.zeroTrust.networks.virtualNetworks.<a href="./src/resources/zero-trust/networks/virtual-networks.ts">delete</a>(virtualNetworkId, { ...params }) -> VirtualNetworkDeleteResponse</code>
- <code title="patch /accounts/{account_id}/teamnet/virtual_networks/{virtual_network_id}">client.zeroTrust.networks.virtualNetworks.<a href="./src/resources/zero-trust/networks/virtual-networks.ts">edit</a>(virtualNetworkId, { ...params }) -> VirtualNetworkEditResponse</code>

## RiskScoring

Types:

- <code><a href="./src/resources/zero-trust/risk-scoring/risk-scoring.ts">RiskScoringGetResponse</a></code>
- <code><a href="./src/resources/zero-trust/risk-scoring/risk-scoring.ts">RiskScoringResetResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/zt_risk_scoring/{user_id}">client.zeroTrust.riskScoring.<a href="./src/resources/zero-trust/risk-scoring/risk-scoring.ts">get</a>(accountIdentifier, userId, { ...params }) -> RiskScoringGetResponse</code>
- <code title="post /accounts/{account_identifier}/zt_risk_scoring/{user_id}/reset">client.zeroTrust.riskScoring.<a href="./src/resources/zero-trust/risk-scoring/risk-scoring.ts">reset</a>(accountIdentifier, userId) -> RiskScoringResetResponse</code>

### Behaviours

Types:

- <code><a href="./src/resources/zero-trust/risk-scoring/behaviours.ts">BehaviourUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/risk-scoring/behaviours.ts">BehaviourGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_identifier}/zt_risk_scoring/behaviors">client.zeroTrust.riskScoring.behaviours.<a href="./src/resources/zero-trust/risk-scoring/behaviours.ts">update</a>(accountIdentifier, { ...params }) -> BehaviourUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/zt_risk_scoring/behaviors">client.zeroTrust.riskScoring.behaviours.<a href="./src/resources/zero-trust/risk-scoring/behaviours.ts">get</a>(accountIdentifier) -> BehaviourGetResponse</code>

### Summary

Types:

- <code><a href="./src/resources/zero-trust/risk-scoring/summary.ts">SummaryGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/zt_risk_scoring/summary">client.zeroTrust.riskScoring.summary.<a href="./src/resources/zero-trust/risk-scoring/summary.ts">get</a>(accountIdentifier, { ...params }) -> SummaryGetResponse</code>

### Integrations

Types:

- <code><a href="./src/resources/zero-trust/risk-scoring/integrations/integrations.ts">IntegrationCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/risk-scoring/integrations/integrations.ts">IntegrationUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/risk-scoring/integrations/integrations.ts">IntegrationListResponse</a></code>
- <code><a href="./src/resources/zero-trust/risk-scoring/integrations/integrations.ts">IntegrationDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/risk-scoring/integrations/integrations.ts">IntegrationGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/zt_risk_scoring/integrations">client.zeroTrust.riskScoring.integrations.<a href="./src/resources/zero-trust/risk-scoring/integrations/integrations.ts">create</a>({ ...params }) -> IntegrationCreateResponse</code>
- <code title="put /accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}">client.zeroTrust.riskScoring.integrations.<a href="./src/resources/zero-trust/risk-scoring/integrations/integrations.ts">update</a>(integrationId, { ...params }) -> IntegrationUpdateResponse</code>
- <code title="get /accounts/{account_id}/zt_risk_scoring/integrations">client.zeroTrust.riskScoring.integrations.<a href="./src/resources/zero-trust/risk-scoring/integrations/integrations.ts">list</a>({ ...params }) -> IntegrationListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}">client.zeroTrust.riskScoring.integrations.<a href="./src/resources/zero-trust/risk-scoring/integrations/integrations.ts">delete</a>(integrationId, { ...params }) -> IntegrationDeleteResponse</code>
- <code title="get /accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}">client.zeroTrust.riskScoring.integrations.<a href="./src/resources/zero-trust/risk-scoring/integrations/integrations.ts">get</a>(integrationId, { ...params }) -> IntegrationGetResponse</code>

#### References

Types:

- <code><a href="./src/resources/zero-trust/risk-scoring/integrations/references.ts">ReferenceGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/zt_risk_scoring/integrations/reference_id/{reference_id}">client.zeroTrust.riskScoring.integrations.references.<a href="./src/resources/zero-trust/risk-scoring/integrations/references.ts">get</a>(referenceId, { ...params }) -> ReferenceGetResponse</code>

# Challenges

## Widgets

Types:

- <code><a href="./src/resources/challenges/widgets.ts">Widget</a></code>
- <code><a href="./src/resources/challenges/widgets.ts">WidgetDomain</a></code>
- <code><a href="./src/resources/challenges/widgets.ts">WidgetListResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/challenges/widgets">client.challenges.widgets.<a href="./src/resources/challenges/widgets.ts">create</a>({ ...params }) -> Widget</code>
- <code title="put /accounts/{account_id}/challenges/widgets/{sitekey}">client.challenges.widgets.<a href="./src/resources/challenges/widgets.ts">update</a>(sitekey, { ...params }) -> Widget</code>
- <code title="get /accounts/{account_id}/challenges/widgets">client.challenges.widgets.<a href="./src/resources/challenges/widgets.ts">list</a>({ ...params }) -> WidgetListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/challenges/widgets/{sitekey}">client.challenges.widgets.<a href="./src/resources/challenges/widgets.ts">delete</a>(sitekey, { ...params }) -> Widget</code>
- <code title="get /accounts/{account_id}/challenges/widgets/{sitekey}">client.challenges.widgets.<a href="./src/resources/challenges/widgets.ts">get</a>(sitekey, { ...params }) -> Widget</code>
- <code title="post /accounts/{account_id}/challenges/widgets/{sitekey}/rotate_secret">client.challenges.widgets.<a href="./src/resources/challenges/widgets.ts">rotateSecret</a>(sitekey, { ...params }) -> Widget</code>

# Hyperdrive

Types:

- <code><a href="./src/resources/hyperdrive/hyperdrive.ts">Configuration</a></code>
- <code><a href="./src/resources/hyperdrive/hyperdrive.ts">Hyperdrive</a></code>

## Configs

Types:

- <code><a href="./src/resources/hyperdrive/configs.ts">ConfigDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/hyperdrive/configs">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">create</a>({ ...params }) -> Hyperdrive | null</code>
- <code title="put /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">update</a>(hyperdriveId, { ...params }) -> Hyperdrive | null</code>
- <code title="get /accounts/{account_id}/hyperdrive/configs">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">list</a>({ ...params }) -> HyperdrivesSinglePage</code>
- <code title="delete /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">delete</a>(hyperdriveId, { ...params }) -> ConfigDeleteResponse</code>
- <code title="patch /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">edit</a>(hyperdriveId, { ...params }) -> Hyperdrive | null</code>
- <code title="get /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}">client.hyperdrive.configs.<a href="./src/resources/hyperdrive/configs.ts">get</a>(hyperdriveId, { ...params }) -> Hyperdrive | null</code>

# RUM

## SiteInfo

Types:

- <code><a href="./src/resources/rum/site-info.ts">Site</a></code>
- <code><a href="./src/resources/rum/site-info.ts">SiteInfoDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/rum/site_info">client.rum.siteInfo.<a href="./src/resources/rum/site-info.ts">create</a>({ ...params }) -> Site</code>
- <code title="put /accounts/{account_id}/rum/site_info/{site_id}">client.rum.siteInfo.<a href="./src/resources/rum/site-info.ts">update</a>(siteId, { ...params }) -> Site</code>
- <code title="get /accounts/{account_id}/rum/site_info/list">client.rum.siteInfo.<a href="./src/resources/rum/site-info.ts">list</a>({ ...params }) -> SitesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/rum/site_info/{site_id}">client.rum.siteInfo.<a href="./src/resources/rum/site-info.ts">delete</a>(siteId, { ...params }) -> SiteInfoDeleteResponse</code>
- <code title="get /accounts/{account_id}/rum/site_info/{site_id}">client.rum.siteInfo.<a href="./src/resources/rum/site-info.ts">get</a>(siteId, { ...params }) -> Site</code>

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

- <code><a href="./src/resources/vectorize/indexes.ts">CreateIndex</a></code>
- <code><a href="./src/resources/vectorize/indexes.ts">IndexDeleteVectorsByID</a></code>
- <code><a href="./src/resources/vectorize/indexes.ts">IndexDimensionConfiguration</a></code>
- <code><a href="./src/resources/vectorize/indexes.ts">IndexInsert</a></code>
- <code><a href="./src/resources/vectorize/indexes.ts">IndexQuery</a></code>
- <code><a href="./src/resources/vectorize/indexes.ts">IndexUpsert</a></code>
- <code><a href="./src/resources/vectorize/indexes.ts">IndexDeleteResponse</a></code>
- <code><a href="./src/resources/vectorize/indexes.ts">IndexGetByIDsResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/vectorize/indexes">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">create</a>({ ...params }) -> CreateIndex | null</code>
- <code title="put /accounts/{account_id}/vectorize/indexes/{index_name}">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">update</a>(indexName, { ...params }) -> CreateIndex | null</code>
- <code title="get /accounts/{account_id}/vectorize/indexes">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">list</a>({ ...params }) -> CreateIndicesSinglePage</code>
- <code title="delete /accounts/{account_id}/vectorize/indexes/{index_name}">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">delete</a>(indexName, { ...params }) -> IndexDeleteResponse</code>
- <code title="post /accounts/{account_id}/vectorize/indexes/{index_name}/delete-by-ids">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">deleteByIds</a>(indexName, { ...params }) -> IndexDeleteVectorsByID | null</code>
- <code title="get /accounts/{account_id}/vectorize/indexes/{index_name}">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">get</a>(indexName, { ...params }) -> CreateIndex | null</code>
- <code title="post /accounts/{account_id}/vectorize/indexes/{index_name}/get-by-ids">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">getByIds</a>(indexName, { ...params }) -> IndexGetByIDsResponse | null</code>
- <code title="post /accounts/{account_id}/vectorize/indexes/{index_name}/insert">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">insert</a>(indexName, { ...params }) -> IndexInsert | null</code>
- <code title="post /accounts/{account_id}/vectorize/indexes/{index_name}/query">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">query</a>(indexName, { ...params }) -> IndexQuery | null</code>
- <code title="post /accounts/{account_id}/vectorize/indexes/{index_name}/upsert">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">upsert</a>(indexName, { ...params }) -> IndexUpsert | null</code>

# URLScanner

Types:

- <code><a href="./src/resources/url-scanner/url-scanner.ts">URLScannerScanResponse</a></code>

Methods:

- <code title="get /accounts/{accountId}/urlscanner/scan">client.urlScanner.<a href="./src/resources/url-scanner/url-scanner.ts">scan</a>(accountId, { ...params }) -> URLScannerScanResponse</code>

## Scans

Types:

- <code><a href="./src/resources/url-scanner/scans.ts">URLScannerDomain</a></code>
- <code><a href="./src/resources/url-scanner/scans.ts">URLScannerTask</a></code>
- <code><a href="./src/resources/url-scanner/scans.ts">ScanCreateResponse</a></code>
- <code><a href="./src/resources/url-scanner/scans.ts">ScanGetResponse</a></code>
- <code><a href="./src/resources/url-scanner/scans.ts">ScanHarResponse</a></code>

Methods:

- <code title="post /accounts/{accountId}/urlscanner/scan">client.urlScanner.scans.<a href="./src/resources/url-scanner/scans.ts">create</a>(accountId, { ...params }) -> ScanCreateResponse</code>
- <code title="get /accounts/{accountId}/urlscanner/scan/{scanId}">client.urlScanner.scans.<a href="./src/resources/url-scanner/scans.ts">get</a>(accountId, scanId, { ...params }) -> ScanGetResponse</code>
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

#### Events

Types:

- <code><a href="./src/resources/radar/bgp/leaks/events.ts">EventListResponse</a></code>

Methods:

- <code title="get /radar/bgp/leaks/events">client.radar.bgp.leaks.events.<a href="./src/resources/radar/bgp/leaks/events.ts">list</a>({ ...params }) -> EventListResponsesV4PagePagination</code>

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

#### Events

Types:

- <code><a href="./src/resources/radar/bgp/hijacks/events.ts">EventListResponse</a></code>

Methods:

- <code title="get /radar/bgp/hijacks/events">client.radar.bgp.hijacks.events.<a href="./src/resources/radar/bgp/hijacks/events.ts">list</a>({ ...params }) -> EventListResponsesV4PagePagination</code>

### Routes

Types:

- <code><a href="./src/resources/radar/bgp/routes.ts">RouteAsesResponse</a></code>
- <code><a href="./src/resources/radar/bgp/routes.ts">RouteMoasResponse</a></code>
- <code><a href="./src/resources/radar/bgp/routes.ts">RoutePfx2asResponse</a></code>
- <code><a href="./src/resources/radar/bgp/routes.ts">RouteStatsResponse</a></code>

Methods:

- <code title="get /radar/bgp/routes/ases">client.radar.bgp.routes.<a href="./src/resources/radar/bgp/routes.ts">ases</a>({ ...params }) -> RouteAsesResponse</code>
- <code title="get /radar/bgp/routes/moas">client.radar.bgp.routes.<a href="./src/resources/radar/bgp/routes.ts">moas</a>({ ...params }) -> RouteMoasResponse</code>
- <code title="get /radar/bgp/routes/pfx2as">client.radar.bgp.routes.<a href="./src/resources/radar/bgp/routes.ts">pfx2as</a>({ ...params }) -> RoutePfx2asResponse</code>
- <code title="get /radar/bgp/routes/stats">client.radar.bgp.routes.<a href="./src/resources/radar/bgp/routes.ts">stats</a>({ ...params }) -> RouteStatsResponse</code>

### IPs

Types:

- <code><a href="./src/resources/radar/bgp/ips.ts">IPTimeseriesResponse</a></code>

Methods:

- <code title="get /radar/bgp/ips/timeseries">client.radar.bgp.ips.<a href="./src/resources/radar/bgp/ips.ts">timeseries</a>({ ...params }) -> IPTimeseriesResponse</code>

## Datasets

Types:

- <code><a href="./src/resources/radar/datasets.ts">DatasetListResponse</a></code>
- <code><a href="./src/resources/radar/datasets.ts">DatasetDownloadResponse</a></code>
- <code><a href="./src/resources/radar/datasets.ts">DatasetGetResponse</a></code>

Methods:

- <code title="get /radar/datasets">client.radar.datasets.<a href="./src/resources/radar/datasets.ts">list</a>({ ...params }) -> DatasetListResponse</code>
- <code title="post /radar/datasets/download">client.radar.datasets.<a href="./src/resources/radar/datasets.ts">download</a>({ ...params }) -> DatasetDownloadResponse</code>
- <code title="get /radar/datasets/{alias}">client.radar.datasets.<a href="./src/resources/radar/datasets.ts">get</a>(alias) -> string</code>

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

## Email

Types:

- <code><a href="./src/resources/radar/email/email.ts">RadarEmailSeries</a></code>
- <code><a href="./src/resources/radar/email/email.ts">RadarEmailSummary</a></code>

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

Types:

- <code><a href="./src/resources/radar/http/http.ts">HTTPTimeseriesResponse</a></code>

Methods:

- <code title="get /radar/http/timeseries">client.radar.http.<a href="./src/resources/radar/http/http.ts">timeseries</a>({ ...params }) -> HTTPTimeseriesResponse</code>

### Top

Types:

- <code><a href="./src/resources/radar/http/top.ts">Browser</a></code>
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

#### BrowserFamily

Types:

- <code><a href="./src/resources/radar/http/locations/browser-family.ts">BrowserFamilyGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/browser_family/{browser_family}">client.radar.http.locations.browserFamily.<a href="./src/resources/radar/http/locations/browser-family.ts">get</a>(browserFamily, { ...params }) -> BrowserFamilyGetResponse</code>

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

#### BrowserFamily

Types:

- <code><a href="./src/resources/radar/http/ases/browser-family.ts">BrowserFamilyGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/browser_family/{browser_family}">client.radar.http.ases.browserFamily.<a href="./src/resources/radar/http/ases/browser-family.ts">get</a>(browserFamily, { ...params }) -> BrowserFamilyGetResponse</code>

### Summary

Types:

- <code><a href="./src/resources/radar/http/summary.ts">SummaryBotClassResponse</a></code>
- <code><a href="./src/resources/radar/http/summary.ts">SummaryDeviceTypeResponse</a></code>
- <code><a href="./src/resources/radar/http/summary.ts">SummaryHTTPProtocolResponse</a></code>
- <code><a href="./src/resources/radar/http/summary.ts">SummaryHTTPVersionResponse</a></code>
- <code><a href="./src/resources/radar/http/summary.ts">SummaryIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/http/summary.ts">SummaryOSResponse</a></code>
- <code><a href="./src/resources/radar/http/summary.ts">SummaryPostQuantumResponse</a></code>
- <code><a href="./src/resources/radar/http/summary.ts">SummaryTLSVersionResponse</a></code>

Methods:

- <code title="get /radar/http/summary/bot_class">client.radar.http.summary.<a href="./src/resources/radar/http/summary.ts">botClass</a>({ ...params }) -> SummaryBotClassResponse</code>
- <code title="get /radar/http/summary/device_type">client.radar.http.summary.<a href="./src/resources/radar/http/summary.ts">deviceType</a>({ ...params }) -> SummaryDeviceTypeResponse</code>
- <code title="get /radar/http/summary/http_protocol">client.radar.http.summary.<a href="./src/resources/radar/http/summary.ts">httpProtocol</a>({ ...params }) -> SummaryHTTPProtocolResponse</code>
- <code title="get /radar/http/summary/http_version">client.radar.http.summary.<a href="./src/resources/radar/http/summary.ts">httpVersion</a>({ ...params }) -> SummaryHTTPVersionResponse</code>
- <code title="get /radar/http/summary/ip_version">client.radar.http.summary.<a href="./src/resources/radar/http/summary.ts">ipVersion</a>({ ...params }) -> SummaryIPVersionResponse</code>
- <code title="get /radar/http/summary/os">client.radar.http.summary.<a href="./src/resources/radar/http/summary.ts">os</a>({ ...params }) -> SummaryOSResponse</code>
- <code title="get /radar/http/summary/post_quantum">client.radar.http.summary.<a href="./src/resources/radar/http/summary.ts">postQuantum</a>({ ...params }) -> SummaryPostQuantumResponse</code>
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
- <code><a href="./src/resources/radar/http/timeseries-groups.ts">TimeseriesGroupPostQuantumResponse</a></code>
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
- <code title="get /radar/http/timeseries_groups/post_quantum">client.radar.http.timeseriesGroups.<a href="./src/resources/radar/http/timeseries-groups.ts">postQuantum</a>({ ...params }) -> TimeseriesGroupPostQuantumResponse</code>
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

## TCPResetsTimeouts

Types:

- <code><a href="./src/resources/radar/tcp-resets-timeouts.ts">TCPResetsTimeoutSummaryResponse</a></code>
- <code><a href="./src/resources/radar/tcp-resets-timeouts.ts">TCPResetsTimeoutTimeseriesGroupsResponse</a></code>

Methods:

- <code title="get /radar/tcp_resets_timeouts/summary">client.radar.tcpResetsTimeouts.<a href="./src/resources/radar/tcp-resets-timeouts.ts">summary</a>({ ...params }) -> TCPResetsTimeoutSummaryResponse</code>
- <code title="get /radar/tcp_resets_timeouts/timeseries_groups">client.radar.tcpResetsTimeouts.<a href="./src/resources/radar/tcp-resets-timeouts.ts">timeseriesGroups</a>({ ...params }) -> TCPResetsTimeoutTimeseriesGroupsResponse</code>

# BotManagement

Types:

- <code><a href="./src/resources/bot-management.ts">BotFightModeConfiguration</a></code>
- <code><a href="./src/resources/bot-management.ts">SubscriptionConfiguration</a></code>
- <code><a href="./src/resources/bot-management.ts">SuperBotFightModeDefinitelyConfiguration</a></code>
- <code><a href="./src/resources/bot-management.ts">SuperBotFightModeLikelyConfiguration</a></code>
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

- <code><a href="./src/resources/speed/speed.ts">LabeledRegion</a></code>
- <code><a href="./src/resources/speed/speed.ts">LighthouseReport</a></code>
- <code><a href="./src/resources/speed/speed.ts">Trend</a></code>

## Schedule

Types:

- <code><a href="./src/resources/speed/schedule.ts">Schedule</a></code>
- <code><a href="./src/resources/speed/schedule.ts">ScheduleCreateResponse</a></code>
- <code><a href="./src/resources/speed/schedule.ts">ScheduleDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/speed_api/schedule/{url}">client.speed.schedule.<a href="./src/resources/speed/schedule.ts">create</a>(url, { ...params }) -> ScheduleCreateResponse</code>
- <code title="delete /zones/{zone_id}/speed_api/schedule/{url}">client.speed.schedule.<a href="./src/resources/speed/schedule.ts">delete</a>(url, { ...params }) -> ScheduleDeleteResponse</code>
- <code title="get /zones/{zone_id}/speed_api/schedule/{url}">client.speed.schedule.<a href="./src/resources/speed/schedule.ts">get</a>(url, { ...params }) -> Schedule</code>

## Availabilities

Types:

- <code><a href="./src/resources/speed/availabilities.ts">Availability</a></code>

Methods:

- <code title="get /zones/{zone_id}/speed_api/availabilities">client.speed.availabilities.<a href="./src/resources/speed/availabilities.ts">list</a>({ ...params }) -> Availability</code>

## Pages

Types:

- <code><a href="./src/resources/speed/pages/pages.ts">PageListResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/speed_api/pages">client.speed.pages.<a href="./src/resources/speed/pages/pages.ts">list</a>({ ...params }) -> PageListResponsesSinglePage</code>
- <code title="get /zones/{zone_id}/speed_api/pages/{url}/trend">client.speed.pages.<a href="./src/resources/speed/pages/pages.ts">trend</a>(url, { ...params }) -> Trend</code>

### Tests

Types:

- <code><a href="./src/resources/speed/pages/tests.ts">Test</a></code>
- <code><a href="./src/resources/speed/pages/tests.ts">TestListResponse</a></code>
- <code><a href="./src/resources/speed/pages/tests.ts">TestDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/speed_api/pages/{url}/tests">client.speed.pages.tests.<a href="./src/resources/speed/pages/tests.ts">create</a>(url, { ...params }) -> Test</code>
- <code title="get /zones/{zone_id}/speed_api/pages/{url}/tests">client.speed.pages.tests.<a href="./src/resources/speed/pages/tests.ts">list</a>(url, { ...params }) -> TestListResponse</code>
- <code title="delete /zones/{zone_id}/speed_api/pages/{url}/tests">client.speed.pages.tests.<a href="./src/resources/speed/pages/tests.ts">delete</a>(url, { ...params }) -> TestDeleteResponse</code>
- <code title="get /zones/{zone_id}/speed_api/pages/{url}/tests/{test_id}">client.speed.pages.tests.<a href="./src/resources/speed/pages/tests.ts">get</a>(url, testId, { ...params }) -> Test</code>

# DCVDelegation

Types:

- <code><a href="./src/resources/dcv-delegation.ts">DCVDelegationUUID</a></code>

Methods:

- <code title="get /zones/{zone_id}/dcv_delegation/uuid">client.dcvDelegation.<a href="./src/resources/dcv-delegation.ts">get</a>({ ...params }) -> DCVDelegationUUID</code>

# Hostnames

## Settings

### TLS

Types:

- <code><a href="./src/resources/hostnames/settings/tls.ts">Setting</a></code>
- <code><a href="./src/resources/hostnames/settings/tls.ts">SettingValue</a></code>
- <code><a href="./src/resources/hostnames/settings/tls.ts">TLSDeleteResponse</a></code>
- <code><a href="./src/resources/hostnames/settings/tls.ts">TLSGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}">client.hostnames.settings.tls.<a href="./src/resources/hostnames/settings/tls.ts">update</a>(settingId, hostname, { ...params }) -> Setting</code>
- <code title="delete /zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}">client.hostnames.settings.tls.<a href="./src/resources/hostnames/settings/tls.ts">delete</a>(settingId, hostname, { ...params }) -> TLSDeleteResponse</code>
- <code title="get /zones/{zone_id}/hostnames/settings/{setting_id}">client.hostnames.settings.tls.<a href="./src/resources/hostnames/settings/tls.ts">get</a>(settingId, { ...params }) -> TLSGetResponse | null</code>

# Snippets

Types:

- <code><a href="./src/resources/snippets/snippets.ts">Snippet</a></code>
- <code><a href="./src/resources/snippets/snippets.ts">SnippetDeleteResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/snippets/{snippet_name}">client.snippets.<a href="./src/resources/snippets/snippets.ts">update</a>(snippetName, { ...params }) -> Snippet</code>
- <code title="get /zones/{zone_id}/snippets">client.snippets.<a href="./src/resources/snippets/snippets.ts">list</a>({ ...params }) -> SnippetsSinglePage</code>
- <code title="delete /zones/{zone_id}/snippets/{snippet_name}">client.snippets.<a href="./src/resources/snippets/snippets.ts">delete</a>(snippetName, { ...params }) -> SnippetDeleteResponse</code>
- <code title="get /zones/{zone_id}/snippets/{snippet_name}">client.snippets.<a href="./src/resources/snippets/snippets.ts">get</a>(snippetName, { ...params }) -> Snippet</code>

## Content

Methods:

- <code title="get /zones/{zone_id}/snippets/{snippet_name}/content">client.snippets.content.<a href="./src/resources/snippets/content.ts">get</a>(snippetName, { ...params }) -> Response</code>

## Rules

Types:

- <code><a href="./src/resources/snippets/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/snippets/rules.ts">RuleListResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/snippets/snippet_rules">client.snippets.rules.<a href="./src/resources/snippets/rules.ts">update</a>({ ...params }) -> RuleUpdateResponse</code>
- <code title="get /zones/{zone_id}/snippets/snippet_rules">client.snippets.rules.<a href="./src/resources/snippets/rules.ts">list</a>({ ...params }) -> RuleListResponsesSinglePage</code>

# Calls

Types:

- <code><a href="./src/resources/calls/calls.ts">CallsApp</a></code>
- <code><a href="./src/resources/calls/calls.ts">CallsAppWithSecret</a></code>
- <code><a href="./src/resources/calls/calls.ts">CallListResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/calls/apps">client.calls.<a href="./src/resources/calls/calls.ts">create</a>({ ...params }) -> CallsAppWithSecret</code>
- <code title="put /accounts/{account_id}/calls/apps/{app_id}">client.calls.<a href="./src/resources/calls/calls.ts">update</a>(appId, { ...params }) -> CallsApp</code>
- <code title="get /accounts/{account_id}/calls/apps">client.calls.<a href="./src/resources/calls/calls.ts">list</a>({ ...params }) -> CallListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/calls/apps/{app_id}">client.calls.<a href="./src/resources/calls/calls.ts">delete</a>(appId, { ...params }) -> CallsApp</code>
- <code title="get /accounts/{account_id}/calls/apps/{app_id}">client.calls.<a href="./src/resources/calls/calls.ts">get</a>(appId, { ...params }) -> CallsApp</code>

## TURN

### Keys

Types:

- <code><a href="./src/resources/calls/turn/keys.ts">KeyCreateResponse</a></code>
- <code><a href="./src/resources/calls/turn/keys.ts">KeyUpdateResponse</a></code>
- <code><a href="./src/resources/calls/turn/keys.ts">KeyListResponse</a></code>
- <code><a href="./src/resources/calls/turn/keys.ts">KeyDeleteResponse</a></code>
- <code><a href="./src/resources/calls/turn/keys.ts">KeyGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/calls/turn_keys">client.calls.turn.keys.<a href="./src/resources/calls/turn/keys.ts">create</a>({ ...params }) -> KeyCreateResponse</code>
- <code title="put /accounts/{account_id}/calls/turn_keys/{key_id}">client.calls.turn.keys.<a href="./src/resources/calls/turn/keys.ts">update</a>(keyId, { ...params }) -> KeyUpdateResponse</code>
- <code title="get /accounts/{account_id}/calls/turn_keys">client.calls.turn.keys.<a href="./src/resources/calls/turn/keys.ts">list</a>({ ...params }) -> KeyListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/calls/turn_keys/{key_id}">client.calls.turn.keys.<a href="./src/resources/calls/turn/keys.ts">delete</a>(keyId, { ...params }) -> KeyDeleteResponse</code>
- <code title="get /accounts/{account_id}/calls/turn_keys/{key_id}">client.calls.turn.keys.<a href="./src/resources/calls/turn/keys.ts">get</a>(keyId, { ...params }) -> KeyGetResponse</code>

# CloudforceOne

## Requests

Types:

- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">Item</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">ListItem</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">Quota</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">RequestConstants</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">RequestTypes</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/requests.ts">RequestDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/cloudforce-one/requests/new">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">create</a>(accountIdentifier, { ...params }) -> Item</code>
- <code title="put /accounts/{account_identifier}/cloudforce-one/requests/{request_identifier}">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">update</a>(accountIdentifier, requestIdentifier, { ...params }) -> Item</code>
- <code title="post /accounts/{account_identifier}/cloudforce-one/requests">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">list</a>(accountIdentifier, { ...params }) -> ListItemsV4PagePaginationArray</code>
- <code title="delete /accounts/{account_identifier}/cloudforce-one/requests/{request_identifier}">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">delete</a>(accountIdentifier, requestIdentifier) -> RequestDeleteResponse</code>
- <code title="get /accounts/{account_identifier}/cloudforce-one/requests/constants">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">constants</a>(accountIdentifier) -> RequestConstants</code>
- <code title="get /accounts/{account_identifier}/cloudforce-one/requests/{request_identifier}">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">get</a>(accountIdentifier, requestIdentifier) -> Item</code>
- <code title="get /accounts/{account_identifier}/cloudforce-one/requests/quota">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">quota</a>(accountIdentifier) -> Quota</code>
- <code title="get /accounts/{account_identifier}/cloudforce-one/requests/types">client.cloudforceOne.requests.<a href="./src/resources/cloudforce-one/requests/requests.ts">types</a>(accountIdentifier) -> RequestTypes</code>

### Message

Types:

- <code><a href="./src/resources/cloudforce-one/requests/message.ts">Message</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/message.ts">MessageDeleteResponse</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/message.ts">MessageGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/cloudforce-one/requests/{request_identifier}/message/new">client.cloudforceOne.requests.message.<a href="./src/resources/cloudforce-one/requests/message.ts">create</a>(accountIdentifier, requestIdentifier, { ...params }) -> Message</code>
- <code title="put /accounts/{account_identifier}/cloudforce-one/requests/{request_identifier}/message/{message_identifer}">client.cloudforceOne.requests.message.<a href="./src/resources/cloudforce-one/requests/message.ts">update</a>(accountIdentifier, requestIdentifier, messageIdentifer, { ...params }) -> Message</code>
- <code title="delete /accounts/{account_identifier}/cloudforce-one/requests/{request_identifier}/message/{message_identifer}">client.cloudforceOne.requests.message.<a href="./src/resources/cloudforce-one/requests/message.ts">delete</a>(accountIdentifier, requestIdentifier, messageIdentifer) -> MessageDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/cloudforce-one/requests/{request_identifier}/message">client.cloudforceOne.requests.message.<a href="./src/resources/cloudforce-one/requests/message.ts">get</a>(accountIdentifier, requestIdentifier, { ...params }) -> MessageGetResponse</code>

### Priority

Types:

- <code><a href="./src/resources/cloudforce-one/requests/priority.ts">Label</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/priority.ts">Priority</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/priority.ts">PriorityEdit</a></code>
- <code><a href="./src/resources/cloudforce-one/requests/priority.ts">PriorityDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/cloudforce-one/requests/priority/new">client.cloudforceOne.requests.priority.<a href="./src/resources/cloudforce-one/requests/priority.ts">create</a>(accountIdentifier, { ...params }) -> Priority</code>
- <code title="put /accounts/{account_identifier}/cloudforce-one/requests/priority/{priority_identifer}">client.cloudforceOne.requests.priority.<a href="./src/resources/cloudforce-one/requests/priority.ts">update</a>(accountIdentifier, priorityIdentifer, { ...params }) -> Item</code>
- <code title="delete /accounts/{account_identifier}/cloudforce-one/requests/priority/{priority_identifer}">client.cloudforceOne.requests.priority.<a href="./src/resources/cloudforce-one/requests/priority.ts">delete</a>(accountIdentifier, priorityIdentifer) -> PriorityDeleteResponse</code>
- <code title="get /accounts/{account_identifier}/cloudforce-one/requests/priority/{priority_identifer}">client.cloudforceOne.requests.priority.<a href="./src/resources/cloudforce-one/requests/priority.ts">get</a>(accountIdentifier, priorityIdentifer) -> Item</code>
- <code title="get /accounts/{account_identifier}/cloudforce-one/requests/priority/quota">client.cloudforceOne.requests.priority.<a href="./src/resources/cloudforce-one/requests/priority.ts">quota</a>(accountIdentifier) -> Quota</code>

# EventNotifications

## R2

### Configuration

Types:

- <code><a href="./src/resources/event-notifications/r2/configuration/configuration.ts">ConfigurationGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/event_notifications/r2/{bucket_name}/configuration">client.eventNotifications.r2.configuration.<a href="./src/resources/event-notifications/r2/configuration/configuration.ts">get</a>(bucketName, { ...params }) -> ConfigurationGetResponse</code>

#### Queues

Types:

- <code><a href="./src/resources/event-notifications/r2/configuration/queues.ts">QueueUpdateResponse</a></code>
- <code><a href="./src/resources/event-notifications/r2/configuration/queues.ts">QueueDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/event_notifications/r2/{bucket_name}/configuration/queues/{queue_id}">client.eventNotifications.r2.configuration.queues.<a href="./src/resources/event-notifications/r2/configuration/queues.ts">update</a>(bucketName, queueId, { ...params }) -> QueueUpdateResponse</code>
- <code title="delete /accounts/{account_id}/event_notifications/r2/{bucket_name}/configuration/queues/{queue_id}">client.eventNotifications.r2.configuration.queues.<a href="./src/resources/event-notifications/r2/configuration/queues.ts">delete</a>(bucketName, queueId, { ...params }) -> QueueDeleteResponse</code>

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

## Logs

Types:

- <code><a href="./src/resources/ai-gateway/logs.ts">LogListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/ai-gateway/gateways/{id}/logs">client.aiGateway.logs.<a href="./src/resources/ai-gateway/logs.ts">list</a>(id, { ...params }) -> LogListResponsesV4PagePaginationArray</code>

# IAM

## PermissionGroups

Types:

- <code><a href="./src/resources/iam/permission-groups.ts">PermissionGroupListResponse</a></code>
- <code><a href="./src/resources/iam/permission-groups.ts">PermissionGroupGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/iam/permission_groups">client.iam.permissionGroups.<a href="./src/resources/iam/permission-groups.ts">list</a>({ ...params }) -> PermissionGroupListResponsesV4PagePaginationArray</code>
- <code title="get /accounts/{account_id}/iam/permission_groups/{permission_group_id}">client.iam.permissionGroups.<a href="./src/resources/iam/permission-groups.ts">get</a>(permissionGroupId, { ...params }) -> PermissionGroupGetResponse</code>

## ResourceGroups

Types:

- <code><a href="./src/resources/iam/resource-groups.ts">ResourceGroupCreateResponse</a></code>
- <code><a href="./src/resources/iam/resource-groups.ts">ResourceGroupUpdateResponse</a></code>
- <code><a href="./src/resources/iam/resource-groups.ts">ResourceGroupListResponse</a></code>
- <code><a href="./src/resources/iam/resource-groups.ts">ResourceGroupDeleteResponse</a></code>
- <code><a href="./src/resources/iam/resource-groups.ts">ResourceGroupGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/iam/resource_groups">client.iam.resourceGroups.<a href="./src/resources/iam/resource-groups.ts">create</a>({ ...params }) -> ResourceGroupCreateResponse</code>
- <code title="put /accounts/{account_id}/iam/resource_groups/{resource_group_id}">client.iam.resourceGroups.<a href="./src/resources/iam/resource-groups.ts">update</a>(resourceGroupId, { ...params }) -> ResourceGroupUpdateResponse</code>
- <code title="get /accounts/{account_id}/iam/resource_groups">client.iam.resourceGroups.<a href="./src/resources/iam/resource-groups.ts">list</a>({ ...params }) -> ResourceGroupListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/iam/resource_groups/{resource_group_id}">client.iam.resourceGroups.<a href="./src/resources/iam/resource-groups.ts">delete</a>(resourceGroupId, { ...params }) -> ResourceGroupDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/iam/resource_groups/{resource_group_id}">client.iam.resourceGroups.<a href="./src/resources/iam/resource-groups.ts">get</a>(resourceGroupId, { ...params }) -> ResourceGroupGetResponse</code>

# CloudConnector

## Rules

Types:

- <code><a href="./src/resources/cloud-connector/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/cloud-connector/rules.ts">RuleListResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/cloud_connector/rules">client.cloudConnector.rules.<a href="./src/resources/cloud-connector/rules.ts">update</a>([ ...body ]) -> RuleUpdateResponse</code>
- <code title="get /zones/{zone_id}/cloud_connector/rules">client.cloudConnector.rules.<a href="./src/resources/cloud-connector/rules.ts">list</a>({ ...params }) -> RuleListResponsesSinglePage</code>
