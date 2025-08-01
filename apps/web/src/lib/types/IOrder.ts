export interface IOrder {
  id: string;
  fromTokenKey: string;
  fromNetwork: "ethereum" | "sui";
  toTokenKey: string;
  toNetwork: "ethereum" | "sui";
  totalAmount: number;
  collectedAmount: number;
  status: string; // Allow string to match Prisma schema
  signature?: string | null; // Optional signature field
  orderHash?: string | null; // Optional order hash field
  secrets?: string | null; // Optional secrets field (stored as JSON string)
  createdAt: Date;
  expiresAt: Date;
  updatedAt: Date;
}

export interface IOrderWithTokens
  extends Omit<
    IOrder,
    "fromTokenKey" | "fromNetwork" | "toTokenKey" | "toNetwork"
  > {
  fromToken: {
    symbol: string;
    name: string;
    logo: string;
    network: "ethereum" | "sui";
  };
  toToken: {
    symbol: string;
    name: string;
    logo: string;
    network: "ethereum" | "sui";
  };
}

export type SortOption =
  | "newest"
  | "oldest"
  | "amount-high"
  | "amount-low"
  | "progress-high"
  | "progress-low";

export interface IOrderProgress {
  orderId: string;
  currentPercentage: number;
  availablePercentages: number[];
}
