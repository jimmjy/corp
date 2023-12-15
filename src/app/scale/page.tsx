import Hero from "@/components/hero/hero";
import ScaleImg from "public/scale.jpg";

const Scale = () => {
  return (
    <Hero
      imgData={ScaleImg}
      imgAlt="a welding robot"
      title="Scale your app to infinity"
    />
  );
};

export default Scale;
