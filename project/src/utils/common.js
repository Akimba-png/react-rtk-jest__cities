function createOrderNumberGenerator() {
  let storage = 0;
  return () => storage ++;
}
export const getOrderNumber = createOrderNumberGenerator();
