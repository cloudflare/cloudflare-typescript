# Firewall

## Lockdowns

Types:

- <code><a href="./src/resources/firewall/lockdowns.ts">Configuration</a></code>
- <code><a href="./src/resources/firewall/lockdowns.ts">Lockdown</a></code>
- <code><a href="./src/resources/firewall/lockdowns.ts">LockdownCIDRConfiguration</a></code>
- <code><a href="./src/resources/firewall/lockdowns.ts">LockdownIPConfiguration</a></code>
- <code><a href="./src/resources/firewall/lockdowns.ts">LockdownURL</a></code>
- <code><a href="./src/resources/firewall/lockdowns.ts">LockdownDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/firewall/lockdowns">client.firewall.lockdowns.<a href="./src/resources/firewall/lockdowns.ts">create</a>({ ...params }) -> Lockdown</code>
- <code title="put /zones/{zone_id}/firewall/lockdowns/{lock_downs_id}">client.firewall.lockdowns.<a href="./src/resources/firewall/lockdowns.ts">update</a>(lockDownsID, { ...params }) -> Lockdown</code>
- <code title="get /zones/{zone_id}/firewall/lockdowns">client.firewall.lockdowns.<a href="./src/resources/firewall/lockdowns.ts">list</a>({ ...params }) -> LockdownsV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/firewall/lockdowns/{lock_downs_id}">client.firewall.lockdowns.<a href="./src/resources/firewall/lockdowns.ts">delete</a>(lockDownsID, { ...params }) -> LockdownDeleteResponse</code>
- <code title="get /zones/{zone_id}/firewall/lockdowns/{lock_downs_id}">client.firewall.lockdowns.<a href="./src/resources/firewall/lockdowns.ts">get</a>(lockDownsID, { ...params }) -> Lockdown</code>

## Rules

Types:

- <code><a href="./src/resources/firewall/rules.ts">DeletedFilter</a></code>
- <code><a href="./src/resources/firewall/rules.ts">FirewallRule</a></code>
- <code><a href="./src/resources/firewall/rules.ts">Product</a></code>

Methods:

- <code title="post /zones/{zone_id}/firewall/rules">client.firewall.rules.<a href="./src/resources/firewall/rules.ts">create</a>({ ...params }) -> FirewallRulesSinglePage</code>
- <code title="put /zones/{zone_id}/firewall/rules/{rule_id}">client.firewall.rules.<a href="./src/resources/firewall/rules.ts">update</a>(ruleID, { ...params }) -> FirewallRule</code>
- <code title="get /zones/{zone_id}/firewall/rules">client.firewall.rules.<a href="./src/resources/firewall/rules.ts">list</a>({ ...params }) -> FirewallRulesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/firewall/rules/{rule_id}">client.firewall.rules.<a href="./src/resources/firewall/rules.ts">delete</a>(ruleID, { ...params }) -> FirewallRule</code>
- <code title="delete /zones/{zone_id}/firewall/rules">client.firewall.rules.<a href="./src/resources/firewall/rules.ts">bulkDelete</a>({ ...params }) -> FirewallRulesSinglePage</code>
- <code title="patch /zones/{zone_id}/firewall/rules">client.firewall.rules.<a href="./src/resources/firewall/rules.ts">bulkEdit</a>({ ...params }) -> FirewallRulesSinglePage</code>
- <code title="put /zones/{zone_id}/firewall/rules">client.firewall.rules.<a href="./src/resources/firewall/rules.ts">bulkUpdate</a>({ ...params }) -> FirewallRulesSinglePage</code>
- <code title="patch /zones/{zone_id}/firewall/rules/{rule_id}">client.firewall.rules.<a href="./src/resources/firewall/rules.ts">edit</a>(ruleID, { ...params }) -> FirewallRulesSinglePage</code>
- <code title="get /zones/{zone_id}/firewall/rules/{rule_id}">client.firewall.rules.<a href="./src/resources/firewall/rules.ts">get</a>(ruleID, { ...params }) -> FirewallRule</code>

## AccessRules

Types:

- <code><a href="./src/resources/firewall/access-rules.ts">AccessRuleCIDRConfiguration</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">AccessRuleIPConfiguration</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">ASNConfiguration</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">CountryConfiguration</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">IPV6Configuration</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">AccessRuleCreateResponse</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">AccessRuleListResponse</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">AccessRuleDeleteResponse</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">AccessRuleEditResponse</a></code>
- <code><a href="./src/resources/firewall/access-rules.ts">AccessRuleGetResponse</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/firewall/access_rules/rules">client.firewall.accessRules.<a href="./src/resources/firewall/access-rules.ts">create</a>({ ...params }) -> AccessRuleCreateResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/firewall/access_rules/rules">client.firewall.accessRules.<a href="./src/resources/firewall/access-rules.ts">list</a>({ ...params }) -> AccessRuleListResponsesV4PagePaginationArray</code>
- <code title="delete /{accounts_or_zones}/{account_or_zone_id}/firewall/access_rules/rules/{rule_id}">client.firewall.accessRules.<a href="./src/resources/firewall/access-rules.ts">delete</a>(ruleID, { ...params }) -> AccessRuleDeleteResponse | null</code>
- <code title="patch /{accounts_or_zones}/{account_or_zone_id}/firewall/access_rules/rules/{rule_id}">client.firewall.accessRules.<a href="./src/resources/firewall/access-rules.ts">edit</a>(ruleID, { ...params }) -> AccessRuleEditResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/firewall/access_rules/rules/{rule_id}">client.firewall.accessRules.<a href="./src/resources/firewall/access-rules.ts">get</a>(ruleID, { ...params }) -> AccessRuleGetResponse</code>

## UARules

Types:

- <code><a href="./src/resources/firewall/ua-rules.ts">UARuleCreateResponse</a></code>
- <code><a href="./src/resources/firewall/ua-rules.ts">UARuleUpdateResponse</a></code>
- <code><a href="./src/resources/firewall/ua-rules.ts">UARuleListResponse</a></code>
- <code><a href="./src/resources/firewall/ua-rules.ts">UARuleDeleteResponse</a></code>
- <code><a href="./src/resources/firewall/ua-rules.ts">UARuleGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/firewall/ua_rules">client.firewall.uaRules.<a href="./src/resources/firewall/ua-rules.ts">create</a>({ ...params }) -> UARuleCreateResponse</code>
- <code title="put /zones/{zone_id}/firewall/ua_rules/{ua_rule_id}">client.firewall.uaRules.<a href="./src/resources/firewall/ua-rules.ts">update</a>(uaRuleID, { ...params }) -> UARuleUpdateResponse</code>
- <code title="get /zones/{zone_id}/firewall/ua_rules">client.firewall.uaRules.<a href="./src/resources/firewall/ua-rules.ts">list</a>({ ...params }) -> UARuleListResponsesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/firewall/ua_rules/{ua_rule_id}">client.firewall.uaRules.<a href="./src/resources/firewall/ua-rules.ts">delete</a>(uaRuleID, { ...params }) -> UARuleDeleteResponse</code>
- <code title="get /zones/{zone_id}/firewall/ua_rules/{ua_rule_id}">client.firewall.uaRules.<a href="./src/resources/firewall/ua-rules.ts">get</a>(uaRuleID, { ...params }) -> UARuleGetResponse</code>

## WAF

### Overrides

Types:

- <code><a href="./src/resources/firewall/waf/overrides.ts">Override</a></code>
- <code><a href="./src/resources/firewall/waf/overrides.ts">OverrideURL</a></code>
- <code><a href="./src/resources/firewall/waf/overrides.ts">RewriteAction</a></code>
- <code><a href="./src/resources/firewall/waf/overrides.ts">WAFRule</a></code>
- <code><a href="./src/resources/firewall/waf/overrides.ts">OverrideDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/firewall/waf/overrides">client.firewall.waf.overrides.<a href="./src/resources/firewall/waf/overrides.ts">create</a>({ ...params }) -> Override</code>
- <code title="put /zones/{zone_id}/firewall/waf/overrides/{overrides_id}">client.firewall.waf.overrides.<a href="./src/resources/firewall/waf/overrides.ts">update</a>(overridesID, { ...params }) -> Override</code>
- <code title="get /zones/{zone_id}/firewall/waf/overrides">client.firewall.waf.overrides.<a href="./src/resources/firewall/waf/overrides.ts">list</a>({ ...params }) -> OverridesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/firewall/waf/overrides/{overrides_id}">client.firewall.waf.overrides.<a href="./src/resources/firewall/waf/overrides.ts">delete</a>(overridesID, { ...params }) -> OverrideDeleteResponse</code>
- <code title="get /zones/{zone_id}/firewall/waf/overrides/{overrides_id}">client.firewall.waf.overrides.<a href="./src/resources/firewall/waf/overrides.ts">get</a>(overridesID, { ...params }) -> Override</code>

### Packages

Types:

- <code><a href="./src/resources/firewall/waf/packages/packages.ts">PackageListResponse</a></code>
- <code><a href="./src/resources/firewall/waf/packages/packages.ts">PackageGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/firewall/waf/packages">client.firewall.waf.packages.<a href="./src/resources/firewall/waf/packages/packages.ts">list</a>({ ...params }) -> PackageListResponsesV4PagePaginationArray</code>
- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}">client.firewall.waf.packages.<a href="./src/resources/firewall/waf/packages/packages.ts">get</a>(packageID, { ...params }) -> PackageGetResponse</code>

#### Groups

Types:

- <code><a href="./src/resources/firewall/waf/packages/groups.ts">Group</a></code>
- <code><a href="./src/resources/firewall/waf/packages/groups.ts">GroupEditResponse</a></code>
- <code><a href="./src/resources/firewall/waf/packages/groups.ts">GroupGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/groups">client.firewall.waf.packages.groups.<a href="./src/resources/firewall/waf/packages/groups.ts">list</a>(packageID, { ...params }) -> GroupsV4PagePaginationArray</code>
- <code title="patch /zones/{zone_id}/firewall/waf/packages/{package_id}/groups/{group_id}">client.firewall.waf.packages.groups.<a href="./src/resources/firewall/waf/packages/groups.ts">edit</a>(groupID, { ...params }) -> GroupEditResponse</code>
- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/groups/{group_id}">client.firewall.waf.packages.groups.<a href="./src/resources/firewall/waf/packages/groups.ts">get</a>(groupID, { ...params }) -> GroupGetResponse</code>

#### Rules

Types:

- <code><a href="./src/resources/firewall/waf/packages/rules.ts">AllowedModesAnomaly</a></code>
- <code><a href="./src/resources/firewall/waf/packages/rules.ts">WAFRuleGroup</a></code>
- <code><a href="./src/resources/firewall/waf/packages/rules.ts">RuleListResponse</a></code>
- <code><a href="./src/resources/firewall/waf/packages/rules.ts">RuleEditResponse</a></code>
- <code><a href="./src/resources/firewall/waf/packages/rules.ts">RuleGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/rules">client.firewall.waf.packages.rules.<a href="./src/resources/firewall/waf/packages/rules.ts">list</a>(packageID, { ...params }) -> RuleListResponsesV4PagePaginationArray</code>
- <code title="patch /zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{rule_id}">client.firewall.waf.packages.rules.<a href="./src/resources/firewall/waf/packages/rules.ts">edit</a>(ruleID, { ...params }) -> RuleEditResponse</code>
- <code title="get /zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{rule_id}">client.firewall.waf.packages.rules.<a href="./src/resources/firewall/waf/packages/rules.ts">get</a>(ruleID, { ...params }) -> RuleGetResponse</code>
