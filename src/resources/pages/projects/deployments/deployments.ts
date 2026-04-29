// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as HistoryAPI from './history/history';
import { BaseHistory, History } from './history/history';

export class BaseDeployments extends APIResource {
  static override readonly _key: readonly ['pages', 'projects', 'deployments'] = Object.freeze([
    'pages',
    'projects',
    'deployments',
  ] as const);
}
export class Deployments extends BaseDeployments {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
}

Deployments.History = History;
Deployments.BaseHistory = BaseHistory;

export declare namespace Deployments {
  export { History as History, BaseHistory as BaseHistory };
}
