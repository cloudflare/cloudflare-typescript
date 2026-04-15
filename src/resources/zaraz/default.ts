// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConfigAPI from './config';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseDefault extends APIResource {
  static override readonly _key: readonly ['zaraz', 'default'] = Object.freeze(['zaraz', 'default'] as const);

  /**
   * Gets default Zaraz configuration for a zone.
   *
   * @example
   * ```ts
   * const configuration = await client.zaraz.default.get({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(
    params: DefaultGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConfigAPI.Configuration> {
    const { zone_id = this._client.zoneID } = params ?? {};
    return (
      this._client.get(path`/zones/${zone_id}/settings/zaraz/default`, options) as APIPromise<{
        result: ConfigAPI.Configuration;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Default extends BaseDefault {}

export interface DefaultGetParams {
  /**
   * Identifier.
   */
  zone_id?: string;
}

export declare namespace Default {
  export { type DefaultGetParams as DefaultGetParams };
}
