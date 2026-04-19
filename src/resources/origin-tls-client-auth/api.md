# OriginTLSClientAuth

Types:

- <code><a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">OriginTLSClientAuthCreateResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">OriginTLSClientAuthListResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">OriginTLSClientAuthDeleteResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">OriginTLSClientAuthGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/origin_tls_client_auth">client.originTLSClientAuth.<a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">create</a>({ ...params }) -> OriginTLSClientAuthCreateResponse</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth">client.originTLSClientAuth.<a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">list</a>({ ...params }) -> OriginTLSClientAuthListResponsesSinglePage</code>
- <code title="delete /zones/{zone_id}/origin_tls_client_auth/{certificate_id}">client.originTLSClientAuth.<a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">delete</a>(certificateId, { ...params }) -> OriginTLSClientAuthDeleteResponse</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/{certificate_id}">client.originTLSClientAuth.<a href="./src/resources/origin-tls-client-auth/origin-tls-client-auth.ts">get</a>(certificateId, { ...params }) -> OriginTLSClientAuthGetResponse</code>

## ZoneCertificates

Types:

- <code><a href="./src/resources/origin-tls-client-auth/zone-certificates.ts">ZoneAuthenticatedOriginPull</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/zone-certificates.ts">ZoneCertificateCreateResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/zone-certificates.ts">ZoneCertificateListResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/zone-certificates.ts">ZoneCertificateDeleteResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/zone-certificates.ts">ZoneCertificateGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/origin_tls_client_auth">client.originTLSClientAuth.zoneCertificates.<a href="./src/resources/origin-tls-client-auth/zone-certificates.ts">create</a>({ ...params }) -> ZoneCertificateCreateResponse</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth">client.originTLSClientAuth.zoneCertificates.<a href="./src/resources/origin-tls-client-auth/zone-certificates.ts">list</a>({ ...params }) -> ZoneCertificateListResponsesSinglePage</code>
- <code title="delete /zones/{zone_id}/origin_tls_client_auth/{certificate_id}">client.originTLSClientAuth.zoneCertificates.<a href="./src/resources/origin-tls-client-auth/zone-certificates.ts">delete</a>(certificateId, { ...params }) -> ZoneCertificateDeleteResponse</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/{certificate_id}">client.originTLSClientAuth.zoneCertificates.<a href="./src/resources/origin-tls-client-auth/zone-certificates.ts">get</a>(certificateId, { ...params }) -> ZoneCertificateGetResponse</code>

## Hostnames

Types:

- <code><a href="./src/resources/origin-tls-client-auth/hostnames.ts">AuthenticatedOriginPull</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/hostnames.ts">HostnameUpdateResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/origin_tls_client_auth/hostnames">client.originTLSClientAuth.hostnames.<a href="./src/resources/origin-tls-client-auth/hostnames.ts">update</a>({ ...params }) -> HostnameUpdateResponsesSinglePage</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/hostnames/{hostname}">client.originTLSClientAuth.hostnames.<a href="./src/resources/origin-tls-client-auth/hostnames.ts">get</a>(hostname, { ...params }) -> AuthenticatedOriginPull</code>

## HostnameCertificates

Types:

- <code><a href="./src/resources/origin-tls-client-auth/hostname-certificates.ts">Certificate</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/hostname-certificates.ts">HostnameCertificateCreateResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/hostname-certificates.ts">HostnameCertificateListResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/hostname-certificates.ts">HostnameCertificateDeleteResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/hostname-certificates.ts">HostnameCertificateGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates">client.originTLSClientAuth.hostnameCertificates.<a href="./src/resources/origin-tls-client-auth/hostname-certificates.ts">create</a>({ ...params }) -> HostnameCertificateCreateResponse</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates">client.originTLSClientAuth.hostnameCertificates.<a href="./src/resources/origin-tls-client-auth/hostname-certificates.ts">list</a>({ ...params }) -> HostnameCertificateListResponsesSinglePage</code>
- <code title="delete /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates/{certificate_id}">client.originTLSClientAuth.hostnameCertificates.<a href="./src/resources/origin-tls-client-auth/hostname-certificates.ts">delete</a>(certificateId, { ...params }) -> HostnameCertificateDeleteResponse</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates/{certificate_id}">client.originTLSClientAuth.hostnameCertificates.<a href="./src/resources/origin-tls-client-auth/hostname-certificates.ts">get</a>(certificateId, { ...params }) -> HostnameCertificateGetResponse</code>

## Settings

Types:

- <code><a href="./src/resources/origin-tls-client-auth/settings.ts">SettingUpdateResponse</a></code>
- <code><a href="./src/resources/origin-tls-client-auth/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/origin_tls_client_auth/settings">client.originTLSClientAuth.settings.<a href="./src/resources/origin-tls-client-auth/settings.ts">update</a>({ ...params }) -> SettingUpdateResponse</code>
- <code title="get /zones/{zone_id}/origin_tls_client_auth/settings">client.originTLSClientAuth.settings.<a href="./src/resources/origin-tls-client-auth/settings.ts">get</a>({ ...params }) -> SettingGetResponse</code>
