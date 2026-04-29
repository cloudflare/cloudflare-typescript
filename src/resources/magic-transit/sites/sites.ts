// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ACLsAPI from './acls';
import { ACLs } from './acls';
import * as LANsAPI from './lans';
import { LANs } from './lans';
import * as WANsAPI from './wans';
import { WANs } from './wans';

export class Sites extends APIResource {
  acls: ACLsAPI.ACLs = new ACLsAPI.ACLs(this._client);
  lans: LANsAPI.LANs = new LANsAPI.LANs(this._client);
  wans: WANsAPI.WANs = new WANsAPI.WANs(this._client);
}

Sites.ACLs = ACLs;
Sites.LANs = LANs;
Sites.WANs = WANs;

export declare namespace Sites {
  export { ACLs as ACLs };

  export { LANs as LANs };

  export { WANs as WANs };
}
