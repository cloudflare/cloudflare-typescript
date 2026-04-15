// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as HistoryAPI from './history';
import {
  BaseHistory,
  BillingHistoriesV4PagePaginationArray,
  BillingHistory,
  History,
  HistoryListParams,
} from './history';
import * as ProfileAPI from './profile';
import { BaseProfile, Profile, ProfileGetResponse } from './profile';

export class BaseBilling extends APIResource {
  static override readonly _key: readonly ['user', 'billing'] = Object.freeze(['user', 'billing'] as const);
}
export class Billing extends BaseBilling {
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
  profile: ProfileAPI.Profile = new ProfileAPI.Profile(this._client);
}

Billing.History = History;
Billing.BaseHistory = BaseHistory;
Billing.Profile = Profile;
Billing.BaseProfile = BaseProfile;

export declare namespace Billing {
  export {
    History as History,
    BaseHistory as BaseHistory,
    type BillingHistory as BillingHistory,
    type BillingHistoriesV4PagePaginationArray as BillingHistoriesV4PagePaginationArray,
    type HistoryListParams as HistoryListParams,
  };

  export { Profile as Profile, BaseProfile as BaseProfile, type ProfileGetResponse as ProfileGetResponse };
}
