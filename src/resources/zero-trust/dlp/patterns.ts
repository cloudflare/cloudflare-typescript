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
    return (
      this._client.post(`/accounts/${account_id}/dlp/patterns/validate`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: PatternValidateResponse }>
    )._thenUnwrap((obj) => obj.result);
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

  /**
   * Body param: Maximum number of bytes that the regular expression can match.
   *
   * If this is `null` then there is no limit on the length. Patterns can use `*` and
   * `+`. Otherwise repeats should use a range `{m,n}` to restrict patterns to the
   * length. If this field is missing, then a default length limit is used.
   *
   * Note that the length is specified in bytes. Since regular expressions use UTF-8
   * the pattern `.` can match up to 4 bytes. Hence `.{1,256}` has a maximum length
   * of 1024 bytes.
   */
  max_match_bytes?: number | null;
}

export namespace Patterns {
  export import PatternValidateResponse = PatternsAPI.PatternValidateResponse;
  export import PatternValidateParams = PatternsAPI.PatternValidateParams;
}
