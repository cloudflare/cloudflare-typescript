// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class IssueTypes extends APIResource {
  /**
   * Get Security Center Issues Types
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
    params: IssueTypeGetParams,
    options?: RequestOptions,
  ): PagePromise<IssueTypeGetResponsesSinglePage, IssueTypeGetResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/intel/attack-surface-report/issue-types`,
      SinglePage<IssueTypeGetResponse>,
      options,
    );
  }
}

export type IssueTypeGetResponsesSinglePage = SinglePage<IssueTypeGetResponse>;

export type IssueTypeGetResponse = string;

export interface IssueTypeGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export declare namespace IssueTypes {
  export {
    type IssueTypeGetResponse as IssueTypeGetResponse,
    type IssueTypeGetResponsesSinglePage as IssueTypeGetResponsesSinglePage,
    type IssueTypeGetParams as IssueTypeGetParams,
  };
}
