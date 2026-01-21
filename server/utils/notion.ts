const PORTFOLIO_PAGE_ID = '2ee59804e276802caeb0c65bdd45bd47';

export const findDatabaseByName = async (name: string) => {
  const config = useRuntimeConfig();
  const token = process.env.NOTION_TOKEN || config.notionToken;

  if (!token) {
    throw new Error('Missing NOTION_TOKEN in environment variables.');
  }

  const response = await $fetch(`https://api.notion.com/v1/blocks/${PORTFOLIO_PAGE_ID}/children`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Notion-Version': '2022-06-28',
    },
  }) as any;

  const database = response.results.find((block: any) => 
    block.type === 'child_database' && block.child_database.title === name
  );

  if (!database) {
    throw new Error(`Database "${name}" not found in portfolio page.`);
  }

  return database.id;
};

export const queryNotionDatabase = async (databaseId: string) => {
  const config = useRuntimeConfig();
  const token = process.env.NOTION_TOKEN || config.notionToken;

  return await $fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Notion-Version': '2022-06-28',
      'Content-Type': 'application/json',
    },
  }) as any;
};
