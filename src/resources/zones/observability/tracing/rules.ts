// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseRules extends APIResource {
  static override readonly _key: readonly ['zones', 'observability', 'tracing', 'rules'] = Object.freeze([
    'zones',
    'observability',
    'tracing',
    'rules',
  ] as const);

  /**
   * Replace all sampling overrides in a zone's managed Cloudflare Traces ruleset.
   * Rules are evaluated in the supplied order.
   *
   * @example
   * ```ts
   * const rule =
   *   await client.zones.observability.tracing.rules.update({
   *     zone_id: 'zone_id',
   *     rules: [
   *       {
   *         action: 'set_trace_settings',
   *         action_parameters: { sampling_ratio: 0 },
   *         description: 'description',
   *         enabled: true,
   *         expression: 'x',
   *       },
   *     ],
   *   });
   * ```
   */
  update(params: RuleUpdateParams, options?: RequestOptions): APIPromise<RuleUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(path`/zones/${zone_id}/observability/tracing/rules`, {
        body,
        ...options,
      }) as APIPromise<{ result: RuleUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete every sampling override from a zone's managed Cloudflare Traces ruleset.
   *
   * @example
   * ```ts
   * const rule =
   *   await client.zones.observability.tracing.rules.delete({
   *     zone_id: 'zone_id',
   *   });
   * ```
   */
  delete(params: RuleDeleteParams, options?: RequestOptions): APIPromise<RuleDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(path`/zones/${zone_id}/observability/tracing/rules`, options) as APIPromise<{
        result: RuleDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve the ordered sampling overrides for a zone's managed Cloudflare Traces
   * ruleset.
   *
   * @example
   * ```ts
   * const rule =
   *   await client.zones.observability.tracing.rules.get({
   *     zone_id: 'zone_id',
   *   });
   * ```
   */
  get(params: RuleGetParams, options?: RequestOptions): APIPromise<RuleGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/observability/tracing/rules`, options) as APIPromise<{
        result: RuleGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Rules extends BaseRules {}

export interface RuleUpdateResponse {
  /**
   * Trace rules in evaluation order.
   */
  rules: Array<RuleUpdateResponse.Rule>;
}

export namespace RuleUpdateResponse {
  export interface Rule {
    action: 'set_trace_settings';

    action_parameters: Rule.ActionParameters;

    description: string;

    enabled: boolean;

    /**
     * A Rules language expression that selects requests.
     */
    expression: string;
  }

  export namespace Rule {
    export interface ActionParameters {
      /**
       * The ratio of requests sampled for tracing, from 0 to 1.
       */
      sampling_ratio: number;
    }
  }
}

export interface RuleDeleteResponse {
  /**
   * Trace rules in evaluation order.
   */
  rules: Array<RuleDeleteResponse.Rule>;
}

export namespace RuleDeleteResponse {
  export interface Rule {
    action: 'set_trace_settings';

    action_parameters: Rule.ActionParameters;

    description: string;

    enabled: boolean;

    /**
     * A Rules language expression that selects requests.
     */
    expression: string;
  }

  export namespace Rule {
    export interface ActionParameters {
      /**
       * The ratio of requests sampled for tracing, from 0 to 1.
       */
      sampling_ratio: number;
    }
  }
}

export interface RuleGetResponse {
  /**
   * Trace rules in evaluation order.
   */
  rules: Array<RuleGetResponse.Rule>;
}

export namespace RuleGetResponse {
  export interface Rule {
    action: 'set_trace_settings';

    action_parameters: Rule.ActionParameters;

    description: string;

    enabled: boolean;

    /**
     * A Rules language expression that selects requests.
     */
    expression: string;
  }

  export namespace Rule {
    export interface ActionParameters {
      /**
       * The ratio of requests sampled for tracing, from 0 to 1.
       */
      sampling_ratio: number;
    }
  }
}

export interface RuleUpdateParams {
  /**
   * Path param: Specify the zone ID.
   */
  zone_id: string;

  /**
   * Body param: Trace rules in evaluation order.
   */
  rules: Array<RuleUpdateParams.Rule>;
}

export namespace RuleUpdateParams {
  export interface Rule {
    action: 'set_trace_settings';

    action_parameters: Rule.ActionParameters;

    description: string;

    enabled: boolean;

    /**
     * A Rules language expression that selects requests.
     */
    expression: string;
  }

  export namespace Rule {
    export interface ActionParameters {
      /**
       * The ratio of requests sampled for tracing, from 0 to 1.
       */
      sampling_ratio: number;
    }
  }
}

export interface RuleDeleteParams {
  /**
   * Specify the zone ID.
   */
  zone_id: string;
}

export interface RuleGetParams {
  /**
   * Specify the zone ID.
   */
  zone_id: string;
}

export declare namespace Rules {
  export {
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleDeleteResponse as RuleDeleteResponse,
    type RuleGetResponse as RuleGetResponse,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleDeleteParams as RuleDeleteParams,
    type RuleGetParams as RuleGetParams,
  };
}
