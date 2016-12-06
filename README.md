# Slack-GitKata
Going through some git workflow while creating a funny Slack Bot.

The purpose of this kata is to learn some of the good and effective habits for source control while using git. 

##Introduction
##Authors

Kamel Ben Hamida

This kata will focus on 2 main workflows 

* Resetting, Checking Out, and Reverting operations
* Merge and Rebase

We'll go through each of them.

In this Kata we will create a custom bot for our newly created Slack channel.

botty-one : A silly little bot that gives weather informations.

<img src = "https://raw.githubusercontent.com/moadh/bottyslack/master/Capture.PNG" width = 500>


we may later include some quote of the day or other services to animate the channel board.



##Instructions

#### Clone the repo and navigate into the directory in your terminal.

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

#### Creating a new feature branch 

```
git pull --rebase # ensure we are up-to-date
git checkout -b weather-api # create a feature branch called "weather-api"
```

Notice that in the SourceTree graph, the develop branch, master and weather-api still share the same HEAD.

#### Getting the Location from a Slack message
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

#### Run and test the app
```
node index.js
```
* go to the https://kmplusteam.slack.com/messages/random/
* hit : what's the weather like in paris ?
* hit : what's the weather like in madrid ?


#### Delete "inadvertently" the file util.js
* Delete util.js and add some modification to the author section of the readme file and then :
```
 git commit -a -m "update README"
 git push origin
```

* We will add some other modification to the author section in the readme and push the change
```
  git commit -a -m "update README"
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

  git revert 72ebb803
  error: could not revert 72ebb80... update README
  hint: after resolving the conflicts, mark the corrected paths
  hint: with 'git add <paths>' or 'git rm <paths>'
  hint: and commit the result with 'git commit'
```

* We should have a conflict on the README file
* use source tree to resolve it using theirs version or an external tool like TortoiseMerge.
```
Mouadh.bensassi@KNPIRD0073 MINGW64 /d/work/stuff/Slack/Slack-GitKata (develop|REVERTING)
$ git status
On branch develop
Your branch is ahead of 'origin/develop' by 8 commits.
  (use "git push" to publish your local commits)
You are currently reverting commit 72ebb80.
  (all conflicts fixed: run "git revert --continue")
  (use "git revert --abort" to cancel the revert operation)

Changes to be committed:
  (use "git reset HEAD <file>..." to unstage)

        new file:   util.js


```

* Finally a simple instruction and we had successfully reverted the commit, notice that the branch is still in reverting state.
```
$ git revert --continue
[develop cb6246b] Revert "remove unused file"
 1 file changed, 23 insertions(+)
 create mode 100644 util.js
```

* Run and test the app
```
node index.js
```
* If it's still working share your work
```
git push origin
git status
```

#### On develop modify :

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

#### On weather-api modify the weather.js bot implementation

* Implement the request GET https://howcoldisit.com/api/1/weather.json?location=={City},{Country} [user-3]
* Implement the _getRandomDunno function to return funny message for all freakish questions and change the methods orders [user-4]
* Post the result into the channel and change the methods orders [user-5]
* Each time you commit add a comment in the comment section of the readme :)
* Commit & push [user-3]
* We will probably run into some rebase conflict
* After resolving these conflicts, run the app to test it on the Slack Channel


#### On develop Modify the readme adding a comment section

* At least three users need to add their comments on this Kata. 
 

Notice that the develop branch diverged from weather-api branch, maybe it's time to merge ? hi hi
At this stage a merge should be funny !!





