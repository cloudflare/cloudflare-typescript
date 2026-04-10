// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ClassAPI from './class';
import { Class } from './class';
import * as SeverityAPI from './severity';
import { Severity } from './severity';
import * as TypeAPI from './type';
import { Type } from './type';

export class Insights extends APIResource {
  class: ClassAPI.Class = new ClassAPI.Class(this._client);
  severity: SeverityAPI.Severity = new SeverityAPI.Severity(this._client);
  type: TypeAPI.Type = new TypeAPI.Type(this._client);
}

Insights.Class = Class;
Insights.Severity = Severity;
Insights.Type = Type;

export declare namespace Insights {
  export { Class as Class };

  export { Severity as Severity };

  export { Type as Type };
}
