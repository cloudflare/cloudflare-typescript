// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as OutgoingAPI from './outgoing';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Status extends APIResource {
  /**
   * Get primary zone transfer status.
   */
  get(params: StatusGetParams, options?: RequestOptions): APIPromise<OutgoingAPI.EnableTransfer> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/secondary_dns/outgoing/status`, options) as APIPromise<{
        result: OutgoingAPI.EnableTransfer;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface StatusGetParams {
  zone_id: string;
}

export declare namespace Status {
  export { type StatusGetParams as StatusGetParams };
}
