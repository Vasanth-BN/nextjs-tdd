export const mockFailureFetch = (
  rejectWith: object | string | boolean | null
) => {
  return jest.fn(() =>
    Promise.resolve({
      ok: false,

      json: () => Promise.resolve(rejectWith),
    })
  ) as jest.Mock;
};

export const mockSuccessFetch = (
  resolveWith: object | string | boolean | null
) => {
  return jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(resolveWith),
    })
  ) as jest.Mock;
};
