# ZeroTrust

## Devices

Types:

- <code><a href="./src/resources/zero-trust/devices/devices.ts">Device</a></code>
- <code><a href="./src/resources/zero-trust/devices/devices.ts">DeviceGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/devices">client.zeroTrust.devices.<a href="./src/resources/zero-trust/devices/devices.ts">list</a>({ ...params }) -> DevicesSinglePage</code>
- <code title="get /accounts/{account_id}/devices/{device_id}">client.zeroTrust.devices.<a href="./src/resources/zero-trust/devices/devices.ts">get</a>(deviceId, { ...params }) -> DeviceGetResponse | null</code>

### Devices

Types:

- <code><a href="./src/resources/zero-trust/devices/devices_.ts">DeviceListResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/devices_.ts">DeviceDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/devices_.ts">DeviceGetResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/devices_.ts">DeviceRevokeResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/devices/physical-devices">client.zeroTrust.devices.devices.<a href="./src/resources/zero-trust/devices/devices_.ts">list</a>({ ...params }) -> DeviceListResponsesCursorPagination</code>
- <code title="delete /accounts/{account_id}/devices/physical-devices/{device_id}">client.zeroTrust.devices.devices.<a href="./src/resources/zero-trust/devices/devices_.ts">delete</a>(deviceId, { ...params }) -> DeviceDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/devices/physical-devices/{device_id}">client.zeroTrust.devices.devices.<a href="./src/resources/zero-trust/devices/devices_.ts">get</a>(deviceId, { ...params }) -> DeviceGetResponse</code>
- <code title="post /accounts/{account_id}/devices/physical-devices/{device_id}/revoke">client.zeroTrust.devices.devices.<a href="./src/resources/zero-trust/devices/devices_.ts">revoke</a>(deviceId, { ...params }) -> DeviceRevokeResponse | null</code>

### Resilience

#### GlobalWARPOverride

Types:

- <code><a href="./src/resources/zero-trust/devices/resilience/global-warp-override.ts">GlobalWARPOverrideCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/resilience/global-warp-override.ts">GlobalWARPOverrideGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/resilience/disconnect">client.zeroTrust.devices.resilience.globalWARPOverride.<a href="./src/resources/zero-trust/devices/resilience/global-warp-override.ts">create</a>({ ...params }) -> GlobalWARPOverrideCreateResponse | null</code>
- <code title="get /accounts/{account_id}/devices/resilience/disconnect">client.zeroTrust.devices.resilience.globalWARPOverride.<a href="./src/resources/zero-trust/devices/resilience/global-warp-override.ts">get</a>({ ...params }) -> GlobalWARPOverrideGetResponse | null</code>

### Registrations

Types:

- <code><a href="./src/resources/zero-trust/devices/registrations.ts">RegistrationListResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/registrations.ts">RegistrationDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/registrations.ts">RegistrationBulkDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/registrations.ts">RegistrationGetResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/registrations.ts">RegistrationRevokeResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/registrations.ts">RegistrationUnrevokeResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/devices/registrations">client.zeroTrust.devices.registrations.<a href="./src/resources/zero-trust/devices/registrations.ts">list</a>({ ...params }) -> RegistrationListResponsesCursorPagination</code>
- <code title="delete /accounts/{account_id}/devices/registrations/{registration_id}">client.zeroTrust.devices.registrations.<a href="./src/resources/zero-trust/devices/registrations.ts">delete</a>(registrationId, { ...params }) -> RegistrationDeleteResponse | null</code>
- <code title="delete /accounts/{account_id}/devices/registrations">client.zeroTrust.devices.registrations.<a href="./src/resources/zero-trust/devices/registrations.ts">bulkDelete</a>({ ...params }) -> RegistrationBulkDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/devices/registrations/{registration_id}">client.zeroTrust.devices.registrations.<a href="./src/resources/zero-trust/devices/registrations.ts">get</a>(registrationId, { ...params }) -> RegistrationGetResponse</code>
- <code title="post /accounts/{account_id}/devices/registrations/revoke">client.zeroTrust.devices.registrations.<a href="./src/resources/zero-trust/devices/registrations.ts">revoke</a>({ ...params }) -> RegistrationRevokeResponse | null</code>
- <code title="post /accounts/{account_id}/devices/registrations/unrevoke">client.zeroTrust.devices.registrations.<a href="./src/resources/zero-trust/devices/registrations.ts">unrevoke</a>({ ...params }) -> RegistrationUnrevokeResponse | null</code>

### DEXTests

Types:

- <code><a href="./src/resources/zero-trust/devices/dex-tests.ts">SchemaData</a></code>
- <code><a href="./src/resources/zero-trust/devices/dex-tests.ts">SchemaHTTP</a></code>
- <code><a href="./src/resources/zero-trust/devices/dex-tests.ts">DEXTestCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/dex-tests.ts">DEXTestUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/dex-tests.ts">DEXTestListResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/dex-tests.ts">DEXTestDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/dex-tests.ts">DEXTestGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dex/devices/dex_tests">client.zeroTrust.devices.dexTests.<a href="./src/resources/zero-trust/devices/dex-tests.ts">create</a>({ ...params }) -> DEXTestCreateResponse</code>
- <code title="put /accounts/{account_id}/dex/devices/dex_tests/{dex_test_id}">client.zeroTrust.devices.dexTests.<a href="./src/resources/zero-trust/devices/dex-tests.ts">update</a>(dexTestId, { ...params }) -> DEXTestUpdateResponse</code>
- <code title="get /accounts/{account_id}/dex/devices/dex_tests">client.zeroTrust.devices.dexTests.<a href="./src/resources/zero-trust/devices/dex-tests.ts">list</a>({ ...params }) -> DEXTestListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/dex/devices/dex_tests/{dex_test_id}">client.zeroTrust.devices.dexTests.<a href="./src/resources/zero-trust/devices/dex-tests.ts">delete</a>(dexTestId, { ...params }) -> DEXTestDeleteResponse</code>
- <code title="get /accounts/{account_id}/dex/devices/dex_tests/{dex_test_id}">client.zeroTrust.devices.dexTests.<a href="./src/resources/zero-trust/devices/dex-tests.ts">get</a>(dexTestId, { ...params }) -> DEXTestGetResponse</code>

### IPProfiles

Types:

- <code><a href="./src/resources/zero-trust/devices/ip-profiles.ts">IPProfile</a></code>
- <code><a href="./src/resources/zero-trust/devices/ip-profiles.ts">IPProfileDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/ip-profiles">client.zeroTrust.devices.ipProfiles.<a href="./src/resources/zero-trust/devices/ip-profiles.ts">create</a>({ ...params }) -> IPProfile</code>
- <code title="patch /accounts/{account_id}/devices/ip-profiles/{profile_id}">client.zeroTrust.devices.ipProfiles.<a href="./src/resources/zero-trust/devices/ip-profiles.ts">update</a>(profileId, { ...params }) -> IPProfile</code>
- <code title="get /accounts/{account_id}/devices/ip-profiles">client.zeroTrust.devices.ipProfiles.<a href="./src/resources/zero-trust/devices/ip-profiles.ts">list</a>({ ...params }) -> IPProfilesSinglePage</code>
- <code title="delete /accounts/{account_id}/devices/ip-profiles/{profile_id}">client.zeroTrust.devices.ipProfiles.<a href="./src/resources/zero-trust/devices/ip-profiles.ts">delete</a>(profileId, { ...params }) -> IPProfileDeleteResponse</code>
- <code title="get /accounts/{account_id}/devices/ip-profiles/{profile_id}">client.zeroTrust.devices.ipProfiles.<a href="./src/resources/zero-trust/devices/ip-profiles.ts">get</a>(profileId, { ...params }) -> IPProfile</code>

### DeploymentGroups

Types:

- <code><a href="./src/resources/zero-trust/devices/deployment-groups.ts">DeploymentGroup</a></code>
- <code><a href="./src/resources/zero-trust/devices/deployment-groups.ts">DeploymentGroupDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/deployment-groups">client.zeroTrust.devices.deploymentGroups.<a href="./src/resources/zero-trust/devices/deployment-groups.ts">create</a>({ ...params }) -> DeploymentGroup</code>
- <code title="get /accounts/{account_id}/devices/deployment-groups">client.zeroTrust.devices.deploymentGroups.<a href="./src/resources/zero-trust/devices/deployment-groups.ts">list</a>({ ...params }) -> DeploymentGroupsV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/devices/deployment-groups/{group_id}">client.zeroTrust.devices.deploymentGroups.<a href="./src/resources/zero-trust/devices/deployment-groups.ts">delete</a>(groupId, { ...params }) -> DeploymentGroupDeleteResponse</code>
- <code title="patch /accounts/{account_id}/devices/deployment-groups/{group_id}">client.zeroTrust.devices.deploymentGroups.<a href="./src/resources/zero-trust/devices/deployment-groups.ts">edit</a>(groupId, { ...params }) -> DeploymentGroup</code>
- <code title="get /accounts/{account_id}/devices/deployment-groups/{group_id}">client.zeroTrust.devices.deploymentGroups.<a href="./src/resources/zero-trust/devices/deployment-groups.ts">get</a>(groupId, { ...params }) -> DeploymentGroup</code>

### Networks

Types:

- <code><a href="./src/resources/zero-trust/devices/networks.ts">DeviceNetwork</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/networks">client.zeroTrust.devices.networks.<a href="./src/resources/zero-trust/devices/networks.ts">create</a>({ ...params }) -> DeviceNetwork | null</code>
- <code title="put /accounts/{account_id}/devices/networks/{network_id}">client.zeroTrust.devices.networks.<a href="./src/resources/zero-trust/devices/networks.ts">update</a>(networkId, { ...params }) -> DeviceNetwork | null</code>
- <code title="get /accounts/{account_id}/devices/networks">client.zeroTrust.devices.networks.<a href="./src/resources/zero-trust/devices/networks.ts">list</a>({ ...params }) -> DeviceNetworksSinglePage</code>
- <code title="delete /accounts/{account_id}/devices/networks/{network_id}">client.zeroTrust.devices.networks.<a href="./src/resources/zero-trust/devices/networks.ts">delete</a>(networkId, { ...params }) -> DeviceNetworksSinglePage</code>
- <code title="get /accounts/{account_id}/devices/networks/{network_id}">client.zeroTrust.devices.networks.<a href="./src/resources/zero-trust/devices/networks.ts">get</a>(networkId, { ...params }) -> DeviceNetwork | null</code>

### FleetStatus

Types:

- <code><a href="./src/resources/zero-trust/devices/fleet-status.ts">FleetStatusGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/devices/{device_id}/fleet-status/live">client.zeroTrust.devices.fleetStatus.<a href="./src/resources/zero-trust/devices/fleet-status.ts">get</a>(deviceId, { ...params }) -> FleetStatusGetResponse</code>

### Policies

Types:

- <code><a href="./src/resources/zero-trust/devices/policies/policies.ts">DevicePolicyCertificates</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/policies.ts">FallbackDomain</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/policies.ts">FallbackDomainPolicy</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/policies.ts">SettingsPolicy</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/policies.ts">SplitTunnelExclude</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/policies.ts">SplitTunnelInclude</a></code>

#### Default

Types:

- <code><a href="./src/resources/zero-trust/devices/policies/default/default.ts">DefaultEditResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/policies/default/default.ts">DefaultGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/devices/policy">client.zeroTrust.devices.policies.default.<a href="./src/resources/zero-trust/devices/policies/default/default.ts">edit</a>({ ...params }) -> DefaultEditResponse | null</code>
- <code title="get /accounts/{account_id}/devices/policy">client.zeroTrust.devices.policies.default.<a href="./src/resources/zero-trust/devices/policies/default/default.ts">get</a>({ ...params }) -> DefaultGetResponse | null</code>

##### Excludes

Methods:

- <code title="put /accounts/{account_id}/devices/policy/exclude">client.zeroTrust.devices.policies.default.excludes.<a href="./src/resources/zero-trust/devices/policies/default/excludes.ts">update</a>([ ...body ]) -> SplitTunnelExcludesSinglePage</code>
- <code title="get /accounts/{account_id}/devices/policy/exclude">client.zeroTrust.devices.policies.default.excludes.<a href="./src/resources/zero-trust/devices/policies/default/excludes.ts">get</a>({ ...params }) -> SplitTunnelExcludesSinglePage</code>

##### Includes

Methods:

- <code title="put /accounts/{account_id}/devices/policy/include">client.zeroTrust.devices.policies.default.includes.<a href="./src/resources/zero-trust/devices/policies/default/includes.ts">update</a>([ ...body ]) -> SplitTunnelIncludesSinglePage</code>
- <code title="get /accounts/{account_id}/devices/policy/include">client.zeroTrust.devices.policies.default.includes.<a href="./src/resources/zero-trust/devices/policies/default/includes.ts">get</a>({ ...params }) -> SplitTunnelIncludesSinglePage</code>

##### FallbackDomains

Methods:

- <code title="put /accounts/{account_id}/devices/policy/fallback_domains">client.zeroTrust.devices.policies.default.fallbackDomains.<a href="./src/resources/zero-trust/devices/policies/default/fallback-domains.ts">update</a>([ ...domains ]) -> FallbackDomainsSinglePage</code>
- <code title="get /accounts/{account_id}/devices/policy/fallback_domains">client.zeroTrust.devices.policies.default.fallbackDomains.<a href="./src/resources/zero-trust/devices/policies/default/fallback-domains.ts">get</a>({ ...params }) -> FallbackDomainsSinglePage</code>

##### Certificates

Methods:

- <code title="patch /zones/{zone_id}/devices/policy/certificates">client.zeroTrust.devices.policies.default.certificates.<a href="./src/resources/zero-trust/devices/policies/default/certificates.ts">edit</a>({ ...params }) -> DevicePolicyCertificates | null</code>
- <code title="get /zones/{zone_id}/devices/policy/certificates">client.zeroTrust.devices.policies.default.certificates.<a href="./src/resources/zero-trust/devices/policies/default/certificates.ts">get</a>({ ...params }) -> DevicePolicyCertificates | null</code>

#### Custom

Methods:

- <code title="post /accounts/{account_id}/devices/policy">client.zeroTrust.devices.policies.custom.<a href="./src/resources/zero-trust/devices/policies/custom/custom.ts">create</a>({ ...params }) -> SettingsPolicy | null</code>
- <code title="get /accounts/{account_id}/devices/policies">client.zeroTrust.devices.policies.custom.<a href="./src/resources/zero-trust/devices/policies/custom/custom.ts">list</a>({ ...params }) -> SettingsPoliciesSinglePage</code>
- <code title="delete /accounts/{account_id}/devices/policy/{policy_id}">client.zeroTrust.devices.policies.custom.<a href="./src/resources/zero-trust/devices/policies/custom/custom.ts">delete</a>(policyId, { ...params }) -> SettingsPoliciesSinglePage</code>
- <code title="patch /accounts/{account_id}/devices/policy/{policy_id}">client.zeroTrust.devices.policies.custom.<a href="./src/resources/zero-trust/devices/policies/custom/custom.ts">edit</a>(policyId, { ...params }) -> SettingsPolicy | null</code>
- <code title="get /accounts/{account_id}/devices/policy/{policy_id}">client.zeroTrust.devices.policies.custom.<a href="./src/resources/zero-trust/devices/policies/custom/custom.ts">get</a>(policyId, { ...params }) -> SettingsPolicy | null</code>

##### Excludes

Methods:

- <code title="put /accounts/{account_id}/devices/policy/{policy_id}/exclude">client.zeroTrust.devices.policies.custom.excludes.<a href="./src/resources/zero-trust/devices/policies/custom/excludes.ts">update</a>(policyId, [ ...body ]) -> SplitTunnelExcludesSinglePage</code>
- <code title="get /accounts/{account_id}/devices/policy/{policy_id}/exclude">client.zeroTrust.devices.policies.custom.excludes.<a href="./src/resources/zero-trust/devices/policies/custom/excludes.ts">get</a>(policyId, { ...params }) -> SplitTunnelExcludesSinglePage</code>

##### Includes

Methods:

- <code title="put /accounts/{account_id}/devices/policy/{policy_id}/include">client.zeroTrust.devices.policies.custom.includes.<a href="./src/resources/zero-trust/devices/policies/custom/includes.ts">update</a>(policyId, [ ...body ]) -> SplitTunnelIncludesSinglePage</code>
- <code title="get /accounts/{account_id}/devices/policy/{policy_id}/include">client.zeroTrust.devices.policies.custom.includes.<a href="./src/resources/zero-trust/devices/policies/custom/includes.ts">get</a>(policyId, { ...params }) -> SplitTunnelIncludesSinglePage</code>

##### FallbackDomains

Methods:

- <code title="put /accounts/{account_id}/devices/policy/{policy_id}/fallback_domains">client.zeroTrust.devices.policies.custom.fallbackDomains.<a href="./src/resources/zero-trust/devices/policies/custom/fallback-domains.ts">update</a>(policyId, [ ...domains ]) -> FallbackDomainsSinglePage</code>
- <code title="get /accounts/{account_id}/devices/policy/{policy_id}/fallback_domains">client.zeroTrust.devices.policies.custom.fallbackDomains.<a href="./src/resources/zero-trust/devices/policies/custom/fallback-domains.ts">get</a>(policyId, { ...params }) -> FallbackDomainsSinglePage</code>

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
- <code title="delete /accounts/{account_id}/devices/posture/integration/{integration_id}">client.zeroTrust.devices.posture.integrations.<a href="./src/resources/zero-trust/devices/posture/integrations.ts">delete</a>(integrationId, { ...params }) -> IntegrationDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/devices/posture/integration/{integration_id}">client.zeroTrust.devices.posture.integrations.<a href="./src/resources/zero-trust/devices/posture/integrations.ts">edit</a>(integrationId, { ...params }) -> Integration | null</code>
- <code title="get /accounts/{account_id}/devices/posture/integration/{integration_id}">client.zeroTrust.devices.posture.integrations.<a href="./src/resources/zero-trust/devices/posture/integrations.ts">get</a>(integrationId, { ...params }) -> Integration | null</code>

### Revoke

Types:

- <code><a href="./src/resources/zero-trust/devices/revoke.ts">RevokeCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/revoke">client.zeroTrust.devices.revoke.<a href="./src/resources/zero-trust/devices/revoke.ts">create</a>([ ...body ]) -> RevokeCreateResponse | null</code>

### Settings

Types:

- <code><a href="./src/resources/zero-trust/devices/settings.ts">DeviceSettings</a></code>

Methods:

- <code title="put /accounts/{account_id}/devices/settings">client.zeroTrust.devices.settings.<a href="./src/resources/zero-trust/devices/settings.ts">update</a>({ ...params }) -> DeviceSettings | null</code>
- <code title="delete /accounts/{account_id}/devices/settings">client.zeroTrust.devices.settings.<a href="./src/resources/zero-trust/devices/settings.ts">delete</a>({ ...params }) -> DeviceSettings | null</code>
- <code title="patch /accounts/{account_id}/devices/settings">client.zeroTrust.devices.settings.<a href="./src/resources/zero-trust/devices/settings.ts">edit</a>({ ...params }) -> DeviceSettings | null</code>
- <code title="get /accounts/{account_id}/devices/settings">client.zeroTrust.devices.settings.<a href="./src/resources/zero-trust/devices/settings.ts">get</a>({ ...params }) -> DeviceSettings | null</code>

### Unrevoke

Types:

- <code><a href="./src/resources/zero-trust/devices/unrevoke.ts">UnrevokeCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/devices/unrevoke">client.zeroTrust.devices.unrevoke.<a href="./src/resources/zero-trust/devices/unrevoke.ts">create</a>([ ...body ]) -> UnrevokeCreateResponse | null</code>

### OverrideCodes

Types:

- <code><a href="./src/resources/zero-trust/devices/override-codes.ts">OverrideCodeListResponse</a></code>
- <code><a href="./src/resources/zero-trust/devices/override-codes.ts">OverrideCodeGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/devices/{device_id}/override_codes">client.zeroTrust.devices.overrideCodes.<a href="./src/resources/zero-trust/devices/override-codes.ts">list</a>(deviceId, { ...params }) -> OverrideCodeListResponsesSinglePage</code>
- <code title="get /accounts/{account_id}/devices/registrations/{registration_id}/override_codes">client.zeroTrust.devices.overrideCodes.<a href="./src/resources/zero-trust/devices/override-codes.ts">get</a>(registrationId, { ...params }) -> OverrideCodeGetResponse</code>

## IdentityProviders

Types:

- <code><a href="./src/resources/zero-trust/identity-providers/identity-providers.ts">AzureAD</a></code>
- <code><a href="./src/resources/zero-trust/identity-providers/identity-providers.ts">GenericOAuthConfig</a></code>
- <code><a href="./src/resources/zero-trust/identity-providers/identity-providers.ts">IdentityProvider</a></code>
- <code><a href="./src/resources/zero-trust/identity-providers/identity-providers.ts">IdentityProviderSCIMConfig</a></code>
- <code><a href="./src/resources/zero-trust/identity-providers/identity-providers.ts">IdentityProviderType</a></code>
- <code><a href="./src/resources/zero-trust/identity-providers/identity-providers.ts">IdentityProviderListResponse</a></code>
- <code><a href="./src/resources/zero-trust/identity-providers/identity-providers.ts">IdentityProviderDeleteResponse</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/access/identity_providers">client.zeroTrust.identityProviders.<a href="./src/resources/zero-trust/identity-providers/identity-providers.ts">create</a>({ ...params }) -> IdentityProvider</code>
- <code title="put /{accounts_or_zones}/{account_or_zone_id}/access/identity_providers/{identity_provider_id}">client.zeroTrust.identityProviders.<a href="./src/resources/zero-trust/identity-providers/identity-providers.ts">update</a>(identityProviderId, { ...params }) -> IdentityProvider</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/identity_providers">client.zeroTrust.identityProviders.<a href="./src/resources/zero-trust/identity-providers/identity-providers.ts">list</a>({ ...params }) -> IdentityProviderListResponsesV4PagePaginationArray</code>
- <code title="delete /{accounts_or_zones}/{account_or_zone_id}/access/identity_providers/{identity_provider_id}">client.zeroTrust.identityProviders.<a href="./src/resources/zero-trust/identity-providers/identity-providers.ts">delete</a>(identityProviderId, { ...params }) -> IdentityProviderDeleteResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/identity_providers/{identity_provider_id}">client.zeroTrust.identityProviders.<a href="./src/resources/zero-trust/identity-providers/identity-providers.ts">get</a>(identityProviderId, { ...params }) -> IdentityProvider</code>

### SCIM

#### Groups

Methods:

- <code title="get /accounts/{account_id}/access/identity_providers/{identity_provider_id}/scim/groups">client.zeroTrust.identityProviders.scim.groups.<a href="./src/resources/zero-trust/identity-providers/scim/groups.ts">list</a>(identityProviderId, { ...params }) -> ZeroTrustGroupsV4PagePaginationArray</code>

#### Users

Methods:

- <code title="get /accounts/{account_id}/access/identity_providers/{identity_provider_id}/scim/users">client.zeroTrust.identityProviders.scim.users.<a href="./src/resources/zero-trust/identity-providers/scim/users.ts">list</a>(identityProviderId, { ...params }) -> AccessUsersV4PagePaginationArray</code>

### SAMLCertificate

Types:

- <code><a href="./src/resources/zero-trust/identity-providers/saml-certificate.ts">SAMLCertificateCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/access/identity_providers/{identity_provider_id}/saml_certificate">client.zeroTrust.identityProviders.samlCertificate.<a href="./src/resources/zero-trust/identity-providers/saml-certificate.ts">create</a>(identityProviderId, { ...params }) -> SAMLCertificateCreateResponse</code>

## Organizations

Types:

- <code><a href="./src/resources/zero-trust/organizations/organizations.ts">LoginDesign</a></code>
- <code><a href="./src/resources/zero-trust/organizations/organizations.ts">Organization</a></code>
- <code><a href="./src/resources/zero-trust/organizations/organizations.ts">OrganizationRevokeUsersResponse</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/access/organizations">client.zeroTrust.organizations.<a href="./src/resources/zero-trust/organizations/organizations.ts">create</a>({ ...params }) -> Organization</code>
- <code title="put /{accounts_or_zones}/{account_or_zone_id}/access/organizations">client.zeroTrust.organizations.<a href="./src/resources/zero-trust/organizations/organizations.ts">update</a>({ ...params }) -> Organization</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/organizations">client.zeroTrust.organizations.<a href="./src/resources/zero-trust/organizations/organizations.ts">list</a>({ ...params }) -> Organization</code>
- <code title="post /{accounts_or_zones}/{account_or_zone_id}/access/organizations/revoke_user">client.zeroTrust.organizations.<a href="./src/resources/zero-trust/organizations/organizations.ts">revokeUsers</a>({ ...params }) -> OrganizationRevokeUsersResponse</code>

### DOH

Types:

- <code><a href="./src/resources/zero-trust/organizations/doh.ts">DOHUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/organizations/doh.ts">DOHGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/access/organizations/doh">client.zeroTrust.organizations.doh.<a href="./src/resources/zero-trust/organizations/doh.ts">update</a>({ ...params }) -> DOHUpdateResponse</code>
- <code title="get /accounts/{account_id}/access/organizations/doh">client.zeroTrust.organizations.doh.<a href="./src/resources/zero-trust/organizations/doh.ts">get</a>({ ...params }) -> DOHGetResponse</code>

## Seats

Types:

- <code><a href="./src/resources/zero-trust/seats.ts">Seat</a></code>

Methods:

- <code title="patch /accounts/{account_id}/access/seats">client.zeroTrust.seats.<a href="./src/resources/zero-trust/seats.ts">edit</a>([ ...body ]) -> SeatsSinglePage</code>

## Access

### AIControls

#### Mcp

##### Portals

Types:

- <code><a href="./src/resources/zero-trust/access/ai-controls/mcp/portals.ts">PortalCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/ai-controls/mcp/portals.ts">PortalUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/ai-controls/mcp/portals.ts">PortalListResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/ai-controls/mcp/portals.ts">PortalDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/ai-controls/mcp/portals.ts">PortalReadResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/access/ai-controls/mcp/portals">client.zeroTrust.access.aiControls.mcp.portals.<a href="./src/resources/zero-trust/access/ai-controls/mcp/portals.ts">create</a>({ ...params }) -> PortalCreateResponse</code>
- <code title="put /accounts/{account_id}/access/ai-controls/mcp/portals/{id}">client.zeroTrust.access.aiControls.mcp.portals.<a href="./src/resources/zero-trust/access/ai-controls/mcp/portals.ts">update</a>(id, { ...params }) -> PortalUpdateResponse</code>
- <code title="get /accounts/{account_id}/access/ai-controls/mcp/portals">client.zeroTrust.access.aiControls.mcp.portals.<a href="./src/resources/zero-trust/access/ai-controls/mcp/portals.ts">list</a>({ ...params }) -> PortalListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/access/ai-controls/mcp/portals/{id}">client.zeroTrust.access.aiControls.mcp.portals.<a href="./src/resources/zero-trust/access/ai-controls/mcp/portals.ts">delete</a>(id, { ...params }) -> PortalDeleteResponse</code>
- <code title="get /accounts/{account_id}/access/ai-controls/mcp/portals/{id}">client.zeroTrust.access.aiControls.mcp.portals.<a href="./src/resources/zero-trust/access/ai-controls/mcp/portals.ts">read</a>(id, { ...params }) -> PortalReadResponse</code>

##### Servers

Types:

- <code><a href="./src/resources/zero-trust/access/ai-controls/mcp/servers.ts">ServerCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/ai-controls/mcp/servers.ts">ServerUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/ai-controls/mcp/servers.ts">ServerListResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/ai-controls/mcp/servers.ts">ServerDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/ai-controls/mcp/servers.ts">ServerReadResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/ai-controls/mcp/servers.ts">ServerSyncResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/access/ai-controls/mcp/servers">client.zeroTrust.access.aiControls.mcp.servers.<a href="./src/resources/zero-trust/access/ai-controls/mcp/servers.ts">create</a>({ ...params }) -> ServerCreateResponse</code>
- <code title="put /accounts/{account_id}/access/ai-controls/mcp/servers/{id}">client.zeroTrust.access.aiControls.mcp.servers.<a href="./src/resources/zero-trust/access/ai-controls/mcp/servers.ts">update</a>(id, { ...params }) -> ServerUpdateResponse</code>
- <code title="get /accounts/{account_id}/access/ai-controls/mcp/servers">client.zeroTrust.access.aiControls.mcp.servers.<a href="./src/resources/zero-trust/access/ai-controls/mcp/servers.ts">list</a>({ ...params }) -> ServerListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/access/ai-controls/mcp/servers/{id}">client.zeroTrust.access.aiControls.mcp.servers.<a href="./src/resources/zero-trust/access/ai-controls/mcp/servers.ts">delete</a>(id, { ...params }) -> ServerDeleteResponse</code>
- <code title="get /accounts/{account_id}/access/ai-controls/mcp/servers/{id}">client.zeroTrust.access.aiControls.mcp.servers.<a href="./src/resources/zero-trust/access/ai-controls/mcp/servers.ts">read</a>(id, { ...params }) -> ServerReadResponse</code>
- <code title="post /accounts/{account_id}/access/ai-controls/mcp/servers/{id}/sync">client.zeroTrust.access.aiControls.mcp.servers.<a href="./src/resources/zero-trust/access/ai-controls/mcp/servers.ts">sync</a>(id, { ...params }) -> ServerSyncResponse</code>

### GatewayCA

Types:

- <code><a href="./src/resources/zero-trust/access/gateway-ca.ts">GatewayCACreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/gateway-ca.ts">GatewayCAListResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/gateway-ca.ts">GatewayCADeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/access/gateway_ca">client.zeroTrust.access.gatewayCA.<a href="./src/resources/zero-trust/access/gateway-ca.ts">create</a>({ ...params }) -> GatewayCACreateResponse</code>
- <code title="get /accounts/{account_id}/access/gateway_ca">client.zeroTrust.access.gatewayCA.<a href="./src/resources/zero-trust/access/gateway-ca.ts">list</a>({ ...params }) -> GatewayCAListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/access/gateway_ca/{certificate_id}">client.zeroTrust.access.gatewayCA.<a href="./src/resources/zero-trust/access/gateway-ca.ts">delete</a>(certificateId, { ...params }) -> GatewayCADeleteResponse</code>

### SAMLCertificates

Types:

- <code><a href="./src/resources/zero-trust/access/saml-certificates.ts">SAMLCertificateListResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/saml-certificates.ts">SAMLCertificateGetResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/saml-certificates.ts">SAMLCertificateRotateResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/access/saml_certificates">client.zeroTrust.access.samlCertificates.<a href="./src/resources/zero-trust/access/saml-certificates.ts">list</a>({ ...params }) -> SAMLCertificateListResponsesV4PagePaginationArray</code>
- <code title="get /accounts/{account_id}/access/saml_certificates/{saml_cert_set_id}">client.zeroTrust.access.samlCertificates.<a href="./src/resources/zero-trust/access/saml-certificates.ts">get</a>(samlCERTSetId, { ...params }) -> SAMLCertificateGetResponse</code>
- <code title="get /accounts/{account_id}/access/saml_certificates/{saml_cert_set_id}/pem">client.zeroTrust.access.samlCertificates.<a href="./src/resources/zero-trust/access/saml-certificates.ts">getPem</a>(samlCERTSetId, { ...params }) -> Response</code>
- <code title="post /accounts/{account_id}/access/saml_certificates/{saml_cert_set_id}/rotate">client.zeroTrust.access.samlCertificates.<a href="./src/resources/zero-trust/access/saml-certificates.ts">rotate</a>(samlCERTSetId, { ...params }) -> SAMLCertificateRotateResponse</code>

### Infrastructure

#### Targets

Types:

- <code><a href="./src/resources/zero-trust/access/infrastructure/targets.ts">TargetCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/infrastructure/targets.ts">TargetUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/infrastructure/targets.ts">TargetListResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/infrastructure/targets.ts">TargetBulkUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/infrastructure/targets.ts">TargetGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/infrastructure/targets">client.zeroTrust.access.infrastructure.targets.<a href="./src/resources/zero-trust/access/infrastructure/targets.ts">create</a>({ ...params }) -> TargetCreateResponse</code>
- <code title="put /accounts/{account_id}/infrastructure/targets/{target_id}">client.zeroTrust.access.infrastructure.targets.<a href="./src/resources/zero-trust/access/infrastructure/targets.ts">update</a>(targetId, { ...params }) -> TargetUpdateResponse</code>
- <code title="get /accounts/{account_id}/infrastructure/targets">client.zeroTrust.access.infrastructure.targets.<a href="./src/resources/zero-trust/access/infrastructure/targets.ts">list</a>({ ...params }) -> TargetListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/infrastructure/targets/{target_id}">client.zeroTrust.access.infrastructure.targets.<a href="./src/resources/zero-trust/access/infrastructure/targets.ts">delete</a>(targetId, { ...params }) -> void</code>
- <code title="delete /accounts/{account_id}/infrastructure/targets/batch">client.zeroTrust.access.infrastructure.targets.<a href="./src/resources/zero-trust/access/infrastructure/targets.ts">bulkDelete</a>({ ...params }) -> void</code>
- <code title="post /accounts/{account_id}/infrastructure/targets/batch_delete">client.zeroTrust.access.infrastructure.targets.<a href="./src/resources/zero-trust/access/infrastructure/targets.ts">bulkDeleteV2</a>({ ...params }) -> void</code>
- <code title="put /accounts/{account_id}/infrastructure/targets/batch">client.zeroTrust.access.infrastructure.targets.<a href="./src/resources/zero-trust/access/infrastructure/targets.ts">bulkUpdate</a>([ ...body ]) -> TargetBulkUpdateResponsesSinglePage</code>
- <code title="get /accounts/{account_id}/infrastructure/targets/{target_id}">client.zeroTrust.access.infrastructure.targets.<a href="./src/resources/zero-trust/access/infrastructure/targets.ts">get</a>(targetId, { ...params }) -> TargetGetResponse</code>

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
- <code><a href="./src/resources/zero-trust/access/applications/applications.ts">SaaSAppNameIDFormat</a></code>
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

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/access/apps">client.zeroTrust.access.applications.<a href="./src/resources/zero-trust/access/applications/applications.ts">create</a>({ ...params }) -> ApplicationCreateResponse</code>
- <code title="put /{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}">client.zeroTrust.access.applications.<a href="./src/resources/zero-trust/access/applications/applications.ts">update</a>(appId, { ...params }) -> ApplicationUpdateResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/apps">client.zeroTrust.access.applications.<a href="./src/resources/zero-trust/access/applications/applications.ts">list</a>({ ...params }) -> ApplicationListResponsesV4PagePaginationArray</code>
- <code title="delete /{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}">client.zeroTrust.access.applications.<a href="./src/resources/zero-trust/access/applications/applications.ts">delete</a>(appId, { ...params }) -> ApplicationDeleteResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}">client.zeroTrust.access.applications.<a href="./src/resources/zero-trust/access/applications/applications.ts">get</a>(appId, { ...params }) -> ApplicationGetResponse</code>
- <code title="post /{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}/revoke_tokens">client.zeroTrust.access.applications.<a href="./src/resources/zero-trust/access/applications/applications.ts">revokeTokens</a>(appId, { ...params }) -> ApplicationRevokeTokensResponse | null</code>

#### CAs

Types:

- <code><a href="./src/resources/zero-trust/access/applications/cas.ts">CA</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/cas.ts">CADeleteResponse</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}/ca">client.zeroTrust.access.applications.cas.<a href="./src/resources/zero-trust/access/applications/cas.ts">create</a>(appId, { ...params }) -> CA</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/apps/ca">client.zeroTrust.access.applications.cas.<a href="./src/resources/zero-trust/access/applications/cas.ts">list</a>({ ...params }) -> CAsV4PagePaginationArray</code>
- <code title="delete /{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}/ca">client.zeroTrust.access.applications.cas.<a href="./src/resources/zero-trust/access/applications/cas.ts">delete</a>(appId, { ...params }) -> CADeleteResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}/ca">client.zeroTrust.access.applications.cas.<a href="./src/resources/zero-trust/access/applications/cas.ts">get</a>(appId, { ...params }) -> CA</code>

#### UserPolicyChecks

Types:

- <code><a href="./src/resources/zero-trust/access/applications/user-policy-checks.ts">UserPolicyCheckGeo</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/user-policy-checks.ts">UserPolicyCheckListResponse</a></code>

Methods:

- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}/user_policy_checks">client.zeroTrust.access.applications.userPolicyChecks.<a href="./src/resources/zero-trust/access/applications/user-policy-checks.ts">list</a>(appId, { ...params }) -> UserPolicyCheckListResponse</code>

#### Policies

Types:

- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">AccessDevicePostureRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">AccessRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">AnyValidServiceTokenRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">AuthenticationMethodRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">AzureGroupRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">CertificateRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">CountryRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">DomainRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">EmailListRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">EmailRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">EveryoneRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">ExternalEvaluationRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">GitHubOrganizationRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">GroupRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">GSuiteGroupRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">IPListRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">IPRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">OktaGroupRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">SAMLGroupRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">ServiceTokenRule</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">PolicyCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">PolicyUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">PolicyListResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">PolicyDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policies.ts">PolicyGetResponse</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}/policies">client.zeroTrust.access.applications.policies.<a href="./src/resources/zero-trust/access/applications/policies.ts">create</a>(appId, { ...params }) -> PolicyCreateResponse</code>
- <code title="put /{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}/policies/{policy_id}">client.zeroTrust.access.applications.policies.<a href="./src/resources/zero-trust/access/applications/policies.ts">update</a>(appId, policyId, { ...params }) -> PolicyUpdateResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}/policies">client.zeroTrust.access.applications.policies.<a href="./src/resources/zero-trust/access/applications/policies.ts">list</a>(appId, { ...params }) -> PolicyListResponsesV4PagePaginationArray</code>
- <code title="delete /{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}/policies/{policy_id}">client.zeroTrust.access.applications.policies.<a href="./src/resources/zero-trust/access/applications/policies.ts">delete</a>(appId, policyId, { ...params }) -> PolicyDeleteResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}/policies/{policy_id}">client.zeroTrust.access.applications.policies.<a href="./src/resources/zero-trust/access/applications/policies.ts">get</a>(appId, policyId, { ...params }) -> PolicyGetResponse</code>

#### PolicyTests

Types:

- <code><a href="./src/resources/zero-trust/access/applications/policy-tests/policy-tests.ts">PolicyTestCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/policy-tests/policy-tests.ts">PolicyTestGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/access/policy-tests">client.zeroTrust.access.applications.policyTests.<a href="./src/resources/zero-trust/access/applications/policy-tests/policy-tests.ts">create</a>({ ...params }) -> PolicyTestCreateResponse</code>
- <code title="get /accounts/{account_id}/access/policy-tests/{policy_test_id}">client.zeroTrust.access.applications.policyTests.<a href="./src/resources/zero-trust/access/applications/policy-tests/policy-tests.ts">get</a>(policyTestId, { ...params }) -> PolicyTestGetResponse</code>

##### Users

Types:

- <code><a href="./src/resources/zero-trust/access/applications/policy-tests/users.ts">UserListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/access/policy-tests/{policy_test_id}/users">client.zeroTrust.access.applications.policyTests.users.<a href="./src/resources/zero-trust/access/applications/policy-tests/users.ts">list</a>(policyTestId, { ...params }) -> UserListResponsesV4PagePaginationArray</code>

#### Settings

Types:

- <code><a href="./src/resources/zero-trust/access/applications/settings.ts">SettingUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/applications/settings.ts">SettingEditResponse</a></code>

Methods:

- <code title="put /{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}/settings">client.zeroTrust.access.applications.settings.<a href="./src/resources/zero-trust/access/applications/settings.ts">update</a>(appId, { ...params }) -> SettingUpdateResponse</code>
- <code title="patch /{accounts_or_zones}/{account_or_zone_id}/access/apps/{app_id}/settings">client.zeroTrust.access.applications.settings.<a href="./src/resources/zero-trust/access/applications/settings.ts">edit</a>(appId, { ...params }) -> SettingEditResponse</code>

### Certificates

Types:

- <code><a href="./src/resources/zero-trust/access/certificates/certificates.ts">AssociatedHostnames</a></code>
- <code><a href="./src/resources/zero-trust/access/certificates/certificates.ts">Certificate</a></code>
- <code><a href="./src/resources/zero-trust/access/certificates/certificates.ts">CertificateDeleteResponse</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/access/certificates">client.zeroTrust.access.certificates.<a href="./src/resources/zero-trust/access/certificates/certificates.ts">create</a>({ ...params }) -> Certificate</code>
- <code title="put /{accounts_or_zones}/{account_or_zone_id}/access/certificates/{certificate_id}">client.zeroTrust.access.certificates.<a href="./src/resources/zero-trust/access/certificates/certificates.ts">update</a>(certificateId, { ...params }) -> Certificate</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/certificates">client.zeroTrust.access.certificates.<a href="./src/resources/zero-trust/access/certificates/certificates.ts">list</a>({ ...params }) -> CertificatesV4PagePaginationArray</code>
- <code title="delete /{accounts_or_zones}/{account_or_zone_id}/access/certificates/{certificate_id}">client.zeroTrust.access.certificates.<a href="./src/resources/zero-trust/access/certificates/certificates.ts">delete</a>(certificateId, { ...params }) -> CertificateDeleteResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/certificates/{certificate_id}">client.zeroTrust.access.certificates.<a href="./src/resources/zero-trust/access/certificates/certificates.ts">get</a>(certificateId, { ...params }) -> Certificate</code>

#### Settings

Types:

- <code><a href="./src/resources/zero-trust/access/certificates/settings.ts">CertificateSettings</a></code>

Methods:

- <code title="put /{accounts_or_zones}/{account_or_zone_id}/access/certificates/settings">client.zeroTrust.access.certificates.settings.<a href="./src/resources/zero-trust/access/certificates/settings.ts">update</a>({ ...params }) -> CertificateSettingsSinglePage</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/certificates/settings">client.zeroTrust.access.certificates.settings.<a href="./src/resources/zero-trust/access/certificates/settings.ts">get</a>({ ...params }) -> CertificateSettingsSinglePage</code>

### Groups

Types:

- <code><a href="./src/resources/zero-trust/access/groups.ts">ZeroTrustGroup</a></code>
- <code><a href="./src/resources/zero-trust/access/groups.ts">GroupCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/groups.ts">GroupUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/groups.ts">GroupListResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/groups.ts">GroupDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/groups.ts">GroupGetResponse</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/access/groups">client.zeroTrust.access.groups.<a href="./src/resources/zero-trust/access/groups.ts">create</a>({ ...params }) -> GroupCreateResponse</code>
- <code title="put /{accounts_or_zones}/{account_or_zone_id}/access/groups/{group_id}">client.zeroTrust.access.groups.<a href="./src/resources/zero-trust/access/groups.ts">update</a>(groupId, { ...params }) -> GroupUpdateResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/groups">client.zeroTrust.access.groups.<a href="./src/resources/zero-trust/access/groups.ts">list</a>({ ...params }) -> GroupListResponsesV4PagePaginationArray</code>
- <code title="delete /{accounts_or_zones}/{account_or_zone_id}/access/groups/{group_id}">client.zeroTrust.access.groups.<a href="./src/resources/zero-trust/access/groups.ts">delete</a>(groupId, { ...params }) -> GroupDeleteResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/groups/{group_id}">client.zeroTrust.access.groups.<a href="./src/resources/zero-trust/access/groups.ts">get</a>(groupId, { ...params }) -> GroupGetResponse</code>

### ServiceTokens

Types:

- <code><a href="./src/resources/zero-trust/access/service-tokens.ts">ServiceToken</a></code>
- <code><a href="./src/resources/zero-trust/access/service-tokens.ts">ServiceTokenCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/service-tokens.ts">ServiceTokenRotateResponse</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/access/service_tokens">client.zeroTrust.access.serviceTokens.<a href="./src/resources/zero-trust/access/service-tokens.ts">create</a>({ ...params }) -> ServiceTokenCreateResponse</code>
- <code title="put /{accounts_or_zones}/{account_or_zone_id}/access/service_tokens/{service_token_id}">client.zeroTrust.access.serviceTokens.<a href="./src/resources/zero-trust/access/service-tokens.ts">update</a>(serviceTokenId, { ...params }) -> ServiceToken</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/service_tokens">client.zeroTrust.access.serviceTokens.<a href="./src/resources/zero-trust/access/service-tokens.ts">list</a>({ ...params }) -> ServiceTokensV4PagePaginationArray</code>
- <code title="delete /{accounts_or_zones}/{account_or_zone_id}/access/service_tokens/{service_token_id}">client.zeroTrust.access.serviceTokens.<a href="./src/resources/zero-trust/access/service-tokens.ts">delete</a>(serviceTokenId, { ...params }) -> ServiceToken</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/access/service_tokens/{service_token_id}">client.zeroTrust.access.serviceTokens.<a href="./src/resources/zero-trust/access/service-tokens.ts">get</a>(serviceTokenId, { ...params }) -> ServiceToken</code>
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

- <code><a href="./src/resources/zero-trust/access/logs/access-requests.ts">AccessRequestListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/access/logs/access_requests">client.zeroTrust.access.logs.accessRequests.<a href="./src/resources/zero-trust/access/logs/access-requests.ts">list</a>({ ...params }) -> AccessRequestListResponse</code>

#### SCIM

Types:

- <code><a href="./src/resources/zero-trust/access/logs/scim/scim.ts">AccessRequest</a></code>

##### Updates

Types:

- <code><a href="./src/resources/zero-trust/access/logs/scim/updates.ts">UpdateListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/access/logs/scim/updates">client.zeroTrust.access.logs.scim.updates.<a href="./src/resources/zero-trust/access/logs/scim/updates.ts">list</a>({ ...params }) -> UpdateListResponsesV4PagePaginationArray</code>

### Users

Types:

- <code><a href="./src/resources/zero-trust/access/users/users.ts">AccessUser</a></code>
- <code><a href="./src/resources/zero-trust/access/users/users.ts">UserCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/users/users.ts">UserUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/users/users.ts">UserListResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/users/users.ts">UserDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/users/users.ts">UserGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/access/users">client.zeroTrust.access.users.<a href="./src/resources/zero-trust/access/users/users.ts">create</a>({ ...params }) -> UserCreateResponse</code>
- <code title="put /accounts/{account_id}/access/users/{user_id}">client.zeroTrust.access.users.<a href="./src/resources/zero-trust/access/users/users.ts">update</a>(userId, { ...params }) -> UserUpdateResponse</code>
- <code title="get /accounts/{account_id}/access/users">client.zeroTrust.access.users.<a href="./src/resources/zero-trust/access/users/users.ts">list</a>({ ...params }) -> UserListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/access/users/{user_id}">client.zeroTrust.access.users.<a href="./src/resources/zero-trust/access/users/users.ts">delete</a>(userId, { ...params }) -> UserDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/access/users/{user_id}">client.zeroTrust.access.users.<a href="./src/resources/zero-trust/access/users/users.ts">get</a>(userId, { ...params }) -> UserGetResponse</code>

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
- <code title="get /accounts/{account_id}/access/custom_pages">client.zeroTrust.access.customPages.<a href="./src/resources/zero-trust/access/custom-pages.ts">list</a>({ ...params }) -> CustomPageWithoutHTMLsV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/access/custom_pages/{custom_page_id}">client.zeroTrust.access.customPages.<a href="./src/resources/zero-trust/access/custom-pages.ts">delete</a>(customPageId, { ...params }) -> CustomPageDeleteResponse</code>
- <code title="get /accounts/{account_id}/access/custom_pages/{custom_page_id}">client.zeroTrust.access.customPages.<a href="./src/resources/zero-trust/access/custom-pages.ts">get</a>(customPageId, { ...params }) -> CustomPage</code>

### Tags

Types:

- <code><a href="./src/resources/zero-trust/access/tags.ts">Tag</a></code>
- <code><a href="./src/resources/zero-trust/access/tags.ts">TagDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/access/tags">client.zeroTrust.access.tags.<a href="./src/resources/zero-trust/access/tags.ts">create</a>({ ...params }) -> Tag</code>
- <code title="put /accounts/{account_id}/access/tags/{tag_name}">client.zeroTrust.access.tags.<a href="./src/resources/zero-trust/access/tags.ts">update</a>(tagName, { ...params }) -> Tag</code>
- <code title="get /accounts/{account_id}/access/tags">client.zeroTrust.access.tags.<a href="./src/resources/zero-trust/access/tags.ts">list</a>({ ...params }) -> TagsV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/access/tags/{tag_name}">client.zeroTrust.access.tags.<a href="./src/resources/zero-trust/access/tags.ts">delete</a>(tagName, { ...params }) -> TagDeleteResponse</code>
- <code title="get /accounts/{account_id}/access/tags/{tag_name}">client.zeroTrust.access.tags.<a href="./src/resources/zero-trust/access/tags.ts">get</a>(tagName, { ...params }) -> Tag</code>

### Policies

Types:

- <code><a href="./src/resources/zero-trust/access/policies.ts">ApprovalGroup</a></code>
- <code><a href="./src/resources/zero-trust/access/policies.ts">Policy</a></code>
- <code><a href="./src/resources/zero-trust/access/policies.ts">PolicyCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/policies.ts">PolicyUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/policies.ts">PolicyListResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/policies.ts">PolicyDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/access/policies.ts">PolicyGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/access/policies">client.zeroTrust.access.policies.<a href="./src/resources/zero-trust/access/policies.ts">create</a>({ ...params }) -> PolicyCreateResponse</code>
- <code title="put /accounts/{account_id}/access/policies/{policy_id}">client.zeroTrust.access.policies.<a href="./src/resources/zero-trust/access/policies.ts">update</a>(policyId, { ...params }) -> PolicyUpdateResponse</code>
- <code title="get /accounts/{account_id}/access/policies">client.zeroTrust.access.policies.<a href="./src/resources/zero-trust/access/policies.ts">list</a>({ ...params }) -> PolicyListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/access/policies/{policy_id}">client.zeroTrust.access.policies.<a href="./src/resources/zero-trust/access/policies.ts">delete</a>(policyId, { ...params }) -> PolicyDeleteResponse</code>
- <code title="get /accounts/{account_id}/access/policies/{policy_id}">client.zeroTrust.access.policies.<a href="./src/resources/zero-trust/access/policies.ts">get</a>(policyId, { ...params }) -> PolicyGetResponse</code>

## DEX

Types:

- <code><a href="./src/resources/zero-trust/dex/dex.ts">DigitalExperienceMonitor</a></code>
- <code><a href="./src/resources/zero-trust/dex/dex.ts">NetworkPath</a></code>
- <code><a href="./src/resources/zero-trust/dex/dex.ts">NetworkPathResponse</a></code>
- <code><a href="./src/resources/zero-trust/dex/dex.ts">Percentiles</a></code>

### WARPChangeEvents

Types:

- <code><a href="./src/resources/zero-trust/dex/warp-change-events.ts">WARPChangeEventGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/warp-change-events">client.zeroTrust.dex.warpChangeEvents.<a href="./src/resources/zero-trust/dex/warp-change-events.ts">get</a>({ ...params }) -> WARPChangeEventGetResponse</code>

### Commands

Types:

- <code><a href="./src/resources/zero-trust/dex/commands/commands.ts">CommandCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dex/commands/commands.ts">CommandListResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dex/commands">client.zeroTrust.dex.commands.<a href="./src/resources/zero-trust/dex/commands/commands.ts">create</a>({ ...params }) -> CommandCreateResponse</code>
- <code title="get /accounts/{account_id}/dex/commands">client.zeroTrust.dex.commands.<a href="./src/resources/zero-trust/dex/commands/commands.ts">list</a>({ ...params }) -> CommandListResponsesV4PagePagination</code>

#### Devices

Types:

- <code><a href="./src/resources/zero-trust/dex/commands/devices.ts">DeviceListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/commands/devices">client.zeroTrust.dex.commands.devices.<a href="./src/resources/zero-trust/dex/commands/devices.ts">list</a>({ ...params }) -> DeviceListResponsesV4PagePagination</code>

#### Downloads

Methods:

- <code title="get /accounts/{account_id}/dex/commands/{command_id}/downloads/{filename}">client.zeroTrust.dex.commands.downloads.<a href="./src/resources/zero-trust/dex/commands/downloads.ts">get</a>(commandId, filename, { ...params }) -> Response</code>

#### Quota

Types:

- <code><a href="./src/resources/zero-trust/dex/commands/quota.ts">QuotaGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/commands/quota">client.zeroTrust.dex.commands.quota.<a href="./src/resources/zero-trust/dex/commands/quota.ts">get</a>({ ...params }) -> QuotaGetResponse</code>

### Colos

Types:

- <code><a href="./src/resources/zero-trust/dex/colos.ts">ColoListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/colos">client.zeroTrust.dex.colos.<a href="./src/resources/zero-trust/dex/colos.ts">list</a>({ ...params }) -> ColoListResponsesSinglePage</code>

### FleetStatus

Types:

- <code><a href="./src/resources/zero-trust/dex/fleet-status/fleet-status.ts">LiveStat</a></code>
- <code><a href="./src/resources/zero-trust/dex/fleet-status/fleet-status.ts">FleetStatusLiveResponse</a></code>
- <code><a href="./src/resources/zero-trust/dex/fleet-status/fleet-status.ts">FleetStatusOverTimeResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dex/fleet-status/live">client.zeroTrust.dex.fleetStatus.<a href="./src/resources/zero-trust/dex/fleet-status/fleet-status.ts">live</a>({ ...params }) -> FleetStatusLiveResponse</code>
- <code title="get /accounts/{account_id}/dex/fleet-status/over-time">client.zeroTrust.dex.fleetStatus.<a href="./src/resources/zero-trust/dex/fleet-status/fleet-status.ts">overTime</a>({ ...params }) -> FleetStatusOverTimeResponse</code>

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

Methods:

- <code title="get /accounts/{account_id}/dex/tests/overview">client.zeroTrust.dex.tests.<a href="./src/resources/zero-trust/dex/tests/tests.ts">list</a>({ ...params }) -> TestsV4PagePagination</code>

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

### Rules

Types:

- <code><a href="./src/resources/zero-trust/dex/rules.ts">RuleCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dex/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dex/rules.ts">RuleListResponse</a></code>
- <code><a href="./src/resources/zero-trust/dex/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/dex/rules.ts">RuleGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dex/rules">client.zeroTrust.dex.rules.<a href="./src/resources/zero-trust/dex/rules.ts">create</a>({ ...params }) -> RuleCreateResponse</code>
- <code title="patch /accounts/{account_id}/dex/rules/{rule_id}">client.zeroTrust.dex.rules.<a href="./src/resources/zero-trust/dex/rules.ts">update</a>(ruleId, { ...params }) -> RuleUpdateResponse</code>
- <code title="get /accounts/{account_id}/dex/rules">client.zeroTrust.dex.rules.<a href="./src/resources/zero-trust/dex/rules.ts">list</a>({ ...params }) -> RuleListResponsesV4PagePagination</code>
- <code title="delete /accounts/{account_id}/dex/rules/{rule_id}">client.zeroTrust.dex.rules.<a href="./src/resources/zero-trust/dex/rules.ts">delete</a>(ruleId, { ...params }) -> RuleDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/dex/rules/{rule_id}">client.zeroTrust.dex.rules.<a href="./src/resources/zero-trust/dex/rules.ts">get</a>(ruleId, { ...params }) -> RuleGetResponse</code>

## Tunnels

Types:

- <code><a href="./src/resources/zero-trust/tunnels/tunnels.ts">Connection</a></code>
- <code><a href="./src/resources/zero-trust/tunnels/tunnels.ts">TunnelListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/tunnels">client.zeroTrust.tunnels.<a href="./src/resources/zero-trust/tunnels/tunnels.ts">list</a>({ ...params }) -> TunnelListResponsesV4PagePaginationArray</code>

### Cloudflared

Methods:

- <code title="post /accounts/{account_id}/cfd_tunnel">client.zeroTrust.tunnels.cloudflared.<a href="./src/resources/zero-trust/tunnels/cloudflared/cloudflared.ts">create</a>({ ...params }) -> CloudflareTunnel</code>
- <code title="get /accounts/{account_id}/cfd_tunnel">client.zeroTrust.tunnels.cloudflared.<a href="./src/resources/zero-trust/tunnels/cloudflared/cloudflared.ts">list</a>({ ...params }) -> CloudflareTunnelsV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/cfd_tunnel/{tunnel_id}">client.zeroTrust.tunnels.cloudflared.<a href="./src/resources/zero-trust/tunnels/cloudflared/cloudflared.ts">delete</a>(tunnelId, { ...params }) -> CloudflareTunnel</code>
- <code title="patch /accounts/{account_id}/cfd_tunnel/{tunnel_id}">client.zeroTrust.tunnels.cloudflared.<a href="./src/resources/zero-trust/tunnels/cloudflared/cloudflared.ts">edit</a>(tunnelId, { ...params }) -> CloudflareTunnel</code>
- <code title="get /accounts/{account_id}/cfd_tunnel/{tunnel_id}">client.zeroTrust.tunnels.cloudflared.<a href="./src/resources/zero-trust/tunnels/cloudflared/cloudflared.ts">get</a>(tunnelId, { ...params }) -> CloudflareTunnel</code>

#### Configurations

Types:

- <code><a href="./src/resources/zero-trust/tunnels/cloudflared/configurations.ts">ConfigurationUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/tunnels/cloudflared/configurations.ts">ConfigurationGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/cfd_tunnel/{tunnel_id}/configurations">client.zeroTrust.tunnels.cloudflared.configurations.<a href="./src/resources/zero-trust/tunnels/cloudflared/configurations.ts">update</a>(tunnelId, { ...params }) -> ConfigurationUpdateResponse</code>
- <code title="get /accounts/{account_id}/cfd_tunnel/{tunnel_id}/configurations">client.zeroTrust.tunnels.cloudflared.configurations.<a href="./src/resources/zero-trust/tunnels/cloudflared/configurations.ts">get</a>(tunnelId, { ...params }) -> ConfigurationGetResponse</code>

#### Connections

Types:

- <code><a href="./src/resources/zero-trust/tunnels/cloudflared/connections.ts">Client</a></code>
- <code><a href="./src/resources/zero-trust/tunnels/cloudflared/connections.ts">ConnectionDeleteResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/cfd_tunnel/{tunnel_id}/connections">client.zeroTrust.tunnels.cloudflared.connections.<a href="./src/resources/zero-trust/tunnels/cloudflared/connections.ts">delete</a>(tunnelId, { ...params }) -> ConnectionDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/cfd_tunnel/{tunnel_id}/connections">client.zeroTrust.tunnels.cloudflared.connections.<a href="./src/resources/zero-trust/tunnels/cloudflared/connections.ts">get</a>(tunnelId, { ...params }) -> ClientsSinglePage</code>

#### Token

Types:

- <code><a href="./src/resources/zero-trust/tunnels/cloudflared/token.ts">TokenGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/cfd_tunnel/{tunnel_id}/token">client.zeroTrust.tunnels.cloudflared.token.<a href="./src/resources/zero-trust/tunnels/cloudflared/token.ts">get</a>(tunnelId, { ...params }) -> TokenGetResponse</code>

#### Connectors

Methods:

- <code title="get /accounts/{account_id}/cfd_tunnel/{tunnel_id}/connectors/{connector_id}">client.zeroTrust.tunnels.cloudflared.connectors.<a href="./src/resources/zero-trust/tunnels/cloudflared/connectors.ts">get</a>(tunnelId, connectorId, { ...params }) -> Client</code>

#### Management

Types:

- <code><a href="./src/resources/zero-trust/tunnels/cloudflared/management.ts">ManagementCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/cfd_tunnel/{tunnel_id}/management">client.zeroTrust.tunnels.cloudflared.management.<a href="./src/resources/zero-trust/tunnels/cloudflared/management.ts">create</a>(tunnelId, { ...params }) -> ManagementCreateResponse</code>

### WARPConnector

Types:

- <code><a href="./src/resources/zero-trust/tunnels/warp-connector/warp-connector.ts">WARPConnectorCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/tunnels/warp-connector/warp-connector.ts">WARPConnectorListResponse</a></code>
- <code><a href="./src/resources/zero-trust/tunnels/warp-connector/warp-connector.ts">WARPConnectorDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/tunnels/warp-connector/warp-connector.ts">WARPConnectorEditResponse</a></code>
- <code><a href="./src/resources/zero-trust/tunnels/warp-connector/warp-connector.ts">WARPConnectorGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/warp_connector">client.zeroTrust.tunnels.warpConnector.<a href="./src/resources/zero-trust/tunnels/warp-connector/warp-connector.ts">create</a>({ ...params }) -> WARPConnectorCreateResponse</code>
- <code title="get /accounts/{account_id}/warp_connector">client.zeroTrust.tunnels.warpConnector.<a href="./src/resources/zero-trust/tunnels/warp-connector/warp-connector.ts">list</a>({ ...params }) -> WARPConnectorListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/warp_connector/{tunnel_id}">client.zeroTrust.tunnels.warpConnector.<a href="./src/resources/zero-trust/tunnels/warp-connector/warp-connector.ts">delete</a>(tunnelId, { ...params }) -> WARPConnectorDeleteResponse</code>
- <code title="patch /accounts/{account_id}/warp_connector/{tunnel_id}">client.zeroTrust.tunnels.warpConnector.<a href="./src/resources/zero-trust/tunnels/warp-connector/warp-connector.ts">edit</a>(tunnelId, { ...params }) -> WARPConnectorEditResponse</code>
- <code title="get /accounts/{account_id}/warp_connector/{tunnel_id}">client.zeroTrust.tunnels.warpConnector.<a href="./src/resources/zero-trust/tunnels/warp-connector/warp-connector.ts">get</a>(tunnelId, { ...params }) -> WARPConnectorGetResponse</code>

#### Token

Types:

- <code><a href="./src/resources/zero-trust/tunnels/warp-connector/token.ts">TokenGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/warp_connector/{tunnel_id}/token">client.zeroTrust.tunnels.warpConnector.token.<a href="./src/resources/zero-trust/tunnels/warp-connector/token.ts">get</a>(tunnelId, { ...params }) -> TokenGetResponse</code>

#### Connections

Types:

- <code><a href="./src/resources/zero-trust/tunnels/warp-connector/connections.ts">ConnectionGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/warp_connector/{tunnel_id}/connections">client.zeroTrust.tunnels.warpConnector.connections.<a href="./src/resources/zero-trust/tunnels/warp-connector/connections.ts">get</a>(tunnelId, { ...params }) -> ConnectionGetResponsesSinglePage</code>

#### Connectors

Types:

- <code><a href="./src/resources/zero-trust/tunnels/warp-connector/connectors.ts">ConnectorGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/warp_connector/{tunnel_id}/connectors/{connector_id}">client.zeroTrust.tunnels.warpConnector.connectors.<a href="./src/resources/zero-trust/tunnels/warp-connector/connectors.ts">get</a>(tunnelId, connectorId, { ...params }) -> ConnectorGetResponse</code>

#### Failover

Types:

- <code><a href="./src/resources/zero-trust/tunnels/warp-connector/failover.ts">FailoverUpdateResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/warp_connector/{tunnel_id}/failover">client.zeroTrust.tunnels.warpConnector.failover.<a href="./src/resources/zero-trust/tunnels/warp-connector/failover.ts">update</a>(tunnelId, { ...params }) -> FailoverUpdateResponse | null</code>

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
- <code title="post /accounts/{account_id}/dlp/datasets/{dataset_id}/upload/{version}">client.zeroTrust.dlp.datasets.upload.<a href="./src/resources/zero-trust/dlp/datasets/upload.ts">edit</a>(datasetId, version, dataset, { ...params }) -> Dataset</code>

#### Versions

Types:

- <code><a href="./src/resources/zero-trust/dlp/datasets/versions/versions.ts">VersionCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/datasets/{dataset_id}/versions/{version}">client.zeroTrust.dlp.datasets.versions.<a href="./src/resources/zero-trust/dlp/datasets/versions/versions.ts">create</a>(datasetId, version, [ ...body ]) -> VersionCreateResponsesSinglePage</code>

##### Entries

Types:

- <code><a href="./src/resources/zero-trust/dlp/datasets/versions/entries.ts">EntryCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/datasets/{dataset_id}/versions/{version}/entries/{entry_id}">client.zeroTrust.dlp.datasets.versions.entries.<a href="./src/resources/zero-trust/dlp/datasets/versions/entries.ts">create</a>(datasetId, version, entryId, datasetVersionEntry, { ...params }) -> EntryCreateResponse</code>

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

### Settings

Types:

- <code><a href="./src/resources/zero-trust/dlp/settings.ts">DLPSettings</a></code>

Methods:

- <code title="put /accounts/{account_id}/dlp/settings">client.zeroTrust.dlp.settings.<a href="./src/resources/zero-trust/dlp/settings.ts">update</a>({ ...params }) -> DLPSettings</code>
- <code title="delete /accounts/{account_id}/dlp/settings">client.zeroTrust.dlp.settings.<a href="./src/resources/zero-trust/dlp/settings.ts">delete</a>({ ...params }) -> DLPSettings</code>
- <code title="patch /accounts/{account_id}/dlp/settings">client.zeroTrust.dlp.settings.<a href="./src/resources/zero-trust/dlp/settings.ts">edit</a>({ ...params }) -> DLPSettings</code>
- <code title="get /accounts/{account_id}/dlp/settings">client.zeroTrust.dlp.settings.<a href="./src/resources/zero-trust/dlp/settings.ts">get</a>({ ...params }) -> DLPSettings</code>

### Email

#### AccountMapping

Types:

- <code><a href="./src/resources/zero-trust/dlp/email/account-mapping.ts">AccountMappingCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/email/account-mapping.ts">AccountMappingGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/email/account_mapping">client.zeroTrust.dlp.email.accountMapping.<a href="./src/resources/zero-trust/dlp/email/account-mapping.ts">create</a>({ ...params }) -> AccountMappingCreateResponse</code>
- <code title="get /accounts/{account_id}/dlp/email/account_mapping">client.zeroTrust.dlp.email.accountMapping.<a href="./src/resources/zero-trust/dlp/email/account-mapping.ts">get</a>({ ...params }) -> AccountMappingGetResponse</code>

#### Rules

Types:

- <code><a href="./src/resources/zero-trust/dlp/email/rules.ts">RuleCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/email/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/email/rules.ts">RuleListResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/email/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/email/rules.ts">RuleBulkEditResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/email/rules.ts">RuleGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/email/rules">client.zeroTrust.dlp.email.rules.<a href="./src/resources/zero-trust/dlp/email/rules.ts">create</a>({ ...params }) -> RuleCreateResponse</code>
- <code title="put /accounts/{account_id}/dlp/email/rules/{rule_id}">client.zeroTrust.dlp.email.rules.<a href="./src/resources/zero-trust/dlp/email/rules.ts">update</a>(ruleId, { ...params }) -> RuleUpdateResponse</code>
- <code title="get /accounts/{account_id}/dlp/email/rules">client.zeroTrust.dlp.email.rules.<a href="./src/resources/zero-trust/dlp/email/rules.ts">list</a>({ ...params }) -> RuleListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/dlp/email/rules/{rule_id}">client.zeroTrust.dlp.email.rules.<a href="./src/resources/zero-trust/dlp/email/rules.ts">delete</a>(ruleId, { ...params }) -> RuleDeleteResponse</code>
- <code title="patch /accounts/{account_id}/dlp/email/rules">client.zeroTrust.dlp.email.rules.<a href="./src/resources/zero-trust/dlp/email/rules.ts">bulkEdit</a>({ ...params }) -> RuleBulkEditResponse</code>
- <code title="get /accounts/{account_id}/dlp/email/rules/{rule_id}">client.zeroTrust.dlp.email.rules.<a href="./src/resources/zero-trust/dlp/email/rules.ts">get</a>(ruleId, { ...params }) -> RuleGetResponse</code>

### Profiles

Types:

- <code><a href="./src/resources/zero-trust/dlp/profiles/profiles.ts">ContextAwareness</a></code>
- <code><a href="./src/resources/zero-trust/dlp/profiles/profiles.ts">Profile</a></code>
- <code><a href="./src/resources/zero-trust/dlp/profiles/profiles.ts">SkipConfiguration</a></code>

Methods:

- <code title="get /accounts/{account_id}/dlp/profiles">client.zeroTrust.dlp.profiles.<a href="./src/resources/zero-trust/dlp/profiles/profiles.ts">list</a>({ ...params }) -> ProfilesSinglePage</code>
- <code title="get /accounts/{account_id}/dlp/profiles/{profile_id}">client.zeroTrust.dlp.profiles.<a href="./src/resources/zero-trust/dlp/profiles/profiles.ts">get</a>(profileId, { ...params }) -> Profile</code>

#### Custom

Types:

- <code><a href="./src/resources/zero-trust/dlp/profiles/custom.ts">CustomProfile</a></code>
- <code><a href="./src/resources/zero-trust/dlp/profiles/custom.ts">Pattern</a></code>
- <code><a href="./src/resources/zero-trust/dlp/profiles/custom.ts">CustomDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/profiles/custom">client.zeroTrust.dlp.profiles.custom.<a href="./src/resources/zero-trust/dlp/profiles/custom.ts">create</a>({ ...params }) -> Profile</code>
- <code title="put /accounts/{account_id}/dlp/profiles/custom/{profile_id}">client.zeroTrust.dlp.profiles.custom.<a href="./src/resources/zero-trust/dlp/profiles/custom.ts">update</a>(profileId, { ...params }) -> Profile</code>
- <code title="delete /accounts/{account_id}/dlp/profiles/custom/{profile_id}">client.zeroTrust.dlp.profiles.custom.<a href="./src/resources/zero-trust/dlp/profiles/custom.ts">delete</a>(profileId, { ...params }) -> CustomDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/dlp/profiles/custom/{profile_id}">client.zeroTrust.dlp.profiles.custom.<a href="./src/resources/zero-trust/dlp/profiles/custom.ts">get</a>(profileId, { ...params }) -> Profile</code>

#### Predefined

Types:

- <code><a href="./src/resources/zero-trust/dlp/profiles/predefined.ts">PredefinedProfile</a></code>
- <code><a href="./src/resources/zero-trust/dlp/profiles/predefined.ts">PredefinedDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/dlp/profiles/predefined/{profile_id}/config">client.zeroTrust.dlp.profiles.predefined.<a href="./src/resources/zero-trust/dlp/profiles/predefined.ts">update</a>(profileId, { ...params }) -> PredefinedProfile</code>
- <code title="delete /accounts/{account_id}/dlp/profiles/predefined/{profile_id}">client.zeroTrust.dlp.profiles.predefined.<a href="./src/resources/zero-trust/dlp/profiles/predefined.ts">delete</a>(profileId, { ...params }) -> PredefinedDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/dlp/profiles/predefined/{profile_id}/config">client.zeroTrust.dlp.profiles.predefined.<a href="./src/resources/zero-trust/dlp/profiles/predefined.ts">get</a>(profileId, { ...params }) -> PredefinedProfile</code>

### Limits

Types:

- <code><a href="./src/resources/zero-trust/dlp/limits.ts">LimitListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dlp/limits">client.zeroTrust.dlp.limits.<a href="./src/resources/zero-trust/dlp/limits.ts">list</a>({ ...params }) -> LimitListResponse</code>

### Entries

Types:

- <code><a href="./src/resources/zero-trust/dlp/entries/entries.ts">EntryCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/entries/entries.ts">EntryUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/entries/entries.ts">EntryListResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/entries/entries.ts">EntryDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/entries/entries.ts">EntryGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/entries">client.zeroTrust.dlp.entries.<a href="./src/resources/zero-trust/dlp/entries/entries.ts">create</a>({ ...params }) -> EntryCreateResponse</code>
- <code title="put /accounts/{account_id}/dlp/entries/{entry_id}">client.zeroTrust.dlp.entries.<a href="./src/resources/zero-trust/dlp/entries/entries.ts">update</a>(entryId, { ...params }) -> EntryUpdateResponse</code>
- <code title="get /accounts/{account_id}/dlp/entries">client.zeroTrust.dlp.entries.<a href="./src/resources/zero-trust/dlp/entries/entries.ts">list</a>({ ...params }) -> EntryListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/dlp/entries/{entry_id}">client.zeroTrust.dlp.entries.<a href="./src/resources/zero-trust/dlp/entries/entries.ts">delete</a>(entryId, { ...params }) -> EntryDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/dlp/entries/{entry_id}">client.zeroTrust.dlp.entries.<a href="./src/resources/zero-trust/dlp/entries/entries.ts">get</a>(entryId, { ...params }) -> EntryGetResponse</code>

#### Custom

Types:

- <code><a href="./src/resources/zero-trust/dlp/entries/custom.ts">CustomCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/entries/custom.ts">CustomUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/entries/custom.ts">CustomListResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/entries/custom.ts">CustomDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/entries/custom.ts">CustomGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/entries">client.zeroTrust.dlp.entries.custom.<a href="./src/resources/zero-trust/dlp/entries/custom.ts">create</a>({ ...params }) -> CustomCreateResponse</code>
- <code title="put /accounts/{account_id}/dlp/entries/custom/{entry_id}">client.zeroTrust.dlp.entries.custom.<a href="./src/resources/zero-trust/dlp/entries/custom.ts">update</a>(entryId, { ...params }) -> CustomUpdateResponse</code>
- <code title="get /accounts/{account_id}/dlp/entries">client.zeroTrust.dlp.entries.custom.<a href="./src/resources/zero-trust/dlp/entries/custom.ts">list</a>({ ...params }) -> CustomListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/dlp/entries/{entry_id}">client.zeroTrust.dlp.entries.custom.<a href="./src/resources/zero-trust/dlp/entries/custom.ts">delete</a>(entryId, { ...params }) -> CustomDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/dlp/entries/{entry_id}">client.zeroTrust.dlp.entries.custom.<a href="./src/resources/zero-trust/dlp/entries/custom.ts">get</a>(entryId, { ...params }) -> CustomGetResponse</code>

#### Predefined

Types:

- <code><a href="./src/resources/zero-trust/dlp/entries/predefined.ts">PredefinedCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/entries/predefined.ts">PredefinedUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/entries/predefined.ts">PredefinedListResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/entries/predefined.ts">PredefinedDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/entries/predefined.ts">PredefinedGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/entries/predefined">client.zeroTrust.dlp.entries.predefined.<a href="./src/resources/zero-trust/dlp/entries/predefined.ts">create</a>({ ...params }) -> PredefinedCreateResponse</code>
- <code title="put /accounts/{account_id}/dlp/entries/predefined/{entry_id}">client.zeroTrust.dlp.entries.predefined.<a href="./src/resources/zero-trust/dlp/entries/predefined.ts">update</a>(entryId, { ...params }) -> PredefinedUpdateResponse</code>
- <code title="get /accounts/{account_id}/dlp/entries">client.zeroTrust.dlp.entries.predefined.<a href="./src/resources/zero-trust/dlp/entries/predefined.ts">list</a>({ ...params }) -> PredefinedListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/dlp/entries/predefined/{entry_id}">client.zeroTrust.dlp.entries.predefined.<a href="./src/resources/zero-trust/dlp/entries/predefined.ts">delete</a>(entryId, { ...params }) -> PredefinedDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/dlp/entries/{entry_id}">client.zeroTrust.dlp.entries.predefined.<a href="./src/resources/zero-trust/dlp/entries/predefined.ts">get</a>(entryId, { ...params }) -> PredefinedGetResponse</code>

#### Integration

Types:

- <code><a href="./src/resources/zero-trust/dlp/entries/integration.ts">IntegrationCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/entries/integration.ts">IntegrationUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/entries/integration.ts">IntegrationListResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/entries/integration.ts">IntegrationDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/dlp/entries/integration.ts">IntegrationGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dlp/entries/integration">client.zeroTrust.dlp.entries.integration.<a href="./src/resources/zero-trust/dlp/entries/integration.ts">create</a>({ ...params }) -> IntegrationCreateResponse</code>
- <code title="put /accounts/{account_id}/dlp/entries/integration/{entry_id}">client.zeroTrust.dlp.entries.integration.<a href="./src/resources/zero-trust/dlp/entries/integration.ts">update</a>(entryId, { ...params }) -> IntegrationUpdateResponse</code>
- <code title="get /accounts/{account_id}/dlp/entries">client.zeroTrust.dlp.entries.integration.<a href="./src/resources/zero-trust/dlp/entries/integration.ts">list</a>({ ...params }) -> IntegrationListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/dlp/entries/integration/{entry_id}">client.zeroTrust.dlp.entries.integration.<a href="./src/resources/zero-trust/dlp/entries/integration.ts">delete</a>(entryId, { ...params }) -> IntegrationDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/dlp/entries/{entry_id}">client.zeroTrust.dlp.entries.integration.<a href="./src/resources/zero-trust/dlp/entries/integration.ts">get</a>(entryId, { ...params }) -> IntegrationGetResponse</code>

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
- <code title="post /accounts/{account_id}/gateway/audit_ssh_settings/rotate_seed">client.zeroTrust.gateway.auditSSHSettings.<a href="./src/resources/zero-trust/gateway/audit-ssh-settings.ts">rotateSeed</a>({ ...params }) -> GatewaySettings</code>

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

- <code><a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">ActivityLogSettings</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">AntiVirusSettings</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">BlockPageSettings</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">BodyScanningSettings</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">BrowserIsolationSettings</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">CustomCertificateSettings</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">ExtendedEmailMatching</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">FipsSettings</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">GatewayConfigurationSettings</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">NotificationSettings</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">ProtocolDetection</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">TLSSettings</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">ConfigurationUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">ConfigurationEditResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">ConfigurationGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/gateway/configuration">client.zeroTrust.gateway.configurations.<a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">update</a>({ ...params }) -> ConfigurationUpdateResponse</code>
- <code title="patch /accounts/{account_id}/gateway/configuration">client.zeroTrust.gateway.configurations.<a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">edit</a>({ ...params }) -> ConfigurationEditResponse</code>
- <code title="get /accounts/{account_id}/gateway/configuration">client.zeroTrust.gateway.configurations.<a href="./src/resources/zero-trust/gateway/configurations/configurations.ts">get</a>({ ...params }) -> ConfigurationGetResponse</code>

#### CustomCertificate

Methods:

- <code title="get /accounts/{account_id}/gateway/configuration/custom_certificate">client.zeroTrust.gateway.configurations.customCertificate.<a href="./src/resources/zero-trust/gateway/configurations/custom-certificate.ts">get</a>({ ...params }) -> CustomCertificateSettings | null</code>

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

Methods:

- <code title="post /accounts/{account_id}/gateway/proxy_endpoints">client.zeroTrust.gateway.proxyEndpoints.<a href="./src/resources/zero-trust/gateway/proxy-endpoints.ts">create</a>({ ...params }) -> ProxyEndpoint</code>
- <code title="get /accounts/{account_id}/gateway/proxy_endpoints">client.zeroTrust.gateway.proxyEndpoints.<a href="./src/resources/zero-trust/gateway/proxy-endpoints.ts">list</a>({ ...params }) -> ProxyEndpointsSinglePage</code>
- <code title="delete /accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}">client.zeroTrust.gateway.proxyEndpoints.<a href="./src/resources/zero-trust/gateway/proxy-endpoints.ts">delete</a>(proxyEndpointId, { ...params }) -> ProxyEndpointDeleteResponse</code>
- <code title="patch /accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}">client.zeroTrust.gateway.proxyEndpoints.<a href="./src/resources/zero-trust/gateway/proxy-endpoints.ts">edit</a>(proxyEndpointId, { ...params }) -> ProxyEndpoint</code>
- <code title="get /accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}">client.zeroTrust.gateway.proxyEndpoints.<a href="./src/resources/zero-trust/gateway/proxy-endpoints.ts">get</a>(proxyEndpointId, { ...params }) -> ProxyEndpoint</code>

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
- <code title="get /accounts/{account_id}/gateway/rules/tenant">client.zeroTrust.gateway.rules.<a href="./src/resources/zero-trust/gateway/rules.ts">listTenant</a>({ ...params }) -> GatewayRulesSinglePage</code>
- <code title="post /accounts/{account_id}/gateway/rules/{rule_id}/reset_expiration">client.zeroTrust.gateway.rules.<a href="./src/resources/zero-trust/gateway/rules.ts">resetExpiration</a>(ruleId, { ...params }) -> GatewayRule</code>

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

### Pacfiles

Types:

- <code><a href="./src/resources/zero-trust/gateway/pacfiles.ts">PacfileCreateResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/pacfiles.ts">PacfileUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/pacfiles.ts">PacfileListResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/pacfiles.ts">PacfileDeleteResponse</a></code>
- <code><a href="./src/resources/zero-trust/gateway/pacfiles.ts">PacfileGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/gateway/pacfiles">client.zeroTrust.gateway.pacfiles.<a href="./src/resources/zero-trust/gateway/pacfiles.ts">create</a>({ ...params }) -> PacfileCreateResponse</code>
- <code title="put /accounts/{account_id}/gateway/pacfiles/{pacfile_id}">client.zeroTrust.gateway.pacfiles.<a href="./src/resources/zero-trust/gateway/pacfiles.ts">update</a>(pacfileId, { ...params }) -> PacfileUpdateResponse</code>
- <code title="get /accounts/{account_id}/gateway/pacfiles">client.zeroTrust.gateway.pacfiles.<a href="./src/resources/zero-trust/gateway/pacfiles.ts">list</a>({ ...params }) -> PacfileListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/gateway/pacfiles/{pacfile_id}">client.zeroTrust.gateway.pacfiles.<a href="./src/resources/zero-trust/gateway/pacfiles.ts">delete</a>(pacfileId, { ...params }) -> PacfileDeleteResponse</code>
- <code title="get /accounts/{account_id}/gateway/pacfiles/{pacfile_id}">client.zeroTrust.gateway.pacfiles.<a href="./src/resources/zero-trust/gateway/pacfiles.ts">get</a>(pacfileId, { ...params }) -> PacfileGetResponse</code>

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
- <code title="get /accounts/{account_id}/teamnet/routes/{route_id}">client.zeroTrust.networks.routes.<a href="./src/resources/zero-trust/networks/routes/routes.ts">get</a>(routeId, { ...params }) -> Route</code>

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

Methods:

- <code title="post /accounts/{account_id}/teamnet/virtual_networks">client.zeroTrust.networks.virtualNetworks.<a href="./src/resources/zero-trust/networks/virtual-networks.ts">create</a>({ ...params }) -> VirtualNetwork</code>
- <code title="get /accounts/{account_id}/teamnet/virtual_networks">client.zeroTrust.networks.virtualNetworks.<a href="./src/resources/zero-trust/networks/virtual-networks.ts">list</a>({ ...params }) -> VirtualNetworksSinglePage</code>
- <code title="delete /accounts/{account_id}/teamnet/virtual_networks/{virtual_network_id}">client.zeroTrust.networks.virtualNetworks.<a href="./src/resources/zero-trust/networks/virtual-networks.ts">delete</a>(virtualNetworkId, { ...params }) -> VirtualNetwork</code>
- <code title="patch /accounts/{account_id}/teamnet/virtual_networks/{virtual_network_id}">client.zeroTrust.networks.virtualNetworks.<a href="./src/resources/zero-trust/networks/virtual-networks.ts">edit</a>(virtualNetworkId, { ...params }) -> VirtualNetwork</code>
- <code title="get /accounts/{account_id}/teamnet/virtual_networks/{virtual_network_id}">client.zeroTrust.networks.virtualNetworks.<a href="./src/resources/zero-trust/networks/virtual-networks.ts">get</a>(virtualNetworkId, { ...params }) -> VirtualNetwork</code>

### Subnets

Methods:

- <code title="get /accounts/{account_id}/zerotrust/subnets">client.zeroTrust.networks.subnets.<a href="./src/resources/zero-trust/networks/subnets/subnets.ts">list</a>({ ...params }) -> SubnetsV4PagePaginationArray</code>

#### WARP

Types:

- <code><a href="./src/resources/zero-trust/networks/subnets/warp.ts">Subnet</a></code>
- <code><a href="./src/resources/zero-trust/networks/subnets/warp.ts">WARPDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/zerotrust/subnets/warp">client.zeroTrust.networks.subnets.warp.<a href="./src/resources/zero-trust/networks/subnets/warp.ts">create</a>({ ...params }) -> Subnet</code>
- <code title="delete /accounts/{account_id}/zerotrust/subnets/warp/{subnet_id}">client.zeroTrust.networks.subnets.warp.<a href="./src/resources/zero-trust/networks/subnets/warp.ts">delete</a>(subnetId, { ...params }) -> WARPDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/zerotrust/subnets/warp/{subnet_id}">client.zeroTrust.networks.subnets.warp.<a href="./src/resources/zero-trust/networks/subnets/warp.ts">edit</a>(subnetId, { ...params }) -> Subnet</code>
- <code title="get /accounts/{account_id}/zerotrust/subnets/warp/{subnet_id}">client.zeroTrust.networks.subnets.warp.<a href="./src/resources/zero-trust/networks/subnets/warp.ts">get</a>(subnetId, { ...params }) -> Subnet</code>

#### CloudflareSource

Methods:

- <code title="patch /accounts/{account_id}/zerotrust/subnets/cloudflare_source/{address_family}">client.zeroTrust.networks.subnets.cloudflareSource.<a href="./src/resources/zero-trust/networks/subnets/cloudflare-source.ts">update</a>(addressFamily, { ...params }) -> Subnet</code>

### HostnameRoutes

Types:

- <code><a href="./src/resources/zero-trust/networks/hostname-routes.ts">HostnameRoute</a></code>

Methods:

- <code title="post /accounts/{account_id}/zerotrust/routes/hostname">client.zeroTrust.networks.hostnameRoutes.<a href="./src/resources/zero-trust/networks/hostname-routes.ts">create</a>({ ...params }) -> HostnameRoute</code>
- <code title="get /accounts/{account_id}/zerotrust/routes/hostname">client.zeroTrust.networks.hostnameRoutes.<a href="./src/resources/zero-trust/networks/hostname-routes.ts">list</a>({ ...params }) -> HostnameRoutesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/zerotrust/routes/hostname/{hostname_route_id}">client.zeroTrust.networks.hostnameRoutes.<a href="./src/resources/zero-trust/networks/hostname-routes.ts">delete</a>(hostnameRouteId, { ...params }) -> HostnameRoute</code>
- <code title="patch /accounts/{account_id}/zerotrust/routes/hostname/{hostname_route_id}">client.zeroTrust.networks.hostnameRoutes.<a href="./src/resources/zero-trust/networks/hostname-routes.ts">edit</a>(hostnameRouteId, { ...params }) -> HostnameRoute</code>
- <code title="get /accounts/{account_id}/zerotrust/routes/hostname/{hostname_route_id}">client.zeroTrust.networks.hostnameRoutes.<a href="./src/resources/zero-trust/networks/hostname-routes.ts">get</a>(hostnameRouteId, { ...params }) -> HostnameRoute</code>

## RiskScoring

Types:

- <code><a href="./src/resources/zero-trust/risk-scoring/risk-scoring.ts">RiskScoringGetResponse</a></code>
- <code><a href="./src/resources/zero-trust/risk-scoring/risk-scoring.ts">RiskScoringResetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/zt_risk_scoring/{user_id}">client.zeroTrust.riskScoring.<a href="./src/resources/zero-trust/risk-scoring/risk-scoring.ts">get</a>(userId, { ...params }) -> RiskScoringGetResponse</code>
- <code title="post /accounts/{account_id}/zt_risk_scoring/{user_id}/reset">client.zeroTrust.riskScoring.<a href="./src/resources/zero-trust/risk-scoring/risk-scoring.ts">reset</a>(userId, { ...params }) -> RiskScoringResetResponse | null</code>

### Behaviours

Types:

- <code><a href="./src/resources/zero-trust/risk-scoring/behaviours.ts">BehaviourUpdateResponse</a></code>
- <code><a href="./src/resources/zero-trust/risk-scoring/behaviours.ts">BehaviourGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/zt_risk_scoring/behaviors">client.zeroTrust.riskScoring.behaviours.<a href="./src/resources/zero-trust/risk-scoring/behaviours.ts">update</a>({ ...params }) -> BehaviourUpdateResponse</code>
- <code title="get /accounts/{account_id}/zt_risk_scoring/behaviors">client.zeroTrust.riskScoring.behaviours.<a href="./src/resources/zero-trust/risk-scoring/behaviours.ts">get</a>({ ...params }) -> BehaviourGetResponse</code>

### Summary

Types:

- <code><a href="./src/resources/zero-trust/risk-scoring/summary.ts">SummaryGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/zt_risk_scoring/summary">client.zeroTrust.riskScoring.summary.<a href="./src/resources/zero-trust/risk-scoring/summary.ts">get</a>({ ...params }) -> SummaryGetResponse</code>

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
- <code title="delete /accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}">client.zeroTrust.riskScoring.integrations.<a href="./src/resources/zero-trust/risk-scoring/integrations/integrations.ts">delete</a>(integrationId, { ...params }) -> IntegrationDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}">client.zeroTrust.riskScoring.integrations.<a href="./src/resources/zero-trust/risk-scoring/integrations/integrations.ts">get</a>(integrationId, { ...params }) -> IntegrationGetResponse</code>

#### References

Types:

- <code><a href="./src/resources/zero-trust/risk-scoring/integrations/references.ts">ReferenceGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/zt_risk_scoring/integrations/reference_id/{reference_id}">client.zeroTrust.riskScoring.integrations.references.<a href="./src/resources/zero-trust/risk-scoring/integrations/references.ts">get</a>(referenceId, { ...params }) -> ReferenceGetResponse</code>

## ResourceLibrary

### Applications

Types:

- <code><a href="./src/resources/zero-trust/resource-library/applications.ts">ApplicationListResponse</a></code>
- <code><a href="./src/resources/zero-trust/resource-library/applications.ts">ApplicationGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/resource-library/applications">client.zeroTrust.resourceLibrary.applications.<a href="./src/resources/zero-trust/resource-library/applications.ts">list</a>({ ...params }) -> ApplicationListResponsesSinglePage</code>
- <code title="get /accounts/{account_id}/resource-library/applications/{id}">client.zeroTrust.resourceLibrary.applications.<a href="./src/resources/zero-trust/resource-library/applications.ts">get</a>(id, { ...params }) -> ApplicationGetResponse</code>

### Categories

Types:

- <code><a href="./src/resources/zero-trust/resource-library/categories.ts">CategoryListResponse</a></code>
- <code><a href="./src/resources/zero-trust/resource-library/categories.ts">CategoryGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/resource-library/categories">client.zeroTrust.resourceLibrary.categories.<a href="./src/resources/zero-trust/resource-library/categories.ts">list</a>({ ...params }) -> CategoryListResponsesSinglePage</code>
- <code title="get /accounts/{account_id}/resource-library/categories/{id}">client.zeroTrust.resourceLibrary.categories.<a href="./src/resources/zero-trust/resource-library/categories.ts">get</a>(id, { ...params }) -> CategoryGetResponse</code>
