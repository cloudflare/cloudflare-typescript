// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as OrderAPI from 'cloudflare/resources/ssl/certificate-packs/order';

export class Order extends APIResource {
  /**
   * For a given zone, order an advanced certificate pack.
   */
  create(
    zoneId: string,
    body: OrderCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrderCreateResponse> {
    return (
      this._client.post(`/zones/${zoneId}/ssl/certificate_packs/order`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: OrderCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
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

export interface OrderCreateParams {
  /**
   * Certificate Authority selected for the order. For information on any certificate
   * authority specific details or restrictions
   * [see this page for more details.](https://developers.cloudflare.com/ssl/reference/certificate-authorities)
   */
  certificate_authority: 'google' | 'lets_encrypt';

  /**
   * Comma separated list of valid host names for the certificate packs. Must contain
   * the zone apex, may not contain more than 50 hosts, and may not be empty.
   */
  hosts: Array<string>;

  /**
   * Type of certificate pack.
   */
  type: 'advanced';

  /**
   * Validation Method selected for the order.
   */
  validation_method: 'txt' | 'http' | 'email';

  /**
   * Validity Days selected for the order.
   */
  validity_days: 14 | 30 | 90 | 365;

  /**
   * Whether or not to add Cloudflare Branding for the order. This will add
   * sni.cloudflaressl.com as the Common Name if set true.
   */
  cloudflare_branding?: boolean;
}

export namespace Order {
  export import OrderCreateResponse = OrderAPI.OrderCreateResponse;
  export import OrderCreateParams = OrderAPI.OrderCreateParams;
}
