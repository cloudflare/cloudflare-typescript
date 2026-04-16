# Intel

## ASN

Methods:

- <code title="get /accounts/{account_id}/intel/asn/{asn}">client.intel.asn.<a href="./src/resources/intel/asn/asn.ts">get</a>(asn, { ...params }) -> ASN</code>

### Subnets

Types:

- <code><a href="./src/resources/intel/asn/subnets.ts">SubnetGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/asn/{asn}/subnets">client.intel.asn.subnets.<a href="./src/resources/intel/asn/subnets.ts">get</a>(asn, { ...params }) -> SubnetGetResponse</code>

## DNS

Types:

- <code><a href="./src/resources/intel/dns.ts">DNS</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/dns">client.intel.dns.<a href="./src/resources/intel/dns.ts">list</a>({ ...params }) -> DNSV4PagePagination</code>

## Domains

Types:

- <code><a href="./src/resources/intel/domains/domains.ts">Domain</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/domain">client.intel.domains.<a href="./src/resources/intel/domains/domains.ts">get</a>({ ...params }) -> Domain</code>

### Bulks

Types:

- <code><a href="./src/resources/intel/domains/bulks.ts">BulkGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/domain/bulk">client.intel.domains.bulks.<a href="./src/resources/intel/domains/bulks.ts">get</a>({ ...params }) -> BulkGetResponse | null</code>

## DomainHistory

Types:

- <code><a href="./src/resources/intel/domain-history.ts">DomainHistory</a></code>
- <code><a href="./src/resources/intel/domain-history.ts">DomainHistoryGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/domain-history">client.intel.domainHistory.<a href="./src/resources/intel/domain-history.ts">get</a>({ ...params }) -> DomainHistoryGetResponse | null</code>

## IPs

Types:

- <code><a href="./src/resources/intel/ips.ts">IP</a></code>
- <code><a href="./src/resources/intel/ips.ts">IPGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/ip">client.intel.ips.<a href="./src/resources/intel/ips.ts">get</a>({ ...params }) -> IPGetResponse | null</code>

## IPLists

Types:

- <code><a href="./src/resources/intel/ip-lists.ts">IPList</a></code>

## Miscategorizations

Types:

- <code><a href="./src/resources/intel/miscategorizations.ts">MiscategorizationCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/intel/miscategorization">client.intel.miscategorizations.<a href="./src/resources/intel/miscategorizations.ts">create</a>({ ...params }) -> MiscategorizationCreateResponse</code>

## Whois

Types:

- <code><a href="./src/resources/intel/whois.ts">Whois</a></code>
- <code><a href="./src/resources/intel/whois.ts">WhoisGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/whois">client.intel.whois.<a href="./src/resources/intel/whois.ts">get</a>({ ...params }) -> WhoisGetResponse</code>

## IndicatorFeeds

Types:

- <code><a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">IndicatorFeedCreateResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">IndicatorFeedUpdateResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">IndicatorFeedListResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">IndicatorFeedDataResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">IndicatorFeedGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/intel/indicator-feeds">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">create</a>({ ...params }) -> IndicatorFeedCreateResponse</code>
- <code title="put /accounts/{account_id}/intel/indicator-feeds/{feed_id}">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">update</a>(feedId, { ...params }) -> IndicatorFeedUpdateResponse</code>
- <code title="get /accounts/{account_id}/intel/indicator-feeds">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">list</a>({ ...params }) -> IndicatorFeedListResponsesSinglePage</code>
- <code title="get /accounts/{account_id}/intel/indicator-feeds/{feed_id}/data">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">data</a>(feedId, { ...params }) -> string</code>
- <code title="get /accounts/{account_id}/intel/indicator-feeds/{feed_id}">client.intel.indicatorFeeds.<a href="./src/resources/intel/indicator-feeds/indicator-feeds.ts">get</a>(feedId, { ...params }) -> IndicatorFeedGetResponse</code>

### Snapshots

Types:

- <code><a href="./src/resources/intel/indicator-feeds/snapshots.ts">SnapshotUpdateResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/intel/indicator-feeds/{feed_id}/snapshot">client.intel.indicatorFeeds.snapshots.<a href="./src/resources/intel/indicator-feeds/snapshots.ts">update</a>(feedId, { ...params }) -> SnapshotUpdateResponse</code>

### Permissions

Types:

- <code><a href="./src/resources/intel/indicator-feeds/permissions.ts">PermissionCreateResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/permissions.ts">PermissionListResponse</a></code>
- <code><a href="./src/resources/intel/indicator-feeds/permissions.ts">PermissionDeleteResponse</a></code>

Methods:

- <code title="put /accounts/{account_id}/intel/indicator-feeds/permissions/add">client.intel.indicatorFeeds.permissions.<a href="./src/resources/intel/indicator-feeds/permissions.ts">create</a>({ ...params }) -> PermissionCreateResponse</code>
- <code title="get /accounts/{account_id}/intel/indicator-feeds/permissions/view">client.intel.indicatorFeeds.permissions.<a href="./src/resources/intel/indicator-feeds/permissions.ts">list</a>({ ...params }) -> PermissionListResponse</code>
- <code title="put /accounts/{account_id}/intel/indicator-feeds/permissions/remove">client.intel.indicatorFeeds.permissions.<a href="./src/resources/intel/indicator-feeds/permissions.ts">delete</a>({ ...params }) -> PermissionDeleteResponse</code>

### Downloads

## Sinkholes

Types:

- <code><a href="./src/resources/intel/sinkholes.ts">Sinkhole</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/sinkholes">client.intel.sinkholes.<a href="./src/resources/intel/sinkholes.ts">list</a>({ ...params }) -> SinkholesSinglePage</code>

## AttackSurfaceReport

### IssueTypes

Types:

- <code><a href="./src/resources/intel/attack-surface-report/issue-types.ts">IssueTypeGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/attack-surface-report/issue-types">client.intel.attackSurfaceReport.issueTypes.<a href="./src/resources/intel/attack-surface-report/issue-types.ts">get</a>({ ...params }) -> IssueTypeGetResponsesSinglePage</code>

### Issues

Types:

- <code><a href="./src/resources/intel/attack-surface-report/issues.ts">IssueType</a></code>
- <code><a href="./src/resources/intel/attack-surface-report/issues.ts">SeverityQueryParam</a></code>
- <code><a href="./src/resources/intel/attack-surface-report/issues.ts">IssueListResponse</a></code>
- <code><a href="./src/resources/intel/attack-surface-report/issues.ts">IssueClassResponse</a></code>
- <code><a href="./src/resources/intel/attack-surface-report/issues.ts">IssueDismissResponse</a></code>
- <code><a href="./src/resources/intel/attack-surface-report/issues.ts">IssueSeverityResponse</a></code>
- <code><a href="./src/resources/intel/attack-surface-report/issues.ts">IssueTypeResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/intel/attack-surface-report/issues">client.intel.attackSurfaceReport.issues.<a href="./src/resources/intel/attack-surface-report/issues.ts">list</a>({ ...params }) -> IssueListResponsesV4PagePagination</code>
- <code title="get /accounts/{account_id}/intel/attack-surface-report/issues/class">client.intel.attackSurfaceReport.issues.<a href="./src/resources/intel/attack-surface-report/issues.ts">class</a>({ ...params }) -> IssueClassResponse</code>
- <code title="put /accounts/{account_id}/intel/attack-surface-report/{issue_id}/dismiss">client.intel.attackSurfaceReport.issues.<a href="./src/resources/intel/attack-surface-report/issues.ts">dismiss</a>(issueId, { ...params }) -> IssueDismissResponse</code>
- <code title="get /accounts/{account_id}/intel/attack-surface-report/issues/severity">client.intel.attackSurfaceReport.issues.<a href="./src/resources/intel/attack-surface-report/issues.ts">severity</a>({ ...params }) -> IssueSeverityResponse</code>
- <code title="get /accounts/{account_id}/intel/attack-surface-report/issues/type">client.intel.attackSurfaceReport.issues.<a href="./src/resources/intel/attack-surface-report/issues.ts">type</a>({ ...params }) -> IssueTypeResponse</code>
