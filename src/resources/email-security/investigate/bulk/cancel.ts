// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';

export class Cancel extends APIResource {
  /**
   * Marks the job as cancelled and stops any pending message processing. The job
   * record remains visible in list and detail endpoints.
   *
   * @example
   * ```ts
   * const cancel =
   *   await client.emailSecurity.investigate.bulk.cancel.create(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  create(
    jobId: string,
    params: CancelCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CancelCreateResponse> {
    const { account_id } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/email-security/investigate/bulk/${jobId}/cancel`,
        options,
      ) as Core.APIPromise<{ result: CancelCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface CancelCreateResponse {
  action_params: CancelCreateResponse.Move | CancelCreateResponse.Release;

  action_type: 'MOVE' | 'RELEASE';

  created_at: string;

  job_id: string;

  messages_failed: number;

  messages_pending: number;

  messages_successful: number;

  search_params: CancelCreateResponse.SearchParams;

  status: 'PENDING' | 'DISCOVERING' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'CANCELLED' | 'SKIPPED';

  total_messages_discovered: number;

  comment?: string | null;

  completed_at?: string | null;

  started_at?: string | null;

  status_message?: string | null;
}

export namespace CancelCreateResponse {
  export interface Move {
    destination:
      | 'Inbox'
      | 'JunkEmail'
      | 'DeletedItems'
      | 'RecoverableItemsDeletions'
      | 'RecoverableItemsPurges';

    type: 'MOVE';

    expected_disposition?:
      | 'MALICIOUS'
      | 'MALICIOUS-BEC'
      | 'SUSPICIOUS'
      | 'SPOOF'
      | 'SPAM'
      | 'BULK'
      | 'ENCRYPTED'
      | 'EXTERNAL'
      | 'UNKNOWN'
      | 'NONE';
  }

  export interface Release {
    type: 'RELEASE';
  }

  export interface SearchParams {
    /**
     * @deprecated Use GET /investigate/{investigate_id}/action_log instead.
     */
    action_log?: boolean;

    alert_id?: string | null;

    /**
     * Delivery status of the message.
     */
    delivery_status?: 'delivered' | 'moved' | 'quarantined' | 'rejected' | 'deferred' | 'bounced' | 'queued';

    detections_only?: boolean;

    domain?: string | null;

    /**
     * End of search date range
     */
    end?: string;

    exact_subject?: string | null;

    final_disposition?:
      | 'MALICIOUS'
      | 'MALICIOUS-BEC'
      | 'SUSPICIOUS'
      | 'SPOOF'
      | 'SPAM'
      | 'BULK'
      | 'ENCRYPTED'
      | 'EXTERNAL'
      | 'UNKNOWN'
      | 'NONE';

    message_action?: 'PREVIEW' | 'QUARANTINE_RELEASED' | 'MOVED' | null;

    message_id?: string | null;

    metric?: string | null;

    query?: string | null;

    recipient?: string | null;

    sender?: string | null;

    /**
     * Beginning of search date range
     */
    start?: string;

    subject?: string | null;

    submissions?: boolean;
  }
}

export interface CancelCreateParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export declare namespace Cancel {
  export { type CancelCreateResponse as CancelCreateResponse, type CancelCreateParams as CancelCreateParams };
}
