# Cloudflare TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:stainless-sdks/cloudflare-typescript.git
cd cloudflare-typescript
yarn && ./scripts/build-all
```

### Running

```sh
# set env vars as needed
export CLOUDFLARE_API_TOKEN="Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY"
export CLOUDFLARE_API_KEY="144c9defac04969c7bfad8efaa8ea194"
export CLOUDFLARE_EMAIL="user@example.com"
export CLOUDFLARE_API_USER_SERVICE_KEY="v1.0-144c9defac04969c7bfad8ef-631a41d003a32d25fe878081ef365c49503f7fada600da935e2851a1c7326084b85cbf6429c4b859de8475731dc92a9c329631e6d59e6c73da7b198497172b4cefe071d90d0f5d2719"
npx ./packages/mcp-server
```

> [!NOTE]
> Once this package is [published to npm](https://app.stainless.com/docs/guides/publish), this will become: `npx -y cloudflare-mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "cloudflare_api": {
      "command": "npx",
      "args": ["-y", "/path/to/local/cloudflare-typescript/packages/mcp-server"],
      "env": {
        "CLOUDFLARE_API_TOKEN": "Sn3lZJTBX6kkg7OdcBUAxOO963GEIyGQqnFTOFYY",
        "CLOUDFLARE_API_KEY": "144c9defac04969c7bfad8efaa8ea194",
        "CLOUDFLARE_EMAIL": "user@example.com",
        "CLOUDFLARE_API_USER_SERVICE_KEY": "v1.0-144c9defac04969c7bfad8ef-631a41d003a32d25fe878081ef365c49503f7fada600da935e2851a1c7326084b85cbf6429c4b859de8475731dc92a9c329631e6d59e6c73da7b198497172b4cefe071d90d0f5d2719"
      }
    }
  }
}
```

## Filtering tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "cloudflare-mcp/server";

// import a specific tool
import createAccounts from "cloudflare-mcp/tools/accounts/create-accounts";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [createAccounts, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `accounts`:

- `create_accounts` (`write`): Create an account (only available for tenant admins at this time)
- `update_accounts` (`write`): Update an existing account.
- `list_accounts` (`read`): List all accounts you have ownership or verified access to.
- `delete_accounts` (`write`): Delete a specific account (only available for tenant admins at this time). This is a permanent operation that will delete any zones or other resources under the account
- `get_accounts` (`read`): Get information about a specific account that you are a member of.

### Resource `accounts.members`:

- `create_accounts_members` (`write`): Add a user to the list of members for this account.
- `update_accounts_members` (`write`): Modify an account member.
- `list_accounts_members` (`read`): List all members of an account.
- `delete_accounts_members` (`write`): Remove a member from an account.
- `get_accounts_members` (`read`): Get information about a specific member of an account.

### Resource `accounts.roles`:

- `list_accounts_roles` (`read`): Get all available roles for an account.
- `get_accounts_roles` (`read`): Get information about a specific role for an account.

### Resource `accounts.subscriptions`:

- `create_accounts_subscriptions` (`write`): Creates an account subscription.
- `update_accounts_subscriptions` (`write`): Updates an account subscription.
- `delete_accounts_subscriptions` (`write`): Deletes an account's subscription.
- `get_accounts_subscriptions` (`read`): Lists all of an account's subscriptions.

### Resource `accounts.tokens`:

- `create_accounts_tokens` (`write`): Create a new Account Owned API token.
- `update_accounts_tokens` (`write`): Update an existing token.
- `list_accounts_tokens` (`read`): List all Account Owned API tokens created for this account.
- `delete_accounts_tokens` (`write`): Destroy an Account Owned API token.
- `get_accounts_tokens` (`read`): Get information about a specific Account Owned API token.
- `verify_accounts_tokens` (`read`): Test whether a token works.

### Resource `accounts.tokens.permission_groups`:

- `list_tokens_accounts_permission_groups` (`read`): Find all available permission groups for Account Owned API Tokens
- `get_tokens_accounts_permission_groups` (`read`): Find all available permission groups for Account Owned API Tokens

### Resource `accounts.tokens.value`:

- `update_tokens_accounts_value` (`write`): Roll the Account Owned API token secret.

### Resource `accounts.logs.audit`:

- `list_logs_accounts_audit` (`read`): Gets a list of audit logs for an account. <br /> <br /> This is the beta release of Audit Logs Version 2. Since this is a beta version, there may be gaps or missing entries in the available audit logs. Be aware of the following limitations. <br /> <ul> <li>Audit logs are available only for the past 30 days. <br /></li> <li>Error handling is not yet implemented. <br /> </li> </ul>

### Resource `origin_ca_certificates`:

- `create_origin_ca_certificates` (`write`): Create an Origin CA certificate. You can use an Origin CA Key as your User Service Key or an API token when calling this endpoint ([see above](#requests)).
- `list_origin_ca_certificates` (`read`): List all existing Origin CA certificates for a given zone. You can use an Origin CA Key as your User Service Key or an API token when calling this endpoint ([see above](#requests)).
- `delete_origin_ca_certificates` (`write`): Revoke an existing Origin CA certificate by its serial number. You can use an Origin CA Key as your User Service Key or an API token when calling this endpoint ([see above](#requests)).
- `get_origin_ca_certificates` (`read`): Get an existing Origin CA certificate by its serial number. You can use an Origin CA Key as your User Service Key or an API token when calling this endpoint ([see above](#requests)).

### Resource `ips`:

- `list_ips` (`read`): Get IPs used on the Cloudflare/JD Cloud network, see https://www.cloudflare.com/ips for Cloudflare IPs or https://developers.cloudflare.com/china-network/reference/infrastructure/ for JD Cloud IPs.

### Resource `memberships`:

- `update_memberships` (`write`): Accept or reject this account invitation.
- `list_memberships` (`read`): List memberships of accounts the user can access.
- `delete_memberships` (`write`): Remove the associated member from an account.
- `get_memberships` (`read`): Get a specific membership.

### Resource `user`:

- `edit_user` (`write`): Edit part of your user details.
- `get_user` (`read`): User Details

### Resource `user.audit_logs`:

- `list_user_audit_logs` (`read`): Gets a list of audit logs for a user account. Can be filtered by who made the change, on which zone, and the timeframe of the change.

### Resource `user.billing.history`:

- `list_billing_user_history` (`read`): Accesses your billing history object.

### Resource `user.billing.profile`:

- `get_billing_user_profile` (`read`): Accesses your billing profile object.

### Resource `user.invites`:

- `list_user_invites` (`read`): Lists all invitations associated with my user.
- `edit_user_invites` (`write`): Responds to an invitation.
- `get_user_invites` (`read`): Gets the details of an invitation.

### Resource `user.organizations`:

- `list_user_organizations` (`read`): Lists organizations the user is associated with.
- `delete_user_organizations` (`write`): Removes association to an organization.
- `get_user_organizations` (`read`): Gets a specific organization the user is associated with.

### Resource `user.subscriptions`:

- `update_user_subscriptions` (`write`): Updates a user's subscriptions.
- `delete_user_subscriptions` (`write`): Deletes a user's subscription.
- `get_user_subscriptions` (`read`): Lists all of a user's subscriptions.

### Resource `user.tokens`:

- `create_user_tokens` (`write`): Create a new access token.
- `update_user_tokens` (`write`): Update an existing token.
- `list_user_tokens` (`read`): List all access tokens you created.
- `delete_user_tokens` (`write`): Destroy a token.
- `get_user_tokens` (`read`): Get information about a specific token.
- `verify_user_tokens` (`read`): Test whether a token works.

### Resource `user.tokens.permission_groups`:

- `list_tokens_user_permission_groups` (`read`): Find all available permission groups for API Tokens

### Resource `user.tokens.value`:

- `update_tokens_user_value` (`write`): Roll the token secret.

### Resource `zones`:

- `create_zones` (`write`): Create Zone
- `list_zones` (`read`): Lists, searches, sorts, and filters your zones. Listing zones across more than 500 accounts
  is currently not allowed.
- `delete_zones` (`write`): Deletes an existing zone.
- `edit_zones` (`write`): Edits a zone. Only one zone property can be changed at a time.
- `get_zones` (`read`): Zone Details

### Resource `zones.activation_check`:

- `trigger_zones_activation_check` (`write`): Triggeres a new activation check for a PENDING Zone. This can be
  triggered every 5 min for paygo/ent customers, every hour for FREE
  Zones.

### Resource `zones.settings`:

- `edit_zones_settings` (`write`): Updates a single zone setting by the identifier
- `get_zones_settings` (`read`): Fetch a single zone setting by name

### Resource `zones.custom_nameservers`:

- `update_zones_custom_nameservers` (`write`): Set metadata for account-level custom nameservers on a zone.

If you would like new zones in the account to use account custom nameservers by default, use PUT /accounts/:identifier to set the account setting use_account_custom_ns_by_default to true.

Deprecated in favor of [Update DNS Settings](https://developers.cloudflare.com/api/operations/dns-settings-for-a-zone-update-dns-settings).

- `get_zones_custom_nameservers` (`read`): Get metadata for account-level custom nameservers on a zone.

Deprecated in favor of [Show DNS Settings](https://developers.cloudflare.com/api/operations/dns-settings-for-a-zone-list-dns-settings).

### Resource `zones.holds`:

- `create_zones_holds` (`write`): Enforce a zone hold on the zone, blocking the creation and activation of zones with this zone's hostname.
- `delete_zones_holds` (`write`): Stop enforcement of a zone hold on the zone, permanently or temporarily, allowing the
  creation and activation of zones with this zone's hostname.
- `edit_zones_holds` (`write`): Update the `hold_after` and/or `include_subdomains` values on an existing zone hold.
  The hold is enabled if the `hold_after` date-time value is in the past.
- `get_zones_holds` (`read`): Retrieve whether the zone is subject to a zone hold, and metadata about the hold.

### Resource `zones.subscriptions`:

- `create_zones_subscriptions` (`write`): Create a zone subscription, either plan or add-ons.
- `update_zones_subscriptions` (`write`): Updates zone subscriptions, either plan or add-ons.
- `get_zones_subscriptions` (`read`): Lists zone subscription details.

### Resource `zones.plans`:

- `list_zones_plans` (`read`): Lists available plans the zone can subscribe to.
- `get_zones_plans` (`read`): Details of the available plan that the zone can subscribe to.

### Resource `zones.rate_plans`:

- `get_zones_rate_plans` (`read`): Lists all rate plans the zone can subscribe to.

### Resource `load_balancers`:

- `create_load_balancers` (`write`): Create a new load balancer.
- `update_load_balancers` (`write`): Update a configured load balancer.
- `list_load_balancers` (`read`): List configured load balancers.
- `delete_load_balancers` (`write`): Delete a configured load balancer.
- `edit_load_balancers` (`write`): Apply changes to an existing load balancer, overwriting the supplied properties.
- `get_load_balancers` (`read`): Fetch a single configured load balancer.

### Resource `load_balancers.monitors`:

- `create_load_balancers_monitors` (`write`): Create a configured monitor.
- `update_load_balancers_monitors` (`write`): Modify a configured monitor.
- `list_load_balancers_monitors` (`read`): List configured monitors for an account.
- `delete_load_balancers_monitors` (`write`): Delete a configured monitor.
- `edit_load_balancers_monitors` (`write`): Apply changes to an existing monitor, overwriting the supplied properties.
- `get_load_balancers_monitors` (`read`): List a single configured monitor for an account.

### Resource `load_balancers.monitors.previews`:

- `create_monitors_load_balancers_previews` (`write`): Preview pools using the specified monitor with provided monitor details. The returned preview_id can be used in the preview endpoint to retrieve the results.

### Resource `load_balancers.monitors.references`:

- `get_monitors_load_balancers_references` (`read`): Get the list of resources that reference the provided monitor.

### Resource `load_balancers.pools`:

- `create_load_balancers_pools` (`write`): Create a new pool.
- `update_load_balancers_pools` (`write`): Modify a configured pool.
- `list_load_balancers_pools` (`read`): List configured pools.
- `delete_load_balancers_pools` (`write`): Delete a configured pool.
- `bulk_edit_load_balancers_pools` (`write`): Apply changes to a number of existing pools, overwriting the supplied properties. Pools are ordered by ascending `name`. Returns the list of affected pools. Supports the standard pagination query parameters, either `limit`/`offset` or `per_page`/`page`.
- `edit_load_balancers_pools` (`write`): Apply changes to an existing pool, overwriting the supplied properties.
- `get_load_balancers_pools` (`read`): Fetch a single configured pool.

### Resource `load_balancers.pools.health`:

- `create_pools_load_balancers_health` (`write`): Preview pool health using provided monitor details. The returned preview_id can be used in the preview endpoint to retrieve the results.
- `get_pools_load_balancers_health` (`read`): Fetch the latest pool health status for a single pool.

### Resource `load_balancers.pools.references`:

- `get_pools_load_balancers_references` (`read`): Get the list of resources that reference the provided pool.

### Resource `load_balancers.previews`:

- `get_load_balancers_previews` (`read`): Get the result of a previous preview operation using the provided preview_id.

### Resource `load_balancers.regions`:

- `list_load_balancers_regions` (`read`): List all region mappings.
- `get_load_balancers_regions` (`read`): Get a single region mapping.

### Resource `load_balancers.searches`:

- `list_load_balancers_searches` (`read`): Search for Load Balancing resources.

### Resource `cache`:

- `purge_cache` (`write`): ### Purge All Cached Content
  Removes ALL files from Cloudflare's cache. All tiers can purge everything.

```
{"purge_everything": true}
```

### Purge Cached Content by URL

Granularly removes one or more files from Cloudflare's cache by specifying URLs. All tiers can purge by URL.

To purge files with custom cache keys, include the headers used to compute the cache key as in the example. If you have a device type or geo in your cache key, you will need to include the CF-Device-Type or CF-IPCountry headers. If you have lang in your cache key, you will need to include the Accept-Language header.

**NB:** When including the Origin header, be sure to include the **scheme** and **hostname**. The port number can be omitted if it is the default port (80 for http, 443 for https), but must be included otherwise.

**NB:** For Zones on Free/Pro/Business plan, you may purge up to 30 URLs in one API call. For Zones on Enterprise plan, you may purge up to 500 URLs in one API call.

Single file purge example with files:

```
{"files": ["http://www.example.com/css/styles.css", "http://www.example.com/js/index.js"]}
```

Single file purge example with url and header pairs:

```
{"files": [{url: "http://www.example.com/cat_picture.jpg", headers: { "CF-IPCountry": "US", "CF-Device-Type": "desktop", "Accept-Language": "zh-CN" }}, {url: "http://www.example.com/dog_picture.jpg", headers: { "CF-IPCountry": "EU", "CF-Device-Type": "mobile", "Accept-Language": "en-US" }}]}
```

### Purge Cached Content by Tag, Host or Prefix

Granularly removes one or more files from Cloudflare's cache either by specifying the host, the associated Cache-Tag, or a Prefix. Only Enterprise customers are permitted to purge by Tag, Host or Prefix.

**NB:** Cache-Tag, host, and prefix purging each have a rate limit of 30,000 purge API calls in every 24 hour period. You may purge up to 30 tags, hosts, or prefixes in one API call. This rate limit can be raised for customers who need to purge at higher volume.

Flex purge with tags:

```
{"tags": ["a-cache-tag", "another-cache-tag"]}
```

Flex purge with hosts:

```
{"hosts": ["www.example.com", "images.example.com"]}
```

Flex purge with prefixes:

```
{"prefixes": ["www.example.com/foo", "images.example.com/bar/baz"]}
```

### Resource `cache.cache_reserve`:

- `clear_cache_cache_reserve` (`write`): You can use Cache Reserve Clear to clear your Cache Reserve, but you must first disable Cache Reserve. In most cases, this will be accomplished within 24 hours. You cannot re-enable Cache Reserve while this process is ongoing. Keep in mind that you cannot undo or cancel this operation.
- `edit_cache_cache_reserve` (`write`): Increase cache lifetimes by automatically storing all cacheable files into Cloudflare's persistent object storage buckets. Requires Cache Reserve subscription. Note: using Tiered Cache with Cache Reserve is highly recommended to reduce Reserve operations costs. See the [developer docs](https://developers.cloudflare.com/cache/about/cache-reserve) for more information.
- `get_cache_cache_reserve` (`read`): Increase cache lifetimes by automatically storing all cacheable files into Cloudflare's persistent object storage buckets. Requires Cache Reserve subscription. Note: using Tiered Cache with Cache Reserve is highly recommended to reduce Reserve operations costs. See the [developer docs](https://developers.cloudflare.com/cache/about/cache-reserve) for more information.
- `status_cache_cache_reserve` (`read`): You can use Cache Reserve Clear to clear your Cache Reserve, but you must first disable Cache Reserve. In most cases, this will be accomplished within 24 hours. You cannot re-enable Cache Reserve while this process is ongoing. Keep in mind that you cannot undo or cancel this operation.

### Resource `cache.smart_tiered_cache`:

- `delete_cache_smart_tiered_cache` (`write`): Smart Tiered Cache dynamically selects the single closest upper tier for each of your website’s origins with no configuration required, using our in-house performance and routing data. Cloudflare collects latency data for each request to an origin, and uses the latency data to determine how well any upper-tier data center is connected with an origin. As a result, Cloudflare can select the data center with the lowest latency to be the upper-tier for an origin.
- `edit_cache_smart_tiered_cache` (`write`): Smart Tiered Cache dynamically selects the single closest upper tier for each of your website’s origins with no configuration required, using our in-house performance and routing data. Cloudflare collects latency data for each request to an origin, and uses the latency data to determine how well any upper-tier data center is connected with an origin. As a result, Cloudflare can select the data center with the lowest latency to be the upper-tier for an origin.
- `get_cache_smart_tiered_cache` (`read`): Smart Tiered Cache dynamically selects the single closest upper tier for each of your website’s origins with no configuration required, using our in-house performance and routing data. Cloudflare collects latency data for each request to an origin, and uses the latency data to determine how well any upper-tier data center is connected with an origin. As a result, Cloudflare can select the data center with the lowest latency to be the upper-tier for an origin.

### Resource `cache.variants`:

- `delete_cache_variants` (`write`): Variant support enables caching variants of images with certain file extensions in addition to the original. This only applies when the origin server sends the 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but does not serve the variant requested, the response will not be cached. This will be indicated with BYPASS cache status in the response headers.
- `edit_cache_variants` (`write`): Variant support enables caching variants of images with certain file extensions in addition to the original. This only applies when the origin server sends the 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but does not serve the variant requested, the response will not be cached. This will be indicated with BYPASS cache status in the response headers.
- `get_cache_variants` (`read`): Variant support enables caching variants of images with certain file extensions in addition to the original. This only applies when the origin server sends the 'Vary: Accept' response header. If the origin server sends 'Vary: Accept' but does not serve the variant requested, the response will not be cached. This will be indicated with BYPASS cache status in the response headers.

### Resource `cache.regional_tiered_cache`:

- `edit_cache_regional_tiered_cache` (`write`): Instructs Cloudflare to check a regional hub data center on the way to your upper tier. This can help improve performance for smart and custom tiered cache topologies.
- `get_cache_regional_tiered_cache` (`read`): Instructs Cloudflare to check a regional hub data center on the way to your upper tier. This can help improve performance for smart and custom tiered cache topologies.

### Resource `ssl.analyze`:

- `create_ssl_analyze` (`write`): Returns the set of hostnames, the signature algorithm, and the expiration date of the certificate.

### Resource `ssl.certificate_packs`:

- `create_ssl_certificate_packs` (`write`): For a given zone, order an advanced certificate pack.
- `list_ssl_certificate_packs` (`read`): For a given zone, list all active certificate packs.
- `delete_ssl_certificate_packs` (`write`): For a given zone, delete an advanced certificate pack.
- `edit_ssl_certificate_packs` (`write`): For a given zone, restart validation or add cloudflare branding for an advanced certificate pack. The former is only a validation operation for a Certificate Pack in a validation_timed_out status.
- `get_ssl_certificate_packs` (`read`): For a given zone, get a certificate pack.

### Resource `ssl.certificate_packs.quota`:

- `get_certificate_packs_ssl_quota` (`read`): For a given zone, list certificate pack quotas.

### Resource `ssl.recommendations`:

- `get_ssl_recommendations` (`read`): Retrieve the SSL/TLS Recommender's recommendation for a zone.

### Resource `ssl.universal.settings`:

- `edit_universal_ssl_settings` (`write`): Patch Universal SSL Settings for a Zone.
- `get_universal_ssl_settings` (`read`): Get Universal SSL Settings for a Zone.

### Resource `ssl.verification`:

- `edit_ssl_verification` (`write`): Edit SSL validation method for a certificate pack. A PATCH request will request an immediate validation check on any certificate, and return the updated status. If a validation method is provided, the validation will be immediately attempted using that method.
- `get_ssl_verification` (`read`): Get SSL Verification Info for a Zone.

### Resource `acm.total_tls`:

- `create_acm_total_tls` (`write`): Set Total TLS Settings or disable the feature for a Zone.
- `get_acm_total_tls` (`read`): Get Total TLS Settings for a Zone.

### Resource `argo.smart_routing`:

- `edit_argo_smart_routing` (`write`): Updates enablement of Argo Smart Routing.
- `get_argo_smart_routing` (`read`): Get Argo Smart Routing setting

### Resource `argo.tiered_caching`:

- `edit_argo_tiered_caching` (`write`): Tiered Cache works by dividing Cloudflare's data centers into a hierarchy of lower-tiers and upper-tiers. If content is not cached in lower-tier data centers (generally the ones closest to a visitor), the lower-tier must ask an upper-tier to see if it has the content. If the upper-tier does not have the content, only the upper-tier can ask the origin for content. This practice improves bandwidth efficiency by limiting the number of data centers that can ask the origin for content, which reduces origin load and makes websites more cost-effective to operate. Additionally, Tiered Cache concentrates connections to origin servers so they come from a small number of data centers rather than the full set of network locations. This results in fewer open connections using server resources.
- `get_argo_tiered_caching` (`read`): Tiered Cache works by dividing Cloudflare's data centers into a hierarchy of lower-tiers and upper-tiers. If content is not cached in lower-tier data centers (generally the ones closest to a visitor), the lower-tier must ask an upper-tier to see if it has the content. If the upper-tier does not have the content, only the upper-tier can ask the origin for content. This practice improves bandwidth efficiency by limiting the number of data centers that can ask the origin for content, which reduces origin load and makes websites more cost-effective to operate. Additionally, Tiered Cache concentrates connections to origin servers so they come from a small number of data centers rather than the full set of network locations. This results in fewer open connections using server resources.

### Resource `certificate_authorities.hostname_associations`:

- `update_certificate_authorities_hostname_associations` (`write`): Replace Hostname Associations
- `get_certificate_authorities_hostname_associations` (`read`): List Hostname Associations

### Resource `client_certificates`:

- `create_client_certificates` (`write`): Create a new API Shield mTLS Client Certificate
- `list_client_certificates` (`read`): List all of your Zone's API Shield mTLS Client Certificates by Status and/or using Pagination
- `delete_client_certificates` (`write`): Set a API Shield mTLS Client Certificate to pending_revocation status for processing to revoked status.
- `edit_client_certificates` (`write`): If a API Shield mTLS Client Certificate is in a pending_revocation state, you may reactivate it with this endpoint.
- `get_client_certificates` (`read`): Get Details for a single mTLS API Shield Client Certificate

### Resource `custom_certificates`:

- `create_custom_certificates` (`write`): Upload a new SSL certificate for a zone.
- `list_custom_certificates` (`read`): List, search, and filter all of your custom SSL certificates. The higher priority will break ties across overlapping 'legacy_custom' certificates, but 'legacy_custom' certificates will always supercede 'sni_custom' certificates.
- `delete_custom_certificates` (`write`): Remove a SSL certificate from a zone.
- `edit_custom_certificates` (`write`): Upload a new private key and/or PEM/CRT for the SSL certificate. Note: PATCHing a configuration for sni_custom certificates will result in a new resource id being returned, and the previous one being deleted.
- `get_custom_certificates` (`read`): SSL Configuration Details

### Resource `custom_certificates.prioritize`:

- `update_custom_certificates_prioritize` (`write`): If a zone has multiple SSL certificates, you can set the order in which they should be used during a request. The higher priority will break ties across overlapping 'legacy_custom' certificates.

### Resource `custom_hostnames`:

- `create_custom_hostnames` (`write`): Add a new custom hostname and request that an SSL certificate be issued for it. One of three validation methods—http, txt, email—should be used, with 'http' recommended if the CNAME is already in place (or will be soon). Specifying 'email' will send an email to the WHOIS contacts on file for the base domain plus hostmaster, postmaster, webmaster, admin, administrator. If http is used and the domain is not already pointing to the Managed CNAME host, the PATCH method must be used once it is (to complete validation). Enable bundling of certificates using the custom_cert_bundle field. The bundling process requires the following condition One certificate in the bundle must use an RSA, and the other must use an ECDSA.
- `list_custom_hostnames` (`read`): List, search, sort, and filter all of your custom hostnames.
- `delete_custom_hostnames` (`write`): Delete Custom Hostname (and any issued SSL certificates)
- `edit_custom_hostnames` (`write`): Modify SSL configuration for a custom hostname. When sent with SSL config that matches existing config, used to indicate that hostname should pass domain control validation (DCV). Can also be used to change validation type, e.g., from 'http' to 'email'. Bundle an existing certificate with another certificate by using the "custom_cert_bundle" field. The bundling process supports combining certificates as long as the following condition is met. One certificate must use the RSA algorithm, and the other must use the ECDSA algorithm.
- `get_custom_hostnames` (`read`): Custom Hostname Details

### Resource `custom_hostnames.fallback_origin`:

- `update_custom_hostnames_fallback_origin` (`write`): Update Fallback Origin for Custom Hostnames
- `delete_custom_hostnames_fallback_origin` (`write`): Delete Fallback Origin for Custom Hostnames
- `get_custom_hostnames_fallback_origin` (`read`): Get Fallback Origin for Custom Hostnames

### Resource `custom_hostnames.certificate_pack.certificates`:

- `update_certificate_pack_custom_hostnames_certificates` (`write`): Replace a single custom certificate within a certificate pack that contains two bundled certificates. The replacement must adhere to the following constraints. You can only replace an RSA certificate with another RSA certificate or an ECDSA certificate with another ECDSA certificate.
- `delete_certificate_pack_custom_hostnames_certificates` (`write`): Delete a single custom certificate from a certificate pack that contains two bundled certificates. Deletion is subject to the following constraints. You cannot delete a certificate if it is the only remaining certificate in the pack. At least one certificate must remain in the pack.

### Resource `custom_nameservers`:

- `create_custom_nameservers` (`write`): Add Account Custom Nameserver
- `delete_custom_nameservers` (`write`): Delete Account Custom Nameserver
- `get_custom_nameservers` (`read`): List an account's custom nameservers.

### Resource `dns_firewall`:

- `create_dns_firewall` (`write`): Create a DNS Firewall cluster
- `list_dns_firewall` (`read`): List DNS Firewall clusters for an account
- `delete_dns_firewall` (`write`): Delete a DNS Firewall cluster
- `edit_dns_firewall` (`write`): Modify the configuration of a DNS Firewall cluster
- `get_dns_firewall` (`read`): Show a single DNS Firewall cluster for an account

### Resource `dns_firewall.analytics.reports`:

- `get_analytics_dns_firewall_reports` (`read`): Retrieves a list of summarised aggregate metrics over a given time period.

See [Analytics API properties](https://developers.cloudflare.com/dns/reference/analytics-api-properties/) for detailed information about the available query parameters.

### Resource `dns_firewall.analytics.reports.bytimes`:

- `get_reports_analytics_dns_firewall_bytimes` (`read`): Retrieves a list of aggregate metrics grouped by time interval.

See [Analytics API properties](https://developers.cloudflare.com/dns/reference/analytics-api-properties/) for detailed information about the available query parameters.

### Resource `dns_firewall.reverse_dns`:

- `edit_dns_firewall_reverse_dns` (`write`): Update reverse DNS configuration (PTR records) for a DNS Firewall cluster
- `get_dns_firewall_reverse_dns` (`read`): Show reverse DNS configuration (PTR records) for a DNS Firewall cluster

### Resource `dns.dnssec`:

- `delete_dns_dnssec` (`write`): Delete DNSSEC.
- `edit_dns_dnssec` (`write`): Enable or disable DNSSEC.
- `get_dns_dnssec` (`read`): Details about DNSSEC status and configuration.

### Resource `dns.records`:

- `create_dns_records` (`write`): Create a new DNS record for a zone.

Notes:

- A/AAAA records cannot exist on the same name as CNAME records.
- NS records cannot exist on the same name as any other record type.
- Domain names are always represented in Punycode, even if Unicode
  characters were used when creating the record.

* `update_dns_records` (`write`): Overwrite an existing DNS record.

Notes:

- A/AAAA records cannot exist on the same name as CNAME records.
- NS records cannot exist on the same name as any other record type.
- Domain names are always represented in Punycode, even if Unicode
  characters were used when creating the record.

* `list_dns_records` (`read`): List, search, sort, and filter a zones' DNS records.
* `delete_dns_records` (`write`): Delete DNS Record
* `batch_dns_records` (`write`): Send a Batch of DNS Record API calls to be executed together.

Notes:

- Although Cloudflare will execute the batched operations in a single database transaction, Cloudflare's distributed KV store must treat each record change as a single key-value pair. This means that the propagation of changes is not atomic. See [the documentation](https://developers.cloudflare.com/dns/manage-dns-records/how-to/batch-record-changes/ 'Batch DNS records') for more information.
- The operations you specify within the /batch request body are always executed in the following order:

  - Deletes
  - Patches
  - Puts
  - Posts

* `edit_dns_records` (`write`): Update an existing DNS record.

Notes:

- A/AAAA records cannot exist on the same name as CNAME records.
- NS records cannot exist on the same name as any other record type.
- Domain names are always represented in Punycode, even if Unicode
  characters were used when creating the record.

* `export_dns_records` (`read`): You can export your [BIND config](https://en.wikipedia.org/wiki/Zone_file 'Zone file') through this endpoint.

See [the documentation](https://developers.cloudflare.com/dns/manage-dns-records/how-to/import-and-export/ 'Import and export records') for more information.

- `get_dns_records` (`read`): DNS Record Details
- `import_dns_records` (`write`): You can upload your [BIND config](https://en.wikipedia.org/wiki/Zone_file 'Zone file') through this endpoint. It assumes that cURL is called from a location with bind_config.txt (valid BIND config) present.

See [the documentation](https://developers.cloudflare.com/dns/manage-dns-records/how-to/import-and-export/ 'Import and export records') for more information.

- `scan_dns_records` (`write`): Scan for common DNS records on your domain and automatically add them to your zone. Useful if you haven't updated your nameservers yet.

### Resource `dns.settings.zone`:

- `edit_settings_dns_zone` (`write`): Update DNS settings for a zone
- `get_settings_dns_zone` (`read`): Show DNS settings for a zone

### Resource `dns.settings.account`:

- `edit_settings_dns_account` (`write`): Update DNS settings for an account
- `get_settings_dns_account` (`read`): Show DNS settings for an account

### Resource `dns.settings.account.views`:

- `create_account_settings_dns_views` (`write`): Create Internal DNS View for an account
- `list_account_settings_dns_views` (`read`): List DNS Internal Views for an Account
- `delete_account_settings_dns_views` (`write`): Delete an existing Internal DNS View
- `edit_account_settings_dns_views` (`write`): Update an existing Internal DNS View
- `get_account_settings_dns_views` (`read`): Get DNS Internal View

### Resource `dns.analytics.reports`:

- `get_analytics_dns_reports` (`read`): Retrieves a list of summarised aggregate metrics over a given time period.

See [Analytics API properties](https://developers.cloudflare.com/dns/reference/analytics-api-properties/) for detailed information about the available query parameters.

### Resource `dns.analytics.reports.bytimes`:

- `get_reports_analytics_dns_bytimes` (`read`): Retrieves a list of aggregate metrics grouped by time interval.

See [Analytics API properties](https://developers.cloudflare.com/dns/reference/analytics-api-properties/) for detailed information about the available query parameters.

### Resource `dns.zone_transfers.force_axfr`:

- `create_zone_transfers_dns_force_axfr` (`write`): Sends AXFR zone transfer request to primary nameserver(s).

### Resource `dns.zone_transfers.incoming`:

- `create_zone_transfers_dns_incoming` (`write`): Create secondary zone configuration for incoming zone transfers.
- `update_zone_transfers_dns_incoming` (`write`): Update secondary zone configuration for incoming zone transfers.
- `delete_zone_transfers_dns_incoming` (`write`): Delete secondary zone configuration for incoming zone transfers.
- `get_zone_transfers_dns_incoming` (`read`): Get secondary zone configuration for incoming zone transfers.

### Resource `dns.zone_transfers.outgoing`:

- `create_zone_transfers_dns_outgoing` (`write`): Create primary zone configuration for outgoing zone transfers.
- `update_zone_transfers_dns_outgoing` (`write`): Update primary zone configuration for outgoing zone transfers.
- `delete_zone_transfers_dns_outgoing` (`write`): Delete primary zone configuration for outgoing zone transfers.
- `disable_zone_transfers_dns_outgoing` (`write`): Disable outgoing zone transfers for primary zone and clears IXFR backlog of primary zone.
- `enable_zone_transfers_dns_outgoing` (`write`): Enable outgoing zone transfers for primary zone.
- `force_notify_zone_transfers_dns_outgoing` (`write`): Notifies the secondary nameserver(s) and clears IXFR backlog of primary zone.
- `get_zone_transfers_dns_outgoing` (`read`): Get primary zone configuration for outgoing zone transfers.

### Resource `dns.zone_transfers.outgoing.status`:

- `get_outgoing_zone_transfers_dns_status` (`read`): Get primary zone transfer status.

### Resource `dns.zone_transfers.acls`:

- `create_zone_transfers_dns_acls` (`write`): Create ACL.
- `update_zone_transfers_dns_acls` (`write`): Modify ACL.
- `list_zone_transfers_dns_acls` (`read`): List ACLs.
- `delete_zone_transfers_dns_acls` (`write`): Delete ACL.
- `get_zone_transfers_dns_acls` (`read`): Get ACL.

### Resource `dns.zone_transfers.peers`:

- `create_zone_transfers_dns_peers` (`write`): Create Peer.
- `update_zone_transfers_dns_peers` (`write`): Modify Peer.
- `list_zone_transfers_dns_peers` (`read`): List Peers.
- `delete_zone_transfers_dns_peers` (`write`): Delete Peer.
- `get_zone_transfers_dns_peers` (`read`): Get Peer.

### Resource `dns.zone_transfers.tsigs`:

- `create_zone_transfers_dns_tsigs` (`write`): Create TSIG.
- `update_zone_transfers_dns_tsigs` (`write`): Modify TSIG.
- `list_zone_transfers_dns_tsigs` (`read`): List TSIGs.
- `delete_zone_transfers_dns_tsigs` (`write`): Delete TSIG.
- `get_zone_transfers_dns_tsigs` (`read`): Get TSIG.

### Resource `email_security.investigate`:

- `list_email_security_investigate` (`read`): Returns information for each email that matches the search parameter(s).
- `get_email_security_investigate` (`read`): Get message details

### Resource `email_security.investigate.detections`:

- `get_investigate_email_security_detections` (`read`): Returns detection details such as threat categories and sender information for non-benign messages.

### Resource `email_security.investigate.preview`:

- `create_investigate_email_security_preview` (`write`): Preview for non-detection messages
- `get_investigate_email_security_preview` (`read`): Returns a preview of the message body as a base64 encoded PNG image for non-benign messages.

### Resource `email_security.investigate.raw`:

- `get_investigate_email_security_raw` (`read`): Returns the raw eml of any non-benign message.

### Resource `email_security.investigate.trace`:

- `get_investigate_email_security_trace` (`read`): Get email trace

### Resource `email_security.investigate.move`:

- `create_investigate_email_security_move` (`write`): Move a message
- `bulk_investigate_email_security_move` (`write`): Move multiple messages

### Resource `email_security.investigate.reclassify`:

- `create_investigate_email_security_reclassify` (`write`): Change email classfication

### Resource `email_security.investigate.release`:

- `bulk_investigate_email_security_release` (`write`): Release messages from quarantine

### Resource `email_security.settings.allow_policies`:

- `create_settings_email_security_allow_policies` (`write`): Create an email allow policy
- `list_settings_email_security_allow_policies` (`read`): Lists, searches, and sorts an account’s email allow policies.
- `delete_settings_email_security_allow_policies` (`write`): Delete an email allow policy
- `edit_settings_email_security_allow_policies` (`write`): Update an email allow policy
- `get_settings_email_security_allow_policies` (`read`): Get an email allow policy

### Resource `email_security.settings.block_senders`:

- `create_settings_email_security_block_senders` (`write`): Create a blocked email sender
- `list_settings_email_security_block_senders` (`read`): List blocked email senders
- `delete_settings_email_security_block_senders` (`write`): Delete a blocked email sender
- `edit_settings_email_security_block_senders` (`write`): Update a blocked email sender
- `get_settings_email_security_block_senders` (`read`): Get a blocked email sender

### Resource `email_security.settings.domains`:

- `list_settings_email_security_domains` (`read`): Lists, searches, and sorts an account’s email domains.
- `delete_settings_email_security_domains` (`write`): Unprotect an email domain
- `bulk_delete_settings_email_security_domains` (`write`): Unprotect multiple email domains
- `edit_settings_email_security_domains` (`write`): Update an email domain
- `get_settings_email_security_domains` (`read`): Get an email domain

### Resource `email_security.settings.impersonation_registry`:

- `create_settings_email_security_impersonation_registry` (`write`): Create an entry in impersonation registry
- `list_settings_email_security_impersonation_registry` (`read`): Lists, searches, and sorts entries in the impersonation registry.
- `delete_settings_email_security_impersonation_registry` (`write`): Delete an entry from impersonation registry
- `edit_settings_email_security_impersonation_registry` (`write`): Update an entry in impersonation registry
- `get_settings_email_security_impersonation_registry` (`read`): Get an entry in impersonation registry

### Resource `email_security.settings.trusted_domains`:

- `create_settings_email_security_trusted_domains` (`write`): Create a trusted email domain
- `list_settings_email_security_trusted_domains` (`read`): Lists, searches, and sorts an account’s trusted email domains.
- `delete_settings_email_security_trusted_domains` (`write`): Delete a trusted email domain
- `edit_settings_email_security_trusted_domains` (`write`): Update a trusted email domain
- `get_settings_email_security_trusted_domains` (`read`): Get a trusted email domain

### Resource `email_security.submissions`:

- `list_email_security_submissions` (`read`): This endpoint returns information for submissions to made to reclassify emails.

### Resource `email_routing`:

- `disable_email_routing` (`write`): Disable your Email Routing zone. Also removes additional MX records previously required for Email Routing to work.
- `enable_email_routing` (`write`): Enable you Email Routing zone. Add and lock the necessary MX and SPF records.
- `get_email_routing` (`read`): Get information about the settings for your Email Routing zone.

### Resource `email_routing.dns`:

- `create_email_routing_dns` (`write`): Enable you Email Routing zone. Add and lock the necessary MX and SPF records.
- `delete_email_routing_dns` (`write`): Disable your Email Routing zone. Also removes additional MX records previously required for Email Routing to work.
- `edit_email_routing_dns` (`write`): Unlock MX Records previously locked by Email Routing.
- `get_email_routing_dns` (`read`): Show the DNS records needed to configure your Email Routing zone.

### Resource `email_routing.rules`:

- `create_email_routing_rules` (`write`): Rules consist of a set of criteria for matching emails (such as an email being sent to a specific custom email address) plus a set of actions to take on the email (like forwarding it to a specific destination address).
- `update_email_routing_rules` (`write`): Update actions and matches, or enable/disable specific routing rules.
- `list_email_routing_rules` (`read`): Lists existing routing rules.
- `delete_email_routing_rules` (`write`): Delete a specific routing rule.
- `get_email_routing_rules` (`read`): Get information for a specific routing rule already created.

### Resource `email_routing.rules.catch_alls`:

- `update_rules_email_routing_catch_alls` (`write`): Enable or disable catch-all routing rule, or change action to forward to specific destination address.
- `get_rules_email_routing_catch_alls` (`read`): Get information on the default catch-all routing rule.

### Resource `email_routing.addresses`:

- `create_email_routing_addresses` (`write`): Create a destination address to forward your emails to. Destination addresses need to be verified before they can be used.
- `list_email_routing_addresses` (`read`): Lists existing destination addresses.
- `delete_email_routing_addresses` (`write`): Deletes a specific destination address.
- `get_email_routing_addresses` (`read`): Gets information for a specific destination email already created.

### Resource `filters`:

- `create_filters` (`write`): Creates one or more filters.
- `update_filters` (`write`): Updates an existing filter.
- `list_filters` (`read`): Fetches filters in a zone. You can filter the results using several optional parameters.
- `delete_filters` (`write`): Deletes an existing filter.
- `bulk_delete_filters` (`write`): Deletes one or more existing filters.
- `bulk_update_filters` (`write`): Updates one or more existing filters.
- `get_filters` (`read`): Fetches the details of a filter.

### Resource `firewall.lockdowns`:

- `create_firewall_lockdowns` (`write`): Creates a new Zone Lockdown rule.
- `update_firewall_lockdowns` (`write`): Updates an existing Zone Lockdown rule.
- `list_firewall_lockdowns` (`read`): Fetches Zone Lockdown rules. You can filter the results using several optional parameters.
- `delete_firewall_lockdowns` (`write`): Deletes an existing Zone Lockdown rule.
- `get_firewall_lockdowns` (`read`): Fetches the details of a Zone Lockdown rule.

### Resource `firewall.rules`:

- `create_firewall_rules` (`write`): Create one or more firewall rules.
- `update_firewall_rules` (`write`): Updates an existing firewall rule.
- `list_firewall_rules` (`read`): Fetches firewall rules in a zone. You can filter the results using several optional parameters.
- `delete_firewall_rules` (`write`): Deletes an existing firewall rule.
- `bulk_delete_firewall_rules` (`write`): Deletes existing firewall rules.
- `bulk_edit_firewall_rules` (`write`): Updates the priority of existing firewall rules.
- `bulk_update_firewall_rules` (`write`): Updates one or more existing firewall rules.
- `edit_firewall_rules` (`write`): Updates the priority of an existing firewall rule.
- `get_firewall_rules` (`read`): Fetches the details of a firewall rule.

### Resource `firewall.access_rules`:

- `create_firewall_access_rules` (`write`): Creates a new IP Access rule for an account or zone. The rule will apply to all zones in the account or zone.

Note: To create an IP Access rule that applies to a single zone, refer to the [IP Access rules for a zone](#ip-access-rules-for-a-zone) endpoints.

- `list_firewall_access_rules` (`read`): Fetches IP Access rules of an account or zone. These rules apply to all the zones in the account or zone. You can filter the results using several optional parameters.
- `delete_firewall_access_rules` (`write`): Deletes an existing IP Access rule defined.

Note: This operation will affect all zones in the account or zone.

- `edit_firewall_access_rules` (`write`): Updates an IP Access rule defined.

Note: This operation will affect all zones in the account or zone.

- `get_firewall_access_rules` (`read`): Fetches the details of an IP Access rule defined.

### Resource `firewall.ua_rules`:

- `create_firewall_ua_rules` (`write`): Creates a new User Agent Blocking rule in a zone.
- `update_firewall_ua_rules` (`write`): Updates an existing User Agent Blocking rule.
- `list_firewall_ua_rules` (`read`): Fetches User Agent Blocking rules in a zone. You can filter the results using several optional parameters.
- `delete_firewall_ua_rules` (`write`): Deletes an existing User Agent Blocking rule.
- `get_firewall_ua_rules` (`read`): Fetches the details of a User Agent Blocking rule.

### Resource `firewall.waf.overrides`:

- `create_waf_firewall_overrides` (`write`): Creates a URI-based WAF override for a zone.

**Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).

- `update_waf_firewall_overrides` (`write`): Updates an existing URI-based WAF override.

**Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).

- `list_waf_firewall_overrides` (`read`): Fetches the URI-based WAF overrides in a zone.

**Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).

- `delete_waf_firewall_overrides` (`write`): Deletes an existing URI-based WAF override.

**Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).

- `get_waf_firewall_overrides` (`read`): Fetches the details of a URI-based WAF override.

**Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).

### Resource `firewall.waf.packages`:

- `list_waf_firewall_packages` (`read`): Fetches WAF packages for a zone.

**Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).

- `get_waf_firewall_packages` (`read`): Fetches the details of a WAF package.

**Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).

### Resource `firewall.waf.packages.groups`:

- `list_packages_waf_firewall_groups` (`read`): Fetches the WAF rule groups in a WAF package.

**Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).

- `edit_packages_waf_firewall_groups` (`write`): Updates a WAF rule group. You can update the state (`mode` parameter) of a rule group.

**Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).

- `get_packages_waf_firewall_groups` (`read`): Fetches the details of a WAF rule group.

**Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).

### Resource `firewall.waf.packages.rules`:

- `list_packages_waf_firewall_rules` (`read`): Fetches WAF rules in a WAF package.

**Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).

- `edit_packages_waf_firewall_rules` (`write`): Updates a WAF rule. You can only update the mode/action of the rule.

**Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).

- `get_packages_waf_firewall_rules` (`read`): Fetches the details of a WAF rule in a WAF package.

**Note:** Applies only to the [previous version of WAF managed rules](https://developers.cloudflare.com/support/firewall/managed-rules-web-application-firewall-waf/understanding-waf-managed-rules-web-application-firewall/).

### Resource `healthchecks`:

- `create_healthchecks` (`write`): Create a new health check.
- `update_healthchecks` (`write`): Update a configured health check.
- `list_healthchecks` (`read`): List configured health checks.
- `delete_healthchecks` (`write`): Delete a health check.
- `edit_healthchecks` (`write`): Patch a configured health check.
- `get_healthchecks` (`read`): Fetch a single configured health check.

### Resource `healthchecks.previews`:

- `create_healthchecks_previews` (`write`): Create a new preview health check.
- `delete_healthchecks_previews` (`write`): Delete a health check.
- `get_healthchecks_previews` (`read`): Fetch a single configured health check preview.

### Resource `keyless_certificates`:

- `create_keyless_certificates` (`write`): Create Keyless SSL Configuration
- `list_keyless_certificates` (`read`): List all Keyless SSL configurations for a given zone.
- `delete_keyless_certificates` (`write`): Delete Keyless SSL Configuration
- `edit_keyless_certificates` (`write`): This will update attributes of a Keyless SSL. Consists of one or more of the following: host,name,port.
- `get_keyless_certificates` (`read`): Get details for one Keyless SSL configuration.

### Resource `logpush.datasets.fields`:

- `get_datasets_logpush_fields` (`read`): Lists all fields available for a dataset. The response result is an object with key-value pairs, where keys are field names, and values are descriptions.

### Resource `logpush.datasets.jobs`:

- `get_datasets_logpush_jobs` (`read`): Lists Logpush jobs for an account or zone for a dataset.

### Resource `logpush.edge`:

- `create_logpush_edge` (`write`): Creates a new Instant Logs job for a zone.
- `get_logpush_edge` (`read`): Lists Instant Logs jobs for a zone.

### Resource `logpush.jobs`:

- `create_logpush_jobs` (`write`): Creates a new Logpush job for an account or zone.
- `update_logpush_jobs` (`write`): Updates a Logpush job.
- `list_logpush_jobs` (`read`): Lists Logpush jobs for an account or zone.
- `delete_logpush_jobs` (`write`): Deletes a Logpush job.
- `get_logpush_jobs` (`read`): Gets the details of a Logpush job.

### Resource `logpush.ownership`:

- `create_logpush_ownership` (`write`): Gets a new ownership challenge sent to your destination.
- `validate_logpush_ownership` (`write`): Validates ownership challenge of the destination.

### Resource `logpush.validate`:

- `destination_logpush_validate` (`write`): Validates destination.
- `destination_exists_logpush_validate` (`write`): Checks if there is an existing job with a destination.
- `origin_logpush_validate` (`write`): Validates logpull origin with logpull_options.

### Resource `logs.control.retention`:

- `create_control_logs_retention` (`write`): Updates log retention flag for Logpull API.
- `get_control_logs_retention` (`read`): Gets log retention flag for Logpull API.

### Resource `logs.control.cmb.config`:

- `create_cmb_control_logs_config` (`write`): Updates CMB config.
- `delete_cmb_control_logs_config` (`write`): Deletes CMB config.
- `get_cmb_control_logs_config` (`read`): Gets CMB config.

### Resource `logs.rayid`:

- `get_logs_rayid` (`read`): The `/rayids` api route allows lookups by specific rayid. The rayids route will return zero, one, or more records (ray ids are not unique).

### Resource `logs.received`:

- `get_logs_received` (`read`): The `/received` api route allows customers to retrieve their edge HTTP logs. The basic access pattern is "give me all the logs for zone Z for minute M", where the minute M refers to the time records were received at Cloudflare's central data center. `start` is inclusive, and `end` is exclusive. Because of that, to get all data, at minutely cadence, starting at 10AM, the proper values are: `start=2018-05-20T10:00:00Z&end=2018-05-20T10:01:00Z`, then `start=2018-05-20T10:01:00Z&end=2018-05-20T10:02:00Z` and so on; the overlap will be handled properly.

### Resource `logs.received.fields`:

- `get_received_logs_fields` (`read`): Lists all fields available. The response is json object with key-value pairs, where keys are field names, and values are descriptions.

### Resource `origin_tls_client_auth`:

- `create_origin_tls_client_auth` (`write`): Upload your own certificate you want Cloudflare to use for edge-to-origin communication to override the shared certificate. Please note that it is important to keep only one certificate active. Also, make sure to enable zone-level authenticated origin pulls by making a PUT call to settings endpoint to see the uploaded certificate in use.
- `list_origin_tls_client_auth` (`read`): List Certificates
- `delete_origin_tls_client_auth` (`write`): Delete Certificate
- `get_origin_tls_client_auth` (`read`): Get Certificate Details

### Resource `origin_tls_client_auth.hostnames`:

- `update_origin_tls_client_auth_hostnames` (`write`): Associate a hostname to a certificate and enable, disable or invalidate the association. If disabled, client certificate will not be sent to the hostname even if activated at the zone level. 100 maximum associations on a single certificate are allowed. Note: Use a null value for parameter _enabled_ to invalidate the association.
- `get_origin_tls_client_auth_hostnames` (`read`): Get the Hostname Status for Client Authentication

### Resource `origin_tls_client_auth.hostnames.certificates`:

- `create_hostnames_origin_tls_client_auth_certificates` (`write`): Upload a certificate to be used for client authentication on a hostname. 10 hostname certificates per zone are allowed.
- `list_hostnames_origin_tls_client_auth_certificates` (`read`): List Certificates
- `delete_hostnames_origin_tls_client_auth_certificates` (`write`): Delete Hostname Client Certificate
- `get_hostnames_origin_tls_client_auth_certificates` (`read`): Get the certificate by ID to be used for client authentication on a hostname.

### Resource `origin_tls_client_auth.settings`:

- `update_origin_tls_client_auth_settings` (`write`): Enable or disable zone-level authenticated origin pulls. 'enabled' should be set true either before/after the certificate is uploaded to see the certificate in use.
- `get_origin_tls_client_auth_settings` (`read`): Get whether zone-level authenticated origin pulls is enabled or not. It is false by default.

### Resource `page_rules`:

- `create_page_rules` (`write`): Creates a new Page Rule.
- `update_page_rules` (`write`): Replaces the configuration of an existing Page Rule. The configuration of the updated Page Rule will exactly match the data passed in the API request.
- `list_page_rules` (`read`): Fetches Page Rules in a zone.
- `delete_page_rules` (`write`): Deletes an existing Page Rule.
- `edit_page_rules` (`write`): Updates one or more fields of an existing Page Rule.
- `get_page_rules` (`read`): Fetches the details of a Page Rule.

### Resource `rate_limits`:

- `create_rate_limits` (`write`): Creates a new rate limit for a zone. Refer to the object definition for a list of required attributes.
- `list_rate_limits` (`read`): Fetches the rate limits for a zone.
- `delete_rate_limits` (`write`): Deletes an existing rate limit.
- `edit_rate_limits` (`write`): Updates an existing rate limit.
- `get_rate_limits` (`read`): Fetches the details of a rate limit.

### Resource `waiting_rooms`:

- `create_waiting_rooms` (`write`): Creates a new waiting room.
- `update_waiting_rooms` (`write`): Updates a configured waiting room.
- `list_waiting_rooms` (`read`): Lists waiting rooms for account or zone.
- `delete_waiting_rooms` (`write`): Deletes a waiting room.
- `edit_waiting_rooms` (`write`): Patches a configured waiting room.
- `get_waiting_rooms` (`read`): Fetches a single configured waiting room.

### Resource `waiting_rooms.page`:

- `preview_waiting_rooms_page` (`write`): Creates a waiting room page preview. Upload a custom waiting room page for preview. You will receive a preview URL in the form `http://waitingrooms.dev/preview/<uuid>`. You can use the following query parameters to change the state of the preview:

1. `force_queue`: Boolean indicating if all users will be queued in the waiting room and no one will be let into the origin website (also known as queueAll).
2. `queue_is_full`: Boolean indicating if the waiting room's queue is currently full and not accepting new users at the moment.
3. `queueing_method`: The queueing method currently used by the waiting room.
   - **fifo** indicates a FIFO queue.
   - **random** indicates a Random queue.
   - **passthrough** indicates a Passthrough queue. Keep in mind that the waiting room page will only be displayed if `force_queue=true` or `event=prequeueing` — for other cases the request will pass through to the origin. For our preview, this will be a fake origin website returning "Welcome".
   - **reject** indicates a Reject queue.
4. `event`: Used to preview a waiting room event.
   - **none** indicates no event is occurring.
   - **prequeueing** indicates that an event is prequeueing (between `prequeue_start_time` and `event_start_time`).
   - **started** indicates that an event has started (between `event_start_time` and `event_end_time`).
5. `shuffle_at_event_start`: Boolean indicating if the event will shuffle users in the prequeue when it starts. This can only be set to **true** if an event is active (`event` is not **none**).

For example, you can make a request to `http://waitingrooms.dev/preview/<uuid>?force_queue=false&queue_is_full=false&queueing_method=random&event=started&shuffle_at_event_start=true` 6. `waitTime`: Non-zero, positive integer indicating the estimated wait time in minutes. The default value is 10 minutes.

For example, you can make a request to `http://waitingrooms.dev/preview/<uuid>?waitTime=50` to configure the estimated wait time as 50 minutes.

### Resource `waiting_rooms.events`:

- `create_waiting_rooms_events` (`write`): Only available for the Waiting Room Advanced subscription. Creates an event for a waiting room. An event takes place during a specified period of time, temporarily changing the behavior of a waiting room. While the event is active, some of the properties in the event's configuration may either override or inherit from the waiting room's configuration. Note that events cannot overlap with each other, so only one event can be active at a time.
- `update_waiting_rooms_events` (`write`): Updates a configured event for a waiting room.
- `list_waiting_rooms_events` (`read`): Lists events for a waiting room.
- `delete_waiting_rooms_events` (`write`): Deletes an event for a waiting room.
- `edit_waiting_rooms_events` (`write`): Patches a configured event for a waiting room.
- `get_waiting_rooms_events` (`read`): Fetches a single configured event for a waiting room.

### Resource `waiting_rooms.events.details`:

- `get_events_waiting_rooms_details` (`read`): Previews an event's configuration as if it was active. Inherited fields from the waiting room will be displayed with their current values.

### Resource `waiting_rooms.rules`:

- `create_waiting_rooms_rules` (`write`): Only available for the Waiting Room Advanced subscription. Creates a rule for a waiting room.
- `update_waiting_rooms_rules` (`write`): Only available for the Waiting Room Advanced subscription. Replaces all rules for a waiting room.
- `delete_waiting_rooms_rules` (`write`): Deletes a rule for a waiting room.
- `edit_waiting_rooms_rules` (`write`): Patches a rule for a waiting room.
- `get_waiting_rooms_rules` (`read`): Lists rules for a waiting room.

### Resource `waiting_rooms.statuses`:

- `get_waiting_rooms_statuses` (`read`): Fetches the status of a configured waiting room. Response fields include:

1. `status`: String indicating the status of the waiting room. The possible status are:
   - **not_queueing** indicates that the configured thresholds have not been met and all users are going through to the origin.
   - **queueing** indicates that the thresholds have been met and some users are held in the waiting room.
   - **event_prequeueing** indicates that an event is active and is currently prequeueing users before it starts.
   - **suspended** indicates that the room is suspended.
2. `event_id`: String of the current event's `id` if an event is active, otherwise an empty string.
3. `estimated_queued_users`: Integer of the estimated number of users currently waiting in the queue.
4. `estimated_total_active_users`: Integer of the estimated number of users currently active on the origin.
5. `max_estimated_time_minutes`: Integer of the maximum estimated time currently presented to the users.

### Resource `waiting_rooms.settings`:

- `update_waiting_rooms_settings` (`write`): Update zone-level Waiting Room settings
- `edit_waiting_rooms_settings` (`write`): Patch zone-level Waiting Room settings
- `get_waiting_rooms_settings` (`read`): Get zone-level Waiting Room settings

### Resource `web3.hostnames`:

- `create_web3_hostnames` (`write`): Create Web3 Hostname
- `list_web3_hostnames` (`read`): List Web3 Hostnames
- `delete_web3_hostnames` (`write`): Delete Web3 Hostname
- `edit_web3_hostnames` (`write`): Edit Web3 Hostname
- `get_web3_hostnames` (`read`): Web3 Hostname Details

### Resource `web3.hostnames.ipfs_universal_paths.content_lists`:

- `update_ipfs_universal_paths_hostnames_web3_content_lists` (`write`): Update IPFS Universal Path Gateway Content List
- `get_ipfs_universal_paths_hostnames_web3_content_lists` (`read`): IPFS Universal Path Gateway Content List Details

### Resource `web3.hostnames.ipfs_universal_paths.content_lists.entries`:

- `create_content_lists_ipfs_universal_paths_hostnames_web3_entries` (`write`): Create IPFS Universal Path Gateway Content List Entry
- `update_content_lists_ipfs_universal_paths_hostnames_web3_entries` (`write`): Edit IPFS Universal Path Gateway Content List Entry
- `list_content_lists_ipfs_universal_paths_hostnames_web3_entries` (`read`): List IPFS Universal Path Gateway Content List Entries
- `delete_content_lists_ipfs_universal_paths_hostnames_web3_entries` (`write`): Delete IPFS Universal Path Gateway Content List Entry
- `get_content_lists_ipfs_universal_paths_hostnames_web3_entries` (`read`): IPFS Universal Path Gateway Content List Entry Details

### Resource `workers.routes`:

- `create_workers_routes` (`write`): Creates a route that maps a URL pattern to a Worker.
- `update_workers_routes` (`write`): Updates the URL pattern or Worker associated with a route.
- `list_workers_routes` (`read`): Returns routes for a zone.
- `delete_workers_routes` (`write`): Deletes a route.
- `get_workers_routes` (`read`): Returns information about a route, including URL pattern and Worker.

### Resource `workers.assets.upload`:

- `create_assets_workers_upload` (`write`): Upload assets ahead of creating a Worker version. To learn more about the direct uploads of assets, see https://developers.cloudflare.com/workers/static-assets/direct-upload/

### Resource `workers.scripts`:

- `update_workers_scripts` (`write`): Upload a worker module. You can find more about the multipart metadata on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/.
- `list_workers_scripts` (`read`): Fetch a list of uploaded workers.
- `delete_workers_scripts` (`write`): Delete your worker. This call has no response body on a successful delete.
- `get_workers_scripts` (`read`): Fetch raw script content for your worker. Note this is the original script content, not JSON encoded.

### Resource `workers.scripts.assets.upload`:

- `create_assets_scripts_workers_upload` (`write`): Start uploading a collection of assets for use in a Worker version. To learn more about the direct uploads of assets, see https://developers.cloudflare.com/workers/static-assets/direct-upload/

### Resource `workers.scripts.subdomain`:

- `create_scripts_workers_subdomain` (`write`): Enable or disable the Worker on the workers.dev subdomain.
- `get_scripts_workers_subdomain` (`read`): Get if the Worker is available on the workers.dev subdomain.

### Resource `workers.scripts.schedules`:

- `update_scripts_workers_schedules` (`write`): Updates Cron Triggers for a Worker.
- `get_scripts_workers_schedules` (`read`): Fetches Cron Triggers for a Worker.

### Resource `workers.scripts.tail`:

- `create_scripts_workers_tail` (`write`): Starts a tail that receives logs and exception from a Worker.
- `delete_scripts_workers_tail` (`write`): Deletes a tail from a Worker.
- `get_scripts_workers_tail` (`read`): Get list of tails currently deployed on a Worker.

### Resource `workers.scripts.content`:

- `update_scripts_workers_content` (`write`): Put script content without touching config or metadata
- `get_scripts_workers_content` (`read`): Fetch script content only

### Resource `workers.scripts.settings`:

- `edit_scripts_workers_settings` (`write`): Patch script-level settings when using [Worker Versions](https://developers.cloudflare.com/api/operations/worker-versions-list-versions). Including but not limited to Logpush and Tail Consumers.
- `get_scripts_workers_settings` (`read`): Get script-level settings when using [Worker Versions](https://developers.cloudflare.com/api/operations/worker-versions-list-versions). Includes Logpush and Tail Consumers.

### Resource `workers.scripts.deployments`:

- `create_scripts_workers_deployments` (`write`): Deployments configure how [Worker Versions](https://developers.cloudflare.com/api/operations/worker-versions-list-versions) are deployed to traffic. A deployment can consist of one or two versions of a Worker.
- `get_scripts_workers_deployments` (`read`): List of Worker Deployments. The first deployment in the list is the latest deployment actively serving traffic.

### Resource `workers.scripts.versions`:

- `create_scripts_workers_versions` (`write`): Upload a Worker Version without deploying to Cloudflare's network. You can find more about the multipart metadata on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/.
- `list_scripts_workers_versions` (`read`): List of Worker Versions. The first version in the list is the latest version.
- `get_scripts_workers_versions` (`read`): Get Version Detail

### Resource `workers.scripts.secrets`:

- `update_scripts_workers_secrets` (`write`): Add a secret to a script.
- `list_scripts_workers_secrets` (`read`): List secrets bound to a script.
- `delete_scripts_workers_secrets` (`write`): Remove a secret from a script.
- `get_scripts_workers_secrets` (`read`): Get a given secret binding (value omitted) on a script.

### Resource `workers.scripts.script_and_version_settings`:

- `edit_scripts_workers_script_and_version_settings` (`write`): Patch metadata or config, such as bindings or usage model
- `get_scripts_workers_script_and_version_settings` (`read`): Get metadata and config, such as bindings or usage model

### Resource `workers.account_settings`:

- `update_workers_account_settings` (`write`): Creates Worker account settings for an account.
- `get_workers_account_settings` (`read`): Fetches Worker account settings for an account.

### Resource `workers.domains`:

- `update_workers_domains` (`write`): Attaches a Worker to a zone and hostname.
- `list_workers_domains` (`read`): Lists all Worker Domains for an account.
- `delete_workers_domains` (`write`): Detaches a Worker from a zone and hostname.
- `get_workers_domains` (`read`): Gets a Worker domain.

### Resource `workers.subdomains`:

- `update_workers_subdomains` (`write`): Creates a Workers subdomain for an account.
- `get_workers_subdomains` (`read`): Returns a Workers subdomain for an account.

### Resource `workers.observability.telemetry`:

- `keys_observability_workers_telemetry` (`write`): List all the keys in your telemetry events.
- `query_observability_workers_telemetry` (`write`): Runs a temporary or saved query
- `values_observability_workers_telemetry` (`write`): List unique values found in your events

### Resource `kv.namespaces`:

- `create_kv_namespaces` (`write`): Creates a namespace under the given title. A `400` is returned if the account already owns a namespace with this title. A namespace must be explicitly deleted to be replaced.
- `update_kv_namespaces` (`write`): Modifies a namespace's title.
- `list_kv_namespaces` (`read`): Returns the namespaces owned by an account.
- `delete_kv_namespaces` (`write`): Deletes the namespace corresponding to the given ID.
- `get_kv_namespaces` (`read`): Get the namespace corresponding to the given ID.

### Resource `kv.namespaces.keys`:

- `list_namespaces_kv_keys` (`read`): Lists a namespace's keys.
- `bulk_delete_namespaces_kv_keys` (`write`): Remove multiple KV pairs from the namespace. Body should be an array of up to 10,000 keys to be removed.
- `bulk_get_namespaces_kv_keys` (`write`): Get multiple KV pairs from the namespace. Body should contain keys to retrieve at most 100. Keys must contain text-based values. If value is json, it can be requested to return in JSON, instead of string. Metadata can be return if withMetadata is true.
- `bulk_update_namespaces_kv_keys` (`write`): Write multiple keys and values at once. Body should be an array of up to 10,000 key-value pairs to be stored, along with optional expiration information. Existing values and expirations will be overwritten. If neither `expiration` nor `expiration_ttl` is specified, the key-value pair will never expire. If both are set, `expiration_ttl` is used and `expiration` is ignored. The entire request size must be 100 megabytes or less.

### Resource `kv.namespaces.metadata`:

- `get_namespaces_kv_metadata` (`read`): Returns the metadata associated with the given key in the given namespace. Use URL-encoding to use special characters (for example, `:`, `!`, `%`) in the key name.

### Resource `kv.namespaces.values`:

- `update_namespaces_kv_values` (`write`): Write a value identified by a key. Use URL-encoding to use special characters (for example, `:`, `!`, `%`) in the key name. Body should be the value to be stored. If JSON metadata to be associated with the key/value pair is needed, use `multipart/form-data` content type for your PUT request (see dropdown below in `REQUEST BODY SCHEMA`). Existing values, expirations, and metadata will be overwritten. If neither `expiration` nor `expiration_ttl` is specified, the key-value pair will never expire. If both are set, `expiration_ttl` is used and `expiration` is ignored.
- `delete_namespaces_kv_values` (`write`): Remove a KV pair from the namespace. Use URL-encoding to use special characters (for example, `:`, `!`, `%`) in the key name.
- `get_namespaces_kv_values` (`read`): Returns the value associated with the given key in the given namespace. Use URL-encoding to use special characters (for example, `:`, `!`, `%`) in the key name. If the KV-pair is set to expire at some point, the expiration time as measured in seconds since the UNIX epoch will be returned in the `expiration` response header.

### Resource `durable_objects.namespaces`:

- `list_durable_objects_namespaces` (`read`): Returns the Durable Object namespaces owned by an account.

### Resource `durable_objects.namespaces.objects`:

- `list_namespaces_durable_objects_objects` (`read`): Returns the Durable Objects in a given namespace.

### Resource `queues`:

- `create_queues` (`write`): Create a new queue
- `update_queues` (`write`): Updates a Queue. Note that this endpoint does not support partial updates. If successful, the Queue's configuration is overwritten with the supplied configuration.
- `list_queues` (`read`): Returns the queues owned by an account.
- `delete_queues` (`write`): Deletes a queue
- `edit_queues` (`write`): Updates a Queue.
- `get_queues` (`read`): Get details about a specific queue.

### Resource `queues.consumers`:

- `create_queues_consumers` (`write`): Creates a new consumer for a Queue
- `update_queues_consumers` (`write`): Updates the consumer for a queue, or creates one if it does not exist.
- `delete_queues_consumers` (`write`): Deletes the consumer for a queue.
- `get_queues_consumers` (`read`): Returns the consumers for a Queue

### Resource `queues.messages`:

- `ack_queues_messages` (`write`): Acknowledge + Retry messages from a Queue
- `pull_queues_messages` (`write`): Pull a batch of messages from a Queue

### Resource `queues.purge`:

- `start_queues_purge` (`write`): Deletes all messages from the Queue.
- `status_queues_purge` (`read`): Get details about a Queue's purge status.

### Resource `api_gateway.configurations`:

- `update_api_gateway_configurations` (`write`): Set configuration properties
- `get_api_gateway_configurations` (`read`): Retrieve information about specific configuration properties

### Resource `api_gateway.discovery`:

- `get_api_gateway_discovery` (`read`): Retrieve the most up to date view of discovered operations, rendered as OpenAPI schemas

### Resource `api_gateway.discovery.operations`:

- `list_discovery_api_gateway_operations` (`read`): Retrieve the most up to date view of discovered operations
- `bulk_edit_discovery_api_gateway_operations` (`write`): Update the `state` on one or more discovered operations
- `edit_discovery_api_gateway_operations` (`write`): Update the `state` on a discovered operation

### Resource `api_gateway.operations`:

- `create_api_gateway_operations` (`write`): Add one operation to a zone. Endpoints can contain path variables. Host, method, endpoint will be normalized to a canoncial form when creating an operation and must be unique on the zone. Inserting an operation that matches an existing one will return the record of the already existing operation and update its last_updated date.
- `list_api_gateway_operations` (`read`): Retrieve information about all operations on a zone
- `delete_api_gateway_operations` (`write`): Delete an operation
- `bulk_create_api_gateway_operations` (`write`): Add one or more operations to a zone. Endpoints can contain path variables. Host, method, endpoint will be normalized to a canoncial form when creating an operation and must be unique on the zone. Inserting an operation that matches an existing one will return the record of the already existing operation and update its last_updated date.
- `bulk_delete_api_gateway_operations` (`write`): Delete multiple operations
- `get_api_gateway_operations` (`read`): Retrieve information about an operation

### Resource `api_gateway.operations.schema_validation`:

- `update_operations_api_gateway_schema_validation` (`write`): Updates operation-level schema validation settings on the zone
- `edit_operations_api_gateway_schema_validation` (`write`): Updates multiple operation-level schema validation settings on the zone
- `get_operations_api_gateway_schema_validation` (`read`): Retrieves operation-level schema validation settings on the zone

### Resource `api_gateway.schemas`:

- `list_api_gateway_schemas` (`read`): Retrieve operations and features as OpenAPI schemas

### Resource `api_gateway.settings.schema_validation`:

- `update_settings_api_gateway_schema_validation` (`write`): Updates zone level schema validation settings on the zone
- `edit_settings_api_gateway_schema_validation` (`write`): Updates zone level schema validation settings on the zone
- `get_settings_api_gateway_schema_validation` (`read`): Retrieves zone level schema validation settings currently set on the zone

### Resource `api_gateway.user_schemas`:

- `create_api_gateway_user_schemas` (`write`): Upload a schema to a zone
- `list_api_gateway_user_schemas` (`read`): Retrieve information about all schemas on a zone
- `delete_api_gateway_user_schemas` (`write`): Delete a schema
- `edit_api_gateway_user_schemas` (`write`): Enable validation for a schema
- `get_api_gateway_user_schemas` (`read`): Retrieve information about a specific schema on a zone

### Resource `api_gateway.user_schemas.operations`:

- `list_user_schemas_api_gateway_operations` (`read`): Retrieves all operations from the schema. Operations that already exist in API Shield Endpoint Management will be returned as full operations.

### Resource `api_gateway.user_schemas.hosts`:

- `list_user_schemas_api_gateway_hosts` (`read`): Retrieve schema hosts in a zone

### Resource `api_gateway.expression_template.fallthrough`:

- `create_expression_template_api_gateway_fallthrough` (`write`): Generate fallthrough WAF expression template from a set of API hosts

### Resource `managed_transforms`:

- `list_managed_transforms` (`read`): Fetches a list of all Managed Transforms.
- `delete_managed_transforms` (`write`): Disables all Managed Transforms.
- `edit_managed_transforms` (`write`): Updates the status of one or more Managed Transforms.

### Resource `page_shield`:

- `update_page_shield` (`write`): Updates Page Shield settings.
- `get_page_shield` (`read`): Fetches the Page Shield settings.

### Resource `page_shield.policies`:

- `create_page_shield_policies` (`write`): Create a Page Shield policy.
- `update_page_shield_policies` (`write`): Update a Page Shield policy by ID.
- `list_page_shield_policies` (`read`): Lists all Page Shield policies.
- `delete_page_shield_policies` (`write`): Delete a Page Shield policy by ID.
- `get_page_shield_policies` (`read`): Fetches a Page Shield policy by ID.

### Resource `page_shield.connections`:

- `list_page_shield_connections` (`read`): Lists all connections detected by Page Shield.
- `get_page_shield_connections` (`read`): Fetches a connection detected by Page Shield by connection ID.

### Resource `page_shield.scripts`:

- `list_page_shield_scripts` (`read`): Lists all scripts detected by Page Shield.
- `get_page_shield_scripts` (`read`): Fetches a script detected by Page Shield by script ID.

### Resource `page_shield.cookies`:

- `list_page_shield_cookies` (`read`): Lists all cookies collected by Page Shield.
- `get_page_shield_cookies` (`read`): Fetches a cookie collected by Page Shield by cookie ID.

### Resource `rulesets`:

- `create_rulesets` (`write`): Creates a ruleset.
- `update_rulesets` (`write`): Updates an account or zone ruleset, creating a new version.
- `list_rulesets` (`read`): Fetches all rulesets.
- `delete_rulesets` (`write`): Deletes all versions of an existing account or zone ruleset.
- `get_rulesets` (`read`): Fetches the latest version of an account or zone ruleset.

### Resource `rulesets.phases`:

- `update_rulesets_phases` (`write`): Updates an account or zone entry point ruleset, creating a new version.
- `get_rulesets_phases` (`read`): Fetches the latest version of the account or zone entry point ruleset for a given phase.

### Resource `rulesets.phases.versions`:

- `list_phases_rulesets_versions` (`read`): Fetches the versions of an account or zone entry point ruleset.
- `get_phases_rulesets_versions` (`read`): Fetches a specific version of an account or zone entry point ruleset.

### Resource `rulesets.rules`:

- `create_rulesets_rules` (`write`): Adds a new rule to an account or zone ruleset. The rule will be added to the end of the existing list of rules in the ruleset by default.
- `delete_rulesets_rules` (`write`): Deletes an existing rule from an account or zone ruleset.
- `edit_rulesets_rules` (`write`): Updates an existing rule in an account or zone ruleset.

### Resource `rulesets.versions`:

- `list_rulesets_versions` (`read`): Fetches the versions of an account or zone ruleset.
- `delete_rulesets_versions` (`write`): Deletes an existing version of an account or zone ruleset.
- `get_rulesets_versions` (`read`): Fetches a specific version of an account or zone ruleset.

### Resource `url_normalization`:

- `update_url_normalization` (`write`): Updates the URL Normalization settings.
- `delete_url_normalization` (`write`): Deletes the URL Normalization settings.
- `get_url_normalization` (`read`): Fetches the current URL Normalization settings.

### Resource `spectrum.analytics.aggregates.currents`:

- `get_aggregates_analytics_spectrum_currents` (`read`): Retrieves analytics aggregated from the last minute of usage on Spectrum applications underneath a given zone.

### Resource `spectrum.analytics.events.bytimes`:

- `get_events_analytics_spectrum_bytimes` (`read`): Retrieves a list of aggregate metrics grouped by time interval.

### Resource `spectrum.analytics.events.summaries`:

- `get_events_analytics_spectrum_summaries` (`read`): Retrieves a list of summarised aggregate metrics over a given time period.

### Resource `spectrum.apps`:

- `create_spectrum_apps` (`write`): Creates a new Spectrum application from a configuration using a name for the origin.
- `update_spectrum_apps` (`write`): Updates a previously existing application's configuration that uses a name for the origin.
- `list_spectrum_apps` (`read`): Retrieves a list of currently existing Spectrum applications inside a zone.
- `delete_spectrum_apps` (`write`): Deletes a previously existing application.
- `get_spectrum_apps` (`read`): Gets the application configuration of a specific application inside a zone.

### Resource `addressing.regional_hostnames`:

- `create_addressing_regional_hostnames` (`write`): Create a new Regional Hostname entry. Cloudflare will only use data centers that are physically located within the chosen region to decrypt and service HTTPS traffic. Learn more about [Regional Services](https://developers.cloudflare.com/data-localization/regional-services/get-started/).
- `list_addressing_regional_hostnames` (`read`): List all Regional Hostnames within a zone.
- `delete_addressing_regional_hostnames` (`write`): Delete the region configuration for a specific Regional Hostname.
- `edit_addressing_regional_hostnames` (`write`): Update the configuration for a specific Regional Hostname. Only the region_key of a hostname is mutable.
- `get_addressing_regional_hostnames` (`read`): Fetch the configuration for a specific Regional Hostname, within a zone.

### Resource `addressing.regional_hostnames.regions`:

- `list_regional_hostnames_addressing_regions` (`read`): List all Regional Services regions available for use by this account.

### Resource `addressing.services`:

- `list_addressing_services` (`read`): Bring-Your-Own IP (BYOIP) prefixes onboarded to Cloudflare must be bound to a service running on the Cloudflare network to enable a Cloudflare product on the IP addresses. This endpoint can be used as a reference of available services on the Cloudflare network, and their service IDs.

### Resource `addressing.address_maps`:

- `create_addressing_address_maps` (`write`): Create a new address map under the account.
- `list_addressing_address_maps` (`read`): List all address maps owned by the account.
- `delete_addressing_address_maps` (`write`): Delete a particular address map owned by the account. An Address Map must be disabled before it can be deleted.
- `edit_addressing_address_maps` (`write`): Modify properties of an address map owned by the account.
- `get_addressing_address_maps` (`read`): Show a particular address map owned by the account.

### Resource `addressing.address_maps.accounts`:

- `update_address_maps_addressing_accounts` (`write`): Add an account as a member of a particular address map.
- `delete_address_maps_addressing_accounts` (`write`): Remove an account as a member of a particular address map.

### Resource `addressing.address_maps.ips`:

- `update_address_maps_addressing_ips` (`write`): Add an IP from a prefix owned by the account to a particular address map.
- `delete_address_maps_addressing_ips` (`write`): Remove an IP from a particular address map.

### Resource `addressing.address_maps.zones`:

- `update_address_maps_addressing_zones` (`write`): Add a zone as a member of a particular address map.
- `delete_address_maps_addressing_zones` (`write`): Remove a zone as a member of a particular address map.

### Resource `addressing.loa_documents`:

- `create_addressing_loa_documents` (`write`): Submit LOA document (pdf format) under the account.
- `get_addressing_loa_documents` (`read`): Download specified LOA document under the account.

### Resource `addressing.prefixes`:

- `create_addressing_prefixes` (`write`): Add a new prefix under the account.
- `list_addressing_prefixes` (`read`): List all prefixes owned by the account.
- `delete_addressing_prefixes` (`write`): Delete an unapproved prefix owned by the account.
- `edit_addressing_prefixes` (`write`): Modify the description for a prefix owned by the account.
- `get_addressing_prefixes` (`read`): List a particular prefix owned by the account.

### Resource `addressing.prefixes.service_bindings`:

- `create_prefixes_addressing_service_bindings` (`write`): Creates a new Service Binding, routing traffic to IPs within the given CIDR to a service running on Cloudflare's network.
  **Note:** This API may only be used on prefixes currently configured with a Magic Transit/Cloudflare CDN/Cloudflare Spectrum service binding, and only allows creating upgrade service bindings for the Cloudflare CDN or Cloudflare Spectrum.
- `list_prefixes_addressing_service_bindings` (`read`): List the Cloudflare services this prefix is currently bound to. Traffic sent to an address within an IP prefix will be routed to the Cloudflare service of the most-specific Service Binding matching the address.
  **Example:** binding `192.0.2.0/24` to Cloudflare Magic Transit and `192.0.2.1/32` to the Cloudflare CDN would route traffic for `192.0.2.1` to the CDN, and traffic for all other IPs in the prefix to Cloudflare Magic Transit.
- `delete_prefixes_addressing_service_bindings` (`write`): Delete a Service Binding
- `get_prefixes_addressing_service_bindings` (`read`): Fetch a single Service Binding

### Resource `addressing.prefixes.bgp_prefixes`:

- `create_prefixes_addressing_bgp_prefixes` (`write`): Create a BGP prefix, controlling the BGP advertisement status of a specific subnet. When created, BGP prefixes are initially withdrawn, and can be advertised with the Update BGP Prefix API.
- `list_prefixes_addressing_bgp_prefixes` (`read`): List all BGP Prefixes within the specified IP Prefix. BGP Prefixes are used to control which specific subnets are advertised to the Internet. It is possible to advertise subnets more specific than an IP Prefix by creating more specific BGP Prefixes.
- `edit_prefixes_addressing_bgp_prefixes` (`write`): Update the properties of a BGP Prefix, such as the on demand advertisement status (advertised or withdrawn).
- `get_prefixes_addressing_bgp_prefixes` (`read`): Retrieve a single BGP Prefix according to its identifier

### Resource `addressing.prefixes.advertisement_status`:

- `edit_prefixes_addressing_advertisement_status` (`write`): Advertise or withdraw the BGP route for a prefix.

**Deprecated:** Prefer the BGP Prefixes endpoints, which additionally allow for advertising and withdrawing
subnets of an IP prefix.

- `get_prefixes_addressing_advertisement_status` (`read`): View the current advertisement state for a prefix.

**Deprecated:** Prefer the BGP Prefixes endpoints, which additionally allow for advertising and withdrawing
subnets of an IP prefix.

### Resource `addressing.prefixes.delegations`:

- `create_prefixes_addressing_delegations` (`write`): Create a new account delegation for a given IP prefix.
- `list_prefixes_addressing_delegations` (`read`): List all delegations for a given account IP prefix.
- `delete_prefixes_addressing_delegations` (`write`): Delete an account delegation for a given IP prefix.

### Resource `audit_logs`:

- `list_audit_logs` (`read`): Gets a list of audit logs for an account. Can be filtered by who made the change, on which zone, and the timeframe of the change.

### Resource `billing.profiles`:

- `get_billing_profiles` (`read`): Gets the current billing profile for the account.

### Resource `brand_protection`:

- `submit_brand_protection` (`write`): Submit suspicious URL for scanning
- `url_info_brand_protection` (`read`): Gets phishing details about a URL.

### Resource `diagnostics.traceroutes`:

- `create_diagnostics_traceroutes` (`write`): Run traceroutes from Cloudflare colos.

### Resource `images.v1`:

- `create_images_v1` (`write`): Upload an image with up to 10 Megabytes using a single HTTP POST (multipart/form-data) request.
  An image can be uploaded by sending an image file or passing an accessible to an API url.
- `list_images_v1` (`read`): List up to 100 images with one request. Use the optional parameters below to get a specific range of images.
- `delete_images_v1` (`write`): Delete an image on Cloudflare Images. On success, all copies of the image are deleted and purged from cache.
- `edit_images_v1` (`write`): Update image access control. On access control change, all copies of the image are purged from cache.
- `get_images_v1` (`read`): Fetch details for a single image.

### Resource `images.v1.keys`:

- `update_v1_images_keys` (`write`): Create a new signing key with specified name. Returns all keys available.
- `list_v1_images_keys` (`read`): Lists your signing keys. These can be found on your Cloudflare Images dashboard.
- `delete_v1_images_keys` (`write`): Delete signing key with specified name. Returns all keys available.
  When last key is removed, a new default signing key will be generated.

### Resource `images.v1.stats`:

- `get_v1_images_stats` (`read`): Fetch usage statistics details for Cloudflare Images.

### Resource `images.v1.variants`:

- `create_v1_images_variants` (`write`): Specify variants that allow you to resize images for different use cases.
- `list_v1_images_variants` (`read`): Lists existing variants.
- `delete_v1_images_variants` (`write`): Deleting a variant purges the cache for all images associated with the variant.
- `edit_v1_images_variants` (`write`): Updating a variant purges the cache for all images associated with the variant.
- `get_v1_images_variants` (`read`): Fetch details for a single variant.

### Resource `images.v1.blobs`:

- `get_v1_images_blobs` (`read`): Fetch base image. For most images this will be the originally uploaded file. For larger images it can be a near-lossless version of the original.

### Resource `images.v2`:

- `list_images_v2` (`read`): List up to 10000 images with one request. Use the optional parameters below to get a specific range of images.
  Endpoint returns continuation_token if more images are present.

### Resource `images.v2.direct_uploads`:

- `create_v2_images_direct_uploads` (`write`): Direct uploads allow users to upload images without API keys. A common use case are web apps, client-side applications, or mobile devices where users upload content directly to Cloudflare Images. This method creates a draft record for a future image. It returns an upload URL and an image identifier. To verify if the image itself has been uploaded, send an image details request (accounts/:account_identifier/images/v1/:identifier), and check that the `draft: true` property is not present.

### Resource `intel.asn`:

- `get_intel_asn` (`read`): Gets an overview of the Autonomous System Number (ASN) and a list of subnets for it.

### Resource `intel.asn.subnets`:

- `get_asn_intel_subnets` (`read`): Get ASN Subnets

### Resource `intel.dns`:

- `list_intel_dns` (`read`): Gets a list of all the domains that have resolved to a specific IP address.

### Resource `intel.domains`:

- `get_intel_domains` (`read`): Gets security details and statistics about a domain.

### Resource `intel.domains.bulks`:

- `get_domains_intel_bulks` (`read`): Same as summary

### Resource `intel.domain_history`:

- `get_intel_domain_history` (`read`): Gets historical security threat and content categories currently and previously assigned to a domain.

### Resource `intel.ips`:

- `get_intel_ips` (`read`): Gets the geolocation, ASN, infrastructure type of the ASN, and any security threat categories of an IP address. This is an alternative to the `/intel/ip/{ipv_type}/{ip_address}` endpoint. Must provide query parameters containing `IPv4` or `IPv6` and the IP address.

### Resource `intel.ip_lists`:

- `get_intel_ip_lists` (`read`): Get IP Lists

### Resource `intel.miscategorizations`:

- `create_intel_miscategorizations` (`write`): Allows you to submit requests to change a domain’s category.

### Resource `intel.whois`:

- `get_intel_whois` (`read`): Get WHOIS Record

### Resource `intel.indicator_feeds`:

- `create_intel_indicator_feeds` (`write`): Create new indicator feed
- `update_intel_indicator_feeds` (`write`): Update indicator feed metadata
- `list_intel_indicator_feeds` (`read`): Get indicator feeds owned by this account
- `data_intel_indicator_feeds` (`read`): Get indicator feed data
- `get_intel_indicator_feeds` (`read`): Get indicator feed metadata

### Resource `intel.indicator_feeds.snapshots`:

- `update_indicator_feeds_intel_snapshots` (`write`): Update indicator feed data

### Resource `intel.indicator_feeds.permissions`:

- `create_indicator_feeds_intel_permissions` (`write`): Grant permission to indicator feed
- `list_indicator_feeds_intel_permissions` (`read`): List indicator feed permissions
- `delete_indicator_feeds_intel_permissions` (`write`): Revoke permission to indicator feed

### Resource `intel.indicator_feeds.downloads`:

- `get_indicator_feeds_intel_downloads` (`read`): Download indicator feed data

### Resource `intel.sinkholes`:

- `list_intel_sinkholes` (`read`): List sinkholes owned by this account

### Resource `intel.attack_surface_report.issue_types`:

- `get_attack_surface_report_intel_issue_types` (`read`): Get Security Center Issues Types

### Resource `intel.attack_surface_report.issues`:

- `list_attack_surface_report_intel_issues` (`read`): Get Security Center Issues
- `class_attack_surface_report_intel_issues` (`read`): Get Security Center Issue Counts by Class
- `dismiss_attack_surface_report_intel_issues` (`write`): Archive Security Center Insight
- `severity_attack_surface_report_intel_issues` (`read`): Get Security Center Issue Counts by Severity
- `type_attack_surface_report_intel_issues` (`read`): Get Security Center Issue Counts by Type

### Resource `magic_transit.apps`:

- `create_magic_transit_apps` (`write`): Creates a new App for an account
- `update_magic_transit_apps` (`write`): Updates an Account App
- `list_magic_transit_apps` (`read`): Lists Apps associated with an account.
- `delete_magic_transit_apps` (`write`): Deletes specific Account App.

### Resource `magic_transit.cf_interconnects`:

- `update_magic_transit_cf_interconnects` (`write`): Updates a specific interconnect associated with an account. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
- `list_magic_transit_cf_interconnects` (`read`): Lists interconnects associated with an account.
- `bulk_update_magic_transit_cf_interconnects` (`write`): Updates multiple interconnects associated with an account. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
- `get_magic_transit_cf_interconnects` (`read`): Lists details for a specific interconnect.

### Resource `magic_transit.gre_tunnels`:

- `create_magic_transit_gre_tunnels` (`write`): Creates new GRE tunnels. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
- `update_magic_transit_gre_tunnels` (`write`): Updates a specific GRE tunnel. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
- `list_magic_transit_gre_tunnels` (`read`): Lists GRE tunnels associated with an account.
- `delete_magic_transit_gre_tunnels` (`write`): Disables and removes a specific static GRE tunnel. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
- `bulk_update_magic_transit_gre_tunnels` (`write`): Updates multiple GRE tunnels. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
- `get_magic_transit_gre_tunnels` (`read`): Lists informtion for a specific GRE tunnel.

### Resource `magic_transit.ipsec_tunnels`:

- `create_magic_transit_ipsec_tunnels` (`write`): Creates new IPsec tunnels associated with an account. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
- `update_magic_transit_ipsec_tunnels` (`write`): Updates a specific IPsec tunnel associated with an account. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
- `list_magic_transit_ipsec_tunnels` (`read`): Lists IPsec tunnels associated with an account.
- `delete_magic_transit_ipsec_tunnels` (`write`): Disables and removes a specific static IPsec Tunnel associated with an account. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
- `bulk_update_magic_transit_ipsec_tunnels` (`write`): Update multiple IPsec tunnels associated with an account. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
- `get_magic_transit_ipsec_tunnels` (`read`): Lists details for a specific IPsec tunnel.
- `psk_generate_magic_transit_ipsec_tunnels` (`write`): Generates a Pre Shared Key for a specific IPsec tunnel used in the IKE session. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes. After a PSK is generated, the PSK is immediately persisted to Cloudflare's edge and cannot be retrieved later. Note the PSK in a safe place.

### Resource `magic_transit.routes`:

- `create_magic_transit_routes` (`write`): Creates a new Magic static route. Use `?validate_only=true` as an optional query parameter to run validation only without persisting changes.
- `update_magic_transit_routes` (`write`): Update a specific Magic static route. Use `?validate_only=true` as an optional query parameter to run validation only without persisting changes.
- `list_magic_transit_routes` (`read`): List all Magic static routes.
- `delete_magic_transit_routes` (`write`): Disable and remove a specific Magic static route.
- `bulk_update_magic_transit_routes` (`write`): Update multiple Magic static routes. Use `?validate_only=true` as an optional query parameter to run validation only without persisting changes. Only fields for a route that need to be changed need be provided.
- `empty_magic_transit_routes` (`write`): Delete multiple Magic static routes.
- `get_magic_transit_routes` (`read`): Get a specific Magic static route.

### Resource `magic_transit.sites`:

- `create_magic_transit_sites` (`write`): Creates a new Site
- `update_magic_transit_sites` (`write`): Update a specific Site.
- `list_magic_transit_sites` (`read`): Lists Sites associated with an account. Use connectorid query param to return sites where connectorid matches either site.ConnectorID or site.SecondaryConnectorID.
- `delete_magic_transit_sites` (`write`): Remove a specific Site.
- `edit_magic_transit_sites` (`write`): Patch a specific Site.
- `get_magic_transit_sites` (`read`): Get a specific Site.

### Resource `magic_transit.sites.acls`:

- `create_sites_magic_transit_acls` (`write`): Creates a new Site ACL.
- `update_sites_magic_transit_acls` (`write`): Update a specific Site ACL.
- `list_sites_magic_transit_acls` (`read`): Lists Site ACLs associated with an account.
- `delete_sites_magic_transit_acls` (`write`): Remove a specific Site ACL.
- `edit_sites_magic_transit_acls` (`write`): Patch a specific Site ACL.
- `get_sites_magic_transit_acls` (`read`): Get a specific Site ACL.

### Resource `magic_transit.sites.lans`:

- `create_sites_magic_transit_lans` (`write`): Creates a new Site LAN. If the site is in high availability mode, static_addressing is required along with secondary and virtual address.
- `update_sites_magic_transit_lans` (`write`): Update a specific Site LAN.
- `list_sites_magic_transit_lans` (`read`): Lists Site LANs associated with an account.
- `delete_sites_magic_transit_lans` (`write`): Remove a specific Site LAN.
- `edit_sites_magic_transit_lans` (`write`): Patch a specific Site LAN.
- `get_sites_magic_transit_lans` (`read`): Get a specific Site LAN.

### Resource `magic_transit.sites.wans`:

- `create_sites_magic_transit_wans` (`write`): Creates a new Site WAN.
- `update_sites_magic_transit_wans` (`write`): Update a specific Site WAN.
- `list_sites_magic_transit_wans` (`read`): Lists Site WANs associated with an account.
- `delete_sites_magic_transit_wans` (`write`): Remove a specific Site WAN.
- `edit_sites_magic_transit_wans` (`write`): Patch a specific Site WAN.
- `get_sites_magic_transit_wans` (`read`): Get a specific Site WAN.

### Resource `magic_transit.connectors`:

- `update_magic_transit_connectors` (`write`): Replace Connector
- `list_magic_transit_connectors` (`read`): List Connectors
- `edit_magic_transit_connectors` (`write`): Update Connector
- `get_magic_transit_connectors` (`read`): Fetch Connector

### Resource `magic_transit.connectors.events`:

- `list_connectors_magic_transit_events` (`read`): List Events
- `get_connectors_magic_transit_events` (`read`): Get Event

### Resource `magic_transit.connectors.snapshots`:

- `list_connectors_magic_transit_snapshots` (`read`): List Snapshots
- `get_connectors_magic_transit_snapshots` (`read`): Get Snapshot

### Resource `magic_transit.pcaps`:

- `create_magic_transit_pcaps` (`write`): Create new PCAP request for account.
- `list_magic_transit_pcaps` (`read`): Lists all packet capture requests for an account.
- `get_magic_transit_pcaps` (`read`): Get information for a PCAP request by id.

### Resource `magic_transit.pcaps.ownership`:

- `create_pcaps_magic_transit_ownership` (`write`): Adds an AWS or GCP bucket to use with full packet captures.
- `delete_pcaps_magic_transit_ownership` (`write`): Deletes buckets added to the packet captures API.
- `get_pcaps_magic_transit_ownership` (`read`): List all buckets configured for use with PCAPs API.
- `validate_pcaps_magic_transit_ownership` (`write`): Validates buckets added to the packet captures API.

### Resource `magic_transit.pcaps.download`:

- `get_pcaps_magic_transit_download` (`read`): Download PCAP information into a file. Response is a binary PCAP file.

### Resource `magic_network_monitoring.vpc_flows.tokens`:

- `create_vpc_flows_magic_network_monitoring_tokens` (`write`): Generate authentication token for VPC flow logs export.

### Resource `magic_network_monitoring.configs`:

- `create_magic_network_monitoring_configs` (`write`): Create a new network monitoring configuration.
- `update_magic_network_monitoring_configs` (`write`): Update an existing network monitoring configuration, requires the entire configuration to be updated at once.
- `delete_magic_network_monitoring_configs` (`write`): Delete an existing network monitoring configuration.
- `edit_magic_network_monitoring_configs` (`write`): Update fields in an existing network monitoring configuration.
- `get_magic_network_monitoring_configs` (`read`): Lists default sampling, router IPs and warp devices for account.

### Resource `magic_network_monitoring.configs.full`:

- `get_configs_magic_network_monitoring_full` (`read`): Lists default sampling, router IPs, warp devices, and rules for account.

### Resource `magic_network_monitoring.rules`:

- `create_magic_network_monitoring_rules` (`write`): Create network monitoring rules for account. Currently only supports creating a single rule per API request.
- `update_magic_network_monitoring_rules` (`write`): Update network monitoring rules for account.
- `list_magic_network_monitoring_rules` (`read`): Lists network monitoring rules for account.
- `delete_magic_network_monitoring_rules` (`write`): Delete a network monitoring rule for account.
- `edit_magic_network_monitoring_rules` (`write`): Update a network monitoring rule for account.
- `get_magic_network_monitoring_rules` (`read`): List a single network monitoring rule for account.

### Resource `magic_network_monitoring.rules.advertisements`:

- `edit_rules_magic_network_monitoring_advertisements` (`write`): Update advertisement for rule.

### Resource `magic_cloud_networking.catalog_syncs`:

- `create_magic_cloud_networking_catalog_syncs` (`write`): Create a new Catalog Sync (Closed Beta)
- `update_magic_cloud_networking_catalog_syncs` (`write`): Update a Catalog Sync (Closed Beta)
- `list_magic_cloud_networking_catalog_syncs` (`read`): List Catalog Syncs (Closed Beta)
- `delete_magic_cloud_networking_catalog_syncs` (`write`): Delete a Catalog Sync (Closed Beta)
- `edit_magic_cloud_networking_catalog_syncs` (`write`): Update a Catalog Sync (Closed Beta)
- `get_magic_cloud_networking_catalog_syncs` (`read`): Read a Catalog Sync (Closed Beta)
- `refresh_magic_cloud_networking_catalog_syncs` (`write`): Refresh a Catalog Sync's destination by running the sync policy against latest resource catalog (Closed Beta)

### Resource `magic_cloud_networking.catalog_syncs.prebuilt_policies`:

- `list_catalog_syncs_magic_cloud_networking_prebuilt_policies` (`read`): List prebuilt catalog sync policies (Closed Beta)

### Resource `magic_cloud_networking.on_ramps`:

- `create_magic_cloud_networking_on_ramps` (`write`): Create a new On-ramp (Closed Beta)
- `update_magic_cloud_networking_on_ramps` (`write`): Update an On-ramp (Closed Beta)
- `list_magic_cloud_networking_on_ramps` (`read`): List On-ramps (Closed Beta)
- `delete_magic_cloud_networking_on_ramps` (`write`): Delete an On-ramp (Closed Beta)
- `apply_magic_cloud_networking_on_ramps` (`write`): Apply an On-ramp (Closed Beta)
- `edit_magic_cloud_networking_on_ramps` (`write`): Update an On-ramp (Closed Beta)
- `export_magic_cloud_networking_on_ramps` (`write`): Export an On-ramp to terraform ready file(s) (Closed Beta)
- `get_magic_cloud_networking_on_ramps` (`read`): Read an On-ramp (Closed Beta)
- `plan_magic_cloud_networking_on_ramps` (`write`): Plan an On-ramp (Closed Beta)

### Resource `magic_cloud_networking.on_ramps.address_spaces`:

- `update_on_ramps_magic_cloud_networking_address_spaces` (`write`): Update the Magic WAN Address Space (Closed Beta)
- `list_on_ramps_magic_cloud_networking_address_spaces` (`read`): Read the Magic WAN Address Space (Closed Beta)
- `edit_on_ramps_magic_cloud_networking_address_spaces` (`write`): Update the Magic WAN Address Space (Closed Beta)

### Resource `magic_cloud_networking.cloud_integrations`:

- `create_magic_cloud_networking_cloud_integrations` (`write`): Create a new Cloud Integration (Closed Beta)
- `update_magic_cloud_networking_cloud_integrations` (`write`): Update a Cloud Integration (Closed Beta)
- `list_magic_cloud_networking_cloud_integrations` (`read`): List Cloud Integrations (Closed Beta)
- `delete_magic_cloud_networking_cloud_integrations` (`write`): Delete a Cloud Integration (Closed Beta)
- `discover_magic_cloud_networking_cloud_integrations` (`write`): Run discovery for a Cloud Integration (Closed Beta)
- `discover_all_magic_cloud_networking_cloud_integrations` (`write`): Run discovery for all Cloud Integrations in an account (Closed Beta)
- `edit_magic_cloud_networking_cloud_integrations` (`write`): Update a Cloud Integration (Closed Beta)
- `get_magic_cloud_networking_cloud_integrations` (`read`): Read a Cloud Integration (Closed Beta)
- `initial_setup_magic_cloud_networking_cloud_integrations` (`read`): Get initial configuration to complete Cloud Integration setup (Closed Beta)

### Resource `magic_cloud_networking.resources`:

- `list_magic_cloud_networking_resources` (`read`): List resources in the Resource Catalog (Closed Beta)
- `export_magic_cloud_networking_resources` (`read`): Export resources in the Resource Catalog as a JSON file (Closed Beta)
- `get_magic_cloud_networking_resources` (`read`): Read an resource from the Resource Catalog (Closed Beta)
- `policy_preview_magic_cloud_networking_resources` (`write`): Preview Rego query result against the latest resource catalog (Closed Beta)

### Resource `network_interconnects.cnis`:

- `create_network_interconnects_cnis` (`write`): Create a new CNI object
- `update_network_interconnects_cnis` (`write`): Modify stored information about a CNI object
- `list_network_interconnects_cnis` (`read`): List existing CNI objects
- `delete_network_interconnects_cnis` (`write`): Delete a specified CNI object
- `get_network_interconnects_cnis` (`read`): Get information about a CNI object

### Resource `network_interconnects.interconnects`:

- `create_network_interconnects_interconnects` (`write`): Create a new interconnect
- `list_network_interconnects_interconnects` (`read`): List existing interconnects
- `delete_network_interconnects_interconnects` (`write`): Delete an interconnect object
- `get_network_interconnects_interconnects` (`read`): Get information about an interconnect object
- `loa_network_interconnects_interconnects` (`read`): Generate the Letter of Authorization (LOA) for a given interconnect
- `status_network_interconnects_interconnects` (`read`): Get the current status of an interconnect object

### Resource `network_interconnects.settings`:

- `update_network_interconnects_settings` (`write`): Update the current settings for the active account
- `get_network_interconnects_settings` (`read`): Get the current settings for the active account

### Resource `network_interconnects.slots`:

- `list_network_interconnects_slots` (`read`): Retrieve a list of all slots matching the specified parameters
- `get_network_interconnects_slots` (`read`): Get information about the specified slot

### Resource `mtls_certificates`:

- `create_mtls_certificates` (`write`): Upload a certificate that you want to use with mTLS-enabled Cloudflare services.
- `list_mtls_certificates` (`read`): Lists all mTLS certificates.
- `delete_mtls_certificates` (`write`): Deletes the mTLS certificate unless the certificate is in use by one or more Cloudflare services.
- `get_mtls_certificates` (`read`): Fetches a single mTLS certificate.

### Resource `mtls_certificates.associations`:

- `get_mtls_certificates_associations` (`read`): Lists all active associations between the certificate and Cloudflare services.

### Resource `pages.projects`:

- `create_pages_projects` (`write`): Create a new project.
- `list_pages_projects` (`read`): Fetch a list of all user projects.
- `delete_pages_projects` (`write`): Delete a project by name.
- `edit_pages_projects` (`write`): Set new attributes for an existing project. Modify environment variables. To delete an environment variable, set the key to null.
- `get_pages_projects` (`read`): Fetch a project by name.
- `purge_build_cache_pages_projects` (`write`): Purge all cached build artifacts for a Pages project

### Resource `pages.projects.deployments`:

- `create_projects_pages_deployments` (`write`): Start a new deployment from production. The repository and account must have already been authorized on the Cloudflare Pages dashboard.
- `list_projects_pages_deployments` (`read`): Fetch a list of project deployments.
- `delete_projects_pages_deployments` (`write`): Delete a deployment.
- `get_projects_pages_deployments` (`read`): Fetch information about a deployment.
- `retry_projects_pages_deployments` (`write`): Retry a previous deployment.
- `rollback_projects_pages_deployments` (`write`): Rollback the production deployment to a previous deployment. You can only rollback to succesful builds on production.

### Resource `pages.projects.deployments.history.logs`:

- `get_history_deployments_projects_pages_logs` (`read`): Fetch deployment logs for a project.

### Resource `pages.projects.domains`:

- `create_projects_pages_domains` (`write`): Add a new domain for the Pages project.
- `list_projects_pages_domains` (`read`): Fetch a list of all domains associated with a Pages project.
- `delete_projects_pages_domains` (`write`): Delete a Pages project's domain.
- `edit_projects_pages_domains` (`write`): Retry the validation status of a single domain.
- `get_projects_pages_domains` (`read`): Fetch a single domain.

### Resource `registrar.domains`:

- `update_registrar_domains` (`write`): Update individual domain.
- `list_registrar_domains` (`read`): List domains handled by Registrar.
- `get_registrar_domains` (`read`): Show individual domain.

### Resource `request_tracers.traces`:

- `create_request_tracers_traces` (`write`): Request Trace

### Resource `rules.lists`:

- `create_rules_lists` (`write`): Creates a new list of the specified type.
- `update_rules_lists` (`write`): Updates the description of a list.
- `list_rules_lists` (`read`): Fetches all lists in the account.
- `delete_rules_lists` (`write`): Deletes a specific list and all its items.
- `get_rules_lists` (`read`): Fetches the details of a list.

### Resource `rules.lists.bulk_operations`:

- `get_lists_rules_bulk_operations` (`read`): Gets the current status of an asynchronous operation on a list.

The `status` property can have one of the following values: `pending`, `running`, `completed`, or `failed`. If the status is `failed`, the `error` property will contain a message describing the error.

### Resource `rules.lists.items`:

- `create_lists_rules_items` (`write`): Appends new items to the list.

This operation is asynchronous. To get current the operation status, invoke the [Get bulk operation status](/operations/lists-get-bulk-operation-status) endpoint with the returned `operation_id`.

- `update_lists_rules_items` (`write`): Removes all existing items from the list and adds the provided items to the list.

This operation is asynchronous. To get current the operation status, invoke the [Get bulk operation status](/operations/lists-get-bulk-operation-status) endpoint with the returned `operation_id`.

- `list_lists_rules_items` (`read`): Fetches all the items in the list.
- `delete_lists_rules_items` (`write`): Removes one or more items from a list.

This operation is asynchronous. To get current the operation status, invoke the [Get bulk operation status](/operations/lists-get-bulk-operation-status) endpoint with the returned `operation_id`.

- `get_lists_rules_items` (`read`): Fetches a list item in the list.

### Resource `stream`:

- `create_stream` (`write`): Initiates a video upload using the TUS protocol. On success, the server responds with a status code 201 (created) and includes a `location` header to indicate where the content should be uploaded. Refer to https://tus.io for protocol details.
- `list_stream` (`read`): Lists up to 1000 videos from a single request. For a specific range, refer to the optional parameters.
- `delete_stream` (`write`): Deletes a video and its copies from Cloudflare Stream.
- `edit_stream` (`write`): Edit details for a single video.
- `get_stream` (`read`): Fetches details for a single video.

### Resource `stream.audio_tracks`:

- `delete_stream_audio_tracks` (`write`): Deletes additional audio tracks on a video. Deleting a default audio track is not allowed. You must assign another audio track as default prior to deletion.
- `copy_stream_audio_tracks` (`write`): Adds an additional audio track to a video using the provided audio track URL.
- `edit_stream_audio_tracks` (`write`): Edits additional audio tracks on a video. Editing the default status of an audio track to `true` will mark all other audio tracks on the video default status to `false`.
- `get_stream_audio_tracks` (`read`): Lists additional audio tracks on a video. Note this API will not return information for audio attached to the video upload.

### Resource `stream.videos`:

- `storage_usage_stream_videos` (`read`): Returns information about an account's storage use.

### Resource `stream.clip`:

- `create_stream_clip` (`write`): Clips a video based on the specified start and end times provided in seconds.

### Resource `stream.copy`:

- `create_stream_copy` (`write`): Uploads a video to Stream from a provided URL.

### Resource `stream.direct_upload`:

- `create_stream_direct_upload` (`write`): Creates a direct upload that allows video uploads without an API key.

### Resource `stream.keys`:

- `create_stream_keys` (`write`): Creates an RSA private key in PEM and JWK formats. Key files are only displayed once after creation. Keys are created, used, and deleted independently of videos, and every key can sign any video.
- `delete_stream_keys` (`write`): Deletes signing keys and revokes all signed URLs generated with the key.
- `get_stream_keys` (`read`): Lists the video ID and creation date and time when a signing key was created.

### Resource `stream.live_inputs`:

- `create_stream_live_inputs` (`write`): Creates a live input, and returns credentials that you or your users can use to stream live video to Cloudflare Stream.
- `update_stream_live_inputs` (`write`): Updates a specified live input.
- `list_stream_live_inputs` (`read`): Lists the live inputs created for an account. To get the credentials needed to stream to a specific live input, request a single live input.
- `delete_stream_live_inputs` (`write`): Prevents a live input from being streamed to and makes the live input inaccessible to any future API calls.
- `get_stream_live_inputs` (`read`): Retrieves details of an existing live input.

### Resource `stream.live_inputs.outputs`:

- `create_live_inputs_stream_outputs` (`write`): Creates a new output that can be used to simulcast or restream live video to other RTMP or SRT destinations. Outputs are always linked to a specific live input — one live input can have many outputs.
- `update_live_inputs_stream_outputs` (`write`): Updates the state of an output.
- `list_live_inputs_stream_outputs` (`read`): Retrieves all outputs associated with a specified live input.
- `delete_live_inputs_stream_outputs` (`write`): Deletes an output and removes it from the associated live input.

### Resource `stream.watermarks`:

- `create_stream_watermarks` (`write`): Creates watermark profiles using a single `HTTP POST multipart/form-data` request.
- `list_stream_watermarks` (`read`): Lists all watermark profiles for an account.
- `delete_stream_watermarks` (`write`): Deletes a watermark profile.
- `get_stream_watermarks` (`read`): Retrieves details for a single watermark profile.

### Resource `stream.webhooks`:

- `update_stream_webhooks` (`write`): Creates a webhook notification.
- `delete_stream_webhooks` (`write`): Deletes a webhook.
- `get_stream_webhooks` (`read`): Retrieves a list of webhooks.

### Resource `stream.captions`:

- `get_stream_captions` (`read`): Lists the available captions or subtitles for a specific video.

### Resource `stream.captions.language`:

- `create_captions_stream_language` (`write`): Generate captions or subtitles for provided language via AI.
- `update_captions_stream_language` (`write`): Uploads the caption or subtitle file to the endpoint for a specific BCP47 language. One caption or subtitle file per language is allowed.
- `delete_captions_stream_language` (`write`): Removes the captions or subtitles from a video.
- `get_captions_stream_language` (`read`): Lists the captions or subtitles for provided language.

### Resource `stream.captions.language.vtt`:

- `get_language_captions_stream_vtt` (`read`): Return WebVTT captions for a provided language.

### Resource `stream.downloads`:

- `create_stream_downloads` (`write`): Creates a download for a video when a video is ready to view.
- `delete_stream_downloads` (`write`): Delete the downloads for a video.
- `get_stream_downloads` (`read`): Lists the downloads created for a video.

### Resource `stream.embed`:

- `get_stream_embed` (`read`): Fetches an HTML code snippet to embed a video in a web page delivered through Cloudflare. On success, returns an HTML fragment for use on web pages to display a video. On failure, returns a JSON response body.

### Resource `stream.token`:

- `create_stream_token` (`write`): Creates a signed URL token for a video. If a body is not provided in the request, a token is created with default values.

### Resource `alerting.available_alerts`:

- `list_alerting_available_alerts` (`read`): Gets a list of all alert types for which an account is eligible.

### Resource `alerting.destinations.eligible`:

- `get_destinations_alerting_eligible` (`read`): Get a list of all delivery mechanism types for which an account is eligible.

### Resource `alerting.destinations.pagerduty`:

- `create_destinations_alerting_pagerduty` (`write`): Creates a new token for integrating with PagerDuty.
- `delete_destinations_alerting_pagerduty` (`write`): Deletes all the PagerDuty Services connected to the account.
- `get_destinations_alerting_pagerduty` (`read`): Get a list of all configured PagerDuty services.
- `link_destinations_alerting_pagerduty` (`read`): Links PagerDuty with the account using the integration token.

### Resource `alerting.destinations.webhooks`:

- `create_destinations_alerting_webhooks` (`write`): Creates a new webhook destination.
- `update_destinations_alerting_webhooks` (`write`): Update a webhook destination.
- `list_destinations_alerting_webhooks` (`read`): Gets a list of all configured webhook destinations.
- `delete_destinations_alerting_webhooks` (`write`): Delete a configured webhook destination.
- `get_destinations_alerting_webhooks` (`read`): Get details for a single webhooks destination.

### Resource `alerting.history`:

- `list_alerting_history` (`read`): Gets a list of history records for notifications sent to an account. The records are displayed for last `x` number of days based on the zone plan (free = 30, pro = 30, biz = 30, ent = 90).

### Resource `alerting.policies`:

- `create_alerting_policies` (`write`): Creates a new Notification policy.
- `update_alerting_policies` (`write`): Update a Notification policy.
- `list_alerting_policies` (`read`): Get a list of all Notification policies.
- `delete_alerting_policies` (`write`): Delete a Notification policy.
- `get_alerting_policies` (`read`): Get details for a single policy.

### Resource `d1.database`:

- `create_d1_database` (`write`): Returns the created D1 database.
- `list_d1_database` (`read`): Returns a list of D1 databases.
- `delete_d1_database` (`write`): Deletes the specified D1 database.
- `export_d1_database` (`write`): Returns a URL where the SQL contents of your D1 can be downloaded. Note: this process may take
  some time for larger DBs, during which your D1 will be unavailable to serve queries. To avoid
  blocking your DB unnecessarily, an in-progress export must be continually polled or will automatically cancel.
- `get_d1_database` (`read`): Returns the specified D1 database.
- `import_d1_database` (`write`): Generates a temporary URL for uploading an SQL file to, then instructing the D1 to import it
  and polling it for status updates. Imports block the D1 for their duration.
- `query_d1_database` (`write`): Returns the query result as an object.
- `raw_d1_database` (`write`): Returns the query result rows as arrays rather than objects. This is a performance-optimized version of the /query endpoint.

### Resource `r2.buckets`:

- `create_r2_buckets` (`write`): Creates a new R2 bucket.
- `list_r2_buckets` (`read`): Lists all R2 buckets on your account
- `delete_r2_buckets` (`write`): Deletes an existing R2 bucket.
- `get_r2_buckets` (`read`): Gets metadata for an existing R2 bucket.

### Resource `r2.buckets.lifecycle`:

- `update_buckets_r2_lifecycle` (`write`): Set the object lifecycle rules for a bucket
- `get_buckets_r2_lifecycle` (`read`): Get object lifecycle rules for a bucket

### Resource `r2.buckets.cors`:

- `update_buckets_r2_cors` (`write`): Set the CORS policy for a bucket
- `delete_buckets_r2_cors` (`write`): Delete the CORS policy for a bucket
- `get_buckets_r2_cors` (`read`): Get the CORS policy for a bucket

### Resource `r2.buckets.domains.custom`:

- `create_domains_buckets_r2_custom` (`write`): Register a new custom domain for an existing R2 bucket.
- `update_domains_buckets_r2_custom` (`write`): Edit the configuration for a custom domain on an existing R2 bucket.
- `list_domains_buckets_r2_custom` (`read`): Gets a list of all custom domains registered with an existing R2 bucket.
- `delete_domains_buckets_r2_custom` (`write`): Remove custom domain registration from an existing R2 bucket
- `get_domains_buckets_r2_custom` (`read`): Get the configuration for a custom domain on an existing R2 bucket.

### Resource `r2.buckets.domains.managed`:

- `update_domains_buckets_r2_managed` (`write`): Updates state of public access over the bucket's R2-managed (r2.dev) domain.
- `list_domains_buckets_r2_managed` (`read`): Gets state of public access over the bucket's R2-managed (r2.dev) domain.

### Resource `r2.buckets.event_notifications`:

- `update_buckets_r2_event_notifications` (`write`): Create event notification rule.
- `delete_buckets_r2_event_notifications` (`write`): Delete an event notification rule. **If no body is provided, all rules for specified queue will be deleted**.
- `get_buckets_r2_event_notifications` (`read`): List all event notification rules for a bucket.

### Resource `r2.buckets.locks`:

- `update_buckets_r2_locks` (`write`): Set lock rules for a bucket
- `get_buckets_r2_locks` (`read`): Get lock rules for a bucket

### Resource `r2.buckets.metrics`:

- `list_buckets_r2_metrics` (`read`): Get Storage/Object Count Metrics across all buckets in your account. Note that Account-Level Metrics may not immediately reflect the latest data.

### Resource `r2.buckets.sippy`:

- `update_buckets_r2_sippy` (`write`): Sets configuration for Sippy for an existing R2 bucket.
- `delete_buckets_r2_sippy` (`write`): Disables Sippy on this bucket
- `get_buckets_r2_sippy` (`read`): Gets configuration for Sippy for an existing R2 bucket.

### Resource `r2.temporary_credentials`:

- `create_r2_temporary_credentials` (`write`): Creates temporary access credentials on a bucket that can be optionally scoped to prefixes or objects.

### Resource `r2.super_slurper.jobs`:

- `create_super_slurper_r2_jobs` (`write`): Create a job
- `list_super_slurper_r2_jobs` (`read`): List jobs
- `abort_super_slurper_r2_jobs` (`write`): Abort a job
- `abort_all_super_slurper_r2_jobs` (`write`): Abort all jobs
- `get_super_slurper_r2_jobs` (`read`): Get job details
- `pause_super_slurper_r2_jobs` (`write`): Pause a job
- `progress_super_slurper_r2_jobs` (`read`): Get job progress
- `resume_super_slurper_r2_jobs` (`write`): Resume a job

### Resource `r2.super_slurper.jobs.logs`:

- `list_jobs_super_slurper_r2_logs` (`read`): Get job logs

### Resource `r2.super_slurper.connectivity_precheck`:

- `source_super_slurper_r2_connectivity_precheck` (`write`): Check whether tokens are valid against the source bucket
- `target_super_slurper_r2_connectivity_precheck` (`write`): Check whether tokens are valid against the target bucket

### Resource `workers_for_platforms.dispatch.namespaces`:

- `create_dispatch_workers_for_platforms_namespaces` (`write`): Create a new Workers for Platforms namespace.
- `list_dispatch_workers_for_platforms_namespaces` (`read`): Fetch a list of Workers for Platforms namespaces.
- `delete_dispatch_workers_for_platforms_namespaces` (`write`): Delete a Workers for Platforms namespace.
- `get_dispatch_workers_for_platforms_namespaces` (`read`): Get a Workers for Platforms namespace.

### Resource `workers_for_platforms.dispatch.namespaces.scripts`:

- `update_namespaces_dispatch_workers_for_platforms_scripts` (`write`): Upload a worker module to a Workers for Platforms namespace. You can find more about the multipart metadata on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/.
- `delete_namespaces_dispatch_workers_for_platforms_scripts` (`write`): Delete a worker from a Workers for Platforms namespace. This call has no response body on a successful delete.
- `get_namespaces_dispatch_workers_for_platforms_scripts` (`read`): Fetch information about a script uploaded to a Workers for Platforms namespace.

### Resource `workers_for_platforms.dispatch.namespaces.scripts.asset_upload`:

- `create_scripts_namespaces_dispatch_workers_for_platforms_asset_upload` (`write`): Start uploading a collection of assets for use in a Worker version. To learn more about the direct uploads of assets, see https://developers.cloudflare.com/workers/static-assets/direct-upload/

### Resource `workers_for_platforms.dispatch.namespaces.scripts.content`:

- `update_scripts_namespaces_dispatch_workers_for_platforms_content` (`write`): Put script content for a script uploaded to a Workers for Platforms namespace.
- `get_scripts_namespaces_dispatch_workers_for_platforms_content` (`read`): Fetch script content from a script uploaded to a Workers for Platforms namespace.

### Resource `workers_for_platforms.dispatch.namespaces.scripts.settings`:

- `edit_scripts_namespaces_dispatch_workers_for_platforms_settings` (`write`): Patch script metadata, such as bindings
- `get_scripts_namespaces_dispatch_workers_for_platforms_settings` (`read`): Get script settings from a script uploaded to a Workers for Platforms namespace.

### Resource `workers_for_platforms.dispatch.namespaces.scripts.bindings`:

- `get_scripts_namespaces_dispatch_workers_for_platforms_bindings` (`read`): Fetch script bindings from a script uploaded to a Workers for Platforms namespace.

### Resource `workers_for_platforms.dispatch.namespaces.scripts.secrets`:

- `update_scripts_namespaces_dispatch_workers_for_platforms_secrets` (`write`): Add a secret to a script uploaded to a Workers for Platforms namespace.
- `list_scripts_namespaces_dispatch_workers_for_platforms_secrets` (`read`): List secrets bound to a script uploaded to a Workers for Platforms namespace.
- `delete_scripts_namespaces_dispatch_workers_for_platforms_secrets` (`write`): Remove a secret from a script uploaded to a Workers for Platforms namespace.
- `get_scripts_namespaces_dispatch_workers_for_platforms_secrets` (`read`): Get a given secret binding (value omitted) on a script uploaded to a Workers for Platforms namespace.

### Resource `workers_for_platforms.dispatch.namespaces.scripts.tags`:

- `update_scripts_namespaces_dispatch_workers_for_platforms_tags` (`write`): Put script tags for a script uploaded to a Workers for Platforms namespace.
- `list_scripts_namespaces_dispatch_workers_for_platforms_tags` (`read`): Fetch tags from a script uploaded to a Workers for Platforms namespace.
- `delete_scripts_namespaces_dispatch_workers_for_platforms_tags` (`write`): Delete script tag for a script uploaded to a Workers for Platforms namespace.

### Resource `zero_trust.devices`:

- `list_zero_trust_devices` (`read`): List WARP registrations.

**Deprecated**: please use one of the following endpoints instead:

- GET /accounts/{account_id}/devices/physical-devices
- GET /accounts/{account_id}/devices/registrations

* `get_zero_trust_devices` (`read`): Fetches a single WARP registration.

**Deprecated**: please use one of the following endpoints instead:

- GET /accounts/{account_id}/devices/physical-devices/{device_id}
- GET /accounts/{account_id}/devices/registrations/{registration_id}

### Resource `zero_trust.devices.resilience.global_warp_override`:

- `create_resilience_devices_zero_trust_global_warp_override` (`write`): Sets the Global WARP override state.
- `get_resilience_devices_zero_trust_global_warp_override` (`read`): Fetch the Global WARP override state

### Resource `zero_trust.devices.registrations`:

- `list_devices_zero_trust_registrations` (`read`): List WARP registrations.
- `delete_devices_zero_trust_registrations` (`write`): Deletes a WARP registration.
- `bulk_delete_devices_zero_trust_registrations` (`write`): Deletes a list of WARP registrations.
- `get_devices_zero_trust_registrations` (`read`): Fetches a single WARP registration.
- `revoke_devices_zero_trust_registrations` (`write`): Revokes a list of WARP registrations.
- `unrevoke_devices_zero_trust_registrations` (`write`): Unrevokes a list of WARP registrations.

### Resource `zero_trust.devices.dex_tests`:

- `create_devices_zero_trust_dex_tests` (`write`): Create a DEX test.
- `update_devices_zero_trust_dex_tests` (`write`): Update a DEX test.
- `list_devices_zero_trust_dex_tests` (`read`): Fetch all DEX tests.
- `delete_devices_zero_trust_dex_tests` (`write`): Delete a Device DEX test. Returns the remaining device dex tests for the account.
- `get_devices_zero_trust_dex_tests` (`read`): Fetch a single DEX test.

### Resource `zero_trust.devices.networks`:

- `create_devices_zero_trust_networks` (`write`): Creates a new device managed network.
- `update_devices_zero_trust_networks` (`write`): Updates a configured device managed network.
- `list_devices_zero_trust_networks` (`read`): Fetches a list of managed networks for an account.
- `delete_devices_zero_trust_networks` (`write`): Deletes a device managed network and fetches a list of the remaining device managed networks for an account.
- `get_devices_zero_trust_networks` (`read`): Fetches details for a single managed network.

### Resource `zero_trust.devices.fleet_status`:

- `get_devices_zero_trust_fleet_status` (`read`): Get the live status of a latest device given device_id from the device_state table

### Resource `zero_trust.devices.policies.default`:

- `edit_policies_devices_zero_trust_default` (`write`): Updates the default device settings profile for an account.
- `get_policies_devices_zero_trust_default` (`read`): Fetches the default device settings profile for an account.

### Resource `zero_trust.devices.policies.default.excludes`:

- `update_default_policies_devices_zero_trust_excludes` (`write`): Sets the list of routes excluded from the WARP client's tunnel.
- `get_default_policies_devices_zero_trust_excludes` (`read`): Fetches the list of routes excluded from the WARP client's tunnel.

### Resource `zero_trust.devices.policies.default.includes`:

- `update_default_policies_devices_zero_trust_includes` (`write`): Sets the list of routes included in the WARP client's tunnel.
- `get_default_policies_devices_zero_trust_includes` (`read`): Fetches the list of routes included in the WARP client's tunnel.

### Resource `zero_trust.devices.policies.default.fallback_domains`:

- `update_default_policies_devices_zero_trust_fallback_domains` (`write`): Sets the list of domains to bypass Gateway DNS resolution. These domains will use the specified local DNS resolver instead.
- `get_default_policies_devices_zero_trust_fallback_domains` (`read`): Fetches a list of domains to bypass Gateway DNS resolution. These domains will use the specified local DNS resolver instead.

### Resource `zero_trust.devices.policies.default.certificates`:

- `edit_default_policies_devices_zero_trust_certificates` (`write`): Enable Zero Trust Clients to provision a certificate, containing a x509 subject, and referenced by Access device posture policies when the client visits MTLS protected domains. This facilitates device posture without a WARP session.
- `get_default_policies_devices_zero_trust_certificates` (`read`): Fetches device certificate provisioning

### Resource `zero_trust.devices.policies.custom`:

- `create_policies_devices_zero_trust_custom` (`write`): Creates a device settings profile to be applied to certain devices matching the criteria.
- `list_policies_devices_zero_trust_custom` (`read`): Fetches a list of the device settings profiles for an account.
- `delete_policies_devices_zero_trust_custom` (`write`): Deletes a device settings profile and fetches a list of the remaining profiles for an account.
- `edit_policies_devices_zero_trust_custom` (`write`): Updates a configured device settings profile.
- `get_policies_devices_zero_trust_custom` (`read`): Fetches a device settings profile by ID.

### Resource `zero_trust.devices.policies.custom.excludes`:

- `update_custom_policies_devices_zero_trust_excludes` (`write`): Sets the list of routes excluded from the WARP client's tunnel for a specific device settings profile.
- `get_custom_policies_devices_zero_trust_excludes` (`read`): Fetches the list of routes excluded from the WARP client's tunnel for a specific device settings profile.

### Resource `zero_trust.devices.policies.custom.includes`:

- `update_custom_policies_devices_zero_trust_includes` (`write`): Sets the list of routes included in the WARP client's tunnel for a specific device settings profile.
- `get_custom_policies_devices_zero_trust_includes` (`read`): Fetches the list of routes included in the WARP client's tunnel for a specific device settings profile.

### Resource `zero_trust.devices.policies.custom.fallback_domains`:

- `update_custom_policies_devices_zero_trust_fallback_domains` (`write`): Sets the list of domains to bypass Gateway DNS resolution. These domains will use the specified local DNS resolver instead. This will only apply to the specified device settings profile.
- `get_custom_policies_devices_zero_trust_fallback_domains` (`read`): Fetches the list of domains to bypass Gateway DNS resolution from a specified device settings profile. These domains will use the specified local DNS resolver instead.

### Resource `zero_trust.devices.posture`:

- `create_devices_zero_trust_posture` (`write`): Creates a new device posture rule.
- `update_devices_zero_trust_posture` (`write`): Updates a device posture rule.
- `list_devices_zero_trust_posture` (`read`): Fetches device posture rules for a Zero Trust account.
- `delete_devices_zero_trust_posture` (`write`): Deletes a device posture rule.
- `get_devices_zero_trust_posture` (`read`): Fetches a single device posture rule.

### Resource `zero_trust.devices.posture.integrations`:

- `create_posture_devices_zero_trust_integrations` (`write`): Create a new device posture integration.
- `list_posture_devices_zero_trust_integrations` (`read`): Fetches the list of device posture integrations for an account.
- `delete_posture_devices_zero_trust_integrations` (`write`): Delete a configured device posture integration.
- `edit_posture_devices_zero_trust_integrations` (`write`): Updates a configured device posture integration.
- `get_posture_devices_zero_trust_integrations` (`read`): Fetches details for a single device posture integration.

### Resource `zero_trust.devices.revoke`:

- `create_devices_zero_trust_revoke` (`write`): Revokes a list of registrations.

**Deprecated**: please use POST /accounts/{account_id}/devices/registrations/revoke instead.

### Resource `zero_trust.devices.settings`:

- `update_devices_zero_trust_settings` (`write`): Updates the current device settings for a Zero Trust account.
- `list_devices_zero_trust_settings` (`read`): Describes the current device settings for a Zero Trust account.
- `edit_devices_zero_trust_settings` (`write`): Patches the current device settings for a Zero Trust account.

### Resource `zero_trust.devices.unrevoke`:

- `create_devices_zero_trust_unrevoke` (`write`): Unrevokes a list of registrations.

**Deprecated**: please use POST /accounts/{account_id}/devices/registrations/unrevoke instead.

### Resource `zero_trust.devices.override_codes`:

- `list_devices_zero_trust_override_codes` (`read`): Fetches a one-time use admin override code for a registration. This relies on the **Admin Override** setting being enabled in your device configuration.

**Deprecated:** please use GET /accounts/{account_id}/devices/registrations/{registration_id}/override_codes instead.

- `get_devices_zero_trust_override_codes` (`read`): Fetches one-time use admin override codes for a registration. This relies on the **Admin Override** setting being enabled in your device configuration.

### Resource `zero_trust.identity_providers`:

- `create_zero_trust_identity_providers` (`write`): Adds a new identity provider to Access.
- `update_zero_trust_identity_providers` (`write`): Updates a configured identity provider.
- `list_zero_trust_identity_providers` (`read`): Lists all configured identity providers.
- `delete_zero_trust_identity_providers` (`write`): Deletes an identity provider from Access.
- `get_zero_trust_identity_providers` (`read`): Fetches a configured identity provider.

### Resource `zero_trust.identity_providers.scim.groups`:

- `list_scim_identity_providers_zero_trust_groups` (`read`): Lists SCIM Group resources synced to Cloudflare via the System for Cross-domain Identity Management (SCIM).

### Resource `zero_trust.identity_providers.scim.users`:

- `list_scim_identity_providers_zero_trust_users` (`read`): Lists SCIM User resources synced to Cloudflare via the System for Cross-domain Identity Management (SCIM).

### Resource `zero_trust.organizations`:

- `create_zero_trust_organizations` (`write`): Sets up a Zero Trust organization for your account or zone.
- `update_zero_trust_organizations` (`write`): Updates the configuration for your Zero Trust organization.
- `list_zero_trust_organizations` (`read`): Returns the configuration for your Zero Trust organization.
- `revoke_users_zero_trust_organizations` (`write`): Revokes a user's access across all applications.

### Resource `zero_trust.organizations.doh`:

- `update_organizations_zero_trust_doh` (`write`): Updates the DoH settings for your Zero Trust organization.
- `get_organizations_zero_trust_doh` (`read`): Returns the DoH settings for your Zero Trust organization.

### Resource `zero_trust.seats`:

- `edit_zero_trust_seats` (`write`): Removes a user from a Zero Trust seat when both `access_seat` and `gateway_seat` are set to false.

### Resource `zero_trust.access.gateway_ca`:

- `create_access_zero_trust_gateway_ca` (`write`): Adds a new SSH Certificate Authority (CA).
- `list_access_zero_trust_gateway_ca` (`read`): Lists SSH Certificate Authorities (CA).
- `delete_access_zero_trust_gateway_ca` (`write`): Deletes an SSH Certificate Authority.

### Resource `zero_trust.access.infrastructure.targets`:

- `create_infrastructure_access_zero_trust_targets` (`write`): Create new target
- `update_infrastructure_access_zero_trust_targets` (`write`): Update target
- `list_infrastructure_access_zero_trust_targets` (`read`): Lists and sorts an account’s targets. Filters are optional and are ANDed
  together.
- `delete_infrastructure_access_zero_trust_targets` (`write`): Delete target
- `bulk_delete_infrastructure_access_zero_trust_targets` (`write`): Removes one or more targets.
- `bulk_update_infrastructure_access_zero_trust_targets` (`write`): Adds one or more targets.
- `get_infrastructure_access_zero_trust_targets` (`read`): Get target

### Resource `zero_trust.access.applications`:

- `create_access_zero_trust_applications` (`write`): Adds a new application to Access.
- `update_access_zero_trust_applications` (`write`): Updates an Access application.
- `list_access_zero_trust_applications` (`read`): Lists all Access applications in an account or zone.
- `delete_access_zero_trust_applications` (`write`): Deletes an application from Access.
- `get_access_zero_trust_applications` (`read`): Fetches information about an Access application.
- `revoke_tokens_access_zero_trust_applications` (`write`): Revokes all tokens issued for an application.

### Resource `zero_trust.access.applications.cas`:

- `create_applications_access_zero_trust_cas` (`write`): Generates a new short-lived certificate CA and public key.
- `list_applications_access_zero_trust_cas` (`read`): Lists short-lived certificate CAs and their public keys.
- `delete_applications_access_zero_trust_cas` (`write`): Deletes a short-lived certificate CA.
- `get_applications_access_zero_trust_cas` (`read`): Fetches a short-lived certificate CA and its public key.

### Resource `zero_trust.access.applications.user_policy_checks`:

- `list_applications_access_zero_trust_user_policy_checks` (`read`): Tests if a specific user has permission to access an application.

### Resource `zero_trust.access.applications.policies`:

- `create_applications_access_zero_trust_policies` (`write`): Creates a policy applying exclusive to a single application that defines the users or groups who can reach it. We recommend creating a reusable policy instead and subsequently referencing its ID in the application's 'policies' array.
- `update_applications_access_zero_trust_policies` (`write`): Updates an Access policy specific to an application. To update a reusable policy, use the /account or zones/{account or zone_id}/policies/{uid} endpoint.
- `list_applications_access_zero_trust_policies` (`read`): Lists Access policies configured for an application. Returns both exclusively scoped and reusable policies used by the application.
- `delete_applications_access_zero_trust_policies` (`write`): Deletes an Access policy specific to an application. To delete a reusable policy, use the /account or zones/{account or zone_id}/policies/{uid} endpoint.
- `get_applications_access_zero_trust_policies` (`read`): Fetches a single Access policy configured for an application. Returns both exclusively owned and reusable policies used by the application.

### Resource `zero_trust.access.applications.policy_tests`:

- `create_applications_access_zero_trust_policy_tests` (`write`): Starts an Access policy test.
- `get_applications_access_zero_trust_policy_tests` (`read`): Fetches the current status of a given Access policy test.

### Resource `zero_trust.access.applications.policy_tests.users`:

- `list_policy_tests_applications_access_zero_trust_users` (`read`): Fetches a single page of user results from an Access policy test.

### Resource `zero_trust.access.certificates`:

- `create_access_zero_trust_certificates` (`write`): Adds a new mTLS root certificate to Access.
- `update_access_zero_trust_certificates` (`write`): Updates a configured mTLS certificate.
- `list_access_zero_trust_certificates` (`read`): Lists all mTLS root certificates.
- `delete_access_zero_trust_certificates` (`write`): Deletes an mTLS certificate.
- `get_access_zero_trust_certificates` (`read`): Fetches a single mTLS certificate.

### Resource `zero_trust.access.certificates.settings`:

- `update_certificates_access_zero_trust_settings` (`write`): Updates an mTLS certificate's hostname settings.
- `get_certificates_access_zero_trust_settings` (`read`): List all mTLS hostname settings for this account or zone.

### Resource `zero_trust.access.groups`:

- `create_access_zero_trust_groups` (`write`): Creates a new Access group.
- `update_access_zero_trust_groups` (`write`): Updates a configured Access group.
- `list_access_zero_trust_groups` (`read`): Lists all Access groups.
- `delete_access_zero_trust_groups` (`write`): Deletes an Access group.
- `get_access_zero_trust_groups` (`read`): Fetches a single Access group.

### Resource `zero_trust.access.service_tokens`:

- `create_access_zero_trust_service_tokens` (`write`): Generates a new service token. **Note:** This is the only time you can get the Client Secret. If you lose the Client Secret, you will have to rotate the Client Secret or create a new service token.
- `update_access_zero_trust_service_tokens` (`write`): Updates a configured service token.
- `list_access_zero_trust_service_tokens` (`read`): Lists all service tokens.
- `delete_access_zero_trust_service_tokens` (`write`): Deletes a service token.
- `get_access_zero_trust_service_tokens` (`read`): Fetches a single service token.
- `refresh_access_zero_trust_service_tokens` (`write`): Refreshes the expiration of a service token.
- `rotate_access_zero_trust_service_tokens` (`write`): Generates a new Client Secret for a service token and revokes the old one.

### Resource `zero_trust.access.bookmarks`:

- `create_access_zero_trust_bookmarks` (`write`): Create a new Bookmark application.
- `update_access_zero_trust_bookmarks` (`write`): Updates a configured Bookmark application.
- `list_access_zero_trust_bookmarks` (`read`): Lists Bookmark applications.
- `delete_access_zero_trust_bookmarks` (`write`): Deletes a Bookmark application.
- `get_access_zero_trust_bookmarks` (`read`): Fetches a single Bookmark application.

### Resource `zero_trust.access.keys`:

- `update_access_zero_trust_keys` (`write`): Updates the Access key rotation settings for an account.
- `get_access_zero_trust_keys` (`read`): Gets the Access key rotation settings for an account.
- `rotate_access_zero_trust_keys` (`write`): Perfoms a key rotation for an account.

### Resource `zero_trust.access.logs.access_requests`:

- `list_logs_access_zero_trust_access_requests` (`read`): Gets a list of Access authentication audit logs for an account.

### Resource `zero_trust.access.logs.scim.updates`:

- `list_scim_logs_access_zero_trust_updates` (`read`): Lists Access SCIM update logs that maintain a record of updates made to User and Group resources synced to Cloudflare via the System for Cross-domain Identity Management (SCIM).

### Resource `zero_trust.access.users`:

- `list_access_zero_trust_users` (`read`): Gets a list of users for an account.

### Resource `zero_trust.access.users.active_sessions`:

- `list_users_access_zero_trust_active_sessions` (`read`): Get active sessions for a single user.
- `get_users_access_zero_trust_active_sessions` (`read`): Get an active session for a single user.

### Resource `zero_trust.access.users.last_seen_identity`:

- `get_users_access_zero_trust_last_seen_identity` (`read`): Get last seen identity for a single user.

### Resource `zero_trust.access.users.failed_logins`:

- `list_users_access_zero_trust_failed_logins` (`read`): Get all failed login attempts for a single user.

### Resource `zero_trust.access.custom_pages`:

- `create_access_zero_trust_custom_pages` (`write`): Create a custom page
- `update_access_zero_trust_custom_pages` (`write`): Update a custom page
- `list_access_zero_trust_custom_pages` (`read`): List custom pages
- `delete_access_zero_trust_custom_pages` (`write`): Delete a custom page
- `get_access_zero_trust_custom_pages` (`read`): Fetches a custom page and also returns its HTML.

### Resource `zero_trust.access.tags`:

- `create_access_zero_trust_tags` (`write`): Create a tag
- `update_access_zero_trust_tags` (`write`): Update a tag
- `list_access_zero_trust_tags` (`read`): List tags
- `delete_access_zero_trust_tags` (`write`): Delete a tag
- `get_access_zero_trust_tags` (`read`): Get a tag

### Resource `zero_trust.access.policies`:

- `create_access_zero_trust_policies` (`write`): Creates a new Access reusable policy.
- `update_access_zero_trust_policies` (`write`): Updates a Access reusable policy.
- `list_access_zero_trust_policies` (`read`): Lists Access reusable policies.
- `delete_access_zero_trust_policies` (`write`): Deletes an Access reusable policy.
- `get_access_zero_trust_policies` (`read`): Fetches a single Access reusable policy.

### Resource `zero_trust.dex.commands`:

- `create_dex_zero_trust_commands` (`write`): Initiate commands for up to 10 devices per account
- `list_dex_zero_trust_commands` (`read`): Retrieves a paginated list of commands issued to devices under the specified account, optionally filtered by time range, device, or other parameters

### Resource `zero_trust.dex.commands.devices`:

- `list_commands_dex_zero_trust_devices` (`read`): List devices with WARP client support for remote captures which have been connected in the last 1 hour.

### Resource `zero_trust.dex.commands.downloads`:

- `get_commands_dex_zero_trust_downloads` (`read`): Downloads artifacts for an executed command. Bulk downloads are not supported

### Resource `zero_trust.dex.commands.quota`:

- `get_commands_dex_zero_trust_quota` (`read`): Retrieves the current quota usage and limits for device commands within a specific account, including the time when the quota will reset

### Resource `zero_trust.dex.colos`:

- `list_dex_zero_trust_colos` (`read`): List Cloudflare colos that account's devices were connected to during a time period, sorted by usage starting from the most used colo. Colos without traffic are also returned and sorted alphabetically.

### Resource `zero_trust.dex.fleet_status`:

- `live_dex_zero_trust_fleet_status` (`read`): List details for live (up to 60 minutes) devices using WARP
- `over_time_dex_zero_trust_fleet_status` (`read`): List details for devices using WARP, up to 7 days

### Resource `zero_trust.dex.fleet_status.devices`:

- `list_fleet_status_dex_zero_trust_devices` (`read`): List details for devices using WARP

### Resource `zero_trust.dex.http_tests`:

- `get_dex_zero_trust_http_tests` (`read`): Get test details and aggregate performance metrics for an http test for a given time period between 1 hour and 7 days.

### Resource `zero_trust.dex.http_tests.percentiles`:

- `get_http_tests_dex_zero_trust_percentiles` (`read`): Get percentiles for an http test for a given time period between 1 hour and 7 days.

### Resource `zero_trust.dex.tests`:

- `list_dex_zero_trust_tests` (`read`): List DEX tests with overview metrics

### Resource `zero_trust.dex.tests.unique_devices`:

- `list_tests_dex_zero_trust_unique_devices` (`read`): Returns unique count of devices that have run synthetic application monitoring tests in the past 7 days.

### Resource `zero_trust.dex.traceroute_test_results.network_path`:

- `get_traceroute_test_results_dex_zero_trust_network_path` (`read`): Get a breakdown of hops and performance metrics for a specific traceroute test run

### Resource `zero_trust.dex.traceroute_tests`:

- `get_dex_zero_trust_traceroute_tests` (`read`): Get test details and aggregate performance metrics for an traceroute test for a given time period between 1 hour and 7 days.
- `network_path_dex_zero_trust_traceroute_tests` (`read`): Get a breakdown of metrics by hop for individual traceroute test runs
- `percentiles_dex_zero_trust_traceroute_tests` (`read`): Get percentiles for a traceroute test for a given time period between 1 hour and 7 days.

### Resource `zero_trust.tunnels`:

- `list_zero_trust_tunnels` (`read`): Lists and filters all types of Tunnels in an account.

### Resource `zero_trust.tunnels.cloudflared`:

- `create_tunnels_zero_trust_cloudflared` (`write`): Creates a new Cloudflare Tunnel in an account.
- `list_tunnels_zero_trust_cloudflared` (`read`): Lists and filters Cloudflare Tunnels in an account.
- `delete_tunnels_zero_trust_cloudflared` (`write`): Deletes a Cloudflare Tunnel from an account.
- `edit_tunnels_zero_trust_cloudflared` (`write`): Updates an existing Cloudflare Tunnel.
- `get_tunnels_zero_trust_cloudflared` (`read`): Fetches a single Cloudflare Tunnel.

### Resource `zero_trust.tunnels.cloudflared.configurations`:

- `update_cloudflared_tunnels_zero_trust_configurations` (`write`): Adds or updates the configuration for a remotely-managed tunnel.
- `get_cloudflared_tunnels_zero_trust_configurations` (`read`): Gets the configuration for a remotely-managed tunnel

### Resource `zero_trust.tunnels.cloudflared.connections`:

- `delete_cloudflared_tunnels_zero_trust_connections` (`write`): Removes a connection (aka Cloudflare Tunnel Connector) from a Cloudflare Tunnel independently of its current state. If no connector id (client_id) is provided all connectors will be removed. We recommend running this command after rotating tokens.
- `get_cloudflared_tunnels_zero_trust_connections` (`read`): Fetches connection details for a Cloudflare Tunnel.

### Resource `zero_trust.tunnels.cloudflared.token`:

- `get_cloudflared_tunnels_zero_trust_token` (`read`): Gets the token used to associate cloudflared with a specific tunnel.

### Resource `zero_trust.tunnels.cloudflared.connectors`:

- `get_cloudflared_tunnels_zero_trust_connectors` (`read`): Fetches connector and connection details for a Cloudflare Tunnel.

### Resource `zero_trust.tunnels.cloudflared.management`:

- `create_cloudflared_tunnels_zero_trust_management` (`write`): Gets a management token used to access the management resources (i.e. Streaming Logs) of a tunnel.

### Resource `zero_trust.tunnels.warp_connector`:

- `create_tunnels_zero_trust_warp_connector` (`write`): Creates a new Warp Connector Tunnel in an account.
- `list_tunnels_zero_trust_warp_connector` (`read`): Lists and filters Warp Connector Tunnels in an account.
- `delete_tunnels_zero_trust_warp_connector` (`write`): Deletes a Warp Connector Tunnel from an account.
- `edit_tunnels_zero_trust_warp_connector` (`write`): Updates an existing Warp Connector Tunnel.
- `get_tunnels_zero_trust_warp_connector` (`read`): Fetches a single Warp Connector Tunnel.

### Resource `zero_trust.tunnels.warp_connector.token`:

- `get_warp_connector_tunnels_zero_trust_token` (`read`): Gets the token used to associate warp device with a specific Warp Connector tunnel.

### Resource `zero_trust.connectivity_settings`:

- `edit_zero_trust_connectivity_settings` (`write`): Updates the Zero Trust Connectivity Settings for the given account.
- `get_zero_trust_connectivity_settings` (`read`): Gets the Zero Trust Connectivity Settings for the given account.

### Resource `zero_trust.dlp.datasets`:

- `create_dlp_zero_trust_datasets` (`write`): Create a new dataset
- `update_dlp_zero_trust_datasets` (`write`): Update details about a dataset
- `list_dlp_zero_trust_datasets` (`read`): Fetch all datasets
- `delete_dlp_zero_trust_datasets` (`write`): This deletes all versions of the dataset.
- `get_dlp_zero_trust_datasets` (`read`): Fetch a specific dataset

### Resource `zero_trust.dlp.datasets.upload`:

- `create_datasets_dlp_zero_trust_upload` (`write`): Prepare to upload a new version of a dataset
- `edit_datasets_dlp_zero_trust_upload` (`write`): This is used for single-column EDMv1 and Custom Word Lists. The EDM format
  can only be created in the Cloudflare dashboard. For other clients, this
  operation can only be used for non-secret Custom Word Lists. The body must
  be a UTF-8 encoded, newline (NL or CRNL) separated list of words to be matched.

### Resource `zero_trust.dlp.datasets.versions`:

- `create_datasets_dlp_zero_trust_versions` (`write`): This is used for multi-column EDMv2 datasets. The EDMv2 format can only be
  created in the Cloudflare dashboard. The columns in the response appear in
  the same order as in the request.

### Resource `zero_trust.dlp.datasets.versions.entries`:

- `create_versions_datasets_dlp_zero_trust_entries` (`write`): This is used for multi-column EDMv2 datasets. The EDMv2 format can only be
  created in the Cloudflare dashboard.

### Resource `zero_trust.dlp.patterns`:

- `validate_dlp_zero_trust_patterns` (`write`): Validates whether this pattern is a valid regular expression. Rejects it if
  the regular expression is too complex or can match an unbounded-length
  string. The regex will be rejected if it uses `*` or `+`. Bound the maximum
  number of characters that can be matched using a range, e.g. `{1,100}`.

### Resource `zero_trust.dlp.payload_logs`:

- `update_dlp_zero_trust_payload_logs` (`write`): Set payload log settings
- `get_dlp_zero_trust_payload_logs` (`read`): Get payload log settings

### Resource `zero_trust.dlp.email.account_mapping`:

- `create_email_dlp_zero_trust_account_mapping` (`write`): Create mapping
- `get_email_dlp_zero_trust_account_mapping` (`read`): Get mapping

### Resource `zero_trust.dlp.email.rules`:

- `create_email_dlp_zero_trust_rules` (`write`): Create email scanner rule
- `update_email_dlp_zero_trust_rules` (`write`): Update email scanner rule
- `list_email_dlp_zero_trust_rules` (`read`): Lists all email scanner rules for an account.
- `delete_email_dlp_zero_trust_rules` (`write`): Delete email scanner rule
- `bulk_edit_email_dlp_zero_trust_rules` (`write`): Update email scanner rule priorities
- `get_email_dlp_zero_trust_rules` (`read`): Get an email scanner rule

### Resource `zero_trust.dlp.profiles`:

- `list_dlp_zero_trust_profiles` (`read`): Lists all DLP profiles in an account.
- `get_dlp_zero_trust_profiles` (`read`): Fetches a DLP profile by ID

### Resource `zero_trust.dlp.profiles.custom`:

- `create_profiles_dlp_zero_trust_custom` (`write`): Creates a DLP custom profile.
- `update_profiles_dlp_zero_trust_custom` (`write`): Updates a DLP custom profile.
- `delete_profiles_dlp_zero_trust_custom` (`write`): Deletes a DLP custom profile.
- `get_profiles_dlp_zero_trust_custom` (`read`): Fetches a custom DLP profile by id.

### Resource `zero_trust.dlp.profiles.predefined`:

- `update_profiles_dlp_zero_trust_predefined` (`write`): Updates a DLP predefined profile. Only supports enabling/disabling entries.
- `get_profiles_dlp_zero_trust_predefined` (`read`): Fetches a predefined DLP profile by id.

### Resource `zero_trust.dlp.limits`:

- `list_dlp_zero_trust_limits` (`read`): Fetch limits associated with DLP for account

### Resource `zero_trust.dlp.entries`:

- `create_dlp_zero_trust_entries` (`write`): Creates a DLP custom entry.
- `update_dlp_zero_trust_entries` (`write`): Updates a DLP entry.
- `list_dlp_zero_trust_entries` (`read`): Lists all DLP entries in an account.
- `delete_dlp_zero_trust_entries` (`write`): Deletes a DLP custom entry.
- `get_dlp_zero_trust_entries` (`read`): Fetches a DLP entry by ID

### Resource `zero_trust.gateway`:

- `create_zero_trust_gateway` (`write`): Creates a Zero Trust account with an existing Cloudflare account.
- `list_zero_trust_gateway` (`read`): Gets information about the current Zero Trust account.

### Resource `zero_trust.gateway.audit_ssh_settings`:

- `update_gateway_zero_trust_audit_ssh_settings` (`write`): Updates Zero Trust Audit SSH and SSH with Access for Infrastructure settings for an account.
- `get_gateway_zero_trust_audit_ssh_settings` (`read`): Gets all Zero Trust Audit SSH and SSH with Access for Infrastructure settings for an account.
- `rotate_seed_gateway_zero_trust_audit_ssh_settings` (`write`): Rotates the SSH account seed that is used for generating the host key identity when connecting through the Cloudflare SSH Proxy.

### Resource `zero_trust.gateway.categories`:

- `list_gateway_zero_trust_categories` (`read`): Fetches a list of all categories.

### Resource `zero_trust.gateway.app_types`:

- `list_gateway_zero_trust_app_types` (`read`): Fetches all application and application type mappings.

### Resource `zero_trust.gateway.configurations`:

- `update_gateway_zero_trust_configurations` (`write`): Updates the current Zero Trust account configuration.
- `edit_gateway_zero_trust_configurations` (`write`): Patches the current Zero Trust account configuration. This endpoint can update a single subcollection of settings such as `antivirus`, `tls_decrypt`, `activity_log`, `block_page`, `browser_isolation`, `fips`, `body_scanning`, or `certificate`, without updating the entire configuration object. Returns an error if any collection of settings is not properly configured.
- `get_gateway_zero_trust_configurations` (`read`): Fetches the current Zero Trust account configuration.

### Resource `zero_trust.gateway.configurations.custom_certificate`:

- `get_configurations_gateway_zero_trust_custom_certificate` (`read`): Fetches the current Zero Trust certificate configuration.

### Resource `zero_trust.gateway.lists`:

- `create_gateway_zero_trust_lists` (`write`): Creates a new Zero Trust list.
- `update_gateway_zero_trust_lists` (`write`): Updates a configured Zero Trust list. Skips updating list items if not included in the payload.
- `list_gateway_zero_trust_lists` (`read`): Fetches all Zero Trust lists for an account.
- `delete_gateway_zero_trust_lists` (`write`): Deletes a Zero Trust list.
- `edit_gateway_zero_trust_lists` (`write`): Appends or removes an item from a configured Zero Trust list.
- `get_gateway_zero_trust_lists` (`read`): Fetches a single Zero Trust list.

### Resource `zero_trust.gateway.lists.items`:

- `list_lists_gateway_zero_trust_items` (`read`): Fetches all items in a single Zero Trust list.

### Resource `zero_trust.gateway.locations`:

- `create_gateway_zero_trust_locations` (`write`): Creates a new Zero Trust Gateway location.
- `update_gateway_zero_trust_locations` (`write`): Updates a configured Zero Trust Gateway location.
- `list_gateway_zero_trust_locations` (`read`): Fetches Zero Trust Gateway locations for an account.
- `delete_gateway_zero_trust_locations` (`write`): Deletes a configured Zero Trust Gateway location.
- `get_gateway_zero_trust_locations` (`read`): Fetches a single Zero Trust Gateway location.

### Resource `zero_trust.gateway.logging`:

- `update_gateway_zero_trust_logging` (`write`): Updates logging settings for the current Zero Trust account.
- `get_gateway_zero_trust_logging` (`read`): Fetches the current logging settings for Zero Trust account.

### Resource `zero_trust.gateway.proxy_endpoints`:

- `create_gateway_zero_trust_proxy_endpoints` (`write`): Creates a new Zero Trust Gateway proxy endpoint.
- `list_gateway_zero_trust_proxy_endpoints` (`read`): Fetches all Zero Trust Gateway proxy endpoints for an account.
- `delete_gateway_zero_trust_proxy_endpoints` (`write`): Deletes a configured Zero Trust Gateway proxy endpoint.
- `edit_gateway_zero_trust_proxy_endpoints` (`write`): Updates a configured Zero Trust Gateway proxy endpoint.
- `get_gateway_zero_trust_proxy_endpoints` (`read`): Fetches a single Zero Trust Gateway proxy endpoint.

### Resource `zero_trust.gateway.rules`:

- `create_gateway_zero_trust_rules` (`write`): Creates a new Zero Trust Gateway rule.
- `update_gateway_zero_trust_rules` (`write`): Updates a configured Zero Trust Gateway rule.
- `list_gateway_zero_trust_rules` (`read`): Fetches the Zero Trust Gateway rules for an account.
- `delete_gateway_zero_trust_rules` (`write`): Deletes a Zero Trust Gateway rule.
- `get_gateway_zero_trust_rules` (`read`): Fetches a single Zero Trust Gateway rule.
- `reset_expiration_gateway_zero_trust_rules` (`write`): Resets the expiration of a Zero Trust Gateway Rule if its duration has elapsed and it has a default duration.

The Zero Trust Gateway Rule must have values for both `expiration.expires_at` and `expiration.duration`.

### Resource `zero_trust.gateway.certificates`:

- `create_gateway_zero_trust_certificates` (`write`): Creates a new Zero Trust certificate.
- `list_gateway_zero_trust_certificates` (`read`): Fetches all Zero Trust certificates for an account.
- `delete_gateway_zero_trust_certificates` (`write`): Deletes a gateway-managed Zero Trust certificate. A certificate must be deactivated from the edge (inactive) before it is deleted.
- `activate_gateway_zero_trust_certificates` (`write`): Binds a single Zero Trust certificate to the edge.
- `deactivate_gateway_zero_trust_certificates` (`write`): Unbinds a single Zero Trust certificate from the edge
- `get_gateway_zero_trust_certificates` (`read`): Fetches a single Zero Trust certificate.

### Resource `zero_trust.networks.routes`:

- `create_networks_zero_trust_routes` (`write`): Routes a private network through a Cloudflare Tunnel.
- `list_networks_zero_trust_routes` (`read`): Lists and filters private network routes in an account.
- `delete_networks_zero_trust_routes` (`write`): Deletes a private network route from an account.
- `edit_networks_zero_trust_routes` (`write`): Updates an existing private network route in an account. The fields that are meant to be updated should be provided in the body of the request.
- `get_networks_zero_trust_routes` (`read`): Get a private network route in an account.

### Resource `zero_trust.networks.routes.ips`:

- `get_routes_networks_zero_trust_ips` (`read`): Fetches routes that contain the given IP address.

### Resource `zero_trust.networks.routes.networks`:

- `create_routes_networks_zero_trust_networks` (`write`): Routes a private network through a Cloudflare Tunnel. The CIDR in `ip_network_encoded` must be written in URL-encoded format.
- `delete_routes_networks_zero_trust_networks` (`write`): Deletes a private network route from an account. The CIDR in `ip_network_encoded` must be written in URL-encoded format. If no virtual_network_id is provided it will delete the route from the default vnet. If no tun_type is provided it will fetch the type from the tunnel_id or if that is missing it will assume Cloudflare Tunnel as default. If tunnel_id is provided it will delete the route from that tunnel, otherwise it will delete the route based on the vnet and tun_type.
- `edit_routes_networks_zero_trust_networks` (`write`): Updates an existing private network route in an account. The CIDR in `ip_network_encoded` must be written in URL-encoded format.

### Resource `zero_trust.networks.virtual_networks`:

- `create_networks_zero_trust_virtual_networks` (`write`): Adds a new virtual network to an account.
- `list_networks_zero_trust_virtual_networks` (`read`): Lists and filters virtual networks in an account.
- `delete_networks_zero_trust_virtual_networks` (`write`): Deletes an existing virtual network.
- `edit_networks_zero_trust_virtual_networks` (`write`): Updates an existing virtual network.
- `get_networks_zero_trust_virtual_networks` (`read`): Get a virtual network.

### Resource `zero_trust.networks.subnets`:

- `list_networks_zero_trust_subnets` (`read`): Lists and filters subnets in an account.

### Resource `zero_trust.networks.subnets.cloudflare_source`:

- `update_subnets_networks_zero_trust_cloudflare_source` (`write`): Updates the Cloudflare Source subnet of the given address family

### Resource `zero_trust.risk_scoring`:

- `get_zero_trust_risk_scoring` (`read`): Get risk event/score information for a specific user
- `reset_zero_trust_risk_scoring` (`write`): Clear the risk score for a particular user

### Resource `zero_trust.risk_scoring.behaviours`:

- `update_risk_scoring_zero_trust_behaviours` (`write`): Update configuration for risk behaviors
- `get_risk_scoring_zero_trust_behaviours` (`read`): Get all behaviors and associated configuration

### Resource `zero_trust.risk_scoring.summary`:

- `get_risk_scoring_zero_trust_summary` (`read`): Get risk score info for all users in the account

### Resource `zero_trust.risk_scoring.integrations`:

- `create_risk_scoring_zero_trust_integrations` (`write`): Create new risk score integration.
- `update_risk_scoring_zero_trust_integrations` (`write`): Overwrite the reference_id, tenant_url, and active values with the ones provided
- `list_risk_scoring_zero_trust_integrations` (`read`): List all risk score integrations for the account.
- `delete_risk_scoring_zero_trust_integrations` (`write`): Delete a risk score integration.
- `get_risk_scoring_zero_trust_integrations` (`read`): Get risk score integration by id.

### Resource `zero_trust.risk_scoring.integrations.references`:

- `get_integrations_risk_scoring_zero_trust_references` (`read`): Get risk score integration by reference id.

### Resource `turnstile.widgets`:

- `create_turnstile_widgets` (`write`): Lists challenge widgets.
- `update_turnstile_widgets` (`write`): Update the configuration of a widget.
- `list_turnstile_widgets` (`read`): Lists all turnstile widgets of an account.
- `delete_turnstile_widgets` (`write`): Destroy a Turnstile Widget.
- `get_turnstile_widgets` (`read`): Show a single challenge widget configuration.
- `rotate_secret_turnstile_widgets` (`write`): Generate a new secret key for this widget. If `invalidate_immediately`
  is set to `false`, the previous secret remains valid for 2 hours.

Note that secrets cannot be rotated again during the grace period.

### Resource `hyperdrive.configs`:

- `create_hyperdrive_configs` (`write`): Creates and returns a new Hyperdrive configuration.
- `update_hyperdrive_configs` (`write`): Updates and returns the specified Hyperdrive configuration.
- `list_hyperdrive_configs` (`read`): Returns a list of Hyperdrives
- `delete_hyperdrive_configs` (`write`): Deletes the specified Hyperdrive.
- `edit_hyperdrive_configs` (`write`): Patches and returns the specified Hyperdrive configuration. Custom caching settings are not kept if caching is disabled.
- `get_hyperdrive_configs` (`read`): Returns the specified Hyperdrive configuration.

### Resource `rum.site_info`:

- `create_rum_site_info` (`write`): Creates a new Web Analytics site.
- `update_rum_site_info` (`write`): Updates an existing Web Analytics site.
- `list_rum_site_info` (`read`): Lists all Web Analytics sites of an account.
- `delete_rum_site_info` (`write`): Deletes an existing Web Analytics site.
- `get_rum_site_info` (`read`): Retrieves a Web Analytics site.

### Resource `rum.rules`:

- `create_rum_rules` (`write`): Creates a new rule in a Web Analytics ruleset.
- `update_rum_rules` (`write`): Updates a rule in a Web Analytics ruleset.
- `list_rum_rules` (`read`): Lists all the rules in a Web Analytics ruleset.
- `delete_rum_rules` (`write`): Deletes an existing rule from a Web Analytics ruleset.
- `bulk_create_rum_rules` (`write`): Modifies one or more rules in a Web Analytics ruleset with a single request.

### Resource `vectorize.indexes`:

- `create_vectorize_indexes` (`write`): Creates and returns a new Vectorize Index.
- `list_vectorize_indexes` (`read`): Returns a list of Vectorize Indexes
- `delete_vectorize_indexes` (`write`): Deletes the specified Vectorize Index.
- `delete_by_ids_vectorize_indexes` (`write`): Delete a set of vectors from an index by their vector identifiers.
- `get_vectorize_indexes` (`read`): Returns the specified Vectorize Index.
- `get_by_ids_vectorize_indexes` (`write`): Get a set of vectors from an index by their vector identifiers.
- `info_vectorize_indexes` (`read`): Get information about a vectorize index.
- `insert_vectorize_indexes` (`write`): Inserts vectors into the specified index and returns a mutation id corresponding to the vectors enqueued for insertion.
- `query_vectorize_indexes` (`write`): Finds vectors closest to a given vector in an index.
- `upsert_vectorize_indexes` (`write`): Upserts vectors into the specified index, creating them if they do not exist and returns a mutation id corresponding to the vectors enqueued for upsertion.

### Resource `vectorize.indexes.metadata_index`:

- `create_indexes_vectorize_metadata_index` (`write`): Enable metadata filtering based on metadata property. Limited to 10 properties.
- `list_indexes_vectorize_metadata_index` (`read`): List Metadata Indexes for the specified Vectorize Index.
- `delete_indexes_vectorize_metadata_index` (`write`): Allow Vectorize to delete the specified metadata index.

### Resource `url_scanner.responses`:

- `get_url_scanner_responses` (`read`): Returns the raw response of the network request. Find the `response_id` in the `data.requests.response.hash`.

### Resource `url_scanner.scans`:

- `create_url_scanner_scans` (`write`): Submit a URL to scan. Check limits at https://developers.cloudflare.com/security-center/investigate/scan-limits/.
- `list_url_scanner_scans` (`read`): Use a subset of ElasticSearch Query syntax to filter scans. Some example queries:<br/> <br/>- 'path:"/bundles/jquery.js"': Searches for scans who requested resources with the given path.<br/>- 'page.asn:AS24940 AND hash:xxx': Websites hosted in AS24940 where a resource with the given hash was downloaded.<br/>- 'page.domain:microsoft\* AND verdicts.malicious:true AND NOT page.domain:microsoft.com': malicious scans whose hostname starts with "microsoft".<br/>- 'apikey:me AND date:[2025-01 TO 2025-02]': my scans from 2025 January to 2025 February.
- `bulk_create_url_scanner_scans` (`write`): Submit URLs to scan. Check limits at https://developers.cloudflare.com/security-center/investigate/scan-limits/ and take into account scans submitted in bulk have lower priority and may take longer to finish.
- `dom_url_scanner_scans` (`read`): Returns a plain text response, with the scan's DOM content as rendered by Chrome.
- `get_url_scanner_scans` (`read`): Get URL scan by uuid
- `har_url_scanner_scans` (`read`): Get a URL scan's HAR file. See HAR spec at http://www.softwareishard.com/blog/har-12-spec/.
- `screenshot_url_scanner_scans` (`read`): Get scan's screenshot by resolution (desktop/mobile/tablet).

### Resource `radar.ai.to_markdown`:

- `create_ai_radar_to_markdown` (`write`): Convert Files into Markdown

### Resource `radar.ai.inference.summary`:

- `model_inference_ai_radar_summary` (`read`): Retrieves the distribution of unique accounts by model.
- `task_inference_ai_radar_summary` (`read`): Retrieves the distribution of unique accounts by task.

### Resource `radar.ai.inference.timeseries_groups.summary`:

- `model_timeseries_groups_inference_ai_radar_summary` (`read`): Retrieves the distribution of unique accounts by model over time.
- `task_timeseries_groups_inference_ai_radar_summary` (`read`): Retrieves the distribution of unique accounts by task over time.

### Resource `radar.ai.bots.summary`:

- `user_agent_bots_ai_radar_summary` (`read`): Retrieves the distribution of traffic by AI user agent.

### Resource `radar.ai.timeseries_groups`:

- `user_agent_ai_radar_timeseries_groups` (`read`): Retrieves the distribution of traffic by AI user agent over time.

### Resource `radar.annotations`:

- `list_radar_annotations` (`read`): Retrieves the latest annotations.

### Resource `radar.annotations.outages`:

- `get_annotations_radar_outages` (`read`): Retrieves the latest Internet outages and anomalies.
- `locations_annotations_radar_outages` (`read`): Retrieves the number of outages by location.

### Resource `radar.bgp`:

- `timeseries_radar_bgp` (`read`): Retrieves BGP updates over time. When requesting updates for an autonomous system, only BGP updates of type announcement are returned.

### Resource `radar.bgp.leaks.events`:

- `list_leaks_bgp_radar_events` (`read`): Retrieves the BGP route leak events.

### Resource `radar.bgp.top`:

- `prefixes_bgp_radar_top` (`read`): Retrieves the top network prefixes by BGP updates.

### Resource `radar.bgp.top.ases`:

- `get_top_bgp_radar_ases` (`read`): Retrieves the top autonomous systems by BGP updates (announcements only).
- `prefixes_top_bgp_radar_ases` (`read`): Retrieves the full list of autonomous systems on the global routing table ordered by announced prefixes count. The data comes from public BGP MRT data archives and updates every 2 hours.

### Resource `radar.bgp.hijacks.events`:

- `list_hijacks_bgp_radar_events` (`read`): Retrieves the BGP hijack events.

### Resource `radar.bgp.routes`:

- `ases_bgp_radar_routes` (`read`): Retrieves all ASes in the current global routing tables with routing statistics.
- `moas_bgp_radar_routes` (`read`): Retrieves all Multi-Origin AS (MOAS) prefixes in the global routing tables.
- `pfx2as_bgp_radar_routes` (`read`): Retrieves the prefix-to-ASN mapping from global routing tables.
- `realtime_bgp_radar_routes` (`read`): Retrieves realtime routes for prefixes using public realtime data collectors (RouteViews and RIPE RIS).
- `stats_bgp_radar_routes` (`read`): Retrieves the BGP routing table stats.

### Resource `radar.bgp.ips`:

- `timeseries_bgp_radar_ips` (`read`): Retrieves time series data for the announced IP space count, represented as the number of IPv4 /24s and IPv6 /48s, for a given ASN.

### Resource `radar.datasets`:

- `list_radar_datasets` (`read`): Retrieves a list of datasets.
- `download_radar_datasets` (`write`): Retrieves an URL to download a single dataset.
- `get_radar_datasets` (`read`): Retrieves the CSV content of a given dataset by alias or ID. When getting the content by alias the latest dataset is returned, optionally filtered by the latest available at a given date.

### Resource `radar.dns`:

- `timeseries_radar_dns` (`read`): Retrieves normalized query volume to the 1.1.1.1 DNS resolver over time.

### Resource `radar.dns.top`:

- `ases_dns_radar_top` (`read`): Retrieves the top autonomous systems by DNS queries made to 1.1.1.1 DNS resolver.
- `locations_dns_radar_top` (`read`): Retrieves the top locations by DNS queries made to 1.1.1.1 DNS resolver.

### Resource `radar.dns.summary`:

- `cache_hit_dns_radar_summary` (`read`): Retrieves the distribution of DNS queries by cache status.
- `dnssec_dns_radar_summary` (`read`): Retrieves the distribution of DNS responses by DNSSEC (DNS Security Extensions) support.
- `dnssec_aware_dns_radar_summary` (`read`): Retrieves the distribution of DNS queries by DNSSEC (DNS Security Extensions) client awareness.
- `dnssec_e2e_dns_radar_summary` (`read`): Retrieves the distribution of DNSSEC-validated answers by end-to-end security status.
- `ip_version_dns_radar_summary` (`read`): Retrieves the distribution of DNS queries by IP version.
- `matching_answer_dns_radar_summary` (`read`): Retrieves the distribution of DNS queries by matching answers.
- `protocol_dns_radar_summary` (`read`): Retrieves the distribution of DNS queries by DNS transport protocol.
- `query_type_dns_radar_summary` (`read`): Retrieves the distribution of DNS queries by type.
- `response_code_dns_radar_summary` (`read`): Retrieves the distribution of DNS queries by response code.
- `response_ttl_dns_radar_summary` (`read`): Retrieves the distribution of DNS queries by minimum response TTL.

### Resource `radar.dns.timeseries_groups`:

- `cache_hit_dns_radar_timeseries_groups` (`read`): Retrieves the distribution of DNS queries by cache status over time.
- `dnssec_dns_radar_timeseries_groups` (`read`): Retrieves the distribution of DNS responses by DNSSEC (DNS Security Extensions) support over time.
- `dnssec_aware_dns_radar_timeseries_groups` (`read`): Retrieves the distribution of DNS queries by DNSSEC (DNS Security Extensions) client awareness over time.
- `dnssec_e2e_dns_radar_timeseries_groups` (`read`): Retrieves the distribution of DNSSEC-validated answers by end-to-end security status over time.
- `ip_version_dns_radar_timeseries_groups` (`read`): Retrieves the distribution of DNS queries by IP version over time.
- `matching_answer_dns_radar_timeseries_groups` (`read`): Retrieves the distribution of DNS queries by matching answers over time.
- `protocol_dns_radar_timeseries_groups` (`read`): Retrieves the distribution of DNS queries by DNS transport protocol over time.
- `query_type_dns_radar_timeseries_groups` (`read`): Retrieves the distribution of DNS queries by type over time.
- `response_code_dns_radar_timeseries_groups` (`read`): Retrieves the distribution of DNS queries by response code over time.
- `response_ttl_dns_radar_timeseries_groups` (`read`): Retrieves the distribution of DNS queries by minimum answer TTL over time.

### Resource `radar.netflows`:

- `summary_radar_netflows` (`read`): Retrieves the distribution of network traffic (NetFlows) by HTTP vs other protocols.
- `timeseries_radar_netflows` (`read`): Retrieves network traffic (NetFlows) over time.

### Resource `radar.netflows.top`:

- `ases_netflows_radar_top` (`read`): Retrieves the top autonomous systems by network traffic (NetFlows).
- `locations_netflows_radar_top` (`read`): Retrieves the top locations by network traffic (NetFlows).

### Resource `radar.search`:

- `global_radar_search` (`read`): Searches for locations, autonomous systems, and reports.

### Resource `radar.verified_bots.top`:

- `bots_verified_bots_radar_top` (`read`): Retrieves the top verified bots by HTTP requests, with owner and category.
- `categories_verified_bots_radar_top` (`read`): Retrieves the top verified bot categories by HTTP requests, along with their corresponding percentage, over the total verified bot HTTP requests.

### Resource `radar.as112`:

- `timeseries_radar_as112` (`read`): Retrieves the AS112 DNS queries over time.

### Resource `radar.as112.summary`:

- `dnssec_as112_radar_summary` (`read`): Retrieves the distribution of DNS queries to AS112 by DNSSEC (DNS Security Extensions) support.
- `edns_as112_radar_summary` (`read`): Retrieves the distribution of DNS queries to AS112 by EDNS (Extension Mechanisms for DNS) support.
- `ip_version_as112_radar_summary` (`read`): Retrieves the distribution of DNS queries to AS112 by IP version.
- `protocol_as112_radar_summary` (`read`): Retrieves the distribution of DNS queries to AS112 by protocol.
- `query_type_as112_radar_summary` (`read`): Retrieves the distribution of DNS queries to AS112 by type.
- `response_codes_as112_radar_summary` (`read`): Retrieves the distribution of AS112 DNS requests classified by response code.

### Resource `radar.as112.timeseries_groups`:

- `dnssec_as112_radar_timeseries_groups` (`read`): Retrieves the distribution of AS112 DNS queries by DNSSEC (DNS Security Extensions) support over time.
- `edns_as112_radar_timeseries_groups` (`read`): Retrieves the distribution of AS112 DNS queries by EDNS (Extension Mechanisms for DNS) support over time.
- `ip_version_as112_radar_timeseries_groups` (`read`): Retrieves the distribution of AS112 DNS queries by IP version over time.
- `protocol_as112_radar_timeseries_groups` (`read`): Retrieves the distribution of AS112 DNS requests classified by protocol over time.
- `query_type_as112_radar_timeseries_groups` (`read`): Retrieves the distribution of AS112 DNS queries by type over time.
- `response_codes_as112_radar_timeseries_groups` (`read`): Retrieves the distribution of AS112 DNS requests classified by response code over time.

### Resource `radar.as112.top`:

- `dnssec_as112_radar_top` (`read`): Retrieves the top locations of DNS queries to AS112 with DNSSEC (DNS Security Extensions) support.
- `edns_as112_radar_top` (`read`): Retrieves the top locations of DNS queries to AS112 with EDNS (Extension Mechanisms for DNS) support.
- `ip_version_as112_radar_top` (`read`): Retrieves the top locations of DNS queries to AS112 for an IP version.
- `locations_as112_radar_top` (`read`): Retrieves the top locations by AS112 DNS queries.

### Resource `radar.email.routing.summary`:

- `arc_routing_email_radar_summary` (`read`): Retrieves the distribution of emails by ARC (Authenticated Received Chain) validation.
- `dkim_routing_email_radar_summary` (`read`): Retrieves the distribution of emails by DKIM (DomainKeys Identified Mail) validation.
- `dmarc_routing_email_radar_summary` (`read`): Retrieves the distribution of emails by DMARC (Domain-based Message Authentication, Reporting and Conformance) validation.
- `encrypted_routing_email_radar_summary` (`read`): Retrieves the distribution of emails by encryption status (encrypted vs. not-encrypted).
- `ip_version_routing_email_radar_summary` (`read`): Retrieves the distribution of emails by IP version.
- `spf_routing_email_radar_summary` (`read`): Retrieves the distribution of emails by SPF (Sender Policy Framework) validation.

### Resource `radar.email.routing.timeseries_groups`:

- `arc_routing_email_radar_timeseries_groups` (`read`): Retrieves the distribution of emails by ARC (Authenticated Received Chain) validation over time.
- `dkim_routing_email_radar_timeseries_groups` (`read`): Retrieves the distribution of emails by DKIM (DomainKeys Identified Mail) validation over time.
- `dmarc_routing_email_radar_timeseries_groups` (`read`): Retrieves the distribution of emails by DMARC (Domain-based Message Authentication, Reporting and Conformance) validation over time.
- `encrypted_routing_email_radar_timeseries_groups` (`read`): Retrieves the distribution of emails by encryption status (encrypted vs. not-encrypted) over time.
- `ip_version_routing_email_radar_timeseries_groups` (`read`): Retrieves the distribution of emails by IP version over time.
- `spf_routing_email_radar_timeseries_groups` (`read`): Retrieves the distribution of emails by SPF (Sender Policy Framework) validation over time.

### Resource `radar.email.security.top.tlds`:

- `get_top_security_email_radar_tlds` (`read`): Retrieves the top TLDs by number of email messages.

### Resource `radar.email.security.top.tlds.malicious`:

- `get_tlds_top_security_email_radar_malicious` (`read`): Retrieves the top TLDs by emails classified as malicious or not.

### Resource `radar.email.security.top.tlds.spam`:

- `get_tlds_top_security_email_radar_spam` (`read`): Retrieves the top TLDs by emails classified as spam or not.

### Resource `radar.email.security.top.tlds.spoof`:

- `get_tlds_top_security_email_radar_spoof` (`read`): Retrieves the top TLDs by emails classified as spoof or not.

### Resource `radar.email.security.summary`:

- `arc_security_email_radar_summary` (`read`): Retrieves the distribution of emails by ARC (Authenticated Received Chain) validation.
- `dkim_security_email_radar_summary` (`read`): Retrieves the distribution of emails by DKIM (DomainKeys Identified Mail) validation.
- `dmarc_security_email_radar_summary` (`read`): Retrieves the distribution of emails by DMARC (Domain-based Message Authentication, Reporting and Conformance) validation.
- `malicious_security_email_radar_summary` (`read`): Retrieves the distribution of emails by malicious classification.
- `spam_security_email_radar_summary` (`read`): Retrieves the proportion of emails by spam classification (spam vs. non-spam).
- `spf_security_email_radar_summary` (`read`): Retrieves the distribution of emails by SPF (Sender Policy Framework) validation.
- `spoof_security_email_radar_summary` (`read`): Retrieves the proportion of emails by spoof classification (spoof vs. non-spoof).
- `threat_category_security_email_radar_summary` (`read`): Retrieves the distribution of emails by threat categories.
- `tls_version_security_email_radar_summary` (`read`): Retrieves the distribution of emails by TLS version.

### Resource `radar.email.security.timeseries_groups`:

- `arc_security_email_radar_timeseries_groups` (`read`): Retrieves the distribution of emails by ARC (Authenticated Received Chain) validation over time.
- `dkim_security_email_radar_timeseries_groups` (`read`): Retrieves the distribution of emails by DKIM (DomainKeys Identified Mail) validation over time.
- `dmarc_security_email_radar_timeseries_groups` (`read`): Retrieves the distribution of emails by DMARC (Domain-based Message Authentication, Reporting and Conformance) validation over time.
- `malicious_security_email_radar_timeseries_groups` (`read`): Retrieves the distribution of emails by malicious classification over time.
- `spam_security_email_radar_timeseries_groups` (`read`): Retrieves the distribution of emails by spam classification (spam vs. non-spam) over time.
- `spf_security_email_radar_timeseries_groups` (`read`): Retrieves the distribution of emails by SPF (Sender Policy Framework) validation over time.
- `spoof_security_email_radar_timeseries_groups` (`read`): Retrieves the distribution of emails by spoof classification (spoof vs. non-spoof) over time.
- `threat_category_security_email_radar_timeseries_groups` (`read`): Retrieves the distribution of emails by threat category over time.
- `tls_version_security_email_radar_timeseries_groups` (`read`): Retrieves the distribution of emails by TLS version over time.

### Resource `radar.attacks.layer3`:

- `timeseries_attacks_radar_layer3` (`read`): Retrieves layer 3 attacks over time.

### Resource `radar.attacks.layer3.summary`:

- `bitrate_layer3_attacks_radar_summary` (`read`): Retrieves the distribution of layer 3 attacks by bitrate.
- `duration_layer3_attacks_radar_summary` (`read`): Retrieves the distribution of layer 3 attacks by duration.
- `industry_layer3_attacks_radar_summary` (`read`): Retrieves the distribution of layer 3 attacks by targeted industry.
- `ip_version_layer3_attacks_radar_summary` (`read`): Retrieves the distribution of layer 3 attacks by IP version.
- `protocol_layer3_attacks_radar_summary` (`read`): Retrieves the distribution of layer 3 attacks by protocol.
- `vector_layer3_attacks_radar_summary` (`read`): Retrieves the distribution of layer 3 attacks by vector.
- `vertical_layer3_attacks_radar_summary` (`read`): Retrieves the distribution of layer 3 attacks by targeted vertical.

### Resource `radar.attacks.layer3.timeseries_groups`:

- `bitrate_layer3_attacks_radar_timeseries_groups` (`read`): Retrieves the distribution of layer 3 attacks by bitrate over time.
- `duration_layer3_attacks_radar_timeseries_groups` (`read`): Retrieves the distribution of layer 3 attacks by duration over time.
- `industry_layer3_attacks_radar_timeseries_groups` (`read`): Retrieves the distribution of layer 3 attacks by targeted industry over time.
- `ip_version_layer3_attacks_radar_timeseries_groups` (`read`): Retrieves the distribution of layer 3 attacks by IP version over time.
- `protocol_layer3_attacks_radar_timeseries_groups` (`read`): Retrieves the distribution of layer 3 attacks by protocol over time.
- `vector_layer3_attacks_radar_timeseries_groups` (`read`): Retrieves the distribution of layer 3 attacks by vector over time.
- `vertical_layer3_attacks_radar_timeseries_groups` (`read`): Retrieves the distribution of layer 3 attacks by targeted vertical over time.

### Resource `radar.attacks.layer3.top`:

- `attacks_layer3_attacks_radar_top` (`read`): Retrieves the top layer 3 attacks from origin to target location. Values are a percentage out of the total layer 3 attacks (with billing country). You can optionally limit the number of attacks by origin/target location (useful if all the top attacks are from or to the same location).
- `industry_layer3_attacks_radar_top` (`read`): This endpoint is deprecated. To continue getting this data, switch to the summary by industry endpoint.
- `vertical_layer3_attacks_radar_top` (`read`): This endpoint is deprecated. To continue getting this data, switch to the summary by vertical endpoint.

### Resource `radar.attacks.layer3.top.locations`:

- `origin_top_layer3_attacks_radar_locations` (`read`): Retrieves the origin locations of layer 3 attacks.
- `target_top_layer3_attacks_radar_locations` (`read`): Retrieves the target locations of layer 3 attacks.

### Resource `radar.attacks.layer7`:

- `timeseries_attacks_radar_layer7` (`read`): Retrieves layer 7 attacks over time.

### Resource `radar.attacks.layer7.summary`:

- `http_method_layer7_attacks_radar_summary` (`read`): Retrieves the distribution of layer 7 attacks by HTTP method.
- `http_version_layer7_attacks_radar_summary` (`read`): Retrieves the distribution of layer 7 attacks by HTTP version.
- `industry_layer7_attacks_radar_summary` (`read`): Retrieves the distribution of layer 7 attacks by targeted industry.
- `ip_version_layer7_attacks_radar_summary` (`read`): Retrieves the distribution of layer 7 attacks by IP version.
- `managed_rules_layer7_attacks_radar_summary` (`read`): Retrieves the distribution of layer 7 attacks by managed rules.
- `mitigation_product_layer7_attacks_radar_summary` (`read`): Retrieves the distribution of layer 7 attacks by mitigation product.
- `vertical_layer7_attacks_radar_summary` (`read`): Retrieves the distribution of layer 7 attacks by targeted vertical.

### Resource `radar.attacks.layer7.timeseries_groups`:

- `http_method_layer7_attacks_radar_timeseries_groups` (`read`): Retrieves the distribution of layer 7 attacks by HTTP method over time.
- `http_version_layer7_attacks_radar_timeseries_groups` (`read`): Retrieves the distribution of layer 7 attacks by HTTP version over time.
- `industry_layer7_attacks_radar_timeseries_groups` (`read`): Retrieves the distribution of layer 7 attacks by targeted industry over time.
- `ip_version_layer7_attacks_radar_timeseries_groups` (`read`): Retrieves the distribution of layer 7 attacks by IP version used over time.
- `managed_rules_layer7_attacks_radar_timeseries_groups` (`read`): Retrieves the distribution of layer 7 attacks by managed rules over time.
- `mitigation_product_layer7_attacks_radar_timeseries_groups` (`read`): Retrieves the distribution of layer 7 attacks by mitigation product over time.
- `vertical_layer7_attacks_radar_timeseries_groups` (`read`): Retrieves the distribution of layer 7 attacks by targeted vertical over time.

### Resource `radar.attacks.layer7.top`:

- `attacks_layer7_attacks_radar_top` (`read`): Retrieves the top attacks from origin to target location. Values are percentages of the total layer 7 attacks (with billing country). The attack magnitude can be defined by the number of mitigated requests or by the number of zones affected. You can optionally limit the number of attacks by origin/target location (useful if all the top attacks are from or to the same location).
- `industry_layer7_attacks_radar_top` (`read`): This endpoint is deprecated. To continue getting this data, switch to the summary by industry endpoint.
- `vertical_layer7_attacks_radar_top` (`read`): This endpoint is deprecated. To continue getting this data, switch to the summary by vertical endpoint.

### Resource `radar.attacks.layer7.top.locations`:

- `origin_top_layer7_attacks_radar_locations` (`read`): Retrieves the top origin locations of layer 7 attacks. Values are percentages of the total layer 7 attacks, with the origin location determined by the client IP address.
- `target_top_layer7_attacks_radar_locations` (`read`): Retrieves the top target locations of and by layer 7 attacks. Values are a percentage out of the total layer 7 attacks. The target location is determined by the attacked zone's billing country, when available.

### Resource `radar.attacks.layer7.top.ases`:

- `origin_top_layer7_attacks_radar_ases` (`read`): Retrieves the top origin autonomous systems of layer 7 attacks. Values are percentages of the total layer 7 attacks, with the origin autonomous systems determined by the client IP address.

### Resource `radar.entities`:

- `get_radar_entities` (`read`): Retrieves IP address information.

### Resource `radar.entities.asns`:

- `list_entities_radar_asns` (`read`): Retrieves a list of autonomous systems.
- `get_entities_radar_asns` (`read`): Retrieves the requested autonomous system information. (A confidence level below `5` indicates a low level of confidence in the traffic data - normally this happens because Cloudflare has a small amount of traffic from/to this AS). Population estimates come from APNIC (refer to https://labs.apnic.net/?p=526).
- `ip_entities_radar_asns` (`read`): Retrieves the requested autonomous system information based on IP address. Population estimates come from APNIC (refer to https://labs.apnic.net/?p=526).
- `rel_entities_radar_asns` (`read`): Retrieves AS-level relationship for given networks.

### Resource `radar.entities.locations`:

- `list_entities_radar_locations` (`read`): Retrieves a list of locations.
- `get_entities_radar_locations` (`read`): Retrieves the requested location information. (A confidence level below `5` indicates a low level of confidence in the traffic data - normally this happens because Cloudflare has a small amount of traffic from/to this location).

### Resource `radar.http`:

- `timeseries_radar_http` (`read`): Retrieves the HTTP requests over time.

### Resource `radar.http.locations`:

- `get_http_radar_locations` (`read`): Retrieves the top locations by HTTP requests.

### Resource `radar.http.locations.bot_class`:

- `get_locations_http_radar_bot_class` (`read`): Retrieves the top locations, by HTTP requests, of the requested bot class.

### Resource `radar.http.locations.device_type`:

- `get_locations_http_radar_device_type` (`read`): Retrieves the top locations, by HTTP requests, of the requested device type.

### Resource `radar.http.locations.http_protocol`:

- `get_locations_http_radar_http_protocol` (`read`): Retrieves the top locations, by HTTP requests, of the requested HTTP protocol.

### Resource `radar.http.locations.http_method`:

- `get_locations_http_radar_http_method` (`read`): Retrieves the top locations, by HTTP requests, of the requested HTTP version.

### Resource `radar.http.locations.ip_version`:

- `get_locations_http_radar_ip_version` (`read`): Retrieves the top locations, by HTTP requests, of the requested IP version.

### Resource `radar.http.locations.os`:

- `get_locations_http_radar_os` (`read`): Retrieves the top locations, by HTTP requests, of the requested operating system.

### Resource `radar.http.locations.tls_version`:

- `get_locations_http_radar_tls_version` (`read`): Retrieves the top locations, by HTTP requests, of the requested TLS protocol version.

### Resource `radar.http.locations.browser_family`:

- `get_locations_http_radar_browser_family` (`read`): Retrieves the top locations, by HTTP requests, of the requested browser family.

### Resource `radar.http.ases`:

- `get_http_radar_ases` (`read`): Retrieves the top autonomous systems by HTTP requests.

### Resource `radar.http.ases.bot_class`:

- `get_ases_http_radar_bot_class` (`read`): Retrieves the top autonomous systems, by HTTP requests, of the requested bot class.

### Resource `radar.http.ases.device_type`:

- `get_ases_http_radar_device_type` (`read`): Retrieves the top autonomous systems, by HTTP requests, of the requested device type.

### Resource `radar.http.ases.http_protocol`:

- `get_ases_http_radar_http_protocol` (`read`): Retrieves the top autonomous systems, by HTTP requests, of the requested HTTP protocol.

### Resource `radar.http.ases.http_method`:

- `get_ases_http_radar_http_method` (`read`): Retrieves the top autonomous systems, by HTTP requests, of the requested HTTP version.

### Resource `radar.http.ases.ip_version`:

- `get_ases_http_radar_ip_version` (`read`): Retrieves the top autonomous systems, by HTTP requests, of the requested IP version.

### Resource `radar.http.ases.os`:

- `get_ases_http_radar_os` (`read`): Retrieves the top autonomous systems, by HTTP requests, of the requested operating system.

### Resource `radar.http.ases.tls_version`:

- `get_ases_http_radar_tls_version` (`read`): Retrieves the top autonomous systems, by HTTP requests, of the requested TLS protocol version.

### Resource `radar.http.ases.browser_family`:

- `get_ases_http_radar_browser_family` (`read`): Retrieves the top autonomous systems, by HTTP requests, of the requested browser family.

### Resource `radar.http.summary`:

- `bot_class_http_radar_summary` (`read`): Retrieves the distribution of bot-generated HTTP requests to genuine human traffic, as classified by Cloudflare. Visit https://developers.cloudflare.com/radar/concepts/bot-classes/ for more information.
- `device_type_http_radar_summary` (`read`): Retrieves the distribution of HTTP requests generated by mobile, desktop, and other types of devices.
- `http_protocol_http_radar_summary` (`read`): Retrieves the distribution of HTTP requests by HTTP protocol (HTTP vs. HTTPS).
- `http_version_http_radar_summary` (`read`): Retrieves the distribution of HTTP requests by HTTP version.
- `ip_version_http_radar_summary` (`read`): Retrieves the distribution of HTTP requests by IP version.
- `os_http_radar_summary` (`read`): Retrieves the distribution of HTTP requests by operating system (Windows, macOS, Android, iOS, and others).
- `post_quantum_http_radar_summary` (`read`): Retrieves the distribution of HTTP requests by post-quantum support.
- `tls_version_http_radar_summary` (`read`): Retrieves the distribution of HTTP requests by TLS version.

### Resource `radar.http.timeseries_groups`:

- `bot_class_http_radar_timeseries_groups` (`read`): Retrieves the distribution of HTTP requests classified as automated or human over time. Visit https://developers.cloudflare.com/radar/concepts/bot-classes/ for more information.
- `browser_http_radar_timeseries_groups` (`read`): Retrieves the distribution of HTTP requests by user agent over time.
- `browser_family_http_radar_timeseries_groups` (`read`): Retrieves the distribution of HTTP requests by user agent family over time.
- `device_type_http_radar_timeseries_groups` (`read`): Retrieves the distribution of HTTP requests by device type over time.
- `http_protocol_http_radar_timeseries_groups` (`read`): Retrieves the distribution of HTTP requests by HTTP protocol (HTTP vs. HTTPS) over time.
- `http_version_http_radar_timeseries_groups` (`read`): Retrieves the distribution of HTTP requests by HTTP version over time.
- `ip_version_http_radar_timeseries_groups` (`read`): Retrieves the distribution of HTTP requests by IP version over time.
- `os_http_radar_timeseries_groups` (`read`): Retrieves the distribution of HTTP requests by operating system over time.
- `post_quantum_http_radar_timeseries_groups` (`read`): Retrieves the distribution of HTTP requests by post-quantum support over time.
- `tls_version_http_radar_timeseries_groups` (`read`): Retrieves the distribution of HTTP requests by TLS version over time.

### Resource `radar.http.top`:

- `browser_http_radar_top` (`read`): Retrieves the top user agents by HTTP requests.
- `browser_family_http_radar_top` (`read`): Retrieves the top user agents, aggregated in families, by HTTP requests.

### Resource `radar.quality.iqi`:

- `summary_quality_radar_iqi` (`read`): Retrieves a summary (percentiles) of bandwidth, latency, or DNS response time from the Radar Internet Quality Index (IQI).
- `timeseries_groups_quality_radar_iqi` (`read`): Retrieves a time series (percentiles) of bandwidth, latency, or DNS response time from the Radar Internet Quality Index (IQI).

### Resource `radar.quality.speed`:

- `histogram_quality_radar_speed` (`read`): Retrieves a histogram from the previous 90 days of Cloudflare Speed Test data, split into fixed bandwidth (Mbps), latency (ms), or jitter (ms) buckets.
- `summary_quality_radar_speed` (`read`): Retrieves a summary of bandwidth, latency, jitter, and packet loss, from the previous 90 days of Cloudflare Speed Test data.

### Resource `radar.quality.speed.top`:

- `ases_speed_quality_radar_top` (`read`): Retrieves the top autonomous systems by bandwidth, latency, jitter, or packet loss, from the previous 90 days of Cloudflare Speed Test data.
- `locations_speed_quality_radar_top` (`read`): Retrieves the top locations by bandwidth, latency, jitter, or packet loss, from the previous 90 days of Cloudflare Speed Test data.

### Resource `radar.ranking`:

- `timeseries_groups_radar_ranking` (`read`): Retrieves domains rank over time.
- `top_radar_ranking` (`read`): Retrieves the top or trending domains based on their rank. Popular domains are domains of broad appeal based on how people use the Internet. Trending domains are domains that are generating a surge in interest. For more information on top domains, see https://blog.cloudflare.com/radar-domain-rankings/.

### Resource `radar.ranking.domain`:

- `get_ranking_radar_domain` (`read`): Retrieves domain rank details. Cloudflare provides an ordered rank for the top 100 domains, but for the remainder it only provides ranking buckets like top 200 thousand, top one million, etc.. These are available through Radar datasets endpoints.

### Resource `radar.ranking.internet_services`:

- `categories_ranking_radar_internet_services` (`read`): Retrieves the list of Internet services categories.
- `timeseries_groups_ranking_radar_internet_services` (`read`): Retrieves Internet Services rank update changes over time.
- `top_ranking_radar_internet_services` (`read`): Retrieves top Internet services based on their rank.

### Resource `radar.traffic_anomalies`:

- `get_radar_traffic_anomalies` (`read`): Retrieves the latest Internet traffic anomalies, which are signals that might indicate an outage. These alerts are automatically detected by Radar and manually verified by our team.

### Resource `radar.traffic_anomalies.locations`:

- `get_traffic_anomalies_radar_locations` (`read`): Retrieves the sum of Internet traffic anomalies, grouped by location. These anomalies are signals that might indicate an outage, automatically detected by Radar and manually verified by our team.

### Resource `radar.tcp_resets_timeouts`:

- `summary_radar_tcp_resets_timeouts` (`read`): Retrieves the distribution of connection stage by TCP connections terminated within the first 10 packets by a reset or timeout.
- `timeseries_groups_radar_tcp_resets_timeouts` (`read`): Retrieves the distribution of connection stage by TCP connections terminated within the first 10 packets by a reset or timeout over time.

### Resource `radar.robots_txt.top`:

- `domain_categories_robots_txt_radar_top` (`read`): Retrieves the top domain categories by the number of robots.txt files parsed.

### Resource `radar.robots_txt.top.user_agents`:

- `directive_top_robots_txt_radar_user_agents` (`read`): Retrieves the top user agents on robots.txt files.

### Resource `radar.leaked_credentials.summary`:

- `bot_class_leaked_credentials_radar_summary` (`read`): Retrieves the distribution of HTTP authentication requests by bot class.
- `compromised_leaked_credentials_radar_summary` (`read`): Retrieves the distribution of HTTP authentication requests by compromised credential status.

### Resource `radar.leaked_credentials.timeseries_groups`:

- `bot_class_leaked_credentials_radar_timeseries_groups` (`read`): Retrieves the distribution of HTTP authentication requests by bot class over time.
- `compromised_leaked_credentials_radar_timeseries_groups` (`read`): Retrieves the distribution of HTTP authentication requests by compromised credential status over time.

### Resource `bot_management`:

- `update_bot_management` (`write`): Updates the Bot Management configuration for a zone.

This API is used to update:

- **Bot Fight Mode**
- **Super Bot Fight Mode**
- **Bot Management for Enterprise**

See [Bot Plans](https://developers.cloudflare.com/bots/plans/) for more information on the different plans
\
If you recently upgraded or downgraded your plan, refer to the following examples to clean up old configurations.
Copy and paste the example body to remove old zone configurations based on your current plan.

#### Clean up configuration for Bot Fight Mode plan

```json
{
  "sbfm_likely_automated": "allow",
  "sbfm_definitely_automated": "allow",
  "sbfm_verified_bots": "allow",
  "sbfm_static_resource_protection": false,
  "optimize_wordpress": false,
  "suppress_session_score": false
}
```

#### Clean up configuration for SBFM Pro plan

```json
{
  "sbfm_likely_automated": "allow",
  "fight_mode": false
}
```

#### Clean up configuration for SBFM Biz plan

```json
{
  "fight_mode": false
}
```

#### Clean up configuration for BM Enterprise Subscription plan

It is strongly recommended that you ensure you have [custom rules](https://developers.cloudflare.com/waf/custom-rules/) in place to protect your zone before disabling the SBFM rules. Without these protections, your zone is vulnerable to attacks.

```json
{
  "sbfm_likely_automated": "allow",
  "sbfm_definitely_automated": "allow",
  "sbfm_verified_bots": "allow",
  "sbfm_static_resource_protection": false,
  "optimize_wordpress": false,
  "fight_mode": false
}
```

- `get_bot_management` (`read`): Retrieve a zone's Bot Management Config

### Resource `origin_post_quantum_encryption`:

- `update_origin_post_quantum_encryption` (`write`): Instructs Cloudflare to use Post-Quantum (PQ) key agreement algorithms when connecting to your origin. Preferred instructs Cloudflare to opportunistically send a Post-Quantum keyshare in the first message to the origin (for fastest connections when the origin supports and prefers PQ), supported means that PQ algorithms are advertised but only used when requested by the origin, and off means that PQ algorithms are not advertised
- `get_origin_post_quantum_encryption` (`read`): Instructs Cloudflare to use Post-Quantum (PQ) key agreement algorithms when connecting to your origin. Preferred instructs Cloudflare to opportunistically send a Post-Quantum keyshare in the first message to the origin (for fastest connections when the origin supports and prefers PQ), supported means that PQ algorithms are advertised but only used when requested by the origin, and off means that PQ algorithms are not advertised

### Resource `zaraz`:

- `update_zaraz` (`write`): Updates Zaraz workflow for a zone.

### Resource `zaraz.config`:

- `update_zaraz_config` (`write`): Updates Zaraz configuration for a zone.
- `get_zaraz_config` (`read`): Gets latest Zaraz configuration for a zone. It can be preview or published configuration, whichever was the last updated. Secret variables values will not be included.

### Resource `zaraz.default`:

- `get_zaraz_default` (`read`): Gets default Zaraz configuration for a zone.

### Resource `zaraz.export`:

- `get_zaraz_export` (`read`): Exports full current published Zaraz configuration for a zone, secret variables included.

### Resource `zaraz.history`:

- `update_zaraz_history` (`write`): Restores a historical published Zaraz configuration by ID for a zone.
- `list_zaraz_history` (`read`): Lists a history of published Zaraz configuration records for a zone.

### Resource `zaraz.history.configs`:

- `get_history_zaraz_configs` (`read`): Gets a history of published Zaraz configurations by ID(s) for a zone.

### Resource `zaraz.publish`:

- `create_zaraz_publish` (`write`): Publish current Zaraz preview configuration for a zone.

### Resource `zaraz.workflow`:

- `get_zaraz_workflow` (`read`): Gets Zaraz workflow for a zone.

### Resource `speed.schedule`:

- `create_speed_schedule` (`write`): Creates a scheduled test for a page.
- `delete_speed_schedule` (`write`): Deletes a scheduled test for a page.
- `get_speed_schedule` (`read`): Retrieves the test schedule for a page in a specific region.

### Resource `speed.availabilities`:

- `list_speed_availabilities` (`read`): Retrieves quota for all plans, as well as the current zone quota.

### Resource `speed.pages`:

- `list_speed_pages` (`read`): Lists all webpages which have been tested.
- `trend_speed_pages` (`read`): Lists the core web vital metrics trend over time for a specific page.

### Resource `speed.pages.tests`:

- `create_pages_speed_tests` (`write`): Starts a test for a specific webpage, in a specific region.
- `list_pages_speed_tests` (`read`): Test history (list of tests) for a specific webpage.
- `delete_pages_speed_tests` (`write`): Deletes all tests for a specific webpage from a specific region. Deleted tests are still counted as part of the quota.
- `get_pages_speed_tests` (`read`): Retrieves the result of a specific test.

### Resource `dcv_delegation`:

- `get_dcv_delegation` (`read`): Retrieve the account and zone specific unique identifier used as part of the CNAME target for DCV Delegation.

### Resource `hostnames.settings.tls`:

- `update_settings_hostnames_tls` (`write`): Update the tls setting value for the hostname.
- `delete_settings_hostnames_tls` (`write`): Delete the tls setting value for the hostname.
- `get_settings_hostnames_tls` (`read`): List the requested TLS setting for the hostnames under this zone.

### Resource `snippets`:

- `update_snippets` (`write`): Put Snippet
- `list_snippets` (`read`): All Snippets
- `delete_snippets` (`write`): Delete Snippet
- `get_snippets` (`read`): Snippet

### Resource `snippets.content`:

- `get_snippets_content` (`read`): Snippet Content

### Resource `snippets.rules`:

- `update_snippets_rules` (`write`): Put Rules
- `list_snippets_rules` (`read`): Rules
- `delete_snippets_rules` (`write`): Delete All Rules

### Resource `calls.sfu`:

- `create_calls_sfu` (`write`): Creates a new Cloudflare calls app. An app is an unique enviroment where each Session can access all Tracks within the app.
- `update_calls_sfu` (`write`): Edit details for a single app.
- `list_calls_sfu` (`read`): Lists all apps in the Cloudflare account
- `delete_calls_sfu` (`write`): Deletes an app from Cloudflare Calls
- `get_calls_sfu` (`read`): Fetches details for a single Calls app.

### Resource `calls.turn`:

- `create_calls_turn` (`write`): Creates a new Cloudflare Calls TURN key.
- `update_calls_turn` (`write`): Edit details for a single TURN key.
- `list_calls_turn` (`read`): Lists all TURN keys in the Cloudflare account
- `delete_calls_turn` (`write`): Deletes a TURN key from Cloudflare Calls
- `get_calls_turn` (`read`): Fetches details for a single TURN key.

### Resource `cloudforce_one.scans.results`:

- `get_scans_cloudforce_one_results` (`read`): Get the Latest Scan Result

### Resource `cloudforce_one.scans.config`:

- `create_scans_cloudforce_one_config` (`write`): Create a new Scan Config
- `list_scans_cloudforce_one_config` (`read`): List Scan Configs
- `delete_scans_cloudforce_one_config` (`write`): Delete a Scan Config
- `edit_scans_cloudforce_one_config` (`write`): Update an existing Scan Config

### Resource `cloudforce_one.requests`:

- `create_cloudforce_one_requests` (`write`): Creating a request adds the request into the Cloudforce One queue for analysis. In addition to the content, a short title, type, priority, and releasability should be provided. If one is not provided, a default will be assigned.
- `update_cloudforce_one_requests` (`write`): Updating a request alters the request in the Cloudforce One queue. This API may be used to update any attributes of the request after the initial submission. Only fields that you choose to update need to be add to the request body.
- `list_cloudforce_one_requests` (`write`): List Requests
- `delete_cloudforce_one_requests` (`write`): Delete a Request
- `constants_cloudforce_one_requests` (`read`): Get Request Priority, Status, and TLP constants
- `get_cloudforce_one_requests` (`read`): Get a Request
- `quota_cloudforce_one_requests` (`read`): Get Request Quota
- `types_cloudforce_one_requests` (`read`): Get Request Types

### Resource `cloudforce_one.requests.message`:

- `create_requests_cloudforce_one_message` (`write`): Create a New Request Message
- `update_requests_cloudforce_one_message` (`write`): Update a Request Message
- `delete_requests_cloudforce_one_message` (`write`): Delete a Request Message
- `get_requests_cloudforce_one_message` (`write`): List Request Messages

### Resource `cloudforce_one.requests.priority`:

- `create_requests_cloudforce_one_priority` (`write`): Create a New Priority Intelligence Requirement
- `update_requests_cloudforce_one_priority` (`write`): Update a Priority Intelligence Requirement
- `delete_requests_cloudforce_one_priority` (`write`): Delete a Priority Intelligence Requirement
- `get_requests_cloudforce_one_priority` (`read`): Get a Priority Intelligence Requirement
- `quota_requests_cloudforce_one_priority` (`read`): Get Priority Intelligence Requirement Quota

### Resource `cloudforce_one.requests.assets`:

- `create_requests_cloudforce_one_assets` (`write`): List Request Assets
- `update_requests_cloudforce_one_assets` (`write`): Update a Request Asset
- `delete_requests_cloudforce_one_assets` (`write`): Delete a Request Asset
- `get_requests_cloudforce_one_assets` (`read`): Get a Request Asset

### Resource `cloudforce_one.threat_events`:

- `create_cloudforce_one_threat_events` (`write`): Events must be created in a client-specific dataset, which means the `datasetId` parameter must be defined. To create a dataset, see the [`Create Dataset`](https://developers.cloudflare.com/api/resources/cloudforce_one/subresources/threat_events/subresources/datasets/methods/create/) endpoint.
- `delete_cloudforce_one_threat_events` (`write`): The `datasetId` parameter must be defined. To list existing datasets (and their IDs) in your account, use the [`List Datasets`](https://developers.cloudflare.com/api/resources/cloudforce_one/subresources/threat_events/subresources/datasets/methods/list/) endpoint.
- `bulk_create_cloudforce_one_threat_events` (`write`): The `datasetId` parameter must be defined. To list existing datasets (and their IDs) in your account, use the [`List Datasets`](https://developers.cloudflare.com/api/resources/cloudforce_one/subresources/threat_events/subresources/datasets/methods/list/) endpoint.
- `edit_cloudforce_one_threat_events` (`write`): Updates an event
- `get_cloudforce_one_threat_events` (`read`): Reads an event

### Resource `cloudforce_one.threat_events.attackers`:

- `list_threat_events_cloudforce_one_attackers` (`read`): Lists attackers

### Resource `cloudforce_one.threat_events.categories`:

- `create_threat_events_cloudforce_one_categories` (`write`): Creates a new category
- `list_threat_events_cloudforce_one_categories` (`read`): Lists categories
- `delete_threat_events_cloudforce_one_categories` (`write`): Deletes a category
- `edit_threat_events_cloudforce_one_categories` (`write`): Updates a category
- `get_threat_events_cloudforce_one_categories` (`read`): Reads a category

### Resource `cloudforce_one.threat_events.countries`:

- `list_threat_events_cloudforce_one_countries` (`read`): Retrieves countries information for all countries

### Resource `cloudforce_one.threat_events.crons`:

- `list_threat_events_cloudforce_one_crons` (`read`): Reads the last cron update time
- `edit_threat_events_cloudforce_one_crons` (`write`): Reads the last cron update time

### Resource `cloudforce_one.threat_events.datasets`:

- `create_threat_events_cloudforce_one_datasets` (`write`): Creates a dataset
- `list_threat_events_cloudforce_one_datasets` (`read`): Lists all datasets in an account
- `edit_threat_events_cloudforce_one_datasets` (`write`): Updates an existing dataset
- `get_threat_events_cloudforce_one_datasets` (`read`): Reads a dataset
- `raw_threat_events_cloudforce_one_datasets` (`read`): Reads data for a raw event

### Resource `cloudforce_one.threat_events.indicator_types`:

- `list_threat_events_cloudforce_one_indicator_types` (`read`): Lists all indicator types

### Resource `cloudforce_one.threat_events.raw`:

- `edit_threat_events_cloudforce_one_raw` (`write`): Updates a raw event
- `get_threat_events_cloudforce_one_raw` (`read`): Reads data for a raw event

### Resource `cloudforce_one.threat_events.relate`:

- `delete_threat_events_cloudforce_one_relate` (`write`): Removes an event reference

### Resource `cloudforce_one.threat_events.tags`:

- `create_threat_events_cloudforce_one_tags` (`write`): Creates a new tag

### Resource `cloudforce_one.threat_events.event_tags`:

- `create_threat_events_cloudforce_one_event_tags` (`write`): Adds a tag to an event
- `delete_threat_events_cloudforce_one_event_tags` (`write`): Removes a tag from an event

### Resource `cloudforce_one.threat_events.target_industries`:

- `list_threat_events_cloudforce_one_target_industries` (`read`): Lists all target industries

### Resource `cloudforce_one.threat_events.insights`:

- `create_threat_events_cloudforce_one_insights` (`write`): Adds an insight to an event
- `delete_threat_events_cloudforce_one_insights` (`write`): Deletes an event insight
- `edit_threat_events_cloudforce_one_insights` (`write`): Updates an event insight
- `get_threat_events_cloudforce_one_insights` (`read`): Reads an event insight

### Resource `ai_gateway`:

- `create_ai_gateway` (`write`): Create a new Gateway
- `update_ai_gateway` (`write`): Update a Gateway
- `list_ai_gateway` (`read`): List Gateways
- `delete_ai_gateway` (`write`): Delete a Gateway
- `get_ai_gateway` (`read`): Fetch a Gateway

### Resource `ai_gateway.evaluation_types`:

- `list_ai_gateway_evaluation_types` (`read`): List Evaluators

### Resource `ai_gateway.logs`:

- `list_ai_gateway_logs` (`read`): List Gateway Logs
- `delete_ai_gateway_logs` (`write`): Delete Gateway Logs
- `edit_ai_gateway_logs` (`write`): Patch Gateway Log
- `get_ai_gateway_logs` (`read`): Get Gateway Log Detail
- `request_ai_gateway_logs` (`read`): Get Gateway Log Request
- `response_ai_gateway_logs` (`read`): Get Gateway Log Response

### Resource `ai_gateway.datasets`:

- `create_ai_gateway_datasets` (`write`): Create a new Dataset
- `update_ai_gateway_datasets` (`write`): Update a Dataset
- `list_ai_gateway_datasets` (`read`): List Datasets
- `delete_ai_gateway_datasets` (`write`): Delete a Dataset
- `get_ai_gateway_datasets` (`read`): Fetch a Dataset

### Resource `ai_gateway.evaluations`:

- `create_ai_gateway_evaluations` (`write`): Create a new Evaluation
- `list_ai_gateway_evaluations` (`read`): List Evaluations
- `delete_ai_gateway_evaluations` (`write`): Delete a Evaluation
- `get_ai_gateway_evaluations` (`read`): Fetch a Evaluation

### Resource `ai_gateway.urls`:

- `get_ai_gateway_urls` (`read`): Get Gateway URL

### Resource `iam.permission_groups`:

- `list_iam_permission_groups` (`read`): List all the permissions groups for an account.
- `get_iam_permission_groups` (`read`): Get information about a specific permission group in an account.

### Resource `iam.resource_groups`:

- `create_iam_resource_groups` (`write`): Create a new Resource Group under the specified account.
- `update_iam_resource_groups` (`write`): Modify an existing resource group.
- `list_iam_resource_groups` (`read`): List all the resource groups for an account.
- `delete_iam_resource_groups` (`write`): Remove a resource group from an account.
- `get_iam_resource_groups` (`read`): Get information about a specific resource group in an account.

### Resource `cloud_connector.rules`:

- `update_cloud_connector_rules` (`write`): Put Rules
- `list_cloud_connector_rules` (`read`): Rules

### Resource `botnet_feed.asn`:

- `day_report_botnet_feed_asn` (`read`): Gets all the data the botnet tracking database has for a given ASN registered to user account for given date. If no date is given, it will return results for the previous day.
- `full_report_botnet_feed_asn` (`read`): Gets all the data the botnet threat feed tracking database has for a given ASN registered to user account.

### Resource `botnet_feed.configs.asn`:

- `delete_configs_botnet_feed_asn` (`write`): Delete an ASN from botnet threat feed for a given user.
- `get_configs_botnet_feed_asn` (`read`): Gets a list of all ASNs registered for a user for the DDoS Botnet Feed API.

### Resource `security_txt`:

- `update_security_txt` (`write`): Update security.txt
- `delete_security_txt` (`write`): Delete security.txt
- `get_security_txt` (`read`): Get security.txt

### Resource `workflows`:

- `update_workflows` (`write`): Create/modify Workflow
- `list_workflows` (`read`): List all Workflows
- `get_workflows` (`read`): Get Workflow details

### Resource `workflows.instances`:

- `create_workflows_instances` (`write`): Create a new workflow instance
- `list_workflows_instances` (`read`): List of workflow instances
- `bulk_workflows_instances` (`write`): Batch create new Workflow instances
- `get_workflows_instances` (`read`): Get logs and status from instance

### Resource `workflows.instances.status`:

- `edit_instances_workflows_status` (`write`): Change status of instance

### Resource `workflows.instances.events`:

- `create_instances_workflows_events` (`write`): Send event to instance

### Resource `workflows.versions`:

- `list_workflows_versions` (`read`): List deployed Workflow versions
- `get_workflows_versions` (`read`): Get Workflow version details

### Resource `resource_sharing`:

- `create_resource_sharing` (`write`): Create a new share
- `update_resource_sharing` (`write`): Updating is not immediate, an updated share object with a new status will be returned.
- `list_resource_sharing` (`read`): Lists all account shares.
- `delete_resource_sharing` (`write`): Deletion is not immediate, an updated share object with a new status will be returned.
- `get_resource_sharing` (`read`): Fetches share by ID.

### Resource `resource_sharing.recipients`:

- `create_resource_sharing_recipients` (`write`): Create a new share recipient
- `list_resource_sharing_recipients` (`read`): List share recipients by share ID.
- `delete_resource_sharing_recipients` (`write`): Deletion is not immediate, an updated share recipient object with a new status will be returned.
- `get_resource_sharing_recipients` (`read`): Get share recipient by ID.

### Resource `resource_sharing.resources`:

- `create_resource_sharing_resources` (`write`): Create a new share resource
- `update_resource_sharing_resources` (`write`): Update is not immediate, an updated share resource object with a new status will be returned.
- `list_resource_sharing_resources` (`read`): List share resources by share ID.
- `delete_resource_sharing_resources` (`write`): Deletion is not immediate, an updated share resource object with a new status will be returned.
- `get_resource_sharing_resources` (`read`): Get share resource by ID.

### Resource `leaked_credential_checks`:

- `create_leaked_credential_checks` (`write`): Updates the current status of Leaked Credential Checks
- `get_leaked_credential_checks` (`read`): Retrieves the current status of Leaked Credential Checks

### Resource `leaked_credential_checks.detections`:

- `create_leaked_credential_checks_detections` (`write`): Create user-defined detection pattern for Leaked Credential Checks
- `update_leaked_credential_checks_detections` (`write`): Update user-defined detection pattern for Leaked Credential Checks
- `list_leaked_credential_checks_detections` (`read`): List user-defined detection patterns for Leaked Credential Checks
- `delete_leaked_credential_checks_detections` (`write`): Remove user-defined detection pattern for Leaked Credential Checks

### Resource `content_scanning`:

- `disable_content_scanning` (`write`): Disable Content Scanning
- `enable_content_scanning` (`write`): Enable Content Scanning

### Resource `content_scanning.payloads`:

- `create_content_scanning_payloads` (`write`): Add custom scan expressions for Content Scanning
- `list_content_scanning_payloads` (`read`): Get a list of existing custom scan expressions for Content Scanning
- `delete_content_scanning_payloads` (`write`): Delete a Content Scan Custom Expression

### Resource `content_scanning.settings`:

- `get_content_scanning_settings` (`read`): Retrieve the current status of Content Scanning

### Resource `abuse_reports`:

- `create_abuse_reports` (`write`): Submit the Abuse Report of a particular type

### Resource `ai`:

- `run_ai` (`write`): This endpoint provides users with the capability to run specific AI models on-demand.

By submitting the required input data, users can receive real-time predictions or results generated by the chosen AI
model. The endpoint supports various AI model types, ensuring flexibility and adaptability for diverse use cases.

Model specific inputs available in [Cloudflare Docs](https://developers.cloudflare.com/workers-ai/models/).

### Resource `ai.finetunes`:

- `create_ai_finetunes` (`write`): Create a new Finetune
- `list_ai_finetunes` (`read`): List Finetunes

### Resource `ai.finetunes.assets`:

- `create_finetunes_ai_assets` (`write`): Upload a Finetune Asset

### Resource `ai.finetunes.public`:

- `list_finetunes_ai_public` (`read`): List Public Finetunes

### Resource `ai.authors`:

- `list_ai_authors` (`read`): Author Search

### Resource `ai.tasks`:

- `list_ai_tasks` (`read`): Task Search

### Resource `ai.models`:

- `list_ai_models` (`read`): Model Search

### Resource `ai.models.schema`:

- `get_models_ai_schema` (`read`): Get Model Schema

### Resource `security_center.insights`:

- `list_security_center_insights` (`read`): Get Security Center Insights
- `dismiss_security_center_insights` (`write`): Archive Security Center Insight

### Resource `security_center.insights.class`:

- `get_insights_security_center_class` (`read`): Get Security Center Insight Counts by Class

### Resource `security_center.insights.severity`:

- `get_insights_security_center_severity` (`read`): Get Security Center Insight Counts by Severity

### Resource `security_center.insights.type`:

- `get_insights_security_center_type` (`read`): Get Security Center Insight Counts by Type

### Resource `browser_rendering.content`:

- `create_browser_rendering_content` (`write`): Fetches rendered HTML content from provided URL or HTML. Check available options like `gotoOptions` and `waitFor*` to control page load behaviour.

### Resource `browser_rendering.pdf`:

- `create_browser_rendering_pdf` (`write`): Fetches rendered PDF from provided URL or HTML. Check available options like `gotoOptions` and `waitFor*` to control page load behaviour.

### Resource `browser_rendering.scrape`:

- `create_browser_rendering_scrape` (`write`): Get meta attributes like height, width, text and others of selected elements.

### Resource `browser_rendering.screenshot`:

- `create_browser_rendering_screenshot` (`write`): Takes a screenshot of a webpage from provided URL or HTML. Control page loading with `gotoOptions` and `waitFor*` options. Customize screenshots with `viewport`, `fullPage`, `clip` and others.

### Resource `browser_rendering.snapshot`:

- `create_browser_rendering_snapshot` (`write`): Returns the page's HTML content and screenshot. Control page loading with `gotoOptions` and `waitFor*` options. Customize screenshots with `viewport`, `fullPage`, `clip` and others.

### Resource `browser_rendering.json`:

- `create_browser_rendering_json` (`write`): Gets json from a webpage from a provided URL or HTML. Pass `prompt` or `schema` in the body. Control page loading with `gotoOptions` and `waitFor*` options.

### Resource `browser_rendering.links`:

- `create_browser_rendering_links` (`write`): Get links from a web page.

### Resource `browser_rendering.markdown`:

- `create_browser_rendering_markdown` (`write`): Gets markdown of a webpage from provided URL or HTML. Control page loading with `gotoOptions` and `waitFor*` options.

### Resource `custom_pages`:

- `update_custom_pages` (`write`): Updates the configuration of an existing custom page.
- `list_custom_pages` (`read`): Fetches all the custom pages.
- `get_custom_pages` (`read`): Fetches the details of a custom page.

### Resource `secrets_store.stores`:

- `create_secrets_store_stores` (`write`): Creates a store in the account
- `list_secrets_store_stores` (`read`): Lists all the stores in an account
- `delete_secrets_store_stores` (`write`): Deletes a single store

### Resource `secrets_store.stores.secrets`:

- `create_stores_secrets_store_secrets` (`write`): Creates a secret in the account
- `list_stores_secrets_store_secrets` (`read`): Lists all store secrets
- `delete_stores_secrets_store_secrets` (`write`): Deletes a single secret
- `bulk_delete_stores_secrets_store_secrets` (`write`): Deletes one or more secrets
- `duplicate_stores_secrets_store_secrets` (`write`): Duplicates the secret, keeping the value
- `edit_stores_secrets_store_secrets` (`write`): Updates a single secret
- `get_stores_secrets_store_secrets` (`read`): Returns details of a single secret

### Resource `secrets_store.quota`:

- `get_secrets_store_quota` (`read`): Lists the number of secrets used in the account.

### Resource `pipelines`:

- `create_pipelines` (`write`): Create a new Pipeline.
- `update_pipelines` (`write`): Update an existing Pipeline.
- `list_pipelines` (`read`): List, filter, and paginate Pipelines in an account.
- `delete_pipelines` (`write`): Delete a Pipeline.
- `get_pipelines` (`read`): Get configuration details of a Pipeline.
