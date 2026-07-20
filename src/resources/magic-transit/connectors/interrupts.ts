// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseInterrupts extends APIResource {
  static override readonly _key: readonly ['magicTransit', 'connectors', 'interrupts'] = Object.freeze([
    'magicTransit',
    'connectors',
    'interrupts',
  ] as const);

  /**
   * Creates an interrupt for a Magic WAN Connector.
   *
   * @example
   * ```ts
   * const interrupt =
   *   await client.magicTransit.connectors.interrupts.create(
   *     'connector_id',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  create(
    connectorID: string,
    params: InterruptCreateParams,
    options?: RequestOptions,
  ): APIPromise<InterruptCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/magic/connectors/${connectorID}/interrupts`, {
        body,
        ...options,
      }) as APIPromise<{ result: InterruptCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists interrupts for a Magic WAN Connector.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const interruptListResponse of client.magicTransit.connectors.interrupts.list(
   *   'connector_id',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    connectorID: string,
    params: InterruptListParams,
    options?: RequestOptions,
  ): PagePromise<InterruptListResponsesSinglePage, InterruptListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/magic/connectors/${connectorID}/interrupts`,
      SinglePage<InterruptListResponse>,
      options,
    );
  }
}
export class Interrupts extends BaseInterrupts {}

export type InterruptListResponsesSinglePage = SinglePage<InterruptListResponse>;

/**
 * Interrupt action for a connector.
 */
export interface InterruptCreateResponse {
  submitted_at: string;

  reboot?: InterruptCreateResponse.Reboot;

  restart?: InterruptCreateResponse.Restart;

  shutdown?: InterruptCreateResponse.Shutdown;

  triggered_at?: string;
}

export namespace InterruptCreateResponse {
  export interface Reboot {
    /**
     * Purge connector state.
     */
    purge?: boolean;
  }

  export interface Restart {
    /**
     * Purge connector state.
     */
    purge?: boolean;
  }

  export interface Shutdown {
    /**
     * Purge connector state.
     */
    purge?: boolean;
  }
}

/**
 * Interrupt action for a connector.
 */
export interface InterruptListResponse {
  submitted_at: string;

  reboot?: InterruptListResponse.Reboot;

  restart?: InterruptListResponse.Restart;

  shutdown?: InterruptListResponse.Shutdown;

  triggered_at?: string;
}

export namespace InterruptListResponse {
  export interface Reboot {
    /**
     * Purge connector state.
     */
    purge?: boolean;
  }

  export interface Restart {
    /**
     * Purge connector state.
     */
    purge?: boolean;
  }

  export interface Shutdown {
    /**
     * Purge connector state.
     */
    purge?: boolean;
  }
}

export interface InterruptCreateParams {
  /**
   * Path param: Account identifier
   */
  account_id: string;

  /**
   * Body param
   */
  reboot?: InterruptCreateParams.Reboot;

  /**
   * Body param
   */
  restart?: InterruptCreateParams.Restart;

  /**
   * Body param
   */
  shutdown?: InterruptCreateParams.Shutdown;
}

export namespace InterruptCreateParams {
  export interface Reboot {
    /**
     * Purge connector state.
     */
    purge?: boolean;
  }

  export interface Restart {
    /**
     * Purge connector state.
     */
    purge?: boolean;
  }

  export interface Shutdown {
    /**
     * Purge connector state.
     */
    purge?: boolean;
  }
}

export interface InterruptListParams {
  /**
   * Account identifier
   */
  account_id: string;
}

export declare namespace Interrupts {
  export {
    type InterruptCreateResponse as InterruptCreateResponse,
    type InterruptListResponse as InterruptListResponse,
    type InterruptListResponsesSinglePage as InterruptListResponsesSinglePage,
    type InterruptCreateParams as InterruptCreateParams,
    type InterruptListParams as InterruptListParams,
  };
}
