#!/bin/sh
# bash script to automate git add and git push
GITDIR=".git"
if [ ! -d "$GITDIR" ];
then
    echo "No git repository found"
    exit
fi

# ensure commit message is passed, and ensure an empty string is not the argument
if [ -z "$1" ];
then
    echo "No commit message supplied"
    exit
fi
git add .
git commit -m "$1"
git push origin master