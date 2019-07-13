const fs = require('fs');
const path = require('path');
const { promisify } = require('util')

const readdir = promisify(fs.readdir);
const writeFile = promisify(fs.writeFile);

exports.createPages = async ({graphql, actions}) => {
  const { createPage } = actions;
  const workComponent = path.resolve('src/layouts/work.js')
  const portfolioNames = await readdir(path.join(__dirname, 'src/portfolio'));

  const portfolio = [];

  for ( let name of portfolioNames) {
    try {
      const workItemPath = path.join(__dirname, 'src/portfolio', name);
      const data = require(path.join(workItemPath, 'info.json'));
      const thumb = await graphql(`
        query($thumbPath: String!){
            file(relativePath: { eq: $thumbPath }) {
              childImageSharp {
                fixed {
                  src
                }
              }
            }
          }
        `, {
        thumbPath: `${name}/thumb.jpg`
      });

      data.info.date = new Date(data.info.date);
      portfolio.push({
        ...data,
        galleryPath: `${name}/gallery`,
        thumb: thumb.data.file.childImageSharp.fixed.src,
      });
    } catch(e) {
      console.log(e);
    }
  }

  const portfolioOrdered = portfolio.sort((a,b) => {
    if (a.info.date < b.info.date) {
      return 1;
    }
    if (a.info.date > b.info.date) {
      return -1
    }
    return 0;
  })

  portfolioOrdered.forEach((context, i) => {
    const prevProject = i - 1 < 0 ? null : portfolioOrdered[i-1];
    const nextProject = i + 1 > portfolioOrdered.length ? null : portfolioOrdered[i+1]

    createPage({
      component: workComponent,
      path: `/work/${context.slug}`,
      context: {
        ...context,
        nextProject,
        prevProject
      }
    })
  });

  await writeFile(path.join(__dirname, 'src/constants/homepage.js'), `/* This file is generated in gatsby-node.js:exports.createPage */
export const homepageWork = ${JSON.stringify(portfolioOrdered)};
  `)

}

// exports.onCreatePage = async ({ page, actions, ...rest }) => {
//   const { createPage } = actions
//
//   // page.matchPath is a special key that's used for matching pages
//   // only on the client.
//   if (page.path.match(/^\/work/)) {
//
//     const pagePath = page.path;
//     const pathParts = page.path.split('/');
//     const slug = pathParts.pop()
//     // Update the page.
//     createPage({
//       ...page,
//       matchPath: "/work/*",
//       // component: path.join(__dirname, 'src/pages/work.js'),
//       context: {
//         page,
//         slug,
//         pathParts,
//         pagePath
//       }
//     })
//   }
// }
