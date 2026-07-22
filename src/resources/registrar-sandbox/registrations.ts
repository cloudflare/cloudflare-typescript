// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseRegistrations extends APIResource {
  static override readonly _key: readonly ['registrarSandbox', 'registrations'] = Object.freeze([
    'registrarSandbox',
    'registrations',
  ] as const);

  /**
   * Starts a domain registration workflow.
   *
   * ### Prerequisites
   *
   * - The account must not already be at the maximum supported domain limit. A
   *   single account may own up to 100 domains in total across registrations created
   *   through either the dashboard or this API.
   * - The domain must be on a supported extension for programmatic registration.
   * - Use `POST /domain-check` immediately before calling this endpoint to confirm
   *   real-time availability and pricing.
   *
   * ### Defaults
   *
   * - `years`: defaults to the extension's minimum registration period (1 year for
   *   most extensions, but varies — for example, `.ai` (if supported) requires a
   *   minimum of 2 years).
   * - `auto_renew`: defaults to `false`. Setting it to `true` is an explicit opt-in
   *   authorizing Cloudflare to charge the account's default payment method up to 30
   *   days before domain expiry to renew the registration. Renewal pricing may
   *   change over time based on registry pricing.
   * - `privacy_mode`: defaults to `redaction`.
   *
   * ### Premium domains
   *
   * Premium domain registration is not currently supported by this API. If
   * `POST /domain-check` returns `tier: premium`, do not call this endpoint for that
   * domain.
   *
   * ### Response behavior
   *
   * By default, the server holds the connection for a bounded, server-defined amount
   * of time while the registration completes. Most registrations finish within this
   * window and return `201 Created` with a completed workflow status.
   *
   * If the registration is still processing after this synchronous wait window, the
   * server returns `202 Accepted`. Poll the URL in `links.self` to track progress.
   *
   * To skip the wait and receive an immediate `202`, send `Prefer: respond-async`.
   *
   * @example
   * ```ts
   * const registration = await client.registrarSandbox.registrations.create({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   domain_name: 'my-brand-example.io',
   *   contacts: {
   *     administrator: { ... },
   *     billing: { ... },
   *     registrant: { ... },
   *     technical: { ... },
   *   },
   *   years: 1,
   * });
   * ```
   */
  create(params: RegistrationCreateParams, options?: RequestOptions): APIPromise<RegistrationCreateResponse> {
    const { account_id, Prefer, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/registrar-sandbox/registrations`, {
        body,
        ...options,
        headers: buildHeaders([{ ...(Prefer != null ? { Prefer: Prefer } : undefined) }, options?.headers]),
      }) as APIPromise<{ result: RegistrationCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a paginated list of domain registrations owned by the account.
   *
   * This endpoint uses cursor-based pagination. Results are ordered by registration
   * date by default. To fetch the next page, pass the `cursor` value from the
   * `result_info` object in the response as the `cursor` query parameter in your
   * next request. An empty `cursor` string indicates there are no more pages.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const registrationListResponse of client.registrarSandbox.registrations.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: RegistrationListParams,
    options?: RequestOptions,
  ): PagePromise<RegistrationListResponsesCursorPagination, RegistrationListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/registrar-sandbox/registrations`,
      CursorPagination<RegistrationListResponse>,
      { query, ...options },
    );
  }

  /**
   * Updates an existing domain registration.
   *
   * By default, the server holds the connection for a bounded, server-defined amount
   * of time while the update completes. Most updates finish within this window and
   * return `200 OK` with a completed workflow status.
   *
   * If the update is still processing after this synchronous wait window, the server
   * returns `202 Accepted`. Poll the URL in `links.self` to track progress.
   *
   * To skip the wait and receive an immediate `202`, send `Prefer: respond-async`.
   *
   * This endpoint currently supports updating `auto_renew` only.
   *
   * @example
   * ```ts
   * const response =
   *   await client.registrarSandbox.registrations.edit(
   *     'example.com',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  edit(
    domainName: string,
    params: RegistrationEditParams,
    options?: RequestOptions,
  ): APIPromise<RegistrationEditResponse> {
    const { account_id, Prefer, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/registrar-sandbox/registrations/${domainName}`, {
        body,
        ...options,
        headers: buildHeaders([
          { ...(Prefer?.toString() != null ? { Prefer: Prefer?.toString() } : undefined) },
          options?.headers,
        ]),
      }) as APIPromise<{ result: RegistrationEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the current state of a domain registration.
   *
   * This is the canonical read endpoint for a domain you own. It returns the full
   * registration resource including current settings and expiration. When the
   * registration resource is ready, both `created_at` and `expires_at` are present
   * in the response.
   *
   * @example
   * ```ts
   * const registration =
   *   await client.registrarSandbox.registrations.get(
   *     'example.com',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    domainName: string,
    params: RegistrationGetParams,
    options?: RequestOptions,
  ): APIPromise<RegistrationGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/registrar-sandbox/registrations/${domainName}`,
        options,
      ) as APIPromise<{ result: RegistrationGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Registrations extends BaseRegistrations {}

export type RegistrationListResponsesCursorPagination = CursorPagination<RegistrationListResponse>;

/**
 * Status of an async registration workflow.
 */
export interface RegistrationCreateResponse {
  /**
   * Whether the workflow has reached a terminal state. `true` when `state` is
   * `succeeded` or `failed`. `false` for `pending`, `in_progress`,
   * `action_required`, and `blocked`.
   */
  completed: boolean;

  created_at: string;

  links: RegistrationCreateResponse.Links;

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
  error?: RegistrationCreateResponse.Error | null;
}

export namespace RegistrationCreateResponse {
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
 * A domain registration resource representing the current state of a registered
 * domain.
 */
export interface RegistrationListResponse {
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
export interface RegistrationEditResponse {
  /**
   * Whether the workflow has reached a terminal state. `true` when `state` is
   * `succeeded` or `failed`. `false` for `pending`, `in_progress`,
   * `action_required`, and `blocked`.
   */
  completed: boolean;

  created_at: string;

  links: RegistrationEditResponse.Links;

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
  error?: RegistrationEditResponse.Error | null;
}

export namespace RegistrationEditResponse {
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
 * A domain registration resource representing the current state of a registered
 * domain.
 */
export interface RegistrationGetResponse {
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

export interface RegistrationCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Fully qualified domain name (FQDN) including the extension (e.g.,
   * `example.com`, `mybrand.app`). The domain name uniquely identifies a
   * registration — the same domain cannot be registered twice, making it a natural
   * idempotency key for registration requests.
   */
  domain_name: string;

  /**
   * Body param: User acknowledgements required by a specific extension or premium
   * registration flow. The expected keys are described by the extension registration
   * schema returned by the extension discovery endpoint.
   */
  acknowledgements?: { [key: string]: unknown };

  /**
   * Body param: Enable or disable automatic renewal. Defaults to `false` if omitted.
   * Setting this field to `true` is an explicit opt-in authorizing Cloudflare to
   * charge the account's default payment method up to 30 days before domain expiry
   * to renew the domain automatically. Renewal pricing may change over time based on
   * registry pricing.
   */
  auto_renew?: boolean;

  /**
   * Body param: Registry-specific contact extension values for the registrant. The
   * required keys and allowed values vary by extension and are described by
   * `GET /accounts/{account_id}/registrar/extensions/{extension}` in the
   * `registration_schema.properties.contact_extensions` object.
   *
   * Examples include `.us` nexus fields, `.uk` registrant type fields, and `.ca`
   * legal type fields. Omit this object for extensions whose registration schema
   * does not include `contact_extensions`.
   */
  contact_extensions?: { [key: string]: unknown };

  /**
   * Body param: Contact data for the registration request.
   *
   * The per-extension schema returned by
   * `GET /accounts/{account_id}/registrar/extensions/{extension}` is the
   * authoritative contract for which contact roles are accepted. Every currently
   * supported extension requires only `contacts.registrant` from API callers.
   * Additional roles such as `technical`, `administrator`, and `billing` may be
   * provided when the extension schema includes them. If a registry requires one of
   * those roles and the caller omits it, Cloudflare may derive that contact from
   * `contacts.registrant`.
   *
   * If the `contacts` object is omitted entirely from the request, or if
   * `contacts.registrant` is not provided, the system will use the account's default
   * address book entry as the registrant contact. This default must be
   * pre-configured by the account owner at
   * `https://dash.cloudflare.com/{account_id}/domains/registrations`, where they can
   * create or update the address book entry and accept the required agreement. No
   * API exists for managing address book entries at this time.
   *
   * If no default address book entry exists and no registrant contact is provided,
   * the registration request will fail with a validation error.
   */
  contacts?: RegistrationCreateParams.Contacts;

  /**
   * Body param: WHOIS privacy mode for the registration. Defaults to `redaction`.
   *
   * - `off`: Do not request WHOIS privacy.
   * - `redaction`: Request WHOIS redaction where supported by the extension. Some
   *   extensions do not support privacy/redaction.
   */
  privacy_mode?: 'redaction';

  /**
   * Body param: Number of years to register (1–10). If omitted, defaults to the
   * minimum registration period required by the registry for this extension. For
   * most extensions this is 1 year, but some extensions require longer minimum terms
   * (e.g., `.ai` requires a minimum of 2 years).
   *
   * The registry for each extension may also enforce its own maximum registration
   * term. If the requested value exceeds the registry's maximum, the registration
   * will be rejected. When in doubt, use the default by omitting this field.
   */
  years?: number;

  /**
   * Header param: Set to `respond-async` to receive an immediate `202 Accepted`
   * without waiting for the operation to complete (RFC 7240).
   *
   * The header may be combined with other preferences using standard comma-separated
   * syntax.
   */
  Prefer?: string;
}

export namespace RegistrationCreateParams {
  /**
   * Contact data for the registration request.
   *
   * The per-extension schema returned by
   * `GET /accounts/{account_id}/registrar/extensions/{extension}` is the
   * authoritative contract for which contact roles are accepted. Every currently
   * supported extension requires only `contacts.registrant` from API callers.
   * Additional roles such as `technical`, `administrator`, and `billing` may be
   * provided when the extension schema includes them. If a registry requires one of
   * those roles and the caller omits it, Cloudflare may derive that contact from
   * `contacts.registrant`.
   *
   * If the `contacts` object is omitted entirely from the request, or if
   * `contacts.registrant` is not provided, the system will use the account's default
   * address book entry as the registrant contact. This default must be
   * pre-configured by the account owner at
   * `https://dash.cloudflare.com/{account_id}/domains/registrations`, where they can
   * create or update the address book entry and accept the required agreement. No
   * API exists for managing address book entries at this time.
   *
   * If no default address book entry exists and no registrant contact is provided,
   * the registration request will fail with a validation error.
   */
  export interface Contacts {
    /**
     * Contact data for the domain registration. This information is submitted to the
     * domain registry and, depending on extension and privacy settings, may appear in
     * public WHOIS records.
     */
    administrator?: Contacts.Administrator;

    /**
     * Contact data for the domain registration. This information is submitted to the
     * domain registry and, depending on extension and privacy settings, may appear in
     * public WHOIS records.
     */
    billing?: Contacts.Billing;

    /**
     * Contact data for the domain registration. This information is submitted to the
     * domain registry and, depending on extension and privacy settings, may appear in
     * public WHOIS records.
     */
    registrant?: Contacts.Registrant;

    /**
     * Contact data for the domain registration. This information is submitted to the
     * domain registry and, depending on extension and privacy settings, may appear in
     * public WHOIS records.
     */
    technical?: Contacts.Technical;
  }

  export namespace Contacts {
    /**
     * Contact data for the domain registration. This information is submitted to the
     * domain registry and, depending on extension and privacy settings, may appear in
     * public WHOIS records.
     */
    export interface Administrator {
      /**
       * Email address for the registrant. Used for domain-related communications from
       * the registry, including ownership verification and renewal notices.
       */
      email: string;

      /**
       * Phone number in E.164 format: `+{country_code}.{number}` with no spaces or
       * dashes. Examples: `+1.5555555555` (US), `+44.2071234567` (UK), `+81.312345678`
       * (Japan).
       */
      phone: string;

      /**
       * Postal/mailing information for the contact. The `name` field is the complete
       * contact name in one string. Some registries require a complete personal name,
       * including a family or last name where applicable, but this API does not accept
       * separate first-name and last-name fields for registration contacts.
       */
      postal_info: Administrator.PostalInfo;

      /**
       * Fax number in E.164 format (e.g., `+1.5555555555`). Optional. Most registrations
       * do not require a fax number.
       */
      fax?: string;
    }

    export namespace Administrator {
      /**
       * Postal/mailing information for the contact. The `name` field is the complete
       * contact name in one string. Some registries require a complete personal name,
       * including a family or last name where applicable, but this API does not accept
       * separate first-name and last-name fields for registration contacts.
       */
      export interface PostalInfo {
        /**
         * Physical mailing address for the registrant contact.
         */
        address: PostalInfo.Address;

        /**
         * Full legal name of the contact, including all required name components for an
         * individual or authorized representative. Some registries require a complete
         * personal name that includes a family or last name where applicable. Provide the
         * complete name in this single field, for example `Ada Lovelace`; do not send
         * separate first-name or last-name fields.
         */
        name: string;

        /**
         * Organization or company name. Optional for individual registrants.
         */
        organization?: string;
      }

      export namespace PostalInfo {
        /**
         * Physical mailing address for the registrant contact.
         */
        export interface Address {
          /**
           * City or locality name.
           */
          city: string;

          /**
           * Two-letter country code per ISO 3166-1 alpha-2 (e.g., `US`, `GB`, `CA`, `DE`).
           */
          country_code: string;

          /**
           * Postal or ZIP code.
           */
          postal_code: string;

          /**
           * State, province, or region. Use the standard abbreviation where applicable
           * (e.g., `TX` for Texas, `ON` for Ontario).
           */
          state: string;

          /**
           * Street address including building/suite number.
           */
          street: string;
        }
      }
    }

    /**
     * Contact data for the domain registration. This information is submitted to the
     * domain registry and, depending on extension and privacy settings, may appear in
     * public WHOIS records.
     */
    export interface Billing {
      /**
       * Email address for the registrant. Used for domain-related communications from
       * the registry, including ownership verification and renewal notices.
       */
      email: string;

      /**
       * Phone number in E.164 format: `+{country_code}.{number}` with no spaces or
       * dashes. Examples: `+1.5555555555` (US), `+44.2071234567` (UK), `+81.312345678`
       * (Japan).
       */
      phone: string;

      /**
       * Postal/mailing information for the contact. The `name` field is the complete
       * contact name in one string. Some registries require a complete personal name,
       * including a family or last name where applicable, but this API does not accept
       * separate first-name and last-name fields for registration contacts.
       */
      postal_info: Billing.PostalInfo;

      /**
       * Fax number in E.164 format (e.g., `+1.5555555555`). Optional. Most registrations
       * do not require a fax number.
       */
      fax?: string;
    }

    export namespace Billing {
      /**
       * Postal/mailing information for the contact. The `name` field is the complete
       * contact name in one string. Some registries require a complete personal name,
       * including a family or last name where applicable, but this API does not accept
       * separate first-name and last-name fields for registration contacts.
       */
      export interface PostalInfo {
        /**
         * Physical mailing address for the registrant contact.
         */
        address: PostalInfo.Address;

        /**
         * Full legal name of the contact, including all required name components for an
         * individual or authorized representative. Some registries require a complete
         * personal name that includes a family or last name where applicable. Provide the
         * complete name in this single field, for example `Ada Lovelace`; do not send
         * separate first-name or last-name fields.
         */
        name: string;

        /**
         * Organization or company name. Optional for individual registrants.
         */
        organization?: string;
      }

      export namespace PostalInfo {
        /**
         * Physical mailing address for the registrant contact.
         */
        export interface Address {
          /**
           * City or locality name.
           */
          city: string;

          /**
           * Two-letter country code per ISO 3166-1 alpha-2 (e.g., `US`, `GB`, `CA`, `DE`).
           */
          country_code: string;

          /**
           * Postal or ZIP code.
           */
          postal_code: string;

          /**
           * State, province, or region. Use the standard abbreviation where applicable
           * (e.g., `TX` for Texas, `ON` for Ontario).
           */
          state: string;

          /**
           * Street address including building/suite number.
           */
          street: string;
        }
      }
    }

    /**
     * Contact data for the domain registration. This information is submitted to the
     * domain registry and, depending on extension and privacy settings, may appear in
     * public WHOIS records.
     */
    export interface Registrant {
      /**
       * Email address for the registrant. Used for domain-related communications from
       * the registry, including ownership verification and renewal notices.
       */
      email: string;

      /**
       * Phone number in E.164 format: `+{country_code}.{number}` with no spaces or
       * dashes. Examples: `+1.5555555555` (US), `+44.2071234567` (UK), `+81.312345678`
       * (Japan).
       */
      phone: string;

      /**
       * Postal/mailing information for the contact. The `name` field is the complete
       * contact name in one string. Some registries require a complete personal name,
       * including a family or last name where applicable, but this API does not accept
       * separate first-name and last-name fields for registration contacts.
       */
      postal_info: Registrant.PostalInfo;

      /**
       * Fax number in E.164 format (e.g., `+1.5555555555`). Optional. Most registrations
       * do not require a fax number.
       */
      fax?: string;
    }

    export namespace Registrant {
      /**
       * Postal/mailing information for the contact. The `name` field is the complete
       * contact name in one string. Some registries require a complete personal name,
       * including a family or last name where applicable, but this API does not accept
       * separate first-name and last-name fields for registration contacts.
       */
      export interface PostalInfo {
        /**
         * Physical mailing address for the registrant contact.
         */
        address: PostalInfo.Address;

        /**
         * Full legal name of the contact, including all required name components for an
         * individual or authorized representative. Some registries require a complete
         * personal name that includes a family or last name where applicable. Provide the
         * complete name in this single field, for example `Ada Lovelace`; do not send
         * separate first-name or last-name fields.
         */
        name: string;

        /**
         * Organization or company name. Optional for individual registrants.
         */
        organization?: string;
      }

      export namespace PostalInfo {
        /**
         * Physical mailing address for the registrant contact.
         */
        export interface Address {
          /**
           * City or locality name.
           */
          city: string;

          /**
           * Two-letter country code per ISO 3166-1 alpha-2 (e.g., `US`, `GB`, `CA`, `DE`).
           */
          country_code: string;

          /**
           * Postal or ZIP code.
           */
          postal_code: string;

          /**
           * State, province, or region. Use the standard abbreviation where applicable
           * (e.g., `TX` for Texas, `ON` for Ontario).
           */
          state: string;

          /**
           * Street address including building/suite number.
           */
          street: string;
        }
      }
    }

    /**
     * Contact data for the domain registration. This information is submitted to the
     * domain registry and, depending on extension and privacy settings, may appear in
     * public WHOIS records.
     */
    export interface Technical {
      /**
       * Email address for the registrant. Used for domain-related communications from
       * the registry, including ownership verification and renewal notices.
       */
      email: string;

      /**
       * Phone number in E.164 format: `+{country_code}.{number}` with no spaces or
       * dashes. Examples: `+1.5555555555` (US), `+44.2071234567` (UK), `+81.312345678`
       * (Japan).
       */
      phone: string;

      /**
       * Postal/mailing information for the contact. The `name` field is the complete
       * contact name in one string. Some registries require a complete personal name,
       * including a family or last name where applicable, but this API does not accept
       * separate first-name and last-name fields for registration contacts.
       */
      postal_info: Technical.PostalInfo;

      /**
       * Fax number in E.164 format (e.g., `+1.5555555555`). Optional. Most registrations
       * do not require a fax number.
       */
      fax?: string;
    }

    export namespace Technical {
      /**
       * Postal/mailing information for the contact. The `name` field is the complete
       * contact name in one string. Some registries require a complete personal name,
       * including a family or last name where applicable, but this API does not accept
       * separate first-name and last-name fields for registration contacts.
       */
      export interface PostalInfo {
        /**
         * Physical mailing address for the registrant contact.
         */
        address: PostalInfo.Address;

        /**
         * Full legal name of the contact, including all required name components for an
         * individual or authorized representative. Some registries require a complete
         * personal name that includes a family or last name where applicable. Provide the
         * complete name in this single field, for example `Ada Lovelace`; do not send
         * separate first-name or last-name fields.
         */
        name: string;

        /**
         * Organization or company name. Optional for individual registrants.
         */
        organization?: string;
      }

      export namespace PostalInfo {
        /**
         * Physical mailing address for the registrant contact.
         */
        export interface Address {
          /**
           * City or locality name.
           */
          city: string;

          /**
           * Two-letter country code per ISO 3166-1 alpha-2 (e.g., `US`, `GB`, `CA`, `DE`).
           */
          country_code: string;

          /**
           * Postal or ZIP code.
           */
          postal_code: string;

          /**
           * State, province, or region. Use the standard abbreviation where applicable
           * (e.g., `TX` for Texas, `ON` for Ontario).
           */
          state: string;

          /**
           * Street address including building/suite number.
           */
          street: string;
        }
      }
    }
  }
}

export interface RegistrationListParams extends CursorPaginationParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param: Sort direction for results. Defaults to ascending order.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Column to sort results by. Defaults to registration date
   * (`registry_created_at`) when omitted.
   */
  sort_by?: 'registry_created_at' | 'registry_expires_at' | 'name';
}

export interface RegistrationEditParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Enable or disable automatic renewal. Setting this field to `true`
   * authorizes Cloudflare to charge the account's default payment method up to 30
   * days before domain expiry to renew the domain automatically. Renewal pricing may
   * change over time based on registry pricing.
   */
  auto_renew?: boolean;

  /**
   * Header param: Set to `respond-async` to receive an immediate `202 Accepted`
   * without waiting for the operation to complete (RFC 7240).
   */
  Prefer?: 'respond-async';
}

export interface RegistrationGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace Registrations {
  export {
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
}
