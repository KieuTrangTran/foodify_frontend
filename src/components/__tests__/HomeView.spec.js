import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue';


describe('HomeView', () => {
  it('renders properly', () => {
    vi.mock('firebase/auth', () => {
      return { getAuth: vi.fn(), onAuthStateChanged: vi.fn() }
    });
    const wrapper = mount(HomeView, { props: { title: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })

})
