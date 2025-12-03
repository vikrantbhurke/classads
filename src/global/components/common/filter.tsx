"use client";
import { useState } from "react";
import { IconChevronDown } from "@tabler/icons-react";
import { Input, InputBase, Combobox, useCombobox, Text } from "@mantine/core";

type FilterProps = {
  data: any[];
  placeholder: string;
};

export function Filter({ data, placeholder }: FilterProps) {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = data.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  const chevron = (
    <IconChevronDown size={14} color="var(--mantine-color-default-border)" />
  );

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}>
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          radius={0}
          styles={{
            input: {
              border: "none",
              height: 49,
              flex: "0 0 auto", // do NOT shrink
              whiteSpace: "nowrap", // keep text on one line
            },
          }}
          rightSection={chevron}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}>
          {value ? (
            <Text size="sm">{value}</Text>
          ) : (
            <Input.Placeholder>{placeholder}</Input.Placeholder>
          )}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown
        miw="110px"
        style={{ border: "1px solid var(--mantine-color-default-border)" }}>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
