# URLScanner

Types:

- <code><a href="./src/resources/url-scanner/url-scanner.ts">URLScannerDomain</a></code>
- <code><a href="./src/resources/url-scanner/url-scanner.ts">URLScannerTask</a></code>

## Responses

Types:

- <code><a href="./src/resources/url-scanner/responses.ts">ResponseGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/urlscanner/v2/responses/{response_id}">client.urlScanner.responses.<a href="./src/resources/url-scanner/responses.ts">get</a>(responseID, { ...params }) -> string</code>

## Scans

Types:

- <code><a href="./src/resources/url-scanner/scans.ts">ScanCreateResponse</a></code>
- <code><a href="./src/resources/url-scanner/scans.ts">ScanListResponse</a></code>
- <code><a href="./src/resources/url-scanner/scans.ts">ScanBulkCreateResponse</a></code>
- <code><a href="./src/resources/url-scanner/scans.ts">ScanDOMResponse</a></code>
- <code><a href="./src/resources/url-scanner/scans.ts">ScanGetResponse</a></code>
- <code><a href="./src/resources/url-scanner/scans.ts">ScanHARResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/urlscanner/v2/scan">client.urlScanner.scans.<a href="./src/resources/url-scanner/scans.ts">create</a>({ ...params }) -> ScanCreateResponse</code>
- <code title="get /accounts/{account_id}/urlscanner/v2/search">client.urlScanner.scans.<a href="./src/resources/url-scanner/scans.ts">list</a>({ ...params }) -> ScanListResponse</code>
- <code title="post /accounts/{account_id}/urlscanner/v2/bulk">client.urlScanner.scans.<a href="./src/resources/url-scanner/scans.ts">bulkCreate</a>([ ...body ]) -> ScanBulkCreateResponse</code>
- <code title="get /accounts/{account_id}/urlscanner/v2/dom/{scan_id}">client.urlScanner.scans.<a href="./src/resources/url-scanner/scans.ts">dom</a>(scanID, { ...params }) -> string</code>
- <code title="get /accounts/{account_id}/urlscanner/v2/result/{scan_id}">client.urlScanner.scans.<a href="./src/resources/url-scanner/scans.ts">get</a>(scanID, { ...params }) -> ScanGetResponse</code>
- <code title="get /accounts/{account_id}/urlscanner/v2/har/{scan_id}">client.urlScanner.scans.<a href="./src/resources/url-scanner/scans.ts">har</a>(scanID, { ...params }) -> ScanHARResponse</code>
- <code title="get /accounts/{account_id}/urlscanner/v2/screenshots/{scan_id}.png">client.urlScanner.scans.<a href="./src/resources/url-scanner/scans.ts">screenshot</a>(scanID, { ...params }) -> Response</code>
