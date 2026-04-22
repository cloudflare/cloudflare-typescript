# Pages

## Projects

Types:

- <code><a href="./src/resources/pages/projects/projects.ts">Deployment</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">Project</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">Stage</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">ProjectCreateResponse</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">ProjectListResponse</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">ProjectDeleteResponse</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">ProjectEditResponse</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">ProjectGetResponse</a></code>
- <code><a href="./src/resources/pages/projects/projects.ts">ProjectPurgeBuildCacheResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pages/projects">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">create</a>({ ...params }) -> ProjectCreateResponse</code>
- <code title="get /accounts/{account_id}/pages/projects">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">list</a>({ ...params }) -> ProjectListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/pages/projects/{project_name}">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">delete</a>(projectName, { ...params }) -> ProjectDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/pages/projects/{project_name}">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">edit</a>(projectName, { ...params }) -> ProjectEditResponse</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">get</a>(projectName, { ...params }) -> ProjectGetResponse</code>
- <code title="post /accounts/{account_id}/pages/projects/{project_name}/purge_build_cache">client.pages.projects.<a href="./src/resources/pages/projects/projects.ts">purgeBuildCache</a>(projectName, { ...params }) -> ProjectPurgeBuildCacheResponse | null</code>

### Deployments

Types:

- <code><a href="./src/resources/pages/projects/deployments/deployments.ts">DeploymentCreateResponse</a></code>
- <code><a href="./src/resources/pages/projects/deployments/deployments.ts">DeploymentListResponse</a></code>
- <code><a href="./src/resources/pages/projects/deployments/deployments.ts">DeploymentDeleteResponse</a></code>
- <code><a href="./src/resources/pages/projects/deployments/deployments.ts">DeploymentGetResponse</a></code>
- <code><a href="./src/resources/pages/projects/deployments/deployments.ts">DeploymentRetryResponse</a></code>
- <code><a href="./src/resources/pages/projects/deployments/deployments.ts">DeploymentRollbackResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pages/projects/{project_name}/deployments">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">create</a>(projectName, { ...params }) -> DeploymentCreateResponse</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}/deployments">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">list</a>(projectName, { ...params }) -> DeploymentListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">delete</a>(projectName, deploymentId, { ...params }) -> DeploymentDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">get</a>(projectName, deploymentId, { ...params }) -> DeploymentGetResponse</code>
- <code title="post /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}/retry">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">retry</a>(projectName, deploymentId, { ...params }) -> DeploymentRetryResponse</code>
- <code title="post /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}/rollback">client.pages.projects.deployments.<a href="./src/resources/pages/projects/deployments/deployments.ts">rollback</a>(projectName, deploymentId, { ...params }) -> DeploymentRollbackResponse</code>

#### History

##### Logs

Types:

- <code><a href="./src/resources/pages/projects/deployments/history/logs.ts">LogGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}/history/logs">client.pages.projects.deployments.history.logs.<a href="./src/resources/pages/projects/deployments/history/logs.ts">get</a>(projectName, deploymentId, { ...params }) -> LogGetResponse</code>

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
- <code title="delete /accounts/{account_id}/pages/projects/{project_name}/domains/{domain_name}">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">delete</a>(projectName, domainName, { ...params }) -> DomainDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/pages/projects/{project_name}/domains/{domain_name}">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">edit</a>(projectName, domainName, { ...params }) -> DomainEditResponse</code>
- <code title="get /accounts/{account_id}/pages/projects/{project_name}/domains/{domain_name}">client.pages.projects.domains.<a href="./src/resources/pages/projects/domains.ts">get</a>(projectName, domainName, { ...params }) -> DomainGetResponse</code>
