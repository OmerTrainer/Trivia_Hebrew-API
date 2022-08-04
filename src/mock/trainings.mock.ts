const now: Date = new Date();
const currentDate: Date = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));

const trainings = [
  {
    startDate: currentDate,
    endDate: new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate() + 7)),
    forceId: 1,
    parentId: null,
    children: [
      {
        startDate: currentDate,
        endDate: new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate() + 3)),
        forceId: 2,
        parentId: 1,
        children: [],
      },
      {
        startDate: new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate() + 1)),
        endDate: new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate() + 4)),
        forceId: 3,
        parentId: 1,
        children: [],
      },
      {
        startDate: new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate() + 2)),
        endDate: new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate() + 7)),
        forceId: 4,
        parentId: 1,
        children: [],
      },
    ],
  },
  {
    startDate: new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate() - 7)),
    endDate: new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate() - 2)),
    forceId: 5,
    parentId: null,
    children: [
      {
        startDate: new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate() - 7)),
        endDate: new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate() - 4)),
        forceId: 6,
        parentId: 5,
        children: [],
      },
      {
        startDate: new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate() - 6)),
        endDate: new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate() - 3)),
        forceId: 7,
        parentId: 5,
        children: [],
      },
      {
        startDate: new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate() - 5)),
        endDate: new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate() - 2)),
        forceId: 8,
        parentId: 5,
        children: [],
      },
    ],
  },
];

export default trainings;
