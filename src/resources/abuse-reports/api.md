# AbuseReports

Types:

- <code><a href="./src/resources/abuse-reports/abuse-reports.ts">AbuseReportCreateResponse</a></code>
- <code><a href="./src/resources/abuse-reports/abuse-reports.ts">AbuseReportListResponse</a></code>
- <code><a href="./src/resources/abuse-reports/abuse-reports.ts">AbuseReportGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/abuse-reports/{report_param}">client.abuseReports.<a href="./src/resources/abuse-reports/abuse-reports.ts">create</a>(reportParam, { ...params }) -> AbuseReportCreateResponse</code>
- <code title="get /accounts/{account_id}/abuse-reports">client.abuseReports.<a href="./src/resources/abuse-reports/abuse-reports.ts">list</a>({ ...params }) -> AbuseReportListResponsesV4PagePagination</code>
- <code title="get /accounts/{account_id}/abuse-reports/{report_param}">client.abuseReports.<a href="./src/resources/abuse-reports/abuse-reports.ts">get</a>(reportParam, { ...params }) -> AbuseReportGetResponse</code>

## Submitted

Types:

- <code><a href="./src/resources/abuse-reports/submitted/submitted.ts">SubmittedListResponse</a></code>
- <code><a href="./src/resources/abuse-reports/submitted/submitted.ts">SubmittedGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/abuse-reports/submitted">client.abuseReports.submitted.<a href="./src/resources/abuse-reports/submitted/submitted.ts">list</a>({ ...params }) -> SubmittedListResponsesV4PagePagination</code>
- <code title="get /accounts/{account_id}/abuse-reports/submitted/{report_id}">client.abuseReports.submitted.<a href="./src/resources/abuse-reports/submitted/submitted.ts">get</a>(reportID, { ...params }) -> SubmittedGetResponse</code>

### Emails

Types:

- <code><a href="./src/resources/abuse-reports/submitted/emails.ts">EmailListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/abuse-reports/submitted/{report_id}/emails">client.abuseReports.submitted.emails.<a href="./src/resources/abuse-reports/submitted/emails.ts">list</a>(reportID, { ...params }) -> EmailListResponsesV4PagePagination</code>

## Mitigations

Types:

- <code><a href="./src/resources/abuse-reports/mitigations.ts">MitigationListResponse</a></code>
- <code><a href="./src/resources/abuse-reports/mitigations.ts">MitigationReviewResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/abuse-reports/{report_id}/mitigations">client.abuseReports.mitigations.<a href="./src/resources/abuse-reports/mitigations.ts">list</a>(reportID, { ...params }) -> MitigationListResponsesV4PagePagination</code>
- <code title="post /accounts/{account_id}/abuse-reports/{report_id}/mitigations/appeal">client.abuseReports.mitigations.<a href="./src/resources/abuse-reports/mitigations.ts">review</a>(reportID, { ...params }) -> MitigationReviewResponsesSinglePage</code>
