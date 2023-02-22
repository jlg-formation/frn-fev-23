export const sleep = (delay: number) => {
  return new Promise<void>(resolve => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
};

export const generateId = () => Date.now() + '_' + Math.random() * 1e15;
export const getExtension = (file: string) =>
  file.replace(/^.*\.([^.]*)$/, '$1');
