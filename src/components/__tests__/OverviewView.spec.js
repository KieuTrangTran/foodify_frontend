import { render, waitFor } from '@testing-library/vue';
import OverviewView from '@/views/OverviewView.vue';
import { describe, it, expect, vi } from 'vitest';

describe('OverviewView', () => {
    it('fetchRecipes is called on mount and updates recipes', async () => {
        const mockRecipes = [
            { id: 1, name: 'Test Recipe 1' },
            { id: 2, name: 'Test Recipe 2' },
        ];

        // Mock global.fetch using vitest's mocking system
        global.fetch = vi.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockRecipes),
            })
        );

        // Render the component
        const { container } = render(OverviewView);

        // Wait for fetchRecipes to be called and updates to be rendered
        await waitFor(() => {
            // Check if the elements for the recipes are present in the container
            mockRecipes.forEach(recipe => {
                expect(container.textContent).toContain(recipe.name);
            });
        });
    });
});