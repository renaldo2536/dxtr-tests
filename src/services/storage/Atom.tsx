import { ICategoryItem, IProductItem } from "@services/models";
import { atom } from "recoil";

export const categoryDataAtom = atom({
  key: "categoryDataAtom",
  default: [] as ICategoryItem[],
});

export const productListAtom = atom({
    key: "productListAtom",
    default: {} as IProductItem[],
});
