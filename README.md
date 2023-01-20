# Commands-simulator
School project which goal is to simulate Intel 8086 commands like mov and xchg for ax, bx, cx and dx registers.

# Description
The presented simulator was written using technologies such as html, css and javascript. 

- Under the heading
"registers" there are fields for individual registers. It is possible to enter only and exclusively in each of the fields
value in hexadecimal code, additionally, the maximum length of the value is 4. If the value is saved, it will be different
than in the hexadecimal code, it will not be possible to perform any operation, additionally a message will be displayed
an error alert.

- Under the heading "operations" there is a list of drop-down options through which we can choose
the type of operation, e.g. mov or xchg, and which registers are to be used in the operation. With the "config
operation" we commit our operation and we can see live (without refreshing) how the value in the selected register
has changed.
