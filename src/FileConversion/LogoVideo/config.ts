export const COLOR_1 = "#61DDFF";
export const COLOR_2 = "#4B84CC";
export const COLOR_CHICLET_GOOD = "#2664D9";
export const CHICLET_SIZE_CONSTANT = 0.7;
export const CHICLET_ASPECT_RATIO = 0.45;

export function makeEase(constant = 3): (x: number) => number {
  return (x: number): number => {
    return Math.pow(x, constant) / (Math.pow(x, constant) + Math.pow(1 - x, constant));
  };
}
