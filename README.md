# Jekyll Portfolio Website

This is a Jekyll-powered portfolio website generated from your CV.

## Getting Started

### Prerequisites

- Ruby
- Bundler

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jmrashed/jmrashed.github.io.git
   cd jmrashed.github.io
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

### Running Locally

To serve the site locally, run:

```bash
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`.

## Deployment to GitHub Pages

This site is configured for GitHub Pages. To deploy:

1. Push your changes to the `main` (or `master`) branch of your GitHub repository.
2. Go to your repository's settings.
3. In the "Pages" section, select the `main` branch as the source and save.

GitHub Pages will automatically build and deploy your site.

## Customization

- **Content:** Edit the markdown files in the root directory and the `about`, `skills`, `experience`, `projects`, `education`, and `contact` directories to update the content.
- **Styling:** Add your custom styles to `assets/css/style.scss`.
- **Configuration:** Update `_config.yml` to change site settings, navigation, and theme.
- **CV:** To update the downloadable CV, replace the `assets/CV.pdf` file with your new CV.
