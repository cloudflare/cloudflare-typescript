# EmailSending

Types:

- <code><a href="./src/resources/email-sending/email-sending.ts">EmailSendingSendResponse</a></code>
- <code><a href="./src/resources/email-sending/email-sending.ts">EmailSendingSendRawResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/email/sending/send">client.emailSending.<a href="./src/resources/email-sending/email-sending.ts">send</a>({ ...params }) -> EmailSendingSendResponse</code>
- <code title="post /accounts/{account_id}/email/sending/send_raw">client.emailSending.<a href="./src/resources/email-sending/email-sending.ts">sendRaw</a>({ ...params }) -> EmailSendingSendRawResponse</code>

## Suppressions

Types:

- <code><a href="./src/resources/email-sending/suppressions.ts">SuppressionCreateResponse</a></code>
- <code><a href="./src/resources/email-sending/suppressions.ts">SuppressionListResponse</a></code>
- <code><a href="./src/resources/email-sending/suppressions.ts">SuppressionDeleteResponse</a></code>
- <code><a href="./src/resources/email-sending/suppressions.ts">SuppressionEditResponse</a></code>
- <code><a href="./src/resources/email-sending/suppressions.ts">SuppressionGetResponse</a></code>
- <code><a href="./src/resources/email-sending/suppressions.ts">SuppressionImportResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/email/sending/suppressions">client.emailSending.suppressions.<a href="./src/resources/email-sending/suppressions.ts">create</a>({ ...params }) -> SuppressionCreateResponse</code>
- <code title="get /accounts/{account_id}/email/sending/suppressions">client.emailSending.suppressions.<a href="./src/resources/email-sending/suppressions.ts">list</a>({ ...params }) -> SuppressionListResponsesCursorPagination</code>
- <code title="delete /accounts/{account_id}/email/sending/suppressions/{suppression_id}">client.emailSending.suppressions.<a href="./src/resources/email-sending/suppressions.ts">delete</a>(suppressionID, { ...params }) -> SuppressionDeleteResponse</code>
- <code title="patch /accounts/{account_id}/email/sending/suppressions/{suppression_id}">client.emailSending.suppressions.<a href="./src/resources/email-sending/suppressions.ts">edit</a>(suppressionID, { ...params }) -> SuppressionEditResponse</code>
- <code title="get /accounts/{account_id}/email/sending/suppressions/{suppression_id}">client.emailSending.suppressions.<a href="./src/resources/email-sending/suppressions.ts">get</a>(suppressionID, { ...params }) -> SuppressionGetResponse</code>
- <code title="post /accounts/{account_id}/email/sending/suppressions/bulk">client.emailSending.suppressions.<a href="./src/resources/email-sending/suppressions.ts">import</a>({ ...params }) -> SuppressionImportResponse</code>

## Subdomains

Types:

- <code><a href="./src/resources/email-sending/subdomains/subdomains.ts">SubdomainCreateResponse</a></code>
- <code><a href="./src/resources/email-sending/subdomains/subdomains.ts">SubdomainListResponse</a></code>
- <code><a href="./src/resources/email-sending/subdomains/subdomains.ts">SubdomainDeleteResponse</a></code>
- <code><a href="./src/resources/email-sending/subdomains/subdomains.ts">SubdomainEditResponse</a></code>
- <code><a href="./src/resources/email-sending/subdomains/subdomains.ts">SubdomainGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/email/sending/subdomains">client.emailSending.subdomains.<a href="./src/resources/email-sending/subdomains/subdomains.ts">create</a>({ ...params }) -> SubdomainCreateResponse</code>
- <code title="get /zones/{zone_id}/email/sending/subdomains">client.emailSending.subdomains.<a href="./src/resources/email-sending/subdomains/subdomains.ts">list</a>({ ...params }) -> SubdomainListResponsesSinglePage</code>
- <code title="delete /zones/{zone_id}/email/sending/subdomains/{subdomain_id}">client.emailSending.subdomains.<a href="./src/resources/email-sending/subdomains/subdomains.ts">delete</a>(subdomainID, { ...params }) -> SubdomainDeleteResponse</code>
- <code title="patch /zones/{zone_id}/email/sending/subdomains/{subdomain_id}">client.emailSending.subdomains.<a href="./src/resources/email-sending/subdomains/subdomains.ts">edit</a>(subdomainID, { ...params }) -> SubdomainEditResponse</code>
- <code title="get /zones/{zone_id}/email/sending/subdomains/{subdomain_id}">client.emailSending.subdomains.<a href="./src/resources/email-sending/subdomains/subdomains.ts">get</a>(subdomainID, { ...params }) -> SubdomainGetResponse</code>

### DNS

Methods:

- <code title="get /zones/{zone_id}/email/sending/subdomains/{subdomain_id}/dns">client.emailSending.subdomains.dns.<a href="./src/resources/email-sending/subdomains/dns.ts">get</a>(subdomainID, { ...params }) -> DNSRecordsSinglePage</code>
