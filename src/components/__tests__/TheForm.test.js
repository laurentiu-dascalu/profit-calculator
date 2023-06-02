import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TheForm from '../TheForm.vue'

describe('TheForm', () => {
  it('renders properly', () => {
    const wrapper = mount(TheForm, { props: { price: 0, cost: 0, discount: 0, enableDiscount: false } })
    expect(wrapper.text()).toContain('discount')
  })
})
