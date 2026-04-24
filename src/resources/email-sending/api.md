# EmailSending

Types:

- <code><a href="./src/resources/email-sending/email-sending.ts">EmailSendingSendResponse</a></code>
- <code><a href="./src/resources/email-sending/email-sending.ts">EmailSendingSendRawResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/email/sending/send">client.emailSending.<a href="./src/resources/email-sending/email-sending.ts">send</a>({ ...params }) -> EmailSendingSendResponse</code>
- <code title="post /accounts/{account_id}/email/sending/send_raw">client.emailSending.<a href="./src/resources/email-sending/email-sending.ts">sendRaw</a>({ ...params }) -> EmailSendingSendRawResponse</code>

## Subdomains

Types:

- <code><a href="./src/resources/email-sending/subdomains/subdomains.ts">SubdomainCreateResponse</a></code>
- <code><a href="./src/resources/email-sending/subdomains/subdomains.ts">SubdomainListResponse</a></code>
- <code><a href="./src/resources/email-sending/subdomains/subdomains.ts">SubdomainDeleteResponse</a></code>
- <code><a href="./src/resources/email-sending/subdomains/subdomains.ts">SubdomainGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/email/sending/subdomains">client.emailSending.subdomains.<a href="./src/resources/email-sending/subdomains/subdomains.ts">create</a>({ ...params }) -> SubdomainCreateResponse</code>
- <code title="get /zones/{zone_id}/email/sending/subdomains">client.emailSending.subdomains.<a href="./src/resources/email-sending/subdomains/subdomains.ts">list</a>({ ...params }) -> SubdomainListResponsesSinglePage</code>
- <code title="delete /zones/{zone_id}/email/sending/subdomains/{subdomain_id}">client.emailSending.subdomains.<a href="./src/resources/email-sending/subdomains/subdomains.ts">delete</a>(subdomainId, { ...params }) -> SubdomainDeleteResponse</code>
- <code title="get /zones/{zone_id}/email/sending/subdomains/{subdomain_id}">client.emailSending.subdomains.<a href="./src/resources/email-sending/subdomains/subdomains.ts">get</a>(subdomainId, { ...params }) -> SubdomainGetResponse</code>

### DNS

Methods:

- <code title="get /zones/{zone_id}/email/sending/subdomains/{subdomain_id}/dns">client.emailSending.subdomains.dns.<a href="./src/resources/email-sending/subdomains/dns.ts">get</a>(subdomainId, { ...params }) -> DNSRecordsSinglePage</code>
