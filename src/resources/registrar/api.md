# Registrar

Types:

- <code><a href="./src/resources/registrar/registrar.ts">Registration</a></code>
- <code><a href="./src/resources/registrar/registrar.ts">WorkflowStatus</a></code>
- <code><a href="./src/resources/registrar/registrar.ts">RegistrarCheckResponse</a></code>
- <code><a href="./src/resources/registrar/registrar.ts">RegistrarSearchResponse</a></code>
- <code><a href="./src/resources/registrar/registrar.ts">RegistrarTransferCheckResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/registrar/domain-check">client.registrar.<a href="./src/resources/registrar/registrar.ts">check</a>({ ...params }) -> RegistrarCheckResponse</code>
- <code title="get /accounts/{account_id}/registrar/domain-search">client.registrar.<a href="./src/resources/registrar/registrar.ts">search</a>({ ...params }) -> RegistrarSearchResponse</code>
- <code title="post /accounts/{account_id}/registrar/domain-transfer-check">client.registrar.<a href="./src/resources/registrar/registrar.ts">transferCheck</a>({ ...params }) -> RegistrarTransferCheckResponse</code>

## Registrations

Methods:

- <code title="post /accounts/{account_id}/registrar/registrations">client.registrar.registrations.<a href="./src/resources/registrar/registrations.ts">create</a>({ ...params }) -> WorkflowStatus</code>
- <code title="get /accounts/{account_id}/registrar/registrations">client.registrar.registrations.<a href="./src/resources/registrar/registrations.ts">list</a>({ ...params }) -> RegistrationsCursorPagination</code>
- <code title="patch /accounts/{account_id}/registrar/registrations/{domain_name}">client.registrar.registrations.<a href="./src/resources/registrar/registrations.ts">edit</a>(domainName, { ...params }) -> WorkflowStatus</code>
- <code title="get /accounts/{account_id}/registrar/registrations/{domain_name}">client.registrar.registrations.<a href="./src/resources/registrar/registrations.ts">get</a>(domainName, { ...params }) -> Registration</code>

## RegistrationStatus

Methods:

- <code title="get /accounts/{account_id}/registrar/registrations/{domain_name}/registration-status">client.registrar.registrationStatus.<a href="./src/resources/registrar/registration-status.ts">get</a>(domainName, { ...params }) -> WorkflowStatus</code>

## UpdateStatus

Methods:

- <code title="get /accounts/{account_id}/registrar/registrations/{domain_name}/update-status">client.registrar.updateStatus.<a href="./src/resources/registrar/update-status.ts">get</a>(domainName, { ...params }) -> WorkflowStatus</code>

## Extensions

Types:

- <code><a href="./src/resources/registrar/extensions.ts">ExtensionListResponse</a></code>
- <code><a href="./src/resources/registrar/extensions.ts">ExtensionGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/registrar/extensions">client.registrar.extensions.<a href="./src/resources/registrar/extensions.ts">list</a>({ ...params }) -> ExtensionListResponsesCursorPagination</code>
- <code title="get /accounts/{account_id}/registrar/extensions/{extension}">client.registrar.extensions.<a href="./src/resources/registrar/extensions.ts">get</a>(extension, { ...params }) -> ExtensionGetResponse</code>

## TransferIn

Methods:

- <code title="post /accounts/{account_id}/registrar/registrations/{domain_name}/transfer-in">client.registrar.transferIn.<a href="./src/resources/registrar/transfer-in.ts">create</a>(domainName, { ...params }) -> WorkflowStatus</code>

## TransferInStatus

Methods:

- <code title="get /accounts/{account_id}/registrar/registrations/{domain_name}/transfer-in-status">client.registrar.transferInStatus.<a href="./src/resources/registrar/transfer-in-status.ts">get</a>(domainName, { ...params }) -> WorkflowStatus</code>
