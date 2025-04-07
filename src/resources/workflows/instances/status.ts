// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Status extends APIResource {
  /**
   * Change status of instance
   */
  edit(
    instanceID: string,
    params: StatusEditParams,
    options?: RequestOptions,
  ): APIPromise<StatusEditResponse> {
    const { account_id, workflow_name, ...body } = params;
    return (
      this._client.patch(
        path`/accounts/${account_id}/workflows/${workflow_name}/instances/${instanceID}/status`,
        { body, ...options },
      ) as APIPromise<{ result: StatusEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface StatusEditResponse {
  status:
    | 'queued'
    | 'running'
    | 'paused'
    | 'errored'
    | 'terminated'
    | 'complete'
    | 'waitingForPause'
    | 'waiting'
    | 'unknown';

  /**
   * In ISO 8601 with no timezone offsets and in UTC.
   */
  timestamp: string;
}

export interface StatusEditParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Path param:
   */
  workflow_name: string;

  /**
   * Body param: Possible actions to apply to instance
   */
  status: 'resume' | 'pause' | 'terminate';
}

export declare namespace Status {
  export { type StatusEditResponse as StatusEditResponse, type StatusEditParams as StatusEditParams };
}
