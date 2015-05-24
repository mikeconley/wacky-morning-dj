# Wacky Morning DJ

Created in a fit of insomnia, so that's why the code is probably pretty rough - but it gets the job done.

# Installation

I've written this to run on my Macbook. In theory, it could probably work for other platforms, but I haven't tried it there.

Requirements off the bat: [node](https://nodejs.org/).

1. git clone https://github.com/mikeconley/wacky-morning-dj.git
2. cd wacky-morning-dj
3. npm install
4. npm start

You should then browse to http://localhost:3000 to control it.

# Adding sounds

You'll want to add sounds for this to be any use at all. I put them in a /sounds folder right beneath /wacky-morning-dj. Organize them in whatever folder hierarchy that you wish.

Then create a sounds.json file to point to each sound you've added. Check out sounds.json.sample for an idea of how to do that.

Then restart the server (Ctrl-c to kill it, npm start to restart it) and you should be off to the races!

