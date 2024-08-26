// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as OrderAPI from './order';
import * as CertificatePacksAPI from './certificate-packs';

export class Order extends APIResource {
  /**
   * For a given zone, order an advanced certificate pack.
   */
  create(params: OrderCreateParams, options?: Core.RequestOptions): Core.APIPromise<OrderCreateResponse> {
    const { zone_id, ...body } = params;
    return (this._client.post(`/zones/${zone_id}/ssl/certificate_packs/order`, { body, ...options }) as Core.APIPromise<{ result: OrderCreateResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface OrderCreateResponse {
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
  hosts?: Array<CertificatePacksAPI.Host>;

  /**
   * Status of certificate pack.
   */
  status?: CertificatePacksAPI.Status;

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

export interface OrderCreateParams {
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
  hosts: Array<CertificatePacksAPI.HostParam>;

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
   * add sni.cloudflaressl.com as the Common Name if set true.
   */
  cloudflare_branding?: boolean;
}

export namespace Order {
  export import OrderCreateResponse = OrderAPI.OrderCreateResponse;
  export import OrderCreateParams = OrderAPI.OrderCreateParams;
}
