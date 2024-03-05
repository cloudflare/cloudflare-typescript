// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as LogsAPI from 'cloudflare/resources/pages/projects/deployments/history/logs';

export class Logs extends APIResource {
  /**
   * Fetch deployment logs for a project.
   */
  get(
    projectName: string,
    deploymentId: string,
    params: LogGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LogGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/pages/projects/${projectName}/deployments/${deploymentId}/history/logs`,
        options,
      ) as Core.APIPromise<{ result: LogGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type LogGetResponse = unknown | Array<unknown> | string;

export interface LogGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Logs {
  export import LogGetResponse = LogsAPI.LogGetResponse;
  export import LogGetParams = LogsAPI.LogGetParams;
}
