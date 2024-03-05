// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RequestsAPI from 'cloudflare/resources/cloudforce-one/requests/requests';
import * as MessageAPI from 'cloudflare/resources/cloudforce-one/requests/message';
import * as PriorityAPI from 'cloudflare/resources/cloudforce-one/requests/priority';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class Requests extends APIResource {
  message: MessageAPI.Message = new MessageAPI.Message(this._client);
  priority: PriorityAPI.Priority = new PriorityAPI.Priority(this._client);

  /**
   * Creating a request adds the request into the Cloudforce One queue for analysis.
   * In addition to the content, a short title, type, priority, and releasability
   * should be provided. If one is not provided a default will be assigned.
   */
  create(
    accountIdentifier: string,
    body: RequestCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CloudforceOneRequestItem> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/cloudforce-one/requests/new`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CloudforceOneRequestItem }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updating a request alters the request in the Cloudforce One queue. This API may
   * be used to update any attributes of the request after the initial submission.
   * Only fields that you choose to update need to be add to the request body
   */
  update(
    accountIdentifier: string,
    requestIdentifier: string,
    body: RequestUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CloudforceOneRequestItem> {
    return (
      this._client.put(`/accounts/${accountIdentifier}/cloudforce-one/requests/${requestIdentifier}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CloudforceOneRequestItem }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Requests
   */
  list(
    accountIdentifier: string,
    body: RequestListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CloudforceOneRequestListItemsV4PagePaginationArray, CloudforceOneRequestListItem> {
    return this._client.getAPIList(
      `/accounts/${accountIdentifier}/cloudforce-one/requests`,
      CloudforceOneRequestListItemsV4PagePaginationArray,
      { body, method: 'post', ...options },
    );
  }

  /**
   * Delete a Request
   */
  delete(
    accountIdentifier: string,
    requestIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RequestDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountIdentifier}/cloudforce-one/requests/${requestIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: RequestDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Request Priority, Status, and TLP constants
   */
  constants(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CloudforceOneRequestConstants> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/cloudforce-one/requests/constants`,
        options,
      ) as Core.APIPromise<{ result: CloudforceOneRequestConstants }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a Request
   */
  get(
    accountIdentifier: string,
    requestIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CloudforceOneRequestItem> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/cloudforce-one/requests/${requestIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: CloudforceOneRequestItem }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Request Quota
   */
  quota(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<CloudforceOneQuota> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/cloudforce-one/requests/quota`,
        options,
      ) as Core.APIPromise<{ result: CloudforceOneQuota }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Request Types
   */
  types(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CloudforceOneRequestTypes> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/cloudforce-one/requests/types`,
        options,
      ) as Core.APIPromise<{ result: CloudforceOneRequestTypes }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class CloudforceOneRequestListItemsV4PagePaginationArray extends V4PagePaginationArray<CloudforceOneRequestListItem> {}

export interface CloudforceOneQuota {
  /**
   * Anniversary date is when annual quota limit is refresh
   */
  anniversary_date?: string;

  /**
   * Quater anniversary date is when quota limit is refreshed each quarter
   */
  quarter_anniversary_date?: string;

  /**
   * Tokens for the quarter
   */
  quota?: number;

  /**
   * Tokens remaining for the quarter
   */
  remaining?: number;
}

export interface CloudforceOneRequestConstants {
  priority?: Array<'routine' | 'high' | 'urgent'>;

  status?: Array<'open' | 'accepted' | 'reported' | 'approved' | 'completed' | 'declined'>;

  tlp?: Array<'clear' | 'amber' | 'amber-strict' | 'green' | 'red'>;
}

export interface CloudforceOneRequestItem {
  /**
   * UUID
   */
  id: string;

  /**
   * Request content
   */
  content: string;

  created: string;

  priority: string;

  /**
   * Requested information from request
   */
  request: string;

  /**
   * Brief description of the request
   */
  summary: string;

  /**
   * The CISA defined Traffic Light Protocol (TLP)
   */
  tlp: 'clear' | 'amber' | 'amber-strict' | 'green' | 'red';

  updated: string;

  completed?: string;

  /**
   * Tokens for the request messages
   */
  message_tokens?: number;

  /**
   * Readable Request ID
   */
  readable_id?: string;

  /**
   * Request Status
   */
  status?: 'open' | 'accepted' | 'reported' | 'approved' | 'completed' | 'declined';

  /**
   * Tokens for the request
   */
  tokens?: number;
}

export interface CloudforceOneRequestListItem {
  /**
   * UUID
   */
  id: string;

  /**
   * Request creation time
   */
  created: string;

  priority: 'routine' | 'high' | 'urgent';

  /**
   * Requested information from request
   */
  request: string;

  /**
   * Brief description of the request
   */
  summary: string;

  /**
   * The CISA defined Traffic Light Protocol (TLP)
   */
  tlp: 'clear' | 'amber' | 'amber-strict' | 'green' | 'red';

  /**
   * Request last updated time
   */
  updated: string;

  /**
   * Request completion time
   */
  completed?: string;

  /**
   * Tokens for the request messages
   */
  message_tokens?: number;

  /**
   * Readable Request ID
   */
  readable_id?: string;

  /**
   * Request Status
   */
  status?: 'open' | 'accepted' | 'reported' | 'approved' | 'completed' | 'declined';

  /**
   * Tokens for the request
   */
  tokens?: number;
}

export type CloudforceOneRequestTypes = Array<string>;

export type RequestDeleteResponse = unknown | Array<unknown> | string;

export interface RequestCreateParams {
  /**
   * Request content
   */
  content?: string;

  /**
   * Priority for analyzing the request
   */
  priority?: string;

  /**
   * Requested information from request
   */
  request_type?: string;

  /**
   * Brief description of the request
   */
  summary?: string;

  /**
   * The CISA defined Traffic Light Protocol (TLP)
   */
  tlp?: 'clear' | 'amber' | 'amber-strict' | 'green' | 'red';
}

export interface RequestUpdateParams {
  /**
   * Request content
   */
  content?: string;

  /**
   * Priority for analyzing the request
   */
  priority?: string;

  /**
   * Requested information from request
   */
  request_type?: string;

  /**
   * Brief description of the request
   */
  summary?: string;

  /**
   * The CISA defined Traffic Light Protocol (TLP)
   */
  tlp?: 'clear' | 'amber' | 'amber-strict' | 'green' | 'red';
}

export interface RequestListParams extends V4PagePaginationArrayParams {
  /**
   * Retrieve requests completed after this time
   */
  completed_after?: string;

  /**
   * Retrieve requests completed before this time
   */
  completed_before?: string;

  /**
   * Retrieve requests created after this time
   */
  created_after?: string;

  /**
   * Retrieve requests created before this time
   */
  created_before?: string;

  /**
   * Requested information from request
   */
  request_type?: string;

  /**
   * Field to sort results by
   */
  sort_by?: string;

  /**
   * Sort order (asc or desc)
   */
  sort_order?: 'asc' | 'desc';

  /**
   * Request Status
   */
  status?: 'open' | 'accepted' | 'reported' | 'approved' | 'completed' | 'declined';
}

export namespace Requests {
  export import CloudforceOneQuota = RequestsAPI.CloudforceOneQuota;
  export import CloudforceOneRequestConstants = RequestsAPI.CloudforceOneRequestConstants;
  export import CloudforceOneRequestItem = RequestsAPI.CloudforceOneRequestItem;
  export import CloudforceOneRequestListItem = RequestsAPI.CloudforceOneRequestListItem;
  export import CloudforceOneRequestTypes = RequestsAPI.CloudforceOneRequestTypes;
  export import RequestDeleteResponse = RequestsAPI.RequestDeleteResponse;
  export import CloudforceOneRequestListItemsV4PagePaginationArray = RequestsAPI.CloudforceOneRequestListItemsV4PagePaginationArray;
  export import RequestCreateParams = RequestsAPI.RequestCreateParams;
  export import RequestUpdateParams = RequestsAPI.RequestUpdateParams;
  export import RequestListParams = RequestsAPI.RequestListParams;
  export import Message = MessageAPI.Message;
  export import CloudforceOneRequestMessageItem = MessageAPI.CloudforceOneRequestMessageItem;
  export import MessageDeleteResponse = MessageAPI.MessageDeleteResponse;
  export import MessageGetResponse = MessageAPI.MessageGetResponse;
  export import MessageCreateParams = MessageAPI.MessageCreateParams;
  export import MessageUpdateParams = MessageAPI.MessageUpdateParams;
  export import MessageGetParams = MessageAPI.MessageGetParams;
  export import Priority = PriorityAPI.Priority;
  export import CloudforceOnePriorityItem = PriorityAPI.CloudforceOnePriorityItem;
  export import PriorityDeleteResponse = PriorityAPI.PriorityDeleteResponse;
  export import PriorityCreateParams = PriorityAPI.PriorityCreateParams;
  export import PriorityUpdateParams = PriorityAPI.PriorityUpdateParams;
}
