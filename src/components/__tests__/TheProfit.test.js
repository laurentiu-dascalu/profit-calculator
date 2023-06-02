import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TheProfit from '../TheProfit.vue'

describe('TheProfit', () => {
  it('renders properly', () => {
    const wrapper = mount(TheProfit, { props: { showProfit: 123 } })
    expect(wrapper.text()).toContain(123)
  })
})
