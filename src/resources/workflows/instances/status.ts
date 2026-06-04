// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Status extends APIResource {
  /**
   * Changes the execution status of a workflow instance (e.g., pause, resume,
   * terminate).
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
    | 'rollingBack';

  /**
   * Accepts ISO 8601 with no timezone offsets and in UTC.
   */
  timestamp: string;
}

export type StatusEditParams =
  | StatusEditParams.Variant0
  | StatusEditParams.Variant1
  | StatusEditParams.Variant2
  | StatusEditParams.Variant3;

export declare namespace StatusEditParams {
  export interface Variant0 {
    /**
     * Path param
     */
    account_id: string;

    /**
     * Body param
     */
    status: 'pause';
  }

  export interface Variant1 {
    /**
     * Path param
     */
    account_id: string;

    /**
     * Body param
     */
    status: 'resume';
  }

  export interface Variant2 {
    /**
     * Path param
     */
    account_id: string;

    /**
     * Body param
     */
    status: 'terminate';

    /**
     * Body param: Run rollback before terminating.
     */
    rollback?: boolean;
  }

  export interface Variant3 {
    /**
     * Path param
     */
    account_id: string;

    /**
     * Body param
     */
    status: 'restart';

    /**
     * Body param: Step to restart from.
     */
    from?: Variant3.From;
  }

  export namespace Variant3 {
    /**
     * Step to restart from.
     */
    export interface From {
      name: string;

      count?: number;

      type?: 'do' | 'sleep' | 'waitForEvent';
    }
  }
}

export declare namespace Status {
  export { type StatusEditResponse as StatusEditResponse, type StatusEditParams as StatusEditParams };
}
