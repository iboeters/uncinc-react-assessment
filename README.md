# Unc Inc assessment - React
### The initial plan
#### 1. Project overview
The objective of the assignment:
- As a regular user, I want to be able to access the homepage on either / or /home.
- As a regular user, I want to be able to login using a form on /login with username "uncinc" and password "letmein" in order to become a logged in user.
- As a regular user, I want to get a message if I fill out wrong credentials.
- As a logged in user, I want to be able to access a dashboard on /dashboard.
- As a regular user, I want to access /dashboard from /home.
- As a regular user, I want to be redirected to the login form when trying to access a page that I have no access to.
- As a regular user, I want to be redirected from the login form to the page I originally wanted to go to.
- As a logged in user, I want my session to be remembered, so that I can come back to the dashboard later without having to log in again.
- As a logged in user, I want to be able to log out.
#### 2. Routes
To summarize, these are all the pages that should be accessible:
- `/` or `/home`
	- Default page, accessible for everyone
	- `/dashboard` should be accessible from `/home`
-  `/dashboard`
	- If user is logged in, user can see the content of this page
	- If user is not logged in, user cannot see the content of this page.  I want to redirect the user to the `/login` page and give it a notification with the error. This way the user knows why it is not able to access the dashboard page.
	- I want to be using a context, that I will call authentication context, that will have the information about authentication. I can then easily request whether the user is logged in.
- `/login`
	- Page for users to login, accessible for everyone
	- Consisting of a form to fill in username and password and a submit button
	- If login fails, user should get an error message and stay on the page
	- If login succeeds, user should get a success message and user should be routed to requested page
It would be nice to have a navigation bar, as it is a quick and intuitive way for users to be able to access `/dashboard` from `/home` and the other way around, etc. I first want to make a navigation bar, so I can quickly make all three pages.
Any errors I will display by using Reacts' `toasts` so that I can easily give notifications back to the user on successes or failures.
#### 3. Technology stack
- yarn
	- **Why**: to quickly setup a new React project, and I use yarn as package manager, as stated in the assignment, so I will use the command `yarn create react-app basic-app` to setup the initial app. The application will be accessible on localhost, port 3000.
- React
	- **Why**: as stated in the assignment.
- React router `react-router-dom`:
	- **Why**: fast and clean approach for handling routes in the application.
- Material UI
	- **Why**: styling is not important for the assignment, so I will use this UI framework to quickly build components with a consistent design. It is a popular framework with extensive choices that I used before.
#### 4. Application structure
```
basic-app/
├── public/
│   ├── index.html
│   └── manifest.json
│
├── src/
│   ├── assets/                # static assets like images, fonts, etc.
│
│   ├── components/            # reusable components
│   │   ├── Navbar.tsx
│   │   ├── ProtectedRoute.tsx
│
│   ├── pages/                 # contains all pages
│   │   ├── HomePage.tsx
│   │   ├── DashboardPage.tsx
│   │   └── LoginPage.tsx
│
│   ├── context/               # context for global state management
│   │   └── AuthContext.tsx    # context for managing authentication state
│
│   ├── App.tsx                # main app component with routing setup
│   └── index.tsx              # entry point of the application
│
├── .gitignore
├── package.json
├── README.md
├── .env
└── yarn.lock 
```
#### 5. Authentication flow
- Session data should be stored in cookies, so that next time the page is loaded, the user doesn't have to login again. Another option is to use local storage, but this is less secure. Session data can be stored at the server side, that we don't have for this assignment.
- Flow: check cookies -> input credentials -> generate authentication token -> save authentication token in cookies -> route user to requested page
- protected routes can now check cookies
- I will save credentials (f.e. login credentials) to a `.env` file, that I will push to GitHub unencrypted for this assignment, as security is not tested by the assignment.
- Logging out (by pressing a button in the nav-bar) should clear the session data (authentication state and tokens) and redirect users to the homepage
#### 6. Testing
I want to setup a testing framework to test the features of the application, using `@testing-library/jest-dom`.
#### 7. Steps:
- [x] make the navbar component
- [x] make the 3 pages
- [x] setup authentication
- [ ] setup testing
### Thoughts along the way
- I'm actually going to use `yarn create react-app basic-app --template typescript` so I have `.tsx` files from the start.
- I decided to not make a ProtectedRoute component, it takes too much time for this assignment, so I will manually check the authentication status on pages and redirect the user
- It probably would've been better if I had set up testing upfront, so that I didn't have to test the pages manually during development. I will not add it for now considering time constraints for this assignment
