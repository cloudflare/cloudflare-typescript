# MagicCloudNetworking

## CatalogSyncs

Types:

- <code><a href="./src/resources/magic-cloud-networking/catalog-syncs/catalog-syncs.ts">CatalogSyncCreateResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/catalog-syncs/catalog-syncs.ts">CatalogSyncUpdateResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/catalog-syncs/catalog-syncs.ts">CatalogSyncListResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/catalog-syncs/catalog-syncs.ts">CatalogSyncDeleteResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/catalog-syncs/catalog-syncs.ts">CatalogSyncEditResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/catalog-syncs/catalog-syncs.ts">CatalogSyncGetResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/catalog-syncs/catalog-syncs.ts">CatalogSyncRefreshResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/cloud/catalog-syncs">client.magicCloudNetworking.catalogSyncs.<a href="./src/resources/magic-cloud-networking/catalog-syncs/catalog-syncs.ts">create</a>({ ...params }) -> CatalogSyncCreateResponse</code>
- <code title="put /accounts/{account_id}/magic/cloud/catalog-syncs/{sync_id}">client.magicCloudNetworking.catalogSyncs.<a href="./src/resources/magic-cloud-networking/catalog-syncs/catalog-syncs.ts">update</a>(syncId, { ...params }) -> CatalogSyncUpdateResponse</code>
- <code title="get /accounts/{account_id}/magic/cloud/catalog-syncs">client.magicCloudNetworking.catalogSyncs.<a href="./src/resources/magic-cloud-networking/catalog-syncs/catalog-syncs.ts">list</a>({ ...params }) -> CatalogSyncListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/magic/cloud/catalog-syncs/{sync_id}">client.magicCloudNetworking.catalogSyncs.<a href="./src/resources/magic-cloud-networking/catalog-syncs/catalog-syncs.ts">delete</a>(syncId, { ...params }) -> CatalogSyncDeleteResponse</code>
- <code title="patch /accounts/{account_id}/magic/cloud/catalog-syncs/{sync_id}">client.magicCloudNetworking.catalogSyncs.<a href="./src/resources/magic-cloud-networking/catalog-syncs/catalog-syncs.ts">edit</a>(syncId, { ...params }) -> CatalogSyncEditResponse</code>
- <code title="get /accounts/{account_id}/magic/cloud/catalog-syncs/{sync_id}">client.magicCloudNetworking.catalogSyncs.<a href="./src/resources/magic-cloud-networking/catalog-syncs/catalog-syncs.ts">get</a>(syncId, { ...params }) -> CatalogSyncGetResponse</code>
- <code title="post /accounts/{account_id}/magic/cloud/catalog-syncs/{sync_id}/refresh">client.magicCloudNetworking.catalogSyncs.<a href="./src/resources/magic-cloud-networking/catalog-syncs/catalog-syncs.ts">refresh</a>(syncId, { ...params }) -> CatalogSyncRefreshResponse</code>

### PrebuiltPolicies

Types:

- <code><a href="./src/resources/magic-cloud-networking/catalog-syncs/prebuilt-policies.ts">PrebuiltPolicyListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/magic/cloud/catalog-syncs/prebuilt-policies">client.magicCloudNetworking.catalogSyncs.prebuiltPolicies.<a href="./src/resources/magic-cloud-networking/catalog-syncs/prebuilt-policies.ts">list</a>({ ...params }) -> PrebuiltPolicyListResponsesSinglePage</code>

## OnRamps

Types:

- <code><a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">OnRampCreateResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">OnRampUpdateResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">OnRampListResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">OnRampDeleteResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">OnRampApplyResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">OnRampEditResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">OnRampGetResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">OnRampPlanResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/cloud/onramps">client.magicCloudNetworking.onRamps.<a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">create</a>({ ...params }) -> OnRampCreateResponse</code>
- <code title="put /accounts/{account_id}/magic/cloud/onramps/{onramp_id}">client.magicCloudNetworking.onRamps.<a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">update</a>(onrampId, { ...params }) -> OnRampUpdateResponse</code>
- <code title="get /accounts/{account_id}/magic/cloud/onramps">client.magicCloudNetworking.onRamps.<a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">list</a>({ ...params }) -> OnRampListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/magic/cloud/onramps/{onramp_id}">client.magicCloudNetworking.onRamps.<a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">delete</a>(onrampId, { ...params }) -> OnRampDeleteResponse</code>
- <code title="post /accounts/{account_id}/magic/cloud/onramps/{onramp_id}/apply">client.magicCloudNetworking.onRamps.<a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">apply</a>(onrampId, { ...params }) -> OnRampApplyResponse</code>
- <code title="patch /accounts/{account_id}/magic/cloud/onramps/{onramp_id}">client.magicCloudNetworking.onRamps.<a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">edit</a>(onrampId, { ...params }) -> OnRampEditResponse</code>
- <code title="post /accounts/{account_id}/magic/cloud/onramps/{onramp_id}/export">client.magicCloudNetworking.onRamps.<a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">export</a>(onrampId, { ...params }) -> Response</code>
- <code title="get /accounts/{account_id}/magic/cloud/onramps/{onramp_id}">client.magicCloudNetworking.onRamps.<a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">get</a>(onrampId, { ...params }) -> OnRampGetResponse</code>
- <code title="post /accounts/{account_id}/magic/cloud/onramps/{onramp_id}/plan">client.magicCloudNetworking.onRamps.<a href="./src/resources/magic-cloud-networking/on-ramps/on-ramps.ts">plan</a>(onrampId, { ...params }) -> OnRampPlanResponse</code>

### AddressSpaces

Types:

- <code><a href="./src/resources/magic-cloud-networking/on-ramps/address-spaces.ts">AddressSpaceUpdateResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/on-ramps/address-spaces.ts">AddressSpaceListResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/on-ramps/address-spaces.ts">AddressSpaceEditResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/magic/cloud/onramps/magic_wan_address_space">client.magicCloudNetworking.onRamps.addressSpaces.<a href="./src/resources/magic-cloud-networking/on-ramps/address-spaces.ts">update</a>({ ...params }) -> AddressSpaceUpdateResponse</code>
- <code title="get /accounts/{account_id}/magic/cloud/onramps/magic_wan_address_space">client.magicCloudNetworking.onRamps.addressSpaces.<a href="./src/resources/magic-cloud-networking/on-ramps/address-spaces.ts">list</a>({ ...params }) -> AddressSpaceListResponse</code>
- <code title="patch /accounts/{account_id}/magic/cloud/onramps/magic_wan_address_space">client.magicCloudNetworking.onRamps.addressSpaces.<a href="./src/resources/magic-cloud-networking/on-ramps/address-spaces.ts">edit</a>({ ...params }) -> AddressSpaceEditResponse</code>

## CloudIntegrations

Types:

- <code><a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">CloudIntegrationCreateResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">CloudIntegrationUpdateResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">CloudIntegrationListResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">CloudIntegrationDeleteResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">CloudIntegrationDiscoverResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">CloudIntegrationDiscoverAllResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">CloudIntegrationEditResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">CloudIntegrationGetResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">CloudIntegrationInitialSetupResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/cloud/providers">client.magicCloudNetworking.cloudIntegrations.<a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">create</a>({ ...params }) -> CloudIntegrationCreateResponse</code>
- <code title="put /accounts/{account_id}/magic/cloud/providers/{provider_id}">client.magicCloudNetworking.cloudIntegrations.<a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">update</a>(providerId, { ...params }) -> CloudIntegrationUpdateResponse</code>
- <code title="get /accounts/{account_id}/magic/cloud/providers">client.magicCloudNetworking.cloudIntegrations.<a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">list</a>({ ...params }) -> CloudIntegrationListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/magic/cloud/providers/{provider_id}">client.magicCloudNetworking.cloudIntegrations.<a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">delete</a>(providerId, { ...params }) -> CloudIntegrationDeleteResponse</code>
- <code title="post /accounts/{account_id}/magic/cloud/providers/{provider_id}/discover">client.magicCloudNetworking.cloudIntegrations.<a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">discover</a>(providerId, { ...params }) -> CloudIntegrationDiscoverResponse</code>
- <code title="post /accounts/{account_id}/magic/cloud/providers/discover">client.magicCloudNetworking.cloudIntegrations.<a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">discoverAll</a>({ ...params }) -> CloudIntegrationDiscoverAllResponse</code>
- <code title="patch /accounts/{account_id}/magic/cloud/providers/{provider_id}">client.magicCloudNetworking.cloudIntegrations.<a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">edit</a>(providerId, { ...params }) -> CloudIntegrationEditResponse</code>
- <code title="get /accounts/{account_id}/magic/cloud/providers/{provider_id}">client.magicCloudNetworking.cloudIntegrations.<a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">get</a>(providerId, { ...params }) -> CloudIntegrationGetResponse</code>
- <code title="get /accounts/{account_id}/magic/cloud/providers/{provider_id}/initial_setup">client.magicCloudNetworking.cloudIntegrations.<a href="./src/resources/magic-cloud-networking/cloud-integrations.ts">initialSetup</a>(providerId, { ...params }) -> CloudIntegrationInitialSetupResponse</code>

## Resources

Types:

- <code><a href="./src/resources/magic-cloud-networking/resources.ts">ResourceListResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/resources.ts">ResourceGetResponse</a></code>
- <code><a href="./src/resources/magic-cloud-networking/resources.ts">ResourcePolicyPreviewResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/magic/cloud/resources">client.magicCloudNetworking.resources.<a href="./src/resources/magic-cloud-networking/resources.ts">list</a>({ ...params }) -> ResourceListResponsesV4PagePaginationArray</code>
- <code title="get /accounts/{account_id}/magic/cloud/resources/export">client.magicCloudNetworking.resources.<a href="./src/resources/magic-cloud-networking/resources.ts">export</a>({ ...params }) -> Response</code>
- <code title="get /accounts/{account_id}/magic/cloud/resources/{resource_id}">client.magicCloudNetworking.resources.<a href="./src/resources/magic-cloud-networking/resources.ts">get</a>(resourceId, { ...params }) -> ResourceGetResponse</code>
- <code title="post /accounts/{account_id}/magic/cloud/resources/policy-preview">client.magicCloudNetworking.resources.<a href="./src/resources/magic-cloud-networking/resources.ts">policyPreview</a>({ ...params }) -> ResourcePolicyPreviewResponse</code>
