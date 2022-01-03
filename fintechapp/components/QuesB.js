import React from "react";
import Slider from "rc-slider";
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider);
import "rc-slider/assets/index.css";

export default function QuesB() {
  return (
    <div>
      <Range className="mt-3" />
    </div>
  );
}
