// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as IssueTypesAPI from './issue-types';

export class IssueTypes extends APIResource {
  /**
   * Get Security Center Issues Types
   */
  get(params: IssueTypeGetParams, options?: Core.RequestOptions): Core.APIPromise<IssueTypeGetResponse> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/intel/attack-surface-report/issue-types`, options) as Core.APIPromise<{ result: IssueTypeGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export type IssueTypeGetResponse = Array<string>

export interface IssueTypeGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace IssueTypes {
  export import IssueTypeGetResponse = IssueTypesAPI.IssueTypeGetResponse;
  export import IssueTypeGetParams = IssueTypesAPI.IssueTypeGetParams;
}
