// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as RegistrarAPI from './registrar';

export class UpdateStatus extends APIResource {
  /**
   * Returns the current status of a domain update workflow.
   *
   * Use this endpoint to poll for completion when the PATCH response returned
   * `202 Accepted`. The URL is provided in the `links.self` field of the workflow
   * status response.
   *
   * Poll this endpoint until the workflow reaches a terminal state or a state that
   * requires user attention.
   *
   * Use increasing backoff between polls. When the workflow remains blocked on a
   * third party, use a longer polling interval and do not poll indefinitely.
   *
   * @example
   * ```ts
   * const workflowStatus =
   *   await client.registrar.updateStatus.get('example.com', {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  get(
    domainName: string,
    params?: UpdateStatusGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RegistrarAPI.WorkflowStatus>;
  get(domainName: string, options?: Core.RequestOptions): Core.APIPromise<RegistrarAPI.WorkflowStatus>;
  get(
    domainName: string,
    params: UpdateStatusGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RegistrarAPI.WorkflowStatus> {
    if (isRequestOptions(params)) {
      return this.get(domainName, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/registrar/registrations/${domainName}/update-status`,
        options,
      ) as Core.APIPromise<{ result: RegistrarAPI.WorkflowStatus }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface UpdateStatusGetParams {
  /**
   * Identifier
   */
  account_id?: string;
}

export declare namespace UpdateStatus {
  export { type UpdateStatusGetParams as UpdateStatusGetParams };
}
