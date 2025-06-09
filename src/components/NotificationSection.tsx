import { NOTIFICATION_CONSTANTS } from "../constants";
import { Card } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export const NotificationSection = () => {
  return (
    <div className="relative z-10 flex flex-col lg:flex-row justify-between w-full mt-16 mb-12 gap-8 lg:pl-8">
      {/* Heading and description */}
      <div className="flex flex-col items-center text-center lg:justify-start lg:items-start lg:text-left w-full flex-1 min-w-[350px] lg:max-w-[420px] px-8">
        <img className="w-7 h-7 mb-4" alt="Bell" src="/vector.svg" />
        <div className="font-medium text-[31px] leading-[1.2] text-background-f2f2f2 mb-4">
          {NOTIFICATION_CONSTANTS.HEADLINE}
        </div>
        <div className="opacity-70  font-medium text-[16px] leading-[1.2] text-background-f2f2f2 mb-2">
          {NOTIFICATION_CONSTANTS.DESCRIPTION}
        </div>
      </div>
      {/* Notification cards: below text on mobile, right-aligned on large screens */}
      <div className="flex flex-row justify-start gap-x-6 overflow-x-auto pb-4  no-scrollbar flex-shrink pl-8 lg:pl-0  h-max">
        {/* Card 1 */}
        <Card className="w-full w-[190px] h-[180px] flex flex-col justify-between p-4 bg-gradient-to-b from-white to-blue-50 shadow-md rounded-2xl flex-shrink-0">
          <div className="flex items-center justify-between mb-2">
            <img className="w-6 h-6" alt="Bell Icon" src="/bell.svg" />
            <span className="text-[#19191A] font-semi-bold text-[14px] leading-[1.2]">
              Save
            </span>
          </div>
          <div className="text-[#19191A] font-medium text-[14px] leading-[1.2]">
            {NOTIFICATION_CONSTANTS.CARD_1_TEXT}
          </div>
          <input
            className="w-full rounded-lg border border-gray-200 px-2 py-1 mt-1 bg-white"
            placeholder=""
          />
        </Card>
        {/* Card 2 */}
        <Card className="w-full max-w-[190px] h-[180px] flex flex-col justify-between p-4 bg-white shadow-md rounded-2xl flex-shrink-0">
          <div className="flex items-center justify-between mb-2">
            <img className="w-7 h-7" alt="Bar Chart" src="/bar-chart-2.svg" />
            <img
              className="w-3.5 h-3.5"
              alt="checkmark Icon"
              src="/checkmark.svg"
            />
          </div>
          <div className="text-[#19191A] font-medium text-[11.2px] leading-[1.2] mt-8">
            {NOTIFICATION_CONSTANTS.CARD_2_TEXT}
          </div>
          <Select>
            <SelectTrigger className="w-max rounded-lg border border-gray-200 px-2 py-1 mt-1 bg-gray-100 text-gray-700">
              <SelectValue placeholder="$1,000.00" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1000">$1,000.00</SelectItem>
            </SelectContent>
          </Select>
        </Card>
        {/* Card 3 */}
        <Card className="w-full max-w-[190px] h-[180px] flex flex-col justify-between p-4 bg-white shadow-md rounded-2xl border-2 border-blue-400 flex-shrink-0 mr-8">
          <div className="flex items-center justify-between mb-2">
            <img className="w-7 h-7" alt="Clock Icon" src="/clock.svg" />
            <img
              className="w-3.5 h-3.5"
              alt="checkmark Icon"
              src="/checkmark.svg"
            />
          </div>
          <div className="text-[#19191A] font-medium text-[11.2px] leading-[1.2] w-[120px]">
            {NOTIFICATION_CONSTANTS.CARD_3_TEXT}
          </div>
          <Select>
            <SelectTrigger className="w-max rounded-lg border border-gray-200 px-2 py-1 mt-2 bg-gray-100 text-gray-700">
              <SelectValue
                placeholder={NOTIFICATION_CONSTANTS.CARD_3_INPUT_VALUE}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value={NOTIFICATION_CONSTANTS.CARD_3_INPUT_VALUE}>
                &gt; 30 days
              </SelectItem>
            </SelectContent>
          </Select>
          <span className="text-[#19191A] font-medium text-[11.2px] leading-[1.2] mt-1">
            {NOTIFICATION_CONSTANTS.CARD_3_SUBTEXT}
          </span>
        </Card>
      </div>
    </div>
  );
};
