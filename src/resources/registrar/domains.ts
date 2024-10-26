// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as DomainsAPI from './domains';
import { SinglePage } from '../../pagination';

export class Domains extends APIResource {
  /**
   * Update individual domain.
   */
  update(
    domainName: string,
    params: DomainUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainUpdateResponse | null> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/registrar/domains/${domainName}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DomainUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List domains handled by Registrar.
   */
  list(params: DomainListParams, options?: Core.RequestOptions): Core.PagePromise<DomainsSinglePage, Domain> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/registrar/domains`, DomainsSinglePage, options);
  }

  /**
   * Show individual domain.
   */
  get(
    domainName: string,
    params: DomainGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DomainGetResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/registrar/domains/${domainName}`,
        options,
      ) as Core.APIPromise<{ result: DomainGetResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class DomainsSinglePage extends SinglePage<Domain> {}

export interface Domain {
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
  registrant_contact?: Domain.RegistrantContact;

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
  transfer_in?: Domain.TransferIn;

  /**
   * Last updated.
   */
  updated_at?: string;
}

export namespace Domain {
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
    accept_foa?: 'needed' | 'ok';

    /**
     * Shows transfer status with the registry.
     */
    approve_transfer?: 'needed' | 'ok' | 'pending' | 'trying' | 'rejected' | 'unknown';

    /**
     * Indicates if cancellation is still possible.
     */
    can_cancel_transfer?: boolean;

    /**
     * Privacy guards are disabled at the foreign registrar.
     */
    disable_privacy?: 'needed' | 'ok' | 'unknown';

    /**
     * Auth code has been entered and verified.
     */
    enter_auth_code?: 'needed' | 'ok' | 'pending' | 'trying' | 'rejected';

    /**
     * Domain is unlocked at the foreign registrar.
     */
    unlock_domain?: 'needed' | 'ok' | 'pending' | 'trying' | 'unknown';
  }
}

export type DomainUpdateResponse = unknown;

export type DomainGetResponse = unknown;

export interface DomainUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Auto-renew controls whether subscription is automatically renewed
   * upon domain expiration.
   */
  auto_renew?: boolean;

  /**
   * Body param: Shows whether a registrar lock is in place for a domain.
   */
  locked?: boolean;

  /**
   * Body param: Privacy option controls redacting WHOIS information.
   */
  privacy?: boolean;
}

export interface DomainListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface DomainGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Domains {
  export import Domain = DomainsAPI.Domain;
  export import DomainUpdateResponse = DomainsAPI.DomainUpdateResponse;
  export import DomainGetResponse = DomainsAPI.DomainGetResponse;
  export import DomainsSinglePage = DomainsAPI.DomainsSinglePage;
  export import DomainUpdateParams = DomainsAPI.DomainUpdateParams;
  export import DomainListParams = DomainsAPI.DomainListParams;
  export import DomainGetParams = DomainsAPI.DomainGetParams;
}
