import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "01af446d80544a73bab7612828434bb2";
const token = "007eJxTYCiJZdhdwbTa1fv2K8svOxcf0py7+o+ZQ+9X+VWCnA2ZOdcVGAwME9NMTMxSLAxMTUwSzY2TEpPMzQyNLIwsTIxNkpKMLI4HpDYEMjKErDjPzMgAgSA+B0NyRmJeXmqOIQMDALpUIGQ=";

export const config = {
    mode: "rtc",
    codec: "vp8",
    appId,
    token
};

export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "channel1";