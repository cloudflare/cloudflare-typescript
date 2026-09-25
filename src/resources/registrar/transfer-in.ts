// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RegistrarAPI from './registrar';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseTransferIn extends APIResource {
  static override readonly _key: readonly ['registrar', 'transferIn'] = Object.freeze([
    'registrar',
    'transferIn',
  ] as const);

  /**
   * Starts a domain transfer-in workflow. This is typically a billable operation —
   * successful transfers charge the account's default payment method, except for
   * extensions with zero transfer pricing (e.g. UK extensions). All successful
   * domain transfers are non-refundable.
   *
   * ### How transfers work
   *
   * Domain transfers move a domain from another registrar to Cloudflare. Transfers
   * typically take 1-10 days due to ICANN-mandated approval windows.
   *
   * ### Prerequisites
   *
   * - The domain must already have a zone in the Cloudflare account (added through
   *   the dashboard or zone API).
   * - The zone must have DNSSec disabled.
   * - For billable transfers (i.e. extensions with non-zero transfer pricing), the
   *   account must have a billing profile with a valid default payment method. Set
   *   this up at `https://dash.cloudflare.com/{account_id}/billing/payment-info`.
   * - The domain must be unlocked at the current registrar.
   * - An authorization/EPP code from the current registrar is required, except for
   *   UK extensions — see Auth code below.
   *
   * ### Auth code
   *
   * An authorization code (also called EPP code, transfer key, or auth-info code) is
   * required for most extensions, with the exception of UK extensions. Obtain this
   * from your current registrar's control panel.
   *
   * The auth code in the request body must be base64-encoded per RFC 4648 §4
   * (standard alphabet, no line breaks).
   *
   * ### Response behavior
   *
   * Successful transfer initiation returns `202 Accepted`. Validation or initiation
   * failures return the documented `4XX` responses. Poll
   * `GET /accounts/{account_id}/registrar/registrations/{domain_name}/transfer-in-status`
   * to track progress.
   *
   * ### Premium domains
   *
   * Premium domain transfers are not currently supported by this API. Please use the
   * [dashboard](https://dash.cloudflare.com/) for now.
   *
   * ### Billing
   *
   * The account's default payment method is charged upon successful transfer
   * completion, unless the extension has zero transfer pricing (e.g. UK extensions).
   * The transfer adds time to the domain's existing expiration date (typically 1
   * year).
   *
   * @example
   * ```ts
   * const workflowStatus =
   *   await client.registrar.transferIn.create('example.com', {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     auth_code: 'bml4b3M+Pj5hcmNoLWxpbnV4',
   *   });
   * ```
   */
  create(
    domainName: string,
    params: TransferInCreateParams,
    options?: RequestOptions,
  ): APIPromise<RegistrarAPI.WorkflowStatus> {
    const { account_id, Prefer, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/registrar/registrations/${domainName}/transfer-in`, {
        body,
        ...options,
        headers: buildHeaders([{ ...(Prefer != null ? { Prefer: Prefer } : undefined) }, options?.headers]),
      }) as APIPromise<{ result: RegistrarAPI.WorkflowStatus }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class TransferIn extends BaseTransferIn {}

export interface TransferInCreateParams {
  /**
   * Path param: Cloudflare account ID. Required for all Registrar API operations.
   */
  account_id: string;

  /**
   * Body param: The EPP/authorization code from your current registrar,
   * base64-encoded per RFC 4648 §4. Obtain this from your current registrar's
   * control panel. Required for all extensions, except for UK.
   */
  auth_code?: string;

  /**
   * Body param: Enable or disable automatic renewal after transfer. Defaults to
   * `false` if omitted.
   */
  auto_renew?: boolean;

  /**
   * Body param: Registry-specific contact extension values for the registrant.
   * `GET /accounts/{account_id}/registrar/extensions/{extension}` documents the
   * required keys and allowed values for each extension in the
   * `transfer_schema.properties.contact_extensions` object.
   *
   * Examples include `.us` nexus fields, `.uk` registrant type fields, and `.ca`
   * legal type fields. Include this object only when the extension's transfer schema
   * defines `contact_extensions`.
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
  contacts?: TransferInCreateParams.Contacts;

  /**
   * Body param: WHOIS privacy mode to apply after transfer completes. Defaults to
   * the extension's default privacy mode (typically `redaction`).
   */
  privacy_mode?: 'off' | 'redaction';

  /**
   * Header param: Set to `respond-async` to indicate a preference for asynchronous
   * processing (RFC 7240).
   */
  Prefer?: string;
}

export namespace TransferInCreateParams {
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

export declare namespace TransferIn {
  export { type TransferInCreateParams as TransferInCreateParams };
}
