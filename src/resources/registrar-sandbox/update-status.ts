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
   * Whether the workflow has reached a terminal state. `true` when `state` is
   * `succeeded` or `failed`. `false` for `pending`, `in_progress`,
   * `action_required`, and `blocked`.
   */
  completed: boolean;

  created_at: string;

  links: UpdateStatusGetResponse.Links;

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

export interface UpdateStatusGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace UpdateStatus {
  export {
    type UpdateStatusGetResponse as UpdateStatusGetResponse,
    type UpdateStatusGetParams as UpdateStatusGetParams,
  };
}
