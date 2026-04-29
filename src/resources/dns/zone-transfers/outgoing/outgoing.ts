// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as StatusAPI from './status';
import { Status } from './status';

export class Outgoing extends APIResource {
  status: StatusAPI.Status = new StatusAPI.Status(this._client);
}

Outgoing.Status = Status;

export declare namespace Outgoing {
  export { Status as Status };
}
