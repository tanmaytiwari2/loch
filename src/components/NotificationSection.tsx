import React, { useRef, useEffect, useState } from "react";
import { Card } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { NOTIFICATION_CONSTANTS } from "../constants";

export const NotificationSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const cardCount = 3;
  const cardWidth = 190;
  const duplicateCount = 50;

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let currentIndex = 0;
    const totalRenderedCards = cardCount * duplicateCount;

    const scrollToNextCard = () => {
      if (!container || isHovered) return;

      currentIndex += 1;

      if (currentIndex >= totalRenderedCards) {
        currentIndex = 0;
      }

      container.scrollTo({
        left: currentIndex * cardWidth,
        behavior: "smooth",
      });
    };

    const interval = setInterval(scrollToNextCard, 3000);
    return () => clearInterval(interval);
  }, [cardWidth, cardCount, duplicateCount, isHovered]);

  // Create individual card components
  const createCard1 = (key: string) => (
    <Card
      key={key}
      className="snap-start w-[190px] h-[180px] flex flex-col justify-between p-4 bg-gradient-to-b from-white to-blue-50 shadow-md rounded-2xl flex-shrink-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-2">
        <img className="w-6 h-6" alt="Bell Icon" src="/bell.svg" />
        <span className="text-[#19191A] font-semibold text-[9.1px] leading-[1.2] self-start">
          Save
        </span>
      </div>
      <div className="text-[#19191A] font-medium text-[14px]">
        {NOTIFICATION_CONSTANTS.CARD_1_TEXT}
      </div>
      <input
        className="w-[161.7px] h-[35px] rounded-lg border border-gray-200 px-2 py-1 mt-1 bg-white text-[9.1px] leading-[120%] font-medium text-[#19191A] placeholder:text-[9.1px] placeholder:leading-[120%] placeholder:font-medium placeholder:text-[#19191A]"
        placeholder="hello@gmail.com"
      />
    </Card>
  );

  const createCard2 = (key: string) => (
    <Card
      key={key}
      className="snap-start w-[190px] h-[180px] flex flex-col justify-between p-4 bg-white shadow-md rounded-2xl flex-shrink-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-2">
        <img className="w-7 h-7" alt="Bar Chart" src="/bar-chart-2.svg" />
        <img
          className="w-3.5 h-3.5 self-start"
          alt="checkmark Icon"
          src="/checkmark.svg"
        />
      </div>
      <div className="text-[#19191A] font-medium text-[11.2px] mt-8">
        {NOTIFICATION_CONSTANTS.CARD_2_TEXT}
      </div>
      <Select>
        <SelectTrigger className="w-max rounded-lg border border-gray-200 px-2 py-1 mt-1 bg-gray-100 text-gray-700">
          <SelectValue placeholder="$1,000.00" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1000">$1,000.00</SelectItem>
          <SelectItem value="2000">$2,000.00</SelectItem>
          <SelectItem value="3000">$3,000.00</SelectItem>
        </SelectContent>
      </Select>
    </Card>
  );

  const createCard3 = (key: string) => (
    <Card
      key={key}
      className="snap-start w-[190px] h-[180px] flex flex-col justify-between p-4 bg-white shadow-md rounded-2xl border-2 border-blue-400 flex-shrink-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-2">
        <img className="w-7 h-7" alt="Clock Icon" src="/clock.svg" />
        <img
          className="w-3.5 h-3.5 self-start"
          alt="checkmark Icon"
          src="/checkmark.svg"
        />
      </div>
      <div className="text-[#19191A] font-medium text-[11.2px] w-[120px]">
        {NOTIFICATION_CONSTANTS.CARD_3_TEXT}
      </div>
      <Select>
        <SelectTrigger className="w-max rounded-lg border border-gray-200 px-2 py-1 mt-2 bg-gray-100 text-gray-700">
          <SelectValue
            placeholder={NOTIFICATION_CONSTANTS.CARD_3_INPUT_VALUE_1}
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value={NOTIFICATION_CONSTANTS.CARD_3_INPUT_VALUE_1}>
            &gt; 30 days
          </SelectItem>

          <SelectItem value={NOTIFICATION_CONSTANTS.CARD_3_INPUT_VALUE_2}>
            &gt; 60 days
          </SelectItem>

          <SelectItem value={NOTIFICATION_CONSTANTS.CARD_3_INPUT_VALUE_3}>
            &gt; 90 days
          </SelectItem>
        </SelectContent>
      </Select>
      <span className="text-[#19191A] font-medium text-[11.2px] mt-1">
        {NOTIFICATION_CONSTANTS.CARD_3_SUBTEXT}
      </span>
    </Card>
  );

  // Render cards with many duplications for long scroll
  const renderCards = () => {
    const cards = [];

    // Create many sets of the 3 cards for continuous scrolling
    for (let i = 0; i < duplicateCount; i++) {
      cards.push(createCard1(`1-${i}`));
      cards.push(createCard2(`2-${i}`));
      cards.push(createCard3(`3-${i}`));
    }

    return cards;
  };

  return (
    <div className="relative z-10 flex flex-col lg:flex-row justify-between w-full mt-16 mb-12 gap-8 lg:pl-8">
      {/* Text section */}
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full flex-1 min-w-[350px] lg:max-w-[420px] px-8">
        <img className="w-7 h-7 mb-4" alt="Bell" src="/vector.svg" />
        <div className="font-medium text-[31px] leading-[1.2] text-background-f2f2f2 mb-4 [text-shadow:_rgba(0,0,0,0.5)_2px_2px_4px] [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]">
          {NOTIFICATION_CONSTANTS.HEADLINE}
        </div>
        <div className="opacity-70 font-medium text-[16px] text-background-f2f2f2 mb-2">
          {NOTIFICATION_CONSTANTS.DESCRIPTION}
        </div>
      </div>

      {/* Auto-scroll carousel */}
      <div className="relative flex-shrink h-[180px] w-[190px] lg:w-[360px] lg:rounded-l-2xl self-center">
        <div
          className="relative h-full w-full overflow-x-hidden overflow-y-hidden scroll-smooth snap-x lg:rounded-l-2xl"
          ref={scrollRef}
        >
          <div className="flex gap-x-6 pl-8 no-scrollbar ">{renderCards()}</div>
        </div>
        <div className="absolute inset-0 pointer-events-none lg:bg-gradient-to-r lg:from-black/50 lg:via-transparent lg:to-black/80 lg:rounded-l-2xl" />
      </div>
    </div>
  );
};
