'use client';
import { Stack, Table, Title } from '@mantine/core';
import { useTranslation } from '../../../i18n/client';

export function Payments({ lng }) {
  const { t } = useTranslation(lng, 'common');

  const automaticTransfer = t('PAYMENTS.LABELS.TYPE.AUTOMATIC');
  const manualTransfer = t('PAYMENTS.LABELS.TYPE.MANUAL');

  const payments = [
    { date: 'January 14', amount: 12.011, transferType: automaticTransfer },
    { date: 'February 14', amount: 14.007, transferType: automaticTransfer },
    { date: 'March 1', amount: 10.9, transferType: manualTransfer },
    { date: 'March 14', amount: 137.33, transferType: automaticTransfer },
    { date: 'April 14', amount: 140.12, transferType: automaticTransfer },
  ];

  const rows = payments.map((element) => (
    <Table.Tr key={element.date}>
      <Table.Td>{element.date}</Table.Td>
      <Table.Td>{element.amount}</Table.Td>
      <Table.Td>{element.transferType}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Stack>
      <Title order={2}>{t('PAYMENTS.HEADER')}</Title>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>{t('PAYMENTS.LABELS.DATE')}</Table.Th>
            <Table.Th>{t('PAYMENTS.LABELS.AMOUNT')}</Table.Th>
            <Table.Th>{t('PAYMENTS.LABELS.TRANSFER_TYPE')}</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Stack>
  );
}
