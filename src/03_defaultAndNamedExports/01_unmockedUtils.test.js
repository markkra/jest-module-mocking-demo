import defaultMethod, { p1, p2, p3 } from './utils.js'

describe('default and named exports - unmocked file', () => {
  it('returns the correct value for p1', async () => {
    const resultP1 = await p1();
    expect(resultP1).toBe("p1Result");
  })

  it('returns the correct value for p2', async () => {
    const resultP2 = await p2();
    expect(resultP2).toBe("p2Result and p3Result");
  })

  it('returns the correct value for p3', async () => {
    const resultP3 = await p3();
    expect(resultP3).toBe("p3Result");
  })

  it('returns the correct value for Default Method', () => {
    expect(defaultMethod()).toBe("defaultMethodResult");
  })
})
