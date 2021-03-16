import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import Calculator from '@/components/Calculator.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  });
  it('can add two numbers', () =>{
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('1');
    expect(wrapper.vm.runningTotal).to.equal(5)      
  });

  xit('can subtract one number from another');
  
  xit('can multiply two numbers');
  xit('can divide a number into another');
  xit('can concatenate multiple number button clicks');
  xit('can chain multiple operations together');
  xit('can clear the running total without affecting the calculation');

})






