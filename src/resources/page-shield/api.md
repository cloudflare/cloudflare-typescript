# PageShield

Types:

- <code><a href="./src/resources/page-shield/page-shield.ts">Setting</a></code>
- <code><a href="./src/resources/page-shield/page-shield.ts">PageShieldUpdateResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/page_shield">client.pageShield.<a href="./src/resources/page-shield/page-shield.ts">update</a>({ ...params }) -> PageShieldUpdateResponse</code>
- <code title="get /zones/{zone_id}/page_shield">client.pageShield.<a href="./src/resources/page-shield/page-shield.ts">get</a>({ ...params }) -> Setting | null</code>

## Policies

Types:

- <code><a href="./src/resources/page-shield/policies.ts">Policy</a></code>
- <code><a href="./src/resources/page-shield/policies.ts">PolicyCreateResponse</a></code>
- <code><a href="./src/resources/page-shield/policies.ts">PolicyUpdateResponse</a></code>
- <code><a href="./src/resources/page-shield/policies.ts">PolicyListResponse</a></code>
- <code><a href="./src/resources/page-shield/policies.ts">PolicyGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/page_shield/policies">client.pageShield.policies.<a href="./src/resources/page-shield/policies.ts">create</a>({ ...params }) -> PolicyCreateResponse | null</code>
- <code title="put /zones/{zone_id}/page_shield/policies/{policy_id}">client.pageShield.policies.<a href="./src/resources/page-shield/policies.ts">update</a>(policyId, { ...params }) -> PolicyUpdateResponse | null</code>
- <code title="get /zones/{zone_id}/page_shield/policies">client.pageShield.policies.<a href="./src/resources/page-shield/policies.ts">list</a>({ ...params }) -> PolicyListResponsesSinglePage</code>
- <code title="delete /zones/{zone_id}/page_shield/policies/{policy_id}">client.pageShield.policies.<a href="./src/resources/page-shield/policies.ts">delete</a>(policyId, { ...params }) -> void</code>
- <code title="get /zones/{zone_id}/page_shield/policies/{policy_id}">client.pageShield.policies.<a href="./src/resources/page-shield/policies.ts">get</a>(policyId, { ...params }) -> PolicyGetResponse | null</code>

## Connections

Types:

- <code><a href="./src/resources/page-shield/connections.ts">Connection</a></code>

Methods:

- <code title="get /zones/{zone_id}/page_shield/connections">client.pageShield.connections.<a href="./src/resources/page-shield/connections.ts">list</a>({ ...params }) -> ConnectionsSinglePage</code>
- <code title="get /zones/{zone_id}/page_shield/connections/{connection_id}">client.pageShield.connections.<a href="./src/resources/page-shield/connections.ts">get</a>(connectionId, { ...params }) -> Connection | null</code>

## Scripts

Types:

- <code><a href="./src/resources/page-shield/scripts.ts">Script</a></code>
- <code><a href="./src/resources/page-shield/scripts.ts">ScriptGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/page_shield/scripts">client.pageShield.scripts.<a href="./src/resources/page-shield/scripts.ts">list</a>({ ...params }) -> ScriptsSinglePage</code>
- <code title="get /zones/{zone_id}/page_shield/scripts/{script_id}">client.pageShield.scripts.<a href="./src/resources/page-shield/scripts.ts">get</a>(scriptId, { ...params }) -> ScriptGetResponse | null</code>

## Cookies

Types:

- <code><a href="./src/resources/page-shield/cookies.ts">CookieListResponse</a></code>
- <code><a href="./src/resources/page-shield/cookies.ts">CookieGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/page_shield/cookies">client.pageShield.cookies.<a href="./src/resources/page-shield/cookies.ts">list</a>({ ...params }) -> CookieListResponsesSinglePage</code>
- <code title="get /zones/{zone_id}/page_shield/cookies/{cookie_id}">client.pageShield.cookies.<a href="./src/resources/page-shield/cookies.ts">get</a>(cookieId, { ...params }) -> CookieGetResponse | null</code>
