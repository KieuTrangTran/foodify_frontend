import { render } from '@testing-library/vue';
import { describe, test } from 'vitest';
import assert from 'assert';
import RecepieContainer from '@/components/RecepieContainer.vue'

describe('RecepieContainer', () => {
    test('renders correctly and displays recipe data', async () => {
        const recipe = {
            name: 'Test Recipe',
            calories: 500,
            cookTime: 30
        }
        const { getByText } = render(RecepieContainer, {
            props: { recipe }
        })
        assert(getByText(recipe.name))
        assert(getByText(`${recipe.calories} CALS/${recipe.cookTime} MIN.`));
    })
})
