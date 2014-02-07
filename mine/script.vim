set laststatus=0
color github

:bufdo %s/\s\+$//e

call matchadd("VisualNOS", "(\\(\\_.*slide 004\\)\\@=")
call matchadd("Error", "_\\(\\_.*slide 003\\)\\@=")
