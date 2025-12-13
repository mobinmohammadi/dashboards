import { showToast } from "./toast.slicer";

export const toast = {
    succuss : (message : string) => showToast({message , severity : "success"})
}