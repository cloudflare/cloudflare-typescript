// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as RulesAPI from './rules';
import { Rules } from './rules';

export class CloudConnector extends APIResource {
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
}

CloudConnector.Rules = Rules;

export declare namespace CloudConnector {
  export { Rules as Rules };
}
