import '../tests/hooks.js';
import { test, expect } from '@playwright/test';

// Example: API testing using Playwright's request fixture
// This test uses a public HTTP testing service (httpbin.org) to demonstrate
// how to make API calls, assert on responses and extract JSON.
test('API: POST and check response', async ({ request }) => {
  const payload = { name: 'Alice', role: 'tester' };

  const resp = await request.post('https://httpbin.org/post', {
    data: payload,
  });

  expect(resp.ok()).toBeTruthy();
  const body = await resp.json();

  // httpbin echoes back the posted data under 'form' for application/x-www-form-urlencoded
  expect(body).toBeTruthy();
  // body.data is the raw body string; form contains parsed fields when sent as form
  // We sent as 'data', httpbin may return it differently; assert presence of our name
  const received = JSON.stringify(body);
  expect(received).toContain('Alice');
});
