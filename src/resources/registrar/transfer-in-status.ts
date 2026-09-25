// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as RegistrarAPI from './registrar';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseTransferInStatus extends APIResource {
  static override readonly _key: readonly ['registrar', 'transferInStatus'] = Object.freeze([
    'registrar',
    'transferInStatus',
  ] as const);

  /**
   * Returns the current status of a domain transfer workflow.
   *
   * Use this endpoint to poll transfer progress after initiating a transfer with
   * `POST /accounts/{account_id}/registrar/registrations/{domain_name}/transfer-in`.
   * The URL is provided in the `links.self` field of the transfer response.
   *
   * ### Transfer timelines
   *
   * Transfers typically take 1–10 days due to ICANN-mandated approval windows.
   *
   * ### Workflow states
   *
   * **Terminal states:** `succeeded` and `failed` are terminal and always have
   * `completed: true`.
   *
   * **Non-terminal states:**
   *
   * - `in_progress`: Transfer has been submitted to the registry and is being
   *   processed. Continue polling.
   * - `blocked`: The workflow is waiting on the losing registrar or registry to
   *   release the domain. This is the **most common state** for transfers and is
   *   entirely normal — it means the ICANN transfer approval window is in effect.
   *   The losing registrar has up to 5 days to approve or reject. Continue polling
   *   with longer intervals (e.g., every 30–60 minutes).
   * - `action_required`: The user needs to take action (e.g., the FOA email needs to
   *   be accepted). See `context` for details on what is needed.
   * - `pending`: Transfer workflow created but not yet started processing.
   *
   * ### Polling guidance
   *
   * Adjust your polling interval based on the current workflow state:
   *
   * - `pending` or `in_progress`: Poll every 30 seconds.
   * - `blocked`: The transfer is waiting on a third party (e.g., losing registrar
   *   approval). Poll every 30–60 minutes.
   * - `action_required`: Stop polling. The workflow will not advance until the user
   *   takes action. Check `context` for details on what is needed.
   * - `succeeded` or `failed`: Terminal — stop polling.
   *
   * @example
   * ```ts
   * const workflowStatus =
   *   await client.registrar.transferInStatus.get(
   *     'example.com',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    domainName: string,
    params: TransferInStatusGetParams,
    options?: RequestOptions,
  ): APIPromise<RegistrarAPI.WorkflowStatus> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/registrar/registrations/${domainName}/transfer-in-status`,
        options,
      ) as APIPromise<{ result: RegistrarAPI.WorkflowStatus }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class TransferInStatus extends BaseTransferInStatus {}

export interface TransferInStatusGetParams {
  /**
   * Cloudflare account ID. Required for all Registrar API operations.
   */
  account_id: string;
}

export declare namespace TransferInStatus {
  export { type TransferInStatusGetParams as TransferInStatusGetParams };
}
