// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ConfigsAPI from 'cloudflare/resources/logs/controls/cmb/configs';

export class Cmb extends APIResource {
  configs: ConfigsAPI.Configs = new ConfigsAPI.Configs(this._client);
}

export namespace Cmb {
  export import Configs = ConfigsAPI.Configs;
  export import ConfigDeleteResponse = ConfigsAPI.ConfigDeleteResponse;
  export import ConfigGetAccountsAccountIdentifierLogsControlCmbConfigResponse = ConfigsAPI.ConfigGetAccountsAccountIdentifierLogsControlCmbConfigResponse;
  export import ConfigPutAccountsAccountIdentifierLogsControlCmbConfigResponse = ConfigsAPI.ConfigPutAccountsAccountIdentifierLogsControlCmbConfigResponse;
  export import ConfigPutAccountsAccountIdentifierLogsControlCmbConfigParams = ConfigsAPI.ConfigPutAccountsAccountIdentifierLogsControlCmbConfigParams;
}
