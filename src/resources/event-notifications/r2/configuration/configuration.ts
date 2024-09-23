// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as QueuesAPI from './queues';

export class Configuration extends APIResource {
  queues: QueuesAPI.Queues = new QueuesAPI.Queues(this._client);
}

export namespace Configuration {
  export import Queues = QueuesAPI.Queues;
}
