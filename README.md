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

2. Creating a new feature branch 
```
git pull --rebase # ensure we are up-to-date
git checkout -b weather-api # create a feature branch called "weather-api"
```

Notice that in the SourceTree graph, the develop branch, master and weather-api still share the same HEAD.

2.1 Getting the Location from a Slack message
* Implement _setLocation Method : if "paris" => Paris, France and the same for florida, tunis and madrid
* Commit locally
* Git status

Shit!! we created a branch from master that's not good, we should instead branch from dev


* Reset the last commit (Mixed)
* Stash the modification
* Checkout develop
* Delete weather-api branch
* branch using git-flow a new weather-api
* Apply the stash
* Commit locally

2.2 Run and test the app
```
node index.js
```
* go to the https://kmplusteam.slack.com/messages/random/
* hit : what's the weather like in paris ?
* hit : what's the weather like in madrid ?


2.3 Delete inadvertently the file util.js
```
 git status
 git commit -a -m "remove unused file"
 git push origin
```
* We will add some modification to the author section in the readme and push the change
```
  git commit -a -m "remove unused file"
  git status
```

* Hopefully someone will notice that the app does not work because of the deleted file
 unfortunately the changes are already on the origin so we can't reset the branch.
* In which case we will need to locate and revert the commit
```
  git log -n 1 -- util.js
  commit 72ebb8035fee09aeabd86b360f31503c346f7db2
  Author: Ben Sassi <Mouadh.BenSassi@Kantarmedia.com>
  Date:   Mon Nov 28 18:15:18 2016 +0100

  git statgit revert us
```




3. On develop modify :

* In the commands.json file add these aliases : "weather", "how-cold-is-it", "Hi", "morning" in the alias array 
of the weather property. [user-1]
```
git commit -a -m "Add bot command aliases"
```
* Now we will remove the non necessary alias "weather", because we did not push the change yet we can do this without creating a new commit. [user-1]
```
git commit --amend
git push origin
```
* IN the README file add Authors paragraph [user-2]
* stage modification
```
git add --all
```
* commit & push
```
git commit -m "Adding authors seection to readme file"
git push origin
git status
```

Notice that the develop branch diverged from weather-api branch, maybe it's time to merge ?

4. On weather-api modify the weather.js bot implementation : 
* Implement the request GET https://howcoldisit.com/api/1/weather.json?location=={City},{Country} [user-3]
* Post the result into the channel [user-4]
* Commit & push [user-3]
* Run the app to test on the Slack Channel



