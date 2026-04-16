# PageRules

Types:

- <code><a href="./src/resources/page-rules.ts">PageRule</a></code>
- <code><a href="./src/resources/page-rules.ts">Target</a></code>
- <code><a href="./src/resources/page-rules.ts">PageRuleListResponse</a></code>
- <code><a href="./src/resources/page-rules.ts">PageRuleDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/pagerules">client.pageRules.<a href="./src/resources/page-rules.ts">create</a>({ ...params }) -> PageRule</code>
- <code title="put /zones/{zone_id}/pagerules/{pagerule_id}">client.pageRules.<a href="./src/resources/page-rules.ts">update</a>(pageruleId, { ...params }) -> PageRule</code>
- <code title="get /zones/{zone_id}/pagerules">client.pageRules.<a href="./src/resources/page-rules.ts">list</a>({ ...params }) -> PageRuleListResponse</code>
- <code title="delete /zones/{zone_id}/pagerules/{pagerule_id}">client.pageRules.<a href="./src/resources/page-rules.ts">delete</a>(pageruleId, { ...params }) -> PageRuleDeleteResponse | null</code>
- <code title="patch /zones/{zone_id}/pagerules/{pagerule_id}">client.pageRules.<a href="./src/resources/page-rules.ts">edit</a>(pageruleId, { ...params }) -> PageRule</code>
- <code title="get /zones/{zone_id}/pagerules/{pagerule_id}">client.pageRules.<a href="./src/resources/page-rules.ts">get</a>(pageruleId, { ...params }) -> PageRule</code>
