# Registrar

Types:

- <code><a href="./src/resources/registrar/registrar.ts">Registration</a></code>
- <code><a href="./src/resources/registrar/registrar.ts">WorkflowStatus</a></code>
- <code><a href="./src/resources/registrar/registrar.ts">RegistrarCheckResponse</a></code>
- <code><a href="./src/resources/registrar/registrar.ts">RegistrarSearchResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/registrar/domain-check">client.registrar.<a href="./src/resources/registrar/registrar.ts">check</a>({ ...params }) -> RegistrarCheckResponse</code>
- <code title="get /accounts/{account_id}/registrar/domain-search">client.registrar.<a href="./src/resources/registrar/registrar.ts">search</a>({ ...params }) -> RegistrarSearchResponse</code>

## Domains

Types:

- <code><a href="./src/resources/registrar/domains.ts">Domain</a></code>
- <code><a href="./src/resources/registrar/domains.ts">DomainUpdateResponse</a></code>
- <code><a href="./src/resources/registrar/domains.ts">DomainGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/registrar/domains/{domain_name}">client.registrar.domains.<a href="./src/resources/registrar/domains.ts">update</a>(domainName, { ...params }) -> DomainUpdateResponse | null</code>
- <code title="get /accounts/{account_id}/registrar/domains">client.registrar.domains.<a href="./src/resources/registrar/domains.ts">list</a>({ ...params }) -> DomainsSinglePage</code>
- <code title="get /accounts/{account_id}/registrar/domains/{domain_name}">client.registrar.domains.<a href="./src/resources/registrar/domains.ts">get</a>(domainName, { ...params }) -> DomainGetResponse | null</code>

## RegistrationStatus

Methods:

- <code title="get /accounts/{account_id}/registrar/registrations/{domain_name}/registration-status">client.registrar.registrationStatus.<a href="./src/resources/registrar/registration-status.ts">get</a>(domainName, { ...params }) -> WorkflowStatus</code>

## UpdateStatus

Methods:

- <code title="get /accounts/{account_id}/registrar/registrations/{domain_name}/update-status">client.registrar.updateStatus.<a href="./src/resources/registrar/update-status.ts">get</a>(domainName, { ...params }) -> WorkflowStatus</code>
