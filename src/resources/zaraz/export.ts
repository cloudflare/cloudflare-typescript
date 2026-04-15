// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConfigAPI from './config';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseExport extends APIResource {
  static override readonly _key: readonly ['zaraz', 'export'] = Object.freeze(['zaraz', 'export'] as const);

  /**
   * Exports full current published Zaraz configuration for a zone, secret variables
   * included.
   *
   * @example
   * ```ts
   * const configuration = await client.zaraz.export.get({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(
    params: ExportGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConfigAPI.Configuration> {
    const { zone_id = this._client.zoneID } = params ?? {};
    return this._client.get(path`/zones/${zone_id}/settings/zaraz/export`, options);
  }
}
export class Export extends BaseExport {}

export interface ExportGetParams {
  /**
   * Identifier.
   */
  zone_id?: string;
}

export declare namespace Export {
  export { type ExportGetParams as ExportGetParams };
}
