// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Recipients extends APIResource {
  /**
   * Create a new share recipient
   */
  create(
    shareID: string,
    params: RecipientCreateParams,
    options?: RequestOptions,
  ): APIPromise<RecipientCreateResponse> {
    const { path_account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${path_account_id}/shares/${shareID}/recipients`, {
        body,
        ...options,
      }) as APIPromise<{ result: RecipientCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List share recipients by share ID.
   */
  list(
    shareID: string,
    params: RecipientListParams,
    options?: RequestOptions,
  ): PagePromise<RecipientListResponsesV4PagePaginationArray, RecipientListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/shares/${shareID}/recipients`,
      V4PagePaginationArray<RecipientListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletion is not immediate, an updated share recipient object with a new status
   * will be returned.
   */
  delete(
    recipientID: string,
    params: RecipientDeleteParams,
    options?: RequestOptions,
  ): APIPromise<RecipientDeleteResponse> {
    const { account_id, share_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/shares/${share_id}/recipients/${recipientID}`,
        options,
      ) as APIPromise<{ result: RecipientDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get share recipient by ID.
   */
  get(
    recipientID: string,
    params: RecipientGetParams,
    options?: RequestOptions,
  ): APIPromise<RecipientGetResponse> {
    const { account_id, share_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/shares/${share_id}/recipients/${recipientID}`,
        options,
      ) as APIPromise<{ result: RecipientGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type RecipientListResponsesV4PagePaginationArray = V4PagePaginationArray<RecipientListResponse>;

export interface RecipientCreateResponse {
  /**
   * Share Recipient identifier tag.
   */
  id: string;

  /**
   * Account identifier.
   */
  account_id: string;

  /**
   * Share Recipient association status.
   */
  association_status: 'associating' | 'associated' | 'disassociating' | 'disassociated';

  /**
   * When the share was created.
   */
  created: string;

  /**
   * When the share was modified.
   */
  modified: string;

  /**
   * Share Recipient status message.
   */
  status_message: string;
}

export interface RecipientListResponse {
  /**
   * Share Recipient identifier tag.
   */
  id: string;

  /**
   * Account identifier.
   */
  account_id: string;

  /**
   * Share Recipient association status.
   */
  association_status: 'associating' | 'associated' | 'disassociating' | 'disassociated';

  /**
   * When the share was created.
   */
  created: string;

  /**
   * When the share was modified.
   */
  modified: string;

  /**
   * Share Recipient status message.
   */
  status_message: string;
}

export interface RecipientDeleteResponse {
  /**
   * Share Recipient identifier tag.
   */
  id: string;

  /**
   * Account identifier.
   */
  account_id: string;

  /**
   * Share Recipient association status.
   */
  association_status: 'associating' | 'associated' | 'disassociating' | 'disassociated';

  /**
   * When the share was created.
   */
  created: string;

  /**
   * When the share was modified.
   */
  modified: string;

  /**
   * Share Recipient status message.
   */
  status_message: string;
}

export interface RecipientGetResponse {
  /**
   * Share Recipient identifier tag.
   */
  id: string;

  /**
   * Account identifier.
   */
  account_id: string;

  /**
   * Share Recipient association status.
   */
  association_status: 'associating' | 'associated' | 'disassociating' | 'disassociated';

  /**
   * When the share was created.
   */
  created: string;

  /**
   * When the share was modified.
   */
  modified: string;

  /**
   * Share Recipient status message.
   */
  status_message: string;
}

export interface RecipientCreateParams {
  /**
   * Path param: Account identifier.
   */
  path_account_id: string;

  /**
   * Body param: Account identifier.
   */
  body_account_id?: string;

  /**
   * Body param: Organization identifier.
   */
  organization_id?: string;
}

export interface RecipientListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Account identifier.
   */
  account_id: string;
}

export interface RecipientDeleteParams {
  /**
   * Account identifier.
   */
  account_id: string;

  /**
   * Share identifier tag.
   */
  share_id: string;
}

export interface RecipientGetParams {
  /**
   * Account identifier.
   */
  account_id: string;

  /**
   * Share identifier tag.
   */
  share_id: string;
}

export declare namespace Recipients {
  export {
    type RecipientCreateResponse as RecipientCreateResponse,
    type RecipientListResponse as RecipientListResponse,
    type RecipientDeleteResponse as RecipientDeleteResponse,
    type RecipientGetResponse as RecipientGetResponse,
    type RecipientListResponsesV4PagePaginationArray as RecipientListResponsesV4PagePaginationArray,
    type RecipientCreateParams as RecipientCreateParams,
    type RecipientListParams as RecipientListParams,
    type RecipientDeleteParams as RecipientDeleteParams,
    type RecipientGetParams as RecipientGetParams,
  };
}
