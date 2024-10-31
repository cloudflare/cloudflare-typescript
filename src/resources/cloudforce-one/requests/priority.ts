// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as Shared from '../../shared';

export class Priority extends APIResource {
  /**
   * Create a New Priority Intelligence Requirement
   */
  create(
    accountIdentifier: string,
    body: PriorityCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PriorityCreateResponse> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/cloudforce-one/requests/priority/new`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PriorityCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a Priority Intelligence Requirement
   */
  update(
    accountIdentifier: string,
    priorityIdentifer: string,
    body: PriorityUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PriorityUpdateResponse> {
    return (
      this._client.put(
        `/accounts/${accountIdentifier}/cloudforce-one/requests/priority/${priorityIdentifer}`,
        { body, ...options },
      ) as Core.APIPromise<{ result: PriorityUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a Priority Intelligence Requirement
   */
  delete(
    accountIdentifier: string,
    priorityIdentifer: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PriorityDeleteResponse> {
    return this._client.delete(
      `/accounts/${accountIdentifier}/cloudforce-one/requests/priority/${priorityIdentifer}`,
      options,
    );
  }

  /**
   * Get a Priority Intelligence Requirement
   */
  get(
    accountIdentifier: string,
    priorityIdentifer: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PriorityGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/cloudforce-one/requests/priority/${priorityIdentifer}`,
        options,
      ) as Core.APIPromise<{ result: PriorityGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Priority Intelligence Requirement Quota
   */
  quota(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<PriorityQuotaResponse> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/cloudforce-one/requests/priority/quota`,
        options,
      ) as Core.APIPromise<{ result: PriorityQuotaResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PriorityCreateResponse {
  /**
   * UUID
   */
  id: string;

  /**
   * Priority creation time
   */
  created: string;

  /**
   * List of labels
   */
  labels: Array<string>;

  /**
   * Priority
   */
  priority: number;

  /**
   * Requirement
   */
  requirement: string;

  /**
   * The CISA defined Traffic Light Protocol (TLP)
   */
  tlp: 'clear' | 'amber' | 'amber-strict' | 'green' | 'red';

  /**
   * Priority last updated time
   */
  updated: string;
}

export interface PriorityUpdateResponse {
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

export interface PriorityDeleteResponse {
  errors: Array<Shared.ResponseInfo>;

  messages: Array<Shared.ResponseInfo>;

  /**
   * Whether the API call was successful
   */
  success: true;
}

export interface PriorityGetResponse {
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

export interface PriorityQuotaResponse {
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

export interface PriorityCreateParams {
  /**
   * List of labels
   */
  labels: Array<string>;

  /**
   * Priority
   */
  priority: number;

  /**
   * Requirement
   */
  requirement: string;

  /**
   * The CISA defined Traffic Light Protocol (TLP)
   */
  tlp: 'clear' | 'amber' | 'amber-strict' | 'green' | 'red';
}

export interface PriorityUpdateParams {
  /**
   * List of labels
   */
  labels: Array<string>;

  /**
   * Priority
   */
  priority: number;

  /**
   * Requirement
   */
  requirement: string;

  /**
   * The CISA defined Traffic Light Protocol (TLP)
   */
  tlp: 'clear' | 'amber' | 'amber-strict' | 'green' | 'red';
}

export declare namespace Priority {
  export {
    type PriorityCreateResponse as PriorityCreateResponse,
    type PriorityUpdateResponse as PriorityUpdateResponse,
    type PriorityDeleteResponse as PriorityDeleteResponse,
    type PriorityGetResponse as PriorityGetResponse,
    type PriorityQuotaResponse as PriorityQuotaResponse,
    type PriorityCreateParams as PriorityCreateParams,
    type PriorityUpdateParams as PriorityUpdateParams,
  };
}
