📚 Smart Study Hub - Library Inventory System
University of Lahore | Web Engineering (CS-312) | Assignment 02

🔗 Project Links
Live Demo: https://70148555-hue.github.io/Library-System/

GitHub Repository: https://github.com/70148555-hue/Library-System.git

📌 Brief Project Overview
The Smart Study Hub is a comprehensive Library Inventory System developed for the Spring 2026 session. This project demonstrates the transition from static web design to a fully functional CRUD (Create, Read, Update, Delete) application. It focuses on modern JavaScript ES6+ features, DOM manipulation, and responsive UI components to manage library records efficiently.

✨ Key Features
Dynamic Inventory Management: Add and delete book records with real-time UI updates.

Advanced Search & Filter: A universal search bar that utilizes Object.keys() to filter by Title, Author, or ID.

Persistent Dark Mode: A theme-switching toggle that remembers user preference using localStorage.

Multi-Page Architecture: Fully synchronized Navigation and Footers across Home, About, Contact, and Auth pages.

Data Sanitization: Implements 10+ JavaScript string methods (like .trim(), .toUpperCase(), and .padStart()) for professional data formatting.

Responsive Design: Built with Tailwind CSS and Flowbite for a seamless experience on mobile, tablet, and desktop.

🛠 Technologies Used
Frontend Framework: Tailwind CSS (via CDN)

Component Library: Flowbite

Scripting: JavaScript ES6+ (Modules, Arrow Functions, Destructuring)

Logic: Object CRUD Methods (Object.assign, Object.values, Object.keys)

API Integration: Formspree (for Contact Form submissions)

Deployment: GitHub Pages

📁 Project Structure
The project is organized to maintain a clear separation between assets, source logic, and authentication modules:

Plaintext
/ (Root)
├── index.html                  # Main Dashboard (Inventory UI)
├── account/                    # Separate Authentication Module
│   ├── signin.html             # Login Page
│   └── signup.html             # Registration Page
├── assests/                    # Media Assets (Images, Audios, PDFs)
│   ├── images/
│   └── logos/
├── src/                        # Source Code
│   ├── theme.js                # Global Theme Persistence
│   ├── constants/
│   │   └── themeconstants.js   # Exported Theme Keys
│   ├── database/
│   │   └── data.js             # Initial Library Data Object
│   └── pages/                  # Page-Specific Logic
│       ├── about/
│       │   └── about.html      # Educational Roadmap
│       ├── contact/
│       │   └── contact.html    # Functional Contact Form
│       └── home/
│           └── home.js         # Core CRUD & Search Logic
🚀 How to Run the Project
Clone the Repository:

Bash
git clone https://github.com/70148555-hue/Library-System.git
Open in VS Code:
Open the cloned folder in Visual Studio Code.

Launch Live Server:
Right-click index.html and select "Open with Live Server".

Requirements:

An active internet connection is required to load Tailwind CSS and Flowbite CDNs.

Modern web browser (Chrome, Firefox, or Edge).

📸 Project Screenshots
1. Home Page (Inventory Dashboard)
![alt text](home-1.PNG)
![alt text](home2-1.PNG)

2. About Page (Roadmap & Stats)
![alt text](about-2.png)
![alt text](about2-1.PNG)

3. Contact Page
![alt text](contact1-1.PNG)
![alt text](contact2-1.PNG)

4. Authentication
Sign In
![alt text](sigin-1.PNG)

Sign Up
![alt text](signup-1.PNG)
![alt text](signup2-1.PNG)

5. VS Code Structure
![alt text](FILE1.PNG)
![alt text](FILE2.PNG)

👨‍💻 Author Information
Student Name: Fatima Naeem
SAP ID: 70148555
Program: BS Computer Science (BSCS)

University: The University of Lahore (UOL)

Session: Spring 2026
