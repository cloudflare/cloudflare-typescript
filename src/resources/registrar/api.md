# Registrar

## Domains

Types:

- <code><a href="./src/resources/registrar/domains.ts">Domain</a></code>
- <code><a href="./src/resources/registrar/domains.ts">DomainUpdateResponse</a></code>
- <code><a href="./src/resources/registrar/domains.ts">DomainGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/registrar/domains/{domain_name}">client.registrar.domains.<a href="./src/resources/registrar/domains.ts">update</a>(domainName, { ...params }) -> DomainUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/registrar/domains">client.registrar.domains.<a href="./src/resources/registrar/domains.ts">list</a>({ ...params }) -> DomainsSinglePage</code>
- <code title="get /accounts/{account_id}/registrar/domains/{domain_name}">client.registrar.domains.<a href="./src/resources/registrar/domains.ts">get</a>(domainName, { ...params }) -> DomainGetResponse | null</code>
