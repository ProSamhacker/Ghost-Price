export interface Product {
  name: string;
  price: number;
  consumableCost: number;
  consumableFrequencyMonths: number;
  imageUrl?: string;
}

export interface ComparisonData {
  trap: Product;
  winner: Product;
  breakEvenMonths: number;
  fiveYearSavings: number;
}

export const mockComparisonData: ComparisonData = {
  trap: {
    name: "Levoit Core 300",
    price: 99.99,
    consumableCost: 30,
    consumableFrequencyMonths: 4,
  },
  winner: {
    name: "Winix 5500-2",
    price: 159.99,
    consumableCost: 40,
    consumableFrequencyMonths: 12,
  },
  breakEvenMonths: 14,
  fiveYearSavings: 190,
};

export function calculateTotalCost(product: Product, years: number): number {
  const months = years * 12;
  const consumableReplacements = Math.floor(months / product.consumableFrequencyMonths);
  return product.price + (consumableReplacements * product.consumableCost);
}

export function getChartData(trap: Product, winner: Product) {
  return [
    {
      year: "Year 1",
      trap: calculateTotalCost(trap, 1),
      winner: calculateTotalCost(winner, 1),
    },
    {
      year: "Year 3",
      trap: calculateTotalCost(trap, 3),
      winner: calculateTotalCost(winner, 3),
    },
    {
      year: "Year 5",
      trap: calculateTotalCost(trap, 5),
      winner: calculateTotalCost(winner, 5),
    },
  ];
}

export const trapFiveYearCost = calculateTotalCost(mockComparisonData.trap, 5);
export const winnerFiveYearCost = calculateTotalCost(mockComparisonData.winner, 5);

// Dashboard Data
export interface DashboardProduct {
  id: string;
  name: string;
  category: "Tech" | "Home" | "Office" | "Audio";
  ghostScore: number;
  annualCost: number;
  imageUrl: string;
  status: "BIFL_APPROVED" | "MONEY_PIT";
}

export const dashboardData: DashboardProduct[] = [
  {
    id: "B07VVK39F7",
    name: "Winix 5500-2 Air Purifier with True HEPA",
    category: "Home",
    ghostScore: 92,
    annualCost: 40,
    imageUrl: "/placeholder.svg",
    status: "BIFL_APPROVED",
  },
  {
    id: "B08L5WGPPF",
    name: "Sony WH-1000XM4 Wireless Noise Cancelling",
    category: "Audio",
    ghostScore: 88,
    annualCost: 0,
    imageUrl: "/placeholder.svg",
    status: "BIFL_APPROVED",
  },
  {
    id: "B0BSHF7WHW",
    name: "Logitech MX Master 3S Wireless Mouse",
    category: "Office",
    ghostScore: 85,
    annualCost: 0,
    imageUrl: "/placeholder.svg",
    status: "BIFL_APPROVED",
  },
  {
    id: "B09V3KXJPB",
    name: "Apple MacBook Air M2 Laptop",
    category: "Tech",
    ghostScore: 94,
    annualCost: 0,
    imageUrl: "/placeholder.svg",
    status: "BIFL_APPROVED",
  },
  {
    id: "B07S5T8VLR",
    name: "Levoit Core 300 Air Purifier",
    category: "Home",
    ghostScore: 38,
    annualCost: 90,
    imageUrl: "/placeholder.svg",
    status: "MONEY_PIT",
  },
  {
    id: "B09JQMJHXY",
    name: "Generic Bluetooth Earbuds Pro",
    category: "Audio",
    ghostScore: 25,
    annualCost: 45,
    imageUrl: "/placeholder.svg",
    status: "MONEY_PIT",
  },
  {
    id: "B08N5WRWNW",
    name: "Budget Wireless Gaming Mouse",
    category: "Office",
    ghostScore: 32,
    annualCost: 30,
    imageUrl: "/placeholder.svg",
    status: "MONEY_PIT",
  },
  {
    id: "B07XQXZXJC",
    name: "Cheap Laptop Cooling Pad with RGB",
    category: "Tech",
    ghostScore: 22,
    annualCost: 25,
    imageUrl: "/placeholder.svg",
    status: "MONEY_PIT",
  },
];
