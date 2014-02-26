#!/bin/bash

# Clean up
rm -Rf presentation/*

# Initial generate
vimdeck generate slides.md

# Replace hand-made files
cp mine/spam.md presentation/slide004.md
cp mine/jquery.md presentation/slide006.md
cp mine/adobe.md presentation/slide005.md
cp mine/cover1.md presentation/slide008.md
cp mine/cover2.md presentation/slide009.md
cp mine/cover3.md presentation/slide010.md

# Prepend custom vim script
cat mine/script.vim > /tmp/script.vim
cat presentation/script.vim >> /tmp/script.vim
cp /tmp/script.vim presentation/script.vim

# Open it up!
vimdeck open
