import { createHook } from "overmind-react";
import { state } from "./state";
import { onInitialize } from "./onInitialize";
import * as actions from "./actions";
import * as effects from "./effects";
import { IConfig } from "overmind";
import { createOvermind } from "overmind";

export const config = {
  onInitialize,
  state,
  actions,
  effects
};
export const app = createOvermind(config, {
  // devtools: "penguin.linux.test:3031" //
  // devtools: false,
});
export const useApp = createHook<typeof config>();

declare module "overmind" {
  interface Config extends IConfig<typeof config> {}
}
