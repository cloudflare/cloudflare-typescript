// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as IndexesAPI from './indexes';
import * as MetadataIndexAPI from './metadata-index';
import { SinglePage } from '../../../pagination';

export class Indexes extends APIResource {
  metadataIndex: MetadataIndexAPI.MetadataIndex = new MetadataIndexAPI.MetadataIndex(this._client);

  /**
   * Creates and returns a new Vectorize Index.
   */
  create(params: IndexCreateParams, options?: Core.RequestOptions): Core.APIPromise<CreateIndex | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/vectorize/v2/indexes`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CreateIndex | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a list of Vectorize Indexes
   */
  list(
    params: IndexListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CreateIndicesSinglePage, CreateIndex> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/vectorize/v2/indexes`,
      CreateIndicesSinglePage,
      options,
    );
  }

  /**
   * Deletes the specified Vectorize Index.
   */
  delete(
    indexName: string,
    params: IndexDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndexDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/vectorize/v2/indexes/${indexName}`,
        options,
      ) as Core.APIPromise<{ result: IndexDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a set of vectors from an index by their vector identifiers.
   */
  deleteByIds(
    indexName: string,
    params: IndexDeleteByIDsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndexDeleteByIDsResponse | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/vectorize/v2/indexes/${indexName}/delete_by_ids`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IndexDeleteByIDsResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the specified Vectorize Index.
   */
  get(
    indexName: string,
    params: IndexGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CreateIndex | null> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/vectorize/v2/indexes/${indexName}`,
        options,
      ) as Core.APIPromise<{ result: CreateIndex | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a set of vectors from an index by their vector identifiers.
   */
  getByIds(
    indexName: string,
    params: IndexGetByIDsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndexGetByIDsResponse | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/vectorize/v2/indexes/${indexName}/get_by_ids`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IndexGetByIDsResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information about a vectorize index.
   */
  info(
    indexName: string,
    params: IndexInfoParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndexInfoResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/vectorize/v2/indexes/${indexName}/info`,
        options,
      ) as Core.APIPromise<{ result: IndexInfoResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Inserts vectors into the specified index and returns a mutation id corresponding
   * to the vectors enqueued for insertion.
   */
  insert(
    indexName: string,
    params: IndexInsertParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndexInsertResponse | null> {
    const { account_id, body, 'unparsable-behavior': unparsableBehavior } = params;
    return (
      this._client.post(`/accounts/${account_id}/vectorize/v2/indexes/${indexName}/insert`, {
        query: { 'unparsable-behavior': unparsableBehavior },
        body: body,
        ...options,
        headers: { 'Content-Type': 'application/x-ndjson', ...options?.headers },
        __binaryRequest: true,
      }) as Core.APIPromise<{ result: IndexInsertResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Finds vectors closest to a given vector in an index.
   */
  query(
    indexName: string,
    params: IndexQueryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndexQueryResponse | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/vectorize/v2/indexes/${indexName}/query`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IndexQueryResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Upserts vectors into the specified index, creating them if they do not exist and
   * returns a mutation id corresponding to the vectors enqueued for upsertion.
   */
  upsert(
    indexName: string,
    params: IndexUpsertParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndexUpsertResponse | null> {
    const { account_id, body, 'unparsable-behavior': unparsableBehavior } = params;
    return (
      this._client.post(`/accounts/${account_id}/vectorize/v2/indexes/${indexName}/upsert`, {
        query: { 'unparsable-behavior': unparsableBehavior },
        body: body,
        ...options,
        headers: { 'Content-Type': 'application/x-ndjson', ...options?.headers },
        __binaryRequest: true,
      }) as Core.APIPromise<{ result: IndexUpsertResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class CreateIndicesSinglePage extends SinglePage<CreateIndex> {}

export interface CreateIndex {
  config?: IndexDimensionConfiguration;

  /**
   * Specifies the timestamp the resource was created as an ISO8601 string.
   */
  created_on?: string;

  /**
   * Specifies the description of the index.
   */
  description?: string;

  /**
   * Specifies the timestamp the resource was modified as an ISO8601 string.
   */
  modified_on?: string;

  name?: string;
}

export interface IndexDeleteVectorsByID {
  /**
   * The count of the vectors successfully deleted.
   */
  count?: number;

  /**
   * Array of vector identifiers of the vectors that were successfully processed for
   * deletion.
   */
  ids?: Array<string>;
}

export interface IndexDimensionConfiguration {
  /**
   * Specifies the number of dimensions for the index
   */
  dimensions: number;

  /**
   * Specifies the type of metric to use calculating distance.
   */
  metric: 'cosine' | 'euclidean' | 'dot-product';
}

export interface IndexDimensionConfigurationParam {
  /**
   * Specifies the number of dimensions for the index
   */
  dimensions: number;

  /**
   * Specifies the type of metric to use calculating distance.
   */
  metric: 'cosine' | 'euclidean' | 'dot-product';
}

export interface IndexInsert {
  /**
   * Specifies the count of the vectors successfully inserted.
   */
  count?: number;

  /**
   * Array of vector identifiers of the vectors successfully inserted.
   */
  ids?: Array<string>;
}

export interface IndexQuery {
  /**
   * Specifies the count of vectors returned by the search
   */
  count?: number;

  /**
   * Array of vectors matched by the search
   */
  matches?: Array<IndexQuery.Match>;
}

export namespace IndexQuery {
  export interface Match {
    /**
     * Identifier for a Vector
     */
    id?: string;

    metadata?: unknown | null;

    /**
     * The score of the vector according to the index's distance metric
     */
    score?: number;

    values?: Array<number> | null;
  }
}

export interface IndexUpsert {
  /**
   * Specifies the count of the vectors successfully inserted.
   */
  count?: number;

  /**
   * Array of vector identifiers of the vectors successfully inserted.
   */
  ids?: Array<string>;
}

export type IndexDeleteResponse = unknown | string | null;

export interface IndexDeleteByIDsResponse {
  /**
   * The unique identifier for the async mutation operation containing the changeset.
   */
  mutationId?: string;
}

/**
 * Array of vectors with matching ids.
 */
export type IndexGetByIDsResponse = unknown;

export interface IndexInfoResponse {
  /**
   * Specifies the number of dimensions for the index
   */
  dimensions?: number;

  /**
   * Specifies the timestamp the last mutation batch was processed as an ISO8601
   * string.
   */
  processedUpToDatetime?: string | null;

  /**
   * The unique identifier for the async mutation operation containing the changeset.
   */
  processedUpToMutation?: string;

  /**
   * Specifies the number of vectors present in the index
   */
  vectorCount?: number;
}

export interface IndexInsertResponse {
  /**
   * The unique identifier for the async mutation operation containing the changeset.
   */
  mutationId?: string;
}

export interface IndexQueryResponse {
  /**
   * Specifies the count of vectors returned by the search
   */
  count?: number;

  /**
   * Array of vectors matched by the search
   */
  matches?: Array<IndexQueryResponse.Match>;
}

export namespace IndexQueryResponse {
  export interface Match {
    /**
     * Identifier for a Vector
     */
    id?: string;

    metadata?: unknown | null;

    namespace?: string | null;

    /**
     * The score of the vector according to the index's distance metric
     */
    score?: number;

    values?: Array<number> | null;
  }
}

export interface IndexUpsertResponse {
  /**
   * The unique identifier for the async mutation operation containing the changeset.
   */
  mutationId?: string;
}

export interface IndexCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Specifies the type of configuration to use for the index.
   */
  config: IndexDimensionConfigurationParam | IndexCreateParams.VectorizeIndexPresetConfiguration;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param: Specifies the description of the index.
   */
  description?: string;
}

export namespace IndexCreateParams {
  export interface VectorizeIndexPresetConfiguration {
    /**
     * Specifies the preset to use for the index.
     */
    preset:
      | '@cf/baai/bge-small-en-v1.5'
      | '@cf/baai/bge-base-en-v1.5'
      | '@cf/baai/bge-large-en-v1.5'
      | 'openai/text-embedding-ada-002'
      | 'cohere/embed-multilingual-v2.0';
  }
}

export interface IndexListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface IndexDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface IndexDeleteByIDsParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: A list of vector identifiers to delete from the index indicated by
   * the path.
   */
  ids?: Array<string>;
}

export interface IndexGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface IndexGetByIDsParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: A list of vector identifiers to retrieve from the index indicated by
   * the path.
   */
  ids?: Array<string>;
}

export interface IndexInfoParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface IndexInsertParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: ndjson file containing vectors to insert.
   */
  body: Core.Uploadable;

  /**
   * Query param: Behavior for ndjson parse failures.
   */
  'unparsable-behavior'?: 'error' | 'discard';
}

export interface IndexQueryParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The search vector that will be used to find the nearest neighbors.
   */
  vector: Array<number>;

  /**
   * Body param: A metadata filter expression used to limit nearest neighbor results.
   */
  filter?: unknown;

  /**
   * Body param: Whether to return the metadata associated with the closest vectors.
   */
  returnMetadata?: boolean;

  /**
   * Body param: Whether to return the values associated with the closest vectors.
   */
  returnValues?: boolean;

  /**
   * Body param: The number of nearest neighbors to find.
   */
  topK?: number;
}

export interface IndexUpsertParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: ndjson file containing vectors to upsert.
   */
  body: Core.Uploadable;

  /**
   * Query param: Behavior for ndjson parse failures.
   */
  'unparsable-behavior'?: 'error' | 'discard';
}

export namespace Indexes {
  export import CreateIndex = IndexesAPI.CreateIndex;
  export import IndexDeleteVectorsByID = IndexesAPI.IndexDeleteVectorsByID;
  export import IndexDimensionConfiguration = IndexesAPI.IndexDimensionConfiguration;
  export import IndexInsert = IndexesAPI.IndexInsert;
  export import IndexQuery = IndexesAPI.IndexQuery;
  export import IndexUpsert = IndexesAPI.IndexUpsert;
  export import IndexDeleteResponse = IndexesAPI.IndexDeleteResponse;
  export import IndexDeleteByIDsResponse = IndexesAPI.IndexDeleteByIDsResponse;
  export import IndexGetByIDsResponse = IndexesAPI.IndexGetByIDsResponse;
  export import IndexInfoResponse = IndexesAPI.IndexInfoResponse;
  export import IndexInsertResponse = IndexesAPI.IndexInsertResponse;
  export import IndexQueryResponse = IndexesAPI.IndexQueryResponse;
  export import IndexUpsertResponse = IndexesAPI.IndexUpsertResponse;
  export import CreateIndicesSinglePage = IndexesAPI.CreateIndicesSinglePage;
  export import IndexCreateParams = IndexesAPI.IndexCreateParams;
  export import IndexListParams = IndexesAPI.IndexListParams;
  export import IndexDeleteParams = IndexesAPI.IndexDeleteParams;
  export import IndexDeleteByIDsParams = IndexesAPI.IndexDeleteByIDsParams;
  export import IndexGetParams = IndexesAPI.IndexGetParams;
  export import IndexGetByIDsParams = IndexesAPI.IndexGetByIDsParams;
  export import IndexInfoParams = IndexesAPI.IndexInfoParams;
  export import IndexInsertParams = IndexesAPI.IndexInsertParams;
  export import IndexQueryParams = IndexesAPI.IndexQueryParams;
  export import IndexUpsertParams = IndexesAPI.IndexUpsertParams;
  export import MetadataIndex = MetadataIndexAPI.MetadataIndex;
  export import MetadataIndexCreateResponse = MetadataIndexAPI.MetadataIndexCreateResponse;
  export import MetadataIndexListResponse = MetadataIndexAPI.MetadataIndexListResponse;
  export import MetadataIndexDeleteResponse = MetadataIndexAPI.MetadataIndexDeleteResponse;
  export import MetadataIndexCreateParams = MetadataIndexAPI.MetadataIndexCreateParams;
  export import MetadataIndexListParams = MetadataIndexAPI.MetadataIndexListParams;
  export import MetadataIndexDeleteParams = MetadataIndexAPI.MetadataIndexDeleteParams;
}
