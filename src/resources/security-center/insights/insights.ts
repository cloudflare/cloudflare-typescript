// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ClassAPI from './class';
import { BaseClass, Class } from './class';
import * as SeverityAPI from './severity';
import { BaseSeverity, Severity } from './severity';
import * as TypeAPI from './type';
import { BaseType, Type } from './type';

export class BaseInsights extends APIResource {
  static override readonly _key: readonly ['securityCenter', 'insights'] = Object.freeze([
    'securityCenter',
    'insights',
  ] as const);
}
export class Insights extends BaseInsights {
  class: ClassAPI.Class = new ClassAPI.Class(this._client);
  severity: SeverityAPI.Severity = new SeverityAPI.Severity(this._client);
  type: TypeAPI.Type = new TypeAPI.Type(this._client);
}

Insights.Class = Class;
Insights.BaseClass = BaseClass;
Insights.Severity = Severity;
Insights.BaseSeverity = BaseSeverity;
Insights.Type = Type;
Insights.BaseType = BaseType;

export declare namespace Insights {
  export { Class as Class, BaseClass as BaseClass };

  export { Severity as Severity, BaseSeverity as BaseSeverity };

  export { Type as Type, BaseType as BaseType };
}
