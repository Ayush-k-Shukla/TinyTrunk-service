export const generateShortLink = async (
  originalUrl: string
): Promise<string> => {
  try {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('this is'), 2000);
    });
  } catch (error: any) {
    throw new Error(error);
  }
};
