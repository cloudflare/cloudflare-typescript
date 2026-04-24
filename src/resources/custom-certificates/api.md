# CustomCertificates

Types:

- <code><a href="./src/resources/custom-certificates/custom-certificates.ts">CustomCertificate</a></code>
- <code><a href="./src/resources/custom-certificates/custom-certificates.ts">GeoRestrictions</a></code>
- <code><a href="./src/resources/custom-certificates/custom-certificates.ts">Status</a></code>
- <code><a href="./src/resources/custom-certificates/custom-certificates.ts">CustomCertificateDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/custom_certificates">client.customCertificates.<a href="./src/resources/custom-certificates/custom-certificates.ts">create</a>({ ...params }) -> CustomCertificate</code>
- <code title="get /zones/{zone_id}/custom_certificates">client.customCertificates.<a href="./src/resources/custom-certificates/custom-certificates.ts">list</a>({ ...params }) -> CustomCertificatesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/custom_certificates/{custom_certificate_id}">client.customCertificates.<a href="./src/resources/custom-certificates/custom-certificates.ts">delete</a>(customCertificateId, { ...params }) -> CustomCertificateDeleteResponse</code>
- <code title="patch /zones/{zone_id}/custom_certificates/{custom_certificate_id}">client.customCertificates.<a href="./src/resources/custom-certificates/custom-certificates.ts">edit</a>(customCertificateId, { ...params }) -> CustomCertificate</code>
- <code title="get /zones/{zone_id}/custom_certificates/{custom_certificate_id}">client.customCertificates.<a href="./src/resources/custom-certificates/custom-certificates.ts">get</a>(customCertificateId, { ...params }) -> CustomCertificate</code>

## Prioritize

Methods:

- <code title="put /zones/{zone_id}/custom_certificates/prioritize">client.customCertificates.prioritize.<a href="./src/resources/custom-certificates/prioritize.ts">update</a>({ ...params }) -> CustomCertificatesSinglePage</code>
