# Snippets

Types:

- <code><a href="./src/resources/snippets/snippets.ts">SnippetUpdateResponse</a></code>
- <code><a href="./src/resources/snippets/snippets.ts">SnippetListResponse</a></code>
- <code><a href="./src/resources/snippets/snippets.ts">SnippetDeleteResponse</a></code>
- <code><a href="./src/resources/snippets/snippets.ts">SnippetGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/snippets/{snippet_name}">client.snippets.<a href="./src/resources/snippets/snippets.ts">update</a>(snippetName, { ...params }) -> SnippetUpdateResponse</code>
- <code title="get /zones/{zone_id}/snippets">client.snippets.<a href="./src/resources/snippets/snippets.ts">list</a>({ ...params }) -> SnippetListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/snippets/{snippet_name}">client.snippets.<a href="./src/resources/snippets/snippets.ts">delete</a>(snippetName, { ...params }) -> SnippetDeleteResponse | null</code>
- <code title="get /zones/{zone_id}/snippets/{snippet_name}">client.snippets.<a href="./src/resources/snippets/snippets.ts">get</a>(snippetName, { ...params }) -> SnippetGetResponse</code>

## Content

Methods:

- <code title="get /zones/{zone_id}/snippets/{snippet_name}/content">client.snippets.content.<a href="./src/resources/snippets/content.ts">get</a>(snippetName, { ...params }) -> Response</code>

## Rules

Types:

- <code><a href="./src/resources/snippets/rules.ts">RuleUpdateResponse</a></code>
- <code><a href="./src/resources/snippets/rules.ts">RuleListResponse</a></code>
- <code><a href="./src/resources/snippets/rules.ts">RuleDeleteResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/snippets/snippet_rules">client.snippets.rules.<a href="./src/resources/snippets/rules.ts">update</a>({ ...params }) -> RuleUpdateResponse</code>
- <code title="get /zones/{zone_id}/snippets/snippet_rules">client.snippets.rules.<a href="./src/resources/snippets/rules.ts">list</a>({ ...params }) -> RuleListResponse</code>
- <code title="delete /zones/{zone_id}/snippets/snippet_rules">client.snippets.rules.<a href="./src/resources/snippets/rules.ts">delete</a>({ ...params }) -> RuleDeleteResponse</code>
