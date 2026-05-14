# DDoSProtection

## AdvancedTCPProtection

### Allowlist

Types:

- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/allowlist/allowlist.ts">AllowlistCreateResponse</a></code>
- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/allowlist/allowlist.ts">AllowlistListResponse</a></code>
- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/allowlist/allowlist.ts">AllowlistBulkDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/advanced_tcp_protection/configs/allowlist">client.DDoSProtection.advancedTCPProtection.allowlist.<a href="./src/resources/ddos-protection/advanced-tcp-protection/allowlist/allowlist.ts">create</a>({ ...params }) -> AllowlistCreateResponse</code>
- <code title="get /accounts/{account_id}/magic/advanced_tcp_protection/configs/allowlist">client.DDoSProtection.advancedTCPProtection.allowlist.<a href="./src/resources/ddos-protection/advanced-tcp-protection/allowlist/allowlist.ts">list</a>({ ...params }) -> AllowlistListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/magic/advanced_tcp_protection/configs/allowlist">client.DDoSProtection.advancedTCPProtection.allowlist.<a href="./src/resources/ddos-protection/advanced-tcp-protection/allowlist/allowlist.ts">bulkDelete</a>({ ...params }) -> AllowlistBulkDeleteResponse</code>

#### Items

Types:

- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/allowlist/items.ts">ItemDeleteResponse</a></code>
- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/allowlist/items.ts">ItemEditResponse</a></code>
- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/allowlist/items.ts">ItemGetResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/magic/advanced_tcp_protection/configs/allowlist/{prefix_id}">client.DDoSProtection.advancedTCPProtection.allowlist.items.<a href="./src/resources/ddos-protection/advanced-tcp-protection/allowlist/items.ts">delete</a>(prefixId, { ...params }) -> ItemDeleteResponse</code>
- <code title="patch /accounts/{account_id}/magic/advanced_tcp_protection/configs/allowlist/{prefix_id}">client.DDoSProtection.advancedTCPProtection.allowlist.items.<a href="./src/resources/ddos-protection/advanced-tcp-protection/allowlist/items.ts">edit</a>(prefixId, { ...params }) -> ItemEditResponse</code>
- <code title="get /accounts/{account_id}/magic/advanced_tcp_protection/configs/allowlist/{prefix_id}">client.DDoSProtection.advancedTCPProtection.allowlist.items.<a href="./src/resources/ddos-protection/advanced-tcp-protection/allowlist/items.ts">get</a>(prefixId, { ...params }) -> ItemGetResponse</code>

### Prefixes

Types:

- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/prefixes/prefixes.ts">PrefixCreateResponse</a></code>
- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/prefixes/prefixes.ts">PrefixListResponse</a></code>
- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/prefixes/prefixes.ts">PrefixBulkCreateResponse</a></code>
- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/prefixes/prefixes.ts">PrefixBulkDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/advanced_tcp_protection/configs/prefixes">client.DDoSProtection.advancedTCPProtection.prefixes.<a href="./src/resources/ddos-protection/advanced-tcp-protection/prefixes/prefixes.ts">create</a>({ ...params }) -> PrefixCreateResponse</code>
- <code title="get /accounts/{account_id}/magic/advanced_tcp_protection/configs/prefixes">client.DDoSProtection.advancedTCPProtection.prefixes.<a href="./src/resources/ddos-protection/advanced-tcp-protection/prefixes/prefixes.ts">list</a>({ ...params }) -> PrefixListResponsesV4PagePaginationArray</code>
- <code title="post /accounts/{account_id}/magic/advanced_tcp_protection/configs/prefixes/bulk">client.DDoSProtection.advancedTCPProtection.prefixes.<a href="./src/resources/ddos-protection/advanced-tcp-protection/prefixes/prefixes.ts">bulkCreate</a>([ ...body ]) -> PrefixBulkCreateResponsesSinglePage</code>
- <code title="delete /accounts/{account_id}/magic/advanced_tcp_protection/configs/prefixes">client.DDoSProtection.advancedTCPProtection.prefixes.<a href="./src/resources/ddos-protection/advanced-tcp-protection/prefixes/prefixes.ts">bulkDelete</a>({ ...params }) -> PrefixBulkDeleteResponse</code>

#### Items

Types:

- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/prefixes/items.ts">ItemDeleteResponse</a></code>
- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/prefixes/items.ts">ItemEditResponse</a></code>
- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/prefixes/items.ts">ItemGetResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/magic/advanced_tcp_protection/configs/prefixes/{prefix_id}">client.DDoSProtection.advancedTCPProtection.prefixes.items.<a href="./src/resources/ddos-protection/advanced-tcp-protection/prefixes/items.ts">delete</a>(prefixId, { ...params }) -> ItemDeleteResponse</code>
- <code title="patch /accounts/{account_id}/magic/advanced_tcp_protection/configs/prefixes/{prefix_id}">client.DDoSProtection.advancedTCPProtection.prefixes.items.<a href="./src/resources/ddos-protection/advanced-tcp-protection/prefixes/items.ts">edit</a>(prefixId, { ...params }) -> ItemEditResponse</code>
- <code title="get /accounts/{account_id}/magic/advanced_tcp_protection/configs/prefixes/{prefix_id}">client.DDoSProtection.advancedTCPProtection.prefixes.items.<a href="./src/resources/ddos-protection/advanced-tcp-protection/prefixes/items.ts">get</a>(prefixId, { ...params }) -> ItemGetResponse</code>

### SynProtection

#### Filters

Types:

- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/syn-protection/filters/filters.ts">FilterCreateResponse</a></code>
- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/syn-protection/filters/filters.ts">FilterListResponse</a></code>
- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/syn-protection/filters/filters.ts">FilterBulkDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/filters">client.DDoSProtection.advancedTCPProtection.synProtection.filters.<a href="./src/resources/ddos-protection/advanced-tcp-protection/syn-protection/filters/filters.ts">create</a>({ ...params }) -> FilterCreateResponse</code>
- <code title="get /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/filters">client.DDoSProtection.advancedTCPProtection.synProtection.filters.<a href="./src/resources/ddos-protection/advanced-tcp-protection/syn-protection/filters/filters.ts">list</a>({ ...params }) -> FilterListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/filters">client.DDoSProtection.advancedTCPProtection.synProtection.filters.<a href="./src/resources/ddos-protection/advanced-tcp-protection/syn-protection/filters/filters.ts">bulkDelete</a>({ ...params }) -> FilterBulkDeleteResponse</code>

##### Items

Types:

- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/syn-protection/filters/items.ts">ItemDeleteResponse</a></code>
- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/syn-protection/filters/items.ts">ItemEditResponse</a></code>
- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/syn-protection/filters/items.ts">ItemGetResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/filters/{filter_id}">client.DDoSProtection.advancedTCPProtection.synProtection.filters.items.<a href="./src/resources/ddos-protection/advanced-tcp-protection/syn-protection/filters/items.ts">delete</a>(filterId, { ...params }) -> ItemDeleteResponse</code>
- <code title="patch /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/filters/{filter_id}">client.DDoSProtection.advancedTCPProtection.synProtection.filters.items.<a href="./src/resources/ddos-protection/advanced-tcp-protection/syn-protection/filters/items.ts">edit</a>(filterId, { ...params }) -> ItemEditResponse</code>
- <code title="get /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/filters/{filter_id}">client.DDoSProtection.advancedTCPProtection.synProtection.filters.items.<a href="./src/resources/ddos-protection/advanced-tcp-protection/syn-protection/filters/items.ts">get</a>(filterId, { ...params }) -> ItemGetResponse</code>

#### Rules

Types:

- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/syn-protection/rules/rules.ts">RuleCreateResponse</a></code>
- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/syn-protection/rules/rules.ts">RuleListResponse</a></code>
- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/syn-protection/rules/rules.ts">RuleBulkDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/rules">client.DDoSProtection.advancedTCPProtection.synProtection.rules.<a href="./src/resources/ddos-protection/advanced-tcp-protection/syn-protection/rules/rules.ts">create</a>({ ...params }) -> RuleCreateResponse</code>
- <code title="get /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/rules">client.DDoSProtection.advancedTCPProtection.synProtection.rules.<a href="./src/resources/ddos-protection/advanced-tcp-protection/syn-protection/rules/rules.ts">list</a>({ ...params }) -> RuleListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/rules">client.DDoSProtection.advancedTCPProtection.synProtection.rules.<a href="./src/resources/ddos-protection/advanced-tcp-protection/syn-protection/rules/rules.ts">bulkDelete</a>({ ...params }) -> RuleBulkDeleteResponse</code>

##### Items

Types:

- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/syn-protection/rules/items.ts">ItemDeleteResponse</a></code>
- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/syn-protection/rules/items.ts">ItemEditResponse</a></code>
- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/syn-protection/rules/items.ts">ItemGetResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/rules/{rule_id}">client.DDoSProtection.advancedTCPProtection.synProtection.rules.items.<a href="./src/resources/ddos-protection/advanced-tcp-protection/syn-protection/rules/items.ts">delete</a>(ruleId, { ...params }) -> ItemDeleteResponse</code>
- <code title="patch /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/rules/{rule_id}">client.DDoSProtection.advancedTCPProtection.synProtection.rules.items.<a href="./src/resources/ddos-protection/advanced-tcp-protection/syn-protection/rules/items.ts">edit</a>(ruleId, { ...params }) -> ItemEditResponse</code>
- <code title="get /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/rules/{rule_id}">client.DDoSProtection.advancedTCPProtection.synProtection.rules.items.<a href="./src/resources/ddos-protection/advanced-tcp-protection/syn-protection/rules/items.ts">get</a>(ruleId, { ...params }) -> ItemGetResponse</code>

### TCPFlowProtection

#### Filters

Types:

- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/tcp-flow-protection/filters/filters.ts">FilterCreateResponse</a></code>
- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/tcp-flow-protection/filters/filters.ts">FilterListResponse</a></code>
- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/tcp-flow-protection/filters/filters.ts">FilterBulkDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters">client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.filters.<a href="./src/resources/ddos-protection/advanced-tcp-protection/tcp-flow-protection/filters/filters.ts">create</a>({ ...params }) -> FilterCreateResponse</code>
- <code title="get /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters">client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.filters.<a href="./src/resources/ddos-protection/advanced-tcp-protection/tcp-flow-protection/filters/filters.ts">list</a>({ ...params }) -> FilterListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters">client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.filters.<a href="./src/resources/ddos-protection/advanced-tcp-protection/tcp-flow-protection/filters/filters.ts">bulkDelete</a>({ ...params }) -> FilterBulkDeleteResponse</code>

##### Items

Types:

- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/tcp-flow-protection/filters/items.ts">ItemDeleteResponse</a></code>
- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/tcp-flow-protection/filters/items.ts">ItemEditResponse</a></code>
- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/tcp-flow-protection/filters/items.ts">ItemGetResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters/{filter_id}">client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.filters.items.<a href="./src/resources/ddos-protection/advanced-tcp-protection/tcp-flow-protection/filters/items.ts">delete</a>(filterId, { ...params }) -> ItemDeleteResponse</code>
- <code title="patch /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters/{filter_id}">client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.filters.items.<a href="./src/resources/ddos-protection/advanced-tcp-protection/tcp-flow-protection/filters/items.ts">edit</a>(filterId, { ...params }) -> ItemEditResponse</code>
- <code title="get /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters/{filter_id}">client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.filters.items.<a href="./src/resources/ddos-protection/advanced-tcp-protection/tcp-flow-protection/filters/items.ts">get</a>(filterId, { ...params }) -> ItemGetResponse</code>

#### Rules

Types:

- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/tcp-flow-protection/rules/rules.ts">RuleCreateResponse</a></code>
- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/tcp-flow-protection/rules/rules.ts">RuleListResponse</a></code>
- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/tcp-flow-protection/rules/rules.ts">RuleBulkDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules">client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.rules.<a href="./src/resources/ddos-protection/advanced-tcp-protection/tcp-flow-protection/rules/rules.ts">create</a>({ ...params }) -> RuleCreateResponse</code>
- <code title="get /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules">client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.rules.<a href="./src/resources/ddos-protection/advanced-tcp-protection/tcp-flow-protection/rules/rules.ts">list</a>({ ...params }) -> RuleListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules">client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.rules.<a href="./src/resources/ddos-protection/advanced-tcp-protection/tcp-flow-protection/rules/rules.ts">bulkDelete</a>({ ...params }) -> RuleBulkDeleteResponse</code>

##### Items

Types:

- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/tcp-flow-protection/rules/items.ts">ItemDeleteResponse</a></code>
- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/tcp-flow-protection/rules/items.ts">ItemEditResponse</a></code>
- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/tcp-flow-protection/rules/items.ts">ItemGetResponse</a></code>

Methods:

- <code title="delete /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules/{rule_id}">client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.rules.items.<a href="./src/resources/ddos-protection/advanced-tcp-protection/tcp-flow-protection/rules/items.ts">delete</a>(ruleId, { ...params }) -> ItemDeleteResponse</code>
- <code title="patch /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules/{rule_id}">client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.rules.items.<a href="./src/resources/ddos-protection/advanced-tcp-protection/tcp-flow-protection/rules/items.ts">edit</a>(ruleId, { ...params }) -> ItemEditResponse</code>
- <code title="get /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules/{rule_id}">client.DDoSProtection.advancedTCPProtection.tcpFlowProtection.rules.items.<a href="./src/resources/ddos-protection/advanced-tcp-protection/tcp-flow-protection/rules/items.ts">get</a>(ruleId, { ...params }) -> ItemGetResponse</code>

### Status

Types:

- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/status.ts">StatusEditResponse</a></code>
- <code><a href="./src/resources/ddos-protection/advanced-tcp-protection/status.ts">StatusGetResponse</a></code>

Methods:

- <code title="patch /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_protection_status">client.DDoSProtection.advancedTCPProtection.status.<a href="./src/resources/ddos-protection/advanced-tcp-protection/status.ts">edit</a>({ ...params }) -> StatusEditResponse</code>
- <code title="get /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_protection_status">client.DDoSProtection.advancedTCPProtection.status.<a href="./src/resources/ddos-protection/advanced-tcp-protection/status.ts">get</a>({ ...params }) -> StatusGetResponse</code>
