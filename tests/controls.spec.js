import '../tests/hooks.js';
import { test, expect } from '@playwright/test';

test.describe('Controls demo - TodoMVC', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
  });

  test('add, complete, edit and delete todos', async ({ page }) => {
    const newTodo = page.getByPlaceholder('What needs to be done?');
    await newTodo.fill('write tests');
    await newTodo.press('Enter');

    await expect(page.getByTestId('todo-title')).toHaveText(['write tests']);

    // mark complete
    await page.getByTestId('todo-item').first().getByRole('checkbox').check();
    await expect(page.getByTestId('todo-item').first()).toHaveClass('completed');

    // edit
    await page.getByTestId('todo-item').first().dblclick();
    const editBox = page.getByRole('textbox', { name: 'Edit' });
    await editBox.fill('write more tests');
    await editBox.press('Enter');
    await expect(page.getByTestId('todo-title')).toHaveText(['write more tests']);

    // delete
    await page.getByTestId('todo-item').first().hover();
    await page.locator('.todo-list li .destroy').first().click({ force: true });
    await expect(page.getByTestId('todo-item')).toHaveCount(0);
  });
});
