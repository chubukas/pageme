import HomePage from "../pages/home"
import AboutPage from "../pages/about"
import ResumePage from "../pages/resume"
import Page404 from "../pages/page404"
import PortFolioPage from "../pages/portfolio"
import SinglePortFolioPage from "../pages/portfolio/SinglePortfolio"
import ContactPage from "../pages/contact"

export const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },

  {
    path: "/about",
    exact: true,
    component: AboutPage,
  },

  {
    path: "/resume",
    exact: true,
    component: ResumePage,
  },
  {
    path: "/portfolio",
    exact: true,
    component: PortFolioPage,
  },
  {
    path: "/portfolio/:slug",
    exact: true,
    component: SinglePortFolioPage,
  },
  {
    path: "/contact",
    exact: true,
    component: ContactPage,
  },

  {
    component: Page404
  }
]
