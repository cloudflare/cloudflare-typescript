// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseRegistrationStatus extends APIResource {
  static override readonly _key: readonly ['registrarSandbox', 'registrationStatus'] = Object.freeze([
    'registrarSandbox',
    'registrationStatus',
  ] as const);

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
   * const registrationStatus =
   *   await client.registrarSandbox.registrationStatus.get(
   *     'example.com',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    domainName: string,
    params: RegistrationStatusGetParams,
    options?: RequestOptions,
  ): APIPromise<RegistrationStatusGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/registrar-sandbox/registrations/${domainName}/registration-status`,
        options,
      ) as APIPromise<{ result: RegistrationStatusGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class RegistrationStatus extends BaseRegistrationStatus {}

/**
 * Status of an async registration workflow.
 */
export interface RegistrationStatusGetResponse {
  /**
   * Whether the workflow has reached a terminal state. `true` when `state` is
   * `succeeded` or `failed`. `false` for `pending`, `in_progress`,
   * `action_required`, and `blocked`.
   */
  completed: boolean;

  created_at: string;

  links: RegistrationStatusGetResponse.Links;

  /**
   * Workflow lifecycle state.
   *
   * - `pending`: Workflow has been created but not yet started processing.
   * - `in_progress`: Actively processing. Continue polling `links.self`. The
   *   workflow has an internal deadline and will not remain in this state
   *   indefinitely.
   * - `action_required`: Paused — requires action by the user (not the system). See
   *   `context.action` for what is needed. An automated polling loop must break on
   *   this state; it will not resolve on its own without user intervention.
   * - `blocked`: The workflow cannot make progress due to a third party such as the
   *   domain extension's registry or a losing registrar. No user action will help.
   *   Continue polling — the block may resolve when the third party responds.
   * - `succeeded`: Terminal. The operation completed successfully. `completed` will
   *   be `true`. For registrations, `context.registration` contains the resulting
   *   registration resource.
   * - `failed`: Terminal. The operation failed. `completed` will be `true`. See
   *   `error.code` and `error.message` for the reason. Do not auto-retry without
   *   user review.
   */
  state: 'pending' | 'in_progress' | 'action_required' | 'blocked' | 'succeeded' | 'failed';

  updated_at: string;

  /**
   * Workflow-specific data for this workflow.
   *
   * The workflow subject is identified by `context.domain_name` for domain-centric
   * workflows.
   */
  context?: { [key: string]: unknown };

  /**
   * Error details when a workflow reaches the `failed` state. The specific error
   * codes and messages depend on the workflow type (registration, update, etc.) and
   * the underlying registry response. These workflow error codes are separate from
   * immediate HTTP error `errors[].code` values returned by non-2xx responses.
   * Surface `error.message` to the user for context.
   */
  error?: RegistrationStatusGetResponse.Error | null;
}

export namespace RegistrationStatusGetResponse {
  export interface Links {
    /**
     * URL to this status resource.
     */
    self: string;

    /**
     * URL to the domain resource.
     */
    resource?: string;
  }

  /**
   * Error details when a workflow reaches the `failed` state. The specific error
   * codes and messages depend on the workflow type (registration, update, etc.) and
   * the underlying registry response. These workflow error codes are separate from
   * immediate HTTP error `errors[].code` values returned by non-2xx responses.
   * Surface `error.message` to the user for context.
   */
  export interface Error {
    /**
     * Machine-readable error code identifying the failure reason.
     */
    code: string;

    /**
     * Human-readable explanation of the failure. May include registry-specific
     * details.
     */
    message: string;
  }
}

export interface RegistrationStatusGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace RegistrationStatus {
  export {
    type RegistrationStatusGetResponse as RegistrationStatusGetResponse,
    type RegistrationStatusGetParams as RegistrationStatusGetParams,
  };
}
