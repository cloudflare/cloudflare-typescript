# Spectrum

Types:

- <code><a href="./src/resources/spectrum/spectrum.ts">DNS</a></code>
- <code><a href="./src/resources/spectrum/spectrum.ts">EdgeIPs</a></code>
- <code><a href="./src/resources/spectrum/spectrum.ts">OriginDNS</a></code>
- <code><a href="./src/resources/spectrum/spectrum.ts">OriginPort</a></code>

## Analytics

### Aggregates

#### Currents

Types:

- <code><a href="./src/resources/spectrum/analytics/aggregates/currents.ts">CurrentGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/spectrum/analytics/aggregate/current">client.spectrum.analytics.aggregates.currents.<a href="./src/resources/spectrum/analytics/aggregates/currents.ts">get</a>({ ...params }) -> CurrentGetResponse</code>

### Events

Types:

- <code><a href="./src/resources/spectrum/analytics/events/events.ts">Dimension</a></code>

#### Bytimes

Types:

- <code><a href="./src/resources/spectrum/analytics/events/bytimes.ts">BytimeGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/spectrum/analytics/events/bytime">client.spectrum.analytics.events.bytimes.<a href="./src/resources/spectrum/analytics/events/bytimes.ts">get</a>({ ...params }) -> BytimeGetResponse</code>

#### Summaries

Types:

- <code><a href="./src/resources/spectrum/analytics/events/summaries.ts">SummaryGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/spectrum/analytics/events/summary">client.spectrum.analytics.events.summaries.<a href="./src/resources/spectrum/analytics/events/summaries.ts">get</a>({ ...params }) -> SummaryGetResponse</code>

## Apps

Types:

- <code><a href="./src/resources/spectrum/apps.ts">AppCreateResponse</a></code>
- <code><a href="./src/resources/spectrum/apps.ts">AppUpdateResponse</a></code>
- <code><a href="./src/resources/spectrum/apps.ts">AppListResponse</a></code>
- <code><a href="./src/resources/spectrum/apps.ts">AppDeleteResponse</a></code>
- <code><a href="./src/resources/spectrum/apps.ts">AppGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/spectrum/apps">client.spectrum.apps.<a href="./src/resources/spectrum/apps.ts">create</a>({ ...params }) -> AppCreateResponse</code>
- <code title="put /zones/{zone_id}/spectrum/apps/{app_id}">client.spectrum.apps.<a href="./src/resources/spectrum/apps.ts">update</a>(appId, { ...params }) -> AppUpdateResponse</code>
- <code title="get /zones/{zone_id}/spectrum/apps">client.spectrum.apps.<a href="./src/resources/spectrum/apps.ts">list</a>({ ...params }) -> AppListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/spectrum/apps/{app_id}">client.spectrum.apps.<a href="./src/resources/spectrum/apps.ts">delete</a>(appId, { ...params }) -> AppDeleteResponse | null</code>
- <code title="get /zones/{zone_id}/spectrum/apps/{app_id}">client.spectrum.apps.<a href="./src/resources/spectrum/apps.ts">get</a>(appId, { ...params }) -> AppGetResponse</code>
