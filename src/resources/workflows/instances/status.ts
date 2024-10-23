// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as StatusAPI from './status';

export class Status extends APIResource {
  /**
   * Change status of instance
   */
  edit(
    workflowName: string,
    instanceId: string,
    params: StatusEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatusEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/workflows/${workflowName}/instances/${instanceId}/status`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: StatusEditResponse }>
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
   * Body param: Possible actions to apply to instance
   */
  status: 'resume' | 'pause' | 'terminate';
}

export namespace Status {
  export import StatusEditResponse = StatusAPI.StatusEditResponse;
  export import StatusEditParams = StatusAPI.StatusEditParams;
}
