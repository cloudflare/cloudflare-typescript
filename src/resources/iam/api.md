# IAM

## PermissionGroups

Types:

- <code><a href="./src/resources/iam/permission-groups.ts">PermissionGroupListResponse</a></code>
- <code><a href="./src/resources/iam/permission-groups.ts">PermissionGroupGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/iam/permission_groups">client.iam.permissionGroups.<a href="./src/resources/iam/permission-groups.ts">list</a>({ ...params }) -> PermissionGroupListResponsesV4PagePaginationArray</code>
- <code title="get /accounts/{account_id}/iam/permission_groups/{permission_group_id}">client.iam.permissionGroups.<a href="./src/resources/iam/permission-groups.ts">get</a>(permissionGroupId, { ...params }) -> PermissionGroupGetResponse</code>

## ResourceGroups

Types:

- <code><a href="./src/resources/iam/resource-groups.ts">ResourceGroupCreateResponse</a></code>
- <code><a href="./src/resources/iam/resource-groups.ts">ResourceGroupUpdateResponse</a></code>
- <code><a href="./src/resources/iam/resource-groups.ts">ResourceGroupListResponse</a></code>
- <code><a href="./src/resources/iam/resource-groups.ts">ResourceGroupDeleteResponse</a></code>
- <code><a href="./src/resources/iam/resource-groups.ts">ResourceGroupGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/iam/resource_groups">client.iam.resourceGroups.<a href="./src/resources/iam/resource-groups.ts">create</a>({ ...params }) -> ResourceGroupCreateResponse</code>
- <code title="put /accounts/{account_id}/iam/resource_groups/{resource_group_id}">client.iam.resourceGroups.<a href="./src/resources/iam/resource-groups.ts">update</a>(resourceGroupId, { ...params }) -> ResourceGroupUpdateResponse</code>
- <code title="get /accounts/{account_id}/iam/resource_groups">client.iam.resourceGroups.<a href="./src/resources/iam/resource-groups.ts">list</a>({ ...params }) -> ResourceGroupListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/iam/resource_groups/{resource_group_id}">client.iam.resourceGroups.<a href="./src/resources/iam/resource-groups.ts">delete</a>(resourceGroupId, { ...params }) -> ResourceGroupDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/iam/resource_groups/{resource_group_id}">client.iam.resourceGroups.<a href="./src/resources/iam/resource-groups.ts">get</a>(resourceGroupId, { ...params }) -> ResourceGroupGetResponse</code>

## UserGroups

Types:

- <code><a href="./src/resources/iam/user-groups/user-groups.ts">UserGroupCreateResponse</a></code>
- <code><a href="./src/resources/iam/user-groups/user-groups.ts">UserGroupUpdateResponse</a></code>
- <code><a href="./src/resources/iam/user-groups/user-groups.ts">UserGroupListResponse</a></code>
- <code><a href="./src/resources/iam/user-groups/user-groups.ts">UserGroupDeleteResponse</a></code>
- <code><a href="./src/resources/iam/user-groups/user-groups.ts">UserGroupGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/iam/user_groups">client.iam.userGroups.<a href="./src/resources/iam/user-groups/user-groups.ts">create</a>({ ...params }) -> UserGroupCreateResponse</code>
- <code title="put /accounts/{account_id}/iam/user_groups/{user_group_id}">client.iam.userGroups.<a href="./src/resources/iam/user-groups/user-groups.ts">update</a>(userGroupId, { ...params }) -> UserGroupUpdateResponse</code>
- <code title="get /accounts/{account_id}/iam/user_groups">client.iam.userGroups.<a href="./src/resources/iam/user-groups/user-groups.ts">list</a>({ ...params }) -> UserGroupListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/iam/user_groups/{user_group_id}">client.iam.userGroups.<a href="./src/resources/iam/user-groups/user-groups.ts">delete</a>(userGroupId, { ...params }) -> UserGroupDeleteResponse | null</code>
- <code title="get /accounts/{account_id}/iam/user_groups/{user_group_id}">client.iam.userGroups.<a href="./src/resources/iam/user-groups/user-groups.ts">get</a>(userGroupId, { ...params }) -> UserGroupGetResponse</code>

### Members

Types:

- <code><a href="./src/resources/iam/user-groups/members.ts">MemberCreateResponse</a></code>
- <code><a href="./src/resources/iam/user-groups/members.ts">MemberUpdateResponse</a></code>
- <code><a href="./src/resources/iam/user-groups/members.ts">MemberListResponse</a></code>
- <code><a href="./src/resources/iam/user-groups/members.ts">MemberDeleteResponse</a></code>
- <code><a href="./src/resources/iam/user-groups/members.ts">MemberGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/iam/user_groups/{user_group_id}/members">client.iam.userGroups.members.<a href="./src/resources/iam/user-groups/members.ts">create</a>(userGroupId, [ ...members ]) -> MemberCreateResponsesSinglePage</code>
- <code title="put /accounts/{account_id}/iam/user_groups/{user_group_id}/members">client.iam.userGroups.members.<a href="./src/resources/iam/user-groups/members.ts">update</a>(userGroupId, [ ...members ]) -> MemberUpdateResponsesSinglePage</code>
- <code title="get /accounts/{account_id}/iam/user_groups/{user_group_id}/members">client.iam.userGroups.members.<a href="./src/resources/iam/user-groups/members.ts">list</a>(userGroupId, { ...params }) -> MemberListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/iam/user_groups/{user_group_id}/members/{member_id}">client.iam.userGroups.members.<a href="./src/resources/iam/user-groups/members.ts">delete</a>(userGroupId, memberId, { ...params }) -> MemberDeleteResponse</code>
- <code title="get /accounts/{account_id}/iam/user_groups/{user_group_id}/members/{member_id}">client.iam.userGroups.members.<a href="./src/resources/iam/user-groups/members.ts">get</a>(userGroupId, memberId, { ...params }) -> MemberGetResponse</code>

## SSO

Types:

- <code><a href="./src/resources/iam/sso.ts">SSOCreateResponse</a></code>
- <code><a href="./src/resources/iam/sso.ts">SSOUpdateResponse</a></code>
- <code><a href="./src/resources/iam/sso.ts">SSOListResponse</a></code>
- <code><a href="./src/resources/iam/sso.ts">SSODeleteResponse</a></code>
- <code><a href="./src/resources/iam/sso.ts">SSOBeginVerificationResponse</a></code>
- <code><a href="./src/resources/iam/sso.ts">SSOGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/sso_connectors">client.iam.sso.<a href="./src/resources/iam/sso.ts">create</a>({ ...params }) -> SSOCreateResponse</code>
- <code title="patch /accounts/{account_id}/sso_connectors/{sso_connector_id}">client.iam.sso.<a href="./src/resources/iam/sso.ts">update</a>(ssoConnectorId, { ...params }) -> SSOUpdateResponse</code>
- <code title="get /accounts/{account_id}/sso_connectors">client.iam.sso.<a href="./src/resources/iam/sso.ts">list</a>({ ...params }) -> SSOListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/sso_connectors/{sso_connector_id}">client.iam.sso.<a href="./src/resources/iam/sso.ts">delete</a>(ssoConnectorId, { ...params }) -> SSODeleteResponse | null</code>
- <code title="post /accounts/{account_id}/sso_connectors/{sso_connector_id}/begin_verification">client.iam.sso.<a href="./src/resources/iam/sso.ts">beginVerification</a>(ssoConnectorId, { ...params }) -> SSOBeginVerificationResponse</code>
- <code title="get /accounts/{account_id}/sso_connectors/{sso_connector_id}">client.iam.sso.<a href="./src/resources/iam/sso.ts">get</a>(ssoConnectorId, { ...params }) -> SSOGetResponse</code>
