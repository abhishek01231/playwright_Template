export const wait = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

export const today = () => {
  const d = new Date();
  return d.toISOString().split('T')[0];
};

export const formatDate = (date) => new Date(date).toISOString();
