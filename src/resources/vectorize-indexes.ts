// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as VectorizeIndexesAPI from 'cloudflare/resources/vectorize-indexes';

export class VectorizeIndexes extends APIResource {
  /**
   * Creates and returns a new Vectorize Index.
   */
  create(
    accountIdentifier: string,
    body: VectorizeIndexCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VectorizeIndexCreateResponse | null> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/vectorize/indexes`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: VectorizeIndexCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the specified Vectorize Index.
   */
  retrieve(
    accountIdentifier: string,
    indexName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VectorizeIndexRetrieveResponse | null> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/vectorize/indexes/${indexName}`,
        options,
      ) as Core.APIPromise<{ result: VectorizeIndexRetrieveResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates and returns the specified Vectorize Index.
   */
  update(
    accountIdentifier: string,
    indexName: string,
    body: VectorizeIndexUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VectorizeIndexUpdateResponse | null> {
    return (
      this._client.put(`/accounts/${accountIdentifier}/vectorize/indexes/${indexName}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: VectorizeIndexUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes the specified Vectorize Index.
   */
  delete(
    accountIdentifier: string,
    indexName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VectorizeIndexDeleteResponse | null> {
    return (
      this._client.delete(
        `/accounts/${accountIdentifier}/vectorize/indexes/${indexName}`,
        options,
      ) as Core.APIPromise<{ result: VectorizeIndexDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete a set of vectors from an index by their vector identifiers.
   */
  deleteByIds(
    accountIdentifier: string,
    indexName: string,
    body: VectorizeIndexDeleteByIDsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VectorizeIndexDeleteByIDsResponse | null> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/vectorize/indexes/${indexName}/delete-by-ids`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: VectorizeIndexDeleteByIDsResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a set of vectors from an index by their vector identifiers.
   */
  getByIds(
    accountIdentifier: string,
    indexName: string,
    body: VectorizeIndexGetByIDsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VectorizeIndexGetByIDsResponse | null> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/vectorize/indexes/${indexName}/get-by-ids`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: VectorizeIndexGetByIDsResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Inserts vectors into the specified index and returns the count of the vectors
   * successfully inserted.
   */
  insert(
    accountIdentifier: string,
    indexName: string,
    body: VectorizeIndexInsertParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VectorizeIndexInsertResponse | null> {
    return (
      this._client.post(
        `/accounts/${accountIdentifier}/vectorize/indexes/${indexName}/insert`,
        options,
      ) as Core.APIPromise<{ result: VectorizeIndexInsertResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Finds vectors closest to a given vector in an index.
   */
  query(
    accountIdentifier: string,
    indexName: string,
    body: VectorizeIndexQueryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VectorizeIndexQueryResponse | null> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/vectorize/indexes/${indexName}/query`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: VectorizeIndexQueryResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Upserts vectors into the specified index, creating them if they do not exist and
   * returns the count of values and ids successfully inserted.
   */
  upsert(
    accountIdentifier: string,
    indexName: string,
    body: VectorizeIndexUpsertParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<VectorizeIndexUpsertResponse | null> {
    return (
      this._client.post(
        `/accounts/${accountIdentifier}/vectorize/indexes/${indexName}/upsert`,
        options,
      ) as Core.APIPromise<{ result: VectorizeIndexUpsertResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface VectorizeIndexCreateResponse {
  config?: VectorizeIndexCreateResponse.Config;

  /**
   * Specifies the timestamp the resource was created as an ISO8601 string.
   */
  created_on?: unknown;

  /**
   * Specifies the description of the index.
   */
  description?: string;

  /**
   * Specifies the timestamp the resource was modified as an ISO8601 string.
   */
  modified_on?: unknown;

  name?: string;
}

export namespace VectorizeIndexCreateResponse {
  export interface Config {
    /**
     * Specifies the number of dimensions for the index
     */
    dimensions: number;

    /**
     * Specifies the type of metric to use calculating distance.
     */
    metric: 'cosine' | 'euclidean' | 'dot-product';
  }
}

export interface VectorizeIndexRetrieveResponse {
  config?: VectorizeIndexRetrieveResponse.Config;

  /**
   * Specifies the timestamp the resource was created as an ISO8601 string.
   */
  created_on?: unknown;

  /**
   * Specifies the description of the index.
   */
  description?: string;

  /**
   * Specifies the timestamp the resource was modified as an ISO8601 string.
   */
  modified_on?: unknown;

  name?: string;
}

export namespace VectorizeIndexRetrieveResponse {
  export interface Config {
    /**
     * Specifies the number of dimensions for the index
     */
    dimensions: number;

    /**
     * Specifies the type of metric to use calculating distance.
     */
    metric: 'cosine' | 'euclidean' | 'dot-product';
  }
}

export interface VectorizeIndexUpdateResponse {
  config?: VectorizeIndexUpdateResponse.Config;

  /**
   * Specifies the timestamp the resource was created as an ISO8601 string.
   */
  created_on?: unknown;

  /**
   * Specifies the description of the index.
   */
  description?: string;

  /**
   * Specifies the timestamp the resource was modified as an ISO8601 string.
   */
  modified_on?: unknown;

  name?: string;
}

export namespace VectorizeIndexUpdateResponse {
  export interface Config {
    /**
     * Specifies the number of dimensions for the index
     */
    dimensions: number;

    /**
     * Specifies the type of metric to use calculating distance.
     */
    metric: 'cosine' | 'euclidean' | 'dot-product';
  }
}

export type VectorizeIndexDeleteResponse = unknown | string;

export interface VectorizeIndexDeleteByIDsResponse {
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

/**
 * Array of vectors with matching ids.
 */
export type VectorizeIndexGetByIDsResponse = unknown;

export interface VectorizeIndexInsertResponse {
  /**
   * Specifies the count of the vectors successfully inserted.
   */
  count?: number;

  /**
   * Array of vector identifiers of the vectors successfully inserted.
   */
  ids?: Array<string>;
}

export interface VectorizeIndexQueryResponse {
  /**
   * Specifies the count of vectors returned by the search
   */
  count?: number;

  /**
   * Array of vectors matched by the search
   */
  matches?: Array<VectorizeIndexQueryResponse.Match>;
}

export namespace VectorizeIndexQueryResponse {
  export interface Match {
    /**
     * Identifier
     */
    id?: string;

    metadata?: unknown;

    /**
     * The score of the vector according to the index's distance metric
     */
    score?: number;

    values?: Array<number>;
  }
}

export interface VectorizeIndexUpsertResponse {
  /**
   * Specifies the count of the vectors successfully inserted.
   */
  count?: number;

  /**
   * Array of vector identifiers of the vectors successfully inserted.
   */
  ids?: Array<string>;
}

export interface VectorizeIndexCreateParams {
  /**
   * Specifies the type of configuration to use for the index.
   */
  config:
    | VectorizeIndexCreateParams.VectorizeIndexPresetConfiguration
    | VectorizeIndexCreateParams.VectorizeIndexDimensionConfiguration;

  name: string;

  /**
   * Specifies the description of the index.
   */
  description?: string;
}

export namespace VectorizeIndexCreateParams {
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

  export interface VectorizeIndexDimensionConfiguration {
    /**
     * Specifies the number of dimensions for the index
     */
    dimensions: number;

    /**
     * Specifies the type of metric to use calculating distance.
     */
    metric: 'cosine' | 'euclidean' | 'dot-product';
  }
}

export interface VectorizeIndexUpdateParams {
  /**
   * Specifies the description of the index.
   */
  description: string;
}

export interface VectorizeIndexDeleteByIDsParams {
  /**
   * A list of vector identifiers to delete from the index indicated by the path.
   */
  ids?: Array<string>;
}

export interface VectorizeIndexGetByIDsParams {
  /**
   * A list of vector identifiers to retrieve from the index indicated by the path.
   */
  ids?: Array<string>;
}

export interface VectorizeIndexInsertParams {}

export interface VectorizeIndexQueryParams {
  /**
   * Whether to return the metadata associated with the closest vectors.
   */
  returnMetadata?: boolean;

  /**
   * Whether to return the values associated with the closest vectors.
   */
  returnValues?: boolean;

  /**
   * The number of nearest neighbors to find.
   */
  topK?: number;

  /**
   * The search vector that will be used to find the nearest neighbors.
   */
  vector?: Array<number>;
}

export interface VectorizeIndexUpsertParams {}

export namespace VectorizeIndexes {
  export import VectorizeIndexCreateResponse = VectorizeIndexesAPI.VectorizeIndexCreateResponse;
  export import VectorizeIndexRetrieveResponse = VectorizeIndexesAPI.VectorizeIndexRetrieveResponse;
  export import VectorizeIndexUpdateResponse = VectorizeIndexesAPI.VectorizeIndexUpdateResponse;
  export import VectorizeIndexDeleteResponse = VectorizeIndexesAPI.VectorizeIndexDeleteResponse;
  export import VectorizeIndexDeleteByIDsResponse = VectorizeIndexesAPI.VectorizeIndexDeleteByIDsResponse;
  export import VectorizeIndexGetByIDsResponse = VectorizeIndexesAPI.VectorizeIndexGetByIDsResponse;
  export import VectorizeIndexInsertResponse = VectorizeIndexesAPI.VectorizeIndexInsertResponse;
  export import VectorizeIndexQueryResponse = VectorizeIndexesAPI.VectorizeIndexQueryResponse;
  export import VectorizeIndexUpsertResponse = VectorizeIndexesAPI.VectorizeIndexUpsertResponse;
  export import VectorizeIndexCreateParams = VectorizeIndexesAPI.VectorizeIndexCreateParams;
  export import VectorizeIndexUpdateParams = VectorizeIndexesAPI.VectorizeIndexUpdateParams;
  export import VectorizeIndexDeleteByIDsParams = VectorizeIndexesAPI.VectorizeIndexDeleteByIDsParams;
  export import VectorizeIndexGetByIDsParams = VectorizeIndexesAPI.VectorizeIndexGetByIDsParams;
  export import VectorizeIndexInsertParams = VectorizeIndexesAPI.VectorizeIndexInsertParams;
  export import VectorizeIndexQueryParams = VectorizeIndexesAPI.VectorizeIndexQueryParams;
  export import VectorizeIndexUpsertParams = VectorizeIndexesAPI.VectorizeIndexUpsertParams;
}
