// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RegistrationStatusAPI from './registration-status';
import { BaseRegistrationStatus, RegistrationStatus } from './registration-status';
import * as RegistrationsAPI from './registrations';
import { BaseRegistrations, Registrations } from './registrations';
import * as UpdateStatusAPI from './update-status';
import { BaseUpdateStatus, UpdateStatus } from './update-status';

/**
 * Use the Registrar Sandbox API to test domain search, availability checks,
 * registration, and domain management flows without buying real domains.
 *
 * **This API is a test environment for the production Registrar API.**
 *
 * ## Prerequisites
 *
 * Before using this API, make sure you have:
 *
 * 1. **Cloudflare account** — the caller must have a valid Cloudflare account.
 * 2. **API authentication** — create an API token with Registrar Sandbox permissions.
 *
 * ## How the Sandbox API differs from the production Registrar API
 *
 * Because the Sandbox API is intended for testing, it behaves differently from
 * the production Registrar API in a few important ways:
 *
 * 1. **No billing** — you will not be charged real money for purchasing a domain.
 * 2. **No real domains** — purchased domains are test records and will not be
 *   reachable on the Internet.
 * 3. **No DNS zones** — purchasing a domain does not create a zone resource.
 * 4. **No Registration Express Mode** — you must provide full contact data.
 *
 * Sandbox purchases are still persisted. If you purchase a domain in the sandbox,
 * that domain will not be available for others to purchase in the sandbox.
 *
 * ## Terminology: domain extension
 *
 * Throughout this API, "extension" refers to the domain extension part of a fully
 * qualified domain name — the portion after the registrable label. For example,
 * in `example.co.uk`, the extension is `co.uk` (not just `uk`). This covers both
 * top-level domains like `com` and multi-level extensions like `co.uk`. This is
 * distinct from other uses of the word "extension" (e.g., EPP extensions).
 *
 * ## Supported extensions
 *
 * The Sandbox API currently supports programmatic registration for these
 * extensions:
 *
 * `com`, `net`
 *
 * The production Registrar API supports 40+ extensions.
 *
 * Cloudflare Registrar supports 400+ extensions in the dashboard. Extensions
 * not listed above can be registered at `https://dash.cloudflare.com/{account_id}/domains/registrations`.
 *
 * ## Typical workflow
 *
 * 1. **Search** — call `GET /domain-search?q={keyword}` to discover available domains.
 * 2. **Check** — call `POST /domain-check` with candidate domains to verify real-time
 *   availability and pricing.
 * 3. **Review the response** — if `registrable: false`, inspect `reason` to
 *   understand whether the domain is unavailable, the extension is not supported
 *   by this API, the extension is not supported by Cloudflare Registrar at all,
 *   or the extension's registry has frozen new registrations.
 * 4. **Handle premium domains** — if `tier: premium`, premium registration is
 *   not currently supported by this API. The Sandbox API currently supports
 *   only `com` and `net`, which do not have premium registrations, but clients
 *   should still handle this response for consistency with the production
 *   Registrar API. Surface the premium pricing to the user, but do not proceed
 *   to `POST /registrations` for that domain.
 * 5. **Register** — call `POST /registrations` with the chosen domain name for
 *   supported non-premium registrations.
 * 6. **Confirm completion** — if the response is `201 Created`, registration
 *   completed within the default timeout and no polling is needed.
 * 7. **Poll when needed** — if the response is `202 Accepted`, poll
 *   `links.self` from the workflow response.
 * 8. **Stop for user action** — if `state: action_required`, stop polling and
 *   surface `context.action` to the user.
 *   The workflow will not resolve on its own.
 * 9. **Continue when blocked** — if `state: blocked`, continue polling and
 *   inform the user that a third party, such as the extension registry or losing
 *   registrar, is delaying progress.
 * 10. **Review failures before retrying** — if `state: failed`, review
 *   `error.code` and `error.message`, then decide whether user action or a new
 *   Check call is needed.
 *
 * ## Default behavior for mutating operations
 *
 * By default, mutating operations such as create and update hold the connection
 * for a bounded, server-defined amount of time while the operation completes.
 * In most cases, the response contains a completed workflow status and no
 * polling is required.
 *
 * - **Completed within the synchronous wait window:** Returns `201` (create)
 * or `200` (update) with a `workflow_status` where `state: succeeded` and
 * `completed: true`.
 * - **Still processing after the synchronous wait window:** Returns
 * `202 Accepted` with a `workflow_status` where `completed: false`. Use
 * the `links.self` URL to poll for completion.
 *
 * ## Non-blocking mode
 *
 * To receive an immediate `202 Accepted` response without waiting, send the
 * `Prefer: respond-async` request header (RFC 7240). The server will acknowledge
 * it with a `Preference-Applied: respond-async` response header.
 *
 * ## Polling
 *
 * When the response is `202`, poll the workflow status endpoint indicated by
 * `links.self` in the response body until the workflow reaches a terminal
 * state or requires user action.
 */
export class BaseRegistrarSandbox extends APIResource {
  static override readonly _key: readonly ['registrarSandbox'] = Object.freeze(['registrarSandbox'] as const);
}
/**
 * Use the Registrar Sandbox API to test domain search, availability checks,
 * registration, and domain management flows without buying real domains.
 *
 * **This API is a test environment for the production Registrar API.**
 *
 * ## Prerequisites
 *
 * Before using this API, make sure you have:
 *
 * 1. **Cloudflare account** — the caller must have a valid Cloudflare account.
 * 2. **API authentication** — create an API token with Registrar Sandbox permissions.
 *
 * ## How the Sandbox API differs from the production Registrar API
 *
 * Because the Sandbox API is intended for testing, it behaves differently from
 * the production Registrar API in a few important ways:
 *
 * 1. **No billing** — you will not be charged real money for purchasing a domain.
 * 2. **No real domains** — purchased domains are test records and will not be
 *   reachable on the Internet.
 * 3. **No DNS zones** — purchasing a domain does not create a zone resource.
 * 4. **No Registration Express Mode** — you must provide full contact data.
 *
 * Sandbox purchases are still persisted. If you purchase a domain in the sandbox,
 * that domain will not be available for others to purchase in the sandbox.
 *
 * ## Terminology: domain extension
 *
 * Throughout this API, "extension" refers to the domain extension part of a fully
 * qualified domain name — the portion after the registrable label. For example,
 * in `example.co.uk`, the extension is `co.uk` (not just `uk`). This covers both
 * top-level domains like `com` and multi-level extensions like `co.uk`. This is
 * distinct from other uses of the word "extension" (e.g., EPP extensions).
 *
 * ## Supported extensions
 *
 * The Sandbox API currently supports programmatic registration for these
 * extensions:
 *
 * `com`, `net`
 *
 * The production Registrar API supports 40+ extensions.
 *
 * Cloudflare Registrar supports 400+ extensions in the dashboard. Extensions
 * not listed above can be registered at `https://dash.cloudflare.com/{account_id}/domains/registrations`.
 *
 * ## Typical workflow
 *
 * 1. **Search** — call `GET /domain-search?q={keyword}` to discover available domains.
 * 2. **Check** — call `POST /domain-check` with candidate domains to verify real-time
 *   availability and pricing.
 * 3. **Review the response** — if `registrable: false`, inspect `reason` to
 *   understand whether the domain is unavailable, the extension is not supported
 *   by this API, the extension is not supported by Cloudflare Registrar at all,
 *   or the extension's registry has frozen new registrations.
 * 4. **Handle premium domains** — if `tier: premium`, premium registration is
 *   not currently supported by this API. The Sandbox API currently supports
 *   only `com` and `net`, which do not have premium registrations, but clients
 *   should still handle this response for consistency with the production
 *   Registrar API. Surface the premium pricing to the user, but do not proceed
 *   to `POST /registrations` for that domain.
 * 5. **Register** — call `POST /registrations` with the chosen domain name for
 *   supported non-premium registrations.
 * 6. **Confirm completion** — if the response is `201 Created`, registration
 *   completed within the default timeout and no polling is needed.
 * 7. **Poll when needed** — if the response is `202 Accepted`, poll
 *   `links.self` from the workflow response.
 * 8. **Stop for user action** — if `state: action_required`, stop polling and
 *   surface `context.action` to the user.
 *   The workflow will not resolve on its own.
 * 9. **Continue when blocked** — if `state: blocked`, continue polling and
 *   inform the user that a third party, such as the extension registry or losing
 *   registrar, is delaying progress.
 * 10. **Review failures before retrying** — if `state: failed`, review
 *   `error.code` and `error.message`, then decide whether user action or a new
 *   Check call is needed.
 *
 * ## Default behavior for mutating operations
 *
 * By default, mutating operations such as create and update hold the connection
 * for a bounded, server-defined amount of time while the operation completes.
 * In most cases, the response contains a completed workflow status and no
 * polling is required.
 *
 * - **Completed within the synchronous wait window:** Returns `201` (create)
 * or `200` (update) with a `workflow_status` where `state: succeeded` and
 * `completed: true`.
 * - **Still processing after the synchronous wait window:** Returns
 * `202 Accepted` with a `workflow_status` where `completed: false`. Use
 * the `links.self` URL to poll for completion.
 *
 * ## Non-blocking mode
 *
 * To receive an immediate `202 Accepted` response without waiting, send the
 * `Prefer: respond-async` request header (RFC 7240). The server will acknowledge
 * it with a `Preference-Applied: respond-async` response header.
 *
 * ## Polling
 *
 * When the response is `202`, poll the workflow status endpoint indicated by
 * `links.self` in the response body until the workflow reaches a terminal
 * state or requires user action.
 */
export class RegistrarSandbox extends BaseRegistrarSandbox {
  registrations: RegistrationsAPI.Registrations = new RegistrationsAPI.Registrations(this._client);
  registrationStatus: RegistrationStatusAPI.RegistrationStatus = new RegistrationStatusAPI.RegistrationStatus(
    this._client,
  );
  updateStatus: UpdateStatusAPI.UpdateStatus = new UpdateStatusAPI.UpdateStatus(this._client);
}

/**
 * A domain registration resource representing the current state of a registered
 * domain.
 */
export interface Registration {
  /**
   * Whether the domain will be automatically renewed before expiration.
   */
  auto_renew: boolean;

  /**
   * When the domain was registered. Present when the registration resource exists.
   */
  created_at: string;

  /**
   * Fully qualified domain name (FQDN) including the extension (e.g., `example.com`,
   * `mybrand.app`). The domain name uniquely identifies a registration — the same
   * domain cannot be registered twice, making it a natural idempotency key for
   * registration requests.
   */
  domain_name: string;

  /**
   * When the domain registration expires. Present when the registration is ready;
   * may be null only while `status` is `registration_pending`.
   */
  expires_at: string | null;

  /**
   * Whether the domain is locked for transfer.
   */
  locked: boolean;

  /**
   * Current WHOIS privacy mode for the registration.
   */
  privacy_mode: 'redaction';

  /**
   * Current registration status.
   *
   * - `active`: Domain is registered and operational
   * - `registration_pending`: Registration is in progress
   * - `expired`: Domain has expired
   * - `suspended`: Domain is suspended by the registry
   * - `redemption_period`: Domain is in the redemption grace period
   * - `pending_delete`: Domain is pending deletion by the registry
   */
  status:
    | 'active'
    | 'registration_pending'
    | 'expired'
    | 'suspended'
    | 'redemption_period'
    | 'pending_delete';
}

/**
 * Status of an async registration workflow.
 */
export interface WorkflowStatus {
  /**
   * Whether the workflow has reached a terminal state. `true` when `state` is
   * `succeeded` or `failed`. `false` for `pending`, `in_progress`,
   * `action_required`, and `blocked`.
   */
  completed: boolean;

  created_at: string;

  links: WorkflowStatus.Links;

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
  error?: WorkflowStatus.Error | null;
}

export namespace WorkflowStatus {
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

RegistrarSandbox.Registrations = Registrations;
RegistrarSandbox.BaseRegistrations = BaseRegistrations;
RegistrarSandbox.RegistrationStatus = RegistrationStatus;
RegistrarSandbox.BaseRegistrationStatus = BaseRegistrationStatus;
RegistrarSandbox.UpdateStatus = UpdateStatus;
RegistrarSandbox.BaseUpdateStatus = BaseUpdateStatus;

export declare namespace RegistrarSandbox {
  export { type Registration as Registration, type WorkflowStatus as WorkflowStatus };

  export { Registrations as Registrations, BaseRegistrations as BaseRegistrations };

  export { RegistrationStatus as RegistrationStatus, BaseRegistrationStatus as BaseRegistrationStatus };

  export { UpdateStatus as UpdateStatus, BaseUpdateStatus as BaseUpdateStatus };
}
