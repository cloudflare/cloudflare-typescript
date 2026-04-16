# Rulesets

Types:

- <code><a href="./src/resources/rulesets/rulesets.ts">Kind</a></code>
- <code><a href="./src/resources/rulesets/rulesets.ts">Phase</a></code>
- <code><a href="./src/resources/rulesets/rulesets.ts">Ruleset</a></code>
- <code><a href="./src/resources/rulesets/rulesets.ts">RulesetCreateResponse</a></code>
- <code><a href="./src/resources/rulesets/rulesets.ts">RulesetUpdateResponse</a></code>
- <code><a href="./src/resources/rulesets/rulesets.ts">RulesetListResponse</a></code>
- <code><a href="./src/resources/rulesets/rulesets.ts">RulesetGetResponse</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/rulesets">client.rulesets.<a href="./src/resources/rulesets/rulesets.ts">create</a>({ ...params }) -> RulesetCreateResponse</code>
- <code title="put /{accounts_or_zones}/{account_or_zone_id}/rulesets/{ruleset_id}">client.rulesets.<a href="./src/resources/rulesets/rulesets.ts">update</a>(rulesetId, { ...params }) -> RulesetUpdateResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/rulesets">client.rulesets.<a href="./src/resources/rulesets/rulesets.ts">list</a>({ ...params }) -> RulesetListResponsesCursorPagination</code>
- <code title="delete /{accounts_or_zones}/{account_or_zone_id}/rulesets/{ruleset_id}">client.rulesets.<a href="./src/resources/rulesets/rulesets.ts">delete</a>(rulesetId, { ...params }) -> void</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/rulesets/{ruleset_id}">client.rulesets.<a href="./src/resources/rulesets/rulesets.ts">get</a>(rulesetId, { ...params }) -> RulesetGetResponse</code>

## Phases

Types:

- <code><a href="./src/resources/rulesets/phases/phases.ts">PhaseUpdateResponse</a></code>
- <code><a href="./src/resources/rulesets/phases/phases.ts">PhaseGetResponse</a></code>

Methods:

- <code title="put /{accounts_or_zones}/{account_or_zone_id}/rulesets/phases/{ruleset_phase}/entrypoint">client.rulesets.phases.<a href="./src/resources/rulesets/phases/phases.ts">update</a>(rulesetPhase, { ...params }) -> PhaseUpdateResponse</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/rulesets/phases/{ruleset_phase}/entrypoint">client.rulesets.phases.<a href="./src/resources/rulesets/phases/phases.ts">get</a>(rulesetPhase, { ...params }) -> PhaseGetResponse</code>

### Versions

Types:

- <code><a href="./src/resources/rulesets/phases/versions.ts">VersionListResponse</a></code>
- <code><a href="./src/resources/rulesets/phases/versions.ts">VersionGetResponse</a></code>

Methods:

- <code title="get /{accounts_or_zones}/{account_or_zone_id}/rulesets/phases/{ruleset_phase}/entrypoint/versions">client.rulesets.phases.versions.<a href="./src/resources/rulesets/phases/versions.ts">list</a>(rulesetPhase, { ...params }) -> VersionListResponsesSinglePage</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/rulesets/phases/{ruleset_phase}/entrypoint/versions/{ruleset_version}">client.rulesets.phases.versions.<a href="./src/resources/rulesets/phases/versions.ts">get</a>(rulesetPhase, rulesetVersion, { ...params }) -> VersionGetResponse</code>

## Rules

Types:

- <code><a href="./src/resources/rulesets/rules.ts">BlockRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">CompressResponseRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">DDoSDynamicRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">ExecuteRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">ForceConnectionCloseRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">LogCustomFieldRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">LogRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">Logging</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">ManagedChallengeRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">RedirectRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">RewriteRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">RouteRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">RulesetRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">ScoreRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">ServeErrorRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">SetCacheSettingsRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">SetConfigRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">SkipRule</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">RuleCreateResponse</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">RuleDeleteResponse</a></code>
- <code><a href="./src/resources/rulesets/rules.ts">RuleEditResponse</a></code>

Methods:

- <code title="post /{accounts_or_zones}/{account_or_zone_id}/rulesets/{ruleset_id}/rules">client.rulesets.rules.<a href="./src/resources/rulesets/rules.ts">create</a>(rulesetId, { ...params }) -> RuleCreateResponse</code>
- <code title="delete /{accounts_or_zones}/{account_or_zone_id}/rulesets/{ruleset_id}/rules/{rule_id}">client.rulesets.rules.<a href="./src/resources/rulesets/rules.ts">delete</a>(rulesetId, ruleId, { ...params }) -> RuleDeleteResponse</code>
- <code title="patch /{accounts_or_zones}/{account_or_zone_id}/rulesets/{ruleset_id}/rules/{rule_id}">client.rulesets.rules.<a href="./src/resources/rulesets/rules.ts">edit</a>(rulesetId, ruleId, { ...params }) -> RuleEditResponse</code>

## Versions

Types:

- <code><a href="./src/resources/rulesets/versions.ts">VersionListResponse</a></code>
- <code><a href="./src/resources/rulesets/versions.ts">VersionGetResponse</a></code>

Methods:

- <code title="get /{accounts_or_zones}/{account_or_zone_id}/rulesets/{ruleset_id}/versions">client.rulesets.versions.<a href="./src/resources/rulesets/versions.ts">list</a>(rulesetId, { ...params }) -> VersionListResponsesSinglePage</code>
- <code title="delete /{accounts_or_zones}/{account_or_zone_id}/rulesets/{ruleset_id}/versions/{ruleset_version}">client.rulesets.versions.<a href="./src/resources/rulesets/versions.ts">delete</a>(rulesetId, rulesetVersion, { ...params }) -> void</code>
- <code title="get /{accounts_or_zones}/{account_or_zone_id}/rulesets/{ruleset_id}/versions/{ruleset_version}">client.rulesets.versions.<a href="./src/resources/rulesets/versions.ts">get</a>(rulesetId, rulesetVersion, { ...params }) -> VersionGetResponse</code>
