// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as HostsAPI from './hosts';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class Hosts extends APIResource {
  /**
   * Retrieve schema hosts in a zone
   */
  list(
    params: HostListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<HostListResponsesV4PagePaginationArray, HostListResponse> {
    const { zone_id, ...query } = params;
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
   * UUID
   */
  schema_id: string;
}

export interface HostListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;
}

export namespace Hosts {
  export import HostListResponse = HostsAPI.HostListResponse;
  export import HostListResponsesV4PagePaginationArray = HostsAPI.HostListResponsesV4PagePaginationArray;
  export import HostListParams = HostsAPI.HostListParams;
}
