// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as CertificatePacksAPI from 'cloudflare/resources/ssls/certificate-packs/certificate-packs';
import * as OrdersAPI from 'cloudflare/resources/ssls/certificate-packs/orders';
import * as QuotasAPI from 'cloudflare/resources/ssls/certificate-packs/quotas';

export class CertificatePacks extends APIResource {
  orders: OrdersAPI.Orders = new OrdersAPI.Orders(this._client);
  quotas: QuotasAPI.Quotas = new QuotasAPI.Quotas(this._client);

  /**
   * For a given zone, restart validation for an advanced certificate pack. This is
   * only a validation operation for a Certificate Pack in a validation_timed_out
   * status.
   */
  update(
    zoneId: string,
    certificatePackId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificatePackUpdateResponse> {
    return (
      this._client.patch(
        `/zones/${zoneId}/ssl/certificate_packs/${certificatePackId}`,
        options,
      ) as Core.APIPromise<{ result: CertificatePackUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * For a given zone, delete an advanced certificate pack.
   */
  delete(
    zoneId: string,
    certificatePackId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificatePackDeleteResponse> {
    return (
      this._client.delete(
        `/zones/${zoneId}/ssl/certificate_packs/${certificatePackId}`,
        options,
      ) as Core.APIPromise<{ result: CertificatePackDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * For a given zone, list all active certificate packs.
   */
  certificatePacksListCertificatePacks(
    zoneId: string,
    query?: CertificatePackCertificatePacksListCertificatePacksParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificatePackCertificatePacksListCertificatePacksResponse | null>;
  certificatePacksListCertificatePacks(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificatePackCertificatePacksListCertificatePacksResponse | null>;
  certificatePacksListCertificatePacks(
    zoneId: string,
    query: CertificatePackCertificatePacksListCertificatePacksParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificatePackCertificatePacksListCertificatePacksResponse | null> {
    if (isRequestOptions(query)) {
      return this.certificatePacksListCertificatePacks(zoneId, {}, query);
    }
    return (
      this._client.get(`/zones/${zoneId}/ssl/certificate_packs`, { query, ...options }) as Core.APIPromise<{
        result: CertificatePackCertificatePacksListCertificatePacksResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * For a given zone, get a certificate pack.
   */
  get(
    zoneId: string,
    certificatePackId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CertificatePackGetResponse> {
    return (
      this._client.get(
        `/zones/${zoneId}/ssl/certificate_packs/${certificatePackId}`,
        options,
      ) as Core.APIPromise<{ result: CertificatePackGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface CertificatePackUpdateResponse {
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

export interface CertificatePackDeleteResponse {
  /**
   * Identifier
   */
  id?: string;
}

export type CertificatePackCertificatePacksListCertificatePacksResponse = Array<unknown>;

export type CertificatePackGetResponse = unknown | string;

export interface CertificatePackCertificatePacksListCertificatePacksParams {
  /**
   * Include Certificate Packs of all statuses, not just active ones.
   */
  status?: 'all';
}

export namespace CertificatePacks {
  export import CertificatePackUpdateResponse = CertificatePacksAPI.CertificatePackUpdateResponse;
  export import CertificatePackDeleteResponse = CertificatePacksAPI.CertificatePackDeleteResponse;
  export import CertificatePackCertificatePacksListCertificatePacksResponse = CertificatePacksAPI.CertificatePackCertificatePacksListCertificatePacksResponse;
  export import CertificatePackGetResponse = CertificatePacksAPI.CertificatePackGetResponse;
  export import CertificatePackCertificatePacksListCertificatePacksParams = CertificatePacksAPI.CertificatePackCertificatePacksListCertificatePacksParams;
  export import Orders = OrdersAPI.Orders;
  export import OrderCertificatePacksOrderAdvancedCertificateManagerCertificatePackResponse = OrdersAPI.OrderCertificatePacksOrderAdvancedCertificateManagerCertificatePackResponse;
  export import OrderCertificatePacksOrderAdvancedCertificateManagerCertificatePackParams = OrdersAPI.OrderCertificatePacksOrderAdvancedCertificateManagerCertificatePackParams;
  export import Quotas = QuotasAPI.Quotas;
  export import QuotaCertificatePacksGetCertificatePackQuotasResponse = QuotasAPI.QuotaCertificatePacksGetCertificatePackQuotasResponse;
}
