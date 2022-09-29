import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";

interface GradesProps extends Slider.SliderProps {
  onValueChanged: (value: number[]) => void
}

export function Grades({onValueChanged, defaultValue, ...rest}: GradesProps) {  

  return (
    <div className="w-full mt-6 mb-6">
      <Slider.Root
        {...rest}
        onValueChange={onValueChanged}
        min={0}
        max={10}
        step={1}
        className="relative flex items-center h-5"
      >
        <Slider.Track className="bg-[#e5e5e5] w-full h-3 relative">
          <Slider.Range className="h-full rounded-full bg-firedev-linear absolute" />
        </Slider.Track>
        <Slider.Thumb className="bg-white border-2 border-[#C4C4C4] rounded-full w-8 h-5 block" />
      </Slider.Root>
      <div className="flex justify-between">
        <p className="font-light text-lg ml-3">0</p>
        <p className="font-light text-lg">1</p>
        <p className="font-light text-lg">2</p>
        <p className="font-light text-lg">3</p>
        <p className="font-light text-lg">4</p>
        <p className="font-light text-lg">5</p>
        <p className="font-light text-lg">6</p>
        <p className="font-light text-lg">7</p>
        <p className="font-light text-lg">8</p>
        <p className="font-light text-lg">9</p>
        <p className="font-light text-lg mr-2">10</p>
      </div>
    </div>
  );
}
