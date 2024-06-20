// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../core';
import { APIResource } from '../../../resource';
import { type Response } from '../../../_shims/index';
import * as ResponseAPI from './response';

export class Response extends APIResource {
  /**
   * Get Gateway Log Response
   */
  get(
    id: string,
    logId: string,
    params: ResponseGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    const { account_id } = params;
    return this._client.get(
      `/accounts/${account_id}/ai-gateway/gateways/${id}/logs/${logId}/response`,
      options,
    );
  }
}

export type ResponseGetResponse = unknown;

export interface ResponseGetParams {
  account_id: string;
}

export namespace Response {
  export import ResponseGetResponse = ResponseAPI.ResponseGetResponse;
  export import ResponseGetParams = ResponseAPI.ResponseGetParams;
}
