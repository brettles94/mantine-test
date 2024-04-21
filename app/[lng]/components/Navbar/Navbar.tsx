'use client';
import { AppShell, NavLink } from '@mantine/core';
import { IconActivity, IconChevronRight, IconMoneybag } from '@tabler/icons-react';
import { useTranslation } from '../../../i18n/client';

export function Navbar({ lng }) {
  const { t } = useTranslation(lng, 'common');
  return (
    <AppShell.Navbar>
      <NavLink
        label={t('MENUS.CHARTS')}
        leftSection={<IconActivity size="1rem" stroke={1.5} />}
        rightSection={
          <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
        }
        variant="filled"
        href={`/${lng}/`}
      />
      <NavLink
        label={t('MENUS.PAYMENTS')}
        leftSection={<IconMoneybag size="1rem" stroke={1.5} />}
        rightSection={
          <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
        }
        variant="filled"
        href={`/${lng}/payments`}
      />
    </AppShell.Navbar>
  );
}
