export const titles = {
  loginPage: "Login | Salesforce",
};

export const subTitles = {
  setupPage: "Setup",
  salesPage: "Sales",
};

export const accountOptions = {
  allAccounts: "All Accounts",
  details: "Details",
};

export const userData: { username: string; password: string } = {
  username: process.env.SALESFORCE_USERNAME,
  password: process.env.SALESFORCE_PASSWORD,
};

export const sampleData = {
  username: "Burlington Textiles Corp of America",
  industry: "Energy",
  phone: "000 111 333",
};
