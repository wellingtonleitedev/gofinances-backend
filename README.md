<h1 align="center">
    <img width="50%" alt="gofinances" src="https://github.com/wellingtonleitedev/gofinances/blob/master/src/assets/logo.svg" />
    <br><br>
</h1>

<h4 align="center">
  The backend from an application to manage your personal finances.
</h4>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/wellingtonleitedev/gofinances-backend.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/wellingtonleitedev/gofinances-backend.svg">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/wellingtonleitedev/gofinances-backend.svg">
  <a href="https://github.com/wellingtonleitedev/gofinances-backend/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/wellingtonleitedev/gofinances-backend.svg">
  </a>

  <a href="https://github.com/wellingtonleitedev/gofinances-backend/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/wellingtonleitedev/gofinances-backend.svg">
  </a>
  
  <!--<a href="https://app.codacy.com/manual/wellingtonleitedev/gofinances-backend?utm_source=github.com&utm_medium=referral&utm_content=wellingtonleitedev/gofinances-backend&utm_campaign=Badge_Grade_Dashboard">
    <img src="https://api.codacy.com/project/badge/Grade/2a1eec01a9db4cf1ad802051ca4b9ece"/>
  </a>-->

  <img alt="GitHub" src="https://img.shields.io/github/license/wellingtonleitedev/gofinances-backend.svg">
</p>

<p align="center">
  <a href="#rocket-technologies">
    <img align="center" src="https://img.shields.io/badge/Technologies-a5a5a5"/>
  </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">
    <img align="center" src="https://img.shields.io/badge/How_To_Use-a5a5a5"/>
  </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#bug-issues">
    <img align="center" src="https://img.shields.io/badge/Issues-a5a5a5"/>
  </a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">
    <img align="center" src="https://img.shields.io/badge/License-a5a5a5"/>
  </a>
</p>

<!--<h1 align="center">
  <img align="center" width="100%" src="https://github.com/wellingtonleitedev/gofinances/blob/master/src/assets/dashboard.png" alt="Screens Demo"/>
</h1>-->

<!--<h3 align="center">Video Demo on Loom.</h3>
<p align="center">
  <a href="https://www.loom.com/share/59246947e438438cafdf10740a3feda9">
    <img width="15%" src="https://i.pinimg.com/originals/51/c5/2c/51c52cb5156376f013275fa1f5753b7c.png" />
  </a>
</p>-->

## :hammer_and_wrench: Technologies

This project was developed at the [RocketSeat GoStack Bootcamp](https://rocketseat.com.br) with the following technologies [Node.js][nodejs] + [Express Framework][express], with [Typescript][ts].

Developed on [VS Code][vc] with [EditorConfig][vceditconfig], [ESLint][vceslint] and [Prettier][vcprettier]

## :information_source: How To Use

To clone and run this application, you can use [Git](https://git-scm.com), [Node.js v12.16.0][nodejs] or higher + [Yarn v1.22.0][yarn] or higher and [Docker](https://www.docker.com/) installed on your computer. On your command line:

```bash
# Clone this repository
$ git clone https://github.com/wellingtonleitedev/gofinances-backend

# Go into the repository
$ cd gofinances-backend

```

```bash
# Copy file from configure orm and feel free to update "password" and "database name".
$ cp ormconfig.example.json ormconfig.json

# After copying the example, make sure to fill the variables with new values in docker-compose file.
# Start Docker
$ docker-compose up -d

# Install dependencies
$ yarn install

# Run the application
$ yarn dev:server
```

**The [GoFinances Front-end](https://github.com/wellingtonleitedev/gofinances) repository.**

## :bug: Issues

If you find any problems, feel free to report us with the respective title and description in the [issues][repo-issues] section. If you already know a solution to this problem, fork it and contribute, it will be a pleasure to review your pull request!

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/wellingtonleitedev/gofinances-backend/blob/master/LICENSE) for more information.

---

Made by Wellington Leite 👨‍💻 [Take a look!](https://www.linkedin.com/in/wellington-leite/)

[nodejs]: https://nodejs.org/
[express]: https://expressjs.com/
[react]: https://reactjs.org/
[native]: https://reactnative.dev/
[ts]: https://www.typescriptlang.org/
[styled-components]: https://styled-components.com/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[vcprettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[repo-issues]: https://github.com/wellingtonleitedev/gofinances-backend/issues
