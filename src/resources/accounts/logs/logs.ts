// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AuditAPI from './audit';
import { Audit } from './audit';

export class Logs extends APIResource {
  audit: AuditAPI.Audit = new AuditAPI.Audit(this._client);
}

Logs.Audit = Audit;

export declare namespace Logs {
  export { Audit as Audit };
}
