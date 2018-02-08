At **[Develexe]** we use **[ESLint]** along with **[babel-eslint]** and common configuration **.eslintrc** file to enforce code quality and code style consistency among all developers. Mentioned **.eslintrc** file should be included into Develexe's JavaScript projects that are subject to follow convention.

**Prerequisites:**
1. Make sure **Node.js** and **npm** are installed on your computer. If not, research online how to do it.
2. Make sure that **ESLint** plugin / package is installed for your code editor. If not, research online "your_text_editor_name eslint plugin" and follow the instructions how to do it.

**Installation:**

`cd` into the root folder of your project.
Install **ESLint** and **babel-eslint** as described at **[babel-eslint]**:

```sh
$ npm install eslint@3.x babel-eslint@7 --save-dev
```

Then copy **.eslintrc** file from this repository to the root folder of your project.

Don't forget to restart code editor to make sure changes are taking power.

*One way to check configuration works, is to download this repository, do the steps described above and open **trying-linter.js** file to make sure linter highlighting errors and warnings right.*

[Develexe]: <https://develexe.com>
[ESLint]: <https://eslint.org/>
[babel-eslint]: <https://www.npmjs.com/package/babel-eslint>
