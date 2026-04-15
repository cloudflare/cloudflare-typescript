// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as OutgoingAPI from './outgoing';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseStatus extends APIResource {
  static override readonly _key: readonly ['dns', 'zoneTransfers', 'outgoing', 'status'] = Object.freeze([
    'dns',
    'zoneTransfers',
    'outgoing',
    'status',
  ] as const);

  /**
   * Get primary zone transfer status.
   *
   * @example
   * ```ts
   * const enableTransfer =
   *   await client.dns.zoneTransfers.outgoing.status.get({
   *     zone_id: '269d8f4853475ca241c4e730be286b20',
   *   });
   * ```
   */
  get(
    params: StatusGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<OutgoingAPI.EnableTransfer> {
    const { zone_id = this._client.zoneID } = params ?? {};
    return (
      this._client.get(path`/zones/${zone_id}/secondary_dns/outgoing/status`, options) as APIPromise<{
        result: OutgoingAPI.EnableTransfer;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Status extends BaseStatus {}

export interface StatusGetParams {
  zone_id?: string;
}

export declare namespace Status {
  export { type StatusGetParams as StatusGetParams };
}
