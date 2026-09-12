import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import type { Technology } from "./types/technology";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologyCard from "./components/TechnologyCard";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";

function App() {
  // ================= TECHNOLOGIES =================

  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  // ================= YOUR STACK =================

  const [selectedTechnologies, setSelectedTechnologies] =
    useState<Technology[]>([]);

  // ================= LOAD TECHNOLOGIES =================

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/technologies.json");

        console.log("Response status:", response.status);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: Technology[] = await response.json();

        console.log("JSON DATA:", data);

        setTechnologies(data);
      } catch (error) {
        console.error("FAILED TO LOAD TECHNOLOGIES:", error);

        toast.error("Failed to load technologies.");
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  // ================= ADD TO STACK =================

  const handleAddToStack = (technology: Technology) => {
    const alreadyAdded = selectedTechnologies.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setSelectedTechnologies((previous) => [
      ...previous,
      technology,
    ]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // ================= REMOVE ONE =================

  const handleRemove = (id: string) => {
    const technologyToRemove = selectedTechnologies.find(
      (technology) => technology.id === id
    );

    setSelectedTechnologies((previous) =>
      previous.filter((technology) => technology.id !== id)
    );

    if (technologyToRemove) {
      toast.info(
        `${technologyToRemove.name} removed from your stack.`
      );
    }
  };

  // ================= REMOVE ALL =================

  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      return;
    }

    setSelectedTechnologies([]);

    toast.info("All technologies removed from your stack.");
  };

  // ================= LOADING =================

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div
            className="
              w-10
              h-10
              border-4
              border-gray-200
              border-t-pink-500
              rounded-full
              animate-spin
              mx-auto
            "
          />

          <p className="mt-4 text-lg font-semibold text-gray-700">
            Loading technologies...
          </p>
        </div>
      </div>
    );
  }

  // ================= MAIN UI =================

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}

      <Navbar />

      {/* Toast */}

      <ToastContainer
        position="top-right"
        autoClose={2500}
        newestOnTop
        closeOnClick
        pauseOnHover
      />

      {/* Hero */}

      <Hero />

      {/* Technologies */}

      <section id="technologies" className="py-16">
        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
          "
        >
          {/* Section Heading */}

          <div className="mb-10">
            <p className="text-sm font-semibold text-pink-500 mb-2">
              BUILD YOUR STACK
            </p>

            <h2
              className="
                text-3xl
                sm:text-4xl
                font-bold
                text-gray-900
              "
            >
              Explore the{" "}
              <span className="brand-gradient-text">
                Technologies
              </span>
            </h2>

            <p className="mt-3 text-gray-500 max-w-2xl">
              Explore modern development technologies and
              add the tools you need to create your ideal
              development stack.
            </p>
          </div>

          {/* Main Grid */}

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-4
              gap-6
              items-start
            "
          >
            {/* Technology Cards */}

            <div className="lg:col-span-3">
              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  lg:grid-cols-3
                  gap-6
                "
              >
                {technologies.map((technology) => (
                  <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    onAddToStack={handleAddToStack}
                    isAdded={selectedTechnologies.some(
                      (item) => item.id === technology.id
                    )}
                  />
                ))}
              </div>
            </div>

            {/* Your Stack */}

            <div className="lg:col-span-1">
              <YourStack
                selectedTechnologies={selectedTechnologies}
                onRemove={handleRemove}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <Footer />
    </div>
  );
}

export default App;