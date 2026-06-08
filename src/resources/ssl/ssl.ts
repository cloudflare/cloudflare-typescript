// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AnalyzeAPI from './analyze';
import { Analyze, AnalyzeCreateParams, AnalyzeCreateResponse, BaseAnalyze } from './analyze';
import * as AutoOriginTLSKexAPI from './auto-origin-tls-kex';
import { AutoOriginTLSKex, BaseAutoOriginTLSKex } from './auto-origin-tls-kex';
import * as RecommendationsAPI from './recommendations';
import {
  BaseRecommendations,
  RecommendationGetParams,
  RecommendationGetResponse,
  Recommendations,
} from './recommendations';
import * as VerificationAPI from './verification';
import {
  BaseVerificationResource,
  Verification,
  VerificationEditParams,
  VerificationEditResponse,
  VerificationGetParams,
  VerificationGetResponse,
  VerificationResource,
} from './verification';
import * as CertificatePacksAPI from './certificate-packs/certificate-packs';
import {
  BaseCertificatePacks,
  CertificatePackCreateParams,
  CertificatePackCreateResponse,
  CertificatePackDeleteParams,
  CertificatePackDeleteResponse,
  CertificatePackEditParams,
  CertificatePackEditResponse,
  CertificatePackGetParams,
  CertificatePackGetResponse,
  CertificatePackListParams,
  CertificatePackListResponse,
  CertificatePackListResponsesV4PagePaginationArray,
  CertificatePacks,
  Host,
  RequestValidity,
  Status,
  ValidationMethod,
} from './certificate-packs/certificate-packs';
import * as UniversalAPI from './universal/universal';
import { BaseUniversal, Universal } from './universal/universal';

export class BaseSSL extends APIResource {
  static override readonly _key: readonly ['ssl'] = Object.freeze(['ssl'] as const);
}
export class SSL extends BaseSSL {
  analyze: AnalyzeAPI.Analyze = new AnalyzeAPI.Analyze(this._client);
  certificatePacks: CertificatePacksAPI.CertificatePacks = new CertificatePacksAPI.CertificatePacks(
    this._client,
  );
  recommendations: RecommendationsAPI.Recommendations = new RecommendationsAPI.Recommendations(this._client);
  autoOriginTLSKex: AutoOriginTLSKexAPI.AutoOriginTLSKex = new AutoOriginTLSKexAPI.AutoOriginTLSKex(
    this._client,
  );
  universal: UniversalAPI.Universal = new UniversalAPI.Universal(this._client);
  verification: VerificationAPI.VerificationResource = new VerificationAPI.VerificationResource(this._client);
}

SSL.Analyze = Analyze;
SSL.BaseAnalyze = BaseAnalyze;
SSL.CertificatePacks = CertificatePacks;
SSL.BaseCertificatePacks = BaseCertificatePacks;
SSL.Recommendations = Recommendations;
SSL.BaseRecommendations = BaseRecommendations;
SSL.AutoOriginTLSKex = AutoOriginTLSKex;
SSL.BaseAutoOriginTLSKex = BaseAutoOriginTLSKex;
SSL.Universal = Universal;
SSL.BaseUniversal = BaseUniversal;
SSL.VerificationResource = VerificationResource;
SSL.BaseVerificationResource = BaseVerificationResource;

export declare namespace SSL {
  export {
    Analyze as Analyze,
    BaseAnalyze as BaseAnalyze,
    type AnalyzeCreateResponse as AnalyzeCreateResponse,
    type AnalyzeCreateParams as AnalyzeCreateParams,
  };

  export {
    CertificatePacks as CertificatePacks,
    BaseCertificatePacks as BaseCertificatePacks,
    type Host as Host,
    type RequestValidity as RequestValidity,
    type Status as Status,
    type ValidationMethod as ValidationMethod,
    type CertificatePackCreateResponse as CertificatePackCreateResponse,
    type CertificatePackListResponse as CertificatePackListResponse,
    type CertificatePackDeleteResponse as CertificatePackDeleteResponse,
    type CertificatePackEditResponse as CertificatePackEditResponse,
    type CertificatePackGetResponse as CertificatePackGetResponse,
    type CertificatePackListResponsesV4PagePaginationArray as CertificatePackListResponsesV4PagePaginationArray,
    type CertificatePackCreateParams as CertificatePackCreateParams,
    type CertificatePackListParams as CertificatePackListParams,
    type CertificatePackDeleteParams as CertificatePackDeleteParams,
    type CertificatePackEditParams as CertificatePackEditParams,
    type CertificatePackGetParams as CertificatePackGetParams,
  };

  export {
    Recommendations as Recommendations,
    BaseRecommendations as BaseRecommendations,
    type RecommendationGetResponse as RecommendationGetResponse,
    type RecommendationGetParams as RecommendationGetParams,
  };

  export { AutoOriginTLSKex as AutoOriginTLSKex, BaseAutoOriginTLSKex as BaseAutoOriginTLSKex };

  export { Universal as Universal, BaseUniversal as BaseUniversal };

  export {
    VerificationResource as VerificationResource,
    BaseVerificationResource as BaseVerificationResource,
    type Verification as Verification,
    type VerificationEditResponse as VerificationEditResponse,
    type VerificationGetResponse as VerificationGetResponse,
    type VerificationEditParams as VerificationEditParams,
    type VerificationGetParams as VerificationGetParams,
  };
}
