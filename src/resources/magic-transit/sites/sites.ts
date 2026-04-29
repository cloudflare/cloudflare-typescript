// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ACLsAPI from './acls';
import { ACLs, BaseACLs } from './acls';
import * as LANsAPI from './lans';
import { BaseLANs, LANs } from './lans';
import * as WANsAPI from './wans';
import { BaseWANs, WANs } from './wans';

export class BaseSites extends APIResource {
  static override readonly _key: readonly ['magicTransit', 'sites'] = Object.freeze([
    'magicTransit',
    'sites',
  ] as const);
}
export class Sites extends BaseSites {
  acls: ACLsAPI.ACLs = new ACLsAPI.ACLs(this._client);
  lans: LANsAPI.LANs = new LANsAPI.LANs(this._client);
  wans: WANsAPI.WANs = new WANsAPI.WANs(this._client);
}

Sites.ACLs = ACLs;
Sites.BaseACLs = BaseACLs;
Sites.LANs = LANs;
Sites.BaseLANs = BaseLANs;
Sites.WANs = WANs;
Sites.BaseWANs = BaseWANs;

export declare namespace Sites {
  export { ACLs as ACLs, BaseACLs as BaseACLs };

  export { LANs as LANs, BaseLANs as BaseLANs };

  export { WANs as WANs, BaseWANs as BaseWANs };
}
