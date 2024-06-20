// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../core';
import { APIResource } from '../../../resource';
import * as RequestAPI from './request';

export class Request extends APIResource {
  /**
   * Get Gateway Log Request
   */
  get(
    id: string,
    logId: string,
    params: RequestGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(
      `/accounts/${account_id}/ai-gateway/gateways/${id}/logs/${logId}/request`,
      options,
    );
  }
}

export type RequestGetResponse = unknown;

export interface RequestGetParams {
  account_id: string;
}

export namespace Request {
  export import RequestGetResponse = RequestAPI.RequestGetResponse;
  export import RequestGetParams = RequestAPI.RequestGetParams;
}
