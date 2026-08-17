// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseTails extends APIResource {
  static override readonly _key: readonly ['pages', 'projects', 'deployments', 'tails'] = Object.freeze([
    'pages',
    'projects',
    'deployments',
    'tails',
  ] as const);

  /**
   * Start a tail that receives logs and exception data.
   *
   * @example
   * ```ts
   * const tail =
   *   await client.pages.projects.deployments.tails.create(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       project_name: 'this-is-my-project-01',
   *     },
   *   );
   * ```
   */
  create(
    deploymentID: string,
    params: TailCreateParams,
    options?: RequestOptions,
  ): APIPromise<TailCreateResponse> {
    const { account_id, project_name, ...body } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/pages/projects/${project_name}/deployments/${deploymentID}/tails`,
        { body, ...options },
      ) as APIPromise<{ result: TailCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a tail from a Pages deployment.
   *
   * @example
   * ```ts
   * const tail =
   *   await client.pages.projects.deployments.tails.delete(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       project_name: 'this-is-my-project-01',
   *       deployment_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     },
   *   );
   * ```
   */
  delete(
    tailID: string,
    params: TailDeleteParams,
    options?: RequestOptions,
  ): APIPromise<TailDeleteResponse | null> {
    const { account_id, project_name, deployment_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/pages/projects/${project_name}/deployments/${deployment_id}/tails/${tailID}`,
        options,
      ) as APIPromise<{ result: TailDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Tails extends BaseTails {}

/**
 * A tail session for streaming logs from a Pages deployment.
 */
export interface TailCreateResponse {
  /**
   * Identifier of the tail session.
   */
  id: string;

  /**
   * Optional WebSocket URL to connect to for receiving tail events, when returned by
   * the tail service.
   */
  url?: string;
}

export type TailDeleteResponse = unknown;

export interface TailCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Path param: Name of the project.
   */
  project_name: string;

  /**
   * Body param: Filters to apply to the tail session.
   */
  filters?: Array<{ [key: string]: unknown }>;
}

export interface TailDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;

  /**
   * Name of the project.
   */
  project_name: string;

  /**
   * Identifier.
   */
  deployment_id: string;
}

export declare namespace Tails {
  export {
    type TailCreateResponse as TailCreateResponse,
    type TailDeleteResponse as TailDeleteResponse,
    type TailCreateParams as TailCreateParams,
    type TailDeleteParams as TailDeleteParams,
  };
}
