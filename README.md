# BONUS Lab 01 - LLM Dashboard 💡 

<img src="./main.jpg" alt="image of a girl typing on her keyboard" style="max-width: 500px; width: 100%;">

## Introduction

The AI landscape is evolving at an incredible pace. New Large Language Models (LLMs) are released constantly, each with different capabilities, pricing models, and context limits. As a developer or data professional, being able to compare and evaluate these tools is a critical skill.

In this lab, you will build the foundation of an **LLM Dashboard**: A webpage that presents structured information about the most relevant AI language models available today. You will practice creating semantic HTML, structuring content with headings, paragraphs, and tables, and researching real-world technical specifications.

This is **Part 1** of a multi-part series. In later labs, you will style and enhance this page with CSS and JavaScript.

<br>

## Learning Objectives

By the end of this lab, you will be able to:

- Create a valid HTML document with proper semantic structure
- Use headings, paragraphs, and tables to organise information
- Research and interpret technical specifications for AI models
- Present comparative data clearly in an HTML table

<br>

## Getting Started

### Fork the repository

1. Click the **Fork** button at the top right of this repository page on GitHub.
2. This will create a copy of the repo under your own GitHub account.

### Clone your fork

1. On your forked repository page, click the green **Code** button and copy the URL.
2. Open your terminal and run:

```bash
git clone <paste-the-url-here>
```

3. Navigate into the project folder:

```bash
cd 01-llm-dashboard
```

4. Open the folder in VS Code and start working on the lab.

<br>

## Part 1:  What is an LLM?

### Step 1:  Define Large Language Model

In a new `index.html`, create a section that explains what an LLM is.

Your definition should cover:

- What the acronym **LLM** stands for
- A brief explanation of how LLMs work (training on large datasets, predicting next tokens, etc.)
- At least **two real-world examples** of LLMs

Use a `<section>` tag with an `<h2>` heading titled **"What is an LLM?"**, followed by one or more `<p>` tags for the explanation.

<br>

### Step 2:  Define Token

Create a second section that explains the concept of a **token** in the context of LLMs.

Your definition should cover:

- What a token is (a chunk of text:  roughly 3-4 characters or ¾ of a word on average)
- Why tokens matter (they are the unit of measurement for context windows and pricing)
- A simple example, e.g. how the sentence _"Hello, world!"_ might be split into tokens
- Compare tokens in English vs tokens in Azerbaijani to see what consumes more

Use a `<section>` tag with an `<h2>` heading titled **"What is a Token?"**, followed by `<p>` tags for the explanation.

<br>

## Part 2:  The Comparison Table

### Step 3:  Build the LLM Comparison Table

Create a third section with an `<h2>` heading titled **"LLM Comparison"**.

Inside this section, build an HTML `<table>` that compares **at least 5 LLMs**. The table must include the following columns:

| Model | Provider | Context Window | Input Price (per 1M tokens) | Output Price (per 1M tokens) | Reasoning |
|-------|----------|----------------|-----------------------------|------------------------------|-----------|
| ...   | ...      | ...            | ...                          | ...                          | ✓ / ✗    |

**Column definitions:**

- **Model**:  the name of the model (e.g. `GPT-4o`, `Claude 3.5 Sonnet`)
- **Provider**:  the company behind the model (e.g. OpenAI, Anthropic, Google)
- **Context Window**:  the maximum number of tokens the model can process in one request (e.g. `128K`, `1M`)
- **Input Price**:  cost in USD per 1 million input tokens
- **Output Price**:  cost in USD per 1 million output tokens
- **Reasoning**:  whether the model has an explicit reasoning/thinking mode (`✓` for yes, `✗` for no)

Use `<thead>` for the header row (with `<th>` tags) and `<tbody>` for the data rows (with `<tr>` and `<td>` tags).

**Suggested page to research**:

> You can find up-to-date pricing at the providers' official documentation pages or comparison sites like [artificialanalysis.ai](https://artificialanalysis.ai).

<br>

## HTML File Structure

Your `index.html` must include, at minimum, the following structure:

```
<!DOCTYPE html>
<html lang="en">
  <head> ... </head>
  <body>
    <header>
      <h1>LLM Dashboard</h1>
    </header>
    <nav> ... </nav>
    <main>
      <section id="what-is-llm"> ... </section>
      <section id="what-is-token"> ... </section>
      <section id="comparison"> ... </section>
    </main>
    <footer> ... </footer>
  </body>
</html>
```

<br>

## Bonus Challenges

- Add a `<caption>` tag to your table with a short description
- Add a `<footer>` with the sources you used to gather the model data

<br>

:heart: **Happy coding!** In the next lab, you will style this dashboard with CSS to make it look like a real product comparison page.
