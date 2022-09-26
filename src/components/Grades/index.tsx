import * as Slider from "@radix-ui/react-slider";

export function Grades() {
  return (
    <div className="w-full">
      <Slider.Root defaultValue={[0]} min={0} max={100} step={10} className="relative flex items-center h-5">
        <Slider.Track className="bg-[#e5e5e5] w-full h-3 relative">
          <Slider.Range className="h-full rounded-full bg-firedev-linear absolute" />
        </Slider.Track>
        <Slider.Thumb className="bg-black w-5 h-5 block" />
      </Slider.Root>
    </div>
  );
}
