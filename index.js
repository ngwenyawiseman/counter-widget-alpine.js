function counter() {
    return {
        count: 0,
        maxCount: 10,  // Set the max value for the counter
        increment() {
            if (this.count < this.maxCount) {
                this.count++;
            }
        },
        decrement() {
            if (this.count > 0) {
                this.count--;
            }
        },
        reset() {
            this.count = 0;
        },
    };
}

// Ensure that AlpineJS is properly loaded
document.addEventListener('alpine:init', () => {
    Alpine.data('counter', counter);
});
