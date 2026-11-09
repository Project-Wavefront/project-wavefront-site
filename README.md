<h1 align='center'>Guide to Running Website in Development Mode</h1>
This is a guide used to get the code running locally from the ground up. There may be some technical jargon, but I will try to explain everything as simply as possible. If you have any questions, please reach out to me at lanceforresth@gmail.com.

## Setting Up Code Environment

Here are instructions to set up the code environment on your local device. If you already have the environment set up, you can skip to the next section. Everything in here should only have to be done once.

1. Install Homebrew onto your local device. This is essentially a package manager that will help you install other necessary programs. You can find the installation instructions [here](https://brew.sh/). The gist of the installation is to run the following command in your terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. Install Git. This is a version control system that will allow you to download the code from GitHub and manage any changes you make. You can install Git using Homebrew by running the following command in your terminal:

```bash
brew install git
```

3. Install Node.js and npm. Node.js is a JavaScript runtime that allows you to run JavaScript code outside of a web browser. npm is a package manager for JavaScript that comes with Node.js. You can install both Node.js and npm using Homebrew by running the following command in your terminal:

```bash
brew install node
```

4. Install a code editor. I recommend using Visual Studio Code (VS Code) as it is free and has a lot of useful features for web development. You can download it from [here](https://code.visualstudio.com/).

This should be everything you need to set up the environment for coding/running the website locally.

## Obtaining the Code Locally

Here are instructions to obtain the code from GitHub and get it running on your local device. This should only need to be done once.

1. Open your terminal and navigate to the directory where you want to clone the repository. By default, opening a terminal puts you in the home directory `~`. You can navigate to a different directory using the `cd` command. For example, to navigate to the Documents folder, you would run: `cd Documents`. Typically, development is done in the `Documents/Github` folder, so you may want to navigate there or create the folder if it doesn't exist.
2. Clone the repository by running the following command in your terminal (note REPOSITORY_URL is obtained from the green "Code" button on the GitHub repository page):

```bash
git clone [REPOSITORY_URL]
```

3. Finally, you should notice that a new folder has been created in your current directory with the name of the repository.

## Running the Code Locally

Here are instructions to run the code locally on your device. This will need to be done every time you want to run the code.

1. Open VSCode, and open the folder that was created when you cloned the repository. This should be an option on the homepage of VSCode, or you can go to File > Open Folder and navigate to the folder.
2. Open a terminal in VSCode by going to View > Terminal. This will open a terminal at the bottom of the VSCode window.
3. In the terminal, make sure you are in the root directory of the repository. You can check this by running the `ls` command, which will list the files and folders in the current directory. You should see files like `package.json` and folders like `src`.
4. Run `git pull` in the terminal to make sure that you have the most updated version of the code.
5. Install the necessary dependencies by running the following command in the terminal:

```bash
npm i
```

6. Finally, run the development server by running the following command in the terminal:

```bash
npm run dev
```

7. You should see a message in the terminal that says something like "Local: http://localhost:3000". Open this URL in your web browser to see the website running locally.

Congratulations, you have officially run a development server for the website! You can now make changes to the code and see them reflected in the browser in real-time. To stop the development server, simply go back to the terminal and press `Ctrl + C`.

## Application form email delivery

The Join Us form at `/contact` sends each application and resume to `contact@projectwavefront.org` through Resend. It sends from `Project Wavefront <applications@mail.projectwavefront.org>` and sets Reply-To to the applicant's email.

1. In Resend, add `mail.projectwavefront.org` as a **sending** domain. Add the DNS records Resend shows at the DNS provider for `projectwavefront.org`, then wait until Resend marks sending as verified. This does not change where `contact@projectwavefront.org` receives mail.
2. In Resend, create an API key with **Sending access** for that domain.
3. For local testing, copy `.env.example` to `.env.local` and put the key after `RESEND_API_KEY=`. Restart `npm run dev` and submit one test application with a small PDF resume.
4. For the public website, add `RESEND_API_KEY` to the hosting provider's server environment and redeploy. Test the public form and check the message and attachment in both Resend's Emails page and the contact inbox.

Keep the key out of source control and browser code. The form returns an error if email delivery is not configured or Resend rejects the message.
