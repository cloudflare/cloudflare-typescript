// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseHosts extends APIResource {
  static override readonly _key: readonly ['apiGateway', 'userSchemas', 'hosts'] = Object.freeze([
    'apiGateway',
    'userSchemas',
    'hosts',
  ] as const);

  /**
   * Lists all unique hosts found in uploaded OpenAPI schemas for the zone. Useful
   * for understanding which domains have schema coverage.
   *
   * @deprecated Use [Schema Validation API](https://developers.cloudflare.com/api/resources/schema_validation/) instead.
   */
  list(
    params: HostListParams,
    options?: RequestOptions,
  ): PagePromise<HostListResponsesV4PagePaginationArray, HostListResponse> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(
      path`/zones/${zone_id}/api_gateway/user_schemas/hosts`,
      V4PagePaginationArray<HostListResponse>,
      { query, ...options },
    );
  }
}
export class Hosts extends BaseHosts {}

export type HostListResponsesV4PagePaginationArray = V4PagePaginationArray<HostListResponse>;

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
  zone_id: string;
}

export declare namespace Hosts {
  export {
    type HostListResponse as HostListResponse,
    type HostListResponsesV4PagePaginationArray as HostListResponsesV4PagePaginationArray,
    type HostListParams as HostListParams,
  };
}
