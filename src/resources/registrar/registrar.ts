// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DomainsAPI from './domains';
import { BaseDomains, Domains } from './domains';
import * as RegistrationStatusAPI from './registration-status';
import { BaseRegistrationStatus, RegistrationStatus } from './registration-status';
import * as RegistrationsAPI from './registrations';
import { BaseRegistrations, Registrations } from './registrations';
import * as UpdateStatusAPI from './update-status';
import { BaseUpdateStatus, UpdateStatus } from './update-status';

export class BaseRegistrar extends APIResource {
  static override readonly _key: readonly ['registrar'] = Object.freeze(['registrar'] as const);
}
export class Registrar extends BaseRegistrar {
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);
  registrations: RegistrationsAPI.Registrations = new RegistrationsAPI.Registrations(this._client);
  registrationStatus: RegistrationStatusAPI.RegistrationStatus = new RegistrationStatusAPI.RegistrationStatus(
    this._client,
  );
  updateStatus: UpdateStatusAPI.UpdateStatus = new UpdateStatusAPI.UpdateStatus(this._client);
}

Registrar.Domains = Domains;
Registrar.BaseDomains = BaseDomains;
Registrar.Registrations = Registrations;
Registrar.BaseRegistrations = BaseRegistrations;
Registrar.RegistrationStatus = RegistrationStatus;
Registrar.BaseRegistrationStatus = BaseRegistrationStatus;
Registrar.UpdateStatus = UpdateStatus;
Registrar.BaseUpdateStatus = BaseUpdateStatus;

export declare namespace Registrar {
  export { Domains as Domains, BaseDomains as BaseDomains };

  export { Registrations as Registrations, BaseRegistrations as BaseRegistrations };

  export { RegistrationStatus as RegistrationStatus, BaseRegistrationStatus as BaseRegistrationStatus };

  export { UpdateStatus as UpdateStatus, BaseUpdateStatus as BaseUpdateStatus };
}
