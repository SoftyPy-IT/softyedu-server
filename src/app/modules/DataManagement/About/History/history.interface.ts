export type THistory = {
  title: string;
  description: string;
  vision: string;
  mission: string;
  short_history: [
    {
      year: number;
      description: string;
    },
  ];
};
