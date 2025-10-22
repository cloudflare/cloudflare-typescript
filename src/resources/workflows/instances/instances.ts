// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as EventsAPI from './events';
import { Events } from './events';
import * as StatusAPI from './status';
import { Status } from './status';

export class Instances extends APIResource {
  status: StatusAPI.Status = new StatusAPI.Status(this._client);
  events: EventsAPI.Events = new EventsAPI.Events(this._client);
}

Instances.Status = Status;
Instances.Events = Events;

export declare namespace Instances {
  export { Status as Status };

  export { Events as Events };
}
