// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { Analyze } from './analyze';
import { CertificatePacks } from './certificate-packs/certificate-packs';
import { Recommendations } from './recommendations';
import { Universal } from './universal/universal';
import { VerificationResource } from './verification';
import * as AnalyzeAPI from './analyze';
import * as RecommendationsAPI from './recommendations';
import * as VerificationAPI from './verification';
import * as CertificatePacksAPI from './certificate-packs/certificate-packs';
import * as UniversalAPI from './universal/universal';

export class SSL extends APIResource {
  analyze: AnalyzeAPI.Analyze = new AnalyzeAPI.Analyze(this._client);
  certificatePacks: CertificatePacksAPI.CertificatePacks = new CertificatePacksAPI.CertificatePacks(this._client);
  recommendations: RecommendationsAPI.Recommendations = new RecommendationsAPI.Recommendations(this._client);
  universal: UniversalAPI.Universal = new UniversalAPI.Universal(this._client);
  verification: VerificationAPI.VerificationResource = new VerificationAPI.VerificationResource(this._client);
}

export namespace SSL {
  export import Analyze = AnalyzeAPI.Analyze;
  export import AnalyzeCreateResponse = AnalyzeAPI.AnalyzeCreateResponse;
  export import AnalyzeCreateParams = AnalyzeAPI.AnalyzeCreateParams;
  export import CertificatePacks = CertificatePacksAPI.CertificatePacks;
  export import Host = CertificatePacksAPI.Host;
  export import RequestValidity = CertificatePacksAPI.RequestValidity;
  export import Status = CertificatePacksAPI.Status;
  export import ValidationMethod = CertificatePacksAPI.ValidationMethod;
  export import CertificatePackListResponse = CertificatePacksAPI.CertificatePackListResponse;
  export import CertificatePackDeleteResponse = CertificatePacksAPI.CertificatePackDeleteResponse;
  export import CertificatePackEditResponse = CertificatePacksAPI.CertificatePackEditResponse;
  export import CertificatePackGetResponse = CertificatePacksAPI.CertificatePackGetResponse;
  export import CertificatePackListResponsesSinglePage = CertificatePacksAPI.CertificatePackListResponsesSinglePage;
  export import CertificatePackListParams = CertificatePacksAPI.CertificatePackListParams;
  export import CertificatePackDeleteParams = CertificatePacksAPI.CertificatePackDeleteParams;
  export import CertificatePackEditParams = CertificatePacksAPI.CertificatePackEditParams;
  export import CertificatePackGetParams = CertificatePacksAPI.CertificatePackGetParams;
  export import Recommendations = RecommendationsAPI.Recommendations;
  export import RecommendationGetResponse = RecommendationsAPI.RecommendationGetResponse;
  export import Universal = UniversalAPI.Universal;
  export import VerificationResource = VerificationAPI.VerificationResource;
  export import Verification = VerificationAPI.Verification;
  export import VerificationEditResponse = VerificationAPI.VerificationEditResponse;
  export import VerificationGetResponse = VerificationAPI.VerificationGetResponse;
  export import VerificationEditParams = VerificationAPI.VerificationEditParams;
  export import VerificationGetParams = VerificationAPI.VerificationGetParams;
}
