// index.js
function Counter() {
    return {
        count: 0,
        increment() {
            this.count++;
        },
        decrement() {
            if (this.count > 0) {
                this.count--;
            }
        },
    };
}

// Ensure that AlpineJS is properly loaded
document.addEventListener('alpine:init', () => {
    Alpine.data('counter', Counter);
});