// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';

export class BaseEntries extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dlp', 'datasets', 'versions', 'entries'] =
    Object.freeze(['zeroTrust', 'dlp', 'datasets', 'versions', 'entries'] as const);
}
export class Entries extends BaseEntries {}
