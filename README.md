# 🚀 DevStack — Developer Technology & Project Showcase

DevStack is a modern and responsive developer-focused website built with **React, TypeScript, and Tailwind CSS**. The website showcases popular development technologies, projects, developer information, and allows users to build their own technology stack.

The project was developed as **Assignment-5 (Dev Stack Builder Website)** with a focus on clean UI, responsive design, reusable React components, dynamic data rendering, and a professional developer experience.



## 🌐 Live Website

🔗 **Live Demo:** `http://localhost:5173/`

🔗 **GitHub Repository:** https://github.com/uzzal6090/DevStack


## ✨ Features

### 🧭 Responsive Navigation

* Sticky navigation bar
* DevStack branding
* Home
* Technologies
* Projects
* About
* Contact
* Sign In
* Sign Up button
* Responsive navigation for different screen sizes

### 💻 Technologies Section

Users can explore different development technologies through dynamically rendered technology cards.

Each technology card contains meaningful information about the technology and its purpose.

Technology data is loaded dynamically from:

/public/technologies.json


### 🧩 Your Stack

The **Your Stack** section allows users to build and view their preferred technology stack.

This provides a simple interactive experience where users can select technologies that they are interested in using.

### 📂 Projects Section

The Projects section presents development projects in an organized and visually appealing layout.

It helps demonstrate how different technologies can be used in real-world applications.

### 🔔 Toast Notifications

The project uses **React Toastify** to provide user-friendly feedback and notifications for interactive actions.

### 📱 Responsive Design

The website is designed to work across:

* 📱 Mobile devices
* 💻 Laptops
* 🖥️ Desktop screens



## 🛠️ Technologies Used

### Frontend

* React
* TypeScript
* HTML5
* CSS3
* Tailwind CSS

### Tools & Libraries

* Vite
* React Toastify
* Git
* GitHub
* VS Code



## Project Structure


DevStack/
│
├── public/
│   └── technologies.json
│
├── src/
│   ├── assets/
│   │   ├── banner-stack.png
│   │   ├── hero.png
│   │   └── logo-text.png
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Technology.tsx
│   │   ├── TechnologyCard.tsx
│   │   ├── ...
│   │
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
│
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md


> The exact component list may change as the project evolves.



## ⚙️ Installation & Setup

### 1. Clone the repository

bash
git clone https://github.com/uzzal6090/DevStack


### 2. Navigate to the project directory

bash
cd DevStack


### 3. Install dependencies

bash
npm install


### 4. Start the development server

bash
npm run dev


### 5. Open the application

Vite will provide a local development URL, usually:


http://localhost:5173

## 🎨 Design & UI Goals

The project follows these design principles:

* Clean and modern interface
* Meaningful content
* Consistent spacing
* Responsive layouts
* Reusable components
* Clear typography
* Accessible interactions
* Developer-focused visual style



## 📱 Responsive Design

DevStack is designed with responsive layouts for different screen sizes.

### Mobile

The interface adapts to smaller screens with:

* Flexible layouts
* Responsive typography
* Mobile-friendly spacing
* Responsive cards
* Mobile navigation behavior

### Desktop

For larger screens, the website provides:

* Wider content layouts
* Multi-column sections
* Larger visual elements
* Better use of available screen space



## 🧠 React & TypeScript Concepts Used

This project demonstrates several important React and TypeScript concepts:

* Functional Components
* Component-based architecture
* Props
* TypeScript interfaces and types
* `useState`
* `useEffect`
* Event handling
* Conditional rendering
* Array `.map()`
* Dynamic rendering
* API/data fetching
* Loading states
* Reusable components



## 📊 Dynamic Data

Technology information is stored separately from the React components.

Example:


public/
└── technologies.json


The application fetches the data and dynamically renders the technology cards.

This approach keeps the UI components reusable and separates **data from presentation**.



## 🔔 User Feedback

The project uses **React Toastify** for user notifications.

This improves the user experience by giving immediate feedback when users perform interactive actions.



## 🔀 Git & GitHub

The project is maintained using Git and GitHub.

Meaningful commits were used during development to track different features and improvements.

Examples of development commits include:


1.Creae the navbar section.
2.Create the technologyCard section that is ,mentioned.
3.Update the Navbar and responsive 
4.Create the Hero section and also responsive mobile and dekstop version.
5.Update the TechnologyCard and polish the section.
6.Centralized the button color.
7.Finally create footer section that is last feature in my project.
8.Update Technology feature and polish finally.
9.Polish TechnologyCard UI.


## 🚀 Future Improvements

Some possible future improvements include:

* User authentication
* Saving custom technology stacks
* Technology search and filtering
* Project filtering
* Backend integration
* Developer profiles
* Dark/light theme
* Database integration
* Personalized developer dashboards


## 👨‍💻 Author

**Uzzal Hosen**

## ⭐ Acknowledgement

This project was developed as part of the **Assignment-5 — Dev Stack Builder Website**.

The main goal of the project is to demonstrate practical knowledge of modern frontend development using React, TypeScript, responsive design, reusable components, and Git/GitHub workflow.



## 📄 License

This project is created for educational and portfolio purposes.




  ## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript/TypeScript. React uses JSX to make UI code easier to read and build.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.
**State** is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to create and manage changing data inside a React component. In this project, I used it to manage the **technology data, loading state, and selected technologies in the Your Stack section**.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders. I used it to **fetch the technology data from ****`technologies.json`**** when the application loads**.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. A unique key helps React efficiently update the correct item when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a condition.

For example, in the **Your Stack** section, I show an empty-stack message when the user has not selected any technology:

```tsx
{selectedStack.length === 0 && (
  <p>Your stack is empty. Add some technologies!</p>
)}
```

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child through **props**.

A child can send information back by calling a **function passed from the parent as a prop**.

