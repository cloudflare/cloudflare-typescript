// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DOHAPI from './doh';
import { BaseDOH, DOH } from './doh';

export class BaseOrganizations extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'organizations'] = Object.freeze([
    'zeroTrust',
    'organizations',
  ] as const);
}
export class Organizations extends BaseOrganizations {
  doh: DOHAPI.DOH = new DOHAPI.DOH(this._client);
}

Organizations.DOH = DOH;
Organizations.BaseDOH = BaseDOH;

export declare namespace Organizations {
  export { DOH as DOH, BaseDOH as BaseDOH };
}
