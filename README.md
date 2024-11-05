# Picton
Sandbox Angular/Nestjs application using dev containers and pnpm for build management

## Prerequisites
### Windows PCs
1) Ensure HyperV is enabled both in BIOS and Windows
2) Install WSL2
3) Install Docker Desktop
4) Install Visual Studio Code
5) Add the Remote Development set of extensions to VS Code

### MacOS
TBD.

## Dev Container
The development environment will exist in a Docker container that can be used in any environment meeting the prerequisites above. Open the workspace folder in VS Code and create a dev container configuration file.


1) Add Dev Container Configuration Files: Nodejs & Javascript. Will add Typescript, Angular CLI, Nest CLI and pnpm as features.
2) Add the VS Code extensions to the dev container configuration file.
3) Open the repository as a container in VS Code.
4) Add the list of recommended extensions to the dev container configuration file. - see the devcontainer.json file in the .devcontainer folder for the extensions.
5) Update the name of the dev container in the devcontainer.json file.
6) Rebuild the dev container
8) Allow the angular dev server access to the host browser by adding the following to the project.json file in the omaka-client project at targets/serve/configurations/development section. And the same in the production section without the inspect option.
```json
          "inspect": "inspect",
          "host": "0.0.0.0",
          "port": 4200
```
At this stage you now have an dev container with a monorepos with an angular application and the necessary tools to start building the application.

## Repository
Create an empty repository in GitHub and push the local code to the repository.

```sh
git remote add origin https://github.com/greg98721/Picton.git
git push -u origin main
```
