// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ConfigsAPI from './configs';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Full extends APIResource {
  /**
   * Lists default sampling, router IPs, warp devices, and rules for account.
   */
  get(params: FullGetParams, options?: RequestOptions): APIPromise<ConfigsAPI.Configuration> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/mnm/config/full`, options) as APIPromise<{
        result: ConfigsAPI.Configuration;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface FullGetParams {
  account_id: string;
}

export declare namespace Full {
  export { type FullGetParams as FullGetParams };
}
