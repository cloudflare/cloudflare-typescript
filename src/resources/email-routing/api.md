# EmailRouting

Types:

- <code><a href="./src/resources/email-routing/email-routing.ts">Settings</a></code>

Methods:

- <code title="post /zones/{zone_id}/email/routing/disable">client.emailRouting.<a href="./src/resources/email-routing/email-routing.ts">disable</a>({ ...params }) -> Settings</code>
- <code title="post /zones/{zone_id}/email/routing/enable">client.emailRouting.<a href="./src/resources/email-routing/email-routing.ts">enable</a>({ ...params }) -> Settings</code>
- <code title="get /zones/{zone_id}/email/routing">client.emailRouting.<a href="./src/resources/email-routing/email-routing.ts">get</a>({ ...params }) -> Settings</code>

## DNS

Types:

- <code><a href="./src/resources/email-routing/dns.ts">DNSRecord</a></code>
- <code><a href="./src/resources/email-routing/dns.ts">DNSGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/email/routing/dns">client.emailRouting.dns.<a href="./src/resources/email-routing/dns.ts">create</a>({ ...params }) -> Settings</code>
- <code title="delete /zones/{zone_id}/email/routing/dns">client.emailRouting.dns.<a href="./src/resources/email-routing/dns.ts">delete</a>({ ...params }) -> DNSRecordsSinglePage</code>
- <code title="patch /zones/{zone_id}/email/routing/dns">client.emailRouting.dns.<a href="./src/resources/email-routing/dns.ts">edit</a>({ ...params }) -> Settings</code>
- <code title="get /zones/{zone_id}/email/routing/dns">client.emailRouting.dns.<a href="./src/resources/email-routing/dns.ts">get</a>({ ...params }) -> DNSGetResponse</code>

## Rules

Types:

- <code><a href="./src/resources/email-routing/rules/rules.ts">Action</a></code>
- <code><a href="./src/resources/email-routing/rules/rules.ts">EmailRoutingRule</a></code>
- <code><a href="./src/resources/email-routing/rules/rules.ts">Matcher</a></code>

Methods:

- <code title="post /zones/{zone_id}/email/routing/rules">client.emailRouting.rules.<a href="./src/resources/email-routing/rules/rules.ts">create</a>({ ...params }) -> EmailRoutingRule</code>
- <code title="put /zones/{zone_id}/email/routing/rules/{rule_identifier}">client.emailRouting.rules.<a href="./src/resources/email-routing/rules/rules.ts">update</a>(ruleIdentifier, { ...params }) -> EmailRoutingRule</code>
- <code title="get /zones/{zone_id}/email/routing/rules">client.emailRouting.rules.<a href="./src/resources/email-routing/rules/rules.ts">list</a>({ ...params }) -> EmailRoutingRulesV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/email/routing/rules/{rule_identifier}">client.emailRouting.rules.<a href="./src/resources/email-routing/rules/rules.ts">delete</a>(ruleIdentifier, { ...params }) -> EmailRoutingRule</code>
- <code title="get /zones/{zone_id}/email/routing/rules/{rule_identifier}">client.emailRouting.rules.<a href="./src/resources/email-routing/rules/rules.ts">get</a>(ruleIdentifier, { ...params }) -> EmailRoutingRule</code>

### CatchAlls

Types:

- <code><a href="./src/resources/email-routing/rules/catch-alls.ts">CatchAllAction</a></code>
- <code><a href="./src/resources/email-routing/rules/catch-alls.ts">CatchAllMatcher</a></code>
- <code><a href="./src/resources/email-routing/rules/catch-alls.ts">CatchAllUpdateResponse</a></code>
- <code><a href="./src/resources/email-routing/rules/catch-alls.ts">CatchAllGetResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/email/routing/rules/catch_all">client.emailRouting.rules.catchAlls.<a href="./src/resources/email-routing/rules/catch-alls.ts">update</a>({ ...params }) -> CatchAllUpdateResponse</code>
- <code title="get /zones/{zone_id}/email/routing/rules/catch_all">client.emailRouting.rules.catchAlls.<a href="./src/resources/email-routing/rules/catch-alls.ts">get</a>({ ...params }) -> CatchAllGetResponse</code>

## Addresses

Types:

- <code><a href="./src/resources/email-routing/addresses.ts">Address</a></code>

Methods:

- <code title="post /accounts/{account_id}/email/routing/addresses">client.emailRouting.addresses.<a href="./src/resources/email-routing/addresses.ts">create</a>({ ...params }) -> Address</code>
- <code title="get /accounts/{account_id}/email/routing/addresses">client.emailRouting.addresses.<a href="./src/resources/email-routing/addresses.ts">list</a>({ ...params }) -> AddressesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/email/routing/addresses/{destination_address_identifier}">client.emailRouting.addresses.<a href="./src/resources/email-routing/addresses.ts">delete</a>(destinationAddressIdentifier, { ...params }) -> Address</code>
- <code title="get /accounts/{account_id}/email/routing/addresses/{destination_address_identifier}">client.emailRouting.addresses.<a href="./src/resources/email-routing/addresses.ts">get</a>(destinationAddressIdentifier, { ...params }) -> Address</code>
