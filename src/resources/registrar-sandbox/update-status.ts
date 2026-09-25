// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseUpdateStatus extends APIResource {
  static override readonly _key: readonly ['registrarSandbox', 'updateStatus'] = Object.freeze([
    'registrarSandbox',
    'updateStatus',
  ] as const);

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
   * const updateStatus =
   *   await client.registrarSandbox.updateStatus.get(
   *     'example.com',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    domainName: string,
    params: UpdateStatusGetParams,
    options?: RequestOptions,
  ): APIPromise<UpdateStatusGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/registrar-sandbox/registrations/${domainName}/update-status`,
        options,
      ) as APIPromise<{ result: UpdateStatusGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class UpdateStatus extends BaseUpdateStatus {}

/**
 * Status of an async registration workflow.
 */
export interface UpdateStatusGetResponse {
  /**
   * Indicates whether the workflow reached a terminal state. A `succeeded` or
   * `failed` state returns `true`; `pending`, `in_progress`, `action_required`, and
   * `blocked` return `false`.
   */
  completed: boolean;

  created_at: string;

  links: UpdateStatusGetResponse.Links;

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
  error?: UpdateStatusGetResponse.Error | null;
}

export namespace UpdateStatusGetResponse {
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

export interface UpdateStatusGetParams {
  /**
   * Cloudflare account ID.
   */
  account_id: string;
}

export declare namespace UpdateStatus {
  export {
    type UpdateStatusGetResponse as UpdateStatusGetResponse,
    type UpdateStatusGetParams as UpdateStatusGetParams,
  };
}
