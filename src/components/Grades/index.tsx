import * as Slider from "@radix-ui/react-slider";

export function Grades() {
  return (
    <form>
      <Slider.Root defaultValue={[0]} min={0} max={100} step={10} className="relative flex items-center w-full h-5">
        <Slider.Track className="bg-black">
          <Slider.Range className="bg-firedev-linear" />
        </Slider.Track>
        <Slider.Thumb className="bg-black w-5 h-5" />
      </Slider.Root>
    </form>
  );
}
