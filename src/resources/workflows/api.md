# Workflows

Types:

- <code><a href="./src/resources/workflows/workflows.ts">WorkflowUpdateResponse</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowListResponse</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowDeleteResponse</a></code>
- <code><a href="./src/resources/workflows/workflows.ts">WorkflowGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workflows/{workflow_name}">client.workflows.<a href="./src/resources/workflows/workflows.ts">update</a>(workflowName, { ...params }) -> WorkflowUpdateResponse</code>
- <code title="get /accounts/{account_id}/workflows">client.workflows.<a href="./src/resources/workflows/workflows.ts">list</a>({ ...params }) -> WorkflowListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/workflows/{workflow_name}">client.workflows.<a href="./src/resources/workflows/workflows.ts">delete</a>(workflowName, { ...params }) -> WorkflowDeleteResponse</code>
- <code title="get /accounts/{account_id}/workflows/{workflow_name}">client.workflows.<a href="./src/resources/workflows/workflows.ts">get</a>(workflowName, { ...params }) -> WorkflowGetResponse</code>

## Instances

Types:

- <code><a href="./src/resources/workflows/instances/instances.ts">InstanceCreateResponse</a></code>
- <code><a href="./src/resources/workflows/instances/instances.ts">InstanceListResponse</a></code>
- <code><a href="./src/resources/workflows/instances/instances.ts">InstanceBulkResponse</a></code>
- <code><a href="./src/resources/workflows/instances/instances.ts">InstanceGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workflows/{workflow_name}/instances">client.workflows.instances.<a href="./src/resources/workflows/instances/instances.ts">create</a>(workflowName, { ...params }) -> InstanceCreateResponse</code>
- <code title="get /accounts/{account_id}/workflows/{workflow_name}/instances">client.workflows.instances.<a href="./src/resources/workflows/instances/instances.ts">list</a>(workflowName, { ...params }) -> InstanceListResponsesV4PagePaginationArray</code>
- <code title="post /accounts/{account_id}/workflows/{workflow_name}/instances/batch">client.workflows.instances.<a href="./src/resources/workflows/instances/instances.ts">bulk</a>(workflowName, [ ...body ]) -> InstanceBulkResponsesSinglePage</code>
- <code title="get /accounts/{account_id}/workflows/{workflow_name}/instances/{instance_id}">client.workflows.instances.<a href="./src/resources/workflows/instances/instances.ts">get</a>(workflowName, instanceId, { ...params }) -> InstanceGetResponse</code>

### Status

Types:

- <code><a href="./src/resources/workflows/instances/status.ts">StatusEditResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/workflows/{workflow_name}/instances/{instance_id}/status">client.workflows.instances.status.<a href="./src/resources/workflows/instances/status.ts">edit</a>(workflowName, instanceId, { ...params }) -> StatusEditResponse</code>

### Events

Types:

- <code><a href="./src/resources/workflows/instances/events.ts">EventCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workflows/{workflow_name}/instances/{instance_id}/events/{event_type}">client.workflows.instances.events.<a href="./src/resources/workflows/instances/events.ts">create</a>(workflowName, instanceId, eventType, { ...params }) -> EventCreateResponse</code>

## Versions

Types:

- <code><a href="./src/resources/workflows/versions.ts">VersionListResponse</a></code>
- <code><a href="./src/resources/workflows/versions.ts">VersionGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/workflows/{workflow_name}/versions">client.workflows.versions.<a href="./src/resources/workflows/versions.ts">list</a>(workflowName, { ...params }) -> VersionListResponsesV4PagePaginationArray</code>
- <code title="get /accounts/{account_id}/workflows/{workflow_name}/versions/{version_id}">client.workflows.versions.<a href="./src/resources/workflows/versions.ts">get</a>(workflowName, versionId, { ...params }) -> VersionGetResponse</code>
