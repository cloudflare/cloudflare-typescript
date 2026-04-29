// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as StatusAPI from './status';
import { BaseStatus, Status } from './status';

export class BaseOutgoing extends APIResource {
  static override readonly _key: readonly ['dns', 'zoneTransfers', 'outgoing'] = Object.freeze([
    'dns',
    'zoneTransfers',
    'outgoing',
  ] as const);
}
export class Outgoing extends BaseOutgoing {
  status: StatusAPI.Status = new StatusAPI.Status(this._client);
}

Outgoing.Status = Status;
Outgoing.BaseStatus = BaseStatus;

export declare namespace Outgoing {
  export { Status as Status, BaseStatus as BaseStatus };
}
