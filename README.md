# Anil Kumar – Portfolio Website

A responsive portfolio built with plain HTML, CSS and JavaScript. No build step, so it works directly on GitHub Pages.

## Folder structure
```
portfolio/
├── index.html
├── css/style.css
├── js/script.js          <- all your content is at the top (PORTFOLIO_DATA)
├── assets/
│   ├── images/           <- profile.jpg, project1.jpg, project2.jpg
│   ├── certificates/     <- certificate files (PDF / image)
│   └── documents/resume.pdf
└── README.md
```

## Update your content
Open `js/script.js` and edit the `PORTFOLIO_DATA` block at the top:
- **Technologies:** fill the `technologies: []` list of each project.
- **GitHub link:** your profile link is already set in the `github` value near the top. Clear it to hide the GitHub card.
- **Certificates:** put the file in `assets/certificates/` and set its `link` and `year` in `certifications`. CCC, BCA and Directorate of Training & Employment have no file yet.
- **Training / internship:** add entries to `training`. The section stays hidden while the list is empty.
- **Project links:** add `demo` or `github` URLs. Empty links are not shown.

## Replace images and resume
- Profile photo: `assets/images/profile.jpg`
- Project images: `assets/images/project1.jpg`, `assets/images/project2.jpg`
- Resume: replace `assets/documents/resume.pdf` (keep the same file name)

If an image is missing, the site shows initials or a coloured placeholder instead.

## Deploy on GitHub Pages
1. Create a new GitHub repository (for example `portfolio`).
2. Upload the **contents** of this folder (so `index.html` is at the repository root).
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then **Save**.
5. After a minute your site is live at `https://<your-username>.github.io/<repo-name>/`.

## Test locally
Open `index.html` in a browser. Everything uses relative paths.
