// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class BaseJobs extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'casb', 'posture', 'webhooks', 'jobs'] =
    Object.freeze(['zeroTrust', 'casb', 'posture', 'webhooks', 'jobs'] as const);

  /**
   * Creates webhook jobs to send a finding instance to one or more configured
   * webhooks.
   *
   * @example
   * ```ts
   * const job =
   *   await client.zeroTrust.casb.posture.webhooks.jobs.create({
   *     account_id: '46148281d8a93d002ef242d8b0d5f9f6',
   *     finding_instance_ids: [
   *       '770e8400-e29b-41d4-a716-446655440002',
   *       '660e8400-e29b-41d4-a716-446655440001',
   *     ],
   *     webhook_ids: [
   *       '550e8400-e29b-41d4-a716-446655440000',
   *       '660e8400-e29b-41d4-a716-446655440001',
   *     ],
   *   });
   * ```
   */
  create(params: JobCreateParams, options?: RequestOptions): APIPromise<JobCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/data-security/posture/webhooks/jobs`, {
        body,
        ...options,
      }) as APIPromise<{ result: JobCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Jobs extends BaseJobs {}

export interface JobCreateResponse {
  /**
   * Successfully created webhook jobs.
   */
  created: Array<JobCreateResponse.Created>;

  /**
   * Failed webhook job creation attempts.
   */
  failed: Array<JobCreateResponse.Failed>;
}

export namespace JobCreateResponse {
  /**
   * Information about a webhook job.
   */
  export interface Created {
    /**
     * Unique identifier for the webhook job.
     */
    id: string;

    /**
     * Asset data associated with this webhook job.
     */
    asset_data: { [key: string]: unknown };

    /**
     * When the webhook job was created.
     */
    created_at: string;

    /**
     * ID of the integration.
     */
    integration_id: string;

    /**
     * When the webhook job was last updated.
     */
    last_updated_at: string;

    /**
     * Parameters for a webhook job.
     */
    parameters: Created.Parameters;

    /**
     * Status of a webhook job.
     */
    status: 'pending' | 'processing' | 'completed' | 'failed';

    /**
     * Type of actor that triggered the webhook job.
     */
    triggered_by_actor: 'user' | 'account_token';

    /**
     * ID of the actor that triggered the job.
     */
    triggered_by_id: string;

    /**
     * ID of the webhook configuration.
     */
    webhook_id: string;

    /**
     * Additional details about the failure.
     */
    failure_details?: { [key: string]: unknown };

    /**
     * Reason for webhook job failure.
     */
    failure_reason?:
      | 'Permission Denied'
      | 'Integration Unavailable'
      | 'Service Temporarily Unavailable'
      | 'System Error';
  }

  export namespace Created {
    /**
     * Parameters for a webhook job.
     */
    export interface Parameters {
      /**
       * ID of the finding instance.
       */
      finding_instance_id: string;
    }
  }

  /**
   * Information about a failed webhook job creation.
   */
  export interface Failed {
    /**
     * Error message describing the failure.
     */
    error: string;

    /**
     * ID of the finding instance that failed to create a webhook job.
     */
    finding_instance_id: string;

    /**
     * ID of the webhook configuration.
     */
    webhook_id: string;
  }
}

export interface JobCreateParams {
  /**
   * Path param: Cloudflare account ID for the user making the request.
   */
  account_id: string;

  /**
   * Body param: Array of finding instance IDs to send to the webhooks
   */
  finding_instance_ids: Array<string>;

  /**
   * Body param: Array of webhook IDs to trigger jobs for
   */
  webhook_ids: Array<string>;
}

export declare namespace Jobs {
  export { type JobCreateResponse as JobCreateResponse, type JobCreateParams as JobCreateParams };
}
