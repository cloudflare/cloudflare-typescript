// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as UpdatesAPI from './updates';
import { BaseUpdates, Updates } from './updates';

export class BaseSCIM extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'logs', 'scim'] = Object.freeze([
    'zeroTrust',
    'access',
    'logs',
    'scim',
  ] as const);
}
export class SCIM extends BaseSCIM {
  updates: UpdatesAPI.Updates = new UpdatesAPI.Updates(this._client);
}

SCIM.Updates = Updates;
SCIM.BaseUpdates = BaseUpdates;

export declare namespace SCIM {
  export { Updates as Updates, BaseUpdates as BaseUpdates };
}
