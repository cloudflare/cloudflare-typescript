// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import { isRequestOptions } from '../../../../../core';
import { APIPromise } from '../../../../../core';
import * as Core from '../../../../../core';
import * as LogsAPI from './logs';

export class Logs extends APIResource {
  /**
   * Fetch deployment logs for a project.
   */
  get(projectName: string, deploymentId: string, params: LogGetParams, options?: Core.RequestOptions): Core.APIPromise<LogGetResponse> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/pages/projects/${projectName}/deployments/${deploymentId}/history/logs`, options) as Core.APIPromise<{ result: LogGetResponse }>)._thenUnwrap((obj) => obj.result);
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
}

export namespace Logs {
  export import LogGetResponse = LogsAPI.LogGetResponse;
  export import LogGetParams = LogsAPI.LogGetParams;
}
