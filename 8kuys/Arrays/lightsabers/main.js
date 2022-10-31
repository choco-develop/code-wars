/**Kata Training

Home
Report home for your next assignment
TRAINING
Practice
Complete challenging Kata to earn honor and ranks. Re-train to hone technique
Freestyle Sparring
Take turns remixing and refactoring others code through Kumite
CAREER
Opportunities
Find your next career challenge – powered by Qualified Jobs
COMMUNITY
Leaderboards
Achieve honor and move up the global leaderboards
Chat
Join our Discord server and chat with your fellow code warriors
Discussions
View our Github Discussions board to discuss general Codewars topics
ABOUT
Docs
Learn about all of the different aspects of Codewars
choco-develop Avatar
6 kyu
292
8 kyu
How many lightsabers do you own?
1424279% of 2,78511,060 of 23,965kylehill2 Issues Reported
 JavaScript
Node v14.x
VIM
EMACS
Instructions
Output
Inspired by the development team at Vooza, write the function that

accepts the name of a programmer, and
returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

Note: your function should have a default parameter.

For example(Input --> Output):

"anyone else" --> 0
"Zach" --> 18 */


function howManyLightsabersDoYouOwn(name) {
    return name==="Zach"?18:0
  }