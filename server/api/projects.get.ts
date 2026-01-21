export default defineEventHandler(async (event) => {
  try {
    const databaseId = await findDatabaseByName('Use Cases');
    const response = await queryNotionDatabase(databaseId);

    return response.results.map((page: any) => {
      const props = page.properties;
      return {
        title: props.Title.title[0]?.plain_text || '',
        description: props.Description.rich_text[0]?.plain_text || '',
        challenge: props.Challenge.rich_text[0]?.plain_text || '',
        solution: props.Solution.rich_text[0]?.plain_text || '',
        impact: props.Impact.rich_text[0]?.plain_text || '',
        image: props.Image.url || '',
        tags: props.Tags.multi_select.map((tag: any) => tag.name) || [],
      };
    });
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    });
  }
});
