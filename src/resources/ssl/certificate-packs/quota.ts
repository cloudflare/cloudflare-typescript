// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Quota extends APIResource {
  /**
   * For a given zone, list certificate pack quotas.
   */
  get(params: QuotaGetParams, options?: RequestOptions): APIPromise<QuotaGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/ssl/certificate_packs/quota`, options) as APIPromise<{
        result: QuotaGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface QuotaGetResponse {
  advanced?: QuotaGetResponse.Advanced;
}

export namespace QuotaGetResponse {
  export interface Advanced {
    /**
     * Quantity Allocated.
     */
    allocated?: number;

    /**
     * Quantity Used.
     */
    used?: number;
  }
}

export interface QuotaGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export declare namespace Quota {
  export { type QuotaGetResponse as QuotaGetResponse, type QuotaGetParams as QuotaGetParams };
}
