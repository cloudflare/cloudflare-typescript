// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as LogsAPI from 'cloudflare/resources/pages/projects/deployments/histories/logs';

export class Logs extends APIResource {
  /**
   * Fetch deployment logs for a project.
   */
  pagesDeploymentGetDeploymentLogs(
    accountId: string,
    projectName: string,
    deploymentId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LogPagesDeploymentGetDeploymentLogsResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/pages/projects/${projectName}/deployments/${deploymentId}/history/logs`,
        options,
      ) as Core.APIPromise<{ result: LogPagesDeploymentGetDeploymentLogsResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type LogPagesDeploymentGetDeploymentLogsResponse = unknown | Array<unknown> | string;

export namespace Logs {
  export import LogPagesDeploymentGetDeploymentLogsResponse = LogsAPI.LogPagesDeploymentGetDeploymentLogsResponse;
}
