import { AppShell, Burger, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import { LineChart } from '@mantine/charts';
import { data } from './data';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import { Navbar } from '../Navbar/Navbar';
import { PopularPosts } from '../Popular/Popular';

export function Welcome() {
  const [opened, { toggle }] = useDisclosure();
  const { t } = useTranslation();

  return (
    <AppShell
      header={{ height: 70 }}
      navbar={{
        width: 200,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Title order={1} c="blue.4" p="xs">
          {t('TITLE')}
        </Title>
      </AppShell.Header>

      <Navbar />

      <AppShell.Main>
        <Stack gap="lg">
          <Stack>
            <Title order={2}>{t('CHARTS.POPULAR')}</Title>
            <PopularPosts />
          </Stack>

          <Stack>
            <Title order={2}>{t('CHARTS.HEADER')}</Title>
            <LineChart
              h={300}
              mt={24}
              data={data}
              dataKey="date"
              series={[
                { name: 'followers', color: 'indigo.6', label: t('CHARTS.LABELS.FOLLOWERS') },
              ]}
              curveType="linear"
            />
          </Stack>
        </Stack>
      </AppShell.Main>

      <LanguageSwitcher />
    </AppShell>
  );
}
