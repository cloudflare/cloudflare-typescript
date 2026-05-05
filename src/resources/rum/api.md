# RUM

## SiteInfo

Types:

- <code><a href="./src/resources/rum/site-info.ts">Site</a></code>
- <code><a href="./src/resources/rum/site-info.ts">SiteInfoDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/rum/site_info">client.rum.siteInfo.<a href="./src/resources/rum/site-info.ts">create</a>({ ...params }) -> Site</code>
- <code title="put /accounts/{account_id}/rum/site_info/{site_id}">client.rum.siteInfo.<a href="./src/resources/rum/site-info.ts">update</a>(siteID, { ...params }) -> Site</code>
- <code title="get /accounts/{account_id}/rum/site_info/list">client.rum.siteInfo.<a href="./src/resources/rum/site-info.ts">list</a>({ ...params }) -> SitesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/rum/site_info/{site_id}">client.rum.siteInfo.<a href="./src/resources/rum/site-info.ts">delete</a>(siteID, { ...params }) -> SiteInfoDeleteResponse</code>
- <code title="get /accounts/{account_id}/rum/site_info/{site_id}">client.rum.siteInfo.<a href="./src/resources/rum/site-info.ts">get</a>(siteID, { ...params }) -> Site</code>

## Rules

Types:

- <code><a href="./src/resources/rum/rules.ts">RUMRule</a></code>
- <code><a href="./src/resources/rum/rules.ts">RuleListResponse</a></code>
- <code><a href="./src/resources/rum/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/rum/rules.ts">RuleBulkCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/rum/v2/{ruleset_id}/rule">client.rum.rules.<a href="./src/resources/rum/rules.ts">create</a>(rulesetID, { ...params }) -> RUMRule</code>
- <code title="put /accounts/{account_id}/rum/v2/{ruleset_id}/rule/{rule_id}">client.rum.rules.<a href="./src/resources/rum/rules.ts">update</a>(ruleID, { ...params }) -> RUMRule</code>
- <code title="get /accounts/{account_id}/rum/v2/{ruleset_id}/rules">client.rum.rules.<a href="./src/resources/rum/rules.ts">list</a>(rulesetID, { ...params }) -> RuleListResponse</code>
- <code title="delete /accounts/{account_id}/rum/v2/{ruleset_id}/rule/{rule_id}">client.rum.rules.<a href="./src/resources/rum/rules.ts">delete</a>(ruleID, { ...params }) -> RuleDeleteResponse</code>
- <code title="post /accounts/{account_id}/rum/v2/{ruleset_id}/rules">client.rum.rules.<a href="./src/resources/rum/rules.ts">bulkCreate</a>(rulesetID, { ...params }) -> RuleBulkCreateResponse</code>
