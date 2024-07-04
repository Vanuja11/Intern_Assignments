#!/bin/bash

mkdir Exercise5
cd Exercise5
touch file1.txt file2.txt file3.txt file4.txt
mkdir subDir
tar -cf  archive.tar file1.txt file2.txt file3.txt file4.txt
zip archiveFile file2.txt

