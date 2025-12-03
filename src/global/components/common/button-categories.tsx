"use client";
import {
  IconPaw,
  IconHome,
  IconBriefcase,
  IconArmchair2,
  IconDeviceDesktop,
  IconSteeringWheel,
} from "@tabler/icons-react";
import { Box, Button, Group, ScrollArea, Text } from "@mantine/core";

const categories = [
  {
    label: "Jobs",
    icon: <IconBriefcase size={20} stroke={1.5} />,
  },
  {
    label: "Properties",
    icon: <IconHome size={20} stroke={1.5} />,
  },
  {
    label: "Vehicles",
    icon: <IconSteeringWheel size={20} stroke={1.5} />,
  },
  {
    label: "Electronics",
    icon: <IconDeviceDesktop size={20} stroke={1.5} />,
  },
  {
    label: "Furniture",
    icon: <IconArmchair2 size={20} stroke={1.5} />,
  },
  {
    label: "Pets",
    icon: <IconPaw size={20} stroke={1.5} />,
  },
  {
    label: "Electronicss",
    icon: <IconDeviceDesktop size={20} stroke={1.5} />,
  },
  {
    label: "Furnituree",
    icon: <IconArmchair2 size={20} stroke={1.5} />,
  },
  {
    label: "Petss",
    icon: <IconPaw size={20} stroke={1.5} />,
  },
  {
    label: "Jobss",
    icon: <IconBriefcase size={20} stroke={1.5} />,
  },
  {
    label: "Propertiess",
    icon: <IconHome size={20} stroke={1.5} />,
  },
  {
    label: "Vehicless",
    icon: <IconSteeringWheel size={20} stroke={1.5} />,
  },
];

export function ButtonCategories() {
  return (
    <Box
      style={{
        borderBottom: "1px solid var(--mantine-color-default-border)",
      }}>
      <ScrollArea type="scroll" scrollbarSize={4}>
        <Group gap={0} wrap="nowrap" className="h-[50px] md:h-[60px]">
          {categories.map(({ label, icon }, index) => (
            <Button
              h="100%"
              radius={0}
              variant="white"
              key={label}
              w="auto"
              style={{
                flex: "0 0 auto", // do NOT shrink
                whiteSpace: "nowrap", // keep text on one line
                borderRight:
                  index < categories.length - 1
                    ? "1px solid var(--mantine-color-default-border)"
                    : undefined,
              }}>
              {icon}
              <Text size="sm" ml={4}>
                {label}
              </Text>
            </Button>
          ))}
        </Group>
      </ScrollArea>
    </Box>
  );
}
