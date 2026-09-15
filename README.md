# 🚀 Git Automation & Contribution Graph Sandbox

![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green?logo=node.js)
![Git](https://img.shields.io/badge/Git-Automation-blue?logo=git)
![License](https://img.shields.io/badge/license-MIT-orange)

A lightweight sandbox project designed for learning, practicing, and automating Git operations using Node.js (`simple-git`, `moment`, `jsonfile`). This repository demonstrates programmatic Git workflows, custom timestamp manipulation, and automated commit scheduling.

---

## 📌 Features

- 🔄 **Git Automation with Node.js**: Leverages `simple-git` for programmatic staging, committing, and remote pushing.
- 📅 **Custom Date Backdating**: Automates ISO timestamp override (`--date`) to test commit history scheduling.
- 🎨 **Multi-tone Density Control**: Simulates natural development activity using random commit frequency distribution algorithms.
- 🛡️ **Streak & Contribution Patching**: Utility scripts to test commit date filling and contribution graph streak maintenance.

---

## 🛠️ Quick Start

### 1. Prerequisites
- **Node.js**: v18 or higher
- **Git**: Installed and configured (`git config --global user.name` & `user.email`)

### 2. Installation
```bash
git clone https://github.com/BennedictQuanTon/test.git
cd test
npm install
```

### 3. Project Structure

| File | Description |
| :--- | :--- |
| `index.js` | Core script for generating automated commits with multi-toned random distributions. |
| `add-specific-dates.js` | Utility script to patch commits for specific target dates. |
| `data.json` | Local JSON storage modified on each automated commit cycle. |

---

## 📖 Code Example

```javascript
import jsonfile from 'jsonfile';
import moment from 'moment';
import simpleGit from 'simple-git';

const git = simpleGit();
const FILE_PATH = './data.json';

// Programmatically create a commit with a custom timestamp
async function createCustomCommit(dateString) {
    const data = { date: dateString, updated: new Date().toISOString() };
    await jsonfile.writeFile(FILE_PATH, data);
    await git.add([FILE_PATH]).commit(`Commit for ${dateString}`, { '--date': dateString });
    await git.push('origin', 'main');
}
```

---

## ⚠️ Important Notes

- **Private Repositories**: Enable **"Show Private contributions"** in your GitHub Profile settings to render contributions on your public graph.
- **Public Repositories**: All commits pushed to default branches are automatically indexed as public contributions.
- **Git Credentials**: Ensure your local `git config user.email` matches an email registered to your GitHub account for contributions to be attributed correctly.

---

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.
