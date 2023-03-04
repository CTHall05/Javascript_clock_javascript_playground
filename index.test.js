const { updateClock } = require('./index');


describe('updateClock', () => {
  // Mock the DOM elements for testing
  const mockHourElement = document.createElement('div');
  mockHourElement.id = 'hour';
  const mockMinuteElement = document.createElement('div');
  mockMinuteElement.id = 'minutes';
  const mockSecondsElement = document.createElement('div');
  mockSecondsElement.id = 'secconds';
  const mockAmPmElement = document.createElement('div');
  mockAmPmElement.id = 'ampm';
  document.body.appendChild(mockHourElement);
  document.body.appendChild(mockMinuteElement);
  document.body.appendChild(mockSecondsElement);
  document.body.appendChild(mockAmPmElement);

  beforeEach(() => {
    jest.useFakeTimers(); // Mock the setTimeout function
    jest.spyOn(document, 'getElementById') // Spy on the DOM elements
      .mockReturnValueOnce(mockHourElement)
      .mockReturnValueOnce(mockMinuteElement)
      .mockReturnValueOnce(mockSecondsElement)
      .mockReturnValueOnce(mockAmPmElement);
  });

  afterEach(() => {
    jest.useRealTimers(); // Restore the original setTimeout function
    jest.restoreAllMocks(); // Restore the getElementById method
  });

  it('should update the time every second', () => {
    updateClock();
    expect(mockHourElement.textContent).toMatch(/^\d{2}$/); // Should be two digits
    expect(mockMinuteElement.textContent).toMatch(/^\d{2}$/); // Should be two digits
    expect(mockSecondsElement.textContent).toMatch(/^\d{2}$/); // Should be two digits
    expect(mockAmPmElement.textContent).toMatch(/^(AM|PM)$/); // Should be either AM or PM

    jest.advanceTimersByTime(1000); // Fast-forward 1 second
    expect(mockHourElement.textContent).toMatch(/^\d{2}$/);
    expect(mockMinuteElement.textContent).toMatch(/^\d{2}$/);
    expect(mockSecondsElement.textContent).toMatch(/^\d{2}$/);
    expect(mockAmPmElement.textContent).toMatch(/^(AM|PM)$/);
  });
});
