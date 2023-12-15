import Hero from "@/components/hero/hero";
import PerfomanceImg from "public/performance.jpg";

const Performance = () => {
  return (
    <Hero
      imgData={PerfomanceImg}
      imgAlt="a welding robot"
      title="We serve high performance applications"
    />
  );
};

export default Performance;
