// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as FullAPI from './full';
import * as ConfigsAPI from './configs';

export class Full extends APIResource {
  /**
   * Lists default sampling, router IPs, and rules for account.
   */
  get(params: FullGetParams, options?: Core.RequestOptions): Core.APIPromise<ConfigsAPI.Configuration> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/mnm/config/full`, options) as Core.APIPromise<{ result: ConfigsAPI.Configuration }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface FullGetParams {
  account_id: string;
}

export namespace Full {
  export import FullGetParams = FullAPI.FullGetParams;
}
