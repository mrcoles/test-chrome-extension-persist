Promise.resolve()
  .then(() => {
    return navigator.storage === undefined
      ? "navigator.storage is undefined"
      : navigator.storage.persist === undefined
        ? "navigator.storage.persist is undefined"
        : navigator.storage
            .persist()
            .then(allowed => `has persist? ${allowed}`);
  })
  .then(msg => {
    document.getElementById("result").innerText = msg;
  });
