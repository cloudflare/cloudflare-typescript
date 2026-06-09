# Flagship

## Apps

Types:

- <code><a href="./src/resources/flagship/apps/apps.ts">AppCreateResponse</a></code>
- <code><a href="./src/resources/flagship/apps/apps.ts">AppUpdateResponse</a></code>
- <code><a href="./src/resources/flagship/apps/apps.ts">AppListResponse</a></code>
- <code><a href="./src/resources/flagship/apps/apps.ts">AppDeleteResponse</a></code>
- <code><a href="./src/resources/flagship/apps/apps.ts">AppGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/flagship/apps">client.flagship.apps.<a href="./src/resources/flagship/apps/apps.ts">create</a>({ ...params }) -> AppCreateResponse</code>
- <code title="put /accounts/{account_id}/flagship/apps/{app_id}">client.flagship.apps.<a href="./src/resources/flagship/apps/apps.ts">update</a>(appId, { ...params }) -> AppUpdateResponse</code>
- <code title="get /accounts/{account_id}/flagship/apps">client.flagship.apps.<a href="./src/resources/flagship/apps/apps.ts">list</a>({ ...params }) -> AppListResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/flagship/apps/{app_id}">client.flagship.apps.<a href="./src/resources/flagship/apps/apps.ts">delete</a>(appId, { ...params }) -> AppDeleteResponse</code>
- <code title="get /accounts/{account_id}/flagship/apps/{app_id}">client.flagship.apps.<a href="./src/resources/flagship/apps/apps.ts">get</a>(appId, { ...params }) -> AppGetResponse</code>

### Flags

Types:

- <code><a href="./src/resources/flagship/apps/flags/flags.ts">FlagCreateResponse</a></code>
- <code><a href="./src/resources/flagship/apps/flags/flags.ts">FlagUpdateResponse</a></code>
- <code><a href="./src/resources/flagship/apps/flags/flags.ts">FlagListResponse</a></code>
- <code><a href="./src/resources/flagship/apps/flags/flags.ts">FlagDeleteResponse</a></code>
- <code><a href="./src/resources/flagship/apps/flags/flags.ts">FlagGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/flagship/apps/{app_id}/flags">client.flagship.apps.flags.<a href="./src/resources/flagship/apps/flags/flags.ts">create</a>(appId, { ...params }) -> FlagCreateResponse</code>
- <code title="put /accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}">client.flagship.apps.flags.<a href="./src/resources/flagship/apps/flags/flags.ts">update</a>(appId, flagKey, { ...params }) -> FlagUpdateResponse</code>
- <code title="get /accounts/{account_id}/flagship/apps/{app_id}/flags">client.flagship.apps.flags.<a href="./src/resources/flagship/apps/flags/flags.ts">list</a>(appId, { ...params }) -> FlagListResponsesCursorPaginationAfter</code>
- <code title="delete /accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}">client.flagship.apps.flags.<a href="./src/resources/flagship/apps/flags/flags.ts">delete</a>(appId, flagKey, { ...params }) -> FlagDeleteResponse</code>
- <code title="get /accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}">client.flagship.apps.flags.<a href="./src/resources/flagship/apps/flags/flags.ts">get</a>(appId, flagKey, { ...params }) -> FlagGetResponse</code>

#### Changelog

Types:

- <code><a href="./src/resources/flagship/apps/flags/changelog.ts">ChangelogListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/flagship/apps/{app_id}/flags/{flag_key}/changelog">client.flagship.apps.flags.changelog.<a href="./src/resources/flagship/apps/flags/changelog.ts">list</a>(appId, flagKey, { ...params }) -> ChangelogListResponsesCursorPaginationAfter</code>

### Evaluate

Types:

- <code><a href="./src/resources/flagship/apps/evaluate.ts">EvaluateGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/flagship/apps/{app_id}/evaluate">client.flagship.apps.evaluate.<a href="./src/resources/flagship/apps/evaluate.ts">get</a>(appId, { ...params }) -> EvaluateGetResponse</code>
