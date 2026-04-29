// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as HistoryAPI from './history/history';
import { History } from './history/history';

export class Deployments extends APIResource {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Deployments.History = History;

export declare namespace Deployments {
  export { History as History };
}
