import React, { Suspense, lazy } from "react";

// Lazy loading components
const About = lazy(() => import("./components/About"));
const Hero = lazy(() => import("./components/Hero"));
const NavBar = lazy(() => import("./components/Navbar"));
const Features = lazy(() => import("./components/Features"));
const Story = lazy(() => import("./components/Story"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (

      <main className="relative min-h-screen w-screen overflow-x-hidden">
        <NavBar />
        <Hero />
        <About />
        <Features />
        <Story />
        <Contact />
        <Footer />
      </main>

  );
}

export default App;
