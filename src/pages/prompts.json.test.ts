import { describe, it, expect, vi } from 'vitest';
import { GET } from './prompts.json';

// Mock the prompts data
vi.mock('../data/prompts', () => ({
  prompts: [
    {
      id: 'test-1',
      title: 'Title 1',
      prompt: 'Prompt text 1',
      extraField: 'should be ignored',
    },
    {
      id: 'test-2',
      title: 'Title 2',
      prompt: 'Prompt text 2',
      extraField: 'should be ignored',
    },
  ],
}));

describe('prompts.json API endpoint', () => {
  it('returns a Response with status 200 and correct headers', () => {
    const response = GET();

    expect(response).toBeInstanceOf(Response);
    expect(response.status).toBe(200);
    expect(response.headers.get('Content-Type')).toBe('application/json; charset=utf-8');
  });

  it('returns a JSON payload containing only id and prompt fields', async () => {
    const response = GET();
    const data = await response.json();

    expect(data).toEqual([
      { id: 'test-1', prompt: 'Prompt text 1' },
      { id: 'test-2', prompt: 'Prompt text 2' },
    ]);
  });
});
