Sieve of Eratosthenes Implementation
This project provides an implementation of the Sieve of Eratosthenes algorithm to find all prime numbers up to a given number 
𝑛
n. The Sieve of Eratosthenes is an efficient way to compute all primes smaller than or equal to a given limit, and this implementation allows you to input a number, calculate the primes, and display them on a webpage.

How it Works
1. Input a Number 
𝑛
n
The function begins by retrieving the upper limit 
𝑛
n from an HTML input field (numberInput). This is the number up to which prime numbers will be calculated.

2. Mathematical Optimization (Square Root of 
𝑛
n)
The algorithm calculates the square root of 
𝑛
n using Math.sqrt(n), and then rounds it down using Math.floor(). This optimization reduces the number of calculations needed. The Sieve of Eratosthenes only requires checking multiples of numbers up to 
𝑛
n
​
 , as any non-prime number larger than this will have already been marked.

3. Initialize an Array
An array is created to store numbers from 0 to 
𝑛
n, where each element initially holds its corresponding index value. This array will be used to mark non-prime numbers as null.

4. Mark Non-Prime Numbers
The algorithm iterates through the array starting from 2 (the first prime number). For each number 
𝑥
x, if 
𝑥
x is still marked as a number (not null), it marks all multiples of 
𝑥
x (starting from 
𝑥
2
x 
2
 ) as null. These multiples cannot be prime numbers, so they are "crossed off" the list.

The outer loop iterates from 
2
2 to 
𝑛
n
​
 .
The inner loop marks all multiples of 
𝑥
x (starting from 
𝑥
2
x 
2
 ) as null.
5. Filter and Display Primes
After marking the non-prime numbers, the remaining numbers in the array are primes. The array is filtered to remove all null values, and the resulting primes are displayed on the webpage.

Each prime is appended to the HTML container (number-container), and a small delay is introduced for displaying each prime number.

6. Reset the Display Container
Before displaying new results, the container is cleared by setting container.innerHTML = ""; to ensure that the previous results are removed.
