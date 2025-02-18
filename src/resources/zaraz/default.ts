// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ConfigAPI from './config';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Default extends APIResource {
  /**
   * Gets default Zaraz configuration for a zone.
   */
  get(params: DefaultGetParams, options?: RequestOptions): APIPromise<ConfigAPI.Configuration> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/settings/zaraz/default`, options) as APIPromise<{
        result: ConfigAPI.Configuration;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DefaultGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export declare namespace Default {
  export { type DefaultGetParams as DefaultGetParams };
}
