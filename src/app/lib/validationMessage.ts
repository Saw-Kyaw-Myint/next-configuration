export type TranslationValue = string | number | boolean | Date;

export type TFunction = (
  key: string | number,
  values?: Record<string, TranslationValue>
) => string;

export const createValidationMessage = (
  t: TFunction,
  validationKey: string,
  attributeKey: string,
  interpolationValues: Record<string, TranslationValue> = {}
) => {
  const localizedAttribute = t(attributeKey);

  const message = t(validationKey, {
    attribute: localizedAttribute,
    ...interpolationValues,
  });

  return { message };
};
