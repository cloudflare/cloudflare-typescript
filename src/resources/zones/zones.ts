// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ActivationCheckAPI from './activation-check';
import { ActivationCheck, BaseActivationCheck } from './activation-check';
import * as CustomNameserversAPI from './custom-nameservers';
import { BaseCustomNameservers, CustomNameservers } from './custom-nameservers';
import * as EnvironmentsAPI from './environments';
import { BaseEnvironments, Environments } from './environments';
import * as HoldsAPI from './holds';
import { BaseHolds, Holds } from './holds';
import * as PlansAPI from './plans';
import { BasePlans, Plans } from './plans';
import * as RatePlansAPI from './rate-plans';
import { BaseRatePlans, RatePlans } from './rate-plans';
import * as SettingsAPI from './settings';
import { BaseSettings, OriginMaxHTTPVersion, Settings } from './settings';
import * as SubscriptionsAPI from './subscriptions';
import { BaseSubscriptions, Subscriptions } from './subscriptions';

export class BaseZones extends APIResource {
  static override readonly _key: readonly ['zones'] = Object.freeze(['zones'] as const);
}
export class Zones extends BaseZones {
  activationCheck: ActivationCheckAPI.ActivationCheck = new ActivationCheckAPI.ActivationCheck(this._client);
  settings: SettingsAPI.Settings = new SettingsAPI.Settings(this._client);
  environments: EnvironmentsAPI.Environments = new EnvironmentsAPI.Environments(this._client);
  customNameservers: CustomNameserversAPI.CustomNameservers = new CustomNameserversAPI.CustomNameservers(
    this._client,
  );
  holds: HoldsAPI.Holds = new HoldsAPI.Holds(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
  plans: PlansAPI.Plans = new PlansAPI.Plans(this._client);
  ratePlans: RatePlansAPI.RatePlans = new RatePlansAPI.RatePlans(this._client);
}

Zones.ActivationCheck = ActivationCheck;
Zones.BaseActivationCheck = BaseActivationCheck;
Zones.Settings = Settings;
Zones.BaseSettings = BaseSettings;
Zones.Environments = Environments;
Zones.BaseEnvironments = BaseEnvironments;
Zones.CustomNameservers = CustomNameservers;
Zones.BaseCustomNameservers = BaseCustomNameservers;
Zones.Holds = Holds;
Zones.BaseHolds = BaseHolds;
Zones.Subscriptions = Subscriptions;
Zones.BaseSubscriptions = BaseSubscriptions;
Zones.Plans = Plans;
Zones.BasePlans = BasePlans;
Zones.RatePlans = RatePlans;
Zones.BaseRatePlans = BaseRatePlans;

export declare namespace Zones {
  export { ActivationCheck as ActivationCheck, BaseActivationCheck as BaseActivationCheck };

  export {
    Settings as Settings,
    BaseSettings as BaseSettings,
    type OriginMaxHTTPVersion as OriginMaxHTTPVersion,
  };

  export { Environments as Environments, BaseEnvironments as BaseEnvironments };

  export { CustomNameservers as CustomNameservers, BaseCustomNameservers as BaseCustomNameservers };

  export { Holds as Holds, BaseHolds as BaseHolds };

  export { Subscriptions as Subscriptions, BaseSubscriptions as BaseSubscriptions };

  export { Plans as Plans, BasePlans as BasePlans };

  export { RatePlans as RatePlans, BaseRatePlans as BaseRatePlans };
}
