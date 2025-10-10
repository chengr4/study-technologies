# GDB

- QEMU has a built-in GDB server
- GDB always reads .gdbinit when starting

## Commands

| Command | Description |
| ------- | ----------- | 
| b <function name> | set a breakpoint at function |
| b <file>:<line number> | set a breakpoint at specific line in specific file |
| b *0x80000000 | set a breakpoint at function pointer |
| b + <offset> | set a breakpoint at offset from current line (PC) |
| tbreak | one-time breakpoint | 
| c | continue running the program |
| backtrace | show call stack |
| step or s or n | step into next line of code |
| p <variable name> | print variable value |

- `p /x *p`: print value pointed to by pointer `p` in hex
    - `*p`: dereference pointer
    - `/x`: print in hex

Remove breakpoint:

1. `infro breakpoints`
2. `delete [number]`

### TUI

- Built into GDB
- `tui enable`/`tui disable`
- `layout [src/asm/reg]`: change which panels are visible
- `focus [src/asm/reg]`: change which panel is focused
