# Git Workflow

## Before Starting Work

Always update the project:

```bash
git pull origin main
```

or from the development branch:

```bash
git pull origin development
```

---

## Creating a Feature Branch

Example:

```bash
git checkout -b feature/navbar
```

---

## Saving Changes

```bash
git add .
git commit -m "Describe completed feature"
git push
```

---

## Commit Guidelines

Commits should describe completed features.

Good examples:

```
Create responsive navigation bar
Implement resource card component
Add user authentication pages
Connect frontend with backend API
```

Avoid:

```
Update files
Fix stuff
Changes
```

---

# Current Repository Structure

```
univault/

├── frontend/
│   ├── src/
│   ├── package.json
│   └── vite.config.js
│
├── docs/
│
├── README.md
└── .gitignore
```

---

# Important Notes

* Do not commit `node_modules`.
* Always pull before starting work.
* Create branches for new features.
* Keep commits small and meaningful.
* Document important decisions.

---
