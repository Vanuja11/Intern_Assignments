#!/bin/bash

#4. Searching and Filtering:
#- Create a file named "data.txt" with some text content.
#- Use the `cat` command to display the contents of "data.txt".
#- Use the `grep` command to search for a specific word or pattern in "data.txt".
#- Use the `grep` command with the `-r` option to search for the same word or pattern recursively in a directory.

mkdir -p Exercise4
cd Exercise4
touch data.txt
echo "Vanuja Red BLACK cat apple dog phone" > data.txt
cat data.txt
grep "hi" data.txt
grep "Red" data.txt
grep -r "Red" .
