import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "01af446d80544a73bab7612828434bb2";
const token = "007eJxTYHBO9g1XU/7jpRq4dy7vtNTqv0ejvT7s5Hp1+cvEpfFNF5YoMBgYJqaZmJilWBiYmpgkmhsnJSaZmxkaWRhZmBibJCUZhQv4pzYEMjJIde9nZGSAQBCfgyE5IzEvLzXHkIEBALjSIB8=";

export const config = {
    mode: "rtc",
    codec: "vp8",
    appId,
    token
};

export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "channel1";