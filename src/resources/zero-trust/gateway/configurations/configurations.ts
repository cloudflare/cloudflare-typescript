// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as CustomCertificateAPI from './custom-certificate';
import { CustomCertificate } from './custom-certificate';

export class Configurations extends APIResource {
  customCertificate: CustomCertificateAPI.CustomCertificate = new CustomCertificateAPI.CustomCertificate(
    this._client,
  );
}

Configurations.CustomCertificate = CustomCertificate;

export declare namespace Configurations {
  export { CustomCertificate as CustomCertificate };
}
