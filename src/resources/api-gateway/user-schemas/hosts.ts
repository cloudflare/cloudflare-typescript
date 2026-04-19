// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class Hosts extends APIResource {
  /**
   * Lists all unique hosts found in uploaded OpenAPI schemas for the zone. Useful
   * for understanding which domains have schema coverage.
   *
   * @deprecated Use [Schema Validation API](https://developers.cloudflare.com/api/resources/schema_validation/) instead.
   */
  list(
    params?: HostListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<HostListResponsesV4PagePaginationArray, HostListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<HostListResponsesV4PagePaginationArray, HostListResponse>;
  list(
    params: HostListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<HostListResponsesV4PagePaginationArray, HostListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { zone_id = this._client.zoneId, ...query } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/api_gateway/user_schemas/hosts`,
      HostListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }
}

export class HostListResponsesV4PagePaginationArray extends V4PagePaginationArray<HostListResponse> {}

export interface HostListResponse {
  created_at: string;

  /**
   * Hosts serving the schema, e.g zone.host.com
   */
  hosts: Array<string>;

  /**
   * Name of the schema
   */
  name: string;

  /**
   * UUID.
   */
  schema_id: string;
}

export interface HostListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  zone_id?: string;
}

Hosts.HostListResponsesV4PagePaginationArray = HostListResponsesV4PagePaginationArray;

export declare namespace Hosts {
  export {
    type HostListResponse as HostListResponse,
    HostListResponsesV4PagePaginationArray as HostListResponsesV4PagePaginationArray,
    type HostListParams as HostListParams,
  };
}
