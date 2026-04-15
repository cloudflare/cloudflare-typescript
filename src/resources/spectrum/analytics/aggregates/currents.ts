// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';

export class Currents extends APIResource {
  /**
   * Retrieves analytics aggregated from the last minute of usage on Spectrum
   * applications underneath a given zone.
   */
  get(params?: CurrentGetParams, options?: Core.RequestOptions): Core.APIPromise<CurrentGetResponse>;
  get(options?: Core.RequestOptions): Core.APIPromise<CurrentGetResponse>;
  get(
    params: CurrentGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CurrentGetResponse> {
    if (isRequestOptions(params)) {
      return this.get({}, params);
    }
    const { zone_id = this._client.zoneId, ...query } = params;
    return (
      this._client.get(`/zones/${zone_id}/spectrum/analytics/aggregate/current`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: CurrentGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type CurrentGetResponse = Array<CurrentGetResponse.CurrentGetResponseItem>;

export namespace CurrentGetResponse {
  export interface CurrentGetResponseItem {
    /**
     * Application identifier.
     */
    appID: string;

    /**
     * Number of bytes sent
     */
    bytesEgress: number;

    /**
     * Number of bytes received
     */
    bytesIngress: number;

    /**
     * Number of connections
     */
    connections: number;

    /**
     * Average duration of connections
     */
    durationAvg: number;
  }
}

export interface CurrentGetParams {
  /**
   * Path param: Identifier.
   */
  zone_id?: string;

  /**
   * Query param: Comma-delimited list of Spectrum Application Id(s). If provided,
   * the response will be limited to Spectrum Application Id(s) that match.
   */
  appID?: string;

  /**
   * Query param: Co-location identifier.
   */
  colo_name?: string;
}

export declare namespace Currents {
  export { type CurrentGetResponse as CurrentGetResponse, type CurrentGetParams as CurrentGetParams };
}
