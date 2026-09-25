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
   * Indicates whether the workflow reached a terminal state. A `succeeded` or
   * `failed` state returns `true`; `pending`, `in_progress`, `action_required`, and
   * `blocked` return `false`.
   */
  completed: boolean;

  created_at: string;

  links: RegistrationStatusGetResponse.Links;

  /**
   * Describes the workflow lifecycle state.
   *
   * - `pending`: The workflow awaits processing.
   * - `in_progress`: Processing started. Continue polling `links.self`. An internal
   *   deadline limits the duration of this state.
   * - `action_required`: The workflow pauses for user action. See `context.action`
   *   for details. Stop automated polling until the user completes the required
   *   action.
   * - `blocked`: A third party, such as the domain extension's registry or a losing
   *   registrar, prevents progress. Continue polling because the block may resolve
   *   when the third party responds.
   * - `succeeded`: Terminal state. The operation completed successfully. `completed`
   *   equals `true`. For registrations, `context.registration` contains the
   *   resulting registration resource.
   * - `failed`: Terminal state. The operation failed. `completed` equals `true`. See
   *   `error.code` and `error.message` for the reason. Require user review before
   *   retrying.
   */
  state: 'pending' | 'in_progress' | 'action_required' | 'blocked' | 'succeeded' | 'failed';

  updated_at: string;

  /**
   * Provides workflow-specific data.
   *
   * For domain-centric workflows, `context.domain_name` identifies the workflow
   * subject.
   */
  context?: { [key: string]: unknown };

  /**
   * Provides error details when a workflow reaches the `failed` state. The workflow
   * type (registration, update, etc.) and underlying registry response determine the
   * specific codes and messages. Workflow error codes differ from immediate HTTP
   * error `errors[].code` values in non-2xx responses. Surface `error.message` to
   * the user for context.
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
   * Provides error details when a workflow reaches the `failed` state. The workflow
   * type (registration, update, etc.) and underlying registry response determine the
   * specific codes and messages. Workflow error codes differ from immediate HTTP
   * error `errors[].code` values in non-2xx responses. Surface `error.message` to
   * the user for context.
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
   * Cloudflare account ID. Required for all Registrar API operations.
   */
  account_id: string;
}

export declare namespace RegistrationStatus {
  export {
    type RegistrationStatusGetResponse as RegistrationStatusGetResponse,
    type RegistrationStatusGetParams as RegistrationStatusGetParams,
  };
}
