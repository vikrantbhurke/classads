import { TextInput } from "@mantine/core";
import { IconSearch, IconX } from "@tabler/icons-react";
import classes from "@/global/styles/app.module.css";

export function SearchInput() {
  return (
    <TextInput
      radius={0}
      placeholder="Search..."
      classNames={{ input: classes.searchInput }}
      leftSection={<IconSearch size={16} />}
      rightSection={<IconX size={16} />}
    />
  );
}
