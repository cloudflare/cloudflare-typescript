// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as PatternsAPI from './patterns';

export class Patterns extends APIResource {
  /**
   * Validates whether this pattern is a valid regular expression. Rejects it if the
   * regular expression is too complex or can match an unbounded-length string. The
   * regex will be rejected if it uses `*` or `+`. Bound the maximum number of
   * characters that can be matched using a range, e.g. `{1,100}`.
   */
  validate(
    params: PatternValidateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PatternValidateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(`/accounts/${account_id}/dlp/patterns/validate`, { body, ...options });
  }
}

export interface PatternValidateResponse {
  valid: boolean;
}

export interface PatternValidateParams {
  /**
   * Path param: Account ID
   */
  account_id: string;

  /**
   * Body param:
   */
  regex: string;
}

export namespace Patterns {
  export import PatternValidateResponse = PatternsAPI.PatternValidateResponse;
  export import PatternValidateParams = PatternsAPI.PatternValidateParams;
}
