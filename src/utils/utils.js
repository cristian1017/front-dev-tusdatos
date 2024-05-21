
export const setCookie = (name, value) => {
  const date = new Date();
  date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

export const getCookie = (key) => {
  const cookies = document.cookie
    .split(";")
    .filter((c) => !!c)
    .map((c) => {
      const [name, value] = c.split("=").map((el) => el.trim());
      return { name, value };
    });

  return cookies.find((c) => c.name === key)?.value || null;
};

export const sumActuacionesJudiciales = (data) => {
  if (!data.details || !data.details.subProcess) {
    return 0;
  }

  return data.details.subProcess.reduce((total, subProcess) => {
    return total + (subProcess.actuacionesJudiciales ? subProcess.actuacionesJudiciales.length : 0);
  }, 0);
};