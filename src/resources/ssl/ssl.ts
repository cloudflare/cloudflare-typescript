// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as AnalyzeAPI from 'cloudflare/resources/ssl/analyze';
import * as RecommendationsAPI from 'cloudflare/resources/ssl/recommendations';
import * as VerificationAPI from 'cloudflare/resources/ssl/verification';
import * as CertificatePacksAPI from 'cloudflare/resources/ssl/certificate-packs/certificate-packs';
import * as UniversalAPI from 'cloudflare/resources/ssl/universal/universal';

export class SSL extends APIResource {
  analyze: AnalyzeAPI.Analyze = new AnalyzeAPI.Analyze(this._client);
  certificatePacks: CertificatePacksAPI.CertificatePacks = new CertificatePacksAPI.CertificatePacks(
    this._client,
  );
  recommendations: RecommendationsAPI.Recommendations = new RecommendationsAPI.Recommendations(this._client);
  universal: UniversalAPI.Universal = new UniversalAPI.Universal(this._client);
  verification: VerificationAPI.Verification = new VerificationAPI.Verification(this._client);
}

export namespace SSL {
  export import Analyze = AnalyzeAPI.Analyze;
  export import AnalyzeCreateResponse = AnalyzeAPI.AnalyzeCreateResponse;
  export import AnalyzeCreateParams = AnalyzeAPI.AnalyzeCreateParams;
  export import CertificatePacks = CertificatePacksAPI.CertificatePacks;
  export import CertificatePackListResponse = CertificatePacksAPI.CertificatePackListResponse;
  export import CertificatePackDeleteResponse = CertificatePacksAPI.CertificatePackDeleteResponse;
  export import CertificatePackEditResponse = CertificatePacksAPI.CertificatePackEditResponse;
  export import CertificatePackGetResponse = CertificatePacksAPI.CertificatePackGetResponse;
  export import CertificatePackListParams = CertificatePacksAPI.CertificatePackListParams;
  export import CertificatePackDeleteParams = CertificatePacksAPI.CertificatePackDeleteParams;
  export import CertificatePackEditParams = CertificatePacksAPI.CertificatePackEditParams;
  export import CertificatePackGetParams = CertificatePacksAPI.CertificatePackGetParams;
  export import Recommendations = RecommendationsAPI.Recommendations;
  export import RecommendationGetResponse = RecommendationsAPI.RecommendationGetResponse;
  export import Universal = UniversalAPI.Universal;
  export import Verification = VerificationAPI.Verification;
  export import VerificationEditResponse = VerificationAPI.VerificationEditResponse;
  export import VerificationGetResponse = VerificationAPI.VerificationGetResponse;
  export import VerificationEditParams = VerificationAPI.VerificationEditParams;
  export import VerificationGetParams = VerificationAPI.VerificationGetParams;
}
