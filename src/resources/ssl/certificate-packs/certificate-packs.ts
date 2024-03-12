// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CertificatePacksAPI from 'cloudflare/resources/ssl/certificate-packs/certificate-packs';
import * as OrderAPI from 'cloudflare/resources/ssl/certificate-packs/order';
import * as QuotaAPI from 'cloudflare/resources/ssl/certificate-packs/quota';

export class CertificatePacks extends APIResource {
  order: OrderAPI.Order = new OrderAPI.Order(this._client);
  quota: QuotaAPI.Quota = new QuotaAPI.Quota(this._client);

  /**
   * For a given zone, list all active certificate packs.
   */
  list(
    params: CertificatePackListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificatePackListResponse | null> {
    const { zone_id, ...query } = params;
    return (
      this._client.get(`/zones/${zone_id}/ssl/certificate_packs`, { query, ...options }) as Core.APIPromise<{
        result: CertificatePackListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
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
    const { zone_id } = params;
    return (
      this._client.patch(
        `/zones/${zone_id}/ssl/certificate_packs/${certificatePackId}`,
        options,
      ) as Core.APIPromise<{ result: CertificatePackEditResponse }>
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

export type CertificatePackListResponse = Array<unknown>;

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
  certificate_authority?: 'google' | 'lets_encrypt';

  /**
   * Whether or not to add Cloudflare Branding for the order. This will add
   * sni.cloudflaressl.com as the Common Name if set true.
   */
  cloudflare_branding?: boolean;

  /**
   * Comma separated list of valid host names for the certificate packs. Must contain
   * the zone apex, may not contain more than 50 hosts, and may not be empty.
   */
  hosts?: Array<string>;

  /**
   * Status of certificate pack.
   */
  status?:
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

export type CertificatePackGetResponse = unknown | string;

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
   * Identifier
   */
  zone_id: string;
}

export interface CertificatePackGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace CertificatePacks {
  export import CertificatePackListResponse = CertificatePacksAPI.CertificatePackListResponse;
  export import CertificatePackDeleteResponse = CertificatePacksAPI.CertificatePackDeleteResponse;
  export import CertificatePackEditResponse = CertificatePacksAPI.CertificatePackEditResponse;
  export import CertificatePackGetResponse = CertificatePacksAPI.CertificatePackGetResponse;
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
