// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as AnalyzesAPI from 'cloudflare/resources/ssls/analyzes';
import * as RecommendationsAPI from 'cloudflare/resources/ssls/recommendations';
import * as VerificationsAPI from 'cloudflare/resources/ssls/verifications';
import * as CertificatePacksAPI from 'cloudflare/resources/ssls/certificate-packs/certificate-packs';
import * as UniversalsAPI from 'cloudflare/resources/ssls/universals/universals';

export class SSLs extends APIResource {
  analyzes: AnalyzesAPI.Analyzes = new AnalyzesAPI.Analyzes(this._client);
  certificatePacks: CertificatePacksAPI.CertificatePacks = new CertificatePacksAPI.CertificatePacks(
    this._client,
  );
  recommendations: RecommendationsAPI.Recommendations = new RecommendationsAPI.Recommendations(this._client);
  universals: UniversalsAPI.Universals = new UniversalsAPI.Universals(this._client);
  verifications: VerificationsAPI.Verifications = new VerificationsAPI.Verifications(this._client);
}

export namespace SSLs {
  export import Analyzes = AnalyzesAPI.Analyzes;
  export import AnalyzeCreateResponse = AnalyzesAPI.AnalyzeCreateResponse;
  export import AnalyzeCreateParams = AnalyzesAPI.AnalyzeCreateParams;
  export import CertificatePacks = CertificatePacksAPI.CertificatePacks;
  export import CertificatePackUpdateResponse = CertificatePacksAPI.CertificatePackUpdateResponse;
  export import CertificatePackListResponse = CertificatePacksAPI.CertificatePackListResponse;
  export import CertificatePackDeleteResponse = CertificatePacksAPI.CertificatePackDeleteResponse;
  export import CertificatePackGetResponse = CertificatePacksAPI.CertificatePackGetResponse;
  export import CertificatePackListParams = CertificatePacksAPI.CertificatePackListParams;
  export import Recommendations = RecommendationsAPI.Recommendations;
  export import RecommendationListResponse = RecommendationsAPI.RecommendationListResponse;
  export import Universals = UniversalsAPI.Universals;
  export import Verifications = VerificationsAPI.Verifications;
  export import VerificationUpdateResponse = VerificationsAPI.VerificationUpdateResponse;
  export import VerificationSSLVerificationSSLVerificationDetailsResponse = VerificationsAPI.VerificationSSLVerificationSSLVerificationDetailsResponse;
  export import VerificationUpdateParams = VerificationsAPI.VerificationUpdateParams;
  export import VerificationSSLVerificationSSLVerificationDetailsParams = VerificationsAPI.VerificationSSLVerificationSSLVerificationDetailsParams;
}
