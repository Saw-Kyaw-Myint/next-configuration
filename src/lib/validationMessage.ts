import type { useTranslations } from 'next-intl';
import type { getTranslations } from 'next-intl/server'; 

export type TFunction = 
  | ReturnType<typeof useTranslations<never>> 
  | Awaited<ReturnType<typeof getTranslations<never>>>;

// Common function to create validation messages
export const message = (t: TFunction, attributeKey: string, rule: string, params: Record<string, any> = {}) => {
  const attribute = t(`attributes.${attributeKey}`);
  return t(`validation.${rule}`, { attribute, ...params });
};