import { atom, selector } from "recoil";

export const userAddressState = atom({
  key: "userAddressState",
  default: [
    {
      firstName: "",
      lastName: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
      useForPayment: false,
    },
  ],
});

export const getAllUserAddressesList = selector({
  key: "getAllUserAddressList",
  get: ({ get }) => {
    const addressList = get(userAddressState);
    return addressList;
  },
});
