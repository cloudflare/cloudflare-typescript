// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ExtensionsAPI from './extensions';
import {
  BaseExtensions,
  ExtensionGetParams,
  ExtensionGetResponse,
  ExtensionListParams,
  ExtensionListResponse,
  ExtensionListResponsesCursorPagination,
  Extensions,
} from './extensions';
import * as RegistrationStatusAPI from './registration-status';
import {
  BaseRegistrationStatus,
  RegistrationStatus,
  RegistrationStatusGetParams,
  RegistrationStatusGetResponse,
} from './registration-status';
import * as RegistrationsAPI from './registrations';
import {
  BaseRegistrations,
  RegistrationCreateParams,
  RegistrationCreateResponse,
  RegistrationEditParams,
  RegistrationEditResponse,
  RegistrationGetParams,
  RegistrationGetResponse,
  RegistrationListParams,
  RegistrationListResponse,
  RegistrationListResponsesCursorPagination,
  Registrations,
} from './registrations';
import * as UpdateStatusAPI from './update-status';
import {
  BaseUpdateStatus,
  UpdateStatus,
  UpdateStatusGetParams,
  UpdateStatusGetResponse,
} from './update-status';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Use the Registrar Sandbox API to test domain search, availability checks,
 * registration, and domain management flows without buying real domains.
 *
 * **This API is a test environment for the production Registrar API.**
 *
 * ## Prerequisites
 *
 * Before using this API, make sure you have:
 *
 * 1. **Cloudflare account** — the caller must have a valid Cloudflare account.
 * 2. **API authentication** — create an API token with Registrar Sandbox permissions.
 *
 * ## How the Sandbox API differs from the production Registrar API
 *
 * Because the Sandbox API is intended for testing, it behaves differently from
 * the production Registrar API in a few important ways:
 *
 * 1. **No billing** — you will not be charged real money for purchasing a domain.
 * 2. **No real domains** — purchased domains are test records and will not be
 *   reachable on the Internet.
 * 3. **No DNS zones** — purchasing a domain does not create a zone resource.
 * 4. **No Registration Express Mode** — you must provide full contact data.
 *
 * Sandbox purchases are still persisted. If you purchase a domain in the sandbox,
 * that domain will not be available for others to purchase in the sandbox.
 *
 * ## Terminology: domain extension
 *
 * Throughout this API, "extension" refers to the domain extension part of a fully
 * qualified domain name — the portion after the registrable label. For example,
 * in `example.co.uk`, the extension is `co.uk` (not just `uk`). This covers both
 * top-level domains like `com` and multi-level extensions like `co.uk`. This is
 * distinct from other uses of the word "extension" (e.g., EPP extensions).
 *
 * ## Supported extensions
 *
 * The Sandbox API currently supports programmatic registration for these
 * extensions:
 *
 * `com`, `net`
 *
 * The production Registrar API supports 40+ extensions.
 *
 * Cloudflare Registrar supports 400+ extensions in the dashboard. Extensions
 * not listed above can be registered at `https://dash.cloudflare.com/{account_id}/domains/registrations`.
 *
 * ## Typical workflow
 *
 * 1. **Search** — call `GET /domain-search?q={keyword}` to discover available domains.
 * 2. **Check** — call `POST /domain-check` with candidate domains to verify real-time
 *   availability and pricing.
 * 3. **Review the response** — if `registrable: false`, inspect `reason` to
 *   understand whether the domain is unavailable, the extension is not supported
 *   by this API, the extension is not supported by Cloudflare Registrar at all,
 *   or the extension's registry has frozen new registrations.
 * 4. **Handle premium domains** — if `tier: premium`, premium registration is
 *   not currently supported by this API. The Sandbox API currently supports
 *   only `com` and `net`, which do not have premium registrations, but clients
 *   should still handle this response for consistency with the production
 *   Registrar API. Surface the premium pricing to the user, but do not proceed
 *   to `POST /registrations` for that domain.
 * 5. **Observe the registration schema** — call `GET /extensions/:extension_name`
 *   to discover the required values for registering this extension.
 * 6. **Register** — call `POST /registrations` with the chosen domain name for
 *   supported non-premium registrations.
 * 7. **Confirm completion** — if the response is `201 Created`, registration
 *   completed within the default timeout and no polling is needed.
 * 8. **Poll when needed** — if the response is `202 Accepted`, poll
 *   `links.self` from the workflow response.
 * 9. **Stop for user action** — if `state: action_required`, stop polling and
 *   surface `context.action` to the user.
 *   The workflow will not resolve on its own.
 * 10. **Continue when blocked** — if `state: blocked`, continue polling and
 *   inform the user that a third party, such as the extension registry or losing
 *   registrar, is delaying progress.
 * 11. **Review failures before retrying** — if `state: failed`, review
 *   `error.code` and `error.message`, then decide whether user action or a new
 *   Check call is needed.
 *
 * ## Default behavior for mutating operations
 *
 * By default, mutating operations such as create and update hold the connection
 * for a bounded, server-defined amount of time while the operation completes.
 * In most cases, the response contains a completed workflow status and no
 * polling is required.
 *
 * - **Completed within the synchronous wait window:** Returns `201` (create)
 * or `200` (update) with a `workflow_status` where `state: succeeded` and
 * `completed: true`.
 * - **Still processing after the synchronous wait window:** Returns
 * `202 Accepted` with a `workflow_status` where `completed: false`. Use
 * the `links.self` URL to poll for completion.
 *
 * ## Non-blocking mode
 *
 * To receive an immediate `202 Accepted` response without waiting, send the
 * `Prefer: respond-async` request header (RFC 7240). The server will acknowledge
 * it with a `Preference-Applied: respond-async` response header.
 *
 * ## Polling
 *
 * When the response is `202`, poll the workflow status endpoint indicated by
 * `links.self` in the response body until the workflow reaches a terminal
 * state or requires user action.
 */
export class BaseRegistrarSandbox extends APIResource {
  static override readonly _key: readonly ['registrarSandbox'] = Object.freeze(['registrarSandbox'] as const);

  /**
   * Performs real-time, authoritative availability checks directly against domain
   * registries. Use this endpoint to verify a domain is available before attempting
   * registration via `POST /registrations`.
   *
   * **Important:** Unlike the Search endpoint, these results are authoritative and
   * reflect current registry status. Always check availability immediately before
   * registration as domain status can change rapidly.
   *
   * **Note:** This endpoint uses POST to accept a list of domains in the request
   * body. It is a read-only operation — it does not create, modify, or reserve any
   * domains.
   *
   * ### Extension support
   *
   * Only domains on extensions supported for programmatic registration by this API
   * can be registered. If you check a domain on an unsupported extension, the
   * response will include `registrable: false` with a `reason` field explaining why:
   *
   * - `extension_not_supported_via_api` — Cloudflare Registrar supports this
   *   extension in the dashboard, but it is not yet available for programmatic
   *   registration via this API. Register via
   *   `https://dash.cloudflare.com/{account_id}/domains/registrations` instead.
   * - `extension_not_supported` — This extension is not supported by Cloudflare
   *   Registrar.
   * - `extension_disallows_registration` — The extension's registry has temporarily
   *   or permanently frozen new registrations. No registrar can register domains on
   *   this extension at this time.
   * - `domain_premium` — The domain is premium priced. Premium registration is not
   *   currently supported by this API.
   * - `domain_unavailable` — The domain is already registered, reserved, or
   *   otherwise not available for registration on a supported extension.
   *
   * The `reason` field is only present when `registrable` is `false`.
   *
   * ### Behavior
   *
   * - Maximum 20 domains per request
   * - Pricing is only returned for domains where `registrable: true`
   * - Results are not cached; each request queries the registry
   *
   * ### Workflow
   *
   * 1. Call this endpoint with domains the user wants to register.
   * 2. For each domain where `registrable: true`, present pricing to the user.
   * 3. If `tier: premium`, note that premium registration is not currently supported
   *    by this API and do not proceed to `POST /registrations`.
   * 4. Proceed to `POST /registrations` only for supported non-premium domains.
   *
   * @example
   * ```ts
   * const response = await client.registrarSandbox.check({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   domains: [
   *     'myawesomebrand.com',
   *     'myawesomebrand.net',
   *     'myawesomebrand.org',
   *     'myawesomebrand.app',
   *     'myawesomebrand.dev',
   *   ],
   * });
   * ```
   */
  check(
    params: RegistrarSandboxCheckParams,
    options?: RequestOptions,
  ): APIPromise<RegistrarSandboxCheckResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/registrar-sandbox/domain-check`, {
        body,
        ...options,
      }) as APIPromise<{ result: RegistrarSandboxCheckResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Searches for domain name suggestions based on a keyword, phrase, or partial
   * domain name. Returns a list of potentially available domains with pricing
   * information.
   *
   * **Important:** Results are non-authoritative and based on cached data. Always
   * use the `/domain-check` endpoint to verify real-time availability before
   * attempting registration.
   *
   * Suggestions are scoped to extensions supported for programmatic registration via
   * this API (`POST /registrations`). Domains on unsupported extensions will not
   * appear in results, even if they are available at the registry level.
   *
   * ### Use cases
   *
   * - Brand name discovery (e.g., "acme corp" → acmecorp.com, acmecorp.dev)
   * - Keyword-based suggestions (e.g., "coffee shop" → coffeeshop.com,
   *   mycoffeeshop.net)
   * - Alternative extension discovery (e.g., "example.com" → example.com,
   *   example.app, example.xyz)
   *
   * ### Workflow
   *
   * 1. Call this endpoint with a keyword or domain name.
   * 2. Present suggestions to the user.
   * 3. Call `/domain-check` with the user's chosen domains to confirm real-time
   *    availability and pricing.
   * 4. Proceed to `POST /registrations` only for supported non-premium domains where
   *    the Check response returns `registrable: true`.
   *
   * **Note:** Searching with just a domain extension (e.g., "com" or ".app") is not
   * supported. Provide a keyword or domain name.
   *
   * @example
   * ```ts
   * const response = await client.registrarSandbox.search({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   q: 'x',
   * });
   * ```
   */
  search(
    params: RegistrarSandboxSearchParams,
    options?: RequestOptions,
  ): APIPromise<RegistrarSandboxSearchResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/registrar-sandbox/domain-search`, {
        query,
        ...options,
      }) as APIPromise<{ result: RegistrarSandboxSearchResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
/**
 * Use the Registrar Sandbox API to test domain search, availability checks,
 * registration, and domain management flows without buying real domains.
 *
 * **This API is a test environment for the production Registrar API.**
 *
 * ## Prerequisites
 *
 * Before using this API, make sure you have:
 *
 * 1. **Cloudflare account** — the caller must have a valid Cloudflare account.
 * 2. **API authentication** — create an API token with Registrar Sandbox permissions.
 *
 * ## How the Sandbox API differs from the production Registrar API
 *
 * Because the Sandbox API is intended for testing, it behaves differently from
 * the production Registrar API in a few important ways:
 *
 * 1. **No billing** — you will not be charged real money for purchasing a domain.
 * 2. **No real domains** — purchased domains are test records and will not be
 *   reachable on the Internet.
 * 3. **No DNS zones** — purchasing a domain does not create a zone resource.
 * 4. **No Registration Express Mode** — you must provide full contact data.
 *
 * Sandbox purchases are still persisted. If you purchase a domain in the sandbox,
 * that domain will not be available for others to purchase in the sandbox.
 *
 * ## Terminology: domain extension
 *
 * Throughout this API, "extension" refers to the domain extension part of a fully
 * qualified domain name — the portion after the registrable label. For example,
 * in `example.co.uk`, the extension is `co.uk` (not just `uk`). This covers both
 * top-level domains like `com` and multi-level extensions like `co.uk`. This is
 * distinct from other uses of the word "extension" (e.g., EPP extensions).
 *
 * ## Supported extensions
 *
 * The Sandbox API currently supports programmatic registration for these
 * extensions:
 *
 * `com`, `net`
 *
 * The production Registrar API supports 40+ extensions.
 *
 * Cloudflare Registrar supports 400+ extensions in the dashboard. Extensions
 * not listed above can be registered at `https://dash.cloudflare.com/{account_id}/domains/registrations`.
 *
 * ## Typical workflow
 *
 * 1. **Search** — call `GET /domain-search?q={keyword}` to discover available domains.
 * 2. **Check** — call `POST /domain-check` with candidate domains to verify real-time
 *   availability and pricing.
 * 3. **Review the response** — if `registrable: false`, inspect `reason` to
 *   understand whether the domain is unavailable, the extension is not supported
 *   by this API, the extension is not supported by Cloudflare Registrar at all,
 *   or the extension's registry has frozen new registrations.
 * 4. **Handle premium domains** — if `tier: premium`, premium registration is
 *   not currently supported by this API. The Sandbox API currently supports
 *   only `com` and `net`, which do not have premium registrations, but clients
 *   should still handle this response for consistency with the production
 *   Registrar API. Surface the premium pricing to the user, but do not proceed
 *   to `POST /registrations` for that domain.
 * 5. **Observe the registration schema** — call `GET /extensions/:extension_name`
 *   to discover the required values for registering this extension.
 * 6. **Register** — call `POST /registrations` with the chosen domain name for
 *   supported non-premium registrations.
 * 7. **Confirm completion** — if the response is `201 Created`, registration
 *   completed within the default timeout and no polling is needed.
 * 8. **Poll when needed** — if the response is `202 Accepted`, poll
 *   `links.self` from the workflow response.
 * 9. **Stop for user action** — if `state: action_required`, stop polling and
 *   surface `context.action` to the user.
 *   The workflow will not resolve on its own.
 * 10. **Continue when blocked** — if `state: blocked`, continue polling and
 *   inform the user that a third party, such as the extension registry or losing
 *   registrar, is delaying progress.
 * 11. **Review failures before retrying** — if `state: failed`, review
 *   `error.code` and `error.message`, then decide whether user action or a new
 *   Check call is needed.
 *
 * ## Default behavior for mutating operations
 *
 * By default, mutating operations such as create and update hold the connection
 * for a bounded, server-defined amount of time while the operation completes.
 * In most cases, the response contains a completed workflow status and no
 * polling is required.
 *
 * - **Completed within the synchronous wait window:** Returns `201` (create)
 * or `200` (update) with a `workflow_status` where `state: succeeded` and
 * `completed: true`.
 * - **Still processing after the synchronous wait window:** Returns
 * `202 Accepted` with a `workflow_status` where `completed: false`. Use
 * the `links.self` URL to poll for completion.
 *
 * ## Non-blocking mode
 *
 * To receive an immediate `202 Accepted` response without waiting, send the
 * `Prefer: respond-async` request header (RFC 7240). The server will acknowledge
 * it with a `Preference-Applied: respond-async` response header.
 *
 * ## Polling
 *
 * When the response is `202`, poll the workflow status endpoint indicated by
 * `links.self` in the response body until the workflow reaches a terminal
 * state or requires user action.
 */
export class RegistrarSandbox extends BaseRegistrarSandbox {
  registrations: RegistrationsAPI.Registrations = new RegistrationsAPI.Registrations(this._client);
  registrationStatus: RegistrationStatusAPI.RegistrationStatus = new RegistrationStatusAPI.RegistrationStatus(
    this._client,
  );
  updateStatus: UpdateStatusAPI.UpdateStatus = new UpdateStatusAPI.UpdateStatus(this._client);
  extensions: ExtensionsAPI.Extensions = new ExtensionsAPI.Extensions(this._client);
}

/**
 * A domain registration resource representing the current state of a registered
 * domain.
 */
export interface Registration {
  /**
   * Whether automatic renewal occurs before expiration.
   */
  auto_renew: boolean;

  /**
   * When the domain was registered. Present when the registration resource exists.
   */
  created_at: string;

  /**
   * Provides a fully qualified domain name (FQDN), including the extension (e.g.,
   * `example.com`, `mybrand.app`). The domain name uniquely identifies a
   * registration. Cloudflare permits only one registration per domain, making the
   * domain name a natural idempotency key for registration requests.
   */
  domain_name: string;

  /**
   * When the domain registration expires. Ready registrations include this value;
   * only `registration_pending` and `transfer_pending` may return null.
   */
  expires_at: string | null;

  /**
   * Whether the domain is locked for transfer.
   */
  locked: boolean;

  /**
   * Current WHOIS privacy mode for the registration.
   */
  privacy_mode: 'off' | 'redaction';

  /**
   * Current registration status.
   *
   * - `active`: The domain operates with an active registration.
   * - `registration_pending`: Registration remains in progress.
   * - `transfer_pending`: Domain transfer is in progress.
   * - `expired`: The domain registration expired.
   * - `suspended`: The registry suspended the domain.
   * - `redemption_period`: The domain entered the redemption grace period.
   * - `pending_delete`: The registry scheduled the domain for deletion.
   */
  status:
    | 'active'
    | 'registration_pending'
    | 'transfer_pending'
    | 'expired'
    | 'suspended'
    | 'redemption_period'
    | 'pending_delete';
}

/**
 * Status of an async registration workflow.
 */
export interface WorkflowStatus {
  /**
   * Indicates whether the workflow reached a terminal state. A `succeeded` or
   * `failed` state returns `true`; `pending`, `in_progress`, `action_required`, and
   * `blocked` return `false`.
   */
  completed: boolean;

  created_at: string;

  links: WorkflowStatus.Links;

  /**
   * Describes the workflow lifecycle state.
   *
   * - `pending`: The workflow awaits processing.
   * - `in_progress`: Processing started. Continue polling `links.self`. An internal
   *   deadline limits the duration of this state.
   * - `action_required`: The workflow pauses for user action. See `context.action`
   *   for details. Stop automated polling until the user completes the required
   *   action.
   * - `blocked`: A third party, such as the domain extension's registry or a losing
   *   registrar, prevents progress. Continue polling because the block may resolve
   *   when the third party responds.
   * - `succeeded`: Terminal state. The operation completed successfully. `completed`
   *   equals `true`. For registrations, `context.registration` contains the
   *   resulting registration resource.
   * - `failed`: Terminal state. The operation failed. `completed` equals `true`. See
   *   `error.code` and `error.message` for the reason. Require user review before
   *   retrying.
   */
  state: 'pending' | 'in_progress' | 'action_required' | 'blocked' | 'succeeded' | 'failed';

  updated_at: string;

  /**
   * Provides workflow-specific data.
   *
   * For domain-centric workflows, `context.domain_name` identifies the workflow
   * subject.
   */
  context?: { [key: string]: unknown };

  /**
   * Provides error details when a workflow reaches the `failed` state. The workflow
   * type (registration, update, etc.) and underlying registry response determine the
   * specific codes and messages. Workflow error codes differ from immediate HTTP
   * error `errors[].code` values in non-2xx responses. Surface `error.message` to
   * the user for context.
   */
  error?: WorkflowStatus.Error | null;
}

export namespace WorkflowStatus {
  export interface Links {
    /**
     * URL to this status resource.
     */
    self: string;

    /**
     * URL to the domain resource.
     */
    resource?: string;
  }

  /**
   * Provides error details when a workflow reaches the `failed` state. The workflow
   * type (registration, update, etc.) and underlying registry response determine the
   * specific codes and messages. Workflow error codes differ from immediate HTTP
   * error `errors[].code` values in non-2xx responses. Surface `error.message` to
   * the user for context.
   */
  export interface Error {
    /**
     * Machine-readable error code identifying the failure reason.
     */
    code: string;

    /**
     * Human-readable explanation of the failure. May include registry-specific
     * details.
     */
    message: string;
  }
}

/**
 * Contains the availability check results.
 */
export interface RegistrarSandboxCheckResponse {
  /**
   * Array of domain availability results. Results for unsupported extensions contain
   * `registrable: false` and a `reason` field. The response may omit malformed
   * domain names.
   */
  domains: Array<RegistrarSandboxCheckResponse.Domain>;
}

export namespace RegistrarSandboxCheckResponse {
  /**
   * Describes a single authoritative domain availability result from the Check
   * endpoint. Check results reflect current registry status; use them immediately
   * before registration.
   */
  export interface Domain {
    /**
     * The fully qualified domain name (FQDN) in punycode format for internationalized
     * domain names (IDNs).
     */
    name: string;

    /**
     * Indicates programmatic registration eligibility according to a real-time
     * registry check.
     *
     * - `true`: The domain is available for registration. The response includes the
     *   `pricing` object.
     * - `false`: A restriction prevents registration. See the `reason` field for
     *   details. Some results, such as premium domains, may still include `tier`.
     */
    registrable: boolean;

    /**
     * Provides annual pricing information for a given domain. The API returns all
     * per-year prices as strings to preserve decimal precision.
     *
     * `renewal_cost` and `registration_cost` or `transfer_cost` are frequently the
     * same value, but may differ due to premium rates for certain domains.
     *
     * For a multi-year operations, the operation's cost applies to the first year and
     * `renewal_cost` applies to each subsequent year. The values reflect the current
     * registry rate, which can change over time.
     */
    pricing?: Domain.Pricing;

    /**
     * Appears only when `registrable` is `false` and explains the result.
     *
     * - `extension_not_supported_via_api`: Cloudflare Registrar supports this
     *   extension in the dashboard but currently excludes it from programmatic
     *   registration through this API. The user can register via
     *   `https://dash.cloudflare.com/{account_id}/domains/registrations`.
     * - `extension_not_supported`: Cloudflare Registrar excludes this extension
     *   entirely.
     * - `extension_disallows_registration`: The extension's registry temporarily or
     *   permanently freezes new registrations. Registrars currently cannot register
     *   domains on this extension.
     * - `domain_premium`: The domain carries premium pricing. This API currently
     *   supports standard registrations only.
     * - `domain_unavailable`: An existing registration, reservation, or other registry
     *   restriction makes the domain unavailable on a supported extension.
     */
    reason?:
      | 'extension_not_supported_via_api'
      | 'extension_not_supported'
      | 'extension_disallows_registration'
      | 'domain_premium'
      | 'domain_unavailable';

    /**
     * The pricing tier for this domain. A `registrable` value of `true` always
     * includes this field, which defaults to `standard` for most domains. A
     * `registrable` value of `false` may omit it.
     *
     * - `standard`: Standard registry pricing.
     * - `premium`: Premium domain with higher pricing from the registry.
     */
    tier?: 'standard' | 'premium';
  }

  export namespace Domain {
    /**
     * Provides annual pricing information for a given domain. The API returns all
     * per-year prices as strings to preserve decimal precision.
     *
     * `renewal_cost` and `registration_cost` or `transfer_cost` are frequently the
     * same value, but may differ due to premium rates for certain domains.
     *
     * For a multi-year operations, the operation's cost applies to the first year and
     * `renewal_cost` applies to each subsequent year. The values reflect the current
     * registry rate, which can change over time.
     */
    export interface Pricing {
      /**
       * ISO-4217 currency code for the prices (e.g., "USD", "EUR", "GBP").
       */
      currency: string;

      /**
       * The first-year cost to register this domain.
       */
      registration_cost: string;

      /**
       * Per-year renewal cost for this domain. Applied to each year beyond the first
       * year of a multi-year registration, and to each annual auto-renewal thereafter.
       * May differ from `registration_cost`, especially for premium domains where
       * initial registration often costs more than renewals.
       */
      renewal_cost: string;
    }
  }
}

/**
 * Contains the search results.
 */
export interface RegistrarSandboxSearchResponse {
  /**
   * Lists domain suggestions in relevance order. An empty array indicates that the
   * search criteria matched zero domains.
   */
  domains: Array<RegistrarSandboxSearchResponse.Domain>;
}

export namespace RegistrarSandboxSearchResponse {
  /**
   * Describes a single domain suggestion from the Search endpoint. Search results
   * use non-authoritative data that may come from a cache. Use POST /domain-check to
   * confirm real-time availability and pricing before registration.
   */
  export interface Domain {
    /**
     * The fully qualified domain name (FQDN) in punycode format for internationalized
     * domain names (IDNs).
     */
    name: string;

    /**
     * Indicates domain availability according to potentially stale, non-authoritative
     * search data.
     *
     * - `true`: The domain appears available. Use POST /domain-check to confirm before
     *   registration.
     * - `false`: Search results mark the domain ineligible for registration through
     *   this API. See `reason` for details.
     */
    registrable: boolean;

    /**
     * Provides annual pricing information for a given domain. The API returns all
     * per-year prices as strings to preserve decimal precision.
     *
     * `renewal_cost` and `registration_cost` or `transfer_cost` are frequently the
     * same value, but may differ due to premium rates for certain domains.
     *
     * For a multi-year operations, the operation's cost applies to the first year and
     * `renewal_cost` applies to each subsequent year. The values reflect the current
     * registry rate, which can change over time.
     */
    pricing?: Domain.Pricing;

    /**
     * Appears only when `registrable` is `false` and explains the advisory search
     * result. Use POST /domain-check for authoritative status.
     *
     * - `extension_not_supported_via_api`: Cloudflare Registrar supports this
     *   extension in the dashboard but currently excludes it from programmatic
     *   registration through this API.
     * - `extension_not_supported`: Cloudflare Registrar excludes this extension
     *   entirely.
     * - `extension_disallows_registration`: The extension's registry temporarily or
     *   permanently freezes new registrations.
     * - `domain_premium`: The domain carries premium pricing. This API currently
     *   supports standard registrations only.
     * - `domain_unavailable`: The domain appears unavailable.
     */
    reason?:
      | 'extension_not_supported_via_api'
      | 'extension_not_supported'
      | 'extension_disallows_registration'
      | 'domain_premium'
      | 'domain_unavailable';

    /**
     * The pricing tier for this domain. A `registrable` value of `true` always
     * includes this field, which defaults to `standard` for most domains. A
     * `registrable` value of `false` may omit it.
     *
     * - `standard`: Standard registry pricing.
     * - `premium`: Premium domain with higher pricing from the registry.
     */
    tier?: 'standard' | 'premium';
  }

  export namespace Domain {
    /**
     * Provides annual pricing information for a given domain. The API returns all
     * per-year prices as strings to preserve decimal precision.
     *
     * `renewal_cost` and `registration_cost` or `transfer_cost` are frequently the
     * same value, but may differ due to premium rates for certain domains.
     *
     * For a multi-year operations, the operation's cost applies to the first year and
     * `renewal_cost` applies to each subsequent year. The values reflect the current
     * registry rate, which can change over time.
     */
    export interface Pricing {
      /**
       * ISO-4217 currency code for the prices (e.g., "USD", "EUR", "GBP").
       */
      currency: string;

      /**
       * The first-year cost to register this domain.
       */
      registration_cost: string;

      /**
       * Per-year renewal cost for this domain. Applied to each year beyond the first
       * year of a multi-year registration, and to each annual auto-renewal thereafter.
       * May differ from `registration_cost`, especially for premium domains where
       * initial registration often costs more than renewals.
       */
      renewal_cost: string;
    }
  }
}

export interface RegistrarSandboxCheckParams {
  /**
   * Path param: Cloudflare account ID. Required for all Registrar API operations.
   */
  account_id: string;

  /**
   * Body param: List of fully qualified domain names (FQDNs) to check for
   * availability. Each domain must include the extension.
   *
   * - Minimum: 1 domain.
   * - Maximum: 20 domains per request.
   * - The response returns domains on unsupported extensions with
   *   `registrable: false` and a `reason` field.
   * - The response may omit malformed domain names (e.g., names missing an
   *   extension).
   */
  domains: Array<string>;
}

export interface RegistrarSandboxSearchParams {
  /**
   * Path param: Cloudflare account ID. Required for all Registrar API operations.
   */
  account_id: string;

  /**
   * Query param: The search term to find domain suggestions. Accepts keywords,
   * phrases, or full domain names.
   *
   * - Phrases: "coffee shop" returns coffeeshop.com, mycoffeeshop.net, etc.
   * - Domain names: "example.com" returns example.com and variations across
   *   extensions
   */
  q: string;

  /**
   * Query param: Limits results to specific domain extensions from the supported
   * set. If not specified, returns results across all supported extensions.
   * Extensions not in the supported set are silently ignored.
   */
  extensions?: Array<string>;

  /**
   * Query param: Maximum number of domain suggestions to return. Defaults to 20 if
   * not specified.
   */
  limit?: number;
}

RegistrarSandbox.Registrations = Registrations;
RegistrarSandbox.BaseRegistrations = BaseRegistrations;
RegistrarSandbox.RegistrationStatus = RegistrationStatus;
RegistrarSandbox.BaseRegistrationStatus = BaseRegistrationStatus;
RegistrarSandbox.UpdateStatus = UpdateStatus;
RegistrarSandbox.BaseUpdateStatus = BaseUpdateStatus;
RegistrarSandbox.Extensions = Extensions;
RegistrarSandbox.BaseExtensions = BaseExtensions;

export declare namespace RegistrarSandbox {
  export {
    type Registration as Registration,
    type WorkflowStatus as WorkflowStatus,
    type RegistrarSandboxCheckResponse as RegistrarSandboxCheckResponse,
    type RegistrarSandboxSearchResponse as RegistrarSandboxSearchResponse,
    type RegistrarSandboxCheckParams as RegistrarSandboxCheckParams,
    type RegistrarSandboxSearchParams as RegistrarSandboxSearchParams,
  };

  export {
    Registrations as Registrations,
    BaseRegistrations as BaseRegistrations,
    type RegistrationCreateResponse as RegistrationCreateResponse,
    type RegistrationListResponse as RegistrationListResponse,
    type RegistrationEditResponse as RegistrationEditResponse,
    type RegistrationGetResponse as RegistrationGetResponse,
    type RegistrationListResponsesCursorPagination as RegistrationListResponsesCursorPagination,
    type RegistrationCreateParams as RegistrationCreateParams,
    type RegistrationListParams as RegistrationListParams,
    type RegistrationEditParams as RegistrationEditParams,
    type RegistrationGetParams as RegistrationGetParams,
  };

  export {
    RegistrationStatus as RegistrationStatus,
    BaseRegistrationStatus as BaseRegistrationStatus,
    type RegistrationStatusGetResponse as RegistrationStatusGetResponse,
    type RegistrationStatusGetParams as RegistrationStatusGetParams,
  };

  export {
    UpdateStatus as UpdateStatus,
    BaseUpdateStatus as BaseUpdateStatus,
    type UpdateStatusGetResponse as UpdateStatusGetResponse,
    type UpdateStatusGetParams as UpdateStatusGetParams,
  };

  export {
    Extensions as Extensions,
    BaseExtensions as BaseExtensions,
    type ExtensionListResponse as ExtensionListResponse,
    type ExtensionGetResponse as ExtensionGetResponse,
    type ExtensionListResponsesCursorPagination as ExtensionListResponsesCursorPagination,
    type ExtensionListParams as ExtensionListParams,
    type ExtensionGetParams as ExtensionGetParams,
  };
}
