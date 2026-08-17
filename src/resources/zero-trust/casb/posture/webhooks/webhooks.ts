// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as JobsAPI from './jobs';
import { BaseJobs, JobCreateParams, JobCreateResponse, Jobs } from './jobs';
import { APIPromise } from '../../../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../../../core/pagination';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class BaseWebhooks extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'casb', 'posture', 'webhooks'] = Object.freeze([
    'zeroTrust',
    'casb',
    'posture',
    'webhooks',
  ] as const);

  /**
   * Creates a new webhook configuration for sending finding notifications to
   * external endpoints.
   *
   * @example
   * ```ts
   * const webhook =
   *   await client.zeroTrust.casb.posture.webhooks.create({
   *     account_id: '46148281d8a93d002ef242d8b0d5f9f6',
   *     authentication_type: 'Bearer Auth',
   *     destination_url: 'https://example.com/webhook',
   *     label: 'Send to Slack',
   *   });
   * ```
   */
  create(params: WebhookCreateParams, options?: RequestOptions): APIPromise<WebhookCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/data-security/posture/webhooks`, {
        body,
        ...options,
      }) as APIPromise<{ result: WebhookCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an existing webhook configuration with new settings.
   *
   * @example
   * ```ts
   * const webhook =
   *   await client.zeroTrust.casb.posture.webhooks.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: '46148281d8a93d002ef242d8b0d5f9f6',
   *       authentication_type: 'Bearer Auth',
   *       destination_url: 'https://example.com/webhook',
   *       label: 'Send to Slack',
   *       status: 'enabled',
   *     },
   *   );
   * ```
   */
  update(
    webhookID: string,
    params: WebhookUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WebhookUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/data-security/posture/webhooks/${webhookID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: WebhookUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves all webhook configurations for the authenticated account. Returns an
   * array of webhook configurations that can be used to send finding notifications.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const webhookListResponse of client.zeroTrust.casb.posture.webhooks.list(
   *   { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: WebhookListParams,
    options?: RequestOptions,
  ): PagePromise<WebhookListResponsesSinglePage, WebhookListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/data-security/posture/webhooks`,
      SinglePage<WebhookListResponse>,
      options,
    );
  }

  /**
   * Soft deletes a webhook configuration by its unique identifier. The webhook will
   * be marked as deleted and will no longer be available for use.
   *
   * @example
   * ```ts
   * const webhook =
   *   await client.zeroTrust.casb.posture.webhooks.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
   *   );
   * ```
   */
  delete(
    webhookID: string,
    params: WebhookDeleteParams,
    options?: RequestOptions,
  ): APIPromise<WebhookDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      path`/accounts/${account_id}/data-security/posture/webhooks/${webhookID}`,
      options,
    );
  }

  /**
   * Sends a test webhook event to the specified destination URL to verify the
   * webhook endpoint is reachable and properly configured. This allows customers to
   * validate their webhook configuration before creating the actual webhook
   * resource.
   *
   * The test payload includes:
   *
   * - event_type: "webhook.test"
   * - timestamp: Current UTC timestamp
   * - message: Test message indicating this is from Cloudflare CASB
   * - data: Object with test: true
   *
   * @example
   * ```ts
   * const response =
   *   await client.zeroTrust.casb.posture.webhooks.evaluate({
   *     account_id: '46148281d8a93d002ef242d8b0d5f9f6',
   *     authentication_type: 'Bearer Auth',
   *     destination_url: 'https://example.com/webhook',
   *   });
   * ```
   */
  evaluate(params: WebhookEvaluateParams, options?: RequestOptions): APIPromise<WebhookEvaluateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/data-security/posture/webhooks/evaluate`, {
        body,
        ...options,
      }) as APIPromise<{ result: WebhookEvaluateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Sends a test webhook event using an existing webhook configuration. This allows
   * customers to verify their webhook endpoint is still reachable and properly
   * configured after creating the webhook resource.
   *
   * The test payload includes:
   *
   * - event_type: "webhook.test"
   * - timestamp: Current UTC timestamp
   * - message: Test message indicating this is from Cloudflare CASB
   * - data: Object with test: true
   *
   * @example
   * ```ts
   * const response =
   *   await client.zeroTrust.casb.posture.webhooks.evaluateExisting(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
   *   );
   * ```
   */
  evaluateExisting(
    webhookID: string,
    params: WebhookEvaluateExistingParams,
    options?: RequestOptions,
  ): APIPromise<WebhookEvaluateExistingResponse> {
    const { account_id } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/data-security/posture/webhooks/${webhookID}/evaluate`,
        options,
      ) as APIPromise<{ result: WebhookEvaluateExistingResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves a specific webhook configuration by its unique identifier.
   *
   * @example
   * ```ts
   * const webhook =
   *   await client.zeroTrust.casb.posture.webhooks.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '46148281d8a93d002ef242d8b0d5f9f6' },
   *   );
   * ```
   */
  get(webhookID: string, params: WebhookGetParams, options?: RequestOptions): APIPromise<WebhookGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/data-security/posture/webhooks/${webhookID}`,
        options,
      ) as APIPromise<{ result: WebhookGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Webhooks extends BaseWebhooks {
  jobs: JobsAPI.Jobs = new JobsAPI.Jobs(this._client);
}

export type WebhookListResponsesSinglePage = SinglePage<WebhookListResponse>;

/**
 * Webhook configuration for sending finding notifications.
 */
export interface WebhookCreateResponse {
  /**
   * Unique identifier for the specific webhook configuration.
   */
  id: string;

  /**
   * Type of authentication used for the webhook.
   */
  authentication_type: 'Basic Auth' | 'None' | 'Bearer Auth' | 'Static Headers' | 'HMAC-Signing';

  /**
   * Timestamp when the webhook configuration was created.
   */
  created_at: string;

  /**
   * Target URL for the webhook configuration. Where resulting data will be sent.
   */
  destination_url: string;

  /**
   * Account-specified display label for the webhook configuration.
   */
  label: string;

  /**
   * Current status of the webhook configuration. If disabled, data cannot be sent
   * through this configuration.
   */
  status: 'enabled' | 'disabled';

  /**
   * Timestamp when the webhook configuration was last updated.
   */
  updated_at: string;

  /**
   * Version number of the configuration.
   */
  version: number;

  /**
   * List of header keys configured for this webhook. Values are not included for
   * security reasons.
   */
  headers?: Array<WebhookCreateResponse.Header>;
}

export namespace WebhookCreateResponse {
  export interface Header {
    /**
     * Header key name (lowercase).
     */
    key?: string;
  }
}

/**
 * Webhook configuration for sending finding notifications.
 */
export interface WebhookUpdateResponse {
  /**
   * Unique identifier for the specific webhook configuration.
   */
  id: string;

  /**
   * Type of authentication used for the webhook.
   */
  authentication_type: 'Basic Auth' | 'None' | 'Bearer Auth' | 'Static Headers' | 'HMAC-Signing';

  /**
   * Timestamp when the webhook configuration was created.
   */
  created_at: string;

  /**
   * Target URL for the webhook configuration. Where resulting data will be sent.
   */
  destination_url: string;

  /**
   * Account-specified display label for the webhook configuration.
   */
  label: string;

  /**
   * Current status of the webhook configuration. If disabled, data cannot be sent
   * through this configuration.
   */
  status: 'enabled' | 'disabled';

  /**
   * Timestamp when the webhook configuration was last updated.
   */
  updated_at: string;

  /**
   * Version number of the configuration.
   */
  version: number;

  /**
   * List of header keys configured for this webhook. Values are not included for
   * security reasons.
   */
  headers?: Array<WebhookUpdateResponse.Header>;
}

export namespace WebhookUpdateResponse {
  export interface Header {
    /**
     * Header key name (lowercase).
     */
    key?: string;
  }
}

/**
 * Webhook configuration for sending finding notifications.
 */
export interface WebhookListResponse {
  /**
   * Unique identifier for the specific webhook configuration.
   */
  id: string;

  /**
   * Type of authentication used for the webhook.
   */
  authentication_type: 'Basic Auth' | 'None' | 'Bearer Auth' | 'Static Headers' | 'HMAC-Signing';

  /**
   * Timestamp when the webhook configuration was created.
   */
  created_at: string;

  /**
   * Target URL for the webhook configuration. Where resulting data will be sent.
   */
  destination_url: string;

  /**
   * Account-specified display label for the webhook configuration.
   */
  label: string;

  /**
   * Current status of the webhook configuration. If disabled, data cannot be sent
   * through this configuration.
   */
  status: 'enabled' | 'disabled';

  /**
   * Timestamp when the webhook configuration was last updated.
   */
  updated_at: string;

  /**
   * Version number of the configuration.
   */
  version: number;

  /**
   * List of header keys configured for this webhook. Values are not included for
   * security reasons.
   */
  headers?: Array<WebhookListResponse.Header>;
}

export namespace WebhookListResponse {
  export interface Header {
    /**
     * Header key name (lowercase).
     */
    key?: string;
  }
}

/**
 * Common response structure for all API endpoints.
 */
export interface WebhookDeleteResponse {
  errors: Array<WebhookDeleteResponse.Error>;

  messages: Array<WebhookDeleteResponse.Message>;

  /**
   * Whether the API call was successful.
   */
  success: boolean;
}

export namespace WebhookDeleteResponse {
  export interface Error {
    /**
     * Error or message code.
     */
    code: number;

    /**
     * Human-readable message.
     */
    message: string;

    /**
     * Link to relevant documentation.
     */
    documentation_url?: string;

    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      /**
       * JSON pointer to the source of the error.
       */
      pointer?: string;
    }
  }

  export interface Message {
    /**
     * Error or message code.
     */
    code: number;

    /**
     * Human-readable message.
     */
    message: string;

    /**
     * Link to relevant documentation.
     */
    documentation_url?: string;

    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      /**
       * JSON pointer to the source of the error.
       */
      pointer?: string;
    }
  }
}

/**
 * Response body for webhook evaluation test results.
 */
export interface WebhookEvaluateResponse {
  /**
   * Human-readable message describing the test result.
   */
  message: string;

  /**
   * HTTP status code returned by the webhook endpoint. 0 if connection failed.
   */
  status_code: number;

  /**
   * Whether the webhook test was successful (received 2xx response).
   */
  success: boolean;
}

/**
 * Response body for webhook evaluation test results.
 */
export interface WebhookEvaluateExistingResponse {
  /**
   * Human-readable message describing the test result.
   */
  message: string;

  /**
   * HTTP status code returned by the webhook endpoint. 0 if connection failed.
   */
  status_code: number;

  /**
   * Whether the webhook test was successful (received 2xx response).
   */
  success: boolean;
}

/**
 * Webhook configuration for sending finding notifications.
 */
export interface WebhookGetResponse {
  /**
   * Unique identifier for the specific webhook configuration.
   */
  id: string;

  /**
   * Type of authentication used for the webhook.
   */
  authentication_type: 'Basic Auth' | 'None' | 'Bearer Auth' | 'Static Headers' | 'HMAC-Signing';

  /**
   * Timestamp when the webhook configuration was created.
   */
  created_at: string;

  /**
   * Target URL for the webhook configuration. Where resulting data will be sent.
   */
  destination_url: string;

  /**
   * Account-specified display label for the webhook configuration.
   */
  label: string;

  /**
   * Current status of the webhook configuration. If disabled, data cannot be sent
   * through this configuration.
   */
  status: 'enabled' | 'disabled';

  /**
   * Timestamp when the webhook configuration was last updated.
   */
  updated_at: string;

  /**
   * Version number of the configuration.
   */
  version: number;

  /**
   * List of header keys configured for this webhook. Values are not included for
   * security reasons.
   */
  headers?: Array<WebhookGetResponse.Header>;
}

export namespace WebhookGetResponse {
  export interface Header {
    /**
     * Header key name (lowercase).
     */
    key?: string;
  }
}

export interface WebhookCreateParams {
  /**
   * Path param: Cloudflare account ID for the user making the request.
   */
  account_id: string;

  /**
   * Body param: Type of authentication used for the webhook.
   */
  authentication_type: 'Basic Auth' | 'None' | 'Bearer Auth' | 'Static Headers' | 'HMAC-Signing';

  /**
   * Body param: Target URL for the webhook configuration. Where resulting data will
   * be sent.
   */
  destination_url: string;

  /**
   * Body param: Account-specified display label for the webhook configuration.
   */
  label: string;

  /**
   * Body param: List of custom headers to include in webhook requests.
   */
  headers?: Array<WebhookCreateParams.Header>;

  /**
   * Body param: Secret key used for HMAC signing when authentication_type is
   * "HMAC-Signing".
   */
  signing_secret?: string;
}

export namespace WebhookCreateParams {
  /**
   * A header to include in webhook requests. On Create/Evaluate, both key and value
   * are required. On Update, omitting value means "keep existing value".
   */
  export interface Header {
    /**
     * Header key name.
     */
    key: string;

    /**
     * Header value. Required on Create and Evaluate. On Update, omit or set to null to
     * keep existing value.
     */
    value?: string | null;
  }
}

export interface WebhookUpdateParams {
  /**
   * Path param: Cloudflare account ID for the user making the request.
   */
  account_id: string;

  /**
   * Body param: Type of authentication used for the webhook.
   */
  authentication_type: 'Basic Auth' | 'None' | 'Bearer Auth' | 'Static Headers' | 'HMAC-Signing';

  /**
   * Body param: Target URL for the webhook configuration. Where resulting data will
   * be sent.
   */
  destination_url: string;

  /**
   * Body param: Account-specified display label for the webhook configuration.
   */
  label: string;

  /**
   * Body param: Status of the webhook configuration.
   */
  status: 'enabled' | 'disabled';

  /**
   * Body param: List of custom headers to include in webhook requests.
   */
  headers?: Array<WebhookUpdateParams.Header>;

  /**
   * Body param: Secret key used for HMAC signing when authentication_type is
   * "HMAC-Signing".
   */
  signing_secret?: string;
}

export namespace WebhookUpdateParams {
  /**
   * A header to include in webhook requests. On Create/Evaluate, both key and value
   * are required. On Update, omitting value means "keep existing value".
   */
  export interface Header {
    /**
     * Header key name.
     */
    key: string;

    /**
     * Header value. Required on Create and Evaluate. On Update, omit or set to null to
     * keep existing value.
     */
    value?: string | null;
  }
}

export interface WebhookListParams {
  /**
   * Cloudflare account ID for the user making the request.
   */
  account_id: string;
}

export interface WebhookDeleteParams {
  /**
   * Cloudflare account ID for the user making the request.
   */
  account_id: string;
}

export interface WebhookEvaluateParams {
  /**
   * Path param: Cloudflare account ID for the user making the request.
   */
  account_id: string;

  /**
   * Body param: Type of authentication to use for the test webhook request.
   */
  authentication_type: 'Basic Auth' | 'None' | 'Bearer Auth' | 'Static Headers' | 'HMAC-Signing';

  /**
   * Body param: Target URL to send the test webhook event to.
   */
  destination_url: string;

  /**
   * Body param: List of custom headers to include in the test webhook request.
   */
  headers?: Array<WebhookEvaluateParams.Header>;

  /**
   * Body param: Secret key used for HMAC signing when authentication_type is
   * "HMAC-Signing".
   */
  signing_secret?: string;
}

export namespace WebhookEvaluateParams {
  /**
   * A header to include in webhook requests. On Create/Evaluate, both key and value
   * are required. On Update, omitting value means "keep existing value".
   */
  export interface Header {
    /**
     * Header key name.
     */
    key: string;

    /**
     * Header value. Required on Create and Evaluate. On Update, omit or set to null to
     * keep existing value.
     */
    value?: string | null;
  }
}

export interface WebhookEvaluateExistingParams {
  /**
   * Cloudflare account ID for the user making the request.
   */
  account_id: string;
}

export interface WebhookGetParams {
  /**
   * Cloudflare account ID for the user making the request.
   */
  account_id: string;
}

Webhooks.Jobs = Jobs;
Webhooks.BaseJobs = BaseJobs;

export declare namespace Webhooks {
  export {
    type WebhookCreateResponse as WebhookCreateResponse,
    type WebhookUpdateResponse as WebhookUpdateResponse,
    type WebhookListResponse as WebhookListResponse,
    type WebhookDeleteResponse as WebhookDeleteResponse,
    type WebhookEvaluateResponse as WebhookEvaluateResponse,
    type WebhookEvaluateExistingResponse as WebhookEvaluateExistingResponse,
    type WebhookGetResponse as WebhookGetResponse,
    type WebhookListResponsesSinglePage as WebhookListResponsesSinglePage,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
    type WebhookDeleteParams as WebhookDeleteParams,
    type WebhookEvaluateParams as WebhookEvaluateParams,
    type WebhookEvaluateExistingParams as WebhookEvaluateExistingParams,
    type WebhookGetParams as WebhookGetParams,
  };

  export {
    Jobs as Jobs,
    BaseJobs as BaseJobs,
    type JobCreateResponse as JobCreateResponse,
    type JobCreateParams as JobCreateParams,
  };
}
