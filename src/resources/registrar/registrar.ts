// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as DomainsAPI from './domains';
import {
  Domain as DomainsAPIDomain,
  DomainGetParams,
  DomainGetResponse,
  DomainListParams,
  DomainUpdateParams,
  DomainUpdateResponse,
  Domains,
  DomainsSinglePage,
} from './domains';
import * as RegistrationStatusAPI from './registration-status';
import { RegistrationStatus, RegistrationStatusGetParams } from './registration-status';
import * as UpdateStatusAPI from './update-status';
import { UpdateStatus, UpdateStatusGetParams } from './update-status';

export class Registrar extends APIResource {
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
  registrationStatus: RegistrationStatusAPI.RegistrationStatus = new RegistrationStatusAPI.RegistrationStatus(
    this._client,
  );
  updateStatus: UpdateStatusAPI.UpdateStatus = new UpdateStatusAPI.UpdateStatus(this._client);

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
   * const response = await client.registrar.check({
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
    params: RegistrarCheckParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RegistrarCheckResponse> {
    const { account_id = this._client.accountId, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/registrar/domain-check`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: RegistrarCheckResponse }>
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
   * appear in results, even if they are available at the registry level. See the
   * supported extensions list in `info.description`.
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
   * const response = await client.registrar.search({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   q: 'x',
   * });
   * ```
   */
  search(
    params: RegistrarSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RegistrarSearchResponse> {
    const { account_id = this._client.accountId, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/registrar/domain-search`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: RegistrarSearchResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * A domain registration resource representing the current state of a registered
 * domain.
 */
export interface Registration {
  /**
   * Whether the domain will be automatically renewed before expiration.
   */
  auto_renew: boolean;

  /**
   * When the domain was registered. Present when the registration resource exists.
   */
  created_at: string;

  /**
   * Fully qualified domain name (FQDN) including the extension (e.g., `example.com`,
   * `mybrand.app`). The domain name uniquely identifies a registration — the same
   * domain cannot be registered twice, making it a natural idempotency key for
   * registration requests.
   */
  domain_name: string;

  /**
   * When the domain registration expires. Present when the registration is ready;
   * may be null only while `status` is `registration_pending`.
   */
  expires_at: string | null;

  /**
   * Whether the domain is locked for transfer.
   */
  locked: boolean;

  /**
   * Current WHOIS privacy mode for the registration.
   */
  privacy_mode: 'redaction';

  /**
   * Current registration status.
   *
   * - `active`: Domain is registered and operational
   * - `registration_pending`: Registration is in progress
   * - `expired`: Domain has expired
   * - `suspended`: Domain is suspended by the registry
   * - `redemption_period`: Domain is in the redemption grace period
   * - `pending_delete`: Domain is pending deletion by the registry
   */
  status:
    | 'active'
    | 'registration_pending'
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
   * Whether the workflow has reached a terminal state. `true` when `state` is
   * `succeeded` or `failed`. `false` for `pending`, `in_progress`,
   * `action_required`, and `blocked`.
   */
  completed: boolean;

  created_at: string;

  links: WorkflowStatus.Links;

  /**
   * Workflow lifecycle state.
   *
   * - `pending`: Workflow has been created but not yet started processing.
   * - `in_progress`: Actively processing. Continue polling `links.self`. The
   *   workflow has an internal deadline and will not remain in this state
   *   indefinitely.
   * - `action_required`: Paused — requires action by the user (not the system). See
   *   `context.action` for what is needed. An automated polling loop must break on
   *   this state; it will not resolve on its own without user intervention.
   * - `blocked`: The workflow cannot make progress due to a third party such as the
   *   domain extension's registry or a losing registrar. No user action will help.
   *   Continue polling — the block may resolve when the third party responds.
   * - `succeeded`: Terminal. The operation completed successfully. `completed` will
   *   be `true`. For registrations, `context.registration` contains the resulting
   *   registration resource.
   * - `failed`: Terminal. The operation failed. `completed` will be `true`. See
   *   `error.code` and `error.message` for the reason. Do not auto-retry without
   *   user review.
   */
  state: 'pending' | 'in_progress' | 'action_required' | 'blocked' | 'succeeded' | 'failed';

  updated_at: string;

  /**
   * Workflow-specific data for this workflow.
   *
   * The workflow subject is identified by `context.domain_name` for domain-centric
   * workflows.
   */
  context?: { [key: string]: unknown };

  /**
   * Error details when a workflow reaches the `failed` state. The specific error
   * codes and messages depend on the workflow type (registration, update, etc.) and
   * the underlying registry response. These workflow error codes are separate from
   * immediate HTTP error `errors[].code` values returned by non-2xx responses.
   * Surface `error.message` to the user for context.
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
   * Error details when a workflow reaches the `failed` state. The specific error
   * codes and messages depend on the workflow type (registration, update, etc.) and
   * the underlying registry response. These workflow error codes are separate from
   * immediate HTTP error `errors[].code` values returned by non-2xx responses.
   * Surface `error.message` to the user for context.
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
export interface RegistrarCheckResponse {
  /**
   * Array of domain availability results. Domains on unsupported extensions are
   * included with `registrable: false` and a `reason` field. Malformed domain names
   * may be omitted.
   */
  domains: Array<RegistrarCheckResponse.Domain>;
}

export namespace RegistrarCheckResponse {
  /**
   * Represents a single authoritative domain availability result returned by the
   * Check endpoint. Check results reflect current registry status and should be used
   * immediately before registration.
   */
  export interface Domain {
    /**
     * The fully qualified domain name (FQDN) in punycode format for internationalized
     * domain names (IDNs).
     */
    name: string;

    /**
     * Indicates whether this domain can be registered programmatically through this
     * API based on a real-time registry check.
     *
     * - `true`: Domain is available for registration. The `pricing` object will be
     *   included.
     * - `false`: Domain is not available. See the `reason` field for why. `tier` may
     *   still be present on some non-registrable results, such as premium domains.
     */
    registrable: boolean;

    /**
     * Annual pricing information for a registrable domain. This object is only present
     * when `registrable` is `true`. All prices are per year and returned as strings to
     * preserve decimal precision.
     *
     * `registration_cost` and `renewal_cost` are frequently the same value, but may
     * differ — especially for premium domains where registries set different rates for
     * initial registration vs. renewal. For a multi-year registration (e.g., 4 years),
     * the first year is charged at `registration_cost` and each subsequent year at
     * `renewal_cost`. Registry pricing may change over time; the values returned here
     * reflect the current registry rate. Premium pricing may be surfaced by Search and
     * Check, but premium registration is not currently supported by this API.
     */
    pricing?: Domain.Pricing;

    /**
     * Present only when `registrable` is `false`. Explains why the domain cannot be
     * registered via this API.
     *
     * - `extension_not_supported_via_api`: Cloudflare Registrar supports this
     *   extension in the dashboard but it is not yet available for programmatic
     *   registration via this API. The user can register via
     *   `https://dash.cloudflare.com/{account_id}/domains/registrations`.
     * - `extension_not_supported`: This extension is not supported by Cloudflare
     *   Registrar at all.
     * - `extension_disallows_registration`: The extension's registry has temporarily
     *   or permanently frozen new registrations. No registrar can register domains on
     *   this extension at this time.
     * - `domain_premium`: The domain is premium priced. Premium registration is not
     *   currently supported by this API.
     * - `domain_unavailable`: The domain is already registered, reserved, or otherwise
     *   not available on a supported extension.
     */
    reason?:
      | 'extension_not_supported_via_api'
      | 'extension_not_supported'
      | 'extension_disallows_registration'
      | 'domain_premium'
      | 'domain_unavailable';

    /**
     * The pricing tier for this domain. Always present when `registrable` is `true`;
     * defaults to `standard` for most domains. May be absent when `registrable` is
     * `false`.
     *
     * - `standard`: Standard registry pricing
     * - `premium`: Premium domain with higher pricing set by the registry
     */
    tier?: 'standard' | 'premium';
  }

  export namespace Domain {
    /**
     * Annual pricing information for a registrable domain. This object is only present
     * when `registrable` is `true`. All prices are per year and returned as strings to
     * preserve decimal precision.
     *
     * `registration_cost` and `renewal_cost` are frequently the same value, but may
     * differ — especially for premium domains where registries set different rates for
     * initial registration vs. renewal. For a multi-year registration (e.g., 4 years),
     * the first year is charged at `registration_cost` and each subsequent year at
     * `renewal_cost`. Registry pricing may change over time; the values returned here
     * reflect the current registry rate. Premium pricing may be surfaced by Search and
     * Check, but premium registration is not currently supported by this API.
     */
    export interface Pricing {
      /**
       * ISO-4217 currency code for the prices (e.g., "USD", "EUR", "GBP").
       */
      currency: string;

      /**
       * The first-year cost to register this domain. For premium domains
       * (`tier: premium`), this price is set by the registry and may be significantly
       * higher than standard pricing. For multi-year registrations, this cost applies to
       * the first year only; subsequent years are charged at `renewal_cost`.
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
export interface RegistrarSearchResponse {
  /**
   * Array of domain suggestions sorted by relevance. May be empty if no domains
   * match the search criteria.
   */
  domains: Array<RegistrarSearchResponse.Domain>;
}

export namespace RegistrarSearchResponse {
  /**
   * Represents a single domain suggestion returned by the Search endpoint. Search
   * results are non-authoritative and may be based on cached data. Use POST
   * /domain-check to confirm real-time availability and pricing before registration.
   */
  export interface Domain {
    /**
     * The fully qualified domain name (FQDN) in punycode format for internationalized
     * domain names (IDNs).
     */
    name: string;

    /**
     * Indicates whether this domain appears available based on search data. Search
     * results are non-authoritative and may be stale. - `true`: The domain appears
     * available. Use POST /domain-check to confirm before registration.
     *
     * - `false`: The domain does not appear available in search results.
     */
    registrable: boolean;

    /**
     * Annual pricing information for a registrable domain. This object is only present
     * when `registrable` is `true`. All prices are per year and returned as strings to
     * preserve decimal precision.
     *
     * `registration_cost` and `renewal_cost` are frequently the same value, but may
     * differ — especially for premium domains where registries set different rates for
     * initial registration vs. renewal. For a multi-year registration (e.g., 4 years),
     * the first year is charged at `registration_cost` and each subsequent year at
     * `renewal_cost`. Registry pricing may change over time; the values returned here
     * reflect the current registry rate. Premium pricing may be surfaced by Search and
     * Check, but premium registration is not currently supported by this API.
     */
    pricing?: Domain.Pricing;

    /**
     * Present only when `registrable` is `false` on search results. Explains why the
     * domain does not appear registrable through this API. These values are advisory;
     * use POST /domain-check for authoritative status.
     *
     * - `extension_not_supported_via_api`: Cloudflare Registrar supports this
     *   extension in the dashboard but it is not yet available for programmatic
     *   registration via this API.
     * - `extension_not_supported`: This extension is not supported by Cloudflare
     *   Registrar at all.
     * - `extension_disallows_registration`: The extension's registry has temporarily
     *   or permanently frozen new registrations.
     * - `domain_premium`: The domain is premium priced. Premium registration is not
     *   currently supported by this API.
     * - `domain_unavailable`: The domain appears unavailable.
     */
    reason?:
      | 'extension_not_supported_via_api'
      | 'extension_not_supported'
      | 'extension_disallows_registration'
      | 'domain_premium'
      | 'domain_unavailable';

    /**
     * The pricing tier for this domain. Always present when `registrable` is `true`;
     * defaults to `standard` for most domains. May be absent when `registrable` is
     * `false`.
     *
     * - `standard`: Standard registry pricing
     * - `premium`: Premium domain with higher pricing set by the registry
     */
    tier?: 'standard' | 'premium';
  }

  export namespace Domain {
    /**
     * Annual pricing information for a registrable domain. This object is only present
     * when `registrable` is `true`. All prices are per year and returned as strings to
     * preserve decimal precision.
     *
     * `registration_cost` and `renewal_cost` are frequently the same value, but may
     * differ — especially for premium domains where registries set different rates for
     * initial registration vs. renewal. For a multi-year registration (e.g., 4 years),
     * the first year is charged at `registration_cost` and each subsequent year at
     * `renewal_cost`. Registry pricing may change over time; the values returned here
     * reflect the current registry rate. Premium pricing may be surfaced by Search and
     * Check, but premium registration is not currently supported by this API.
     */
    export interface Pricing {
      /**
       * ISO-4217 currency code for the prices (e.g., "USD", "EUR", "GBP").
       */
      currency: string;

      /**
       * The first-year cost to register this domain. For premium domains
       * (`tier: premium`), this price is set by the registry and may be significantly
       * higher than standard pricing. For multi-year registrations, this cost applies to
       * the first year only; subsequent years are charged at `renewal_cost`.
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

export interface RegistrarCheckParams {
  /**
   * Path param: Identifier
   */
  account_id?: string;

  /**
   * Body param: List of fully qualified domain names (FQDNs) to check for
   * availability. Each domain must include the extension.
   *
   * - Minimum: 1 domain
   * - Maximum: 20 domains per request
   * - Domains on unsupported extensions are returned with `registrable: false` and a
   *   `reason` field
   * - Malformed domain names (e.g., missing extension) may be omitted from the
   *   response
   */
  domains: Array<string>;
}

export interface RegistrarSearchParams {
  /**
   * Path param: Identifier
   */
  account_id?: string;

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

Registrar.Domains = Domains;
Registrar.DomainsSinglePage = DomainsSinglePage;
Registrar.RegistrationStatus = RegistrationStatus;
Registrar.UpdateStatus = UpdateStatus;

export declare namespace Registrar {
  export {
    type Registration as Registration,
    type WorkflowStatus as WorkflowStatus,
    type RegistrarCheckResponse as RegistrarCheckResponse,
    type RegistrarSearchResponse as RegistrarSearchResponse,
    type RegistrarCheckParams as RegistrarCheckParams,
    type RegistrarSearchParams as RegistrarSearchParams,
  };

  export {
    Domains as Domains,
    type DomainsAPIDomain as Domain,
    type DomainUpdateResponse as DomainUpdateResponse,
    type DomainGetResponse as DomainGetResponse,
    DomainsSinglePage as DomainsSinglePage,
    type DomainUpdateParams as DomainUpdateParams,
    type DomainListParams as DomainListParams,
    type DomainGetParams as DomainGetParams,
  };

  export {
    RegistrationStatus as RegistrationStatus,
    type RegistrationStatusGetParams as RegistrationStatusGetParams,
  };

  export { UpdateStatus as UpdateStatus, type UpdateStatusGetParams as UpdateStatusGetParams };
}
