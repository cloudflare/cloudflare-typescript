// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Webhooks extends APIResource {
  /**
   * Adds a new webhook to an App.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.webhooks.createWebhook(
   *     'app_id',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       events: [
   *         'meeting.started',
   *         'meeting.ended',
   *         'meeting.participantJoined',
   *         'meeting.participantLeft',
   *         'meeting.chatSynced',
   *         'recording.statusUpdate',
   *         'livestreaming.statusUpdate',
   *         'meeting.transcript',
   *         'meeting.summary',
   *       ],
   *       name: 'All events webhook',
   *       url: 'https://webhook.site/b23a5bbd-c7b0-4ced-a9e2-78ae7889897e',
   *     },
   *   );
   * ```
   */
  createWebhook(
    appId: string,
    params: WebhookCreateWebhookParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookCreateWebhookResponse> {
    const { account_id, ...body } = params;
    return this._client.post(`/accounts/${account_id}/realtime/kit/${appId}/webhooks`, { body, ...options });
  }

  /**
   * Removes a webhook for the given webhook ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.webhooks.deleteWebhook(
   *     'app_id',
   *     'webhook_id',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  deleteWebhook(
    appId: string,
    webhookId: string,
    params: WebhookDeleteWebhookParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookDeleteWebhookResponse> {
    const { account_id } = params;
    return this._client.delete(
      `/accounts/${account_id}/realtime/kit/${appId}/webhooks/${webhookId}`,
      options,
    );
  }

  /**
   * Edits the webhook details for the given webhook ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.webhooks.editWebhook(
   *     'app_id',
   *     'webhook_id',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  editWebhook(
    appId: string,
    webhookId: string,
    params: WebhookEditWebhookParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookEditWebhookResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(`/accounts/${account_id}/realtime/kit/${appId}/webhooks/${webhookId}`, {
      body,
      ...options,
    });
  }

  /**
   * Returns webhook details for the given webhook ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.webhooks.getWebhookById(
   *     'app_id',
   *     'webhook_id',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  getWebhookById(
    appId: string,
    webhookId: string,
    params: WebhookGetWebhookByIDParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookGetWebhookByIDResponse> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/realtime/kit/${appId}/webhooks/${webhookId}`, options);
  }

  /**
   * Returns details of all webhooks for an App.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.webhooks.getWebhooks('app_id', {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  getWebhooks(
    appId: string,
    params: WebhookGetWebhooksParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookGetWebhooksResponse> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/realtime/kit/${appId}/webhooks`, options);
  }

  /**
   * Replace all details for the given webhook ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.realtimeKit.webhooks.replaceWebhook(
   *     'app_id',
   *     'webhook_id',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       events: [
   *         'meeting.started',
   *         'meeting.ended',
   *         'meeting.participantJoined',
   *         'meeting.participantLeft',
   *         'meeting.chatSynced',
   *         'recording.statusUpdate',
   *         'livestreaming.statusUpdate',
   *         'meeting.transcript',
   *         'meeting.summary',
   *       ],
   *       name: 'All events webhook',
   *       url: 'https://webhook.site/b23a5bbd-c7b0-4ced-a9e2-78ae7889897e',
   *     },
   *   );
   * ```
   */
  replaceWebhook(
    appId: string,
    webhookId: string,
    params: WebhookReplaceWebhookParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebhookReplaceWebhookResponse> {
    const { account_id, ...body } = params;
    return this._client.put(`/accounts/${account_id}/realtime/kit/${appId}/webhooks/${webhookId}`, {
      body,
      ...options,
    });
  }
}

export interface WebhookCreateWebhookResponse {
  data: WebhookCreateWebhookResponse.Data;

  success: boolean;
}

export namespace WebhookCreateWebhookResponse {
  export interface Data {
    /**
     * ID of the webhook
     */
    id: string;

    /**
     * Timestamp when this webhook was created
     */
    created_at: string;

    /**
     * Set to true if the webhook is active
     */
    enabled: boolean;

    /**
     * Events this webhook will send updates for
     */
    events: Array<
      | 'meeting.started'
      | 'meeting.ended'
      | 'meeting.participantJoined'
      | 'meeting.participantLeft'
      | 'meeting.chatSynced'
      | 'recording.statusUpdate'
      | 'livestreaming.statusUpdate'
      | 'meeting.transcript'
      | 'meeting.summary'
    >;

    /**
     * Name of the webhook
     */
    name: string;

    /**
     * Timestamp when this webhook was updated
     */
    updated_at: string;

    /**
     * URL the webhook will send events to
     */
    url: string;
  }
}

export interface WebhookDeleteWebhookResponse {
  data: WebhookDeleteWebhookResponse.Data;

  success: boolean;
}

export namespace WebhookDeleteWebhookResponse {
  export interface Data {
    /**
     * ID of the webhook
     */
    id: string;

    /**
     * Timestamp when this webhook was created
     */
    created_at: string;

    /**
     * Set to true if the webhook is active
     */
    enabled: boolean;

    /**
     * Events this webhook will send updates for
     */
    events: Array<
      | 'meeting.started'
      | 'meeting.ended'
      | 'meeting.participantJoined'
      | 'meeting.participantLeft'
      | 'meeting.chatSynced'
      | 'recording.statusUpdate'
      | 'livestreaming.statusUpdate'
      | 'meeting.transcript'
      | 'meeting.summary'
    >;

    /**
     * Name of the webhook
     */
    name: string;

    /**
     * Timestamp when this webhook was updated
     */
    updated_at: string;

    /**
     * URL the webhook will send events to
     */
    url: string;
  }
}

export interface WebhookEditWebhookResponse {
  data: WebhookEditWebhookResponse.Data;

  success: boolean;
}

export namespace WebhookEditWebhookResponse {
  export interface Data {
    /**
     * ID of the webhook
     */
    id: string;

    /**
     * Timestamp when this webhook was created
     */
    created_at: string;

    /**
     * Set to true if the webhook is active
     */
    enabled: boolean;

    /**
     * Events this webhook will send updates for
     */
    events: Array<
      | 'meeting.started'
      | 'meeting.ended'
      | 'meeting.participantJoined'
      | 'meeting.participantLeft'
      | 'meeting.chatSynced'
      | 'recording.statusUpdate'
      | 'livestreaming.statusUpdate'
      | 'meeting.transcript'
      | 'meeting.summary'
    >;

    /**
     * Name of the webhook
     */
    name: string;

    /**
     * Timestamp when this webhook was updated
     */
    updated_at: string;

    /**
     * URL the webhook will send events to
     */
    url: string;
  }
}

export interface WebhookGetWebhookByIDResponse {
  data: WebhookGetWebhookByIDResponse.Data;

  success: boolean;
}

export namespace WebhookGetWebhookByIDResponse {
  export interface Data {
    /**
     * ID of the webhook
     */
    id: string;

    /**
     * Timestamp when this webhook was created
     */
    created_at: string;

    /**
     * Set to true if the webhook is active
     */
    enabled: boolean;

    /**
     * Events this webhook will send updates for
     */
    events: Array<
      | 'meeting.started'
      | 'meeting.ended'
      | 'meeting.participantJoined'
      | 'meeting.participantLeft'
      | 'meeting.chatSynced'
      | 'recording.statusUpdate'
      | 'livestreaming.statusUpdate'
      | 'meeting.transcript'
      | 'meeting.summary'
    >;

    /**
     * Name of the webhook
     */
    name: string;

    /**
     * Timestamp when this webhook was updated
     */
    updated_at: string;

    /**
     * URL the webhook will send events to
     */
    url: string;
  }
}

export interface WebhookGetWebhooksResponse {
  data: Array<WebhookGetWebhooksResponse.Data>;

  success: boolean;
}

export namespace WebhookGetWebhooksResponse {
  export interface Data {
    /**
     * ID of the webhook
     */
    id: string;

    /**
     * Timestamp when this webhook was created
     */
    created_at: string;

    /**
     * Set to true if the webhook is active
     */
    enabled: boolean;

    /**
     * Events this webhook will send updates for
     */
    events: Array<
      | 'meeting.started'
      | 'meeting.ended'
      | 'meeting.participantJoined'
      | 'meeting.participantLeft'
      | 'meeting.chatSynced'
      | 'recording.statusUpdate'
      | 'livestreaming.statusUpdate'
      | 'meeting.transcript'
      | 'meeting.summary'
    >;

    /**
     * Name of the webhook
     */
    name: string;

    /**
     * Timestamp when this webhook was updated
     */
    updated_at: string;

    /**
     * URL the webhook will send events to
     */
    url: string;
  }
}

export interface WebhookReplaceWebhookResponse {
  data: WebhookReplaceWebhookResponse.Data;

  success: boolean;
}

export namespace WebhookReplaceWebhookResponse {
  export interface Data {
    /**
     * ID of the webhook
     */
    id: string;

    /**
     * Timestamp when this webhook was created
     */
    created_at: string;

    /**
     * Set to true if the webhook is active
     */
    enabled: boolean;

    /**
     * Events this webhook will send updates for
     */
    events: Array<
      | 'meeting.started'
      | 'meeting.ended'
      | 'meeting.participantJoined'
      | 'meeting.participantLeft'
      | 'meeting.chatSynced'
      | 'recording.statusUpdate'
      | 'livestreaming.statusUpdate'
      | 'meeting.transcript'
      | 'meeting.summary'
    >;

    /**
     * Name of the webhook
     */
    name: string;

    /**
     * Timestamp when this webhook was updated
     */
    updated_at: string;

    /**
     * URL the webhook will send events to
     */
    url: string;
  }
}

export interface WebhookCreateWebhookParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param: Events that this webhook will get triggered by
   */
  events: Array<
    | 'meeting.started'
    | 'meeting.ended'
    | 'meeting.participantJoined'
    | 'meeting.participantLeft'
    | 'meeting.chatSynced'
    | 'recording.statusUpdate'
    | 'livestreaming.statusUpdate'
    | 'meeting.transcript'
    | 'meeting.summary'
  >;

  /**
   * Body param: Name of the webhook
   */
  name: string;

  /**
   * Body param: URL this webhook will send events to
   */
  url: string;

  /**
   * Body param: Set whether or not the webhook should be active when created
   */
  enabled?: boolean;
}

export interface WebhookDeleteWebhookParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface WebhookEditWebhookParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param
   */
  enabled?: boolean;

  /**
   * Body param: Events that the webhook will get triggered by
   */
  events?: Array<
    | 'meeting.started'
    | 'meeting.ended'
    | 'meeting.participantJoined'
    | 'meeting.participantLeft'
    | 'recording.statusUpdate'
    | 'livestreaming.statusUpdate'
    | 'meeting.chatSynced'
    | 'meeting.transcript'
    | 'meeting.summary'
  >;

  /**
   * Body param: Name of the webhook
   */
  name?: string;

  /**
   * Body param: URL the webhook will send events to
   */
  url?: string;
}

export interface WebhookGetWebhookByIDParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface WebhookGetWebhooksParams {
  /**
   * The account identifier tag.
   */
  account_id: string;
}

export interface WebhookReplaceWebhookParams {
  /**
   * Path param: The account identifier tag.
   */
  account_id: string;

  /**
   * Body param: Events that this webhook will get triggered by
   */
  events: Array<
    | 'meeting.started'
    | 'meeting.ended'
    | 'meeting.participantJoined'
    | 'meeting.participantLeft'
    | 'meeting.chatSynced'
    | 'recording.statusUpdate'
    | 'livestreaming.statusUpdate'
    | 'meeting.transcript'
    | 'meeting.summary'
  >;

  /**
   * Body param: Name of the webhook
   */
  name: string;

  /**
   * Body param: URL this webhook will send events to
   */
  url: string;

  /**
   * Body param: Set whether or not the webhook should be active when created
   */
  enabled?: boolean;
}

export declare namespace Webhooks {
  export {
    type WebhookCreateWebhookResponse as WebhookCreateWebhookResponse,
    type WebhookDeleteWebhookResponse as WebhookDeleteWebhookResponse,
    type WebhookEditWebhookResponse as WebhookEditWebhookResponse,
    type WebhookGetWebhookByIDResponse as WebhookGetWebhookByIDResponse,
    type WebhookGetWebhooksResponse as WebhookGetWebhooksResponse,
    type WebhookReplaceWebhookResponse as WebhookReplaceWebhookResponse,
    type WebhookCreateWebhookParams as WebhookCreateWebhookParams,
    type WebhookDeleteWebhookParams as WebhookDeleteWebhookParams,
    type WebhookEditWebhookParams as WebhookEditWebhookParams,
    type WebhookGetWebhookByIDParams as WebhookGetWebhookByIDParams,
    type WebhookGetWebhooksParams as WebhookGetWebhooksParams,
    type WebhookReplaceWebhookParams as WebhookReplaceWebhookParams,
  };
}
