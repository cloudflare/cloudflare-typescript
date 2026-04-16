# Healthchecks

Types:

- <code><a href="./src/resources/healthchecks/healthchecks.ts">CheckRegion</a></code>
- <code><a href="./src/resources/healthchecks/healthchecks.ts">Healthcheck</a></code>
- <code><a href="./src/resources/healthchecks/healthchecks.ts">HTTPConfiguration</a></code>
- <code><a href="./src/resources/healthchecks/healthchecks.ts">QueryHealthcheck</a></code>
- <code><a href="./src/resources/healthchecks/healthchecks.ts">TCPConfiguration</a></code>
- <code><a href="./src/resources/healthchecks/healthchecks.ts">HealthcheckDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/healthchecks">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">create</a>({ ...params }) -> Healthcheck</code>
- <code title="put /zones/{zone_id}/healthchecks/{healthcheck_id}">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">update</a>(healthcheckId, { ...params }) -> Healthcheck</code>
- <code title="get /zones/{zone_id}/healthchecks">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">list</a>({ ...params }) -> HealthchecksV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/healthchecks/{healthcheck_id}">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">delete</a>(healthcheckId, { ...params }) -> HealthcheckDeleteResponse</code>
- <code title="patch /zones/{zone_id}/healthchecks/{healthcheck_id}">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">edit</a>(healthcheckId, { ...params }) -> Healthcheck</code>
- <code title="get /zones/{zone_id}/healthchecks/{healthcheck_id}">client.healthchecks.<a href="./src/resources/healthchecks/healthchecks.ts">get</a>(healthcheckId, { ...params }) -> Healthcheck</code>

## Previews

Types:

- <code><a href="./src/resources/healthchecks/previews.ts">PreviewDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/healthchecks/preview">client.healthchecks.previews.<a href="./src/resources/healthchecks/previews.ts">create</a>({ ...params }) -> Healthcheck</code>
- <code title="delete /zones/{zone_id}/healthchecks/preview/{healthcheck_id}">client.healthchecks.previews.<a href="./src/resources/healthchecks/previews.ts">delete</a>(healthcheckId, { ...params }) -> PreviewDeleteResponse</code>
- <code title="get /zones/{zone_id}/healthchecks/preview/{healthcheck_id}">client.healthchecks.previews.<a href="./src/resources/healthchecks/previews.ts">get</a>(healthcheckId, { ...params }) -> Healthcheck</code>
