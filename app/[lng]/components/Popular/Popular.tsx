import { Card, Flex, Group, Image, LoadingOverlay, Text } from '@mantine/core';
import { useFetch } from '@mantine/hooks';
import { IconHeart } from '@tabler/icons-react';

export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
}

export function PopularPosts() {
  const { data, loading, error } = useFetch<Cat[]>(
    'https://api.thecatapi.com/v1/images/search?limit=3'
  );

  return (
    <Group>
      {error && <Text c="red">{error.message}</Text>}
      <LoadingOverlay visible={loading} />

      {data && (
        <>
          <Card shadow="sm" padding="lg" radius="md" withBorder w="300">
            <Card.Section>
              <Image src={data[0].url} height={300} />
            </Card.Section>
            <Flex mih={50} gap="xs" justify="flex-start" align="center" direction="row" wrap="wrap">
              <Text fw={700}>30</Text>
              <IconHeart />
            </Flex>
          </Card>
          <Card shadow="sm" padding="lg" radius="md" withBorder w="300">
            <Card.Section>
              <Image src={data[1].url} height={300} />
            </Card.Section>
            <Flex mih={50} gap="xs" justify="flex-start" align="center" direction="row" wrap="wrap">
              <Text fw={700}>21</Text>
              <IconHeart />
            </Flex>
          </Card>
          <Card shadow="sm" padding="lg" radius="md" withBorder w="300">
            <Card.Section>
              <Image src={data[2].url} height={300} />
            </Card.Section>
            <Flex mih={50} gap="xs" justify="flex-start" align="center" direction="row" wrap="wrap">
              <Text fw={700}>13</Text>
              <IconHeart />
            </Flex>
          </Card>
        </>
      )}
    </Group>
  );
}
