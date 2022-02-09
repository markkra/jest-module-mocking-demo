export const p1 = async () => {
  return Promise.resolve('p1Result')
}

export const p2 = async (p3dependency = p3) => {
  const resultFromP3 = await p3dependency();
  return Promise.resolve(`p2Result and ${resultFromP3}`);
};

export const p3 = async () => {
  return Promise.resolve("p3Result");
};

const defaultMethod = () => 'defaultMethodResult'
export default defaultMethod
