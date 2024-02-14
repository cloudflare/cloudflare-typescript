# Accounts

Types:

- <code><a href="./src/resources/accounts.ts">AccountListResponse</a></code>

Methods:

- <code title="get /accounts">client.accounts.<a href="./src/resources/accounts.ts">list</a>({ ...params }) -> AccountListResponse | null</code>

# IPs

Types:

- <code><a href="./src/resources/ips.ts">IPListResponse</a></code>

Methods:

- <code title="get /ips">client.ips.<a href="./src/resources/ips.ts">list</a>({ ...params }) -> IPListResponse</code>

# Zones

Types:

- <code><a href="./src/resources/zones.ts">ZoneCreateResponse</a></code>
- <code><a href="./src/resources/zones.ts">ZoneListResponse</a></code>

Methods:

- <code title="post /zones">client.zones.<a href="./src/resources/zones.ts">create</a>({ ...params }) -> ZoneCreateResponse</code>
- <code title="get /zones">client.zones.<a href="./src/resources/zones.ts">list</a>({ ...params }) -> ZoneListResponse</code>

# AI

Types:

- <code><a href="./src/resources/ai/ai.ts">AIRunModelResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/ai/run/{model_name}">client.ai.<a href="./src/resources/ai/ai.ts">runModel</a>(accountIdentifier, modelName, { ...params }) -> AIRunModelResponse</code>

## Huggingface

## Baai

## OpenAI

## Microsoft

## Meta

## Mistral

# LoadBalancers

Types:

- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancerCreateResponse</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancerRetrieveResponse</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancerUpdateResponse</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancerListResponse</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancerDeleteResponse</a></code>

Methods:

- <code title="post /zones/{identifier}/load_balancers">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">create</a>(identifier, { ...params }) -> LoadBalancerCreateResponse</code>
- <code title="get /zones/{identifier1}/load_balancers/{identifier}">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">retrieve</a>(identifier1, identifier) -> LoadBalancerRetrieveResponse</code>
- <code title="put /zones/{identifier1}/load_balancers/{identifier}">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">update</a>(identifier1, identifier, { ...params }) -> LoadBalancerUpdateResponse</code>
- <code title="get /zones/{identifier}/load_balancers">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">list</a>(identifier) -> LoadBalancerListResponse | null</code>
- <code title="delete /zones/{identifier1}/load_balancers/{identifier}">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">delete</a>(identifier1, identifier) -> LoadBalancerDeleteResponse</code>

## Monitors

Types:

- <code><a href="./src/resources/load-balancers/monitors/monitors.ts">MonitorRetrieveResponse</a></code>
- <code><a href="./src/resources/load-balancers/monitors/monitors.ts">MonitorUpdateResponse</a></code>
- <code><a href="./src/resources/load-balancers/monitors/monitors.ts">MonitorDeleteResponse</a></code>
- <code><a href="./src/resources/load-balancers/monitors/monitors.ts">MonitorAccountLoadBalancerMonitorsCreateMonitorResponse</a></code>
- <code><a href="./src/resources/load-balancers/monitors/monitors.ts">MonitorAccountLoadBalancerMonitorsListMonitorsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/load_balancers/monitors/{identifier}">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">retrieve</a>(accountIdentifier, identifier) -> MonitorRetrieveResponse</code>
- <code title="put /accounts/{account_identifier}/load_balancers/monitors/{identifier}">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">update</a>(accountIdentifier, identifier, { ...params }) -> MonitorUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/load_balancers/monitors/{identifier}">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">delete</a>(accountIdentifier, identifier) -> MonitorDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/load_balancers/monitors">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">accountLoadBalancerMonitorsCreateMonitor</a>(accountIdentifier, { ...params }) -> MonitorAccountLoadBalancerMonitorsCreateMonitorResponse</code>
- <code title="get /accounts/{account_identifier}/load_balancers/monitors">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">accountLoadBalancerMonitorsListMonitors</a>(accountIdentifier) -> MonitorAccountLoadBalancerMonitorsListMonitorsResponse | null</code>

### Previews

Types:

- <code><a href="./src/resources/load-balancers/monitors/previews.ts">PreviewAccountLoadBalancerMonitorsPreviewMonitorResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/load_balancers/monitors/{identifier}/preview">client.loadBalancers.monitors.previews.<a href="./src/resources/load-balancers/monitors/previews.ts">accountLoadBalancerMonitorsPreviewMonitor</a>(accountIdentifier, identifier, { ...params }) -> PreviewAccountLoadBalancerMonitorsPreviewMonitorResponse</code>

### References

Types:

- <code><a href="./src/resources/load-balancers/monitors/references.ts">ReferenceAccountLoadBalancerMonitorsListMonitorReferencesResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/load_balancers/monitors/{identifier}/references">client.loadBalancers.monitors.references.<a href="./src/resources/load-balancers/monitors/references.ts">accountLoadBalancerMonitorsListMonitorReferences</a>(accountIdentifier, identifier) -> ReferenceAccountLoadBalancerMonitorsListMonitorReferencesResponse | null</code>

## Pools

Types:

- <code><a href="./src/resources/load-balancers/pools/pools.ts">PoolRetrieveResponse</a></code>
- <code><a href="./src/resources/load-balancers/pools/pools.ts">PoolUpdateResponse</a></code>
- <code><a href="./src/resources/load-balancers/pools/pools.ts">PoolDeleteResponse</a></code>
- <code><a href="./src/resources/load-balancers/pools/pools.ts">PoolAccountLoadBalancerPoolsCreatePoolResponse</a></code>
- <code><a href="./src/resources/load-balancers/pools/pools.ts">PoolAccountLoadBalancerPoolsListPoolsResponse</a></code>
- <code><a href="./src/resources/load-balancers/pools/pools.ts">PoolAccountLoadBalancerPoolsPatchPoolsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/load_balancers/pools/{identifier}">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">retrieve</a>(accountIdentifier, identifier) -> PoolRetrieveResponse</code>
- <code title="put /accounts/{account_identifier}/load_balancers/pools/{identifier}">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">update</a>(accountIdentifier, identifier, { ...params }) -> PoolUpdateResponse</code>
- <code title="delete /accounts/{account_identifier}/load_balancers/pools/{identifier}">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">delete</a>(accountIdentifier, identifier) -> PoolDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/load_balancers/pools">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">accountLoadBalancerPoolsCreatePool</a>(accountIdentifier, { ...params }) -> PoolAccountLoadBalancerPoolsCreatePoolResponse</code>
- <code title="get /accounts/{account_identifier}/load_balancers/pools">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">accountLoadBalancerPoolsListPools</a>(accountIdentifier, { ...params }) -> PoolAccountLoadBalancerPoolsListPoolsResponse | null</code>
- <code title="patch /accounts/{account_identifier}/load_balancers/pools">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">accountLoadBalancerPoolsPatchPools</a>(accountIdentifier, { ...params }) -> PoolAccountLoadBalancerPoolsPatchPoolsResponse | null</code>

### Health

Types:

- <code><a href="./src/resources/load-balancers/pools/health.ts">HealthAccountLoadBalancerPoolsPoolHealthDetailsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/load_balancers/pools/{identifier}/health">client.loadBalancers.pools.health.<a href="./src/resources/load-balancers/pools/health.ts">accountLoadBalancerPoolsPoolHealthDetails</a>(accountIdentifier, identifier) -> HealthAccountLoadBalancerPoolsPoolHealthDetailsResponse</code>

### Previews

Types:

- <code><a href="./src/resources/load-balancers/pools/previews.ts">PreviewAccountLoadBalancerPoolsPreviewPoolResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/load_balancers/pools/{identifier}/preview">client.loadBalancers.pools.previews.<a href="./src/resources/load-balancers/pools/previews.ts">accountLoadBalancerPoolsPreviewPool</a>(accountIdentifier, identifier, { ...params }) -> PreviewAccountLoadBalancerPoolsPreviewPoolResponse</code>

### References

Types:

- <code><a href="./src/resources/load-balancers/pools/references.ts">ReferenceAccountLoadBalancerPoolsListPoolReferencesResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/load_balancers/pools/{identifier}/references">client.loadBalancers.pools.references.<a href="./src/resources/load-balancers/pools/references.ts">accountLoadBalancerPoolsListPoolReferences</a>(accountIdentifier, identifier) -> ReferenceAccountLoadBalancerPoolsListPoolReferencesResponse | null</code>

## Previews

Types:

- <code><a href="./src/resources/load-balancers/previews.ts">PreviewRetrieveResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/load_balancers/preview/{preview_id}">client.loadBalancers.previews.<a href="./src/resources/load-balancers/previews.ts">retrieve</a>(accountIdentifier, previewId) -> PreviewRetrieveResponse</code>

## Regions

Types:

- <code><a href="./src/resources/load-balancers/regions.ts">RegionRetrieveResponse</a></code>
- <code><a href="./src/resources/load-balancers/regions.ts">RegionLoadBalancerRegionsListRegionsResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/load_balancers/regions/{region_code}">client.loadBalancers.regions.<a href="./src/resources/load-balancers/regions.ts">retrieve</a>(accountIdentifier, regionCode) -> RegionRetrieveResponse</code>
- <code title="get /accounts/{account_identifier}/load_balancers/regions">client.loadBalancers.regions.<a href="./src/resources/load-balancers/regions.ts">loadBalancerRegionsListRegions</a>(accountIdentifier, { ...params }) -> RegionLoadBalancerRegionsListRegionsResponse</code>

## Searches

Types:

- <code><a href="./src/resources/load-balancers/searches.ts">SearchListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/load_balancers/search">client.loadBalancers.searches.<a href="./src/resources/load-balancers/searches.ts">list</a>(accountIdentifier, { ...params }) -> SearchListResponse | null</code>

# Access

## Apps

Types:

- <code><a href="./src/resources/access/apps/apps.ts">AppRetrieveResponse</a></code>
- <code><a href="./src/resources/access/apps/apps.ts">AppUpdateResponse</a></code>
- <code><a href="./src/resources/access/apps/apps.ts">AppDeleteResponse</a></code>
- <code><a href="./src/resources/access/apps/apps.ts">AppAccessApplicationsAddAnApplicationResponse</a></code>
- <code><a href="./src/resources/access/apps/apps.ts">AppAccessApplicationsListAccessApplicationsResponse</a></code>

Methods:

- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}">client.access.apps.<a href="./src/resources/access/apps/apps.ts">retrieve</a>(accountOrZone, accountOrZoneId, appId) -> AppRetrieveResponse</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}">client.access.apps.<a href="./src/resources/access/apps/apps.ts">update</a>(accountOrZone, accountOrZoneId, appId, { ...params }) -> AppUpdateResponse</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/apps/{app_id}">client.access.apps.<a href="./src/resources/access/apps/apps.ts">delete</a>(accountOrZone, accountOrZoneId, appId) -> AppDeleteResponse</code>
- <code title="post /{account_or_zone}/{account_or_zone_id}/access/apps">client.access.apps.<a href="./src/resources/access/apps/apps.ts">accessApplicationsAddAnApplication</a>(accountOrZone, accountOrZoneId, { ...params }) -> AppAccessApplicationsAddAnApplicationResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps">client.access.apps.<a href="./src/resources/access/apps/apps.ts">accessApplicationsListAccessApplications</a>(accountOrZone, accountOrZoneId) -> AppAccessApplicationsListAccessApplicationsResponse | null</code>

### Cas

Types:

- <code><a href="./src/resources/access/apps/cas.ts">CaDeleteResponse</a></code>
- <code><a href="./src/resources/access/apps/cas.ts">CaAccessShortLivedCertificateCAsCreateAShortLivedCertificateCaResponse</a></code>
- <code><a href="./src/resources/access/apps/cas.ts">CaAccessShortLivedCertificateCAsGetAShortLivedCertificateCaResponse</a></code>
- <code><a href="./src/resources/access/apps/cas.ts">CaAccessShortLivedCertificateCAsListShortLivedCertificateCAsResponse</a></code>

Methods:

- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid}/ca">client.access.apps.cas.<a href="./src/resources/access/apps/cas.ts">delete</a>(accountOrZone, accountOrZoneId, uuid) -> CaDeleteResponse</code>
- <code title="post /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid}/ca">client.access.apps.cas.<a href="./src/resources/access/apps/cas.ts">accessShortLivedCertificateCAsCreateAShortLivedCertificateCa</a>(accountOrZone, accountOrZoneId, uuid) -> CaAccessShortLivedCertificateCAsCreateAShortLivedCertificateCaResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid}/ca">client.access.apps.cas.<a href="./src/resources/access/apps/cas.ts">accessShortLivedCertificateCAsGetAShortLivedCertificateCa</a>(accountOrZone, accountOrZoneId, uuid) -> CaAccessShortLivedCertificateCAsGetAShortLivedCertificateCaResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps/ca">client.access.apps.cas.<a href="./src/resources/access/apps/cas.ts">accessShortLivedCertificateCAsListShortLivedCertificateCAs</a>(accountOrZone, accountOrZoneId) -> CaAccessShortLivedCertificateCAsListShortLivedCertificateCAsResponse | null</code>

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

- <code><a href="./src/resources/access/apps/policies.ts">PolicyRetrieveResponse</a></code>
- <code><a href="./src/resources/access/apps/policies.ts">PolicyUpdateResponse</a></code>
- <code><a href="./src/resources/access/apps/policies.ts">PolicyDeleteResponse</a></code>
- <code><a href="./src/resources/access/apps/policies.ts">PolicyAccessPoliciesCreateAnAccessPolicyResponse</a></code>
- <code><a href="./src/resources/access/apps/policies.ts">PolicyAccessPoliciesListAccessPoliciesResponse</a></code>

Methods:

- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid1}/policies/{uuid}">client.access.apps.policies.<a href="./src/resources/access/apps/policies.ts">retrieve</a>(accountOrZone, accountOrZoneId, uuid1, uuid) -> PolicyRetrieveResponse</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid1}/policies/{uuid}">client.access.apps.policies.<a href="./src/resources/access/apps/policies.ts">update</a>(accountOrZone, accountOrZoneId, uuid1, uuid, { ...params }) -> PolicyUpdateResponse</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid1}/policies/{uuid}">client.access.apps.policies.<a href="./src/resources/access/apps/policies.ts">delete</a>(accountOrZone, accountOrZoneId, uuid1, uuid) -> PolicyDeleteResponse</code>
- <code title="post /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid}/policies">client.access.apps.policies.<a href="./src/resources/access/apps/policies.ts">accessPoliciesCreateAnAccessPolicy</a>(accountOrZone, accountOrZoneId, uuid, { ...params }) -> PolicyAccessPoliciesCreateAnAccessPolicyResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/apps/{uuid}/policies">client.access.apps.policies.<a href="./src/resources/access/apps/policies.ts">accessPoliciesListAccessPolicies</a>(accountOrZone, accountOrZoneId, uuid) -> PolicyAccessPoliciesListAccessPoliciesResponse | null</code>

## Certificates

Types:

- <code><a href="./src/resources/access/certificates/certificates.ts">CertificateRetrieveResponse</a></code>
- <code><a href="./src/resources/access/certificates/certificates.ts">CertificateUpdateResponse</a></code>
- <code><a href="./src/resources/access/certificates/certificates.ts">CertificateDeleteResponse</a></code>
- <code><a href="./src/resources/access/certificates/certificates.ts">CertificateAccessMTLSAuthenticationAddAnMTLSCertificateResponse</a></code>
- <code><a href="./src/resources/access/certificates/certificates.ts">CertificateAccessMTLSAuthenticationListMTLSCertificatesResponse</a></code>

Methods:

- <code title="get /{account_or_zone}/{account_or_zone_id}/access/certificates/{uuid}">client.access.certificates.<a href="./src/resources/access/certificates/certificates.ts">retrieve</a>(accountOrZone, accountOrZoneId, uuid) -> CertificateRetrieveResponse</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/access/certificates/{uuid}">client.access.certificates.<a href="./src/resources/access/certificates/certificates.ts">update</a>(accountOrZone, accountOrZoneId, uuid, { ...params }) -> CertificateUpdateResponse</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/certificates/{uuid}">client.access.certificates.<a href="./src/resources/access/certificates/certificates.ts">delete</a>(accountOrZone, accountOrZoneId, uuid) -> CertificateDeleteResponse</code>
- <code title="post /{account_or_zone}/{account_or_zone_id}/access/certificates">client.access.certificates.<a href="./src/resources/access/certificates/certificates.ts">accessMTLSAuthenticationAddAnMTLSCertificate</a>(accountOrZone, accountOrZoneId, { ...params }) -> CertificateAccessMTLSAuthenticationAddAnMTLSCertificateResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/certificates">client.access.certificates.<a href="./src/resources/access/certificates/certificates.ts">accessMTLSAuthenticationListMTLSCertificates</a>(accountOrZone, accountOrZoneId) -> CertificateAccessMTLSAuthenticationListMTLSCertificatesResponse | null</code>

### Settings

Types:

- <code><a href="./src/resources/access/certificates/settings.ts">SettingUpdateResponse</a></code>
- <code><a href="./src/resources/access/certificates/settings.ts">SettingListResponse</a></code>

Methods:

- <code title="put /{account_or_zone}/{account_or_zone_id}/access/certificates/settings">client.access.certificates.settings.<a href="./src/resources/access/certificates/settings.ts">update</a>(accountOrZone, accountOrZoneId, { ...params }) -> SettingUpdateResponse | null</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/certificates/settings">client.access.certificates.settings.<a href="./src/resources/access/certificates/settings.ts">list</a>(accountOrZone, accountOrZoneId) -> SettingListResponse | null</code>

## Groups

Types:

- <code><a href="./src/resources/access/groups.ts">GroupRetrieveResponse</a></code>
- <code><a href="./src/resources/access/groups.ts">GroupUpdateResponse</a></code>
- <code><a href="./src/resources/access/groups.ts">GroupDeleteResponse</a></code>
- <code><a href="./src/resources/access/groups.ts">GroupAccessGroupsCreateAnAccessGroupResponse</a></code>
- <code><a href="./src/resources/access/groups.ts">GroupAccessGroupsListAccessGroupsResponse</a></code>

Methods:

- <code title="get /{account_or_zone}/{account_or_zone_id}/access/groups/{uuid}">client.access.groups.<a href="./src/resources/access/groups.ts">retrieve</a>(accountOrZone, accountOrZoneId, uuid) -> GroupRetrieveResponse</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/access/groups/{uuid}">client.access.groups.<a href="./src/resources/access/groups.ts">update</a>(accountOrZone, accountOrZoneId, uuid, { ...params }) -> GroupUpdateResponse</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/groups/{uuid}">client.access.groups.<a href="./src/resources/access/groups.ts">delete</a>(accountOrZone, accountOrZoneId, uuid) -> GroupDeleteResponse</code>
- <code title="post /{account_or_zone}/{account_or_zone_id}/access/groups">client.access.groups.<a href="./src/resources/access/groups.ts">accessGroupsCreateAnAccessGroup</a>(accountOrZone, accountOrZoneId, { ...params }) -> GroupAccessGroupsCreateAnAccessGroupResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/groups">client.access.groups.<a href="./src/resources/access/groups.ts">accessGroupsListAccessGroups</a>(accountOrZone, accountOrZoneId) -> GroupAccessGroupsListAccessGroupsResponse | null</code>

## IdentityProviders

Types:

- <code><a href="./src/resources/access/identity-providers.ts">IdentityProviderRetrieveResponse</a></code>
- <code><a href="./src/resources/access/identity-providers.ts">IdentityProviderUpdateResponse</a></code>
- <code><a href="./src/resources/access/identity-providers.ts">IdentityProviderDeleteResponse</a></code>
- <code><a href="./src/resources/access/identity-providers.ts">IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse</a></code>
- <code><a href="./src/resources/access/identity-providers.ts">IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse</a></code>

Methods:

- <code title="get /{account_or_zone}/{account_or_zone_id}/access/identity_providers/{uuid}">client.access.identityProviders.<a href="./src/resources/access/identity-providers.ts">retrieve</a>(accountOrZone, accountOrZoneId, uuid) -> IdentityProviderRetrieveResponse</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/access/identity_providers/{uuid}">client.access.identityProviders.<a href="./src/resources/access/identity-providers.ts">update</a>(accountOrZone, accountOrZoneId, uuid, { ...params }) -> IdentityProviderUpdateResponse</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/access/identity_providers/{uuid}">client.access.identityProviders.<a href="./src/resources/access/identity-providers.ts">delete</a>(accountOrZone, accountOrZoneId, uuid) -> IdentityProviderDeleteResponse</code>
- <code title="post /{account_or_zone}/{account_or_zone_id}/access/identity_providers">client.access.identityProviders.<a href="./src/resources/access/identity-providers.ts">accessIdentityProvidersAddAnAccessIdentityProvider</a>(accountOrZone, accountOrZoneId, { ...params }) -> IdentityProviderAccessIdentityProvidersAddAnAccessIdentityProviderResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/identity_providers">client.access.identityProviders.<a href="./src/resources/access/identity-providers.ts">accessIdentityProvidersListAccessIdentityProviders</a>(accountOrZone, accountOrZoneId) -> IdentityProviderAccessIdentityProvidersListAccessIdentityProvidersResponse | null</code>

## Organizations

Types:

- <code><a href="./src/resources/access/organizations.ts">OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse</a></code>
- <code><a href="./src/resources/access/organizations.ts">OrganizationZeroTrustOrganizationGetYourZeroTrustOrganizationResponse</a></code>
- <code><a href="./src/resources/access/organizations.ts">OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse</a></code>

Methods:

- <code title="post /{account_or_zone}/{account_or_zone_id}/access/organizations">client.access.organizations.<a href="./src/resources/access/organizations.ts">zeroTrustOrganizationCreateYourZeroTrustOrganization</a>(accountOrZone, accountOrZoneId, { ...params }) -> OrganizationZeroTrustOrganizationCreateYourZeroTrustOrganizationResponse</code>
- <code title="get /{account_or_zone}/{account_or_zone_id}/access/organizations">client.access.organizations.<a href="./src/resources/access/organizations.ts">zeroTrustOrganizationGetYourZeroTrustOrganization</a>(accountOrZone, accountOrZoneId) -> OrganizationZeroTrustOrganizationGetYourZeroTrustOrganizationResponse</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/access/organizations">client.access.organizations.<a href="./src/resources/access/organizations.ts">zeroTrustOrganizationUpdateYourZeroTrustOrganization</a>(accountOrZone, accountOrZoneId, { ...params }) -> OrganizationZeroTrustOrganizationUpdateYourZeroTrustOrganizationResponse</code>

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

- <code><a href="./src/resources/access/bookmarks.ts">BookmarkRetrieveResponse</a></code>
- <code><a href="./src/resources/access/bookmarks.ts">BookmarkUpdateResponse</a></code>
- <code><a href="./src/resources/access/bookmarks.ts">BookmarkDeleteResponse</a></code>
- <code><a href="./src/resources/access/bookmarks.ts">BookmarkAccessBookmarkApplicationsDeprecatedListBookmarkApplicationsResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/access/bookmarks/{uuid}">client.access.bookmarks.<a href="./src/resources/access/bookmarks.ts">retrieve</a>(identifier, uuid) -> BookmarkRetrieveResponse</code>
- <code title="put /accounts/{identifier}/access/bookmarks/{uuid}">client.access.bookmarks.<a href="./src/resources/access/bookmarks.ts">update</a>(identifier, uuid) -> BookmarkUpdateResponse</code>
- <code title="delete /accounts/{identifier}/access/bookmarks/{uuid}">client.access.bookmarks.<a href="./src/resources/access/bookmarks.ts">delete</a>(identifier, uuid) -> BookmarkDeleteResponse</code>
- <code title="get /accounts/{identifier}/access/bookmarks">client.access.bookmarks.<a href="./src/resources/access/bookmarks.ts">accessBookmarkApplicationsDeprecatedListBookmarkApplications</a>(identifier) -> BookmarkAccessBookmarkApplicationsDeprecatedListBookmarkApplicationsResponse | null</code>

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

- <code><a href="./src/resources/access/users/active-sessions.ts">ActiveSessionRetrieveResponse</a></code>
- <code><a href="./src/resources/access/users/active-sessions.ts">ActiveSessionListResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/access/users/{id}/active_sessions/{nonce}">client.access.users.activeSessions.<a href="./src/resources/access/users/active-sessions.ts">retrieve</a>(identifier, id, nonce) -> ActiveSessionRetrieveResponse</code>
- <code title="get /accounts/{identifier}/access/users/{id}/active_sessions">client.access.users.activeSessions.<a href="./src/resources/access/users/active-sessions.ts">list</a>(identifier, id) -> ActiveSessionListResponse | null</code>

### LastSeenIdentity

Types:

- <code><a href="./src/resources/access/users/last-seen-identity.ts">LastSeenIdentityRetrieveResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/access/users/{id}/last_seen_identity">client.access.users.lastSeenIdentity.<a href="./src/resources/access/users/last-seen-identity.ts">retrieve</a>(identifier, id) -> LastSeenIdentityRetrieveResponse</code>

### FailedLogins

Types:

- <code><a href="./src/resources/access/users/failed-logins.ts">FailedLoginZeroTrustUsersGetFailedLoginsResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/access/users/{id}/failed_logins">client.access.users.failedLogins.<a href="./src/resources/access/users/failed-logins.ts">zeroTrustUsersGetFailedLogins</a>(identifier, id) -> FailedLoginZeroTrustUsersGetFailedLoginsResponse | null</code>

## CustomPages

Types:

- <code><a href="./src/resources/access/custom-pages.ts">CustomPageCreateResponse</a></code>
- <code><a href="./src/resources/access/custom-pages.ts">CustomPageRetrieveResponse</a></code>
- <code><a href="./src/resources/access/custom-pages.ts">CustomPageUpdateResponse</a></code>
- <code><a href="./src/resources/access/custom-pages.ts">CustomPageListResponse</a></code>
- <code><a href="./src/resources/access/custom-pages.ts">CustomPageDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{identifier}/access/custom_pages">client.access.customPages.<a href="./src/resources/access/custom-pages.ts">create</a>(identifier, { ...params }) -> CustomPageCreateResponse</code>
- <code title="get /accounts/{identifier}/access/custom_pages/{uuid}">client.access.customPages.<a href="./src/resources/access/custom-pages.ts">retrieve</a>(identifier, uuid) -> CustomPageRetrieveResponse</code>
- <code title="put /accounts/{identifier}/access/custom_pages/{uuid}">client.access.customPages.<a href="./src/resources/access/custom-pages.ts">update</a>(identifier, uuid, { ...params }) -> CustomPageUpdateResponse</code>
- <code title="get /accounts/{identifier}/access/custom_pages">client.access.customPages.<a href="./src/resources/access/custom-pages.ts">list</a>(identifier) -> CustomPageListResponse | null</code>
- <code title="delete /accounts/{identifier}/access/custom_pages/{uuid}">client.access.customPages.<a href="./src/resources/access/custom-pages.ts">delete</a>(identifier, uuid) -> CustomPageDeleteResponse</code>

## Tags

Types:

- <code><a href="./src/resources/access/tags.ts">TagListResponse</a></code>

Methods:

- <code title="get /accounts/{identifier}/access/tags">client.access.tags.<a href="./src/resources/access/tags.ts">list</a>(identifier) -> TagListResponse | null</code>

# DNSRecords

Types:

- <code><a href="./src/resources/dns-records/dns-records.ts">DNSRecordRetrieveResponse</a></code>
- <code><a href="./src/resources/dns-records/dns-records.ts">DNSRecordUpdateResponse</a></code>
- <code><a href="./src/resources/dns-records/dns-records.ts">DNSRecordDeleteResponse</a></code>
- <code><a href="./src/resources/dns-records/dns-records.ts">DNSRecordDNSRecordsForAZoneCreateDNSRecordResponse</a></code>
- <code><a href="./src/resources/dns-records/dns-records.ts">DNSRecordDNSRecordsForAZoneListDNSRecordsResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/dns_records/{dns_record_id}">client.dnsRecords.<a href="./src/resources/dns-records/dns-records.ts">retrieve</a>(zoneId, dnsRecordId) -> DNSRecordRetrieveResponse</code>
- <code title="put /zones/{zone_id}/dns_records/{dns_record_id}">client.dnsRecords.<a href="./src/resources/dns-records/dns-records.ts">update</a>(zoneId, dnsRecordId, { ...params }) -> DNSRecordUpdateResponse</code>
- <code title="delete /zones/{zone_id}/dns_records/{dns_record_id}">client.dnsRecords.<a href="./src/resources/dns-records/dns-records.ts">delete</a>(zoneId, dnsRecordId) -> DNSRecordDeleteResponse</code>
- <code title="post /zones/{zone_id}/dns_records">client.dnsRecords.<a href="./src/resources/dns-records/dns-records.ts">dnsRecordsForAZoneCreateDNSRecord</a>(zoneId, { ...params }) -> DNSRecordDNSRecordsForAZoneCreateDNSRecordResponse</code>
- <code title="get /zones/{zone_id}/dns_records">client.dnsRecords.<a href="./src/resources/dns-records/dns-records.ts">dnsRecordsForAZoneListDNSRecords</a>(zoneId, { ...params }) -> DNSRecordDNSRecordsForAZoneListDNSRecordsResponse | null</code>

## Exports

Types:

- <code><a href="./src/resources/dns-records/exports.ts">ExportListResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/dns_records/export">client.dnsRecords.exports.<a href="./src/resources/dns-records/exports.ts">list</a>(zoneId) -> string</code>

## Imports

Types:

- <code><a href="./src/resources/dns-records/imports.ts">ImportDNSRecordsForAZoneImportDNSRecordsResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/dns_records/import">client.dnsRecords.imports.<a href="./src/resources/dns-records/imports.ts">dnsRecordsForAZoneImportDNSRecords</a>(zoneId, { ...params }) -> ImportDNSRecordsForAZoneImportDNSRecordsResponse</code>

## Scans

Types:

- <code><a href="./src/resources/dns-records/scans.ts">ScanDNSRecordsForAZoneScanDNSRecordsResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/dns_records/scan">client.dnsRecords.scans.<a href="./src/resources/dns-records/scans.ts">dnsRecordsForAZoneScanDNSRecords</a>(zoneId) -> ScanDNSRecordsForAZoneScanDNSRecordsResponse</code>

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

- <code><a href="./src/resources/emails/routings/rules/rules.ts">RuleRetrieveResponse</a></code>
- <code><a href="./src/resources/emails/routings/rules/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/emails/routings/rules/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/emails/routings/rules/rules.ts">RuleEmailRoutingRoutingRulesCreateRoutingRuleResponse</a></code>
- <code><a href="./src/resources/emails/routings/rules/rules.ts">RuleEmailRoutingRoutingRulesListRoutingRulesResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/email/routing/rules/{rule_identifier}">client.emails.routings.rules.<a href="./src/resources/emails/routings/rules/rules.ts">retrieve</a>(zoneIdentifier, ruleIdentifier) -> RuleRetrieveResponse</code>
- <code title="put /zones/{zone_identifier}/email/routing/rules/{rule_identifier}">client.emails.routings.rules.<a href="./src/resources/emails/routings/rules/rules.ts">update</a>(zoneIdentifier, ruleIdentifier, { ...params }) -> RuleUpdateResponse</code>
- <code title="delete /zones/{zone_identifier}/email/routing/rules/{rule_identifier}">client.emails.routings.rules.<a href="./src/resources/emails/routings/rules/rules.ts">delete</a>(zoneIdentifier, ruleIdentifier) -> RuleDeleteResponse</code>
- <code title="post /zones/{zone_identifier}/email/routing/rules">client.emails.routings.rules.<a href="./src/resources/emails/routings/rules/rules.ts">emailRoutingRoutingRulesCreateRoutingRule</a>(zoneIdentifier, { ...params }) -> RuleEmailRoutingRoutingRulesCreateRoutingRuleResponse</code>
- <code title="get /zones/{zone_identifier}/email/routing/rules">client.emails.routings.rules.<a href="./src/resources/emails/routings/rules/rules.ts">emailRoutingRoutingRulesListRoutingRules</a>(zoneIdentifier, { ...params }) -> RuleEmailRoutingRoutingRulesListRoutingRulesResponse | null</code>

#### CatchAlls

Types:

- <code><a href="./src/resources/emails/routings/rules/catch-alls.ts">CatchAllEmailRoutingRoutingRulesGetCatchAllRuleResponse</a></code>
- <code><a href="./src/resources/emails/routings/rules/catch-alls.ts">CatchAllEmailRoutingRoutingRulesUpdateCatchAllRuleResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/email/routing/rules/catch_all">client.emails.routings.rules.catchAlls.<a href="./src/resources/emails/routings/rules/catch-alls.ts">emailRoutingRoutingRulesGetCatchAllRule</a>(zoneIdentifier) -> CatchAllEmailRoutingRoutingRulesGetCatchAllRuleResponse</code>
- <code title="put /zones/{zone_identifier}/email/routing/rules/catch_all">client.emails.routings.rules.catchAlls.<a href="./src/resources/emails/routings/rules/catch-alls.ts">emailRoutingRoutingRulesUpdateCatchAllRule</a>(zoneIdentifier, { ...params }) -> CatchAllEmailRoutingRoutingRulesUpdateCatchAllRuleResponse</code>

### Addresses

Types:

- <code><a href="./src/resources/emails/routings/addresses.ts">AddressRetrieveResponse</a></code>
- <code><a href="./src/resources/emails/routings/addresses.ts">AddressDeleteResponse</a></code>
- <code><a href="./src/resources/emails/routings/addresses.ts">AddressEmailRoutingDestinationAddressesCreateADestinationAddressResponse</a></code>
- <code><a href="./src/resources/emails/routings/addresses.ts">AddressEmailRoutingDestinationAddressesListDestinationAddressesResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/email/routing/addresses/{destination_address_identifier}">client.emails.routings.addresses.<a href="./src/resources/emails/routings/addresses.ts">retrieve</a>(accountIdentifier, destinationAddressIdentifier) -> AddressRetrieveResponse</code>
- <code title="delete /accounts/{account_identifier}/email/routing/addresses/{destination_address_identifier}">client.emails.routings.addresses.<a href="./src/resources/emails/routings/addresses.ts">delete</a>(accountIdentifier, destinationAddressIdentifier) -> AddressDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/email/routing/addresses">client.emails.routings.addresses.<a href="./src/resources/emails/routings/addresses.ts">emailRoutingDestinationAddressesCreateADestinationAddress</a>(accountIdentifier, { ...params }) -> AddressEmailRoutingDestinationAddressesCreateADestinationAddressResponse</code>
- <code title="get /accounts/{account_identifier}/email/routing/addresses">client.emails.routings.addresses.<a href="./src/resources/emails/routings/addresses.ts">emailRoutingDestinationAddressesListDestinationAddresses</a>(accountIdentifier, { ...params }) -> AddressEmailRoutingDestinationAddressesListDestinationAddressesResponse | null</code>

# AccountMembers

# Tunnels

Types:

- <code><a href="./src/resources/tunnels/tunnels.ts">TunnelRetrieveResponse</a></code>
- <code><a href="./src/resources/tunnels/tunnels.ts">TunnelDeleteResponse</a></code>
- <code><a href="./src/resources/tunnels/tunnels.ts">TunnelArgoTunnelCreateAnArgoTunnelResponse</a></code>
- <code><a href="./src/resources/tunnels/tunnels.ts">TunnelArgoTunnelListArgoTunnelsResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/tunnels/{tunnel_id}">client.tunnels.<a href="./src/resources/tunnels/tunnels.ts">retrieve</a>(accountId, tunnelId) -> TunnelRetrieveResponse</code>
- <code title="delete /accounts/{account_id}/tunnels/{tunnel_id}">client.tunnels.<a href="./src/resources/tunnels/tunnels.ts">delete</a>(accountId, tunnelId, { ...params }) -> TunnelDeleteResponse</code>
- <code title="post /accounts/{account_id}/tunnels">client.tunnels.<a href="./src/resources/tunnels/tunnels.ts">argoTunnelCreateAnArgoTunnel</a>(accountId, { ...params }) -> TunnelArgoTunnelCreateAnArgoTunnelResponse</code>
- <code title="get /accounts/{account_id}/tunnels">client.tunnels.<a href="./src/resources/tunnels/tunnels.ts">argoTunnelListArgoTunnels</a>(accountId, { ...params }) -> TunnelArgoTunnelListArgoTunnelsResponse | null</code>

## Connections

Types:

- <code><a href="./src/resources/tunnels/connections.ts">ConnectionDeleteResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/tunnels/{tunnel_id}/connections">client.tunnels.connections.<a href="./src/resources/tunnels/connections.ts">delete</a>(accountId, tunnelId, { ...params }) -> ConnectionDeleteResponse</code>

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

- <code><a href="./src/resources/d1/database.ts">DatabaseRetrieveResponse</a></code>
- <code><a href="./src/resources/d1/database.ts">DatabaseDeleteResponse</a></code>
- <code><a href="./src/resources/d1/database.ts">DatabaseQueryResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/d1/database/{database_identifier}">client.d1.database.<a href="./src/resources/d1/database.ts">retrieve</a>(accountIdentifier, databaseIdentifier) -> DatabaseRetrieveResponse</code>
- <code title="delete /accounts/{account_identifier}/d1/database/{database_identifier}">client.d1.database.<a href="./src/resources/d1/database.ts">delete</a>(accountIdentifier, databaseIdentifier) -> DatabaseDeleteResponse | null</code>
- <code title="post /accounts/{account_identifier}/d1/database/{database_identifier}/query">client.d1.database.<a href="./src/resources/d1/database.ts">query</a>(accountIdentifier, databaseIdentifier, { ...params }) -> DatabaseQueryResponse</code>

# Dex

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

- <code><a href="./src/resources/dex/http-tests/http-tests.ts">HTTPTestRetrieveResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/http-tests/{test_id}">client.dex.httpTests.<a href="./src/resources/dex/http-tests/http-tests.ts">retrieve</a>(accountId, testId, { ...params }) -> HTTPTestRetrieveResponse</code>

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

- <code><a href="./src/resources/dex/traceroute-tests.ts">TracerouteTestRetrieveResponse</a></code>
- <code><a href="./src/resources/dex/traceroute-tests.ts">TracerouteTestNetworkPathResponse</a></code>
- <code><a href="./src/resources/dex/traceroute-tests.ts">TracerouteTestPercentilesResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/traceroute-tests/{test_id}">client.dex.tracerouteTests.<a href="./src/resources/dex/traceroute-tests.ts">retrieve</a>(accountId, testId, { ...params }) -> TracerouteTestRetrieveResponse</code>
- <code title="get /accounts/{account_id}/dex/traceroute-tests/{test_id}/network-path">client.dex.tracerouteTests.<a href="./src/resources/dex/traceroute-tests.ts">networkPath</a>(accountId, testId, { ...params }) -> TracerouteTestNetworkPathResponse</code>
- <code title="get /accounts/{account_id}/dex/traceroute-tests/{test_id}/percentiles">client.dex.tracerouteTests.<a href="./src/resources/dex/traceroute-tests.ts">percentiles</a>(accountId, testId, { ...params }) -> TracerouteTestPercentilesResponse</code>

# R2

## Buckets

Types:

- <code><a href="./src/resources/r2/buckets.ts">BucketCreateResponse</a></code>
- <code><a href="./src/resources/r2/buckets.ts">BucketRetrieveResponse</a></code>
- <code><a href="./src/resources/r2/buckets.ts">BucketListResponse</a></code>
- <code><a href="./src/resources/r2/buckets.ts">BucketDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/r2/buckets">client.r2.buckets.<a href="./src/resources/r2/buckets.ts">create</a>(accountId, { ...params }) -> BucketCreateResponse</code>
- <code title="get /accounts/{account_id}/r2/buckets/{bucket_name}">client.r2.buckets.<a href="./src/resources/r2/buckets.ts">retrieve</a>(accountId, bucketName) -> BucketRetrieveResponse</code>
- <code title="get /accounts/{account_id}/r2/buckets">client.r2.buckets.<a href="./src/resources/r2/buckets.ts">list</a>(accountId, { ...params }) -> BucketListResponse</code>
- <code title="delete /accounts/{account_id}/r2/buckets/{bucket_name}">client.r2.buckets.<a href="./src/resources/r2/buckets.ts">delete</a>(accountId, bucketName) -> BucketDeleteResponse</code>

# Stream

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
- <code><a href="./src/resources/warp-connector.ts">WarpConnectorRetrieveResponse</a></code>
- <code><a href="./src/resources/warp-connector.ts">WarpConnectorUpdateResponse</a></code>
- <code><a href="./src/resources/warp-connector.ts">WarpConnectorListResponse</a></code>
- <code><a href="./src/resources/warp-connector.ts">WarpConnectorDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/warp_connector">client.warpConnector.<a href="./src/resources/warp-connector.ts">create</a>(accountId, { ...params }) -> WarpConnectorCreateResponse</code>
- <code title="get /accounts/{account_id}/warp_connector/{tunnel_id}">client.warpConnector.<a href="./src/resources/warp-connector.ts">retrieve</a>(accountId, tunnelId) -> WarpConnectorRetrieveResponse</code>
- <code title="patch /accounts/{account_id}/warp_connector/{tunnel_id}">client.warpConnector.<a href="./src/resources/warp-connector.ts">update</a>(accountId, tunnelId, { ...params }) -> WarpConnectorUpdateResponse</code>
- <code title="get /accounts/{account_id}/warp_connector">client.warpConnector.<a href="./src/resources/warp-connector.ts">list</a>(accountId, { ...params }) -> WarpConnectorListResponse | null</code>
- <code title="delete /accounts/{account_id}/warp_connector/{tunnel_id}">client.warpConnector.<a href="./src/resources/warp-connector.ts">delete</a>(accountId, tunnelId, { ...params }) -> WarpConnectorDeleteResponse</code>

# Dispatchers

## Scripts

Types:

- <code><a href="./src/resources/dispatchers/scripts.ts">ScriptRetrieveResponse</a></code>
- <code><a href="./src/resources/dispatchers/scripts.ts">ScriptUpdateResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}">client.dispatchers.scripts.<a href="./src/resources/dispatchers/scripts.ts">retrieve</a>(accountId, dispatchNamespace, scriptName) -> ScriptRetrieveResponse</code>
- <code title="put /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}">client.dispatchers.scripts.<a href="./src/resources/dispatchers/scripts.ts">update</a>(accountId, dispatchNamespace, scriptName, { ...params }) -> ScriptUpdateResponse</code>
- <code title="delete /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}">client.dispatchers.scripts.<a href="./src/resources/dispatchers/scripts.ts">delete</a>(accountId, dispatchNamespace, scriptName, { ...params }) -> void</code>

# WorkersForPlatforms

## Dispatch

### Namespaces

#### Scripts

##### Content

Types:

- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/content.ts">ContentUpdateResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/content">client.workersForPlatforms.dispatch.namespaces.scripts.content.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/content.ts">retrieve</a>(accountId, dispatchNamespace, scriptName) -> Response</code>
- <code title="put /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/content">client.workersForPlatforms.dispatch.namespaces.scripts.content.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/content.ts">update</a>(accountId, dispatchNamespace, scriptName, { ...params }) -> ContentUpdateResponse</code>

##### Settings

Types:

- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/settings.ts">SettingRetrieveResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/settings.ts">SettingUpdateResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/settings">client.workersForPlatforms.dispatch.namespaces.scripts.settings.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/settings.ts">retrieve</a>(accountId, dispatchNamespace, scriptName) -> SettingRetrieveResponse</code>
- <code title="patch /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/settings">client.workersForPlatforms.dispatch.namespaces.scripts.settings.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/settings.ts">update</a>(accountId, dispatchNamespace, scriptName, { ...params }) -> SettingUpdateResponse</code>

# WorkerDomains

Types:

- <code><a href="./src/resources/worker-domains.ts">WorkerDomainRetrieveResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/workers/domains/{domain_id}">client.workerDomains.<a href="./src/resources/worker-domains.ts">retrieve</a>(accountId, domainId) -> WorkerDomainRetrieveResponse</code>
- <code title="delete /accounts/{account_id}/workers/domains/{domain_id}">client.workerDomains.<a href="./src/resources/worker-domains.ts">delete</a>(accountId, domainId) -> void</code>

# WorkerScripts

## Content

Types:

- <code><a href="./src/resources/worker-scripts/content.ts">ContentUpdateResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/scripts/{script_name}/content">client.workerScripts.content.<a href="./src/resources/worker-scripts/content.ts">update</a>(accountId, scriptName, { ...params }) -> ContentUpdateResponse</code>

## ContentV2

Methods:

- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/content/v2">client.workerScripts.contentV2.<a href="./src/resources/worker-scripts/content-v2.ts">retrieve</a>(accountId, scriptName) -> Response</code>

## Settings

Types:

- <code><a href="./src/resources/worker-scripts/settings.ts">SettingRetrieveResponse</a></code>
- <code><a href="./src/resources/worker-scripts/settings.ts">SettingUpdateResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/settings">client.workerScripts.settings.<a href="./src/resources/worker-scripts/settings.ts">retrieve</a>(accountId, scriptName) -> SettingRetrieveResponse</code>
- <code title="patch /accounts/{account_id}/workers/scripts/{script_name}/settings">client.workerScripts.settings.<a href="./src/resources/worker-scripts/settings.ts">update</a>(accountId, scriptName, { ...params }) -> SettingUpdateResponse</code>

# Zerotrust

## ConnectivitySettings

Types:

- <code><a href="./src/resources/zerotrust/connectivity-settings.ts">ConnectivitySettingRetrieveResponse</a></code>
- <code><a href="./src/resources/zerotrust/connectivity-settings.ts">ConnectivitySettingUpdateResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/zerotrust/connectivity_settings">client.zerotrust.connectivitySettings.<a href="./src/resources/zerotrust/connectivity-settings.ts">retrieve</a>(accountId) -> ConnectivitySettingRetrieveResponse</code>
- <code title="patch /accounts/{account_id}/zerotrust/connectivity_settings">client.zerotrust.connectivitySettings.<a href="./src/resources/zerotrust/connectivity-settings.ts">update</a>(accountId, { ...params }) -> ConnectivitySettingUpdateResponse</code>

# Addressing

## Prefixes

### BgpPrefixes

Types:

- <code><a href="./src/resources/addressing/prefixes/bgp-prefixes.ts">BgpPrefixRetrieveResponse</a></code>
- <code><a href="./src/resources/addressing/prefixes/bgp-prefixes.ts">BgpPrefixUpdateResponse</a></code>
- <code><a href="./src/resources/addressing/prefixes/bgp-prefixes.ts">BgpPrefixListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}/bgp/prefixes/{bgp_prefix_identifier}">client.addressing.prefixes.bgpPrefixes.<a href="./src/resources/addressing/prefixes/bgp-prefixes.ts">retrieve</a>(accountIdentifier, prefixIdentifier, bgpPrefixIdentifier) -> BgpPrefixRetrieveResponse</code>
- <code title="patch /accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}/bgp/prefixes/{bgp_prefix_identifier}">client.addressing.prefixes.bgpPrefixes.<a href="./src/resources/addressing/prefixes/bgp-prefixes.ts">update</a>(accountIdentifier, prefixIdentifier, bgpPrefixIdentifier, { ...params }) -> BgpPrefixUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}/bgp/prefixes">client.addressing.prefixes.bgpPrefixes.<a href="./src/resources/addressing/prefixes/bgp-prefixes.ts">list</a>(accountIdentifier, prefixIdentifier) -> BgpPrefixListResponse | null</code>

### Bindings

Types:

- <code><a href="./src/resources/addressing/prefixes/bindings.ts">BindingCreateResponse</a></code>
- <code><a href="./src/resources/addressing/prefixes/bindings.ts">BindingRetrieveResponse</a></code>
- <code><a href="./src/resources/addressing/prefixes/bindings.ts">BindingListResponse</a></code>
- <code><a href="./src/resources/addressing/prefixes/bindings.ts">BindingDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}/bindings">client.addressing.prefixes.bindings.<a href="./src/resources/addressing/prefixes/bindings.ts">create</a>(accountIdentifier, prefixIdentifier, { ...params }) -> BindingCreateResponse</code>
- <code title="get /accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}/bindings/{binding_identifier}">client.addressing.prefixes.bindings.<a href="./src/resources/addressing/prefixes/bindings.ts">retrieve</a>(accountIdentifier, prefixIdentifier, bindingIdentifier) -> BindingRetrieveResponse</code>
- <code title="get /accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}/bindings">client.addressing.prefixes.bindings.<a href="./src/resources/addressing/prefixes/bindings.ts">list</a>(accountIdentifier, prefixIdentifier) -> BindingListResponse</code>
- <code title="delete /accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}/bindings/{binding_identifier}">client.addressing.prefixes.bindings.<a href="./src/resources/addressing/prefixes/bindings.ts">delete</a>(accountIdentifier, prefixIdentifier, bindingIdentifier) -> BindingDeleteResponse</code>

## Services

Types:

- <code><a href="./src/resources/addressing/services.ts">ServiceListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/addressing/services">client.addressing.services.<a href="./src/resources/addressing/services.ts">list</a>(accountIdentifier) -> ServiceListResponse</code>

# Challenges

## Widgets

Types:

- <code><a href="./src/resources/challenges/widgets.ts">WidgetCreateResponse</a></code>
- <code><a href="./src/resources/challenges/widgets.ts">WidgetRetrieveResponse</a></code>
- <code><a href="./src/resources/challenges/widgets.ts">WidgetUpdateResponse</a></code>
- <code><a href="./src/resources/challenges/widgets.ts">WidgetListResponse</a></code>
- <code><a href="./src/resources/challenges/widgets.ts">WidgetDeleteResponse</a></code>
- <code><a href="./src/resources/challenges/widgets.ts">WidgetRotateSecretResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/challenges/widgets">client.challenges.widgets.<a href="./src/resources/challenges/widgets.ts">create</a>(accountIdentifier, { ...params }) -> WidgetCreateResponse</code>
- <code title="get /accounts/{account_identifier}/challenges/widgets/{sitekey}">client.challenges.widgets.<a href="./src/resources/challenges/widgets.ts">retrieve</a>(accountIdentifier, sitekey) -> WidgetRetrieveResponse</code>
- <code title="put /accounts/{account_identifier}/challenges/widgets/{sitekey}">client.challenges.widgets.<a href="./src/resources/challenges/widgets.ts">update</a>(accountIdentifier, sitekey, { ...params }) -> WidgetUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/challenges/widgets">client.challenges.widgets.<a href="./src/resources/challenges/widgets.ts">list</a>(accountIdentifier, { ...params }) -> WidgetListResponse</code>
- <code title="delete /accounts/{account_identifier}/challenges/widgets/{sitekey}">client.challenges.widgets.<a href="./src/resources/challenges/widgets.ts">delete</a>(accountIdentifier, sitekey) -> WidgetDeleteResponse</code>
- <code title="post /accounts/{account_identifier}/challenges/widgets/{sitekey}/rotate_secret">client.challenges.widgets.<a href="./src/resources/challenges/widgets.ts">rotateSecret</a>(accountIdentifier, sitekey, { ...params }) -> WidgetRotateSecretResponse</code>

# Hyperdrive

## Configs

# Intel

## IndicatorFeeds

Types:

- <code><a href="./src/resources/intel/indicator-feeds.ts">IndicatorFeedCreateResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds.ts">IndicatorFeedRetrieveResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds.ts">IndicatorFeedListResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds.ts">IndicatorFeedDataResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds.ts">IndicatorFeedPermissionsAddResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds.ts">IndicatorFeedPermissionsRemoveResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds.ts">IndicatorFeedPermissionsViewResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds.ts">IndicatorFeedSnapshotResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/intel/indicator-feeds">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds.ts">create</a>(accountIdentifier, { ...params }) -> IndicatorFeedCreateResponse</code>
- <code title="get /accounts/{account_identifier}/intel/indicator-feeds/{feed_id}">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds.ts">retrieve</a>(accountIdentifier, feedId) -> IndicatorFeedRetrieveResponse</code>
- <code title="get /accounts/{account_identifier}/intel/indicator-feeds">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds.ts">list</a>(accountIdentifier) -> IndicatorFeedListResponse</code>
- <code title="get /accounts/{account_identifier}/intel/indicator-feeds/{feed_id}/data">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds.ts">data</a>(accountIdentifier, feedId) -> string</code>
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
- <code><a href="./src/resources/rum/site-infos.ts">SiteInfoRetrieveResponse</a></code>
- <code><a href="./src/resources/rum/site-infos.ts">SiteInfoUpdateResponse</a></code>
- <code><a href="./src/resources/rum/site-infos.ts">SiteInfoListResponse</a></code>
- <code><a href="./src/resources/rum/site-infos.ts">SiteInfoDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/rum/site_info">client.rum.siteInfos.<a href="./src/resources/rum/site-infos.ts">create</a>(accountIdentifier, { ...params }) -> SiteInfoCreateResponse</code>
- <code title="get /accounts/{account_identifier}/rum/site_info/{site_identifier}">client.rum.siteInfos.<a href="./src/resources/rum/site-infos.ts">retrieve</a>(accountIdentifier, siteIdentifier) -> SiteInfoRetrieveResponse</code>
- <code title="put /accounts/{account_identifier}/rum/site_info/{site_identifier}">client.rum.siteInfos.<a href="./src/resources/rum/site-infos.ts">update</a>(accountIdentifier, siteIdentifier, { ...params }) -> SiteInfoUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/rum/site_info/list">client.rum.siteInfos.<a href="./src/resources/rum/site-infos.ts">list</a>(accountIdentifier, { ...params }) -> SiteInfoListResponse</code>
- <code title="delete /accounts/{account_identifier}/rum/site_info/{site_identifier}">client.rum.siteInfos.<a href="./src/resources/rum/site-infos.ts">delete</a>(accountIdentifier, siteIdentifier) -> SiteInfoDeleteResponse</code>

## Rules

Types:

- <code><a href="./src/resources/rum/rules.ts">RuleCreateResponse</a></code>
- <code><a href="./src/resources/rum/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/rum/rules.ts">RuleListResponse</a></code>
- <code><a href="./src/resources/rum/rules.ts">RuleDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/rum/v2/{ruleset_identifier}/rule">client.rum.rules.<a href="./src/resources/rum/rules.ts">create</a>(accountIdentifier, rulesetIdentifier, { ...params }) -> RuleCreateResponse</code>
- <code title="put /accounts/{account_identifier}/rum/v2/{ruleset_identifier}/rule/{rule_identifier}">client.rum.rules.<a href="./src/resources/rum/rules.ts">update</a>(accountIdentifier, rulesetIdentifier, ruleIdentifier, { ...params }) -> RuleUpdateResponse</code>
- <code title="get /accounts/{account_identifier}/rum/v2/{ruleset_identifier}/rules">client.rum.rules.<a href="./src/resources/rum/rules.ts">list</a>(accountIdentifier, rulesetIdentifier) -> RuleListResponse</code>
- <code title="delete /accounts/{account_identifier}/rum/v2/{ruleset_identifier}/rule/{rule_identifier}">client.rum.rules.<a href="./src/resources/rum/rules.ts">delete</a>(accountIdentifier, rulesetIdentifier, ruleIdentifier) -> RuleDeleteResponse</code>

# Vectorize

## Indexes

Types:

- <code><a href="./src/resources/vectorize/indexes.ts">IndexListResponse</a></code>

Methods:

- <code title="get /accounts/{account_identifier}/vectorize/indexes">client.vectorize.indexes.<a href="./src/resources/vectorize/indexes.ts">list</a>(accountIdentifier) -> IndexListResponse</code>

# VectorizeIndexes

Types:

- <code><a href="./src/resources/vectorize-indexes.ts">VectorizeIndexCreateResponse</a></code>
- <code><a href="./src/resources/vectorize-indexes.ts">VectorizeIndexRetrieveResponse</a></code>
- <code><a href="./src/resources/vectorize-indexes.ts">VectorizeIndexUpdateResponse</a></code>
- <code><a href="./src/resources/vectorize-indexes.ts">VectorizeIndexDeleteResponse</a></code>
- <code><a href="./src/resources/vectorize-indexes.ts">VectorizeIndexDeleteByIDsResponse</a></code>
- <code><a href="./src/resources/vectorize-indexes.ts">VectorizeIndexGetByIDsResponse</a></code>
- <code><a href="./src/resources/vectorize-indexes.ts">VectorizeIndexInsertResponse</a></code>
- <code><a href="./src/resources/vectorize-indexes.ts">VectorizeIndexQueryResponse</a></code>
- <code><a href="./src/resources/vectorize-indexes.ts">VectorizeIndexUpsertResponse</a></code>

Methods:

- <code title="post /accounts/{account_identifier}/vectorize/indexes">client.vectorizeIndexes.<a href="./src/resources/vectorize-indexes.ts">create</a>(accountIdentifier, { ...params }) -> VectorizeIndexCreateResponse | null</code>
- <code title="get /accounts/{account_identifier}/vectorize/indexes/{index_name}">client.vectorizeIndexes.<a href="./src/resources/vectorize-indexes.ts">retrieve</a>(accountIdentifier, indexName) -> VectorizeIndexRetrieveResponse | null</code>
- <code title="put /accounts/{account_identifier}/vectorize/indexes/{index_name}">client.vectorizeIndexes.<a href="./src/resources/vectorize-indexes.ts">update</a>(accountIdentifier, indexName, { ...params }) -> VectorizeIndexUpdateResponse | null</code>
- <code title="delete /accounts/{account_identifier}/vectorize/indexes/{index_name}">client.vectorizeIndexes.<a href="./src/resources/vectorize-indexes.ts">delete</a>(accountIdentifier, indexName) -> VectorizeIndexDeleteResponse | null</code>
- <code title="post /accounts/{account_identifier}/vectorize/indexes/{index_name}/delete-by-ids">client.vectorizeIndexes.<a href="./src/resources/vectorize-indexes.ts">deleteByIds</a>(accountIdentifier, indexName, { ...params }) -> VectorizeIndexDeleteByIDsResponse | null</code>
- <code title="post /accounts/{account_identifier}/vectorize/indexes/{index_name}/get-by-ids">client.vectorizeIndexes.<a href="./src/resources/vectorize-indexes.ts">getByIds</a>(accountIdentifier, indexName, { ...params }) -> VectorizeIndexGetByIDsResponse | null</code>
- <code title="post /accounts/{account_identifier}/vectorize/indexes/{index_name}/insert">client.vectorizeIndexes.<a href="./src/resources/vectorize-indexes.ts">insert</a>(accountIdentifier, indexName) -> VectorizeIndexInsertResponse | null</code>
- <code title="post /accounts/{account_identifier}/vectorize/indexes/{index_name}/query">client.vectorizeIndexes.<a href="./src/resources/vectorize-indexes.ts">query</a>(accountIdentifier, indexName, { ...params }) -> VectorizeIndexQueryResponse | null</code>
- <code title="post /accounts/{account_identifier}/vectorize/indexes/{index_name}/upsert">client.vectorizeIndexes.<a href="./src/resources/vectorize-indexes.ts">upsert</a>(accountIdentifier, indexName) -> VectorizeIndexUpsertResponse | null</code>

# URLScanner

Types:

- <code><a href="./src/resources/url-scanner/url-scanner.ts">URLScannerScanResponse</a></code>

Methods:

- <code title="get /accounts/{accountId}/urlscanner/scan">client.urlScanner.<a href="./src/resources/url-scanner/url-scanner.ts">scan</a>(accountId, { ...params }) -> URLScannerScanResponse</code>

## Scans

Types:

- <code><a href="./src/resources/url-scanner/scans.ts">ScanCreateResponse</a></code>
- <code><a href="./src/resources/url-scanner/scans.ts">ScanRetrieveResponse</a></code>
- <code><a href="./src/resources/url-scanner/scans.ts">ScanHarResponse</a></code>

Methods:

- <code title="post /accounts/{accountId}/urlscanner/scan">client.urlScanner.scans.<a href="./src/resources/url-scanner/scans.ts">create</a>(accountId, { ...params }) -> ScanCreateResponse</code>
- <code title="get /accounts/{accountId}/urlscanner/scan/{scanId}">client.urlScanner.scans.<a href="./src/resources/url-scanner/scans.ts">retrieve</a>(accountId, scanId) -> ScanRetrieveResponse</code>
- <code title="get /accounts/{accountId}/urlscanner/scan/{scanId}/har">client.urlScanner.scans.<a href="./src/resources/url-scanner/scans.ts">har</a>(accountId, scanId) -> ScanHarResponse</code>
- <code title="get /accounts/{accountId}/urlscanner/scan/{scanId}/screenshot">client.urlScanner.scans.<a href="./src/resources/url-scanner/scans.ts">screenshot</a>(accountId, scanId, { ...params }) -> Response</code>

# Radar

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

#### Spf

Types:

- <code><a href="./src/resources/radar/emails/security/spf.ts">SpfListResponse</a></code>

Methods:

- <code title="get /radar/email/security/timeseries_groups/spf">client.radar.emails.security.spf.<a href="./src/resources/radar/emails/security/spf.ts">list</a>({ ...params }) -> SpfListResponse</code>

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

- <code><a href="./src/resources/radar/emails/security/top/ases/arc.ts">ArcRetrieveResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/ases/arc/{arc}">client.radar.emails.security.top.ases.arc.<a href="./src/resources/radar/emails/security/top/ases/arc.ts">retrieve</a>(arc, { ...params }) -> ArcRetrieveResponse</code>

###### Dkim

Types:

- <code><a href="./src/resources/radar/emails/security/top/ases/dkim.ts">DkimRetrieveResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/ases/dkim/{dkim}">client.radar.emails.security.top.ases.dkim.<a href="./src/resources/radar/emails/security/top/ases/dkim.ts">retrieve</a>(dkim, { ...params }) -> DkimRetrieveResponse</code>

###### Dmarc

Types:

- <code><a href="./src/resources/radar/emails/security/top/ases/dmarc.ts">DmarcRetrieveResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/ases/dmarc/{dmarc}">client.radar.emails.security.top.ases.dmarc.<a href="./src/resources/radar/emails/security/top/ases/dmarc.ts">retrieve</a>(dmarc, { ...params }) -> DmarcRetrieveResponse</code>

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

- <code><a href="./src/resources/radar/quality/iqi/iqi.ts">IqiRetrieveResponse</a></code>

Methods:

- <code title="get /radar/quality/iqi/summary">client.radar.quality.iqi.<a href="./src/resources/radar/quality/iqi/iqi.ts">retrieve</a>({ ...params }) -> IqiRetrieveResponse</code>

#### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/quality/iqi/timeseries-groups.ts">TimeseriesGroupListResponse</a></code>

Methods:

- <code title="get /radar/quality/iqi/timeseries_groups">client.radar.quality.iqi.timeseriesGroups.<a href="./src/resources/radar/quality/iqi/timeseries-groups.ts">list</a>({ ...params }) -> TimeseriesGroupListResponse</code>

### Speed

#### Histogram

Types:

- <code><a href="./src/resources/radar/quality/speed/histogram.ts">HistogramRetrieveResponse</a></code>

Methods:

- <code title="get /radar/quality/speed/histogram">client.radar.quality.speed.histogram.<a href="./src/resources/radar/quality/speed/histogram.ts">retrieve</a>({ ...params }) -> HistogramRetrieveResponse</code>

#### Summary

Types:

- <code><a href="./src/resources/radar/quality/speed/summary.ts">SummaryRetrieveResponse</a></code>

Methods:

- <code title="get /radar/quality/speed/summary">client.radar.quality.speed.summary.<a href="./src/resources/radar/quality/speed/summary.ts">retrieve</a>({ ...params }) -> SummaryRetrieveResponse</code>

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

- <code><a href="./src/resources/bot-managements.ts">BotManagementRetrieveResponse</a></code>
- <code><a href="./src/resources/bot-managements.ts">BotManagementUpdateResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/bot_management">client.botManagements.<a href="./src/resources/bot-managements.ts">retrieve</a>(zoneId) -> BotManagementRetrieveResponse</code>
- <code title="put /zones/{zone_id}/bot_management">client.botManagements.<a href="./src/resources/bot-managements.ts">update</a>(zoneId, { ...params }) -> BotManagementUpdateResponse</code>

# CacheReserves

Types:

- <code><a href="./src/resources/cache-reserves.ts">CacheReserveCreateResponse</a></code>
- <code><a href="./src/resources/cache-reserves.ts">CacheReserveClearResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/cache/cache_reserve_clear">client.cacheReserves.<a href="./src/resources/cache-reserves.ts">create</a>(zoneId) -> CacheReserveCreateResponse</code>
- <code title="get /zones/{zone_id}/cache/cache_reserve_clear">client.cacheReserves.<a href="./src/resources/cache-reserves.ts">clear</a>(zoneId) -> CacheReserveClearResponse</code>

# OriginPostQuantumEncryptions

Types:

- <code><a href="./src/resources/origin-post-quantum-encryptions.ts">OriginPostQuantumEncryptionRetrieveResponse</a></code>
- <code><a href="./src/resources/origin-post-quantum-encryptions.ts">OriginPostQuantumEncryptionUpdateResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/cache/origin_post_quantum_encryption">client.originPostQuantumEncryptions.<a href="./src/resources/origin-post-quantum-encryptions.ts">retrieve</a>(zoneId) -> OriginPostQuantumEncryptionRetrieveResponse</code>
- <code title="put /zones/{zone_id}/cache/origin_post_quantum_encryption">client.originPostQuantumEncryptions.<a href="./src/resources/origin-post-quantum-encryptions.ts">update</a>(zoneId, { ...params }) -> OriginPostQuantumEncryptionUpdateResponse</code>

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

- <code><a href="./src/resources/firewall/waf/packages/groups.ts">GroupRetrieveResponse</a></code>
- <code><a href="./src/resources/firewall/waf/packages/groups.ts">GroupUpdateResponse</a></code>
- <code><a href="./src/resources/firewall/waf/packages/groups.ts">GroupListResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/groups/{group_id}">client.firewall.waf.packages.groups.<a href="./src/resources/firewall/waf/packages/groups.ts">retrieve</a>(zoneId, packageId, groupId) -> GroupRetrieveResponse</code>
- <code title="patch /zones/{zone_id}/firewall/waf/packages/{package_id}/groups/{group_id}">client.firewall.waf.packages.groups.<a href="./src/resources/firewall/waf/packages/groups.ts">update</a>(zoneId, packageId, groupId, { ...params }) -> GroupUpdateResponse</code>
- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/groups">client.firewall.waf.packages.groups.<a href="./src/resources/firewall/waf/packages/groups.ts">list</a>(zoneId, packageId, { ...params }) -> GroupListResponse | null</code>

#### Rules

Types:

- <code><a href="./src/resources/firewall/waf/packages/rules.ts">RuleRetrieveResponse</a></code>
- <code><a href="./src/resources/firewall/waf/packages/rules.ts">RuleUpdateResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{rule_id}">client.firewall.waf.packages.rules.<a href="./src/resources/firewall/waf/packages/rules.ts">retrieve</a>(zoneId, packageId, ruleId) -> RuleRetrieveResponse</code>
- <code title="patch /zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{rule_id}">client.firewall.waf.packages.rules.<a href="./src/resources/firewall/waf/packages/rules.ts">update</a>(zoneId, packageId, ruleId, { ...params }) -> RuleUpdateResponse</code>

# Zaraz

Types:

- <code><a href="./src/resources/zaraz/zaraz.ts">ZarazWorkflowUpdateResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/settings/zaraz/workflow">client.zaraz.<a href="./src/resources/zaraz/zaraz.ts">workflowUpdate</a>(zoneId, { ...params }) -> ZarazWorkflowUpdateResponse</code>

## Config

Types:

- <code><a href="./src/resources/zaraz/config.ts">ConfigRetrieveResponse</a></code>
- <code><a href="./src/resources/zaraz/config.ts">ConfigUpdateResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/settings/zaraz/config">client.zaraz.config.<a href="./src/resources/zaraz/config.ts">retrieve</a>(zoneId) -> ConfigRetrieveResponse</code>
- <code title="put /zones/{zone_id}/settings/zaraz/config">client.zaraz.config.<a href="./src/resources/zaraz/config.ts">update</a>(zoneId, { ...params }) -> ConfigUpdateResponse</code>

## Default

Types:

- <code><a href="./src/resources/zaraz/default.ts">DefaultRetrieveResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/settings/zaraz/default">client.zaraz.default.<a href="./src/resources/zaraz/default.ts">retrieve</a>(zoneId) -> DefaultRetrieveResponse</code>

## Export

Types:

- <code><a href="./src/resources/zaraz/export.ts">ExportRetrieveResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/settings/zaraz/export">client.zaraz.export.<a href="./src/resources/zaraz/export.ts">retrieve</a>(zoneId) -> ExportRetrieveResponse</code>

## History

Types:

- <code><a href="./src/resources/zaraz/history/history.ts">HistoryUpdateResponse</a></code>
- <code><a href="./src/resources/zaraz/history/history.ts">HistoryListResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/settings/zaraz/history">client.zaraz.history.<a href="./src/resources/zaraz/history/history.ts">update</a>(zoneId, { ...params }) -> HistoryUpdateResponse</code>
- <code title="get /zones/{zone_id}/settings/zaraz/history">client.zaraz.history.<a href="./src/resources/zaraz/history/history.ts">list</a>(zoneId, { ...params }) -> HistoryListResponse</code>

### Configs

Types:

- <code><a href="./src/resources/zaraz/history/configs.ts">ConfigRetrieveResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/settings/zaraz/history/configs">client.zaraz.history.configs.<a href="./src/resources/zaraz/history/configs.ts">retrieve</a>(zoneId, { ...params }) -> ConfigRetrieveResponse</code>

## Publish

Types:

- <code><a href="./src/resources/zaraz/publish.ts">PublishCreateResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/settings/zaraz/publish">client.zaraz.publish.<a href="./src/resources/zaraz/publish.ts">create</a>(zoneId, { ...params }) -> PublishCreateResponse</code>

## Workflow

Types:

- <code><a href="./src/resources/zaraz/workflow.ts">WorkflowRetrieveResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/settings/zaraz/workflow">client.zaraz.workflow.<a href="./src/resources/zaraz/workflow.ts">retrieve</a>(zoneId) -> WorkflowRetrieveResponse</code>

# SpeedAPI

Types:

- <code><a href="./src/resources/speed-api/speed-api.ts">SpeedAPIAvailabilitiesListResponse</a></code>
- <code><a href="./src/resources/speed-api/speed-api.ts">SpeedAPIPagesListResponse</a></code>
- <code><a href="./src/resources/speed-api/speed-api.ts">SpeedAPIScheduleDeleteResponse</a></code>
- <code><a href="./src/resources/speed-api/speed-api.ts">SpeedAPIScheduleRetrieveResponse</a></code>
- <code><a href="./src/resources/speed-api/speed-api.ts">SpeedAPITestsCreateResponse</a></code>
- <code><a href="./src/resources/speed-api/speed-api.ts">SpeedAPITestsDeleteResponse</a></code>
- <code><a href="./src/resources/speed-api/speed-api.ts">SpeedAPITestsListResponse</a></code>
- <code><a href="./src/resources/speed-api/speed-api.ts">SpeedAPITestsRetrieveResponse</a></code>
- <code><a href="./src/resources/speed-api/speed-api.ts">SpeedAPITrendsListResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/speed_api/availabilities">client.speedAPI.<a href="./src/resources/speed-api/speed-api.ts">availabilitiesList</a>(zoneId) -> SpeedAPIAvailabilitiesListResponse</code>
- <code title="get /zones/{zone_id}/speed_api/pages">client.speedAPI.<a href="./src/resources/speed-api/speed-api.ts">pagesList</a>(zoneId) -> SpeedAPIPagesListResponse</code>
- <code title="delete /zones/{zone_id}/speed_api/schedule/{url}">client.speedAPI.<a href="./src/resources/speed-api/speed-api.ts">scheduleDelete</a>(zoneId, url, { ...params }) -> SpeedAPIScheduleDeleteResponse</code>
- <code title="get /zones/{zone_id}/speed_api/schedule/{url}">client.speedAPI.<a href="./src/resources/speed-api/speed-api.ts">scheduleRetrieve</a>(zoneId, url, { ...params }) -> SpeedAPIScheduleRetrieveResponse</code>
- <code title="post /zones/{zone_id}/speed_api/pages/{url}/tests">client.speedAPI.<a href="./src/resources/speed-api/speed-api.ts">testsCreate</a>(zoneId, url, { ...params }) -> SpeedAPITestsCreateResponse</code>
- <code title="delete /zones/{zone_id}/speed_api/pages/{url}/tests">client.speedAPI.<a href="./src/resources/speed-api/speed-api.ts">testsDelete</a>(zoneId, url, { ...params }) -> SpeedAPITestsDeleteResponse</code>
- <code title="get /zones/{zone_id}/speed_api/pages/{url}/tests">client.speedAPI.<a href="./src/resources/speed-api/speed-api.ts">testsList</a>(zoneId, url, { ...params }) -> SpeedAPITestsListResponse</code>
- <code title="get /zones/{zone_id}/speed_api/pages/{url}/tests/{test_id}">client.speedAPI.<a href="./src/resources/speed-api/speed-api.ts">testsRetrieve</a>(zoneId, url, testId) -> SpeedAPITestsRetrieveResponse</code>
- <code title="get /zones/{zone_id}/speed_api/pages/{url}/trend">client.speedAPI.<a href="./src/resources/speed-api/speed-api.ts">trendsList</a>(zoneId, url, { ...params }) -> SpeedAPITrendsListResponse</code>

## Schedule

Types:

- <code><a href="./src/resources/speed-api/schedule.ts">ScheduleCreateResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/speed_api/schedule/{url}">client.speedAPI.schedule.<a href="./src/resources/speed-api/schedule.ts">create</a>(zoneId, url, { ...params }) -> ScheduleCreateResponse</code>

# DcvDelegation

## Uuid

Types:

- <code><a href="./src/resources/dcv-delegation/uuid.ts">UuidRetrieveResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/dcv_delegation/uuid">client.dcvDelegation.uuid.<a href="./src/resources/dcv-delegation/uuid.ts">retrieve</a>(zoneIdentifier) -> UuidRetrieveResponse</code>

# Hostnames

## Settings

### TLS

Types:

- <code><a href="./src/resources/hostnames/settings/tls.ts">TLSRetrieveResponse</a></code>
- <code><a href="./src/resources/hostnames/settings/tls.ts">TLSUpdateResponse</a></code>
- <code><a href="./src/resources/hostnames/settings/tls.ts">TLSDeleteResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/hostnames/settings/{tls_setting}">client.hostnames.settings.tls.<a href="./src/resources/hostnames/settings/tls.ts">retrieve</a>(zoneIdentifier, tlsSetting) -> TLSRetrieveResponse | null</code>
- <code title="put /zones/{zone_identifier}/hostnames/settings/{tls_setting}/{hostname}">client.hostnames.settings.tls.<a href="./src/resources/hostnames/settings/tls.ts">update</a>(zoneIdentifier, tlsSetting, hostname, { ...params }) -> TLSUpdateResponse</code>
- <code title="delete /zones/{zone_identifier}/hostnames/settings/{tls_setting}/{hostname}">client.hostnames.settings.tls.<a href="./src/resources/hostnames/settings/tls.ts">delete</a>(zoneIdentifier, tlsSetting, hostname) -> TLSDeleteResponse</code>

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

## Jobs

Types:

- <code><a href="./src/resources/logpush/jobs.ts">JobRetrieveResponse</a></code>
- <code><a href="./src/resources/logpush/jobs.ts">JobUpdateResponse</a></code>
- <code><a href="./src/resources/logpush/jobs.ts">JobDeleteResponse</a></code>

Methods:

- <code title="get /{account_or_zone}/{account_or_zone_id}/logpush/jobs/{job_id}">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">retrieve</a>(accountOrZone, accountOrZoneId, jobId) -> JobRetrieveResponse | null</code>
- <code title="put /{account_or_zone}/{account_or_zone_id}/logpush/jobs/{job_id}">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">update</a>(accountOrZone, accountOrZoneId, jobId, { ...params }) -> JobUpdateResponse | null</code>
- <code title="delete /{account_or_zone}/{account_or_zone_id}/logpush/jobs/{job_id}">client.logpush.jobs.<a href="./src/resources/logpush/jobs.ts">delete</a>(accountOrZone, accountOrZoneId, jobId) -> JobDeleteResponse | null</code>

# Hold

Types:

- <code><a href="./src/resources/hold.ts">HoldRetrieveResponse</a></code>
- <code><a href="./src/resources/hold.ts">HoldEnforceResponse</a></code>
- <code><a href="./src/resources/hold.ts">HoldRemoveResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/hold">client.hold.<a href="./src/resources/hold.ts">retrieve</a>(zoneId) -> HoldRetrieveResponse</code>
- <code title="post /zones/{zone_id}/hold">client.hold.<a href="./src/resources/hold.ts">enforce</a>(zoneId, { ...params }) -> HoldEnforceResponse</code>
- <code title="delete /zones/{zone_id}/hold">client.hold.<a href="./src/resources/hold.ts">remove</a>(zoneId, { ...params }) -> HoldRemoveResponse</code>

# PageShield

## Connections

Types:

- <code><a href="./src/resources/page-shield/connections.ts">ConnectionRetrieveResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/page_shield/connections/{connection_id}">client.pageShield.connections.<a href="./src/resources/page-shield/connections.ts">retrieve</a>(zoneId, connectionId) -> ConnectionRetrieveResponse</code>

## Policies

Types:

- <code><a href="./src/resources/page-shield/policies.ts">PolicyCreateResponse</a></code>
- <code><a href="./src/resources/page-shield/policies.ts">PolicyRetrieveResponse</a></code>
- <code><a href="./src/resources/page-shield/policies.ts">PolicyUpdateResponse</a></code>
- <code><a href="./src/resources/page-shield/policies.ts">PolicyListResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/page_shield/policies">client.pageShield.policies.<a href="./src/resources/page-shield/policies.ts">create</a>(zoneId, { ...params }) -> PolicyCreateResponse</code>
- <code title="get /zones/{zone_id}/page_shield/policies/{policy_id}">client.pageShield.policies.<a href="./src/resources/page-shield/policies.ts">retrieve</a>(zoneId, policyId) -> PolicyRetrieveResponse</code>
- <code title="put /zones/{zone_id}/page_shield/policies/{policy_id}">client.pageShield.policies.<a href="./src/resources/page-shield/policies.ts">update</a>(zoneId, policyId, { ...params }) -> PolicyUpdateResponse</code>
- <code title="get /zones/{zone_id}/page_shield/policies">client.pageShield.policies.<a href="./src/resources/page-shield/policies.ts">list</a>(zoneId) -> PolicyListResponse | null</code>
- <code title="delete /zones/{zone_id}/page_shield/policies/{policy_id}">client.pageShield.policies.<a href="./src/resources/page-shield/policies.ts">delete</a>(zoneId, policyId) -> void</code>

# FontSettings

# Snippets

Types:

- <code><a href="./src/resources/snippets/snippets.ts">SnippetRetrieveResponse</a></code>
- <code><a href="./src/resources/snippets/snippets.ts">SnippetUpdateResponse</a></code>
- <code><a href="./src/resources/snippets/snippets.ts">SnippetListResponse</a></code>
- <code><a href="./src/resources/snippets/snippets.ts">SnippetDeleteResponse</a></code>

Methods:

- <code title="get /zones/{zone_identifier}/snippets/{snippet_name}">client.snippets.<a href="./src/resources/snippets/snippets.ts">retrieve</a>(zoneIdentifier, snippetName) -> SnippetRetrieveResponse</code>
- <code title="put /zones/{zone_identifier}/snippets/{snippet_name}">client.snippets.<a href="./src/resources/snippets/snippets.ts">update</a>(zoneIdentifier, snippetName, { ...params }) -> SnippetUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/snippets">client.snippets.<a href="./src/resources/snippets/snippets.ts">list</a>(zoneIdentifier) -> SnippetListResponse</code>
- <code title="delete /zones/{zone_identifier}/snippets/{snippet_name}">client.snippets.<a href="./src/resources/snippets/snippets.ts">delete</a>(zoneIdentifier, snippetName) -> SnippetDeleteResponse</code>

## Content

Methods:

- <code title="get /zones/{zone_identifier}/snippets/{snippet_name}/content">client.snippets.content.<a href="./src/resources/snippets/content.ts">retrieve</a>(zoneIdentifier, snippetName) -> Response</code>

## SnippetRules

Types:

- <code><a href="./src/resources/snippets/snippet-rules.ts">SnippetRuleUpdateResponse</a></code>
- <code><a href="./src/resources/snippets/snippet-rules.ts">SnippetRuleListResponse</a></code>

Methods:

- <code title="put /zones/{zone_identifier}/snippets/snippet_rules">client.snippets.snippetRules.<a href="./src/resources/snippets/snippet-rules.ts">update</a>(zoneIdentifier, { ...params }) -> SnippetRuleUpdateResponse</code>
- <code title="get /zones/{zone_identifier}/snippets/snippet_rules">client.snippets.snippetRules.<a href="./src/resources/snippets/snippet-rules.ts">list</a>(zoneIdentifier) -> SnippetRuleListResponse</code>

# Dlp

## Datasets

Types:

- <code><a href="./src/resources/dlp/datasets.ts">DatasetCreateResponse</a></code>
- <code><a href="./src/resources/dlp/datasets.ts">DatasetRetrieveResponse</a></code>
- <code><a href="./src/resources/dlp/datasets.ts">DatasetUpdateResponse</a></code>
- <code><a href="./src/resources/dlp/datasets.ts">DatasetListResponse</a></code>
- <code><a href="./src/resources/dlp/datasets.ts">DatasetUploadResponse</a></code>
- <code><a href="./src/resources/dlp/datasets.ts">DatasetUploadPrepareResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/datasets">client.dlp.datasets.<a href="./src/resources/dlp/datasets.ts">create</a>(accountId, { ...params }) -> DatasetCreateResponse</code>
- <code title="get /accounts/{account_id}/dlp/datasets/{dataset_id}">client.dlp.datasets.<a href="./src/resources/dlp/datasets.ts">retrieve</a>(accountId, datasetId) -> DatasetRetrieveResponse</code>
- <code title="put /accounts/{account_id}/dlp/datasets/{dataset_id}">client.dlp.datasets.<a href="./src/resources/dlp/datasets.ts">update</a>(accountId, datasetId, { ...params }) -> DatasetUpdateResponse</code>
- <code title="get /accounts/{account_id}/dlp/datasets">client.dlp.datasets.<a href="./src/resources/dlp/datasets.ts">list</a>(accountId) -> DatasetListResponse</code>
- <code title="delete /accounts/{account_id}/dlp/datasets/{dataset_id}">client.dlp.datasets.<a href="./src/resources/dlp/datasets.ts">delete</a>(accountId, datasetId) -> void</code>
- <code title="post /accounts/{account_id}/dlp/datasets/{dataset_id}/upload/{version}">client.dlp.datasets.<a href="./src/resources/dlp/datasets.ts">upload</a>(accountId, datasetId, version) -> DatasetUploadResponse</code>
- <code title="post /accounts/{account_id}/dlp/datasets/{dataset_id}/upload">client.dlp.datasets.<a href="./src/resources/dlp/datasets.ts">uploadPrepare</a>(accountId, datasetId) -> DatasetUploadPrepareResponse</code>

# Gateway

## AuditSSHSettings

Types:

- <code><a href="./src/resources/gateway/audit-ssh-settings.ts">AuditSSHSettingRetrieveResponse</a></code>
- <code><a href="./src/resources/gateway/audit-ssh-settings.ts">AuditSSHSettingUpdateResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/gateway/audit_ssh_settings">client.gateway.auditSSHSettings.<a href="./src/resources/gateway/audit-ssh-settings.ts">retrieve</a>(accountId) -> AuditSSHSettingRetrieveResponse</code>
- <code title="put /accounts/{account_id}/gateway/audit_ssh_settings">client.gateway.auditSSHSettings.<a href="./src/resources/gateway/audit-ssh-settings.ts">update</a>(accountId, { ...params }) -> AuditSSHSettingUpdateResponse</code>

# AccessTags

Types:

- <code><a href="./src/resources/access-tags.ts">AccessTagCreateResponse</a></code>
- <code><a href="./src/resources/access-tags.ts">AccessTagRetrieveResponse</a></code>
- <code><a href="./src/resources/access-tags.ts">AccessTagUpdateResponse</a></code>
- <code><a href="./src/resources/access-tags.ts">AccessTagDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{identifier}/access/tags">client.accessTags.<a href="./src/resources/access-tags.ts">create</a>(identifier, { ...params }) -> AccessTagCreateResponse</code>
- <code title="get /accounts/{identifier}/access/tags/{name}">client.accessTags.<a href="./src/resources/access-tags.ts">retrieve</a>(identifier, name) -> AccessTagRetrieveResponse</code>
- <code title="put /accounts/{identifier}/access/tags/{name}">client.accessTags.<a href="./src/resources/access-tags.ts">update</a>(identifier, tagName, { ...params }) -> AccessTagUpdateResponse</code>
- <code title="delete /accounts/{identifier}/access/tags/{name}">client.accessTags.<a href="./src/resources/access-tags.ts">delete</a>(identifier, name) -> AccessTagDeleteResponse</code>
