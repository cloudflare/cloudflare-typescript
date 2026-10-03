// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ImagesAPI from './images';
import { BaseImages, ImagePrepareParams, ImagePrepareResponse, Images } from './images';
import * as ApplicationsAPI from './applications/applications';
import {
  ApplicationCreateParams,
  ApplicationCreateResponse,
  ApplicationDeleteParams,
  ApplicationDeleteResponse,
  ApplicationEditParams,
  ApplicationEditResponse,
  ApplicationGetParams,
  ApplicationGetResponse,
  ApplicationListParams,
  ApplicationListResponse,
  ApplicationListResponsesPageTokenPagination,
  Applications,
  BaseApplications,
} from './applications/applications';
import * as RegistriesAPI from './registries/registries';
import {
  BaseRegistries,
  Registries,
  RegistryCreateParams,
  RegistryCreateResponse,
  RegistryDeleteParams,
  RegistryDeleteResponse,
  RegistryListParams,
  RegistryListResponse,
  RegistryListResponsesSinglePage,
} from './registries/registries';

export class BaseContainers extends APIResource {
  static override readonly _key: readonly ['containers'] = Object.freeze(['containers'] as const);
}
export class Containers extends BaseContainers {
  applications: ApplicationsAPI.Applications = new ApplicationsAPI.Applications(this._client);
  images: ImagesAPI.Images = new ImagesAPI.Images(this._client);
  registries: RegistriesAPI.Registries = new RegistriesAPI.Registries(this._client);
}

Containers.Applications = Applications;
Containers.BaseApplications = BaseApplications;
Containers.Images = Images;
Containers.BaseImages = BaseImages;
Containers.Registries = Registries;
Containers.BaseRegistries = BaseRegistries;

export declare namespace Containers {
  export {
    Applications as Applications,
    BaseApplications as BaseApplications,
    type ApplicationCreateResponse as ApplicationCreateResponse,
    type ApplicationListResponse as ApplicationListResponse,
    type ApplicationDeleteResponse as ApplicationDeleteResponse,
    type ApplicationEditResponse as ApplicationEditResponse,
    type ApplicationGetResponse as ApplicationGetResponse,
    type ApplicationListResponsesPageTokenPagination as ApplicationListResponsesPageTokenPagination,
    type ApplicationCreateParams as ApplicationCreateParams,
    type ApplicationListParams as ApplicationListParams,
    type ApplicationDeleteParams as ApplicationDeleteParams,
    type ApplicationEditParams as ApplicationEditParams,
    type ApplicationGetParams as ApplicationGetParams,
  };

  export {
    Images as Images,
    BaseImages as BaseImages,
    type ImagePrepareResponse as ImagePrepareResponse,
    type ImagePrepareParams as ImagePrepareParams,
  };

  export {
    Registries as Registries,
    BaseRegistries as BaseRegistries,
    type RegistryCreateResponse as RegistryCreateResponse,
    type RegistryListResponse as RegistryListResponse,
    type RegistryDeleteResponse as RegistryDeleteResponse,
    type RegistryListResponsesSinglePage as RegistryListResponsesSinglePage,
    type RegistryCreateParams as RegistryCreateParams,
    type RegistryListParams as RegistryListParams,
    type RegistryDeleteParams as RegistryDeleteParams,
  };
}
