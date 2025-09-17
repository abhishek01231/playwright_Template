Contributing

Guidelines for contributing tests and utilities to this repository.

- Follow Page Object Model (POM) patterns: put page interactions in `pages/` and keep tests thin and declarative.
- Tests must be idempotent and isolate state (avoid relying on external data unless fixtures are used).
- Use `fixtures/testData.json` or `utils/dataGenerator.js` for test inputs.
- Keep tests fast: prefer API mocks for slow flows and mark end-to-end flows as `@e2e` if needed.
- Add documentation for new helpers and pages.
- Run `npm test` and ensure all checks pass before opening a PR.
