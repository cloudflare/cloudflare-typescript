// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as PoliciesAPI from '../policies';
import { SplitTunnelExcludesSinglePage } from '../policies';
import { PagePromise, SinglePage } from '../../../../../pagination';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Excludes extends APIResource {
  /**
   * Sets the list of routes excluded from the WARP client's tunnel.
   */
  update(
    params: ExcludeUpdateParams,
    options?: RequestOptions,
  ): PagePromise<SplitTunnelExcludesSinglePage, PoliciesAPI.SplitTunnelExclude> {
    const { account_id, body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/devices/policy/exclude`,
      SinglePage<PoliciesAPI.SplitTunnelExclude>,
      { body: body, method: 'put', ...options },
    );
  }

  /**
   * Fetches the list of routes excluded from the WARP client's tunnel.
   */
  get(
    params: ExcludeGetParams,
    options?: RequestOptions,
  ): PagePromise<SplitTunnelExcludesSinglePage, PoliciesAPI.SplitTunnelExclude> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/devices/policy/exclude`,
      SinglePage<PoliciesAPI.SplitTunnelExclude>,
      options,
    );
  }
}

export interface ExcludeUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  body: Array<PoliciesAPI.SplitTunnelExcludeParam>;
}

export interface ExcludeGetParams {
  account_id: string;
}

export declare namespace Excludes {
  export { type ExcludeUpdateParams as ExcludeUpdateParams, type ExcludeGetParams as ExcludeGetParams };
}

export { type SplitTunnelExcludesSinglePage };
