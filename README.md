# sass_test
# *** Info for start ***
mkdir project_name=sass_test
cd $project_name

# GIT ***
git clone https://github.com/woodkill00/sass_test.git .
# *** GIT

# VENV ***
python3 -m venv venv
source venv/bin/activate
# *** VENV

# PIP ***
python3 -m pip install --upgrade pip
pip install -r requirements.txt
# *** PIP

# GIT UPDATE***

# *** GIT UPDATE

# NVM***
# use nvm = node version manager
# https://github.com/nvm-sh/nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# nvm syntax =
nodeVersion=16.15.1
nvm install $version
# nvm use <version-number>
# nvm ls

# get latest version of npm
nvm install-latest-npm

# ***NVM



# NPM ***
# Logging = https://docs.npmjs.com/cli/v8/using-npm/logging
# Error logging = https://www.npmjs.com/package/errorlog
# https://www.npmjs.com/package/log-process-errors
# npm install -D log-process-errors

# syntax =
packageName=postcss
npm install $packageName --save-dev

npm audit fix

# mkdir = lint-staged.config.js
# "precommit": "lint-staged"
# "precommit": "npn run format && it add .",


# use for the first time on an old set of code
# https://medium.com/millennial-falcon-technology/reformatting-your-code-base-using-prettier-or-eslint-without-destroying-git-history-35052f3d853e

# *** NPM


# MIME TYPES
# https://developer.mozilla.org/en-US/docs/Learn/Server-side/Configuring_server_MIME_types


