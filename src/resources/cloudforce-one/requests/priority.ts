// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RequestsAPI from './requests';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class PriorityResource extends APIResource {
  /**
   * Create a New Priority Intelligence Requirement
   */
  create(params: PriorityCreateParams, options?: RequestOptions): APIPromise<Priority> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/cloudforce-one/requests/priority/new`, {
        body,
        ...options,
      }) as APIPromise<{ result: Priority }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a Priority Intelligence Requirement
   */
  update(
    priorityID: string,
    params: PriorityUpdateParams,
    options?: RequestOptions,
  ): APIPromise<RequestsAPI.Item> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/cloudforce-one/requests/priority/${priorityID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: RequestsAPI.Item }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a Priority Intelligence Requirement
   */
  delete(
    priorityID: string,
    params: PriorityDeleteParams,
    options?: RequestOptions,
  ): APIPromise<PriorityDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      path`/accounts/${account_id}/cloudforce-one/requests/priority/${priorityID}`,
      options,
    );
  }

  /**
   * Get a Priority Intelligence Requirement
   */
  get(priorityID: string, params: PriorityGetParams, options?: RequestOptions): APIPromise<RequestsAPI.Item> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/cloudforce-one/requests/priority/${priorityID}`,
        options,
      ) as APIPromise<{ result: RequestsAPI.Item }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Priority Intelligence Requirement Quota
   */
  quota(params: PriorityQuotaParams, options?: RequestOptions): APIPromise<RequestsAPI.Quota> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/cloudforce-one/requests/priority/quota`,
        options,
      ) as APIPromise<{ result: RequestsAPI.Quota }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type Label = string;

export type LabelParam = string;

export interface Priority {
  /**
   * UUID.
   */
  id: string;

  /**
   * Priority creation time.
   */
  created: string;

  /**
   * List of labels.
   */
  labels: Array<Label>;

  /**
   * Priority.
   */
  priority: number;

  /**
   * Requirement.
   */
  requirement: string;

  /**
   * The CISA defined Traffic Light Protocol (TLP).
   */
  tlp: 'clear' | 'amber' | 'amber-strict' | 'green' | 'red';

  /**
   * Priority last updated time.
   */
  updated: string;
}

export interface PriorityEdit {
  /**
   * List of labels.
   */
  labels: Array<Label>;

  /**
   * Priority.
   */
  priority: number;

  /**
   * Requirement.
   */
  requirement: string;

  /**
   * The CISA defined Traffic Light Protocol (TLP).
   */
  tlp: 'clear' | 'amber' | 'amber-strict' | 'green' | 'red';
}

export interface PriorityDeleteResponse {
  errors: Array<PriorityDeleteResponse.Error>;

  messages: Array<PriorityDeleteResponse.Message>;

  /**
   * Whether the API call was successful.
   */
  success: true;
}

export namespace PriorityDeleteResponse {
  export interface Error {
    code: number;

    message: string;

    documentation_url?: string;

    source?: Error.Source;
  }

  export namespace Error {
    export interface Source {
      pointer?: string;
    }
  }

  export interface Message {
    code: number;

    message: string;

    documentation_url?: string;

    source?: Message.Source;
  }

  export namespace Message {
    export interface Source {
      pointer?: string;
    }
  }
}

export interface PriorityCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: List of labels.
   */
  labels: Array<LabelParam>;

  /**
   * Body param: Priority.
   */
  priority: number;

  /**
   * Body param: Requirement.
   */
  requirement: string;

  /**
   * Body param: The CISA defined Traffic Light Protocol (TLP).
   */
  tlp: 'clear' | 'amber' | 'amber-strict' | 'green' | 'red';
}

export interface PriorityUpdateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: List of labels.
   */
  labels: Array<LabelParam>;

  /**
   * Body param: Priority.
   */
  priority: number;

  /**
   * Body param: Requirement.
   */
  requirement: string;

  /**
   * Body param: The CISA defined Traffic Light Protocol (TLP).
   */
  tlp: 'clear' | 'amber' | 'amber-strict' | 'green' | 'red';
}

export interface PriorityDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface PriorityGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface PriorityQuotaParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export declare namespace PriorityResource {
  export {
    type Label as Label,
    type Priority as Priority,
    type PriorityEdit as PriorityEdit,
    type PriorityDeleteResponse as PriorityDeleteResponse,
    type PriorityCreateParams as PriorityCreateParams,
    type PriorityUpdateParams as PriorityUpdateParams,
    type PriorityDeleteParams as PriorityDeleteParams,
    type PriorityGetParams as PriorityGetParams,
    type PriorityQuotaParams as PriorityQuotaParams,
  };
}
