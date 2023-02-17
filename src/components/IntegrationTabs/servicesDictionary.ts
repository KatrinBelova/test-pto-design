export interface IServicesDictionary {
  [key: string]: {
    id: string;
    img: string;
    title: string;
    text: string;
    isActive: boolean;
    direction: DirectionType;
  };
}

export const servicesDictionary: IServicesDictionary = {
  id1: {
    id: 'id1',
    img: '/images/sapling.png',
    title: 'Sapling',
    text: 'HR Management',
    isActive: false,
    direction: 'lt',
  },
  id2: {
    id: 'id2',
    img: '/images/workday.png',
    title: 'Workday',
    text: 'HR Management',
    isActive: false,
    direction: 'lm',
  },
  id3: {
    id: 'id3',
    img: '/images/xero.png',
    title: 'Xero',
    text: 'Employers Base',
    isActive: false,
    direction: 'lb',
  },
  id4: {
    id: 'id4',
    img: '/images/rippling.png',
    title: 'Rippling',
    text: 'Salary Management',
    isActive: false,
    direction: 'rt',
  },
  id5: {
    id: 'id5',
    img: '/images/expensify.png',
    title: 'Expensify',
    text: 'HR Management',
    isActive: false,
    direction: 'rm',
  },
  id6: {
    id: 'id6',
    img: '/images/zenefits.png',
    title: 'Zenefits',
    text: 'HR Management',
    isActive: true,
    direction: 'rb',
  },
};
