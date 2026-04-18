# OriginTLSClientAuth

Types:

- <code><a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">ZoneAuthenticatedOriginPull</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">OriginTLSClientAuthCreateResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">OriginTLSClientAuthListResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">OriginTLSClientAuthDeleteResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">OriginTLSClientAuthGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/origin_tls_client_auth">client.originTLSClientAuth.<a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">create</a>({ ...params }) -> OriginTLSClientAuthCreateResponse</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth">client.originTLSClientAuth.<a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">list</a>({ ...params }) -> OriginTLSClientAuthListResponsesSinglePage</code>
- <code title="delete /zones/{zone_id}/origin_tls_client_auth/{certificate_id}">client.originTLSClientAuth.<a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">delete</a>(certificateId, { ...params }) -> OriginTLSClientAuthDeleteResponse</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/{certificate_id}">client.originTLSClientAuth.<a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">get</a>(certificateId, { ...params }) -> OriginTLSClientAuthGetResponse</code>

## Hostnames

Types:

- <code><a href="./src/resources/origin-tls-client-auth/hostnames/hostnames.ts">AuthenticatedOriginPull</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/hostnames/hostnames.ts">HostnameUpdateResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/origin_tls_client_auth/hostnames">client.originTLSClientAuth.hostnames.<a href="./src/resources/origin-tls-client-auth/hostnames/hostnames.ts">update</a>({ ...params }) -> HostnameUpdateResponsesSinglePage</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/hostnames/{hostname}">client.originTLSClientAuth.hostnames.<a href="./src/resources/origin-tls-client-auth/hostnames/hostnames.ts">get</a>(hostname, { ...params }) -> AuthenticatedOriginPull</code>

### Certificates

Types:

- <code><a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">Certificate</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">CertificateCreateResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">CertificateListResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">CertificateDeleteResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">CertificateGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates">client.originTLSClientAuth.hostnames.certificates.<a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">create</a>({ ...params }) -> CertificateCreateResponse</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates">client.originTLSClientAuth.hostnames.certificates.<a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">list</a>({ ...params }) -> CertificateListResponsesSinglePage</code>
- <code title="delete /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates/{certificate_id}">client.originTLSClientAuth.hostnames.certificates.<a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">delete</a>(certificateId, { ...params }) -> CertificateDeleteResponse</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates/{certificate_id}">client.originTLSClientAuth.hostnames.certificates.<a href="./src/resources/origin-tls-client-auth/hostnames/certificates.ts">get</a>(certificateId, { ...params }) -> CertificateGetResponse</code>

## Settings

Types:

- <code><a href="./src/resources/origin-tls-client-auth/settings.ts">SettingUpdateResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/origin_tls_client_auth/settings">client.originTLSClientAuth.settings.<a href="./src/resources/origin-tls-client-auth/settings.ts">update</a>({ ...params }) -> SettingUpdateResponse</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/settings">client.originTLSClientAuth.settings.<a href="./src/resources/origin-tls-client-auth/settings.ts">get</a>({ ...params }) -> SettingGetResponse</code>
