// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class IssueTypes extends APIResource {
  /**
   * Lists all available issue types in Security Center, describing categories of
   * security issues.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const issueTypeGetResponse of client.intel.attackSurfaceReport.issueTypes.get(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  get(
    params?: IssueTypeGetParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<IssueTypeGetResponsesSinglePage, IssueTypeGetResponse>;
  get(options?: Core.RequestOptions): Core.PagePromise<IssueTypeGetResponsesSinglePage, IssueTypeGetResponse>;
  get(
    params: IssueTypeGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<IssueTypeGetResponsesSinglePage, IssueTypeGetResponse> {
    if (isRequestOptions(params)) {
      return this.get({}, params);
    }
    const { account_id = this._client.accountId } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/intel/attack-surface-report/issue-types`,
      IssueTypeGetResponsesSinglePage,
      options,
    );
  }
}

export class IssueTypeGetResponsesSinglePage extends SinglePage<IssueTypeGetResponse> {}

export type IssueTypeGetResponse = string;

export interface IssueTypeGetParams {
  /**
   * Identifier.
   */
  account_id?: string;
}

IssueTypes.IssueTypeGetResponsesSinglePage = IssueTypeGetResponsesSinglePage;

export declare namespace IssueTypes {
  export {
    type IssueTypeGetResponse as IssueTypeGetResponse,
    IssueTypeGetResponsesSinglePage as IssueTypeGetResponsesSinglePage,
    type IssueTypeGetParams as IssueTypeGetParams,
  };
}
