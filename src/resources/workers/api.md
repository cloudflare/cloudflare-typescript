# Workers

Types:

- <code><a href="./src/resources/workers/workers.ts">MigrationStep</a></code>
- <code><a href="./src/resources/workers/workers.ts">SingleStepMigration</a></code>
- <code><a href="./src/resources/workers/workers.ts">WorkerMetadata</a></code>

## Beta

### Workers

Types:

- <code><a href="./src/resources/workers/beta/workers/workers.ts">Worker</a></code>
- <code><a href="./src/resources/workers/beta/workers/workers.ts">WorkerDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/workers">client.workers.beta.workers.<a href="./src/resources/workers/beta/workers/workers.ts">create</a>({ ...params }) -> Worker</code>
- <code title="put /accounts/{account_id}/workers/workers/{worker_id}">client.workers.beta.workers.<a href="./src/resources/workers/beta/workers/workers.ts">update</a>(workerId, { ...params }) -> Worker</code>
- <code title="get /accounts/{account_id}/workers/workers">client.workers.beta.workers.<a href="./src/resources/workers/beta/workers/workers.ts">list</a>({ ...params }) -> WorkersV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/workers/workers/{worker_id}">client.workers.beta.workers.<a href="./src/resources/workers/beta/workers/workers.ts">delete</a>(workerId, { ...params }) -> WorkerDeleteResponse</code>
- <code title="patch /accounts/{account_id}/workers/workers/{worker_id}">client.workers.beta.workers.<a href="./src/resources/workers/beta/workers/workers.ts">edit</a>(workerId, { ...params }) -> Worker</code>
- <code title="get /accounts/{account_id}/workers/workers/{worker_id}">client.workers.beta.workers.<a href="./src/resources/workers/beta/workers/workers.ts">get</a>(workerId, { ...params }) -> Worker</code>

#### Versions

Types:

- <code><a href="./src/resources/workers/beta/workers/versions.ts">Version</a></code>
- <code><a href="./src/resources/workers/beta/workers/versions.ts">VersionDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/workers/{worker_id}/versions">client.workers.beta.workers.versions.<a href="./src/resources/workers/beta/workers/versions.ts">create</a>(workerId, { ...params }) -> Version</code>
- <code title="get /accounts/{account_id}/workers/workers/{worker_id}/versions">client.workers.beta.workers.versions.<a href="./src/resources/workers/beta/workers/versions.ts">list</a>(workerId, { ...params }) -> VersionsV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/workers/workers/{worker_id}/versions/{version_id}">client.workers.beta.workers.versions.<a href="./src/resources/workers/beta/workers/versions.ts">delete</a>(workerId, versionId, { ...params }) -> VersionDeleteResponse</code>
- <code title="get /accounts/{account_id}/workers/workers/{worker_id}/versions/{version_id}">client.workers.beta.workers.versions.<a href="./src/resources/workers/beta/workers/versions.ts">get</a>(workerId, versionId, { ...params }) -> Version</code>

## Routes

Types:

- <code><a href="./src/resources/workers/routes.ts">RouteCreateResponse</a></code>
- <code><a href="./src/resources/workers/routes.ts">RouteUpdateResponse</a></code>
- <code><a href="./src/resources/workers/routes.ts">RouteListResponse</a></code>
- <code><a href="./src/resources/workers/routes.ts">RouteDeleteResponse</a></code>
- <code><a href="./src/resources/workers/routes.ts">RouteGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/workers/routes">client.workers.routes.<a href="./src/resources/workers/routes.ts">create</a>({ ...params }) -> RouteCreateResponse</code>
- <code title="put /zones/{zone_id}/workers/routes/{route_id}">client.workers.routes.<a href="./src/resources/workers/routes.ts">update</a>(routeId, { ...params }) -> RouteUpdateResponse</code>
- <code title="get /zones/{zone_id}/workers/routes">client.workers.routes.<a href="./src/resources/workers/routes.ts">list</a>({ ...params }) -> RouteListResponsesSinglePage</code>
- <code title="delete /zones/{zone_id}/workers/routes/{route_id}">client.workers.routes.<a href="./src/resources/workers/routes.ts">delete</a>(routeId, { ...params }) -> RouteDeleteResponse</code>
- <code title="get /zones/{zone_id}/workers/routes/{route_id}">client.workers.routes.<a href="./src/resources/workers/routes.ts">get</a>(routeId, { ...params }) -> RouteGetResponse</code>

## Assets

### Upload

Types:

- <code><a href="./src/resources/workers/assets/upload.ts">UploadCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/assets/upload">client.workers.assets.upload.<a href="./src/resources/workers/assets/upload.ts">create</a>({ ...params }) -> UploadCreateResponse</code>

## Scripts

Types:

- <code><a href="./src/resources/workers/scripts/scripts.ts">Script</a></code>
- <code><a href="./src/resources/workers/scripts/scripts.ts">ScriptSetting</a></code>
- <code><a href="./src/resources/workers/scripts/scripts.ts">ScriptUpdateResponse</a></code>
- <code><a href="./src/resources/workers/scripts/scripts.ts">ScriptListResponse</a></code>
- <code><a href="./src/resources/workers/scripts/scripts.ts">ScriptDeleteResponse</a></code>
- <code><a href="./src/resources/workers/scripts/scripts.ts">ScriptGetResponse</a></code>
- <code><a href="./src/resources/workers/scripts/scripts.ts">ScriptSearchResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/scripts/{script_name}">client.workers.scripts.<a href="./src/resources/workers/scripts/scripts.ts">update</a>(scriptName, { ...params }) -> ScriptUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts">client.workers.scripts.<a href="./src/resources/workers/scripts/scripts.ts">list</a>({ ...params }) -> ScriptListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/workers/scripts/{script_name}">client.workers.scripts.<a href="./src/resources/workers/scripts/scripts.ts">delete</a>(scriptName, { ...params }) -> ScriptDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}">client.workers.scripts.<a href="./src/resources/workers/scripts/scripts.ts">get</a>(scriptName, { ...params }) -> string</code>
- <code title="get /accounts/{account_id}/workers/scripts-search">client.workers.scripts.<a href="./src/resources/workers/scripts/scripts.ts">search</a>({ ...params }) -> ScriptSearchResponse</code>

### Assets

#### Upload

Types:

- <code><a href="./src/resources/workers/scripts/assets/upload.ts">UploadCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/scripts/{script_name}/assets-upload-session">client.workers.scripts.assets.upload.<a href="./src/resources/workers/scripts/assets/upload.ts">create</a>(scriptName, { ...params }) -> UploadCreateResponse</code>

### Subdomain

Types:

- <code><a href="./src/resources/workers/scripts/subdomain.ts">SubdomainCreateResponse</a></code>
- <code><a href="./src/resources/workers/scripts/subdomain.ts">SubdomainDeleteResponse</a></code>
- <code><a href="./src/resources/workers/scripts/subdomain.ts">SubdomainGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/scripts/{script_name}/subdomain">client.workers.scripts.subdomain.<a href="./src/resources/workers/scripts/subdomain.ts">create</a>(scriptName, { ...params }) -> SubdomainCreateResponse</code>
- <code title="delete /accounts/{account_id}/workers/scripts/{script_name}/subdomain">client.workers.scripts.subdomain.<a href="./src/resources/workers/scripts/subdomain.ts">delete</a>(scriptName, { ...params }) -> SubdomainDeleteResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/subdomain">client.workers.scripts.subdomain.<a href="./src/resources/workers/scripts/subdomain.ts">get</a>(scriptName, { ...params }) -> SubdomainGetResponse</code>

### Schedules

Types:

- <code><a href="./src/resources/workers/scripts/schedules.ts">ScheduleUpdateResponse</a></code>
- <code><a href="./src/resources/workers/scripts/schedules.ts">ScheduleGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/scripts/{script_name}/schedules">client.workers.scripts.schedules.<a href="./src/resources/workers/scripts/schedules.ts">update</a>(scriptName, [ ...body ]) -> ScheduleUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/schedules">client.workers.scripts.schedules.<a href="./src/resources/workers/scripts/schedules.ts">get</a>(scriptName, { ...params }) -> ScheduleGetResponse</code>

### Tail

Types:

- <code><a href="./src/resources/workers/scripts/tail.ts">ConsumerScript</a></code>
- <code><a href="./src/resources/workers/scripts/tail.ts">TailCreateResponse</a></code>
- <code><a href="./src/resources/workers/scripts/tail.ts">TailDeleteResponse</a></code>
- <code><a href="./src/resources/workers/scripts/tail.ts">TailGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/scripts/{script_name}/tails">client.workers.scripts.tail.<a href="./src/resources/workers/scripts/tail.ts">create</a>(scriptName, { ...params }) -> TailCreateResponse</code>
- <code title="delete /accounts/{account_id}/workers/scripts/{script_name}/tails/{id}">client.workers.scripts.tail.<a href="./src/resources/workers/scripts/tail.ts">delete</a>(scriptName, id, { ...params }) -> TailDeleteResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/tails">client.workers.scripts.tail.<a href="./src/resources/workers/scripts/tail.ts">get</a>(scriptName, { ...params }) -> TailGetResponse</code>

### Content

Methods:

- <code title="put /accounts/{account_id}/workers/scripts/{script_name}/content">client.workers.scripts.content.<a href="./src/resources/workers/scripts/content.ts">update</a>(scriptName, { ...params }) -> Script</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/content/v2">client.workers.scripts.content.<a href="./src/resources/workers/scripts/content.ts">get</a>(scriptName, { ...params }) -> Response</code>

### Settings

Methods:

- <code title="patch /accounts/{account_id}/workers/scripts/{script_name}/script-settings">client.workers.scripts.settings.<a href="./src/resources/workers/scripts/settings.ts">edit</a>(scriptName, { ...params }) -> ScriptSetting</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/script-settings">client.workers.scripts.settings.<a href="./src/resources/workers/scripts/settings.ts">get</a>(scriptName, { ...params }) -> ScriptSetting</code>

### Deployments

Types:

- <code><a href="./src/resources/workers/scripts/deployments.ts">Deployment</a></code>
- <code><a href="./src/resources/workers/scripts/deployments.ts">DeploymentListResponse</a></code>
- <code><a href="./src/resources/workers/scripts/deployments.ts">DeploymentDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/scripts/{script_name}/deployments">client.workers.scripts.deployments.<a href="./src/resources/workers/scripts/deployments.ts">create</a>(scriptName, { ...params }) -> Deployment</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/deployments">client.workers.scripts.deployments.<a href="./src/resources/workers/scripts/deployments.ts">list</a>(scriptName, { ...params }) -> DeploymentListResponse</code>
- <code title="delete /accounts/{account_id}/workers/scripts/{script_name}/deployments/{deployment_id}">client.workers.scripts.deployments.<a href="./src/resources/workers/scripts/deployments.ts">delete</a>(scriptName, deploymentId, { ...params }) -> DeploymentDeleteResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/deployments/{deployment_id}">client.workers.scripts.deployments.<a href="./src/resources/workers/scripts/deployments.ts">get</a>(scriptName, deploymentId, { ...params }) -> Deployment</code>

### Versions

Types:

- <code><a href="./src/resources/workers/scripts/versions.ts">VersionCreateResponse</a></code>
- <code><a href="./src/resources/workers/scripts/versions.ts">VersionListResponse</a></code>
- <code><a href="./src/resources/workers/scripts/versions.ts">VersionGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/scripts/{script_name}/versions">client.workers.scripts.versions.<a href="./src/resources/workers/scripts/versions.ts">create</a>(scriptName, { ...params }) -> VersionCreateResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/versions">client.workers.scripts.versions.<a href="./src/resources/workers/scripts/versions.ts">list</a>(scriptName, { ...params }) -> VersionListResponsesV4PagePagination</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/versions/{version_id}">client.workers.scripts.versions.<a href="./src/resources/workers/scripts/versions.ts">get</a>(scriptName, versionId, { ...params }) -> VersionGetResponse</code>

### Secrets

Types:

- <code><a href="./src/resources/workers/scripts/secrets.ts">SecretUpdateResponse</a></code>
- <code><a href="./src/resources/workers/scripts/secrets.ts">SecretListResponse</a></code>
- <code><a href="./src/resources/workers/scripts/secrets.ts">SecretDeleteResponse</a></code>
- <code><a href="./src/resources/workers/scripts/secrets.ts">SecretBulkUpdateResponse</a></code>
- <code><a href="./src/resources/workers/scripts/secrets.ts">SecretGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/scripts/{script_name}/secrets">client.workers.scripts.secrets.<a href="./src/resources/workers/scripts/secrets.ts">update</a>(scriptName, { ...params }) -> SecretUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/secrets">client.workers.scripts.secrets.<a href="./src/resources/workers/scripts/secrets.ts">list</a>(scriptName, { ...params }) -> SecretListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/workers/scripts/{script_name}/secrets/{secret_name}">client.workers.scripts.secrets.<a href="./src/resources/workers/scripts/secrets.ts">delete</a>(scriptName, secretName, { ...params }) -> SecretDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/workers/scripts/{script_name}/secrets-bulk">client.workers.scripts.secrets.<a href="./src/resources/workers/scripts/secrets.ts">bulkUpdate</a>(scriptName, { ...params }) -> SecretBulkUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/secrets/{secret_name}">client.workers.scripts.secrets.<a href="./src/resources/workers/scripts/secrets.ts">get</a>(scriptName, secretName, { ...params }) -> SecretGetResponse</code>

### ScriptAndVersionSettings

Types:

- <code><a href="./src/resources/workers/scripts/script-and-version-settings.ts">ScriptAndVersionSettingEditResponse</a></code>
- <code><a href="./src/resources/workers/scripts/script-and-version-settings.ts">ScriptAndVersionSettingGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/workers/scripts/{script_name}/settings">client.workers.scripts.scriptAndVersionSettings.<a href="./src/resources/workers/scripts/script-and-version-settings.ts">edit</a>(scriptName, { ...params }) -> ScriptAndVersionSettingEditResponse</code>
- <code title="get /accounts/{account_id}/workers/scripts/{script_name}/settings">client.workers.scripts.scriptAndVersionSettings.<a href="./src/resources/workers/scripts/script-and-version-settings.ts">get</a>(scriptName, { ...params }) -> ScriptAndVersionSettingGetResponse</code>

## AccountSettings

Types:

- <code><a href="./src/resources/workers/account-settings.ts">AccountSettingUpdateResponse</a></code>
- <code><a href="./src/resources/workers/account-settings.ts">AccountSettingGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/account-settings">client.workers.accountSettings.<a href="./src/resources/workers/account-settings.ts">update</a>({ ...params }) -> AccountSettingUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/account-settings">client.workers.accountSettings.<a href="./src/resources/workers/account-settings.ts">get</a>({ ...params }) -> AccountSettingGetResponse</code>

## Domains

Types:

- <code><a href="./src/resources/workers/domains.ts">DomainUpdateResponse</a></code>
- <code><a href="./src/resources/workers/domains.ts">DomainListResponse</a></code>
- <code><a href="./src/resources/workers/domains.ts">DomainDeleteResponse</a></code>
- <code><a href="./src/resources/workers/domains.ts">DomainGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/domains">client.workers.domains.<a href="./src/resources/workers/domains.ts">update</a>({ ...params }) -> DomainUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/domains">client.workers.domains.<a href="./src/resources/workers/domains.ts">list</a>({ ...params }) -> DomainListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/workers/domains/{domain_id}">client.workers.domains.<a href="./src/resources/workers/domains.ts">delete</a>(domainId, { ...params }) -> DomainDeleteResponse</code>
- <code title="get /accounts/{account_id}/workers/domains/{domain_id}">client.workers.domains.<a href="./src/resources/workers/domains.ts">get</a>(domainId, { ...params }) -> DomainGetResponse</code>

## Subdomains

Types:

- <code><a href="./src/resources/workers/subdomains.ts">SubdomainUpdateResponse</a></code>
- <code><a href="./src/resources/workers/subdomains.ts">SubdomainGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/subdomain">client.workers.subdomains.<a href="./src/resources/workers/subdomains.ts">update</a>({ ...params }) -> SubdomainUpdateResponse</code>
- <code title="delete /accounts/{account_id}/workers/subdomain">client.workers.subdomains.<a href="./src/resources/workers/subdomains.ts">delete</a>({ ...params }) -> void</code>
- <code title="get /accounts/{account_id}/workers/subdomain">client.workers.subdomains.<a href="./src/resources/workers/subdomains.ts">get</a>({ ...params }) -> SubdomainGetResponse</code>

## Observability

### Telemetry

Types:

- <code><a href="./src/resources/workers/observability/telemetry.ts">TelemetryKeysResponse</a></code>
- <code><a href="./src/resources/workers/observability/telemetry.ts">TelemetryQueryResponse</a></code>
- <code><a href="./src/resources/workers/observability/telemetry.ts">TelemetryValuesResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/observability/telemetry/keys">client.workers.observability.telemetry.<a href="./src/resources/workers/observability/telemetry.ts">keys</a>({ ...params }) -> TelemetryKeysResponsesSinglePage</code>
- <code title="post /accounts/{account_id}/workers/observability/telemetry/query">client.workers.observability.telemetry.<a href="./src/resources/workers/observability/telemetry.ts">query</a>({ ...params }) -> TelemetryQueryResponse</code>
- <code title="post /accounts/{account_id}/workers/observability/telemetry/values">client.workers.observability.telemetry.<a href="./src/resources/workers/observability/telemetry.ts">values</a>({ ...params }) -> TelemetryValuesResponsesSinglePage</code>

### Destinations

Types:

- <code><a href="./src/resources/workers/observability/destinations.ts">DestinationCreateResponse</a></code>
- <code><a href="./src/resources/workers/observability/destinations.ts">DestinationUpdateResponse</a></code>
- <code><a href="./src/resources/workers/observability/destinations.ts">DestinationListResponse</a></code>
- <code><a href="./src/resources/workers/observability/destinations.ts">DestinationDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/observability/destinations">client.workers.observability.destinations.<a href="./src/resources/workers/observability/destinations.ts">create</a>({ ...params }) -> DestinationCreateResponse</code>
- <code title="patch /accounts/{account_id}/workers/observability/destinations/{slug}">client.workers.observability.destinations.<a href="./src/resources/workers/observability/destinations.ts">update</a>(slug, { ...params }) -> DestinationUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/observability/destinations">client.workers.observability.destinations.<a href="./src/resources/workers/observability/destinations.ts">list</a>({ ...params }) -> DestinationListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/workers/observability/destinations/{slug}">client.workers.observability.destinations.<a href="./src/resources/workers/observability/destinations.ts">delete</a>(slug, { ...params }) -> DestinationDeleteResponse</code>

### Queries

Types:

- <code><a href="./src/resources/workers/observability/queries.ts">QueryCreateResponse</a></code>
- <code><a href="./src/resources/workers/observability/queries.ts">QueryListResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/observability/queries">client.workers.observability.queries.<a href="./src/resources/workers/observability/queries.ts">create</a>({ ...params }) -> QueryCreateResponse</code>
- <code title="get /accounts/{account_id}/workers/observability/queries">client.workers.observability.queries.<a href="./src/resources/workers/observability/queries.ts">list</a>({ ...params }) -> QueryListResponsesSinglePage</code>
