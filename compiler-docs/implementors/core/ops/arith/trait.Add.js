(function() {var implementors = {};
implementors["fe_common"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"struct\" href=\"fe_common/struct.Span.html\" title=\"struct fe_common::Span\">Span</a>&gt; for <a class=\"struct\" href=\"fe_common/struct.Span.html\" title=\"struct fe_common::Span\">Span</a>","synthetic":false,"types":["fe_common::span::Span"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"fe_common/struct.Span.html\" title=\"struct fe_common::Span\">Span</a>&gt;&gt; for <a class=\"struct\" href=\"fe_common/struct.Span.html\" title=\"struct fe_common::Span\">Span</a>","synthetic":false,"types":["fe_common::span::Span"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.54.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html\">&amp;'a </a>T&gt;&gt; for <a class=\"struct\" href=\"fe_common/struct.Span.html\" title=\"struct fe_common::Span\">Span</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"fe_common/struct.Span.html\" title=\"struct fe_common::Span\">Span</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html\">&amp;'a </a>T, Output = Self&gt;,&nbsp;</span>","synthetic":false,"types":["fe_common::span::Span"]},{"text":"impl&lt;'a, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.54.0/std/primitive.reference.html\">&amp;'a </a>T&gt; for <a class=\"struct\" href=\"fe_common/struct.Span.html\" title=\"struct fe_common::Span\">Span</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"fe_common/trait.Spanned.html\" title=\"trait fe_common::Spanned\">Spanned</a>,&nbsp;</span>","synthetic":false,"types":["fe_common::span::Span"]}];
implementors["fe_parser"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.54.0/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;&amp;'_ <a class=\"struct\" href=\"fe_parser/lexer/struct.Token.html\" title=\"struct fe_parser::lexer::Token\">Token</a>&lt;'a&gt;&gt; for <a class=\"struct\" href=\"fe_parser/node/struct.Span.html\" title=\"struct fe_parser::node::Span\">Span</a>","synthetic":false,"types":["fe_common::span::Span"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()