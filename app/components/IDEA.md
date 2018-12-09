WHY?
- Easy to copy/paster without library(core)
- Easy to reading and maintain code, no complex code
- Using most population technical stack
- Consistent code
- MIT license
- Rich component
- Most component have both UNCONTROLLED COMPONENT and CONTROLLED COMPONENT
- Overirre many lib population(not core, just provide optional Component)
- lodash, classnames are libs i using to code Component core

HOW?
- Using scss but don't using mixin, because it easy for everyone to undertand and transform to less or styled-component by tool
- Just using scss variable and nesting rule
- Using a little css of Tailwindcss to easy using if you used tailwind before
- Using BEM
- Using rem and em unit instead px
- Because it just teample and license MIT so you have 100% to upgrate to fix for your project requiment
- Using ant design(just design idea, not copy code)
- Most component have both UNCONTROLLED COMPONENT and CONTROLLED COMPONENT
- Using default convention from react-boilerplate(eslint thing)

WHAT ISSUES
- Some Duplicate code, why?. Because i hate complex code and open many file to understand a simple logic
Howerver, it's not really duplicate code. When webpack build files, it's just same KB or heighvy a little bit

- Some Duplicate css, why?. Because i don't using mixins. easy to tranform/translate to less or orther other thing. look like css but have nesting rule and variables
