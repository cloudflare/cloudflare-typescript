# WorkersForPlatforms

## Dispatch

### Namespaces

Types:

- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/namespaces.ts">NamespaceCreateResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/namespaces.ts">NamespaceListResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/namespaces.ts">NamespaceDeleteResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/namespaces.ts">NamespaceGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/dispatch/namespaces">client.workersForPlatforms.dispatch.namespaces.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/namespaces.ts">create</a>({ ...params }) -> NamespaceCreateResponse</code>
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces">client.workersForPlatforms.dispatch.namespaces.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/namespaces.ts">list</a>({ ...params }) -> NamespaceListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}">client.workersForPlatforms.dispatch.namespaces.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/namespaces.ts">delete</a>(dispatchNamespace, { ...params }) -> NamespaceDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}">client.workersForPlatforms.dispatch.namespaces.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/namespaces.ts">get</a>(dispatchNamespace, { ...params }) -> NamespaceGetResponse</code>

#### Scripts

Types:

- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/scripts.ts">Script</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/scripts.ts">ScriptUpdateResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/scripts.ts">ScriptDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}">client.workersForPlatforms.dispatch.namespaces.scripts.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/scripts.ts">update</a>(dispatchNamespace, scriptName, { ...params }) -> ScriptUpdateResponse</code>
- <code title="delete /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}">client.workersForPlatforms.dispatch.namespaces.scripts.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/scripts.ts">delete</a>(dispatchNamespace, scriptName, { ...params }) -> ScriptDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}">client.workersForPlatforms.dispatch.namespaces.scripts.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/scripts.ts">get</a>(dispatchNamespace, scriptName, { ...params }) -> Script</code>

##### AssetUpload

Types:

- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/asset-upload.ts">AssetUploadCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/assets-upload-session">client.workersForPlatforms.dispatch.namespaces.scripts.assetUpload.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/asset-upload.ts">create</a>(dispatchNamespace, scriptName, { ...params }) -> AssetUploadCreateResponse</code>

##### Content

Methods:

- <code title="put /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/content">client.workersForPlatforms.dispatch.namespaces.scripts.content.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/content.ts">update</a>(dispatchNamespace, scriptName, { ...params }) -> Script</code>
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/content">client.workersForPlatforms.dispatch.namespaces.scripts.content.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/content.ts">get</a>(dispatchNamespace, scriptName, { ...params }) -> Response</code>

##### Settings

Types:

- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/settings.ts">SettingEditResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/settings">client.workersForPlatforms.dispatch.namespaces.scripts.settings.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/settings.ts">edit</a>(dispatchNamespace, scriptName, { ...params }) -> SettingEditResponse</code>
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/settings">client.workersForPlatforms.dispatch.namespaces.scripts.settings.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/settings.ts">get</a>(dispatchNamespace, scriptName, { ...params }) -> SettingGetResponse</code>

##### Bindings

Types:

- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/bindings.ts">BindingGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/bindings">client.workersForPlatforms.dispatch.namespaces.scripts.bindings.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/bindings.ts">get</a>(dispatchNamespace, scriptName, { ...params }) -> BindingGetResponsesSinglePage</code>

##### Secrets

Types:

- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/secrets.ts">SecretUpdateResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/secrets.ts">SecretListResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/secrets.ts">SecretDeleteResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/secrets.ts">SecretBulkUpdateResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/secrets.ts">SecretGetResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/secrets">client.workersForPlatforms.dispatch.namespaces.scripts.secrets.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/secrets.ts">update</a>(dispatchNamespace, scriptName, { ...params }) -> SecretUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/secrets">client.workersForPlatforms.dispatch.namespaces.scripts.secrets.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/secrets.ts">list</a>(dispatchNamespace, scriptName, { ...params }) -> SecretListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/secrets/{secret_name}">client.workersForPlatforms.dispatch.namespaces.scripts.secrets.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/secrets.ts">delete</a>(dispatchNamespace, scriptName, secretName, { ...params }) -> SecretDeleteResponse | null</code>
- <code title="patch /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/secrets-bulk">client.workersForPlatforms.dispatch.namespaces.scripts.secrets.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/secrets.ts">bulkUpdate</a>(dispatchNamespace, scriptName, { ...params }) -> SecretBulkUpdateResponse</code>
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/secrets/{secret_name}">client.workersForPlatforms.dispatch.namespaces.scripts.secrets.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/secrets.ts">get</a>(dispatchNamespace, scriptName, secretName, { ...params }) -> SecretGetResponse</code>

##### Tags

Types:

- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/tags.ts">TagUpdateResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/tags.ts">TagListResponse</a></code>
- <code><a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/tags.ts">TagDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/tags">client.workersForPlatforms.dispatch.namespaces.scripts.tags.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/tags.ts">update</a>(dispatchNamespace, scriptName, [ ...body ]) -> TagUpdateResponsesSinglePage</code>
- <code title="get /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/tags">client.workersForPlatforms.dispatch.namespaces.scripts.tags.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/tags.ts">list</a>(dispatchNamespace, scriptName, { ...params }) -> TagListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/tags/{tag}">client.workersForPlatforms.dispatch.namespaces.scripts.tags.<a href="./src/resources/workers-for-platforms/dispatch/namespaces/scripts/tags.ts">delete</a>(dispatchNamespace, scriptName, tag, { ...params }) -> TagDeleteResponse | null</code>
