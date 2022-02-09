export const p1 = async () => {
  return Promise.resolve('You have called p1')
}

export const p2 = async () => {
  return Promise.resolve("You have called p2");
};

export const p3 = async () => {
  return Promise.resolve("You have called p3");
};

const defaultMethod = () => 'You have called the Default Method'
export default defaultMethod
