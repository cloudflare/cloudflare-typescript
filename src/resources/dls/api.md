# DLS

## Regions

Types:

- <code><a href="./src/resources/dls/regions.ts">RegionListResponse</a></code>
- <code><a href="./src/resources/dls/regions.ts">RegionGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/dls/regions">client.dls.regions.<a href="./src/resources/dls/regions.ts">list</a>({ ...params }) -> RegionListResponsesCursorPagination</code>
- <code title="get /accounts/{account_id}/dls/regions/{region_id}">client.dls.regions.<a href="./src/resources/dls/regions.ts">get</a>(regionId, { ...params }) -> RegionGetResponse</code>

## RegionalServices

### PrefixBindings

Types:

- <code><a href="./src/resources/dls/regional-services/prefix-bindings.ts">PrefixBindingCreateResponse</a></code>
- <code><a href="./src/resources/dls/regional-services/prefix-bindings.ts">PrefixBindingListResponse</a></code>
- <code><a href="./src/resources/dls/regional-services/prefix-bindings.ts">PrefixBindingDeleteResponse</a></code>
- <code><a href="./src/resources/dls/regional-services/prefix-bindings.ts">PrefixBindingEditResponse</a></code>
- <code><a href="./src/resources/dls/regional-services/prefix-bindings.ts">PrefixBindingGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/dls/regional_services/prefix_bindings">client.dls.regionalServices.prefixBindings.<a href="./src/resources/dls/regional-services/prefix-bindings.ts">create</a>({ ...params }) -> PrefixBindingCreateResponse</code>
- <code title="get /accounts/{account_id}/dls/regional_services/prefix_bindings">client.dls.regionalServices.prefixBindings.<a href="./src/resources/dls/regional-services/prefix-bindings.ts">list</a>({ ...params }) -> PrefixBindingListResponsesCursorPagination</code>
- <code title="delete /accounts/{account_id}/dls/regional_services/prefix_bindings/{binding_id}">client.dls.regionalServices.prefixBindings.<a href="./src/resources/dls/regional-services/prefix-bindings.ts">delete</a>(bindingId, { ...params }) -> PrefixBindingDeleteResponse</code>
- <code title="patch /accounts/{account_id}/dls/regional_services/prefix_bindings/{binding_id}">client.dls.regionalServices.prefixBindings.<a href="./src/resources/dls/regional-services/prefix-bindings.ts">edit</a>(bindingId, { ...params }) -> PrefixBindingEditResponse</code>
- <code title="get /accounts/{account_id}/dls/regional_services/prefix_bindings/{binding_id}">client.dls.regionalServices.prefixBindings.<a href="./src/resources/dls/regional-services/prefix-bindings.ts">get</a>(bindingId, { ...params }) -> PrefixBindingGetResponse</code>
