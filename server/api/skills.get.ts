export default defineEventHandler(async (event) => {
  try {
    const databaseId = await findDatabaseByName('Skills');
    const response = await queryNotionDatabase(databaseId);

    const skills = response.results.map((page: any) => {
      return {
        name: page.properties.Name.title[0]?.plain_text || 'Unknown',
        category: page.properties.Category.select?.name || 'Other',
      };
    });

    // Group by category
    const grouped = skills.reduce((acc: any, skill: any) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill.name);
      return acc;
    }, {});

    // Format for component
    return Object.entries(grouped).map(([category, items]) => ({
      name: category,
      items,
    }));
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      statusMessage: error.message,
    });
  }
});
