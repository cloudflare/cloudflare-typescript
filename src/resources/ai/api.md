# AI

Types:

- <code><a href="./src/resources/ai/ai.ts">AIRunResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/ai/run/{model_name}">client.ai.<a href="./src/resources/ai/ai.ts">run</a>(modelName, { ...params }) -> AIRunResponse</code>

## Finetunes

Types:

- <code><a href="./src/resources/ai/finetunes/finetunes.ts">FinetuneCreateResponse</a></code>
- <code><a href="./src/resources/ai/finetunes/finetunes.ts">FinetuneListResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/ai/finetunes">client.ai.finetunes.<a href="./src/resources/ai/finetunes/finetunes.ts">create</a>({ ...params }) -> FinetuneCreateResponse</code>
- <code title="get /accounts/{account_id}/ai/finetunes">client.ai.finetunes.<a href="./src/resources/ai/finetunes/finetunes.ts">list</a>({ ...params }) -> FinetuneListResponse</code>

### Assets

Types:

- <code><a href="./src/resources/ai/finetunes/assets.ts">AssetCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/ai/finetunes/{finetune_id}/finetune-assets">client.ai.finetunes.assets.<a href="./src/resources/ai/finetunes/assets.ts">create</a>(finetuneId, { ...params }) -> AssetCreateResponse</code>

### Public

Types:

- <code><a href="./src/resources/ai/finetunes/public.ts">PublicListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/ai/finetunes/public">client.ai.finetunes.public.<a href="./src/resources/ai/finetunes/public.ts">list</a>({ ...params }) -> PublicListResponsesSinglePage</code>

## Authors

Types:

- <code><a href="./src/resources/ai/authors.ts">AuthorListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/ai/authors/search">client.ai.authors.<a href="./src/resources/ai/authors.ts">list</a>({ ...params }) -> AuthorListResponsesSinglePage</code>

## Tasks

Types:

- <code><a href="./src/resources/ai/tasks.ts">TaskListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/ai/tasks/search">client.ai.tasks.<a href="./src/resources/ai/tasks.ts">list</a>({ ...params }) -> TaskListResponsesSinglePage</code>

## Models

Types:

- <code><a href="./src/resources/ai/models/models.ts">ModelListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/ai/models/search">client.ai.models.<a href="./src/resources/ai/models/models.ts">list</a>({ ...params }) -> ModelListResponsesV4PagePaginationArray</code>

### Schema

Types:

- <code><a href="./src/resources/ai/models/schema.ts">SchemaGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/ai/models/schema">client.ai.models.schema.<a href="./src/resources/ai/models/schema.ts">get</a>({ ...params }) -> SchemaGetResponse</code>

## ToMarkdown

Types:

- <code><a href="./src/resources/ai/to-markdown.ts">ToMarkdownSupportedResponse</a></code>
- <code><a href="./src/resources/ai/to-markdown.ts">ToMarkdownTransformResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/ai/tomarkdown/supported">client.ai.toMarkdown.<a href="./src/resources/ai/to-markdown.ts">supported</a>({ ...params }) -> ToMarkdownSupportedResponsesSinglePage</code>
- <code title="post /accounts/{account_id}/ai/tomarkdown">client.ai.toMarkdown.<a href="./src/resources/ai/to-markdown.ts">transform</a>({ ...params }) -> ToMarkdownTransformResponsesSinglePage</code>
