import Hero from "@/components/hero/hero";
import ReliabilityImg from "public/reliability.jpg";

const Reliability = () => {
  return (
    <Hero
      imgData={ReliabilityImg}
      imgAlt="welding"
      title="Super high reliability hosting"
    />
  );
};

export default Reliability;
