# Containers

## Applications

Types:

- <code><a href="./src/resources/containers/applications/applications.ts">ApplicationCreateResponse</a></code>
- <code><a href="./src/resources/containers/applications/applications.ts">ApplicationListResponse</a></code>
- <code><a href="./src/resources/containers/applications/applications.ts">ApplicationDeleteResponse</a></code>
- <code><a href="./src/resources/containers/applications/applications.ts">ApplicationEditResponse</a></code>
- <code><a href="./src/resources/containers/applications/applications.ts">ApplicationGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/containers/applications">client.containers.applications.<a href="./src/resources/containers/applications/applications.ts">create</a>({ ...params }) -> ApplicationCreateResponse</code>
- <code title="get /accounts/{account_id}/containers/applications">client.containers.applications.<a href="./src/resources/containers/applications/applications.ts">list</a>({ ...params }) -> ApplicationListResponsesPageTokenPagination</code>
- <code title="delete /accounts/{account_id}/containers/applications/{application_id}">client.containers.applications.<a href="./src/resources/containers/applications/applications.ts">delete</a>(applicationID, { ...params }) -> ApplicationDeleteResponse</code>
- <code title="patch /accounts/{account_id}/containers/applications/{application_id}">client.containers.applications.<a href="./src/resources/containers/applications/applications.ts">edit</a>(applicationID, { ...params }) -> ApplicationEditResponse</code>
- <code title="get /accounts/{account_id}/containers/applications/{application_id}">client.containers.applications.<a href="./src/resources/containers/applications/applications.ts">get</a>(applicationID, { ...params }) -> ApplicationGetResponse</code>

### Instances

Types:

- <code><a href="./src/resources/containers/applications/instances.ts">InstanceListResponse</a></code>
- <code><a href="./src/resources/containers/applications/instances.ts">InstanceGetResponse</a></code>
- <code><a href="./src/resources/containers/applications/instances.ts">InstanceListV1Response</a></code>

Methods:

- <code title="get /accounts/{account_id}/containers/applications/{application_id}/instances-v2">client.containers.applications.instances.<a href="./src/resources/containers/applications/instances.ts">list</a>(applicationID, { ...params }) -> InstanceListResponsesPageTokenPagination</code>
- <code title="get /accounts/{account_id}/containers/applications/{application_id}/instances/{instance_id}">client.containers.applications.instances.<a href="./src/resources/containers/applications/instances.ts">get</a>(instanceID, { ...params }) -> InstanceGetResponse</code>
- <code title="get /accounts/{account_id}/containers/applications/{application_id}/instances">client.containers.applications.instances.<a href="./src/resources/containers/applications/instances.ts">listV1</a>(applicationID, { ...params }) -> InstanceListV1ResponsesContainersInstancesV1Pagination</code>

### Rollouts

Types:

- <code><a href="./src/resources/containers/applications/rollouts.ts">RolloutCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/containers/applications/{application_id}/rollouts">client.containers.applications.rollouts.<a href="./src/resources/containers/applications/rollouts.ts">create</a>(applicationID, { ...params }) -> RolloutCreateResponse</code>

### Versions

Types:

- <code><a href="./src/resources/containers/applications/versions.ts">VersionListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/containers/applications/{application_id}/versions">client.containers.applications.versions.<a href="./src/resources/containers/applications/versions.ts">list</a>(applicationID, { ...params }) -> VersionListResponsesSinglePage</code>

## Images

Types:

- <code><a href="./src/resources/containers/images.ts">ImagePrepareResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/containers/image-preparations">client.containers.images.<a href="./src/resources/containers/images.ts">prepare</a>({ ...params }) -> ImagePrepareResponse</code>

## Registries

Types:

- <code><a href="./src/resources/containers/registries/registries.ts">RegistryCreateResponse</a></code>
- <code><a href="./src/resources/containers/registries/registries.ts">RegistryListResponse</a></code>
- <code><a href="./src/resources/containers/registries/registries.ts">RegistryDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/containers/registries">client.containers.registries.<a href="./src/resources/containers/registries/registries.ts">create</a>({ ...params }) -> RegistryCreateResponse</code>
- <code title="get /accounts/{account_id}/containers/registries">client.containers.registries.<a href="./src/resources/containers/registries/registries.ts">list</a>({ ...params }) -> RegistryListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/containers/registries/{domain}">client.containers.registries.<a href="./src/resources/containers/registries/registries.ts">delete</a>(domain, { ...params }) -> RegistryDeleteResponse</code>

### Credentials

Types:

- <code><a href="./src/resources/containers/registries/credentials.ts">CredentialGenerateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/containers/registries/{domain}/credentials">client.containers.registries.credentials.<a href="./src/resources/containers/registries/credentials.ts">generate</a>(domain, { ...params }) -> CredentialGenerateResponse</code>
