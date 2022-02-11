import { p1, p2, p3 } from "./deps";

export default async () => {
  const [resultP1, resultP2, resultP3] = await Promise.all([p1(), p2(), p3()]);

  return `Results: ${resultP1}, ${resultP2}, ${resultP3}`;
};
