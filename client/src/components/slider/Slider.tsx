import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const Slider: React.FC<{
  perView?: number;
  children: React.ReactNode;
}> = ({ perView = 3.5, children }) => {
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: perView,
      spacing: 15,
    },
  });

  return (
    <div ref={ref} className="keen-slider">
      {children}
    </div>
  );
};

export default Slider;
