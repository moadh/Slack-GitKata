# Slack-GitKata
Going through some git workflow while creating a funny Slack Bot.

The purpose of this kata is to learn some of the good and effective habits for source control while using git. 

##Introduction

This kata contains 2 workflows 

* Resetting, Checking Out, and Reverting operations
* Merge and Rebase

We'll go through each of them.

In this Kata we will create a custom bot for our newly created Slack channel.

botty-one : A silly little bot that gives weather informations.

<img src = "https://raw.githubusercontent.com/moadh/bottyslack/master/Capture.PNG" width = 500>


we may later include some quote of the day or other services to animate the channel board.



##Instructions

1. Clone the repo and navigate into the directory in your terminal.
```
git clone https://github.com/moadh/Slack-GitKata.git
Cloning into 'Slack-GitKata'...
remote: Counting objects: 5, done.
remote: Compressing objects: 100% (5/5), done.
remote: Total 5 (delta 0), reused 0 (delta 0), pack-reused 0
Unpacking objects: 100% (5/5), done.
Checking connectivity... done.
```
Check the status of the repo, we will be using this command frequently.
```
cd Slack-GitKata
git status
On branch master
Your branch is up-to-date with 'origin/master'.
nothing to commit, working tree clean
``` 

2. Creating feature branch and pushing
```
git pull --rebase # ensure we are up-to-date
git checkout -b weather-api # create a feature branch called "weather-api"
git push origin weather-api
```

Notice that in the SourceTree graph, the develop branch, master and weather-api still share the same HEAD.

2.1 Getting the Location
* Implement _setLocation Method
* Commit locally

Notice the graph in SourceTree the develop branch, master and weather-api still share the same HEAD

We created a branch from master that's not good, we should instead branch from dev
* Reset the last commit (Mixed)
* Stash the modification
* Checkout develop
* Delete weather-api branch
* branch using git-flow a new weather-api
* Apply the stash
* Commit & Push


3. On develop modify : 
* the commands.json file to remove the non necessary alias "weather" [user-1]
* the README file add Authors paragraph [user-2]
* stage modification (git add --all)
* commit & push


4. On weather-api modify the weather.js bot implementation : 
* Implement the request GET https://howcoldisit.com/api/1/weather.json?location=={City},{Country} [user-3]
* Post the result into the channel [user-4]
* Commit & push [user-3]
* Run the app to test on the Slack Channel
Notice that the develop branch diverged from weather-api, maybe it's time to merge ?
* 


