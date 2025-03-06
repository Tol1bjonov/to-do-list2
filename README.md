# Simple To Do List

## 📌 Overview
This is a simple task management application built with **React (Class Components) and TypeScript**. The app allows users to **add, mark as completed, and delete tasks** while keeping the data in **localStorage**.

## 🛠 Features
- 📋 **Add Tasks**: Users can input a task description and a deadline.
- ✅ **Mark as Completed**: Users can toggle task completion status.
- ❌ **Delete Tasks**: Users can remove tasks from the list.
- 🔄 **Data Persistence**: Tasks are stored in localStorage, so they remain even after a page refresh.

## 📂 Project Structure
```
📦 task-manager
├── 📂 src
│   ├── 📄 App.tsx
│   ├── 📄 index.tsx
│   ├── 📂 components
│   │   ├── 📄 TaskManager.tsx  // Main component managing tasks
│   │   ├── 📄 TaskForm.tsx     // Form for adding new tasks
│   │   ├── 📄 TaskList.tsx     // Displays tasks and controls
│   ├── 📂 styles
│   ├── 📄 README.md
├── 📄 package.json
```

## 🚀 Installation & Setup

1️⃣ **Clone the Repository**
```bash
git clone https://github.com/Tol1bjonov/to-do-list2
cd to-do-list2
```

2️⃣ **Install Dependencies**
```bash
npm install
```

3️⃣ **Run the Project**
```bash
npm run dev
```

## 🔧 Technologies Used
- ⚛️ React (Class Components)
- 💻 TypeScript
- 🗄️ LocalStorage for data persistence

## 📌 How to Use
1. **Add a Task**: Enter a description and a deadline, then click "Qo‘shish".
2. **Mark as Completed**: Click the "Bajarildi" button to toggle completion.
3. **Delete a Task**: Click the ❌ button to remove a task.

## 📌 Future Improvements
- 🎨 Add a better UI design with CSS/Styled Components.
- 📅 Add filtering (e.g., show only completed or pending tasks).
- 🔔 Add notifications for upcoming deadlines.
