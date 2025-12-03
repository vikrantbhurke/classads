"use client";
import { useRouter } from "next/navigation";
import { homeRoute } from "@/global/constants";
import { Button, Group, Text } from "@mantine/core";

const group = `h-[50px] md:h-[60px] w-full fixed top-0 z-100 max-w-[768px]`;

export function Header() {
  const router = useRouter();

  const handleClick = () => router.push(homeRoute);

  return (
    <Group
      px="md"
      className={group}
      justify="space-between"
      style={{
        borderBottom: "1px solid var(--mantine-color-default-border)",
      }}>
      <Button p={0} onClick={handleClick} variant="transparent">
        <Text pr="xs" fz={24} fw="bolder" fs="italic">
          Classads
        </Text>
      </Button>

      <Group>
        <Button radius="xl">Post Ad</Button>
        <Text visibleFrom="sm">About</Text>
        <Text visibleFrom="sm">Profile</Text>
        <Text visibleFrom="sm">Settings</Text>
        <Text>Menu</Text>
      </Group>
    </Group>
  );
}
