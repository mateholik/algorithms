export type Category = {
  name: string;
  children?: Category[];
  id: number;
  linkedCategory?: number;
  parentId?: number;
};

export const tree: Category[] = [
  {
    name: "category_1",
    id: 1,
    children: [
      { name: "category_1_1", id: 11, linkedCategory: 2 },
      {
        name: "category_1_2",
        id: 12,
        children: [{ name: "category_1_2_1", id: 121 }],
      },
    ],
  },
  {
    name: "category_2",
    id: 2,
    children: [
      { name: "category_2_1", id: 21 },
      { name: "category_2_2", id: 22 },
    ],
  },
  {
    name: "category_3",
    id: 3,
    children: [
      {
        name: "category_3_1",
        id: 31,
        children: [{ name: "category_3_1_1", id: 311, linkedCategory: 2 }],
      },
    ],
  },
];
