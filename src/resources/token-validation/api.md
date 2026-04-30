# TokenValidation

## Configuration

Types:

- <code><a href="./src/resources/token-validation/configuration/configuration.ts">TokenConfig</a></code>
- <code><a href="./src/resources/token-validation/configuration/configuration.ts">ConfigurationDeleteResponse</a></code>
- <code><a href="./src/resources/token-validation/configuration/configuration.ts">ConfigurationEditResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/token_validation/config">client.tokenValidation.configuration.<a href="./src/resources/token-validation/configuration/configuration.ts">create</a>({ ...params }) -> TokenConfig</code>
- <code title="get /zones/{zone_id}/token_validation/config">client.tokenValidation.configuration.<a href="./src/resources/token-validation/configuration/configuration.ts">list</a>({ ...params }) -> TokenConfigsV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/token_validation/config/{config_id}">client.tokenValidation.configuration.<a href="./src/resources/token-validation/configuration/configuration.ts">delete</a>(configId, { ...params }) -> ConfigurationDeleteResponse</code>
- <code title="patch /zones/{zone_id}/token_validation/config/{config_id}">client.tokenValidation.configuration.<a href="./src/resources/token-validation/configuration/configuration.ts">edit</a>(configId, { ...params }) -> ConfigurationEditResponse</code>
- <code title="get /zones/{zone_id}/token_validation/config/{config_id}">client.tokenValidation.configuration.<a href="./src/resources/token-validation/configuration/configuration.ts">get</a>(configId, { ...params }) -> TokenConfig</code>

### Credentials

Types:

- <code><a href="./src/resources/token-validation/configuration/credentials.ts">CredentialUpdateResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/token_validation/config/{config_id}/credentials">client.tokenValidation.configuration.credentials.<a href="./src/resources/token-validation/configuration/credentials.ts">update</a>(configId, { ...params }) -> CredentialUpdateResponse</code>

## Rules

Types:

- <code><a href="./src/resources/token-validation/rules.ts">TokenValidationRule</a></code>
- <code><a href="./src/resources/token-validation/rules.ts">RuleDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/token_validation/rules">client.tokenValidation.rules.<a href="./src/resources/token-validation/rules.ts">create</a>({ ...params }) -> TokenValidationRule</code>
- <code title="get /zones/{zone_id}/token_validation/rules">client.tokenValidation.rules.<a href="./src/resources/token-validation/rules.ts">list</a>({ ...params }) -> TokenValidationRulesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/token_validation/rules/{rule_id}">client.tokenValidation.rules.<a href="./src/resources/token-validation/rules.ts">delete</a>(ruleId, { ...params }) -> RuleDeleteResponse</code>
- <code title="post /zones/{zone_id}/token_validation/rules/bulk">client.tokenValidation.rules.<a href="./src/resources/token-validation/rules.ts">bulkCreate</a>([ ...body ]) -> TokenValidationRulesSinglePage</code>
- <code title="patch /zones/{zone_id}/token_validation/rules/bulk">client.tokenValidation.rules.<a href="./src/resources/token-validation/rules.ts">bulkEdit</a>([ ...body ]) -> TokenValidationRulesSinglePage</code>
- <code title="patch /zones/{zone_id}/token_validation/rules/{rule_id}">client.tokenValidation.rules.<a href="./src/resources/token-validation/rules.ts">edit</a>(ruleId, { ...params }) -> TokenValidationRule</code>
- <code title="get /zones/{zone_id}/token_validation/rules/{rule_id}">client.tokenValidation.rules.<a href="./src/resources/token-validation/rules.ts">get</a>(ruleId, { ...params }) -> TokenValidationRule</code>
