# Pipelines

Types:

- <code><a href="./src/resources/pipelines.ts">PipelineCreateResponse</a></code>
- <code><a href="./src/resources/pipelines.ts">PipelineUpdateResponse</a></code>
- <code><a href="./src/resources/pipelines.ts">PipelineListResponse</a></code>
- <code><a href="./src/resources/pipelines.ts">PipelineGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pipelines">client.pipelines.<a href="./src/resources/pipelines.ts">create</a>({ ...params }) -> PipelineCreateResponse</code>
- <code title="put /accounts/{account_id}/pipelines/{pipeline_name}">client.pipelines.<a href="./src/resources/pipelines.ts">update</a>(pipelineName, { ...params }) -> PipelineUpdateResponse</code>
- <code title="get /accounts/{account_id}/pipelines">client.pipelines.<a href="./src/resources/pipelines.ts">list</a>({ ...params }) -> PipelineListResponse</code>
- <code title="delete /accounts/{account_id}/pipelines/{pipeline_name}">client.pipelines.<a href="./src/resources/pipelines.ts">delete</a>(pipelineName, { ...params }) -> void</code>
- <code title="get /accounts/{account_id}/pipelines/{pipeline_name}">client.pipelines.<a href="./src/resources/pipelines.ts">get</a>(pipelineName, { ...params }) -> PipelineGetResponse</code>
