// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as Shared from '../../shared';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Webhooks extends APIResource {
  /**
   * Creates a new webhook destination.
   */
  create(params: WebhookCreateParams, options?: RequestOptions): APIPromise<WebhookCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/alerting/v3/destinations/webhooks`, {
        body,
        ...options,
      }) as APIPromise<{ result: WebhookCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a webhook destination.
   */
  update(
    webhookID: string,
    params: WebhookUpdateParams,
    options?: RequestOptions,
  ): APIPromise<WebhookUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/alerting/v3/destinations/webhooks/${webhookID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: WebhookUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets a list of all configured webhook destinations.
   */
  list(params: WebhookListParams, options?: RequestOptions): PagePromise<WebhooksSinglePage, Webhooks> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/alerting/v3/destinations/webhooks`,
      SinglePage<Webhooks>,
      options,
    );
  }

  /**
   * Delete a configured webhook destination.
   */
  delete(
    webhookID: string,
    params: WebhookDeleteParams,
    options?: RequestOptions,
  ): APIPromise<WebhookDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      path`/accounts/${account_id}/alerting/v3/destinations/webhooks/${webhookID}`,
      options,
    );
  }

  /**
   * Get details for a single webhooks destination.
   */
  get(webhookID: string, params: WebhookGetParams, options?: RequestOptions): APIPromise<Webhooks> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/alerting/v3/destinations/webhooks/${webhookID}`,
        options,
      ) as APIPromise<{ result: Webhooks }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type WebhooksSinglePage = SinglePage<Webhooks>;

export interface Webhooks {
  /**
   * The unique identifier of a webhook
   */
  id?: string;

  /**
   * Timestamp of when the webhook destination was created.
   */
  created_at?: string;

  /**
   * Timestamp of the last time an attempt to dispatch a notification to this webhook
   * failed.
   */
  last_failure?: string;

  /**
   * Timestamp of the last time Cloudflare was able to successfully dispatch a
   * notification using this webhook.
   */
  last_success?: string;

  /**
   * The name of the webhook destination. This will be included in the request body
   * when you receive a webhook notification.
   */
  name?: string;

  /**
   * Type of webhook endpoint.
   */
  type?: 'slack' | 'generic' | 'gchat';

  /**
   * The POST endpoint to call when dispatching a notification.
   */
  url?: string;
}

export interface WebhookCreateResponse {
  /**
   * UUID
   */
  id?: string;
}

export interface WebhookUpdateResponse {
  /**
   * UUID
   */
  id?: string;
}

export interface WebhookDeleteResponse {
  errors: Array<Shared.ResponseInfo>;

  messages: Array<Shared.ResponseInfo>;

  /**
   * Whether the API call was successful
   */
  success: true;

  result_info?: WebhookDeleteResponse.ResultInfo;
}

export namespace WebhookDeleteResponse {
  export interface ResultInfo {
    /**
     * Total number of results for the requested service
     */
    count?: number;

    /**
     * Current page within paginated list of results
     */
    page?: number;

    /**
     * Number of results per page of results
     */
    per_page?: number;

    /**
     * Total results available without any search parameters
     */
    total_count?: number;
  }
}

export interface WebhookCreateParams {
  /**
   * Path param: The account id
   */
  account_id: string;

  /**
   * Body param: The name of the webhook destination. This will be included in the
   * request body when you receive a webhook notification.
   */
  name: string;

  /**
   * Body param: The POST endpoint to call when dispatching a notification.
   */
  url: string;

  /**
   * Body param: Optional secret that will be passed in the `cf-webhook-auth` header
   * when dispatching generic webhook notifications or formatted for supported
   * destinations. Secrets are not returned in any API response body.
   */
  secret?: string;
}

export interface WebhookUpdateParams {
  /**
   * Path param: The account id
   */
  account_id: string;

  /**
   * Body param: The name of the webhook destination. This will be included in the
   * request body when you receive a webhook notification.
   */
  name: string;

  /**
   * Body param: The POST endpoint to call when dispatching a notification.
   */
  url: string;

  /**
   * Body param: Optional secret that will be passed in the `cf-webhook-auth` header
   * when dispatching generic webhook notifications or formatted for supported
   * destinations. Secrets are not returned in any API response body.
   */
  secret?: string;
}

export interface WebhookListParams {
  /**
   * The account id
   */
  account_id: string;
}

export interface WebhookDeleteParams {
  /**
   * The account id
   */
  account_id: string;
}

export interface WebhookGetParams {
  /**
   * The account id
   */
  account_id: string;
}

export declare namespace Webhooks {
  export {
    type Webhooks as Webhooks,
    type WebhookCreateResponse as WebhookCreateResponse,
    type WebhookUpdateResponse as WebhookUpdateResponse,
    type WebhookDeleteResponse as WebhookDeleteResponse,
    type WebhooksSinglePage as WebhooksSinglePage,
    type WebhookCreateParams as WebhookCreateParams,
    type WebhookUpdateParams as WebhookUpdateParams,
    type WebhookListParams as WebhookListParams,
    type WebhookDeleteParams as WebhookDeleteParams,
    type WebhookGetParams as WebhookGetParams,
  };
}
