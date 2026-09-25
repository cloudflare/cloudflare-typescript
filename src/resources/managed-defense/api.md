# ManagedDefense

## VulnerabilityDiscovery

### Repositories

Types:

- <code><a href="./src/resources/managed-defense/vulnerability-discovery/repositories.ts">RepositoryCreateResponse</a></code>
- <code><a href="./src/resources/managed-defense/vulnerability-discovery/repositories.ts">RepositoryListResponse</a></code>
- <code><a href="./src/resources/managed-defense/vulnerability-discovery/repositories.ts">RepositoryGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/managed-defense/vulnerability-discovery/repos">client.managedDefense.vulnerabilityDiscovery.repositories.<a href="./src/resources/managed-defense/vulnerability-discovery/repositories.ts">create</a>({ ...params }) -> RepositoryCreateResponse</code>
- <code title="get /accounts/{account_id}/managed-defense/vulnerability-discovery/repos">client.managedDefense.vulnerabilityDiscovery.repositories.<a href="./src/resources/managed-defense/vulnerability-discovery/repositories.ts">list</a>({ ...params }) -> RepositoryListResponsesCursorLimitPagination</code>
- <code title="get /accounts/{account_id}/managed-defense/vulnerability-discovery/repos/{repo_id}">client.managedDefense.vulnerabilityDiscovery.repositories.<a href="./src/resources/managed-defense/vulnerability-discovery/repositories.ts">get</a>(repoID, { ...params }) -> RepositoryGetResponse</code>

### Scans

Types:

- <code><a href="./src/resources/managed-defense/vulnerability-discovery/scans.ts">ScanCreateResponse</a></code>
- <code><a href="./src/resources/managed-defense/vulnerability-discovery/scans.ts">ScanListResponse</a></code>
- <code><a href="./src/resources/managed-defense/vulnerability-discovery/scans.ts">ScanGetResponse</a></code>
- <code><a href="./src/resources/managed-defense/vulnerability-discovery/scans.ts">ScanGetReportResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/managed-defense/vulnerability-discovery/scans">client.managedDefense.vulnerabilityDiscovery.scans.<a href="./src/resources/managed-defense/vulnerability-discovery/scans.ts">create</a>({ ...params }) -> ScanCreateResponse</code>
- <code title="get /accounts/{account_id}/managed-defense/vulnerability-discovery/scans">client.managedDefense.vulnerabilityDiscovery.scans.<a href="./src/resources/managed-defense/vulnerability-discovery/scans.ts">list</a>({ ...params }) -> ScanListResponsesCursorLimitPagination</code>
- <code title="get /accounts/{account_id}/managed-defense/vulnerability-discovery/scans/{scan_id}">client.managedDefense.vulnerabilityDiscovery.scans.<a href="./src/resources/managed-defense/vulnerability-discovery/scans.ts">get</a>(scanID, { ...params }) -> ScanGetResponse</code>
- <code title="get /accounts/{account_id}/managed-defense/vulnerability-discovery/scans/{scan_id}/report">client.managedDefense.vulnerabilityDiscovery.scans.<a href="./src/resources/managed-defense/vulnerability-discovery/scans.ts">getReport</a>(scanID, { ...params }) -> ScanGetReportResponse</code>

### Reports

Types:

- <code><a href="./src/resources/managed-defense/vulnerability-discovery/reports.ts">ReportGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/managed-defense/vulnerability-discovery/repos/{repo_id}/scans/{scan_id}/report">client.managedDefense.vulnerabilityDiscovery.reports.<a href="./src/resources/managed-defense/vulnerability-discovery/reports.ts">get</a>(scanID, { ...params }) -> ReportGetResponse</code>
