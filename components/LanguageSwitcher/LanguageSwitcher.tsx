import { Menu, Affix, ActionIcon } from '@mantine/core';
import { IconLanguageHiragana } from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation();
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Affix position={{ bottom: 20, right: 20 }}>
          <ActionIcon variant="filled" size="xl" radius="xl" aria-label="IconLanguage">
            <IconLanguageHiragana style={{ width: '70%', height: '70%' }} stroke={1.5} />
          </ActionIcon>
        </Affix>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Item onClick={() => i18n.changeLanguage('en-US')}>{t('LANGUAGES.ENGLISH')}</Menu.Item>
        <Menu.Item onClick={() => i18n.changeLanguage('jp')}>{t('LANGUAGES.JAPANESE')}</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
