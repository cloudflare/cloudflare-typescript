# ACM

## TotalTLS

Types:

- <code><a href="./src/resources/acm/total-tls.ts">CertificateAuthority</a></code>
- <code><a href="./src/resources/acm/total-tls.ts">TotalTLSUpdateResponse</a></code>
- <code><a href="./src/resources/acm/total-tls.ts">TotalTLSEditResponse</a></code>
- <code><a href="./src/resources/acm/total-tls.ts">TotalTLSGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/acm/total_tls">client.acm.totalTLS.<a href="./src/resources/acm/total-tls.ts">update</a>({ ...params }) -> TotalTLSUpdateResponse</code>
- <code title="post /zones/{zone_id}/acm/total_tls">client.acm.totalTLS.<a href="./src/resources/acm/total-tls.ts">edit</a>({ ...params }) -> TotalTLSEditResponse</code>
- <code title="get /zones/{zone_id}/acm/total_tls">client.acm.totalTLS.<a href="./src/resources/acm/total-tls.ts">get</a>({ ...params }) -> TotalTLSGetResponse</code>

## CustomTrustStore

Types:

- <code><a href="./src/resources/acm/custom-trust-store.ts">CustomTrustStore</a></code>
- <code><a href="./src/resources/acm/custom-trust-store.ts">CustomTrustStoreDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/acm/custom_trust_store">client.acm.customTrustStore.<a href="./src/resources/acm/custom-trust-store.ts">create</a>({ ...params }) -> CustomTrustStore</code>
- <code title="get /zones/{zone_id}/acm/custom_trust_store">client.acm.customTrustStore.<a href="./src/resources/acm/custom-trust-store.ts">list</a>({ ...params }) -> CustomTrustStoresV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/acm/custom_trust_store/{custom_origin_trust_store_id}">client.acm.customTrustStore.<a href="./src/resources/acm/custom-trust-store.ts">delete</a>(customOriginTrustStoreId, { ...params }) -> CustomTrustStoreDeleteResponse</code>
- <code title="get /zones/{zone_id}/acm/custom_trust_store/{custom_origin_trust_store_id}">client.acm.customTrustStore.<a href="./src/resources/acm/custom-trust-store.ts">get</a>(customOriginTrustStoreId, { ...params }) -> CustomTrustStore</code>
