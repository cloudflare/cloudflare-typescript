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

## CertificatePack

### Certificates

Types:

- <code><a href="./src/resources/custom-hostnames/certificate-pack/certificates.ts">CertificateUpdateResponse</a></code>
- <code><a href="./src/resources/custom-hostnames/certificate-pack/certificates.ts">CertificateDeleteResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/custom_hostnames/{custom_hostname_id}/certificate_pack/{certificate_pack_id}/certificates/{certificate_id}">client.customHostnames.certificatePack.certificates.<a href="./src/resources/custom-hostnames/certificate-pack/certificates.ts">update</a>(customHostnameId, certificatePackId, certificateId, { ...params }) -> CertificateUpdateResponse</code>
- <code title="delete /zones/{zone_id}/custom_hostnames/{custom_hostname_id}/certificate_pack/{certificate_pack_id}/certificates/{certificate_id}">client.customHostnames.certificatePack.certificates.<a href="./src/resources/custom-hostnames/certificate-pack/certificates.ts">delete</a>(customHostnameId, certificatePackId, certificateId, { ...params }) -> CertificateDeleteResponse</code>
