# Pipelines

Types:

- <code><a href="./src/resources/pipelines/pipelines.ts">PipelineCreateResponse</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">PipelineUpdateResponse</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">PipelineListResponse</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">PipelineCreateV1Response</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">PipelineDeleteV1Response</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">PipelineGetResponse</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">PipelineGetV1Response</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">PipelineListV1Response</a></code>
- <code><a href="./src/resources/pipelines/pipelines.ts">PipelineValidateSqlResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pipelines">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">create</a>({ ...params }) -> PipelineCreateResponse</code>
- <code title="put /accounts/{account_id}/pipelines/{pipeline_name}">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">update</a>(pipelineName, { ...params }) -> PipelineUpdateResponse</code>
- <code title="get /accounts/{account_id}/pipelines">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">list</a>({ ...params }) -> PipelineListResponse</code>
- <code title="delete /accounts/{account_id}/pipelines/{pipeline_name}">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">delete</a>(pipelineName, { ...params }) -> void</code>
- <code title="post /accounts/{account_id}/pipelines/v1/pipelines">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">createV1</a>({ ...params }) -> PipelineCreateV1Response</code>
- <code title="delete /accounts/{account_id}/pipelines/v1/pipelines/{pipeline_id}">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">deleteV1</a>(pipelineId, { ...params }) -> PipelineDeleteV1Response</code>
- <code title="get /accounts/{account_id}/pipelines/{pipeline_name}">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">get</a>(pipelineName, { ...params }) -> PipelineGetResponse</code>
- <code title="get /accounts/{account_id}/pipelines/v1/pipelines/{pipeline_id}">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">getV1</a>(pipelineId, { ...params }) -> PipelineGetV1Response</code>
- <code title="get /accounts/{account_id}/pipelines/v1/pipelines">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">listV1</a>({ ...params }) -> PipelineListV1ResponsesV4PagePaginationArray</code>
- <code title="post /accounts/{account_id}/pipelines/v1/validate_sql">client.pipelines.<a href="./src/resources/pipelines/pipelines.ts">validateSql</a>({ ...params }) -> PipelineValidateSqlResponse</code>

## Sinks

Types:

- <code><a href="./src/resources/pipelines/sinks.ts">SinkCreateResponse</a></code>
- <code><a href="./src/resources/pipelines/sinks.ts">SinkListResponse</a></code>
- <code><a href="./src/resources/pipelines/sinks.ts">SinkDeleteResponse</a></code>
- <code><a href="./src/resources/pipelines/sinks.ts">SinkGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pipelines/v1/sinks">client.pipelines.sinks.<a href="./src/resources/pipelines/sinks.ts">create</a>({ ...params }) -> SinkCreateResponse</code>
- <code title="get /accounts/{account_id}/pipelines/v1/sinks">client.pipelines.sinks.<a href="./src/resources/pipelines/sinks.ts">list</a>({ ...params }) -> SinkListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/pipelines/v1/sinks/{sink_id}">client.pipelines.sinks.<a href="./src/resources/pipelines/sinks.ts">delete</a>(sinkId, { ...params }) -> SinkDeleteResponse</code>
- <code title="get /accounts/{account_id}/pipelines/v1/sinks/{sink_id}">client.pipelines.sinks.<a href="./src/resources/pipelines/sinks.ts">get</a>(sinkId, { ...params }) -> SinkGetResponse</code>

## Streams

Types:

- <code><a href="./src/resources/pipelines/streams.ts">StreamCreateResponse</a></code>
- <code><a href="./src/resources/pipelines/streams.ts">StreamUpdateResponse</a></code>
- <code><a href="./src/resources/pipelines/streams.ts">StreamListResponse</a></code>
- <code><a href="./src/resources/pipelines/streams.ts">StreamDeleteResponse</a></code>
- <code><a href="./src/resources/pipelines/streams.ts">StreamGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/pipelines/v1/streams">client.pipelines.streams.<a href="./src/resources/pipelines/streams.ts">create</a>({ ...params }) -> StreamCreateResponse</code>
- <code title="patch /accounts/{account_id}/pipelines/v1/streams/{stream_id}">client.pipelines.streams.<a href="./src/resources/pipelines/streams.ts">update</a>(streamId, { ...params }) -> StreamUpdateResponse</code>
- <code title="get /accounts/{account_id}/pipelines/v1/streams">client.pipelines.streams.<a href="./src/resources/pipelines/streams.ts">list</a>({ ...params }) -> StreamListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/pipelines/v1/streams/{stream_id}">client.pipelines.streams.<a href="./src/resources/pipelines/streams.ts">delete</a>(streamId, { ...params }) -> StreamDeleteResponse</code>
- <code title="get /accounts/{account_id}/pipelines/v1/streams/{stream_id}">client.pipelines.streams.<a href="./src/resources/pipelines/streams.ts">get</a>(streamId, { ...params }) -> StreamGetResponse</code>
