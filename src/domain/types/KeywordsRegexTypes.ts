export const KeywordsRegexType = {
  cpf: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
  cnpj: /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/,
  phone: /^\(\d{2}\)\s\d{4,5}\-\d{4}$/,
  email: /^\S+@\S+\.\S+$/,
  name: /^[A-Za-z]+ [A-Za-z]+$/,
  address: /^[A-Za-z]+ [A-Za-z]+$/,
};

export type KeywordsRegexType = typeof KeywordsRegexType;