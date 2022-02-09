import defaultMethod, { p1, p2, p3 } from './utils.js'

jest.mock('./utils.js', () => ({
  __esModule: true,
  ...jest.requireActual('./utils.js'),
    p3: jest.fn().mockResolvedValue('mockedP3Result'),
}))

describe('default and named exports - partially mocked file', () => {
  it('returns the correct value for p1', async () => {
    // Arrange/Act
    const resultP1 = await p1();

    // Assert
    expect(resultP1).toBe("p1Result");
  })

  it('returns the correct value for p2 with default p3', async () => {
    // Arrange/Act
    const resultP2 = await p2();

    // Assert
    expect(resultP2).toBe(
      "p2Result and p3Result"
    );
  })

  it('returns the correct value for p2 with mocked p3', async () => {
    // Arrange/Act
    const resultP2 = await p2(p3);

    // Assert
    expect(resultP2).toBe(
      "p2Result and mockedP3Result"
    );
  })

  it('returns the correct value for p3', async () => {
    // Arrange/Act
    const mockResultP3 = await p3();

    // Assert
    expect(p3).toHaveBeenCalledTimes(1);
    expect(mockResultP3).toBe("mockedP3Result");
  })

  it('returns the correct value for the Default Method', () => {
    // Arrange/Act
    const resultDefaultModuleMethod = defaultMethod();

    // Assert
    expect(resultDefaultModuleMethod).toBe(
      "defaultMethodResult"
    );
  })
})
