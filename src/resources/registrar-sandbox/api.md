# RegistrarSandbox

Types:

- <code><a href="./src/resources/registrar-sandbox/registrar-sandbox.ts">Registration</a></code>
- <code><a href="./src/resources/registrar-sandbox/registrar-sandbox.ts">WorkflowStatus</a></code>
- <code><a href="./src/resources/registrar-sandbox/registrar-sandbox.ts">RegistrarSandboxCheckResponse</a></code>
- <code><a href="./src/resources/registrar-sandbox/registrar-sandbox.ts">RegistrarSandboxSearchResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/registrar-sandbox/domain-check">client.registrarSandbox.<a href="./src/resources/registrar-sandbox/registrar-sandbox.ts">check</a>({ ...params }) -> RegistrarSandboxCheckResponse</code>
- <code title="get /accounts/{account_id}/registrar-sandbox/domain-search">client.registrarSandbox.<a href="./src/resources/registrar-sandbox/registrar-sandbox.ts">search</a>({ ...params }) -> RegistrarSandboxSearchResponse</code>

## Registrations

Types:

- <code><a href="./src/resources/registrar-sandbox/registrations.ts">RegistrationCreateResponse</a></code>
- <code><a href="./src/resources/registrar-sandbox/registrations.ts">RegistrationListResponse</a></code>
- <code><a href="./src/resources/registrar-sandbox/registrations.ts">RegistrationEditResponse</a></code>
- <code><a href="./src/resources/registrar-sandbox/registrations.ts">RegistrationGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/registrar-sandbox/registrations">client.registrarSandbox.registrations.<a href="./src/resources/registrar-sandbox/registrations.ts">create</a>({ ...params }) -> RegistrationCreateResponse</code>
- <code title="get /accounts/{account_id}/registrar-sandbox/registrations">client.registrarSandbox.registrations.<a href="./src/resources/registrar-sandbox/registrations.ts">list</a>({ ...params }) -> RegistrationListResponsesCursorPagination</code>
- <code title="patch /accounts/{account_id}/registrar-sandbox/registrations/{domain_name}">client.registrarSandbox.registrations.<a href="./src/resources/registrar-sandbox/registrations.ts">edit</a>(domainName, { ...params }) -> RegistrationEditResponse</code>
- <code title="get /accounts/{account_id}/registrar-sandbox/registrations/{domain_name}">client.registrarSandbox.registrations.<a href="./src/resources/registrar-sandbox/registrations.ts">get</a>(domainName, { ...params }) -> RegistrationGetResponse</code>

## RegistrationStatus

Types:

- <code><a href="./src/resources/registrar-sandbox/registration-status.ts">RegistrationStatusGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/registrar-sandbox/registrations/{domain_name}/registration-status">client.registrarSandbox.registrationStatus.<a href="./src/resources/registrar-sandbox/registration-status.ts">get</a>(domainName, { ...params }) -> RegistrationStatusGetResponse</code>

## UpdateStatus

Types:

- <code><a href="./src/resources/registrar-sandbox/update-status.ts">UpdateStatusGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/registrar-sandbox/registrations/{domain_name}/update-status">client.registrarSandbox.updateStatus.<a href="./src/resources/registrar-sandbox/update-status.ts">get</a>(domainName, { ...params }) -> UpdateStatusGetResponse</code>

## Extensions

Types:

- <code><a href="./src/resources/registrar-sandbox/extensions.ts">ExtensionListResponse</a></code>
- <code><a href="./src/resources/registrar-sandbox/extensions.ts">ExtensionGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/registrar-sandbox/extensions">client.registrarSandbox.extensions.<a href="./src/resources/registrar-sandbox/extensions.ts">list</a>({ ...params }) -> ExtensionListResponsesCursorPagination</code>
- <code title="get /accounts/{account_id}/registrar-sandbox/extensions/{extension}">client.registrarSandbox.extensions.<a href="./src/resources/registrar-sandbox/extensions.ts">get</a>(extension, { ...params }) -> ExtensionGetResponse</code>
