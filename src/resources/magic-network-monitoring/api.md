# MagicNetworkMonitoring

## VPCFlows

### Tokens

Types:

- <code><a href="./src/resources/magic-network-monitoring/vpc-flows/tokens.ts">TokenCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/mnm/vpc-flows/token">client.magicNetworkMonitoring.vpcFlows.tokens.<a href="./src/resources/magic-network-monitoring/vpc-flows/tokens.ts">create</a>({ ...params }) -> TokenCreateResponse</code>

## Configs

Types:

- <code><a href="./src/resources/magic-network-monitoring/configs/configs.ts">Configuration</a></code>

Methods:

- <code title="post /accounts/{account_id}/mnm/config">client.magicNetworkMonitoring.configs.<a href="./src/resources/magic-network-monitoring/configs/configs.ts">create</a>({ ...params }) -> Configuration</code>
- <code title="put /accounts/{account_id}/mnm/config">client.magicNetworkMonitoring.configs.<a href="./src/resources/magic-network-monitoring/configs/configs.ts">update</a>({ ...params }) -> Configuration</code>
- <code title="delete /accounts/{account_id}/mnm/config">client.magicNetworkMonitoring.configs.<a href="./src/resources/magic-network-monitoring/configs/configs.ts">delete</a>({ ...params }) -> Configuration</code>
- <code title="patch /accounts/{account_id}/mnm/config">client.magicNetworkMonitoring.configs.<a href="./src/resources/magic-network-monitoring/configs/configs.ts">edit</a>({ ...params }) -> Configuration</code>
- <code title="get /accounts/{account_id}/mnm/config">client.magicNetworkMonitoring.configs.<a href="./src/resources/magic-network-monitoring/configs/configs.ts">get</a>({ ...params }) -> Configuration</code>

### Full

Methods:

- <code title="get /accounts/{account_id}/mnm/config/full">client.magicNetworkMonitoring.configs.full.<a href="./src/resources/magic-network-monitoring/configs/full.ts">get</a>({ ...params }) -> Configuration</code>

## Rules

Types:

- <code><a href="./src/resources/magic-network-monitoring/rules/rules.ts">MagicNetworkMonitoringRule</a></code>

Methods:

- <code title="post /accounts/{account_id}/mnm/rules">client.magicNetworkMonitoring.rules.<a href="./src/resources/magic-network-monitoring/rules/rules.ts">create</a>({ ...params }) -> MagicNetworkMonitoringRule | null</code>
- <code title="put /accounts/{account_id}/mnm/rules">client.magicNetworkMonitoring.rules.<a href="./src/resources/magic-network-monitoring/rules/rules.ts">update</a>({ ...params }) -> MagicNetworkMonitoringRule | null</code>
- <code title="get /accounts/{account_id}/mnm/rules">client.magicNetworkMonitoring.rules.<a href="./src/resources/magic-network-monitoring/rules/rules.ts">list</a>({ ...params }) -> MagicNetworkMonitoringRulesSinglePage</code>
- <code title="delete /accounts/{account_id}/mnm/rules/{rule_id}">client.magicNetworkMonitoring.rules.<a href="./src/resources/magic-network-monitoring/rules/rules.ts">delete</a>(ruleId, { ...params }) -> MagicNetworkMonitoringRule | null</code>
- <code title="patch /accounts/{account_id}/mnm/rules/{rule_id}">client.magicNetworkMonitoring.rules.<a href="./src/resources/magic-network-monitoring/rules/rules.ts">edit</a>(ruleId, { ...params }) -> MagicNetworkMonitoringRule | null</code>
- <code title="get /accounts/{account_id}/mnm/rules/{rule_id}">client.magicNetworkMonitoring.rules.<a href="./src/resources/magic-network-monitoring/rules/rules.ts">get</a>(ruleId, { ...params }) -> MagicNetworkMonitoringRule | null</code>

### Advertisements

Types:

- <code><a href="./src/resources/magic-network-monitoring/rules/advertisements.ts">Advertisement</a></code>

Methods:

- <code title="patch /accounts/{account_id}/mnm/rules/{rule_id}/advertisement">client.magicNetworkMonitoring.rules.advertisements.<a href="./src/resources/magic-network-monitoring/rules/advertisements.ts">edit</a>(ruleId, { ...params }) -> Advertisement | null</code>
