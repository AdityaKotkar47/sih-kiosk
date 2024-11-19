import { ReactNode } from "react";
import floorplanData from "../../store/sample.json"; // Adjust the path as necessary

interface MapBackgroundProps {
  children: ReactNode;
}

function MapBackground({ children }: MapBackgroundProps) {
  const floorplanUrl = floorplanData.floorplan; // Access the floorplan URL from JSON

  return (
    <svg
      // same as mall-floor-plan.svg viewBox
      viewBox="0.469 0.006 1461.95 1149.136"
      className="lg:h-[85vh] lg:w-[75vw] h-[85dvh]"
    >
      <image
        id="background"
        width="100%"
        height="100%"
        href={floorplanUrl} // Use the imported URL
      />
      {children}
    </svg>
  );
}

export default MapBackground;
