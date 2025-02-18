// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ConfigAPI from './config';

export class Default extends APIResource {
  /**
   * Gets default Zaraz configuration for a zone.
   */
  get(params: DefaultGetParams, options?: Core.RequestOptions): Core.APIPromise<ConfigAPI.Configuration> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/zaraz/default`, options) as Core.APIPromise<{
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
