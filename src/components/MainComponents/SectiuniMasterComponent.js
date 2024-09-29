// Import Data
import data from "../../data.json";

// Import Components
import SectiuneComponent from "./SectiuneComponent";

const SectiuniComponent = () => {
  return (
    <section className="main__sections">
      {data.map((sectiune, index) => {
        return (
          <SectiuneComponent
            sectiune={sectiune}
            index={index}
            key={sectiune.id}
          />
        );
      })}
    </section>
  );
};

export default SectiuniComponent;
