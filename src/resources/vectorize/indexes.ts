// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as IndexesAPI from 'cloudflare/resources/vectorize/indexes';

export class Indexes extends APIResource {}

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
     * Identifier
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

export namespace Indexes {
  export import CreateIndex = IndexesAPI.CreateIndex;
  export import IndexDeleteVectorsByID = IndexesAPI.IndexDeleteVectorsByID;
  export import IndexDimensionConfiguration = IndexesAPI.IndexDimensionConfiguration;
  export import IndexInsert = IndexesAPI.IndexInsert;
  export import IndexQuery = IndexesAPI.IndexQuery;
  export import IndexUpsert = IndexesAPI.IndexUpsert;
}
