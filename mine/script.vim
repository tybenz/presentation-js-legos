set laststatus=0
color github

:bufdo %s/\s\+$//e

call matchadd("VisualNOS", "(\\(\\_.*slide 006\\)\\@=")
call matchadd("Error", "_\\(\\_.*slide 005\\)\\@=")


noremap <leader>q :qall!<CR>
