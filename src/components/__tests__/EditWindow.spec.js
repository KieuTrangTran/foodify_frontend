import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import EditWindow from '@/components/EditWindow.vue'

describe('EditWindow.vue', () => {
    it('should render correctly when visible', () => {
        const wrapper = mount(EditWindow, {
            props: { isVisible: true, recipeData: { name: '', calories: 0, cookTime: 0 } }
        })
        expect(wrapper.isVisible()).toBe(true)
    })

    it('should update the fields when the user types', async () => {
        const wrapper = mount(EditWindow, {
            props: { isVisible: true, recipeData: { name: '', calories: 0, cookTime: 0 } }
        })

        await wrapper.find('#name').setValue('New Recipe')
        await wrapper.find('#calories').setValue(500)
        await wrapper.find('#cookTime').setValue(30)

        expect(wrapper.vm.editableData.name).toBe('New Recipe')
        expect(wrapper.vm.editableData.calories).toBe(500)
        expect(wrapper.vm.editableData.cookTime).toBe(30)
    })

    it('should emit the correct events when saveChanges is successful', async () => {
        global.fetch = vi.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve({ id: 1, name: 'New Recipe', calories: 500, cookTime: 30 })
            })
        )

        const wrapper = mount(EditWindow, {
            props: { isVisible: true, recipeData: { id: 1, name: '', calories: 0, cookTime: 0 } }
        })

        await wrapper.vm.saveChanges()

        expect(wrapper.emitted()['recipe-saved']).toBeTruthy()
        expect(wrapper.emitted()['update:isVisible']).toBeTruthy()
    })

})
