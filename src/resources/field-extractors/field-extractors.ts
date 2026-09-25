// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseFieldExtractors extends APIResource {
  static override readonly _key: readonly ['fieldExtractors'] = Object.freeze(['fieldExtractors'] as const);

  /**
   * Replaces all custom extraction rules for an extractor type. Omitted rules are
   * deleted.
   */
  update(
    extractor: string,
    params: FieldExtractorUpdateParams,
    options?: RequestOptions,
  ): APIPromise<FieldExtractorUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/field_extractors/${extractor}`, {
        body,
        ...options,
      }) as APIPromise<{ result: FieldExtractorUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes all custom extraction rules for an extractor type.
   */
  delete(
    extractor: string,
    params: FieldExtractorDeleteParams,
    options?: RequestOptions,
  ): APIPromise<FieldExtractorDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/field_extractors/${extractor}`,
        options,
      ) as APIPromise<{ result: FieldExtractorDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the custom extraction rules configured for a given extractor type.
   */
  get(
    extractor: string,
    params: FieldExtractorGetParams,
    options?: RequestOptions,
  ): APIPromise<FieldExtractorGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/field_extractors/${extractor}`, options) as APIPromise<{
        result: FieldExtractorGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class FieldExtractors extends BaseFieldExtractors {}

export interface FieldExtractorUpdateResponse {
  /**
   * Extractor type.
   */
  extractor: string;

  rules: Array<FieldExtractorUpdateResponse.Rule>;
}

export namespace FieldExtractorUpdateResponse {
  export interface Rule {
    fields: Array<Rule.Field>;

    /**
     * Stable rule identifier.
     */
    ref: string;

    /**
     * Human-readable rule description.
     */
    description?: string;
  }

  export namespace Rule {
    export interface Field {
      /**
       * Wirefilter value expression.
       */
      expression: string;

      /**
       * Field name.
       */
      name: string;
    }
  }
}

/**
 * Result is null.
 */
export type FieldExtractorDeleteResponse = unknown;

export interface FieldExtractorGetResponse {
  /**
   * Extractor type.
   */
  extractor: string;

  rules: Array<FieldExtractorGetResponse.Rule>;
}

export namespace FieldExtractorGetResponse {
  export interface Rule {
    fields: Array<Rule.Field>;

    /**
     * Stable rule identifier.
     */
    ref: string;

    /**
     * Human-readable rule description.
     */
    description?: string;
  }

  export namespace Rule {
    export interface Field {
      /**
       * Wirefilter value expression.
       */
      expression: string;

      /**
       * Field name.
       */
      name: string;
    }
  }
}

export interface FieldExtractorUpdateParams {
  /**
   * Path param: Cloudflare account ID.
   */
  account_id: string;

  /**
   * Body param
   */
  rules: Array<FieldExtractorUpdateParams.Rule>;
}

export namespace FieldExtractorUpdateParams {
  export interface Rule {
    fields: Array<Rule.Field>;

    ref: string;

    description?: string;
  }

  export namespace Rule {
    export interface Field {
      expression: string;

      name: string;
    }
  }
}

export interface FieldExtractorDeleteParams {
  /**
   * Cloudflare account ID.
   */
  account_id: string;
}

export interface FieldExtractorGetParams {
  /**
   * Cloudflare account ID.
   */
  account_id: string;
}

export declare namespace FieldExtractors {
  export {
    type FieldExtractorUpdateResponse as FieldExtractorUpdateResponse,
    type FieldExtractorDeleteResponse as FieldExtractorDeleteResponse,
    type FieldExtractorGetResponse as FieldExtractorGetResponse,
    type FieldExtractorUpdateParams as FieldExtractorUpdateParams,
    type FieldExtractorDeleteParams as FieldExtractorDeleteParams,
    type FieldExtractorGetParams as FieldExtractorGetParams,
  };
}
