/**
 * TypeScript type definitions for API integration
 */

// Re-export existing Product interface from mockData
export type { Product, ComparisonData } from './mockData';

/**
 * FastAPI response format (for reference)
 */
export interface FastAPIProductResponse {
    product_id: string;
    status: 'trap' | 'fair' | 'unknown';
    category: string;
    math: {
        sticker_price: number;
        consumable_name: string | null;
        consumable_price: number | null;
        consumable_lifespan_months: number | null;
        annual_maintenance: number;
        total_year_1: number;
    };
    recommendation?: {
        asin: string;
        name: string;
        reason: string;
    };
}
