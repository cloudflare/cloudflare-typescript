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
- <code title="delete /accounts/{account_id}/addressing/address_maps/{address_map_id}">client.addressing.addressMaps.<a href="./src/resources/addressing/address-maps/address-maps.ts">delete</a>(addressMapId, { ...params }) -> AddressMapDeleteResponse</code>
- <code title="patch /accounts/{account_id}/addressing/address_maps/{address_map_id}">client.addressing.addressMaps.<a href="./src/resources/addressing/address-maps/address-maps.ts">edit</a>(addressMapId, { ...params }) -> AddressMap</code>
- <code title="get /accounts/{account_id}/addressing/address_maps/{address_map_id}">client.addressing.addressMaps.<a href="./src/resources/addressing/address-maps/address-maps.ts">get</a>(addressMapId, { ...params }) -> AddressMapGetResponse</code>

### Accounts

Types:

- <code><a href="./src/resources/addressing/address-maps/accounts.ts">AccountUpdateResponse</a></code>
- <code><a href="./src/resources/addressing/address-maps/accounts.ts">AccountDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/addressing/address_maps/{address_map_id}/accounts/{account_id}">client.addressing.addressMaps.accounts.<a href="./src/resources/addressing/address-maps/accounts.ts">update</a>(addressMapId, { ...params }) -> AccountUpdateResponse</code>
- <code title="delete /accounts/{account_id}/addressing/address_maps/{address_map_id}/accounts/{account_id}">client.addressing.addressMaps.accounts.<a href="./src/resources/addressing/address-maps/accounts.ts">delete</a>(addressMapId, { ...params }) -> AccountDeleteResponse</code>

### IPs

Types:

- <code><a href="./src/resources/addressing/address-maps/ips.ts">IPUpdateResponse</a></code>
- <code><a href="./src/resources/addressing/address-maps/ips.ts">IPDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/addressing/address_maps/{address_map_id}/ips/{ip_address}">client.addressing.addressMaps.ips.<a href="./src/resources/addressing/address-maps/ips.ts">update</a>(addressMapId, ipAddress, { ...params }) -> IPUpdateResponse</code>
- <code title="delete /accounts/{account_id}/addressing/address_maps/{address_map_id}/ips/{ip_address}">client.addressing.addressMaps.ips.<a href="./src/resources/addressing/address-maps/ips.ts">delete</a>(addressMapId, ipAddress, { ...params }) -> IPDeleteResponse</code>

### Zones

Types:

- <code><a href="./src/resources/addressing/address-maps/zones.ts">ZoneUpdateResponse</a></code>
- <code><a href="./src/resources/addressing/address-maps/zones.ts">ZoneDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/addressing/address_maps/{address_map_id}/zones/{zone_id}">client.addressing.addressMaps.zones.<a href="./src/resources/addressing/address-maps/zones.ts">update</a>(addressMapId, { ...params }) -> ZoneUpdateResponse</code>
- <code title="delete /accounts/{account_id}/addressing/address_maps/{address_map_id}/zones/{zone_id}">client.addressing.addressMaps.zones.<a href="./src/resources/addressing/address-maps/zones.ts">delete</a>(addressMapId, { ...params }) -> ZoneDeleteResponse</code>

## LOADocuments

Types:

- <code><a href="./src/resources/addressing/loa-documents.ts">LOADocumentCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/addressing/loa_documents">client.addressing.loaDocuments.<a href="./src/resources/addressing/loa-documents.ts">create</a>({ ...params }) -> LOADocumentCreateResponse</code>
- <code title="get /accounts/{account_id}/addressing/loa_documents/{loa_document_id}/download">client.addressing.loaDocuments.<a href="./src/resources/addressing/loa-documents.ts">get</a>(loaDocumentId, { ...params }) -> Response</code>

## Prefixes

Types:

- <code><a href="./src/resources/addressing/prefixes/prefixes.ts">Prefix</a></code>
- <code><a href="./src/resources/addressing/prefixes/prefixes.ts">PrefixDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/addressing/prefixes">client.addressing.prefixes.<a href="./src/resources/addressing/prefixes/prefixes.ts">create</a>({ ...params }) -> Prefix</code>
- <code title="get /accounts/{account_id}/addressing/prefixes">client.addressing.prefixes.<a href="./src/resources/addressing/prefixes/prefixes.ts">list</a>({ ...params }) -> PrefixesSinglePage</code>
- <code title="delete /accounts/{account_id}/addressing/prefixes/{prefix_id}">client.addressing.prefixes.<a href="./src/resources/addressing/prefixes/prefixes.ts">delete</a>(prefixId, { ...params }) -> PrefixDeleteResponse</code>
- <code title="patch /accounts/{account_id}/addressing/prefixes/{prefix_id}">client.addressing.prefixes.<a href="./src/resources/addressing/prefixes/prefixes.ts">edit</a>(prefixId, { ...params }) -> Prefix</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}">client.addressing.prefixes.<a href="./src/resources/addressing/prefixes/prefixes.ts">get</a>(prefixId, { ...params }) -> Prefix</code>

### ServiceBindings

Types:

- <code><a href="./src/resources/addressing/prefixes/service-bindings.ts">ServiceBinding</a></code>
- <code><a href="./src/resources/addressing/prefixes/service-bindings.ts">ServiceBindingDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings">client.addressing.prefixes.serviceBindings.<a href="./src/resources/addressing/prefixes/service-bindings.ts">create</a>(prefixId, { ...params }) -> ServiceBinding</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings">client.addressing.prefixes.serviceBindings.<a href="./src/resources/addressing/prefixes/service-bindings.ts">list</a>(prefixId, { ...params }) -> ServiceBindingsSinglePage</code>
- <code title="delete /accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings/{binding_id}">client.addressing.prefixes.serviceBindings.<a href="./src/resources/addressing/prefixes/service-bindings.ts">delete</a>(prefixId, bindingId, { ...params }) -> ServiceBindingDeleteResponse</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings/{binding_id}">client.addressing.prefixes.serviceBindings.<a href="./src/resources/addressing/prefixes/service-bindings.ts">get</a>(prefixId, bindingId, { ...params }) -> ServiceBinding</code>

### BGPPrefixes

Types:

- <code><a href="./src/resources/addressing/prefixes/bgp-prefixes.ts">BGPPrefix</a></code>

Methods:

- <code title="post /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes">client.addressing.prefixes.bgpPrefixes.<a href="./src/resources/addressing/prefixes/bgp-prefixes.ts">create</a>(prefixId, { ...params }) -> BGPPrefix</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes">client.addressing.prefixes.bgpPrefixes.<a href="./src/resources/addressing/prefixes/bgp-prefixes.ts">list</a>(prefixId, { ...params }) -> BGPPrefixesSinglePage</code>
- <code title="patch /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes/{bgp_prefix_id}">client.addressing.prefixes.bgpPrefixes.<a href="./src/resources/addressing/prefixes/bgp-prefixes.ts">edit</a>(prefixId, bgpPrefixId, { ...params }) -> BGPPrefix</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes/{bgp_prefix_id}">client.addressing.prefixes.bgpPrefixes.<a href="./src/resources/addressing/prefixes/bgp-prefixes.ts">get</a>(prefixId, bgpPrefixId, { ...params }) -> BGPPrefix</code>

### AdvertisementStatus

Types:

- <code><a href="./src/resources/addressing/prefixes/advertisement-status.ts">AdvertisementStatusEditResponse</a></code>
- <code><a href="./src/resources/addressing/prefixes/advertisement-status.ts">AdvertisementStatusGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/status">client.addressing.prefixes.advertisementStatus.<a href="./src/resources/addressing/prefixes/advertisement-status.ts">edit</a>(prefixId, { ...params }) -> AdvertisementStatusEditResponse</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/status">client.addressing.prefixes.advertisementStatus.<a href="./src/resources/addressing/prefixes/advertisement-status.ts">get</a>(prefixId, { ...params }) -> AdvertisementStatusGetResponse</code>

### Delegations

Types:

- <code><a href="./src/resources/addressing/prefixes/delegations.ts">Delegations</a></code>
- <code><a href="./src/resources/addressing/prefixes/delegations.ts">DelegationDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/addressing/prefixes/{prefix_id}/delegations">client.addressing.prefixes.delegations.<a href="./src/resources/addressing/prefixes/delegations.ts">create</a>(prefixId, { ...params }) -> Delegations</code>
- <code title="get /accounts/{account_id}/addressing/prefixes/{prefix_id}/delegations">client.addressing.prefixes.delegations.<a href="./src/resources/addressing/prefixes/delegations.ts">list</a>(prefixId, { ...params }) -> DelegationsSinglePage</code>
- <code title="delete /accounts/{account_id}/addressing/prefixes/{prefix_id}/delegations/{delegation_id}">client.addressing.prefixes.delegations.<a href="./src/resources/addressing/prefixes/delegations.ts">delete</a>(prefixId, delegationId, { ...params }) -> DelegationDeleteResponse</code>
