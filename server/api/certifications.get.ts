export default defineEventHandler(async (event) => {
  try {
    const databaseId = await findDatabaseByName('Certifications');
    const response = await queryNotionDatabase(databaseId);

    return response.results.map((page: any) => {
      const props = page.properties;
      return {
        name: props.Name.title[0]?.plain_text || '',
        provider: props.Provider.rich_text[0]?.plain_text || '',
        achievement: props.Achievement.rich_text[0]?.plain_text || '',
        url: props.URL.url || '',
      };
    });
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    });
  }
});
