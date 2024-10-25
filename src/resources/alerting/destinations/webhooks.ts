// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as WebhooksAPI from './webhooks';
import * as Shared from '../../shared';
import { SinglePage } from '../../../pagination';

export class Webhooks extends APIResource {
  /**
   * Creates a new webhook destination.
   */
  create(params: WebhookCreateParams, options?: Core.RequestOptions): Core.APIPromise<WebhookCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/alerting/v3/destinations/webhooks`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: WebhookCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a webhook destination.
   */
  update(
    webhookId: string,
    params: WebhookUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/alerting/v3/destinations/webhooks/${webhookId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: WebhookUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets a list of all configured webhook destinations.
   */
  list(
    params: WebhookListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<WebhooksSinglePage, Webhooks> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/alerting/v3/destinations/webhooks`,
      WebhooksSinglePage,
      options,
    );
  }

  /**
   * Delete a configured webhook destination.
   */
  delete(
    webhookId: string,
    params: WebhookDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      `/accounts/${account_id}/alerting/v3/destinations/webhooks/${webhookId}`,
      options,
    );
  }

  /**
   * Get details for a single webhooks destination.
   */
  get(webhookId: string, params: WebhookGetParams, options?: Core.RequestOptions): Core.APIPromise<Webhooks> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/alerting/v3/destinations/webhooks/${webhookId}`,
        options,
      ) as Core.APIPromise<{ result: Webhooks }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class WebhooksSinglePage extends SinglePage<Webhooks> {}

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
   * Optional secret that will be passed in the `cf-webhook-auth` header when
   * dispatching generic webhook notifications or formatted for supported
   * destinations. Secrets are not returned in any API response body.
   */
  secret?: string;

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

export namespace Webhooks {
  export import Webhooks = WebhooksAPI.Webhooks;
  export import WebhookCreateResponse = WebhooksAPI.WebhookCreateResponse;
  export import WebhookUpdateResponse = WebhooksAPI.WebhookUpdateResponse;
  export import WebhookDeleteResponse = WebhooksAPI.WebhookDeleteResponse;
  export import WebhooksSinglePage = WebhooksAPI.WebhooksSinglePage;
  export import WebhookCreateParams = WebhooksAPI.WebhookCreateParams;
  export import WebhookUpdateParams = WebhooksAPI.WebhookUpdateParams;
  export import WebhookListParams = WebhooksAPI.WebhookListParams;
  export import WebhookDeleteParams = WebhooksAPI.WebhookDeleteParams;
  export import WebhookGetParams = WebhooksAPI.WebhookGetParams;
}
