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

Methods:

- <code title="get /accounts/{account_id}/mtls_certificates/{mtls_certificate_id}/associations">client.mtlsCertificates.associations.<a href="./src/resources/mtls-certificates/associations.ts">get</a>(mtlsCertificateId, { ...params }) -> CertificateAsssociationsSinglePage</code>
