import { prompts } from '../data/prompts';

export function GET() {
  return new Response(
    JSON.stringify(
      prompts.map((prompt) => ({
        id: prompt.id,
        prompt: prompt.prompt,
      })),
    ),
    {
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    },
  );
}
