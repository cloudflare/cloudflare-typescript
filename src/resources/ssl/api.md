# SSL

## Analyze

Types:

- <code><a href="./src/resources/ssl/analyze.ts">AnalyzeCreateResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/ssl/analyze">client.ssl.analyze.<a href="./src/resources/ssl/analyze.ts">create</a>({ ...params }) -> AnalyzeCreateResponse</code>

## CertificatePacks

Types:

- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">Host</a></code>
- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">RequestValidity</a></code>
- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">Status</a></code>
- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">ValidationMethod</a></code>
- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">CertificatePackCreateResponse</a></code>
- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">CertificatePackListResponse</a></code>
- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">CertificatePackDeleteResponse</a></code>
- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">CertificatePackEditResponse</a></code>
- <code><a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">CertificatePackGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/ssl/certificate_packs/order">client.ssl.certificatePacks.<a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">create</a>({ ...params }) -> CertificatePackCreateResponse</code>
- <code title="get /zones/{zone_id}/ssl/certificate_packs">client.ssl.certificatePacks.<a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">list</a>({ ...params }) -> CertificatePackListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}">client.ssl.certificatePacks.<a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">delete</a>(certificatePackId, { ...params }) -> CertificatePackDeleteResponse</code>
- <code title="patch /zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}">client.ssl.certificatePacks.<a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">edit</a>(certificatePackId, { ...params }) -> CertificatePackEditResponse</code>
- <code title="get /zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}">client.ssl.certificatePacks.<a href="./src/resources/ssl/certificate-packs/certificate-packs.ts">get</a>(certificatePackId, { ...params }) -> CertificatePackGetResponse</code>

### Quota

Types:

- <code><a href="./src/resources/ssl/certificate-packs/quota.ts">QuotaGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/ssl/certificate_packs/quota">client.ssl.certificatePacks.quota.<a href="./src/resources/ssl/certificate-packs/quota.ts">get</a>({ ...params }) -> QuotaGetResponse</code>

## Recommendations

Types:

- <code><a href="./src/resources/ssl/recommendations.ts">RecommendationGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/ssl/recommendation">client.ssl.recommendations.<a href="./src/resources/ssl/recommendations.ts">get</a>({ ...params }) -> RecommendationGetResponse</code>

## Universal

### Settings

Types:

- <code><a href="./src/resources/ssl/universal/settings.ts">UniversalSSLSettings</a></code>

Methods:

- <code title="patch /zones/{zone_id}/ssl/universal/settings">client.ssl.universal.settings.<a href="./src/resources/ssl/universal/settings.ts">edit</a>({ ...params }) -> UniversalSSLSettings</code>
- <code title="get /zones/{zone_id}/ssl/universal/settings">client.ssl.universal.settings.<a href="./src/resources/ssl/universal/settings.ts">get</a>({ ...params }) -> UniversalSSLSettings</code>

## Verification

Types:

- <code><a href="./src/resources/ssl/verification.ts">Verification</a></code>
- <code><a href="./src/resources/ssl/verification.ts">VerificationEditResponse</a></code>
- <code><a href="./src/resources/ssl/verification.ts">VerificationGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/ssl/verification/{certificate_pack_id}">client.ssl.verification.<a href="./src/resources/ssl/verification.ts">edit</a>(certificatePackId, { ...params }) -> VerificationEditResponse</code>
- <code title="get /zones/{zone_id}/ssl/verification">client.ssl.verification.<a href="./src/resources/ssl/verification.ts">get</a>({ ...params }) -> VerificationGetResponse</code>
