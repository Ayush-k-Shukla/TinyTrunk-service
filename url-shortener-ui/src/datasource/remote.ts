export const generateShortLink = async (
  originalUrl: string
): Promise<string> => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise((resolve) => {
      setTimeout(() => resolve(originalUrl + 'this is'), 2000);
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(error);
  }
};
