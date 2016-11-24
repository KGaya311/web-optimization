# Website Performance Optimization portfolio project

### To run the Code 

1. Download the zip-file and extract.

2. Open the 'views' folder and open the pizza.html file in a browser.

---

###Optimizations for pizza.html,style.css,main.js 

1. Minified JS using:
   grunt uglify

2. Minified CSS using:
   grunt cssmin

---

###Optimizations for main.js

1. Variable pizzaDiv is declared before for-loop for better loading.

2. addEventListener function
	* Changed the number of pizzas to be displayed to the value of (number of rows * columns) 

---

###Optimizations for pizza.html,index.html

1. Added meta tag for better responsiveness.

2. Linked the minified files of stylesheets and JS.

3. Optimized pictures are used.

