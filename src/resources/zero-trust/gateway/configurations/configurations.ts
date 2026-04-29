// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CustomCertificateAPI from './custom-certificate';
import { BaseCustomCertificate, CustomCertificate } from './custom-certificate';

export class BaseConfigurations extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'gateway', 'configurations'] = Object.freeze([
    'zeroTrust',
    'gateway',
    'configurations',
  ] as const);
}
export class Configurations extends BaseConfigurations {
  customCertificate: CustomCertificateAPI.CustomCertificate = new CustomCertificateAPI.CustomCertificate(
    this._client,
  );
}

Configurations.CustomCertificate = CustomCertificate;
Configurations.BaseCustomCertificate = BaseCustomCertificate;

export declare namespace Configurations {
  export { CustomCertificate as CustomCertificate, BaseCustomCertificate as BaseCustomCertificate };
}
