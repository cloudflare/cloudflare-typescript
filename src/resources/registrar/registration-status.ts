// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as RegistrarAPI from './registrar';

export class RegistrationStatus extends APIResource {
  /**
   * Returns the current status of a domain registration workflow.
   *
   * Use this endpoint to poll for completion when the POST response returned
   * `202 Accepted`. The URL is provided in the `links.self` field of the workflow
   * status response.
   *
   * Poll this endpoint until the workflow reaches a terminal state or a state that
   * requires user attention.
   *
   * **Terminal states:** `succeeded` and `failed` are terminal and always have
   * `completed: true`.
   *
   * **Non-terminal states:**
   *
   * - `action_required` has `completed: false` and will not resolve on its own. The
   *   workflow is paused pending user intervention.
   * - `blocked` has `completed: false` and indicates the workflow is waiting on a
   *   third party such as the extension registry or losing registrar. Continue
   *   polling while informing the user of the delay.
   *
   * Use increasing backoff between polls. When `state: blocked`, use a longer
   * polling interval and do not poll indefinitely.
   *
   * A naive polling loop that only checks `completed` can run indefinitely when
   * `state: action_required`. Break explicitly on `action_required`:
   *
   * ```js
   * let status;
   * do {
   *   await new Promise((r) => setTimeout(r, 2000));
   *   status = await cloudflare.request({
   *     method: "GET",
   *     path: reg.result.links.self,
   *   });
   * } while (!status.result.completed && status.result.state !== "action_required");
   *
   * if (status.result.state === "action_required") {
   *   // Surface context.action and context.confirmation_sent_to to the user.
   *   // Do not re-submit the registration request.
   * }
   * ```
   *
   * @example
   * ```ts
   * const workflowStatus =
   *   await client.registrar.registrationStatus.get(
   *     'example.com',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    domainName: string,
    params?: RegistrationStatusGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RegistrarAPI.WorkflowStatus>;
  get(domainName: string, options?: Core.RequestOptions): Core.APIPromise<RegistrarAPI.WorkflowStatus>;
  get(
    domainName: string,
    params: RegistrationStatusGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RegistrarAPI.WorkflowStatus> {
    if (isRequestOptions(params)) {
      return this.get(domainName, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/registrar/registrations/${domainName}/registration-status`,
        options,
      ) as Core.APIPromise<{ result: RegistrarAPI.WorkflowStatus }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface RegistrationStatusGetParams {
  /**
   * Identifier
   */
  account_id?: string;
}

export declare namespace RegistrationStatus {
  export { type RegistrationStatusGetParams as RegistrationStatusGetParams };
}
