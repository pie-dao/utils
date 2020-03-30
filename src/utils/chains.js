const TIMEOUT = 15000;
const chains = {};
const prefix = '@pie-dao/utils - chain';

class TimeoutError extends Error {}

const newLink = (func, ident, errorCallback) => new Promise((resolve) => {
  try {
    const pid = setTimeout(() => {
      console.error(`${prefix}: link timeout error (${ident})`);
      errorCallback(new TimeoutError(`${prefix}: process ${ident} took longer than ${TIMEOUT}ms`));
      resolve();
    }, TIMEOUT);

    func(() => {
      clearTimeout(pid);
      resolve();
      console.log(`${prefix}: link resolved (${ident})`);
    });
  } catch (e) {
    console.error(`${prefix}: link error`, e);
    errorCallback(e);
  }
});

const push = (key, func, ident, errorCallback) => {
  if (!chains[key]) {
    chains[key] = Promise.resolve();
  }

  chains[key] = chains[key].then(() => newLink(func, ident, errorCallback));
};

export default push;
