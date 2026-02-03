/**
 * API Client for GhostPrice FastAPI Backend
 */

import type { Product, ComparisonData } from './mockData';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
const AMAZON_TAG = import.meta.env.VITE_AMAZON_TAG || 'lifecycle-20';

export class ApiError extends Error {
    constructor(message: string, public status?: number) {
        super(message);
        this.name = 'ApiError';
    }
}

/**
 * Fetch product comparison data from FastAPI backend
 */
export async function fetchProductComparison(asin: string): Promise<ComparisonData> {
    try {
        const response = await fetch(`${API_URL}/analyze-json?asin=${asin}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            if (response.status === 404) {
                throw new ApiError('Product not found in database', 404);
            }
            throw new ApiError(`Failed to fetch product data: ${response.statusText}`, response.status);
        }

        const data = await response.json();
        return data as ComparisonData;
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }
        console.error('API Error:', error);
        throw new ApiError('Failed to connect to backend API');
    }
}

/**
 * Build Amazon affiliate link with Associates tag
 */
export function buildAffiliateLink(asin: string): string {
    return `https://www.amazon.com/dp/${asin}?tag=${AMAZON_TAG}`;
}
