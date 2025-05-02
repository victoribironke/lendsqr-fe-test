export const PAGES = {
  login: "/login",
  users: "/users",
  user_details: (id: string) => `/users/${id}`,
};

export const IMAGES = {
  lendsqr_logo: "/lendsqr-logo.png",
  login_image: "/login-image.png",

  users: "/users.png",
  gurantor: "/gurantors.png",
  sack: "/sack.png",
  handshake: "/handshake.png",
  piggy: "/piggy.png",
  dashboard: "/dashboard.png",
  loan: "/loan.png",
  userCheck: "/user-check.png",
  userCog: "/user-cog.png",
  briefcase: "/briefcase.png",
  bank: "/bank.png",
  coins: "/coins.png",
  transaction: "/transaction.png",
  galaxy: "/galaxy.png",
  userTimes: "/user-times.png",
  scroll: "/scroll.png",
  chart: "/chart.png",
  slider: "/sliders.png",
  badge: "/badge.png",
  logout: "/logout.png",
  clipboard: "/clipboard.png",
  tire: "/tire.png",
  eye: "/eye.svg",
  user: "/np_user.svg",
  userDelete: "/np_delete.svg",
  filter: "/filter.svg",
  menu: "/menu.svg",
  person: "/persons.png",
  people: "/people.png",
  file: "/file.png",
  money: "/money.png",
};

export const MENU_ITEMS = [
  {
    name: "Customers",
    subCategories: [
      {
        name: "Users",
        icon: IMAGES.users,
      },
      {
        name: "Gurantors",
        icon: IMAGES.gurantor,
      },
      {
        name: "Loans",
        icon: IMAGES.sack,
      },
      {
        name: "Decision Models",
        icon: IMAGES.handshake,
      },
      {
        name: "Savings",
        icon: IMAGES.piggy,
      },
      {
        name: "Loan Requests",
        icon: IMAGES.loan,
      },
      {
        name: "Whitelist",
        icon: IMAGES.userCheck,
      },
      {
        name: "Karma",
        icon: IMAGES.userTimes,
      },
    ],
  },
  {
    name: "Businesses",
    subCategories: [
      {
        name: "Organization",
        icon: IMAGES.briefcase,
      },
      {
        name: "Loan Products",
        icon: IMAGES.loan,
      },
      {
        name: "Savings Products",
        icon: IMAGES.bank,
      },
      {
        name: "Fees and Charges",
        icon: IMAGES.coins,
      },
      {
        name: "Transactions",
        icon: IMAGES.transaction,
      },
      {
        name: "Services",
        icon: IMAGES.galaxy,
      },
      {
        name: "Service Account",
        icon: IMAGES.userCog,
      },
      {
        name: "Settlements",
        icon: IMAGES.scroll,
      },
      {
        name: "Reports",
        icon: IMAGES.chart,
      },
    ],
  },
  {
    name: "Settings",
    subCategories: [
      {
        name: "Preferences",
        icon: IMAGES.slider,
      },
      {
        name: "Fees and Pricing",
        icon: IMAGES.badge,
      },
      {
        name: "Audit Logs",
        icon: IMAGES.clipboard,
      },
      {
        name: "Systems Messages",
        icon: IMAGES.tire,
      },
    ],
  },
];

export const USER_STATUS = [
  {
    label: "Active",
    value: "active",
  },
  {
    label: "InActive",
    value: "inactive",
  },
  {
    label: "Blacklisted",
    value: "blacklisted",
  },
  {
    label: "Pending",
    value: "pending",
  },
];
