// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ValidatorsAPI from './validators';
import { APIPromise } from '../../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseProximityWords extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dlp', 'validators', 'proximityWords'] =
    Object.freeze(['zeroTrust', 'dlp', 'validators', 'proximityWords'] as const);

  /**
   * Creates a reusable list of weighted words that detection entries can attach to
   * in order to refine their matches. An account may own at most 100 validators
   * across all kinds.
   *
   * @example
   * ```ts
   * const proximityWordValidator =
   *   await client.zeroTrust.dlp.validators.proximityWords.create(
   *     {
   *       account_id: 'account_id',
   *       name: 'HIPAA context words',
   *       words: [
   *         {
   *           weight: 'strong',
   *           word: 'social security number',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  create(params: ProximityWordCreateParams, options?: RequestOptions): APIPromise<ProximityWordValidator> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/dlp/validators/proximity_words`, {
        body,
        ...options,
      }) as APIPromise<{ result: ProximityWordValidator }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Replaces the name and word list of a `proximity_words` validator. Attachments to
   * detection entries are owned from the entry side and are not affected.
   *
   * @example
   * ```ts
   * const proximityWordValidator =
   *   await client.zeroTrust.dlp.validators.proximityWords.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: 'account_id',
   *       name: 'HIPAA context words',
   *       words: [
   *         {
   *           weight: 'strong',
   *           word: 'social security number',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  update(
    validatorID: string,
    params: ProximityWordUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ProximityWordValidator> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/dlp/validators/proximity_words/${validatorID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: ProximityWordValidator }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists the `proximity_words` validators configured for the account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const proximityWordValidator of client.zeroTrust.dlp.validators.proximityWords.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: ProximityWordListParams,
    options?: RequestOptions,
  ): PagePromise<ProximityWordValidatorsSinglePage, ProximityWordValidator> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/dlp/validators/proximity_words`,
      SinglePage<ProximityWordValidator>,
      options,
    );
  }

  /**
   * Deletes a `proximity_words` validator. Fails with `409` while any detection
   * entry is still attached to it; detach it from those entries first.
   *
   * @example
   * ```ts
   * const proximityWord =
   *   await client.zeroTrust.dlp.validators.proximityWords.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  delete(
    validatorID: string,
    params: ProximityWordDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ProximityWordDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/dlp/validators/proximity_words/${validatorID}`,
        options,
      ) as APIPromise<{ result: ProximityWordDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a `proximity_words` validator by ID.
   *
   * @example
   * ```ts
   * const proximityWordValidator =
   *   await client.zeroTrust.dlp.validators.proximityWords.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  get(
    validatorID: string,
    params: ProximityWordGetParams,
    options?: RequestOptions,
  ): APIPromise<ProximityWordValidator> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/dlp/validators/proximity_words/${validatorID}`,
        options,
      ) as APIPromise<{ result: ProximityWordValidator }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class ProximityWords extends BaseProximityWords {}

export type ProximityWordValidatorsSinglePage = SinglePage<ProximityWordValidator>;

/**
 * A reusable list of weighted words. Attaching it to a detection entry raises the
 * confidence of that entry's matches when one of the words appears nearby, and
 * lowers it when none do.
 */
export interface ProximityWordValidator {
  id: string;

  created_at: string;

  /**
   * A name for this validator, at most 50 characters.
   */
  name: string;

  /**
   * What currently uses a validator. Deleting a validator that is still in use
   * returns `409`, so check this first.
   *
   * Read-only. A validator is attached or detached by updating the detection entry
   * that uses it, not by writing this back.
   */
  referenced_by: ValidatorsAPI.References;

  updated_at: string;

  /**
   * The words that raise confidence when found near a match.
   */
  words: Array<Word>;
}

export type ProximityWordValidatorArray = Array<ProximityWordValidator>;

/**
 * How much a word contributes to a match's confidence when it is found nearby.
 *
 * Separate from a profile's high/medium/low confidence threshold: this describes
 * how telling the word is, not how confident the resulting match is.
 */
export type Weight = 'strong' | 'moderate' | 'weak';

/**
 * How much a word contributes to a match's confidence when it is found nearby.
 *
 * Separate from a profile's high/medium/low confidence threshold: this describes
 * how telling the word is, not how confident the resulting match is.
 */
export type WeightParam = 'strong' | 'moderate' | 'weak';

/**
 * A word that raises a match's confidence when it appears near the match.
 */
export interface Word {
  /**
   * How much a word contributes to a match's confidence when it is found nearby.
   *
   * Separate from a profile's high/medium/low confidence threshold: this describes
   * how telling the word is, not how confident the resulting match is.
   */
  weight: Weight;

  /**
   * The word or phrase to look for. Must contain 1–128 characters and is matched
   * case-insensitively.
   */
  word: string;
}

/**
 * A word that raises a match's confidence when it appears near the match.
 */
export interface WordParam {
  /**
   * How much a word contributes to a match's confidence when it is found nearby.
   *
   * Separate from a profile's high/medium/low confidence threshold: this describes
   * how telling the word is, not how confident the resulting match is.
   */
  weight: WeightParam;

  /**
   * The word or phrase to look for. Must contain 1–128 characters and is matched
   * case-insensitively.
   */
  word: string;
}

export type ProximityWordDeleteResponse = unknown;

export interface ProximityWordCreateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param: A name for this validator, at most 50 characters.
   */
  name: string;

  /**
   * Body param: The words that raise confidence when found near a match, at most 100
   * per validator. Matching ignores case, so the list may not contain the same word
   * twice with different capitalisation. Words are stored as sent.
   *
   * For example, a validator for medical record numbers might use
   * `[{"word": "patient", "weight": "strong"}, {"word": "diagnosis", "weight": "moderate"}, {"word": "mrn", "weight": "weak"}]`.
   */
  words: Array<WordParam>;
}

export interface ProximityWordUpdateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param: A name for this validator, at most 50 characters.
   */
  name: string;

  /**
   * Body param: The words that raise confidence when found near a match, at most 100
   * per validator. Matching ignores case, so the list may not contain the same word
   * twice with different capitalisation. Words are stored as sent.
   *
   * For example, a validator for medical record numbers might use
   * `[{"word": "patient", "weight": "strong"}, {"word": "diagnosis", "weight": "moderate"}, {"word": "mrn", "weight": "weak"}]`.
   */
  words: Array<WordParam>;
}

export interface ProximityWordListParams {
  account_id: string;
}

export interface ProximityWordDeleteParams {
  account_id: string;
}

export interface ProximityWordGetParams {
  account_id: string;
}

export declare namespace ProximityWords {
  export {
    type ProximityWordValidator as ProximityWordValidator,
    type ProximityWordValidatorArray as ProximityWordValidatorArray,
    type Weight as Weight,
    type Word as Word,
    type ProximityWordDeleteResponse as ProximityWordDeleteResponse,
    type ProximityWordValidatorsSinglePage as ProximityWordValidatorsSinglePage,
    type ProximityWordCreateParams as ProximityWordCreateParams,
    type ProximityWordUpdateParams as ProximityWordUpdateParams,
    type ProximityWordListParams as ProximityWordListParams,
    type ProximityWordDeleteParams as ProximityWordDeleteParams,
    type ProximityWordGetParams as ProximityWordGetParams,
  };
}
