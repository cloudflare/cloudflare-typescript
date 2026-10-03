// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class BaseLogs extends APIResource {
  static override readonly _key: readonly ['pages', 'projects', 'deployments', 'history', 'logs'] =
    Object.freeze(['pages', 'projects', 'deployments', 'history', 'logs'] as const);

  /**
   * Retrieve the build logs for a Cloudflare Pages deployment.
   *
   * @example
   * ```ts
   * const log =
   *   await client.pages.projects.deployments.history.logs.get(
   *     'f64788e9-fccd-4d4a-a28a-cb84f88f6e12',
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
export class Logs extends BaseLogs {}

export interface LogGetResponse {
  data: Array<LogGetResponse.Data>;

  includes_container_logs: boolean;

  total: number;
}

export namespace LogGetResponse {
  export interface Data {
    line: string;

    ts: string;
  }
}

export interface LogGetParams {
  /**
   * Identifier.
   */
  account_id: string;

  /**
   * Name of the Pages project. Must begin with a lowercase letter or digit and
   * contain only lowercase letters, digits, and hyphens.
   */
  project_name: string;
}

export declare namespace Logs {
  export { type LogGetResponse as LogGetResponse, type LogGetParams as LogGetParams };
}
