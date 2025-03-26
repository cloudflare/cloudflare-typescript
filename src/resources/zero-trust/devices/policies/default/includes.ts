// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as PoliciesAPI from '../policies';
import { SplitTunnelIncludesSinglePage } from '../policies';
import { PagePromise, SinglePage } from '../../../../../core/pagination';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Includes extends APIResource {
  /**
   * Sets the list of routes included in the WARP client's tunnel.
   */
  update(
    params: IncludeUpdateParams,
    options?: RequestOptions,
  ): PagePromise<SplitTunnelIncludesSinglePage, PoliciesAPI.SplitTunnelInclude> {
    const { account_id, body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/devices/policy/include`,
      SinglePage<PoliciesAPI.SplitTunnelInclude>,
      { body: body, method: 'put', ...options },
    );
  }

  /**
   * Fetches the list of routes included in the WARP client's tunnel.
   */
  get(
    params: IncludeGetParams,
    options?: RequestOptions,
  ): PagePromise<SplitTunnelIncludesSinglePage, PoliciesAPI.SplitTunnelInclude> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/devices/policy/include`,
      SinglePage<PoliciesAPI.SplitTunnelInclude>,
      options,
    );
  }
}

export interface IncludeUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  body: Array<PoliciesAPI.SplitTunnelIncludeParam>;
}

export interface IncludeGetParams {
  account_id: string;
}

export declare namespace Includes {
  export { type IncludeUpdateParams as IncludeUpdateParams, type IncludeGetParams as IncludeGetParams };
}

export { type SplitTunnelIncludesSinglePage };
