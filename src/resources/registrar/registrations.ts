// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RegistrarAPI from './registrar';
import { RegistrationsCursorPagination } from './registrar';
import { APIPromise } from '../../core/api-promise';
import { CursorPagination, type CursorPaginationParams, PagePromise } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseRegistrations extends APIResource {
  static override readonly _key: readonly ['registrar', 'registrations'] = Object.freeze([
    'registrar',
    'registrations',
  ] as const);

  /**
   * Starts a domain registration workflow. This is a billable operation — successful
   * registration charges the account's default payment method. All successful domain
   * registrations are non-refundable — once the workflow completes with
   * `state: succeeded`, the charge cannot be reversed.
   *
   * ### Prerequisites
   *
   * - The account must have a billing profile with a valid default payment method.
   *   Set this up at
   *   `https://dash.cloudflare.com/{account_id}/billing/payment-info`.
   * - The account must not already be at the maximum supported domain limit. A
   *   single account may own up to 500 domains in total across registrations created
   *   through either the dashboard or this API.
   * - The domain must be on a supported extension for programmatic registration.
   * - Use `POST /domain-check` immediately before calling this endpoint to confirm
   *   real-time availability and pricing.
   *
   * ### Supported extensions
   *
   * This API supports programmatic registration for all extensions supported by the
   * dashboard experience, with the following exceptions:
   *
   * `giving`, `mom`, `inc`, `lol`, `sh`, `link`, `cc`, `new`
   *
   * Cloudflare Registrar supports 400+ extensions in the dashboard. Extensions
   * listed above can be registered at
   * `https://dash.cloudflare.com/{account_id}/domains/registrations`.
   *
   * ### Express mode
   *
   * The only required field is `domain_name`. If `contacts` is omitted, the system
   * uses the account's default address book entry as the registrant. If no default
   * exists and no contact is provided, the request fails. Set up a default address
   * book entry and accept the required agreement at
   * `https://dash.cloudflare.com/{account_id}/domains/registrations`.
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
   * const workflowStatus = await client.registrar.registrations.create({
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
  create(
    params: RegistrationCreateParams,
    options?: RequestOptions,
  ): APIPromise<RegistrarAPI.WorkflowStatus> {
    const { account_id, Prefer, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/registrar/registrations`, {
        body,
        ...options,
        headers: buildHeaders([{ ...(Prefer != null ? { Prefer: Prefer } : undefined) }, options?.headers]),
      }) as APIPromise<{ result: RegistrarAPI.WorkflowStatus }>
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
   * for await (const registration of client.registrar.registrations.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: RegistrationListParams,
    options?: RequestOptions,
  ): PagePromise<RegistrationsCursorPagination, RegistrarAPI.Registration> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/registrar/registrations`,
      CursorPagination<RegistrarAPI.Registration>,
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
   * const workflowStatus =
   *   await client.registrar.registrations.edit('example.com', {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  edit(
    domainName: string,
    params: RegistrationEditParams,
    options?: RequestOptions,
  ): APIPromise<RegistrarAPI.WorkflowStatus> {
    const { account_id, Prefer, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/registrar/registrations/${domainName}`, {
        body,
        ...options,
        headers: buildHeaders([
          { ...(Prefer?.toString() != null ? { Prefer: Prefer?.toString() } : undefined) },
          options?.headers,
        ]),
      }) as APIPromise<{ result: RegistrarAPI.WorkflowStatus }>
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
   *   await client.registrar.registrations.get('example.com', {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  get(
    domainName: string,
    params: RegistrationGetParams,
    options?: RequestOptions,
  ): APIPromise<RegistrarAPI.Registration> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/registrar/registrations/${domainName}`,
        options,
      ) as APIPromise<{ result: RegistrarAPI.Registration }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Registrations extends BaseRegistrations {}

export interface RegistrationCreateParams {
  /**
   * Path param: Cloudflare account ID. Required for all Registrar API operations.
   */
  account_id: string;

  /**
   * Body param: Provides a fully qualified domain name (FQDN), including the
   * extension (e.g., `example.com`, `mybrand.app`). The domain name uniquely
   * identifies a registration. Cloudflare permits only one registration per domain,
   * making the domain name a natural idempotency key for registration requests.
   */
  domain_name: string;

  /**
   * Body param: Provides user acknowledgements for a specific extension or premium
   * registration flow. The extension registration schema from the extension
   * discovery endpoint identifies the required keys.
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
   * Body param: Provides registry-specific contact extension values for the
   * registrant. `GET /accounts/{account_id}/registrar/extensions/{extension}`
   * identifies the required keys and allowed values for each extension in the
   * `registration_schema.properties.contact_extensions` object.
   *
   * Examples include `.us` nexus fields, `.uk` registrant type fields, and `.ca`
   * legal type fields. Omit this object when the extension's registration schema
   * excludes `contact_extensions`.
   */
  contact_extensions?: { [key: string]: unknown };

  /**
   * Body param: Provides contact data for the registration request.
   *
   * The per-extension schema from
   * `GET /accounts/{account_id}/registrar/extensions/{extension}` defines the
   * accepted contact roles. Every currently supported extension requires only
   * `contacts.registrant` from API callers. Callers may provide additional roles
   * such as `technical`, `administrator`, and `billing` when the extension schema
   * includes them. When a registry requires an omitted role, Cloudflare may derive
   * that contact from `contacts.registrant`.
   *
   * When the request omits either the entire `contacts` object or
   * `contacts.registrant`, the system uses the account's default address book entry
   * as the registrant contact. The account owner must configure this default at
   * `https://dash.cloudflare.com/{account_id}/domains/registrations`, where they can
   * create or update the address book entry and accept the required agreement.
   * Dashboard settings currently provide the only way to manage address book
   * entries.
   *
   * Without either a default address book entry or a registrant contact, the
   * registration request fails validation.
   */
  contacts?: RegistrationCreateParams.Contacts;

  /**
   * Body param: Sets the WHOIS privacy mode for the registration. Defaults to
   * `redaction`.
   *
   * - `off`: Disables WHOIS privacy.
   * - `redaction`: Requests WHOIS redaction where the extension supports it. Some
   *   extensions exclude privacy and redaction.
   */
  privacy_mode?: 'off' | 'redaction';

  /**
   * Body param: Sets the registration term from 1 to 10 years. When omitted, this
   * field defaults to the registry's minimum registration period for the extension.
   * Most extensions require 1 year, while some require longer minimum terms (e.g.,
   * `.ai` requires 2 years).
   *
   * Each registry may also enforce its own maximum registration term. A request
   * above that maximum fails. When uncertain, omit this field to use the default.
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
   * Provides contact data for the registration request.
   *
   * The per-extension schema from
   * `GET /accounts/{account_id}/registrar/extensions/{extension}` defines the
   * accepted contact roles. Every currently supported extension requires only
   * `contacts.registrant` from API callers. Callers may provide additional roles
   * such as `technical`, `administrator`, and `billing` when the extension schema
   * includes them. When a registry requires an omitted role, Cloudflare may derive
   * that contact from `contacts.registrant`.
   *
   * When the request omits either the entire `contacts` object or
   * `contacts.registrant`, the system uses the account's default address book entry
   * as the registrant contact. The account owner must configure this default at
   * `https://dash.cloudflare.com/{account_id}/domains/registrations`, where they can
   * create or update the address book entry and accept the required agreement.
   * Dashboard settings currently provide the only way to manage address book
   * entries.
   *
   * Without either a default address book entry or a registrant contact, the
   * registration request fails validation.
   */
  export interface Contacts {
    /**
     * Optional administrator contact. Accepted only when the extension schema includes
     * this role. When the registry requires an omitted contact, Cloudflare may derive
     * it from `contacts.registrant`.
     */
    administrator?: Contacts.Administrator;

    /**
     * Optional billing contact. Accepted only when the extension schema includes this
     * role. When the registry requires an omitted contact, Cloudflare may derive it
     * from `contacts.registrant`.
     */
    billing?: Contacts.Billing;

    /**
     * Optional registrant contact. If omitted, the account's default address book
     * entry is used instead.
     */
    registrant?: Contacts.Registrant;

    /**
     * Optional technical contact. Accepted only when the extension schema includes
     * this role. When the registry requires an omitted contact, Cloudflare may derive
     * it from `contacts.registrant`.
     */
    technical?: Contacts.Technical;
  }

  export namespace Contacts {
    /**
     * Optional administrator contact. Accepted only when the extension schema includes
     * this role. When the registry requires an omitted contact, Cloudflare may derive
     * it from `contacts.registrant`.
     */
    export interface Administrator {
      /**
       * Email address for the registrant. Used for domain-related communications from
       * the registry, including ownership verification and renewal notices.
       */
      email: string;

      /**
       * Phone number in E.164 format: `+{country_code}.{number}` without spaces or
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
     * Optional billing contact. Accepted only when the extension schema includes this
     * role. When the registry requires an omitted contact, Cloudflare may derive it
     * from `contacts.registrant`.
     */
    export interface Billing {
      /**
       * Email address for the registrant. Used for domain-related communications from
       * the registry, including ownership verification and renewal notices.
       */
      email: string;

      /**
       * Phone number in E.164 format: `+{country_code}.{number}` without spaces or
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
     * Optional registrant contact. If omitted, the account's default address book
     * entry is used instead.
     */
    export interface Registrant {
      /**
       * Email address for the registrant. Used for domain-related communications from
       * the registry, including ownership verification and renewal notices.
       */
      email: string;

      /**
       * Phone number in E.164 format: `+{country_code}.{number}` without spaces or
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
     * Optional technical contact. Accepted only when the extension schema includes
     * this role. When the registry requires an omitted contact, Cloudflare may derive
     * it from `contacts.registrant`.
     */
    export interface Technical {
      /**
       * Email address for the registrant. Used for domain-related communications from
       * the registry, including ownership verification and renewal notices.
       */
      email: string;

      /**
       * Phone number in E.164 format: `+{country_code}.{number}` without spaces or
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
   * Path param: Cloudflare account ID.
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
   * Path param: Cloudflare account ID.
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
   * Cloudflare account ID.
   */
  account_id: string;
}

export declare namespace Registrations {
  export {
    type RegistrationCreateParams as RegistrationCreateParams,
    type RegistrationListParams as RegistrationListParams,
    type RegistrationEditParams as RegistrationEditParams,
    type RegistrationGetParams as RegistrationGetParams,
  };
}

export { type RegistrationsCursorPagination };
