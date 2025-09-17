Test Playbook

This document outlines patterns and rules for designing and maintaining large Playwright test suites.

1. Structure & Modularity
  - Use POM for pages and re-usable components.
  - Keep `utils/` and `fixtures/` small and well-documented.

2. Test Types
  - Unit tests for helpers (if applicable).
  - Integration tests for API contracts.
  - End-to-end tests for critical user journeys only.

3. Flakiness & Stability
  - Add retries only for known external flakes, not to hide unstable tests.
  - Use network stubbing for 3rd-party calls.

4. CI & Parallelization
  - Limit workers on CI to match available resources.
  - Split slow/e2e tests into separate CI jobs.

5. Reporting & Observability
  - Keep HTML reports and artifacts (screenshots, videos) for failed runs.
  - Optionally enable Allure for detailed history and attachments.
