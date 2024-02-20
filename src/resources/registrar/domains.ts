// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DomainsAPI from 'cloudflare/resources/registrar/domains';

export class Domains extends APIResource {
  /**
   * List domains handled by Registrar.
   */
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<DomainListResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/registrar/domains`, options) as Core.APIPromise<{
        result: DomainListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Show individual domain.
   */
  get(
    accountId: string,
    domainName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainGetResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/registrar/domains/${domainName}`, options) as Core.APIPromise<{
        result: DomainGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update individual domain.
   */
  replace(
    accountId: string,
    domainName: string,
    body: DomainReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainReplaceResponse | null> {
    return (
      this._client.put(`/accounts/${accountId}/registrar/domains/${domainName}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DomainReplaceResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type DomainListResponse = Array<DomainListResponse.DomainListResponseItem>;

export namespace DomainListResponse {
  export interface DomainListResponseItem {
    /**
     * Domain identifier.
     */
    id?: string;

    /**
     * Shows if a domain is available for transferring into Cloudflare Registrar.
     */
    available?: boolean;

    /**
     * Indicates if the domain can be registered as a new domain.
     */
    can_register?: boolean;

    /**
     * Shows time of creation.
     */
    created_at?: string;

    /**
     * Shows name of current registrar.
     */
    current_registrar?: string;

    /**
     * Shows when domain name registration expires.
     */
    expires_at?: string;

    /**
     * Shows whether a registrar lock is in place for a domain.
     */
    locked?: boolean;

    /**
     * Shows contact information for domain registrant.
     */
    registrant_contact?: DomainListResponseItem.RegistrantContact;

    /**
     * A comma-separated list of registry status codes. A full list of status codes can
     * be found at
     * [EPP Status Codes](https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en).
     */
    registry_statuses?: string;

    /**
     * Whether a particular TLD is currently supported by Cloudflare Registrar. Refer
     * to [TLD Policies](https://www.cloudflare.com/tld-policies/) for a list of
     * supported TLDs.
     */
    supported_tld?: boolean;

    /**
     * Statuses for domain transfers into Cloudflare Registrar.
     */
    transfer_in?: DomainListResponseItem.TransferIn;

    /**
     * Last updated.
     */
    updated_at?: string;
  }

  export namespace DomainListResponseItem {
    /**
     * Shows contact information for domain registrant.
     */
    export interface RegistrantContact {
      /**
       * Address.
       */
      address: string;

      /**
       * City.
       */
      city: string;

      /**
       * The country in which the user lives.
       */
      country: string | null;

      /**
       * User's first name
       */
      first_name: string | null;

      /**
       * User's last name
       */
      last_name: string | null;

      /**
       * Name of organization.
       */
      organization: string;

      /**
       * User's telephone number
       */
      phone: string | null;

      /**
       * State.
       */
      state: string;

      /**
       * The zipcode or postal code where the user lives.
       */
      zip: string | null;

      /**
       * Contact Identifier.
       */
      id?: string;

      /**
       * Optional address line for unit, floor, suite, etc.
       */
      address2?: string;

      /**
       * The contact email address of the user.
       */
      email?: string;

      /**
       * Contact fax number.
       */
      fax?: string;
    }

    /**
     * Statuses for domain transfers into Cloudflare Registrar.
     */
    export interface TransferIn {
      /**
       * Form of authorization has been accepted by the registrant.
       */
      accept_foa?: unknown;

      /**
       * Shows transfer status with the registry.
       */
      approve_transfer?: unknown;

      /**
       * Indicates if cancellation is still possible.
       */
      can_cancel_transfer?: boolean;

      /**
       * Privacy guards are disabled at the foreign registrar.
       */
      disable_privacy?: unknown;

      /**
       * Auth code has been entered and verified.
       */
      enter_auth_code?: unknown;

      /**
       * Domain is unlocked at the foreign registrar.
       */
      unlock_domain?: unknown;
    }
  }
}

export type DomainGetResponse = unknown | Array<unknown> | string;

export type DomainReplaceResponse = unknown | Array<unknown> | string;

export interface DomainReplaceParams {
  /**
   * Auto-renew controls whether subscription is automatically renewed upon domain
   * expiration.
   */
  auto_renew?: boolean;

  /**
   * Shows whether a registrar lock is in place for a domain.
   */
  locked?: boolean;

  /**
   * Privacy option controls redacting WHOIS information.
   */
  privacy?: boolean;
}

export namespace Domains {
  export import DomainListResponse = DomainsAPI.DomainListResponse;
  export import DomainGetResponse = DomainsAPI.DomainGetResponse;
  export import DomainReplaceResponse = DomainsAPI.DomainReplaceResponse;
  export import DomainReplaceParams = DomainsAPI.DomainReplaceParams;
}
