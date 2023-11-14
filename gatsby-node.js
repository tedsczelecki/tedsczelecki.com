exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          body
          excerpt
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create posts ', result.errors);
  }

  console.log('LEEENGTH', result?.data?.allMdx?.nodes.length);

  result?.data?.allMdx?.nodes?.forEach(node => {
    const slug = node.frontmatter.slug;
    const template = require.resolve(`./src/pages/templates/projects.tsx`);
    actions.createPage({
      path: `/projects/${slug}`,
      component: `${template}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { slug: slug },
    });
  });
};
