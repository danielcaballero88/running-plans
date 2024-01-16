import { UserInputObject } from "src/app/components/get-started/types";
import { ChartPaceObject } from "src/app/types/pace-chart-types";

export interface StateObject {
  userInput?: UserInputObject
  paceChart?: ChartPaceObject
}

export type stateKey = keyof StateObject
