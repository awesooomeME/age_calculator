# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![Screenshot](screenshot.png)

### Links

- Solution URL: [Solution URL here](https://github.com/awesooomeME/age_calculator)
- Live Site URL: [Live site URL here](https://age-calculator-sable-zeta.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind](https://https://tailwindcss.com//) - For styles
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

For this project I deviated with the requirements. Instead of validating some values, I didnt allow the user to input
a year that is ahead of the current year, a month greater than 12, and a day greater than 31.

So, the only validation that I should be wary of is if the month and day would result to a date to the future, and/or
an invalid date such as the 31st of april.

### Continued development

### Useful resources
- [resource 1](https://livebook.manning.com/book/next-js-in-action/welcome/v-2/) 
    - Great book for React introduction

- [resource 2](https://www.joshwcomeau.com/css/custom-css-reset/)
    - CSS Reset that I used

## Author

- Github - [awesooomeME](https://github.com/awesooomeME)
- Frontend Mentor - [@awesooomeME](https://www.frontendmentor.io/profile/awesooomeME)