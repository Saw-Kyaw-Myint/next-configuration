# Metateam SMART WORLD

## VSCode Settings

Install the following VSCode extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Project settings are located in /.vscode/settings.json. Disable auto-format and enable the 'format on save' setting. Code formatting will still be performed automatically when the file is saved.

## Local environment setup

Navigate to the project folder:

```
$ cd xxxxx
```

### Docker setup

```bash
$ docker-compose build
$ docker-compose up -d
```

Node (npm) operations are performed from the `metateam-smart-world_node` container.

#### Connect to `metateam-smart-world_node` container

```bash
$ docker exec -it metateam-smart-world_node bash
```

### Installing Packages

Run the following command in the `metateam-smart-world_node` container to install packages.

```bash
$ npm i or npm ci
```

## Development Operations

### Starting the Container

```bash
$ docker-compose up -d
```

### Stopping the Container

```bash
$ docker-compose down
```

### Starting the Development Server

Run the following command in the `metateam-smart-world_node` container to start the development server ([http://localhost:3000](http://localhost:3000)).

```bash
$ npm run dev
```

### Building the Application

Run the following command in the `metateam-smart-world_node` container to build the application.

```bash
$ npm run build
```

## Pre-Commit Setup:

Enter Project Folder.

Copy the pre-commit hook script to the Git hooks directory:

```
$ cp pre-commit .git/hooks/pre-commit
```

---

## Steps to Run Before Each Git Commit

Run ESLint to check code quality.:

```
$ npm run lint:fix
```

Run Prettier to check code style:

```
$ npm run format
```
