# React User Dashboard App

This final package contains three modular, fully functional implementations of the React Frontend Intern Assignment.

1. **starter/** — Minimal, correct implementation using React Context. *(Matches core requirements)*  
2. **enhanced/** — Adds form validation, pagination, dark-mode toggle, and geo-map integration (via `react-leaflet`).  
3. **redux/** — Uses Redux Toolkit for global state management, API fetching, and better scalability.

---

## ⚙️ How to Run the Project

- Choose the version you want to explore (`starter`, `enhanced`, or `redux`).
- Open a terminal and navigate into that folder:
  ```bash
  cd redux
  ```
- Install dependencies and start the development server:
  ```bash
  npm install
  npm run dev
  ```
- Open the local URL shown in the terminal (usually **http://localhost:5173/**).

Each folder runs independently with its own dependencies and configurations.

---

## 🧩 Key Notes & Dependencies

- The **Enhanced** version uses `react-leaflet` and `leaflet` for map rendering.  
- The **Create New User** feature is client-side only (no backend persistence).  
- Each version (`starter`, `enhanced`, and `redux`) is self-contained and can be run separately.

---

## 📸 Screenshots

The following screenshots illustrate the core user interface across different implementations:

### Dashboard View  
![Dashboard](./screenshots/dashboard.png)

### User Details View  
![User Details](./screenshots/details.png)

These visuals represent the main dashboard with user cards and the detailed user view featuring contact information and an interactive map.

---

## 🧭 Commit History Overview

The project was developed in structured stages to maintain clarity and version control hygiene:

1. `chore: initialize project with vite and dependencies`
2. `feat: setup Context API and fetch users`
3. `feat: design dashboard UI with user cards`
4. `feat: add user details page and routing`
5. `feat: implement user creation form`
6. `style: improve responsiveness and layout`
7. `docs: add README and documentation`
8. `feat(enhanced): integrate pagination, form validation, dark mode, and map`
9. `feat(redux): migrate to Redux Toolkit and API fetching`
10. `fix: improve route persistence and map rendering`

---

## 💡 Project Highlights

- Clean and modular React architecture  
- Effective use of Hooks (`useState`, `useEffect`, `useContext`, `useMemo`)  
- Data fetching from live REST API (JSONPlaceholder)  
- Routing via `react-router-dom`  
- Responsive UI using CSS Grid/Flexbox  
- Dark mode implementation via CSS variables  
- Global state management using Redux Toolkit  
- Fallback data handling for refreshed routes  
- Clear folder separation and maintainable codebase  

---

## 👨‍💻 Author

**Arijit Das**  
B.Tech CSE Graduate | React.js & Full-Stack Developer  
📧 [arijitdas7996@gmail.com](mailto:arijitdas7996@gmail.com)  
🔗 [LinkedIn](https://www.linkedin.com/in/arijit-das053914/)  
💻 [GitHub](https://github.com/AriPik)

---

> 🏁 *React User Dashboard App demonstrates end-to-end React development — from clean component structure and state management to routing, API integration, and responsive UI — optimized for professional evaluation and deployment.*
