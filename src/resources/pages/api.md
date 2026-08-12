# Pages

## Projects

Types:

- <code><a href="./src/resources/pages/projects/projects.ts">Deployment</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">Project</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">Stage</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">ProjectDeleteResponse</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">ProjectGetUploadTokenResponse</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">ProjectPurgeBuildCacheResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pages/projects">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">create</a>({ ...params }) -> Project</code>
- <code title="get /accounts/{account_id}/pages/projects">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">list</a>({ ...params }) -> ProjectsV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/pages/projects/{project_name}">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">delete</a>(projectName, { ...params }) -> ProjectDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/pages/projects/{project_name}">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">edit</a>(projectName, { ...params }) -> Project</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">get</a>(projectName, { ...params }) -> Project</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}/upload-token">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">getUploadToken</a>(projectName, { ...params }) -> ProjectGetUploadTokenResponse</code>
- <code title="post /accounts/{account_id}/pages/projects/{project_name}/purge_build_cache">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">purgeBuildCache</a>(projectName, { ...params }) -> ProjectPurgeBuildCacheResponse | null</code>

### Deployments

Types:

- <code><a href="./src/resources/pages/projects/deployments/deployments.ts">DeploymentDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pages/projects/{project_name}/deployments">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">create</a>(projectName, { ...params }) -> Deployment</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}/deployments">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">list</a>(projectName, { ...params }) -> DeploymentsV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">delete</a>(deploymentID, { ...params }) -> DeploymentDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">get</a>(deploymentID, { ...params }) -> Deployment</code>
- <code title="post /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}/retry">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">retry</a>(deploymentID, { ...params }) -> Deployment</code>
- <code title="post /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}/rollback">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">rollback</a>(deploymentID, { ...params }) -> Deployment</code>

#### History

##### Logs

Types:

- <code><a href="./src/resources/pages/projects/deployments/history/logs.ts">LogGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}/history/logs">client.pages.projects.deployments.history.logs.<a href="./src/resources/pages/projects/deployments/history/logs.ts">get</a>(deploymentID, { ...params }) -> LogGetResponse</code>

#### Tails

Types:

- <code><a href="./src/resources/pages/projects/deployments/tails.ts">TailCreateResponse</a></code>
- <code><a href="./src/resources/pages/projects/deployments/tails.ts">TailDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}/tails">client.pages.projects.deployments.tails.<a href="./src/resources/pages/projects/deployments/tails.ts">create</a>(deploymentID, { ...params }) -> TailCreateResponse</code>
- <code title="delete /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}/tails/{tail_id}">client.pages.projects.deployments.tails.<a href="./src/resources/pages/projects/deployments/tails.ts">delete</a>(tailID, { ...params }) -> TailDeleteResponse | null</code>

### Domains

Types:

- <code><a href="./src/resources/pages/projects/domains.ts">DomainCreateResponse</a></code>
- <code><a href="./src/resources/pages/projects/domains.ts">DomainListResponse</a></code>
- <code><a href="./src/resources/pages/projects/domains.ts">DomainDeleteResponse</a></code>
- <code><a href="./src/resources/pages/projects/domains.ts">DomainEditResponse</a></code>
- <code><a href="./src/resources/pages/projects/domains.ts">DomainGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pages/projects/{project_name}/domains">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">create</a>(projectName, { ...params }) -> DomainCreateResponse</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}/domains">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">list</a>(projectName, { ...params }) -> DomainListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/pages/projects/{project_name}/domains/{domain_name}">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">delete</a>(domainName, { ...params }) -> DomainDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/pages/projects/{project_name}/domains/{domain_name}">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">edit</a>(domainName, { ...params }) -> DomainEditResponse</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}/domains/{domain_name}">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">get</a>(domainName, { ...params }) -> DomainGetResponse</code>

## Assets

Types:

- <code><a href="./src/resources/pages/assets.ts">AssetCheckMissingResponse</a></code>
- <code><a href="./src/resources/pages/assets.ts">AssetUploadResponse</a></code>
- <code><a href="./src/resources/pages/assets.ts">AssetUpsertHashesResponse</a></code>

Methods:

- <code title="post /pages/assets/check-missing">client.pages.assets.<a href="./src/resources/pages/assets.ts">checkMissing</a>({ ...params }) -> AssetCheckMissingResponsesSinglePage</code>
- <code title="post /pages/assets/upload">client.pages.assets.<a href="./src/resources/pages/assets.ts">upload</a>([ ...body ]) -> AssetUploadResponse</code>
- <code title="post /pages/assets/upsert-hashes">client.pages.assets.<a href="./src/resources/pages/assets.ts">upsertHashes</a>({ ...params }) -> AssetUpsertHashesResponse</code>
