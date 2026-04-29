// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';

export class BaseEntries extends APIResource {
  static override readonly _key: readonly [
    'web3',
    'hostnames',
    'ipfsUniversalPaths',
    'contentLists',
    'entries',
  ] = Object.freeze(['web3', 'hostnames', 'ipfsUniversalPaths', 'contentLists', 'entries'] as const);
}
export class Entries extends BaseEntries {}
