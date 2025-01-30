import Test from "./Calendarly";
import { Meta } from "@storybook/react";

const meta: Meta<typeof Test> = {
  component: Test,
  title: "Editor",
};
export default meta;

export const Default = {
  args: {
    value: "",
  },
};
