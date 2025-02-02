import Calendar from "./Calendarly";
import Calendarly from "./Calendarly";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Calendarly> = {
  component: Calendarly,
  title: "Calendarly",
};
export default meta;

type Story = StoryObj<typeof Calendarly>;

export const Default: Story = {
  args: {
    isRange:  true,
    type: "single",
    quickSelection: false,
  },
};
