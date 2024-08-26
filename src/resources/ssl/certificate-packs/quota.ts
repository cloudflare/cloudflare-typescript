// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as QuotaAPI from './quota';

export class Quota extends APIResource {
  /**
   * For a given zone, list certificate pack quotas.
   */
  get(params: QuotaGetParams, options?: Core.RequestOptions): Core.APIPromise<QuotaGetResponse> {
    const { zone_id } = params;
    return (this._client.get(`/zones/${zone_id}/ssl/certificate_packs/quota`, options) as Core.APIPromise<{ result: QuotaGetResponse }>)._thenUnwrap((obj) => obj.result);
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

export namespace Quota {
  export import QuotaGetResponse = QuotaAPI.QuotaGetResponse;
  export import QuotaGetParams = QuotaAPI.QuotaGetParams;
}
