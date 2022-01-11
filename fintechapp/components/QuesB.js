import React from "react";
import Slider from "rc-slider";
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider);
import "rc-slider/assets/index.css";

export default function QuesB({ handleInputRange, name }) {
  return (
    <div>
      <Range
        className="mt-3"
        onChange={(e) => handleInputRange(e)}
        min={0}
        max={100}
        // value={respuestas.percentfixedoutcomes}
        step={5}
        name={name}
      />
    </div>
  );
}
