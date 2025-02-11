// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Fallthrough extends APIResource {
  /**
   * Generate fallthrough WAF expression template from a set of API hosts
   */
  create(params: FallthroughCreateParams, options?: RequestOptions): APIPromise<FallthroughCreateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/api_gateway/expression-template/fallthrough`, {
        body,
        ...options,
      }) as APIPromise<{ result: FallthroughCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface FallthroughCreateResponse {
  /**
   * WAF Expression for fallthrough
   */
  expression: string;

  /**
   * Title for the expression
   */
  title: string;
}

export interface FallthroughCreateParams {
  /**
   * Path param:
   */
  zone_id: string;

  /**
   * Body param: List of hosts to be targeted in the expression
   */
  hosts: Array<string>;
}

export declare namespace Fallthrough {
  export {
    type FallthroughCreateResponse as FallthroughCreateResponse,
    type FallthroughCreateParams as FallthroughCreateParams,
  };
}
