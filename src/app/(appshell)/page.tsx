import {
  Filter,
  SearchInput,
  ButtonCategories,
} from "@/global/components/common";
import {
  Box,
  Group,
  Image,
  ScrollArea,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { jobTypes } from "@/global/data/job-types";
import NextImage from "next/image";
import aha from "./aha.png";
import square from "./square.png";
import codepath from "./codepath.png";

const borderStyles = {
  borderBottom: "1px solid var(--mantine-color-default-border)",
};

export default function Home() {
  return (
    <Stack gap={0}>
      <ButtonCategories />

      <Stack style={borderStyles}>
        <SearchInput />
      </Stack>

      <Box style={borderStyles}>
        <ScrollArea type="scroll" scrollbarSize={4}>
          <Group gap={0} wrap="nowrap" className="h-[50px] md:h-[60px]">
            <Filter data={jobTypes} placeholder="Job Type" />
            <Filter data={jobTypes} placeholder="Job Type" />
            <Filter data={jobTypes} placeholder="Job Type" />
            <Filter data={jobTypes} placeholder="Job Type" />
            <Filter data={jobTypes} placeholder="Job Type" />
            <Filter data={jobTypes} placeholder="Job Type" />
            <Filter data={jobTypes} placeholder="Job Type" />
            <Filter data={jobTypes} placeholder="Job Type" />
            <Filter data={jobTypes} placeholder="Job Type" />
          </Group>
        </ScrollArea>
      </Box>

      <Stack gap={1} pb={1}>
        <Job
          src={aha}
          alt="Aha Logo"
          type="Full-time"
          title="Product Manager"
          location="Remote"
          postedAgo="5 days ago"
          compensation="$80k - $120k"
        />

        <Job
          src={square}
          alt="Square Logo"
          type="Full-time"
          title="Software Engineer"
          location="New York, NY"
          postedAgo="3 days ago"
          compensation="$100k - $150k"
        />

        <Job
          src={codepath}
          alt="CodePath Logo"
          type="Full-time"
          title="Software Engineer"
          location="San Francisco, CA"
          postedAgo="1 day ago"
          compensation="$110k - $160k"
        />

        <Job
          src={aha}
          alt="Aha Logo"
          type="Full-time"
          title="Product Manager"
          location="Remote"
          postedAgo="5 days ago"
          compensation="$80k - $120k"
        />

        <Job
          src={square}
          alt="Square Logo"
          type="Full-time"
          title="Software Engineer"
          location="New York, NY"
          postedAgo="3 days ago"
          compensation="$100k - $150k"
        />

        <Job
          src={codepath}
          alt="CodePath Logo"
          type="Full-time"
          title="Software Engineer"
          location="San Francisco, CA"
          postedAgo="1 day ago"
          compensation="$110k - $160k"
        />

        <Job
          src={aha}
          alt="Aha Logo"
          type="Full-time"
          title="Product Manager"
          location="Remote"
          postedAgo="5 days ago"
          compensation="$80k - $120k"
        />

        <Job
          src={square}
          alt="Square Logo"
          type="Full-time"
          title="Software Engineer"
          location="New York, NY"
          postedAgo="3 days ago"
          compensation="$100k - $150k"
        />

        <Job
          src={codepath}
          alt="CodePath Logo"
          type="Full-time"
          title="Software Engineer"
          location="San Francisco, CA"
          postedAgo="1 day ago"
          compensation="$110k - $160k"
        />

        <Job
          src={aha}
          alt="Aha Logo"
          type="Full-time"
          title="Product Manager"
          location="Remote"
          postedAgo="5 days ago"
          compensation="$80k - $120k"
        />

        <Job
          src={square}
          alt="Square Logo"
          type="Full-time"
          title="Software Engineer"
          location="New York, NY"
          postedAgo="3 days ago"
          compensation="$100k - $150k"
        />

        <Job
          src={codepath}
          alt="CodePath Logo"
          type="Full-time"
          title="Software Engineer"
          location="San Francisco, CA"
          postedAgo="1 day ago"
          compensation="$110k - $160k"
        />

        <Job
          src={aha}
          alt="Aha Logo"
          type="Full-time"
          title="Product Manager"
          location="Remote"
          postedAgo="5 days ago"
          compensation="$80k - $120k"
        />

        <Job
          src={square}
          alt="Square Logo"
          type="Full-time"
          title="Software Engineer"
          location="New York, NY"
          postedAgo="3 days ago"
          compensation="$100k - $150k"
        />

        <Job
          src={codepath}
          alt="CodePath Logo"
          type="Full-time"
          title="Software Engineer"
          location="San Francisco, CA"
          postedAgo="1 day ago"
          compensation="$110k - $160k"
        />
        <Job
          src={aha}
          alt="Aha Logo"
          type="Full-time"
          title="Product Manager"
          location="Remote"
          postedAgo="5 days ago"
          compensation="$80k - $120k"
        />

        <Job
          src={square}
          alt="Square Logo"
          type="Full-time"
          title="Software Engineer"
          location="New York, NY"
          postedAgo="3 days ago"
          compensation="$100k - $150k"
        />

        <Job
          src={codepath}
          alt="CodePath Logo"
          type="Full-time"
          title="Software Engineer"
          location="San Francisco, CA"
          postedAgo="1 day ago"
          compensation="$110k - $160k"
        />
      </Stack>
    </Stack>
  );
}

function Job({
  src,
  alt,
  type,
  title,
  location,
  postedAgo,
  compensation,
}: any) {
  return (
    <Group
      p="md"
      justify="space-between"
      style={{ borderBottom: "1px solid var(--mantine-color-default-border)" }}>
      <Group>
        <Image
          component={NextImage}
          src={src}
          alt={alt}
          h={50}
          w={50}
          radius="sm"
        />

        <Stack gap={0}>
          <Title order={4}>{title}</Title>
          <Group>
            <Text size="sm">{type}</Text>
            <Text size="sm">{location}</Text>
            <Text size="sm">{compensation}</Text>
          </Group>
        </Stack>
      </Group>

      <Text size="sm">{postedAgo}</Text>
    </Group>
  );
}
