# 🚀 AIDE - An AI-powered search engine 🔎 <!-- omit in toc -->

## Table of Contents <!-- omit in toc -->

- [Overview](#overview)
- [Preview](#preview)
- [Features](#features)
- [Installation](#installation)
  - [Getting Started with Docker (Recommended)](#getting-started-with-docker-recommended)
  - [Non-Docker Installation](#non-docker-installation)
  - [Ollama connection errors](#ollama-connection-errors)
- [Using as a Search Engine](#using-as-a-search-engine)
- [One-Click Deployment](#one-click-deployment)
- [Upcoming Features](#upcoming-features)
- [Support Us](#support-us)
  - [Donations](#donations)
- [Contribution](#contribution)
- [Help and Support](#help-and-support)

## Overview

AIDE is an open-source AI-powered searching tool or an AI-powered search engine that goes deep into the internet to find answers. Inspired by Perplexity AI, it's an open-source option that not just searches the web but understands your questions. It uses advanced machine learning algorithms like similarity searching and embeddings to refine results and provides clear answers with sources cited.

Using SearxNG to stay current and fully open source, AIDE-CDSS ensures you always get the most up-to-date information without compromising your privacy.

Want to know more about its architecture and how it works? You can read it [here](https://github.com/docmode-health/AIDE-CDSS/tree/master/docs/architecture/README.md).

## Preview

## Features

- **Local LLMs**: You can make use local LLMs such as Llama3 and Mixtral using Ollama.
- **Two Main Modes:**
  - **Copilot Mode:** (In development) Boosts search by generating different queries to find more relevant internet sources. Like normal search instead of just using the context by SearxNG, it visits the top matches and tries to find relevant sources to the user's query directly from the page.
  - **Normal Mode:** Processes your query and performs a web search.
- **Focus Modes:** Special modes to better answer specific types of questions. AIDE-CDSS currently has 6 focus modes:
  - **All Mode:** Searches the entire web to find the best results.
  - **Writing Assistant Mode:** Helpful for writing tasks that does not require searching the web.
  - **Academic Search Mode:** Finds articles and papers, ideal for academic research.
  - **YouTube Search Mode:** Finds YouTube videos based on the search query.
  - **Wolfram Alpha Search Mode:** Answers queries that need calculations or data analysis using Wolfram Alpha.
  - **DOI Search Mode:** Searches Reddit for discussions and opinions related to the query.
- **Current Information:** Some search tools might give you outdated info because they use data from crawling bots and convert them into embeddings and store them in a index. Unlike them, AIDE-CDSS uses SearxNG, a metasearch engine to get the results and rerank and get the most relevant source out of it, ensuring you always get the latest information without the overhead of daily data updates.

It has many more features like image and video search. Some of the planned features are mentioned in [upcoming features](#upcoming-features).

## Installation

There are mainly 2 ways of installing AIDE-CDSS - With Docker, Without Docker. Using Docker is highly recommended.

### Getting Started with Docker (Recommended)

1. Ensure Docker is installed and running on your system.
2. Clone the AIDE-CDSS repository:

   ```bash
   git clone https://github.com/docmode-health/AIDE-CDSS.git
   ```

3. After cloning, navigate to the directory containing the project files.

4. Rename the `sample.config.toml` file to `config.toml`. For Docker setups, you need only fill in the following fields:

   - `OPENAI`: Your OpenAI API key. **You only need to fill this if you wish to use OpenAI's models**.
   - `OLLAMA`: Your Ollama API URL. You should enter it as `http://host.docker.internal:PORT_NUMBER`. If you installed Ollama on port 11434, use `http://host.docker.internal:11434`. For other ports, adjust accordingly. **You need to fill this if you wish to use Ollama's models instead of OpenAI's**.
   - `GROQ`: Your Groq API key. **You only need to fill this if you wish to use Groq's hosted models**

     **Note**: You can change these after starting AIDE-CDSS from the settings dialog.

   - `SIMILARITY_MEASURE`: The similarity measure to use (This is filled by default; you can leave it as is if you are unsure about it.)

5. Ensure you are in the directory containing the `docker-compose.yaml` file and execute:

   ```bash
   docker compose up -d
   ```

6. Wait a few minutes for the setup to complete. You can access AIDE-CDSS at http://localhost:3000 in your web browser.

**Note**: After the containers are built, you can start AIDE-CDSS directly from Docker without having to open a terminal.

### Non-Docker Installation

1. Clone the repository and rename the `sample.config.toml` file to `config.toml` in the root directory. Ensure you complete all required fields in this file.
2. Rename the `.env.example` file to `.env` in the `ui` folder and fill in all necessary fields.
3. After populating the configuration and environment files, run `npm i` in both the `ui` folder and the root directory.
4. Install the dependencies and then execute `npm run build` in both the `ui` folder and the root directory.
5. Finally, start both the frontend and the backend by running `npm run start` in both the `ui` folder and the root directory.

**Note**: Using Docker is recommended as it simplifies the setup process, especially for managing environment variables and dependencies.

See the [installation documentation](https://github.com/docmode-health/AIDE-CDSS/tree/master/docs/installation) for more information like exposing it your network, etc.

### Ollama connection errors

If you're facing an Ollama connection error, it is often related to the backend not being able to connect to Ollama's API. How can you fix it? You can fix it by updating your Ollama API URL in the settings menu to the following:

On Windows: `http://host.docker.internal:11434`<br>
On Mac: `http://host.docker.internal:11434`<br>
On Linux: `http://private_ip_of_computer_hosting_ollama:11434`

You need to edit the ports accordingly.

## Using as a Search Engine

If you wish to use AIDE-CDSS as an alternative to traditional search engines like Google or Bing, or if you want to add a shortcut for quick access from your browser's search bar, follow these steps:

1. Open your browser's settings.
2. Navigate to the 'Search Engines' section.
3. Add a new site search with the following URL: `http://localhost:3000/?q=%s`. Replace `localhost` with your IP address or domain name, and `3000` with the port number if AIDE-CDSS is not hosted locally.
4. Click the add button. Now, you can use AIDE-CDSS directly from your browser's search bar.


## Upcoming Features

- [ ] Finalizing Copilot Mode
- [x] Add settings page
- [x] Adding support for local LLMs
- [ ] Adding Discover and History Saving features
- [x] Introducing various Focus Modes

## Support Us

If you find AIDE-CDSS useful, consider giving us a star on GitHub. This helps more people discover AIDE-CDSS and supports the development of new features. Your support is greatly appreciated.

## Contribution

AIDE-CDSS is built on the idea that AI and large language models should be easy for everyone to use. If you find bugs or have ideas, please share them in via GitHub Issues. For more information on contributing to AIDE-CDSS you can read the [CONTRIBUTING.md](CONTRIBUTING.md) file to learn more about AIDE-CDSS and how you can contribute to it.

## Help and Support

If you have any questions or feedback, please feel free to reach out to us. You can create an issue on GitHub. There, you can connect with other users, share your experiences and reviews, and receive more personalized help.

Thank you for exploring AIDE-CDSS, the AI-powered search engine designed to enhance your search experience. We are constantly working to improve AIDE-CDSS and expand its capabilities. We value your feedback and contributions which help us make AIDE-CDSS even better. Don't forget to check back for updates and new features!
