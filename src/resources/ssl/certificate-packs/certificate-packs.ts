// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as QuotaAPI from './quota';
import { Quota, QuotaGetParams, QuotaGetResponse } from './quota';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class CertificatePacks extends APIResource {
  quota: QuotaAPI.Quota = new QuotaAPI.Quota(this._client);

  /**
   * For a given zone, order an advanced certificate pack.
   */
  create(
    params: CertificatePackCreateParams,
    options?: RequestOptions,
  ): APIPromise<CertificatePackCreateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/ssl/certificate_packs/order`, {
        body,
        ...options,
      }) as APIPromise<{ result: CertificatePackCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * For a given zone, list all active certificate packs.
   */
  list(
    params: CertificatePackListParams,
    options?: RequestOptions,
  ): PagePromise<CertificatePackListResponsesSinglePage, CertificatePackListResponse> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/ssl/certificate_packs`,
      SinglePage<CertificatePackListResponse>,
      { query, ...options },
    );
  }

  /**
   * For a given zone, delete an advanced certificate pack.
   */
  delete(
    certificatePackID: string,
    params: CertificatePackDeleteParams,
    options?: RequestOptions,
  ): APIPromise<CertificatePackDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(
        path`/zones/${zone_id}/ssl/certificate_packs/${certificatePackID}`,
        options,
      ) as APIPromise<{ result: CertificatePackDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * For a given zone, restart validation or add cloudflare branding for an advanced
   * certificate pack. The former is only a validation operation for a Certificate
   * Pack in a validation_timed_out status.
   */
  edit(
    certificatePackID: string,
    params: CertificatePackEditParams,
    options?: RequestOptions,
  ): APIPromise<CertificatePackEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(path`/zones/${zone_id}/ssl/certificate_packs/${certificatePackID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: CertificatePackEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * For a given zone, get a certificate pack.
   */
  get(
    certificatePackID: string,
    params: CertificatePackGetParams,
    options?: RequestOptions,
  ): APIPromise<CertificatePackGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(
        path`/zones/${zone_id}/ssl/certificate_packs/${certificatePackID}`,
        options,
      ) as APIPromise<{ result: CertificatePackGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type CertificatePackListResponsesSinglePage = SinglePage<CertificatePackListResponse>;

export type Host = string;

export type HostParam = string;

/**
 * The number of days for which the certificate should be valid.
 */
export type RequestValidity = 7 | 30 | 90 | 365 | 730 | 1095 | 5475;

/**
 * The number of days for which the certificate should be valid.
 */
export type RequestValidityParam = 7 | 30 | 90 | 365 | 730 | 1095 | 5475;

/**
 * Status of certificate pack.
 */
export type Status =
  | 'initializing'
  | 'pending_validation'
  | 'deleted'
  | 'pending_issuance'
  | 'pending_deployment'
  | 'pending_deletion'
  | 'pending_expiration'
  | 'expired'
  | 'active'
  | 'initializing_timed_out'
  | 'validation_timed_out'
  | 'issuance_timed_out'
  | 'deployment_timed_out'
  | 'deletion_timed_out'
  | 'pending_cleanup'
  | 'staging_deployment'
  | 'staging_active'
  | 'deactivating'
  | 'inactive'
  | 'backup_issued'
  | 'holding_deployment';

/**
 * Validation method in use for a certificate pack order.
 */
export type ValidationMethod = 'http' | 'cname' | 'txt';

export interface CertificatePackCreateResponse {
  /**
   * Identifier
   */
  id?: string;

  /**
   * Certificate Authority selected for the order. For information on any certificate
   * authority specific details or restrictions
   * [see this page for more details.](https://developers.cloudflare.com/ssl/reference/certificate-authorities)
   */
  certificate_authority?: 'google' | 'lets_encrypt' | 'ssl_com';

  /**
   * Whether or not to add Cloudflare Branding for the order. This will add a
   * subdomain of sni.cloudflaressl.com as the Common Name if set to true.
   */
  cloudflare_branding?: boolean;

  /**
   * Comma separated list of valid host names for the certificate packs. Must contain
   * the zone apex, may not contain more than 50 hosts, and may not be empty.
   */
  hosts?: Array<Host>;

  /**
   * Status of certificate pack.
   */
  status?: Status;

  /**
   * Type of certificate pack.
   */
  type?: 'advanced';

  /**
   * Validation Method selected for the order.
   */
  validation_method?: 'txt' | 'http' | 'email';

  /**
   * Validity Days selected for the order.
   */
  validity_days?: 14 | 30 | 90 | 365;
}

export type CertificatePackListResponse = unknown;

export interface CertificatePackDeleteResponse {
  /**
   * Identifier
   */
  id?: string;
}

export interface CertificatePackEditResponse {
  /**
   * Identifier
   */
  id?: string;

  /**
   * Certificate Authority selected for the order. For information on any certificate
   * authority specific details or restrictions
   * [see this page for more details.](https://developers.cloudflare.com/ssl/reference/certificate-authorities)
   */
  certificate_authority?: 'google' | 'lets_encrypt' | 'ssl_com';

  /**
   * Whether or not to add Cloudflare Branding for the order. This will add a
   * subdomain of sni.cloudflaressl.com as the Common Name if set to true.
   */
  cloudflare_branding?: boolean;

  /**
   * Comma separated list of valid host names for the certificate packs. Must contain
   * the zone apex, may not contain more than 50 hosts, and may not be empty.
   */
  hosts?: Array<Host>;

  /**
   * Status of certificate pack.
   */
  status?: Status;

  /**
   * Type of certificate pack.
   */
  type?: 'advanced';

  /**
   * Validation Method selected for the order.
   */
  validation_method?: 'txt' | 'http' | 'email';

  /**
   * Validity Days selected for the order.
   */
  validity_days?: 14 | 30 | 90 | 365;
}

export type CertificatePackGetResponse = unknown;

export interface CertificatePackCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Certificate Authority selected for the order. For information on any
   * certificate authority specific details or restrictions
   * [see this page for more details.](https://developers.cloudflare.com/ssl/reference/certificate-authorities)
   */
  certificate_authority: 'google' | 'lets_encrypt' | 'ssl_com';

  /**
   * Body param: Comma separated list of valid host names for the certificate packs.
   * Must contain the zone apex, may not contain more than 50 hosts, and may not be
   * empty.
   */
  hosts: Array<HostParam>;

  /**
   * Body param: Type of certificate pack.
   */
  type: 'advanced';

  /**
   * Body param: Validation Method selected for the order.
   */
  validation_method: 'txt' | 'http' | 'email';

  /**
   * Body param: Validity Days selected for the order.
   */
  validity_days: 14 | 30 | 90 | 365;

  /**
   * Body param: Whether or not to add Cloudflare Branding for the order. This will
   * add a subdomain of sni.cloudflaressl.com as the Common Name if set to true.
   */
  cloudflare_branding?: boolean;
}

export interface CertificatePackListParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: Include Certificate Packs of all statuses, not just active ones.
   */
  status?: 'all';
}

export interface CertificatePackDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface CertificatePackEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Whether or not to add Cloudflare Branding for the order. This will
   * add a subdomain of sni.cloudflaressl.com as the Common Name if set to true.
   */
  cloudflare_branding?: boolean;
}

export interface CertificatePackGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

CertificatePacks.Quota = Quota;

export declare namespace CertificatePacks {
  export {
    type Host as Host,
    type RequestValidity as RequestValidity,
    type Status as Status,
    type ValidationMethod as ValidationMethod,
    type CertificatePackCreateResponse as CertificatePackCreateResponse,
    type CertificatePackListResponse as CertificatePackListResponse,
    type CertificatePackDeleteResponse as CertificatePackDeleteResponse,
    type CertificatePackEditResponse as CertificatePackEditResponse,
    type CertificatePackGetResponse as CertificatePackGetResponse,
    type CertificatePackListResponsesSinglePage as CertificatePackListResponsesSinglePage,
    type CertificatePackCreateParams as CertificatePackCreateParams,
    type CertificatePackListParams as CertificatePackListParams,
    type CertificatePackDeleteParams as CertificatePackDeleteParams,
    type CertificatePackEditParams as CertificatePackEditParams,
    type CertificatePackGetParams as CertificatePackGetParams,
  };

  export { Quota as Quota, type QuotaGetResponse as QuotaGetResponse, type QuotaGetParams as QuotaGetParams };
}
