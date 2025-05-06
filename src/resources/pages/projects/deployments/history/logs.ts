// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Logs extends APIResource {
  /**
   * Fetch deployment logs for a project.
   *
   * @example
   * ```ts
   * const log =
   *   await client.pages.projects.deployments.history.logs.get(
   *     '023e105f4ecef8ad9ca31a8372d0c353',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       project_name: 'this-is-my-project-01',
   *     },
   *   );
   * ```
   */
  get(deploymentID: string, params: LogGetParams, options?: RequestOptions): APIPromise<LogGetResponse> {
    const { account_id, project_name } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/pages/projects/${project_name}/deployments/${deploymentID}/history/logs`,
        options,
      ) as APIPromise<{ result: LogGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface LogGetResponse {
  data?: Array<LogGetResponse.Data>;

  includes_container_logs?: boolean;

  total?: number;
}

export namespace LogGetResponse {
  export interface Data {
    line?: string;

    ts?: string;
  }
}

export interface LogGetParams {
  /**
   * Identifier
   */
  account_id: string;

  /**
   * Name of the project.
   */
  project_name: string;
}

export declare namespace Logs {
  export { type LogGetResponse as LogGetResponse, type LogGetParams as LogGetParams };
}
