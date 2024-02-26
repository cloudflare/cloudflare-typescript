// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as LogsAPI from 'cloudflare/resources/pages/projects/deployments/history/logs';

export class Logs extends APIResource {
  /**
   * Fetch deployment logs for a project.
   */
  list(
    projectName: string,
    deploymentId: string,
    params: LogListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LogListResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/pages/projects/${projectName}/deployments/${deploymentId}/history/logs`,
        options,
      ) as Core.APIPromise<{ result: LogListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type LogListResponse = unknown | Array<unknown> | string;

export interface LogListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Logs {
  export import LogListResponse = LogsAPI.LogListResponse;
  export import LogListParams = LogsAPI.LogListParams;
}
