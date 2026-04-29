// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as DomainsAPI from './domains';
import { Domains } from './domains';
import * as RegistrationStatusAPI from './registration-status';
import { RegistrationStatus } from './registration-status';
import * as UpdateStatusAPI from './update-status';
import { UpdateStatus } from './update-status';

export class Registrar extends APIResource {
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
  registrationStatus: RegistrationStatusAPI.RegistrationStatus = new RegistrationStatusAPI.RegistrationStatus(
    this._client,
  );
  updateStatus: UpdateStatusAPI.UpdateStatus = new UpdateStatusAPI.UpdateStatus(this._client);
}

Registrar.Domains = Domains;
Registrar.RegistrationStatus = RegistrationStatus;
Registrar.UpdateStatus = UpdateStatus;

export declare namespace Registrar {
  export { Domains as Domains };

  export { RegistrationStatus as RegistrationStatus };

  export { UpdateStatus as UpdateStatus };
}
