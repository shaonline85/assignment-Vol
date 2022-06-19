export {}
export * from "./types";
declare global {
  interface Window {
    $: any;
    jQuery: any;
  }
}
