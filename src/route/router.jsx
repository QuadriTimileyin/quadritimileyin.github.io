import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/root";
import Home from "../pages/home";
import Contact from "../pages/contact";
import About from "../pages/about";
import Service from "../pages/service";
import SingleProject from "../pages/single-project";
import Works from "../pages/works";
import ThankYou from "../pages/thankyou";
import NotFound from "../pages/not-found"; // Import the NotFound component

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/service",
                element: <Service />
            },
            {
                path: "/single-project/:id", // Add :id parameter
                element: <SingleProject />
            },
            {
                path: "/works",
                element: <Works />
            },
            {
                path: "/thank-you",
                element: <ThankYou />
            },
            {
                path: "*", // Catch-all route for unavailable links
                element: <NotFound />
            }
        ]
    }
])