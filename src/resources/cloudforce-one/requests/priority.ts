// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PriorityAPI from 'cloudflare/resources/cloudforce-one/requests/priority';

export class Priority extends APIResource {
  /**
   * Create a New Priority Requirement
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
   * Delete a Priority Intelligence Report
   */
  delete(
    accountIdentifier: string,
    priorityIdentifer: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PriorityDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountIdentifier}/cloudforce-one/requests/priority/${priorityIdentifer}`,
        options,
      ) as Core.APIPromise<{ result: PriorityDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Priority Intelligence Requirements
   */
  doSomethingUnknown(
    accountIdentifier: string,
    body: PriorityDoSomethingUnknownParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PriorityDoSomethingUnknownResponse> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/cloudforce-one/requests/priority`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PriorityDoSomethingUnknownResponse }>
    )._thenUnwrap((obj) => obj.result);
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

export type PriorityDeleteResponse = unknown | Array<unknown> | string;

export type PriorityDoSomethingUnknownResponse =
  Array<PriorityDoSomethingUnknownResponse.PriorityDoSomethingUnknownResponseItem>;

export namespace PriorityDoSomethingUnknownResponse {
  export interface PriorityDoSomethingUnknownResponseItem {
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

export interface PriorityDoSomethingUnknownParams {
  /**
   * Page number of results
   */
  page: number;

  /**
   * Number of results per page
   */
  per_page: number;
}

export namespace Priority {
  export import PriorityCreateResponse = PriorityAPI.PriorityCreateResponse;
  export import PriorityUpdateResponse = PriorityAPI.PriorityUpdateResponse;
  export import PriorityDeleteResponse = PriorityAPI.PriorityDeleteResponse;
  export import PriorityDoSomethingUnknownResponse = PriorityAPI.PriorityDoSomethingUnknownResponse;
  export import PriorityGetResponse = PriorityAPI.PriorityGetResponse;
  export import PriorityQuotaResponse = PriorityAPI.PriorityQuotaResponse;
  export import PriorityCreateParams = PriorityAPI.PriorityCreateParams;
  export import PriorityUpdateParams = PriorityAPI.PriorityUpdateParams;
  export import PriorityDoSomethingUnknownParams = PriorityAPI.PriorityDoSomethingUnknownParams;
}
