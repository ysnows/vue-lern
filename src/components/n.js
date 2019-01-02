import Vue from 'vue';


Vue.directive("n", function (el, binding) {
        el.textContent = Math.pow(binding.value, 2)
    }
);
