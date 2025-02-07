// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Shared from '../../shared';
import * as AssetsAPI from './assets';
import {
  AssetCreateParams,
  AssetCreateResponse,
  AssetCreateResponsesSinglePage,
  AssetDeleteParams,
  AssetDeleteResponse,
  AssetGetParams,
  AssetGetResponse,
  AssetGetResponsesSinglePage,
  AssetUpdateParams,
  AssetUpdateResponse,
  Assets,
} from './assets';
import * as MessageAPI from './message';
import {
  Message,
  MessageCreateParams,
  MessageDeleteParams,
  MessageDeleteResponse,
  MessageGetParams,
  MessageResource,
  MessageUpdateParams,
  MessagesSinglePage,
} from './message';
import * as PriorityAPI from './priority';
import {
  Label,
  Priority,
  PriorityCreateParams,
  PriorityDeleteParams,
  PriorityDeleteResponse,
  PriorityEdit,
  PriorityGetParams,
  PriorityResource,
  PriorityUpdateParams,
} from './priority';
import { APIPromise } from '../../../api-promise';
import { PagePromise, SinglePage } from '../../../pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Requests extends APIResource {
  message: MessageAPI.MessageResource = new MessageAPI.MessageResource(this._client);
  priority: PriorityAPI.PriorityResource = new PriorityAPI.PriorityResource(this._client);
  assets: AssetsAPI.Assets = new AssetsAPI.Assets(this._client);

  /**
   * Creating a request adds the request into the Cloudforce One queue for analysis.
   * In addition to the content, a short title, type, priority, and releasability
   * should be provided. If one is not provided, a default will be assigned.
   */
  create(accountIdentifier: string, body: RequestCreateParams, options?: RequestOptions): APIPromise<Item> {
    return (
      this._client.post(path`/accounts/${accountIdentifier}/cloudforce-one/requests/new`, {
        body,
        ...options,
      }) as APIPromise<{ result: Item }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updating a request alters the request in the Cloudforce One queue. This API may
   * be used to update any attributes of the request after the initial submission.
   * Only fields that you choose to update need to be add to the request body.
   */
  update(requestIdentifier: string, params: RequestUpdateParams, options?: RequestOptions): APIPromise<Item> {
    const { account_identifier, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_identifier}/cloudforce-one/requests/${requestIdentifier}`, {
        body,
        ...options,
      }) as APIPromise<{ result: Item }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Requests
   */
  list(
    accountIdentifier: string,
    body: RequestListParams,
    options?: RequestOptions,
  ): PagePromise<ListItemsSinglePage, ListItem> {
    return this._client.getAPIList(
      path`/accounts/${accountIdentifier}/cloudforce-one/requests`,
      SinglePage<ListItem>,
      { body, method: 'post', ...options },
    );
  }

  /**
   * Delete a Request
   */
  delete(
    requestIdentifier: string,
    params: RequestDeleteParams,
    options?: RequestOptions,
  ): APIPromise<RequestDeleteResponse> {
    const { account_identifier } = params;
    return this._client.delete(
      path`/accounts/${account_identifier}/cloudforce-one/requests/${requestIdentifier}`,
      options,
    );
  }

  /**
   * Get Request Priority, Status, and TLP constants
   */
  constants(accountIdentifier: string, options?: RequestOptions): APIPromise<RequestConstants> {
    return (
      this._client.get(
        path`/accounts/${accountIdentifier}/cloudforce-one/requests/constants`,
        options,
      ) as APIPromise<{ result: RequestConstants }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a Request
   */
  get(requestIdentifier: string, params: RequestGetParams, options?: RequestOptions): APIPromise<Item> {
    const { account_identifier } = params;
    return (
      this._client.get(
        path`/accounts/${account_identifier}/cloudforce-one/requests/${requestIdentifier}`,
        options,
      ) as APIPromise<{ result: Item }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Request Quota
   */
  quota(accountIdentifier: string, options?: RequestOptions): APIPromise<Quota> {
    return (
      this._client.get(
        path`/accounts/${accountIdentifier}/cloudforce-one/requests/quota`,
        options,
      ) as APIPromise<{ result: Quota }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Request Types
   */
  types(
    accountIdentifier: string,
    options?: RequestOptions,
  ): PagePromise<RequestTypesResponsesSinglePage, RequestTypesResponse> {
    return this._client.getAPIList(
      path`/accounts/${accountIdentifier}/cloudforce-one/requests/types`,
      SinglePage<RequestTypesResponse>,
      options,
    );
  }
}

export type ListItemsSinglePage = SinglePage<ListItem>;

export type RequestTypesResponsesSinglePage = SinglePage<RequestTypesResponse>;

export interface Item {
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

export interface ListItem {
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

export interface Quota {
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

export interface RequestConstants {
  priority?: Array<'routine' | 'high' | 'urgent'>;

  status?: Array<'open' | 'accepted' | 'reported' | 'approved' | 'completed' | 'declined'>;

  tlp?: Array<'clear' | 'amber' | 'amber-strict' | 'green' | 'red'>;
}

export type RequestTypes = Array<RequestTypesResponse>;

export interface RequestDeleteResponse {
  errors: Array<Shared.ResponseInfo>;

  messages: Array<Shared.ResponseInfo>;

  /**
   * Whether the API call was successful
   */
  success: true;
}

/**
 * Request Types
 */
export type RequestTypesResponse = string;

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
   * Path param: Identifier
   */
  account_identifier: string;

  /**
   * Body param: Request content
   */
  content?: string;

  /**
   * Body param: Priority for analyzing the request
   */
  priority?: string;

  /**
   * Body param: Requested information from request
   */
  request_type?: string;

  /**
   * Body param: Brief description of the request
   */
  summary?: string;

  /**
   * Body param: The CISA defined Traffic Light Protocol (TLP)
   */
  tlp?: 'clear' | 'amber' | 'amber-strict' | 'green' | 'red';
}

export interface RequestListParams {
  /**
   * Page number of results
   */
  page: number;

  /**
   * Number of results per page
   */
  per_page: number;

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

export interface RequestDeleteParams {
  /**
   * Identifier
   */
  account_identifier: string;
}

export interface RequestGetParams {
  /**
   * Identifier
   */
  account_identifier: string;
}

Requests.MessageResource = MessageResource;
Requests.PriorityResource = PriorityResource;
Requests.Assets = Assets;

export declare namespace Requests {
  export {
    type Item as Item,
    type ListItem as ListItem,
    type Quota as Quota,
    type RequestConstants as RequestConstants,
    type RequestTypes as RequestTypes,
    type RequestDeleteResponse as RequestDeleteResponse,
    type RequestTypesResponse as RequestTypesResponse,
    type ListItemsSinglePage as ListItemsSinglePage,
    type RequestTypesResponsesSinglePage as RequestTypesResponsesSinglePage,
    type RequestCreateParams as RequestCreateParams,
    type RequestUpdateParams as RequestUpdateParams,
    type RequestListParams as RequestListParams,
    type RequestDeleteParams as RequestDeleteParams,
    type RequestGetParams as RequestGetParams,
  };

  export {
    MessageResource as MessageResource,
    type Message as Message,
    type MessageDeleteResponse as MessageDeleteResponse,
    type MessagesSinglePage as MessagesSinglePage,
    type MessageCreateParams as MessageCreateParams,
    type MessageUpdateParams as MessageUpdateParams,
    type MessageDeleteParams as MessageDeleteParams,
    type MessageGetParams as MessageGetParams,
  };

  export {
    PriorityResource as PriorityResource,
    type Label as Label,
    type Priority as Priority,
    type PriorityEdit as PriorityEdit,
    type PriorityDeleteResponse as PriorityDeleteResponse,
    type PriorityCreateParams as PriorityCreateParams,
    type PriorityUpdateParams as PriorityUpdateParams,
    type PriorityDeleteParams as PriorityDeleteParams,
    type PriorityGetParams as PriorityGetParams,
  };

  export {
    Assets as Assets,
    type AssetCreateResponse as AssetCreateResponse,
    type AssetUpdateResponse as AssetUpdateResponse,
    type AssetDeleteResponse as AssetDeleteResponse,
    type AssetGetResponse as AssetGetResponse,
    type AssetCreateResponsesSinglePage as AssetCreateResponsesSinglePage,
    type AssetGetResponsesSinglePage as AssetGetResponsesSinglePage,
    type AssetCreateParams as AssetCreateParams,
    type AssetUpdateParams as AssetUpdateParams,
    type AssetDeleteParams as AssetDeleteParams,
    type AssetGetParams as AssetGetParams,
  };
}
