// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ActivationCheckAPI from './activation-check';
import { ActivationCheck } from './activation-check';
import * as CustomNameserversAPI from './custom-nameservers';
import { CustomNameservers } from './custom-nameservers';
import * as EnvironmentsAPI from './environments';
import { Environments } from './environments';
import * as HoldsAPI from './holds';
import { Holds } from './holds';
import * as PlansAPI from './plans';
import { Plans } from './plans';
import * as RatePlansAPI from './rate-plans';
import { RatePlans } from './rate-plans';
import * as SettingsAPI from './settings';
import { OriginMaxHTTPVersion, Settings } from './settings';
import * as SubscriptionsAPI from './subscriptions';
import { Subscriptions } from './subscriptions';

export class Zones extends APIResource {
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
Zones.Settings = Settings;
Zones.Environments = Environments;
Zones.CustomNameservers = CustomNameservers;
Zones.Holds = Holds;
Zones.Subscriptions = Subscriptions;
Zones.Plans = Plans;
Zones.RatePlans = RatePlans;

export declare namespace Zones {
  export { ActivationCheck as ActivationCheck };

  export { Settings as Settings, type OriginMaxHTTPVersion as OriginMaxHTTPVersion };

  export { Environments as Environments };

  export { CustomNameservers as CustomNameservers };

  export { Holds as Holds };

  export { Subscriptions as Subscriptions };

  export { Plans as Plans };

  export { RatePlans as RatePlans };
}
