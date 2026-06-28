# Hosting and Deployment Plan

Document Status: Draft  
Prepared On: 2026-06-28  
Project: Math Tutor Web Application

## 1. Hosting Goal

The hosting goal is to deploy the project using free or low-cost services while keeping the site fast, reliable, and suitable for future AdSense monetization.

## 2. Important Hosting Constraint

Not every free host is suitable for a monetized website. A free plan may be technically capable but restricted by terms or acceptable use rules.

Vercel Hobby is not recommended as the primary host for an AdSense site because its current documentation states that Hobby is for non-commercial personal use. Since AdSense is a commercial monetization strategy, the project should use another host or upgrade if Vercel is required.

GitHub Pages is useful for static sites, project pages, and documentation. However, GitHub states that Pages is not intended as free hosting for running an online business, e-commerce site, or other site primarily directed at commercial activity. For this project, GitHub should be used as the source repository, while hosting should be selected carefully.

## 3. Recommended Hosting Options

### 3.1 Primary Recommendation: Cloudflare Pages

Cloudflare Pages is a strong candidate for this project because:

- It has a free plan.
- It supports Git-based deployments.
- It supports custom domains.
- It has generous static site limits.
- It is suitable for fast global delivery.

This is the preferred initial host unless a later review identifies a policy conflict.

### 3.2 Alternative Recommendation: Netlify Free

Netlify Free is also a strong candidate because:

- It supports Git deployments.
- It supports custom domains with SSL.
- It supports static sites and modern frameworks.
- It provides deploy previews.

The project should monitor Netlify usage credits if traffic grows.

### 3.3 Not Recommended for Monetized MVP: Vercel Hobby

Vercel is technically excellent for Next.js, but the Hobby plan is restricted to non-commercial personal use. It can be used for private experiments, but not as the primary plan for a monetized AdSense production site unless the project upgrades to a suitable paid plan.

### 3.4 Limited Use: GitHub Pages

GitHub Pages can be used for:

- Documentation previews.
- Project demos.
- Static non-commercial pages.

It should not be the default production host if the site becomes primarily monetized.

## 4. Domain Strategy

A custom domain is strongly recommended for trust, SEO, and AdSense review.

The project can start on a free provider subdomain for development. Before applying for AdSense, it should move to a custom domain.

Expected domain requirements:

- Short and memorable.
- Relevant to math learning.
- Easy to spell.
- No trademark conflict.
- HTTPS enabled.

## 5. Deployment Workflow

Recommended deployment flow:

1. Code and content are committed to Git.
2. Changes are pushed to GitHub.
3. Cloudflare Pages or Netlify detects the change.
4. The site is built.
5. Preview deployment is created for pull requests.
6. Production deployment is created when `main` is updated.

## 6. Build Configuration

For the dependency-free static MVP, deployment does not require a build command. The host can publish the repository root.

For a future Next.js static-first application, the deployment should use:

```text
npm install
npm run build
```

If the site uses static export, the output folder must match the selected hosting provider configuration.

## 7. Production Readiness Checklist

Before public launch:

- GitHub repository created.
- Hosting provider connected to GitHub.
- Production branch selected.
- Build command configured.
- Custom domain connected.
- HTTPS enabled.
- Sitemap generated.
- Robots file configured.
- Policy pages published.
- Analytics configured.
- Search Console configured.

## 8. References

- GitHub Pages overview: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- GitHub Pages limits: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- Vercel Hobby plan: https://vercel.com/docs/plans/hobby
- Cloudflare Pages limits: https://developers.cloudflare.com/pages/platform/limits/
- Netlify pricing: https://www.netlify.com/pricing/
