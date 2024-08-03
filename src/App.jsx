import React, { lazy, Suspense } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./index.css"; // Assuming you have custom styles in this file

const Toolbar = lazy(() => import("./components/toolbar"));
const SearchBarComponent = lazy(() => import("./components/SearchBarComponent"));
const CarouselComponent = lazy(() => import("./components/Carousel"));

const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-cover bg-scroll bg-center">
      <Suspense
        fallback={
          <div className="flex h-screen items-center justify-center">
            <ProgressSpinner />
          </div>
        }
      >
        <Toolbar />
        <SearchBarComponent />
        <div className="flex-grow">
          <CarouselComponent />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
