# SecurityCenter

## Insights

Types:

- <code><a href="./src/resources/security-center/insights/insights.ts">InsightListResponse</a></code>
- <code><a href="./src/resources/security-center/insights/insights.ts">InsightDismissResponse</a></code>

Methods:

- <code title="get /{accounts_or_zones}/{account_or_zone_id}/security-center/insights">client.securityCenter.insights.<a href="./src/resources/security-center/insights/insights.ts">list</a>({ ...params }) -> InsightListResponsesV4PagePagination</code>
- <code title="put /{accounts_or_zones}/{account_or_zone_id}/security-center/insights/{issue_id}/dismiss">client.securityCenter.insights.<a href="./src/resources/security-center/insights/insights.ts">dismiss</a>(issueId, { ...params }) -> InsightDismissResponse</code>

### Class

Types:

- <code><a href="./src/resources/security-center/insights/class.ts">ClassGetResponse</a></code>

Methods:

- <code title="get /{accounts_or_zones}/{account_or_zone_id}/security-center/insights/class">client.securityCenter.insights.class.<a href="./src/resources/security-center/insights/class.ts">get</a>({ ...params }) -> ClassGetResponse</code>

### Severity

Types:

- <code><a href="./src/resources/security-center/insights/severity.ts">SeverityGetResponse</a></code>

Methods:

- <code title="get /{accounts_or_zones}/{account_or_zone_id}/security-center/insights/severity">client.securityCenter.insights.severity.<a href="./src/resources/security-center/insights/severity.ts">get</a>({ ...params }) -> SeverityGetResponse</code>

### Type

Types:

- <code><a href="./src/resources/security-center/insights/type.ts">TypeGetResponse</a></code>

Methods:

- <code title="get /{accounts_or_zones}/{account_or_zone_id}/security-center/insights/type">client.securityCenter.insights.type.<a href="./src/resources/security-center/insights/type.ts">get</a>({ ...params }) -> TypeGetResponse</code>

### AuditLogs

Types:

- <code><a href="./src/resources/security-center/insights/audit-logs.ts">AuditLogListResponse</a></code>
- <code><a href="./src/resources/security-center/insights/audit-logs.ts">AuditLogListByInsightResponse</a></code>

Methods:

- <code title="get /{accounts_or_zones}/{account_or_zone_id}/security-center/insights/audit-log">client.securityCenter.insights.auditLogs.<a href="./src/resources/security-center/insights/audit-logs.ts">list</a>({ ...params }) -> AuditLogListResponsesCursorPagination</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/security-center/insights/{issue_id}/audit-log">client.securityCenter.insights.auditLogs.<a href="./src/resources/security-center/insights/audit-logs.ts">listByInsight</a>(issueId, { ...params }) -> AuditLogListByInsightResponsesCursorPagination</code>

### Classification

Types:

- <code><a href="./src/resources/security-center/insights/classification.ts">ClassificationUpdateResponse</a></code>

Methods:

- <code title="patch /{accounts_or_zones}/{account_or_zone_id}/security-center/insights/{issue_id}/classification">client.securityCenter.insights.classification.<a href="./src/resources/security-center/insights/classification.ts">update</a>(issueId, { ...params }) -> ClassificationUpdateResponse</code>

### Context

Types:

- <code><a href="./src/resources/security-center/insights/context.ts">ContextGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/security-center/insights/{issue_id}/context">client.securityCenter.insights.context.<a href="./src/resources/security-center/insights/context.ts">get</a>(issueId, { ...params }) -> ContextGetResponse</code>
