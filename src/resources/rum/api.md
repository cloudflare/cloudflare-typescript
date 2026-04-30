# RUM

## SiteInfo

Types:

- <code><a href="./src/resources/rum/site-info.ts">Site</a></code>
- <code><a href="./src/resources/rum/site-info.ts">SiteInfoDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/rum/site_info">client.rum.siteInfo.<a href="./src/resources/rum/site-info.ts">create</a>({ ...params }) -> Site</code>
- <code title="put /accounts/{account_id}/rum/site_info/{site_id}">client.rum.siteInfo.<a href="./src/resources/rum/site-info.ts">update</a>(siteId, { ...params }) -> Site</code>
- <code title="get /accounts/{account_id}/rum/site_info/list">client.rum.siteInfo.<a href="./src/resources/rum/site-info.ts">list</a>({ ...params }) -> SitesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/rum/site_info/{site_id}">client.rum.siteInfo.<a href="./src/resources/rum/site-info.ts">delete</a>(siteId, { ...params }) -> SiteInfoDeleteResponse</code>
- <code title="get /accounts/{account_id}/rum/site_info/{site_id}">client.rum.siteInfo.<a href="./src/resources/rum/site-info.ts">get</a>(siteId, { ...params }) -> Site</code>

## Rules

Types:

- <code><a href="./src/resources/rum/rules.ts">RUMRule</a></code>
- <code><a href="./src/resources/rum/rules.ts">RuleListResponse</a></code>
- <code><a href="./src/resources/rum/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/rum/rules.ts">RuleBulkCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/rum/v2/{ruleset_id}/rule">client.rum.rules.<a href="./src/resources/rum/rules.ts">create</a>(rulesetId, { ...params }) -> RUMRule</code>
- <code title="put /accounts/{account_id}/rum/v2/{ruleset_id}/rule/{rule_id}">client.rum.rules.<a href="./src/resources/rum/rules.ts">update</a>(rulesetId, ruleId, { ...params }) -> RUMRule</code>
- <code title="get /accounts/{account_id}/rum/v2/{ruleset_id}/rules">client.rum.rules.<a href="./src/resources/rum/rules.ts">list</a>(rulesetId, { ...params }) -> RuleListResponse</code>
- <code title="delete /accounts/{account_id}/rum/v2/{ruleset_id}/rule/{rule_id}">client.rum.rules.<a href="./src/resources/rum/rules.ts">delete</a>(rulesetId, ruleId, { ...params }) -> RuleDeleteResponse</code>
- <code title="post /accounts/{account_id}/rum/v2/{ruleset_id}/rules">client.rum.rules.<a href="./src/resources/rum/rules.ts">bulkCreate</a>(rulesetId, { ...params }) -> RuleBulkCreateResponse</code>
