# 🚀 Git Automation & Contribution Graph Sandbox

![Node.js](https://img.shields.io/badge/Node.js-v18%2B-green?logo=node.js)
![Git](https://img.shields.io/badge/Git-Automation-blue?logo=git)
![License](https://img.shields.io/badge/license-MIT-orange)

Một dự án mẫu dùng để học tập, thực hành và tự động hóa các thao tác Git bằng Node.js (`simple-git`, `moment`, `jsonfile`). Dự án giúp tìm hiểu cơ chế hoạt động của Git commit, quản lý lịch sử và thử nghiệm hiển thị trên GitHub Contribution Graph.

---

## 📌 Tính năng chính (Features)

- 🔄 **Git Automation với Node.js**: Sử dụng thư viện `simple-git` để tự động tạo commit, staging và push dữ liệu lập trình.
- 📅 **Custom Date Backdating**: Tự động hóa việc điều chỉnh mốc thời gian ISO (`--date`) của commit về các khoảng thời gian tùy chọn.
- 🎨 **Multi-tone Density Control**: Mô phỏng hoạt động đóng góp lập trình tự nhiên với các thuật toán phân bổ mật độ commit ngẫu nhiên.
- 🛡️ **Streak & Contribution Patching**: Công cụ nhỏ giúp thử nghiệm bù đắp mốc thời gian commit cho các khoảng thời gian bị ngắt quãng.

---

## 🛠️ Hướng dẫn cài đặt & Sử dụng (Quick Start)

### 1. Yêu cầu hệ thống
- **Node.js**: v18 trở lên
- **Git**: Đã cấu hình trên máy tính (`git config --global user.name` & `user.email`)

### 2. Cài đặt Dependencies
```bash
git clone https://github.com/BennedictQuanTon/test.git
cd test
npm install
```

### 3. Các Script chính

| File | Mô tả |
| :--- | :--- |
| `index.js` | Mã nguồn chính chạy tự động hóa tạo commit theo thuật toán ngẫu nhiên. |
| `add-specific-dates.js` | Script hỗ trợ bù commit cho các mốc thời gian chỉ định. |
| `data.json` | File JSON trung gian ghi nhận thông tin từng commit. |

---

## 📖 Ví dụ Code cơ bản (Code Snippet)

```javascript
import jsonfile from 'jsonfile';
import moment from 'moment';
import simpleGit from 'simple-git';

const git = simpleGit();
const FILE_PATH = './data.json';

// Tạo commit với mốc thời gian tùy chọn
async function createCustomCommit(dateString) {
    const data = { date: dateString, updated: new Date().toISOString() };
    await jsonfile.writeFile(FILE_PATH, data);
    await git.add([FILE_PATH]).commit(`Commit for ${dateString}`, { '--date': dateString });
    await git.push('origin', 'main');
}
```

---

## ⚠️ Lưu ý khi thực hành (Important Notes)

- Khi sử dụng với repository **Private**, cần bật tùy chọn **"Show Private contributions"** trong phần cài đặt Contribution Graph trên profile GitHub.
- Khi sử dụng với repository **Public**, các đóng góp sẽ tự động hiển thị công khai trên Profile của bạn.
- Đảm bảo Email cấu hình trong Git local khớp với Email đăng ký trên tài khoản GitHub của bạn để đóng góp được tính chính xác.

---

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.
