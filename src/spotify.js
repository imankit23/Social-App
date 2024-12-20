import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "4337bc0b72b84c5c8ebf242f7118f138";
const redirectUri = "https://social-app-woad-chi.vercel.app/callback";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiClient;
