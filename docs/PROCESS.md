# Process Documentation - Base Tier

### What did you build?
I continued to iterate on my tip calculator React function and added a number of people feature that allows for users to also calculate bill amount based also on the amount of people who will be splitting the bill and displays the calculated overall total amount and the individual total for every person.
  
### How did micro-iteration feel? 
At first, I thought working in small steps would be frustrating because I like to work broadly and then address smaller things as I go and polish, but it actually proved a lot easier to follow along with than I thought, especially after having gone through the planning with Claude. From there, I simply had to ask for it to proceed to the next step once I was ready to move on. 

### What did self-review catch? 
There were many little bugs that Claude noticed when I asked it to review its code after the second step, but it highlighted two as the biggest issues that probably should be addressed: stale results after editing changes where the total and per-person totals would remain still visible while a user was editing the bill amount or tip, and the lack of input validation for the number of people input field to make sure that only positive whole numbers are inputted and not decimals, negative numbers, or non-integers. I asked it to implement the stale results changes right then and to table the validation for later, knowing that Step 4 would address that issue. 

### Tool impressions
I would say that what I liked about Claude Code Web was that it still had the same consistent level of ease I like working with the terminal and the VS Code extension. I also love that you could be able to work back and forth between the Web version and the VS Code extension and terminal depending on if you want to work locally with files on your machine or with your GitHub repositories. On the other hand, what I didn't like was the setup of Claude Code Web because it felt a little confusing for me to setup. The look at first when I started made it look like I was maybe doing something wrong or that Claude Code Web wasn't available to use but I then eventually figured it out. I just think that the UI for setting up Claude Code and Claude Code Web could be a little more user-friendly and clear as to the steps that need to be taken once you begin the process.
