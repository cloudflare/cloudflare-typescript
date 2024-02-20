// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as IndexesAPI from 'cloudflare/resources/vectorize/indexes';

export class Indexes extends APIResource {
  /**
   * Creates and returns a new Vectorize Index.
   */
  create(
    accountIdentifier: string,
    body: IndexCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndexCreateResponse | null> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/vectorize/indexes`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IndexCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a list of Vectorize Indexes
   */
  list(accountIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<IndexListResponse> {
    return (
      this._client.get(`/accounts/${accountIdentifier}/vectorize/indexes`, options) as Core.APIPromise<{
        result: IndexListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes the specified Vectorize Index.
   */
  delete(
    accountIdentifier: string,
    indexName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndexDeleteResponse | null> {
    return (
      this._client.delete(
        `/accounts/${accountIdentifier}/vectorize/indexes/${indexName}`,
        options,
      ) as Core.APIPromise<{ result: IndexDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the specified Vectorize Index.
   */
  get(
    accountIdentifier: string,
    indexName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndexGetResponse | null> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/vectorize/indexes/${indexName}`,
        options,
      ) as Core.APIPromise<{ result: IndexGetResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Inserts vectors into the specified index and returns the count of the vectors
   * successfully inserted.
   */
  insert(
    accountIdentifier: string,
    indexName: string,
    body: IndexInsertParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndexInsertResponse | null> {
    return (
      this._client.post(
        `/accounts/${accountIdentifier}/vectorize/indexes/${indexName}/insert`,
        options,
      ) as Core.APIPromise<{ result: IndexInsertResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Finds vectors closest to a given vector in an index.
   */
  query(
    accountIdentifier: string,
    indexName: string,
    body: IndexQueryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndexQueryResponse | null> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/vectorize/indexes/${indexName}/query`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IndexQueryResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates and returns the specified Vectorize Index.
   */
  replace(
    accountIdentifier: string,
    indexName: string,
    body: IndexReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndexReplaceResponse | null> {
    return (
      this._client.put(`/accounts/${accountIdentifier}/vectorize/indexes/${indexName}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: IndexReplaceResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Upserts vectors into the specified index, creating them if they do not exist and
   * returns the count of values and ids successfully inserted.
   */
  upsert(
    accountIdentifier: string,
    indexName: string,
    body: IndexUpsertParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndexUpsertResponse | null> {
    return (
      this._client.post(
        `/accounts/${accountIdentifier}/vectorize/indexes/${indexName}/upsert`,
        options,
      ) as Core.APIPromise<{ result: IndexUpsertResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface IndexCreateResponse {
  config?: IndexCreateResponse.Config;

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

export namespace IndexCreateResponse {
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

export type IndexListResponse = Array<IndexListResponse.IndexListResponseItem>;

export namespace IndexListResponse {
  export interface IndexListResponseItem {
    config?: IndexListResponseItem.Config;

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

  export namespace IndexListResponseItem {
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
}

export type IndexDeleteResponse = unknown | string;

export interface IndexGetResponse {
  config?: IndexGetResponse.Config;

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

export namespace IndexGetResponse {
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

export interface IndexInsertResponse {
  /**
   * Specifies the count of the vectors successfully inserted.
   */
  count?: number;

  /**
   * Array of vector identifiers of the vectors successfully inserted.
   */
  ids?: Array<string>;
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

export interface IndexReplaceResponse {
  config?: IndexReplaceResponse.Config;

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

export namespace IndexReplaceResponse {
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

export interface IndexUpsertResponse {
  /**
   * Specifies the count of the vectors successfully inserted.
   */
  count?: number;

  /**
   * Array of vector identifiers of the vectors successfully inserted.
   */
  ids?: Array<string>;
}

export interface IndexCreateParams {
  /**
   * Specifies the type of configuration to use for the index.
   */
  config:
    | IndexCreateParams.VectorizeIndexPresetConfiguration
    | IndexCreateParams.VectorizeIndexDimensionConfiguration;

  name: string;

  /**
   * Specifies the description of the index.
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

export interface IndexInsertParams {}

export interface IndexQueryParams {
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

export interface IndexReplaceParams {
  /**
   * Specifies the description of the index.
   */
  description: string;
}

export interface IndexUpsertParams {}

export namespace Indexes {
  export import IndexCreateResponse = IndexesAPI.IndexCreateResponse;
  export import IndexListResponse = IndexesAPI.IndexListResponse;
  export import IndexDeleteResponse = IndexesAPI.IndexDeleteResponse;
  export import IndexGetResponse = IndexesAPI.IndexGetResponse;
  export import IndexInsertResponse = IndexesAPI.IndexInsertResponse;
  export import IndexQueryResponse = IndexesAPI.IndexQueryResponse;
  export import IndexReplaceResponse = IndexesAPI.IndexReplaceResponse;
  export import IndexUpsertResponse = IndexesAPI.IndexUpsertResponse;
  export import IndexCreateParams = IndexesAPI.IndexCreateParams;
  export import IndexInsertParams = IndexesAPI.IndexInsertParams;
  export import IndexQueryParams = IndexesAPI.IndexQueryParams;
  export import IndexReplaceParams = IndexesAPI.IndexReplaceParams;
  export import IndexUpsertParams = IndexesAPI.IndexUpsertParams;
}
