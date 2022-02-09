import defaultMethod, { p1, p2, p3 } from './utils.js'

jest.mock('./utils.js', () => ({
  __esModule: true,
  ...jest.requireActual('./utils.js'),
    p3: jest.fn().mockResolvedValue('You have called a mocked method!'),
}))

describe('default and named exports - partially mocked file', () => {
  it('returns the correct value for p1', async () => {
    // Arrange/Act
    const resultP1 = await p1();

    // Assert
    expect(resultP1).toBe("You have called p1");
  })

  it('returns the correct value for p2', async () => {
    // Arrange/Act
    const resultP2 = await p2();

    // Assert
    expect(resultP2).toBe("You have called p2");
  })

  it('returns the correct value for p3', async () => {
    // Arrange/Act
    const mockResultP3 = await p3();

    // Assert
    expect(p3).toHaveBeenCalledTimes(1);
    expect(mockResultP3).toBe("You have called a mocked method!");
  })

  it('returns the correct value for the Default Method', () => {
    // Arrange/Act
    const resultDefaultModuleMethod = defaultMethod();

    // Assert
    expect(resultDefaultModuleMethod).toBe(
      "You have called the Default Method"
    );
  })
})
