// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface ErrorData {
  code?: number;

  documentation_url?: string;

  message?: string;

  source?: ErrorData.Source;
}

export namespace ErrorData {
  export interface Source {
    pointer?: string;
  }
}

/**
 * Identifier.
 */
export type Identifier = string;

/**
 * Identifier.
 */
export type IdentifierParam = string;

export interface PaginationInfo {
  /**
   * Total number of results for the requested service
   */
  count?: number;

  /**
   * Current page within paginated list of results
   */
  page?: number;

  /**
   * Number of results per page of results
   */
  per_page?: number;

  /**
   * Total results available without any search parameters
   */
  total_count?: number;
}
