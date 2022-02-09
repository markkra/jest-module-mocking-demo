export const p1 = async () => {
  return Promise.resolve('You have called p1')
}

export const p2 = async () => {
  const resultFromP3 = await p3();
  return Promise.resolve(`You have called p2 and ${resultFromP3}. p2 has closed over p3 - the real one`);
};

export const p3 = async () => {
  return Promise.resolve("You have called p3 and not the mock");
};

const defaultMethod = () => 'You have called the Default Method'
export default defaultMethod
