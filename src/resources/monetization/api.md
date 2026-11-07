# Monetization

Types:

- <code><a href="./src/resources/monetization/monetization.ts">MonetizationAccountEligibilityCheckInput</a></code>
- <code><a href="./src/resources/monetization/monetization.ts">MonetizationAccountEligibilityCheckResponse</a></code>
- <code><a href="./src/resources/monetization/monetization.ts">MonetizationEligibilityResponse</a></code>
- <code><a href="./src/resources/monetization/monetization.ts">MonetizationEligibilityResult</a></code>
- <code><a href="./src/resources/monetization/monetization.ts">MonetizationZoneEligibilityCheckResponse</a></code>

## Rules

Types:

- <code><a href="./src/resources/monetization/rules.ts">MonetizationRule</a></code>
- <code><a href="./src/resources/monetization/rules.ts">MonetizationRuleCollection</a></code>
- <code><a href="./src/resources/monetization/rules.ts">MonetizationRuleInput</a></code>
- <code><a href="./src/resources/monetization/rules.ts">MonetizationRuleInputFixedPrice</a></code>
- <code><a href="./src/resources/monetization/rules.ts">MonetizationRuleInputOriginControlled</a></code>
- <code><a href="./src/resources/monetization/rules.ts">MonetizationRulePatch</a></code>
- <code><a href="./src/resources/monetization/rules.ts">MonetizationRulesetInput</a></code>

Methods:

- <code title="put /zones/{zone_id}/monetization/rules">client.monetization.rules.<a href="./src/resources/monetization/rules.ts">update</a>({ ...params }) -> MonetizationRuleCollection</code>
- <code title="delete /zones/{zone_id}/monetization/rules">client.monetization.rules.<a href="./src/resources/monetization/rules.ts">delete</a>({ ...params }) -> MonetizationRuleCollection</code>
- <code title="delete /zones/{zone_id}/monetization/rules/{rule_id}">client.monetization.rules.<a href="./src/resources/monetization/rules.ts">deleteRule</a>(ruleID, { ...params }) -> MonetizationRuleCollection</code>
- <code title="patch /zones/{zone_id}/monetization/rules/{rule_id}">client.monetization.rules.<a href="./src/resources/monetization/rules.ts">editRule</a>(ruleID, { ...params }) -> MonetizationRuleCollection</code>
- <code title="get /zones/{zone_id}/monetization/rules">client.monetization.rules.<a href="./src/resources/monetization/rules.ts">get</a>({ ...params }) -> MonetizationRuleCollection</code>
- <code title="get /zones/{zone_id}/monetization/rules/{rule_id}">client.monetization.rules.<a href="./src/resources/monetization/rules.ts">getRule</a>(ruleID, { ...params }) -> MonetizationRule</code>
