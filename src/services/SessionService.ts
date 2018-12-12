import customAxios from "./custom-axios";

const startSession = async (token: string, startMessage: string) => {
  const res = await customAxios.withToken(token).post("api/v1/session/start", {
    startMessage,
  });
  return res.data;
};

const stopSession = async (token: string, endMessage: string) => {
  const res = await customAxios.withToken(token).post("api/v1/session/stop", {
    endMessage,
  });
  return res.data;
};

const getOwnSessionStatus = async (token: string) => {
  const res = await customAxios
    .withToken(token)
    .get("api/v1/session/ownstatus");
  return res.data;
};

export { startSession, stopSession, getOwnSessionStatus };
