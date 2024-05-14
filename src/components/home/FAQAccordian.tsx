import { Accordion, Text } from "@mantine/core";
import React, { useState } from "react";
import { FAQ_ACCORDIAN_DATA } from "@/constants/native-home";
import { LuMinusCircle, LuPlusCircle } from "react-icons/lu";

const FAQAccordian = () => {
  const [value, setValue] = useState<string | null>(null);
  return (
    <div className="w-full">
      <Accordion chevron={null} value={value} onChange={setValue}>
        {FAQ_ACCORDIAN_DATA.map((item) => (
          <Accordion.Item value={item.id} key={item.title}>
            <Accordion.Control>
              <div className="flex flex-row items-center justify-between">
                {item.title}
                {value === item.id ? (
                  <LuMinusCircle size={24} />
                ) : (
                  <LuPlusCircle size={24} />
                )}
              </div>
            </Accordion.Control>
            <Accordion.Panel>
              <Text size="sm">{item.description}</Text>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQAccordian;
