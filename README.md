# OnMed.com

## 👀 Overview

| Tech       |                                                                                                            |
| ---------- | ---------------------------------------------------------------------------------------------------------- |
| Repository | https://github.com/onmeds4dc/onmed-gatsby                                                                  |
| CMS        | Wordpress                                                                                                  |
| Front End  | [React](https://react.dev/) and [Gatsby](https://www.gatsbyjs.com/)                                        |
| Deploys    | [Gatsby Cloud](https://www.gatsbyjs.com/dashboard/organization/ecde845d-1818-44f6-a363-1e51415ba69a/sites) |
| Fonts      | [Adobe](https://fonts.adobe.com/my_fonts#web_projects-section) (License: `dig7fyt`)                        |
| Paragraph  | Text                                                                                                       |

Note: CMS and public URLs are separate.

|                | CMS URL                                  | Production URL                    |
| -------------- | ---------------------------------------- | --------------------------------- |
| **Production** | https://onmed-cms.com/wp-admin/          | https://onmed.com/                |
| **Staging**    | https://staging2.onmed-cms.com/wp-admin/ | https://onmedstaging.gatsbyjs.io/ |

## 🚀 Quick start

```shell
git clone https://github.com/onmeds4dc/onmed-gatsby.git
```

```shell
cd onmed-gatsby
```

```shell
npm i
```

In the project root, add a `.env.development` file with these contents:

```shell
TYPEKIT_ID=dig7fyt
WPGRAPHQL_URL=https://onmedstaging.gatsbyjs.io/graphql/
```

-   `TYPEKIT_ID` tells Adobe we can use the font
-   `WPGRAPHQL_URL` tells our local environment to point to the staging CMS.

```shell
gatsby develop
```

Your site is now running at http://localhost:8000!

## ✏️ Edit Content

### News pages

**Wordpress**
Password: `tampa`

|                | CMS URL                                  | Production URL                    |
| -------------- | ---------------------------------------- | --------------------------------- |
| **Production** | https://onmed-cms.com/wp-admin/          | https://onmed.com/                |
| **Staging**    | https://staging2.onmed-cms.com/wp-admin/ | https://onmedstaging.gatsbyjs.io/ |

Changes in Wordpress are automatically deployed within minutes via Gatsby Cloud. [Monitor status here.](https://www.gatsbyjs.com/dashboard/organization/ecde845d-1818-44f6-a363-1e51415ba69a/sites)

### All other pages

**Gatsby/React**

|                       |               |
| --------------------- | ------------- |
| **Pages**             | `/src/pages/` |
| **Uncompiled files**  | `/src/`       |
| **Uncompiled assets** | `/static/`    |
| **Compiled**          | `/public/`    |

**Gatsby Resources**

-   [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
-   [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
-   [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
-   [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
-   [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
-   [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🛫 Deploys

Code changes pushed into a feature branch, will need a [pull request](https://github.com/onmeds4dc/onmed-gatsby/pulls) (that you can also approve) to be pulled it to `main` or `staging` branches.

Changes pushed into `main` or `staging` are automatically deployed within minutes via Gatsby Cloud. [Monitor status here.](https://www.gatsbyjs.com/dashboard/organization/ecde845d-1818-44f6-a363-1e51415ba69a/sites)

## 🔁 Redirects

`redirects.json`
