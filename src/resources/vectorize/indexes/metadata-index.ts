// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as MetadataIndexAPI from './metadata-index';

export class MetadataIndex extends APIResource {
  /**
   * Enable metadata filtering based on metadata property. Limited to 10 properties.
   */
  create(indexName: string, params: MetadataIndexCreateParams, options?: Core.RequestOptions): Core.APIPromise<MetadataIndexCreateResponse | null> {
    const { account_id, ...body } = params;
    return (this._client.post(`/accounts/${account_id}/vectorize/v2/indexes/${indexName}/metadata_index/create`, { body, ...options }) as Core.APIPromise<{ result: MetadataIndexCreateResponse | null }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Metadata Indexes for the specified Vectorize Index.
   */
  list(indexName: string, params: MetadataIndexListParams, options?: Core.RequestOptions): Core.APIPromise<MetadataIndexListResponse | null> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/vectorize/v2/indexes/${indexName}/metadata_index/list`, options) as Core.APIPromise<{ result: MetadataIndexListResponse | null }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Allow Vectorize to delete the specified metadata index.
   */
  delete(indexName: string, params: MetadataIndexDeleteParams, options?: Core.RequestOptions): Core.APIPromise<MetadataIndexDeleteResponse | null> {
    const { account_id, ...body } = params;
    return (this._client.post(`/accounts/${account_id}/vectorize/v2/indexes/${indexName}/metadata_index/delete`, { body, ...options }) as Core.APIPromise<{ result: MetadataIndexDeleteResponse | null }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface MetadataIndexCreateResponse {
  /**
   * The unique identifier for the async mutation operation containing the changeset.
   */
  mutationId?: string;
}

export interface MetadataIndexListResponse {
  /**
   * Array of indexed metadata properties.
   */
  metadataIndexes?: Array<MetadataIndexListResponse.MetadataIndex>;
}

export namespace MetadataIndexListResponse {
  export interface MetadataIndex {
    /**
     * Specifies the type of indexed metadata property.
     */
    indexType?: 'string' | 'number' | 'boolean';

    /**
     * Specifies the indexed metadata property.
     */
    propertyName?: string;
  }
}

export interface MetadataIndexDeleteResponse {
  /**
   * The unique identifier for the async mutation operation containing the changeset.
   */
  mutationId?: string;
}

export interface MetadataIndexCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Specifies the type of metadata property to index.
   */
  indexType: 'string' | 'number' | 'boolean';

  /**
   * Body param: Specifies the metadata property to index.
   */
  propertyName: string;
}

export interface MetadataIndexListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface MetadataIndexDeleteParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Specifies the metadata property for which the index must be deleted.
   */
  propertyName: string;
}

export namespace MetadataIndex {
  export import MetadataIndexCreateResponse = MetadataIndexAPI.MetadataIndexCreateResponse;
  export import MetadataIndexListResponse = MetadataIndexAPI.MetadataIndexListResponse;
  export import MetadataIndexDeleteResponse = MetadataIndexAPI.MetadataIndexDeleteResponse;
  export import MetadataIndexCreateParams = MetadataIndexAPI.MetadataIndexCreateParams;
  export import MetadataIndexListParams = MetadataIndexAPI.MetadataIndexListParams;
  export import MetadataIndexDeleteParams = MetadataIndexAPI.MetadataIndexDeleteParams;
}
