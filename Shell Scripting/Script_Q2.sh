#!/bin/bash

mkdir -p results archive
echo "Filename | Word Count" > results/TotalWordCount.txt


for file in *.txt;
do

	if [ -f "$file" ];
	then

	filename=$(basename "$file")
	#filename_no_ext="${filename%.*}"
	
	echo
	echo "filename: "$file
	echo
	
	total_word_count=0
	
	while IFS= read -r line; do
		echo $line
		
		if [[ $line == IMPORTANT* ]]
		then 
			word_count=$(echo "$line" | wc -w)
			(( total_word_count += word_count ))
		fi
		echo $total_word_count
	done < "$file"
	
#	mv "$file" archive/"$filename"
	
	total_word_count=$(( total_word_count * 4 ))
	echo "$filename | $total_word_count" >> results/TotalWordCount.txt
	
	fi
	
	
	
done
