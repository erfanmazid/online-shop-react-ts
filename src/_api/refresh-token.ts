import httpRequest from "../services/http-request";

const refreshToken = async (refresh: string | undefined) => {
  const ref = { refreshToken: refresh };
  if (refresh) return await httpRequest.post("/api/auth/token", ref);
};
export default refreshToken;
