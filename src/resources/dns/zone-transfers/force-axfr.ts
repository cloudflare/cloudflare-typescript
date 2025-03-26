// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class ForceAXFRResource extends APIResource {
  /**
   * Sends AXFR zone transfer request to primary nameserver(s).
   */
  create(params: ForceAXFRCreateParams, options?: RequestOptions): APIPromise<ForceAXFR> {
    const { zone_id, body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/secondary_dns/force_axfr`, {
        body: body,
        ...options,
      }) as APIPromise<{ result: ForceAXFR }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * When force_axfr query parameter is set to true, the response is a simple string
 */
export type ForceAXFR = string;

export interface ForceAXFRCreateParams {
  /**
   * Path param:
   */
  zone_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export declare namespace ForceAXFRResource {
  export { type ForceAXFR as ForceAXFR, type ForceAXFRCreateParams as ForceAXFRCreateParams };
}
