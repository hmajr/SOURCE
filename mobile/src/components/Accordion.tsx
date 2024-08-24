import dayjs from 'dayjs';
import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import { FORMAT_STYLE } from '../lib/dayjs';

type TradeInfo = {
  id: string,
  ticker: string,
  result: number,
  entry_date: Date,
  exit_date: Date
}

interface AccordionProps {
  title: string;
  children: TradeInfo;
}

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);
  const animatedHeight = useRef(new Animated.Value(0)).current;

  const toggleAccordion = () => {
    setExpanded(!expanded);
    Animated.timing(animatedHeight, {
      toValue: expanded ? 0 : 150, // Adjust 150 to your desired content height
      duration: 300,
      useNativeDriver: false, 
    }).start();
  };

  return (
    <View className="border-b-2 border-zinc-200">
      <TouchableOpacity onPress={toggleAccordion} className="p-3 bg-zinc-900">
        <View className='flex'>
          <Text className="font-semibold text-lg text-white">{title}</Text>
        </View>
      </TouchableOpacity>
      <Animated.View className="overflow-hidden" style={{ height: animatedHeight }}>
        <Text className='text-white  font-bold'>
          Ticker: <Text className='font-normal'>{children.ticker}</Text>
        </Text>
        <Text className='text-white  font-bold'>
          Result: <Text className='font-normal'>{`R$ ${children.result}`}</Text>
        </Text>
        <Text className='text-white  font-bold'>
          Entry Date: <Text className='font-normal'>{dayjs(children.entry_date).format(FORMAT_STYLE)}</Text>
        </Text>
        <Text className='text-white  font-bold'>
          Exit Date: <Text className='font-normal'>{dayjs(children.exit_date).format(FORMAT_STYLE)}</Text>
        </Text>
      </Animated.View>
    </View>
  );
};

export default Accordion;