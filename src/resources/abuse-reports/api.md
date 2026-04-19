# AbuseReports

Types:

- <code><a href="./src/resources/abuse-reports/abuse-reports.ts">AbuseReportCreateResponse</a></code>
- <code><a href="./src/resources/abuse-reports/abuse-reports.ts">AbuseReportListResponse</a></code>
- <code><a href="./src/resources/abuse-reports/abuse-reports.ts">AbuseReportGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/abuse-reports/{report_param}">client.abuseReports.<a href="./src/resources/abuse-reports/abuse-reports.ts">create</a>(reportParam, { ...params }) -> AbuseReportCreateResponse</code>
- <code title="get /accounts/{account_id}/abuse-reports">client.abuseReports.<a href="./src/resources/abuse-reports/abuse-reports.ts">list</a>({ ...params }) -> AbuseReportListResponsesV4PagePagination</code>
- <code title="get /accounts/{account_id}/abuse-reports/{report_param}">client.abuseReports.<a href="./src/resources/abuse-reports/abuse-reports.ts">get</a>(reportParam, { ...params }) -> AbuseReportGetResponse</code>

## Mitigations

Types:

- <code><a href="./src/resources/abuse-reports/mitigations.ts">MitigationListResponse</a></code>
- <code><a href="./src/resources/abuse-reports/mitigations.ts">MitigationReviewResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/abuse-reports/{report_id}/mitigations">client.abuseReports.mitigations.<a href="./src/resources/abuse-reports/mitigations.ts">list</a>(reportId, { ...params }) -> MitigationListResponsesV4PagePagination</code>
- <code title="post /accounts/{account_id}/abuse-reports/{report_id}/mitigations/appeal">client.abuseReports.mitigations.<a href="./src/resources/abuse-reports/mitigations.ts">review</a>(reportId, { ...params }) -> MitigationReviewResponsesSinglePage</code>
