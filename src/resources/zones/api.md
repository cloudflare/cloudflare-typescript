# Zones

Types:

- <code><a href="./src/resources/zones/zones.ts">Type</a></code>
- <code><a href="./src/resources/zones/zones.ts">Zone</a></code>
- <code><a href="./src/resources/zones/zones.ts">ZoneDeleteResponse</a></code>

Methods:

- <code title="post /zones">client.zones.<a href="./src/resources/zones/zones.ts">create</a>({ ...params }) -> Zone</code>
- <code title="get /zones">client.zones.<a href="./src/resources/zones/zones.ts">list</a>({ ...params }) -> ZonesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}">client.zones.<a href="./src/resources/zones/zones.ts">delete</a>({ ...params }) -> ZoneDeleteResponse | null</code>
- <code title="patch /zones/{zone_id}">client.zones.<a href="./src/resources/zones/zones.ts">edit</a>({ ...params }) -> Zone</code>
- <code title="get /zones/{zone_id}">client.zones.<a href="./src/resources/zones/zones.ts">get</a>({ ...params }) -> Zone</code>

## ActivationCheck

Types:

- <code><a href="./src/resources/zones/activation-check.ts">ActivationCheckTriggerResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/activation_check">client.zones.activationCheck.<a href="./src/resources/zones/activation-check.ts">trigger</a>({ ...params }) -> ActivationCheckTriggerResponse</code>

## Settings

Types:

- <code><a href="./src/resources/zones/settings.ts">AdvancedDDoS</a></code>
- <code><a href="./src/resources/zones/settings.ts">Aegis</a></code>
- <code><a href="./src/resources/zones/settings.ts">AlwaysOnline</a></code>
- <code><a href="./src/resources/zones/settings.ts">AlwaysUseHTTPS</a></code>
- <code><a href="./src/resources/zones/settings.ts">AutomaticHTTPSRewrites</a></code>
- <code><a href="./src/resources/zones/settings.ts">AutomaticPlatformOptimization</a></code>
- <code><a href="./src/resources/zones/settings.ts">Brotli</a></code>
- <code><a href="./src/resources/zones/settings.ts">BrowserCacheTTL</a></code>
- <code><a href="./src/resources/zones/settings.ts">BrowserCheck</a></code>
- <code><a href="./src/resources/zones/settings.ts">CacheLevel</a></code>
- <code><a href="./src/resources/zones/settings.ts">ChallengeTTL</a></code>
- <code><a href="./src/resources/zones/settings.ts">Ciphers</a></code>
- <code><a href="./src/resources/zones/settings.ts">DevelopmentMode</a></code>
- <code><a href="./src/resources/zones/settings.ts">EarlyHints</a></code>
- <code><a href="./src/resources/zones/settings.ts">EmailObfuscation</a></code>
- <code><a href="./src/resources/zones/settings.ts">FontSettings</a></code>
- <code><a href="./src/resources/zones/settings.ts">H2Prioritization</a></code>
- <code><a href="./src/resources/zones/settings.ts">HotlinkProtection</a></code>
- <code><a href="./src/resources/zones/settings.ts">HTTP2</a></code>
- <code><a href="./src/resources/zones/settings.ts">HTTP3</a></code>
- <code><a href="./src/resources/zones/settings.ts">ImageResizing</a></code>
- <code><a href="./src/resources/zones/settings.ts">IPGeolocation</a></code>
- <code><a href="./src/resources/zones/settings.ts">IPV6</a></code>
- <code><a href="./src/resources/zones/settings.ts">MinTLSVersion</a></code>
- <code><a href="./src/resources/zones/settings.ts">Mirage</a></code>
- <code><a href="./src/resources/zones/settings.ts">NEL</a></code>
- <code><a href="./src/resources/zones/settings.ts">OpportunisticEncryption</a></code>
- <code><a href="./src/resources/zones/settings.ts">OpportunisticOnion</a></code>
- <code><a href="./src/resources/zones/settings.ts">OrangeToOrange</a></code>
- <code><a href="./src/resources/zones/settings.ts">OriginErrorPagePassThru</a></code>
- <code><a href="./src/resources/zones/settings.ts">OriginMaxHTTPVersion</a></code>
- <code><a href="./src/resources/zones/settings.ts">Polish</a></code>
- <code><a href="./src/resources/zones/settings.ts">PrefetchPreload</a></code>
- <code><a href="./src/resources/zones/settings.ts">ProxyReadTimeout</a></code>
- <code><a href="./src/resources/zones/settings.ts">PseudoIPV4</a></code>
- <code><a href="./src/resources/zones/settings.ts">ResponseBuffering</a></code>
- <code><a href="./src/resources/zones/settings.ts">RocketLoader</a></code>
- <code><a href="./src/resources/zones/settings.ts">SecurityHeaders</a></code>
- <code><a href="./src/resources/zones/settings.ts">SecurityLevel</a></code>
- <code><a href="./src/resources/zones/settings.ts">ServerSideExcludes</a></code>
- <code><a href="./src/resources/zones/settings.ts">SortQueryStringForCache</a></code>
- <code><a href="./src/resources/zones/settings.ts">SSL</a></code>
- <code><a href="./src/resources/zones/settings.ts">SSLRecommender</a></code>
- <code><a href="./src/resources/zones/settings.ts">TLS1_3</a></code>
- <code><a href="./src/resources/zones/settings.ts">TLSClientAuth</a></code>
- <code><a href="./src/resources/zones/settings.ts">TrueClientIPHeader</a></code>
- <code><a href="./src/resources/zones/settings.ts">WAF</a></code>
- <code><a href="./src/resources/zones/settings.ts">WebP</a></code>
- <code><a href="./src/resources/zones/settings.ts">Websocket</a></code>
- <code><a href="./src/resources/zones/settings.ts">ZeroRTT</a></code>
- <code><a href="./src/resources/zones/settings.ts">SettingEditResponse</a></code>
- <code><a href="./src/resources/zones/settings.ts">SettingGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/settings/{setting_id}">client.zones.settings.<a href="./src/resources/zones/settings.ts">edit</a>(settingId, { ...params }) -> SettingEditResponse</code>
- <code title="get /zones/{zone_id}/settings/{setting_id}">client.zones.settings.<a href="./src/resources/zones/settings.ts">get</a>(settingId, { ...params }) -> SettingGetResponse</code>

## Environments

Types:

- <code><a href="./src/resources/zones/environments.ts">EnvironmentCreateResponse</a></code>
- <code><a href="./src/resources/zones/environments.ts">EnvironmentUpdateResponse</a></code>
- <code><a href="./src/resources/zones/environments.ts">EnvironmentListResponse</a></code>
- <code><a href="./src/resources/zones/environments.ts">EnvironmentDeleteResponse</a></code>
- <code><a href="./src/resources/zones/environments.ts">EnvironmentEditResponse</a></code>
- <code><a href="./src/resources/zones/environments.ts">EnvironmentRollbackResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/environments">client.zones.environments.<a href="./src/resources/zones/environments.ts">create</a>({ ...params }) -> EnvironmentCreateResponse</code>
- <code title="put /zones/{zone_id}/environments">client.zones.environments.<a href="./src/resources/zones/environments.ts">update</a>({ ...params }) -> EnvironmentUpdateResponse</code>
- <code title="get /zones/{zone_id}/environments">client.zones.environments.<a href="./src/resources/zones/environments.ts">list</a>({ ...params }) -> EnvironmentListResponse</code>
- <code title="delete /zones/{zone_id}/environments/{environment_id}">client.zones.environments.<a href="./src/resources/zones/environments.ts">delete</a>(environmentId, { ...params }) -> EnvironmentDeleteResponse</code>
- <code title="patch /zones/{zone_id}/environments">client.zones.environments.<a href="./src/resources/zones/environments.ts">edit</a>({ ...params }) -> EnvironmentEditResponse</code>
- <code title="post /zones/{zone_id}/environments/{environment_id}/rollback">client.zones.environments.<a href="./src/resources/zones/environments.ts">rollback</a>(environmentId, { ...params }) -> EnvironmentRollbackResponse</code>

## CustomNameservers

Types:

- <code><a href="./src/resources/zones/custom-nameservers.ts">CustomNameserverUpdateResponse</a></code>
- <code><a href="./src/resources/zones/custom-nameservers.ts">CustomNameserverGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/custom_ns">client.zones.customNameservers.<a href="./src/resources/zones/custom-nameservers.ts">update</a>({ ...params }) -> CustomNameserverUpdateResponsesSinglePage</code>
- <code title="get /zones/{zone_id}/custom_ns">client.zones.customNameservers.<a href="./src/resources/zones/custom-nameservers.ts">get</a>({ ...params }) -> CustomNameserverGetResponse</code>

## Holds

Types:

- <code><a href="./src/resources/zones/holds.ts">ZoneHold</a></code>

Methods:

- <code title="post /zones/{zone_id}/hold">client.zones.holds.<a href="./src/resources/zones/holds.ts">create</a>({ ...params }) -> ZoneHold</code>
- <code title="delete /zones/{zone_id}/hold">client.zones.holds.<a href="./src/resources/zones/holds.ts">delete</a>({ ...params }) -> ZoneHold</code>
- <code title="patch /zones/{zone_id}/hold">client.zones.holds.<a href="./src/resources/zones/holds.ts">edit</a>({ ...params }) -> ZoneHold</code>
- <code title="get /zones/{zone_id}/hold">client.zones.holds.<a href="./src/resources/zones/holds.ts">get</a>({ ...params }) -> ZoneHold</code>

## Subscriptions

Types:

- <code><a href="./src/resources/zones/subscriptions.ts">SubscriptionCreateResponse</a></code>
- <code><a href="./src/resources/zones/subscriptions.ts">SubscriptionUpdateResponse</a></code>
- <code><a href="./src/resources/zones/subscriptions.ts">SubscriptionGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/subscription">client.zones.subscriptions.<a href="./src/resources/zones/subscriptions.ts">create</a>({ ...params }) -> SubscriptionCreateResponse</code>
- <code title="put /zones/{zone_id}/subscription">client.zones.subscriptions.<a href="./src/resources/zones/subscriptions.ts">update</a>({ ...params }) -> SubscriptionUpdateResponse</code>
- <code title="get /zones/{zone_id}/subscription">client.zones.subscriptions.<a href="./src/resources/zones/subscriptions.ts">get</a>({ ...params }) -> SubscriptionGetResponse</code>

## Plans

Types:

- <code><a href="./src/resources/zones/plans.ts">AvailableRatePlan</a></code>

Methods:

- <code title="get /zones/{zone_id}/available_plans">client.zones.plans.<a href="./src/resources/zones/plans.ts">list</a>({ ...params }) -> AvailableRatePlansSinglePage</code>
- <code title="get /zones/{zone_id}/available_plans/{plan_identifier}">client.zones.plans.<a href="./src/resources/zones/plans.ts">get</a>(planIdentifier, { ...params }) -> AvailableRatePlan</code>

## RatePlans

Types:

- <code><a href="./src/resources/zones/rate-plans.ts">RatePlanGetResponse</a></code>

Methods:

- <code title="get /zones/{zone_id}/available_rate_plans">client.zones.ratePlans.<a href="./src/resources/zones/rate-plans.ts">get</a>({ ...params }) -> RatePlanGetResponsesSinglePage</code>
