# Migration guide

This guide outlines the changes and steps needed to migrate your codebase to the latest version of the Cloudflare TypeScript SDK.

The main changes are that the SDK now relies on the [builtin Web fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) instead of `node-fetch` and has zero dependencies.

## Environment requirements

The minimum supported runtime and tooling versions are now:

- Node.js 18.x last LTS (Required for built-in fetch support)
  - This was previously documented as the minimum supported Node.js version but Node.js 16.x mostly worked at runtime; now it will not.
- TypeScript 4.9
- Jest 28

## Minimum types requirements

### DOM

`tsconfig.json`

```jsonc
{
  "target": "ES2015", // note: we recommend ES2020 or higher
  "lib": ["DOM", "DOM.Iterable", "ES2018"]
}
```

### Node.js

`tsconfig.json`

```jsonc
{
  "target": "ES2015" // note: we recommend ES2020 or higher
}
```

`package.json`

```json
{
  "devDependencies": {
    "@types/node": ">= 18.18.7"
  }
}
```

### Cloudflare Workers

`tsconfig.json`

```jsonc
{
  "target": "ES2015", // note: we recommend ES2020 or higher
  "lib": ["ES2020"], // <- needed by @cloudflare/workers-types
  "types": ["@cloudflare/workers-types"]
}
```

`package.json`

```json
{
  "devDependencies": {
    "@cloudflare/workers-types": ">= 0.20221111.0"
  }
}
```

### Bun

`tsconfig.json`

```jsonc
{
  "target": "ES2015" // note: we recommend ES2020 or higher
}
```

`package.json`

```json
{
  "devDependencies": {
    "@types/bun": ">= 1.2.0"
  }
}
```

### Deno

No config needed!

## Breaking changes

### Named path parameters

Methods that take multiple path parameters typically now use named instead of positional arguments for better clarity and to prevent a footgun where it was easy to accidentally pass arguments in the incorrect order.

For example, for a method that would call an endpoint at `/v1/parents/{parent_id}/children/{child_id}`, only the _last_ path parameter is positional and the rest must be passed as named arguments.

```ts
// Before
client.parents.children.retrieve('p_123', 'c_456');

// After
client.parents.children.retrieve('c_456', { parent_id: 'p_123' });
```

<details>

<summary>This affects the following methods</summary>

- `client.accounts.members.update()`
- `client.accounts.members.delete()`
- `client.accounts.members.get()`
- `client.accounts.roles.get()`
- `client.accounts.subscriptions.update()`
- `client.accounts.subscriptions.delete()`
- `client.accounts.tokens.update()`
- `client.accounts.tokens.delete()`
- `client.accounts.tokens.get()`
- `client.accounts.tokens.value.update()`
- `client.zones.settings.edit()`
- `client.zones.settings.get()`
- `client.zones.plans.get()`
- `client.loadBalancers.update()`
- `client.loadBalancers.delete()`
- `client.loadBalancers.edit()`
- `client.loadBalancers.get()`
- `client.loadBalancers.monitors.update()`
- `client.loadBalancers.monitors.delete()`
- `client.loadBalancers.monitors.edit()`
- `client.loadBalancers.monitors.get()`
- `client.loadBalancers.monitors.previews.create()`
- `client.loadBalancers.monitors.references.get()`
- `client.loadBalancers.pools.update()`
- `client.loadBalancers.pools.delete()`
- `client.loadBalancers.pools.edit()`
- `client.loadBalancers.pools.get()`
- `client.loadBalancers.pools.health.create()`
- `client.loadBalancers.pools.health.get()`
- `client.loadBalancers.pools.references.get()`
- `client.loadBalancers.previews.get()`
- `client.loadBalancers.regions.get()`
- `client.ssl.certificatePacks.delete()`
- `client.ssl.certificatePacks.edit()`
- `client.ssl.certificatePacks.get()`
- `client.ssl.verification.edit()`
- `client.clientCertificates.delete()`
- `client.clientCertificates.edit()`
- `client.clientCertificates.get()`
- `client.customCertificates.delete()`
- `client.customCertificates.edit()`
- `client.customCertificates.get()`
- `client.customHostnames.delete()`
- `client.customHostnames.edit()`
- `client.customHostnames.get()`
- `client.customHostnames.certificatePack.certificates.update()`
- `client.customHostnames.certificatePack.certificates.delete()`
- `client.customNameservers.delete()`
- `client.dnsFirewall.delete()`
- `client.dnsFirewall.edit()`
- `client.dnsFirewall.get()`
- `client.dnsFirewall.analytics.reports.get()`
- `client.dnsFirewall.analytics.reports.bytimes.get()`
- `client.dnsFirewall.reverseDNS.edit()`
- `client.dnsFirewall.reverseDNS.get()`
- `client.dns.records.update()`
- `client.dns.records.delete()`
- `client.dns.records.edit()`
- `client.dns.records.get()`
- `client.dns.settings.account.views.delete()`
- `client.dns.settings.account.views.edit()`
- `client.dns.settings.account.views.get()`
- `client.dns.zoneTransfers.acls.update()`
- `client.dns.zoneTransfers.acls.delete()`
- `client.dns.zoneTransfers.acls.get()`
- `client.dns.zoneTransfers.peers.update()`
- `client.dns.zoneTransfers.peers.delete()`
- `client.dns.zoneTransfers.peers.get()`
- `client.dns.zoneTransfers.tsigs.update()`
- `client.dns.zoneTransfers.tsigs.delete()`
- `client.dns.zoneTransfers.tsigs.get()`
- `client.emailSecurity.investigate.get()`
- `client.emailSecurity.investigate.detections.get()`
- `client.emailSecurity.investigate.preview.get()`
- `client.emailSecurity.investigate.raw.get()`
- `client.emailSecurity.investigate.trace.get()`
- `client.emailSecurity.investigate.move.create()`
- `client.emailSecurity.investigate.reclassify.create()`
- `client.emailSecurity.settings.allowPolicies.delete()`
- `client.emailSecurity.settings.allowPolicies.edit()`
- `client.emailSecurity.settings.allowPolicies.get()`
- `client.emailSecurity.settings.blockSenders.delete()`
- `client.emailSecurity.settings.blockSenders.edit()`
- `client.emailSecurity.settings.blockSenders.get()`
- `client.emailSecurity.settings.domains.delete()`
- `client.emailSecurity.settings.domains.edit()`
- `client.emailSecurity.settings.domains.get()`
- `client.emailSecurity.settings.impersonationRegistry.delete()`
- `client.emailSecurity.settings.impersonationRegistry.edit()`
- `client.emailSecurity.settings.impersonationRegistry.get()`
- `client.emailSecurity.settings.trustedDomains.delete()`
- `client.emailSecurity.settings.trustedDomains.edit()`
- `client.emailSecurity.settings.trustedDomains.get()`
- `client.emailRouting.rules.update()`
- `client.emailRouting.rules.delete()`
- `client.emailRouting.rules.get()`
- `client.emailRouting.addresses.delete()`
- `client.emailRouting.addresses.get()`
- `client.filters.update()`
- `client.filters.delete()`
- `client.filters.get()`
- `client.firewall.lockdowns.update()`
- `client.firewall.lockdowns.delete()`
- `client.firewall.lockdowns.get()`
- `client.firewall.rules.update()`
- `client.firewall.rules.delete()`
- `client.firewall.rules.edit()`
- `client.firewall.rules.get()`
- `client.firewall.accessRules.create()`
- `client.firewall.accessRules.list()`
- `client.firewall.accessRules.delete()`
- `client.firewall.accessRules.edit()`
- `client.firewall.accessRules.get()`
- `client.firewall.uaRules.update()`
- `client.firewall.uaRules.delete()`
- `client.firewall.uaRules.get()`
- `client.firewall.waf.overrides.update()`
- `client.firewall.waf.overrides.delete()`
- `client.firewall.waf.overrides.get()`
- `client.firewall.waf.packages.get()`
- `client.firewall.waf.packages.groups.list()`
- `client.firewall.waf.packages.groups.edit()`
- `client.firewall.waf.packages.groups.get()`
- `client.firewall.waf.packages.rules.list()`
- `client.firewall.waf.packages.rules.edit()`
- `client.firewall.waf.packages.rules.get()`
- `client.healthchecks.update()`
- `client.healthchecks.delete()`
- `client.healthchecks.edit()`
- `client.healthchecks.get()`
- `client.healthchecks.previews.delete()`
- `client.healthchecks.previews.get()`
- `client.keylessCertificates.delete()`
- `client.keylessCertificates.edit()`
- `client.keylessCertificates.get()`
- `client.logpush.datasets.fields.get()`
- `client.logpush.datasets.jobs.get()`
- `client.logpush.jobs.create()`
- `client.logpush.jobs.update()`
- `client.logpush.jobs.list()`
- `client.logpush.jobs.delete()`
- `client.logpush.jobs.get()`
- `client.logpush.ownership.create()`
- `client.logpush.ownership.validate()`
- `client.logpush.validate.destination()`
- `client.logpush.validate.destinationExists()`
- `client.logpush.validate.origin()`
- `client.logs.RayID.get()`
- `client.originTLSClientAuth.delete()`
- `client.originTLSClientAuth.get()`
- `client.originTLSClientAuth.hostnames.get()`
- `client.originTLSClientAuth.hostnames.certificates.delete()`
- `client.originTLSClientAuth.hostnames.certificates.get()`
- `client.pageRules.update()`
- `client.pageRules.delete()`
- `client.pageRules.edit()`
- `client.pageRules.get()`
- `client.rateLimits.delete()`
- `client.rateLimits.edit()`
- `client.rateLimits.get()`
- `client.waitingRooms.update()`
- `client.waitingRooms.list()`
- `client.waitingRooms.delete()`
- `client.waitingRooms.edit()`
- `client.waitingRooms.get()`
- `client.waitingRooms.events.create()`
- `client.waitingRooms.events.update()`
- `client.waitingRooms.events.list()`
- `client.waitingRooms.events.delete()`
- `client.waitingRooms.events.edit()`
- `client.waitingRooms.events.get()`
- `client.waitingRooms.events.details.get()`
- `client.waitingRooms.rules.create()`
- `client.waitingRooms.rules.update()`
- `client.waitingRooms.rules.delete()`
- `client.waitingRooms.rules.edit()`
- `client.waitingRooms.rules.get()`
- `client.waitingRooms.statuses.get()`
- `client.web3.hostnames.delete()`
- `client.web3.hostnames.edit()`
- `client.web3.hostnames.get()`
- `client.web3.hostnames.ipfsUniversalPaths.contentLists.update()`
- `client.web3.hostnames.ipfsUniversalPaths.contentLists.get()`
- `client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.create()`
- `client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.update()`
- `client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.list()`
- `client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.delete()`
- `client.web3.hostnames.ipfsUniversalPaths.contentLists.entries.get()`
- `client.workers.routes.update()`
- `client.workers.routes.delete()`
- `client.workers.routes.get()`
- `client.workers.scripts.update()`
- `client.workers.scripts.delete()`
- `client.workers.scripts.get()`
- `client.workers.scripts.assets.upload.create()`
- `client.workers.scripts.subdomain.create()`
- `client.workers.scripts.subdomain.get()`
- `client.workers.scripts.schedules.update()`
- `client.workers.scripts.schedules.get()`
- `client.workers.scripts.tail.create()`
- `client.workers.scripts.tail.delete()`
- `client.workers.scripts.tail.get()`
- `client.workers.scripts.content.update()`
- `client.workers.scripts.content.get()`
- `client.workers.scripts.settings.edit()`
- `client.workers.scripts.settings.get()`
- `client.workers.scripts.deployments.create()`
- `client.workers.scripts.deployments.get()`
- `client.workers.scripts.versions.create()`
- `client.workers.scripts.versions.list()`
- `client.workers.scripts.versions.get()`
- `client.workers.scripts.secrets.update()`
- `client.workers.scripts.secrets.list()`
- `client.workers.scripts.secrets.delete()`
- `client.workers.scripts.secrets.get()`
- `client.workers.scripts.scriptAndVersionSettings.edit()`
- `client.workers.scripts.scriptAndVersionSettings.get()`
- `client.workers.domains.delete()`
- `client.workers.domains.get()`
- `client.kv.namespaces.update()`
- `client.kv.namespaces.delete()`
- `client.kv.namespaces.get()`
- `client.kv.namespaces.keys.list()`
- `client.kv.namespaces.keys.bulkDelete()`
- `client.kv.namespaces.keys.bulkGet()`
- `client.kv.namespaces.keys.bulkUpdate()`
- `client.kv.namespaces.metadata.get()`
- `client.kv.namespaces.values.update()`
- `client.kv.namespaces.values.delete()`
- `client.kv.namespaces.values.get()`
- `client.durableObjects.namespaces.objects.list()`
- `client.queues.update()`
- `client.queues.delete()`
- `client.queues.edit()`
- `client.queues.get()`
- `client.queues.consumers.create()`
- `client.queues.consumers.update()`
- `client.queues.consumers.delete()`
- `client.queues.consumers.get()`
- `client.queues.messages.ack()`
- `client.queues.messages.pull()`
- `client.queues.purge.start()`
- `client.queues.purge.status()`
- `client.apiGateway.discovery.operations.edit()`
- `client.apiGateway.operations.delete()`
- `client.apiGateway.operations.get()`
- `client.apiGateway.operations.schemaValidation.update()`
- `client.apiGateway.operations.schemaValidation.get()`
- `client.apiGateway.userSchemas.delete()`
- `client.apiGateway.userSchemas.edit()`
- `client.apiGateway.userSchemas.get()`
- `client.apiGateway.userSchemas.operations.list()`
- `client.pageShield.policies.update()`
- `client.pageShield.policies.delete()`
- `client.pageShield.policies.get()`
- `client.pageShield.connections.get()`
- `client.pageShield.scripts.get()`
- `client.pageShield.cookies.get()`
- `client.rulesets.create()`
- `client.rulesets.update()`
- `client.rulesets.list()`
- `client.rulesets.delete()`
- `client.rulesets.get()`
- `client.rulesets.phases.update()`
- `client.rulesets.phases.get()`
- `client.rulesets.phases.versions.list()`
- `client.rulesets.phases.versions.get()`
- `client.rulesets.rules.create()`
- `client.rulesets.rules.delete()`
- `client.rulesets.rules.edit()`
- `client.rulesets.versions.list()`
- `client.rulesets.versions.delete()`
- `client.rulesets.versions.get()`
- `client.spectrum.apps.update()`
- `client.spectrum.apps.delete()`
- `client.spectrum.apps.get()`
- `client.addressing.regionalHostnames.delete()`
- `client.addressing.regionalHostnames.edit()`
- `client.addressing.regionalHostnames.get()`
- `client.addressing.addressMaps.delete()`
- `client.addressing.addressMaps.edit()`
- `client.addressing.addressMaps.get()`
- `client.addressing.addressMaps.accounts.update()`
- `client.addressing.addressMaps.accounts.delete()`
- `client.addressing.addressMaps.ips.update()`
- `client.addressing.addressMaps.ips.delete()`
- `client.addressing.addressMaps.zones.update()`
- `client.addressing.addressMaps.zones.delete()`
- `client.addressing.loaDocuments.get()`
- `client.addressing.prefixes.delete()`
- `client.addressing.prefixes.edit()`
- `client.addressing.prefixes.get()`
- `client.addressing.prefixes.serviceBindings.create()`
- `client.addressing.prefixes.serviceBindings.list()`
- `client.addressing.prefixes.serviceBindings.delete()`
- `client.addressing.prefixes.serviceBindings.get()`
- `client.addressing.prefixes.bgpPrefixes.create()`
- `client.addressing.prefixes.bgpPrefixes.list()`
- `client.addressing.prefixes.bgpPrefixes.edit()`
- `client.addressing.prefixes.bgpPrefixes.get()`
- `client.addressing.prefixes.advertisementStatus.edit()`
- `client.addressing.prefixes.advertisementStatus.get()`
- `client.addressing.prefixes.delegations.create()`
- `client.addressing.prefixes.delegations.list()`
- `client.addressing.prefixes.delegations.delete()`
- `client.images.v1.delete()`
- `client.images.v1.edit()`
- `client.images.v1.get()`
- `client.images.v1.keys.update()`
- `client.images.v1.keys.delete()`
- `client.images.v1.variants.delete()`
- `client.images.v1.variants.edit()`
- `client.images.v1.variants.get()`
- `client.images.v1.blobs.get()`
- `client.intel.asn.get()`
- `client.intel.asn.subnets.get()`
- `client.intel.indicatorFeeds.update()`
- `client.intel.indicatorFeeds.data()`
- `client.intel.indicatorFeeds.get()`
- `client.intel.indicatorFeeds.snapshots.update()`
- `client.intel.indicatorFeeds.downloads.get()`
- `client.intel.attackSurfaceReport.issues.dismiss()`
- `client.magicTransit.apps.update()`
- `client.magicTransit.apps.delete()`
- `client.magicTransit.cfInterconnects.update()`
- `client.magicTransit.cfInterconnects.get()`
- `client.magicTransit.greTunnels.update()`
- `client.magicTransit.greTunnels.delete()`
- `client.magicTransit.greTunnels.get()`
- `client.magicTransit.ipsecTunnels.update()`
- `client.magicTransit.ipsecTunnels.delete()`
- `client.magicTransit.ipsecTunnels.get()`
- `client.magicTransit.ipsecTunnels.pskGenerate()`
- `client.magicTransit.routes.update()`
- `client.magicTransit.routes.delete()`
- `client.magicTransit.routes.get()`
- `client.magicTransit.sites.update()`
- `client.magicTransit.sites.delete()`
- `client.magicTransit.sites.edit()`
- `client.magicTransit.sites.get()`
- `client.magicTransit.sites.acls.create()`
- `client.magicTransit.sites.acls.update()`
- `client.magicTransit.sites.acls.list()`
- `client.magicTransit.sites.acls.delete()`
- `client.magicTransit.sites.acls.edit()`
- `client.magicTransit.sites.acls.get()`
- `client.magicTransit.sites.lans.create()`
- `client.magicTransit.sites.lans.update()`
- `client.magicTransit.sites.lans.list()`
- `client.magicTransit.sites.lans.delete()`
- `client.magicTransit.sites.lans.edit()`
- `client.magicTransit.sites.lans.get()`
- `client.magicTransit.sites.wans.create()`
- `client.magicTransit.sites.wans.update()`
- `client.magicTransit.sites.wans.list()`
- `client.magicTransit.sites.wans.delete()`
- `client.magicTransit.sites.wans.edit()`
- `client.magicTransit.sites.wans.get()`
- `client.magicTransit.connectors.update()`
- `client.magicTransit.connectors.edit()`
- `client.magicTransit.connectors.get()`
- `client.magicTransit.connectors.events.list()`
- `client.magicTransit.connectors.events.get()`
- `client.magicTransit.connectors.snapshots.list()`
- `client.magicTransit.connectors.snapshots.get()`
- `client.magicTransit.pcaps.get()`
- `client.magicTransit.pcaps.ownership.delete()`
- `client.magicTransit.pcaps.download.get()`
- `client.magicNetworkMonitoring.rules.delete()`
- `client.magicNetworkMonitoring.rules.edit()`
- `client.magicNetworkMonitoring.rules.get()`
- `client.magicNetworkMonitoring.rules.advertisements.edit()`
- `client.magicCloudNetworking.catalogSyncs.update()`
- `client.magicCloudNetworking.catalogSyncs.delete()`
- `client.magicCloudNetworking.catalogSyncs.edit()`
- `client.magicCloudNetworking.catalogSyncs.get()`
- `client.magicCloudNetworking.catalogSyncs.refresh()`
- `client.magicCloudNetworking.onRamps.update()`
- `client.magicCloudNetworking.onRamps.delete()`
- `client.magicCloudNetworking.onRamps.apply()`
- `client.magicCloudNetworking.onRamps.edit()`
- `client.magicCloudNetworking.onRamps.export()`
- `client.magicCloudNetworking.onRamps.get()`
- `client.magicCloudNetworking.onRamps.plan()`
- `client.magicCloudNetworking.cloudIntegrations.update()`
- `client.magicCloudNetworking.cloudIntegrations.delete()`
- `client.magicCloudNetworking.cloudIntegrations.discover()`
- `client.magicCloudNetworking.cloudIntegrations.edit()`
- `client.magicCloudNetworking.cloudIntegrations.get()`
- `client.magicCloudNetworking.cloudIntegrations.initialSetup()`
- `client.magicCloudNetworking.resources.get()`
- `client.networkInterconnects.cnis.update()`
- `client.networkInterconnects.cnis.delete()`
- `client.networkInterconnects.cnis.get()`
- `client.networkInterconnects.interconnects.delete()`
- `client.networkInterconnects.interconnects.get()`
- `client.networkInterconnects.interconnects.loa()`
- `client.networkInterconnects.interconnects.status()`
- `client.networkInterconnects.slots.get()`
- `client.mtlsCertificates.delete()`
- `client.mtlsCertificates.get()`
- `client.mtlsCertificates.associations.get()`
- `client.pages.projects.delete()`
- `client.pages.projects.edit()`
- `client.pages.projects.get()`
- `client.pages.projects.purgeBuildCache()`
- `client.pages.projects.deployments.create()`
- `client.pages.projects.deployments.list()`
- `client.pages.projects.deployments.delete()`
- `client.pages.projects.deployments.get()`
- `client.pages.projects.deployments.retry()`
- `client.pages.projects.deployments.rollback()`
- `client.pages.projects.deployments.history.logs.get()`
- `client.pages.projects.domains.create()`
- `client.pages.projects.domains.list()`
- `client.pages.projects.domains.delete()`
- `client.pages.projects.domains.edit()`
- `client.pages.projects.domains.get()`
- `client.registrar.domains.update()`
- `client.registrar.domains.get()`
- `client.rules.lists.update()`
- `client.rules.lists.delete()`
- `client.rules.lists.get()`
- `client.rules.lists.bulkOperations.get()`
- `client.rules.lists.items.create()`
- `client.rules.lists.items.update()`
- `client.rules.lists.items.list()`
- `client.rules.lists.items.delete()`
- `client.rules.lists.items.get()`
- `client.stream.delete()`
- `client.stream.edit()`
- `client.stream.get()`
- `client.stream.audioTracks.delete()`
- `client.stream.audioTracks.copy()`
- `client.stream.audioTracks.edit()`
- `client.stream.audioTracks.get()`
- `client.stream.keys.delete()`
- `client.stream.liveInputs.update()`
- `client.stream.liveInputs.delete()`
- `client.stream.liveInputs.get()`
- `client.stream.liveInputs.outputs.create()`
- `client.stream.liveInputs.outputs.update()`
- `client.stream.liveInputs.outputs.list()`
- `client.stream.liveInputs.outputs.delete()`
- `client.stream.watermarks.delete()`
- `client.stream.watermarks.get()`
- `client.stream.captions.get()`
- `client.stream.captions.language.create()`
- `client.stream.captions.language.update()`
- `client.stream.captions.language.delete()`
- `client.stream.captions.language.get()`
- `client.stream.captions.language.vtt.get()`
- `client.stream.downloads.create()`
- `client.stream.downloads.delete()`
- `client.stream.downloads.get()`
- `client.stream.embed.get()`
- `client.stream.token.create()`
- `client.alerting.destinations.pagerduty.link()`
- `client.alerting.destinations.webhooks.update()`
- `client.alerting.destinations.webhooks.delete()`
- `client.alerting.destinations.webhooks.get()`
- `client.alerting.policies.update()`
- `client.alerting.policies.delete()`
- `client.alerting.policies.get()`
- `client.d1.database.delete()`
- `client.d1.database.export()`
- `client.d1.database.get()`
- `client.d1.database.import()`
- `client.d1.database.query()`
- `client.d1.database.raw()`
- `client.r2.buckets.delete()`
- `client.r2.buckets.get()`
- `client.r2.buckets.lifecycle.update()`
- `client.r2.buckets.lifecycle.get()`
- `client.r2.buckets.cors.update()`
- `client.r2.buckets.cors.delete()`
- `client.r2.buckets.cors.get()`
- `client.r2.buckets.domains.custom.create()`
- `client.r2.buckets.domains.custom.update()`
- `client.r2.buckets.domains.custom.list()`
- `client.r2.buckets.domains.custom.delete()`
- `client.r2.buckets.domains.custom.get()`
- `client.r2.buckets.domains.managed.update()`
- `client.r2.buckets.domains.managed.list()`
- `client.r2.buckets.eventNotifications.update()`
- `client.r2.buckets.eventNotifications.delete()`
- `client.r2.buckets.eventNotifications.get()`
- `client.r2.buckets.locks.update()`
- `client.r2.buckets.locks.get()`
- `client.r2.buckets.sippy.update()`
- `client.r2.buckets.sippy.delete()`
- `client.r2.buckets.sippy.get()`
- `client.r2.superSlurper.jobs.abort()`
- `client.r2.superSlurper.jobs.get()`
- `client.r2.superSlurper.jobs.pause()`
- `client.r2.superSlurper.jobs.progress()`
- `client.r2.superSlurper.jobs.resume()`
- `client.r2.superSlurper.jobs.logs.list()`
- `client.workersForPlatforms.dispatch.namespaces.delete()`
- `client.workersForPlatforms.dispatch.namespaces.get()`
- `client.workersForPlatforms.dispatch.namespaces.scripts.update()`
- `client.workersForPlatforms.dispatch.namespaces.scripts.delete()`
- `client.workersForPlatforms.dispatch.namespaces.scripts.get()`
- `client.workersForPlatforms.dispatch.namespaces.scripts.assetUpload.create()`
- `client.workersForPlatforms.dispatch.namespaces.scripts.content.update()`
- `client.workersForPlatforms.dispatch.namespaces.scripts.content.get()`
- `client.workersForPlatforms.dispatch.namespaces.scripts.settings.edit()`
- `client.workersForPlatforms.dispatch.namespaces.scripts.settings.get()`
- `client.workersForPlatforms.dispatch.namespaces.scripts.bindings.get()`
- `client.workersForPlatforms.dispatch.namespaces.scripts.secrets.update()`
- `client.workersForPlatforms.dispatch.namespaces.scripts.secrets.list()`
- `client.workersForPlatforms.dispatch.namespaces.scripts.secrets.delete()`
- `client.workersForPlatforms.dispatch.namespaces.scripts.secrets.get()`
- `client.workersForPlatforms.dispatch.namespaces.scripts.tags.update()`
- `client.workersForPlatforms.dispatch.namespaces.scripts.tags.list()`
- `client.workersForPlatforms.dispatch.namespaces.scripts.tags.delete()`
- `client.zeroTrust.devices.get()`
- `client.zeroTrust.devices.dexTests.update()`
- `client.zeroTrust.devices.dexTests.delete()`
- `client.zeroTrust.devices.dexTests.get()`
- `client.zeroTrust.devices.networks.update()`
- `client.zeroTrust.devices.networks.delete()`
- `client.zeroTrust.devices.networks.get()`
- `client.zeroTrust.devices.fleetStatus.get()`
- `client.zeroTrust.devices.policies.custom.delete()`
- `client.zeroTrust.devices.policies.custom.edit()`
- `client.zeroTrust.devices.policies.custom.get()`
- `client.zeroTrust.devices.policies.custom.excludes.update()`
- `client.zeroTrust.devices.policies.custom.excludes.get()`
- `client.zeroTrust.devices.policies.custom.includes.update()`
- `client.zeroTrust.devices.policies.custom.includes.get()`
- `client.zeroTrust.devices.policies.custom.fallbackDomains.update()`
- `client.zeroTrust.devices.policies.custom.fallbackDomains.get()`
- `client.zeroTrust.devices.posture.update()`
- `client.zeroTrust.devices.posture.delete()`
- `client.zeroTrust.devices.posture.get()`
- `client.zeroTrust.devices.posture.integrations.delete()`
- `client.zeroTrust.devices.posture.integrations.edit()`
- `client.zeroTrust.devices.posture.integrations.get()`
- `client.zeroTrust.devices.overrideCodes.list()`
- `client.zeroTrust.identityProviders.create()`
- `client.zeroTrust.identityProviders.update()`
- `client.zeroTrust.identityProviders.list()`
- `client.zeroTrust.identityProviders.delete()`
- `client.zeroTrust.identityProviders.get()`
- `client.zeroTrust.identityProviders.scim.groups.list()`
- `client.zeroTrust.identityProviders.scim.users.list()`
- `client.zeroTrust.organizations.create()`
- `client.zeroTrust.organizations.update()`
- `client.zeroTrust.organizations.list()`
- `client.zeroTrust.organizations.revokeUsers()`
- `client.zeroTrust.access.gatewayCA.delete()`
- `client.zeroTrust.access.infrastructure.targets.update()`
- `client.zeroTrust.access.infrastructure.targets.delete()`
- `client.zeroTrust.access.infrastructure.targets.get()`
- `client.zeroTrust.access.applications.create()`
- `client.zeroTrust.access.applications.update()`
- `client.zeroTrust.access.applications.list()`
- `client.zeroTrust.access.applications.delete()`
- `client.zeroTrust.access.applications.get()`
- `client.zeroTrust.access.applications.revokeTokens()`
- `client.zeroTrust.access.applications.cas.create()`
- `client.zeroTrust.access.applications.cas.list()`
- `client.zeroTrust.access.applications.cas.delete()`
- `client.zeroTrust.access.applications.cas.get()`
- `client.zeroTrust.access.applications.userPolicyChecks.list()`
- `client.zeroTrust.access.applications.policies.create()`
- `client.zeroTrust.access.applications.policies.update()`
- `client.zeroTrust.access.applications.policies.list()`
- `client.zeroTrust.access.applications.policies.delete()`
- `client.zeroTrust.access.applications.policies.get()`
- `client.zeroTrust.access.applications.policyTests.get()`
- `client.zeroTrust.access.applications.policyTests.users.list()`
- `client.zeroTrust.access.certificates.create()`
- `client.zeroTrust.access.certificates.update()`
- `client.zeroTrust.access.certificates.list()`
- `client.zeroTrust.access.certificates.delete()`
- `client.zeroTrust.access.certificates.get()`
- `client.zeroTrust.access.certificates.settings.update()`
- `client.zeroTrust.access.certificates.settings.get()`
- `client.zeroTrust.access.groups.create()`
- `client.zeroTrust.access.groups.update()`
- `client.zeroTrust.access.groups.list()`
- `client.zeroTrust.access.groups.delete()`
- `client.zeroTrust.access.groups.get()`
- `client.zeroTrust.access.serviceTokens.create()`
- `client.zeroTrust.access.serviceTokens.update()`
- `client.zeroTrust.access.serviceTokens.list()`
- `client.zeroTrust.access.serviceTokens.delete()`
- `client.zeroTrust.access.serviceTokens.get()`
- `client.zeroTrust.access.serviceTokens.refresh()`
- `client.zeroTrust.access.serviceTokens.rotate()`
- `client.zeroTrust.access.bookmarks.create()`
- `client.zeroTrust.access.bookmarks.update()`
- `client.zeroTrust.access.bookmarks.delete()`
- `client.zeroTrust.access.bookmarks.get()`
- `client.zeroTrust.access.users.activeSessions.list()`
- `client.zeroTrust.access.users.activeSessions.get()`
- `client.zeroTrust.access.users.lastSeenIdentity.get()`
- `client.zeroTrust.access.users.failedLogins.list()`
- `client.zeroTrust.access.customPages.update()`
- `client.zeroTrust.access.customPages.delete()`
- `client.zeroTrust.access.customPages.get()`
- `client.zeroTrust.access.tags.update()`
- `client.zeroTrust.access.tags.delete()`
- `client.zeroTrust.access.tags.get()`
- `client.zeroTrust.access.policies.update()`
- `client.zeroTrust.access.policies.delete()`
- `client.zeroTrust.access.policies.get()`
- `client.zeroTrust.dex.commands.downloads.get()`
- `client.zeroTrust.dex.httpTests.get()`
- `client.zeroTrust.dex.httpTests.percentiles.get()`
- `client.zeroTrust.dex.tracerouteTestResults.networkPath.get()`
- `client.zeroTrust.dex.tracerouteTests.get()`
- `client.zeroTrust.dex.tracerouteTests.networkPath()`
- `client.zeroTrust.dex.tracerouteTests.percentiles()`
- `client.zeroTrust.tunnels.cloudflared.delete()`
- `client.zeroTrust.tunnels.cloudflared.edit()`
- `client.zeroTrust.tunnels.cloudflared.get()`
- `client.zeroTrust.tunnels.cloudflared.configurations.update()`
- `client.zeroTrust.tunnels.cloudflared.configurations.get()`
- `client.zeroTrust.tunnels.cloudflared.connections.delete()`
- `client.zeroTrust.tunnels.cloudflared.connections.get()`
- `client.zeroTrust.tunnels.cloudflared.token.get()`
- `client.zeroTrust.tunnels.cloudflared.connectors.get()`
- `client.zeroTrust.tunnels.cloudflared.management.create()`
- `client.zeroTrust.tunnels.warpConnector.delete()`
- `client.zeroTrust.tunnels.warpConnector.edit()`
- `client.zeroTrust.tunnels.warpConnector.get()`
- `client.zeroTrust.tunnels.warpConnector.token.get()`
- `client.zeroTrust.dlp.datasets.update()`
- `client.zeroTrust.dlp.datasets.delete()`
- `client.zeroTrust.dlp.datasets.get()`
- `client.zeroTrust.dlp.datasets.upload.create()`
- `client.zeroTrust.dlp.datasets.upload.edit()`
- `client.zeroTrust.dlp.datasets.versions.create()`
- `client.zeroTrust.dlp.datasets.versions.entries.create()`
- `client.zeroTrust.dlp.email.rules.update()`
- `client.zeroTrust.dlp.email.rules.delete()`
- `client.zeroTrust.dlp.email.rules.get()`
- `client.zeroTrust.dlp.profiles.get()`
- `client.zeroTrust.dlp.profiles.custom.update()`
- `client.zeroTrust.dlp.profiles.custom.delete()`
- `client.zeroTrust.dlp.profiles.custom.get()`
- `client.zeroTrust.dlp.profiles.predefined.update()`
- `client.zeroTrust.dlp.profiles.predefined.get()`
- `client.zeroTrust.dlp.entries.update()`
- `client.zeroTrust.dlp.entries.delete()`
- `client.zeroTrust.dlp.entries.get()`
- `client.zeroTrust.gateway.lists.update()`
- `client.zeroTrust.gateway.lists.delete()`
- `client.zeroTrust.gateway.lists.edit()`
- `client.zeroTrust.gateway.lists.get()`
- `client.zeroTrust.gateway.lists.items.list()`
- `client.zeroTrust.gateway.locations.update()`
- `client.zeroTrust.gateway.locations.delete()`
- `client.zeroTrust.gateway.locations.get()`
- `client.zeroTrust.gateway.proxyEndpoints.delete()`
- `client.zeroTrust.gateway.proxyEndpoints.edit()`
- `client.zeroTrust.gateway.proxyEndpoints.get()`
- `client.zeroTrust.gateway.rules.update()`
- `client.zeroTrust.gateway.rules.delete()`
- `client.zeroTrust.gateway.rules.get()`
- `client.zeroTrust.gateway.rules.resetExpiration()`
- `client.zeroTrust.gateway.certificates.delete()`
- `client.zeroTrust.gateway.certificates.activate()`
- `client.zeroTrust.gateway.certificates.deactivate()`
- `client.zeroTrust.gateway.certificates.get()`
- `client.zeroTrust.networks.routes.delete()`
- `client.zeroTrust.networks.routes.edit()`
- `client.zeroTrust.networks.routes.get()`
- `client.zeroTrust.networks.routes.ips.get()`
- `client.zeroTrust.networks.routes.networks.create()`
- `client.zeroTrust.networks.routes.networks.delete()`
- `client.zeroTrust.networks.routes.networks.edit()`
- `client.zeroTrust.networks.virtualNetworks.delete()`
- `client.zeroTrust.networks.virtualNetworks.edit()`
- `client.zeroTrust.networks.virtualNetworks.get()`
- `client.zeroTrust.networks.subnets.cloudflareSource.update()`
- `client.zeroTrust.riskScoring.get()`
- `client.zeroTrust.riskScoring.reset()`
- `client.zeroTrust.riskScoring.integrations.update()`
- `client.zeroTrust.riskScoring.integrations.delete()`
- `client.zeroTrust.riskScoring.integrations.get()`
- `client.zeroTrust.riskScoring.integrations.references.get()`
- `client.turnstile.widgets.update()`
- `client.turnstile.widgets.delete()`
- `client.turnstile.widgets.get()`
- `client.turnstile.widgets.rotateSecret()`
- `client.hyperdrive.configs.update()`
- `client.hyperdrive.configs.delete()`
- `client.hyperdrive.configs.edit()`
- `client.hyperdrive.configs.get()`
- `client.rum.siteInfo.update()`
- `client.rum.siteInfo.delete()`
- `client.rum.siteInfo.get()`
- `client.rum.rules.create()`
- `client.rum.rules.update()`
- `client.rum.rules.list()`
- `client.rum.rules.delete()`
- `client.rum.rules.bulkCreate()`
- `client.vectorize.indexes.delete()`
- `client.vectorize.indexes.deleteByIDs()`
- `client.vectorize.indexes.get()`
- `client.vectorize.indexes.getByIDs()`
- `client.vectorize.indexes.info()`
- `client.vectorize.indexes.insert()`
- `client.vectorize.indexes.query()`
- `client.vectorize.indexes.upsert()`
- `client.vectorize.indexes.metadataIndex.create()`
- `client.vectorize.indexes.metadataIndex.list()`
- `client.vectorize.indexes.metadataIndex.delete()`
- `client.urlScanner.responses.get()`
- `client.urlScanner.scans.dom()`
- `client.urlScanner.scans.get()`
- `client.urlScanner.scans.har()`
- `client.urlScanner.scans.screenshot()`
- `client.speed.schedule.create()`
- `client.speed.schedule.delete()`
- `client.speed.schedule.get()`
- `client.speed.pages.trend()`
- `client.speed.pages.tests.create()`
- `client.speed.pages.tests.list()`
- `client.speed.pages.tests.delete()`
- `client.speed.pages.tests.get()`
- `client.hostnames.settings.tls.update()`
- `client.hostnames.settings.tls.delete()`
- `client.hostnames.settings.tls.get()`
- `client.snippets.update()`
- `client.snippets.delete()`
- `client.snippets.get()`
- `client.snippets.content.get()`
- `client.calls.sfu.update()`
- `client.calls.sfu.delete()`
- `client.calls.sfu.get()`
- `client.calls.turn.update()`
- `client.calls.turn.delete()`
- `client.calls.turn.get()`
- `client.cloudforceOne.scans.results.get()`
- `client.cloudforceOne.scans.config.delete()`
- `client.cloudforceOne.scans.config.edit()`
- `client.cloudforceOne.requests.update()`
- `client.cloudforceOne.requests.delete()`
- `client.cloudforceOne.requests.get()`
- `client.cloudforceOne.requests.message.create()`
- `client.cloudforceOne.requests.message.update()`
- `client.cloudforceOne.requests.message.delete()`
- `client.cloudforceOne.requests.message.get()`
- `client.cloudforceOne.requests.priority.update()`
- `client.cloudforceOne.requests.priority.delete()`
- `client.cloudforceOne.requests.priority.get()`
- `client.cloudforceOne.requests.assets.create()`
- `client.cloudforceOne.requests.assets.update()`
- `client.cloudforceOne.requests.assets.delete()`
- `client.cloudforceOne.requests.assets.get()`
- `client.cloudforceOne.threatEvents.delete()`
- `client.cloudforceOne.threatEvents.edit()`
- `client.cloudforceOne.threatEvents.get()`
- `client.cloudforceOne.threatEvents.categories.delete()`
- `client.cloudforceOne.threatEvents.categories.edit()`
- `client.cloudforceOne.threatEvents.categories.get()`
- `client.cloudforceOne.threatEvents.datasets.edit()`
- `client.cloudforceOne.threatEvents.datasets.get()`
- `client.cloudforceOne.threatEvents.datasets.raw()`
- `client.cloudforceOne.threatEvents.raw.edit()`
- `client.cloudforceOne.threatEvents.raw.get()`
- `client.cloudforceOne.threatEvents.relate.delete()`
- `client.cloudforceOne.threatEvents.eventTags.create()`
- `client.cloudforceOne.threatEvents.eventTags.delete()`
- `client.cloudforceOne.threatEvents.insights.create()`
- `client.cloudforceOne.threatEvents.insights.delete()`
- `client.cloudforceOne.threatEvents.insights.edit()`
- `client.cloudforceOne.threatEvents.insights.get()`
- `client.aiGateway.update()`
- `client.aiGateway.delete()`
- `client.aiGateway.get()`
- `client.aiGateway.logs.list()`
- `client.aiGateway.logs.delete()`
- `client.aiGateway.logs.edit()`
- `client.aiGateway.logs.get()`
- `client.aiGateway.logs.request()`
- `client.aiGateway.logs.response()`
- `client.aiGateway.datasets.create()`
- `client.aiGateway.datasets.update()`
- `client.aiGateway.datasets.list()`
- `client.aiGateway.datasets.delete()`
- `client.aiGateway.datasets.get()`
- `client.aiGateway.evaluations.create()`
- `client.aiGateway.evaluations.list()`
- `client.aiGateway.evaluations.delete()`
- `client.aiGateway.evaluations.get()`
- `client.aiGateway.urls.get()`
- `client.iam.permissionGroups.get()`
- `client.iam.resourceGroups.update()`
- `client.iam.resourceGroups.delete()`
- `client.iam.resourceGroups.get()`
- `client.botnetFeed.asn.dayReport()`
- `client.botnetFeed.asn.fullReport()`
- `client.botnetFeed.configs.asn.delete()`
- `client.workflows.update()`
- `client.workflows.get()`
- `client.workflows.instances.create()`
- `client.workflows.instances.list()`
- `client.workflows.instances.bulk()`
- `client.workflows.instances.get()`
- `client.workflows.instances.status.edit()`
- `client.workflows.versions.list()`
- `client.workflows.versions.get()`
- `client.resourceSharing.update()`
- `client.resourceSharing.delete()`
- `client.resourceSharing.get()`
- `client.resourceSharing.recipients.create()`
- `client.resourceSharing.recipients.list()`
- `client.resourceSharing.recipients.delete()`
- `client.resourceSharing.recipients.get()`
- `client.resourceSharing.resources.create()`
- `client.resourceSharing.resources.update()`
- `client.resourceSharing.resources.list()`
- `client.resourceSharing.resources.delete()`
- `client.resourceSharing.resources.get()`
- `client.leakedCredentialChecks.detections.update()`
- `client.leakedCredentialChecks.detections.delete()`
- `client.contentScanning.payloads.delete()`
- `client.abuseReports.create()`
- `client.ai.run()`
- `client.ai.finetunes.assets.create()`
- `client.securityCenter.insights.list()`
- `client.securityCenter.insights.dismiss()`
- `client.securityCenter.insights.class.get()`
- `client.securityCenter.insights.severity.get()`
- `client.securityCenter.insights.type.get()`
- `client.customPages.update()`
- `client.customPages.list()`
- `client.customPages.get()`

</details>

### URI encoded path parameters

Path params are now properly encoded by default. If you were manually encoding path parameters before giving them to the SDK, you must now stop doing that and pass the
param without any encoding applied.

For example:

```diff
- client.example.retrieve(encodeURIComponent('string/with/slash'))
+ client.example.retrieve('string/with/slash') // retrieves /example/string%2Fwith%2Fslash
```

Previously without the `encodeURIComponent()` call we would have used the path `/example/string/with/slash`; now we'll use `/example/string%2Fwith%2Fslash`.

### Method params must be an object

When making requests to endpoints that expect something other than a JSON object, you must now pass the body as a property instead
of an individual argument.

For example, an endpoint that takes an array:

```typescript
// Before
client.example.create([{ name: 'name' }, { name: 'name' }]);

// After
client.example.create({ items: [{ name: 'name' }, { name: 'name' }] });
```

<details>

<summary>This affects the following methods</summary>

- `client.accounts.tokens.value.update()`
- `client.user.tokens.value.update()`
- `client.cache.cacheReserve.clear()`
- `client.dns.records.scan()`
- `client.dns.zoneTransfers.forceAXFR.create()`
- `client.dns.zoneTransfers.outgoing.disable()`
- `client.dns.zoneTransfers.outgoing.enable()`
- `client.dns.zoneTransfers.outgoing.forceNotify()`
- `client.emailSecurity.investigate.release.bulk()`
- `client.emailRouting.disable()`
- `client.emailRouting.enable()`
- `client.filters.update()`
- `client.firewall.rules.bulkEdit()`
- `client.firewall.rules.bulkUpdate()`
- `client.waitingRooms.rules.create()`
- `client.waitingRooms.rules.update()`
- `client.workers.scripts.schedules.update()`
- `client.workers.scripts.tail.create()`
- `client.kv.namespaces.keys.bulkDelete()`
- `client.kv.namespaces.keys.bulkUpdate()`
- `client.apiGateway.discovery.operations.bulkEdit()`
- `client.apiGateway.operations.bulkCreate()`
- `client.apiGateway.operations.schemaValidation.edit()`
- `client.addressing.addressMaps.accounts.update()`
- `client.addressing.addressMaps.ips.update()`
- `client.addressing.addressMaps.zones.update()`
- `client.magicTransit.cfInterconnects.bulkUpdate()`
- `client.magicTransit.greTunnels.create()`
- `client.magicTransit.greTunnels.bulkUpdate()`
- `client.magicTransit.ipsecTunnels.bulkUpdate()`
- `client.magicTransit.ipsecTunnels.pskGenerate()`
- `client.magicTransit.routes.create()`
- `client.magicNetworkMonitoring.rules.advertisements.edit()`
- `client.pages.projects.deployments.retry()`
- `client.pages.projects.deployments.rollback()`
- `client.pages.projects.domains.edit()`
- `client.rules.lists.items.create()`
- `client.rules.lists.items.update()`
- `client.stream.create()`
- `client.stream.keys.create()`
- `client.stream.downloads.create()`
- `client.workersForPlatforms.dispatch.namespaces.scripts.tags.update()`
- `client.zeroTrust.devices.policies.default.excludes.update()`
- `client.zeroTrust.devices.policies.default.includes.update()`
- `client.zeroTrust.devices.policies.default.fallbackDomains.update()`
- `client.zeroTrust.devices.policies.custom.excludes.update()`
- `client.zeroTrust.devices.policies.custom.includes.update()`
- `client.zeroTrust.devices.policies.custom.fallbackDomains.update()`
- `client.zeroTrust.devices.revoke.create()`
- `client.zeroTrust.devices.unrevoke.create()`
- `client.zeroTrust.seats.edit()`
- `client.zeroTrust.access.infrastructure.targets.bulkUpdate()`
- `client.zeroTrust.access.bookmarks.create()`
- `client.zeroTrust.access.bookmarks.update()`
- `client.zeroTrust.dlp.datasets.upload.edit()`
- `client.zeroTrust.dlp.datasets.versions.create()`
- `client.zeroTrust.dlp.datasets.versions.entries.create()`
- `client.zeroTrust.gateway.certificates.activate()`
- `client.zeroTrust.gateway.certificates.deactivate()`
- `client.vectorize.indexes.insert()`
- `client.vectorize.indexes.upsert()`
- `client.urlScanner.scans.bulkCreate()`
- `client.radar.ai.toMarkdown.create()`
- `client.zaraz.update()`
- `client.zaraz.history.update()`
- `client.zaraz.publish.create()`
- `client.cloudConnector.rules.update()`
- `client.workflows.instances.bulk()`
- `client.contentScanning.payloads.create()`

</details>

### Removed request options overloads

When making requests with no required body, query or header parameters, you must now explicitly pass `null`, `undefined` or an empty object `{}` to the params argument in order to customise request options.

```diff
client.example.list();
client.example.list({}, { headers: { ... } });
client.example.list(null, { headers: { ... } });
client.example.list(undefined, { headers: { ... } });
- client.example.list({ headers: { ... } });
+ client.example.list({}, { headers: { ... } });
```

<details>

<summary>This affects the following methods</summary>

- `client.accounts.list()`
- `client.ips.list()`
- `client.memberships.list()`
- `client.user.auditLogs.list()`
- `client.user.billing.history.list()`
- `client.user.organizations.list()`
- `client.user.tokens.list()`
- `client.zones.list()`
- `client.firewall.accessRules.list()`
- `client.firewall.accessRules.delete()`
- `client.firewall.accessRules.get()`
- `client.logpush.datasets.fields.get()`
- `client.logpush.datasets.jobs.get()`
- `client.logpush.jobs.list()`
- `client.logpush.jobs.delete()`
- `client.logpush.jobs.get()`
- `client.waitingRooms.list()`
- `client.rulesets.list()`
- `client.rulesets.delete()`
- `client.rulesets.get()`
- `client.rulesets.phases.get()`
- `client.rulesets.phases.versions.list()`
- `client.rulesets.versions.list()`
- `client.zeroTrust.identityProviders.list()`
- `client.zeroTrust.identityProviders.delete()`
- `client.zeroTrust.identityProviders.get()`
- `client.zeroTrust.organizations.list()`
- `client.zeroTrust.access.applications.list()`
- `client.zeroTrust.access.applications.delete()`
- `client.zeroTrust.access.applications.get()`
- `client.zeroTrust.access.applications.revokeTokens()`
- `client.zeroTrust.access.applications.cas.create()`
- `client.zeroTrust.access.applications.cas.list()`
- `client.zeroTrust.access.applications.cas.delete()`
- `client.zeroTrust.access.applications.cas.get()`
- `client.zeroTrust.access.applications.userPolicyChecks.list()`
- `client.zeroTrust.access.applications.policies.list()`
- `client.zeroTrust.access.certificates.list()`
- `client.zeroTrust.access.certificates.delete()`
- `client.zeroTrust.access.certificates.get()`
- `client.zeroTrust.access.certificates.settings.get()`
- `client.zeroTrust.access.groups.list()`
- `client.zeroTrust.access.groups.delete()`
- `client.zeroTrust.access.groups.get()`
- `client.zeroTrust.access.serviceTokens.list()`
- `client.zeroTrust.access.serviceTokens.delete()`
- `client.zeroTrust.access.serviceTokens.get()`
- `client.radar.ai.inference.summary.model()`
- `client.radar.ai.inference.summary.task()`
- `client.radar.ai.inference.timeseriesGroups.summary.model()`
- `client.radar.ai.inference.timeseriesGroups.summary.task()`
- `client.radar.ai.bots.summary.userAgent()`
- `client.radar.ai.timeseriesGroups.userAgent()`
- `client.radar.annotations.list()`
- `client.radar.annotations.outages.get()`
- `client.radar.annotations.outages.locations()`
- `client.radar.bgp.timeseries()`
- `client.radar.bgp.leaks.events.list()`
- `client.radar.bgp.top.prefixes()`
- `client.radar.bgp.top.ases.get()`
- `client.radar.bgp.top.ases.prefixes()`
- `client.radar.bgp.hijacks.events.list()`
- `client.radar.bgp.routes.ases()`
- `client.radar.bgp.routes.moas()`
- `client.radar.bgp.routes.pfx2as()`
- `client.radar.bgp.routes.realtime()`
- `client.radar.bgp.routes.stats()`
- `client.radar.bgp.ips.timeseries()`
- `client.radar.datasets.list()`
- `client.radar.dns.timeseries()`
- `client.radar.dns.top.ases()`
- `client.radar.dns.top.locations()`
- `client.radar.dns.summary.cacheHit()`
- `client.radar.dns.summary.dnssec()`
- `client.radar.dns.summary.dnssecAware()`
- `client.radar.dns.summary.dnssecE2E()`
- `client.radar.dns.summary.ipVersion()`
- `client.radar.dns.summary.matchingAnswer()`
- `client.radar.dns.summary.protocol()`
- `client.radar.dns.summary.queryType()`
- `client.radar.dns.summary.responseCode()`
- `client.radar.dns.summary.responseTTL()`
- `client.radar.dns.timeseriesGroups.cacheHit()`
- `client.radar.dns.timeseriesGroups.dnssec()`
- `client.radar.dns.timeseriesGroups.dnssecAware()`
- `client.radar.dns.timeseriesGroups.dnssecE2E()`
- `client.radar.dns.timeseriesGroups.ipVersion()`
- `client.radar.dns.timeseriesGroups.matchingAnswer()`
- `client.radar.dns.timeseriesGroups.protocol()`
- `client.radar.dns.timeseriesGroups.queryType()`
- `client.radar.dns.timeseriesGroups.responseCode()`
- `client.radar.dns.timeseriesGroups.responseTTL()`
- `client.radar.netflows.summary()`
- `client.radar.netflows.timeseries()`
- `client.radar.netflows.top.ases()`
- `client.radar.netflows.top.locations()`
- `client.radar.verifiedBots.top.bots()`
- `client.radar.verifiedBots.top.categories()`
- `client.radar.as112.timeseries()`
- `client.radar.as112.summary.dnssec()`
- `client.radar.as112.summary.edns()`
- `client.radar.as112.summary.ipVersion()`
- `client.radar.as112.summary.protocol()`
- `client.radar.as112.summary.queryType()`
- `client.radar.as112.summary.responseCodes()`
- `client.radar.as112.timeseriesGroups.dnssec()`
- `client.radar.as112.timeseriesGroups.edns()`
- `client.radar.as112.timeseriesGroups.ipVersion()`
- `client.radar.as112.timeseriesGroups.protocol()`
- `client.radar.as112.timeseriesGroups.queryType()`
- `client.radar.as112.timeseriesGroups.responseCodes()`
- `client.radar.as112.top.dnssec()`
- `client.radar.as112.top.edns()`
- `client.radar.as112.top.ipVersion()`
- `client.radar.as112.top.locations()`
- `client.radar.email.routing.summary.arc()`
- `client.radar.email.routing.summary.dkim()`
- `client.radar.email.routing.summary.dmarc()`
- `client.radar.email.routing.summary.encrypted()`
- `client.radar.email.routing.summary.ipVersion()`
- `client.radar.email.routing.summary.spf()`
- `client.radar.email.routing.timeseriesGroups.arc()`
- `client.radar.email.routing.timeseriesGroups.dkim()`
- `client.radar.email.routing.timeseriesGroups.dmarc()`
- `client.radar.email.routing.timeseriesGroups.encrypted()`
- `client.radar.email.routing.timeseriesGroups.ipVersion()`
- `client.radar.email.routing.timeseriesGroups.spf()`
- `client.radar.email.security.top.tlds.get()`
- `client.radar.email.security.top.tlds.malicious.get()`
- `client.radar.email.security.top.tlds.spam.get()`
- `client.radar.email.security.top.tlds.spoof.get()`
- `client.radar.email.security.summary.arc()`
- `client.radar.email.security.summary.dkim()`
- `client.radar.email.security.summary.dmarc()`
- `client.radar.email.security.summary.malicious()`
- `client.radar.email.security.summary.spam()`
- `client.radar.email.security.summary.spf()`
- `client.radar.email.security.summary.spoof()`
- `client.radar.email.security.summary.threatCategory()`
- `client.radar.email.security.summary.tlsVersion()`
- `client.radar.email.security.timeseriesGroups.arc()`
- `client.radar.email.security.timeseriesGroups.dkim()`
- `client.radar.email.security.timeseriesGroups.dmarc()`
- `client.radar.email.security.timeseriesGroups.malicious()`
- `client.radar.email.security.timeseriesGroups.spam()`
- `client.radar.email.security.timeseriesGroups.spf()`
- `client.radar.email.security.timeseriesGroups.spoof()`
- `client.radar.email.security.timeseriesGroups.threatCategory()`
- `client.radar.email.security.timeseriesGroups.tlsVersion()`
- `client.radar.attacks.layer3.timeseries()`
- `client.radar.attacks.layer3.summary.bitrate()`
- `client.radar.attacks.layer3.summary.duration()`
- `client.radar.attacks.layer3.summary.industry()`
- `client.radar.attacks.layer3.summary.ipVersion()`
- `client.radar.attacks.layer3.summary.protocol()`
- `client.radar.attacks.layer3.summary.vector()`
- `client.radar.attacks.layer3.summary.vertical()`
- `client.radar.attacks.layer3.timeseriesGroups.bitrate()`
- `client.radar.attacks.layer3.timeseriesGroups.duration()`
- `client.radar.attacks.layer3.timeseriesGroups.industry()`
- `client.radar.attacks.layer3.timeseriesGroups.ipVersion()`
- `client.radar.attacks.layer3.timeseriesGroups.protocol()`
- `client.radar.attacks.layer3.timeseriesGroups.vector()`
- `client.radar.attacks.layer3.timeseriesGroups.vertical()`
- `client.radar.attacks.layer3.top.attacks()`
- `client.radar.attacks.layer3.top.industry()`
- `client.radar.attacks.layer3.top.vertical()`
- `client.radar.attacks.layer3.top.locations.origin()`
- `client.radar.attacks.layer3.top.locations.target()`
- `client.radar.attacks.layer7.timeseries()`
- `client.radar.attacks.layer7.summary.httpMethod()`
- `client.radar.attacks.layer7.summary.httpVersion()`
- `client.radar.attacks.layer7.summary.industry()`
- `client.radar.attacks.layer7.summary.ipVersion()`
- `client.radar.attacks.layer7.summary.managedRules()`
- `client.radar.attacks.layer7.summary.mitigationProduct()`
- `client.radar.attacks.layer7.summary.vertical()`
- `client.radar.attacks.layer7.timeseriesGroups.httpMethod()`
- `client.radar.attacks.layer7.timeseriesGroups.httpVersion()`
- `client.radar.attacks.layer7.timeseriesGroups.industry()`
- `client.radar.attacks.layer7.timeseriesGroups.ipVersion()`
- `client.radar.attacks.layer7.timeseriesGroups.managedRules()`
- `client.radar.attacks.layer7.timeseriesGroups.mitigationProduct()`
- `client.radar.attacks.layer7.timeseriesGroups.vertical()`
- `client.radar.attacks.layer7.top.attacks()`
- `client.radar.attacks.layer7.top.industry()`
- `client.radar.attacks.layer7.top.vertical()`
- `client.radar.attacks.layer7.top.locations.origin()`
- `client.radar.attacks.layer7.top.locations.target()`
- `client.radar.attacks.layer7.top.ases.origin()`
- `client.radar.entities.asns.list()`
- `client.radar.entities.asns.get()`
- `client.radar.entities.asns.rel()`
- `client.radar.entities.locations.list()`
- `client.radar.entities.locations.get()`
- `client.radar.http.timeseries()`
- `client.radar.http.locations.get()`
- `client.radar.http.locations.botClass.get()`
- `client.radar.http.locations.deviceType.get()`
- `client.radar.http.locations.httpProtocol.get()`
- `client.radar.http.locations.httpMethod.get()`
- `client.radar.http.locations.ipVersion.get()`
- `client.radar.http.locations.os.get()`
- `client.radar.http.locations.tlsVersion.get()`
- `client.radar.http.locations.browserFamily.get()`
- `client.radar.http.ases.get()`
- `client.radar.http.ases.botClass.get()`
- `client.radar.http.ases.deviceType.get()`
- `client.radar.http.ases.httpProtocol.get()`
- `client.radar.http.ases.httpMethod.get()`
- `client.radar.http.ases.ipVersion.get()`
- `client.radar.http.ases.os.get()`
- `client.radar.http.ases.tlsVersion.get()`
- `client.radar.http.ases.browserFamily.get()`
- `client.radar.http.summary.botClass()`
- `client.radar.http.summary.deviceType()`
- `client.radar.http.summary.httpProtocol()`
- `client.radar.http.summary.httpVersion()`
- `client.radar.http.summary.ipVersion()`
- `client.radar.http.summary.os()`
- `client.radar.http.summary.postQuantum()`
- `client.radar.http.summary.tlsVersion()`
- `client.radar.http.timeseriesGroups.botClass()`
- `client.radar.http.timeseriesGroups.browser()`
- `client.radar.http.timeseriesGroups.browserFamily()`
- `client.radar.http.timeseriesGroups.deviceType()`
- `client.radar.http.timeseriesGroups.httpProtocol()`
- `client.radar.http.timeseriesGroups.httpVersion()`
- `client.radar.http.timeseriesGroups.ipVersion()`
- `client.radar.http.timeseriesGroups.os()`
- `client.radar.http.timeseriesGroups.postQuantum()`
- `client.radar.http.timeseriesGroups.tlsVersion()`
- `client.radar.http.top.browser()`
- `client.radar.http.top.browserFamily()`
- `client.radar.quality.speed.histogram()`
- `client.radar.quality.speed.summary()`
- `client.radar.quality.speed.top.ases()`
- `client.radar.quality.speed.top.locations()`
- `client.radar.ranking.timeseriesGroups()`
- `client.radar.ranking.top()`
- `client.radar.ranking.domain.get()`
- `client.radar.ranking.internetServices.categories()`
- `client.radar.ranking.internetServices.timeseriesGroups()`
- `client.radar.ranking.internetServices.top()`
- `client.radar.trafficAnomalies.get()`
- `client.radar.trafficAnomalies.locations.get()`
- `client.radar.tcpResetsTimeouts.summary()`
- `client.radar.tcpResetsTimeouts.timeseriesGroups()`
- `client.radar.robotsTXT.top.domainCategories()`
- `client.radar.robotsTXT.top.userAgents.directive()`
- `client.radar.leakedCredentials.summary.botClass()`
- `client.radar.leakedCredentials.summary.compromised()`
- `client.radar.leakedCredentials.timeseriesGroups.botClass()`
- `client.radar.leakedCredentials.timeseriesGroups.compromised()`
- `client.securityCenter.insights.list()`
- `client.securityCenter.insights.class.get()`
- `client.securityCenter.insights.severity.get()`
- `client.securityCenter.insights.type.get()`
- `client.customPages.list()`
- `client.customPages.get()`

</details>

### Removed `httpAgent` in favor of `fetchOptions`

The `httpAgent` client option has been removed in favor of a [platform-specific `fetchOptions` property](https://github.com/stainless-sdks/cloudflare-typescript#fetch-options).
This change was made as `httpAgent` relied on `node:http` agents which are not supported by any runtime's builtin fetch implementation.

If you were using `httpAgent` for proxy support, check out the [new proxy documentation](https://github.com/stainless-sdks/cloudflare-typescript#configuring-proxies).

Before:

```ts
import Cloudflare from 'cloudflare';
import http from 'http';
import { HttpsProxyAgent } from 'https-proxy-agent';

// Configure the default for all requests:
const client = new Cloudflare({
  httpAgent: new HttpsProxyAgent(process.env.PROXY_URL),
});
```

After:

```ts
import Cloudflare from 'cloudflare';
import * as undici from 'undici';

const proxyAgent = new undici.ProxyAgent(process.env.PROXY_URL);
const client = new Cloudflare({
  fetchOptions: {
    dispatcher: proxyAgent,
  },
});
```

### Changed exports

#### Refactor of `cloudflare/core`, `error`, `pagination`, `resource` and `uploads`

Much of the `cloudflare/core` file was intended to be internal-only but it was publicly accessible, as such it has been refactored and split up into internal and public files, with public-facing code moved to a new `core` folder and internal code moving to the private `internal` folder.

At the same time, we moved some public-facing files which were previously at the top level into `core` to make the file structure cleaner and more clear:

```typescript
// Before
import 'cloudflare/error';
import 'cloudflare/pagination';
import 'cloudflare/resource';
import 'cloudflare/uploads';

// After
import 'cloudflare/core/error';
import 'cloudflare/core/pagination';
import 'cloudflare/core/resource';
import 'cloudflare/core/uploads';
```

If you were relying on anything that was only exported from `cloudflare/core` and is also not accessible anywhere else, please open an issue and we'll consider adding it to the public API.

#### Resource classes

Previously under certain circumstances it was possible to import resource classes like `Accounts` directly from the root of the package. This was never valid at the type level and only worked in CommonJS files.
Now you must always either reference them as static class properties or import them directly from the files in which they are defined.

```typescript
// Before
const { Accounts } = require('cloudflare');

// After
const { Cloudflare } = require('cloudflare');
Cloudflare.Accounts; // or import directly from cloudflare/resources/accounts/accounts
```

#### Cleaned up `uploads` exports

As part of the `core` refactor, `cloudflare/uploads` was moved to `cloudflare/core/uploads`
and the following exports were removed, as they were not intended to be a part of the public API:

- `fileFromPath`
- `BlobPart`
- `BlobLike`
- `FileLike`
- `ResponseLike`
- `isResponseLike`
- `isBlobLike`
- `isFileLike`
- `isUploadable`
- `isMultipartBody`
- `maybeMultipartFormRequestOptions`
- `multipartFormRequestOptions`
- `createForm`

Note that `Uploadable` & `toFile` **are** still exported:

```typescript
import { type Uploadable, toFile } from 'cloudflare/core/uploads';
```

#### `APIClient`

The `APIClient` base client class has been removed as it is no longer needed. If you were importing this class then you must now import the main client class:

```typescript
// Before
import { APIClient } from 'cloudflare/core';

// After
import { Cloudflare } from 'cloudflare';
```

### File handling

The deprecated `fileFromPath` helper has been removed in favor of native Node.js streams:

```ts
// Before
Cloudflare.fileFromPath('path/to/file');

// After
import fs from 'fs';
fs.createReadStream('path/to/file');
```

Note that this function previously only worked on Node.js. If you're using Bun, you can use [`Bun.file`](https://bun.sh/docs/api/file-io) instead.

### Shims removal

Previously you could configure the types that the SDK used like this:

```ts
// Tell TypeScript and the package to use the global Web fetch instead of node-fetch.
import 'cloudflare/shims/web';
import Cloudflare from 'cloudflare';
```

The `cloudflare/shims` imports have been removed. Your global types must now be [correctly configured](#minimum-types-requirements).

### Pagination changes

The `for await` syntax **is not affected**. This still works as-is:

```ts
// Automatically fetches more pages as needed.
for await (const account of client.accounts.list()) {
  console.log(account);
}
```

The interface for manually paginating through list results has been simplified:

```ts
// Before
page.nextPageParams();
page.nextPageInfo();
// Required manually handling { url } | { params } type

// After
page.nextPageRequestOptions();
```

#### Removed unnecessary classes

Page classes for individual methods are now type aliases:

```ts
// Before
export class AccountsV4PagePaginationArray extends V4PagePaginationArray<Account> {}

// After
export type AccountsV4PagePaginationArray = V4PagePaginationArray<Account>;
```

If you were importing these classes at runtime, you'll need to switch to importing the base class or only import them at the type-level.

### `cloudflare/src` directory removed

Previously IDEs may have auto-completed imports from the `cloudflare/src` directory, however this
directory was only included for an improved go-to-definition experience and should not have been used at runtime.

If you have any `cloudflare/src/*` imports, you will need to replace them with `cloudflare/*`.

```ts
// Before
import Cloudflare from 'cloudflare/src';

// After
import Cloudflare from 'cloudflare';
```

### Headers

The `headers` property on `APIError` objects is now an instance of the Web [Headers](https://developer.mozilla.org/en-US/docs/Web/API/Headers) class. It was previously just `Record<string, string | null | undefined>`.
