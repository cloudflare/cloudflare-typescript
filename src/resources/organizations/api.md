# Organizations

Types:

- <code><a href="./src/resources/organizations/organizations.ts">Organization</a></code>
- <code><a href="./src/resources/organizations/organizations.ts">OrganizationDeleteResponse</a></code>

Methods:

- <code title="post /organizations">client.organizations.<a href="./src/resources/organizations/organizations.ts">create</a>({ ...params }) -> Organization</code>
- <code title="put /organizations/{organization_id}">client.organizations.<a href="./src/resources/organizations/organizations.ts">update</a>(organizationID, { ...params }) -> Organization</code>
- <code title="get /organizations">client.organizations.<a href="./src/resources/organizations/organizations.ts">list</a>({ ...params }) -> OrganizationsSinglePage</code>
- <code title="delete /organizations/{organization_id}">client.organizations.<a href="./src/resources/organizations/organizations.ts">delete</a>(organizationID) -> OrganizationDeleteResponse</code>
- <code title="get /organizations/{organization_id}">client.organizations.<a href="./src/resources/organizations/organizations.ts">get</a>(organizationID) -> Organization</code>

## OrganizationProfile

Types:

- <code><a href="./src/resources/organizations/organization-profile.ts">OrganizationProfile</a></code>

Methods:

- <code title="put /organizations/{organization_id}/profile">client.organizations.organizationProfile.<a href="./src/resources/organizations/organization-profile.ts">update</a>(organizationID, { ...params }) -> void</code>
- <code title="get /organizations/{organization_id}/profile">client.organizations.organizationProfile.<a href="./src/resources/organizations/organization-profile.ts">get</a>(organizationID) -> organizations_api_ProfileResponse.Result</code>

## Logs

### Audit

Types:

- <code><a href="./src/resources/organizations/logs/audit.ts">AuditListResponse</a></code>

Methods:

- <code title="get /organizations/{organization_id}/logs/audit">client.organizations.logs.audit.<a href="./src/resources/organizations/logs/audit.ts">list</a>(organizationID, { ...params }) -> AuditListResponsesCursorPaginationAfter</code>
