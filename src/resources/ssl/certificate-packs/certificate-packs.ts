// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as CertificatePacksAPI from './certificate-packs';
import * as OrderAPI from './order';
import * as QuotaAPI from './quota';
import { SinglePage } from '../../../pagination';

export class CertificatePacks extends APIResource {
  order: OrderAPI.Order = new OrderAPI.Order(this._client);
  quota: QuotaAPI.Quota = new QuotaAPI.Quota(this._client);

  /**
   * For a given zone, list all active certificate packs.
   */
  list(
    params: CertificatePackListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CertificatePackListResponsesSinglePage, CertificatePackListResponse> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/ssl/certificate_packs`,
      CertificatePackListResponsesSinglePage,
      { query, ...options },
    );
  }

  /**
   * For a given zone, delete an advanced certificate pack.
   */
  delete(
    certificatePackId: string,
    params: CertificatePackDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificatePackDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(
        `/zones/${zone_id}/ssl/certificate_packs/${certificatePackId}`,
        options,
      ) as Core.APIPromise<{ result: CertificatePackDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * For a given zone, restart validation for an advanced certificate pack. This is
   * only a validation operation for a Certificate Pack in a validation_timed_out
   * status.
   */
  edit(
    certificatePackId: string,
    params: CertificatePackEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificatePackEditResponse> {
    const { zone_id, body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/ssl/certificate_packs/${certificatePackId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: CertificatePackEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * For a given zone, get a certificate pack.
   */
  get(
    certificatePackId: string,
    params: CertificatePackGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificatePackGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(
        `/zones/${zone_id}/ssl/certificate_packs/${certificatePackId}`,
        options,
      ) as Core.APIPromise<{ result: CertificatePackGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class CertificatePackListResponsesSinglePage extends SinglePage<CertificatePackListResponse> {}

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
   * Whether or not to add Cloudflare Branding for the order. This will add
   * sni.cloudflaressl.com as the Common Name if set true.
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
   * Body param:
   */
  body: unknown;
}

export interface CertificatePackGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace CertificatePacks {
  export import Host = CertificatePacksAPI.Host;
  export import RequestValidity = CertificatePacksAPI.RequestValidity;
  export import Status = CertificatePacksAPI.Status;
  export import ValidationMethod = CertificatePacksAPI.ValidationMethod;
  export import CertificatePackListResponse = CertificatePacksAPI.CertificatePackListResponse;
  export import CertificatePackDeleteResponse = CertificatePacksAPI.CertificatePackDeleteResponse;
  export import CertificatePackEditResponse = CertificatePacksAPI.CertificatePackEditResponse;
  export import CertificatePackGetResponse = CertificatePacksAPI.CertificatePackGetResponse;
  export import CertificatePackListResponsesSinglePage = CertificatePacksAPI.CertificatePackListResponsesSinglePage;
  export import CertificatePackListParams = CertificatePacksAPI.CertificatePackListParams;
  export import CertificatePackDeleteParams = CertificatePacksAPI.CertificatePackDeleteParams;
  export import CertificatePackEditParams = CertificatePacksAPI.CertificatePackEditParams;
  export import CertificatePackGetParams = CertificatePacksAPI.CertificatePackGetParams;
  export import Order = OrderAPI.Order;
  export import OrderCreateResponse = OrderAPI.OrderCreateResponse;
  export import OrderCreateParams = OrderAPI.OrderCreateParams;
  export import Quota = QuotaAPI.Quota;
  export import QuotaGetResponse = QuotaAPI.QuotaGetResponse;
  export import QuotaGetParams = QuotaAPI.QuotaGetParams;
}
