// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseFallthrough extends APIResource {
  static override readonly _key: readonly ['apiGateway', 'expressionTemplate', 'fallthrough'] = Object.freeze(
    ['apiGateway', 'expressionTemplate', 'fallthrough'] as const,
  );

  /**
   * Generates a WAF expression template that matches fallthrough traffic for the
   * supplied API hosts. This operation is deprecated and should not be used for new
   * integrations.
   *
   * @deprecated Use the cf.api_gateway.fallthrough_detected field in custom rule for a more customized logic check.
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
export class Fallthrough extends BaseFallthrough {}

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
   * Path param: Identifier.
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
