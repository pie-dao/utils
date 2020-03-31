const TIMEOUT = 15000;
const chains = {};
const prefix = '@pie-dao/utils - chain';

class TimeoutError extends Error {}

const noop = () => undefined;

const newLink = (func, ident, errorCallback = noop) => new Promise((resolve) => {
  const pid = setTimeout(() => {
    resolve();
    errorCallback(new TimeoutError(`${prefix}: process ${ident} took longer than ${TIMEOUT}ms`));
  }, TIMEOUT);

  const callback = () => {
    clearTimeout(pid);
    resolve();
  };

  Promise.resolve(func(callback)).then(resolve).catch((e) => {
    callback();
    errorCallback(e);
    console.error(`${prefix}: link error`, e);
  });
});

const push = (key, func, ident, errorCallback) => {
  if (!chains[key]) {
    chains[key] = Promise.resolve();
  }

  chains[key] = chains[key].then(() => newLink(func, ident, errorCallback));
};

export default push;
