# DEEP - Learning Backend Development

Welcome to **DEEP - learning backend development**, a beginner-friendly repository that serves as your gateway to understanding essential concepts in backend development. Whether you're new to the world of backend or looking to reinforce your knowledge, this guide will provide you with a solid foundation.

## Table of Contents
- [DEEP - Learning Backend Development](#deep---learning-backend-development)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [1. Fork and Follow this Repository](#1-fork-and-follow-this-repository)
    - [2. Install Git](#2-install-git)
    - [3. Install Visual Studio Code](#3-install-visual-studio-code)
    - [4. Install Postman](#4-install-postman)
    - [5. Install Node.js](#5-install-nodejs)
    - [6. Install pnpm](#6-install-pnpm)
    - [7. Start up the project](#7-start-up-the-project)
  - [Introduction](#introduction)
  - [What is Backend Development?](#what-is-backend-development)
  - [Understanding APIs](#understanding-apis)
  - [HTTP Requests](#http-requests)
  - [Getting Started with Express.js](#getting-started-with-expressjs)
  - [Middleware Explained](#middleware-explained)
  - [Routing in Express](#routing-in-express)
  
## Getting Started

**Follow these steps to get started with DEEP - learning backend development**

<details><summary>Getting Started</summary>

### 1. Fork and Follow this Repository

First, fork the LearningSimpleBackend repository by clicking the "Fork" button at the top right of this page. This will create a copy of the repository in your GitHub account, allowing you to make changes and experiment freely.

**Pro Tip:** Don't forget to hit the "Follow" button on the [Duran Enterprise GitHub profile](https://github.com/Duran-Enterprise) to stay updated with the latest project developments and updates.

### 2. Install Git
<details><summary>Git Installation</summary>

Git is a version control system that allows you to track changes in your code and collaborate with others. Follow these steps to install Git on your computer:

1. **Download Git:**

   - **For Windows:** Visit the official Git for Windows website at [https://gitforwindows.org/](https://gitforwindows.org/) and download the installer. Run the installer and follow the on-screen instructions.

   - **For macOS:** macOS usually comes with Git pre-installed. You can open the Terminal and run `git --version` to check if Git is already installed. If it's not installed, you can download the latest version from [https://git-scm.com/download/mac](https://git-scm.com/download/mac).

   - **For Linux (Ubuntu/Debian):** Open your terminal and run the following command to install Git:

     ```shell
     sudo apt-get install git
     ```

   - **For Linux (Fedora):** Open your terminal and run the following command to install Git:

     ```shell
     sudo dnf install git
     ```

2. **Configure Git:**

   After installing Git, you should configure it with your name and email address. Open your terminal and run the following commands, replacing `Your Name` and `your.email@example.com` with your name and email:

   ```shell
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```
3. Verify Installation:

    To verify that Git is installed correctly, open your terminal and run the following command:
    ```sh
    git --version
    ```
    This command should display the installed Git version.


</details>

### 3. Install Visual Studio Code

<details><summary>VS Code Installation</summary>
If you haven't already, install [Visual Studio Code (VSCode)](https://code.visualstudio.com/), a popular and powerful code editor. It's highly recommended for web development.

</details>

### 4. Install Postman

<details><summary>Postman Installation</summary>

Postman is a handy tool for testing APIs, which you'll be doing a lot in backend development. Install the [Postman Desktop Application](https://www.postman.com/downloads/) or [Postman Extension](https://marketplace.visualstudio.com/items?itemName=Postman.postman-for-vscode) for VSCode to make API testing more convenient.

</details>

### 5. Install Node.js

<details><summary>NodeJS Installation</summary>

 We recommend using the **LTS** (Long-Term Support) version for stability. As of this guide, version 18.18.0 LTS is available.

Follow these steps to install Node.js:

1. **Download Node.js:** Visit the official Node.js website at [https://nodejs.org/](https://nodejs.org/). You'll see two options: LTS and Current. Choose the LTS version.

2. **Choose Your Operating System:** On the Node.js downloads page, you'll find installers for various operating systems. Select the installer that matches your operating system (e.g., Windows, macOS, or Linux).

3. **Run the Installer:** Once the installer is downloaded, run it on your computer. Follow the on-screen instructions to install Node.js. During installation, you can choose to include npm (Node Package Manager), which is essential for managing Node.js packages.

4. **Verify Installation:** After the installation is complete, open your terminal (command prompt on Windows) and run the following commands to verify that Node.js and npm are installed:

   ```shell
   node -v
   ```
    This command should display the installed Node.js version (e.g., v18.18.0).

</details>

### 6. Install pnpm

<details><summary>pnpm Installation</summary>

In addition to Node.js, we recommend using **pnpm** as your package manager for this project. pnpm is an alternative to npm and yarn, and it offers some advantages like faster installations and efficient disk space usage.

Follow these steps to install pnpm:

1. **Open your terminal:** If it's not already open from the previous Node.js installation steps, open your terminal (command prompt on Windows).

2. **Install pnpm:** Run the following command to install pnpm globally on your system:

   ```shell
   npm install -g pnpm
   ```
   This command will download and install pnpm from the npm registry.

3. **Verify Installation**: After the installation is complete, run the following command to verify that pnpm is installed:
    ```shell
    pnpm -v
    ```
    This command should display the installed pnpm version (e.g., 8.8.0).

</details>

### 7. Start up the project

Now that you have Git, Node.js and pnpm installed, it's time to install the project dependencies specified in the `package.json` file.

Follow these steps to install the dependencies and start learning:

1. Navigate to your folder of choice.
2. Open terminal and clone this repository.
    ```sh
    git clone https://github.com/Duran-Enterprise/activity-basic-backend
    ```
3. Install project dependencies by running the following command:
   ```sh
   pnpm install
   ```
4. Start the development server by running the following command:
    ```sh
    pnpm dev
    ```
</details>


## Introduction

<details><summary>Introduction</summary>

Backend development is the art of building server-side components of a web application. It involves handling data, managing databases, and ensuring the smooth communication between the frontend and the server.

This repository is designed to help you grasp the fundamental concepts of backend development, starting from the ground up.

</details>

## What is Backend Development?


<details><summary>Backend Development</summary>


In the context of web development, the **backend** refers to the server-side of an application. It's responsible for processing requests from the frontend, handling data, and interacting with databases.

</details>

## Understanding APIs

<details><summary>Understanding APIs</summary>

**API (Application Programming Interface)** defines how different software components should interact. In web development, an API is a set of rules and protocols that allow the frontend to communicate with the backend.

</details>


## HTTP Requests

<details><summary>HTTP Requests</summary>

HTTP (Hypertext Transfer Protocol) is the foundation of data communication on the web. Learn about the different types of HTTP requests:
- **GET**: Retrieve data from the server.
- **POST**: Send data to the server.
- **PUT**: Update existing data on the server.
- **DELETE**: Remove data from the server.

</details>

## Getting Started with Express.js

<details><summary>Getting Started with Express.js</summary>

**Express.js** is a popular Node.js framework for building web applications. It simplifies the process of creating APIs and handling routes.

```javascript
import express from 'express'
const app = express();
const port = 3222;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`\x1b[32m⚡️[server]\x1b[0m: Server is running at http://localhost:${port}`);
});
```

</details>

## Middleware Explained

<details><summary>Middlewares</summary>

**Middleware** functions are the heart of Express. They can perform tasks like authentication, logging, and data manipulation before the final request handler is executed.

```js
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(authMiddleware); // Custom authentication middleware
```

</details>

## Routing in Express

<details><summary>Express Routing</summary>

**Routing** involves defining how your application responds to client requests. Express provides a simple way to create routes for various endpoints.
```js
app.get('/users', (req, res) => {
  // Handle GET request for the /users endpoint
});
```

</details>
