import { https } from "./urlConfig";

export const tongDoServices = {
  getData: () => {
    let uri = "/tongDoTheoHe";
    return https.get(uri);
  },
  getDataChiTiet: () => {
    let uri = `/tongDoChiTiet`;
    return https.get(uri);
  },
};
