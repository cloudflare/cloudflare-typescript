# Radar

## AgentReadiness

Types:

- <code><a href="./src/resources/radar/agent-readiness.ts">AgentReadinessSummaryResponse</a></code>

Methods:

- <code title="get /radar/agent_readiness/summary/{dimension}">client.radar.agentReadiness.<a href="./src/resources/radar/agent-readiness.ts">summary</a>(dimension, { ...params }) -> AgentReadinessSummaryResponse</code>

## AI

### ToMarkdown

Types:

- <code><a href="./src/resources/radar/ai/to-markdown.ts">ToMarkdownCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/ai/tomarkdown">client.radar.ai.toMarkdown.<a href="./src/resources/radar/ai/to-markdown.ts">create</a>({ ...params }) -> ToMarkdownCreateResponsesSinglePage</code>

### Inference

Types:

- <code><a href="./src/resources/radar/ai/inference/inference.ts">InferenceSummaryV2Response</a></code>
- <code><a href="./src/resources/radar/ai/inference/inference.ts">InferenceTimeseriesGroupsV2Response</a></code>

Methods:

- <code title="get /radar/ai/inference/summary/{dimension}">client.radar.ai.inference.<a href="./src/resources/radar/ai/inference/inference.ts">summaryV2</a>(dimension, { ...params }) -> InferenceSummaryV2Response</code>
- <code title="get /radar/ai/inference/timeseries_groups/{dimension}">client.radar.ai.inference.<a href="./src/resources/radar/ai/inference/inference.ts">timeseriesGroupsV2</a>(dimension, { ...params }) -> InferenceTimeseriesGroupsV2Response</code>

#### Summary

Types:

- <code><a href="./src/resources/radar/ai/inference/summary.ts">SummaryModelResponse</a></code>
- <code><a href="./src/resources/radar/ai/inference/summary.ts">SummaryTaskResponse</a></code>

Methods:

- <code title="get /radar/ai/inference/summary/model">client.radar.ai.inference.summary.<a href="./src/resources/radar/ai/inference/summary.ts">model</a>({ ...params }) -> SummaryModelResponse</code>
- <code title="get /radar/ai/inference/summary/task">client.radar.ai.inference.summary.<a href="./src/resources/radar/ai/inference/summary.ts">task</a>({ ...params }) -> SummaryTaskResponse</code>

#### TimeseriesGroups

##### Summary

Types:

- <code><a href="./src/resources/radar/ai/inference/timeseries-groups/summary.ts">SummaryModelResponse</a></code>
- <code><a href="./src/resources/radar/ai/inference/timeseries-groups/summary.ts">SummaryTaskResponse</a></code>

Methods:

- <code title="get /radar/ai/inference/timeseries_groups/model">client.radar.ai.inference.timeseriesGroups.summary.<a href="./src/resources/radar/ai/inference/timeseries-groups/summary.ts">model</a>({ ...params }) -> SummaryModelResponse</code>
- <code title="get /radar/ai/inference/timeseries_groups/task">client.radar.ai.inference.timeseriesGroups.summary.<a href="./src/resources/radar/ai/inference/timeseries-groups/summary.ts">task</a>({ ...params }) -> SummaryTaskResponse</code>

### Bots

Types:

- <code><a href="./src/resources/radar/ai/bots/bots.ts">BotSummaryV2Response</a></code>
- <code><a href="./src/resources/radar/ai/bots/bots.ts">BotTimeseriesResponse</a></code>
- <code><a href="./src/resources/radar/ai/bots/bots.ts">BotTimeseriesGroupsResponse</a></code>

Methods:

- <code title="get /radar/ai/bots/summary/{dimension}">client.radar.ai.bots.<a href="./src/resources/radar/ai/bots/bots.ts">summaryV2</a>(dimension, { ...params }) -> BotSummaryV2Response</code>
- <code title="get /radar/ai/bots/timeseries">client.radar.ai.bots.<a href="./src/resources/radar/ai/bots/bots.ts">timeseries</a>({ ...params }) -> BotTimeseriesResponse</code>
- <code title="get /radar/ai/bots/timeseries_groups/{dimension}">client.radar.ai.bots.<a href="./src/resources/radar/ai/bots/bots.ts">timeseriesGroups</a>(dimension, { ...params }) -> BotTimeseriesGroupsResponse</code>

#### Summary

Types:

- <code><a href="./src/resources/radar/ai/bots/summary.ts">SummaryUserAgentResponse</a></code>

Methods:

- <code title="get /radar/ai/bots/summary/user_agent">client.radar.ai.bots.summary.<a href="./src/resources/radar/ai/bots/summary.ts">userAgent</a>({ ...params }) -> SummaryUserAgentResponse</code>

### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/ai/timeseries-groups.ts">TimeseriesGroupSummaryResponse</a></code>
- <code><a href="./src/resources/radar/ai/timeseries-groups.ts">TimeseriesGroupTimeseriesResponse</a></code>
- <code><a href="./src/resources/radar/ai/timeseries-groups.ts">TimeseriesGroupTimeseriesGroupsResponse</a></code>
- <code><a href="./src/resources/radar/ai/timeseries-groups.ts">TimeseriesGroupUserAgentResponse</a></code>

Methods:

- <code title="get /radar/ai/bots/summary/{dimension}">client.radar.ai.timeseriesGroups.<a href="./src/resources/radar/ai/timeseries-groups.ts">summary</a>(dimension, { ...params }) -> TimeseriesGroupSummaryResponse</code>
- <code title="get /radar/ai/bots/timeseries">client.radar.ai.timeseriesGroups.<a href="./src/resources/radar/ai/timeseries-groups.ts">timeseries</a>({ ...params }) -> TimeseriesGroupTimeseriesResponse</code>
- <code title="get /radar/ai/bots/timeseries_groups/{dimension}">client.radar.ai.timeseriesGroups.<a href="./src/resources/radar/ai/timeseries-groups.ts">timeseriesGroups</a>(dimension, { ...params }) -> TimeseriesGroupTimeseriesGroupsResponse</code>
- <code title="get /radar/ai/bots/timeseries_groups/user_agent">client.radar.ai.timeseriesGroups.<a href="./src/resources/radar/ai/timeseries-groups.ts">userAgent</a>({ ...params }) -> TimeseriesGroupUserAgentResponse</code>

### MarkdownForAgents

Types:

- <code><a href="./src/resources/radar/ai/markdown-for-agents.ts">MarkdownForAgentSummaryResponse</a></code>
- <code><a href="./src/resources/radar/ai/markdown-for-agents.ts">MarkdownForAgentTimeseriesResponse</a></code>

Methods:

- <code title="get /radar/ai/markdown_for_agents/summary">client.radar.ai.markdownForAgents.<a href="./src/resources/radar/ai/markdown-for-agents.ts">summary</a>({ ...params }) -> MarkdownForAgentSummaryResponse</code>
- <code title="get /radar/ai/markdown_for_agents/timeseries">client.radar.ai.markdownForAgents.<a href="./src/resources/radar/ai/markdown-for-agents.ts">timeseries</a>({ ...params }) -> MarkdownForAgentTimeseriesResponse</code>

## CT

Types:

- <code><a href="./src/resources/radar/ct/ct.ts">CTSummaryResponse</a></code>
- <code><a href="./src/resources/radar/ct/ct.ts">CTTimeseriesResponse</a></code>
- <code><a href="./src/resources/radar/ct/ct.ts">CTTimeseriesGroupsResponse</a></code>

Methods:

- <code title="get /radar/ct/summary/{dimension}">client.radar.ct.<a href="./src/resources/radar/ct/ct.ts">summary</a>(dimension, { ...params }) -> CTSummaryResponse</code>
- <code title="get /radar/ct/timeseries">client.radar.ct.<a href="./src/resources/radar/ct/ct.ts">timeseries</a>({ ...params }) -> CTTimeseriesResponse</code>
- <code title="get /radar/ct/timeseries_groups/{dimension}">client.radar.ct.<a href="./src/resources/radar/ct/ct.ts">timeseriesGroups</a>(dimension, { ...params }) -> CTTimeseriesGroupsResponse</code>

### Authorities

Types:

- <code><a href="./src/resources/radar/ct/authorities.ts">AuthorityListResponse</a></code>
- <code><a href="./src/resources/radar/ct/authorities.ts">AuthorityGetResponse</a></code>

Methods:

- <code title="get /radar/ct/authorities">client.radar.ct.authorities.<a href="./src/resources/radar/ct/authorities.ts">list</a>({ ...params }) -> AuthorityListResponse</code>
- <code title="get /radar/ct/authorities/{ca_slug}">client.radar.ct.authorities.<a href="./src/resources/radar/ct/authorities.ts">get</a>(caSlug, { ...params }) -> AuthorityGetResponse</code>

### Logs

Types:

- <code><a href="./src/resources/radar/ct/logs.ts">LogListResponse</a></code>
- <code><a href="./src/resources/radar/ct/logs.ts">LogGetResponse</a></code>

Methods:

- <code title="get /radar/ct/logs">client.radar.ct.logs.<a href="./src/resources/radar/ct/logs.ts">list</a>({ ...params }) -> LogListResponse</code>
- <code title="get /radar/ct/logs/{log_slug}">client.radar.ct.logs.<a href="./src/resources/radar/ct/logs.ts">get</a>(logSlug, { ...params }) -> LogGetResponse</code>

## Annotations

Types:

- <code><a href="./src/resources/radar/annotations/annotations.ts">AnnotationListResponse</a></code>

Methods:

- <code title="get /radar/annotations">client.radar.annotations.<a href="./src/resources/radar/annotations/annotations.ts">list</a>({ ...params }) -> AnnotationListResponse</code>

### Outages

Types:

- <code><a href="./src/resources/radar/annotations/outages.ts">OutageGetResponse</a></code>
- <code><a href="./src/resources/radar/annotations/outages.ts">OutageLocationsResponse</a></code>

Methods:

- <code title="get /radar/annotations/outages">client.radar.annotations.outages.<a href="./src/resources/radar/annotations/outages.ts">get</a>({ ...params }) -> OutageGetResponse</code>
- <code title="get /radar/annotations/outages/locations">client.radar.annotations.outages.<a href="./src/resources/radar/annotations/outages.ts">locations</a>({ ...params }) -> OutageLocationsResponse</code>

## BGP

Types:

- <code><a href="./src/resources/radar/bgp/bgp.ts">BGPTimeseriesResponse</a></code>

Methods:

- <code title="get /radar/bgp/timeseries">client.radar.bgp.<a href="./src/resources/radar/bgp/bgp.ts">timeseries</a>({ ...params }) -> BGPTimeseriesResponse</code>

### Leaks

#### Events

Types:

- <code><a href="./src/resources/radar/bgp/leaks/events.ts">EventListResponse</a></code>

Methods:

- <code title="get /radar/bgp/leaks/events">client.radar.bgp.leaks.events.<a href="./src/resources/radar/bgp/leaks/events.ts">list</a>({ ...params }) -> EventListResponsesV4PagePagination</code>

### Top

Types:

- <code><a href="./src/resources/radar/bgp/top/top.ts">TopPrefixesResponse</a></code>

Methods:

- <code title="get /radar/bgp/top/prefixes">client.radar.bgp.top.<a href="./src/resources/radar/bgp/top/top.ts">prefixes</a>({ ...params }) -> TopPrefixesResponse</code>

#### Ases

Types:

- <code><a href="./src/resources/radar/bgp/top/ases.ts">AseGetResponse</a></code>
- <code><a href="./src/resources/radar/bgp/top/ases.ts">AsePrefixesResponse</a></code>

Methods:

- <code title="get /radar/bgp/top/ases">client.radar.bgp.top.ases.<a href="./src/resources/radar/bgp/top/ases.ts">get</a>({ ...params }) -> AseGetResponse</code>
- <code title="get /radar/bgp/top/ases/prefixes">client.radar.bgp.top.ases.<a href="./src/resources/radar/bgp/top/ases.ts">prefixes</a>({ ...params }) -> AsePrefixesResponse</code>

### Hijacks

#### Events

Types:

- <code><a href="./src/resources/radar/bgp/hijacks/events.ts">EventListResponse</a></code>

Methods:

- <code title="get /radar/bgp/hijacks/events">client.radar.bgp.hijacks.events.<a href="./src/resources/radar/bgp/hijacks/events.ts">list</a>({ ...params }) -> EventListResponsesV4PagePagination</code>

### Routes

Types:

- <code><a href="./src/resources/radar/bgp/routes.ts">RouteAsesResponse</a></code>
- <code><a href="./src/resources/radar/bgp/routes.ts">RouteMoasResponse</a></code>
- <code><a href="./src/resources/radar/bgp/routes.ts">RoutePfx2asResponse</a></code>
- <code><a href="./src/resources/radar/bgp/routes.ts">RouteRealtimeResponse</a></code>
- <code><a href="./src/resources/radar/bgp/routes.ts">RouteStatsResponse</a></code>

Methods:

- <code title="get /radar/bgp/routes/ases">client.radar.bgp.routes.<a href="./src/resources/radar/bgp/routes.ts">ases</a>({ ...params }) -> RouteAsesResponse</code>
- <code title="get /radar/bgp/routes/moas">client.radar.bgp.routes.<a href="./src/resources/radar/bgp/routes.ts">moas</a>({ ...params }) -> RouteMoasResponse</code>
- <code title="get /radar/bgp/routes/pfx2as">client.radar.bgp.routes.<a href="./src/resources/radar/bgp/routes.ts">pfx2as</a>({ ...params }) -> RoutePfx2asResponse</code>
- <code title="get /radar/bgp/routes/realtime">client.radar.bgp.routes.<a href="./src/resources/radar/bgp/routes.ts">realtime</a>({ ...params }) -> RouteRealtimeResponse</code>
- <code title="get /radar/bgp/routes/stats">client.radar.bgp.routes.<a href="./src/resources/radar/bgp/routes.ts">stats</a>({ ...params }) -> RouteStatsResponse</code>

### IPs

Types:

- <code><a href="./src/resources/radar/bgp/ips/ips.ts">IPTimeseriesResponse</a></code>

Methods:

- <code title="get /radar/bgp/ips/timeseries">client.radar.bgp.ips.<a href="./src/resources/radar/bgp/ips/ips.ts">timeseries</a>({ ...params }) -> IPTimeseriesResponse</code>

#### Top

Types:

- <code><a href="./src/resources/radar/bgp/ips/top.ts">TopAsesResponse</a></code>

Methods:

- <code title="get /radar/bgp/ips/top/ases">client.radar.bgp.ips.top.<a href="./src/resources/radar/bgp/ips/top.ts">ases</a>({ ...params }) -> TopAsesResponse</code>

### RPKI

#### ASPA

Types:

- <code><a href="./src/resources/radar/bgp/rpki/aspa.ts">ASPAChangesResponse</a></code>
- <code><a href="./src/resources/radar/bgp/rpki/aspa.ts">ASPASnapshotResponse</a></code>
- <code><a href="./src/resources/radar/bgp/rpki/aspa.ts">ASPATimeseriesResponse</a></code>

Methods:

- <code title="get /radar/bgp/rpki/aspa/changes">client.radar.bgp.rpki.aspa.<a href="./src/resources/radar/bgp/rpki/aspa.ts">changes</a>({ ...params }) -> ASPAChangesResponse</code>
- <code title="get /radar/bgp/rpki/aspa/snapshot">client.radar.bgp.rpki.aspa.<a href="./src/resources/radar/bgp/rpki/aspa.ts">snapshot</a>({ ...params }) -> ASPASnapshotResponse</code>
- <code title="get /radar/bgp/rpki/aspa/timeseries">client.radar.bgp.rpki.aspa.<a href="./src/resources/radar/bgp/rpki/aspa.ts">timeseries</a>({ ...params }) -> ASPATimeseriesResponse</code>

#### Roas

Types:

- <code><a href="./src/resources/radar/bgp/rpki/roas.ts">RoaTimeseriesResponse</a></code>

Methods:

- <code title="get /radar/bgp/rpki/roas/timeseries">client.radar.bgp.rpki.roas.<a href="./src/resources/radar/bgp/rpki/roas.ts">timeseries</a>({ ...params }) -> RoaTimeseriesResponse</code>

## Bots

Types:

- <code><a href="./src/resources/radar/bots/bots.ts">BotListResponse</a></code>
- <code><a href="./src/resources/radar/bots/bots.ts">BotGetResponse</a></code>
- <code><a href="./src/resources/radar/bots/bots.ts">BotSummaryResponse</a></code>
- <code><a href="./src/resources/radar/bots/bots.ts">BotTimeseriesResponse</a></code>
- <code><a href="./src/resources/radar/bots/bots.ts">BotTimeseriesGroupsResponse</a></code>

Methods:

- <code title="get /radar/bots">client.radar.bots.<a href="./src/resources/radar/bots/bots.ts">list</a>({ ...params }) -> BotListResponse</code>
- <code title="get /radar/bots/{bot_slug}">client.radar.bots.<a href="./src/resources/radar/bots/bots.ts">get</a>(botSlug, { ...params }) -> BotGetResponse</code>
- <code title="get /radar/bots/summary/{dimension}">client.radar.bots.<a href="./src/resources/radar/bots/bots.ts">summary</a>(dimension, { ...params }) -> BotSummaryResponse</code>
- <code title="get /radar/bots/timeseries">client.radar.bots.<a href="./src/resources/radar/bots/bots.ts">timeseries</a>({ ...params }) -> BotTimeseriesResponse</code>
- <code title="get /radar/bots/timeseries_groups/{dimension}">client.radar.bots.<a href="./src/resources/radar/bots/bots.ts">timeseriesGroups</a>(dimension, { ...params }) -> BotTimeseriesGroupsResponse</code>

### WebCrawlers

Types:

- <code><a href="./src/resources/radar/bots/web-crawlers.ts">WebCrawlerSummaryResponse</a></code>
- <code><a href="./src/resources/radar/bots/web-crawlers.ts">WebCrawlerTimeseriesGroupsResponse</a></code>

Methods:

- <code title="get /radar/bots/crawlers/summary/{dimension}">client.radar.bots.webCrawlers.<a href="./src/resources/radar/bots/web-crawlers.ts">summary</a>(dimension, { ...params }) -> WebCrawlerSummaryResponse</code>
- <code title="get /radar/bots/crawlers/timeseries_groups/{dimension}">client.radar.bots.webCrawlers.<a href="./src/resources/radar/bots/web-crawlers.ts">timeseriesGroups</a>(dimension, { ...params }) -> WebCrawlerTimeseriesGroupsResponse</code>

## Datasets

Types:

- <code><a href="./src/resources/radar/datasets.ts">DatasetListResponse</a></code>
- <code><a href="./src/resources/radar/datasets.ts">DatasetDownloadResponse</a></code>
- <code><a href="./src/resources/radar/datasets.ts">DatasetGetResponse</a></code>

Methods:

- <code title="get /radar/datasets">client.radar.datasets.<a href="./src/resources/radar/datasets.ts">list</a>({ ...params }) -> DatasetListResponse</code>
- <code title="post /radar/datasets/download">client.radar.datasets.<a href="./src/resources/radar/datasets.ts">download</a>({ ...params }) -> DatasetDownloadResponse</code>
- <code title="get /radar/datasets/{alias}">client.radar.datasets.<a href="./src/resources/radar/datasets.ts">get</a>(alias) -> string</code>

## DNS

Types:

- <code><a href="./src/resources/radar/dns/dns.ts">DNSSummaryV2Response</a></code>
- <code><a href="./src/resources/radar/dns/dns.ts">DNSTimeseriesResponse</a></code>
- <code><a href="./src/resources/radar/dns/dns.ts">DNSTimeseriesGroupsV2Response</a></code>

Methods:

- <code title="get /radar/dns/summary/{dimension}">client.radar.dns.<a href="./src/resources/radar/dns/dns.ts">summaryV2</a>(dimension, { ...params }) -> DNSSummaryV2Response</code>
- <code title="get /radar/dns/timeseries">client.radar.dns.<a href="./src/resources/radar/dns/dns.ts">timeseries</a>({ ...params }) -> DNSTimeseriesResponse</code>
- <code title="get /radar/dns/timeseries_groups/{dimension}">client.radar.dns.<a href="./src/resources/radar/dns/dns.ts">timeseriesGroupsV2</a>(dimension, { ...params }) -> DNSTimeseriesGroupsV2Response</code>

### Top

Types:

- <code><a href="./src/resources/radar/dns/top.ts">TopAsesResponse</a></code>
- <code><a href="./src/resources/radar/dns/top.ts">TopLocationsResponse</a></code>

Methods:

- <code title="get /radar/dns/top/ases">client.radar.dns.top.<a href="./src/resources/radar/dns/top.ts">ases</a>({ ...params }) -> TopAsesResponse</code>
- <code title="get /radar/dns/top/locations">client.radar.dns.top.<a href="./src/resources/radar/dns/top.ts">locations</a>({ ...params }) -> TopLocationsResponse</code>

### Summary

Types:

- <code><a href="./src/resources/radar/dns/summary.ts">SummaryCacheHitResponse</a></code>
- <code><a href="./src/resources/radar/dns/summary.ts">SummaryDNSSECResponse</a></code>
- <code><a href="./src/resources/radar/dns/summary.ts">SummaryDNSSECAwareResponse</a></code>
- <code><a href="./src/resources/radar/dns/summary.ts">SummaryDNSSECE2EResponse</a></code>
- <code><a href="./src/resources/radar/dns/summary.ts">SummaryIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/dns/summary.ts">SummaryMatchingAnswerResponse</a></code>
- <code><a href="./src/resources/radar/dns/summary.ts">SummaryProtocolResponse</a></code>
- <code><a href="./src/resources/radar/dns/summary.ts">SummaryQueryTypeResponse</a></code>
- <code><a href="./src/resources/radar/dns/summary.ts">SummaryResponseCodeResponse</a></code>
- <code><a href="./src/resources/radar/dns/summary.ts">SummaryResponseTTLResponse</a></code>

Methods:

- <code title="get /radar/dns/summary/cache_hit">client.radar.dns.summary.<a href="./src/resources/radar/dns/summary.ts">cacheHit</a>({ ...params }) -> SummaryCacheHitResponse</code>
- <code title="get /radar/dns/summary/dnssec">client.radar.dns.summary.<a href="./src/resources/radar/dns/summary.ts">dnssec</a>({ ...params }) -> SummaryDNSSECResponse</code>
- <code title="get /radar/dns/summary/dnssec_aware">client.radar.dns.summary.<a href="./src/resources/radar/dns/summary.ts">dnssecAware</a>({ ...params }) -> SummaryDNSSECAwareResponse</code>
- <code title="get /radar/dns/summary/dnssec_e2e">client.radar.dns.summary.<a href="./src/resources/radar/dns/summary.ts">dnssecE2E</a>({ ...params }) -> SummaryDNSSECE2EResponse</code>
- <code title="get /radar/dns/summary/ip_version">client.radar.dns.summary.<a href="./src/resources/radar/dns/summary.ts">ipVersion</a>({ ...params }) -> SummaryIPVersionResponse</code>
- <code title="get /radar/dns/summary/matching_answer">client.radar.dns.summary.<a href="./src/resources/radar/dns/summary.ts">matchingAnswer</a>({ ...params }) -> SummaryMatchingAnswerResponse</code>
- <code title="get /radar/dns/summary/protocol">client.radar.dns.summary.<a href="./src/resources/radar/dns/summary.ts">protocol</a>({ ...params }) -> SummaryProtocolResponse</code>
- <code title="get /radar/dns/summary/query_type">client.radar.dns.summary.<a href="./src/resources/radar/dns/summary.ts">queryType</a>({ ...params }) -> SummaryQueryTypeResponse</code>
- <code title="get /radar/dns/summary/response_code">client.radar.dns.summary.<a href="./src/resources/radar/dns/summary.ts">responseCode</a>({ ...params }) -> SummaryResponseCodeResponse</code>
- <code title="get /radar/dns/summary/response_ttl">client.radar.dns.summary.<a href="./src/resources/radar/dns/summary.ts">responseTTL</a>({ ...params }) -> SummaryResponseTTLResponse</code>

### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/dns/timeseries-groups.ts">TimeseriesGroupCacheHitResponse</a></code>
- <code><a href="./src/resources/radar/dns/timeseries-groups.ts">TimeseriesGroupDNSSECResponse</a></code>
- <code><a href="./src/resources/radar/dns/timeseries-groups.ts">TimeseriesGroupDNSSECAwareResponse</a></code>
- <code><a href="./src/resources/radar/dns/timeseries-groups.ts">TimeseriesGroupDNSSECE2EResponse</a></code>
- <code><a href="./src/resources/radar/dns/timeseries-groups.ts">TimeseriesGroupIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/dns/timeseries-groups.ts">TimeseriesGroupMatchingAnswerResponse</a></code>
- <code><a href="./src/resources/radar/dns/timeseries-groups.ts">TimeseriesGroupProtocolResponse</a></code>
- <code><a href="./src/resources/radar/dns/timeseries-groups.ts">TimeseriesGroupQueryTypeResponse</a></code>
- <code><a href="./src/resources/radar/dns/timeseries-groups.ts">TimeseriesGroupResponseCodeResponse</a></code>
- <code><a href="./src/resources/radar/dns/timeseries-groups.ts">TimeseriesGroupResponseTTLResponse</a></code>

Methods:

- <code title="get /radar/dns/timeseries_groups/cache_hit">client.radar.dns.timeseriesGroups.<a href="./src/resources/radar/dns/timeseries-groups.ts">cacheHit</a>({ ...params }) -> TimeseriesGroupCacheHitResponse</code>
- <code title="get /radar/dns/timeseries_groups/dnssec">client.radar.dns.timeseriesGroups.<a href="./src/resources/radar/dns/timeseries-groups.ts">dnssec</a>({ ...params }) -> TimeseriesGroupDNSSECResponse</code>
- <code title="get /radar/dns/timeseries_groups/dnssec_aware">client.radar.dns.timeseriesGroups.<a href="./src/resources/radar/dns/timeseries-groups.ts">dnssecAware</a>({ ...params }) -> TimeseriesGroupDNSSECAwareResponse</code>
- <code title="get /radar/dns/timeseries_groups/dnssec_e2e">client.radar.dns.timeseriesGroups.<a href="./src/resources/radar/dns/timeseries-groups.ts">dnssecE2E</a>({ ...params }) -> TimeseriesGroupDNSSECE2EResponse</code>
- <code title="get /radar/dns/timeseries_groups/ip_version">client.radar.dns.timeseriesGroups.<a href="./src/resources/radar/dns/timeseries-groups.ts">ipVersion</a>({ ...params }) -> TimeseriesGroupIPVersionResponse</code>
- <code title="get /radar/dns/timeseries_groups/matching_answer">client.radar.dns.timeseriesGroups.<a href="./src/resources/radar/dns/timeseries-groups.ts">matchingAnswer</a>({ ...params }) -> TimeseriesGroupMatchingAnswerResponse</code>
- <code title="get /radar/dns/timeseries_groups/protocol">client.radar.dns.timeseriesGroups.<a href="./src/resources/radar/dns/timeseries-groups.ts">protocol</a>({ ...params }) -> TimeseriesGroupProtocolResponse</code>
- <code title="get /radar/dns/timeseries_groups/query_type">client.radar.dns.timeseriesGroups.<a href="./src/resources/radar/dns/timeseries-groups.ts">queryType</a>({ ...params }) -> TimeseriesGroupQueryTypeResponse</code>
- <code title="get /radar/dns/timeseries_groups/response_code">client.radar.dns.timeseriesGroups.<a href="./src/resources/radar/dns/timeseries-groups.ts">responseCode</a>({ ...params }) -> TimeseriesGroupResponseCodeResponse</code>
- <code title="get /radar/dns/timeseries_groups/response_ttl">client.radar.dns.timeseriesGroups.<a href="./src/resources/radar/dns/timeseries-groups.ts">responseTTL</a>({ ...params }) -> TimeseriesGroupResponseTTLResponse</code>

## NetFlows

Types:

- <code><a href="./src/resources/radar/netflows/netflows.ts">NetFlowsSummaryResponse</a></code>
- <code><a href="./src/resources/radar/netflows/netflows.ts">NetFlowsSummaryV2Response</a></code>
- <code><a href="./src/resources/radar/netflows/netflows.ts">NetFlowsTimeseriesResponse</a></code>
- <code><a href="./src/resources/radar/netflows/netflows.ts">NetFlowsTimeseriesGroupsResponse</a></code>

Methods:

- <code title="get /radar/netflows/summary">client.radar.netFlows.<a href="./src/resources/radar/netflows/netflows.ts">summary</a>({ ...params }) -> NetFlowsSummaryResponse</code>
- <code title="get /radar/netflows/summary/{dimension}">client.radar.netFlows.<a href="./src/resources/radar/netflows/netflows.ts">summaryV2</a>(dimension, { ...params }) -> NetFlowsSummaryV2Response</code>
- <code title="get /radar/netflows/timeseries">client.radar.netFlows.<a href="./src/resources/radar/netflows/netflows.ts">timeseries</a>({ ...params }) -> NetFlowsTimeseriesResponse</code>
- <code title="get /radar/netflows/timeseries_groups/{dimension}">client.radar.netFlows.<a href="./src/resources/radar/netflows/netflows.ts">timeseriesGroups</a>(dimension, { ...params }) -> NetFlowsTimeseriesGroupsResponse</code>

### Top

Types:

- <code><a href="./src/resources/radar/netflows/top.ts">TopAsesResponse</a></code>
- <code><a href="./src/resources/radar/netflows/top.ts">TopLocationsResponse</a></code>

Methods:

- <code title="get /radar/netflows/top/ases">client.radar.netFlows.top.<a href="./src/resources/radar/netflows/top.ts">ases</a>({ ...params }) -> TopAsesResponse</code>
- <code title="get /radar/netflows/top/locations">client.radar.netFlows.top.<a href="./src/resources/radar/netflows/top.ts">locations</a>({ ...params }) -> TopLocationsResponse</code>

## PostQuantum

### Origin

Types:

- <code><a href="./src/resources/radar/post-quantum/origin.ts">OriginSummaryResponse</a></code>
- <code><a href="./src/resources/radar/post-quantum/origin.ts">OriginTimeseriesGroupsResponse</a></code>

Methods:

- <code title="get /radar/post_quantum/origin/summary/{dimension}">client.radar.postQuantum.origin.<a href="./src/resources/radar/post-quantum/origin.ts">summary</a>(dimension, { ...params }) -> OriginSummaryResponse</code>
- <code title="get /radar/post_quantum/origin/timeseries_groups/{dimension}">client.radar.postQuantum.origin.<a href="./src/resources/radar/post-quantum/origin.ts">timeseriesGroups</a>(dimension, { ...params }) -> OriginTimeseriesGroupsResponse</code>

### TLS

Types:

- <code><a href="./src/resources/radar/post-quantum/tls.ts">TLSSupportResponse</a></code>

Methods:

- <code title="get /radar/post_quantum/tls/support">client.radar.postQuantum.tls.<a href="./src/resources/radar/post-quantum/tls.ts">support</a>({ ...params }) -> TLSSupportResponse</code>

## Search

Types:

- <code><a href="./src/resources/radar/search.ts">SearchGlobalResponse</a></code>

Methods:

- <code title="get /radar/search/global">client.radar.search.<a href="./src/resources/radar/search.ts">global</a>({ ...params }) -> SearchGlobalResponse</code>

## VerifiedBots

### Top

Types:

- <code><a href="./src/resources/radar/verified-bots/top.ts">TopBotsResponse</a></code>
- <code><a href="./src/resources/radar/verified-bots/top.ts">TopCategoriesResponse</a></code>

Methods:

- <code title="get /radar/verified_bots/top/bots">client.radar.verifiedBots.top.<a href="./src/resources/radar/verified-bots/top.ts">bots</a>({ ...params }) -> TopBotsResponse</code>
- <code title="get /radar/verified_bots/top/categories">client.radar.verifiedBots.top.<a href="./src/resources/radar/verified-bots/top.ts">categories</a>({ ...params }) -> TopCategoriesResponse</code>

## AS112

Types:

- <code><a href="./src/resources/radar/as112/as112.ts">AS112SummaryV2Response</a></code>
- <code><a href="./src/resources/radar/as112/as112.ts">AS112TimeseriesResponse</a></code>
- <code><a href="./src/resources/radar/as112/as112.ts">AS112TimeseriesGroupsV2Response</a></code>

Methods:

- <code title="get /radar/as112/summary/{dimension}">client.radar.as112.<a href="./src/resources/radar/as112/as112.ts">summaryV2</a>(dimension, { ...params }) -> AS112SummaryV2Response</code>
- <code title="get /radar/as112/timeseries">client.radar.as112.<a href="./src/resources/radar/as112/as112.ts">timeseries</a>({ ...params }) -> AS112TimeseriesResponse</code>
- <code title="get /radar/as112/timeseries_groups/{dimension}">client.radar.as112.<a href="./src/resources/radar/as112/as112.ts">timeseriesGroupsV2</a>(dimension, { ...params }) -> AS112TimeseriesGroupsV2Response</code>

### Summary

Types:

- <code><a href="./src/resources/radar/as112/summary.ts">SummaryDNSSECResponse</a></code>
- <code><a href="./src/resources/radar/as112/summary.ts">SummaryEdnsResponse</a></code>
- <code><a href="./src/resources/radar/as112/summary.ts">SummaryIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/as112/summary.ts">SummaryProtocolResponse</a></code>
- <code><a href="./src/resources/radar/as112/summary.ts">SummaryQueryTypeResponse</a></code>
- <code><a href="./src/resources/radar/as112/summary.ts">SummaryResponseCodesResponse</a></code>

Methods:

- <code title="get /radar/as112/summary/dnssec">client.radar.as112.summary.<a href="./src/resources/radar/as112/summary.ts">dnssec</a>({ ...params }) -> SummaryDNSSECResponse</code>
- <code title="get /radar/as112/summary/edns">client.radar.as112.summary.<a href="./src/resources/radar/as112/summary.ts">edns</a>({ ...params }) -> SummaryEdnsResponse</code>
- <code title="get /radar/as112/summary/ip_version">client.radar.as112.summary.<a href="./src/resources/radar/as112/summary.ts">ipVersion</a>({ ...params }) -> SummaryIPVersionResponse</code>
- <code title="get /radar/as112/summary/protocol">client.radar.as112.summary.<a href="./src/resources/radar/as112/summary.ts">protocol</a>({ ...params }) -> SummaryProtocolResponse</code>
- <code title="get /radar/as112/summary/query_type">client.radar.as112.summary.<a href="./src/resources/radar/as112/summary.ts">queryType</a>({ ...params }) -> SummaryQueryTypeResponse</code>
- <code title="get /radar/as112/summary/response_codes">client.radar.as112.summary.<a href="./src/resources/radar/as112/summary.ts">responseCodes</a>({ ...params }) -> SummaryResponseCodesResponse</code>

### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/as112/timeseries-groups.ts">TimeseriesGroupDNSSECResponse</a></code>
- <code><a href="./src/resources/radar/as112/timeseries-groups.ts">TimeseriesGroupEdnsResponse</a></code>
- <code><a href="./src/resources/radar/as112/timeseries-groups.ts">TimeseriesGroupIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/as112/timeseries-groups.ts">TimeseriesGroupProtocolResponse</a></code>
- <code><a href="./src/resources/radar/as112/timeseries-groups.ts">TimeseriesGroupQueryTypeResponse</a></code>
- <code><a href="./src/resources/radar/as112/timeseries-groups.ts">TimeseriesGroupResponseCodesResponse</a></code>

Methods:

- <code title="get /radar/as112/timeseries_groups/dnssec">client.radar.as112.timeseriesGroups.<a href="./src/resources/radar/as112/timeseries-groups.ts">dnssec</a>({ ...params }) -> TimeseriesGroupDNSSECResponse</code>
- <code title="get /radar/as112/timeseries_groups/edns">client.radar.as112.timeseriesGroups.<a href="./src/resources/radar/as112/timeseries-groups.ts">edns</a>({ ...params }) -> TimeseriesGroupEdnsResponse</code>
- <code title="get /radar/as112/timeseries_groups/ip_version">client.radar.as112.timeseriesGroups.<a href="./src/resources/radar/as112/timeseries-groups.ts">ipVersion</a>({ ...params }) -> TimeseriesGroupIPVersionResponse</code>
- <code title="get /radar/as112/timeseries_groups/protocol">client.radar.as112.timeseriesGroups.<a href="./src/resources/radar/as112/timeseries-groups.ts">protocol</a>({ ...params }) -> TimeseriesGroupProtocolResponse</code>
- <code title="get /radar/as112/timeseries_groups/query_type">client.radar.as112.timeseriesGroups.<a href="./src/resources/radar/as112/timeseries-groups.ts">queryType</a>({ ...params }) -> TimeseriesGroupQueryTypeResponse</code>
- <code title="get /radar/as112/timeseries_groups/response_codes">client.radar.as112.timeseriesGroups.<a href="./src/resources/radar/as112/timeseries-groups.ts">responseCodes</a>({ ...params }) -> TimeseriesGroupResponseCodesResponse</code>

### Top

Types:

- <code><a href="./src/resources/radar/as112/top.ts">TopDNSSECResponse</a></code>
- <code><a href="./src/resources/radar/as112/top.ts">TopEdnsResponse</a></code>
- <code><a href="./src/resources/radar/as112/top.ts">TopIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/as112/top.ts">TopLocationsResponse</a></code>

Methods:

- <code title="get /radar/as112/top/locations/dnssec/{dnssec}">client.radar.as112.top.<a href="./src/resources/radar/as112/top.ts">dnssec</a>(dnssec, { ...params }) -> TopDNSSECResponse</code>
- <code title="get /radar/as112/top/locations/edns/{edns}">client.radar.as112.top.<a href="./src/resources/radar/as112/top.ts">edns</a>(edns, { ...params }) -> TopEdnsResponse</code>
- <code title="get /radar/as112/top/locations/ip_version/{ip_version}">client.radar.as112.top.<a href="./src/resources/radar/as112/top.ts">ipVersion</a>(ipVersion, { ...params }) -> TopIPVersionResponse</code>
- <code title="get /radar/as112/top/locations">client.radar.as112.top.<a href="./src/resources/radar/as112/top.ts">locations</a>({ ...params }) -> TopLocationsResponse</code>

## Email

Types:

- <code><a href="./src/resources/radar/email/email.ts">RadarEmailSeries</a></code>
- <code><a href="./src/resources/radar/email/email.ts">RadarEmailSummary</a></code>

### Routing

Types:

- <code><a href="./src/resources/radar/email/routing/routing.ts">RoutingSummaryV2Response</a></code>
- <code><a href="./src/resources/radar/email/routing/routing.ts">RoutingTimeseriesGroupsV2Response</a></code>

Methods:

- <code title="get /radar/email/routing/summary/{dimension}">client.radar.email.routing.<a href="./src/resources/radar/email/routing/routing.ts">summaryV2</a>(dimension, { ...params }) -> RoutingSummaryV2Response</code>
- <code title="get /radar/email/routing/timeseries_groups/{dimension}">client.radar.email.routing.<a href="./src/resources/radar/email/routing/routing.ts">timeseriesGroupsV2</a>(dimension, { ...params }) -> RoutingTimeseriesGroupsV2Response</code>

#### Summary

Types:

- <code><a href="./src/resources/radar/email/routing/summary.ts">SummaryARCResponse</a></code>
- <code><a href="./src/resources/radar/email/routing/summary.ts">SummaryDKIMResponse</a></code>
- <code><a href="./src/resources/radar/email/routing/summary.ts">SummaryDMARCResponse</a></code>
- <code><a href="./src/resources/radar/email/routing/summary.ts">SummaryEncryptedResponse</a></code>
- <code><a href="./src/resources/radar/email/routing/summary.ts">SummaryIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/email/routing/summary.ts">SummarySPFResponse</a></code>

Methods:

- <code title="get /radar/email/routing/summary/arc">client.radar.email.routing.summary.<a href="./src/resources/radar/email/routing/summary.ts">arc</a>({ ...params }) -> SummaryARCResponse</code>
- <code title="get /radar/email/routing/summary/dkim">client.radar.email.routing.summary.<a href="./src/resources/radar/email/routing/summary.ts">dkim</a>({ ...params }) -> SummaryDKIMResponse</code>
- <code title="get /radar/email/routing/summary/dmarc">client.radar.email.routing.summary.<a href="./src/resources/radar/email/routing/summary.ts">dmarc</a>({ ...params }) -> SummaryDMARCResponse</code>
- <code title="get /radar/email/routing/summary/encrypted">client.radar.email.routing.summary.<a href="./src/resources/radar/email/routing/summary.ts">encrypted</a>({ ...params }) -> SummaryEncryptedResponse</code>
- <code title="get /radar/email/routing/summary/ip_version">client.radar.email.routing.summary.<a href="./src/resources/radar/email/routing/summary.ts">ipVersion</a>({ ...params }) -> SummaryIPVersionResponse</code>
- <code title="get /radar/email/routing/summary/spf">client.radar.email.routing.summary.<a href="./src/resources/radar/email/routing/summary.ts">spf</a>({ ...params }) -> SummarySPFResponse</code>

#### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/email/routing/timeseries-groups.ts">TimeseriesGroupARCResponse</a></code>
- <code><a href="./src/resources/radar/email/routing/timeseries-groups.ts">TimeseriesGroupDKIMResponse</a></code>
- <code><a href="./src/resources/radar/email/routing/timeseries-groups.ts">TimeseriesGroupDMARCResponse</a></code>
- <code><a href="./src/resources/radar/email/routing/timeseries-groups.ts">TimeseriesGroupEncryptedResponse</a></code>
- <code><a href="./src/resources/radar/email/routing/timeseries-groups.ts">TimeseriesGroupIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/email/routing/timeseries-groups.ts">TimeseriesGroupSPFResponse</a></code>

Methods:

- <code title="get /radar/email/routing/timeseries_groups/arc">client.radar.email.routing.timeseriesGroups.<a href="./src/resources/radar/email/routing/timeseries-groups.ts">arc</a>({ ...params }) -> TimeseriesGroupARCResponse</code>
- <code title="get /radar/email/routing/timeseries_groups/dkim">client.radar.email.routing.timeseriesGroups.<a href="./src/resources/radar/email/routing/timeseries-groups.ts">dkim</a>({ ...params }) -> TimeseriesGroupDKIMResponse</code>
- <code title="get /radar/email/routing/timeseries_groups/dmarc">client.radar.email.routing.timeseriesGroups.<a href="./src/resources/radar/email/routing/timeseries-groups.ts">dmarc</a>({ ...params }) -> TimeseriesGroupDMARCResponse</code>
- <code title="get /radar/email/routing/timeseries_groups/encrypted">client.radar.email.routing.timeseriesGroups.<a href="./src/resources/radar/email/routing/timeseries-groups.ts">encrypted</a>({ ...params }) -> TimeseriesGroupEncryptedResponse</code>
- <code title="get /radar/email/routing/timeseries_groups/ip_version">client.radar.email.routing.timeseriesGroups.<a href="./src/resources/radar/email/routing/timeseries-groups.ts">ipVersion</a>({ ...params }) -> TimeseriesGroupIPVersionResponse</code>
- <code title="get /radar/email/routing/timeseries_groups/spf">client.radar.email.routing.timeseriesGroups.<a href="./src/resources/radar/email/routing/timeseries-groups.ts">spf</a>({ ...params }) -> TimeseriesGroupSPFResponse</code>

### Security

Types:

- <code><a href="./src/resources/radar/email/security/security.ts">SecuritySummaryV2Response</a></code>
- <code><a href="./src/resources/radar/email/security/security.ts">SecurityTimeseriesGroupsV2Response</a></code>

Methods:

- <code title="get /radar/email/security/summary/{dimension}">client.radar.email.security.<a href="./src/resources/radar/email/security/security.ts">summaryV2</a>(dimension, { ...params }) -> SecuritySummaryV2Response</code>
- <code title="get /radar/email/security/timeseries_groups/{dimension}">client.radar.email.security.<a href="./src/resources/radar/email/security/security.ts">timeseriesGroupsV2</a>(dimension, { ...params }) -> SecurityTimeseriesGroupsV2Response</code>

#### Top

##### TLDs

Types:

- <code><a href="./src/resources/radar/email/security/top/tlds/tlds.ts">TLDGetResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/tlds">client.radar.email.security.top.tlds.<a href="./src/resources/radar/email/security/top/tlds/tlds.ts">get</a>({ ...params }) -> TLDGetResponse</code>

###### Malicious

Types:

- <code><a href="./src/resources/radar/email/security/top/tlds/malicious.ts">MaliciousGetResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/tlds/malicious/{malicious}">client.radar.email.security.top.tlds.malicious.<a href="./src/resources/radar/email/security/top/tlds/malicious.ts">get</a>(malicious, { ...params }) -> MaliciousGetResponse</code>

###### Spam

Types:

- <code><a href="./src/resources/radar/email/security/top/tlds/spam.ts">SpamGetResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/tlds/spam/{spam}">client.radar.email.security.top.tlds.spam.<a href="./src/resources/radar/email/security/top/tlds/spam.ts">get</a>(spam, { ...params }) -> SpamGetResponse</code>

###### Spoof

Types:

- <code><a href="./src/resources/radar/email/security/top/tlds/spoof.ts">SpoofGetResponse</a></code>

Methods:

- <code title="get /radar/email/security/top/tlds/spoof/{spoof}">client.radar.email.security.top.tlds.spoof.<a href="./src/resources/radar/email/security/top/tlds/spoof.ts">get</a>(spoof, { ...params }) -> SpoofGetResponse</code>

#### Summary

Types:

- <code><a href="./src/resources/radar/email/security/summary.ts">SummaryARCResponse</a></code>
- <code><a href="./src/resources/radar/email/security/summary.ts">SummaryDKIMResponse</a></code>
- <code><a href="./src/resources/radar/email/security/summary.ts">SummaryDMARCResponse</a></code>
- <code><a href="./src/resources/radar/email/security/summary.ts">SummaryMaliciousResponse</a></code>
- <code><a href="./src/resources/radar/email/security/summary.ts">SummarySpamResponse</a></code>
- <code><a href="./src/resources/radar/email/security/summary.ts">SummarySPFResponse</a></code>
- <code><a href="./src/resources/radar/email/security/summary.ts">SummarySpoofResponse</a></code>
- <code><a href="./src/resources/radar/email/security/summary.ts">SummaryThreatCategoryResponse</a></code>
- <code><a href="./src/resources/radar/email/security/summary.ts">SummaryTLSVersionResponse</a></code>

Methods:

- <code title="get /radar/email/security/summary/arc">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">arc</a>({ ...params }) -> SummaryARCResponse</code>
- <code title="get /radar/email/security/summary/dkim">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">dkim</a>({ ...params }) -> SummaryDKIMResponse</code>
- <code title="get /radar/email/security/summary/dmarc">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">dmarc</a>({ ...params }) -> SummaryDMARCResponse</code>
- <code title="get /radar/email/security/summary/malicious">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">malicious</a>({ ...params }) -> SummaryMaliciousResponse</code>
- <code title="get /radar/email/security/summary/spam">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">spam</a>({ ...params }) -> SummarySpamResponse</code>
- <code title="get /radar/email/security/summary/spf">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">spf</a>({ ...params }) -> SummarySPFResponse</code>
- <code title="get /radar/email/security/summary/spoof">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">spoof</a>({ ...params }) -> SummarySpoofResponse</code>
- <code title="get /radar/email/security/summary/threat_category">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">threatCategory</a>({ ...params }) -> SummaryThreatCategoryResponse</code>
- <code title="get /radar/email/security/summary/tls_version">client.radar.email.security.summary.<a href="./src/resources/radar/email/security/summary.ts">tlsVersion</a>({ ...params }) -> SummaryTLSVersionResponse</code>

#### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/email/security/timeseries-groups.ts">TimeseriesGroupARCResponse</a></code>
- <code><a href="./src/resources/radar/email/security/timeseries-groups.ts">TimeseriesGroupDKIMResponse</a></code>
- <code><a href="./src/resources/radar/email/security/timeseries-groups.ts">TimeseriesGroupDMARCResponse</a></code>
- <code><a href="./src/resources/radar/email/security/timeseries-groups.ts">TimeseriesGroupMaliciousResponse</a></code>
- <code><a href="./src/resources/radar/email/security/timeseries-groups.ts">TimeseriesGroupSpamResponse</a></code>
- <code><a href="./src/resources/radar/email/security/timeseries-groups.ts">TimeseriesGroupSPFResponse</a></code>
- <code><a href="./src/resources/radar/email/security/timeseries-groups.ts">TimeseriesGroupSpoofResponse</a></code>
- <code><a href="./src/resources/radar/email/security/timeseries-groups.ts">TimeseriesGroupThreatCategoryResponse</a></code>
- <code><a href="./src/resources/radar/email/security/timeseries-groups.ts">TimeseriesGroupTLSVersionResponse</a></code>

Methods:

- <code title="get /radar/email/security/timeseries_groups/arc">client.radar.email.security.timeseriesGroups.<a href="./src/resources/radar/email/security/timeseries-groups.ts">arc</a>({ ...params }) -> TimeseriesGroupARCResponse</code>
- <code title="get /radar/email/security/timeseries_groups/dkim">client.radar.email.security.timeseriesGroups.<a href="./src/resources/radar/email/security/timeseries-groups.ts">dkim</a>({ ...params }) -> TimeseriesGroupDKIMResponse</code>
- <code title="get /radar/email/security/timeseries_groups/dmarc">client.radar.email.security.timeseriesGroups.<a href="./src/resources/radar/email/security/timeseries-groups.ts">dmarc</a>({ ...params }) -> TimeseriesGroupDMARCResponse</code>
- <code title="get /radar/email/security/timeseries_groups/malicious">client.radar.email.security.timeseriesGroups.<a href="./src/resources/radar/email/security/timeseries-groups.ts">malicious</a>({ ...params }) -> TimeseriesGroupMaliciousResponse</code>
- <code title="get /radar/email/security/timeseries_groups/spam">client.radar.email.security.timeseriesGroups.<a href="./src/resources/radar/email/security/timeseries-groups.ts">spam</a>({ ...params }) -> TimeseriesGroupSpamResponse</code>
- <code title="get /radar/email/security/timeseries_groups/spf">client.radar.email.security.timeseriesGroups.<a href="./src/resources/radar/email/security/timeseries-groups.ts">spf</a>({ ...params }) -> TimeseriesGroupSPFResponse</code>
- <code title="get /radar/email/security/timeseries_groups/spoof">client.radar.email.security.timeseriesGroups.<a href="./src/resources/radar/email/security/timeseries-groups.ts">spoof</a>({ ...params }) -> TimeseriesGroupSpoofResponse</code>
- <code title="get /radar/email/security/timeseries_groups/threat_category">client.radar.email.security.timeseriesGroups.<a href="./src/resources/radar/email/security/timeseries-groups.ts">threatCategory</a>({ ...params }) -> TimeseriesGroupThreatCategoryResponse</code>
- <code title="get /radar/email/security/timeseries_groups/tls_version">client.radar.email.security.timeseriesGroups.<a href="./src/resources/radar/email/security/timeseries-groups.ts">tlsVersion</a>({ ...params }) -> TimeseriesGroupTLSVersionResponse</code>

## Attacks

### Layer3

Types:

- <code><a href="./src/resources/radar/attacks/layer3/layer3.ts">Layer3SummaryV2Response</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/layer3.ts">Layer3TimeseriesResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/layer3.ts">Layer3TimeseriesGroupsV2Response</a></code>

Methods:

- <code title="get /radar/attacks/layer3/summary/{dimension}">client.radar.attacks.layer3.<a href="./src/resources/radar/attacks/layer3/layer3.ts">summaryV2</a>(dimension, { ...params }) -> Layer3SummaryV2Response</code>
- <code title="get /radar/attacks/layer3/timeseries">client.radar.attacks.layer3.<a href="./src/resources/radar/attacks/layer3/layer3.ts">timeseries</a>({ ...params }) -> Layer3TimeseriesResponse</code>
- <code title="get /radar/attacks/layer3/timeseries_groups/{dimension}">client.radar.attacks.layer3.<a href="./src/resources/radar/attacks/layer3/layer3.ts">timeseriesGroupsV2</a>(dimension, { ...params }) -> Layer3TimeseriesGroupsV2Response</code>

#### Summary

Types:

- <code><a href="./src/resources/radar/attacks/layer3/summary.ts">SummaryBitrateResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/summary.ts">SummaryDurationResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/summary.ts">SummaryIndustryResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/summary.ts">SummaryIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/summary.ts">SummaryProtocolResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/summary.ts">SummaryVectorResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/summary.ts">SummaryVerticalResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/summary/bitrate">client.radar.attacks.layer3.summary.<a href="./src/resources/radar/attacks/layer3/summary.ts">bitrate</a>({ ...params }) -> SummaryBitrateResponse</code>
- <code title="get /radar/attacks/layer3/summary/duration">client.radar.attacks.layer3.summary.<a href="./src/resources/radar/attacks/layer3/summary.ts">duration</a>({ ...params }) -> SummaryDurationResponse</code>
- <code title="get /radar/attacks/layer3/summary/industry">client.radar.attacks.layer3.summary.<a href="./src/resources/radar/attacks/layer3/summary.ts">industry</a>({ ...params }) -> SummaryIndustryResponse</code>
- <code title="get /radar/attacks/layer3/summary/ip_version">client.radar.attacks.layer3.summary.<a href="./src/resources/radar/attacks/layer3/summary.ts">ipVersion</a>({ ...params }) -> SummaryIPVersionResponse</code>
- <code title="get /radar/attacks/layer3/summary/protocol">client.radar.attacks.layer3.summary.<a href="./src/resources/radar/attacks/layer3/summary.ts">protocol</a>({ ...params }) -> SummaryProtocolResponse</code>
- <code title="get /radar/attacks/layer3/summary/vector">client.radar.attacks.layer3.summary.<a href="./src/resources/radar/attacks/layer3/summary.ts">vector</a>({ ...params }) -> SummaryVectorResponse</code>
- <code title="get /radar/attacks/layer3/summary/vertical">client.radar.attacks.layer3.summary.<a href="./src/resources/radar/attacks/layer3/summary.ts">vertical</a>({ ...params }) -> SummaryVerticalResponse</code>

#### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">TimeseriesGroupBitrateResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">TimeseriesGroupDurationResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">TimeseriesGroupIndustryResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">TimeseriesGroupIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">TimeseriesGroupProtocolResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">TimeseriesGroupVectorResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">TimeseriesGroupVerticalResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/timeseries_groups/bitrate">client.radar.attacks.layer3.timeseriesGroups.<a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">bitrate</a>({ ...params }) -> TimeseriesGroupBitrateResponse</code>
- <code title="get /radar/attacks/layer3/timeseries_groups/duration">client.radar.attacks.layer3.timeseriesGroups.<a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">duration</a>({ ...params }) -> TimeseriesGroupDurationResponse</code>
- <code title="get /radar/attacks/layer3/timeseries_groups/industry">client.radar.attacks.layer3.timeseriesGroups.<a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">industry</a>({ ...params }) -> TimeseriesGroupIndustryResponse</code>
- <code title="get /radar/attacks/layer3/timeseries_groups/ip_version">client.radar.attacks.layer3.timeseriesGroups.<a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">ipVersion</a>({ ...params }) -> TimeseriesGroupIPVersionResponse</code>
- <code title="get /radar/attacks/layer3/timeseries_groups/protocol">client.radar.attacks.layer3.timeseriesGroups.<a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">protocol</a>({ ...params }) -> TimeseriesGroupProtocolResponse</code>
- <code title="get /radar/attacks/layer3/timeseries_groups/vector">client.radar.attacks.layer3.timeseriesGroups.<a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">vector</a>({ ...params }) -> TimeseriesGroupVectorResponse</code>
- <code title="get /radar/attacks/layer3/timeseries_groups/vertical">client.radar.attacks.layer3.timeseriesGroups.<a href="./src/resources/radar/attacks/layer3/timeseries-groups.ts">vertical</a>({ ...params }) -> TimeseriesGroupVerticalResponse</code>

#### Top

Types:

- <code><a href="./src/resources/radar/attacks/layer3/top/top.ts">TopAttacksResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/top/top.ts">TopIndustryResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/top/top.ts">TopVerticalResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/top/attacks">client.radar.attacks.layer3.top.<a href="./src/resources/radar/attacks/layer3/top/top.ts">attacks</a>({ ...params }) -> TopAttacksResponse</code>
- <code title="get /radar/attacks/layer3/top/industry">client.radar.attacks.layer3.top.<a href="./src/resources/radar/attacks/layer3/top/top.ts">industry</a>({ ...params }) -> TopIndustryResponse</code>
- <code title="get /radar/attacks/layer3/top/vertical">client.radar.attacks.layer3.top.<a href="./src/resources/radar/attacks/layer3/top/top.ts">vertical</a>({ ...params }) -> TopVerticalResponse</code>

##### Locations

Types:

- <code><a href="./src/resources/radar/attacks/layer3/top/locations.ts">LocationOriginResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer3/top/locations.ts">LocationTargetResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer3/top/locations/origin">client.radar.attacks.layer3.top.locations.<a href="./src/resources/radar/attacks/layer3/top/locations.ts">origin</a>({ ...params }) -> LocationOriginResponse</code>
- <code title="get /radar/attacks/layer3/top/locations/target">client.radar.attacks.layer3.top.locations.<a href="./src/resources/radar/attacks/layer3/top/locations.ts">target</a>({ ...params }) -> LocationTargetResponse</code>

### Layer7

Types:

- <code><a href="./src/resources/radar/attacks/layer7/layer7.ts">Layer7SummaryV2Response</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/layer7.ts">Layer7TimeseriesResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/layer7.ts">Layer7TimeseriesGroupsV2Response</a></code>

Methods:

- <code title="get /radar/attacks/layer7/summary/{dimension}">client.radar.attacks.layer7.<a href="./src/resources/radar/attacks/layer7/layer7.ts">summaryV2</a>(dimension, { ...params }) -> Layer7SummaryV2Response</code>
- <code title="get /radar/attacks/layer7/timeseries">client.radar.attacks.layer7.<a href="./src/resources/radar/attacks/layer7/layer7.ts">timeseries</a>({ ...params }) -> Layer7TimeseriesResponse</code>
- <code title="get /radar/attacks/layer7/timeseries_groups/{dimension}">client.radar.attacks.layer7.<a href="./src/resources/radar/attacks/layer7/layer7.ts">timeseriesGroupsV2</a>(dimension, { ...params }) -> Layer7TimeseriesGroupsV2Response</code>

#### Summary

Types:

- <code><a href="./src/resources/radar/attacks/layer7/summary.ts">SummaryHTTPMethodResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/summary.ts">SummaryHTTPVersionResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/summary.ts">SummaryIndustryResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/summary.ts">SummaryIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/summary.ts">SummaryManagedRulesResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/summary.ts">SummaryMitigationProductResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/summary.ts">SummaryVerticalResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/summary/http_method">client.radar.attacks.layer7.summary.<a href="./src/resources/radar/attacks/layer7/summary.ts">httpMethod</a>({ ...params }) -> SummaryHTTPMethodResponse</code>
- <code title="get /radar/attacks/layer7/summary/http_version">client.radar.attacks.layer7.summary.<a href="./src/resources/radar/attacks/layer7/summary.ts">httpVersion</a>({ ...params }) -> SummaryHTTPVersionResponse</code>
- <code title="get /radar/attacks/layer7/summary/industry">client.radar.attacks.layer7.summary.<a href="./src/resources/radar/attacks/layer7/summary.ts">industry</a>({ ...params }) -> SummaryIndustryResponse</code>
- <code title="get /radar/attacks/layer7/summary/ip_version">client.radar.attacks.layer7.summary.<a href="./src/resources/radar/attacks/layer7/summary.ts">ipVersion</a>({ ...params }) -> SummaryIPVersionResponse</code>
- <code title="get /radar/attacks/layer7/summary/managed_rules">client.radar.attacks.layer7.summary.<a href="./src/resources/radar/attacks/layer7/summary.ts">managedRules</a>({ ...params }) -> SummaryManagedRulesResponse</code>
- <code title="get /radar/attacks/layer7/summary/mitigation_product">client.radar.attacks.layer7.summary.<a href="./src/resources/radar/attacks/layer7/summary.ts">mitigationProduct</a>({ ...params }) -> SummaryMitigationProductResponse</code>
- <code title="get /radar/attacks/layer7/summary/vertical">client.radar.attacks.layer7.summary.<a href="./src/resources/radar/attacks/layer7/summary.ts">vertical</a>({ ...params }) -> SummaryVerticalResponse</code>

#### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">TimeseriesGroupHTTPMethodResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">TimeseriesGroupHTTPVersionResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">TimeseriesGroupIndustryResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">TimeseriesGroupIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">TimeseriesGroupManagedRulesResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">TimeseriesGroupMitigationProductResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">TimeseriesGroupVerticalResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/timeseries_groups/http_method">client.radar.attacks.layer7.timeseriesGroups.<a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">httpMethod</a>({ ...params }) -> TimeseriesGroupHTTPMethodResponse</code>
- <code title="get /radar/attacks/layer7/timeseries_groups/http_version">client.radar.attacks.layer7.timeseriesGroups.<a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">httpVersion</a>({ ...params }) -> TimeseriesGroupHTTPVersionResponse</code>
- <code title="get /radar/attacks/layer7/timeseries_groups/industry">client.radar.attacks.layer7.timeseriesGroups.<a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">industry</a>({ ...params }) -> TimeseriesGroupIndustryResponse</code>
- <code title="get /radar/attacks/layer7/timeseries_groups/ip_version">client.radar.attacks.layer7.timeseriesGroups.<a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">ipVersion</a>({ ...params }) -> TimeseriesGroupIPVersionResponse</code>
- <code title="get /radar/attacks/layer7/timeseries_groups/managed_rules">client.radar.attacks.layer7.timeseriesGroups.<a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">managedRules</a>({ ...params }) -> TimeseriesGroupManagedRulesResponse</code>
- <code title="get /radar/attacks/layer7/timeseries_groups/mitigation_product">client.radar.attacks.layer7.timeseriesGroups.<a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">mitigationProduct</a>({ ...params }) -> TimeseriesGroupMitigationProductResponse</code>
- <code title="get /radar/attacks/layer7/timeseries_groups/vertical">client.radar.attacks.layer7.timeseriesGroups.<a href="./src/resources/radar/attacks/layer7/timeseries-groups.ts">vertical</a>({ ...params }) -> TimeseriesGroupVerticalResponse</code>

#### Top

Types:

- <code><a href="./src/resources/radar/attacks/layer7/top/top.ts">TopAttacksResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/top/top.ts">TopIndustryResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/top/top.ts">TopVerticalResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/top/attacks">client.radar.attacks.layer7.top.<a href="./src/resources/radar/attacks/layer7/top/top.ts">attacks</a>({ ...params }) -> TopAttacksResponse</code>
- <code title="get /radar/attacks/layer7/top/industry">client.radar.attacks.layer7.top.<a href="./src/resources/radar/attacks/layer7/top/top.ts">industry</a>({ ...params }) -> TopIndustryResponse</code>
- <code title="get /radar/attacks/layer7/top/vertical">client.radar.attacks.layer7.top.<a href="./src/resources/radar/attacks/layer7/top/top.ts">vertical</a>({ ...params }) -> TopVerticalResponse</code>

##### Locations

Types:

- <code><a href="./src/resources/radar/attacks/layer7/top/locations.ts">LocationOriginResponse</a></code>
- <code><a href="./src/resources/radar/attacks/layer7/top/locations.ts">LocationTargetResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/top/locations/origin">client.radar.attacks.layer7.top.locations.<a href="./src/resources/radar/attacks/layer7/top/locations.ts">origin</a>({ ...params }) -> LocationOriginResponse</code>
- <code title="get /radar/attacks/layer7/top/locations/target">client.radar.attacks.layer7.top.locations.<a href="./src/resources/radar/attacks/layer7/top/locations.ts">target</a>({ ...params }) -> LocationTargetResponse</code>

##### Ases

Types:

- <code><a href="./src/resources/radar/attacks/layer7/top/ases.ts">AseOriginResponse</a></code>

Methods:

- <code title="get /radar/attacks/layer7/top/ases/origin">client.radar.attacks.layer7.top.ases.<a href="./src/resources/radar/attacks/layer7/top/ases.ts">origin</a>({ ...params }) -> AseOriginResponse</code>

## Entities

Types:

- <code><a href="./src/resources/radar/entities/entities.ts">EntityGetResponse</a></code>

Methods:

- <code title="get /radar/entities/ip">client.radar.entities.<a href="./src/resources/radar/entities/entities.ts">get</a>({ ...params }) -> EntityGetResponse</code>

### ASNs

Types:

- <code><a href="./src/resources/radar/entities/asns.ts">ASNListResponse</a></code>
- <code><a href="./src/resources/radar/entities/asns.ts">ASNAsSetResponse</a></code>
- <code><a href="./src/resources/radar/entities/asns.ts">ASNBotnetThreatFeedResponse</a></code>
- <code><a href="./src/resources/radar/entities/asns.ts">ASNGetResponse</a></code>
- <code><a href="./src/resources/radar/entities/asns.ts">ASNIPResponse</a></code>
- <code><a href="./src/resources/radar/entities/asns.ts">ASNRelResponse</a></code>

Methods:

- <code title="get /radar/entities/asns">client.radar.entities.asns.<a href="./src/resources/radar/entities/asns.ts">list</a>({ ...params }) -> ASNListResponse</code>
- <code title="get /radar/entities/asns/{asn}/as_set">client.radar.entities.asns.<a href="./src/resources/radar/entities/asns.ts">asSet</a>(asn, { ...params }) -> ASNAsSetResponse</code>
- <code title="get /radar/entities/asns/botnet_threat_feed">client.radar.entities.asns.<a href="./src/resources/radar/entities/asns.ts">botnetThreatFeed</a>({ ...params }) -> ASNBotnetThreatFeedResponse</code>
- <code title="get /radar/entities/asns/{asn}">client.radar.entities.asns.<a href="./src/resources/radar/entities/asns.ts">get</a>(asn, { ...params }) -> ASNGetResponse</code>
- <code title="get /radar/entities/asns/ip">client.radar.entities.asns.<a href="./src/resources/radar/entities/asns.ts">ip</a>({ ...params }) -> ASNIPResponse</code>
- <code title="get /radar/entities/asns/{asn}/rel">client.radar.entities.asns.<a href="./src/resources/radar/entities/asns.ts">rel</a>(asn, { ...params }) -> ASNRelResponse</code>

### Locations

Types:

- <code><a href="./src/resources/radar/entities/locations.ts">LocationListResponse</a></code>
- <code><a href="./src/resources/radar/entities/locations.ts">LocationGetResponse</a></code>

Methods:

- <code title="get /radar/entities/locations">client.radar.entities.locations.<a href="./src/resources/radar/entities/locations.ts">list</a>({ ...params }) -> LocationListResponse</code>
- <code title="get /radar/entities/locations/{location}">client.radar.entities.locations.<a href="./src/resources/radar/entities/locations.ts">get</a>(location, { ...params }) -> LocationGetResponse</code>

## Geolocations

Types:

- <code><a href="./src/resources/radar/geolocations.ts">GeolocationListResponse</a></code>
- <code><a href="./src/resources/radar/geolocations.ts">GeolocationGetResponse</a></code>

Methods:

- <code title="get /radar/geolocations">client.radar.geolocations.<a href="./src/resources/radar/geolocations.ts">list</a>({ ...params }) -> GeolocationListResponse</code>
- <code title="get /radar/geolocations/{geo_id}">client.radar.geolocations.<a href="./src/resources/radar/geolocations.ts">get</a>(geoId, { ...params }) -> GeolocationGetResponse</code>

## HTTP

Types:

- <code><a href="./src/resources/radar/http/http.ts">HTTPSummaryV2Response</a></code>
- <code><a href="./src/resources/radar/http/http.ts">HTTPTimeseriesResponse</a></code>
- <code><a href="./src/resources/radar/http/http.ts">HTTPTimeseriesGroupsV2Response</a></code>

Methods:

- <code title="get /radar/http/summary/{dimension}">client.radar.http.<a href="./src/resources/radar/http/http.ts">summaryV2</a>(dimension, { ...params }) -> HTTPSummaryV2Response</code>
- <code title="get /radar/http/timeseries">client.radar.http.<a href="./src/resources/radar/http/http.ts">timeseries</a>({ ...params }) -> HTTPTimeseriesResponse</code>
- <code title="get /radar/http/timeseries_groups/{dimension}">client.radar.http.<a href="./src/resources/radar/http/http.ts">timeseriesGroupsV2</a>(dimension, { ...params }) -> HTTPTimeseriesGroupsV2Response</code>

### Locations

Types:

- <code><a href="./src/resources/radar/http/locations/locations.ts">LocationGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations">client.radar.http.locations.<a href="./src/resources/radar/http/locations/locations.ts">get</a>({ ...params }) -> LocationGetResponse</code>

#### BotClass

Types:

- <code><a href="./src/resources/radar/http/locations/bot-class.ts">BotClassGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/bot_class/{bot_class}">client.radar.http.locations.botClass.<a href="./src/resources/radar/http/locations/bot-class.ts">get</a>(botClass, { ...params }) -> BotClassGetResponse</code>

#### DeviceType

Types:

- <code><a href="./src/resources/radar/http/locations/device-type.ts">DeviceTypeGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/device_type/{device_type}">client.radar.http.locations.deviceType.<a href="./src/resources/radar/http/locations/device-type.ts">get</a>(deviceType, { ...params }) -> DeviceTypeGetResponse</code>

#### HTTPProtocol

Types:

- <code><a href="./src/resources/radar/http/locations/http-protocol.ts">HTTPProtocolGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/http_protocol/{http_protocol}">client.radar.http.locations.httpProtocol.<a href="./src/resources/radar/http/locations/http-protocol.ts">get</a>(httpProtocol, { ...params }) -> HTTPProtocolGetResponse</code>

#### HTTPMethod

Types:

- <code><a href="./src/resources/radar/http/locations/http-method.ts">HTTPMethodGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/http_version/{http_version}">client.radar.http.locations.httpMethod.<a href="./src/resources/radar/http/locations/http-method.ts">get</a>(httpVersion, { ...params }) -> HTTPMethodGetResponse</code>

#### IPVersion

Types:

- <code><a href="./src/resources/radar/http/locations/ip-version.ts">IPVersionGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/ip_version/{ip_version}">client.radar.http.locations.ipVersion.<a href="./src/resources/radar/http/locations/ip-version.ts">get</a>(ipVersion, { ...params }) -> IPVersionGetResponse</code>

#### OS

Types:

- <code><a href="./src/resources/radar/http/locations/os.ts">OSGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/os/{os}">client.radar.http.locations.os.<a href="./src/resources/radar/http/locations/os.ts">get</a>(os, { ...params }) -> OSGetResponse</code>

#### TLSVersion

Types:

- <code><a href="./src/resources/radar/http/locations/tls-version.ts">TLSVersionGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/tls_version/{tls_version}">client.radar.http.locations.tlsVersion.<a href="./src/resources/radar/http/locations/tls-version.ts">get</a>(tlsVersion, { ...params }) -> TLSVersionGetResponse</code>

#### BrowserFamily

Types:

- <code><a href="./src/resources/radar/http/locations/browser-family.ts">BrowserFamilyGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/locations/browser_family/{browser_family}">client.radar.http.locations.browserFamily.<a href="./src/resources/radar/http/locations/browser-family.ts">get</a>(browserFamily, { ...params }) -> BrowserFamilyGetResponse</code>

### Ases

Types:

- <code><a href="./src/resources/radar/http/ases/ases.ts">AseGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases">client.radar.http.ases.<a href="./src/resources/radar/http/ases/ases.ts">get</a>({ ...params }) -> AseGetResponse</code>

#### BotClass

Types:

- <code><a href="./src/resources/radar/http/ases/bot-class.ts">BotClassGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/bot_class/{bot_class}">client.radar.http.ases.botClass.<a href="./src/resources/radar/http/ases/bot-class.ts">get</a>(botClass, { ...params }) -> BotClassGetResponse</code>

#### DeviceType

Types:

- <code><a href="./src/resources/radar/http/ases/device-type.ts">DeviceTypeGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/device_type/{device_type}">client.radar.http.ases.deviceType.<a href="./src/resources/radar/http/ases/device-type.ts">get</a>(deviceType, { ...params }) -> DeviceTypeGetResponse</code>

#### HTTPProtocol

Types:

- <code><a href="./src/resources/radar/http/ases/http-protocol.ts">HTTPProtocolGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/http_protocol/{http_protocol}">client.radar.http.ases.httpProtocol.<a href="./src/resources/radar/http/ases/http-protocol.ts">get</a>(httpProtocol, { ...params }) -> HTTPProtocolGetResponse</code>

#### HTTPMethod

Types:

- <code><a href="./src/resources/radar/http/ases/http-method.ts">HTTPMethodGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/http_version/{http_version}">client.radar.http.ases.httpMethod.<a href="./src/resources/radar/http/ases/http-method.ts">get</a>(httpVersion, { ...params }) -> HTTPMethodGetResponse</code>

#### IPVersion

Types:

- <code><a href="./src/resources/radar/http/ases/ip-version.ts">IPVersionGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/ip_version/{ip_version}">client.radar.http.ases.ipVersion.<a href="./src/resources/radar/http/ases/ip-version.ts">get</a>(ipVersion, { ...params }) -> IPVersionGetResponse</code>

#### OS

Types:

- <code><a href="./src/resources/radar/http/ases/os.ts">OSGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/os/{os}">client.radar.http.ases.os.<a href="./src/resources/radar/http/ases/os.ts">get</a>(os, { ...params }) -> OSGetResponse</code>

#### TLSVersion

Types:

- <code><a href="./src/resources/radar/http/ases/tls-version.ts">TLSVersionGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/tls_version/{tls_version}">client.radar.http.ases.tlsVersion.<a href="./src/resources/radar/http/ases/tls-version.ts">get</a>(tlsVersion, { ...params }) -> TLSVersionGetResponse</code>

#### BrowserFamily

Types:

- <code><a href="./src/resources/radar/http/ases/browser-family.ts">BrowserFamilyGetResponse</a></code>

Methods:

- <code title="get /radar/http/top/ases/browser_family/{browser_family}">client.radar.http.ases.browserFamily.<a href="./src/resources/radar/http/ases/browser-family.ts">get</a>(browserFamily, { ...params }) -> BrowserFamilyGetResponse</code>

### Summary

Types:

- <code><a href="./src/resources/radar/http/summary.ts">SummaryBotClassResponse</a></code>
- <code><a href="./src/resources/radar/http/summary.ts">SummaryDeviceTypeResponse</a></code>
- <code><a href="./src/resources/radar/http/summary.ts">SummaryHTTPProtocolResponse</a></code>
- <code><a href="./src/resources/radar/http/summary.ts">SummaryHTTPVersionResponse</a></code>
- <code><a href="./src/resources/radar/http/summary.ts">SummaryIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/http/summary.ts">SummaryOSResponse</a></code>
- <code><a href="./src/resources/radar/http/summary.ts">SummaryPostQuantumResponse</a></code>
- <code><a href="./src/resources/radar/http/summary.ts">SummaryTLSVersionResponse</a></code>

Methods:

- <code title="get /radar/http/summary/bot_class">client.radar.http.summary.<a href="./src/resources/radar/http/summary.ts">botClass</a>({ ...params }) -> SummaryBotClassResponse</code>
- <code title="get /radar/http/summary/device_type">client.radar.http.summary.<a href="./src/resources/radar/http/summary.ts">deviceType</a>({ ...params }) -> SummaryDeviceTypeResponse</code>
- <code title="get /radar/http/summary/http_protocol">client.radar.http.summary.<a href="./src/resources/radar/http/summary.ts">httpProtocol</a>({ ...params }) -> SummaryHTTPProtocolResponse</code>
- <code title="get /radar/http/summary/http_version">client.radar.http.summary.<a href="./src/resources/radar/http/summary.ts">httpVersion</a>({ ...params }) -> SummaryHTTPVersionResponse</code>
- <code title="get /radar/http/summary/ip_version">client.radar.http.summary.<a href="./src/resources/radar/http/summary.ts">ipVersion</a>({ ...params }) -> SummaryIPVersionResponse</code>
- <code title="get /radar/http/summary/os">client.radar.http.summary.<a href="./src/resources/radar/http/summary.ts">os</a>({ ...params }) -> SummaryOSResponse</code>
- <code title="get /radar/http/summary/post_quantum">client.radar.http.summary.<a href="./src/resources/radar/http/summary.ts">postQuantum</a>({ ...params }) -> SummaryPostQuantumResponse</code>
- <code title="get /radar/http/summary/tls_version">client.radar.http.summary.<a href="./src/resources/radar/http/summary.ts">tlsVersion</a>({ ...params }) -> SummaryTLSVersionResponse</code>

### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/http/timeseries-groups.ts">TimeseriesGroupBotClassResponse</a></code>
- <code><a href="./src/resources/radar/http/timeseries-groups.ts">TimeseriesGroupBrowserResponse</a></code>
- <code><a href="./src/resources/radar/http/timeseries-groups.ts">TimeseriesGroupBrowserFamilyResponse</a></code>
- <code><a href="./src/resources/radar/http/timeseries-groups.ts">TimeseriesGroupDeviceTypeResponse</a></code>
- <code><a href="./src/resources/radar/http/timeseries-groups.ts">TimeseriesGroupHTTPProtocolResponse</a></code>
- <code><a href="./src/resources/radar/http/timeseries-groups.ts">TimeseriesGroupHTTPVersionResponse</a></code>
- <code><a href="./src/resources/radar/http/timeseries-groups.ts">TimeseriesGroupIPVersionResponse</a></code>
- <code><a href="./src/resources/radar/http/timeseries-groups.ts">TimeseriesGroupOSResponse</a></code>
- <code><a href="./src/resources/radar/http/timeseries-groups.ts">TimeseriesGroupPostQuantumResponse</a></code>
- <code><a href="./src/resources/radar/http/timeseries-groups.ts">TimeseriesGroupTLSVersionResponse</a></code>

Methods:

- <code title="get /radar/http/timeseries_groups/bot_class">client.radar.http.timeseriesGroups.<a href="./src/resources/radar/http/timeseries-groups.ts">botClass</a>({ ...params }) -> TimeseriesGroupBotClassResponse</code>
- <code title="get /radar/http/timeseries_groups/browser">client.radar.http.timeseriesGroups.<a href="./src/resources/radar/http/timeseries-groups.ts">browser</a>({ ...params }) -> TimeseriesGroupBrowserResponse</code>
- <code title="get /radar/http/timeseries_groups/browser_family">client.radar.http.timeseriesGroups.<a href="./src/resources/radar/http/timeseries-groups.ts">browserFamily</a>({ ...params }) -> TimeseriesGroupBrowserFamilyResponse</code>
- <code title="get /radar/http/timeseries_groups/device_type">client.radar.http.timeseriesGroups.<a href="./src/resources/radar/http/timeseries-groups.ts">deviceType</a>({ ...params }) -> TimeseriesGroupDeviceTypeResponse</code>
- <code title="get /radar/http/timeseries_groups/http_protocol">client.radar.http.timeseriesGroups.<a href="./src/resources/radar/http/timeseries-groups.ts">httpProtocol</a>({ ...params }) -> TimeseriesGroupHTTPProtocolResponse</code>
- <code title="get /radar/http/timeseries_groups/http_version">client.radar.http.timeseriesGroups.<a href="./src/resources/radar/http/timeseries-groups.ts">httpVersion</a>({ ...params }) -> TimeseriesGroupHTTPVersionResponse</code>
- <code title="get /radar/http/timeseries_groups/ip_version">client.radar.http.timeseriesGroups.<a href="./src/resources/radar/http/timeseries-groups.ts">ipVersion</a>({ ...params }) -> TimeseriesGroupIPVersionResponse</code>
- <code title="get /radar/http/timeseries_groups/os">client.radar.http.timeseriesGroups.<a href="./src/resources/radar/http/timeseries-groups.ts">os</a>({ ...params }) -> TimeseriesGroupOSResponse</code>
- <code title="get /radar/http/timeseries_groups/post_quantum">client.radar.http.timeseriesGroups.<a href="./src/resources/radar/http/timeseries-groups.ts">postQuantum</a>({ ...params }) -> TimeseriesGroupPostQuantumResponse</code>
- <code title="get /radar/http/timeseries_groups/tls_version">client.radar.http.timeseriesGroups.<a href="./src/resources/radar/http/timeseries-groups.ts">tlsVersion</a>({ ...params }) -> TimeseriesGroupTLSVersionResponse</code>

### Top

Types:

- <code><a href="./src/resources/radar/http/top.ts">TopBrowserResponse</a></code>
- <code><a href="./src/resources/radar/http/top.ts">TopBrowserFamilyResponse</a></code>

Methods:

- <code title="get /radar/http/top/browser">client.radar.http.top.<a href="./src/resources/radar/http/top.ts">browser</a>({ ...params }) -> TopBrowserResponse</code>
- <code title="get /radar/http/top/browser_family">client.radar.http.top.<a href="./src/resources/radar/http/top.ts">browserFamily</a>({ ...params }) -> TopBrowserFamilyResponse</code>

## Quality

### IQI

Types:

- <code><a href="./src/resources/radar/quality/iqi.ts">IQISummaryResponse</a></code>
- <code><a href="./src/resources/radar/quality/iqi.ts">IQITimeseriesGroupsResponse</a></code>

Methods:

- <code title="get /radar/quality/iqi/summary">client.radar.quality.iqi.<a href="./src/resources/radar/quality/iqi.ts">summary</a>({ ...params }) -> IQISummaryResponse</code>
- <code title="get /radar/quality/iqi/timeseries_groups">client.radar.quality.iqi.<a href="./src/resources/radar/quality/iqi.ts">timeseriesGroups</a>({ ...params }) -> IQITimeseriesGroupsResponse</code>

### Speed

Types:

- <code><a href="./src/resources/radar/quality/speed/speed.ts">SpeedHistogramResponse</a></code>
- <code><a href="./src/resources/radar/quality/speed/speed.ts">SpeedSummaryResponse</a></code>

Methods:

- <code title="get /radar/quality/speed/histogram">client.radar.quality.speed.<a href="./src/resources/radar/quality/speed/speed.ts">histogram</a>({ ...params }) -> SpeedHistogramResponse</code>
- <code title="get /radar/quality/speed/summary">client.radar.quality.speed.<a href="./src/resources/radar/quality/speed/speed.ts">summary</a>({ ...params }) -> SpeedSummaryResponse</code>

#### Top

Types:

- <code><a href="./src/resources/radar/quality/speed/top.ts">TopAsesResponse</a></code>
- <code><a href="./src/resources/radar/quality/speed/top.ts">TopLocationsResponse</a></code>

Methods:

- <code title="get /radar/quality/speed/top/ases">client.radar.quality.speed.top.<a href="./src/resources/radar/quality/speed/top.ts">ases</a>({ ...params }) -> TopAsesResponse</code>
- <code title="get /radar/quality/speed/top/locations">client.radar.quality.speed.top.<a href="./src/resources/radar/quality/speed/top.ts">locations</a>({ ...params }) -> TopLocationsResponse</code>

## Ranking

Types:

- <code><a href="./src/resources/radar/ranking/ranking.ts">RankingTimeseriesGroupsResponse</a></code>
- <code><a href="./src/resources/radar/ranking/ranking.ts">RankingTopResponse</a></code>

Methods:

- <code title="get /radar/ranking/timeseries_groups">client.radar.ranking.<a href="./src/resources/radar/ranking/ranking.ts">timeseriesGroups</a>({ ...params }) -> RankingTimeseriesGroupsResponse</code>
- <code title="get /radar/ranking/top">client.radar.ranking.<a href="./src/resources/radar/ranking/ranking.ts">top</a>({ ...params }) -> RankingTopResponse</code>

### Domain

Types:

- <code><a href="./src/resources/radar/ranking/domain.ts">DomainGetResponse</a></code>

Methods:

- <code title="get /radar/ranking/domain/{domain}">client.radar.ranking.domain.<a href="./src/resources/radar/ranking/domain.ts">get</a>(domain, { ...params }) -> DomainGetResponse</code>

### InternetServices

Types:

- <code><a href="./src/resources/radar/ranking/internet-services.ts">InternetServiceCategoriesResponse</a></code>
- <code><a href="./src/resources/radar/ranking/internet-services.ts">InternetServiceTimeseriesGroupsResponse</a></code>
- <code><a href="./src/resources/radar/ranking/internet-services.ts">InternetServiceTopResponse</a></code>

Methods:

- <code title="get /radar/ranking/internet_services/categories">client.radar.ranking.internetServices.<a href="./src/resources/radar/ranking/internet-services.ts">categories</a>({ ...params }) -> InternetServiceCategoriesResponse</code>
- <code title="get /radar/ranking/internet_services/timeseries_groups">client.radar.ranking.internetServices.<a href="./src/resources/radar/ranking/internet-services.ts">timeseriesGroups</a>({ ...params }) -> InternetServiceTimeseriesGroupsResponse</code>
- <code title="get /radar/ranking/internet_services/top">client.radar.ranking.internetServices.<a href="./src/resources/radar/ranking/internet-services.ts">top</a>({ ...params }) -> InternetServiceTopResponse</code>

## TrafficAnomalies

Types:

- <code><a href="./src/resources/radar/traffic-anomalies/traffic-anomalies.ts">TrafficAnomalyGetResponse</a></code>

Methods:

- <code title="get /radar/traffic_anomalies">client.radar.trafficAnomalies.<a href="./src/resources/radar/traffic-anomalies/traffic-anomalies.ts">get</a>({ ...params }) -> TrafficAnomalyGetResponse</code>

### Locations

Types:

- <code><a href="./src/resources/radar/traffic-anomalies/locations.ts">LocationGetResponse</a></code>

Methods:

- <code title="get /radar/traffic_anomalies/locations">client.radar.trafficAnomalies.locations.<a href="./src/resources/radar/traffic-anomalies/locations.ts">get</a>({ ...params }) -> LocationGetResponse</code>

## TCPResetsTimeouts

Types:

- <code><a href="./src/resources/radar/tcp-resets-timeouts.ts">TCPResetsTimeoutSummaryResponse</a></code>
- <code><a href="./src/resources/radar/tcp-resets-timeouts.ts">TCPResetsTimeoutTimeseriesGroupsResponse</a></code>

Methods:

- <code title="get /radar/tcp_resets_timeouts/summary">client.radar.tcpResetsTimeouts.<a href="./src/resources/radar/tcp-resets-timeouts.ts">summary</a>({ ...params }) -> TCPResetsTimeoutSummaryResponse</code>
- <code title="get /radar/tcp_resets_timeouts/timeseries_groups">client.radar.tcpResetsTimeouts.<a href="./src/resources/radar/tcp-resets-timeouts.ts">timeseriesGroups</a>({ ...params }) -> TCPResetsTimeoutTimeseriesGroupsResponse</code>

## RobotsTXT

### Top

Types:

- <code><a href="./src/resources/radar/robots-txt/top/top.ts">TopDomainCategoriesResponse</a></code>

Methods:

- <code title="get /radar/robots_txt/top/domain_categories">client.radar.robotsTXT.top.<a href="./src/resources/radar/robots-txt/top/top.ts">domainCategories</a>({ ...params }) -> TopDomainCategoriesResponse</code>

#### UserAgents

Types:

- <code><a href="./src/resources/radar/robots-txt/top/user-agents.ts">UserAgentDirectiveResponse</a></code>

Methods:

- <code title="get /radar/robots_txt/top/user_agents/directive">client.radar.robotsTXT.top.userAgents.<a href="./src/resources/radar/robots-txt/top/user-agents.ts">directive</a>({ ...params }) -> UserAgentDirectiveResponse</code>

## LeakedCredentials

Types:

- <code><a href="./src/resources/radar/leaked-credentials/leaked-credentials.ts">LeakedCredentialSummaryV2Response</a></code>
- <code><a href="./src/resources/radar/leaked-credentials/leaked-credentials.ts">LeakedCredentialTimeseriesGroupsV2Response</a></code>

Methods:

- <code title="get /radar/leaked_credential_checks/summary/{dimension}">client.radar.leakedCredentials.<a href="./src/resources/radar/leaked-credentials/leaked-credentials.ts">summaryV2</a>(dimension, { ...params }) -> LeakedCredentialSummaryV2Response</code>
- <code title="get /radar/leaked_credential_checks/timeseries_groups/{dimension}">client.radar.leakedCredentials.<a href="./src/resources/radar/leaked-credentials/leaked-credentials.ts">timeseriesGroupsV2</a>(dimension, { ...params }) -> LeakedCredentialTimeseriesGroupsV2Response</code>

### Summary

Types:

- <code><a href="./src/resources/radar/leaked-credentials/summary.ts">SummaryBotClassResponse</a></code>
- <code><a href="./src/resources/radar/leaked-credentials/summary.ts">SummaryCompromisedResponse</a></code>

Methods:

- <code title="get /radar/leaked_credential_checks/summary/bot_class">client.radar.leakedCredentials.summary.<a href="./src/resources/radar/leaked-credentials/summary.ts">botClass</a>({ ...params }) -> SummaryBotClassResponse</code>
- <code title="get /radar/leaked_credential_checks/summary/compromised">client.radar.leakedCredentials.summary.<a href="./src/resources/radar/leaked-credentials/summary.ts">compromised</a>({ ...params }) -> SummaryCompromisedResponse</code>

### TimeseriesGroups

Types:

- <code><a href="./src/resources/radar/leaked-credentials/timeseries-groups.ts">TimeseriesGroupBotClassResponse</a></code>
- <code><a href="./src/resources/radar/leaked-credentials/timeseries-groups.ts">TimeseriesGroupCompromisedResponse</a></code>

Methods:

- <code title="get /radar/leaked_credential_checks/timeseries_groups/bot_class">client.radar.leakedCredentials.timeseriesGroups.<a href="./src/resources/radar/leaked-credentials/timeseries-groups.ts">botClass</a>({ ...params }) -> TimeseriesGroupBotClassResponse</code>
- <code title="get /radar/leaked_credential_checks/timeseries_groups/compromised">client.radar.leakedCredentials.timeseriesGroups.<a href="./src/resources/radar/leaked-credentials/timeseries-groups.ts">compromised</a>({ ...params }) -> TimeseriesGroupCompromisedResponse</code>
