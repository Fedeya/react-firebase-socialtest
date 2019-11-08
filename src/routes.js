const routes = [
  {
    name: "login",
    to: "/login",
    text: "Login",
    auth: false
  },
  {
    name: "signup",
    to: "/signup",
    text: "Sign Up",
    auth: false
  },
  {
    name: "profile",
    to: "/profile",
    text: "Profile",
    auth: true
  }
]

export default routes;