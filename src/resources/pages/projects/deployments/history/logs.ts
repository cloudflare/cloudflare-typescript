// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as LogsAPI from 'cloudflare/resources/pages/projects/deployments/history/logs';

export class Logs extends APIResource {
  /**
   * Fetch deployment logs for a project.
   */
  list(
    accountId: string,
    projectName: string,
    deploymentId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LogListResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/pages/projects/${projectName}/deployments/${deploymentId}/history/logs`,
        options,
      ) as Core.APIPromise<{ result: LogListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type LogListResponse = unknown | Array<unknown> | string;

export namespace Logs {
  export import LogListResponse = LogsAPI.LogListResponse;
}
