<img src="src/images/logo/logo-dark.png" width="144" height="144">

# **Marek Matejovic: Professional front-end developer and designer**

This project is powered by **Gatsby** and is created for a personal use.

Created with **WordPress Rest API**.

<br>

![](screenshot.png)

<br>

## Installation

Use these commands to install the dependencies and start the server.

1. **Clone from Github**

   ```
   $ git clone git@github.com:devmaroy/marek-matejovic-portfolio_cu_pe_ga_wpapi.git
   ```

2. **Install dependencies**
   ```
   $ yarn install / npm install
   ```
3. **Navigate into your directory where you cloned repository**

   ```
   $ cd my-folder
   ```

5. **Add license for Font Awesome PRO**

   Add the environment variable to your .bashrc or other startup shell file
   using terminal.

   ```
   export FA_NPM_TOKEN=my_token_goes_here_foo_bar
   ```
   
6. **Add WP API URL for fetching dynamic data**

   Add the environment variable.

   ```
   GATSBY_API_URL=wp_api_url_goes_here_foo_bar
   ```

7. **Add Algolia Search for searching data**

   Add the environment variables.

   ```
   GATSBY_ALGOLIA_APP_ID=algolia_app_id
   GATSBY_ALGOLIA_API_KEY=algolia_api_key
   GATSBY_ALGOLIA_INDEX_NAME=algolia_index_name
   ```

8. **Start it up** `$ gatsby develop` <br>

**Your site is now running at `http://localhost:8000`!**

<br>

## Structure

A quick look at the top-level files and directories you'll see in my project.

    .
    ├── node_modules
    ├── src
    ├── .env.development
    ├── .env.example
    ├── .eslintignore
    ├── .eslintrc.js
    ├── .gitignore
    ├── .npmrc
    ├── .prettierignore
    ├── .prettierrc
    ├── .stylelintignore
    ├── .stylelintrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── lint-staged.config.js
    ├── package.json
    ├── package-lock.json
    ├── README.md
    ├── screenshot.png
    ├── yarn-error.log
    └── yarn.lock

<br>

1.  **`/node_modules`**: This directory contains all of the modules of code that
    project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you
    will see on the front-end of site (what you see in the browser) such as site
    header or a page template. `src` is a convention for “source code”.

3.  **`.env.development`**: Yours configuration for .env file.

4.  **`.env.example`**: Example configuration for .env file.

5.  **`.eslintignore`**: Configuration file for eslint - for files to ignore.

6.  **`.eslintrc.js`**: Configuration file for eslint.

7.  **`.gitignore`**: This file tells git which files it should not track / not
    maintain a version history for.

8.  **`.npmrc`**: This file is a configuration file for NPM, it defines the
    settings on how NPM should behave when running commands.

9.  **`.prettierignore`**: Configuration file for prettier - for files to
    ignore.

10. **`.prettierrc`**: Configuration file for prettier.

11. **`.stylelintignore`**: Configuration file for style lint - for files to
    ignore.

12. **`.stylelintrc`**: Configuration file for style lint.

13. **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage
    of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/)
    (if any). These allow customization/extension of default Gatsby settings
    affecting the browser.

14. **`gatsby-config.js`**: This is the main configuration file for a Gatsby
    site. This is where is information about site (metadata) like the site title
    and description, Gatsby plugins, etc. (Check out the
    [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more
    detail).

15. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of
    the Gatsby Node APIs (if any). These allow customization/extension of
    default Gatsby settings affecting pieces of the site build process.

16. **`lint-staged.config.js`**: Configuration file for lint staged.

17. **`package.json`**: A manifest file for Node.js projects, which includes
    things like metadata (the project’s name, author, etc). This manifest is how
    npm knows which packages to install for project.

18. **`package-lock.json`** (See `package.json` below, first). This is an
    automatically generated file based on the exact versions of npm dependencies
    that were installed for project. **(You won’t change this file directly).**

19. **`README.md`**: A text file containing useful reference information about
    project.

20. **`screenshot.png`**: Screenshot of the final website.

21. **`yarn-error.log`**: The whole point of it is that you read the log to find
    out what went wrong, and if you've not had any errors, it might not even
    exist at all.

22. **`yarn.lock`**: There is an identifier for every dependency and sub
    dependency that is used for a project.

<br>

<hr>

<br>

### Live example:

**[marekmatejovic.com](https://marekmatejovic.com)**
**[marekmatejovic.cz](https://marekmatejovic.cz)**
