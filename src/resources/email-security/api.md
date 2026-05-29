# EmailSecurity

## Investigate

Types:

- <code><a href="./src/resources/email-security/investigate/investigate.ts">InvestigateListResponse</a></code>
- <code><a href="./src/resources/email-security/investigate/investigate.ts">InvestigateGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/email-security/investigate">client.emailSecurity.investigate.<a href="./src/resources/email-security/investigate/investigate.ts">list</a>({ ...params }) -> InvestigateListResponsesV4PagePaginationArray</code>
- <code title="get /accounts/{account_id}/email-security/investigate/{investigate_id}">client.emailSecurity.investigate.<a href="./src/resources/email-security/investigate/investigate.ts">get</a>(investigateID, { ...params }) -> InvestigateGetResponse</code>

### Detections

Types:

- <code><a href="./src/resources/email-security/investigate/detections.ts">DetectionGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/email-security/investigate/{investigate_id}/detections">client.emailSecurity.investigate.detections.<a href="./src/resources/email-security/investigate/detections.ts">get</a>(investigateID, { ...params }) -> DetectionGetResponse</code>

### Preview

Types:

- <code><a href="./src/resources/email-security/investigate/preview.ts">PreviewCreateResponse</a></code>
- <code><a href="./src/resources/email-security/investigate/preview.ts">PreviewGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/email-security/investigate/preview">client.emailSecurity.investigate.preview.<a href="./src/resources/email-security/investigate/preview.ts">create</a>({ ...params }) -> PreviewCreateResponse</code>
- <code title="get /accounts/{account_id}/email-security/investigate/{investigate_id}/preview">client.emailSecurity.investigate.preview.<a href="./src/resources/email-security/investigate/preview.ts">get</a>(investigateID, { ...params }) -> PreviewGetResponse</code>

### Raw

Types:

- <code><a href="./src/resources/email-security/investigate/raw.ts">RawGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/email-security/investigate/{investigate_id}/raw">client.emailSecurity.investigate.raw.<a href="./src/resources/email-security/investigate/raw.ts">get</a>(investigateID, { ...params }) -> RawGetResponse</code>

### Trace

Types:

- <code><a href="./src/resources/email-security/investigate/trace.ts">TraceGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/email-security/investigate/{investigate_id}/trace">client.emailSecurity.investigate.trace.<a href="./src/resources/email-security/investigate/trace.ts">get</a>(investigateID, { ...params }) -> TraceGetResponse</code>

### Move

Types:

- <code><a href="./src/resources/email-security/investigate/move.ts">MoveCreateResponse</a></code>
- <code><a href="./src/resources/email-security/investigate/move.ts">MoveBulkResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/email-security/investigate/{investigate_id}/move">client.emailSecurity.investigate.move.<a href="./src/resources/email-security/investigate/move.ts">create</a>(investigateID, { ...params }) -> MoveCreateResponsesSinglePage</code>
- <code title="post /accounts/{account_id}/email-security/investigate/move">client.emailSecurity.investigate.move.<a href="./src/resources/email-security/investigate/move.ts">bulk</a>({ ...params }) -> MoveBulkResponsesSinglePage</code>

### Reclassify

Types:

- <code><a href="./src/resources/email-security/investigate/reclassify.ts">ReclassifyCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/email-security/investigate/{investigate_id}/reclassify">client.emailSecurity.investigate.reclassify.<a href="./src/resources/email-security/investigate/reclassify.ts">create</a>(investigateID, { ...params }) -> ReclassifyCreateResponse</code>

### Release

Types:

- <code><a href="./src/resources/email-security/investigate/release.ts">ReleaseBulkResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/email-security/investigate/release">client.emailSecurity.investigate.release.<a href="./src/resources/email-security/investigate/release.ts">bulk</a>([ ...body ]) -> ReleaseBulkResponsesSinglePage</code>

## Phishguard

### Reports

Types:

- <code><a href="./src/resources/email-security/phishguard/reports.ts">ReportListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/email-security/phishguard/reports">client.emailSecurity.phishguard.reports.<a href="./src/resources/email-security/phishguard/reports.ts">list</a>({ ...params }) -> ReportListResponsesSinglePage</code>

## Settings

### AllowPolicies

Types:

- <code><a href="./src/resources/email-security/settings/allow-policies.ts">AllowPolicyCreateResponse</a></code>
- <code><a href="./src/resources/email-security/settings/allow-policies.ts">AllowPolicyListResponse</a></code>
- <code><a href="./src/resources/email-security/settings/allow-policies.ts">AllowPolicyDeleteResponse</a></code>
- <code><a href="./src/resources/email-security/settings/allow-policies.ts">AllowPolicyEditResponse</a></code>
- <code><a href="./src/resources/email-security/settings/allow-policies.ts">AllowPolicyGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/email-security/settings/allow_policies">client.emailSecurity.settings.allowPolicies.<a href="./src/resources/email-security/settings/allow-policies.ts">create</a>({ ...params }) -> AllowPolicyCreateResponse</code>
- <code title="get /accounts/{account_id}/email-security/settings/allow_policies">client.emailSecurity.settings.allowPolicies.<a href="./src/resources/email-security/settings/allow-policies.ts">list</a>({ ...params }) -> AllowPolicyListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/email-security/settings/allow_policies/{policy_id}">client.emailSecurity.settings.allowPolicies.<a href="./src/resources/email-security/settings/allow-policies.ts">delete</a>(policyID, { ...params }) -> AllowPolicyDeleteResponse</code>
- <code title="patch /accounts/{account_id}/email-security/settings/allow_policies/{policy_id}">client.emailSecurity.settings.allowPolicies.<a href="./src/resources/email-security/settings/allow-policies.ts">edit</a>(policyID, { ...params }) -> AllowPolicyEditResponse</code>
- <code title="get /accounts/{account_id}/email-security/settings/allow_policies/{policy_id}">client.emailSecurity.settings.allowPolicies.<a href="./src/resources/email-security/settings/allow-policies.ts">get</a>(policyID, { ...params }) -> AllowPolicyGetResponse</code>

### BlockSenders

Types:

- <code><a href="./src/resources/email-security/settings/block-senders.ts">BlockSenderCreateResponse</a></code>
- <code><a href="./src/resources/email-security/settings/block-senders.ts">BlockSenderListResponse</a></code>
- <code><a href="./src/resources/email-security/settings/block-senders.ts">BlockSenderDeleteResponse</a></code>
- <code><a href="./src/resources/email-security/settings/block-senders.ts">BlockSenderEditResponse</a></code>
- <code><a href="./src/resources/email-security/settings/block-senders.ts">BlockSenderGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/email-security/settings/block_senders">client.emailSecurity.settings.blockSenders.<a href="./src/resources/email-security/settings/block-senders.ts">create</a>({ ...params }) -> BlockSenderCreateResponse</code>
- <code title="get /accounts/{account_id}/email-security/settings/block_senders">client.emailSecurity.settings.blockSenders.<a href="./src/resources/email-security/settings/block-senders.ts">list</a>({ ...params }) -> BlockSenderListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/email-security/settings/block_senders/{pattern_id}">client.emailSecurity.settings.blockSenders.<a href="./src/resources/email-security/settings/block-senders.ts">delete</a>(patternID, { ...params }) -> BlockSenderDeleteResponse</code>
- <code title="patch /accounts/{account_id}/email-security/settings/block_senders/{pattern_id}">client.emailSecurity.settings.blockSenders.<a href="./src/resources/email-security/settings/block-senders.ts">edit</a>(patternID, { ...params }) -> BlockSenderEditResponse</code>
- <code title="get /accounts/{account_id}/email-security/settings/block_senders/{pattern_id}">client.emailSecurity.settings.blockSenders.<a href="./src/resources/email-security/settings/block-senders.ts">get</a>(patternID, { ...params }) -> BlockSenderGetResponse</code>

### Domains

Types:

- <code><a href="./src/resources/email-security/settings/domains.ts">DomainListResponse</a></code>
- <code><a href="./src/resources/email-security/settings/domains.ts">DomainDeleteResponse</a></code>
- <code><a href="./src/resources/email-security/settings/domains.ts">DomainEditResponse</a></code>
- <code><a href="./src/resources/email-security/settings/domains.ts">DomainGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/email-security/settings/domains">client.emailSecurity.settings.domains.<a href="./src/resources/email-security/settings/domains.ts">list</a>({ ...params }) -> DomainListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/email-security/settings/domains/{domain_id}">client.emailSecurity.settings.domains.<a href="./src/resources/email-security/settings/domains.ts">delete</a>(domainID, { ...params }) -> DomainDeleteResponse</code>
- <code title="patch /accounts/{account_id}/email-security/settings/domains/{domain_id}">client.emailSecurity.settings.domains.<a href="./src/resources/email-security/settings/domains.ts">edit</a>(domainID, { ...params }) -> DomainEditResponse</code>
- <code title="get /accounts/{account_id}/email-security/settings/domains/{domain_id}">client.emailSecurity.settings.domains.<a href="./src/resources/email-security/settings/domains.ts">get</a>(domainID, { ...params }) -> DomainGetResponse</code>

### ImpersonationRegistry

Types:

- <code><a href="./src/resources/email-security/settings/impersonation-registry.ts">ImpersonationRegistryCreateResponse</a></code>
- <code><a href="./src/resources/email-security/settings/impersonation-registry.ts">ImpersonationRegistryListResponse</a></code>
- <code><a href="./src/resources/email-security/settings/impersonation-registry.ts">ImpersonationRegistryDeleteResponse</a></code>
- <code><a href="./src/resources/email-security/settings/impersonation-registry.ts">ImpersonationRegistryEditResponse</a></code>
- <code><a href="./src/resources/email-security/settings/impersonation-registry.ts">ImpersonationRegistryGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/email-security/settings/impersonation_registry">client.emailSecurity.settings.impersonationRegistry.<a href="./src/resources/email-security/settings/impersonation-registry.ts">create</a>({ ...params }) -> ImpersonationRegistryCreateResponse</code>
- <code title="get /accounts/{account_id}/email-security/settings/impersonation_registry">client.emailSecurity.settings.impersonationRegistry.<a href="./src/resources/email-security/settings/impersonation-registry.ts">list</a>({ ...params }) -> ImpersonationRegistryListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/email-security/settings/impersonation_registry/{impersonation_registry_id}">client.emailSecurity.settings.impersonationRegistry.<a href="./src/resources/email-security/settings/impersonation-registry.ts">delete</a>(impersonationRegistryID, { ...params }) -> ImpersonationRegistryDeleteResponse</code>
- <code title="patch /accounts/{account_id}/email-security/settings/impersonation_registry/{impersonation_registry_id}">client.emailSecurity.settings.impersonationRegistry.<a href="./src/resources/email-security/settings/impersonation-registry.ts">edit</a>(impersonationRegistryID, { ...params }) -> ImpersonationRegistryEditResponse</code>
- <code title="get /accounts/{account_id}/email-security/settings/impersonation_registry/{impersonation_registry_id}">client.emailSecurity.settings.impersonationRegistry.<a href="./src/resources/email-security/settings/impersonation-registry.ts">get</a>(impersonationRegistryID, { ...params }) -> ImpersonationRegistryGetResponse</code>

### SendingDomainRestrictions

Types:

- <code><a href="./src/resources/email-security/settings/sending-domain-restrictions.ts">SendingDomainRestrictionCreateResponse</a></code>
- <code><a href="./src/resources/email-security/settings/sending-domain-restrictions.ts">SendingDomainRestrictionListResponse</a></code>
- <code><a href="./src/resources/email-security/settings/sending-domain-restrictions.ts">SendingDomainRestrictionDeleteResponse</a></code>
- <code><a href="./src/resources/email-security/settings/sending-domain-restrictions.ts">SendingDomainRestrictionEditResponse</a></code>
- <code><a href="./src/resources/email-security/settings/sending-domain-restrictions.ts">SendingDomainRestrictionGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/email-security/settings/sending_domain_restrictions">client.emailSecurity.settings.sendingDomainRestrictions.<a href="./src/resources/email-security/settings/sending-domain-restrictions.ts">create</a>({ ...params }) -> SendingDomainRestrictionCreateResponse</code>
- <code title="get /accounts/{account_id}/email-security/settings/sending_domain_restrictions">client.emailSecurity.settings.sendingDomainRestrictions.<a href="./src/resources/email-security/settings/sending-domain-restrictions.ts">list</a>({ ...params }) -> SendingDomainRestrictionListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/email-security/settings/sending_domain_restrictions/{sending_domain_restriction_id}">client.emailSecurity.settings.sendingDomainRestrictions.<a href="./src/resources/email-security/settings/sending-domain-restrictions.ts">delete</a>(sendingDomainRestrictionID, { ...params }) -> SendingDomainRestrictionDeleteResponse</code>
- <code title="patch /accounts/{account_id}/email-security/settings/sending_domain_restrictions/{sending_domain_restriction_id}">client.emailSecurity.settings.sendingDomainRestrictions.<a href="./src/resources/email-security/settings/sending-domain-restrictions.ts">edit</a>(sendingDomainRestrictionID, { ...params }) -> SendingDomainRestrictionEditResponse</code>
- <code title="get /accounts/{account_id}/email-security/settings/sending_domain_restrictions/{sending_domain_restriction_id}">client.emailSecurity.settings.sendingDomainRestrictions.<a href="./src/resources/email-security/settings/sending-domain-restrictions.ts">get</a>(sendingDomainRestrictionID, { ...params }) -> SendingDomainRestrictionGetResponse</code>

### TrustedDomains

Types:

- <code><a href="./src/resources/email-security/settings/trusted-domains.ts">TrustedDomainCreateResponse</a></code>
- <code><a href="./src/resources/email-security/settings/trusted-domains.ts">TrustedDomainListResponse</a></code>
- <code><a href="./src/resources/email-security/settings/trusted-domains.ts">TrustedDomainDeleteResponse</a></code>
- <code><a href="./src/resources/email-security/settings/trusted-domains.ts">TrustedDomainEditResponse</a></code>
- <code><a href="./src/resources/email-security/settings/trusted-domains.ts">TrustedDomainGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/email-security/settings/trusted_domains">client.emailSecurity.settings.trustedDomains.<a href="./src/resources/email-security/settings/trusted-domains.ts">create</a>({ ...params }) -> TrustedDomainCreateResponse</code>
- <code title="get /accounts/{account_id}/email-security/settings/trusted_domains">client.emailSecurity.settings.trustedDomains.<a href="./src/resources/email-security/settings/trusted-domains.ts">list</a>({ ...params }) -> TrustedDomainListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/email-security/settings/trusted_domains/{trusted_domain_id}">client.emailSecurity.settings.trustedDomains.<a href="./src/resources/email-security/settings/trusted-domains.ts">delete</a>(trustedDomainID, { ...params }) -> TrustedDomainDeleteResponse</code>
- <code title="patch /accounts/{account_id}/email-security/settings/trusted_domains/{trusted_domain_id}">client.emailSecurity.settings.trustedDomains.<a href="./src/resources/email-security/settings/trusted-domains.ts">edit</a>(trustedDomainID, { ...params }) -> TrustedDomainEditResponse</code>
- <code title="get /accounts/{account_id}/email-security/settings/trusted_domains/{trusted_domain_id}">client.emailSecurity.settings.trustedDomains.<a href="./src/resources/email-security/settings/trusted-domains.ts">get</a>(trustedDomainID, { ...params }) -> TrustedDomainGetResponse</code>

### URLIgnorePatterns

Types:

- <code><a href="./src/resources/email-security/settings/url-ignore-patterns.ts">URLIgnorePatternCreateResponse</a></code>
- <code><a href="./src/resources/email-security/settings/url-ignore-patterns.ts">URLIgnorePatternListResponse</a></code>
- <code><a href="./src/resources/email-security/settings/url-ignore-patterns.ts">URLIgnorePatternDeleteResponse</a></code>
- <code><a href="./src/resources/email-security/settings/url-ignore-patterns.ts">URLIgnorePatternEditResponse</a></code>
- <code><a href="./src/resources/email-security/settings/url-ignore-patterns.ts">URLIgnorePatternGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/email-security/settings/url_ignore_patterns">client.emailSecurity.settings.urlIgnorePatterns.<a href="./src/resources/email-security/settings/url-ignore-patterns.ts">create</a>({ ...params }) -> URLIgnorePatternCreateResponse</code>
- <code title="get /accounts/{account_id}/email-security/settings/url_ignore_patterns">client.emailSecurity.settings.urlIgnorePatterns.<a href="./src/resources/email-security/settings/url-ignore-patterns.ts">list</a>({ ...params }) -> URLIgnorePatternListResponsesV4PagePaginationArray</code>
- <code title="delete /accounts/{account_id}/email-security/settings/url_ignore_patterns/{pattern_id}">client.emailSecurity.settings.urlIgnorePatterns.<a href="./src/resources/email-security/settings/url-ignore-patterns.ts">delete</a>(patternID, { ...params }) -> URLIgnorePatternDeleteResponse</code>
- <code title="patch /accounts/{account_id}/email-security/settings/url_ignore_patterns/{pattern_id}">client.emailSecurity.settings.urlIgnorePatterns.<a href="./src/resources/email-security/settings/url-ignore-patterns.ts">edit</a>(patternID, { ...params }) -> URLIgnorePatternEditResponse</code>
- <code title="get /accounts/{account_id}/email-security/settings/url_ignore_patterns/{pattern_id}">client.emailSecurity.settings.urlIgnorePatterns.<a href="./src/resources/email-security/settings/url-ignore-patterns.ts">get</a>(patternID, { ...params }) -> URLIgnorePatternGetResponse</code>

## Submissions

Types:

- <code><a href="./src/resources/email-security/submissions.ts">SubmissionListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/email-security/submissions">client.emailSecurity.submissions.<a href="./src/resources/email-security/submissions.ts">list</a>({ ...params }) -> SubmissionListResponsesV4PagePaginationArray</code>
