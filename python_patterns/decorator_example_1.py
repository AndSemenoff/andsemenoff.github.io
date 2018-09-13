#!/usr/bin/env python
# -*- coding: utf-8 -*-
# file: decorator_example_1.py
"""
*What is this pattern about?
The Decorator pattern is used to dynamically add a new feature to an
object without changing its implementation. It differs from
inheritance because the new feature is added only to that particular
object, not to the entire subclass.
*What does this example do?
This example shows a way to add formatting options (boldface and
italic) to a text by appending the corresponding tags (&lt;b&gt; and
&lt;i&gt;). Also, we can see that decorators can be applied one after the other,
since the original text is passed to the bold wrapper, which in turn
is passed to the italic wrapper.
*Where is the pattern used practically?

*Ссылки:
https://refactoring.guru/ru/design-patterns/decorator
https://sourcemaking.com/design_patterns/decorator
*TL;DR80
Adds behaviour to object without affecting its class.
"""

class TextTag(object):
    """Представляет простой текст"""
    def __init__(self, text):
        self._text = text

    def render(self):
        return self._text


class BoldWrapper(TextTag):
    """Декорирует переданный текст тегом &lt;b&gt;"""
    def __init__(self, wrapped):
        self._wrapped = wrapped

    def render(self):
        return f"<b>{self._wrapped.render()}</b>"


class ItalicWrapper(TextTag):
    """Декорирует переданный текст тегом &lt;i&gt;"""
    def __init__(self, wrapped):
        self._wrapped = wrapped

    def render(self):
        return f"<i>{self._wrapped.render()}</i>"

if __name__ == '__main__':
    simple_hello = TextTag("Привет, мир!")
    special_hello = ItalicWrapper(BoldWrapper(simple_hello))
    print(f"Было: {simple_hello.render()}")
    print(f"Декорированный: {special_hello.render()}")

### Вывод в консоль: ###
# Было: Привет, мир!
# Декорированный: &lt;i&gt;&lt;b&gt;Привет, мир!&lt;&frasl;b&gt;&lt;&frasl;i&gt;