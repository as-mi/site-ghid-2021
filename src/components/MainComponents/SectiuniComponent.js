// Import Data
import data from "../../data.json";

// Import Components
import SectiuneComponent from "./SectiuneComponent";

const SectiuniComponent = () => {
  return (
    <section className="main__sections">
      {data.map((sectiune) => {
        return (
          <SectiuneComponent sectiune={sectiune} key={sectiune.imagineURL} />
        );
      })}
    </section>
  );
};

export default SectiuniComponent;
