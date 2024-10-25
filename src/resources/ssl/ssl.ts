// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AnalyzeAPI from './analyze';
import * as RecommendationsAPI from './recommendations';
import * as VerificationAPI from './verification';
import * as CertificatePacksAPI from './certificate-packs/certificate-packs';
import * as UniversalAPI from './universal/universal';

export class SSL extends APIResource {
  analyze: AnalyzeAPI.Analyze = new AnalyzeAPI.Analyze(this._client);
  certificatePacks: CertificatePacksAPI.CertificatePacks = new CertificatePacksAPI.CertificatePacks(
    this._client,
  );
  recommendations: RecommendationsAPI.Recommendations = new RecommendationsAPI.Recommendations(this._client);
  universal: UniversalAPI.Universal = new UniversalAPI.Universal(this._client);
  verification: VerificationAPI.VerificationResource = new VerificationAPI.VerificationResource(this._client);
}

export namespace SSL {
  export import Analyze = AnalyzeAPI.Analyze;
  export type AnalyzeCreateResponse = AnalyzeAPI.AnalyzeCreateResponse;
  export type AnalyzeCreateParams = AnalyzeAPI.AnalyzeCreateParams;
  export import CertificatePacks = CertificatePacksAPI.CertificatePacks;
  export type Host = CertificatePacksAPI.Host;
  export type RequestValidity = CertificatePacksAPI.RequestValidity;
  export type Status = CertificatePacksAPI.Status;
  export type ValidationMethod = CertificatePacksAPI.ValidationMethod;
  export type CertificatePackListResponse = CertificatePacksAPI.CertificatePackListResponse;
  export type CertificatePackDeleteResponse = CertificatePacksAPI.CertificatePackDeleteResponse;
  export type CertificatePackEditResponse = CertificatePacksAPI.CertificatePackEditResponse;
  export type CertificatePackGetResponse = CertificatePacksAPI.CertificatePackGetResponse;
  export import CertificatePackListResponsesSinglePage = CertificatePacksAPI.CertificatePackListResponsesSinglePage;
  export type CertificatePackListParams = CertificatePacksAPI.CertificatePackListParams;
  export type CertificatePackDeleteParams = CertificatePacksAPI.CertificatePackDeleteParams;
  export type CertificatePackEditParams = CertificatePacksAPI.CertificatePackEditParams;
  export type CertificatePackGetParams = CertificatePacksAPI.CertificatePackGetParams;
  export import Recommendations = RecommendationsAPI.Recommendations;
  export type RecommendationGetResponse = RecommendationsAPI.RecommendationGetResponse;
  export import Universal = UniversalAPI.Universal;
  export import VerificationResource = VerificationAPI.VerificationResource;
  export type Verification = VerificationAPI.Verification;
  export type VerificationEditResponse = VerificationAPI.VerificationEditResponse;
  export type VerificationGetResponse = VerificationAPI.VerificationGetResponse;
  export type VerificationEditParams = VerificationAPI.VerificationEditParams;
  export type VerificationGetParams = VerificationAPI.VerificationGetParams;
}
