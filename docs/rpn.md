---
layout: document
title: Reverse polish notation calculator
---

RPN Calculator
==============

The last computer calculator you will ever need, bitch!

The orientation of this calculator is not power, but flexibility. The
calculator is meant to be the last calculator you will ever need, in both
desktop and other versions (web?, mobile?). The RPN calculator is delivered
with a simple and strong working base, which only has the required functions to
be used in any field, but nothing more. Over that foundation, anyone can define
macros, variables, and data tables. The interface is similar to a calculator,
quick and responsive. Internally, runs a extensible and powerful python engine.
An advanced user can also write expansion code in python, to provide new
extensive things.

Architecture
------------

The RPN has a simple architecture, oriented to be expansible and a mirror of
the architecture of existing computers.

  - The persistent memory is the memory of the calculator directly written to the disk. This memory has constants which the user can define and use in any moment. Also, the memory has a read only area, in which the builtin capabilities, and loaded modules are stored and referenced. The user can edit and browse the writable memory with single commands.
  - The stack is a volatile memory oriented to be used by the user and by the commands run by the user. This is the core of the computing element, and any computation has to be done in the stack. The stack is private and volatile. Any computing should be done in the stack, not using local memory access.
  - The processor manages the access and manipulation of both the memory and the stack. It has information about how to manipulate primitive objects, and can be expanded with core expansions. More complex to write, but way more powerful.
  - Each of the objects of the stack are inteligent and capable of reacting to different signals by the user. With the primitive objects provided by the calculator, any calculation should be possible. But more objects can be defined.

Primitive objects
-----------------

The processor can deal with some primitive objects that should allow the user
to do most of the required computations. These objects should allow to do
anything a calculator can do, but not more. So for example, matrix
multiplication is not supported because any computer with octave, matlab,
mathematica or similar can do it better. The primitive objects are:

  - Boolean, this is needed in order to allow for logic in the programming of
    the calculator. Just a True/False object.
  - The procedure is a collection of statements, or orders, from the user. The
    user can write procedures using any editor or record them with a macro
    system that records the actions performed.
  - The quantity is a number with possible units. The units and the unit system
    is expansible. It can be also a complex number, fraction, limited precision
    integer, limited precision floating point, arbitrary precision, whatever
    kind of number that can be stored in the stack.
  - The literal works like a string, it can be evaluated to obtain its value
    from the memory, but it can be used as a string if needed (to show
    messages, for example).
  - Finally, a symbol is like a literal, but is supposed to be evaluated. There
    are several ways of evaluating a symbol, and when the user takes any
    calculation with the calculator, usually he's using symbols. Some symbols
    are builtins (impossible to edit them), some other symbols are memory reads
    (like reading the value for a constant).

Also, there is the array, which allows to do batch computing with several
quantities. This will be implemented in the future, probably, so I'm not
documenting it yet.

Expansions
----------

The expansions are a key concept of the calculator. The user can create objects
of the existing primitives, like procedures, constants, data tables, units,
unit frameworks, and text with descriptions. In any case, the user can't create
new objects in a normal expansion, but that's done in a core expansion, which
are not modeled yet.  The expansions are text based, and editable from any text
editor, so no extra software is necesary. It can be shared in a multitude of
ways, including a git repository. So a user can say *download the expansion
guillermobox/physics from my github*, and the software can do it. They can be
loaded and unloaded separately. Also, the user can get their definitions, from
the user writable variables, and create expansions with them, to store them and
organize his work, or to share them using a network connection, or any other
way.  An example of how an expansion for the memory can be made is this:

	h	6.626070040e-34 (Js)
	c0	299792458 (m/s)
	e0	1.6021766208e-19 (C)
	par	BEGIN INV SWAP INV ADD INV END

When the expansion is loaded into the memory, the first pre-tab symbols are
created, and the contents are the parsing result of the right hand side. So, h,
c0 and e0 will evaluate to numbers, and par will evaluate to a procedure, that
adds in parallel resistances. With this, we can define new constants, and
procedures, but how to define new units? I guess in a similar way, but will
depend on how I define the units framework. It may be something like this:

	ft	0.3048006096 (m)
	mi	5280 (ft)
	cal	4.184 (J)
	acre	4.046873e3 (m2)

So they can be defined and changed easily from a text editor, and parsed back
into the calculator to work with them. Maybe i can add some anotation
facilities, so the user can describe the units, or tell the calculator
something about how to handle them. The same can be done if the module wants to
expand the variables in the processor state. This variables are global
readable, and usually they are similar to flags and change the behaviour of the
calculator. For example, the angle interpretation (degree, radian, grad) is
defined in a state variable.

$$\sin(x) \approx 1 + \frac{x^2}{2} - \frac{x^4}{12} + O(x^6)$$

