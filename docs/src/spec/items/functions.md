# Functions

> **<sup>Syntax</sup>**\
> _Function_ :\
> &nbsp;&nbsp; _FunctionQualifiers_ `fn` [IDENTIFIER]\
> &nbsp;&nbsp; &nbsp;&nbsp; `(` _FunctionParameters_<sup>?</sup> `)`\
> &nbsp;&nbsp; &nbsp;&nbsp; _FunctionReturnType_<sup>?</sup>\
> &nbsp;&nbsp; &nbsp;&nbsp; `:` [NEWLINE]\
> &nbsp;&nbsp; &nbsp;&nbsp; [INDENT]\
> &nbsp;&nbsp; &nbsp;&nbsp; _FunctionStatements_<sup>*</sup>\
> &nbsp;&nbsp; &nbsp;&nbsp; [DEDENT]\
>
> _FunctionQualifiers_ :\
> &nbsp;&nbsp; `pub`<sup>?</sup>
>
> _FunctionStatements_ :\
> &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;  [_ReturnStatement_]\
> &nbsp;&nbsp; &nbsp;&nbsp; | [_VariableDeclarationStatement_]\
> &nbsp;&nbsp; &nbsp;&nbsp; | [_AssignStatement_]\
> &nbsp;&nbsp; &nbsp;&nbsp; | [_AugmentedAssignStatement_]\
> &nbsp;&nbsp; &nbsp;&nbsp; | [_ForStatement_]\
> &nbsp;&nbsp; &nbsp;&nbsp; | [_WhileStatement_]\
> &nbsp;&nbsp; &nbsp;&nbsp; | [_IfStatement_]\
> &nbsp;&nbsp; &nbsp;&nbsp; | [_AssertStatement_]\
> &nbsp;&nbsp; &nbsp;&nbsp; | [_EmitStatement_]\
> &nbsp;&nbsp; &nbsp;&nbsp; | [_PassStatement_]\
> &nbsp;&nbsp; &nbsp;&nbsp; | [_BreakStatement_]\
> &nbsp;&nbsp; &nbsp;&nbsp; | [_ContinueStatement_]\
> &nbsp;&nbsp; &nbsp;&nbsp; | [_RevertStatement_]\
> &nbsp;&nbsp; &nbsp;&nbsp; | [_Expression_]\
>
> _FunctionParameters_ :\
> &nbsp;&nbsp;  `self`<sup>?</sup> | `self,`<sup>?</sup>   _FunctionParam_ (`,` _FunctionParam_)<sup>\*</sup> `,`<sup>?</sup>
>
> _FunctionParam_ :\
> &nbsp;&nbsp; [IDENTIFIER] `:` [_Types_]
>
> _FunctionReturnType_ :\
> &nbsp;&nbsp; `->` [_Types_]


A _function_ definition consists of name and code block along with an optional
list of parameters and return value. Functions are declared with the
keyword `fn`. Functions may declare a set of *input* arguments,
through which the caller passes arguments into the function, and
the *output* [*type*][_Types_] of the value the function will return to its caller
on completion.

When referred to, a _function_ yields a first-class *value* of the
corresponding zero-sized [*function type*][_FunctionTypes_], which
when called evaluates to a direct call to the function.

A function header ends with a colon (`:`) after which the function body begins.

For example, this is a simple function:

```python
fn answer_to_life_the_universe_and_everything() -> u256:
    return 42
```

A function may accept `self` as a parameter. This gives the function the ability 
to read and mutate contract storage.

Example:

```python
contract Foo:
    my_stored_num: u256

    pub fn my_pure_func():
        pass
        
    pub fn my_self_func(self):
        self.my_stored_num = 26
```

[NEWLINE]: ../lexical_structure/tokens.md#newline
[INDENT]: ../lexical_structure/tokens.md#indent
[DEDENT]: ../lexical_structure/tokens.md#dedent
[IDENTIFIER]: ../lexical_structure/identifiers.md
[_Types_]: ../type_system/types/index.md
[_FunctionTypes_]: ../type_system/types/function.md

[_ReturnStatement_]: ../statements/return.md
[_VariableDeclarationStatement_]: ../statements/let.md
[_AssignStatement_]: ../statements/assign.md
[_AugmentedAssignStatement_]: ../statements/augassign.md
[_ForStatement_]: ../statements/for.md
[_WhileStatement_]: ../statements/for.md
[_IfStatement_]: ../statements/if.md
[_AssertStatement_]: ../statements/assert.md
[_EmitStatement_]: ../statements/emit.md
[_PassStatement_]: ../statements/pass.md
[_BreakStatement_]: ../statements/break.md
[_ContinueStatement_]: ../statements/continue.md
[_RevertStatement_]: ../statements/revert.md
[_Expression_]: ../expressions/index.md